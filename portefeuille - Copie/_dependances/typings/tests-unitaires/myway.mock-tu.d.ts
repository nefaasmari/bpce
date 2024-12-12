
declare module myway.mockTU {
    class MockService {
        private $q;
        constructor($q: ng.IQService);
        creerMock(service: Object, nomMethode: string, estUnePromesse: boolean, resultatVoulu: Object): void;
        creerListeMock(service: Object, listeMethodeAMocker: myway.mockTU.model.CompositionService[]): void;
        creerMockPromesseErreur(service: Object, nomMethode: string, resultatVoulu: Object): void;
    }
}

declare module myway.mockTU.model {
    class CompositionService {
        service: Object;
        nomMethode: string;
        estUnePromesse: boolean;
        resultatMethod: Object;
    }
}
