module Portefeuille.Modeles.Application {
    "use strict";

    export interface IPopupData<T> {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model?: T;
    }

    export interface IMessageErreurIHM {
        message: string;
        champs: string;
        ancre: string;
    }
}