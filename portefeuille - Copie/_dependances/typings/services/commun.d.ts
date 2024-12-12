
declare module myway.c0410.commun {
    var communModule: ng.IModule;
}

declare module myway.c0410.commun {
    interface IMessageErreur extends ng.IPromise<string> {
        messageErreur: string;
    }
}

declare module myway.c0410.commun {
    class ObjetGenerique {
        identifiant: string;
        constructor(idgps?: string);
    }
    class StatutChampsFormulaire {
        private _nomChamps;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    class Formulaire extends ObjetGenerique {
        constructor(idegps?: string);
        protected estValideChamps(champs: Object): boolean;
        protected estValideFormulaire(): boolean;
        protected getInformationsChampsInvalidesFormulaire(): StatutChampsFormulaire[];
    }
}

declare module myway.c0410.commun {
    class GestionnaireBilleterie {
        static getCoupure500(billeterie: MyWay.Model.Coupure): string;
        static getCoupure200(billeterie: MyWay.Model.Coupure): string;
        static getCoupure100(billeterie: MyWay.Model.Coupure): string;
        static getCoupure50(billeterie: MyWay.Model.Coupure): string;
        static getCoupure20(billeterie: MyWay.Model.Coupure): string;
        static getCoupure10(billeterie: MyWay.Model.Coupure): string;
        static getCoupure5(billeterie: MyWay.Model.Coupure, monnaieSansBillet: number): string;
        static getBilleterie(billeterie: myway.comOpesFinancieres.Model.SegmentBilleterie): string;
    }
}

declare module myway.c0410.commun {
    class CompteBddCommunService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        notifierChargementTermine(scope: ng.IScope, idBloc: string): void;
    }
}

declare module myway.c0410.commun {
    class EspaceGlobalService {
        private $parse;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($parse: ng.IParseService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private structureObjetGenerique;
        enregistrerObjetGenerique(objetGenerique: ObjetGenerique): void;
        getObjetGenerique(identifiant: string): ObjetGenerique;
        hasModifieChamps(nomChamps: string, formulaireAncien: ObjetGenerique, formulaireNouveau: ObjetGenerique): boolean;
        getListeObjetsGeneriques(): ObjetGenerique[];
    }
}
