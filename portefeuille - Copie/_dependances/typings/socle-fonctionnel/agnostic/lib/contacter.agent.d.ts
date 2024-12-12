import { CallInProgressInfos, CallInput, ChangeEntityNotificationStatusInputParams, ContactHabilitationEnum, GetUserContactCapacityInput, InCallQueueInfo, InCallSusbscribeEntity, MessageHistoriqueContact, MyInCallEntityType, ReceptionStationInfo, ReceptionStationInfoInputParams, SendEmailInput, SendMSIInput, SMSInput, SubscribeInCallInputParams, UnsubscribeInCallInputParams } from '@oscaiss-pormyway-managers/socfon-lib-model';
import { IParamAppelerBandeauCRC, IParamCommunicationEnvoyerIM, IParamCreerEMailBandeauCRC } from '@ptmyway-stc-v2/communication-common';
import { Observable } from 'rxjs';
import { AbstractBaseAgentService } from './base.agent';
export declare class ContacterService extends AbstractBaseAgentService {
    constructor();
    /**
     * Permet d'ouvrir un client mail avec un email pré-remplis avec les informations passés en paramètres
     * @param param {@see SendEmailInput}
     */
    sendEmail(param: SendEmailInput): Observable<void>;
    /**
     *
     */
    sendMSI(param: SendMSIInput): Observable<void>;
    /**
     *
     */
    callByPhoneNumber(param: CallInput): Observable<void>;
    sendEmailCRC(param: IParamCreerEMailBandeauCRC): Observable<void>;
    callByPhoneNumberCRC(param: IParamAppelerBandeauCRC): Observable<void>;
    /**
     *
     */
    sendSMS(param: SMSInput): Observable<void>;
    /**
     *
     */
    callByMessaging(param: CallInput): Observable<void>;
    /**
     *
     */
    sendInstantMessage(param: IParamCommunicationEnvoyerIM): Observable<void>;
    /**
     *
     */
    hangUpCall(): Observable<void>;
    /**
     * Test les capacités de contacts passés en paramètre {@see ContactHabilitationEnum}
     * @param payload les paramètres de récupération des capacités.
     * @returns une map avec les droits sur les différentes capacitès testés
     */
    getUserContactCapacities(payload: GetUserContactCapacityInput): Observable<Map<ContactHabilitationEnum, boolean>>;
    /**
     *  Permet de déterminer si le paramètrage existant autorise l'accès aux fonctionnalités de contacts sortants.
     */
    isContactAuthorized(): Observable<boolean>;
    /**
     *  Permet de déterminer si le paramètrage existant autorise l'accès aux fonctionnalités de contacts entrants.
     */
    isInCallAuthorized(): Observable<boolean>;
    /**
     *  Permet de notifier au consommateur les informations de l'appel en cours.
     *  @see {CallInProgressInfos}
     */
    listenCallInProgress(): Observable<CallInProgressInfos>;
    /**
     * Permet la récupération des postes d'accueil pour la connexion au "AccInCall"
     * @param params
     * @returns
     */
    requestForInfosPostAccueil(params: ReceptionStationInfoInputParams): Observable<ReceptionStationInfo[]>;
    /**
     * Permet de s'abonner au MyInCall
     * @param params
     * @returns
     */
    subscribeInCall(params: SubscribeInCallInputParams): Observable<void>;
    /**
     * Permet de récupérer les infos de l'appel en cours.
     * @param params
     * @returns
     */
    getInCallInfosById(params: string): Observable<InCallQueueInfo>;
    /**
     * Permet de récupérer les infos de l'appel en cours.
     * @param params
     * @returns
     */
    removeInCallInfosById(params: string): Observable<InCallQueueInfo>;
    /**
     * Permet de se désabonner du MyInCall
     * @param params
     * @returns
     */
    unsubscribeInCall(params: UnsubscribeInCallInputParams): Observable<void>;
    /**
     * Permet de se désabonner du MyInCall
     * @param params
     * @returns
     */
    unsubscribeAllInCall(): Observable<void[]>;
    /**
     * Permet de récupérer une entité abonnée au myInCall dans le contexte en fonction des informations transmis en paramètre
     * @param params
     * @returns  renvoie l'entité abonnée si elle existe dans le contexte du manager (si elle est considéré connecté au myincall) ou
     * undefined si l'entité cherché n'est pas connecté au MyInCall
     */
    getCurrentInCallSubscribeEntityContext(): Observable<Map<MyInCallEntityType, InCallSusbscribeEntity | undefined>>;
    changeEntityNotificationStatus(params: ChangeEntityNotificationStatusInputParams): Observable<InCallSusbscribeEntity>;
    listenInCallNotificationTimeout(callId: string): Observable<MessageHistoriqueContact>;
}
