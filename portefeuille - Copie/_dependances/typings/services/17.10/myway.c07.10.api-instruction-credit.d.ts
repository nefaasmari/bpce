
declare module ApiInstuctionCredit {
    var app: any;
}

declare module ApiInstuctionCredit {
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
