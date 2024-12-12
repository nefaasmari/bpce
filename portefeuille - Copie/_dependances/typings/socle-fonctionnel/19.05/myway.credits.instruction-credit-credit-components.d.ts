
declare module ICCreditComponents {
    var app: any;
}

declare namespace ICCreditComponents.Constantes.Inject {
    namespace Modale {
        const data: string;
    }
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Modeles {
    interface ILoading<T> {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<T>;
        texte?: string;
    }
}
