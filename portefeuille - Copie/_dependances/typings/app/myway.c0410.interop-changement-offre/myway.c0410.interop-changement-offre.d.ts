
declare module myway.c0410.interopChangementOffre {
    var app: any;
}

declare module myway.c0410.interopChangementOffre {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}
