
declare module ComposantsCommunsAlerteBDR {
    var app: any;
}

declare module ComposantsCommunsAlerteBDR.Controleurs {
    interface IModaleActivationModificationAlerteScope extends ng.IScope {
        modaleActivationModificationAlerteCtrl: IModaleActivationModificationAlerteControleur;
    }
    interface IModaleActivationModificationAlerteControleur {
        modalDatas: any;
        objAlerteEcureuilProTraite: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        codeActionAlerteSelectionnee: Enumerations.AlerteBDRCodeActionAlerteEnum;
        categorieAlerteSelectionnee: Enumerations.AlerteBDRCategorieAlerteEnum;
        codeTypeAlerteSelectionnee: Enumerations.AlerteBDRCodeTypeAlerteEnum;
        listeNumerosRibIHM: any[];
        ribChoisiIHM: any;
        listePeriodicitesIHM: any[];
        periodiciteChoisieIHM: any;
        montantIHM: MyWay.Model.MontantDevise;
        montantMini: number;
        montantMiniIHM: string;
        montrerMontantIHM: boolean;
        montrerPeriodiciteChoisieIHM: boolean;
        afficherMessageErreur: boolean;
        indicateurRequeteEnCours: boolean;
        boutonValiderActif: boolean;
        indicRibChoisi: boolean;
        miseEnFormeAlerteSelectionnee(alerteSelectionnee: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro): void;
        sauvegarderActivationModificationAlerte(): void;
        annuler(): void;
    }
    class ModaleActivationModificationAlerteControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private compteAlertableProService;
        private mwsfDeviseService;
        static $inject: string[];
        modalDatas: any;
        objAlerteEcureuilProTraite: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        codeActionAlerteSelectionnee: Enumerations.AlerteBDRCodeActionAlerteEnum;
        categorieAlerteSelectionnee: Enumerations.AlerteBDRCategorieAlerteEnum;
        codeTypeAlerteSelectionnee: Enumerations.AlerteBDRCodeTypeAlerteEnum;
        libelleTypeAlerteSelectionnee: any;
        listeNumerosRibIHM: any[];
        ribChoisiIHM: any;
        listePeriodicitesIHM: any[];
        periodiciteChoisieIHM: any;
        montantIHM: MyWay.Model.MontantDevise;
        montantMini: number;
        montantMiniIHM: string;
        montrerMontantIHM: boolean;
        montrerPeriodiciteChoisieIHM: boolean;
        messageErreurDate: string;
        afficherMessageErreur: boolean;
        indicateurRequeteEnCours: boolean;
        boutonValiderActif: boolean;
        indicRibChoisi: boolean;
        constructor($scope: IModaleActivationModificationAlerteScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteAlertableProService: Services.CompteAlertableProService, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        miseEnFormeAlerteSelectionnee(objAlerteEcureuilProTraite: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro): void;
        getlisteNumerosRibIHM(): MyWay.Services.IPromesse<Modeles.ServiceAlerteBDR.CompteAlertablePro.ICompteAlertablePro>;
        getListePeriodicitesIHM(): void;
        getPeriodicite(codePeriodicite: string): any;
        sauvegarderActivationModificationAlerte(): void;
        annuler(): void;
    }
}

declare module ComposantsCommunsAlerteBDR {
}

/**
 * Contrôleur de la page de tests pour l'utilisation des services REST du projet
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevServiceRestControleur {
        private $scope;
        private alerteBDRAlerteEcureuilProService;
        private alerteBDRCompteAlertableProService;
        private serviceAgentExtended;
        private mwsfDeviseService;
        static $inject: string[];
        alerteBDRAlerteEcureuilProServiceGetQuery: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteBDRAlerteEcureuilProServiceGetQuery;
        alerteBDRAlerteEcureuilProServiceGetReponse: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServiceGetErreur: MyWay.Services.Erreur;
        indicateurAlerteBDRAlerteEcureuilProServiceGetEnCours: boolean;
        indicateurRechercheAlerteBDRAlerteEcureuilProServiceGet: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServiceGet: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServiceGetNull: boolean;
        alerteBDRAlerteEcureuilProServicePostQuery: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServicePostReponse: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServicePostErreur: MyWay.Services.Erreur;
        indicateurAlerteBDRAlerteEcureuilProServicePostEnCours: boolean;
        indicateurRechercheAlerteBDRAlerteEcureuilProServicePost: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServicePost: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServicePostNull: boolean;
        alerteBDRAlerteEcureuilProServicePutQuery: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServicePutReponse: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServicePutErreur: MyWay.Services.Erreur;
        indicateurAlerteBDRAlerteEcureuilProServicePutEnCours: boolean;
        indicateurRechercheAlerteBDRAlerteEcureuilProServicePut: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServicePut: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServicePutNull: boolean;
        alerteBDRAlerteEcureuilProServiceDeleteQuery: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServiceDeleteReponse: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        alerteBDRAlerteEcureuilProServiceDeleteErreur: MyWay.Services.Erreur;
        indicateurAlerteBDRAlerteEcureuilProServiceDeleteEnCours: boolean;
        indicateurRechercheAlerteBDRAlerteEcureuilProServiceDelete: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServiceDelete: boolean;
        indicateurSuccesAlerteBDRAlerteEcureuilProServiceDeleteNull: boolean;
        alerteBDRCompteAlertableProServiceGetQuery: Modeles.ServiceAlerteBDR.CompteAlertablePro.IAlerteBDRCompteAlertableProServiceGetQuery;
        alerteBDRCompteAlertableProServiceGetReponse: Modeles.ServiceAlerteBDR.CompteAlertablePro.ICompteAlertablePro;
        alerteBDRCompteAlertableProServiceGetErreur: MyWay.Services.Erreur;
        indicateurAlerteBDRCompteAlertableProServiceGetEnCours: boolean;
        indicateurRechercheAlerteBDRCompteAlertableProServiceGet: boolean;
        indicateurSuccesAlerteBDRCompteAlertableProServiceGet: boolean;
        indicateurSuccesAlerteBDRCompteAlertableProServiceGetNull: boolean;
        montantIHM: MyWay.Model.MontantDevise;
        rice: MyWay.Model.Rice;
        constructor($scope: ng.IScope, alerteBDRAlerteEcureuilProService: Services.IAlerteEcureuilProService, alerteBDRCompteAlertableProService: Services.ICompteAlertableProService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        private initTestAlerteEcureuilProGet();
        private initTestAlerteEcureuilProPost();
        private initTestAlerteEcureuilProPut();
        private initTestAlerteEcureuilProDelete();
        private initTestCompteAlertableProGet();
        recupererAlerteBDR(): void;
        creerAlerteBDR(): void;
        modifierAlerteBDR(): void;
        supprimerAlerteBDR(): void;
        recupererComptes(): void;
        /**
         * Méthode appelée pour l'impression de l'avenant de l'abonnement
         */
        imprimer(): void;
    }
}

declare module ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele {
    interface ISIPMGCE_Liste {
        SECTION1: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.SIPMGCE_ListeSECTION1[];
        GENERIC_ENTETEETS: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIPMGCE_ListeSECTION1 {
        _blocChoice_: (choice_SIPMGCE_ListeSECTION1_BL_Titre | choice_SIPMGCE_ListeSECTION1_BL_Deb1 | choice_SIPMGCE_ListeSECTION1_BL_Sms | choice_SIPMGCE_ListeSECTION1_BL_Email | choice_SIPMGCE_ListeSECTION1_BL_Corps)[];
    }
    interface choice_SIPMGCE_ListeSECTION1_BL_Titre {
        BL_Titre: SIPMGCE_ListeSECTION1BL_Titre;
    }
    interface choice_SIPMGCE_ListeSECTION1_BL_Deb1 {
        BL_Deb1: SIPMGCE_ListeSECTION1BL_Deb1;
    }
    interface choice_SIPMGCE_ListeSECTION1_BL_Sms {
        BL_Sms: SIPMGCE_ListeSECTION1BL_Sms;
    }
    interface choice_SIPMGCE_ListeSECTION1_BL_Email {
        BL_Email: SIPMGCE_ListeSECTION1BL_Email;
    }
    interface choice_SIPMGCE_ListeSECTION1_BL_Corps {
        BL_Corps: SIPMGCE_ListeSECTION1BL_Corps;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB10175[];
        b13135: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB13135[];
        b13705: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB13705[];
        b14445: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB14445[];
        b14505: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB14505[];
        b15135: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB15135[];
        b15905: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB15905[];
        b15965: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB15965[];
        b16275: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB16275[];
        b18025: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB18025[];
        b18279: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB18279[];
        b43199: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB43199[];
        b18715: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB18715[];
        b13335: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB13335[];
        b17515: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB17515[];
        b62108: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB62108[];
        b12579: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB12579[];
        b13825: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB13825[];
        b16705: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB16705[];
        b12135: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB12135[];
        b14265: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB14265[];
        b13485: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB13485[];
        b18315: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB18315[];
        b11315: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB11315[];
        b11425: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB11425[];
        b12548: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB12548[];
        b30051: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Corps {
        LIGNE1: number;
        LIGNE2: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.SIPMGCE_ListeSECTION1BL_CorpsLIGNE2[];
        LIGNE3: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.SIPMGCE_ListeSECTION1BL_CorpsLIGNE3[];
    }
    interface SIPMGCE_ListeSECTION1BL_CorpsLIGNE2 {
        D1: string;
        D2: string;
        D3: string;
    }
    interface SIPMGCE_ListeSECTION1BL_CorpsLIGNE3 {
        D4: string;
        D5: string;
        D6: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1 {
        NouvelleListe_0: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0[];
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0 {
        _blocChoice_: (choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE1 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE2 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE3 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE4 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE5 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE6 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE7 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE8 | choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE9)[];
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE1 {
        LIGNE1: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE1;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE2 {
        LIGNE2: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE2;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE3 {
        LIGNE3: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE3;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE4 {
        LIGNE4: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE4;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE5 {
        LIGNE5: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE5;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE6 {
        LIGNE6: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE6;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE7 {
        LIGNE7: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE7;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE8 {
        LIGNE8: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE8;
    }
    interface choice_SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0_LIGNE9 {
        LIGNE9: SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE9;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE1 {
        D1: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE2 {
        D2: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE3 {
        D3: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE4 {
        D4: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE5 {
        D5: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE6 {
        D6: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE7 {
        D7: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE8 {
        D9: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Deb1NouvelleListe_0LIGNE9 {
        D8: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Email {
        D13: string;
        D14: string;
        D15: string;
        D16: string;
        D17: string;
        D18: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Sms {
        D10: string;
        D11: string;
        D12: string;
        D17: string;
        D18: string;
    }
    interface SIPMGCE_ListeSECTION1BL_Titre {
        Titre: string;
    }
    class SIPMGCE_Liste implements ISIPMGCE_Liste {
        SECTION1: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.SIPMGCE_ListeSECTION1[];
        GENERIC_ENTETEETS: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Modele.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIPMGCE_ListeArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPMGCE_ListeGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPMGCE_ListeArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPMGCE_ListeImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPMGCE_ListeArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPMGCE_ListeImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module ComposantsCommunsAlerteBDR.Editique.SIPMGCE_Liste.Service {
    function createArchiverParams(): Modele.SIPMGCE_ListeArchiverParams;
    function createGenererParams(): Modele.SIPMGCE_ListeGenererParams;
    function createArchiverGenererParams(): Modele.SIPMGCE_ListeArchiverGenererParams;
    function createImpressionParams(): Modele.SIPMGCE_ListeImpressionParams;
    function createArchiverImpressionParams(): Modele.SIPMGCE_ListeArchiverImpressionParams;
    function createImpressionLotParams(): Modele.SIPMGCE_ListeImpressionLotParams;
    function createDocument(objAlerteEcureuilProTraite: ComposantsCommunsAlerteBDR.Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro, codeActionAbonnement: ComposantsCommunsAlerteBDR.Enumerations.AlerteBDRCodeActionAbonnementEnum, designationClient: string, authentification: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables): Modele.SIPMGCE_Liste;
}

/**
 * Ensemble d'énumérations pour le projet alerte BDR
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsAlerteBDR.Enumerations {
    enum AlerteBDRTypeCanalComEnum {
        SMS,
        EMAIL,
    }
    enum AlerteBDREvenementEnum {
        AVENANT_ABONNEMENT_ALERTE_ANNULATION = 0,
        AVENANT_ABONNEMENT_ALERTE_VALIDATION = 1,
        OUVERTURE_ABONNEMENT_ALERTE_ANNULATION = 2,
        OUVERTURE_ABONNEMENT_ALERTE_VALIDATION = 3,
        CLOTURE_ABONNEMENT_ALERTE_VALIDATION = 4,
    }
    enum AlerteBDRStatutSupportCommunication {
        VALIDE,
    }
    enum AlerteBDRCompteAlertableEnum {
        AUCUN_RIB,
        OK,
    }
    enum AlerteBDRCodeActionAbonnementEnum {
        OUVERTURE,
        AVENANT,
    }
    enum AlerteBDRCodeRechercheAlertesEnum {
        ENTITE_ACTIVE,
        TOUTES_ENTITES,
    }
    enum AlerteBDREtatEnum {
        ACTIVE,
        INACTIVE,
    }
    enum AlerteBDRCodeTypeAlerteEnum {
        SOLDE_ASCENDANT,
        SOLDE_DESCENDANT,
        OPERATION_CREDIT,
        OPERATION_DEBIT,
        ENCOURS_CB,
        SOLDE_SYSTEMATIQUE,
        VALO_COMPTE_TITRES,
        TOUS,
    }
    enum AlerteBDRCategorieAlerteEnum {
        SEUIL,
        SYSTEMATIQUE,
    }
    enum AlerteBDRCodeRechercheComptesEnum {
        COMPTES_PRELEVEMENT,
        COMPTES_ALERTABLES,
    }
    enum AlerteBDRCodeActionAlerteEnum {
        ACTIVER,
        MODIFIER,
    }
    class AlerteBDRListes {
        static periodicites: any;
    }
}

declare module ComposantsCommunsAlerteBDR {
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/servicealertebdr/v1/alerteEcureuilPro"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsAlerteBDR.Modeles.ServiceAlerteBDR.AlerteEcureuilPro {
    interface IAlerteBDRAlerteEcureuilProServiceGetQuery {
        codeEtablissement: string;
        identifiantTiers: number;
        codeRecherche: Enumerations.AlerteBDRCodeRechercheAlertesEnum;
    }
    interface IAlerteSeuil {
        codeTypeAlerte: string;
        libelleTypeAlerte: string;
        numeroAlerte: number;
        categorieAlerte: string;
        codeStatutAlerte: string;
        numeroRibCompteAlerte: string;
        dateEffectiveCreation: Date;
        dateEffectiveModification: Date;
        dateEffectiveCloture: Date;
        dateDerniereSaisieMAJ: Date;
        montantSeuil: number;
        codeDeviseMontantSeuil: string;
        dernierMontantLu: number;
        codeDeviseDernierMontantLu: string;
        dateDebutSelection: Date;
    }
    interface ISupport {
        numeroAbonnementAlerte: string;
        typeCanalCommunication: string;
        numeroSupportCommunication: string;
        statutSupportCommunication: string;
        indicateurDepasseNbMaxMessage: boolean;
        periode: string;
        dateDebutEmission: Date;
        nombreMessageGenere: number;
        nombreMessageInutileGenere: number;
        codeOperateur: string;
        numeroTelephone: string;
        adresseMailDestinataireAlerte: string;
        nomDestinataireAlerte: string;
        dateDernierMontantLu: string;
        dateEffectiveCreation: Date;
        codeCanalCreation: string;
        dateEffectiveModification: Date;
        dateEffectiveCloture: Date;
        codeCanalModification: string;
        codeCanalCloture: string;
        dateDerniereSaisieMAJ: Date;
        codeCanalDerniereSaisieMAJ: string;
    }
    interface IAbonnement {
        libelleServiceAlerte: string;
        numeroAbonnementAlerte: string;
        numeroRiceComptePrelevement: string;
        qualitePersonneSignataire: string;
        dateEffectiveCreation: Date;
        codeCanalCreation: string;
        dateEffectiveModification: Date;
        codeCanalModification: string;
        dateEffectiveCloture: Date;
        codeCanalCloture: string;
        dateDerniereSaisieMAJ: Date;
        codeCanalDerniereSaisieMAJ: string;
        nomTiersSignataire: string;
        prenomTiersSignataire: string;
        identifiantTiersSignataire: number;
    }
    interface IAlerteSystematique {
        codeTypeAlerte: string;
        libelleTypeAlerte: string;
        numeroAlerte: number;
        categorieAlerte: string;
        codeStatutAlerte: string;
        numeroRibCompteAlerte: string;
        dateEffectiveCreation: Date;
        dateEffectiveModification: Date;
        dateEffectiveCloture: Date;
        dateDerniereSaisieMAJ: Date;
        codeTypePeriodicite: string;
        codeJourSemaine: string;
    }
    interface IAlerteEcureuilPro {
        codeEtablissement: string;
        abonnement: IAbonnement;
        listeSupport: Array<ISupport>;
        listeAlerteSystematique: Array<IAlerteSystematique>;
        listeAlerteSeuil: Array<IAlerteSeuil>;
        codeGuichet: string;
        numeroOffreSouscrite: number;
        identifiantTiers: number;
        listeAlerteParametre: Array<IAlerteParametre>;
        listeCanalParametre: Array<ICanalParametre>;
    }
    interface IAlerteParametre {
        codeType: string;
        categorieAlerte: string;
        libelleTypeAlerte: string;
        montantSeuil: number;
        codeDeviseMontantSeuil: string;
    }
    interface ICanalParametre {
        typeCanal: string;
        plafondNombreMessageMax: number;
        indicateurAutorDepassPlafond: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/servicealertebdr/v1/compteAlertablePro"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsAlerteBDR.Modeles.ServiceAlerteBDR.CompteAlertablePro {
    interface IAlerteBDRCompteAlertableProServiceGetQuery {
        codeBanque: string;
        identifiantPersonne: number;
        codeTypeAlerte: Enumerations.AlerteBDRCodeTypeAlerteEnum;
        codeRecherche: Enumerations.AlerteBDRCodeRechercheComptesEnum;
    }
    interface ICompteAlertablePro {
        listeCompteAlert: Array<ICompteAlert>;
    }
    interface ICompteAlert {
        numeroRib: string;
        codeTypeProduitService: string;
        identifiantProduitService: number;
        sousCodeProduitService: string;
        codeDebitDiffere: string;
        designationBancaire: string;
        montantSolde: number;
        codeDevise: string;
        libelleCompte: string;
    }
}

declare module ComposantsCommunsAlerteBDR.Services {
    class AlerteEcureuilProService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteBDRAlerteEcureuilProServiceGetQuery): ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
        putRequest(query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro): ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
        postRequest(query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro): ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
        deleteRequest(query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro): ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
    }
    interface IAlerteEcureuilProService {
        getRequest: (query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteBDRAlerteEcureuilProServiceGetQuery) => ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
        putRequest: (query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro) => ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
        postRequest: (query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro) => ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
        deleteRequest: (query: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro) => ng.IPromise<Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro>;
    }
}

declare module ComposantsCommunsAlerteBDR.Services {
    class CompteAlertableProService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ServiceAlerteBDR.CompteAlertablePro.IAlerteBDRCompteAlertableProServiceGetQuery): ng.IPromise<Modeles.ServiceAlerteBDR.CompteAlertablePro.ICompteAlertablePro>;
    }
    interface ICompteAlertableProService {
        getRequest: (query: Modeles.ServiceAlerteBDR.CompteAlertablePro.IAlerteBDRCompteAlertableProServiceGetQuery) => ng.IPromise<Modeles.ServiceAlerteBDR.CompteAlertablePro.ICompteAlertablePro>;
    }
}

declare module ComposantsCommunsAlerteBDR.Controleurs {
    class CaracteristiquesAbonnementControleur {
        private $scope;
        private serviceAgentExtended;
        private compteAlertableProService;
        static $inject: string[];
        codeActionAbonnement: Enumerations.AlerteBDRCodeActionAbonnementEnum;
        designationClient: any;
        objAlerteEcureuilProTraite: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        estUnAvenant: boolean;
        numeroAbonnement: any;
        typeCanalCommunication: any;
        adresseMail: any;
        numeroSMS: any;
        montrerMail: boolean;
        montrerSMS: boolean;
        destinataireChoisiIHM: any;
        listeNumerosRibIHM: any[];
        ribChoisiIHM: any;
        indicateurRequeteEnCours: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteAlertableProService: Services.CompteAlertableProService);
        getlisteNumerosRibIHM(): MyWay.Services.IPromesse<Modeles.ServiceAlerteBDR.CompteAlertablePro.ICompteAlertablePro>;
    }
}

declare module ComposantsCommunsAlerteBDR.Directives {
    function mwCaracteristiquesAbonnement(): ng.IDirective;
}

declare module ComposantsCommunsAlerteBDR.Controleurs {
    class ListeAlertesControleur {
        private $scope;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        codeActionAbonnement: Enumerations.AlerteBDRCodeActionAbonnementEnum;
        objAlerteEcureuilProTraite: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        codeActionAlerteSelectionnee: Enumerations.AlerteBDRCodeActionAlerteEnum;
        categorieAlerteSelectionnee: Enumerations.AlerteBDRCategorieAlerteEnum;
        codeTypeAlerteSelectionnee: Enumerations.AlerteBDRCodeTypeAlerteEnum;
        modaleActivationModificationAlerte: Object;
        tableauAlertes: MyWay.UI.ImwTableOptions;
        boutonDesactiverActif: boolean;
        boutonModifierActif: boolean;
        boutonActiverActif: boolean;
        boutonImprimerActif: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        selectedLinesPourActivationModificationAlerte: Array<Object>;
        construireTableauAlertes(listeAlertesParametre: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteParametre[], listeAlertesSeuil: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteSeuil[], listeAlertesSystematique: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteSystematique[]): void;
        onSelectionChange(selectedObject: Object): void;
        miseEnFormeDonneesPourAffichageAlertes(listeAlertesParametre: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteParametre[], listeAlertesSeuil: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteSeuil[], listeAlertesSystematique: Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteSystematique[], codeActionAbonnement: Enumerations.AlerteBDRCodeActionAbonnementEnum): any[];
        getLibellePeriodicite(codePeriodicite: string): Enumerations.AlerteBDRListes;
        desactiverAlerte(alerte: any): void;
        construireModaleActivationModificationAlerte(url: string, controller: string): ng.ui.bootstrap.IModalSettings;
        ouvrirModaleActivationModificationAlerte(action: any, alerte: any): void;
    }
}

declare module ComposantsCommunsAlerteBDR.Directives {
    function mwListeAlertes(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-erreur-alerte
 * @author S0080162 (François GALOPIN
 */
declare module ComposantsCommunsAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwErreurAlerteControleur {
        static $inject: any[];
        mwErreur: MyWay.Services.Erreur;
        constructor();
    }
}

declare module ComposantsCommunsAlerteBDR.Directives {
    function mwErreurAlerte(): ng.IDirective;
}
