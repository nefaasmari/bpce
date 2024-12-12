
declare module GestionRMP {
    var app: ng.IModule;
}

/**
 * Contrôleur de la navigation pour l'application Gestion-RMP
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Controleurs {
}

/**
 * Contrôleur de la page de tests de la directive mw-liste-rmp-gestion
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwListeRmpGestionControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

/**
 * Contrôleur de la page de tests de la directive mw-nouveau-rmp-gestion
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwNouveauRmpGestionControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

/**
 * Contrôleur de la directive mw-liste-rmp-gestion
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwListeRmpGestionControleur {
        constructor();
    }
}

/**
 * Directive pour l'affichage des listes de RMP dans le cas de la gestion de RMP.
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Directives {
    function mwListeRmpGestion(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-nouveau-rmp-gestion
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwNouveauRmpGestionControleur {
        constructor();
    }
}

/**
 * Directive pour l'affichage de la page d'un nouveau RMP dans le cas de la gestion des RMP.
 * @author S0076471 (Grégory Barale)
 */
declare module GestionRMP.Directives {
    function mwNouveauRmpGestion(): ng.IDirective;
}
