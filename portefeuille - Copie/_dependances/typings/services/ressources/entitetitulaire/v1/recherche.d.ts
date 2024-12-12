/**
 * Ressource : /entitetitulaire/v1/recherche
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/entitetitulaire/recherche
 */
declare module myway.ressources.entitetitulaire.recherche {

    export interface IEntiteTitulaire {
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: string;

        codeEtablissement: string;

        designationEntiteTitulaire: string;

        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * - 1   Usage privé
         * - 2   Usage professionnel
         */
        codeUsageEntiteTitulaire: string;

        /**
         * Mode de relation des personnes composant une entité titulaire.
         * - 1   mode simple
         * - 2   mode joint entre époux
         * - 3   mode joint entre tiers
         * - 4   mode indivision
         */
        modeCompositionEntiteTitulaire: string;

        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative des personnes.
         * - 0   Actif
         * - 1   Clôturé
         */
        codeEtatEntiteTitulaire: string;

        /**
         * Précise le type d'indivision.
         * - 1   Mode indivision successorale
         * - 2   Mode indivision conventionnel avec solidarité
         * - 3   Mode indivision conventionnel sans solidarité
         */
        modeCompositionIndivision: string;

        /**
         * Complément de la désignation courte de l'entité titulaire, 
         * optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationEntiteTitulaire: string;
    }

    export interface IGetQueryParams {
        codeEtablissement: string;
        
        identifiantTiers: number;

        /**
         * Permet de préciser le type de recherche à effectuer:
         * - 1 Recherche par identifiant Tiers (n° personne)
         */
        typeRechercheEntiteTitulaire: string;
    }

}
