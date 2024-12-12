import { NotificationMessageContent, ServiceName } from '@ptmyway-stc-v2/core-common';
import { Observable } from 'rxjs';
export declare abstract class AbstractBaseAgentService {
    protected _serviceName: ServiceName;
    private readonly messenger;
    constructor(serviceName: string);
    get serviceName(): ServiceName;
    protected requestWithResponse<RequestType, ResponseType>(subject: any, content: RequestType, keepTracking?: boolean): Observable<ResponseType>;
    listenNotification(channel?: string): Observable<NotificationMessageContent>;
    notify(subject: any, content: any, channel?: string): void;
    watchConnection(): Observable<boolean>;
}
