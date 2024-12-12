
declare module Clients.FilDeContacts {
    var app: any;
}

declare module Clients.FilDeContacts.Constantes.Url {
    const SYNTHESE: string;
    const DETAIL_PRODUIT: string;
    const SYNTHESE_PM_MODE_GRAPHIQUE: string;
    const DETAIL_ADMINISTRATIF: string;
    const SELECTION_PERS_MORALE: string;
    const LOCALHOST: string;
    const DSC: string;
}

declare module Clients.FilDeContacts {
    /**
     * Classe de gestion de la casse
     */
    class CasseService {
        constructor();
        /**
         * Met en majuscule
         * @param input Chaîne à mettre en majuscule
         */
        majuscule(input: string): string;
        /**
         * Met en minuscule
         * @param input Chaîne à mettre en minuscule
         */
        minuscule(input: string): string;
    }
}
