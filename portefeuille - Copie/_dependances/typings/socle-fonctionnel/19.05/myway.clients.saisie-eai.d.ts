
declare module saisieEAI {
    var app: any;
}

declare module saisieEAI.Constantes {
    module Services {
    }
    module Url {
        const pageControle: string;
        const pageListePersonnes: string;
    }
}

declare module saisieEAI {
    class ControleEligibiliteControleur {
        private controleEligibiliteService;
        static $inject: string[];
        constructor(controleEligibiliteService: Services.IControleEligibiliteService);
        /**
         * initialisation du service de chargement
         */
        init(): void;
    }
}

declare module saisieEAI.Services {
    interface IControleEligibiliteService {
        initialisationControle(rechargement?: boolean): void;
        chargementLong: IChargement;
    }
    interface IChargement {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<any>;
    }
    class ControleEligibiliteService implements IControleEligibiliteService {
        private $q;
        private initService;
        private lisaService;
        private logger;
        private authentificationInfo;
        private parametresComptables;
        private objetAuthentificationFormate;
        private identifiantPersonne;
        private codeEtab;
        chargementLong: IChargement;
        static $inject: string[];
        constructor($q: ng.IQService, initService: libEAI.Services.IInitialisationService, lisaService: libEAI.Services.ILisaService, logger: libEAI.Logger.ILogger);
        initialisationControle(rechargement?: boolean): void;
        /**
         * annulation d'un chargement long
         */
        private annulerChargementLong();
    }
}

declare module saisieEAI {
    function entete(): ng.IDirective;
}
