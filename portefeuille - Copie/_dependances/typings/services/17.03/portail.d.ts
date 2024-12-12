
declare module MonApplication {
    var app: any;
}

declare module MonApplication {
    class DefautControleur {
        private codeEtablissement;
        private codeAgent;
        motCle: string;
        libelleEtablissement: string;
        static $inject: string[];
        constructor();
        demarrerApplication(code: string): void;
        chercher(): void;
        chercherPersonne(matricule: string): void;
    }
}
