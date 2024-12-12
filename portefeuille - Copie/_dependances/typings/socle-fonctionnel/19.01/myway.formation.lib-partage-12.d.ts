
declare module libPartageModule {
    var app: any;
}

declare module libPartageModule {
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
