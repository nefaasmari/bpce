
declare module Avenants.Commun.Constantes.Inject {
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $location: string;
        const $window: string;
        const $scope: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const navigationService: string;
        const modalService: string;
    }
    module Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
        const applicationLoggerName: string;
    }
    module Services {
        const errorService: string;
        const routeService: string;
        const popinRetourQrService: string;
    }
}

declare module Avenants.Commun {
    var app: any;
}

declare module Avenants.Commun.Constantes.Lisa {
    module Next {
        const recherche: number;
        const consultation: number;
    }
    module Param {
        const resultatRecherche: string;
    }
}

declare module Avenants.Commun.Constantes.Navigation {
    module Localhost {
        const spaRecherche: string;
        const spaConsultation: string;
    }
    module Routes {
        const erreur: string;
    }
}

declare module Avenants.Commun.Enum {
    type ErrorType = "Fonctionnelle" | "Technique" | "Javascript";
}

declare module Avenants.Commun.Modeles {
    interface IError extends Error {
        type: Enum.ErrorType;
    }
    class CustomError implements IError {
        type: Enum.ErrorType;
        name: string;
        message: string;
        stack: string;
        constructor(type: Enum.ErrorType, name: string, message: string, stack: string);
    }
}

declare module Avenants.Commun.Modeles {
    interface IControleurParams {
        templateUrl: string;
        name: string;
        alias: string;
    }
}

declare module Avenants.Commun.Modeles {
    interface IRetourQR {
        messageRetour: Array<string>;
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IRetourQRCustom {
        listeRetourQrBloquant: Array<string>;
        listeRetourQrNonBloquant: Array<string>;
        presenceRetourBloquant: boolean;
        retourAttendu: boolean;
    }
    class RetourQRCustom implements IRetourQRCustom {
        listeRetourQrBloquant: Array<string>;
        listeRetourQrNonBloquant: Array<string>;
        presenceRetourBloquant: boolean;
        retourAttendu: boolean;
        constructor(retours: Array<IRetourQR>);
        private getMessages(listeBrute, isBloquante);
    }
}

declare module Avenants.Commun.Logger {
}

declare module Avenants.Commun.Logger {
}

declare module Avenants.Commun.Logger {
    interface ILogger {
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
    const enum LoggerLevel {
        NONE = -1,
        ERROR = 1,
        WARN = 2,
        INFO = 3,
        DEBUG = 4,
        ALL = 10,
    }
}

declare module Avenants.Commun.Logger {
}

declare module Avenants.Commun.Services {
    interface IErrorService {
        handleError(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): ng.IPromise<Modeles.CustomError>;
    }
}

declare module Avenants.Commun.Services {
    abstract class RouteService {
        static getRouteParams(params: Modeles.IControleurParams, routeResolve: any): ng.route.IRoute;
    }
}

declare module Avenants.Commun {
    interface IPopinRetourQrData {
        listeMessagesBloquant: Array<string>;
        listeMessagesNonBloquant: Array<string>;
    }
    class PopinRetourQrControleur {
        private data;
        private $modalInstance;
        static parametres: Modeles.IControleurParams;
        afficherFooter: boolean;
        static $inject: Array<string>;
        constructor(data: IPopinRetourQrData, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        continuer(): void;
        close(): void;
    }
}

declare module Avenants.Commun.Services {
    interface IPopinRetourQrService {
        popinErreur: (bloquants: Array<string>, nonBloquants: Array<string>) => ng.IPromise<void>;
    }
}
