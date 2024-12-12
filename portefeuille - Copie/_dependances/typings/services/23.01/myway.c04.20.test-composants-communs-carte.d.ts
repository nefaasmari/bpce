
declare module TestComposantsCommunsCarte {
    var app: any;
}

declare module TestComposantsCommunsCarte {
    interface IAvenantCarte extends ng.IScope {
        dateSignatureContrat: Date;
    }
    class AvenantCarteControleur {
        private $scope;
        private serviceAgent;
        static $inject: [string];
        constructor($scope: IAvenantCarte, serviceAgent: MyWay.Services.ServiceAgent);
    }
}

declare module TestComposantsCommunsCarte {
    interface IClotureCarteScope extends ng.IScope {
    }
    class ClotureCarteControleur {
        private $scope;
        private serviceAgent;
        static $inject: [string];
        constructor($scope: IClotureCarteScope, serviceAgent: MyWay.Services.ServiceAgent);
    }
}

declare module TestComposantsCommunsCarte {
    interface IComposantsCommunsCarteScope extends ng.IScope {
        maFamilleDeCarteTest0: any;
        monProduitCarteTest0: any;
        monProduitCarteTest0b: any;
        saisieRestreinte: boolean;
        maFamilleDeCarteClassique: any;
        monProduitCarteClassique: any;
        maFamilleDeCarteSensea: any;
        monProduitCarteSensea: any;
        maFamilleDeCarteBusiness: any;
        monProduitCarteBusiness: any;
        maFamilleDeCarteRetrait: any;
        monProduitCarteRetrait: any;
        monPlafond001: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        monModelTransportCitevia002: boolean;
        dateFinValidite001: string;
        tableauDeProduitCarteClassique: Array<any>;
        monProduitCartePremier: any;
        tableauDeProduitCartePremier: Array<any>;
        monProduitCarteInfinite: any;
    }
    class ComposantsCommunsCarteControleur {
        private $scope;
        private serviceAgent;
        static $inject: [string];
        constructor($scope: IComposantsCommunsCarteScope, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de callback de l'exemple 001
         */
        onChangeMotifCloture(model: any): void;
        /**
         * Méthode de callback de l'exemple 001 (TypeClotureCarte)
         */
        onChangeTypeClotureCarte(model: any): void;
    }
}

declare module TestComposantsCommunsCarte {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module TestComposantsCommunsCarte {
}

declare module TestComposantsCommunsCarte {
}

declare module TestComposantsCommunsCarte {
}

declare module TestComposantsCommunsCarte {
    interface IOuvertureCarteScope extends ng.IScope {
    }
    class OuvertureCarteControleur {
        private $scope;
        private serviceAgent;
        static $inject: [string];
        constructor($scope: IOuvertureCarteScope, serviceAgent: MyWay.Services.ServiceAgent);
    }
}

declare module TestComposantsCommunsCarte {
}

declare module TestComposantsCommunsCarte {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module TestComposantsCommunsCarte {
    function entete(): ng.IDirective;
}
