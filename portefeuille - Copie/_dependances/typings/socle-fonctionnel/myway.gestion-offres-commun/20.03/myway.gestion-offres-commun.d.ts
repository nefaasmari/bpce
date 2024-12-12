
declare module GestionGeneriqueOffres.Commun {
}

declare module GestionGeneriqueOffres.Types {
    interface ICodeMarche {
        codeActeGestion: string;
        libelleActeGestion: string;
        codeCanal: string;
        libelleCanal: string;
        codeMarche: string;
        codeEtablissement: string;
    }
    interface ICaracteristiques {
        codeActeGestion: string;
        libelleActeGestion: string;
        codeCanal: string;
        libelleCanal: string;
        codeEntiteVente: string;
        libelleEntiteVente: string;
        codeModeVente: string;
        libelleTypeProcessusVente: string;
        numeroOffre: number;
        idtProcessusSi: string;
        identifiantProduitService: number;
        nomTechniqueLong: string;
        codeModeVente1: string;
        libelleProcessusVente: string;
        codeSignatureOffre: string;
        libelleSignatureOffre: string;
        codeTypePersonnaliteJuridique: string;
        indicateurDroitRetractation: string;
        libelleIndicChoixRetractation: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        dateCreationEnregistrement: Date;
        dateFinValiditeElement: Date;
        nomTechniquePs: string;
        codeModaliteDetentionPs: string;
        codeEligibiliteEaiFatcaPs: string;
        dateDebutCommercialisationPs: Date;
        dateFinCommercialisationPs: Date;
        ageMinimumSouscriptionPs: number;
        ageMaximumSouscriptionPs: number;
        indicActivationSuspreactiv: string;
        indicActivationDesactivation: string;
        codeEtablissement: string;
    }
    interface ICapaciteJuridique {
        codeActeGestion: string;
        libelleActeGestion: string;
        codeCanal: string;
        libelleCanal: string;
        codeCapaciteJuridique: string;
        codeEtablissement: string;
    }
    interface IModeComposition {
        libelleActeGestion: string;
        codeActeGestion: string;
        libelleCanal: string;
        codeCanal: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        codeEtablissement: string;
    }
    interface ICaracteristiqCatalog {
        codeMarche: Array<ICodeMarche>;
        modeComposition: Array<IModeComposition>;
        capaciteJuridique: Array<ICapaciteJuridique>;
        caracteristiques: Array<ICaracteristiques>;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ICaracteristiqPrdServ {
        support: Array<ISupport>;
        periodeGestionDomaine: Array<IPeriodeGestionDomaine>;
        definition: IDefinition;
        transformation: Array<ITransformation>;
    }
    interface ISupport {
        identifiantProduitService: number;
        identifiantPsSupport: number;
        nomCommercialPs: string;
    }
    interface ITransformation {
        identifiantProduitService: number;
        identifiantPsTransformation: number;
        nomCommercialPs: string;
    }
    interface IPeriodeGestionDomaine {
        identifiantProduitService: number;
        codeDomaine: string;
        dateDebutGestion: Date;
        dateFinGestion: Date;
    }
    interface IDefinition {
        identifiantProduitService: number;
        nomTechniqueCourt: string;
        nomCodeProduitCencep: string;
        codeProduit: string;
        sousCodeProduitService: string;
        nomCommercialLong: string;
        nomTechniqueLong: string;
        codeTypePersonnaliteJuridique: string;
        codeDeviseMontantOperation: string;
        codeModeGestionDansClient: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        codeFamilleGestionLocaleContrat: string;
        codeModeIdentificationDetenteur: string;
        codeModeLocalisationIdentifiant: string;
        codeModeIdentificationGuichet: string;
        dateMajEnregistrement: Date;
        codeAffichageLibelleProduit: string;
        codeDecompositionPs: string;
        nomCommercialPs: string;
        nomCommercialCourtPs: string;
        nomTechniquePs: string;
        codeNiveauGeoSpecificationPs: string;
        identifiantCencepProduitservice: string;
        sousCodeCencepProduitservice: string;
        nomSousCodePsCencep: string;
        codeServiceUnPs: string;
        sousCodeServicePs: string;
        idtPsChezPartenaireCommercial: string;
        dateSpecificationPs: Date;
        codeModaliteDetentionPs: string;
        codeFamilleGestionPs: string;
        codeAffichageReferencePs: string;
        codePsExterne: string;
        nbcompositionsPs: number;
        typePsFamille: string;
        typePsAssurance: string;
        ageMinimumSouscriptionPs: number;
        ageMaximumSouscriptionPs: number;
        indicateurEligibiliteFactaPs: string;
    }
}

declare module GestionGeneriqueOffres.Types.Cloture {
    interface ICatalogueNode {
        /**
         * Recherche le noeud parent d'un produit du catalogue. [non testé]
         */
        rechercherAscendant(node: CatalogueNode): CatalogueNode;
        /**
         * Indique si la détention du P/S est autorisée par la personne passée en paramètre
         */
        isDetentionAutorisee(codeProduitService: number, personne: Types.Tiers.Personne | Types.Tiers.PersonneMorale): boolean;
        /**
         * Indique si la détention du P/S est autorisée par l'entité passée en paramètre
         */
        isDetentionAutorisee(codeProduitService: number, entite: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr): boolean;
        /**
         * Récupère un produit identifié par codeProduitService du catalogue. Undefined si le produit n'est pas trouvé.
         */
        getProduit(codeProduitService: number): CatalogueNode;
        /**
         * Renvoie le nombre de produits actifs (avec au moins une propositionavec au moins un acte de gestion) dans un assemblage
         *
         *
         * @param {CatalogueNode} assemblage Un assemblage
         * @returns vrai si l'assemblage ne contient qu'un produit
         */
        nombreDeProduitsSignificatifsDansAssemblage(): number;
        /**
         * Parcourt récursivement le catalogue et applique fonctionAExecuter à chaque noeud de l'arbre. Arrête le parcours lorsque
         * fonctionAExecuter renvoie faux.
         * fonctionAExecuter est une fonction booléenne dont la tâche est d'effectuer un test sur un élément du catalogue.
         * Elle accepte les arguments suivants :
         * - Un élément (P/S) du catalogue
         * - Un argument de n'importe quel type représentant la valeur à tester vis à vis du P/S
         * - Un resultat de n'importe quel type qui sera au final restitué par parcourirCatalogue.
         * ATTENTION : resultat DOIT être un objet et ne DOIT PAS être un type primitif (ni string, ni number,
         * ni boolean etc. 12/02/2016 Quoique avec une string ca semble fonctionner, cf ).
         */
        parcourirCatalogue(fonctionAExecuter: (node: CatalogueNode, args: any, resultat: any, contexte?: Types.ContexteCgo, origine?: OrigineProduit) => boolean, argument: any, resultat: any, contexte?: Types.ContexteCgo): any;
        /**
         * Recherche un produit dans un assemblage
         * @param [produitARechercher] : Le produit à rechercher
         * @return vrai si ile produit est trouvé, faux sinon
         * renvoie faux si this n'est pas un assemblage
         */
        rechercherProduitDansAssemblage(produitARechercher: ProduitService): boolean;
        /**
         * Minimise en libellé de MAJ en min
         *
         * @param {string} libelle: Libellé
         * @return string : Libellé en min
         */
        minimiserLibelleProduitService(): string;
    }
    /**
     * Description d'un noeud du catalogue.
     * Le catalogue se présente sous la forme d'un arbre.
     * La racine de l'arbre est l'offre elle-même.
     * Les noeuds de l'arbre sont les assemblages.
     * Les feuilles de l'arbre sont les produits/services simples.
     */
    class CatalogueNode implements ICatalogueNode {
        private __PRODUIT;
        private _produitService;
        /**
         * La description du produit/service
         */
        produitService: ProduitService;
        private _visible;
        /**
         * Le fait que la tuile soit affichée ou pas
         */
        visible: boolean;
        private _cochee;
        /**
         * L'état coché de la tuile : cochée ou non cochée
         */
        cochee: boolean;
        private _inactif;
        /**
         * Le fait que la tuile soit bloquée en saisie ou pas
         */
        inactif: boolean;
        private _ascendant;
        /**
         * Le noeud parent
         */
        ascendant: CatalogueNode;
        /**
         * Les noeuds descendants
         */
        private _descendants;
        descendants: CatalogueNode[];
        /**
         * Recherche le noeud parent d'un produit du catalogue (remplacement de la propriété ascendant qui a du être supprimée car elle empêchait de sérialiser le catalogue
         * (références circulaires).
         */
        rechercherAscendant: (node: CatalogueNode) => CatalogueNode;
        /**
         * Indique si la personne/entité passée en paramètre a le droit de détenir le produit de n° codeProduitService
         * Utilise parcoursCatalogue
         */
        isDetentionAutorisee: (codeProduitService: number, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale) => boolean;
        /**
         * Restitue le P/S par défaut d'un assemblage
         */
        getProduitParDefautAssemblage: () => CatalogueNode;
        /**
         * Vérifie si le P/S est le P/S par défaut d'un assemblage
         */
        testerProduitParDefautAssemblage: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale) => boolean;
        /**
         * Renvoie vrai si le produit existe dans le catalogue. Utilise parcoursCatalogue et testProduitExiste
         */
        verifierExistenceProduit: (codeProduitService: number) => boolean;
        /**
         *  Permet de récupérer un produit du catalogue via son n° de produit.
         */
        getProduit: (codeProduitService: number) => CatalogueNode;
        /**
         * Renvoie le nombre de produits actifs (avec au moins une propositionavec au moins un acte de gestion) dans un assemblage
         *
         * @param {CatalogueNode} assemblage Un assemblage
         * @returns vrai si l'assemblage ne contient qu'un produit
         */
        nombreDeProduitsSignificatifsDansAssemblage: () => number;
        /**
         * Désactive les tuiles du panier pour lesquelles le produit est repris par toutes les personnes / entités
         */
        desactiverProduitRepris: () => void;
        /**
         * Désactive les tuiles du panier pour lesquelles un produit BAD est détenu par toutes les personnes / entités
         * LE JOUR OU LA REGLE DE GESTION EN DUR QUI PERMET D'AJOUTER LES PRODUITS BAD AU PANIER EST SUPPRIMEE, IL FAUDRA
         * AUSSI SUPPRIMER CETTE FONCTION.
         */
        desactiverProduitBad: (contexte: Types.ContexteCgo) => void;
        /**
         *  Permet de déterminer si la personne peut détenir le produit
         */
        private verifierAssociationProduitPersonne;
        /**
         *  Permet de déterminer si l'entité peut détenir le produit
         */
        private verifierAssociationProduitEntite;
        /**
         * Parcourt récursivement le catalogue et applique fonctionAExecuter à chaque noeud de l'arbre. Arrête le parcours lorsque
         * fonctionAExecuter renvoie faux.
         * fonctionAExecuter est une fonction booléenne dont la tâche est d'effectuer un test sur un élément du catalogue.
         * Elle accepte les arguments suivants :
         * - Un élément (P/S) du catalogue
         * - Un argument de n'importe quel type représentant la valeur à tester vis à vis du P/S
         * - Un resultat de n'importe quel type qui sera au final restitué par parcourirCatalogue.
         * ATTENTION : resultat DOIT être un objet et ne DOIT PAS être un type primitif (ni string, ni number,
         * ni boolean etc. 12/02/2016 Quoique avec une string ca semble fonctionner, cf ).
         */
        parcourirCatalogue: (fonctionAExecuter: (node: CatalogueNode, args: any, resultat: any, contexte?: Types.ContexteCgo, origine?: OrigineProduit) => boolean, argument: any, resultat: any, contexte?: Types.ContexteCgo) => any;
        /**
         * Recherche un produit dans un assemblage
         * @param [produitARechercher] : Le produit à rechercher
         * @return vrai si ile produit est trouvé, faux sinon
         * renvoie faux si this n'est pas un assemblage
         */
        rechercherProduitDansAssemblage: (produitARechercher: Types.Cloture.ProduitService) => boolean;
        gererEtatTuile: (detenteurs: Tiers.Personne[] | Types.Tiers.PersonneMorale[] | InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[] | Types.Tiers.Procuration[], composition: CompositionOffre, assemblage: CatalogueNode) => void;
        minimiserLibelleProduitService: () => string;
        constructor(produitService: ProduitService, ascendant: CatalogueNode, descendants: CatalogueNode[]);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ICatalogueNode {
        /**
         * Recherche le noeud parent d'un produit du catalogue. [non testé]
         */
        rechercherAscendant(node: CatalogueNode): CatalogueNode;
        /**
         * Indique si la détention du P/S est autorisée par la personne passée en paramètre
         */
        isDetentionAutorisee(codeProduitService: number, personne: Types.Tiers.Personne | Types.Tiers.PersonneMorale): boolean;
        /**
         * Indique si la détention du P/S est autorisée par l'entité passée en paramètre
         */
        isDetentionAutorisee(codeProduitService: number, entite: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr): boolean;
        /**
         * Restitue le P/S par défaut d'un assemblage
         */
        getProduitParDefautAssemblage(): CatalogueNode;
        /**
         * Vérifie si le P/S est le P/S par défaut d'un assemblage
         */
        testerProduitParDefautAssemblage(detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale): boolean;
        /**
         * Récupère un produit identifié par codeProduitService du catalogue. Undefined si le produit n'est pas trouvé.
         */
        getProduit(codeProduitService: number): CatalogueNode;
        /**
         * Désactive les tuiles du panier pour lesquelles le produit est repris par toutes les personnes / entités
         */
        desactiverProduitRepris(): void;
        /**
         * Désactive les tuiles du panier pour lesquelles un produit BAD est détenu par toutes les personnes / entités
         * LE JOUR OU LA REGLE DE GESTION EN DUR QUI PERMET D'AJOUTER LES PRODUITS BAD AU PANIER EST SUPPRIMEE, IL FAUDRA
         * AUSSI SUPPRIMER CETTE FONCTION.
         */
        desactiverProduitBad(contexte: Types.ContexteGgo): void;
        /**
         * Renvoie le nombre de produits actifs (avec au moins une propositionavec au moins un acte de gestion) dans un assemblage
         *
         *
         * @param {Types.CatalogueNode} assemblage Un assemblage
         * @returns vrai si l'assemblage ne contient qu'un produit
         */
        nombreDeProduitsSignificatifsDansAssemblage(): number;
        /**
         * Parcourt récursivement le catalogue et applique fonctionAExecuter à chaque noeud de l'arbre. Arrête le parcours lorsque
         * fonctionAExecuter renvoie faux.
         * fonctionAExecuter est une fonction booléenne dont la tâche est d'effectuer un test sur un élément du catalogue.
         * Elle accepte les arguments suivants :
         * - Un élément (P/S) du catalogue
         * - Un argument de n'importe quel type représentant la valeur à tester vis à vis du P/S
         * - Un resultat de n'importe quel type qui sera au final restitué par parcourirCatalogue.
         * ATTENTION : resultat DOIT être un objet et ne DOIT PAS être un type primitif (ni string, ni number,
         * ni boolean etc. 12/02/2016 Quoique avec une string ca semble fonctionner, cf ).
         */
        parcourirCatalogue(fonctionAExecuter: (node: CatalogueNode, args: any, resultat: any, contexte?: Types.ContexteGgo | Types.ContexteGgho, origine?: OrigineProduit) => boolean, argument: any, resultat: any, contexte?: Types.ContexteGgo | Types.ContexteGgho): any;
        /**
         * Filtre le catalogue en fonction d'une liste de personne et d'entités
         */
        /**
         * Recherche un produit dans un assemblage
         * @param [produitARechercher] : Le produit à rechercher
         * @return vrai si ile produit est trouvé, faux sinon
         * renvoie faux si this n'est pas un assemblage
         */
        rechercherProduitDansAssemblage(produitARechercher: Types.ProduitService): boolean;
        /**
         * Gère les marqueurs (coche) et l'état (actif/inactif) de la tuile associée à la tuile du produit dans le catalogue
         */
        /**
         * Gère les marqueurs (coche) et l'état (actif/inactif) de la tuile.
         *
         * @param {Tiers.Personne[] | InformationEntiteTitulaire[]} detenteurs : Personnes de l'offre pour un produit géré en mode personne, sinon, entités.
         * @param {CompositionOffre} composition Le panier
         * @param {CatalogueNode} assemblage L'assemblage auquel appartient le produit si ce produit est détenu via un assemblage
         * @returns Rien
         */
        gererEtatTuile(detenteurs: Tiers.Personne[] | Types.Tiers.PersonneMorale[] | InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[] | Types.Tiers.Procuration[], composition: CompositionOffre, assemblage: CatalogueNode): void;
        /**
         * Minimise en libellé de MAJ en min
         *
         * @param {string} libelle: Libellé
         * @return string : Libellé en min
         */
        minimiserLibelleProduitService(): string;
    }
    /**
     * Description d'un noeud du catalogue.
     * Le catalogue se présente sous la forme d'un arbre.
     * La racine de l'arbre est l'offre elle-même.
     * Les noeuds de l'arbre sont les assemblages.
     * Les feuilles de l'arbre sont les produits/services simples.
     */
    class CatalogueNode implements ICatalogueNode {
        private __PRODUIT;
        private _produitService;
        /**
         * La description du produit/service
         */
        produitService: ProduitService;
        private _visible;
        /**
         * Le fait que la tuile soit affichée ou pas
         */
        visible: boolean;
        private _cochee;
        /**
         * L'état coché de la tuile : cochée ou non cochée
         */
        cochee: boolean;
        private _inactif;
        /**
         * Le fait que la tuile soit bloquée en saisie ou pas
         */
        inactif: boolean;
        private _ascendant;
        /**
         * Le noeud parent
         */
        ascendant: CatalogueNode;
        /**
         * Les noeuds descendants
         */
        private _descendants;
        descendants: CatalogueNode[];
        /**
         * Recherche le noeud parent d'un produit du catalogue (remplacement de la propriété ascendant qui a du être supprimée car elle empêchait de sérialiser le catalogue
         * (références circulaires).
         */
        rechercherAscendant: (node: CatalogueNode) => CatalogueNode;
        /**
         * Indique si la personne/entité passée en paramètre a le droit de détenir le produit de n° codeProduitService
         * Utilise parcoursCatalogue
         */
        isDetentionAutorisee: (codeProduitService: number, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale) => boolean;
        /**
         * Restitue le P/S par défaut d'un assemblage
         */
        getProduitParDefautAssemblage: () => CatalogueNode;
        /**
         * Vérifie si le P/S est le P/S par défaut d'un assemblage
         */
        testerProduitParDefautAssemblage: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale) => boolean;
        /**
         * Renvoie vrai si le produit existe dans le catalogue. Utilise parcoursCatalogue et testProduitExiste
         */
        verifierExistenceProduit: (codeProduitService: number) => boolean;
        /**
         *  Permet de récupérer un produit du catalogue via son n° de produit.
         */
        getProduit: (codeProduitService: number) => CatalogueNode;
        /**
         * Renvoie le nombre de produits actifs (avec au moins une propositionavec au moins un acte de gestion) dans un assemblage
         *
         * @param {Types.CatalogueNode} assemblage Un assemblage
         * @returns vrai si l'assemblage ne contient qu'un produit
         */
        nombreDeProduitsSignificatifsDansAssemblage: () => number;
        /**
         * Désactive les tuiles du panier pour lesquelles le produit est repris par toutes les personnes / entités
         */
        desactiverProduitRepris: () => void;
        /**
         * Désactive les tuiles du panier pour lesquelles un produit BAD est détenu par toutes les personnes / entités
         * LE JOUR OU LA REGLE DE GESTION EN DUR QUI PERMET D'AJOUTER LES PRODUITS BAD AU PANIER EST SUPPRIMEE, IL FAUDRA
         * AUSSI SUPPRIMER CETTE FONCTION.
         */
        desactiverProduitBad: (contexte: Types.ContexteGgo) => void;
        /**
         * Permet de construire l'objet données assemblage qui permet, lorsqu'un produit vendu dans un assemblage est dans la compo,
         * de savoir par quel autre produit il peut être substitué
         */
        construireDonneesAssemblage: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, composition: Types.CompositionOffre, assemblage: CatalogueNode, idDirectiveSelection?: string) => Types.DonneesAssemblage;
        /**
         *  Permet de déterminer si la personne peut détenir le produit
         */
        private verifierAssociationProduitPersonne;
        /**
         *  Permet de déterminer si l'entité peut détenir le produit
         */
        private verifierAssociationProduitEntite;
        /**
         * Parcourt récursivement le catalogue et applique fonctionAExecuter à chaque noeud de l'arbre. Arrête le parcours lorsque
         * fonctionAExecuter renvoie faux.
         * fonctionAExecuter est une fonction booléenne dont la tâche est d'effectuer un test sur un élément du catalogue.
         * Elle accepte les arguments suivants :
         * - Un élément (P/S) du catalogue
         * - Un argument de n'importe quel type représentant la valeur à tester vis à vis du P/S
         * - Un resultat de n'importe quel type qui sera au final restitué par parcourirCatalogue.
         * ATTENTION : resultat DOIT être un objet et ne DOIT PAS être un type primitif (ni string, ni number,
         * ni boolean etc. 12/02/2016 Quoique avec une string ca semble fonctionner, cf ).
         */
        parcourirCatalogue: (fonctionAExecuter: (node: CatalogueNode, args: any, resultat: any, contexte?: Types.ContexteGgo | Types.ContexteGgho, origine?: OrigineProduit) => boolean, argument: any, resultat: any, contexte?: Types.ContexteGgo | Types.ContexteGgho) => any;
        /**
         * Recherche un produit dans un assemblage
         * @param [produitARechercher] : Le produit à rechercher
         * @return vrai si ile produit est trouvé, faux sinon
         * renvoie faux si this n'est pas un assemblage
         */
        rechercherProduitDansAssemblage: (produitARechercher: Types.ProduitService) => boolean;
        gererEtatTuile: (detenteurs: Tiers.Personne[] | Types.Tiers.PersonneMorale[] | InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[] | Types.Tiers.Procuration[], composition: CompositionOffre, assemblage: CatalogueNode) => void;
        /**
         * Fonction appelée lorsque l'on rajoute un P/S dans l'offre en avenant et qu'il s'avère que ce produit service existe déjà dans une autre offre
         * On peut passer 0 dans l'entité titulaire ou dans la personne (pas les deux à la fois...) pour que la recherche ne se fasse que sur un des deux
         * critères seulement. Normalement le seul cas d'appel devrait se faire avec numeroEntiteTitulaire = 0  et numeroPersonne != 0.
         *
         */
        majDonneesReprise: (codeEtablissement: string, codeGuichet: string, referenceProduitService: string, codeTypeProduitService: string, numeroOffre: number, codeRepriseEnForcage: string, numeroEntiteTitulaire: number, numeroPersonne: number) => void;
        minimiserLibelleProduitService: () => string;
        constructor(produitService: ProduitService, ascendant: CatalogueNode, descendants: CatalogueNode[]);
        majCodeRepriseEnForcage(listePsRepris: Array<Types.Changement.IPsOffreCibleBO28>): void;
    }
}

declare module GestionGeneriqueOffres.Types.Changement {
    interface IContexte {
        offre: Types.IOffreSource;
        panier: IPanier;
    }
    interface IPanier {
        produitsServices: Array<IProduitCloture>;
    }
    interface ICompositionCibleChng {
        listePsACloturer: Array<IPSOffreSourceBO27>;
        listePsRepris: Array<IPsReprise>;
        listePsOffreCible: Array<IPsOffreCibleBO27>;
    }
    interface IPSOffreSourceBO27 {
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        identifiantPsSupport: number;
        codeEtab: string;
        codeGuichet: string;
        codeProduit: string;
        referenceProduitService: string;
        nomCommercialPs: string;
    }
    interface IPsReprise extends IPSOffreSourceBO27 {
        indicAutresPsTransfert: string;
        numOffreSouscrite: number;
        codeRepriseEnForcage: string;
        ordrePsCatalogueCible: number;
    }
    interface IPsOffreCibleBO27 {
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        identifiantPsSupport: number;
        nomCommercialPs: string;
        indicateurPsObligatoire: string;
        codeNaturePsAssocie: string;
        ordrePsCatalogue: number;
        codeTypeProduitService: string;
        codeDecompositionPs: string;
    }
    /**
     * entrée de la BO28 offre-v2/offreCibleChng
     */
    interface IOffreCibleChng {
        codeEtablissement: string;
        offreSource: IOffreSource;
        offreCible: IOffreCible;
    }
    interface IOffreSource {
        numeroOffreSource: number;
        codeGuichetInterbancaire: string;
    }
    /**
     * retour de la BO28 offre-v2/offreCibleChng
     */
    interface IOffreCible {
        identifiantPs: number;
        numeroOffreCible: number;
        codeFamilleGestionPs: string;
        listePSOffreCible: Array<IPsOffreCibleBO28>;
    }
    interface IPsOffreCibleBO28 {
        identifiantPersonne: number;
        identifiantPsSupport: number;
        indicateurReprise: boolean;
        codeTypePsReprise: string;
        referencePs: string;
        identifiantPs: number;
        numeroOrdre: number;
        numeroEntiteTitulaire: number;
        codeGuichetInterbancaire: string;
    }
    abstract class UtilsConversion {
        static convertPSCible(ps: IPsOffreCibleBO27): IPsOffreCibleBO28;
        static convertPSRepris(ps: IPsReprise): IPsOffreCibleBO28;
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Un objet composé d'une clé et d'une valeur de types quelconques.
     */
    class CleValeur {
        private _cle;
        /**
         * La clé
         */
        cle: any;
        private _valeur;
        /**
         * La valeur
         */
        valeur: any;
        constructor(cle: any, valeur: any);
    }
}

declare module GestionGeneriqueOffres.Types.Cloture {
    /** Utilisée pour afficher les résultats d'une sélection.
     * Possiblement obsolète si aucune pop in de sélection n'est utilisée lors du choix d'un produit
     * dans le catalogue.
     * Pas d'interface mock pour cet objet, il est interne à GGO.
     */
    class ResultatSelection {
        private _noeud;
        /**
         * Noeud de rattachement de la composition (niveau personnes / entités)
         */
        noeud: CompositionOffreEntitePersonne;
        private _detenteur;
        /**
         * Lien vers le détenteur
         */
        detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration;
        private _support;
        /**
         * Lien vers le produit support s'il existe
         */
        support: CompositionOffreProduit;
        private _libelle;
        /**
         * Libellé dans la popup de sélection
         */
        libelle: string;
        private _selectionne;
        /**
         * Indique si l'utilisateur a coché cette case a cocher dans la popup de sélection
         */
        selectionne: boolean;
        constructor(noeud: CompositionOffreEntitePersonne, detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration, support: CompositionOffreProduit, libelle: string, selectionne: boolean);
    }
    /**
     * Niveau 0 (racine) de la composition
     */
    class CompositionOffre {
        private contexte;
        private entites;
        private personnes;
        private catalogue;
        private paramBlocs;
        private options;
        private dv;
        private mandataires;
        private _composition;
        /**
         * Les personnes et/ou entités de la composition
         */
        composition: CompositionOffreEntitePersonne[];
        /**
         * Insère un P/S géré en mode CB (entité) dans la composition, directement sous l'entité. Ex : le compte courant)
         * Renvoie l'élément de la composition correspondant au produit inséré
         *
         * @param {ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit.  Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (non implémenté)
         * @param {CatalogueNode} node le produit qu'on tente d'insérer
         * @param {InformationEntiteTitulaire} entite L'entité qui détient le produit
         * @param {DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet assemblage)
         * @returns Le produit inséré dans le panier
         */
        insererProduitEnModeEntite: (contexte: ContexteCgo, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: CatalogueNode, entite: InformationEntiteTitulaire | InformationEntiteTitulaireBdr, donneesSelectionAssemblage?: DonneesAssemblage) => CompositionOffreProduit;
        /**
         * Insère un P/S géré en mode personne dans la composition, directement sous l'entité. Ex : LSE
         * Renvoie l'élément de la composition correspondant au produit inséré
         *
         * @param {ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit. Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (ce dernier n'étant pas implémenté)
         * @param {CatalogueNode} node Le produit qu'on tente d'insérer
         * @param {InformationEntiteTitulaire | Tiers.Personne} detenteur La personne qui détiendra le produit
         * @param {DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet assemblage)
         * @returns Le produit inséré dans le panier, undefined si rien n'est inséré
         */
        insererProduitEnModePersonne: (contexte: ContexteCgo, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: CatalogueNode, detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration, donneesSelectionAssemblage?: DonneesAssemblage) => CompositionOffreProduit;
        /**
         * Insère un P/S dans la composition, sous un P/S déjà existant. Peut fonctionner en mode entité ou en mode personne
         * Généralement, il s'agit de P/S rattachés au compte courant (+ généralement, au produit "principal" de l'offre.
         * En mode entité, il s'agit par ex du découvert
         * En mode personne, il s'agit par ex des cartes
         * Renvoie l'élément de la composition correspondant au produit inséré
         *
         * @param {ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit. Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (ce dernier n'étant pas implémenté)
         * @param {CatalogueNode} node Le produit qu'on tente d'insérer
         * @param {CompositionOffreProduit} produitSupport L'occurence dans le panier du produit support du produit qu'on tente d'insérer (par ex, pour insérer un relevé de compte, il s'agira du compte).
         * @param {InformationEntiteTitulaire | Tiers.Personne} detenteur La personne ou l'entité qui détiendra le produit
         * @param {DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet assemblage)
         * @param {CompositionOffreEntitePersonne} noeud? L'occurence du niveau 1 du panier (niveau entité/personne) sous laquelle on va insérer
         * @returns Le produit inséré dans le panier, undefined si rien n'est inséré
         */
        insererProduitEnModeCompte: (contexte: ContexteGgo | ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: CatalogueNode, produitSupport: CompositionOffreProduit, detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration, donneesSelectionAssemblage?: DonneesAssemblage, noeud?: CompositionOffreEntitePersonne) => CompositionOffreProduit;
        insererProduitEnModeMandataire: (contexte: ContexteGgo | ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: CatalogueNode, produitSupport: CompositionOffreProduit, detenteur: Tiers.Procuration, donneesSelectionAssemblage?: DonneesAssemblage, noeud?: CompositionOffreEntitePersonne) => CompositionOffreProduit;
        /**
         * Similaire à calculerListeChoixAjoutProduitServicePourProduitsAvecCompteSupport, mais utilisée avec un produit qui n'est pas détenu
         * dans le panier afin d'identifier les produits supports potentiels de ce produit
         * CHBR : J'ai des doutes sur cette fonction (produitAjouteEtNonDetenu n'est pas utilisé, déjà...) mais vu qu'elle est utilisée pour gérer
         * les reprises de cartes et que ca a été recetté ok, je n'y touche pas.
         *
         * @param {ProduitService} produitAjoute Le produit pour lequel on va déterminer les produits supports (ex si produitAjoute est une carte, on cherche le CDD)
         * @param {CompositionOffre} offre Le panier
         * @param {CompositionOffreEntitePersonne} compositionOffreEntitePersonne La partie du panier concernant le détenteur du produitAjoute
         * @param {PropositionReprise} pr (une des) propositions de reprise du produitAjoute qui contient l'idegps du produit support qu'on cherche (ex 48 pour le CDD)
         * @param {Tiers.Personne} personne? La personne qui détient pour les produits en mode personne. Si non précisé on prend le détenteur de compositionOffreEntitePersonne
         * @returns {ResultatSelection[]}
         */
        calculerProduitsSupportsPourProduitNonDetenu(produitAjoute: ProduitService, offre: CompositionOffre, compositionOffreEntitePersonne: CompositionOffreEntitePersonne, pr: PropositionReprise, personne?: Tiers.Personne): ResultatSelection[];
        /**
         * Insère un P/S produit dans la composition, sous tous les P/S qui sont susceptibles de l'acceuillir. Peut fonctionner
         * en mode entité ou en mode personne
         * Généralement, il s'agit de P/S rattachés au compte courant.
         * En mode entité, il s'agit par ex du découvert (ajoutera un découvert sous tous les comptes courants**)
         * En mode personne, il s'agit par ex des cartes (ajoutera des cartes sous tous les comptes courants**)
         *
         * ** Ce commentaire a été écrit à l'époque où le BL couple était en cible. Depuis, le projet ayant été reporté, il ne peut en
         * pratique n'y avoir qu'un compte dans les offres BL (et épargne...)
         *
         * On ne peut insérer de produits en mode compte que sous des nodes de type entité
         * Renvoie une liste contenant les produits ajoutés
         *
         * @param {ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit. Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (ce dernier n'étant pas implémenté)
         * @param {CatalogueNode} node Le produit qu'on tente d'insérer
         * @param {InformationEntiteTitulaire} entite L'occurence dans le panier du produit support du produit qu'on tente d'insérer (par ex, pour insérer un relevé de compte, il s'agira du compte).
         * @param {Tiers.Personne} personne? La personne détentrice, pour les produits detenus en mode personne (cartes...)
         * @param {DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet  assemblage)
         * @returns Une liste contenant les produits qui ont été insérés, afin, entre autres, d'émettre un event d'ajout vers les P/S
         */
        insererPlusieursProduitEnModeCompte: (contexte: ContexteCgo, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: CatalogueNode, entite: InformationEntiteTitulaire | InformationEntiteTitulaireBdr, personne?: Tiers.Personne | Tiers.PersonneMorale | Tiers.Procuration, donneesSelectionAssemblage?: DonneesAssemblage) => EvenementProduit[];
        /**
         * Recherche une entité ou une personne dans la composition
         * @param {InformationEntiteTitulaire | Tiers.Personne} detenteur La personne/entité recherchée
         * @returns L'entrée dans le niveau 1 du panier correspondant à la personne/entité recherchée
         */
        getEntiteOuPersonne(detenteur: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration): CompositionOffreEntitePersonne;
        /**
         * Cherche à déterminer si le produit passé en paramètre existe quelque part dans le panier et renvoie vrai si c'est le cas
         * Si le produit existe mais est marqué pour clôture, on considère qu"il n'existe pas
         * Si detenteur est précisé, ne renvoie vrai que si le produit est associé au detenteur passé en paramètre
         * @param produit Le produit recherché
         * @param detenteur Le détenteur, optionnel
         * @return Vrai si le produit est trouvé dans le panier, faux sinon.
         */
        rechercherProduitExiste(produit: ProduitService, detenteur?: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration): boolean;
        /**
         * Vérifie qu'un produit est détenu par le détenteur (entité ou personne)
         * @param [descendants] une liste de produits situés immédiatement sous un niveau entité ou personne
         * @param [produit] le produit recherché
         * @param [detenteur] le détenteur du produit qu'on teste
         * @param [produitSupport] le produit support éventuel, si il est présent, on cherche seulement le produit dont le détenteur est detenteur
         * et dont le produit support est produitSupport
         */
        private rechercherProduitDetenu(descendants, produit, detenteur, produitSupport?);
        /**
         * Création initiale de la composition (initialisation du panier au chargement de l'application)
         * Insère dans la composition les produits gérés en mode CB ou personne en itérant sur le catalogue
         */
        private traiterProduitsSansCompteSupport;
        /**
         *  Création initiale de la composition (initialisation du panier au chargement de l'application)
         *  Insère dans la composition les produits gérés en mode compte en itérant sur le catalogue
         */
        private traiterProduitsAvecCompteSupport;
        /**
         *  RAZ des produits associés à la composition (pour les tests, en principe pas nécessaire pour le code de production).
         */
        raz(): void;
        private calculerListeChoixAjoutProduitServicePourPersonne(produitAjoute, compositionOffreEntitePersonne, personnes?);
        /**
         * Aiguillage produits avec / sans compte support
         */
        private calculerListeChoixAjoutProduitServiceTousProduits(produitAjoute, compositionOffreEntitePersonne, pr, detenteur?);
        /**
         * Calcul de la liste des choix possible pour l'ajout d'un P/S à la composition
         */
        calculerListeChoixAjoutProduitService(produitAjoute: ProduitService, personnes?: Tiers.IProcuration[]): ResultatSelection[];
        private calculerListeChoixAjoutProduitServicePourProduitsSansCompteSupport(produitAjoute, compositionOffreEntitePersonne);
        private calculerListeChoixAjoutProduitServicePourEntite(produitAjoute, compositionOffreEntitePersonne);
        /**
         * Calcul de la liste de choix pour l'ajout d'un P/S avec compte support
         * @param {ProduitService} produitAjoute Le produit qu'on souhaite ajouter
         * @param {CompositionOffre} offre La racine du panier
         * @param {CompositionOffreEntitePersonne} compositionOffreEntitePersonne le niveau 1 du panier correspondant au détenteur du produit. Si le
         *  paramètre personne est défini, c'est la personne passée dans ce paramètre qui sera considérée comme le détenteur
         * @param {PropositionReprise} pr La proposition permettant d'ajouter le produit
         * @param {Tiers.Personne} personne? Utilisé lors de l'ajout de produit en mode compte.
         * @returns Un tableau qui contient une liste (personnes ou entités) qui permet de savoir sur quelle personne / entité rajouter le produit.
         * Initialement, donnait lieu à l'affichage d'une popin permettant à l'utilisateur de choisir la/les personnes/entités à quiu rajouter le
         * produit. Depuis, la popin a été supprimée et le produit est ajouté à toutes les personnes/entités possibles.
         */
        private calculerListeChoixAjoutProduitServicePourProduitsAvecCompteSupport(produitAjoute, offre, compositionOffreEntitePersonne, pr, personne?);
        /**
         * Permet de récupérer à partir d'une tuile (catalogueNode), un P/S présent dans le panier (CompositionOffreProduit)
         */
        recupererCompositionOffreProduitExistante: (catalogueNode: CatalogueNode) => CompositionOffreProduit;
        /**
         * Insertion d'un nouveau produit dans la liste des descendants du niveau supérieur. On insère toujours dans l'ordre
         * des id de blocs.
         * @param [produitAInserer] : Le produit à insérer
         * @param [listeProduits] : La liste dans laquelle insérer le produit
         * @return : void
         */
        inserer(produitAInserer: CompositionOffreProduit, listeProduits: CompositionOffreProduit[]): void;
        /**
         * Va construire l'offre à partir d'une liste d'ET et du catalogue de l'offre en
         * sélectionnant ce qui est obligatoire
         */
        constructor(contexte: ContexteCgo, entites: InformationEntiteTitulaire[] | InformationEntiteTitulaireBdr[], personnes: Tiers.Personne[] | Tiers.PersonneMorale[], catalogue: CatalogueNode | CatalogueNode, paramBlocs: ParametrageBlocs | ParametrageBlocsGgho, options: IOptionsCreationComposition, dv: DossierDeVente.GestionDossierVente, mandataires?: Tiers.Procuration[]);
        /**
         *  Attribution d'un id de bloc. On attribue le premier bloc libre
         *  Ex bloc-1-1-1 bloc-1-1-2 bloc-1-1-4 (parce qu'on a déjà supprimé bloc-1-1-3) : on attribue bloc-1-1-3
         *  Ex bloc-1-1-1 bloc-1-1-2 bloc-1-1-3 : on attribue bloc-1-1-4
         *  @param [idNiveauSuperieur] : id du niveau supérieur, soit du niveau entité/personne  (e-1, p-1 ...), soit du niveau produit
         *  (bloc-1-1 ...)
         *  @param [listeproduits] : liste dans laquelle l'insertion va s'opérer.
         *  @return : id à attribuer.
         */
        attribuerIdBloc(idNiveauSuperieur: string, listeProduits: CompositionOffreProduit[]): string;
    }
}

declare module GestionGeneriqueOffres.Types.Cloture {
    /**
     * Ligne de type personne ou entité dans la composition
     */
    class CompositionOffreEntitePersonne {
        private _id;
        /**
         * L'id de l'élément (numérotation séquentielle à partir de 1).
         * Permet de construir les id associés aux produits/services (paramètre id-bloc des directives métier)
         */
        id: string;
        private _detenteur;
        /**
         * Le détenteur des P/S si situant dans les niveaux inférieurs de la composition
         */
        detenteur: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration;
        private _visible;
        /**
         * Le fait que la section entité/personne de la composition soit visible ou pas selon le filtrage opéré dans le bloc personne
         */
        visible: boolean;
        private _modeDetentionAutorise;
        /**
         * Le mode de détention autorisé de ces produits : entité, personne, les deux
         * Ex 1 : Pour une offre qui concerne uniquement une ET en mode simple, il y aura uniquement un seul élément au niveau principal,
         * l'élément sera de type entité et le mode sera "les deux" car il faudra tout rattacher à ce noeud
         * Ex 2 : Pour une offre qui concerne une ET mode joint, il y aura 3 éléments au niveau principal, une de type ET pour les
         * produits associés directement à l'ET jointe (MR ET MME), plus deux autres de type personne pour chaque personne de l'entité
         * (MR, MME). L'élement de type ET jointe aura le mode "entite" car ce noeud ne peut accueillir que des produits de type
         * entité(ex des comptes), et les autres éléments auront le mode "personne" et ne pourront accueillir que des produits en mode
         * personne
         */
        modeDetentionAutorise: number;
        private _descendants;
        /**
         * Les produits détenus
         */
        descendants: CompositionOffreProduit[];
        /**
         *  Obtient le libellé à associer à un élément de niveau 0 de la composition
         */
        getLibelle: string;
        /**
         *  Obtient le libellé à associer à un élément de niveau 0 de la composition
         */
        getLibelleRecapPersonne: string;
        constructor(id: string, detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration, modeDetentionAutorise: number, descendants: CompositionOffreProduit[]);
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Ligne de type personne ou entité dans la composition
     */
    class CompositionOffreEntitePersonne {
        private _id;
        /**
         * L'id de l'élément (numérotation séquentielle à partir de 1).
         * Permet de construir les id associés aux produits/services (paramètre id-bloc des directives métier)
         */
        id: string;
        private _detenteur;
        /**
         * Le détenteur des P/S si situant dans les niveaux inférieurs de la composition
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _visible;
        /**
         * Le fait que la section entité/personne de la composition soit visible ou pas selon le filtrage opéré dans le bloc personne
         */
        visible: boolean;
        private _modeDetentionAutorise;
        /**
         * Le mode de détention autorisé de ces produits : entité, personne, les deux
         * Ex 1 : Pour une offre qui concerne uniquement une ET en mode simple, il y aura uniquement un seul élément au niveau principal,
         * l'élément sera de type entité et le mode sera "les deux" car il faudra tout rattacher à ce noeud
         * Ex 2 : Pour une offre qui concerne une ET mode joint, il y aura 3 éléments au niveau principal, une de type ET pour les
         * produits associés directement à l'ET jointe (MR ET MME), plus deux autres de type personne pour chaque personne de l'entité
         * (MR, MME). L'élement de type ET jointe aura le mode "entite" car ce noeud ne peut accueillir que des produits de type
         * entité(ex des comptes), et les autres éléments auront le mode "personne" et ne pourront accueillir que des produits en mode
         * personne
         */
        modeDetentionAutorise: number;
        private _descendants;
        /**
         * Les produits détenus
         */
        descendants: CompositionOffreProduit[];
        /**
         *  Obtient le libellé à associer à un élément de niveau 0 de la composition
         */
        getLibelle: string;
        /**
         *  Obtient le libellé à associer à un élément de niveau 0 de la composition
         */
        getLibelleRecapPersonne: string;
        constructor(id: string, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, modeDetentionAutorise: number, descendants: CompositionOffreProduit[]);
    }
}

declare module GestionGeneriqueOffres.Types.Cloture {
    /**
     * Ligne de type "produit" dans la composition (compte/relevé/carte etc.)
     */
    class CompositionOffreProduit {
        private __PRODUIT;
        private _id;
        /**
         * L'id du produit dans la composition. C'est cet id qui sera transmis au bloc métier.
         * L'id peut prendre deux formes :
         * - soit p-x, avec p, id dans la composition de niveau 1 et x, n° d'ordre
         * du produit dans la composition des produits de premier niveau,
         * - soit p-x-y, avec p, idem, x , le n° d'ordre du produit dans la composition
         * de premier niveau et y, le n° d'ordre du produit dans la composition de second niveau relativement à x
         * Ex :
         * On a la structure suivante, les id sont founis entre parenthèses
         * * MR OU MME MYWAY            (e-1)
         *   - Compte n° 1            (e-1-1)
         *     - Relevé             (e-1-1-1)
         *     - Engagement de dom  (e-1-1-2)
         *     - Carte              (e-1-1-3)
         *   - Compte n° 2            (e-1-2)
         * * MR MYWAY                   (p-1)
         *   - LSE                    (p-2-1)
         *   - Relevé en ligne        (p-2-2)
         */
        id: string;
        private _detenteur;
        /**
         * Le détenteur du produit service. Soit une entité (pour un compte par ex), soit une personne (pour une carte par ex.)
         */
        detenteur: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration;
        private _libTitreProduit;
        /**
         * libTitreProduit
         */
        libTitreProduit: string;
        private _lienVersCatalogue;
        /**
         * Lien vers l'objet catalogue correspondant à ce produit
         */
        lienVersCatalogue: CatalogueNode;
        private _produitServiceDetenu;
        /**
         * Lien vers le produit détenu par le détenteur (équivalent à lienVersCatalogue.produitService)
         */
        produitServiceDetenu: ProduitService;
        private _ascendant;
        /** Le père de cet élément. Il peut s'agir d'un élément de type CompositionOffreEntitePersonne si
         *  le produit est situé au niveau 2 de la composition (produit détenu par entité ou personne). Il peut aussi
         *  etre de type CompositionOffreProduit si il est situé au niveau 3 (produit avec compte support)
         */
        ascendant: CompositionOffreProduit | CompositionOffreEntitePersonne;
        private _descendants;
        /** Les descendants, càd les produits dépendant de ce produit ci.
         * Uniquement utilisé afin de modéliser les relations de type compte support
         * Par ex on mettra les cartes "sous" les comptes
         * Il n'y a qu'un seul niveau possible : si a, b et c sont des produits, une relation de type
         * a est support de b qui est support de c  n'est pas possible.
         */
        descendants: CompositionOffreProduit[];
        private _afficherInfoDetenteur;
        /** Affiche des infos sur le détenteur dans la composition lorsqu'il y a ambiguité sur qui détient le produit
         * par exemple sur un compte joint, savoir quelle carte est à qui.
         */
        afficherInfoDetenteur: number;
        private _directives;
        /** L'id des directives métiers qui vont servir à afficher le bloc de personnalisation
         * Nb : il peut y avoir des directives différentes selon le code sous famille acte de gestion considéré
         * Ex la directive utilisée pour l'ouverture d'un compte de dépôt peut être différente de celle utilisée pour l'avenant
         * d'un compte de dépôt
         */
        directives: DirectivesMetier;
        private _modeAjoutProduit;
        /**
         * Manière dont le produit a été ajouté à l'offre. Permet de piloter les indicateurs dans la composition (new, repris etc.)
         * - Ajout automatique (produit obligatoire, ou produit déjà dans l'offre pour une offre avec DV)
         * - Ajout automatique d'un produit repris
         * - Ajout manuel via clic sur tuile ou sélection dans un assemblage
         */
        modeAjoutProduit: ModeAjoutProduitDansOffre;
        private _icone;
        /**
         * Icône à afficher à droite du produit
         *
         */
        icone: IconeProduit;
        private _origineProduit;
        /** Manière dont le produit a été créé dans la composition :
         * - Produit simple
         * - Choix dans un assemblage interchangeable
         * - Sélection dans un assemblage cumulable
         */
        origineProduit: any;
        private _donneesSelectionAssemblage;
        /** Mémorisation des données de sélection de l'assemblage lorsque le produit
         *  a été ajouté via un assemblage. Permet de retrouver ces données afin de les reproposer dans
         * la partie Personnalisation dans le cas où une directive de sélection métier est utilisée (cas des cartes)
         */
        donneesSelectionAssemblage: DonneesAssemblage;
        private _codeMiseEnGestion;
        /**
         * Code de mise en gestion.
         * 0 - En attente de mise en gestion
         * 1 - Mise en gestion ok
         * 2 - Mise en gestion en ko fonctionnel. Signifie la fin de la mise en gestion si le produit est obligatoire
         * 3 - Mise en gestion en ko technique. Signifie la fin de la mise en gestion
         */
        codeMiseEnGestion: number;
        private _messageMiseEnGestion;
        /**
         * Message affiché par le système de mise en gestion. A priori réservé aux messages d'erreur liés
         * à des problèmes techniques.
         */
        messageMiseEnGestion: string;
        private _idProducteur;
        /**
         * L'identifiant du producteur à fixer par le produit service:
         * Par défaut (pas de producteur pour ce P/S) : vide
         * Pour IARD : "BPCEA_IMPACT"
         * Pour IZIVENTE: "NFI_IZIVENTE"
         */
        idProducteur: Producteur;
        private _pointsEntree;
        /**
         * La liste des points d'entrée (fonctions) que GGO pourra appeler pour déclencher une action dans le composant
         * Les points d'entrée du contexte passé aux P/S pointent sur ceux-ci
         */
        pointsEntree: PointsEntree;
        private _controlesPreRequis;
        /**
         * La liste des contrôles de pré requis demandés par le produit service
         */
        controlesPreRequis: ControlePreRequis[];
        private _invisible;
        /**
         * Indique si l'IHM du P/S est visible ou pas. Vrai par défaut. Peut être télécommandé par le P/S via les events CSPR_AFFICHER_IHM et
         * CSPR_CACHER_IHM
         */
        invisible: Invisible;
        private _estModifie;
        /**
         * Indicateur valant vrai si les données du P/S ont été modifiées par l'utilisateur. Cet indicateur est positionné par le P/S.
         * Par défaut : faux.
         */
        estModifie: EstModifie;
        private _indicateurModeVersement;
        /**
         * Indicateur de versement, requis par la contract.
         */
        indicateurModeVersement: IndicateurModeVersement;
        private _marquePourCloture;
        /**
         * Permet de savoir si le produit a été marqué pour clôture par l'utilisateur (en cliquant sur la poubelle du panier)
         */
        marquePourCloture: boolean;
        private _marquePourAvenant;
        /**
         * Permet de savoir si le produit a été marqué pour avenant par l'utilisateur (en cliquant sur le crayon du panier)
         */
        marquePourAvenant: boolean;
        private _disabled;
        /**
         * Verrouille le produit dans le panier : icone poubelle et annulation de clôture (flèche circulaire)
         */
        disabled: boolean;
        private _produitDossierVente;
        /**
         * Image du produit dans le dossier de vente
         */
        produitDossierVente: DossierDeVente.CompositionDossier;
        /**
         * Propriété servant à l'affichage du titre du bloc du P/S dans la perso. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        afficherTitrePourPersonnalisation: string;
        /**
         * Propriété servant à l'affichage du titre du bloc du P/S dans la perso GGHO. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        private _titrePourPersonnalisationGGHO;
        afficherTitrePourPersonnalisationGGHO: string;
        /**
         * Propriété servant à l'affichage du titre du bloc du P/S dans la perso BDR. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        private _afficherTitrePourPersonnalisationBDR;
        afficherTitrePourPersonnalisationBDR: string;
        /** Propriété servant à l'affichage du titre du bloc du P/S dans les messages d'erreur. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        afficherTitrePourErreur: string;
        /** Propriété servant à l'affichage du titre du bloc du P/S dans les messages d'erreur. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        afficherTitrePourErreurGGHO: string;
        /**
         * Suppression d'un produit de la composition (nouvelle version)
         */
        supprimerProduit(): void;
        private _getListeCodeSousFamilleActeGestion;
        /**
         * Récupère la liste des codes sous familles d'acte de gestion (OU, AV, CL, ...) associés au couple produit, détenteur
         * Même logique que getListeActesGestion situé juste après donc si l'un est changé, il faut aussi vérifier l'autre
         */
        getListeCodeSousFamilleActeGestion(): string[];
        private _getCodeSousFamilleActeGestionPourDirective;
        /**
         * Récupère le code sous famille acte de gestion à passer à la directive métier.
         * Si le produit n'est pas un produit repris
         *   Si dans la liste figure un code OU, on revoie celui-ci.
         *   A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         *   A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie rien.
         *   A défaut on plante
         * Si le produit est un produit repris
         *   *** Un produit repris ne peut jamais être affiché en ouverture puisqu'il existe déjà dans une autre offre.
         *   Si le code sous famille acte de gestion de l'offre est avenant (offre en avenant) : si le code OU est présent, on renvoie AV
         *   Sinon (offre en souscription)
         *      Si le code AV est présent, on renvoie AV
         * @param codeSousFamilleActeGestionOffre : OU/AV/CL de l'offre
         * @return le code sous famille acte de gestion sur lequel la directive métier va se baser pour ses traitements
         */
        getCodeSousFamilleActeGestionPourDirective(codeSousFamilleActeGestionOffre: string): string;
        private _getCodeSousFamilleActeGestionPourDirectiveGgho;
        /**
         * Récupère le code sous famille acte de gestion à passer à la directive métier.
         * Si le produit n'est pas un produit repris
         *   Si dans la liste figure un code OU, on revoie celui-ci.
         *   A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         *   A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie CL.
         *   A défaut on plante
         * Si le produit est un produit repris
         *   *** Un produit repris ne peut jamais être affiché en ouverture puisqu'il existe déjà dans une autre offre.
         *   Si le code sous famille acte de gestion de l'offre est avenant (offre en avenant) : si le code OU est présent, on renvoie AV
         *   Sinon (offre en souscription)
         *      Si le code AV est présent, on renvoie AV
         * @param codeSousFamilleActeGestionOffre : OU/AV/CL de l'offre
         * @return le code sous famille acte de gestion sur lequel la directive métier va se baser pour ses traitements
         */
        getCodeSousFamilleActeGestionPourDirectiveGgho(codeSousFamilleActeGestionOffre: string): string;
        private _getCodeSousFamilleActeGestionPourDirectiveBdr;
        /**
         * VERSION BDR : Récupère le code sous famille acte de gestion à passer à la directive métier.
         * Si le produit n'est pas un produit repris
         *   Si dans la liste figure un code OU, on revoie celui-ci.
         *   A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         *   A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie rien.
         *   A défaut on plante
         * Si le produit est un produit repris
         *   *** Un produit repris ne peut jamais être affiché en ouverture puisqu'il existe déjà dans une autre offre.
         *   Si le code sous famille acte de gestion de l'offre est avenant (offre en avenant) : si le code OU est présent, on renvoie AV
         *   Sinon (offre en souscription)
         *      Si le code AV est présent, on renvoie AV
         * @param codeSousFamilleActeGestionOffre : OU/AV/CL de l'offre
         * @return le code sous famille acte de gestion sur lequel la directive métier va se baser pour ses traitements
         */
        getCodeSousFamilleActeGestionPourDirectiveBdr(codeSousFamilleActeGestionOffre: string): string;
        getActeGestion(): string;
        /**
         * Remet à zéro _getCodeSousFamilleActeGestionPourDirective afin d'en repermettre le calcul par getCodeSousFamilleActeGestionPourDirective
         */
        resetCodeSousFamilleActeGestionPourDirective(): void;
        /**
         * Recherche un bloc produit par son id de bloc.
         */
        constructor(id: string, contexteGgo: ContexteCgo, modeAjoutProduit: ModeAjoutProduitDansOffre, origineProduit: OrigineProduit, detenteur: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration, lienVersCatalogue: CatalogueNode, produitServiceDetenu: ProduitService, ascendant: CompositionOffreProduit | CompositionOffreEntitePersonne, descendants: CompositionOffreProduit[], afficherInfoDetenteur: number, directives: DirectivesMetier, icone: IconeProduit, produitDossierVente: DossierDeVente.CompositionDossier, marquePourCloture: boolean, marquePourAvenant: boolean, donneesSelectionAssemblage?: DonneesAssemblage, libTitreProduit?: string, estModifie?: boolean);
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Désigne l'icône à afficher à droite du libellé du produit dans le panier.
     * ==> Voir aussi class IconeProduit dans constantes.ts
     */
    enum IconeProduit {
        Neant = 0,
        Poubelle = 1,
        Annuler = 2,
        Avenant = 3,
    }
    /**
     * Indique la manière dont le produit a été rajouté à l'offre
     * Si l'enum est modifiée, modifier également la classe de même nom dans constantes.ts
     */
    enum ModeAjoutProduitDansOffre {
        /**
         * Le produit n'est pas rajouté dans l'offre. Cette valeur ne devrait jamais apparaître dans la composition
         */
        Neant = 0,
        /**
         * Ajouté automatiquement (produit obligatoire, produit déjà dans l'offre)
         */
        Auto = 1,
        /**
         * Produits repris depuis une autre offre (SU07)
         */
        Repris = 2,
        /**
         * Produits ajoutés par l'utilisateur au cours de cette session
         */
        Manuel = 3,
    }
    /**
     * Indique d'ou vient le P/S
     */
    enum OrigineProduit {
        /**
         * Par défaut. Signale probablement un problème
         */
        Inconnu = 0,
        /**
         * Le produit est ajouté car il s'agit d'un P/S simple et l'utilisateur a cliqué sur une tuile ou bien le P/S
         * est obligatoire et a été ajouté automatiquement au chargement du catalogue.
         */
        ProduitSimple = 1,
        /**
         * Le produit est ajouté depuis un assemblage interchangeable
         */
        AssemblageInterchangeable = 2,
        /**
         * Le produit est ajouté depuis un assemblage cumulable
         */
        AssemblageCumulable = 3,
    }
    /**
     * cette interface ne contient rien, mais est quand même utile (si si !)
     * elle permet d'avoir une interface commune à :
     * Types.InformationEntiteTitulaire
     * Types.Tiers.Personne
     * Types.InformationEntiteTitulaireBdr
     * Types.Tiers.PersonneMorale
     * Types.Tiers.Procuration
     */
    interface IDetenteur {
    }
    /**
     * Ligne de type "produit" dans la composition (compte/relevé/carte etc.)
     */
    class CompositionOffreProduit {
        private __PRODUIT;
        private _id;
        /**
         * L'id du produit dans la composition. C'est cet id qui sera transmis au bloc métier.
         * L'id peut prendre deux formes :
         * - soit p-x, avec p, id dans la composition de niveau 1 et x, n° d'ordre
         * du produit dans la composition des produits de premier niveau,
         * - soit p-x-y, avec p, idem, x , le n° d'ordre du produit dans la composition
         * de premier niveau et y, le n° d'ordre du produit dans la composition de second niveau relativement à x
         * Ex :
         * On a la structure suivante, les id sont founis entre parenthèses
         * * MR OU MME MYWAY            (e-1)
         *   - Compte n° 1            (e-1-1)
         *     - Relevé             (e-1-1-1)
         *     - Engagement de dom  (e-1-1-2)
         *     - Carte              (e-1-1-3)
         *   - Compte n° 2            (e-1-2)
         * * MR MYWAY                   (p-1)
         *   - LSE                    (p-2-1)
         *   - Relevé en ligne        (p-2-2)
         */
        id: string;
        private _detenteur;
        /**
         * Le détenteur du produit service. Soit une entité (pour un compte par ex), soit une personne (pour une carte par ex.)
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _libTitreProduit;
        /**
         * libTitreProduit
         */
        libTitreProduit: string;
        private _lienVersCatalogue;
        /**
         * Lien vers l'objet catalogue correspondant à ce produit
         */
        lienVersCatalogue: Types.CatalogueNode;
        private _produitServiceDetenu;
        /**
         * Lien vers le produit détenu par le détenteur (équivalent à lienVersCatalogue.produitService)
         */
        produitServiceDetenu: Types.ProduitService;
        private _ascendant;
        /** Le père de cet élément. Il peut s'agir d'un élément de type CompositionOffreEntitePersonne si
         *  le produit est situé au niveau 2 de la composition (produit détenu par entité ou personne). Il peut aussi
         *  etre de type CompositionOffreProduit si il est situé au niveau 3 (produit avec compte support)
         */
        ascendant: CompositionOffreProduit | CompositionOffreEntitePersonne;
        private _descendants;
        /** Les descendants, càd les produits dépendant de ce produit ci.
         * Uniquement utilisé afin de modéliser les relations de type compte support
         * Par ex on mettra les cartes "sous" les comptes
         * Il n'y a qu'un seul niveau possible : si a, b et c sont des produits, une relation de type
         * a est support de b qui est support de c  n'est pas possible.
         */
        descendants: CompositionOffreProduit[];
        private _afficherInfoDetenteur;
        /** Affiche des infos sur le détenteur dans la composition lorsqu'il y a ambiguité sur qui détient le produit
         * par exemple sur un compte joint, savoir quelle carte est à qui.
         */
        afficherInfoDetenteur: number;
        private _directives;
        /** L'id des directives métiers qui vont servir à afficher le bloc de personnalisation
         * Nb : il peut y avoir des directives différentes selon le code sous famille acte de gestion considéré
         * Ex la directive utilisée pour l'ouverture d'un compte de dépôt peut être différente de celle utilisée pour l'avenant
         * d'un compte de dépôt
         */
        directives: Types.DirectivesMetier;
        private _modeAjoutProduit;
        /**
         * Manière dont le produit a été ajouté à l'offre. Permet de piloter les indicateurs dans la composition (new, repris etc.)
         * - Ajout automatique (produit obligatoire, ou produit déjà dans l'offre pour une offre avec DV)
         * - Ajout automatique d'un produit repris
         * - Ajout manuel via clic sur tuile ou sélection dans un assemblage
         */
        modeAjoutProduit: ModeAjoutProduitDansOffre;
        private _icone;
        /**
         * Icône à afficher à droite du produit
         *
         */
        icone: IconeProduit;
        private _origineProduit;
        /** Manière dont le produit a été créé dans la composition :
         * - Produit simple
         * - Choix dans un assemblage interchangeable
         * - Sélection dans un assemblage cumulable
         */
        origineProduit: any;
        private _donneesSelectionAssemblage;
        /** Mémorisation des données de sélection de l'assemblage lorsque le produit
         *  a été ajouté via un assemblage. Permet de retrouver ces données afin de les reproposer dans
         * la partie Personnalisation dans le cas où une directive de sélection métier est utilisée (cas des cartes)
         */
        donneesSelectionAssemblage: DonneesAssemblage;
        private _codeMiseEnGestion;
        /**
         * Code de mise en gestion.
         * 0 - En attente de mise en gestion
         * 1 - Mise en gestion ok
         * 2 - Mise en gestion en ko fonctionnel. Signifie la fin de la mise en gestion si le produit est obligatoire
         * 3 - Mise en gestion en ko technique. Signifie la fin de la mise en gestion
         */
        codeMiseEnGestion: number;
        private _messageMiseEnGestion;
        /**
         * Message affiché par le système de mise en gestion. A priori réservé aux messages d'erreur liés
         * à des problèmes techniques.
         */
        messageMiseEnGestion: string;
        private _idProducteur;
        /**
         * L'identifiant du producteur à fixer par le produit service:
         * Par défaut (pas de producteur pour ce P/S) : vide
         * Pour IARD : "BPCEA_IMPACT"
         * Pour IZIVENTE: "NFI_IZIVENTE"
         */
        idProducteur: Producteur;
        private _pointsEntree;
        /**
         * La liste des points d'entrée (fonctions) que GGO pourra appeler pour déclencher une action dans le composant
         * Les points d'entrée du contexte passé aux P/S pointent sur ceux-ci
         */
        pointsEntree: Types.PointsEntree;
        private _controlesPreRequis;
        /**
         * La liste des contrôles de pré requis demandés par le produit service
         */
        controlesPreRequis: Types.ControlePreRequis[];
        private _invisible;
        /**
         * Indique si l'IHM du P/S est visible ou pas. Vrai par défaut. Peut être télécommandé par le P/S via les events CSPR_AFFICHER_IHM et
         * CSPR_CACHER_IHM
         */
        invisible: Invisible;
        private _estModifie;
        /**
         * Indicateur valant vrai si les données du P/S ont été modifiées par l'utilisateur. Cet indicateur est positionné par le P/S.
         * Par défaut : faux.
         */
        estModifie: EstModifie;
        private _estUneCarteIzivente;
        /**
         * Indicateur carte Izivente
         * Vrai : c'est une carte Izivente
         * Faux : c'est autre chose qu'une carte Izivente (ce n'est pas une carte, ou une carte pas Izi).
         */
        estUneCarteIzivente: EstUneCarteIzivente;
        private _estDejaEnGestion;
        /**
         * Indicateur de mise en gestion déjà effectuée dans un contexte de vente à distance.
         * Permet au P/S de savoir s'il doit relancer ou pas ses QR de mise en gestion en cas de mise en gestion précédemment échouée
         * Vrai : ce produit a déjà été mis en gestion au cours d'une mise en gestion précédente ayant échoué
         * Faux : c'est la première fois que ce produit est mis en gestion
         */
        estDejaEnGestion: EstDejaEnGestion;
        private _rappelerSiDejaEnGestion;
        /**
         * Indicateur de mise en gestion déjà effectuée dans un contexte de vente à distance.
         * Permet au P/S de savoir s'il doit relancer ou pas ses QR de mise en gestion en cas de mise en gestion précédemment échouée
         * Vrai : ce produit a déjà été mis en gestion au cours d'une mise en gestion précédente ayant échoué
         * Faux : c'est la première fois que ce produit est mis en gestion
         */
        rappelerSiDejaEnGestion: RappelerSiDejaEnGestion;
        private _indicateurModeVersement;
        /**
         * Indicateur de versement, requis par la contract.
         */
        indicateurModeVersement: IndicateurModeVersement;
        private _marquePourCloture;
        /**
         * Permet de savoir si le produit a été marqué pour clôture par l'utilisateur (en cliquant sur la poubelle du panier)
         */
        marquePourCloture: boolean;
        private _marquePourAvenant;
        /**
         * Permet de savoir si le produit a été marqué pour avenant par l'utilisateur (en cliquant sur le crayon du panier)
         */
        marquePourAvenant: boolean;
        private _disabled;
        /**
         * Verrouille le produit dans le panier : icone poubelle et annulation de clôture (flèche circulaire)
         */
        disabled: boolean;
        private _produitDossierVente;
        /**
         * Image du produit dans le dossier de vente
         */
        produitDossierVente: DossierDeVente.CompositionDossier;
        /**
         * Propriété servant à l'affichage du titre du bloc du P/S dans la perso. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        afficherTitrePourPersonnalisation: string;
        /**
         * Propriété servant à l'affichage du titre du bloc du P/S dans la perso GGHO. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        private _titrePourPersonnalisationGGHO;
        afficherTitrePourPersonnalisationGGHO: string;
        /**
         * Propriété servant à l'affichage du titre du bloc du P/S dans la perso BDR. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        private _afficherTitrePourPersonnalisationBDR;
        afficherTitrePourPersonnalisationBDR: string;
        /** Propriété servant à l'affichage du titre du bloc du P/S dans les messages d'erreur. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        afficherTitrePourErreur: string;
        /** Propriété servant à l'affichage du titre du bloc du P/S dans les messages d'erreur. Concaténation du
         * libellé du P/S et de l'identité du détenteur.
         */
        afficherTitrePourErreurGGHO: string;
        /**
         * Si vrai, on associe au produit un hyperlien dans le panier
         * @param codeSousFamilleActeDeGestionOffre Code sous famille acte de gestion associé à l'offre (OU pour une souscription, AV pour un avenant etc.)
         * @return Vrai s'il faut associer un hyperlien, faux sinon
         */
        estUnProduitAvecHyperlien(codeSousFamilleActeDeGestionOffre: string): boolean;
        /**
         * Vrai si on a associé au produit une icône poubelle ou une icone annuler (undo). Parce que c'est déconseillé de mettre une expression booléenne
         * avec deux tests dans la vue....
         */
        aUneIconePoubelleOuAnnuler(): boolean;
        /**
         * Suppression d'un produit de la composition (nouvelle version)
         */
        supprimerProduit(): void;
        private _getListeCodeSousFamilleActeGestion;
        /**
         * Récupère la liste des codes sous familles d'acte de gestion (OU, AV, CL, ...) associés au couple produit, détenteur
         * Même logique que getListeActesGestion situé juste après donc si l'un est changé, il faut aussi vérifier l'autre
         */
        getListeCodeSousFamilleActeGestion(): string[];
        private _getListeActesGestion;
        /**
         * Récupère la liste des codes acte de gestion (OU12345678, AV12345678, CL12345678, ...) associés au couple produit, détenteur
         * Même logique que getListeCodeSousFamilleActeGestion situé juste avant donc si l'un est changé, il faut aussi vérifier l'autre
         */
        getListeActesGestion(): string[];
        private _getCodeSousFamilleActeGestionPourDirective;
        /**
         * Récupère le code sous famille acte de gestion à passer à la directive métier.
         * Si le produit n'est pas un produit repris
         *   Si dans la liste figure un code OU, on revoie celui-ci.
         *   A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         *   A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie rien.
         *   A défaut on plante
         * Si le produit est un produit repris
         *   *** Un produit repris ne peut jamais être affiché en ouverture puisqu'il existe déjà dans une autre offre.
         *   Si le code sous famille acte de gestion de l'offre est avenant (offre en avenant) : si le code OU est présent, on renvoie AV
         *   Sinon (offre en souscription)
         *      Si le code AV est présent, on renvoie AV
         * @param codeSousFamilleActeGestionOffre : OU/AV/CL de l'offre
         * @return le code sous famille acte de gestion sur lequel la directive métier va se baser pour ses traitements
         */
        getCodeSousFamilleActeGestionPourDirective(codeSousFamilleActeGestionOffre: string): string;
        private _getCodeSousFamilleActeGestionPourDirectiveGgho;
        /**
         * Récupère le code sous famille acte de gestion à passer à la directive métier.
         * Si le produit n'est pas un produit repris
         *   Si dans la liste figure un code OU, on revoie celui-ci.
         *   A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         *   A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie CL.
         *   A défaut on plante
         * Si le produit est un produit repris
         *   *** Un produit repris ne peut jamais être affiché en ouverture puisqu'il existe déjà dans une autre offre.
         *   Si le code sous famille acte de gestion de l'offre est avenant (offre en avenant) : si le code OU est présent, on renvoie AV
         *   Sinon (offre en souscription)
         *      Si le code AV est présent, on renvoie AV
         * @param codeSousFamilleActeGestionOffre : OU/AV/CL de l'offre
         * @return le code sous famille acte de gestion sur lequel la directive métier va se baser pour ses traitements
         */
        getCodeSousFamilleActeGestionPourDirectiveGgho(codeSousFamilleActeGestionOffre: string): string;
        private _getCodeSousFamilleActeGestionPourDirectiveBdr;
        /**
         * VERSION BDR : Récupère le code sous famille acte de gestion à passer à la directive métier.
         * Si le produit n'est pas un produit repris
         *   Si dans la liste figure un code OU, on revoie celui-ci.
         *   A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         *   A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie rien.
         *   A défaut on plante
         * Si le produit est un produit repris
         *   *** Un produit repris ne peut jamais être affiché en ouverture puisqu'il existe déjà dans une autre offre.
         *   Si le code sous famille acte de gestion de l'offre est avenant (offre en avenant) : si le code OU est présent, on renvoie AV
         *   Sinon (offre en souscription)
         *      Si le code AV est présent, on renvoie AV
         * @param codeSousFamilleActeGestionOffre : OU/AV/CL de l'offre
         * @return le code sous famille acte de gestion sur lequel la directive métier va se baser pour ses traitements
         */
        getCodeSousFamilleActeGestionPourDirectiveBdr(codeSousFamilleActeGestionOffre: string): string;
        private _getActeGestion;
        /**
         * Récupère le code acte de gestion secondaire associé au produit.
         * Si dans la liste figure un code OU, on revoie celui-ci.
         * A défaut s'il y a un code AV et que le produit n'est pas en mode clôture on renvoie AV, sinon CL.
         * A défaut s'il y a un code CL et que le produit est en mode clôture on renvoie CL.
         * A défaut on plante
         */
        getActeGestion(codeSousFamilleActeGestionOffre: string): string;
        private calculerActeCloture(indexActeCloture, indexActeAvenant, listeActeGestion);
        /**
         * Remet à zéro _getCodeSousFamilleActeGestionPourDirective afin d'en repermettre le calcul par getCodeSousFamilleActeGestionPourDirective
         */
        resetCodeSousFamilleActeGestionPourDirective(): void;
        /**
         * Recherche un bloc produit par son id de bloc.
         */
        constructor(id: string, contexteGgo: Types.ContexteGgo | Types.ContexteGgho, modeAjoutProduit: Types.ModeAjoutProduitDansOffre, origineProduit: Types.OrigineProduit, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, lienVersCatalogue: Types.CatalogueNode, produitServiceDetenu: Types.ProduitService, ascendant: CompositionOffreProduit | CompositionOffreEntitePersonne, descendants: CompositionOffreProduit[], afficherInfoDetenteur: number, directives: Types.DirectivesMetier, icone: IconeProduit, produitDossierVente: DossierDeVente.CompositionDossier, marquePourCloture: boolean, marquePourAvenant: boolean, donneesSelectionAssemblage?: Types.DonneesAssemblage, libTitreProduit?: string, estModifie?: boolean);
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Options permettant de contrôler la création de la composition par défaut
     */
    interface IOptionsCreationComposition {
        selectionnerSocle: boolean;
        selectionnerPousse: boolean;
        selectionnerObligatoire: boolean;
        selectionnerRepris: boolean;
        selectionnerBad: boolean;
    }
    /** Utilisée pour afficher les résultats d'une sélection.
     * Possiblement obsolète si aucune pop in de sélection n'est utilisée lors du choix d'un produit
     * dans le catalogue.
     * Pas d'interface mock pour cet objet, il est interne à GGO.
     */
    class ResultatSelection {
        private _noeud;
        /**
         * Noeud de rattachement de la composition (niveau personnes / entités)
         */
        noeud: CompositionOffreEntitePersonne;
        private _detenteur;
        /**
         * Lien vers le détenteur
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration;
        private _support;
        /**
         * Lien vers le produit support s'il existe
         */
        support: CompositionOffreProduit;
        private _libelle;
        /**
         * Libellé dans la popup de sélection
         */
        libelle: string;
        private _selectionne;
        /**
         * Indique si l'utilisateur a coché cette case a cocher dans la popup de sélection
         */
        selectionne: boolean;
        constructor(noeud: CompositionOffreEntitePersonne, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, support: CompositionOffreProduit, libelle: string, selectionne: boolean);
    }
    /**
     * Niveau 0 (racine) de la composition
     */
    class CompositionOffre {
        private _composition;
        /**
         * Les personnes et/ou entités de la composition
         */
        composition: CompositionOffreEntitePersonne[];
        /**
         * Renvoie la désignation (libellé) du detenteur passé en paramètre.
         */
        static getDesignationEntitePersonne: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale) => string;
        /**
         * Insère un P/S géré en mode CB (entité) dans la composition, directement sous l'entité. Ex : le compte courant)
         * Renvoie l'élément de la composition correspondant au produit inséré
         *
         * @param {Types.ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit.  Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (non implémenté)
         * @param {Types.CatalogueNode} node le produit qu'on tente d'insérer
         * @param {Types.InformationEntiteTitulaire} entite L'entité qui détient le produit
         * @param {Types.DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet assemblage)
         * @returns Le produit inséré dans le panier
         */
        insererProduitEnModeEntite: (contexte: Types.ContexteGgo | ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: Types.CatalogueNode, entite: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr, donneesSelectionAssemblage?: Types.DonneesAssemblage) => CompositionOffreProduit;
        /**
         * Insère un P/S géré en mode personne dans la composition, directement sous l'entité. Ex : LSE
         * Renvoie l'élément de la composition correspondant au produit inséré
         *
         * @param {Types.ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit. Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (ce dernier n'étant pas implémenté)
         * @param {Types.CatalogueNode} node Le produit qu'on tente d'insérer
         * @param {Types.InformationEntiteTitulaire | Types.Tiers.Personne} detenteur La personne qui détiendra le produit
         * @param {Types.DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet assemblage)
         * @returns Le produit inséré dans le panier, undefined si rien n'est inséré
         */
        insererProduitEnModePersonne: (contexte: Types.ContexteGgo | ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, donneesSelectionAssemblage?: Types.DonneesAssemblage) => CompositionOffreProduit;
        /**
         * Insère un P/S dans la composition, sous un P/S déjà existant. Peut fonctionner en mode entité ou en mode personne
         * Généralement, il s'agit de P/S rattachés au compte courant (+ généralement, au produit "principal" de l'offre.
         * En mode entité, il s'agit par ex du découvert
         * En mode personne, il s'agit par ex des cartes
         * Renvoie l'élément de la composition correspondant au produit inséré
         *
         * @param {Types.ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit. Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (ce dernier n'étant pas implémenté)
         * @param {Types.CatalogueNode} node Le produit qu'on tente d'insérer
         * @param {CompositionOffreProduit} produitSupport L'occurence dans le panier du produit support du produit qu'on tente d'insérer (par ex, pour insérer un relevé de compte, il s'agira du compte).
         * @param {Types.InformationEntiteTitulaire | Types.Tiers.Personne} detenteur La personne ou l'entité qui détiendra le produit
         * @param {Types.DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet assemblage)
         * @param {CompositionOffreEntitePersonne} noeud? L'occurence du niveau 1 du panier (niveau entité/personne) sous laquelle on va insérer
         * @returns Le produit inséré dans le panier, undefined si rien n'est inséré
         */
        insererProduitEnModeCompte: (contexte: Types.ContexteGgo | Types.ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: Types.CatalogueNode, produitSupport: CompositionOffreProduit, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, donneesSelectionAssemblage?: Types.DonneesAssemblage, noeud?: CompositionOffreEntitePersonne) => CompositionOffreProduit;
        insererProduitEnModeMandataire: (contexte: Types.ContexteGgo | Types.ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: Types.CatalogueNode, produitSupport: CompositionOffreProduit, detenteur: Types.Tiers.Procuration, donneesSelectionAssemblage?: Types.DonneesAssemblage, noeud?: CompositionOffreEntitePersonne) => CompositionOffreProduit;
        /**
         * Similaire à calculerListeChoixAjoutProduitServicePourProduitsAvecCompteSupport, mais utilisée avec un produit qui n'est pas détenu
         * dans le panier afin d'identifier les produits supports potentiels de ce produit
         *
         * @param {Types.ProduitService} produitAjoute Le produit pour lequel on va déterminer les produits supports (ex si produitAjoute est une carte, on cherche le CDD)
         * @param {CompositionOffre} offre Le panier
         * @param {CompositionOffreEntitePersonne} compositionOffreEntitePersonne La partie du panier concernant le détenteur du produitAjoute
         * @param {Types.PropositionReprise} pr (une des) propositions de reprise du produitAjoute qui contient l'idegps du produit support qu'on cherche (ex 48 pour le CDD)
         * @param {Types.Tiers.Personne} personne? La personne qui détient pour les produits en mode personne. Si non précisé on prend le détenteur de compositionOffreEntitePersonne
         * @returns {ResultatSelection[]}
         */
        calculerProduitsSupportsPourProduitNonDetenu: (produitAjoute: Types.ProduitService, offre: CompositionOffre, compositionOffreEntitePersonne: CompositionOffreEntitePersonne, pr: Types.PropositionReprise, personne?: Types.Tiers.Personne) => ResultatSelection[];
        /**
         * Insère un P/S produit dans la composition, sous tous les P/S qui sont susceptibles de l'acceuillir. Peut fonctionner
         * en mode entité ou en mode personne
         * Généralement, il s'agit de P/S rattachés au compte courant.
         * En mode entité, il s'agit par ex du découvert (ajoutera un découvert sous tous les comptes courants**)
         * En mode personne, il s'agit par ex des cartes (ajoutera des cartes sous tous les comptes courants**)
         *
         * ** Ce commentaire a été écrit à l'époque où le BL couple était en cible. Depuis, le projet ayant été reporté, il ne peut en
         * pratique n'y avoir qu'un compte dans les offres BL (et épargne...)
         *
         * On ne peut insérer de produits en mode compte que sous des nodes de type entité
         * Renvoie une liste contenant les produits ajoutés
         *
         * @param {Types.ContexteGgo} contexte Le contexte GGO
         * @param {ModeAjoutProduitDansOffre} modeAjoutProduit Permet de déterminer la nature de l'icône qui sera affichée en regard du produit. Déterminé par l'appelant (cf fn testerProduit)
         * @param {OrigineProduit} origine P/S Simple / Assemblage interchangeable ou cumulable (ce dernier n'étant pas implémenté)
         * @param {Types.CatalogueNode} node Le produit qu'on tente d'insérer
         * @param {Types.InformationEntiteTitulaire} entite L'occurence dans le panier du produit support du produit qu'on tente d'insérer (par ex, pour insérer un relevé de compte, il s'agira du compte).
         * @param {Types.Tiers.Personne} personne? La personne détentrice, pour les produits detenus en mode personne (cartes...)
         * @param {Types.DonneesAssemblage} donneesSelectionAssemblage? Si le produit est dans un assemblage, contient la liste des produits de cet  assemblage)
         * @returns Une liste contenant les produits qui ont été insérés, afin, entre autres, d'émettre un event d'ajout vers les P/S
         */
        insererPlusieursProduitEnModeCompte: (contexte: Types.ContexteGgo | ContexteGgho, modeAjoutProduit: ModeAjoutProduitDansOffre, origine: OrigineProduit, node: Types.CatalogueNode, entite: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr, personne?: Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, donneesSelectionAssemblage?: Types.DonneesAssemblage) => Types.EvenementProduit[];
        /**
         * Recherche une entité ou une personne dans la composition
         * @param {Types.InformationEntiteTitulaire | Types.Tiers.Personne} detenteur La personne/entité recherchée
         * @returns L'entrée dans le niveau 1 du panier correspondant à la personne/entité recherchée
         */
        getEntiteOuPersonne: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration) => CompositionOffreEntitePersonne;
        /**
         * Cherche à déterminer si le produit passé en paramètre existe quelque part dans le panier et renvoie vrai si c'est le cas
         * Si le produit existe mais est marqué pour clôture, on considère qu"il n'existe pas
         * Si detenteur est précisé, ne renvoie vrai que si le produit est associé au detenteur passé en paramètre
         * @param produit Le produit recherché
         * @param detenteur Le détenteur, optionnel
         * @return Vrai si le produit est trouvé dans le panier, faux sinon.
         */
        rechercherProduitExiste: (produit: Types.ProduitService, detenteur?: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration) => boolean;
        /**
         * Vérifie qu'a un assemblage obligatoire correspond au moins un produit dans la composition de l'offre
         * La fonction est appelée par parcourirCatalogue qui s'occupe d'itérer sur tous les produits du catalogue.
         */
        verifierAssemblageObligatoire: (node: Types.CatalogueNode, argument: any, assemblagesPosantProbleme: Types.CatalogueNode[]) => boolean;
        /**
         * Vérifie qu'a un assemblage interchangeable correspond au plus un produit dans la composition de l'offre
         * La fonction est appelée par parcourirCatalogue qui s'occupe d'itérer sur tous les produits du catalogue.
         */
        verifierAssemblageInterchangeable: (node: Types.CatalogueNode, argument: any, assemblagesPosantProbleme: Types.CatalogueNode[]) => boolean;
        private rechercherProduitDejaDetenuDansAssemblage;
        /**
         * Détermine si le produit est détenu par l'entité ou la personne
         */
        private produitEstDetenu;
        /**
         * Création initiale de la composition (initialisation du panier au chargement de l'application)
         * Insère dans la composition les produits gérés en mode CB ou personne en itérant sur le catalogue
         */
        private traiterProduitsSansCompteSupport;
        /**
         *  Création initiale de la composition (initialisation du panier au chargement de l'application)
         *  Insère dans la composition les produits gérés en mode compte en itérant sur le catalogue
         */
        private traiterProduitsAvecCompteSupport;
        /**
         *  RAZ des produits associés à la composition
         */
        raz: () => void;
        /**
         * Calcul de la liste des choix possible pour l'ajout d'un P/S à la composition
         */
        calculerListeChoixAjoutProduitService: (produitAjoute: Types.ProduitService, personnes?: Types.Tiers.IProcuration[]) => ResultatSelection[];
        /**
         * Vérifie que le détenteur passé en paramètre ne détient aucun produit rattaché à l'assemblage
         * @param assemblage : L'assemblage testé
         * @param detenteur : Le detenteur
         * @param testFunc? : une fonction booléenne optionnelle permettant d'opérer des tests supplémentaires en fonction du contexte d'appel
         * @return vrai si detenteur détient un produit de assemblage (+conditions supplémentaires de testFunc), faux sinon
         */
        /**
         * Vérifie que le détenteur passé en paramètre ne détient aucun produit rattaché à l'assemblage
         * @param {Types.CatalogueNode} assemblage L'assemblage testé
         * @param {Types.InformationEntiteTitulaire | Types.Tiers.Personne} detenteur Le detenteur
         * @param {(compositionOffreProduit} testFunc? une fonction booléenne permettant d'opérer des tests supplémentaires en fonction du contexte d'appel
         * @returns Assemblage cumulatif : La liste des produits détenus pour cet assemblage, [] si aucun. Assemblage interchangeable : le produit de l'assemblage qui est détenu, undefined si aucun n'est détenu.
         */
        testerAssemblageDejaDetenu: (assemblage: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, testFunc?: (compositionOffreProduit: Types.CompositionOffreProduit) => boolean) => Types.CompositionOffreProduit[] | Types.CompositionOffreProduit;
        /**
         * Gère l'état de la tuile associé à un produit détenu dans un assemblage
         * @param liste : Une liste de personnes ou d'entité
         * @param assemblage : L'assemblage auquel appartient le produit
         * @return rien
         * Va mettre à jour la tuile correspondant à l'assemblage auquel appartient le produit. Si tous les membres de liste
         * détiennent un produit de assemblage, la tuile sera cochée + disabled (grise). Si au moins un membre détient un produit de assemblage, la
         * tuile sera coché mais enable (blanche). Si aucun membre ne détient un produit de assemblage, la tuile sera enable (blanche) non cochée.
         */
        modifierEtatTuile: (liste: (Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration)[], assemblage: Types.CatalogueNode) => void;
        /**
         * Permet de récupérer à partir d'une tuile (catalogueNode), un P/S présent dans le panier (CompositionOffreProduit)
         */
        recupererCompositionOffreProduitExistante: (catalogueNode: Types.CatalogueNode) => Types.CompositionOffreProduit;
        /**
         * Va construire l'offre à partir d'une liste d'ET et du catalogue de l'offre en
         * sélectionnant ce qui est obligatoire
         */
        constructor(contexte: Types.ContexteGgo | ContexteGgho, entites: Types.InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[], personnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[], catalogue: Types.CatalogueNode, paramBlocs: Types.ParametrageBlocs | Types.ParametrageBlocsGgho, options: IOptionsCreationComposition, dv: Types.DossierDeVente.GestionDossierVente, mandataires?: Types.Tiers.Procuration[]);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IContexteGgo {
        codeEtablissementConnexion: string;
        codeGuichetConnexion: string;
        codeEntite: string;
        codeCanal: string;
        codeSensCommunication: string;
        codeActeGestion: string;
        codeProduitServiceOffre: number;
        numeroOffreSouscrite: number;
        identifiantDossierVente: number;
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
        identifiantEntiteTitulaire: number;
        listeIdentifiantsEntitesTitulaires: number[];
        codeApplicationAppelante: string;
        codeModeDeVente: string;
        codeProcessusDeVente: string;
        agent: MyWay.Services.Context.AgentConnecte;
        codeProduit?: number;
        codeSousFamilleActeGestion?: string;
        codeTypeProduitServiceOffre?: string;
        numeroPersonneIdentifiee?: number;
        numeroOffreFamille?: number;
        typeTitulaire?: string;
    }
    /**
     * Contient le contexte GGO, càd les données susceptibles d'être utilisées à n'importe quel endroit de
     * l'application
     */
    class ContexteGgo {
        private _applicationType;
        /**
         * Indique l'application dans laquelle nous sommes => CGO
         * Pour ne pas faire interférence sur certaines fonctions avec GGO ou GGHO
         */
        applicationType: string;
        private _codeEtablissementConnexion;
        /**
         * Code établissement de l'agent connecté obtenu depuis donneesAuthentification.codeEtablissement
         */
        codeEtablissementConnexion: string;
        private _codeGuichetConnexion;
        /**
         * Code guichet de connexion obtenu depuis donneesComptable.codeGuichetInterbancaire
         */
        codeGuichetConnexion: string;
        private _codeEntite;
        /**
         * Code entité CDD2EN (1 AGENCE, 2 CRC 3 E-AGENCE 4 INTERNET)
         */
        codeEntite: string;
        private _codeCanal;
        /**
         * Code canal COD2CA (FF, TL, IN, CO, ...)
         */
        codeCanal: string;
        private _codeSensCommunication;
        /**
         * Code sens de communication CND2SS (E : Entrant, S : Sortant)
         */
        codeSensCommunication: string;
        private _codeActeGestion;
        /**
         * Code acte de gestion COELAG, deux lettres OU AV CL OC DO suivi de 8 chiffres.
         */
        codeActeGestion: string;
        private _codeProduitServiceOffre;
        /**
         * Code produit service IDEGPS de l'offre à souscrire
         */
        codeProduitServiceOffre: number;
        private _numeroOffreSouscrite;
        /**
         * Numéro de l'offre souscrite NOBCOF
         */
        numeroOffreSouscrite: number;
        private _identifiantDossierVente;
        /**
         * Identifiant du dossier de vente VMC NSD2DO
         */
        identifiantDossierVente: number;
        private _codeEtablissementContrat;
        /**
         * Référence contrat (en principe en avenant ou clôture seulement), établissement sur 5
         */
        codeEtablissementContrat: string;
        private _codeGuichetContrat;
        /**
         * Référence contrat (en principe en avenant ou clôture seulement), guichet sur 5
         */
        codeGuichetContrat: string;
        private _codeTypeProduitServiceContrat;
        /**
         * Référence contrat (en principe en avenant ou clôture seulement), code type P/S sur 4
         */
        codeTypeProduitServiceContrat: string;
        private _referenceProduitServiceContrat;
        /**
         * Référence contrat (en principe en avenant ou clôture seulement), référence P/S sur 11
         */
        referenceProduitServiceContrat: string;
        private _identifiantEntiteTitulaire;
        /**
         * Identifiant entité titulaire IDDIET
         */
        identifiantEntiteTitulaire: number;
        /**
         * Liste des entités titulaires : extension future pour les offres faisant intervenir plusieurs entités
         * titulaires. Si une seule entité est utilisée, la passer dans identifiantEntiteTitulaire
         */
        private _listeIdentifiantsEntitesTitulaires;
        listeIdentifiantsEntitesTitulaires: number[];
        private _codeApplicationAppelante;
        /**
         * Code application appelante (pas de rubrique PAC associée) : Ovad, PCM, MyWay ...
         * Permet d'effectuer des traitements spécifiques selon la nature de l'appelant
         */
        codeApplicationAppelante: string;
        private _codeModeDeVente;
        /**
         * Code mode de vente MEGI/VPC
         */
        codeModeDeVente: string;
        private _codeProcessusDeVente;
        /**
         * Code processus de vente VMC (DT44). Ex 0 => FACE_A_FACE_AGENCE
         */
        codeProcessusDeVente: string;
        private _agent;
        /**
         *  Informations sur l'agent connecté
         */
        agent: MyWay.Services.Context.AgentConnecte;
        private _numeroPersonneIdentifiee;
        /**
         * Numéro de la personne identifiée dans la synthèse.
         */
        numeroPersonneIdentifiee: number;
        codeSousFamilleActeDeGestion: string;
        private _numeroOffreFamille;
        /**
         * Numéro de l'offre famille
         */
        numeroOffreFamille: number;
        private _typeTitulaire;
        /**
         * Type titulaire
         */
        typeTitulaire: string;
        constructor(ic: IContexteGgo);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IOffreSource {
        codeActeGestion: string;
        codeCanal: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroEntiteTitulaire: string;
        numeroOffreSouscrite: string;
        libelleEntiteTitulaire: string;
        numeroPersonneIdentifiee: string;
        codeProduitServiceOffre: string;
        codeTypeCompte: string;
        numeroDeCompte: string;
        libelleProduitService: string;
        indicValidationOuvertureOffre: string;
        dateOuvertureOffre: string;
        dateDernierAvenantOffre: string;
        codeCaractereForfaitaireOffre: string;
    }
    interface IProduitCloture {
        identifiantProduitService: number;
        libelleProduitService: string;
        libelleLongProduitService: string;
        etatDuProduit: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        dateIntroductionProduitServiceDansOffre: string;
        dateDernierAvenantProduitServiceDansOffre: string;
        identifiantProduitServiceSupport: string;
        codeModaliteDetentionProduitService: string;
        codeAffichageReferenceProduitService: string;
        numeroPersonne: string;
        numeroEntiteTitulaire: string;
        numeroOffreSouscriteOrigine: string;
        numeroSequenceOuverture: string;
    }
    interface IContexteCgo extends IContexteGgo {
        numeroOffreFamille?: number;
        typeTitulaire?: string;
        applicationType?: string;
        indicateurPersonneProtegee?: string;
        ancienneOffre?: IOffreSource;
        produitsClotures?: Array<IProduitCloture>;
    }
    /** Contient le contexte GGO, càd les données susceptibles d'être utilisées à n'importe quel endroit de
     *  l'application
     */
    class ContexteCgo extends ContexteGgo {
        private _typeTiers;
        /**
         * indique le type de client (BDD/BDR)
         */
        typeTiers: string;
        private _indicateurPersonneProtegee;
        /**
         * indique si on est dans le cas d'une mise sous protection.
         */
        indicateurPersonneProtegee: string;
        private _ancienneOffre;
        /**
         * ancienne offre dans le cas d'un changement d'offre.
         */
        ancienneOffre: IOffreSource;
        private _produitsClotures;
        /**
         * indique si on est dans les d'une mise sous protection.
         */
        produitsClotures: Array<IProduitCloture>;
        constructor(ic: IContexteCgo);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IContexte {
        codeEntite: string;
        codeCanal: string;
        codeSensCommunication: string;
        codeActeGestion: string;
        codeProduitServiceOffre: number;
        numeroOffreSouscrite: number;
        identifiantDossierVente: number;
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
        identifiantEntiteTitulaire: number;
        codeApplicationAppelante: string;
        numeroPersonneidentifiee: number;
        numeroPersonneDetentrice?: number;
        codeProduitService?: number;
        identifiantContrat?: string;
        indicateurPersonneProtegee?: string;
        numeroOffreFamille?: number;
        typeTitulaire?: string;
        typeProcessVente: string;
    }
    /**
     * Contexte récupéré depuis l'application appelant GGO et stocké dans le contexte technique du framework.
     */
    class Contexte {
        private _codeEntite;
        private _applicationAppelante;
        private _isPro;
        private _indicateurSignaturePapier;
        private _typeProfessionnel;
        /**
         * Code entité CDD2EN (1 AGENCE, 2 CRC 3 E-AGENCE 4 INTERNET)
         */
        codeEntite: string;
        private _codeCanal;
        /**
         * Code canal COD2CA (FF, TL, IN, CO, ...)
         */
        codeCanal: string;
        private _codeSensCommunication;
        /**
         * Code sens de communication CND2SS (E : Entrant, S : Sortant)
         */
        codeSensCommunication: string;
        applicationAppelante: string;
        isPro: boolean;
        indicateurSignaturePapier: string;
        typeProfessionnel: string;
        private _codeActeGestion;
        /**
         * Code acte de gestion, deux lettres : OU AV CL
         */
        codeActeGestion: string;
        private _codeProduitServiceOffre;
        /**
         * Code produit service IDEGPS de l'offre à souscrire
         */
        codeProduitServiceOffre: number;
        private _numeroOffreSouscrite;
        /**
         * Numéro de l'offre souscrite NOBCOF
         */
        numeroOffreSouscrite: number;
        private _identifiantDossierVente;
        /**
         * Identifiant du dossier de vente VMC NSD2DO
         */
        identifiantDossierVente: number;
        private _codeEtablissementContrat;
        /**
         * N'est jamais renseigné
         * Référence contrat (en principe en avenant ou clôture seulement), établissement sur 5
         */
        codeEtablissementContrat: string;
        private _codeGuichetContrat;
        /**
         *  N'est jamais renseigné
         *  Référence contrat (en principe en avenant ou clôture seulement), guichet sur 5
         */
        codeGuichetContrat: string;
        private _codeTypeProduitServiceContrat;
        /**
         *  N'est jamais renseigné
         *  Référence contrat (en principe en avenant ou clôture seulement), code type P/S sur 4
         */
        codeTypeProduitServiceContrat: string;
        private _referenceProduitServiceContrat;
        /**
         * N'est jamais renseigné
         * Référence contrat (en principe en avenant ou clôture seulement), référence P/S sur 11
         */
        referenceProduitServiceContrat: string;
        private _identifiantEntiteTitulaire;
        /**
         * Identifiant entité titulaire IDDIET
         */
        identifiantEntiteTitulaire: number;
        private _codeApplicationAppelante;
        /**
         * Code application appelante (pas de rubrique PAC associée) : VMC, NSDK, ?
         *  Permet d'effectuer des traitements spécifiques selon la nature de l'appelant
         */
        codeApplicationAppelante: string;
        private _numeroPersonneIdentifiee;
        /**
         * N° de personne identifiée dans la synthèse client. Utilisé entre autres pour la contract et pour déterminer le titulaire de l'offre
         */
        numeroPersonneIdentifiee: number;
        private _numeroPersonneDetentrice;
        /**
         * N° de personne identifiée dans la synthèse client. Utilisé pour la contract
         */
        numeroPersonneDetentrice: number;
        private _codeProduitService;
        /**
         * Code produit service IDEGPS de l'offre à souscrire
         */
        codeProduitService: number;
        private _identifiantContrat;
        /**
         * Libellé produit titre
         */
        identifiantContrat: string;
        private _indicateurPersonneProtegee;
        /**
         * indique si l'on est dans le cas d'une mise sous protection ("O")
         */
        indicateurPersonneProtegee: string;
        private _numeroOffreFamille;
        /**
         * si l'offre fait partie d'une offre famille, correspond au numero de l'offre famille
         * (on est donc sur une offre solo)
         */
        numeroOffreFamille: number;
        private _typeProcessVente;
        typeProcessVente: string;
        private _typeTitulaire;
        typeTitulaire: string;
        constructor(ic: IContexte);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IContexteGgho extends IContexteGgo {
        numeroPersonneDetentrice?: number;
        identifiantContrat?: string;
        codeProduitService: number;
        applicationAppelante?: string;
        isPro?: boolean;
        indicateurSignaturePapier?: string;
        typeProfessionnel?: string;
    }
    /** Contient le contexte GGO, càd les données susceptibles d'être utilisées à n'importe quel endroit de
     *  l'application
     */
    class ContexteGgho extends ContexteGgo {
        private _numeroPersonneDetentrice;
        private _applicationAppelante;
        private _isPro;
        private _indicateurSignaturePapier;
        private _typeProfessionnel;
        /**
         * Numéro de la personne detentrice dans la synthèse.
         */
        numeroPersonneDetentrice: number;
        applicationAppelante: string;
        isPro: boolean;
        indicateurSignaturePapier: string;
        typeProfessionnel: string;
        private _identifiantContrat;
        /**
         * Rubrique boite noire.
         */
        identifiantContrat: string;
        private _codeProduitService;
        /** Code produit service IDEGPS de l'offre à souscrire */
        codeProduitService: number;
        constructor(ic: IContexteGgho);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface ISituationFinanciere {
        montantCapitalSocial: number;
        montantChiffreAffaires: number;
        effectif: number;
        dateArreteComptable: number;
        anneeChiffreAffaires: number;
    }
    interface ICorporateInformation {
        codeSituationJuridique: string;
        numeroSiren: string;
        codeIndicateurEntrepriseEtrangere: string;
        dateCreationJuridique: Date;
        raisonSociale: string;
        nomCommercial: string;
        codeTypeCommerceOrganise: string;
        codeAgentEconomique: string;
        identifiantTiers: number;
        situationFinanciere: ISituationFinanciere;
        codeEtablissement: string;
        codeDeviseISO4217a3: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        codeTypeTiers: string;
        codeRegimeFiscal: string;
        codeCotation: string;
        codeAppartenanceReseau: string;
        adresse: IAdresse;
        codeCategoJuridi2DerCaracteres: string;
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
        numeroImmatriculation: string;
        sigle: string;
        etablissement: IEtablissement;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        listeMotCle: Array<string>;
        numeroChrono: number;
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        codeTypePersonne: string;
        prospect: IProspect;
        indicateurDroitAuCompte: string;
        professionnelImmobilier: IProfessionnelImmobilier;
        dateClotureJuridique: Date;
        codeMajImmatriculation: string;
        listeImmatriculation: Array<IImmatriculation>;
        identifiantLei: string;
        codeEmir: string;
        indicateurDelegationDeclaration: string;
        codeBlocageVao: string;
        indiceAmericanite: string;
        indicateurPresenceClassif: string;
        brancheActivite: string;
        indicProspectRestreint: boolean;
        codeEtatPersonne: string;
        typeRelation: string;
        indicateurMarcheReglemente: boolean;
        referenceInterneEDS: number;
    }
    interface IAdresse {
        identifiant: number;
        codeType: string;
        indicateurEnvoiCourrier: string;
        codePays: string;
        codeTypeLieu: string;
    }
    interface IEtablissement {
        designationCourteLieuActivite: string;
        designationLongueLieuActivite: string;
        dateDebutExploitationLieuActivite: Date;
        codeResident: string;
        numeroComplementSIRET: string;
        dateFinExploitation: Date;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IProspect {
        codeSegmentation: string;
        numeroPortefeuille: number;
        codeTypeSegmentation: string;
    }
    interface IProfessionnelImmobilier {
        indicateurSteCivileImmoPatrimoniale: boolean;
        indicateurSocieteExploitation: boolean;
        indicateurStrDedieeA1OpeImmoMax: boolean;
        indicateurGarantieSurActifImmoFi: boolean;
        indicateurStrRemboursementDesConcours: boolean;
        indicateurExerciceSup1ActiviteImmo: boolean;
        codeCategorieProfImmo: string;
        timestampCreationQuestionnairePIM: string;
    }
    interface IImmatriculation {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfesionnel: number;
        codeTypeRegistre: string;
        numeroImmatriculationRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
    }
    class Etablissement implements IEtablissement {
        private _designationCourteLieuActivite;
        designationCourteLieuActivite: string;
        private _designationLongueLieuActivite;
        designationLongueLieuActivite: string;
        private _dateDebutExploitationLieuActivite;
        dateDebutExploitationLieuActivite: Date;
        private _codeResident;
        codeResident: string;
        private _numeroComplementSIRET;
        numeroComplementSIRET: string;
        private _dateFinExploitation;
        dateFinExploitation: Date;
        constructor(ie: IEtablissement);
    }
    class CorporateInformation implements ICorporateInformation {
        private _codeSituationJuridique;
        codeSituationJuridique: string;
        private _numeroSiren;
        numeroSiren: string;
        private _codeIndicateurEntrepriseEtrangere;
        codeIndicateurEntrepriseEtrangere: string;
        private _dateCreationJuridique;
        dateCreationJuridique: Date;
        private _raisonSociale;
        raisonSociale: string;
        private _nomCommercial;
        nomCommercial: string;
        private _codeTypeCommerceOrganise;
        codeTypeCommerceOrganise: string;
        private _codeAgentEconomique;
        codeAgentEconomique: string;
        private _identifiantTiers;
        identifiantTiers: number;
        private _situationFinanciere;
        situationFinanciere: ISituationFinanciere;
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeDeviseISO4217a3;
        codeDeviseISO4217a3: string;
        private _dureeViePersonneMorale;
        dureeViePersonneMorale: number;
        private _codePieceJustificative;
        codePieceJustificative: string;
        private _codeTypeTiers;
        codeTypeTiers: string;
        private _codeRegimeFiscal;
        codeRegimeFiscal: string;
        private _codeCotation;
        codeCotation: string;
        private _codeAppartenanceReseau;
        codeAppartenanceReseau: string;
        private _adresse;
        adresse: IAdresse;
        private _codeCategoJuridi2DerCaracteres;
        codeCategoJuridi2DerCaracteres: string;
        private _codeFamilleCategorieJuridique;
        codeFamilleCategorieJuridique: string;
        private _codeGuichetRisque;
        codeGuichetRisque: number;
        private _referenceExterneEDS;
        referenceExterneEDS: number;
        private _eligibiliteTiers;
        eligibiliteTiers: string;
        private _codeTypeRegistre;
        codeTypeRegistre: string;
        private _lieuInscriptionRegistre;
        lieuInscriptionRegistre: string;
        private _dateImmatriculation;
        dateImmatriculation: Date;
        private _numeroImmatriculation;
        numeroImmatriculation: string;
        private _sigle;
        sigle: string;
        private _etablissement;
        etablissement: IEtablissement;
        private _listeMessageFonctionnel;
        listeMessageFonctionnel: Array<any>;
        private _listeMotCle;
        listeMotCle: Array<string>;
        private _numeroChrono;
        numeroChrono: number;
        private _codeTeteGroupe;
        codeTeteGroupe: string;
        private _troisDerniersCaracteresNAF;
        troisDerniersCaracteresNAF: string;
        private _codeFamilleNAFINSEE;
        codeFamilleNAFINSEE: string;
        private _activiteEconomiqueReelleProfessionnelle;
        activiteEconomiqueReelleProfessionnelle: string;
        private _indicateurDroitAuCompte;
        indicateurDroitAuCompte: string;
        private _codeAgentEconomiqueTheorique;
        codeAgentEconomiqueTheorique: string;
        private _codeModeAttributionAgentEconomique;
        codeModeAttributionAgentEconomique: string;
        private _codeTypePersonne;
        codeTypePersonne: string;
        private _prospect;
        prospect: IProspect;
        private _professionnelImmobilier;
        professionnelImmobilier: IProfessionnelImmobilier;
        private _dateClotureJuridique;
        dateClotureJuridique: Date;
        private _codeMajImmatriculation;
        codeMajImmatriculation: string;
        private _listeImmatriculation;
        listeImmatriculation: Array<IImmatriculation>;
        private _identifiantLei;
        identifiantLei: string;
        private _codeEmir;
        codeEmir: string;
        private _indicateurDelegationDeclaration;
        indicateurDelegationDeclaration: string;
        private _codeBlocageVao;
        codeBlocageVao: string;
        private _indiceAmericanite;
        indiceAmericanite: string;
        private _indicateurPresenceClassif;
        indicateurPresenceClassif: string;
        private _brancheActivite;
        brancheActivite: string;
        private _indicProspectRestreint;
        indicProspectRestreint: boolean;
        private _codeEtatPersonne;
        codeEtatPersonne: string;
        private _typeRelation;
        typeRelation: string;
        getLibelle: string;
        getId: number;
        private _indicateurMarcheReglemente;
        indicateurMarcheReglemente: boolean;
        private _referenceInterneEDS;
        referenceInterneEDS: number;
        constructor(ici: ICorporateInformation);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface ILien {
        identifiantTiersEnRelation: number;
        dateCreation: Date;
        codeType: string;
        dateMiseAJour: Date;
        referencePieceJustificative: string;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        designationCourte: string;
        codeFamille: string;
        codeCaracteristique: string;
        codeQualification: string;
        pourcentageCapitalistique: number;
        numero: number;
        libelleType: string;
        codeSens: number;
        codePersonnaliteJuridique: string;
        referenceLocataire: string;
        tauxDroitVote: number;
    }
    interface ICorporateTiersLies {
        identifiantTiers: number;
        listeLien: Array<ILien>;
        codeEtablissement: string;
        indicateurBordereauImprimer: boolean;
    }
    class CorporateTiersLies implements ICorporateTiersLies {
        private _identifiantTiers;
        identifiantTiers: number;
        private _listeLien;
        listeLien: Array<ILien>;
        private _codeEtablissement;
        codeEtablissement: string;
        private _indicateurBordereauImprimer;
        indicateurBordereauImprimer: boolean;
        constructor(m: ICorporateTiersLies);
    }
}

declare module GestionGeneriqueOffres.Types.Cloture {
    import Personne = GestionGeneriqueOffres.Types.Tiers.Personne;
    import PersonneMorale = GestionGeneriqueOffres.Types.Tiers.PersonneMorale;
    import InformationEntiteTitulaire = GestionGeneriqueOffres.Types.InformationEntiteTitulaire;
    import InformationEntiteTitulaireBdr = GestionGeneriqueOffres.Types.InformationEntiteTitulaireBdr;
    import OffreSouscrite = GestionGeneriqueOffres.Types.OffreSouscrite;
    import Etablissement = GestionGeneriqueOffres.Types.Etablissement;
    /**
     * Classe destinée à enregistrer les données spécifiques au produit service
     */
    class DonneesProduit {
        private _detenteur;
        /**
         * Le détenteur des P/S si situant dans les niveaux inférieurs de la composition
         */
        detenteur: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration;
        private _produit;
        /**
         * Lien vers les informations relatives au produit
         */
        produit: ProduitService;
        private _pointsEntree;
        /**
         * La liste des points d'entrée (fonctions) que GGO pourra appeler pour déclencher une action dans le composant
         */
        pointsEntree: PointsEntree;
        private _invisible;
        /**
         * Indique si le composant P/S doit être restitué à l'écran ou pas. S'applique prioritairement sur toutes les vues.
         * càd que si invisible est vrai, le composant ne sera affiché ni en perso, ni en récap.
         */
        invisible: Invisible;
        private _idProducteur;
        /**
         * L'identifiant du producteur à fixer par le produit service:
         * Par défaut (pas de producteur pour ce P/S) : vide
         * Pour IARD : "BPCEA_IMPACT"
         * Pour IZIVENTE: "NFI_IZIVENTE"
         */
        idProducteur: Producteur;
        private _estModifie;
        /**
         * Indicateur valant vrai si les données du P/S ont été modifiées par l'utilisateur. Cet indicateur est positionné par le P/S.
         * La valeur n'a de sens qu'en avenant, il ne faut pas l'utiliser pour l'ouverture ou la clôture
         * Par défaut : faux.
         */
        estModifie: EstModifie;
        private _indicateurModeVersement;
        /**
         * Indicateur de versement, requis par la contract.
         */
        indicateurModeVersement: IndicateurModeVersement;
        private _referenceProduitPrincipalOffre;
        /**
         * Référence du produit principal de l'offre. "Bindée" à la variable globale REFERENCE_PRODUIT_PRINCIPAL_OFFRE.
         */
        referenceProduitPrincipalOffre: ReferenceProduitPrincipalOffre;
        private _codeTypeProduitServicePrincipalOffre;
        /**
         * Référence du produit principal de l'offre. "Bindée" à la variable globale REFERENCE_PRODUIT_PRINCIPAL_OFFRE.
         */
        codeTypeProduitServicePrincipalOffre: CodeTypeProduitServicePrincipalOffre;
        private _routageEditique;
        /**
         * Routage éditique permettant de savoir quelle SPA éditique GGO va appeler.  "Bindée" à la variable globale ROUTAGE_EDITIQUE.
         */
        routageEditique: RoutageEditique;
        private _controlesPreRequis;
        /**
         * Liste des contrôles pré-requis à effectuer.
         */
        controlesPreRequis: ControlePreRequis[];
        private _repris;
        /**
         * Indicateur produit repris d'une autre offre
         */
        repris: boolean;
        private _produitSelectionne;
        /**
         * Designe le produit sélectionné dans l'assemblage
         */
        produitSelectionne: CleValeur;
        private _donneesSelectionAssemblage;
        /**
         * Les données de sélection qui proviennent de l'assemblage pour un produit choisi dans un assemblage
         * contient l'assemblage lui même, l'id de la directive sélection si il en existe une, la liste des produits
         * qui ont été sélectionnés dans l'assemblage, le produit par défaut etc.
         */
        donneesSelectionAssemblage: DonneesAssemblage;
        private _idBlocProduitSupport;
        /**
         * Id bloc du produit support si ce produit est détenu par un produit support
         */
        idBlocProduitSupport: string;
        private _reference;
        /**
         * Les références de gestion du P/S
         */
        reference: PropositionReprise;
        constructor(detenteur: InformationEntiteTitulaire | Tiers.Personne | InformationEntiteTitulaireBdr | Tiers.PersonneMorale | Tiers.Procuration, produit: ProduitService, invisible: Invisible, idProducteur: Producteur, estModifie: EstModifie, indicateurModeVersement: IndicateurModeVersement, referenceProduitPrincipalOffre: ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: CodeTypeProduitServicePrincipalOffre, routageEditique: RoutageEditique, repris: boolean, produitSelectionne: CleValeur, donneesSelectionAssemblage: any, pointsEntree: PointsEntree, controlesPreRequis: ControlePreRequis[], idBlocProduitSupport: string, reference: PropositionReprise);
    }
    /**
     *  Les données que GGO passe à chaque composant produit service
     *  Contient une partie commune à tous les composants (personnes, entités etc.) ainsi que des informations
     *  spécifiques au composant. Ces dernières sont groupées dans DonneesProduit
     */
    class DonneesContextuelles {
        private _modeAcces;
        /**
         * Le mode d'accès à la directive
         * Lecture : La directive doit être en lecture seule (les champs doivent être disabled, etc.)
         * Ecriture : Tous les champs sont actifs
         */
        modeAcces: ModeAcces;
        private _modeAffichage;
        /**
         * Le mode d'affichage demandé
         * Personnalisation : la directive doit afficher son IHM de personnalisation
         * Recapitulatif : la directive doit afficher son IHM récap (sans données en modif)
         */
        modeAffichage: ModeAffichage;
        private _contexteAppel;
        /**
         * Le contexte d'appel de la directive
         * Première fois : on l'appele pour la première fois sur l'écran perso
         * Fois suivantes : on la rappelle en revenant de l'écran récap
         */
        contexteAppel: ContexteAppel;
        private _appelant;
        /**
         * L'application appelante : GGO BDD, GGHO, GGO BDR. Permet au P/S de savoir comment se comporter en fonction de qui l'appelle
         */
        appelant: AppelantsGgo;
        private _personnes;
        /**
         * Les personnes impliquées dans l'offre. Déduites de la composition de la / des entités titulaires
         */
        personnes: Personne[] | PersonneMorale[];
        private _entitesTitulaires;
        /**
         * La ou les entités titulaires. Il n'y a plus d'une entité que pour les offres type BL Couple.
         */
        entitesTitulaires: (InformationEntiteTitulaire | InformationEntiteTitulaireBdr)[];
        private _offreSouscrite;
        /**
         * Les données spécifiques à l'offre susceptibles d'être utiles à un bloc métier
         */
        offreSouscrite: OffreSouscrite;
        private _etablissement;
        /**
         * L'établissement.
         */
        etablissement: Etablissement;
        private _indicateurDossierVenteAutorise;
        /**
         * Indique si on travaille on mode dossier de vente ou pas. Le fait que l'indicateur soit à vrai ne signifie pas
         * forcément qu'on aie un dossier de vente initialisé, mais qu'on en aura un éventuellement plus tard (à la sauvegarde par ex.)
         */
        indicateurDossierVenteAutorise: boolean;
        private _dossierVente;
        /**
         * Le dossier de vente
         */
        dossierVente: DossierDeVente.GestionDossierVente;
        private _donneesGeneriquesTousProduits;
        /**
         * Les données génériques de tous les produits
         */
        donneesGeneriquesTousProduits: DossierDeVente.IDonneesGeneriques[];
        private _donneesGeneriques;
        /**
         * Les données génériques
         */
        donneesGeneriques: DossierDeVente.IDonneesGeneriques[];
        private _catalogue;
        /**
         * Le catalogue de l'offre ciblée
         */
        catalogue: CatalogueNode;
        private _composition;
        /**
         * Les produits mis dans la composition organisés par niveaux hiérarchiques
         */
        composition: CompositionOffre;
        private _donneesMiseEnGestion;
        /**
         * Tableau des données renvoyées par les P/S au cours de la mise en gestion
         */
        donneesMiseEnGestion: DonneesMiseEnGestion[];
        private _donneesProduit;
        /**
         * Données spécifiques au P/S : points d'entrée et données produit
         */
        donneesProduit: DonneesProduit;
        private _referencesProduits;
        /**
         * Références produit. En souscription, contient les références des produtis repris.
         * En avenant/clôture, les produits rattachés à  l'offre
         */
        referencesProduits: ReferenceProduit[];
        private _listeSignataires;
        /**
         * Liste des signataires. Nécessaire pour la BAT opefi.
         */
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        private _lienVersComposition;
        /**
         *  Lien vers la composition, si on dispose de l'info au moment de la fabrication des données contextuelles
         */
        lienVersComposition: CompositionOffreProduit;
        private _indicateurPersonneProtegee;
        /**
         *  Indique si l'on est dans le cas d'une personne protégée
         */
        indicateurPersonneProtegee: string;
        /**
         * Libelle titre produit
         */
        private _libTitreProduit;
        libTitreProduit: string;
        constructor(modeAcces: ModeAcces, modeAffichage: ModeAffichage, contexteAppel: ContexteAppel, appelant: AppelantsGgo, personnes: Personne[] | PersonneMorale[], entitesTitulaires: InformationEntiteTitulaire[] | InformationEntiteTitulaireBdr[], offreSouscrite: OffreSouscrite, etablissement: Etablissement, indicateurDossierVenteAutorise: boolean, dossierVente: DossierDeVente.GestionDossierVente, donneesGeneriquesTousProduits: DossierDeVente.IDonneesGeneriques[], donneesGeneriques: DossierDeVente.IDonneesGeneriques[], catalogue: CatalogueNode, composition: CompositionOffre, donneesMiseEnGestion: DonneesMiseEnGestion[], donneesProduit: DonneesProduit, referencesProduits: ReferenceProduit[], listeSignataires: myway.comContract.modeles.ISignataireComplet[], lienVersComposition: CompositionOffreProduit, indicateurPersonneProtegee?: string, libTitreProduit?: string);
    }
}

declare module GestionGeneriqueOffres.Types {
    import Personne = GestionGeneriqueOffres.Types.Tiers.Personne;
    import PersonneMorale = GestionGeneriqueOffres.Types.Tiers.PersonneMorale;
    import InformationEntiteTitulaire = GestionGeneriqueOffres.Types.InformationEntiteTitulaire;
    import InformationEntiteTitulaireBdr = GestionGeneriqueOffres.Types.InformationEntiteTitulaireBdr;
    import OffreSouscrite = GestionGeneriqueOffres.Types.OffreSouscrite;
    import Etablissement = GestionGeneriqueOffres.Types.Etablissement;
    enum NiveauErreur {
        Ok = 0,
        Warning = 1,
        Erreur = 2,
        ErreurFatale = 3,
    }
    /**
     * Indique à un composant produit service si il est appelé en mode lecture seule ou en mode lecture/écriture
     * Mode lecture seule : le composant doit verrouiller tous ses champs
     * Mode lecture/ écriture : le composant doit autoriser ses champs modifiables (texte, combos, radio bouton ...) en modification
     */
    enum ModeAcces {
        Lecture = 0,
        Ecriture = 1,
    }
    /**
     * Indique à un composant produit service si celui-ci est appelé depuis l'écran composition/personnalisation ou depuis l'écran récap.
     */
    enum ModeAffichage {
        Personnalisation = 0,
        Recapitulatif = 1,
    }
    /**
     * Indique à un composant produit service de sélection si celui-ci est appelé depuis l'IHM de sélection de l'assemblage ou depuis la
     * personnalisation
     */
    enum ModeAppel {
        Selection = 0,
        Personnalisation = 1,
    }
    /**
     * Indique à un composant produit service si celui ci est appelé pour la première fois (INIT) ou s'il est rappelé après qu'on soit revenu de l'écran
     * récap en ayant utilisé le bouton revenir (RETOUR)
     */
    enum ContexteAppel {
        Init = 0,
        Retour = 1,
    }
    /**
     * Enum appelants GGO
     *
     */
    enum AppelantsGgo {
        GgoBdd = 1,
        Ggho = 2,
        GgoBdr = 3,
        Cgo = 4,
    }
    /**
     * Gestion des messages d'erreur, en particulier ceux émis par les composants P/S métier
     */
    class ErreurGestionGeneriqueOffre {
        private _visible;
        /**
         * Si visible est vrai, cela signifie que le message doit être restitué par GGO.
         * Dans le cas contraire, le message n'est pas restitué à l'écran mais peut néanmoins être utilisé à fins de contrôle ou autre.
         */
        visible: boolean;
        private _niveau;
        /**
         * Niveau de gravité du message
         */
        niveau: NiveauErreur;
        private _codeErreur;
        /**
         * Par convention, 0  = pas d'erreur => Niveau = OK
         */
        codeErreur: number;
        private _message;
        /**
         * Le message à afficher si visible = vrai
         */
        message: string;
        private _emetteur;
        /**
         * Identifiant du bloc ayant émis le message
         */
        emetteur: string;
        private _libelleComposantEmetteur;
        libelleComposantEmetteur: string;
        private _visite;
        visite: boolean;
        /**
         * Les paramètres niveau, code et message sont obligatoires
         * Les paramètres emetteur et visible sont facultatifs
         * Si emetteur est spécifié, il doit être renseigné avec l'id du composant produit/service ayant envoyé
         * l'erreur (paramètre id-bloc). GGO affichera alors un lien permettant de naviguer vers le bloc correspondant
         * au composant. Si il est omis, GGO n'affichera pas de lien
         * Si visible est omis, il est considéré vrai.
         */
        constructor(niveau: NiveauErreur, code: number, message: string, emetteur?: string, libelleComposantEmetteur?: string, visible?: boolean);
    }
    /**
     * Objet décrivant le retour d'un P/S suite à sa mise en gestion
     */
    class ResultatControlePrerequis {
        private _resultat;
        /**
         * Résultat du contrôle : vrai : ok, faux : ko
         */
        resultat: boolean;
        private _code;
        /**
         * Eventuel code associé au résultat du contrôle.
         */
        code: string;
        private _message;
        /**
         * Eventuel message associé au résultat du contrôle.
         */
        message: string;
        private _donnees;
        /**
         * Données banalisées renvoyées par le contrôle (ex myway.comRisquesClient.Model.PersonneBDF pour le contrôle BDF)
         */
        donnees: any;
        constructor(resultat: boolean, code?: string, message?: string, donnees?: any);
    }
    /**
     * Description d'un contrôle de prérequis. Chaque contrôle demande une implémentation spécifique, par conséquent la description d'un
     * contrôle dépend largement du contrôle en question.
     */
    class ControlePreRequis {
        private _idControlePrincipal;
        /**
         * Valeur : NBL2 pour le contrôle de la note Bâle 2, BDF pour le contrôle BDF.
         */
        idControlePrincipal: string;
        private _idControleSecondaire;
        /**
         * Sous-contrôle spécifique à effectuer.
         * Pour le contrôle BDF, cette donnée doit prendre la valeur 01 pour un produit chèque, 03 ou 04 pour un produit découvert,
         * 02 pour un produit carte
         * Pour le contrôle NBL2, => à définir.
         */
        idControleSecondaire: string;
        private _idDirective;
        idDirective: string;
        private _resultatControle;
        /**
         * Le résultat du contrôle. Si undefined, c'est que le contrôle n'a pas (encore) été effectué.
         */
        resultatControle: ResultatControlePrerequis;
        private _donneesControle;
        /**
         * Les données associées au contrôle à fournir par le composant. Ces données doivent être :
         * Pour un contrôle BDF de type DECOUVERT : rien ({})
         * Pour un contrôle BDF de type CARTE : rien ({})
         * Pour un contrôle BDF de type CHEQUE: un objet de la forme suivante :
         * {
         *    "codeTypeChequier": "XXX", (string)
         *    "nombreChequierCommande": nnn, (number)
         *    "codeFamilleChequier":"YYY" (string)
         * }
         */
        donneesControle: any;
        constructor(idControlePrincipal: string, idControleSecondaire: string, idDirective?: string);
    }
    /**
     * L'objet renvoyé par la fonction de mise en gestion d'un P/S
     */
    class CompteRenduMiseEnGestion {
        private _erreurs;
        /**
         * Le code erreur si nécessaire, sinon renvoyer un code à OK / 0
         */
        erreurs: ErreurGestionGeneriqueOffre[];
        private _donnees;
        /**
         * Les données. Si pas de données, renvoyer [] (fait par la fonction par défaut)
         */
        donnees: any;
        private _donneesEditique;
        /**
         * Les données. Si pas de données, renvoyer [] (fait par la fonction par défaut)
         */
        donneesEditique: any;
        constructor(erreurs: ErreurGestionGeneriqueOffre[], donnees?: any, donneesEditique?: any);
    }
    /**
     * Elément de tableau dans lequel sont stockés les données renvoyées par la P/S au cours de la mise en gestion
     */
    interface IDonneesMiseEnGestion {
        idBloc: string;
        codeTypeProduitService: string;
        identifiantProduitService: number;
        codeSousFamilleActeGestion: string;
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        codeProduitServiceExterne: string;
        valeur?: any;
        donneesEditique?: any;
    }
    class DonneesMiseEnGestion {
        private _idBloc;
        /**
         * Id du bloc portant le P/S
         */
        idBloc: string;
        private _codeTypeProduitService;
        /**
         * Code type produit service sur 4 (CODIPR)
         */
        codeTypeProduitService: string;
        private _identifiantProduitService;
        /**
         * Identifiant P/S (IDEGPS)
         */
        identifiantProduitService: number;
        private _codeSousFamilleActeGestion;
        /**
         * Code sous famille acte de gestion (OU/AV/CL)
         */
        codeSousFamilleActeGestion: string;
        private _detenteur;
        /**
         * Détenteur du P/S : personne ou entité
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _codeProduitServiceExterne;
        /**
         * Code produit service externe (COEGEX)
         */
        codeProduitServiceExterne: string;
        private _valeur;
        /**
         * Les données remontées par le P/S
         */
        valeur: any;
        private _donneesEditique;
        /**
         * Les données remontées par le P/S
         */
        donneesEditique: any;
        constructor(idmg: IDonneesMiseEnGestion);
    }
    /**
     * Elément de tableau dans lequel sont stockés les données renvoyées par la P/S au cours de la mise en gestion
     */
    interface IReferenceProduit {
        codeTypeProduitService: string;
        identifiantProduitService: number;
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        codeProduitServiceExterne: string;
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
    }
    class ReferenceProduit {
        private _codeTypeProduitService;
        /**
         * Code type produit service sur 4 (CODIPR)
         */
        codeTypeProduitService: string;
        private _identifiantProduitService;
        /**
         * Identifiant P/S (IDEGPS)
         */
        identifiantProduitService: number;
        private _detenteur;
        /**
         * Détenteur du P/S : personne ou entité
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _codeProduitServiceExterne;
        /**
         * Code produit service externe (COEGEX)
         */
        codeProduitServiceExterne: string;
        private _codeEtablissementContrat;
        /**
         * Référence du P/S à reprendre, code établissement COCXBQ
         */
        codeEtablissementContrat: string;
        private _codeGuichetContrat;
        /**
         * Référence du P/S à reprendre, code guichet COCXGU
         */
        codeGuichetContrat: string;
        private _codeTypeProduitServiceContrat;
        /**
         * Référence du P/S à reprendre, code type produit service CODIPR
         */
        codeTypeProduitServiceContrat: string;
        private _referenceProduitServiceContrat;
        /**
         * Référence du P/S à reprendre, référence produit sur 11 COBCRF
         */
        referenceProduitServiceContrat: string;
        constructor(irp?: IReferenceProduit);
    }
    /**
     * Point d'entrée dédié à la fonction de restitution des données du bloc métier
     * La fonction de restitution doit fournir en retour un objet contenant les données génériques qui lui sont associées.
     */
    /**
     * Point d'entrée dédié à la fonction de validation des données du bloc métier
     * La fonction de validation doit permettre de déclencher les contrôles de surface du bloc.
     */
    interface IPointEntreeFonctionValidation {
        (): ng.IPromise<ErreurGestionGeneriqueOffre[]>;
    }
    /**
     * Point d'entrée dédié à la fonction de mise en gestion pré-producteur du bloc métier
     * La fonction de mise en gestion doit provoquer l'appel à la ressource de mise en gestion du produit service
     * Le processus de mise en gestion sera interrompu en cas de réception d'un message de niveau ErreurFatale
     */
    interface IPointEntreeFonctionMiseEnGestion {
        (contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<CompteRenduMiseEnGestion>;
    }
    /**
     * Point d'entrée dédié à la fonction de mise en gestion post-producteur du bloc métier
     * La fonction de mise en gestion doit provoquer l'appel à la ressource de mise en gestion du produit service
     * Le processus de mise en gestion sera interrompu en cas de réception d'un message de niveau ErreurFatale
     */
    interface IPointEntreeFonctionMiseEnGestionPostProducteur {
        (str?: string): ng.IPromise<CompteRenduMiseEnGestion>;
    }
    /**
     * Point d'entrée dédié à la fonction de sauvegarde des données du P/S dans le dossier de vente
     */
    interface IPointEntreeFonctionSauvegarde {
        (): ng.IPromise<DossierDeVente.ISauvegardeDonneesGeneriques>;
    }
    /**
     * Point d'entrée dédié à la gestion ex-ante du Livret A
     */
    interface IPointEntreeGestionExAnte {
        (): ng.IPromise<CompteRenduMiseEnGestion>;
    }
    /**
     * Point d'entrée dédié à la fonction de sauvegarde  du contexte editique GGHO
     */
    interface IPointEntreeSauvegardeContexteEditique {
        (): ng.IPromise<ISauvegardeContexteEditiqueGgho>;
    }
    /**
     * Point d'entrée dédié aux débranchements éditiques dans le cadre de la VPC BL
     */
    interface IPointEntreeDemanderDebranchementPreEditiqueVpc {
        (contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<CompteRenduMiseEnGestion>;
    }
    interface IPointEntreeGetTimers {
        (): Array<ITimerServicesRest>;
    }
    interface ITimer {
        libelle: string;
        timeStart: number;
        timeEnd: number;
        duration: number;
    }
    interface ITimerServicesRest extends ITimer {
        verbe?: string;
        noyau?: string;
        ressource?: string;
    }
    /**
     * Regroupement des différentes fonctions d'accès au produit/service
     */
    class PointsEntree {
        private _validerFormulaire;
        /**
         * Effectue les controles de surface.
         */
        validerFormulaire: IPointEntreeFonctionValidation;
        private _mettreEnGestion;
        /**
         * Procède à la mise en gestion pré-producteur
         * Pour éviter d'avoir à renommer les appels dans tous les composants P/S, la fonction garde son ancien nom
         * (mettreEnGestion), plutôt que d'être rebaptisée mettreEnGestionPreProducteur
         */
        mettreEnGestion: IPointEntreeFonctionMiseEnGestion;
        private _mettreEnGestionPostProducteur;
        /**
         * Procède à la mise en gestion post-producteur
         */
        mettreEnGestionPostProducteur: IPointEntreeFonctionMiseEnGestionPostProducteur;
        private _sauvegarderDossierDeVente;
        /**
         * Procédé de sauvegarde du dossier de vente
         */
        sauvegarderDossierDeVente: IPointEntreeFonctionSauvegarde;
        private _gererExAnte;
        /**
         * Point d'entrée spécifique Livret A ex-ante.
         */
        gererExAnte: IPointEntreeGestionExAnte;
        /**
         * Point d'entrée GGHO : sauvegarde contexte editique .
         */
        private _sauvegarderContexteEditique;
        sauvegarderContexteEditique: IPointEntreeSauvegardeContexteEditique;
        /**
         * Point d'entrée dédié aux débranchements éditiques dans le cadre de la VPC BL
         */
        private _demanderDebranchementPreEditiqueVpc;
        demanderDebranchementPreEditiqueVpc: IPointEntreeDemanderDebranchementPreEditiqueVpc;
        _getTimers: IPointEntreeGetTimers;
        getTimers: IPointEntreeGetTimers;
        constructor();
    }
    /**
     * Classes supports pour les données d'échange avec les P/S
     * Une donnée primaire ne suffit pas car lorsque le P/S initialise la valeur, il casse la référence
     * vers la source (généralement, CompositionProduitService). Il faut donc passer par un objet dont on met à jour
     * une propriété plutôt que par un type primitif.
     */
    class DonneeEchangeProduitService<T> {
        private _valeur;
        valeur: T;
        constructor(valeur: T);
    }
    /**
     * Producteur : indique si l'jout du P/S doit déclencher un appel producteur
     */
    class Producteur extends DonneeEchangeProduitService<string> {
    }
    /**
     * Indique si le P/S doit être affiché ou pas
     */
    class Invisible extends DonneeEchangeProduitService<boolean> {
    }
    /**
     * Indique si le P/S a été modifié ou pas.
     */
    class EstModifie extends DonneeEchangeProduitService<boolean> {
    }
    /**
     * Indique si le P/S est une carte Izi ou pas.
     */
    class EstUneCarteIzivente extends DonneeEchangeProduitService<boolean> {
    }
    class EstDejaEnGestion extends DonneeEchangeProduitService<boolean> {
    }
    class RappelerSiDejaEnGestion extends DonneeEchangeProduitService<boolean> {
    }
    /**
     * Requis pour l'alimentation de la contract.
     */
    class IndicateurModeVersement extends DonneeEchangeProduitService<string> {
    }
    /**
     * Référence du produit principal (ex : n° du compte pour un Bouquet Liberté)
     */
    class ReferenceProduitPrincipalOffre {
        private _valeur;
        /**
         * La valeur de la référence
         */
        valeur: string;
        private _emetteur;
        /**
         * L'id bloc de l'émetteur de la valeur. Permet de retrouver le P/S qui a émis l'event CSPR_DEFINIR_REFERENCE_PRODUIT_PRINCIPAL.
         */
        emetteur: string;
        constructor(valeur: string, emetteur: string);
    }
    /**
     * Référence du code type produit service du produit principal
     */
    class CodeTypeProduitServicePrincipalOffre {
        private _valeur;
        valeur: string;
        constructor(valeur: string);
    }
    /**
     * Les différentes SPA éditique que GGO peut appeler
     */
    enum SpaEditiques {
        BouquetLiberteEtAssimiles = 0,
        Epargne = 1,
        Inconnu = 2,
        EpargneDat = 3,
        Titre = 4,
        Carte = 5,
        ParDefautBdr = 6,
        EpargneBdr = 7,
    }
    /**
     * Indicateur permettant à GGO de savoir quelle SPA éditique il doit appeler
     */
    class RoutageEditique {
        private _valeur;
        valeur: SpaEditiques;
        constructor(valeur: SpaEditiques);
    }
    /**
     * Indicateur permettant à GGO de savoir si on est en mode éditique standard (le cas normal) ou reprise (on reprend l'éditique après un plantage)
     */
    class ModeEditique {
        private _valeur;
        valeur: string;
        constructor(valeur: string);
    }
    /**
     * Classe destinée à enregistrer les données spécifiques au produit service
     */
    class DonneesProduit {
        private _detenteur;
        /**
         * Le détenteur des P/S si situant dans les niveaux inférieurs de la composition
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _produit;
        /**
         * Lien vers les informations relatives au produit
         */
        produit: Types.ProduitService;
        private _pointsEntree;
        /**
         * La liste des points d'entrée (fonctions) que GGO pourra appeler pour déclencher une action dans le composant
         */
        pointsEntree: Types.PointsEntree;
        private _invisible;
        /**
         * Indique si le composant P/S doit être restitué à l'écran ou pas. S'applique prioritairement sur toutes les vues.
         * càd que si invisible est vrai, le composant ne sera affiché ni en perso, ni en récap.
         */
        invisible: Invisible;
        private _idProducteur;
        /**
         * L'identifiant du producteur à fixer par le produit service:
         * Par défaut (pas de producteur pour ce P/S) : vide
         * Pour IARD : "BPCEA_IMPACT"
         * Pour IZIVENTE: "NFI_IZIVENTE"
         */
        idProducteur: Producteur;
        private _estModifie;
        /**
         * Indicateur valant vrai si les données du P/S ont été modifiées par l'utilisateur. Cet indicateur est positionné par le P/S.
         * La valeur n'a de sens qu'en avenant, il ne faut pas l'utiliser pour l'ouverture ou la clôture
         * Par défaut : faux.
         */
        estModifie: EstModifie;
        private _indicateurModeVersement;
        /**
         * Indicateur de versement, requis par la contract.
         */
        indicateurModeVersement: IndicateurModeVersement;
        private _referenceProduitPrincipalOffre;
        /**
         * Référence du produit principal de l'offre. "Bindée" à la variable globale REFERENCE_PRODUIT_PRINCIPAL_OFFRE.
         */
        referenceProduitPrincipalOffre: ReferenceProduitPrincipalOffre;
        private _codeTypeProduitServicePrincipalOffre;
        /**
         * Référence du produit principal de l'offre. "Bindée" à la variable globale REFERENCE_PRODUIT_PRINCIPAL_OFFRE.
         */
        codeTypeProduitServicePrincipalOffre: CodeTypeProduitServicePrincipalOffre;
        private _routageEditique;
        /**
         * Routage éditique permettant de savoir quelle SPA éditique GGO va appeler.  "Bindée" à la variable globale ROUTAGE_EDITIQUE.
         */
        routageEditique: RoutageEditique;
        private _controlesPreRequis;
        /**
         * Liste des contrôles pré-requis à effectuer.
         */
        controlesPreRequis: ControlePreRequis[];
        private _repris;
        /**
         * Indicateur produit repris d'une autre offre
         */
        repris: boolean;
        private _produitSelectionne;
        /**
         * Designe le produit sélectionné dans l'assemblage
         */
        produitSelectionne: Types.CleValeur;
        private _donneesSelectionAssemblage;
        /**
         * Les données de sélection qui proviennent de l'assemblage pour un produit choisi dans un assemblage
         * contient l'assemblage lui même, l'id de la directive sélection si il en existe une, la liste des produits
         * qui ont été sélectionnés dans l'assemblage, le produit par défaut etc.
         */
        donneesSelectionAssemblage: Types.DonneesAssemblage;
        private _idBlocProduitSupport;
        /**
         * Id bloc du produit support si ce produit est détenu par un produit support
         */
        idBlocProduitSupport: string;
        private _reference;
        /**
         * Les références de gestion du P/S
         */
        reference: Types.PropositionReprise;
        private _estUneCarteIzivente;
        /**
         * Indicateur carte Izivente
         * Vrai : c'est une carte Izivente
         * Faux : c'est autre chose qu'une carte Izivente (ce n'est pas une carte, ou une carte pas Izi).
         */
        estUneCarteIzivente: EstUneCarteIzivente;
        private _estDejaEnGestion;
        /**
         * Indicateur de mise en gestion déjà effectuée dans un contexte de vente à distance.
         * Permet au P/S de savoir s'il doit relancer ou pas ses QR de mise en gestion en cas de mise en gestion précédemment échouée
         * Vrai : ce produit a déjà été mis en gestion au cours d'une mise en gestion précédente ayant échoué
         * Faux : c'est la première fois que ce produit est mis en gestion
         */
        estDejaEnGestion: EstDejaEnGestion;
        private _rappelerSiDejaEnGestion;
        /**
         * Valeur à positionner par le P/S. Dans le cas d'une mise en gestion échouée dans un contexte de VAD, permet à GGO de savoir
         * si il doit rappeler le P/S ou pas si sa mise en gestion a déjà été effectuée. C'est notamment le cas du compte de dépôt
         * qui doit positionner son contexte interne C4.10 pour les autres P/S sans pour autant rappeler sa QR de mise en gestion.
         * Par défaut, GGO ne rappelle pas un P/S si celui-ci a déjà été mis en gestion.
         * Dans le cas d'un P/S rappelé, ce dernier doit se baser sur la valeur de estDejaEnGestion pour savoir ce qu'il a à faire
         * Vrai : les fonctions de mise en gestion pré/post producteur seront rappelées pour ce P/S même si celui-ci a déjà été mis en gestion avec succès
         * Faux : les fonctions de mise en gestion pré/post producteur ne seront pas rappelées
         */
        rappelerSiDejaEnGestion: RappelerSiDejaEnGestion;
        constructor(detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, produit: Types.ProduitService, invisible: Invisible, idProducteur: Producteur, estModifie: EstModifie, indicateurModeVersement: IndicateurModeVersement, referenceProduitPrincipalOffre: ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: CodeTypeProduitServicePrincipalOffre, routageEditique: RoutageEditique, repris: boolean, produitSelectionne: Types.CleValeur, donneesSelectionAssemblage: any, pointsEntree: Types.PointsEntree, controlesPreRequis: Types.ControlePreRequis[], idBlocProduitSupport: string, reference: Types.PropositionReprise, estUneCarteIzivente: EstUneCarteIzivente, estDejaEnGestion: EstDejaEnGestion, rappelerSiDejaEnGestion: RappelerSiDejaEnGestion);
    }
    /**
     *  Les données que GGO passe à chaque composant produit service
     *  Contient une partie commune à tous les composants (personnes, entités etc.) ainsi que des informations
     *  spécifiques au composant. Ces dernières sont groupées dans DonneesProduit
     */
    class DonneesContextuelles {
        private _modeAcces;
        /**
         * Le mode d'accès à la directive
         * Lecture : La directive doit être en lecture seule (les champs doivent être disabled, etc.)
         * Ecriture : Tous les champs sont actifs
         */
        modeAcces: ModeAcces;
        private _modeAffichage;
        /**
         * Le mode d'affichage demandé
         * Personnalisation : la directive doit afficher son IHM de personnalisation
         * Recapitulatif : la directive doit afficher son IHM récap (sans données en modif)
         */
        modeAffichage: ModeAffichage;
        private _contexteAppel;
        /**
         * Le contexte d'appel de la directive
         * Première fois : on l'appele pour la première fois sur l'écran perso
         * Fois suivantes : on la rappelle en revenant de l'écran récap
         */
        contexteAppel: ContexteAppel;
        private _appelant;
        /**
         * L'application appelante : GGO BDD, GGHO, GGO BDR. Permet au P/S de savoir comment se comporter en fonction de qui l'appelle
         */
        appelant: AppelantsGgo;
        private _personnes;
        /**
         * Les personnes impliquées dans l'offre. Déduites de la composition de la / des entités titulaires
         */
        personnes: Personne[] | PersonneMorale[];
        private _entitesTitulaires;
        /**
         * La ou les entités titulaires. Il n'y a plus d'une entité que pour les offres type BL Couple.
         */
        entitesTitulaires: (InformationEntiteTitulaire | InformationEntiteTitulaireBdr)[];
        private _offreSouscrite;
        /**
         * Les données spécifiques à l'offre susceptibles d'être utiles à un bloc métier
         */
        offreSouscrite: OffreSouscrite;
        private _etablissement;
        /**
         * L'établissement.
         */
        etablissement: Etablissement;
        private _indicateurDossierVenteAutorise;
        /**
         * Indique si on travaille on mode dossier de vente ou pas. Le fait que l'indicateur soit à vrai ne signifie pas
         * forcément qu'on aie un dossier de vente initialisé, mais qu'on en aura un éventuellement plus tard (à la sauvegarde par ex.)
         */
        indicateurDossierVenteAutorise: boolean;
        private _dossierVente;
        /**
         * Le dossier de vente
         */
        dossierVente: DossierDeVente.GestionDossierVente;
        private _donneesGeneriquesTousProduits;
        /**
         * Les données génériques de tous les produits
         */
        donneesGeneriquesTousProduits: DossierDeVente.IDonneesGeneriques[];
        private _donneesGeneriques;
        /**
         * Les données génériques
         */
        donneesGeneriques: Types.DossierDeVente.IDonneesGeneriques[];
        private _catalogue;
        /**
         * Le catalogue de l'offre ciblée
         */
        catalogue: Types.CatalogueNode;
        private _composition;
        /**
         * Les produits mis dans la composition organisés par niveaux hiérarchiques
         */
        composition: Types.CompositionOffre;
        private _donneesMiseEnGestion;
        /**
         * Tableau des données renvoyées par les P/S au cours de la mise en gestion
         */
        donneesMiseEnGestion: DonneesMiseEnGestion[];
        private _donneesProduit;
        /**
         * Données spécifiques au P/S : points d'entrée et données produit
         */
        donneesProduit: DonneesProduit;
        private _referencesProduits;
        /**
         * Références produit. En souscription, contient les références des produtis repris.
         * En avenant/clôture, les produits rattachés à  l'offre
         */
        referencesProduits: ReferenceProduit[];
        private _listeSignataires;
        /**
         * Liste des signataires. Nécessaire pour la BAT opefi.
         */
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        private _lienVersComposition;
        /**
         *  Lien vers la composition, si on dispose de l'info au moment de la fabrication des données contextuelles
         */
        lienVersComposition: Types.CompositionOffreProduit;
        private _indicateurPersonneProtegee;
        /**
         *  Indique si l'on est dans le cas d'une personne protégée
         */
        indicateurPersonneProtegee: string;
        /**
         * Libelle titre produit
         */
        private _libTitreProduit;
        libTitreProduit: string;
        constructor(modeAcces: ModeAcces, modeAffichage: ModeAffichage, contexteAppel: ContexteAppel, appelant: AppelantsGgo, personnes: Personne[] | PersonneMorale[], entitesTitulaires: InformationEntiteTitulaire[] | InformationEntiteTitulaireBdr[], offreSouscrite: OffreSouscrite, etablissement: Etablissement, indicateurDossierVenteAutorise: boolean, dossierVente: DossierDeVente.GestionDossierVente, donneesGeneriquesTousProduits: DossierDeVente.IDonneesGeneriques[], donneesGeneriques: Types.DossierDeVente.IDonneesGeneriques[], catalogue: Types.CatalogueNode, composition: Types.CompositionOffre, donneesMiseEnGestion: Types.DonneesMiseEnGestion[], donneesProduit: DonneesProduit, referencesProduits: ReferenceProduit[], listeSignataires: myway.comContract.modeles.ISignataireComplet[], lienVersComposition: Types.CompositionOffreProduit, indicateurPersonneProtegee?: string, libTitreProduit?: string);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IDonneesAssemblage {
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        listeProduitsSelectionnes: Types.CleValeur[];
        listeProduitsAssemblageAutorises: Types.CleValeur[];
        selectionne: boolean;
        idDirectiveSelection: string;
        assemblage: Types.CatalogueNode;
        produitParDefaut: Types.CatalogueNode;
        donneesSelection: any;
        message?: string;
    }
    class DonneesAssemblage {
        private _detenteur;
        /**
         * Lien vers le détenteur
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _listeProduitsSelectionnes;
        /**
         * Les produits sélectionnés par l'utilisateur dans l'assemblage. Clé = code produit, Valeur = libellé
         * Pour les assemblages interchangeables, on ne peut avoir qu'un seul produit.
         * Pour les assemblages cumulables, il est possible de sélectionner plusieurs produits.
         */
        listeProduitsSelectionnes: Types.CleValeur[];
        private _listeProduitsAssemblageAutorises;
        /**
         * Liste des produits de l'assemblage sous forme de couples clé/valeur où clé = code produit et valeur = libellé
         * la sélection doit s'opérer parmi cette liste.
         */
        listeProduitsAssemblageAutorises: Types.CleValeur[];
        private _selectionne;
        /**
         * Est-ce que l'utilisateur a sélectionné le détenteur dans la modale de sélection du produit dans l'assemblage ?
         */
        selectionne: boolean;
        private _idDirectiveSelection;
        /**
         * Identifiant de la directive métier de sélection (pour les cartes par ex.)
         */
        idDirectiveSelection: string;
        private _assemblage;
        /**
         * Lien vers l'assemblage dans le catalogue
         */
        assemblage: Types.CatalogueNode;
        private _produitParDefaut;
        /**
         * Lien vers le produit par défaut de l'assemblage dans le catalogue
         */
        produitParDefaut: Types.CatalogueNode;
        private _donneesSelection;
        /**
         * Les données de sélection manipulées par la directive de sélection qui seront passées au composant
         * gérant l'affichage du produit sélectionné.
         */
        donneesSelection: any;
        private _message;
        /**
         * Un message optionnel à afficher pour chaque détenteur
         */
        message: string;
        constructor(donneesAssemblage: IDonneesAssemblage);
        constructor(detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, listeProduitsSelectionnes: Types.CleValeur[], listeProduitsAssemblageAutorises: Types.CleValeur[], selectionne: boolean, idDirectiveSelection: string, assemblage: Types.CatalogueNode, produitParDefaut: Types.CatalogueNode, donneesSelection: any, message?: string);
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Classe utilisée afin de transporter les données nécessaires au remplacement de P/S
     * Utilisée afin de notifier la composition avec
     * Le détenteur du P/S
     * l'ancien P/S (idegps)
     * le nouveau P/S (idegps)
     */
    class DonneesSubstitutionProduitService {
        private _detenteur;
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale;
        private _ancienCodeProduitService;
        ancienCodeProduitService: number;
        private _nouveauCodeProduitService;
        nouveauCodeProduitService: number;
        private _produitComposition;
        produitComposition: Types.CompositionOffreProduit;
        constructor(detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale, ancienCodeProduitService: number, nouveauCodeProduitService: number, produitComposition: Types.CompositionOffreProduit);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IContexteEditique {
        offre: IContexteOffre;
        bordereau: IContexteBordereau;
        echeancier: IContexteEcheancier;
        contractualisationActe: IContexteContractualisationActe;
        signataires: ISignataire[];
        panier: IContextePanier;
        identifiantDossierVente: number;
        codeEntiteVente: string;
        codeModeFinancier: string;
        indicateurExecutionImmediate: string;
        identifiantEDSDomiciliation?: number;
        listeContratCarte?: IContratCarte[];
    }
    interface IContratCarte {
        nomDuProduitCarte: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        porteur: IPorteurCarte;
    }
    interface IPorteurCarte {
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        adresse: string;
        nationalite: string;
        stituationFamille: string;
        teleFixe: string;
        teleMobile: string;
        libelleCommuneNaissance: string;
        dateNaissance: string;
        codeCivilite: string;
        cvilite: string;
        codeSituationFamiliale: string;
        situationFamiliale: string;
    }
    interface IPersonneData {
        nom: string;
        prenom: string;
        designationCourte: string;
        nomMarital: string;
        dateNaissance: Date;
    }
    interface IContexteOffre {
        codeActeGestion: string;
        codeCanal: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        numeroEntiteTitulaire: number;
        numeroOffreSouscrite: number;
        libelleEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        numeroPersonneIdentifiee: number;
        codeProduitServiceOffre: number;
        codeTypeCompte: string;
        numeroDeCompte: string;
        libelleProduitService: string;
        libelleLongProduitService: string;
        indicValidationOuvertureOffre: string;
        dateOuvertureOffre: string;
        dateDernierAvenantOffre: string;
        codeCaractereForfaitaireOffre?: string;
        codeCaractereSignature: string;
        prixMensuel: number;
        codeModeDeVente: string;
        codeFamilleGestProduitService: string;
        presencePJ?: boolean;
        detenteur?: IPersonneData;
        numeroOffreFamille?: number;
    }
    interface IContexteBordereau {
        identifiantBordereau: string;
    }
    interface IContexteEcheancier {
        identifiantDossierVirementSepa: string;
    }
    interface IContexteContractualisationActe {
        documentsAImprimer: IDocumentAImprimer[];
        indicateurPapier: boolean;
    }
    interface IDocumentAImprimer {
        codeTypeDocument: string;
        codeNatureGED: string;
        isNonMaterialisation: boolean;
        codeTypeAttributaire: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleDocument: string;
        minimumExemplaires: number;
        maximumExemplaires: number;
        nbParDefautExemplaires: number;
    }
    interface ISignataire {
        numeroPersonne: number;
        designataire: string;
        nom: string;
        prenom?: string;
        nomFamille?: string;
        situationFamille?: string;
        nomUsage?: string;
        typePersonne?: number;
    }
    interface IContextePanier {
        produitsServices: IContexteProduitService[];
    }
    interface IContexteProduitService {
        identifiantProduitService: number;
        codeProduitServiceExterne: string;
        libelleProduitService: string;
        libelleLongProduitService: string;
        etatDuProduit: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        dateIntroductionProduitServiceDansOffre: string;
        dateDernierAvenantProduitServiceDansOffre: string;
        identifiantProduitServiceSupport: number;
        codeModaliteDetentionProduitService: string;
        codeAffichageReferenceProduitService: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        numeroOffreSouscriteOrigine: number;
        numeroSequenceOuverture: number;
        idProducteur: string;
        typeProduitServiceAssurance: string;
        acteGestionSecondaire?: string;
    }
    interface IContexteIdntPJ {
        codeTypeDocument: string;
        idntPJ: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ISauvegardeContexteEditiqueGgho {
        contexte?: ContexteEditiqueDAT | ContexteEditiqueCarte | ContexteEditiqueTitre;
    }
    interface IContexteEditiqueGgho extends IContexteEditique {
        numeroContratCarte: string;
        retourEditique: number;
        contexte?: ISauvegardeContexteEditiqueGgho;
    }
    /** Contient le contexte editique GGO, càd les données susceptibles d'être utilisées à n'importe quel endroit de
     *  l'application
     */
    class ContexteEditiqueGgho implements IContexteEditique {
        offre: IContexteOffre;
        bordereau: IContexteBordereau;
        echeancier: IContexteEcheancier;
        contractualisationActe: IContexteContractualisationActe;
        signataires: ISignataire[];
        panier: IContextePanier;
        identifiantDossierVente: number;
        codeEntiteVente: string;
        codeModeFinancier: string;
        indicateurExecutionImmediate: string;
        private _numeroContratCarte;
        private _retourEditique;
        private _contexte;
        /**
         * Rubrique num carte.
         */
        numeroContratCarte: string;
        /**
         * contexte editique
         */
        contexte: ISauvegardeContexteEditiqueGgho;
        constructor(ic: IContexteEditiqueGgho);
        /**
         * Rubrique retour editique.
         */
        retourEditique: number;
    }
    class ContexteEditiqueCarte {
        numeroDuContratCarte: number;
        identifiantSupportDeCarte: string;
        identifiantPersonne: number;
        typeProduit: string;
        codePersonnaliteJuridique: string;
        codeGuichetInterbancaire: string;
        dateDeFinDeValiditeDeLaCarte: string;
        typeCloture: string;
        constructor();
    }
    class ContexteEditiqueDAT {
        identifiantBordereau: string;
        typeProduit: string;
        numeroPersonne: string;
        numeroEntiteTitulaire: string;
        numeroRICEDAT: string;
        constructor();
    }
    enum CHOIX_PU02 {
        OUVERTURE_IMMEDIAT = 0,
        OUVERTURE_DIFFEREE = 1,
    }
    class InformationEcheancierContexteEditiqueTitre {
        ibanComptePrelevement: string;
        typeVirement: string;
        montantVirement: string;
        deviseVirement: string;
        periodiciteVirement: string;
        echeanceVirement: string;
        motifVirement: string;
        libLaleEts: string;
        constructor();
    }
    class SignataireContexteEditiqueTitre {
        designation: string;
        role: string;
        constructor();
    }
    class ContexteEditiqueTitre {
        typeProduit: string;
        numeroCompteTitres: string;
        numeroCompteNumeraire: string;
        identifiantDossierVirementSepa: string;
        seuil: number;
        dateOuverture: Date;
        dateModification: Date;
        typeOuverture: string;
        codePersonnaliteJuridique: string;
        identifiantEntiteTitulaire: number;
        ageDuPea: number;
        typeExtourneCloture: string;
        numeroCompteRecepteur: string;
        identifiantAttributaire: string;
        referenceContrat: string;
        typeCloture: string;
        ribCompteTitreVirement: string;
        sectionMineur: boolean;
        genererEditique: boolean;
        montantVirementInitiale: number;
        typeVirementInitiale: string;
        compteVirementInitial: string;
        choixDateOuvertureVAD: CHOIX_PU02;
        infoEcheancier: InformationEcheancierContexteEditiqueTitre;
        listeSignataire: SignataireContexteEditiqueTitre[];
        presenceQCFIDN: string;
        indicateurCompteDemembre: string;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IInformationEntiteTitulaireBdr {
        compositionEntiteTitulaire: CompositionEntiteTitulaireBdr;
        caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaireBdr;
        getId: number;
        getLibelle: string;
        listeCompositionEntiteTitulaire: Array<PersonneEntiteTitulaire>;
    }
    interface ICompositionEntiteTitulaireBdr {
        listePersonneTitulaire: Array<PersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<PersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaireBdr {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: Date;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: Date;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
    interface ICETBdr {
        listePersonneTitulaire: Array<PersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<PersonneEntiteTitulaire>;
    }
    class CompositionEntiteTitulaireBdr implements ICompositionEntiteTitulaireBdr {
        private _listePersonneTitulaire;
        listePersonneTitulaire: Array<PersonneEntiteTitulaire>;
        private _listePersonneUsufruitier;
        listePersonneUsufruitier: Array<PersonneEntiteTitulaire>;
        constructor(iCETBdr: ICETBdr);
    }
    /** Description d'une entité titulaire (client bancaire) */
    class InformationEntiteTitulaireBdr implements IDetenteur, IInformationEntiteTitulaireBdr {
        private _compositionEntiteTitulaire;
        compositionEntiteTitulaire: CompositionEntiteTitulaireBdr;
        private _caracteristiqueEntiteTitulaire;
        /**
         *   Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaireBdr;
        /**
         * ATTENTION : Ces accesseurs ont été développés afin d’assurer la compatibilité avec BDD
         */
        getId: number;
        getLibelle: string;
        listeCompositionEntiteTitulaire: Array<PersonneEntiteTitulaire>;
        constructor(compositionEntiteTitulaire: CompositionEntiteTitulaireBdr, caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaireBdr);
    }
    /** Composition de l'entité titulaire en ses différentes personnes */
    class PersonneEntiteTitulaire implements IPersonneEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        private _identifiantTiers;
        identifiantTiers: number;
        private _identifiantProfessionnel;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        private _identifiantLieuActivite;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        private _indicateurResponsableCompteET;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner
         * celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         * - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         * - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        private _codeRangEntiteTitulaire;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        private _natureLienET;
        natureLienET: string;
        private _pourcentageNuePropriete;
        pourcentageNuePropriete: number;
        private _pourcentagePleinePropriete;
        pourcentagePleinePropriete: number;
        private _pourcentageUsufruit;
        pourcentageUsufruit: number;
        private _nomCommercialProfessionnel;
        nomCommercialProfessionnel: string;
        private _enseigneCommercialeLieuActivite;
        enseigneCommercialeLieuActivite: string;
        private _designationCourteLieuActivite;
        designationCourteLieuActivite: string;
        private _designationTiers;
        designationTiers: string;
        private _indicateurAffectationAdresse;
        indicateurAffectationAdresse: boolean;
        /**
         * ATTENTION : Ces accesseurs ont été développés afin d’assurer la compatibilité avec BDD
         */
        designationEntiteTitulaire: string;
        constructor(pet: IPersonneEntiteTitulaire);
    }
    /** Caractéristiques de l'entité titulaire */
    class CaracteristiqueEntiteTitulaireBdr implements ICaracteristiqueEntiteTitulaireBdr {
        private _designationEntiteTitulaire;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        private _codeUsageEntiteTitulaire;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         * - 1 Usage privé
         * - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        private _modeCompositionEntiteTitulaire;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         * - 1 mode simple
         * - 2 mode joint entre époux
         * - 3 mode joint entre tiers
         * - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        private _complementDesignationBancaire;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET,
         * lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        private _codeEtatEntiteTitulaire;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         * - 0 Actif
         * - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        private _dateMAJEntiteTitulaire;
        /**
         * Date enregistrement de l'entité titulaire.
         */
        dateMAJEntiteTitulaire: Date;
        private _codeMotifClotureEntiteTitulaire;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         * - ' ' Non clôturé
         * - '1' Plus d'activité bancaire
         * - '2' Décédé
         * - '3' Transféré
         * - '4' Incident
         * - '5' Indésirable
         * - '6' Séparé
         * - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        private _dateClotureEntiteTitulaire;
        dateClotureEntiteTitulaire: Date;
        private _sousCodeModeCompositionET;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         * - 1 Mode indivision successorale
         * - 2 Mode indivision conventionnel avec solidarité
         * - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        private _codeAgentGestionEntiteTitulaire;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        private _libelleEDSGestionEntiteTitulaire;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        private _libelleEtatEntiteTitulaire;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        private _libelleTypeDesignationEntiteTitulaire;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        private _libelleUsageEntiteTitulaire;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        private _libelleModeCompositionEntiteTitulaire;
        /**
         *  Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        private _libelleSousCodeModeCompositionET;
        /**
         *   Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        private _libelleEDSDomiciliationEntiteTitulaire;
        /**
         *   Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        private _libelleMotifClotureEntiteTitulaire;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        private _identifiantEDSDomiciliationEntiteTitulaire;
        /**
         *   Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        private _codeEtablissement;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        private _identifiantEntiteTitulaire;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        private _identifiantAdresseEntiteTitulaire;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        private _identifiantEDSGestionEntiteTitulaire;
        /**
         *  Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        private _codeTypeDesignationEntiteTitulaire;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne
         * de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire,
         * du mode de composition et de l'usage.
         * Valeurs :
         * * POUR ET MODE SIMPLE
         * 11 Désignation de la personne
         * * POUR ET A USAGE PROFESSIONNEL
         * 21 Nom commercial
         * 22 Désignation courte de l'établissement
         * 23 Enseigne commerciale de l'établissement
         * * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         * PRIVE
         * 31 Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32 Mr ou Mme+nom patronymique Mr+nom
         * patronymique Mme+prénom Mme
         * * POUR ET MODE JOINT ET USAGE PRIVE
         * 41 Désignation personne 1 ou désignation
         * personne 2
         * 42 Désignation personne 2 ou désignation
         * personne 1
         *
         * 99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        private _typeElementStructure;
        typeElementStructure: string;
        private _refExterneEDSDomiciliationET;
        refExterneEDSDomiciliationET: number;
        private _refExterneEDSGestionET;
        refExterneEDSGestionET: number;
        private _identifiantEDSGuichet;
        identifiantEDSGuichet: number;
        private _identEDSGestionETNouveau;
        identEDSGestionETNouveau: number;
        private _identEDSDomiciliationETNouveau;
        identEDSDomiciliationETNouveau: number;
        constructor(cet: ICaracteristiqueEntiteTitulaireBdr);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IInformationEntiteTitulaire {
        /**
         *   Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaire;
        /**
         *   Composition de l'entité : personnes composant l'entité
         */
        listeCompositionEntiteTitulaire: Array<CompositionEntiteTitulaire>;
    }
    interface ICompositionEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif
         * peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         * - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         * - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         * - Désignation courte du particulier si personne physique
         * - Nom commercial si professionnel
         * - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationEntiteTitulaire: string;
        natureLienET: string;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         * - 1 Usage privé
         * - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         * - 1 mode simple
         * - 2 mode joint entre époux
         * - 3 mode joint entre tiers
         * - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et
         * choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         * - 0 Actif
         * - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         */
        dateMAJEntiteTitulaire: Date;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         * - ' ' Non clôturé
         * - '1' Plus d'activité bancaire
         * - '2' Décédé
         * - '3' Transféré
         * - '4' Incident
         * - '5' Indésirable
         * - '6' Séparé
         * - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: Date;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         * - 1 Mode indivision successorale
         * - 2 Mode indivision conventionnel avec solidarité
         * - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        /**
         *  Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         *   Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         *   Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         *   Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        /**
         *  Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards
         * (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         * * POUR ET MODE SIMPLE
         * 11 Désignation de la personne
         * * POUR ET A USAGE PROFESSIONNEL
         * 21 Nom commercial
         * 22 Désignation courte de l'établissement
         * 23 Enseigne commerciale de l'établissement
         * * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         * PRIVE
         * 31 Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32 Mr ou Mme+nom patronymique Mr+nom
         * patronymique Mme+prénom Mme
         * * POUR ET MODE JOINT ET USAGE PRIVE
         * 41 Désignation personne 1 ou désignation
         * personne 2
         * 42 Désignation personne 2 ou désignation
         * personne 1
         *
         * 99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
    }
    /** Description d'une entité titulaire (client bancaire) */
    class InformationEntiteTitulaire implements IDetenteur, IInformationEntiteTitulaire {
        private _caracteristiqueEntiteTitulaire;
        /**
         *   Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaire;
        private _listeCompositionEntiteTitulaire;
        /**
         *   Composition de l'entité : personnes composant l'entité
         */
        listeCompositionEntiteTitulaire: Array<CompositionEntiteTitulaire>;
        getId: number;
        getLibelle: string;
        constructor(caracteristiqueEntiteTitulaire: CaracteristiqueEntiteTitulaire, listeCompositionEntiteTitulaire: CompositionEntiteTitulaire[]);
    }
    /** Composition de l'entité titulaire en ses différentes personnes */
    class CompositionEntiteTitulaire implements ICompositionEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        private _identifiantTiers;
        identifiantTiers: number;
        private _identifiantProfessionnel;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        private _identifiantLieuActivite;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Professionnel
         * - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        private _indicateurResponsableCompteET;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner
         * celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         * - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         * - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        private _codeRangEntiteTitulaire;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        private _designationEntiteTitulaire;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         * - Désignation courte du particulier si personne physique
         * - Nom commercial si professionnel
         * - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationEntiteTitulaire: string;
        private _natureLienET;
        natureLienET: string;
        constructor(cet: ICompositionEntiteTitulaire);
    }
    /** Caractéristiques de l'entité titulaire */
    class CaracteristiqueEntiteTitulaire {
        private _designationEntiteTitulaire;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        private _codeUsageEntiteTitulaire;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         * - 1 Usage privé
         * - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        private _modeCompositionEntiteTitulaire;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         * - 1 mode simple
         * - 2 mode joint entre époux
         * - 3 mode joint entre tiers
         * - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        private _complementDesignationBancaire;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET,
         * lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        private _codeEtatEntiteTitulaire;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         * - 0 Actif
         * - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        private _dateMAJEntiteTitulaire;
        /**
         * Date enregistrement de l'entité titulaire.
         */
        dateMAJEntiteTitulaire: Date;
        private _codeMotifClotureEntiteTitulaire;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         * - ' ' Non clôturé
         * - '1' Plus d'activité bancaire
         * - '2' Décédé
         * - '3' Transféré
         * - '4' Incident
         * - '5' Indésirable
         * - '6' Séparé
         * - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        private _dateClotureEntiteTitulaire;
        dateClotureEntiteTitulaire: Date;
        private _sousCodeModeCompositionET;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         * - 1 Mode indivision successorale
         * - 2 Mode indivision conventionnel avec solidarité
         * - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        private _codeAgentGestionEntiteTitulaire;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        private _libelleEDSGestionEntiteTitulaire;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        private _libelleEtatEntiteTitulaire;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        private _libelleTypeDesignationEntiteTitulaire;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        private _libelleUsageEntiteTitulaire;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        private _libelleModeCompositionEntiteTitulaire;
        /**
         *  Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        private _libelleSousCodeModeCompositionET;
        /**
         *   Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        private _libelleEDSDomiciliationEntiteTitulaire;
        /**
         *   Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        private _libelleMotifClotureEntiteTitulaire;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        private _identifiantEDSDomiciliationEntiteTitulaire;
        /**
         *   Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        private _codeEtablissement;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        private _identifiantEntiteTitulaire;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        private _identifiantAdresseEntiteTitulaire;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        private _identifiantEDSGestionEntiteTitulaire;
        /**
         *  Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        private _codeTypeDesignationEntiteTitulaire;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne
         * de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire,
         * du mode de composition et de l'usage.
         * Valeurs :
         * * POUR ET MODE SIMPLE
         * 11 Désignation de la personne
         * * POUR ET A USAGE PROFESSIONNEL
         * 21 Nom commercial
         * 22 Désignation courte de l'établissement
         * 23 Enseigne commerciale de l'établissement
         * * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         * PRIVE
         * 31 Mr ou Mme+nom patronymique Mr+prénom Mr
         * 32 Mr ou Mme+nom patronymique Mr+nom
         * patronymique Mme+prénom Mme
         * * POUR ET MODE JOINT ET USAGE PRIVE
         * 41 Désignation personne 1 ou désignation
         * personne 2
         * 42 Désignation personne 2 ou désignation
         * personne 1
         *
         * 99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        constructor(cet: ICaracteristiqueEntiteTitulaire);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IEtablissement {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
    }
    class Etablissement {
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeGuichetInterbancaire;
        codeGuichetInterbancaire: string;
        constructor(ie: IEtablissement);
    }
}

/**
 * Structure de l'objet accompagnant les évènements CSPR_PRODUIT_SUPPRIME et CSPR_PRODUIT_AJOUTE émis par GGO lorsqu'un produit est supprimé
 * ou ajouté au panier
 */
declare module GestionGeneriqueOffres.Types.Cloture {
    /**
     * Structure de l'objet accompagnant les évènements CSPR_PRODUIT_SUPPRIME et CSPR_PRODUIT_AJOUTE émis par GGO lorsqu'un produit est supprimé ou ajouté au panier.
     */
    class EvenementProduit {
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _detenteur;
        detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration;
        private _produitService;
        produitService: CompositionOffreProduit;
        constructor(identifiantProduitService: number, detenteur: InformationEntiteTitulaire | Tiers.Personne | Tiers.PersonneMorale | InformationEntiteTitulaireBdr | Tiers.Procuration, produitService: CompositionOffreProduit);
    }
}

/**
 * Structure de l'objet accompagnant les évènements CSPR_PRODUIT_SUPPRIME et CSPR_PRODUIT_AJOUTE émis par GGO lorsqu'un produit est supprimé
 * ou ajouté au panier
 */
declare module GestionGeneriqueOffres.Types {
    /**
     * Structure de l'objet accompagnant les évènements CSPR_PRODUIT_SUPPRIME et CSPR_PRODUIT_AJOUTE émis par GGO lorsqu'un produit est supprimé ou ajouté au panier.
     */
    class EvenementProduit {
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _detenteur;
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration;
        private _produitService;
        produitService: CompositionOffreProduit;
        constructor(identifiantProduitService: number, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, produitService: CompositionOffreProduit);
    }
}

declare module GestionGeneriqueOffres.Types.DossierDeVente {
    enum InitMode {
        Basique = 0,
        Contextuel = 1,
    }
    /**
     * Indicateurs de mise à jour du dossier de vente. Indique ce qui doit être mis à jour
     */
    class IndicateursDeMiseAJour {
        indicMajCommentaire: boolean;
        indicMajPersonne: boolean;
        indicMajPartenaire: boolean;
        indicMajCompositionDetail: boolean;
        indicMajContractSignature: boolean;
        static toString(data: boolean): string;
        constructor();
    }
    /**
     * Regroupe un ensemble de données diverses nécessaires à l'init du dossier de vente.
     */
    interface IDonneesDiversesPourDossierVente {
        /**
         * Indique si le client a choisi une exécution immédiate. Dans l'affirmative, l'offre associée au dossier peut être ouverte immédiatement. Dans le cas
         * contraire, un délai (14 jours) doit être observé avant l'ouverture
         */
        indicateurExecutionImmediate: string;
        /**
         * Cet indicateur, permet ou non de bloquer la finalisation du dossier de vente.
         */
        indicateurBlocageFinalisation: string;
        /**
         * Indique si l'étape permet la gestion de la collecte de pièces ou non.
         */
        indicateurGestionPiece: string;
        /**
         * Le commentaire "post-it"
         */
        commentaire: string;
        /**
         * Les indicateurs de mise à jour
         */
        indicateurs: IndicateursDeMiseAJour;
        /**
         * Au retour de la contract : contient l'objet ContractualisationSignature
         */
        contractualisationSignature: Types.DossierDeVente.ContractualisationSignature;
        /**
         * Au retour de la contract : contient l'objet PersonnesLiees
         */
        personnesLiees: PersonneLiee[];
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
        valeurEntreeProcessusSI: string;
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
         *  Valeurs (CID2MG) :
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
        indicateurBlocageFinalisation: string;
        numeroEntiteTitulairePrincipale: number;
        valeurReference: string;
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
        /**
         * Identifiant contrat support (ex n° du CDD)
         */
        identifiantContratSupport: string;
        /**
         * Type Professionnel = ‘EI’: Entrepreneur Individuel, ‘PM’: Personne Morale, vide: autre
         */
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
        dateEcheanceEtape: Date;
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
        acteurConfirmation: IActeurConfirmation;
        referenceDossierVente: IReferenceDossierVente;
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
    interface IActeurConfirmation {
        codeEntiteVenteConfirmation: string;
        codeEdsInternePFConfirmation: number;
        codeEdsInterneRattachConfirma: number;
        referenceExterneAgentConfirma: number;
    }
    interface IReferenceDossierVente {
        entiteReferenceDossier: string;
        dateReferenceDossier: string;
        canalReferenceDossier: string;
        codeProcessus: string;
    }
    class ActeurContexte {
        codeEntiteVenteContexte: string;
        libelleEntiteVenteContexte: string;
        codeEdsInternePFContexte: number;
        codeEdsExternePFContexte: number;
        typeEdsExterneContexte: string;
        codeEdsInterneRattachContexte: number;
        referenceExterneAgentContexte: number;
        constructor(mode: InitMode, ac: IActeurContexte);
        constructor(mode: InitMode, authInfo: MyWay.Services.Context.AuthentificationInfo, contexteGgo: ContexteGgo);
    }
    class ActeurDerniereModification {
        codeEntiteVenteDerMod: string;
        libelleEntiteVenteDerMod: string;
        codeEdsInternePFDerMod: number;
        nomAgentDerMod: string;
        prenomAgentDerMod: string;
        codeEdsInterneRattachDerMod: number;
        referenceExterneAgentDerMod: number;
        constructor(adm: IActeurDerniereModification);
    }
    class ActionPossible {
        codeActionPossible: string;
        libelleActionPossibleAgent: string;
        libelleActionPossibleClient: string;
        codeTypeActionPossible: string;
        codeOperationFonctionnelle: string;
        identifiantProcessusSI: string;
        valeurEntreeProcessusSI: string;
        rangBoutonAction: number;
        constructor(ap: IActionPossible);
    }
    class AlerteFonctionnelle {
        codeAlerteFonctionnelle: number;
        libelleAlerteFonctionnelle: string;
        constructor(af: IAlerteFonctionnelle);
    }
    class CanalReprise {
        codeCanalReprise: string;
        libelleCanalReprise: string;
        rangAffichageCanalReprise: number;
        codeSensCommunicReprise: string;
        libelleSensCommunicReprise: string;
        constructor(cr: ICanalReprise);
    }
    class CheminAvancement {
        codeJalon: string;
        libelleJalon: string;
        codeFranchissement: string;
        rangJalon: number;
        constructor(ca: ICheminAvancement);
    }
    class Commentaire {
        texteCommentaire: string;
        constructor(c: ICommentaire);
    }
    class CompositionCaracteristique {
        referenceProduitServiceCompo: string;
        identifiantOccurrence: number;
        identifiantPereOccurrence: number;
        codeActeGestionComposition: string;
        libelleActeGestionComposition: string;
        codeSousFamilleActeComposition: string;
        codeNatureActeGestion: string;
        codeModaliteDetention: string;
        numeroEntiteTitulaireCompo: number;
        numeroPersonneComposition: number;
        codeModeFinancier: string;
        codeEtablissementOperation: string;
        indicateurProduitRepris: string;
        numeroOffreOrigine: number;
        indicateurMiseEnGestion: string;
        dateCreationLigneComposition: string;
        identifiantProduitServiceCompo: number;
        identifiantLigneComposition: number;
        libelleComplementaireActe: string;
        indicateurProduitModifie: string;
        constructor(cc: ICompositionCaracteristique);
    }
    class CompositionDonneeDetail {
        identifiantDonneeDetailJson: number;
        referenceExterneData: string;
        donneeData: string;
        constructor(cdd: ICompositionDonneeDetail);
    }
    class CompositionDossier {
        compositionCaracteristique: ICompositionCaracteristique;
        listeCompositionDonneeDetail: Array<ICompositionDonneeDetail>;
        constructor(cd: ICompositionDossier);
    }
    class ContractualisationSignature {
        codeModeSignature: string;
        libelleModeSignature: string;
        identifiantDocumentNumerise: string;
        indicateurEnvoiHubmail: string;
        identifiantTransactionContract: string;
        dateSignature: string;
        constructor(cs: IContractualisationSignature);
    }
    class DonneePrincipale {
        numeroOffre: number;
        libelleOffreVisionAgent: string;
        libelleOffreVisionClient: string;
        codeActeGestionPrincipal: string;
        indicateurProcessusMyway: string;
        dateCreationDossier: string;
        dateDerniereRelance: string;
        indicateurGestionPiece: string;
        codeNotificationAEmettre: string;
        referenceOffreMysys: number;
        codeModeVente: string;
        codeCaractereSignature: string;
        dateModificationDossier: string;
        indicateurExecutionImmediate: string;
        nomAgentAffecte: string;
        prenomAgentCreation: string;
        nomAgentCreation: string;
        prenomAgentAffecte: string;
        dateConfirmationDossier: string;
        codeSousFamilleActePrincipal: string;
        identProduitServicePrincipal: number;
        libelleModeVente: string;
        libelleCaractereSignature: string;
        libelleActeGestionPrincipal: string;
        referenceExterneAgentCreation: number;
        referenceExterneAgentAffecte: number;
        indicateurBlocageFinalisation: string;
        numeroEntiteTitulairePrincipale: number;
        identifiantContratSupport: string;
        typeProfessionnel: string;
        constructor(mode: InitMode, dp: IDonneePrincipale);
        constructor(mode: InitMode, infos: IInfosEnEntreeDonneePrincipale);
    }
    class DossierVente {
        codeEtablissement: string;
        identifiantDossierVente: number;
        codeExterneApplication: string;
        identifiantExterneDossierVente: string;
        constructor(dv: IDossierVente);
    }
    class EtapeEnCours {
        codeCanalEnCours: string;
        libelleCanalEnCours: string;
        libelleStatutActionAMener: string;
        identifiantEtape: number;
        codeProcessus: string;
        libelleProcessus: string;
        codeEtape: string;
        libelleEtapeClient: string;
        libelleEtapeAgent: string;
        codeStatut: string;
        libelleStatutClient: string;
        libelleStatutAgent: string;
        libelleActionReservee: string;
        dateDebutEtape: string;
        dateFinEtape: string;
        dateEcheanceEtape: Date;
        codeSensCommunicEnCours: string;
        libelleSensCommunicEnCours: string;
        constructor(eec: IEtapeEnCours);
    }
    class ActeurConfirmation implements IActeurConfirmation {
        codeEntiteVenteConfirmation: string;
        codeEdsInternePFConfirmation: number;
        codeEdsInterneRattachConfirma: number;
        referenceExterneAgentConfirma: number;
        constructor(iac: IActeurConfirmation);
    }
    class ReferenceDossierVente implements IReferenceDossierVente {
        entiteReferenceDossier: string;
        dateReferenceDossier: string;
        canalReferenceDossier: string;
        codeProcessus: string;
        constructor(irdv: IReferenceDossierVente);
    }
    class GestionDossierVente {
        dossierVente: DossierVente;
        donneePrincipale: DonneePrincipale;
        commentaire: Commentaire;
        etapeEnCours: EtapeEnCours;
        partenaire: Partenaire;
        acteurDerniereModification: ActeurDerniereModification;
        acteurContexte: ActeurContexte;
        contractualisationSignature: ContractualisationSignature;
        listePersonneLiee: PersonneLiee[];
        listeCompositionDossier: CompositionDossier[];
        listeCheminAvancement: CheminAvancement[];
        listeActionPossible: ActionPossible[];
        listeCanalReprise: CanalReprise[];
        listeAlerteFonctionnelle: AlerteFonctionnelle[];
        acteurConfirmation: ActeurConfirmation;
        referenceDossierVente: ReferenceDossierVente;
        /**
         * Désérialise les données génériques d'un produit dossier de vente et en renvoie le résultat dans un tableau de données génériques désérialisées.
         * la fonction prend en compte la limite de taille de champ imposée par DB2 qui impose de découper les JSON par bloc de 3000.
         * @param {Types.DossierDeVente.CompositionDossier} produit Le produit dossier de vente qui contient les blocs de données à désérialiser
         * @returns Les données désérialisées pour les P/S
         */
        static deserialiserDonneesProduit: (produit: Types.DossierDeVente.CompositionDossier) => Types.DossierDeVente.IDonneesGeneriques[];
        deserialiserDonneesMdec: () => Types.DossierDeVente.BlocMDEC[];
        /**
         * Désérialise les données génériques d'un produit dossier de vente et en renvoie le résultat dans un tableau de données génériques désérialisées.
         * la fonction prend en compte la limite de taille de champ imposée par DB2 qui impose de découper les JSON par bloc de 3000.
         * @param {Types.DossierDeVente.GestionDossierVente} dossier Le dossier de vente
         * @param {string} id id de la donnée transverse
         * @returns Les données désérialisées pour les P/S
         */
        static deserialiserDonneeTransverse: (dossier: GestionDossierVente, id: string) => IDonneeTransverse;
        /**
         * Recherche codeAction dans la liste des actions possibles, renvoie vrai si elle est trouvée, faux sinon
         */
        isActionPresente(codeAction: string): boolean;
        constructor(mode: InitMode, gdv: IGestionDossierVente);
        constructor(mode: InitMode, authInfo: MyWay.Services.Context.AuthentificationInfo, contexteGgo: ContexteGgo);
        constructor(mode: InitMode, authInfoOuDossiervente: IGestionDossierVente | MyWay.Services.Context.AuthentificationInfo, contexteGgo?: ContexteGgo, personnesLiees?: PersonneLiee[], compositionOffre?: Types.CompositionOffre, donneesGeneriques?: ISauvegardeDonneesGeneriques[][], donneesTransverses?: IDonneeTransverse[], reference?: Types.ReferenceProduitPrincipalOffre, divers?: IDonneesDiversesPourDossierVente);
    }
    class Partenaire {
        identifiantPartenaire: string;
        libellePartenaire: string;
        constructor(p: IPartenaire);
    }
    class PersonneLiee {
        identifiantPersonne: number;
        codeRolePersonne: string;
        libelleRolePersonne: string;
        adresseMailPersonne: string;
        indicateurSignataire: string;
        constructor(pl: IPersonneLiee);
    }
    /**
     * Un bloc MDEC = n blocs MDEC
     */
    class DonneesMDEC {
        blocs: BlocMDEC[];
    }
    /**
     * Une section MDEC = n sections MDEC
     */
    class BlocMDEC {
        acte: string;
        sections: SectionMDEC[];
    }
    /**
     * Une section MDEC = n champs MDEC
     */
    class SectionMDEC {
        titresSections: TitreSection[];
        champs: ChampsMDEC[];
    }
    class TitreSection {
        libelle: string;
        vision: string;
    }
    /**
     * Un champ MDEC. Ex : { libelle: "Périodicité", valeur : "Mensuelle" }
     */
    class ChampsMDEC {
        libelle: string;
        valeur: string;
        vision: string;
        constructor(libelle: string, valeur: string, vision: string);
    }
    /**
     * Interface à representant les données de sauvegarde. Pour sauvegarder ses données dans le dossier de vente, le produit/service
     * doit etendre cette interface
     */
    interface IDonneeSauvegardeProduitService {
    }
    /**
     * Informations relatives au mode financier
     */
    interface IModeFinancier {
        codeModeFinancier: string;
        codeEtablissementOperation: string;
    }
    class ModeFinancier {
        /**
         * Code mode financier. Format sur 2N
         * ex : '01' = Espèces '02' = Chèque '06' = Virement interne etc.
         *
         */
        codeModeFinancier: string;
        /**
         * Doit être renseigné si codeModeFinancier = 10 ou 00
         */
        codeEtablissementOperation: string;
        constructor(imf: IModeFinancier);
    }
    /**
     * Les données pour UN P/S
     */
    interface IDonneesGeneriques {
        donneesDeSauvegardeProduitService: IDonneeSauvegardeProduitService;
    }
    interface ISauvegardeDonneesGeneriques {
        donneesMDEC: BlocMDEC;
        modeFinancier?: IModeFinancier;
        indicateurForcageVpc?: boolean;
        donneesDeSauvegardeProduitService: IDonneeSauvegardeProduitService;
    }
    interface IDonneeTransverse {
        id: string;
        donnees: any;
        avecPrefixe: boolean;
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Etats possibles pour le chargement d'un fichier
     */
    enum IndicateurChargementGgho {
        /**
         * Le fichier n'a pas encore été chargé
         */
        NonCharge = 0,
        /**
         * L'ordre de chargement a été donné mais n'a pas abouti, ou alors la requête a échoué en time out
         */
        EnCoursDeChargement = 1,
        /**
         * Le fichier a été correctement chargé, càd le callback sur le onload a été activé
         * (pour les fichiers html, on est passé via le callback success du $http ayant effectué le get)
         */
        Succes = 2,
        /**
         * Le fichier n'a pas été chargé (ex 404), càd le callback sur le onerror a été activé
         * (pour les fichiers html, on est passé via le callback error du $http ayant effectué le get)
         */
        Echec = 3,
    }
    /**
     * Extensions possibles pour les ficheirs à charger
     */
    enum TypeFichierGgho {
        js = 0,
        css = 1,
        SPA = 2,
    }
    class DescriptionFichierGgho {
        private _typeFichier;
        /**
         * Type de fichier : js, css ou spa
         */
        typeFichier: TypeFichierGgho;
        private _prioriteChargement;
        /**
         * Priorité de chargement. Les fichiers à priorité élevée sont chargés en premier.
         */
        prioriteChargement: number;
        private _cheminAccesFichier;
        /**
         * Le chemin d'accès au fichier hors éléments de type CDN, environnement etc.
         * DOIT commencer par un /
         */
        cheminAccesFichier: string;
        private _indicateurChargement;
        /**
         * Indicateur de chargement associé au fichier
         */
        indicateurChargement: number;
        private _messageErreur;
        /**
         * Indicateur de chargement associé au fichier
         */
        messageErreur: string;
        constructor(typeFichier: Types.TypeFichierGgho, cheminAccesFichier: string);
    }
    /**
     * Paramétrage des produits ervices dans GGHO
     */
    class ParametrageBlocGgho {
        private _affichageBouton;
        /**
         * Affichage du bouton "enregistrer proposition" (ex: true => on affiche le bouton, false => on affiche pas le bouton)
         */
        affichageBouton: boolean;
        private _codeTypeProduitService;
        /**
         * CODIPR (ex : 0004 => comptes, KTIM => cartes, etc.)
         */
        codeTypeProduitService: string;
        private _identifiantProduitService;
        /**
         * Code produit IDEGPS
         */
        identifiantProduitService: number;
        private _codeSousFamilleActeGestion;
        /**
         * Code sous famille acte de gestion
         * OU => Souscription
         * AV => Avenant
         * CL => Cloture
         */
        codeSousFamilleActeGestion: string;
        private _identifiantComposantProduitService;
        /**
         * Identifiant de la directive métier associée au triplet CODIPR/IDEGPS/code sous famille
         * Permet de déterminer la directive métier qui sera affichée dans le bloc
         * Pour un assemblage, permet d'identifier la directive métier qui permettra d'opérer la sélection dans
         * l'assemblage
         */
        identifiantComposantProduitService: string;
        private _nePasCharger;
        /**
         * Indique s'il faut charger le P/S ou pas. Essentiellement pour le débogage, au cas où un produit planterait et où il faudrait l'exclure
         * temporairement
         */
        nePasCharger: boolean;
        private _fichiersComposantProduitService;
        /**
         * Fichiers associés au composant et au triplet codeTypeProduitService, identifiantProduitService, et codeSousFamilleActeGestion
         */
        fichiersComposantProduitService: DescriptionFichierGgho[];
        private _nomEditique;
        /**
         * Nom SPA éditique ou processus LISA
         */
        nomEditique: string;
        constructor(affichageBouton: boolean, codeTypeProduitService: string, identifiantProduitService: number, codeSousFamilleActeGestion: string, identifiantComposantProduitService: string, fichiersComposantProduitService: DescriptionFichierGgho[], nomEditique: string);
    }
    interface IParametrageBlocsGgho {
        getDonneesParametrageComposantProduitService(codeTypeProduitServiceOffre: string, codeProduit: number, codeSousFamilleActeGestion: string): ParametrageBlocGgho;
    }
    interface IHorsOffreParametre {
        parametrageBlocsData: ParametrageBlocGgho[];
    }
    class ParametrageBlocsGgho implements IParametrageBlocsGgho {
        private _parametrageBlocsGgho;
        /**
         * L'intégralité du paramétrage de chacun des composants
         */
        parametrageBlocsGgho: ParametrageBlocGgho[];
        /**
         * Recherche d'un paramétrage en fonction du code produit et/ou du CODIPR et/ou du mode de souscription
         */
        getDonneesParametrageComposantProduitService: (codeTypeProduitServiceOffre: string, codeProduit: number, codeSousFamilleActeGestion: string) => ParametrageBlocGgho;
        constructor(parametrageBlocs: ParametrageBlocGgho[]);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface IMediaPersMorale {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IListeMedia {
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        referenceAccesMedia: string;
        indicateurOptin: boolean;
        commentaire: string;
        indicatifTelephone: string;
        indicateurSecu: boolean;
        indicateurProOptout: boolean;
        indicateurSmsFax: boolean;
    }
    class MediaPersMorale {
        private _identificationPersonne;
        private _listeMedia;
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
        constructor(m: IMediaPersMorale);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface IMedia {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        /**
         * '01'       Téléphone fixe
         * '02'       Téléphone mobile
         * '03'       E-mail
         * '04'       Fax
         * '05'       SiteWeb
         */
        codeTypeMedia: string;
        /**
         * Libellé type média
         */
        libelleTypeMedia: string;
        /**
         * 'P'        Personnel
         * 'T'        Professionnel
         * 'A'        Sécurisation Opérations en Ligne (SOL)
         */
        codeTypeUsageMedia: string;
        /**
         * Libellé type usage média
         */
        libelleTypeUsageMedia: string;
        /**
         * ‘O’        Oui
         * ‘N’        Non
         */
        indicateurPreferenceMedia: boolean;
        /**
         * ?
         */
        indicateurSecu: string;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
        /**
         *
         */
        indicatifTel: string;
        /**
         * Indique si le client accepte d'être contacté par ce moyen de contact (Mail, téléphone).
         * Valeurs possibles :
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurOPTIN: boolean;
        /**
         * ?
         */
        indicateurProOptout: string;
        /**
         * ?
         */
        indicateurOppositionTelephone: string;
        /**
         * ?
         */
        indicateurEnvoiCourrier: string;
        /**
         * ?
         */
        typePersonne: string;
    }
    class Media {
        private _identifiantPersonne;
        identifiantPersonne: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _numeroChronoProfessionnel;
        numeroChronoProfessionnel: number;
        private _numeroChronoLieuActivite;
        numeroChronoLieuActivite: number;
        private _codeTypeMedia;
        codeTypeMedia: string;
        private _libelleTypeMedia;
        libelleTypeMedia: string;
        private _codeTypeUsageMedia;
        codeTypeUsageMedia: string;
        private _libelleTypeUsageMedia;
        libelleTypeUsageMedia: string;
        private _indicateurPreferenceMedia;
        indicateurPreferenceMedia: boolean;
        private _indicateurSecu;
        indicateurSecu: string;
        private _referenceAccesMedia;
        referenceAccesMedia: string;
        private _indicatifTel;
        indicatifTel: string;
        private _indicateurOPTIN;
        indicateurOPTIN: boolean;
        private _indicateurProOptout;
        indicateurProOptout: string;
        private _indicateurOppositionTelephone;
        indicateurOppositionTelephone: string;
        private _indicateurEnvoiCourrier;
        indicateurEnvoiCourrier: string;
        private _typePersonne;
        typePersonne: string;
        constructor(m: IMedia);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IOffreSouscrite {
        numeroOffreSouscrite: number;
        codeCaractereForfaitaireOffre: string;
        codeProduitServiceOffre: number;
        codeActeGestion: string;
        codeCanal: string;
        codeSensCommunication: string;
        codeEntite: string;
        codeModeDeVentePossible: string;
        codeModeDeVenteCalcule: string;
        codeProcessusDeVente: string;
        numeroPersonneIdentifiee: number;
        libelleOffre: string;
        numeroOffreFamille?: number;
        typeTitulaire?: string;
    }
    /**
     * Données transmises au composant produit / service
     */
    class OffreSouscrite {
        private _numeroOffreSouscrite;
        /**
         * Numéro de l'offre souscrite NOBCOF
         */
        numeroOffreSouscrite: number;
        private _codeCaractereForfaitaireOffre;
        /**
         * Permet de savoir si l’offre est compatible avec la tarification. L'offre est tarifée si la rubrique CIEGCF vaut "F". CIEGCF
         */
        codeCaractereForfaitaireOffre: string;
        private _codeProduitServiceOffre;
        /**
         * Code produit (IDEGPS) de l'offre
         */
        codeProduitServiceOffre: number;
        private _codeActeGestion;
        /**
         * Code de l'acte de gestion. Ex : OU00004817 pour une ouverture PEL CLASSIQUE
         */
        codeActeGestion: string;
        private _codeCanal;
        /**
         * Canal de vente : FF / IN / TL / CO
         */
        codeCanal: string;
        private _codeSensCommunication;
        /**
         * Code sens de communication CND2SS (E : Entrant, S : Sortant)
         */
        codeSensCommunication: string;
        private _codeEntite;
        /**
         * Code entité : 1 AGENCE 2 CRC 3 E- AGENCE 4 INTERNET
         */
        codeEntite: string;
        private _codeModeDeVentePossible;
        /**
         * Code mode de vente MEGI/VPC/indéterminé (espaces ou IND ?) : Le code mode de vente qui est transmis par
         * CATADIS via propositionOffre.
         */
        codeModeDeVentePossible: string;
        private _codeModeDeVenteCalcule;
        /**
         * Code mode de vente MEGI/VPC/indéterminé (espaces ou IND ?) : Le code mode de vente qui est transmis par
         * CATADIS via propositionOffre.
         */
        codeModeDeVenteCalcule: string;
        private _codeProcessusDeVente;
        /**
         * Code processus de vente VMC (DT44). Ex 0 => FACE_A_FACE_AGENCE
         */
        codeProcessusDeVente: string;
        private _numeroPersonneIdentifiee;
        /**
         * N° de personne identifiée dans la synthèse client. Utilisée par la contract
         */
        numeroPersonneIdentifiee: number;
        private _libelleOffre;
        /**
         * Libellé de l'offre ex "Bouquet Liberté", sans l'acte (càd PAS "Ouverture Bouquet Liberté")
         */
        libelleOffre: string;
        codeSousFamilleActeGestion: string;
        /**
         * Numéro de l'offre famille
         */
        private _numeroOffreFamille;
        numeroOffreFamille: number;
        /**
         * Type titulaire
         */
        private _typeTitulaire;
        typeTitulaire: string;
        constructor(ios: IOffreSouscrite);
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Etats possibles pour le chargement d'un fichier
     */
    enum IndicateurChargement {
        /**
         * Le fichier n'a pas encore été chargé
         */
        NonCharge = 0,
        /**
         * L'ordre de chargement a été donné mais n'a pas abouti, ou alors la requête a échoué en time out
         */
        EnCoursDeChargement = 1,
        /**
         * Le fichier a été correctement chargé, càd le callback sur le onload a été activé
         * (pour les fichiers html, on est passé via le callback success du $http ayant effectué le get)
         */
        Succes = 2,
        /**
         * Le fichier n'a pas été chargé (ex 404), càd le callback sur le onerror a été activé
         * (pour les fichiers html, on est passé via le callback error du $http ayant effectué le get)
         */
        Echec = 3,
    }
    enum TypeFichier {
        js = 0,
        css = 1,
    }
    class DescriptionFichier {
        private _typeFichier;
        /**
         * Type de fichier : js, css
         */
        typeFichier: TypeFichier;
        private _prioriteChargement;
        /**
         * Priorité de chargement. Les fichiers à priorité élevée sont chargés en premier.
         */
        prioriteChargement: number;
        private _cheminAccesFichier;
        /**
         * Le chemin d'accès au fichier hors éléments de type CDN, environnement etc.
         * DOIT commencer par un /
         */
        cheminAccesFichier: string;
        private _indicateurChargement;
        /**
         * Indicateur de chargement associé au fichier
         */
        indicateurChargement: number;
        private _messageErreur;
        /**
         * Indicateur de chargement associé au fichier
         */
        messageErreur: string;
        constructor(typeFichier: Types.TypeFichier, cheminAccesFichier: string);
    }
    /**
     * Paramétrage des produits services dans GGO
     */
    class ParametrageBloc {
        private _codeTypeProduitService;
        /**
         * CODIPR (ex : 0004 => comptes, KTIM => cartes, etc.)
         */
        codeTypeProduitService: string;
        private _identifiantProduitService;
        /**
         * Code produit IDEGPS
         */
        identifiantProduitService: number;
        private _codeSousFamilleActeGestion;
        /**
         * Code sous famille acte de gestion
         * OU => Souscription
         * AV => Avenant
         * CL => Cloture
         */
        codeSousFamilleActeGestion: string;
        private _controlesPreRequis;
        /**
         * Demande un controle
         */
        controlesPreRequis: Types.ControlePreRequis[];
        private _identifiantComposantProduitService;
        /**
         * Identifiant de la directive métier associée au triplet CODIPR/IDEGPS/code sous famille
         * Permet de déterminer la directive métier qui sera affichée dans le bloc
         * Pour un assemblage, permet d'identifier la directive métier qui permettra d'opérer la sélection dans
         * l'assemblage
         */
        identifiantComposantProduitService: string;
        private _nePasCharger;
        /**
         * Indique s'il faut charger le P/S ou pas. Essentiellement pour le débogage, au cas où un produit planterait et où il faudrait l'exclure
         * temporairement
         */
        nePasCharger: boolean;
        private _fichiersComposantProduitService;
        /**
         * Fichiers associés au composant
         */
        fichiersComposantProduitService: DescriptionFichier[];
        constructor(codeTypeProduitService: string, identifiantProduitService: number, codeSousFamilleActeGestion: string, controlesPreRequis: Types.ControlePreRequis[], identifiantComposantProduitService: string, fichiersComposantProduitService: DescriptionFichier[]);
    }
    interface IParametrageBlocs {
        getDonneesParametrageComposantProduitService(codeTypeProduitServiceOffre: string, codeProduit: number, codeSousFamilleActeGestion: string): ParametrageBloc;
    }
    interface IParametrageBlocsData {
        parametrageBlocsData: ParametrageBloc[];
    }
    class ParametrageBlocs implements IParametrageBlocs {
        private _parametrageBlocs;
        /**
         * L'intégralité du paramétrage de chacun des composants
         */
        parametrageBlocs: ParametrageBloc[];
        /**
         *  Recherche d'un paramétrage en fonction du code produit et/ou du CODIPR et/ou du mode de souscription
         */
        getDonneesParametrageComposantProduitService: (codeTypeProduitServiceOffre: string, codeProduit: number, codeSousFamilleActeGestion: string) => ParametrageBloc;
        constructor(parametrageBlocs: ParametrageBloc[]);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface IStatutPro {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    class StatutPro {
        private _identifiantPersonne;
        identifiantPersonne: string;
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeEtatStatutPro;
        codeEtatStatutPro: string;
        private _dateModificationStatutPro;
        dateModificationStatutPro: string;
        private _dateFinValiditeStatutPro;
        dateFinValiditeStatutPro: string;
        private _identifiantExterneAgentModification;
        identifiantExterneAgentModification: string;
        private _identifiantInterneAgentModification;
        identifiantInterneAgentModification: string;
        private _libelleCalculeEDS;
        libelleCalculeEDS: string;
        private _libelleFonctionPF;
        libelleFonctionPF: string;
        private _libelleEDS;
        libelleEDS: string;
        constructor(isp: IStatutPro);
    }
    class GestionPrivee {
        private _identifiantPersonne;
        identifiantPersonne: string;
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeActnMajSuivSpclGp;
        codeActnMajSuivSpclGp: string;
        private _codeEtatSuiviGP;
        codeEtatSuiviGP: string;
        private _identifiantEDS;
        identifiantEDS: string;
        private _identifiantExterneEDS;
        identifiantExterneEDS: string;
        private _libelleCalculeEDS;
        libelleCalculeEDS: string;
        private _typeEDS;
        typeEDS: string;
        private _libelleFonctionPF;
        libelleFonctionPF: string;
        private _libelleEDS;
        libelleEDS: string;
        private _dateDebutValiditeGP;
        dateDebutValiditeGP: string;
        private _dateFinValiditeGP;
        dateFinValiditeGP: string;
        private _identifiantEDS2;
        identifiantEDS2: string;
        private _identifiantExterneEDS2;
        identifiantExterneEDS2: string;
        private _libelleCalculeEDS2;
        libelleCalculeEDS2: string;
        private _codeMotivationMarquageGP;
        codeMotivationMarquageGP: string;
        private _commentaireMarquageProspect;
        commentaireMarquageProspect: string;
        constructor(igp: IGestionPrivee);
    }
    interface IGestionPrivee {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: string;
        identifiantExterneEDS: string;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: string;
        identifiantExterneEDS2: string;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
    interface IParticulierInformation {
        identifiantPersonne: number;
        codeEtablissement: string;
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libelleCapaciteJuridique: string;
        libellePaysNaissance: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: string;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        nomEmployeur: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: string;
        codeTypeContratTravail: string;
        dateFinContratTravail: string;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: string;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: StatutPro;
        gestionPrivee: GestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        nif: string;
    }
    /** Information sur une personne de type "particulier" */
    class ParticulierInformation {
        private _identifiantPersonne;
        identifiantPersonne: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _libelleCivilite;
        libelleCivilite: string;
        private _libelleSexe;
        libelleSexe: string;
        private _libelleCommuneNaissance;
        libelleCommuneNaissance: string;
        private _libelleDepartementNaissance;
        libelleDepartementNaissance: string;
        private _libellePaysNationnalite;
        libellePaysNationnalite: string;
        private _libelleAppartenanceReseau;
        libelleAppartenanceReseau: string;
        private _libelleSocietaire;
        libelleSocietaire: string;
        private _libelleCapaciteJuridique;
        libelleCapaciteJuridique: string;
        private _libellePaysNaissance;
        libellePaysNaissance: string;
        private _libelleInseePaysDoubleNationalite;
        libelleInseePaysDoubleNationalite: string;
        private _libelleSituationFamiliale;
        libelleSituationFamiliale: string;
        private _libelleRegimeMatirimonial;
        libelleRegimeMatirimonial: string;
        private _libelleCategorieSocioprofessionnelle;
        libelleCategorieSocioprofessionnelle: string;
        private _libelleTypeContratTravail;
        libelleTypeContratTravail: string;
        private _libelleNAFInsee;
        libelleNAFInsee: string;
        private _codeCivilite;
        codeCivilite: string;
        private _nomFamillePersonnePhysique;
        nomFamillePersonnePhysique: string;
        private _nomMarital;
        nomMarital: string;
        private _designationCourte;
        designationCourte: string;
        private _prenom;
        prenom: string;
        private _autresPrenom;
        autresPrenom: string;
        private _codeSexe;
        codeSexe: string;
        private _dateNaissance;
        dateNaissance: string;
        private _codeCommuneNaissance;
        codeCommuneNaissance: string;
        private _codeDepartementNaissance;
        codeDepartementNaissance: string;
        private _codeInseePaysNationnalite;
        codeInseePaysNationnalite: string;
        private _dateDeces;
        dateDeces: string;
        private _codeCapaciteJuridique;
        codeCapaciteJuridique: string;
        private _codePaysNaissance;
        codePaysNaissance: string;
        private _codeInseePaysDoubleNationalite;
        codeInseePaysDoubleNationalite: string;
        private _codeSituationFamiliale;
        codeSituationFamiliale: string;
        private _dateEffetSituationFamiliale;
        dateEffetSituationFamiliale: string;
        private _codeRegimeMatrimonial;
        codeRegimeMatrimonial: string;
        private _typeClauseMatrimoniale;
        typeClauseMatrimoniale: string;
        private _indicDonationEntreEpoux;
        indicDonationEntreEpoux: string;
        private _nombreEnfantACharge;
        nombreEnfantACharge: number;
        private _categorieSocioprofessionnelle;
        categorieSocioprofessionnelle: string;
        private _nomEmployeur;
        nomEmployeur: string;
        private _dateEffetCSP;
        dateEffetCSP: string;
        private _dateEmbaucheEmployeurActuel;
        dateEmbaucheEmployeurActuel: string;
        private _codeTypeContratTravail;
        codeTypeContratTravail: string;
        private _dateFinContratTravail;
        dateFinContratTravail: string;
        private _libelleProfession;
        libelleProfession: string;
        private _codeResident;
        codeResident: string;
        private _codeAppartenanceReseau;
        codeAppartenanceReseau: string;
        private _edsDomiciliation;
        edsDomiciliation: number;
        private _codePieceJustif;
        codePieceJustif: string;
        private _dateObtentionPieceJustificative;
        dateObtentionPieceJustificative: string;
        private _refPieceJustificative;
        refPieceJustificative: string;
        private _codeTypeNIF;
        codeTypeNIF: string;
        private _dateNaissanceConjoint;
        dateNaissanceConjoint: string;
        private _indicDecesPresume;
        indicDecesPresume: string;
        private _dateDecesPresume;
        dateDecesPresume: string;
        private _edsInterneDomiciliation;
        edsInterneDomiciliation: number;
        private _sirenEmployeur;
        sirenEmployeur: string;
        private _sirenAutoEntrepreneur;
        sirenAutoEntrepreneur: string;
        private _indicateurAutoEntrepreneur;
        indicateurAutoEntrepreneur: string;
        private _indicateurSocietaire;
        indicateurSocietaire: string;
        private _identifiantRelationtEconomique;
        identifiantRelationtEconomique: number;
        private _domiciliationRevenu;
        domiciliationRevenu: string;
        private _horsPresenceClient;
        horsPresenceClient: string;
        private _dateNaturalisation;
        dateNaturalisation: string;
        private _codeFamilleNAFINSEE;
        codeFamilleNAFINSEE: string;
        private _troisDerniersCaracteresNAF;
        troisDerniersCaracteresNAF: string;
        private _codeSecteurEmploi;
        codeSecteurEmploi: string;
        private _indicateurActiviteProfessionnel;
        indicateurActiviteProfessionnel: string;
        private _codeGuichetRisque;
        codeGuichetRisque: number;
        private _identifiantAdresse;
        identifiantAdresse: number;
        private _ligne2AdresseAFNOR;
        ligne2AdresseAFNOR: string;
        private _ligne3AdresseAFNOR;
        ligne3AdresseAFNOR: string;
        private _ligne4AdresseAFNOR;
        ligne4AdresseAFNOR: string;
        private _ligne5AdresseAFNOR;
        ligne5AdresseAFNOR: string;
        private _ligne6AdresseAFNOR;
        ligne6AdresseAFNOR: string;
        private _numeroVoiePTT;
        numeroVoiePTT: number;
        private _codePostalPTT;
        codePostalPTT: string;
        private _codeQuartier;
        codeQuartier: string;
        private _numeroTourneeFacteur;
        numeroTourneeFacteur: number;
        private _numeroTelephoneAdresse;
        numeroTelephoneAdresse: string;
        private _numeroTelephoneCorrespondancePerso;
        numeroTelephoneCorrespondancePerso: string;
        private _numeroTelephoneCorrespondancePro;
        numeroTelephoneCorrespondancePro: string;
        private _codeInseePays;
        codeInseePays: string;
        private _codeTypeAdresse;
        codeTypeAdresse: string;
        private _codeRetourDistribution;
        codeRetourDistribution: string;
        private _codeExistenceListeRouge;
        codeExistenceListeRouge: string;
        private _numeroFax;
        numeroFax: string;
        private _codeAccesMinitel;
        codeAccesMinitel: string;
        private _indicateurDetentionTelephone;
        indicateurDetentionTelephone: string;
        private _commentaireTelephone;
        commentaireTelephone: string;
        private _numeroVoieHexavia;
        numeroVoieHexavia: number;
        private _codePostalFranceEtEtranger;
        codePostalFranceEtEtranger: string;
        private _libelleInseeLocalite;
        libelleInseeLocalite: string;
        private _codeISOPays;
        codeISOPays: string;
        private _indicateurEnvoiCourrier;
        indicateurEnvoiCourrier: string;
        private _indiceAmericaniteFATCA;
        indiceAmericaniteFATCA: string;
        private _libelleStatutFATCA;
        libelleStatutFATCA: string;
        private _dateAttributionFATCA;
        dateAttributionFATCA: string;
        private _codeBlocageVAO;
        codeBlocageVAO: string;
        private _oppositionTelephonePerso;
        oppositionTelephonePerso: string;
        private _oppositionTelephonePro;
        oppositionTelephonePro: string;
        private _statutPro;
        statutPro: StatutPro;
        private _gestionPrivee;
        gestionPrivee: GestionPrivee;
        private _eligibiliteFGDR;
        eligibiliteFGDR: string;
        private _droitAuCompte;
        droitAuCompte: string;
        private _dateEffetOptionResidence;
        dateEffetOptionResidence: string;
        private _codeFamilleCategorieJuridique;
        codeFamilleCategorieJuridique: string;
        private _codeCategorieJuridiqueDeuxDern;
        codeCategorieJuridiqueDeuxDern: string;
        private _indicateurPPE;
        indicateurPPE: string;
        private _nif;
        nif: string;
        constructor(ipi: IParticulierInformation);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface IParticulierTiersLie {
        codeEtablissement: string;
        identifiantPersonne: number;
        codeTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        identifiantPersonneLie: number;
        refPieceJustificatifLien: string;
        personneRattacheeRelation: string;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
    }
    class ParticulierTiersLie {
        private _codeEtablissement;
        codeEtablissement: string;
        private _identifiantPersonne;
        identifiantPersonne: number;
        private _codeTypeLienInterPersonne;
        codeTypeLienInterPersonne: string;
        private _codeSensLienInterPersonne;
        codeSensLienInterPersonne: string;
        private _identifiantPersonneLie;
        identifiantPersonneLie: number;
        private _refPieceJustificatifLien;
        refPieceJustificatifLien: string;
        private _personneRattacheeRelation;
        personneRattacheeRelation: string;
        private _designationRelationEconomique;
        designationRelationEconomique: string;
        private _codeFamilleLienInterPersonne;
        codeFamilleLienInterPersonne: string;
        constructor(ilt: IParticulierTiersLie);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    /**
     * Concaténation de la classe Identification et ParticulierInformation, media, tiersLie
     */
    class PersonneMorale implements IDetenteur {
        private _identifiantPersonne;
        /**
         * Données de la personne, remontée de la ressource Tiers
         */
        identifiantPersonne: number;
        private _identification;
        /**
         * Identification personne
         */
        identification: Types.Tiers.Identification | Types.TiersV3.Identification;
        private _corporateInformation;
        private _informationProfessionnel;
        /**
         * Informations personne
         */
        corporateInformation: CorporateInformation | Types.TiersV3.IInformationProfessionnel[];
        private _listeMedias;
        /**
         * Liste des médias associés (téléphone, e-mail ...)
         */
        listeMedias: Media[] | Types.TiersV3.IMedia[];
        private _corporateTiersLies;
        corporateTiersLies: Tiers.CorporateTiersLies[] | Types.TiersV3.IInformationTiersLie[];
        private _selectionne;
        /**
         * Checkbox de sélection du bloc personne
         */
        selectionne: boolean;
        private _controlePreRequis;
        /**
         * Contrôles pré-requis associées à cette personne. Si une occurence existe pour une personne donnée
         * c'est que le contrôle a été effectué pour cette personne.
         */
        controlePreRequis: ControlePreRequis[];
        private _alerte;
        /**
         * Vrai : une alerte est levée sur la personne. Provoque l'affichage du picto danger dans le bloc personne pour cette personne
         */
        alerte: boolean;
        private _messageAlerte;
        /**
         * Affiche un libellé relatif aux alertes levée pour la personne dans le bloc personne
         */
        messageAlerte: string;
        /** Renvoie l'id. */
        getId: number;
        /** Renvoie le libellé */
        getLibelle: string;
        getLibelleAbrege(): string;
        constructor(identification: Identification | Types.TiersV3.Identification, corporateInformation: CorporateInformation | Types.TiersV3.IInformationProfessionnel[], listeMedias: Media[] | Types.TiersV3.IMedia[], corporateTiersLies: Tiers.CorporateTiersLies[] | Types.TiersV3.IInformationTiersLie[]);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    /**
     * Concaténation de la classe Identification et ParticulierInformation, media, tiersLie
     */
    class Personne implements IDetenteur {
        private _identifiantPersonne;
        /**
         * Données de la personne, remontée de la ressource Tiers
         */
        identifiantPersonne: number;
        private _identification;
        /**
         * Identification personne
         */
        identification: Types.Tiers.Identification | Types.TiersV3.Identification;
        private _particulierInformation;
        /**
         * Informations personne
         */
        particulierInformation: ParticulierInformation | Types.TiersV3.InformationParticulier;
        private _listeMedias;
        /**
         * Liste des médias associés (téléphone, e-mail ...)
         */
        listeMedias: Media[];
        private _particulierTiersLies;
        /**
         * Tiers liés : relations inter-personnes
         */
        particulierTiersLies: Tiers.ParticulierTiersLie[] | Types.TiersV3.IInformationTiersLie[];
        private _selectionne;
        /**
         * Checkbox de sélection du bloc personne
         */
        selectionne: boolean;
        private _controlePreRequis;
        /**
         * Contrôles pré-requis associées à cette personne. Si une occurence existe pour une personne donnée
         * c'est que le contrôle a été effectué pour cette personne.
         */
        controlePreRequis: ControlePreRequis[];
        private _alerte;
        /**
         * Vrai : une alerte est levée sur la personne. Provoque l'affichage du picto danger dans le bloc personne pour cette personne
         */
        alerte: boolean;
        private _messageAlerte;
        /**
         * Affiche un libellé relatif aux alertes levée pour la personne dans le bloc personne
         */
        messageAlerte: string;
        /** Renvoie l'id. */
        getId: number;
        /** Renvoie le libellé */
        getLibelle: string;
        /**
         * Essaie d'abréger MONSIEUR en M., MADAME en MME. et MADEMOISELLE en MLLE.
         */
        getLibelleAbrege(): string;
        constructor(identification: Types.Tiers.Identification | Types.TiersV3.Identification, particulierInformation: ParticulierInformation | Types.TiersV3.InformationParticulier, listeMedias: Media[], particulierTiersLies: Tiers.ParticulierTiersLie[] | Types.TiersV3.IInformationTiersLie[]);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface IListeProcuration {
        listeProcuration: Array<Procuration>;
    }
    interface IProcuration {
        codeRetour: number;
        codeTypeIntervenant: string;
        codeEtatMandat: string;
        codePersonnaliteJuridique: string;
        nomFamillePersonnePhysique: string;
        codeCivilitePersonnePhysique: string;
        prenom: string;
        dateDeNaissance: string;
        raisonSociale: string;
        dateCreationJuridique: string;
        identifantPersonne: number;
        numeroOffre: number;
        numeroSiren: string;
        typeMandat: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        identifiantProduitService: string;
        libelleCourtProduit: string;
        dateDebutEffetMandat: number;
        dateFinEffetMandat: number;
        premiereLigneCommentaire: string;
        secondeLigneCommentaire: string;
        troisiemeLigneCommentaire: string;
        codeOperation: string;
        statutMandat: string;
        dateEffectiveRevocationMandat: number;
        referenceExterneAgent: string;
        designationCourteParticulier?: string;
    }
    class ListeProcuration {
        private _listeProcuration;
        listeProcuration: Array<Procuration>;
        constructor(ip: IListeProcuration);
    }
    class Procuration implements IDetenteur {
        private _codeRetour;
        codeRetour: number;
        private _codeTypeIntervenant;
        codeTypeIntervenant: string;
        private _codeEtatMandat;
        codeEtatMandat: string;
        private _codePersonnaliteJuridique;
        codePersonnaliteJuridique: string;
        private _nomFamillePersonnePhysique;
        nomFamillePersonnePhysique: string;
        private _codeCivilitePersonnePhysique;
        codeCivilitePersonnePhysique: string;
        private _prenom;
        prenom: string;
        private _dateDeNaissance;
        dateDeNaissance: string;
        private _raisonSociale;
        raisonSociale: string;
        private _dateCreationJuridique;
        dateCreationJuridique: string;
        private _identifantPersonne;
        identifantPersonne: number;
        private _numeroOffre;
        numeroOffre: number;
        private _numeroSiren;
        numeroSiren: string;
        private _typeMandat;
        typeMandat: string;
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeGuichet;
        codeGuichet: string;
        private _codeTypeProduitService;
        codeTypeProduitService: string;
        private _identifiantProduitService;
        identifiantProduitService: string;
        private _libelleCourtProduit;
        libelleCourtProduit: string;
        private _dateDebutEffetMandat;
        dateDebutEffetMandat: number;
        private _dateFinEffetMandat;
        dateFinEffetMandat: number;
        private _premiereLigneCommentaire;
        premiereLigneCommentaire: string;
        private _secondeLigneCommentaire;
        secondeLigneCommentaire: string;
        private _troisiemeLigneCommentaire;
        troisiemeLigneCommentaire: string;
        private _codeOperation;
        codeOperation: string;
        private _statutMandat;
        statutMandat: string;
        private _dateEffectiveRevocationMandat;
        dateEffectiveRevocationMandat: number;
        private _referenceExterneAgent;
        referenceExterneAgent: string;
        private _controlePreRequis;
        /**
         * Contrôles pré-requis associées à cette personne. Si une occurence existe pour une personne donnée
         * c'est que le contrôle a été effectué pour cette personne.
         */
        controlePreRequis: ControlePreRequis[];
        private _alerte;
        /**
         * Vrai : une alerte est levée sur la personne. Provoque l'affichage du picto danger dans le bloc personne pour cette personne
         */
        alerte: boolean;
        private _messageAlerte;
        /**
         * Affiche un libellé relatif aux alertes levée pour la personne dans le bloc personne
         */
        messageAlerte: string;
        private _selectionne;
        /**
         * Checkbox de sélection du bloc personne
         */
        selectionne: boolean;
        private _designationCourteParticulier;
        designationCourteParticulier: string;
        getLibelleAbrege(): string;
        getLibelle: string;
        getId: number;
        identifiantPersonne: number;
        constructor(ilp: IProcuration);
    }
}

declare module GestionGeneriqueOffres.Types.Cloture {
    interface IProduitService {
        pouvoirDetenir: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, composition: CompositionOffre, compteSupportAutorise?: boolean) => PropositionReprise;
    }
    /**
     *  Classe décrivant le P/S
     */
    class ProduitService implements IProduitService {
        private _produitCaracteristique;
        /**
         * Identification du produit service
         */
        produitCaracteristique: ProduitCaracteristique;
        private _produitCatalogue;
        /**
         * Description du produit service
         */
        produitCatalogue: ProduitCatalogue;
        private _propositionsReprises;
        /**
         * Proposition de produit service
         * Si il y a plusieurs entités/personnes qui peuvent détenir le produit, il y a plusieurs occurences
         */
        propositionsReprises: PropositionReprise[];
        private _donneesSpecifiques;
        /**
         * Données spécifiques GGO concernant le produit et ne provenant pas de la ressource souscription/avenant
         */
        donneesSpecifiques: DonneesSpecifiquesProduitGGO;
        /**
         * Permet de savoir si une personne ou une entité peut détenir ce produit.
         * Pour les produits avec compte support, on vérifie aussi que le produit support existe dans le panier pour ce détenteur
         * (cas des CEL/PEL qui contiennent des produits obsolètes)
         * @param {Types.InformationEntiteTitulaire | Types.Tiers.Personne} detenteur : Le détenteur du produit
         * @param {Types.CompositionOffre} composition Le panier
         * @param {boolean} compteSupportAutorise? Effectue un contrôle supplémentaire sur la présence d'un produit support
         * @returns la proposition si le produit peut être détenu, sinon undefined
         */
        pouvoirDetenir: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, composition: CompositionOffre, compteSupportAutorise?: boolean) => PropositionReprise;
        constructor(produitCaracteristique: ProduitCaracteristique, produitCatalogue: ProduitCatalogue, propositionsReprises: PropositionReprise[], donneesSpecifiques: DonneesSpecifiquesProduitGGO);
    }
    class ProduitCaracteristique {
        private _identifiantProduitService;
        /**
         * Code produit (IDEGPS) du produit/service souscrit.
         */
        identifiantProduitService: number;
        private _libelleProduitService;
        /**
         * Son libellé (LNEGCO)
         */
        libelleProduitService: string;
        private _codeTypeProduitService;
        /**
         * Son code type produit service (CODIPR)
         */
        codeTypeProduitService: string;
        private _libelleLongProduitService;
        /**
         * Son libellé long (concaténation des LIBCCO du segment SU05)
         */
        libelleLongProduitService: string;
        private _libelleTechniqueProduitService;
        /**
         * Son libelle accessible en minuscule.
         */
        libelleTechniqueProduitService: number;
        private _codeActeGestion;
        /**
         * Code acte de gestion.
         */
        codeActeGestion: string;
    }
    interface IProduitCatalogue {
        codeProduitServiceExterne: string;
        nombreMiniExemplairesProduitService: number;
        numeroSequenceOuverture: number;
        codeModaliteDetentionProduitService: string;
        niveauParticipationProduitService: number;
        codeAffichageReferenceProduitService: string;
        codeDecompositionProduitService: string;
        codeNatureProduitServiceAssocie: string;
        indicateurProduitServiceInclusForfait: string;
        codeFamilleGestionLocaleContrat: string;
        codeDeviseMontantOperation: string;
        indicateurClotureProduitService: string;
    }
    /**
     * Classe définissant un  produit / service du catalogue des offres.
     * Correspond au segment SU04 "contenu d’une offre". Décrit le P/S.
     */
    class ProduitCatalogue {
        private _codeProduitServiceExterne;
        /**
         * Le code produit service externe (COEGEX)
         */
        codeProduitServiceExterne: string;
        private _nombreMiniExemplairesProduitService;
        /**
         * Nombre mini de P/S qui doivent être détenus (QPEGEX). Non utilisé, on utilise plutôt
         * _indicateurProduitServiceObligatoireOffre
         */
        nombreMiniExemplairesProduitService: number;
        private _numeroSequenceOuverture;
        /**
         * Num séquence ouverture (NOEGOU)
         * Définition
         * ----------
         *    Numéro d'ordre dans lequel les ouvertures des
         *    P / S fils doivent être executées dans le cadre
         *    d'un association ou d'une composition.
         *    Utilisation par Contrat :
         *    -------------------------
         * /!\ La logique d'ouverture des produits dans GGO n'est pas basée sur cette valeur
         */
        numeroSequenceOuverture: number;
        private _codeModaliteDetentionProduitService;
        /**
         * La modalité de détention (CGEGMD) : Détermine le mode de détention d'un produit ou service
         * dans le cadre de sa souscription : C : via un compte, E : via une entité titulaire, P : via une personne
         */
        codeModaliteDetentionProduitService: string;
        private _niveauParticipationProduitService;
        /**
         * Niveau de participation (NOEGWN) :
         * Indique le niveau de participation lors des décompositions des P/S associés ou composés.
         * 0 P/ S père,  1 fils, 2 petit fils   ainsi de suite.
         * Il s'agit du niveau dans l'arbre des P/S de l'offre. L'offre est toujours de niveau 000.
         * Les P/ S simples ou assemblage situés sous l'offre sont 001
         * Si c'est un assemblage de niveau 001 , les P/S qui le constituent sont de niveau 002 etc.
         * On sait qu'on a terminé de parcourir un assemblage lorsque le niveau remonte :
         * 000 OFFRE
         *  001  ASSEMBLAGE A
         *   002 P/S 1 de A
         *   002 P/S 2 de A
         *   ...
         *   002 P/S n de A
         *  001  P/S B
         *  001  ASSEMBLAGE C
         *   002 P/S 1 de C
         *   ...
         * Il peut y a voir des ruptures de niveau dans l'arbre car les assemblages d'affichage ne sont pas restitués par la QR :
         * On peut passer de 000 à 002 directement par ex.
         */
        niveauParticipationProduitService: number;
        private _codeDecompositionProduitService;
        /**
         *                Définition :
         *             Indique si le produit ou service est élémentaire
         *             ou composite : simple, associé ou composé
         *
         *             Une offre est toujours un P/S associé
         *
         *             Valeurs :
         *  'SIM'      P/S simple
         *  'ASS'      P/S associé
         *  'COM'      P/S composé
         */
        codeDecompositionProduitService: string;
        private _codeAffichageReferenceProduitService;
        /**
         * Code affichage référence P/S (CIEGEX)
         * Indique le mode d'affichage à employer pour la référence d'identification du produit/service souscrit.
         * '0'        affichage du code banque, code guichet et référence à l'écran et à l'impression.
         *   -> P/S qui ont un RICE
         * '1'        affichage de la référence
         *   -> P/S en mode personne ou P/S externes qui doivent avoir une référence saisie
         * '2'        affichage du libellé 'souscrit'
         *   -> P/S externes sans reférences, P/S non standards
         * '3' -> P / S en mode compte avec affichage du code banque code guichet et référence à l'écran uniquement.
         * '4' -> P / S en mode compte avec affichage du code banque,code guichet et référence à l'impression uniquement.
         * '5' -> P / S sans affichage ni à l'écran, ni à l'impression.
         */
        codeAffichageReferenceProduitService: string;
        private _codeNatureProduitServiceAssocie;
        /**
         * Code nature P/S Associé (CIEGOF).
         * Indique la nature du P/S Associé
         * Non significatif pour les P/S simples   (espace ?)
         * Valeurs:
         * 'O'        Offre : l'offre principale
         * 'L'        Liste des Offres. Elle permet de définir un assemblage contenant toutes les offres afin de définir un
         *            ordre d'affichage. Valeur non visible de la GGO
         * 'C'        Associé dont les Fils sont Cumulables. ex: assemblage de cartes Visa immédiat et Différée, possibilité de
         *            souscrire une ou deux cartes
         * 'I'        Interchangeable. Une seule souscription du PS par "souscripteur" parmi les N de l'assemblage.
         *            1 pour 1 ET si PS en mode ET.
         *            1 par personne si PS en mode Personne.
         *            ex: assemblage Eparfix/ Eparplus
         *            choix exclusif d'un des deux Fils
         * 'T'        Technique : NON GERE ACTUELLEMENT
         * 'A'        Affichage : Permet une présentation du libellé de l'assemblage sans autre fonctionnalité. Filtré
         *            par GGO dès récupération du catalogue, non utilisé dans GGO
         */
        codeNatureProduitServiceAssocie: string;
        private _indicateurProduitServiceInclusForfait;
        /**
         * Indicateur P/S inclus Forfait (CIEGIF). indique pour un P/S inclus dans un Forfait la tarification appliquée au P/S
         * " " : inclus intégralement, pas de tarif unitaire, "H" : Fait l'objet d'un surcoût
         */
        indicateurProduitServiceInclusForfait: string;
        private _codeFamilleGestionLocaleContrat;
        /**
         * Code famille gestion locale contrat. Ex : BOUCLI pour Bouquet Liberté
         */
        codeFamilleGestionLocaleContrat: string;
        private _codeDeviseMontantOperation;
        /**
         * Code monnaie tenue compte
         */
        codeDeviseMontantOperation: string;
        private _indicateurClotureProduitService;
        /**
         * Indique le mode de clôture du produit en cas de changement d'Offre,
         * les P/S simples de l'offre source n'étant pas nécessairement repris dans l'offre cible.
         */
        indicateurClotureProduitService: string;
        private _niveauPriorite;
        /**
         * Niveau de priorité de mise en gestion associé au produit. 100 = maxi, 0 = mini
         */
        niveauPriorite: number;
        constructor(pc: IProduitCatalogue);
    }
    interface IPropositionReprise {
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        identifiantProduitServiceSupport: number;
        modeTraitementProduitService: number;
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
        dateIntroductionProduitServiceDansOffre: Date;
        dateDernierAvenantProduitServiceDansOffre: Date;
        listeSousFamilleActesGestion: string[];
        designationCourteParticulier: string;
    }
    /**
     * Classe correspondant à la fusion des segments SU06 / SU062 / SU07. Indique s'il faut afficher le P/S
     * Si non renseigné, il existe obligatoirement un objet Reprise
     * Classe correspondant au segment SU07. Indique si un P/S existant peut être repris.
     * Si non renseigné, il existe obligatoirement un objet Proposition
     */
    class PropositionReprise {
        private _numeroEntiteTitulaire;
        /**
         * Entité titulaire (NODIET). Renseigné si le P/S géré en mode entité titulaire
         */
        numeroEntiteTitulaire: number;
        private _numeroPersonne;
        /**
         * Personne (NODAPE). Renseigné si le P/S est géré en mode personne (NODAPE)
         */
        numeroPersonne: number;
        private _numeroEntiteTitulaireCopie;
        /**
         * Copie de sauvegarde de l'entité titulaire (NODIET). Renseigné si le P/S géré en mode entité titulaire
         * Utilisé afin de retrouver les références du produit repris qui a été supprimé puis ajouté à nouveau
         */
        numeroEntiteTitulaireCopie: number;
        private _numeroPersonneCopie;
        /**
         * Copie de sauvegarde du n° de personne (NODAPE). Renseigné si le P/S est géré en mode personne (NODAPE)
         * Utilisé afin de retrouver les références du produit repris qui a été supprimé puis ajouté à nouveau
         */
        numeroPersonneCopie: number;
        private _identifiantProduitServiceSupport;
        /**
         * Identifiant P/S support (NOEGPX). Renseigné si le P/S est rattaché à un autre P/S (par ex. en mode compte).
         * Dans ce cas, il contient l'IDEGPS dudit P/S
         */
        identifiantProduitServiceSupport: number;
        private _modeTraitementProduitService;
        /**
         * Mode de traitement du produit service. Indique la manière dont le P/S est traité
         * 0 : ne pas afficher (le P/S vient d'un SU062 "proposition P/S et client à ne pas afficher")
         * 1 : afficher (le P/S vient d'un SU06 "proposition P/S et client")
         * 2 : reprendre (le P/S vient d'un SU07)
         */
        modeTraitementProduitService: number;
        private _codeEtablissementContrat;
        /**
         * Référence du P/S à reprendre, code établissement COCXBQ
         */
        codeEtablissementContrat: string;
        private _codeGuichetContrat;
        /**
         * Référence du P/S à reprendre, code guichet COCXGU
         */
        codeGuichetContrat: string;
        private _codeTypeProduitServiceContrat;
        /**
         * Référence du P/S à reprendre, code type produit service CODIPR
         */
        codeTypeProduitServiceContrat: string;
        private _referenceProduitServiceContrat;
        /**
         * Référence du P/S à reprendre, référence produit sur 11 COBCRF
         */
        referenceProduitServiceContrat: string;
        private _dateIntroductionProduitServiceDansOffre;
        /**
         * Date d'introduction P/S dans Offre
         */
        dateIntroductionProduitServiceDansOffre: Date;
        private _dateDernierAvenantProduitServiceDansOffre;
        /**
         * Date dernier avenant P/S dans Offre
         */
        dateDernierAvenantProduitServiceDansOffre: Date;
        private _listeSousFamilleActesGestion;
        /**
         * Uniquement les deux premiers caractères de chacun des item de la zone listeActesGestion
         */
        listeSousFamilleActesGestion: string[];
        private _designationCourteParticulier;
        /**
         * Désignation courte de la personne physique détentrice du produit
         */
        designationCourteParticulier: string;
        constructor(pr: IPropositionReprise);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IProduitService {
        pouvoirDetenir: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, composition: Types.CompositionOffre, compteSupportAutorise?: boolean) => PropositionReprise;
    }
    /**
     *  Classe décrivant le P/S
     */
    class ProduitService implements IProduitService {
        private _produitCaracteristique;
        /**
         * Identification du produit service
         */
        produitCaracteristique: ProduitCaracteristique;
        private _produitCatalogue;
        /**
         * Description du produit service
         */
        produitCatalogue: ProduitCatalogue;
        private _propositionsReprises;
        /**
         * Proposition de produit service ici
         * Si il y a plusieurs entités/personnes qui peuvent détenir le produit, il y a plusieurs occurences
         */
        propositionsReprises: PropositionReprise[];
        private _donneesSpecifiques;
        /**
         * Données spécifiques GGO concernant le produit et ne provenant pas de la ressource souscription/avenant
         */
        donneesSpecifiques: DonneesSpecifiquesProduitGGO;
        /**
         * Permet de savoir si une personne ou une entité peut détenir ce produit.
         * Pour les produits avec compte support, on vérifie aussi que le produit support existe dans le panier pour ce détenteur
         * (cas des CEL/PEL qui contiennent des produits obsolètes)
         * @param {Types.InformationEntiteTitulaire | Types.Tiers.Personne} detenteur : Le détenteur du produit
         * @param {Types.CompositionOffre} composition Le panier
         * @param {boolean} compteSupportAutorise? Effectue un contrôle supplémentaire sur la présence d'un produit support
         * @returns la proposition si le produit peut être détenu, sinon undefined
         */
        pouvoirDetenir: (detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, composition: Types.CompositionOffre, compteSupportAutorise?: boolean) => PropositionReprise;
        constructor(produitCaracteristique: ProduitCaracteristique, produitCatalogue: ProduitCatalogue, propositionsReprises: PropositionReprise[], donneesSpecifiques: DonneesSpecifiquesProduitGGO);
    }
    interface IProduitCaracteristique {
        identifiantProduitService: number;
        libelleProduitService: string;
        codeTypeProduitService: string;
        libelleLongProduitService: string;
    }
    /**
     * Caractéristiques du produit / service
     */
    class ProduitCaracteristique {
        private _identifiantProduitService;
        /**
         * Code produit (IDEGPS) du produit/service souscrit.
         */
        identifiantProduitService: number;
        private _libelleProduitService;
        /**
         * Son libellé (LNEGCO)
         */
        libelleProduitService: string;
        private _codeTypeProduitService;
        /**
         * Son code type produit service (CODIPR)
         */
        codeTypeProduitService: string;
        private _libelleLongProduitService;
        /**
         * Son libellé long (concaténation des LIBCCO du segment SU05)
         */
        libelleLongProduitService: string;
        constructor(pc: IProduitCaracteristique);
    }
    interface IProduitCatalogue {
        codeProduitServiceExterne: string;
        nombreMiniExemplairesProduitService: number;
        nombreMaxiExemplairesProduitService: number;
        numeroSequenceOuverture: number;
        indicateurProduitServiceDefaut: string;
        codeModaliteDetentionProduitService: string;
        niveauParticipationProduitService: number;
        codeAffichageReferenceProduitService: string;
        codeDecompositionProduitService: string;
        codeAffichageProduitServiceFacultatifOffreClient: string;
        codeNatureProduitServiceAssocie: string;
        indicateurProduitServiceObligatoireOffre: string;
        indicateurProduitServiceInclusForfait: string;
        typeProduitServiceFamille: string;
        typeProduitServiceAssurance: string;
        typeProduitServiceSocle: string;
        codeEtatProduitService: string;
        indicateurPresenceOptionMultiBLFamille: string;
        indicateurEligibiliteClient: string;
        identifiantOffreOVAD: number;
        codeFamilleGestionLocaleContrat: string;
        codeDeviseMontantOperation: string;
        codeModeGestionDansClient: string;
        sousCodeProduitServiceExterneInutile: string;
        indicateurClotureProduitService: string;
        codeFamilleGestionProduitService: string;
        niveauPriorite: number;
    }
    /**
     * Classe définissant un  produit / service du catalogue des offres.
     * Correspond au segment SU04 "contenu d’une offre". Décrit le P/S.
     */
    class ProduitCatalogue {
        private _codeProduitServiceExterne;
        /**
         * Le code produit service externe (COEGEX)
         */
        codeProduitServiceExterne: string;
        private _nombreMiniExemplairesProduitService;
        /**
         * Nombre mini de P/S qui doivent être détenus (QPEGEX). Non utilisé, on utilise plutôt
         * _indicateurProduitServiceObligatoireOffre
         */
        nombreMiniExemplairesProduitService: number;
        private _nombreMaxiExemplairesProduitService;
        /**
         * Nombre maxi de P/S qui doivent être détenus (QSEGEX).
         * Non géré au niveau PACBASE pour l'instant (en 2015)
         * mais c'est ce que l'IHM va utiliser pour savoir si un produit peut être associé plusieurs fois
         * sur une même offre. Valeurs : 1 : ne peut être présent qu'une fois. 2 : peut être présent plusieurs fois
         * Le nombre de produits détenus se mesure par rapport à la modalité de détention
         * Par exemple NombreMaxiExemplairesProduitService = 2 et CodeModaliteDetention = P =>
         * le P/S peut être détenu plusieurs fois pour la même personne, etc.
         */
        nombreMaxiExemplairesProduitService: number;
        private _numeroSequenceOuverture;
        /**
         * Num séquence ouverture (NOEGOU)
         * Définition
         * ----------
         *    Numéro d'ordre dans lequel les ouvertures des
         *    P / S fils doivent être executées dans le cadre
         *    d'un association ou d'une composition.
         *    Utilisation par Contrat :
         *    -------------------------
         * /!\ La logique d'ouverture des produits dans GGO n'est pas basée sur cette valeur
         */
        numeroSequenceOuverture: number;
        private _indicateurProduitServiceDefaut;
        /**
         * Indicateur P/S défaut (CIBCDE)
         * Indique si un P/S donné est le P/S restituable par défaut pour sa famille d'appartenance
         * PS restitué si aucun PS fourni en critère de  sélection
         * Compris comme étant le P/S proposé par défaut pour un assemblage interchangeable
         * Valeurs :  '0'        P/S non défaut  '1'        P/S défaut
         */
        indicateurProduitServiceDefaut: string;
        private _codeModaliteDetentionProduitService;
        /**
         * La modalité de détention (CGEGMD) : Détermine le mode de détention d'un produit ou service
         * dans le cadre de sa souscription : C : via un compte, E : via une entité titulaire, P : via une personne
         */
        codeModaliteDetentionProduitService: string;
        private _niveauParticipationProduitService;
        /**
         * Niveau de participation (NOEGWN) :
         * Indique le niveau de participation lors des décompositions des P/S associés ou composés.
         * 0 P/ S père,  1 fils, 2 petit fils   ainsi de suite.
         * Il s'agit du niveau dans l'arbre des P/S de l'offre. L'offre est toujours de niveau 000.
         * Les P/ S simples ou assemblage situés sous l'offre sont 001
         * Si c'est un assemblage de niveau 001 , les P/S qui le constituent sont de niveau 002 etc.
         * On sait qu'on a terminé de parcourir un assemblage lorsque le niveau remonte :
         * 000 OFFRE
         *  001  ASSEMBLAGE A
         *   002 P/S 1 de A
         *   002 P/S 2 de A
         *   ...
         *   002 P/S n de A
         *  001  P/S B
         *  001  ASSEMBLAGE C
         *   002 P/S 1 de C
         *   ...
         * Il peut y a voir des ruptures de niveau dans l'arbre car les assemblages d'affichage ne sont pas restitués par la QR :
         * On peut passer de 000 à 002 directement par ex.
         */
        niveauParticipationProduitService: number;
        private _codeDecompositionProduitService;
        /**
         *                Définition :
         *             Indique si le produit ou service est élémentaire
         *             ou composite : simple, associé ou composé
         *
         *             Une offre est toujours un P/S associé
         *
         *             Valeurs :
         *  'SIM'      P/S simple
         *  'ASS'      P/S associé
         *  'COM'      P/S composé
         */
        codeDecompositionProduitService: string;
        private _codeAffichageReferenceProduitService;
        /**
         * Code affichage référence P/S (CIEGEX)
         * Indique le mode d'affichage à employer pour la référence d'identification du produit/service souscrit.
         * '0'        affichage du code banque, code guichet et référence à l'écran et à l'impression.
         *   -> P/S qui ont un RICE
         * '1'        affichage de la référence
         *   -> P/S en mode personne ou P/S externes qui doivent avoir une référence saisie
         * '2'        affichage du libellé 'souscrit'
         *   -> P/S externes sans reférences, P/S non standards
         * '3' -> P / S en mode compte avec affichage du code banque code guichet et référence à l'écran uniquement.
         * '4' -> P / S en mode compte avec affichage du code banque,code guichet et référence à l'impression uniquement.
         * '5' -> P / S sans affichage ni à l'écran, ni à l'impression.
         */
        codeAffichageReferenceProduitService: string;
        private _codeAffichageProduitServiceFacultatifOffreClient;
        /**
         * Indicateur produit poussé (CIEGAF). 0 si il ne doit pas être proposé, 1 s'il doit l'être, " " pour les assemblages.
         */
        codeAffichageProduitServiceFacultatifOffreClient: string;
        private _codeNatureProduitServiceAssocie;
        /**
         * Code nature P/S Associé (CIEGOF).
         * Indique la nature du P/S Associé
         * Non significatif pour les P/S simples   (espace ?)
         * Valeurs:
         * 'O'        Offre : l'offre principale
         * 'L'        Liste des Offres. Elle permet de définir un assemblage contenant toutes les offres afin de définir un
         *            ordre d'affichage. Valeur non visible de la GGO
         * 'C'        Associé dont les Fils sont Cumulables. ex: assemblage de cartes Visa immédiat et Différée, possibilité de
         *            souscrire une ou deux cartes
         * 'I'        Interchangeable. Une seule souscription du PS par "souscripteur" parmi les N de l'assemblage.
         *            1 pour 1 ET si PS en mode ET.
         *            1 par personne si PS en mode Personne.
         *            ex: assemblage Eparfix/ Eparplus
         *            choix exclusif d'un des deux Fils
         * 'T'        Technique : NON GERE ACTUELLEMENT
         * 'A'        Affichage : Permet une présentation du libellé de l'assemblage sans autre fonctionnalité. Filtré
         *            par GGO dès récupération du catalogue, non utilisé dans GGO
         */
        codeNatureProduitServiceAssocie: string;
        private _indicateurProduitServiceObligatoireOffre;
        /**
         * Indicateur P/S obligatoire Offre (CIEGOB). Indique si la souscription d'un P/S est obligatoire
         * dans une Offre.
         * O: P/S obligatoire dans l'offre. F : facultatif
         */
        indicateurProduitServiceObligatoireOffre: string;
        private _indicateurProduitServiceInclusForfait;
        /**
         * Indicateur P/S inclus Forfait (CIEGIF). indique pour un P/S inclus dans un Forfait la tarification appliquée au P/S
         * " " : inclus intégralement, pas de tarif unitaire, "H" : Fait l'objet d'un surcoût
         */
        indicateurProduitServiceInclusForfait: string;
        private _typeProduitServiceFamille;
        /**
         * Type P/S famille (CTEGPF). Détermine si un Produit / service est concerné par l'avantage famille :
         *       - tarification préférentielle spécifique sur les comptes des membres de la famille du souscripteur
         *       - extension de services aux membres de la famille
         *          'F'        P/S famille
         *          ' '        autres cas
         */
        typeProduitServiceFamille: string;
        private _typeProduitServiceAssurance;
        /**
         * Type P/S assurance (CTEGPA). Détermine si le P/S est assimilé à un produit d'assurance dans le cadre de
         * l'offre Bouquet Liberté
         * 'A'        P/ S d'assurance
         * ' '        autres cas
         */
        typeProduitServiceAssurance: string;
        private _typeProduitServiceSocle;
        /**
         * Type P/S socle / complémentaire (CTEGSC). Valorisé uniquement pour le BL. Détermine si le P/S contenu
         * dans l'offre fait partie du socle ou correspond à un P/S complémentaire
         *  'S'        P/S du socle
         *  'C'        P/ S complementaire
         *  ' '        autres cas
         *  'F'        P/ S famille
         */
        typeProduitServiceSocle: string;
        private _codeEtatProduitService;
        /**
         * Code état produit service (CEEJPP). Valorisé uniquement pour le BL. Ce code indique si le P/S est préselectionné
         * lors de l'affichage de l'offre (cette notion de présélection avait un sens pour le PTU. Dans la GGO, elle correspond
         * a priori au fait que le P/S sera directement mis dans le panier au chargement de l'offre mais qu'il pourra
         * en être retiré si l'utilisateur le veut)
         * 'S'        présélectionné
         */
        codeEtatProduitService: string;
        private _indicateurPresenceOptionMultiBLFamille;
        /**
         * Indic pres option Multi BL Fam (CIBCMF). Valorisé uniquement pour le BL.
         * Détermine si une option multi BL Famille est présente dans le périmètre famille établie en BU1C
         * Une seule option peut être présente dans le périmètre famille. Cette option donne le droit à remise
         * tarifaire pour les membres du périmètre famille ayant un forfait éligible sauf pour l'offre porteuse de
         * l'option. Si 2 options sont présentes dans le périmètre famille, les forfaits porteurs ne pourront
         * bénéficier ni l'un ni l'autre de la remise famille forfait malgré qu'ils soient dans le même périmètre
         * famille.
         * 'N'        Option non présente
         * 'O'        Option présente
         */
        indicateurPresenceOptionMultiBLFamille: string;
        private _indicateurEligibiliteClient;
        /**
         * Indicateur éligibilité client (CIBCEL). Valorisé uniquement pour le BL (quoique ?).
         * Indicateur permettant de savoir si le client est éligible au Produit/Service de l'offre lors d'une
         * souscription(ou avenant) à un Bouquet Liberté.
         * valeurs :
         * 'O'        Produit éligible (client ayant accès au produit)
         * 'N'        Produit non éligible (pas d'accès au produit )
         * ' '        Eligibilité par défaut
         */
        indicateurEligibiliteClient: string;
        private _identifiantOffreOVAD;
        /**
         * Identifiant de l'offre ovad-vmc. Permet de renseigner le n° d'offre VMC dans le dossier de vente
         */
        identifiantOffreOVAD: number;
        private _codeFamilleGestionLocaleContrat;
        /**
         * Code famille gestion locale contrat. Ex : BOUCLI pour Bouquet Liberté
         */
        codeFamilleGestionLocaleContrat: string;
        private _codeDeviseMontantOperation;
        /**
         * Code monnaie tenue compte
         */
        codeDeviseMontantOperation: string;
        /**
         * Code mode gestion dans Client
         */
        private _codeModeGestionDansClient;
        codeModeGestionDansClient: string;
        private _sousCodeProduitServiceExterneInutile;
        /**
         * Sous Code P/S externe-INUTILE
         */
        sousCodeProduitServiceExterneInutile: string;
        private _indicateurClotureProduitService;
        /**
         * Indique le mode de clôture du produit en cas de changement d'Offre,
         * les P/S simples de l'offre source n'étant pas nécessairement repris dans l'offre cible.
         */
        indicateurClotureProduitService: string;
        private _codeFamilleGestionProduitService;
        /**
         * Typologie de famille de produits service. Correspond à la rubrique PACBASE COEIMF
         */
        codeFamilleGestionProduitService: string;
        private _niveauPriorite;
        /**
         * Niveau de priorité de mise en gestion associé au produit. 100 = maxi, 0 = mini
         */
        niveauPriorite: number;
        constructor(pc: IProduitCatalogue);
    }
    interface IPropositionReprise {
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        identifiantProduitServiceSupport: number;
        modeTraitementProduitService: number;
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
        indicateurAutreProduitServiceTransfert: boolean;
        numeroOffreSouscriteOrigine: number;
        codeRepriseEnForcage: string;
        dateIntroductionProduitServiceDansOffre: Date;
        dateDernierAvenantProduitServiceDansOffre: Date;
        codeEtatOffre: string;
        listeActesGestion: string[];
        listeSousFamilleActesGestion: string[];
    }
    /**
     * Classe correspondant à la fusion des segments SU06 / SU062 / SU07. Indique s'il faut afficher le P/S
     * Si non renseigné, il existe obligatoirement un objet Reprise
     * Classe correspondant au segment SU07. Indique si un P/S existant peut être repris.
     * Si non renseigné, il existe obligatoirement un objet Proposition
     */
    class PropositionReprise {
        private _numeroEntiteTitulaire;
        /**
         * Entité titulaire (NODIET). Renseigné si le P/S géré en mode entité titulaire
         */
        numeroEntiteTitulaire: number;
        private _numeroPersonne;
        /**
         * Personne (NODAPE). Renseigné si le P/S est géré en mode personne (NODAPE)
         */
        numeroPersonne: number;
        private _numeroEntiteTitulaireCopie;
        /**
         * Copie de sauvegarde de l'entité titulaire (NODIET). Renseigné si le P/S géré en mode entité titulaire
         * Utilisé afin de retrouver les références du produit repris qui a été supprimé puis ajouté à nouveau
         */
        numeroEntiteTitulaireCopie: number;
        private _numeroPersonneCopie;
        /**
         * Copie de sauvegarde du n° de personne (NODAPE). Renseigné si le P/S est géré en mode personne (NODAPE)
         * Utilisé afin de retrouver les références du produit repris qui a été supprimé puis ajouté à nouveau
         */
        numeroPersonneCopie: number;
        private _identifiantProduitServiceSupport;
        /**
         * Identifiant P/S support (NOEGPX). Renseigné si le P/S est rattaché à un autre P/S (par ex. en mode compte).
         * Dans ce cas, il contient l'IDEGPS dudit P/S
         */
        identifiantProduitServiceSupport: number;
        private _modeTraitementProduitService;
        /**
         * Mode de traitement du produit service. Indique la manière dont le P/S est traité
         * 0 : ne pas afficher (le P/S vient d'un SU062 "proposition P/S et client à ne pas afficher")
         * 1 : afficher (le P/S vient d'un SU06 "proposition P/S et client")
         * 2 : reprendre (le P/S vient d'un SU07)
         */
        modeTraitementProduitService: number;
        private _codeEtablissementContrat;
        /**
         * Référence du P/S à reprendre, code établissement COCXBQ
         */
        codeEtablissementContrat: string;
        private _codeGuichetContrat;
        /**
         * Référence du P/S à reprendre, code guichet COCXGU
         */
        codeGuichetContrat: string;
        private _codeTypeProduitServiceContrat;
        /**
         * Référence du P/S à reprendre, code type produit service CODIPR
         */
        codeTypeProduitServiceContrat: string;
        private _referenceProduitServiceContrat;
        /**
         * Référence du P/S à reprendre, référence produit sur 11 COBCRF
         */
        referenceProduitServiceContrat: string;
        private _indicateurAutreProduitServiceTransfert;
        /**
         * Indicateur autres P/S de transfert (CIBCAR)
         * Lors de la préproposition d'ouverture, indique l'existence d'au moins une autre référence de Produit Service en reprise
         * unitaire pour un type de Produit Service donné.
         * Usage non identifié.
         */
        indicateurAutreProduitServiceTransfert: boolean;
        private _numeroOffreSouscriteOrigine;
        /**
         * Numéro offre souscrite  (NOBCOF) Numéro de l'offre d'origine
         */
        numeroOffreSouscriteOrigine: number;
        private _codeRepriseEnForcage;
        /**
         * Code reprise en forçage (CIBCRF)
         * Indique si la reprise unitaire en forcage est possible dans l'Offre detenteur.
         * 'O'        Reprise possible : le P/ S est facultatif dans l'Offre source, il peut être détaché de son Offre source
         * 'N'        Reprise impossible : le P/ S est obligatoire dans l'Offre source, il ne peut être détaché
         * 'I'        Indifférent : la référence de P/ S est Hors- Offre
         */
        codeRepriseEnForcage: string;
        private _dateIntroductionProduitServiceDansOffre;
        /**
         * Date d'introduction P/S dans Offre
         */
        dateIntroductionProduitServiceDansOffre: Date;
        private _dateDernierAvenantProduitServiceDansOffre;
        /**
         * Date dernier avenant P/S dans Offre
         */
        dateDernierAvenantProduitServiceDansOffre: Date;
        private _codeEtatOffre;
        /**
         * Indique l'état de gestion de l'offre.
         *
         *             Val:
         *             ----
         *  '0'        Active
         *  '1'        Cloturée
         *  '2'        En instance d'ouverture                                 *
         */
        codeEtatOffre: string;
        private _listeActesGestion;
        /**
         * Liste des actes de gestion autorisés (segment d'origine TE1P, rubrique COELAG)
         *    Détermine un acte de gestion dans le catalogue des
         *    processus/opérations de la gestion bancaire
         *    Un acte de gestion est une opération sur un produit /
         *    service ou une prestation à la clientèle
         *    ex: souscription, avenant, cloture, versement ...
         *    Format:
         *    concaténation de :
         *    - code objet acte de gestion : table E51C
         *    - code sous famille acte de gestion : table E51B
         *  Typologie MYSYS gérée par la table E51D
         *  dans appli REFACTE
         *  Exemples:
         *  AB00000654 Abonnement LIVRET A
         *  AV00000438 Modification DECOUVERT AUTORISE PERMANENT
         *  nb : seuls les préfixes OU (ouverture), AV (avenant) et CL (clôture) sont reconnus par GGO
         *  les P/S portant une autre valeur seront filtrés au chargement du catalogue.
         */
        listeActesGestion: string[];
        private _listeSousFamilleActesGestion;
        /**
         * Uniquement les deux premiers caractères de chacun des item de la zone listeActesGestion
         */
        listeSousFamilleActesGestion: string[];
        constructor(pr: IPropositionReprise);
    }
    /**
     * Associe à un code sous famille acte de gestion une directive métier
     * OU => CompteDepotOuverture
     * AV => CompteDepotAvenant
     * CL => CompteDepotCloture
     * etc.
     */
    class DirectiveParSousFamilleActeGestion {
        private _codeSousFamilleActeGestion;
        /**
         * Code sous famille acte de gestion : OU (ouverture), AV (avenant), CL (clôture). Les autres valeurs ne sont pas gérées,
         * du moins en principe
         */
        codeSousFamilleActeGestion: string;
        private _idDirective;
        /**
         * Directive métier associée à ce code sous famille
         */
        idDirective: string;
        constructor(codeSousFamilleActeGestion: string, idDirective: string);
    }
    /**
     * Id des directives métier (directives des P/S) par sous famille acte de gestion
     * Permet d'associer une directive spécifique à un code sous famille acte de gestion pour traiter l'ouverture,
     * l'avenant, la clôture ...
     */
    class DirectivesMetier {
        private _directives;
        /**
         * Récupère un id de directive en fonction du code sous famille passé en paramètre
         * L'id de la directive doit être exprimé en hyphen case (directive-test et pas directiveTest)
         */
        getDirective(codeSousFamilleActeGestion: string): string;
        getToutesDirectives(): string[];
        constructor(directives: DirectiveParSousFamilleActeGestion[]);
    }
    /**
     * Données spécifiques internes à GGO niveau produit : association directives métier / sous familles actes de gestion
     */
    class DonneesSpecifiquesProduitGGO {
        private _directivesMetier;
        /**
         * Association directives métier / sous familles actes de gestion
         */
        directivesMetier: DirectivesMetier;
        constructor(directivesMetier: DirectivesMetier);
    }
}

declare module GestionGeneriqueOffres.Types.TiersV3 {
    interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    class CodeMarche {
        private _codeMarche;
        codeMarche: string;
        private _libelleLongCodeMarche;
        libelleLongCodeMarche: string;
        private _libelleCourtCodeMarche;
        libelleCourtCodeMarche: string;
        private _libelleFamilleCodeMarche;
        libelleFamilleCodeMarche: string;
        constructor(cm: ICodeMarche);
    }
    interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
        identifiantClientBad: string;
    }
    class DonneeIdentification {
        private _codeEtablissement;
        /**
         *  Identifiant d'un Etablissement du RCE.
         *  Correspond au code Banque sous lequel une Caisse ou
         *  un Etablissement du réseau CE est répertoriée par la
         *  Banque de France
         */
        codeEtablissement: string;
        private _identifiantPersonne;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        private _codePersonnaliteJuridique;
        /**
         * Libelle du code qui indique le type de personnalité juridique de la personne.
         */
        codePersonnaliteJuridique: string;
        private _libellePersonnaliteJuridique;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *      Valeurs :
         *   '0'        Actif
         *   '1'        Cloturé
         */
        libellePersonnaliteJuridique: string;
        private _codeEtatPersonne;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *      Valeurs :
         *   '0'        Actif
         *   '1'        Cloturé
         */
        codeEtatPersonne: string;
        private _codeTypeRelation;
        codeTypeRelation: string;
        private _libelleTypeRelation;
        libelleTypeRelation: string;
        private _dateEntreeRelation;
        dateEntreeRelation: Date;
        private _identifiantClientBad;
        identifiantClientBad: string;
        constructor(di: IDonneeIdentification);
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
        informationsEAI: IInformationsEAI;
    }
    class Identification {
        private _donneeIdentification;
        donneeIdentification: DonneeIdentification;
        private _lutteAntiBlanchiment;
        lutteAntiBlanchiment: LutteAntiBlanchiment;
        private _listMarche;
        listMarche: Array<CodeMarche>;
        private _suiviComercial;
        suiviComercial: SuiviCommercial;
        private _informationsEAI;
        informationsEAI: InformationsEAI;
        constructor(id: IIdentification);
    }
    interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    class LutteAntiBlanchiment {
        private _codeAlerteVAO;
        codeAlerteVAO: boolean;
        private _messageAlerteVAO;
        messageAlerteVAO: string;
        constructor(lab: ILutteAntiBlanchiment);
    }
    interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    class SuiviCommercial {
        private _identifiantEDSSuiviCommercial;
        identifiantEDSSuiviCommercial: number;
        private _typeEDSSuiviCommercial;
        typeEDSSuiviCommercial: string;
        private _referenceExterneEDSSuiviCommercial;
        referenceExterneEDSSuiviCommercial: number;
        private _identifiantAgent;
        identifiantAgent: number;
        private _designationCourteEDS;
        designationCourteEDS: string;
        private _designationLongueEDS;
        designationLongueEDS: string;
        constructor(sc: ISuiviCommercial);
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
    }
    class InformationsEAI {
        private _codeModeSignatureEAI;
        codeModeSignatureEAI: string;
        private _indicateurOuvertureCompte;
        indicateurOuvertureCompte: string;
        private _codeStatutEAI;
        codeStatutEAI: string;
        constructor(ie: IInformationsEAI);
    }
}

declare module GestionGeneriqueOffres.Types.Tiers {
    interface ICodeMarche {
        codeTypeSegmentation: string;
        codeSegmenation2DernCar: string;
        libelleLongSegmentation: string;
        libelleCourtSegmentation: string;
        codeSegmentationCalculee: string;
        libelleFamilleMarche: string;
        codeSegmentationConfirmee: string;
        recalculSegmentation: string;
        indicateurForcage: string;
        codeSegmentationForcage: any;
        codeTypeSegmentationForcage: any;
    }
    class CodeMarche {
        private _codeTypeSegmentation;
        codeTypeSegmentation: string;
        private _codeSegmenation2DernCar;
        codeSegmenation2DernCar: string;
        private _libelleLongSegmentation;
        libelleLongSegmentation: string;
        private _libelleCourtSegmentation;
        libelleCourtSegmentation: string;
        private _codeSegmentationCalculee;
        codeSegmentationCalculee: string;
        private _libelleFamilleMarche;
        libelleFamilleMarche: string;
        private _codeSegmentationConfirmee;
        codeSegmentationConfirmee: string;
        private _recalculSegmentation;
        recalculSegmentation: string;
        private _indicateurForcage;
        indicateurForcage: string;
        private _codeSegmentationForcage;
        codeSegmentationForcage: any;
        private _codeTypeSegmentationForcage;
        codeTypeSegmentationForcage: any;
        constructor(cm: ICodeMarche);
    }
    interface IIdentification {
        /**
         *  Identifiant d'un Etablissement du RCE.
         *  Correspond au code Banque sous lequel une Caisse ou
         *  un Etablissement du réseau CE est répertoriée par la
         *  Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        /**
         * Détermine le type de personnalité juridique de la personne.
         *   Valeurs :
         *   1=personne physique
         *   2=personne morale / assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Libelle du code qui indique le type de personnalité juridique de la personne.
         */
        libellePersonnaliteJuridique: string;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *      Valeurs :
         *   '0'        Actif
         *   '1'        Cloturé
         */
        codeStatut: string;
        /**
         * Libellé du statut
         */
        libelleStatut: string;
        /**
         *  Détermine la relation de la personne connue avec
         *     l'Etablissement :
         *     - client : personne détentrice de contrat(s) de produit / service
         *     - tiers : personne non 'client' en lien avec une personne 'client' - lien particulier ou professionnel
         *         (ex : participant à un contrat, représentant légal)
         *     - prospect : personne n'étant ni client ni tiers
         *
         *   Valeurs possibles :
         *        '0'        Personne connue comme client
         *        '1'        Personne connue comme tiers
         *        '2'        Personne connue comme prospect
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
        /**
         * Code guichet risque
         */
        codeGuichetRisque: string;
        /**
         * Code marché
         */
        codeMarche: CodeMarche;
    }
    class Identification {
        private _codeEtablissement;
        /**
         *  Identifiant d'un Etablissement du RCE.
         *  Correspond au code Banque sous lequel une Caisse ou
         *  un Etablissement du réseau CE est répertoriée par la
         *  Banque de France
         */
        codeEtablissement: string;
        private _identifiantPersonne;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        private _codePersonnaliteJuridique;
        /**
         * Libelle du code qui indique le type de personnalité juridique de la personne.
         */
        codePersonnaliteJuridique: string;
        private _libellePersonnaliteJuridique;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *      Valeurs :
         *   '0'        Actif
         *   '1'        Cloturé
         */
        libellePersonnaliteJuridique: string;
        private _codeStatut;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *      Valeurs :
         *   '0'        Actif
         *   '1'        Cloturé
         */
        codeStatut: string;
        private _libelleStatut;
        /**
         *   Libellé du code statut
         */
        libelleStatut: string;
        private _codeTypeRelation;
        codeTypeRelation: string;
        private _libelleTypeRelation;
        libelleTypeRelation: string;
        private _dateEntreeRelation;
        dateEntreeRelation: string;
        private _codeGuichetRisque;
        /**
         * Code guichet risque
         */
        codeGuichetRisque: string;
        /**
         * Code marché
         */
        private _codeMarche;
        codeMarche: CodeMarche;
        constructor(di: IIdentification);
    }
}

declare module GestionGeneriqueOffres.Types.TiersV3 {
    interface IIdentificationTiers {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    class IdentificationTiers implements IIdentificationTiers {
        private _numeroChrono;
        numeroChrono: number;
        private _numeroLieuActivite;
        numeroLieuActivite: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _identifiantPersonne;
        identifiantPersonne: number;
        constructor(iit: IIdentificationTiers);
    }
    interface ICaracteristiqueTiers {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: string;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        identifiantEDSDomiciliation: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
    }
    class CaracteristiqueTiers implements ICaracteristiqueTiers {
        private _libellePersonnaliteJuridique;
        libellePersonnaliteJuridique: string;
        private _codeEtatPersonne;
        codeEtatPersonne: string;
        private _codeTypePersonne;
        codeTypePersonne: string;
        private _dateEntreeRelation;
        dateEntreeRelation: string;
        private _codeGuichetRisque;
        codeGuichetRisque: string;
        private _eligibiliteTiers;
        eligibiliteTiers: string;
        private _identifiantEDSDomiciliation;
        identifiantEDSDomiciliation: string;
        private _indicateurDroitCompte;
        indicateurDroitCompte: string;
        private _identifiantClientBad;
        identifiantClientBad: string;
        constructor(ict: ICaracteristiqueTiers);
    }
    interface IInformationParticulier {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        id: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: string;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: string;
        codeAppartenanceReseau: string;
        libelleAppartenanceReseau: string;
        indicSocietaire: string;
        codeCapaciteJuridique: string;
        libelleCapaciteJuridique: string;
        codePaysNaissance: string;
        libellePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleDoubleNationalitePays: string;
        situationFamille: string;
        libelleCodeSituationFamiliale: string;
        dateEffetSituationFamille: string;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: string;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: string;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeResident: string;
        identiteRelationEcoMenage: number;
        referenceExterneEds: number;
        typeClauseMatrimoniale: string;
        codeDonationEntreEpoux: string;
        indicateurAutoEntrepreneur: string;
        autresPrenomsEtatCivil: string;
        indicDomiciliationRevenus: string;
        indicEnregHorsPresenceClient: string;
        libelleProfessionParticulier: string;
        codeTypeSecteurEmploi: string;
        indicateurEnvoiCourrier: string;
        codePieceJustificative: string;
        dateObtentionPieceJustificative: string;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: string;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: string;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
    }
    /** Information sur une personne de type "particulier" */
    class InformationParticulier implements IInformationParticulier {
        private _codeRetour;
        codeRetour: number;
        private _codeEtab;
        codeEtab: string;
        private _numeroPersonne;
        numeroPersonne: number;
        private _codeCivilite;
        codeCivilite: string;
        private _libelleCivilite;
        libelleCivilite: string;
        private _sexe;
        sexe: string;
        private _libelleSexe;
        libelleSexe: string;
        private _id;
        id: string;
        private _nomMarital;
        nomMarital: string;
        private _designationCourte;
        designationCourte: string;
        private _prenom;
        prenom: string;
        private _dateNaissance;
        dateNaissance: string;
        private _codeCommuneNaissance;
        codeCommuneNaissance: string;
        private _libelleCommuneNaissance;
        libelleCommuneNaissance: string;
        private _codeDepartementNaissance;
        codeDepartementNaissance: string;
        private _libelleDepartementNaissance;
        libelleDepartementNaissance: string;
        private _codeInseePaysNationalite;
        codeInseePaysNationalite: string;
        private _libelleNationalite;
        libelleNationalite: string;
        private _dateDeces;
        dateDeces: string;
        private _codeAppartenanceReseau;
        codeAppartenanceReseau: string;
        private _libelleAppartenanceReseau;
        libelleAppartenanceReseau: string;
        private _indicSocietaire;
        indicSocietaire: string;
        private _codeCapaciteJuridique;
        codeCapaciteJuridique: string;
        private _libelleCapaciteJuridique;
        libelleCapaciteJuridique: string;
        private _codePaysNaissance;
        codePaysNaissance: string;
        private _libellePaysNaissance;
        libellePaysNaissance: string;
        private _codeInseePaysDoubleNationalite;
        codeInseePaysDoubleNationalite: string;
        private _libelleDoubleNationalitePays;
        libelleDoubleNationalitePays: string;
        private _situationFamille;
        situationFamille: string;
        private _libelleCodeSituationFamiliale;
        libelleCodeSituationFamiliale: string;
        private _dateEffetSituationFamille;
        dateEffetSituationFamille: string;
        private _codeRegimeMatrimonial;
        codeRegimeMatrimonial: string;
        private _libelleRegimeMatrimonial;
        libelleRegimeMatrimonial: string;
        private _nombreEnfantACharge;
        nombreEnfantACharge: number;
        private _codeCategorieSocioProf;
        codeCategorieSocioProf: string;
        private _libelleCsp;
        libelleCsp: string;
        private _dateEffetCsp;
        dateEffetCsp: string;
        private _nomEmployeur;
        nomEmployeur: string;
        private _numeroSirenEmployeurPrincipal;
        numeroSirenEmployeurPrincipal: string;
        private _dateEmbaucheParEmployeurActuel;
        dateEmbaucheParEmployeurActuel: string;
        private _codeTypeContratTravail;
        codeTypeContratTravail: string;
        private _libelleCodeTypeContratTravail;
        libelleCodeTypeContratTravail: string;
        private _dateFinContrat;
        dateFinContrat: string;
        private _codeFamilleNAFINSEE;
        codeFamilleNAFINSEE: string;
        private _troisDerniersCaracteresNAF;
        troisDerniersCaracteresNAF: string;
        private _libelleEtablissement;
        libelleEtablissement: string;
        private _codeResident;
        codeResident: string;
        private _identiteRelationEcoMenage;
        identiteRelationEcoMenage: number;
        private _referenceExterneEds;
        referenceExterneEds: number;
        private _typeClauseMatrimoniale;
        typeClauseMatrimoniale: string;
        private _codeDonationEntreEpoux;
        codeDonationEntreEpoux: string;
        private _indicateurAutoEntrepreneur;
        indicateurAutoEntrepreneur: string;
        private _autresPrenomsEtatCivil;
        autresPrenomsEtatCivil: string;
        private _indicDomiciliationRevenus;
        indicDomiciliationRevenus: string;
        private _indicEnregHorsPresenceClient;
        indicEnregHorsPresenceClient: string;
        private _libelleProfessionParticulier;
        libelleProfessionParticulier: string;
        private _codeTypeSecteurEmploi;
        codeTypeSecteurEmploi: string;
        private _indicateurActiviteProfessionnel;
        indicateurActiviteProfessionnel: string;
        private _indicateurEnvoiCourrier;
        indicateurEnvoiCourrier: string;
        private _codePieceJustificative;
        codePieceJustificative: string;
        private _dateObtentionPieceJustificative;
        dateObtentionPieceJustificative: string;
        private _referencePieceJustificative;
        referencePieceJustificative: string;
        private _noIdentificationFiscaleNifNni;
        noIdentificationFiscaleNifNni: string;
        private _codeTypeNifNni;
        codeTypeNifNni: string;
        private _dateNaturalisation;
        dateNaturalisation: string;
        private _dateNaissanceConjoint;
        dateNaissanceConjoint: string;
        private _indicDecesPresume;
        indicDecesPresume: string;
        private _dateDecesPresume;
        dateDecesPresume: string;
        private _identifiantEDSDomiciliation;
        identifiantEDSDomiciliation: number;
        private _eligibiliteTiers;
        eligibiliteTiers: string;
        private _indicDroitCompte;
        indicDroitCompte: string;
        private _numeroSirenAutoEntrepreneur;
        numeroSirenAutoEntrepreneur: string;
        private _dateEffetOptionResidence;
        dateEffetOptionResidence: string;
        private _codeCategorieJuridique;
        codeCategorieJuridique: string;
        private _codeCategoJuridi2DerCaracteres;
        codeCategoJuridi2DerCaracteres: string;
        private _libelleStatutFatca;
        libelleStatutFatca: string;
        private _dateAttributionStatutFatca;
        dateAttributionStatutFatca: string;
        private _identifiantBad;
        identifiantBad: string;
        identifiantPersonne: number;
        codeEtablissement: string;
        nomFamillePersonnePhysique: string;
        edsDomiciliation: number;
        autresPrenom: string;
        categorieSocioprofessionnelle: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDem: string;
        codeInseePaysNationnalite: string;
        codePieceJustif: string;
        codeSecteurEmploi: string;
        codeSexe: string;
        codeSituationFamiliale: string;
        codeTypeNIF: string;
        dateAttributionFATCA: string;
        dateEffetCSP: string;
        dateEffetSituationFamiliale: string;
        dateEmbaucheEmployeurActuel: string;
        dateFinContratTravail: string;
        domiciliationRevenu: string;
        droitAuCompte: string;
        edsInterneDomiciliation: number;
        horsPresenceClient: string;
        identifiantRelationtEconomique: number;
        indicateurSocietaire: string;
        indicDonationEntreEpoux: string;
        libelleInseePaysDoubleNationalite: string;
        libellePaysNationnalite: string;
        libelleProfession: string;
        libelleRegimeMatirimonial: string;
        libelleStatutFATCA: string;
        libelleTypeContratTravail: string;
        refPieceJustificative: string;
        sirenAutoEntrepreneur: string;
        sirenEmployeur: string;
        codeBlocageVAO: string;
        codeRetourDistribution: string;
        eligibiliteFGDR: string;
        indicateurPPE: string;
        indiceAmericaniteFATCA: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleNAFInsee: string;
        libelleSituationFamiliale: string;
        libelleSocietaire: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        codeAccesMinitel: string;
        codeExistenceListeRouge: string;
        codeInseeLocalite: string;
        codeInseePays: string;
        codeISOPays: string;
        codePostalFranceEtranger: string;
        codePostalPTT: string;
        codeQuartier: string;
        codeTypeAdresse: string;
        commentaireTelephone: string;
        identifiantAdresse: string;
        indicateurDetentionTelephone: string;
        libelleInseeLocalite: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        numeroFax: string;
        numeroTelephoneAdresse: string;
        numeroTourneeFacteur: string;
        numeroVoieHexavia: string;
        numeroVoiePTT: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeGuichetRisque: string;
        constructor(ipi: IInformationParticulier);
    }
    interface IInformationProfessionnel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroSiren: string;
        codeTypeNifNni: string;
        libelleCodeTypeNifNni: string;
        noIdentificationFiscaleNifNni: string;
        nomCommercial: string;
        raisonSocial: string;
        codeSituationJuridique: string;
        libelleSituationJuridiqueProf: string;
        codeINSEE: string;
        libelleCategorieJuridiqueInsee: string;
        dateCreationJuridique: string;
        codeNafInsee: string;
        libelleEtablissement: string;
        codeRegimeFiscal: string;
        libelleCodeRegimeFiscal: string;
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        dateArreteComptable: number;
        idEdsInterne: number;
        activiteEconomiqueReelleProf: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeDevise: string;
        codeAppartenanceReseau: string;
        codeAgentEconomique: string;
        codeTypeCommerceOrganise: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        referencePieceJustificativeProf: string;
        codeCotation: string;
        edsDomiciliation: number;
        sigle: string;
        codeTypeTiers: string;
        effectif: number;
        codeBanqueEntitePilote: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEco: string;
        indicateurEirl: string;
        dateDebutOptionEirl: string;
        dateFinOptionEirl: string;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: string;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
    }
    interface IInformationEtablissement {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        designationEntiteTitulaire: string;
        codeStatutLieuActivite: string;
        numTelex: string;
        numTelecopieur: string;
        effectifDuLieuActivite: number;
        enseigneCommercialeLieuActivit: string;
        dateDebut: string;
        dateFin: string;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: string;
        dateDerniereMiseAJourLieu: string;
        dateDerniereVerifLieuActivite: string;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: string;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    interface IAdresse {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        identifiant: number;
        codeType: string;
        libelleType: string;
        ligne2AFNOR: string;
        ligne3AFNOR: string;
        ligne4AFNOR: string;
        ligne5AFNOR: string;
        ligne6AFNOR: string;
        codePostalPTT: string;
        codePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseelocalite: string;
        libelleInseeLocalite: string;
        codeTypeRetourPtt: string;
        libelleCodeTypeRetourPtt: string;
        indicateurEnvoiCourrier: string;
        inddifadresseFiscalePostale: string;
        numeroVoiePttVillePlus50000Hab: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephone: string;
        codeValiditeAdresseUniserv: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        libelleCommune: string;
        codeTypeLieu: string;
        dateDernierRetourPttAdresse: string;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
    }
    interface IMedia {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        typeMoyenContact: string;
        adresseMoyenContact: string;
        codeIndicatifInternationalTel: string;
        numeroTelephone: string;
        codeOptIn: string;
        indicEnvoiMediaProOptOut: string;
        indicEnvoiSmsFax: string;
        telephoneEmailPrefere: string;
        telephoneEmailSecurise: string;
    }
    interface IInformationTiersLie {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
    }
    interface ITiersNoyau {
        caracteristiqueTiers: ICaracteristiqueTiers;
        identificationTiers: IIdentificationTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresse>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
    }
    class TiersNoyau implements ITiersNoyau {
        private _caracteristiqueTiers;
        caracteristiqueTiers: CaracteristiqueTiers;
        private _identificationTiers;
        identificationTiers: IdentificationTiers;
        private _informationParticulier;
        informationParticulier: InformationParticulier;
        private _informationProfessionnel;
        informationProfessionnel: Array<IInformationProfessionnel>;
        private _informationEtablissement;
        informationEtablissement: Array<IInformationEtablissement>;
        private _adresse;
        adresse: Array<IAdresse>;
        private _media;
        media: Array<IMedia>;
        private _informationTiersLie;
        informationTiersLie: Array<IInformationTiersLie>;
        constructor(itn: ITiersNoyau);
    }
    interface ITierNoyauV1 {
        identification: Types.Tiers.Identification | Types.TiersV3.Identification;
        particulierInformation: Types.Tiers.ParticulierInformation | Types.TiersV3.InformationParticulier;
        listeMedia: Types.Tiers.Media[];
        listeTiersLies: Types.Tiers.ParticulierTiersLie[] | Types.TiersV3.IInformationTiersLie[];
    }
    class TierNoyauV1 implements ITierNoyauV1 {
        identification: Types.Tiers.Identification | Types.TiersV3.Identification;
        particulierInformation: Types.Tiers.ParticulierInformation | Types.TiersV3.InformationParticulier;
        listeMedia: Types.Tiers.Media[];
        listeTiersLies: Types.Tiers.ParticulierTiersLie[] | Types.TiersV3.IInformationTiersLie[];
        constructor(itnv1: ITierNoyauV1);
    }
}

declare module GestionGeneriqueOffres.Constantes {
    interface IRootScopeServiceWithConstants extends ng.IRootScopeService {
        constantes: Definitions;
    }
    const listeProduitsBad: number[];
    class Modules {
        static CONSTANTES: string;
        static DIRECTIVES: string;
        static CONTROLEURS: string;
        static FILTRES: string;
        static SERVICES: string;
    }
    /**
     * Id des valeurs injectées via $provide.value
     */
    class ValeursInjectees {
        static ACTIVER_ERREUR_GGO: string;
        static PROGRESSION_CHARGEMENT: string;
        static CHARGEMENT: string;
        static REFERENCE_PRODUIT_PRINCIPAL_OFFRE: string;
        static CODE_TYPE_PRODUIT_SERVICE_PRINCIPAL_OFFRE: string;
        static ROUTAGE_EDITIQUE: string;
        static PILOTAGE_ECRAN: string;
        static MODE_EDITIQUE: string;
        static LOGGING: string;
    }
    /**
     * Regroupe les tags définis spécifiquement pour GGO
     */
    class Tags {
        /**
         * Indique le dossier d'emplacement des sources (js/css/html peut être ?) des composants P/S
         */
        static URL_COMPOSANTS_GGO: string;
        /**
         * Indique l'emplacement des sources (js/css/html peut être ?) des composants P/S
         */
        static REPERTOIRE_COMPOSANTS_GGO: string;
    }
    class Technique {
        static $inject: string;
        static ID_CONTEXTE_GGO: string;
        static ID_CONTEXTE_GGHO: string;
        static ID_CONTEXTE_CGO: string;
        static ID_CONTEXTE_CHGT_OFFRE: string;
        static ID_APPLI_GGO: string;
        static ID_APPLI_GGHO: string;
        static ID_APPLI_CGO: string;
        static TAILLE_DONNEES_JSON_MAX: number;
        static TAILLE_COMMENTAIRE_MAX: number;
    }
    /**
     * Les évènements entre GGO et les composants P/S
     */
    class EvenementsComposantsProduitsService {
        /**
         * Cet évènement doit être émis par le P/S une fois son initialisation achevée
         */
        static CSPR_CHARGEMENT_EFFECTUE: string;
        /**
         * Cet évènement doit être émis par le P/S s'il désire afficher son IHM
         */
        static CSPR_AFFICHER_IHM: string;
        /**
         * Cet évènement doit être émis par le P/S s'il désire cacher son IHM
         */
        static CSPR_CACHER_IHM: string;
        /**
         * Cet évènement doit être émis par le P/S s'il désire débrancher vers un producteur
         */
        static CSPR_DEMANDER_DEBRANCHEMENT: string;
        /**
         * Cet évènement doit être émis par le P/S s'il désire débrancher vers un producteur
         */
        static CSPR_CHANGER_TITRE: string;
        /**
         * Cet évènement doit être émis par le P/S s'il détecte une erreur fonctionnelle durant sa phase d'initialisation
         * (ex : pré requis P/S en échec)
         */
        static CSPR_EMISSION_ERREUR: string;
        /**
         * Cet évènement doit être émis par le P/S s'il veut remonter une information concernant des pré-requis pour la cloture
         */
        static CSPR_INFO_PREREQUIS_CLOTURE: string;
        /**
         * Cet évènement doit être émis par le P/S s'il souhaite quitter GGO.
         */
        static CSPR_QUITTER: string;
        /**
         * Cet évènement est émis par le P/S principal de l'offre lorsqu'il souhaite positionner la référence (n° de compte d'un BL par ex.)
         */
        static CSPR_DEFINIR_REFERENCE_PRODUIT_PRINCIPAL: string;
        /**
         * Cet évènement est émis par le P/S principal de l'offre lorsqu'il souhaite indiquer quelle est la SPA éditique à utiliser
         */
        static CSPR_DEFINIR_ROUTAGE_EDITIQUE: string;
        /**
         * Cet évènement est émis par GGO lorsque tous les P/S ont terminé leur initialisation.
         */
        static CSPR_CHARGEMENT_TERMINE: string;
        /**
         * Cet évènement est émis par GGO lorsque le délai d'init imparti aux P/S est achevé et qu'au moins un P/S n'a pas fini son init.
         */
        static CSPR_CHARGEMENT_EN_ECHEC: string;
        /**
         * Cet évènement est émis par GGO lorsqu'un produit est supprimé.
         */
        static CSPR_PRODUIT_SUPPRIME: string;
        /**
         * Cet évènement est émis par GGO lorsqu'un produit est ajouté.
         */
        static CSPR_PRODUIT_AJOUTE: string;
        /**
         * Cet évènement est émis par GGO lorsqu'un produit est rétabli (annulation de la clôture).
         */
        static CSPR_PRODUIT_RETABLI: string;
        /**
         * Cet évènement est émis par les P/S lorsqu'on doit les informer d'un changement de page
         */
        static CSPR_CHANGEMENT_PAGE: string;
        /**
         * Cet évènement est émis par les P/S lorsque ceux ci souhaitent simuler un clic utilisateur sur leur tuile
         */
        static CSPR_ACTIVATION_TUILE_PRODUIT: string;
        /**
         * GGO BDR seulement : Cet évènement est émis par les P/S lorsqu'on doit activer le bouton valider
         */
        static CSPR_ACTIVER_BOUTON_VALIDER: string;
        /**
         * GGO BDR seulement : Cet évènement est émis par les P/S lorsqu'on doit désactiver le bouton valider
         */
        static CSPR_DESACTIVER_BOUTON_VALIDER: string;
        /**
         * GGO BDR seulement : Cet évènement est émis par les P/S lorsqu'ils veulent personnaliser le libellé le bouton valider
         */
        static CSPR_PERSONNALISER_LIBELLE_BOUTON_VALIDER: string;
        static CLICK_APERCU_DOCUMENT: string;
        /**
         * GGO BDR seulement : Cet évènement est émis par GGO pour prévenir que les P/S que notre iframe est revenue au 1er plan
         */
        static CSPR_RETOUR_IFRAME: string;
        /**
         * Cet évènement doit être émis par le P/S s'il désire informer GGO que sont chargement à echouer
         */
        static CSPR_CHARGEMENT_ECHEC: string;
    }
    class AlternativeGenerique {
        OUI: string;
        NON: string;
        NON_CONCERNE: string;
    }
    class FamilleActeGestion {
        OUVERTURE: string;
        AVENANT: string;
        CLOTURE: string;
        CHANGEMENT_OFFRE: string;
        DEMANDE_OUVERTURE: string;
        EXTOURNE_OUVERTURE: string;
        REOUVERTURE: string;
        EXTOURNE_CLOTURE: string;
    }
    class CodeCanal {
        FACE_A_FACE: string;
        TELEPHONE: string;
        INTERNET: string;
        COURRIER: string;
    }
    class ModeVente {
        MEGI: string;
        VPC: string;
    }
    class CodeModaliteDetention {
        COMPTE: string;
        ENTITE: string;
        PERSONNE: string;
        NON_SIGNIFICATIF: string;
    }
    class CodeAffichageReferenceProduitService {
        AVEC_RICE: string;
        PERSONNE_OU_EXTERNE: string;
        EXTERNE_SANS_REFERENCE: string;
        MODE_COMPTE_ECRAN_UNIQUEMENT: string;
        MODE_COMPTE_IMPRESSION_UNIQUEMENT: string;
        SANS_AFFICHAGE: string;
        NON_SIGNIFICATIF: string;
    }
    class CodeAffichageProduitServiceFacultatifOffreClient {
        NON_POUSSE: string;
        POUSSE: string;
        NON_SIGNIFICATIF: string;
    }
    class IndicateurProduitServiceObligatoireOffre {
        OBLIGATOIRE: string;
        FACULTATIF: string;
    }
    class IndicateurProduitServiceInclusForfait {
        INCLUS_INTEGRALEMENT: string;
        FAIT_OBJET_SURCOUT: string;
        HORS_FORFAIT: string;
    }
    class TypeProduitServiceFamille {
        FAMILLE: string;
        AUTRES_CAS: string;
    }
    class TypeProduitServiceAssurance {
        ASSURANCE: string;
        AUTRES_CAS: string;
    }
    class TypeProduitServiceSocle {
        SOCLE: string;
        COMPLEMENTAIRE: string;
        FAMILLE: string;
        AUTRES_CAS: string;
    }
    class CodeEtatProduitService {
        PRESELECTIONNE: string;
        AUTRES_CAS: string;
    }
    class IndicateurPresenceOptionMultiBLFamille {
        OPTION_PRESENTE: string;
        OPTION_NON_PRESENTE: string;
        NON_SIGNIFICATIF: string;
    }
    class IndicateurEligibiliteClient {
        ELIGIBLE: string;
        NON_ELIGIBLE: string;
        PAR_DEFAUT: string;
    }
    class ModeTraitementProduitService {
        NE_PAS_AFFICHER: number;
        AFFICHER: number;
        REPRENDRE: number;
        NON_SIGNIFICATIF: number;
    }
    class CodeRepriseForcage {
        REPRISE_POSSIBLE: string;
        REPRISE_IMPOSSIBLE: string;
        INDIFFERENT: string;
        NON_SIGNIFICATIF: string;
    }
    class CodeNatureProduitServiceAssocie {
        OFFRE: string;
        LISTE_OFFRES: string;
        ASSEMBLAGE_CUMULABLE: string;
        ASSEMBLAGE_INTERCHANGEABLE: string;
        TECHNIQUE: string;
        ASSEMBLAGE_AFFICHAGE: string;
        PRODUIT_SIMPLE: string;
    }
    class ModeCompositionEntiteTitulaire {
        MODE_SIMPLE: string;
        MODE_JOINT_ENTRE_EPOUX: string;
        MODE_JOINT_ENTRE_TIERS: string;
        MODE_INDIVISION: string;
    }
    class AutoriseProduitAvecCompteSupport {
        AUTORISE: boolean;
        NON_AUTORISE: boolean;
    }
    class ModeDetentionAutorise {
        ENTITE: number;
        PERSONNE: number;
        ENTITE_ET_PERSONNE: number;
    }
    class AfficherInfoDetenteur {
        AFFICHER: number;
        NE_PAS_AFFICHER: number;
    }
    class Producteur {
        PAS_DE_PRODUCTEUR: string;
        IARD: string;
        IZIVENTE: string;
        ISILIS: string;
        CENET: string;
        SEPAMAIL: string;
        CONN_CLIENT_PART: string;
        GGHO: string;
        MONEXT: string;
    }
    class ProduitServiceParDefaut {
        PAR_DEFAUT: string;
        PAS_PAR_DEFAUT: string;
    }
    class ModeInterroBdf {
        MANUELLE: string;
        CHEQUE: string;
        CARTE: string;
        CREDIT: string;
        DECOUVERT: string;
    }
    class ControlesPreRequis {
        BDF: string;
        NBL2: string;
    }
    class ModeAjoutProduitDansOffre {
        NEANT: number;
        AUTO: number;
        REPRIS: number;
        MANUEL: number;
    }
    class CodeCaractereForfaitaireOffre {
        FORFAITAIRE: string;
        UNITAIRE: string;
    }
    class CodeMiseEnGestion {
        EN_ATTENTE: number;
        OK: number;
        EN_ERREUR: number;
        EN_ERREUR_TECHNIQUE: number;
        IGNORE: number;
        ALERTE: number;
    }
    class CodeActionSurAvenantProduitService {
        AUCUNE_ACTION_SUR_REFERENCE: string;
        TRANSFERT_REFERENCE_PRODUIT_SERVICE: string;
        AVENANT_DIRECT: string;
        AVENANT_SUBSTITUTION_PRODUIT_SERVICE: string;
        CLOTURE_PRODUIT_SERVICE: string;
        A_OUVRIR: string;
    }
    class CodeSectionAfficher {
        AJOUTER_MODIFIER_OFFRE: string;
        REPRENDRE_OFFRE: string;
        CLOTURER_OFFRE: string;
        OFFRE_ANTERIEUR: string;
        AJOUTER_OFFRE: string;
        MODIFIER_OFFRE: string;
        ANNULER_OFFRE: string;
    }
    class IconeProduit {
        ICONE_NEANT: number;
        ICONE_POUBELLE: number;
        ICONE_ANNULER: number;
    }
    class CodeEntiteVente {
        AGENCE: string;
        CRC: string;
        E_AGENCE: string;
        INTERNET: string;
        ADMINISTRATIF: string;
    }
    class CodeTypeActionPossible {
        /**
         * En principe, jamais utilisé dans GGO
         */
        VIRTUEL: string;
        /**
         * Opération fonctinonelle, appel autre appli ou pop up avec maj DV
         */
        OPERATION: string;
        /**
         * Fonction, appel autre appli ou pop up sans maj DV
         */
        FONCTION: string;
        /**
         * Boutons spéciaux ABAN/ANNU, traités dans la directive externe suivi de dossier
         */
        SPECIAL: string;
        /**
         * Bouton retour éditique, affichage "Prévisualiser les documents" dans la directive externe suivi de dossier
         */
        RETOUR_EDITIQUE: string;
        /**
         * Boutons à afficher dans GGO.
         */
        BOUTON: string;
    }
    class CodeSensCommunication {
        ENTRANT: string;
        SORTANT: string;
    }
    class CodeFranchissement {
        NON_FRANCHI: string;
        FRANCHI: string;
        JAMAIS_FRANCHI: string;
    }
    class IndicateurMiseEnGestion {
        SUCCES: string;
        ECHEC: string;
        NON_EFFECTUEE: string;
    }
    class CodeModeSignature {
        PAPIER: string;
        ELECTRONIQUE: string;
    }
    class CodeCaractereSignature {
        OBLIGATOIRE: string;
        FACULTATIF: string;
        SANS_SIGNATURE: string;
    }
    class CodeRolePersonne {
        TITULAIRE: string;
        REPRESENTANT_LEGAL: string;
        EMPRUNTEUR: string;
        CO_EMPRUNTEUR: string;
        CO_TITULAIRE: string;
        MANDATAIRE: string;
        AUTRE: string;
        DELEGATAIRE: string;
        SIGNATAIRE_LEGAL: string;
    }
    class TypeAppelant {
        IHM_CAISSE: string;
        IHM_CLIENT: string;
        BATCH_OU_ESB: string;
    }
    class ModeEnvoiDocumentPapier {
        MANUEL: string;
        HUBMAIL: string;
        NON_CONCERNE: string;
    }
    class IndicRestCompoDetail {
        COMPO_CARACTERISTIQUES_SEULEMENT: string;
        COMPO_CARACTERISTIQUES_ET_DETAIL: string;
        PAS_DE_RESTITUTION: string;
    }
    class CodeNatureLienET {
        PE: string;
        PR: string;
        LA: string;
    }
    class CodeUsageEntiteTitulaire {
        USAGE_PRIVE: string;
        USAGE_PROFESSIONNEL: string;
    }
    class CodePersonnaliteJuridique {
        PERSONNE_PHYSIQUE: string;
        PERSONNE_MORALE: string;
    }
    class Definitions {
        static constantesId: string;
        private static _instance;
        private _alternativeGenerique;
        private _codeCanal;
        private _familleActeGestion;
        private _modeVente;
        private _codeModaliteDetention;
        private _codeAffichageReferenceProduitService;
        private _codeAffichageProduitServiceFacultatifOffreClient;
        private _indicateurProduitServiceObligatoireOffre;
        private _indicateurProduitServiceInclusForfait;
        private _typeProduitServiceFamille;
        private _typeProduitServiceAssurance;
        private _typeProduitServiceSocle;
        private _codeEtatProduitService;
        private _indicateurPresenceOptionMultiBLFamille;
        private _indicateurEligibiliteClient;
        private _modeTraitementProduitService;
        private _codeRepriseForcage;
        private _codeNatureProduitServiceAssocie;
        private _modeCompositionEntiteTitulaire;
        private _autoriseProduitAvecCompteSupport;
        private _modeDetentionAutorise;
        private _afficherInfoDetenteur;
        private _producteur;
        private _produitServiceParDefaut;
        private _modeInterroBdf;
        private _controlesPreRequis;
        private _modeAjoutProduitDansOffre;
        private _codeCaractereForfaitaireOffre;
        private _codeMiseEnGestion;
        private _codeActionSurAvenantProduitService;
        private _codeSectionAfficher;
        private _iconeProduit;
        private _codeEntiteVente;
        private _codeTypeActionPossible;
        private _codeSensCommunication;
        private _codeFranchissement;
        private _indicateurMiseEnGestion;
        private _codeModeSignature;
        private _codeCaractereSignature;
        private _codeRolePersonne;
        private _typeAppelant;
        private _modeEnvoiDocumentPapier;
        private _indicRestCompoDetail;
        private _codeNatureLienET;
        private _codeUsageEntiteTitulaire;
        private _codePersonnaliteJuridique;
        AlternativeGenerique: AlternativeGenerique;
        CodeCanal: CodeCanal;
        FamilleActeGestion: FamilleActeGestion;
        ModeVente: ModeVente;
        CodeModaliteDetention: CodeModaliteDetention;
        CodeAffichageReferenceProduitService: CodeAffichageReferenceProduitService;
        CodeAffichageProduitServiceFacultatifOffreClient: CodeAffichageProduitServiceFacultatifOffreClient;
        IndicateurProduitServiceObligatoireOffre: IndicateurProduitServiceObligatoireOffre;
        IndicateurProduitServiceInclusForfait: IndicateurProduitServiceInclusForfait;
        TypeProduitServiceFamille: TypeProduitServiceFamille;
        TypeProduitServiceAssurance: TypeProduitServiceAssurance;
        TypeProduitServiceSocle: TypeProduitServiceSocle;
        CodeEtatProduitService: CodeEtatProduitService;
        IndicateurPresenceOptionMultiBLFamille: IndicateurPresenceOptionMultiBLFamille;
        IndicateurEligibiliteClient: IndicateurEligibiliteClient;
        ModeTraitementProduitService: ModeTraitementProduitService;
        CodeRepriseForcage: CodeRepriseForcage;
        CodeNatureProduitServiceAssocie: CodeNatureProduitServiceAssocie;
        ModeCompositionEntiteTitulaire: ModeCompositionEntiteTitulaire;
        AutoriseProduitAvecCompteSupport: AutoriseProduitAvecCompteSupport;
        ModeDetentionAutorise: ModeDetentionAutorise;
        AfficherInfoDetenteur: AfficherInfoDetenteur;
        Producteur: Producteur;
        ProduitServiceParDefaut: ProduitServiceParDefaut;
        ModeInterroBdf: ModeInterroBdf;
        ControlesPreRequis: ControlesPreRequis;
        ModeAjoutProduitDansOffre: ModeAjoutProduitDansOffre;
        CodeCaractereForfaitaireOffre: CodeCaractereForfaitaireOffre;
        CodeMiseEnGestion: CodeMiseEnGestion;
        CodeActionSurAvenantProduitService: CodeActionSurAvenantProduitService;
        CodeSectionAfficher: CodeSectionAfficher;
        IconeProduit: IconeProduit;
        CodeEntiteVente: CodeEntiteVente;
        CodeTypeActionPossible: CodeTypeActionPossible;
        CodeSensCommunication: CodeSensCommunication;
        CodeFranchissement: CodeFranchissement;
        IndicateurMiseEnGestion: IndicateurMiseEnGestion;
        CodeModeSignature: CodeModeSignature;
        CodeCaractereSignature: CodeCaractereSignature;
        CodeRolePersonne: CodeRolePersonne;
        TypeAppelant: TypeAppelant;
        ModeEnvoiDocumentPapier: ModeEnvoiDocumentPapier;
        IndicRestCompoDetail: IndicRestCompoDetail;
        CodeNatureLienET: CodeNatureLienET;
        CodeUsageEntiteTitulaire: CodeUsageEntiteTitulaire;
        CodePersonnaliteJuridique: CodePersonnaliteJuridique;
        constructor();
        static getInstance(): Definitions;
    }
}
