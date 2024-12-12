
declare module myway.trans.offreCommun.editique {
    var app: any;
}

declare module myway.trans.offreCommun.editique.AutorisationCommunicationDonneesBancaires {
    interface IautorisationCommunicationDonneesBancaires {
        blNomTitulaire: AutorisationCommunicationDonneesBancaires.IautorisationCommunicationDonneesBancairesBlNomTitulaire[];
        blNomRepLegal: AutorisationCommunicationDonneesBancaires.IautorisationCommunicationDonneesBancairesBlNomRepLegal[];
        blFaitLe: AutorisationCommunicationDonneesBancaires.IautorisationCommunicationDonneesBancairesBlFaitLe[];
        genericLogoEts: AutorisationCommunicationDonneesBancaires.IgenericLogoEts[];
        genericPiedpageets: AutorisationCommunicationDonneesBancaires.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IautorisationCommunicationDonneesBancairesBlNomTitulaire {
        nomTitulaire: string;
        prenomTitulaire: string;
    }
    interface IautorisationCommunicationDonneesBancairesBlNomRepLegal {
        nomRepresentantLegal: string;
        prenomRepresentantLegal: string;
    }
    interface IautorisationCommunicationDonneesBancairesBlFaitLe {
        dateOuverture: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: AutorisationCommunicationDonneesBancaires.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB10175[];
        b13135: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB13135[];
        b13705: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB13705[];
        b14445: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB14445[];
        b14505: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB14505[];
        b15135: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB15135[];
        b15905: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB15905[];
        b15965: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB15965[];
        b16275: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB16275[];
        b18025: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB18025[];
        b18279: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB18279[];
        b43199: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB43199[];
        b18715: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB18715[];
        b13335: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB13335[];
        b17515: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB17515[];
        b62108: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB62108[];
        b12579: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB12579[];
        b13825: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB13825[];
        b16705: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB16705[];
        b12135: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB12135[];
        b14265: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB14265[];
        b13485: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB13485[];
        b18315: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB18315[];
        b11315: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB11315[];
        b11425: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB11425[];
        b12548: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB12548[];
        b30051: AutorisationCommunicationDonneesBancaires.IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    class AutorisationCommunicationDonneesBancaires implements IautorisationCommunicationDonneesBancaires {
        blNomTitulaire: AutorisationCommunicationDonneesBancaires.IautorisationCommunicationDonneesBancairesBlNomTitulaire[];
        blNomRepLegal: AutorisationCommunicationDonneesBancaires.IautorisationCommunicationDonneesBancairesBlNomRepLegal[];
        blFaitLe: AutorisationCommunicationDonneesBancaires.IautorisationCommunicationDonneesBancairesBlFaitLe[];
        genericLogoEts: AutorisationCommunicationDonneesBancaires.IgenericLogoEts[];
        genericPiedpageets: AutorisationCommunicationDonneesBancaires.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class AutorisationCommunicationDonneesBancairesArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class AutorisationCommunicationDonneesBancairesGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class AutorisationCommunicationDonneesBancairesArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class AutorisationCommunicationDonneesBancairesImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class AutorisationCommunicationDonneesBancairesArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class AutorisationCommunicationDonneesBancairesImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    interface IbordereauDeRetractation {
        genericLogoEts: IgenericLogoEts[];
        corpsDocument: IbordereauDeRetractationCorpsDocument[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IbordereauDeRetractationCorpsDocument {
        blTitre: number;
        blAdresseEnvoie: IbordereauDeRetractationCorpsDocumentBlAdresseEnvoie[];
        blDelai: number;
        blPersMajMinHorsLj: number;
        blPersMinLj: number;
        blAdresse: number;
        blCodPostVille: number;
        blOuvChangOffre: IbordereauDeRetractationCorpsDocumentBlOuvChangOffre[];
        blAvenant: IbordereauDeRetractationCorpsDocumentBlAvenant[];
        blPersMajeur: number;
        blPersMinHorsLj: IbordereauDeRetractationCorpsDocumentBlPersMinHorsLj[];
        blPersMinLj1: number;
        blNumDossier: IbordereauDeRetractationCorpsDocumentBlNumDossier[];
    }
    interface IbordereauDeRetractationCorpsDocumentBlAdresseEnvoie {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        identifiantAdresse: string;
    }
    interface IbordereauDeRetractationCorpsDocumentBlOuvChangOffre {
        nomCaisse: string;
    }
    interface IbordereauDeRetractationCorpsDocumentBlAvenant {
        nomCaisse: string;
    }
    interface IbordereauDeRetractationCorpsDocumentBlPersMinHorsLj {
        civiliteEnfant: string;
        prenomEnfant: string;
        nomEnfant: string;
    }
    interface IbordereauDeRetractationCorpsDocumentBlNumDossier {
        numDossierVente: string;
    }
    interface IgenericPiedpageets {
        b10175: IgenericPiedpageetsB10175[];
        b13135: IgenericPiedpageetsB13135[];
        b13705: IgenericPiedpageetsB13705[];
        b14445: IgenericPiedpageetsB14445[];
        b14505: IgenericPiedpageetsB14505[];
        b15135: IgenericPiedpageetsB15135[];
        b15905: IgenericPiedpageetsB15905[];
        b15965: IgenericPiedpageetsB15965[];
        b16275: IgenericPiedpageetsB16275[];
        b18025: IgenericPiedpageetsB18025[];
        b18279: IgenericPiedpageetsB18279[];
        b43199: IgenericPiedpageetsB43199[];
        b18715: IgenericPiedpageetsB18715[];
        b13335: IgenericPiedpageetsB13335[];
        b17515: IgenericPiedpageetsB17515[];
        b62108: IgenericPiedpageetsB62108[];
        b12579: IgenericPiedpageetsB12579[];
        b13825: IgenericPiedpageetsB13825[];
        b16705: IgenericPiedpageetsB16705[];
        b12135: IgenericPiedpageetsB12135[];
        b14265: IgenericPiedpageetsB14265[];
        b13485: IgenericPiedpageetsB13485[];
        b18315: IgenericPiedpageetsB18315[];
        b11315: IgenericPiedpageetsB11315[];
        b11425: IgenericPiedpageetsB11425[];
        b12548: IgenericPiedpageetsB12548[];
        b30051: IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    class BordereauDeRetractation implements IbordereauDeRetractation {
        genericLogoEts: IgenericLogoEts[];
        corpsDocument: IbordereauDeRetractationCorpsDocument[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class BordereauDeRetractationArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class BordereauDeRetractationGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class BordereauDeRetractationArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class BordereauDeRetractationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class BordereauDeRetractationArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class BordereauDeRetractationImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.modeleCommun {
    class Outils {
        private static CODE_CANAL_TELEPHONE;
        /**
         * Permet de verfier si l'on est en canal telephone
         */
        static isCanalTelephone(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): boolean;
        static getOffre(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): IOffre;
        /**
         * Permet de mapper un objet du panier du contexte editique en objet panier du service rest
         * @param objetPanier
         */
        static mapperObjetPanier(objetPanier: GestionGeneriqueOffres.Types.IContexteProduitService): IProduitPanier;
        /**
         * Permet d'extraire le panier du contexte sous forme de panier REST
         * @param contexteEditique
         */
        static getPanierDuContexteEditique(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): IProduitPanier[];
        /**
         * Methode permettant de transformer un objet Signataire du serivice REST en
         * @param signataire
         */
        private static mapperObjetSignataire(signataire);
        /**
         * Methode permettant de recuperer la liste des sigantaires contenu dans le contexte editique
         * @param contexteEditique
         */
        static getSignatairesDuContexteEditique(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ISignataire[];
        /**
         * Permet de mapper les objets adresses. elle recoit en parametres une adresse d'origine et une de destination
         * elle met toutes les propriétes non null de l'adresse
         * @param objetDestination
         * @param objetOrigine
         * @param proprietesExcluses listes des propriétés que l'on ne veut pas exclure
         */
        static mappeObjetsAdresses(objetDestination: Object, objetOrigine: Object, proprietesExcluses?: string[]): Object;
        /**
         *
         * @param documentAImprimer
         * @param donneesAuthentication
         * @param paramsOptionnels
         * @param paramsGeneration
         */
        static setParamsOptionnelsArchivage(documentAImprimer: IDocumentAImprimer, donneesAuthentication: MyWay.Services.Context.AuthentificationInfo, paramsOptionnels: MyWay.Services.Impression.ParametresGenerationOptionnels, paramsGeneration: MyWay.Services.Impression.ParametresGenerationObligatoires): void;
        /** Alimentation des propriétés d'archivage du document */
        private static setProprietesDocument(documentAImprimer, proprietesDocument);
        /**
         * Permet d'alimenter les paramètres activesX d'impression individuelle
         * @param documentAImprimer
         * @param paramsActiveXIndividuels
         */
        static setParametresActiveXIndividuels(documentAImprimer: modeleCommun.IDocumentAImprimer, paramsActiveXIndividuels: MyWay.Services.Impression.ParametresActiveXIndividuels): void;
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    interface IBordRetracVenteADist {
        offre: modeleCommun.IOffre;
        elementsAEditer: IElementPourEdition;
    }
    interface IElementPourEdition {
        blTitre: string;
        blAdresseEnvoie: IBlAdresseEnvoie;
        blDelai: string;
        blPersMajMinHorsLJ: string;
        blPersMinLJ: string;
        blAdresse: string;
        blCodPostVille: string;
        blOuvChangOffre: IBlOuvChangOffre;
        blAvenant: IBlAvenant;
        blPersMajeur: string;
        blPersMinHorsLJ: IBlPersMinHorsLJ;
        blPersMinLJ1: string;
        blNumDossier: IBlNumDossier;
    }
    interface IBlAdresseEnvoie {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        identifiantAdresse: string;
    }
    interface IBlOuvChangOffre {
        nomOffre: string;
        nomCaisse: string;
    }
    interface IBlAvenant {
        nomCaisse: string;
    }
    interface IBlPersMinHorsLJ {
        civiliteEnfant: string;
        prenomEnfant: string;
        nomEnfant: string;
    }
    interface IBlNumDossier {
        numDossierVente: string;
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    /**
     * Enumération correspondant aux différents blocs à modifier.
     * Ces blocs sont les types tirés de la structure du document GCEDOC et peuvent être amené à changer.
     */
    enum BlocLettreAccompagnement {
        BlAdresseWeb,
        BlAdresse,
        BlReferences,
        BlCivilite,
        BlRemerciementPersMaj,
        BlRemerciementPersMinSsLJ,
        BlRemerciementPersMinAvecLJ,
        BlConfMEGIAvChangementBL,
        BlConfMEGIAvChangementBanca,
        BlConfMEGIOuEpargne,
        BlMEGICartePersMajNonIZI,
        BlMEGICartePersMin,
        BlConfMEGIAssurance,
        BlMEGICartePersMajIZI,
        BlMEGIECarteBleue,
        BlMEGIDirectEcureuil,
        BlEngagMonoDetPersMaj,
        BlEngagMonoDetPersMin,
        BlModalRecepLiasseDom,
        BlModRecLiasAgPerMaj,
        BlModRecLiasAgPerMin,
        BlRenvoiDocDom,
        BlRenvoiDocLJPersMin,
        BlRenvoiDocLGP,
        BlRenvoiPieceJust,
        BlNomPrenom,
        BlPieceJustif,
        BlDefautSignCarteDom,
        BlDefautSignCarteAg,
        BlDefautSignVPCSsLGP,
        BlDefautSignVPCAvLGP,
        BlSignAvDecouvert,
        BlSignAvChequier,
        BlEnvCarteDomPersMaj,
        BlEnvCarteDomPersMin,
        BlEnvCarteDomCaisse,
        BlInfoCarte,
        BlContacter,
        BlSalutation,
        BlAvantSign,
        BlSignCaisse,
        BlLegalAssurance,
        BlNotaBene,
        BlNotaBeneCarte,
        BlApresNotaBene,
        BlMentionLegCaisse,
    }
    interface IOffreLettreAccompagnement extends modeleCommun.IOffre {
        identifiantEDSDomiciliation: number;
    }
    interface ILetVenteADistBancaEp {
        offre: IOffreLettreAccompagnement;
        signataires: modeleCommun.ISignataire[];
        elementsAEditer: IElementAEditer[];
        methodeRestitution: string;
        ancienneOffre: modeleCommun.IAncienneOffre;
        indicateurACDB: boolean;
    }
    interface IInformationAEditer {
        offre: modeleCommun.IOffre;
        signataires: Array<GestionGeneriqueOffres.Types.ISignataire>;
        elementsAEditer: Array<IElementAEditer>;
    }
    interface IElementAEditer {
        contenu: IBlocGenerique;
    }
    interface IBlocGenerique {
        Instance: BlocLettreAccompagnement;
    }
    interface IBlocLettreAccompagnement extends IBlocGenerique {
        map: Object;
    }
}

declare module myway.trans.offreCommun.editique.ListePiecesJustificatives {
    interface IDemPieceJustifVAD {
        recherchePiecePieceJustif: IRecherchePieceJustif;
        elementPourEdition: IElementPourEdition;
    }
    interface IElementPourEdition {
        blTitrePj: IBlTitrePj;
        blIntroPj: IBlIntroPj;
        blCopieDocuments: number;
        blAenvoye: number;
        blPasMsi: IBlPasMsi;
        blMsichoisirObj: IBlMsichoisirObj;
        blMsirepMsgCons: IBlMsirepMsgCons;
        listeBlPersonne: Array<IBlPersonne>;
        blNumeroDossierVente: IBlNumeroDossierVente;
    }
    interface IBlTitrePj {
        libelleActe: string;
    }
    interface IBlIntroPj {
        libelleActe: string;
    }
    interface IBlPersonne {
        civilite: string;
        nom: string;
        prenom: string;
        role: string;
        listeBlPieceJustificative: Array<IBlPieceJustificative>;
    }
    interface IBlPasMsi extends IBlAdresseRetourPieces {
    }
    interface IBlMsichoisirObj extends IBlAdresseRetourPieces {
        objetCaisse: string;
    }
    interface IBlMsirepMsgCons extends IBlAdresseRetourPieces {
    }
    interface IBlNumeroDossierVente {
        numeroDossierVente: string;
    }
    interface IBlPieceJustificative {
        libelle: string;
    }
    interface IBlAdresseRetourPieces {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface IProduitPanierPJ extends modeleCommun.IProduitPanier {
        codeSousFamilleActeComposition: string;
        familleIzicarte: boolean;
    }
    interface IRecherchePieceJustif {
        numeroEntiteTitulaire: number;
        lesProduits: Array<modeleCommun.IProduitPanier>;
        identifiantEDSDomiciliation: number;
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    interface IlettreAccompagnement {
        corpsDocument: IlettreAccompagnementCorpsDocument[];
        genericLogoEtsDate: IgenericLogoEtsDate[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IlettreAccompagnementCorpsDocument {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06 | Ich07 | Ich08 | Ich09 | Ich010 | Ich011 | Ich012 | Ich013 | Ich014 | Ich015 | Ich016 | Ich017 | Ich018 | Ich019 | Ich020 | Ich021 | Ich022 | Ich023 | Ich024 | Ich025 | Ich026 | Ich027 | Ich028 | Ich029 | Ich030 | Ich031 | Ich032 | Ich033 | Ich034 | Ich035 | Ich036 | Ich037 | Ich038 | Ich039 | Ich040 | Ich041 | Ich042 | Ich043 | Ich044)[];
    }
    interface Ich00 {
        blAdresseWebCe: IlettreAccompagnementCorpsDocumentBlAdresseWebCe;
    }
    interface Ich01 {
        genericAdresseDestArial: IgenericAdresseDestArial;
    }
    interface Ich02 {
        blReferences: IblReferences;
    }
    interface Ich03 {
        blCivilite: IblCivilite;
    }
    interface Ich04 {
        blRemerciementPersMaj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMaj;
    }
    interface Ich05 {
        blRemerciementPersMinSsLj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLj;
    }
    interface Ich06 {
        blRemerciementPersMinAvecLj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLj;
    }
    interface Ich07 {
        blConfMegiavChangementBl: IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBl;
    }
    interface Ich08 {
        blConfMegiavChangementBanca: IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBanca;
    }
    interface Ich09 {
        blConfMegiouEpargne: IlettreAccompagnementCorpsDocumentBlConfMegiouEpargne;
    }
    interface Ich010 {
        blMegicartePersMajNonIzi: IlettreAccompagnementCorpsDocumentBlMegicartePersMajNonIzi;
    }
    interface Ich011 {
        blMegicartePersMin: IlettreAccompagnementCorpsDocumentBlMegicartePersMin;
    }
    interface Ich012 {
        blConfMegiassurance: number;
    }
    interface Ich013 {
        blMegicartePersMajIzi: number;
    }
    interface Ich014 {
        blMegiecarteBleue: number;
    }
    interface Ich015 {
        blMegidirectEcureuil: number;
    }
    interface Ich016 {
        blEngagMonoDetPersMaj: number;
    }
    interface Ich017 {
        blEngagMonoDetPersMin: IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin;
    }
    interface Ich018 {
        blModalRecepLiasseDom: IlettreAccompagnementCorpsDocumentBlModalRecepLiasseDom;
    }
    interface Ich019 {
        blModRecLiasAgPerMaj: IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj;
    }
    interface Ich020 {
        blModRecLiasAgPerMin: IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin;
    }
    interface Ich021 {
        blRenvoiDocDom: IlettreAccompagnementCorpsDocumentBlRenvoiDocDom;
    }
    interface Ich022 {
        blRenvoiDocLjpersMin: IlettreAccompagnementCorpsDocumentBlRenvoiDocLjpersMin;
    }
    interface Ich023 {
        blRenvoiDocLgp: IlettreAccompagnementCorpsDocumentBlRenvoiDocLgp;
    }
    interface Ich024 {
        blRenvoiPieceJust: number;
    }
    interface Ich025 {
        blNomPrenom: IlettreAccompagnementCorpsDocumentBlNomPrenom;
    }
    interface Ich026 {
        blPieceJustif: IlettreAccompagnementCorpsDocumentBlPieceJustif;
    }
    interface Ich027 {
        blDefautSignCarteDom: IlettreAccompagnementCorpsDocumentBlDefautSignCarteDom;
    }
    interface Ich028 {
        blDefautSignCarteAg: IlettreAccompagnementCorpsDocumentBlDefautSignCarteAg;
    }
    interface Ich029 {
        blDefautSignVpcssLgp: IlettreAccompagnementCorpsDocumentBlDefautSignVpcssLgp;
    }
    interface Ich030 {
        blDefautSignVpcavLgp: number;
    }
    interface Ich031 {
        blSignAvDecouvert: number;
    }
    interface Ich032 {
        blSignAvChequier: number;
    }
    interface Ich033 {
        blEnvCarteDomPersMaj: IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj;
    }
    interface Ich034 {
        blEnvCarteDomPersMin: IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin;
    }
    interface Ich035 {
        blEnvCarteDomCaisse: IlettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse;
    }
    interface Ich036 {
        blInfoCarte: IlettreAccompagnementCorpsDocumentBlInfoCarte;
    }
    interface Ich037 {
        blContacter: IblContacter;
    }
    interface Ich038 {
        blSalutation: IblSalutation;
    }
    interface Ich039 {
        blAvantSign: IblAvantSign;
    }
    interface Ich040 {
        blSignCaisse: IblSignCaisse;
    }
    interface Ich041 {
        blLegalAssurance: number;
    }
    interface Ich042 {
        blNotaBene: IlettreAccompagnementCorpsDocumentBlNotaBene;
    }
    interface Ich043 {
        blNotaBeneCarte: number;
    }
    interface Ich044 {
        blApresNotaBene: IblApresNotaBene;
    }
    interface IgenericLogoEtsDate {
        logoEtablissement: IgenericLogoEtsDateLogoEtablissement;
        date: string;
    }
    interface IgenericLogoEtsDateLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: IgenericPiedpageetsB10175[];
        b13135: IgenericPiedpageetsB13135[];
        b13705: IgenericPiedpageetsB13705[];
        b14445: IgenericPiedpageetsB14445[];
        b14505: IgenericPiedpageetsB14505[];
        b15135: IgenericPiedpageetsB15135[];
        b15905: IgenericPiedpageetsB15905[];
        b15965: IgenericPiedpageetsB15965[];
        b16275: IgenericPiedpageetsB16275[];
        b18025: IgenericPiedpageetsB18025[];
        b18279: IgenericPiedpageetsB18279[];
        b43199: IgenericPiedpageetsB43199[];
        b18715: IgenericPiedpageetsB18715[];
        b13335: IgenericPiedpageetsB13335[];
        b17515: IgenericPiedpageetsB17515[];
        b62108: IgenericPiedpageetsB62108[];
        b12579: IgenericPiedpageetsB12579[];
        b13825: IgenericPiedpageetsB13825[];
        b16705: IgenericPiedpageetsB16705[];
        b12135: IgenericPiedpageetsB12135[];
        b14265: IgenericPiedpageetsB14265[];
        b13485: IgenericPiedpageetsB13485[];
        b18315: IgenericPiedpageetsB18315[];
        b11315: IgenericPiedpageetsB11315[];
        b11425: IgenericPiedpageetsB11425[];
        b12548: IgenericPiedpageetsB12548[];
        b30051: IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlAdresseWebCe {
        adresseWebCe: string;
    }
    interface IblApresNotaBene {
        libelle: string;
    }
    interface IblSignCaisse {
        denoSignataire: string;
        nomConseiller: string;
    }
    interface IblAvantSign {
        libelle: string;
    }
    interface IblSalutation {
        civilite: string;
    }
    interface IblContacter {
        libelle: string;
    }
    interface IblCivilite {
        civilite: string;
    }
    interface IblReferences {
        numDossierVente: string;
        idClient: string;
    }
    interface IgenericAdresseDestArial {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBanca {
        souscriptionModification: string;
        nomOffreProduit: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBl {
        souscriptionModification: string;
        nomOffreProduit: string;
        prixBouql: string;
        indicateurAssurrance: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlConfMegiouEpargne {
        nomOffreProduit: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignCarteAg {
        souscriptionContrat: string;
        sousModAvenant: string;
        clotureSansFrai: string;
        resiliationSansFrai: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignCarteDom {
        souscriptionContrat: string;
        souscriptionAvenant: string;
        modificationContrat: string;
        clotureSansFrai: string;
        resiliationSansFrai: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlDefautSignVpcssLgp {
        souscriptionContrat: string;
        sousModAvenant: string;
        modificationContrat: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse {
        libelle: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj {
        cpSigne: string;
        avSigne: string;
        presenceAssurance: string;
        presenceIzicarte: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin {
        cpSigne: string;
        avSigne: string;
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlInfoCarte {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlMegicartePersMajNonIzi {
        typeCarte: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlMegicartePersMin {
        typeCarte: string;
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj {
        cpAvContrat: string;
        presenceAssurance: string;
        conditionTarifaire: string;
        presenceCarte: string;
        cpAvContratDeux: string;
        presenceAssuranceDeux: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin {
        cpAvContrat: string;
        conditionTarifaire: string;
        presenceCarte: string;
        civilite: string;
        prenom: string;
        nom: string;
        cpAvContratDeux: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlModalRecepLiasseDom {
        exemplaireDocument: string;
        nomOffre: string;
        indicateurPresenceAssurance: string;
        indicateurEcheancier: string;
        indicateurBordereau: string;
        indicateurAcdb: string;
        indicateurSepa: string;
        conditionTarifaire: string;
        indicateurCarteIziouNonIzi: string;
        indicateurBordereauRetractation: string;
        point: string;
        messageIndicateurCarteIzi: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlNomPrenom {
        prenom: string;
        nom: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlNotaBene {
        cpSigne: string;
        signRenvCp: string;
        signAv: string;
        conditionParticuliere: string;
        avenant: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlPieceJustif {
        pieceJustif: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRemerciementPersMaj {
        dateAppel: string;
        souscription: string;
        nomOffreProduit: string;
        rappelConditionsParticulieres: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLj {
        dateAppel: string;
        civilite: string;
        prenom: string;
        nom: string;
        souscription: string;
        nomOffreProduit: string;
        rappelConditionsParticulieres: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLj {
        dateAppel: string;
        souscription: string;
        nomOffreProduit: string;
        civilite: string;
        prenom: string;
        nom: string;
        rappelConditionsParticulieres: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocDom {
        cpAv: string;
        indicateurAcdb: string;
        presenceCarteIzi: string;
        presenceAssurance: string;
        paiementCheque: string;
        ceNb: string;
        adresseSuivante: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocLgp {
        processVente: string;
        presenceCheque: string;
        adresseSuivante: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocLjpersMin {
        civilite: string;
        prenom: string;
        nom: string;
        processVente: string;
        presenceCheque: string;
        ceNb: string;
        adresseSuivante: string;
        libelleCaisse: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
    }
    class LettreAccompagnement implements IlettreAccompagnement {
        corpsDocument: IlettreAccompagnementCorpsDocument[];
        genericLogoEtsDate: IgenericLogoEtsDate[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class LettreAccompagnementArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.ListePiecesJustificatives {
    interface IlistePiecesJustificatives {
        piecesJustificativesCorpsDocument: IlistePiecesJustificativesPiecesJustificativesCorpsDocument[];
        genericLogoEts: IgenericLogoEts[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocument {
        blTitrePj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj[];
        blIntroPj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj[];
        blCopieDocuments: number;
        blPersonne: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne[];
        blAenvoye: number;
        blPasMsi: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi[];
        blMsichoisirObj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj[];
        blMsirepMsgCons: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons[];
        blNumeroDossierVente: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlNumeroDossierVente[];
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj {
        libelleActe: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj {
        libelleActe: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne {
        civilite: string;
        nom: string;
        prenom: string;
        role: string;
        blPieceJustificative: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonneBlPieceJustificative[];
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonneBlPieceJustificative {
        libelle: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
        objetCaisse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlNumeroDossierVente {
        numeroDossierVente: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: IgenericPiedpageetsB10175[];
        b13135: IgenericPiedpageetsB13135[];
        b13705: IgenericPiedpageetsB13705[];
        b14445: IgenericPiedpageetsB14445[];
        b14505: IgenericPiedpageetsB14505[];
        b15135: IgenericPiedpageetsB15135[];
        b15905: IgenericPiedpageetsB15905[];
        b15965: IgenericPiedpageetsB15965[];
        b16275: IgenericPiedpageetsB16275[];
        b18025: IgenericPiedpageetsB18025[];
        b18279: IgenericPiedpageetsB18279[];
        b43199: IgenericPiedpageetsB43199[];
        b18715: IgenericPiedpageetsB18715[];
        b13335: IgenericPiedpageetsB13335[];
        b17515: IgenericPiedpageetsB17515[];
        b62108: IgenericPiedpageetsB62108[];
        b12579: IgenericPiedpageetsB12579[];
        b13825: IgenericPiedpageetsB13825[];
        b16705: IgenericPiedpageetsB16705[];
        b12135: IgenericPiedpageetsB12135[];
        b14265: IgenericPiedpageetsB14265[];
        b13485: IgenericPiedpageetsB13485[];
        b18315: IgenericPiedpageetsB18315[];
        b11315: IgenericPiedpageetsB11315[];
        b11425: IgenericPiedpageetsB11425[];
        b12548: IgenericPiedpageetsB12548[];
        b30051: IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    class ListePiecesJustificatives implements IlistePiecesJustificatives {
        piecesJustificativesCorpsDocument: IlistePiecesJustificativesPiecesJustificativesCorpsDocument[];
        genericLogoEts: IgenericLogoEts[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class ListePiecesJustificativesArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ListePiecesJustificativesArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ListePiecesJustificativesImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.modeleCommun {
    class CodeTypeDocument {
        static LA04: string;
        static BORE: string;
        static PJVM: string;
        static LA00: string;
        static LA01: string;
        static LAGP: string;
        static LAGF: string;
        static LALI: string;
        static LA05: string;
        static LA06: string;
        static LA10: string;
        static LA11: string;
        static LA16: string;
        static LAQA: string;
        static LAOP: string;
        static ACDB: string;
        static DO04: string;
    }
    interface IDocumentAGenerer {
        identifiant: string;
        document: IDocument | any;
        libelleDocument: string;
        parametres: IParametres;
        parametresActiveX?: MyWay.Services.Impression.ParametresActiveXIndividuels;
    }
    interface IParametresEntete {
        autentification: MyWay.Services.Context.AuthentificationInfo;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        numRefDoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IDocument {
    }
    interface IParametres {
    }
    interface IDocumentAImprimer {
        codeTypeDocument: string;
        codeNatureGED: string;
        isNonMaterialisation: boolean;
        codeTypeAttributaire: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleDocument: string;
        minimumExemplaires: number;
        maximumExemplaires: number;
        nbParDefautExemplaires: number;
    }
    interface ILoader {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<any>;
    }
    interface IOffre {
        numeroOffreSouscrite: number;
        codeActeGestion: string;
        codeCanal: string;
        codeProduitServiceOffre: number;
        codeEtablissement: string;
        libelleProduitService: string;
        libelleLongProduitService: string;
        numeroEntiteTitulaire: number;
        lesProduits: Array<IProduitPanier>;
        dateOuvertureOffre: Date;
        dateDernierAvenantOffre: Date;
        codeGuichetInterbancaire: string;
        codeTypeCompte: string;
        numeroDeCompte: string;
        indicValidationOuvertureOffre: string;
        typeOffre: string;
        libelleEntiteTitulaire: string;
        numeroPersonneIdentifiee: number;
        codeCaractereSignature: string;
        codeModeDeVente: string;
        prixMensuel: number;
        codeFamilleGestProduitService: string;
    }
    interface IProduitPanier {
        numeroSequenceOuverture: number;
        identifiantProduitService: number;
        dateIntroductionProduitServiceDansOffre: Date;
        dateDernierAvenantProduitServiceDansOffre: Date;
        libelleProduitService: string;
        libelleLongProduitService: string;
        identifiantProduitServiceSupport: number;
        codeModaliteDetentionProduitService: string;
        codeAffichageReferenceProduitService: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        numeroOffreSouscriteOrigine: number;
        etatDuProduit: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        codeDeviseProduit: string;
        typeProduitServiceAssurance: string;
        idProducteur: string;
    }
    interface IAncienneOffre {
        codeActeGestion: string;
        codeCanal: string;
        codeProduitServiceOffre: number;
        codeEtablissement: string;
        libelleProduitService: string;
        libelleLongProduitService: string;
        numeroEntiteTitulaire: number;
        dateOuvertureOffre: Date;
        dateDernierAvenantOffre: Date;
        codeGuichetInterbancaire: string;
        codeTypeCompte: string;
        numeroDeCompte: string;
        indicValidationOuvertureOffre: string;
        typeOffre: string;
        libelleEntiteTitulaire: string;
        numeroPersonneIdentifiee: number;
        ancienNumeroOffreSouscrite: number;
        lesAnciensProduits: Array<IProduitPanier>;
    }
    interface ISignataire {
        numeroPersonne: string;
        designataire: string;
        nom: string;
    }
}

declare module myway.trans.offreCommun.editique.PreContratVPC {
    interface IBloc extends IBlocGenerique {
        map: Object;
    }
    interface IBlocGenericInfoPp extends IBloc {
        map: {
            roleEtPersonnes: IRoleEtPersonne[];
        };
    }
    interface IRoleEtPersonne {
        leRole: {
            ELEMENT: string;
            LIB_CTDHLI: string;
        };
        lesPersonnes: {
            ELEMENT: string;
            numeroPersonne: number;
            infosPersonne: any;
        }[];
    }
    interface IBlocGenericTitreDocument extends IBloc {
        map: {
            TITRE_DOCUMENT: string;
        };
    }
    interface IBlocPhraseIntroLivretA extends IBloc {
        map: {
            NUM_PERSONNE: string;
            PRENOM: string;
            LIB_ALAAU_ETB_1: string;
            NOM: string;
            CIVILITE: string;
        };
    }
    interface IBlocBlMineur extends IBloc {
        map: {
            LIB_AUTO: string;
        };
    }
    interface IBlocBlPrdReleve extends IBloc {
        map: {
            PERIODICITE: string;
            FORMAT_RLV: string;
        };
    }
    interface IBlocBlPrdReleveMyway extends IBloc {
        map: {
            PERIODICITE: string;
            FORMAT_RLV: string;
            JOUR: string;
        };
    }
    interface IBlocBlVersementEpargne extends IBloc {
        map: {
            MONTANT_VERSEMENT_INITIAL: string;
            DEVISE: string;
        };
    }
    interface IBlocBlEpargne extends IBloc {
        map: {
            NOM_PRODUIT: string;
            CIVILITE: string;
            NOM: string;
            PRENOM: string;
            MONTANT_VERSEMENT_INITIAL: string;
            DEVISE: string;
        };
    }
    interface IBlocBlModeCheque extends IBloc {
        map: {
            LIB_LALE_ETS: string;
            MONTANT: string;
            DEVISE: string;
        };
    }
    interface IBlocBlVersementRegulier extends IBloc {
        map: {
            PERIODICITE: string;
            MONTANT: string;
            DEVISE: string;
            RICE_PRELEVEMENT: string;
            JOUR: string;
        };
    }
    interface IBlocVersementEpargne extends IBloc {
        map: {
            MONTANT_VERSEMENT_INITIAL: string;
            DEVISE: string;
        };
    }
    interface IBlocLivretPartage extends IBloc {
        map: {
            ORGANISME_PARTAGE: string;
            TAUX_PARTAGE: string;
            NOM_PRODUIT: string;
            LIB_ALAAU_ETS1: string;
        };
    }
    interface IBlocTauxNet extends IBloc {
        map: {
            TAUX: string;
        };
    }
    interface IBlocTauxBrut extends IBloc {
        map: {
            TAUX: string;
        };
    }
    interface IBlocTauxBrutPalier extends IBloc {
        map: {
            TAUX_P1: string;
            MT_LIMITE1: string;
            TAUX_P2: string;
            MT_LIMITE2: string;
        };
    }
    interface IBlocLivretTracable extends IBloc {
        map: {
            NOM_PRODUIT: string;
            LIBELLE_DOMAINE: string;
            SECTEUR_OU_DOMAINE: string;
        };
    }
    interface IBlocBlModeVirementInterne extends IBloc {
        map: {
            RICE_VERSEMENT_INITIAL: string;
        };
    }
    interface IBlocBlEpargneModeVirementInterne extends IBloc {
        map: {
            NUMERO_RICE_PRELEVEMENT: string;
            LIB_LALE_ETS: string;
        };
    }
    interface IBlocVpcExecutionImmediate extends IBloc {
        map: {
            NOM_PRODUIT: string;
            NOM_OFFRE: string;
        };
    }
    interface IBlocVpcExecutionNonImmediate extends IBloc {
        map: {
            NOM_PRODUIT: string;
            NOM_OFFRE: string;
        };
    }
    interface IBlocValeursMinimum extends IBloc {
        map: {
            SOLDE_MINI: string;
            MT_MINI_RETRAIT: string;
            MT_MINI_VERSEMENT_ULTERIEURS: string;
            MT_MINI_VERSEMENT_INITIAL: string;
            LEGAL: string;
            PLAFOND: string;
        };
    }
    interface IBlocValeursOption extends IBloc {
        map: {
            SOLDE_MINI: string;
            MT_MINI_RETRAIT: string;
            TAUX: string;
            MT_MINI_VERSEMENT_ULTERIEURS: string;
            MT_MINI_VERSEMENT_INITIAL: string;
            DEVISE: string;
        };
    }
    interface IBlocRefusCommunicationFicobako extends IBloc {
        map: {
            LIB_ALAAU_ETS_1: string;
        };
    }
    interface IBlocAcceptCommunicationFicobako extends IBloc {
        map: {
            LIB_ALAAU_ETS_1: string;
            LIB_LALE_ETS_2: string;
            LIB_ALAAU_ETS_3: string;
            LIB_LALE_ETS_1: string;
        };
    }
    interface IBlocBlMsPdp extends IBloc {
        map: {
            LIB_ALAAU_ETS_1: string;
            LIB_LALE_ETS_2: string;
            LIB_LALE_ETS_3: string;
            LIB_LALE_ETS_1: string;
            LIB_DELADU_ETS_1: string;
        };
    }
    interface IBlocBlMsPdpCe extends IBloc {
        map: {
            LIB_ALAAU_ETS_1: string;
            E_1: string;
            LIB_LALE_ETS_2: string;
            LIB_LALE_ETS_3: string;
            E_2: string;
            LIB_LALE_ETS_1: string;
            E_3: string;
            LIB_DELADU_ETS_1: string;
        };
    }
    interface IBlocBlMsDemarchageVpc extends IBloc {
        map: {
            LIB_ALAAU_ETS: string;
            LIB_LALE_ETS: string;
            LIB_LALE_ETS_1: string;
            LIB_DELADU_ETS_1: string;
            LIB_DELADU_ETS_2: string;
        };
    }
    interface IBlocBlMsDemarchageFaf extends IBloc {
        map: {
            LIB_ALAAU_ETS: string;
            LIB_LALE_ETS: string;
            LIB_DELADU_ETS_1: string;
            LIB_DELADU_ETS_2: string;
        };
    }
    interface IBlocCertifStdEpargneDyn extends IBloc {
        map: {
            ENGAGEMENT: string;
            LIB_DELADU_ETS: string;
            SIGNATAIRE: string;
            PRONOM_PERSONNEL: string;
            SIGNATAIRE_1: string;
            SA_LEUR: string;
            LIB_LALE_ETS: string;
            LIB_OFFRE: string;
            LIB_LALE_ETS_1: string;
            LIB_DELADU_ETS_1: string;
        };
    }
    interface IBlocCertifStdEpargne extends IBloc {
        map: {
            specifiqueLep: IBlocCertifStdEpargneSpecifiqueLep;
            specifiqueLj: IBlocCertifStdEpargneSpecifiqueLj;
            specifiqueLdd: IBlocCertifStdEpargneSpecifiqueLdd;
            specifiquecel: IBlocCertifStdEpargneSpecifiqueCel;
            SIGNATAIRE_2: string;
            NOM_PRODUIT_2: string;
            LIB_LALE_ETS_1: string;
            LIB_DELADU_ETS_1: string;
            LIB_DELADU_ETS_2: string;
            specifiqueModifDomiciliation: IBlocCertifStdEpargneSpecifiqueModifDomiciliation;
            specifiqueModif: IBlocCertifStdEpargneSpecifiqueModif;
        };
    }
    interface IBlocCertifStdEpargneSpecifiqueLep extends IBloc {
        map: {
            SIGNATAIRE_1: string;
            DETENTION: string;
        };
    }
    interface IBlocCertifStdEpargneSpecifiqueLj extends IBloc {
        map: {
            SIGNATAIRE_1: string;
            DETENTION: string;
            NOM_PRODUIT_1: string;
        };
    }
    interface IBlocCertifStdEpargneSpecifiqueLdd extends IBloc {
        map: {
            SIGNATAIRE_1: string;
            DETENTION: string;
            NOM_PRODUIT_1: string;
        };
    }
    interface IBlocCertifStdEpargneSpecifiqueCel extends IBloc {
        map: {
            SIGNATAIRE_1: string;
            DETENTION: string;
            D_UN: string;
            AU_NOM_DE: string;
        };
    }
    interface IBlocCertifStdEpargneSpecifiqueModifDomiciliation extends IBloc {
        map: {
            SIGNATAIRE_3: string;
            LIB_LALE_ETS_2: string;
            ETAT_CIVIL: string;
        };
    }
    interface IBlocCertifStdEpargneSpecifiqueModif extends IBloc {
        map: {
            SIGNATAIRE_3: string;
            ENGAGEMENT: string;
            LIB_DELADU_ETS_2: string;
        };
    }
    interface IBlocCertifStdEpargne1012 extends IBloc {
        map: {
            LIB_LALE_ETS_1: string;
            LIB_LALE_ETS_2: string;
            LIB_DELADU_ETS_1: string;
            LIB_DELADU_ETS_2: string;
        };
    }
    interface IBlocSignatureFF extends IBloc {
        map: {
            LIB_DELADU_ETS: string;
            PRENOM_NOM_AGENT: string;
            FONCTION_CONSEILLER: string;
            LIB_NOM_AUTRE: string;
        };
    }
    interface IBlocSignatureVPC extends IBloc {
        map: {
            LIB_DELADU_ETS: string;
            LIB_LALE_ETS: string;
            PRENOM_NOM_AGENT: string;
            FONCTION_CONSEILLER: string;
            DATE_SIGNATURE: string;
        };
    }
    interface IBlocPrdCdd extends IBloc {
        map: {
            CIVILITE: string;
            NOM_PRENOM: string;
            COTITULAIRE: {
                CIVILITE: string;
                NOM_PRENOM: string;
            };
            COMPTE_SIMPLE: number;
            COMPTE_JOINT: number;
            DEVISE: string;
            VERSEMENT_EER_WEB: {
                MONTANT_VERSEMENT_INITIAL: string;
            };
            LIB_LALE_ETS: string;
            ETAB: string;
            CDD_TRACABLE: {
                NOM_PRODUIT: string;
                LIBELLE_DOMAINE: string;
                SECTEUR_OU_DOMAINE: string;
            };
        };
    }
    interface IBlocPrdRelevecompte extends IBloc {
        map: {
            PERIODICITE: string;
            FORMAT_RLV: string;
        };
    }
    interface IBlocPrdDemandeServiceBienvenue extends IBloc {
        map: {
            NOM_SERVICE_FIXE: number;
            NOM_SERVICE_DYNAMIQUE: {
                NOM: string;
            };
            LIB_LALE_ETS: string;
        };
    }
    interface IBlocPrdRefusServiceBienvenue extends IBloc {
        map: {
            NOM_SERVICE_FIXE: number;
            NOM_SERVICE_DYNAMIQUE: {
                NOM: string;
            };
        };
    }
    interface IBlocPrdCarte extends IBloc {
        map: {
            CIVILITE: string;
            NOM_PRENOM: string;
            CARTE: string;
            LIGNE_PLAFOND: {
                LIBELLE_PLAFOND: string;
                MONTANT_PLAFOND: string;
                NB_JOURS: string;
                LIBELLE_JOURS_MULTIPLE: number;
                LIBELLE_JOURS_UNITAIRE: number;
            };
            COND_DEBIT_DIFF: number;
            CARTE_AGIR: {
                NOM_ASSOCIATION: string;
                MONTANT_DON: string;
            };
        };
    }
    interface IBlocPrdAlertesms extends IBloc {
        map: {
            NOM_SERVICE_FIXE: number;
            NOM_SERVICE_DYNAMIQUE: {
                NOM: string;
            };
            CIVILITE: string;
            NOM_PRENOM: string;
            LIGNE_FACTURATION: number;
            DECLARATION_CG_ALERTE_SMS: {
                NOM_SERVICE_FIXE: number;
                NOM_SERVICE_DYNAMIQUE: {
                    NOM: string;
                };
                URL_ETS: string;
            };
        };
    }
    interface IBlocPrdSolsms extends IBloc {
        map: {
            NOM_SERVICE_FIXE: number;
            NOM_SERVICE_DYNAMIQUE: {
                NOM: string;
            };
            CIVILITE: string;
            NOM_PRENOM: string;
            DECLARATION_CG_SOL_SMS: {
                NOM_SERVICE_FIXE: number;
                NOM_SERVICE_DYNAMIQUE: {
                    NOM: string;
                };
                URL_ETS: string;
            };
        };
    }
    interface IBlocPrdBad extends IBloc {
        map: {
            CIVILITE: string;
            NOM_PRENOM: string;
        };
    }
}

declare module myway.trans.offreCommun.editique.PreContratVPC {
    interface IPreContratVPC {
        offre: IOffre;
        signataires: Array<ISignataire>;
        elementsAEditer: Array<IElementAEditer>;
    }
    interface IProduitPanier {
        numeroSequenceOuverture: number;
        identifiantProduitService: number;
        libelleProduitService: string;
        libelleLongProduitService: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        numeroOffreSouscriteOrigine: number;
        etatDuProduit: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        codeDeviseProduit: string;
        idProducteur: string;
        typeProduitServiceAssurance: string;
        dateIntroductionPSDansOffre: string;
        dateDernierAvenantPSDansOffre: string;
        identifiantPSSupport: number;
        codeModaliteDetentionPS: string;
        codeAffichageReferencePS: string;
    }
    interface IOffre {
        numeroOffreSouscrite: number;
        codeActeGestion: string;
        codeCanal: string;
        codeProduitServiceOffre: number;
        codeEtablissement: string;
        libelleProduitService: string;
        libelleLongProduitService: string;
        numeroEntiteTitulaire: number;
        lesProduits: Array<IProduitPanier>;
        dateOuvertureOffre: string;
        dateDernierAvenantOffre: string;
        codeGuichetInterbancaire: string;
        codeTypeCompte: string;
        numeroDeCompte: string;
        indicValidationOuvertureOffre: string;
        typeOffre: string;
        libelleEntiteTitulaire: string;
        numeroPersonneIdentifiee: number;
        codeCaractereSignature: string;
        codeModeDeVente: string;
        prixMensuel: number;
        codeFamilleGestProduitService: string;
    }
    interface IBlocGenerique {
        instance: string;
    }
    interface IBlocMap {
    }
    interface IElementAEditer {
        contenu: IBlocGenerique;
        typeElement: string;
    }
    interface ISignataire {
        numeroPersonne: string;
        designataire: string;
        nom: string;
    }
    interface IDCSD3T {
        codeRetour: number;
        codeEtab: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        codeResponsableCompte: string;
        rangEtatCivil: string;
        edsDomiciliation: string;
        id: string;
        nomUsage: string;
        prenom: string;
        dateNaissance: string;
        localiteInsee: string;
        libelleNationalite: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        civilite: string;
        situationFamille: string;
        codeType: string;
        codeFamille: string;
        referencePieceJustificative: string;
        codeInseelocalite: string;
        codeResident: string;
        numeroTelephoneDomicile: string;
        codeAppartenanceReseau: string;
        codePays: string;
        codeIsoPays: string;
        codePostal: string;
        sexe: string;
        codeAgentEconomique: string;
        nomEmployeur: string;
        dateEmbauche: string;
        codePaysNaissance: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeCategorieJuridique: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        rangPersonne: string;
        codePaysIsoA: string;
        codePaysIsoB: string;
        identifiantBad: string;
        noIdentificationFiscaleNifNni: string;
        codePaysNaissanceIso31661: string;
        libelleCommune: string;
        codeCommuneNaissance: string;
        designationCourte: string;
        dateDeces: string;
        codeClientTiers: string;
        nombreEnfantACharge: number;
        numeroTelephoneEnrolement: string;
        adresseEMail: string;
        typeMandat: string;
        codeRegimeMatrimonial: string;
        codePaysIso31661Alpha2: string;
        codePaysIso31661Alpha21: string;
        codePostalFranceEtranger: string;
    }
    interface IDCSD3U {
        codeRetour: number;
        codeEtab: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        codeResponsableCompte: string;
        rangEtatCivil: string;
        edsDomiciliation: string;
        raisonSocial: string;
        dateCreationJuridique: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        codePostal: string;
        codePays: string;
        codeIsoPays: string;
        codeAgentEconomique: string;
        codeCategorieJuridique: string;
        sigle: string;
        designationEntiteTitulaire: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeResident: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeAppartenanceReseau: string;
        nomCommercial: string;
        typeDesignationPersonne: string;
        codeCategoJuridi2DerCaracteres: string;
        rangPersonne: string;
        codePaysIsoA: string;
        codeType: string;
        codeFamille: string;
        identifiantBad: string;
    }
    interface IDCSD3W {
        codeAgent: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        codeEtab: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompte: string;
        indicRechercheUtilisateursBad: string;
    }
    interface IContainer {
        segmentDCSD3T: Array<IDCSD3T>;
        segmentDCSD3U: Array<IDCSD3U>;
        segmentDCSU3J: Array<IDCSU3J>;
    }
    interface IDCSU3J {
        codeRetour: number;
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        designationBancaireCourte: string;
        codeTypeDesignationBancaire: string;
        designationBancaireCourte1: string;
        codeTypeDesignationBancaire1: string;
        designationBancaireCourte2: string;
        codeTypeDesignationBancaire2: string;
        designationBancaireCourte3: string;
        codeTypeDesignationBancaire3: string;
        designationBancaireCourte4: string;
        codeTypeDesignationBancaire4: string;
        idtElementStructure: number;
        libelleElementStructure: string;
        complementDesignationBancaire: string;
        alphanumeriqueBanalisee032: string;
        codeEtatPersonne: string;
        dateClotureEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        codeTypeElementStructure: string;
        codeEntiteAdministrative: string;
        idtEdsContact: number;
        codeTypeElementStructure1: string;
        codeEntiteAdministrative1: string;
        libelleEDS: string;
        identifiantElementStructure: number;
        edsDomiciliation: number;
        typeEDS: string;
        libelleCourtEDS: string;
        libelleEDS1: string;
        codeAgent: number;
        libelleFonction: string;
        idEdsInterne: number;
        referenceExterneEDSNiveau1: number;
        typeElementStructure: string;
        libelleCalculeCourtEds: string;
        referenceExterneAgent: number;
        libelleFonctionPosteFonctionnel: string;
        codeCotationBancaire: string;
        sousCodeModeCompositionET: string;
        indicAutorFatcaOuverturePs: string;
        refExterneElementStructure: number;
        refInterneElementStructure: number;
        libEDSDomiciliationET: string;
        designLongueElementStructure: string;
    }
}

declare module myway.trans.offreCommun.editique {
    class IdentificationTiers {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    class CaracteristiqueTiers {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: Date;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
        codePersonnaliteJuridique: string;
    }
    class InformationParticulier {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        id: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: Date;
        codeAppartenanceReseau: string;
        libelleAppartenanceReseau: string;
        indicSocietaire: string;
        codeCapaciteJuridique: string;
        libelleCapaciteJuridique: string;
        codePaysNaissance: string;
        libellePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleDoubleNationalitePays: string;
        situationFamille: string;
        libelleCodeSituationFamiliale: string;
        dateEffetSituationFamille: Date;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: Date;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: Date;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: Date;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeResident: string;
        identiteRelationEcoMenage: number;
        referenceExterneEds: number;
        typeClauseMatrimoniale: string;
        codeDonationEntreEpoux: string;
        indicateurAutoEntrepreneur: string;
        autresPrenomsEtatCivil: string;
        indicDomiciliationRevenus: string;
        indicEnregHorsPresenceClient: string;
        libelleProfessionParticulier: string;
        codeTypeSecteurEmploi: string;
        indicateurEnvoiCourrier: string;
        codePieceJustificative: string;
        dateObtentionPieceJustificative: Date;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: Date;
        dateNaissanceConjoint: Date;
        indicDecesPresume: string;
        dateDecesPresume: Date;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: Date;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: Date;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
    }
    class InformationProfessionnel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroSiren: string;
        codeTypeNifNni: string;
        libelleCodeTypeNifNni: string;
        noIdentificationFiscaleNifNni: string;
        nomCommercial: string;
        raisonSocial: string;
        codeSituationJuridique: string;
        libelleSituationJuridiqueProf: string;
        codeINSEE: string;
        libelleCategorieJuridiqueInsee: string;
        dateCreationJuridique: Date;
        codeNafInsee: string;
        libelleEtablissement: string;
        codeRegimeFiscal: string;
        libelleCodeRegimeFiscal: string;
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        dateArreteComptable: number;
        idEdsInterne: number;
        activiteEconomiqueReelleProf: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeDevise: string;
        codeAppartenanceReseau: string;
        codeAgentEconomique: string;
        codeTypeCommerceOrganise: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        referencePieceJustificativeProf: string;
        codeCotation: string;
        edsDomiciliation: number;
        sigle: string;
        codeTypeTiers: string;
        effectif: number;
        codeBanqueEntitePilote: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEco: string;
        indicateurEirl: string;
        dateDebutOptionEirl: Date;
        dateFinOptionEirl: Date;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: Date;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
        identifiantEDSDomiciliation: number;
    }
    class InformationEtablissement {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        designationEntiteTitulaire: string;
        codeStatutLieuActivite: string;
        numTelex: string;
        numTelecopieur: string;
        effectifDuLieuActivite: number;
        enseigneCommercialeLieuActivit: string;
        dateDebut: Date;
        dateFin: Date;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: Date;
        dateDerniereMiseAJourLieu: Date;
        dateDerniereVerifLieuActivite: Date;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: Date;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    class Adresse {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        identifiant: number;
        codeType: string;
        libelleType: string;
        ligne2AFNOR: string;
        ligne3AFNOR: string;
        ligne4AFNOR: string;
        ligne5AFNOR: string;
        ligne6AFNOR: string;
        codePostalPTT: string;
        codePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseelocalite: string;
        libelleInseeLocalite: string;
        codeTypeRetourPtt: string;
        libelleCodeTypeRetourPtt: string;
        indicateurEnvoiCourrier: string;
        inddifadresseFiscalePostale: string;
        numeroVoiePttVillePlus50000Hab: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephone: string;
        codeValiditeAdresseUniserv: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        libelleCommune: string;
        codeTypeLieu: string;
        dateDernierRetourPttAdresse: Date;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
    }
    class Media {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        typeMoyenContact: string;
        adresseMoyenContact: string;
        codeIndicatifInternationalTel: string;
        numeroTelephone: string;
        codeOptIn: string;
        indicEnvoiMediaProOptOut: string;
        indicEnvoiSmsFax: string;
        telephoneEmailPrefere: string;
        telephoneEmailSecurise: string;
    }
    class InformationTiersLie {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
    }
    class TiersNoyau {
        caracteristiqueTiers: CaracteristiqueTiers;
        identificationTiers: IdentificationTiers;
        informationParticulier: InformationParticulier;
        informationProfessionnel: Array<InformationProfessionnel>;
        informationEtablissement: Array<InformationEtablissement>;
        adresse: Array<Adresse>;
        media: Array<Media>;
        informationTiersLie: Array<InformationTiersLie>;
        informationsEAI: InformationsEAI;
    }
    class InformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
}

declare module myway.trans.offreCommun.editique.PreContratVPC {
    enum sibgceVpcpreContratSection1SignatBancaVpcSignatureAgentContent {
        Id = 0,
        Flux = 1,
    }
    enum sibgceVpcpreContratSection1BlSignatureVpcPapierSignatureAgentContent {
        Id = 0,
        Flux = 1,
    }
    enum genericEnteteetsLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IsibgceVpcpreContrat {
        section1: IsibgceVpcpreContratSection1[];
        genericEnteteets: IgenericEnteteets[];
        genericPiedpageets: IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsibgceVpcpreContratSection1 {
        genericTitredocument: IsibgceVpcpreContratSection1GenericTitredocument[];
        genericInfoPp: IgenericInfoPp[];
        blPhraseIntro: IsibgceVpcpreContratSection1BlPhraseIntro[];
        blPhraseIntroLivreta: IsibgceVpcpreContratSection1BlPhraseIntroLivreta[];
        blTitreCondition: number;
        genericLignevide1: number;
        blPrdLivrets: IsibgceVpcpreContratSection1BlPrdLivrets[];
        blEpargne: IsibgceVpcpreContratSection1BlEpargne;
        blVersementEpargne: IsibgceVpcpreContratSection1BlVersementEpargne;
        blMineur: IsibgceVpcpreContratSection1BlMineur[];
        blPrdReleve: IsibgceVpcpreContratSection1BlPrdReleve[];
        blPrdReleveMyway: IsibgceVpcpreContratSection1BlPrdReleveMyway[];
        blPrdCdd: IsibgceVpcpreContratSection1BlPrdCdd[];
        blPrdRelevecompte: IsibgceVpcpreContratSection1BlPrdRelevecompte[];
        blPrdDemandeServiceBienvenue: IsibgceVpcpreContratSection1BlPrdDemandeServiceBienvenue[];
        blPrdRefusServiceBienvenue: IsibgceVpcpreContratSection1BlPrdRefusServiceBienvenue[];
        blPrdCarte: IsibgceVpcpreContratSection1BlPrdCarte[];
        blPrdAlertesms: IsibgceVpcpreContratSection1BlPrdAlertesms[];
        blPrdSolsms: IsibgceVpcpreContratSection1BlPrdSolsms[];
        blPrdBad: IsibgceVpcpreContratSection1BlPrdBad[];
        blMonoDetentionLivreta: number;
        blTitreProcedureLivreta: IsibgceVpcpreContratSection1BlTitreProcedureLivreta[];
        blTitreMentionsSpecifiques: number;
        blMsDeclareInternet: IsibgceVpcpreContratSection1BlMsDeclareInternet[];
        blMsPdp: IsibgceVpcpreContratSection1BlMsPdp[];
        blMsPdpCe: IsibgceVpcpreContratSection1BlMsPdpCe[];
        blMsPdpCourriel: IsibgceVpcpreContratSection1BlMsPdpCourriel[];
        blMsDemarchageVpc: IsibgceVpcpreContratSection1BlMsDemarchageVpc[];
        blMsDemarchageFaf: IsibgceVpcpreContratSection1BlMsDemarchageFaf[];
        certifStdEpargneMonot: IsibgceVpcpreContratSection1CertifStdEpargneMonot[];
        certifStdEpargneMultit: IsibgceVpcpreContratSection1CertifStdEpargneMultit[];
        certifStdEpargneDyn: IsibgceVpcpreContratSection1CertifStdEpargneDyn;
        certifStdEpargne: IsibgceVpcpreContratSection1CertifStdEpargne;
        certifStdEpargne1012: IsibgceVpcpreContratSection1CertifStdEpargne1012;
        blCondTarif: number;
        blAutoPrelev: IsibgceVpcpreContratSection1BlAutoPrelev[];
        certifStdBanca: IsibgceVpcpreContratSection1CertifStdBanca[];
        signatEpargneVpc: IsibgceVpcpreContratSection1SignatEpargneVpc[];
        signatBancaVpc: IsibgceVpcpreContratSection1SignatBancaVpc[];
        blSignatureFf: IsibgceVpcpreContratSection1BlSignatureFf;
        blSignatureVpcPapier: IsibgceVpcpreContratSection1BlSignatureVpcPapier[];
        blSignatureVpcSed: IsibgceVpcpreContratSection1BlSignatureVpcSed;
    }
    interface IsibgceVpcpreContratSection1GenericTitredocument {
        titreDocument: string;
    }
    interface IgenericInfoPp {
        listePersonnes: IgenericInfoPpListePersonnes[];
    }
    interface IgenericInfoPpListePersonnes {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04)[];
    }
    interface Ich00 {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface Ich01 {
        infosPers: IgenericInfoPpListePersonnesInfosPers;
    }
    interface Ich02 {
        infosPers2: IgenericInfoPpListePersonnesInfosPers2;
    }
    interface Ich03 {
        infosPers3: IgenericInfoPpListePersonnesInfosPers3;
    }
    interface Ich04 {
        infosPersVide: number;
    }
    interface IsibgceVpcpreContratSection1BlPhraseIntro {
        libLaleEts1: string;
        dateContrat: string;
    }
    interface IsibgceVpcpreContratSection1BlPhraseIntroLivreta {
        libAlaauEts1: string;
        civilite: string;
        nom: string;
        prenom: string;
        numPersonne: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivrets {
        nomProduit: string;
        versementEerweb: IsibgceVpcpreContratSection1BlPrdLivretsVersementEerweb[];
        libLaleEts1: string;
        livretPartage: IsibgceVpcpreContratSection1BlPrdLivretsLivretPartage[];
        livretTracable: IsibgceVpcpreContratSection1BlPrdLivretsLivretTracable[];
        tauxNet: IsibgceVpcpreContratSection1BlPrdLivretsTauxNet[];
        tauxBrut: IsibgceVpcpreContratSection1BlPrdLivretsTauxBrut[];
        tauxBrutPalier: IsibgceVpcpreContratSection1BlPrdLivretsTauxBrutPalier[];
        valeursMinimum: IsibgceVpcpreContratSection1BlPrdLivretsValeursMinimum[];
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsVersementEerweb {
        montantVersementInitial: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsLivretPartage {
        organismePartage: string;
        tauxPartage: string;
        nomProduit: string;
        libAlaauEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsLivretTracable {
        nomProduit: string;
        libelleDomaine: string;
        secteurOuDomaine: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsTauxNet {
        taux: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsTauxBrut {
        taux: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsTauxBrutPalier {
        tauxP1: string;
        mtLimite1: string;
        tauxP2: string;
        mtLimite2: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdLivretsValeursMinimum {
        mtMiniVersementInitial: string;
        mtMiniVersementUlterieurs: string;
        mtMiniRetrait: string;
        soldeMini: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargne {
        nomProduit: string;
        civilite: string;
        nom: string;
        prenom: string;
        montantVersementInitial: string;
        devise: string;
        specifiqueCel: number;
        blModeCheque: IsibgceVpcpreContratSection1BlEpargneBlModeCheque[];
        blModeVirementInterne: IsibgceVpcpreContratSection1BlEpargneBlModeVirementInterne;
        blVpcExecutionImmediate: IsibgceVpcpreContratSection1BlEpargneBlVpcExecutionImmediate;
        blVpcExecutionNonImmediate: IsibgceVpcpreContratSection1BlEpargneBlVpcExecutionNonImmediate;
        blVersementRegulier: IsibgceVpcpreContratSection1BlEpargneBlVersementRegulier;
        livretPartage: IsibgceVpcpreContratSection1BlEpargneLivretPartage;
        livretTracable: IsibgceVpcpreContratSection1BlEpargneLivretTracable;
        tauxNet: IsibgceVpcpreContratSection1BlEpargneTauxNet;
        tauxBrut: IsibgceVpcpreContratSection1BlEpargneTauxBrut;
        tauxBrutPalier: IsibgceVpcpreContratSection1BlEpargneTauxBrutPalier;
        valeursMinimum: IsibgceVpcpreContratSection1BlEpargneValeursMinimum;
    }
    interface IsibgceVpcpreContratSection1BlEpargneBlModeCheque {
        libLaleEts: string;
        montant: string;
        devise: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneBlModeVirementInterne {
        libLaleEts: string;
        numeroRicePrelevement: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneBlVpcExecutionImmediate {
        nomOffre: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneBlVpcExecutionNonImmediate {
        nomOffre: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneBlVersementRegulier {
        periodicite: string;
        montant: string;
        devise: string;
        ricePrelevement: string;
        jour: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneLivretPartage {
        organismePartage: string;
        tauxPartage: string;
        nomProduit: string;
        libAlaauEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneLivretTracable {
        nomProduit: string;
        libelleDomaine: string;
        secteurOuDomaine: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneTauxNet {
        taux: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneTauxBrut {
        taux: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneTauxBrutPalier {
        tauxP1: string;
        mtLimite1: string;
        tauxP2: string;
        mtLimite2: string;
    }
    interface IsibgceVpcpreContratSection1BlEpargneValeursMinimum {
        mtMiniVersementInitial: string;
        mtMiniVersementUlterieurs: string;
        mtMiniRetrait: string;
        legal: string;
        plafond: string;
        soldeMini: string;
    }
    interface IsibgceVpcpreContratSection1BlVersementEpargne {
        montantVersementInitial: string;
        devise: string;
        blVpcExecutionImmediate: IsibgceVpcpreContratSection1BlVersementEpargneBlVpcExecutionImmediate;
        blVpcExecutionNonImmediate: IsibgceVpcpreContratSection1BlVersementEpargneBlVpcExecutionNonImmediate[];
        blModeVirementInterne: IsibgceVpcpreContratSection1BlVersementEpargneBlModeVirementInterne;
        blModeCheque: IsibgceVpcpreContratSection1BlVersementEpargneBlModeCheque[];
        valeursOption: IsibgceVpcpreContratSection1BlVersementEpargneValeursOption;
    }
    interface IsibgceVpcpreContratSection1BlVersementEpargneBlVpcExecutionImmediate {
        nomProduit: string;
    }
    interface IsibgceVpcpreContratSection1BlVersementEpargneBlVpcExecutionNonImmediate {
        nomProduit: string;
    }
    interface IsibgceVpcpreContratSection1BlVersementEpargneBlModeVirementInterne {
        riceVersementInitial: string;
    }
    interface IsibgceVpcpreContratSection1BlVersementEpargneBlModeCheque {
        montantVersementInitial: string;
        devise: string;
        libLaleEts1: string;
        montantVersementInitial1: string;
        devise1: string;
    }
    interface IsibgceVpcpreContratSection1BlVersementEpargneValeursOption {
        taux: string;
        mtMiniVersementInitial: string;
        devise1: string;
        mtMiniVersementUlterieurs: string;
        devise2: string;
        mtMiniRetrait: string;
        devise3: string;
        soldeMini: string;
        devise4: string;
    }
    interface IsibgceVpcpreContratSection1BlMineur {
        libAuto: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdReleve {
        periodicite: string;
        formatRlv: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdReleveMyway {
        jour: string;
        periodicite: string;
        formatRlv: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdCdd {
        civilite: string;
        nomPrenom: string;
        cotitulaire: IsibgceVpcpreContratSection1BlPrdCddCotitulaire[];
        compteSimple: number;
        compteJoint: number;
        devise: string;
        versementEerweb: IsibgceVpcpreContratSection1BlPrdCddVersementEerweb[];
        libLaleEts1: string;
        etab: string;
        cddTracable: IsibgceVpcpreContratSection1BlPrdCddCddTracable[];
    }
    interface IsibgceVpcpreContratSection1BlPrdCddCotitulaire {
        civilite2: string;
        nomPrenom2: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdCddVersementEerweb {
        montantVersementInitial: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdCddCddTracable {
        nomProduit: string;
        libelleDomaine: string;
        secteurOuDomaine: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdRelevecompte {
        periodicite: string;
        formatRlv: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdDemandeServiceBienvenue {
        nomServiceFixe: number;
        nomServiceDynamique: IsibgceVpcpreContratSection1BlPrdDemandeServiceBienvenueNomServiceDynamique[];
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdDemandeServiceBienvenueNomServiceDynamique {
        nom: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdRefusServiceBienvenue {
        nomServiceFixe: number;
        nomServiceDynamique: IsibgceVpcpreContratSection1BlPrdRefusServiceBienvenueNomServiceDynamique[];
    }
    interface IsibgceVpcpreContratSection1BlPrdRefusServiceBienvenueNomServiceDynamique {
        nom: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdCarte {
        civilite: string;
        nomPrenom: string;
        carte: string;
        lignePlafond: IsibgceVpcpreContratSection1BlPrdCarteLignePlafond[];
        condDebitDiff: number;
        carteAgir: IsibgceVpcpreContratSection1BlPrdCarteCarteAgir[];
    }
    interface IsibgceVpcpreContratSection1BlPrdCarteLignePlafond {
        libellePlafond: string;
        montantPlafond: string;
        nbJours: string;
        libelleJoursMultiple: number;
        libelleJourUnitaire: number;
    }
    interface IsibgceVpcpreContratSection1BlPrdCarteCarteAgir {
        nomAssociation: string;
        montantDon: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdAlertesms {
        nomServiceFixe: number;
        nomServiceDynamique: IsibgceVpcpreContratSection1BlPrdAlertesmsNomServiceDynamique[];
        civilite: string;
        nomPrenom: string;
        ligneFacturation: number;
        declarationCgAlertesms: IsibgceVpcpreContratSection1BlPrdAlertesmsDeclarationCgAlertesms[];
    }
    interface IsibgceVpcpreContratSection1BlPrdAlertesmsNomServiceDynamique {
        nom: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdAlertesmsDeclarationCgAlertesms {
        nomServiceFixe2: number;
        nomServiceDynamique2: IsibgceVpcpreContratSection1BlPrdAlertesmsDeclarationCgAlertesmsNomServiceDynamique2[];
        urlEts: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdAlertesmsDeclarationCgAlertesmsNomServiceDynamique2 {
        nom: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdSolsms {
        nomServiceFixe: number;
        nomServiceDynamique: IsibgceVpcpreContratSection1BlPrdSolsmsNomServiceDynamique[];
        civilite: string;
        nomPrenom: string;
        declarationCgSolsms: IsibgceVpcpreContratSection1BlPrdSolsmsDeclarationCgSolsms[];
    }
    interface IsibgceVpcpreContratSection1BlPrdSolsmsNomServiceDynamique {
        nom: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdSolsmsDeclarationCgSolsms {
        nomServiceFixe2: number;
        nomServiceDynamique2: IsibgceVpcpreContratSection1BlPrdSolsmsDeclarationCgSolsmsNomServiceDynamique2[];
        urlEts: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdSolsmsDeclarationCgSolsmsNomServiceDynamique2 {
        nom: string;
    }
    interface IsibgceVpcpreContratSection1BlPrdBad {
        civilite: string;
        nomPrenom: string;
    }
    interface IsibgceVpcpreContratSection1BlTitreProcedureLivreta {
        refusCommunicationFicobako: IsibgceVpcpreContratSection1BlTitreProcedureLivretaRefusCommunicationFicobako[];
        acceptCommunicationFicobako: IsibgceVpcpreContratSection1BlTitreProcedureLivretaAcceptCommunicationFicobako[];
    }
    interface IsibgceVpcpreContratSection1BlTitreProcedureLivretaRefusCommunicationFicobako {
        libAlaauEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlTitreProcedureLivretaAcceptCommunicationFicobako {
        libAlaauEts1: string;
        libLaleEts2: string;
        libLaleEts1: string;
        libAlaauEts3: string;
    }
    interface IsibgceVpcpreContratSection1BlMsDeclareInternet {
        libIndice: string;
        libDirect: string;
    }
    interface IsibgceVpcpreContratSection1BlMsPdp {
        libLaleEts1: string;
        libAlaauEts1: string;
        libLaleEts2: string;
        libLaleEts3: string;
        libDeladuEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlMsPdpCe {
        libLaleEts1: string;
        e1: string;
        libAlaauEts1: string;
        libLaleEts2: string;
        e2: string;
        libLaleEts3: string;
        e3: string;
        libDeladuEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlMsPdpCourriel {
        libDeladuEts1: string;
        libDeladuEts2: string;
    }
    interface IsibgceVpcpreContratSection1BlMsDemarchageVpc {
        libLaleEts2: string;
        libAlaauEts1: string;
        libDeladuEts3: string;
        libDeladuEts2: string;
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlMsDemarchageFaf {
        libAlaauEts1: string;
        libDeladuEts3: string;
        libDeladuEts2: string;
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneMonot {
        blPrdReglementLdd: IsibgceVpcpreContratSection1CertifStdEpargneMonotBlPrdReglementLdd[];
        blPrdReglementLj: IsibgceVpcpreContratSection1CertifStdEpargneMonotBlPrdReglementLj[];
        conditionsLivretsPresente: number;
        nomOffre: string;
        libLaleEts2: string;
        sanctionsReglementationLjLddLa: number;
        libDeladuEts1: string;
        libDeladuEts2: string;
        libLaleEts1: string;
        rappelRegleFiscalLjLdd: number;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneMonotBlPrdReglementLdd {
        nomProduit: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneMonotBlPrdReglementLj {
        nomProduit: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneMultit {
        nomOffre: string;
        libLaleEts2: string;
        libDeladuEts1: string;
        libDeladuEts2: string;
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneDyn {
        signataire: string;
        saLeur: string;
        libOffre: string;
        pronomPersonnel: string;
        laleEtbs: string;
        libDeladuEts: string;
        libDeladuEts1: string;
        signataire1: string;
        engagement: string;
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargne {
        specifiqueLep: IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueLep;
        specifiqueLj: IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueLj;
        specifiqueLdd: IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueLdd;
        specifiqueCel: IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueCel;
        signataire2: string;
        nomProduit2: string;
        libLaleEts1: string;
        libDeladuEts1: string;
        libDeladuEts2: string;
        specifiqueModifDomiciliation: IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueModifDomiciliation;
        specifiqueModif: IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueModif;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueLep {
        signataire1: string;
        detention: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueLj {
        signataire1: string;
        detention: string;
        nomProduit1: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueLdd {
        signataire1: string;
        detention: string;
        nomProduit1: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueCel {
        signataire1: string;
        detention: string;
        dUn: string;
        auNomDe: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueModifDomiciliation {
        signataire3: string;
        libLaleEts2: string;
        etatCivil: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargneSpecifiqueModif {
        signataire3: string;
        engagement: string;
        libLaleEts2: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdEpargne1012 {
        libLaleEts1: string;
        libDeladuEts1: string;
        libDeladuEts2: string;
        libLaleEts2: string;
    }
    interface IsibgceVpcpreContratSection1BlAutoPrelev {
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1CertifStdBanca {
        libLaleEts1: string;
        urlEts: string;
        libDeladuEts1: string;
    }
    interface IsibgceVpcpreContratSection1SignatEpargneVpc {
        libDeladuEts: string;
        libLaleEts1: string;
        prenomNomAgent: string;
        fonctionConseiller: string;
        signatureAgent: IsibgceVpcpreContratSection1SignatEpargneVpcSignatureAgent;
        dateSignature: string;
    }
    interface IsibgceVpcpreContratSection1SignatEpargneVpcSignatureAgent {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IsibgceVpcpreContratSection1SignatBancaVpc {
        libDeladuEts: string;
        libLaleEts1: string;
        prenomNomAgent: string;
        fonctionConseiller: string;
        signatureAgent: IsibgceVpcpreContratSection1SignatBancaVpcSignatureAgent;
        dateSignature: string;
    }
    interface IsibgceVpcpreContratSection1SignatBancaVpcSignatureAgent {
        Content: any;
        Value: string;
    }
    interface IsibgceVpcpreContratSection1BlSignatureFf {
        libDeladuEts: string;
        prenomNomAgent: string;
        fonctionConseiller: string;
        libNomAutre: string;
    }
    interface IsibgceVpcpreContratSection1BlSignatureVpcPapier {
        libDeladuEts: string;
        prenomNomAgent: string;
        fonctionConseiller: string;
        signatureAgent: IsibgceVpcpreContratSection1BlSignatureVpcPapierSignatureAgent;
        dateSignature: string;
        libLaleEts1: string;
    }
    interface IsibgceVpcpreContratSection1BlSignatureVpcPapierSignatureAgent {
        Content: any;
        Value: string;
    }
    interface IsibgceVpcpreContratSection1BlSignatureVpcSed {
        libDeladuEts: string;
        prenomNomAgent: string;
        fonctionConseiller: string;
        libLaleEts2: string;
    }
    interface IgenericEnteteets {
        logoEtablissement: IgenericEnteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
        numRefdoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IgenericEnteteetsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    interface IgenericInfoPpListePersonnesInfosPers {
        lidacv: string;
        lidanm: string;
        nomPrenomClient: string;
        libCodirc: string;
        dadana: string;
        lidgilNaissance: string;
        lidgv26: string;
        lidgna: string;
        idnsbd: string;
        nodatpClient: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers2 {
        lidacv2: string;
        nomPrenomClient2: string;
        lidanm2: string;
        nomUsage2: string;
        libCodirc2: string;
        dadana2: string;
        lidgilNaissance2: string;
        lidgv262: string;
        lidgna2: string;
        idnsbd2: string;
        nodatpClient2: string;
        situationFamille2: string;
    }
    interface IgenericInfoPpListePersonnesInfosPers3 {
        lidacv3: string;
        nomPrenomClient3: string;
        lidanm3: string;
        nomUsage3: string;
        libCodirc3: string;
        dadana3: string;
        lidgilNaissance3: string;
        lidgv263: string;
        lidgna3: string;
        idnsbd3: string;
        nodatpClient3: string;
        situationFamille3: string;
        regimeMatrimonial3: string;
    }
    interface IgenericInfoPpListePersonnesTitreRole {
        libCtdhli: string;
    }
    class SibgceVpcpreContrat implements IsibgceVpcpreContrat {
        section1: IsibgceVpcpreContratSection1[];
        genericEnteteets: IgenericEnteteets[];
        genericPiedpageets: IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SibgceVpcpreContratArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SibgceVpcpreContratGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SibgceVpcpreContratArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SibgceVpcpreContratImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SibgceVpcpreContratArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SibgceVpcpreContratImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.AutorisationCommunicationDonneesBancaires {
    class AutorisationCommunicationDonneesBancairesService {
        private $q;
        private serviceAgentExtended;
        private noyauTiersService;
        private creationAutorisationCommunicationDonneesBancairesService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, noyauTiersService: NoyauTiersService, creationAutorisationCommunicationDonneesBancairesService: CreationAutorisationCommunicationDonneesBancairesService);
        /**
         * Permet de créer le document et ses paramètres
         * @param {modeleCommun.IDocumentAImprimer} documentAImprimer
         * @param {GestionGeneriqueOffres.Types.IContexteEditique} contexteEditique
         * @param {MyWay.Services.Context.AuthentificationInfo} authenticationInfo
         * @returns {ng.IPromise<modeleCommun.IDocumentAGenerer>}
         */
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, authenticationInfo: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        estAutorisationCommunicationDonneesBancairesAEditer(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<boolean>;
        /**
         * Permet de créer les paramètres d'archivage du document ACDB
         * @param {modeleCommun.IDocumentAImprimer} documentAImprimer
         * @param {MyWay.Services.Context.AuthentificationInfo} authenticationInfo
         * @returns {modeleCommun.IParametres}
         */
        private getAutorisationCommunicationDonneesBancairesArchiverGenererParams(documentAImprimer, authenticationInfo);
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    class ParametrageBordereauRetractationService {
        private $q;
        private serviceAgentExtended;
        private creationBordereauRetractationService;
        static $inject: string[];
        private nomPrenomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, creationBordereauRetractationService: CreationBordereauRetractationService);
        /**
         * Factory de document selon leur code type document
         *
         * @param{Modele.IDocumentAImprimer} documentAImprimer Le document à imprimer
         * @param{Modele.IContexteEditique} contexteEditique Le contexte éditique
         *
         * @return ng.IPromise<Modele.IDocumentAGenerer>
         */
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, authenticationInfo: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        private getBordereauRetractationArchiverGenererParams(documentAImprimer, authenticationInfo);
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    interface IBordereauRetractationService {
        /**
         * Services qui récupère les données du bordereau de retractation
         *
         * @return{IBordereauRetractationService}
         */
        getDonneesBordereauRetractation(bordRetracVenteADist: IBordRetracVenteADist, numeroDossierVente: string, typeDocument: string, codeEntiteVente: string): ng.IPromise<IBordRetracVenteADist>;
    }
    class BordereauRetractationService implements IBordereauRetractationService {
        private $q;
        private serviceAgentExtended;
        static IMPRESSION_BORDEREAU_DE_RETRACTATION: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IConditionsPartictulieresService.getBlocsAEditer }
         */
        getDonneesBordereauRetractation(bordRetracVenteADist: IBordRetracVenteADist, numeroDossierVente: string, typeDocument: string, codeEntiteVente: string): ng.IPromise<IBordRetracVenteADist>;
    }
}

declare module myway.trans.offreCommun.editique.AutorisationCommunicationDonneesBancaires {
    class CreationAutorisationCommunicationDonneesBancairesService {
        private $q;
        static $inject: string[];
        constructor($q: ng.IQService);
        createDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): IautorisationCommunicationDonneesBancaires;
        /**
         * Permet de calculer l'age à partir de la date de naissance
         * @param {Date} dateNaissance
         * @returns {number}
         */
        calculateAge(dateNaissance: Date): number;
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    class CreationBordereauRetractationService {
        private $q;
        private serviceAgentExtended;
        private bordereauRetractationService;
        static $inject: string[];
        private nomPrenomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, bordereauRetractationService: BordereauRetractationService);
        createDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<IbordereauDeRetractation>;
        /** Promesse de création du document bordereau de retractation */
        private construireBordereauRetractation(donneesBordereauRetractation, contexteEditique);
        /**
         * Permet de construire le corps du bordereau de retractation, il reçoit en entrée les blocs du service et les transforme en modèle GCEDOC
         * @param IElementPourEdition
         * @return  BordereauDeRetractationCorpsDocument[]
         */
        private construireCorpsBordereauRetractation(elementsAEditer);
        /** Construit le boc adresse du bordereau de retractation */
        private construireBlocAdresse(adresse);
        private construireEntete(document, codeBarre, numRefDoc, refActe);
        /**
        * @description Construction de l'entête du document
        *
        * @param {Object} document Le document dont on veut construire l'entête
        * @param {IParametresEntete} parametres Les données constitutives de l'entête
        *
        * @returns {void}
        */
        private setDonneesEntete(document, parametres);
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    class CreationLettreAccompagnementService {
        private $q;
        private serviceAgentExtended;
        private lettreAccompagnementService;
        static $inject: string[];
        private nomPrenomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, lettreAccompagnementService: LettreAccompagnementService);
        createDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, topEcheancier: string, indicateurAcdb: boolean): ng.IPromise<IlettreAccompagnement>;
        /**
         * Permet de construire l'objet offre de la lettre d'accompagnement
         * @param contexteEditique
         */
        private getOffreLettreAccompagnement(contexteEditique);
        /** Promesse de création du document de la note bâle 2 */
        private construireLettreAccompagnement(donneesLettreAccomapagnement, contexteEditique);
        /** Permet de construire le corps de la lettre d'accompagnement **/
        private construireCorpsLettreAccompagnement(corpsDocument, donneesLettreAccomapagnement);
        private mapperBlocsLettreAccompagnement(contenuSection, bloc);
        /** Construit le boc adresse web de la lette d'accompagnement */
        private construireBlocAdresseWebCe(blocsLettreAccomapagnement, adresseWeb);
        /** Construit le boc adresse de la lette d'accompagnement */
        private construireBlocAdresse(blocsLettreAccomapagnement, adresse);
        /** Construit le boc de reference de la lette d'accompagnement */
        private construireBlocReference(blocsLettreAccomapagnement, reference);
        /** Construit le boc civilité de la lette d'accompagnement */
        private construireBlocCivilite(blocsLettreAccomapagnement, civilite);
        /** Construit le bloc remerciement personne majeure **/
        private construireBlocRemerciementPersonneMajeure(blocsLettreAccomapagnement, remerciement);
        /** Construit le bloc remerciement personne mineure  sans livret jeune **/
        private constuireBlocRemerciementPersonneMineureSansLivretJeune(blocsLettreAccomapagnement, remerciement);
        /** Construit le bloc remerciement personne mineure  sans livret jeune **/
        private constuireBlocRemerciementPersonneMineureAvecLivretJeune(blocsLettreAccomapagnement, remerciement);
        /** Construit le bloc de confirmation de mise en gestion d'un avenant changement bouquet liberté **/
        private constuireBlocConfirmationMEGIAvenantChangementBL(blocsLettreAccomapagnement, confirmation);
        /** Construit le bloc de confirmation de mise en gestion d'un avenant changement Banca **/
        private constuireBlocConfirmationMEGIAvenantChangementBanca(blocsLettreAccomapagnement, confirmation);
        /** Construit le bloc de confirmation MEGI ouverture epargne **/
        private constuireBlocConfirmationMEGIOuvertureEpargne(blocsLettreAccomapagnement, confirmation);
        /** Construit le bloc de mise en gestion d'une personne majeure ne possedant pas de carte IZI */
        private constuireBlocMEGICartePersonneMajeureNonIZI(blocsLettreAccomapagnement, carte);
        /** Construit le bloc de mise en gestion d'une personne mineure avec une simple carte */
        private constuireBlocMEGICartePersonneMineure(blocsLettreAccomapagnement, carte);
        /** Construit le bloc de mise en gestion d'une personne majeure avec une IZI carte */
        private constuireBlocConfMEGIAssurance(blocsLettreAccomapagnement);
        /** Construit le bloc de mise en gestion d'une personne majeure avec une IZI carte */
        private constuireBlocMEGICartePersMajeureIZI(blocsLettreAccomapagnement);
        /** Construit le bloc de mise en gestion E carte bleue */
        private constuireBlocMEGIECarteBleue(blocsLettreAccomapagnement);
        /** Construit le bloc de Megi direct ecureuil */
        private constuireBlocMEGIDirectEcureuil(blocsLettreAccomapagnement);
        /** Construit le bloc engagement mono detention pour personne majeure */
        private constuireBlocEngagementMonoDetPersonneMajeure(blocsLettreAccomapagnement);
        /** Construit le bloc engagement mono detention pour personne majeure */
        private constuireBlocEngagementMonoDetPersonneMineure(blocsLettreAccomapagnement, engagement);
        /** Construit le bloc de reception des liasse à domicile  */
        private constuireBlocBlocModaliteRecepLiasseDomicile(blocsLettreAccomapagnement, liasse);
        /** Construit le bloc de reception des liasse en agence pour une personne majeure  */
        private constuireBlocModaliteRecepLiasseAgencePersonneMajeure(blocsLettreAccomapagnement, liasse);
        /** Construit le bloc de reception des liasse en agence pour une personne mineure  */
        private constuireBlocModaliteRecepLiasseAgencePersonneMineure(blocsLettreAccomapagnement, liasse);
        /** Construit le bloc renvoi de document a domicile  */
        private constuireBlocRenvoiDocumentDomicile(blocsLettreAccomapagnement, document);
        /** Construit le bloc renvoi de document avec un livret jeune pour personne mineure */
        private constuireBlocRenvoiDocumentLivretJeunePersonneMineure(blocsLettreAccomapagnement, document);
        /** Construit le bloc renvoi de document pour un livret grand prix  */
        private constuireBlocRenvoiDocumentLGP(blocsLettreAccomapagnement, document);
        /** Construit le bloc renvoi de pièces justificatives  */
        private constuireBlocRenvoiPieceJustificative(blocsLettreAccomapagnement);
        /** Construit le bloc de nom et prenom  */
        private constuireBlocNomPrenom(blocsLettreAccomapagnement, nomPrenom);
        /** Construit le bloc de pièces justificatives  */
        private constuireBlocPieceJustificative(blocsLettreAccomapagnement, piece);
        /** Construit le bloc dafaut de signature pour l'envoi de carte à domicle */
        private constuireBlocDefautSignatureEnvoiCarteDomicile(blocsLettreAccomapagnement, defaut);
        /** Construit le bloc dafaut de signature pour l'envoi de carte à l'agence */
        private constuireBlocDefautSignatureEnvoiCarteAgence(blocsLettreAccomapagnement, defaut);
        /** Construit le bloc dafaut de signature VPC sans livret grand prix */
        private constuireBlocDefautSignatureVPCSansLGP(blocsLettreAccomapagnement, defaut);
        /** Construit le bloc dafaut de signature VPC avec livret grand prix */
        private constuireBlocDefautSignatureVPCAvecLGP(blocsLettreAccomapagnement);
        /** Construit le bloc signature avenant decouvert*/
        private constuireBlocSignatureAvenantDecouvert(blocsLettreAccomapagnement);
        /** Construit le bloc signature avenant chequier */
        private constuireBlocSignatureAvenantChequier(blocsLettreAccomapagnement);
        /** Construit le bloc envoi carte domicile personne majeure */
        private constuireBlocEnvoiCarteDomicilePersonneMajeure(blocsLettreAccomapagnement, envoi);
        /** Construit le bloc envoi carte domicile personne mineure */
        private constuireBlocEnvoiCarteDomicilePersonneMineure(blocsLettreAccomapagnement, envoi);
        /** Construit le bloc envoi carte domicile caisse */
        private constuireBlocEnvoiCarteDomicileCaisse(blocsLettreAccomapagnement, envoi);
        /** Construit le bloc information carte */
        private constuireBlocInformationCarte(blocsLettreAccomapagnement, infoCarte);
        /** Construit le bloc contacter */
        private constuireBlocContacter(blocsLettreAccomapagnement, contacte);
        /** Construit le bloc salutation */
        private constuireBlocSalutation(blocsLettreAccomapagnement, salutation);
        /** Construit le bloc avenant signature */
        private constuireBlocAvenantSignature(blocsLettreAccomapagnement, signature);
        /** Construit le bloc signature caisse */
        private constuireBlocSignatureCaisse(blocsLettreAccomapagnement, signature);
        /** Construit le bloc legale assurance */
        private constuireBlocLegaleAssurance(blocsLettreAccomapagnement);
        /** Construit le bloc nota bene */
        private constuireBlocNotaBene(blocsLettreAccomapagnement, notaBene);
        /** Construit le bloc nota bene carte */
        private constuireBlocNotaBeneCarte(blocsLettreAccomapagnement);
        /** Construit le bloc après nota bene carte */
        private constuireBlocApresNotaBene(blocsLettreAccomapagnement, apresNotaBene);
        private construireEntete(document, codeBarre, numRefDoc, refActe);
        /**
        * @description Construction de l'entête du document
        *
        * @param {Object} document Le document dont on veut construire l'entête
        * @param {IParametresEntete} parametres Les données constitutives de l'entête
        *
        * @returns {void}
        */
        private setDonneesEntete(document, parametres);
    }
}

declare module myway.trans.offreCommun.editique.ListePiecesJustificatives {
    class CreationPiecesJustificativesService {
        private $q;
        private serviceAgentExtended;
        private listePiecesJustificativesService;
        static $inject: string[];
        IDENTIFIANT_CARTE: string;
        IDENTIFIANT_TABLE_DELOCALISE_CARTE: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, listePiecesJustificativesService: ListePiecesJustificativesService);
        createDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<IlistePiecesJustificatives>;
        private getDonneesRecherchePJ(contexteEditique);
        /**
         * Cette fonction permet de construire un panier conforme au panier attendu pour la liste des pièces justificatives,
         * elle rajoute au panier les propriétes codeSousFamilleActeComposition et familleIzicarte
         * @param contexteEditique
         */
        private getDonneesPanier(contexteEditique);
        /**
         * permet de verifier si une carte est IZI
         * @param contexteEditique
         * @param produitPanier
         */
        private verificationIZICarteProduit(contexteEditique, produitPanier);
        /** Promesse de création du document listes des pièces justificatives*/
        private construireListePiecesJustificatives(donneesListePiecesJustificative, contexteEditique);
        /**
         * Permet de construire le corps du du document liste des pièces justificatives, il reçoit en entrée les blocs du service et les transforme en modèle GCEDOC
         * @param
         * @return  IlistePiecesJustificativesPiecesJustificativesCorpsDocument[]
         */
        private construireCorpsPiecesJustifivatives(elementsAEditer);
        /**
         * Permet de mapper le bloc liste de personnes avec leurs pièces justificatives
         * @param bloc
         */
        private mappeBlocPersonnes(blocListepersonne);
        /**
         * Permet de mapper le bloc blPasMsi
         * @param blAdresseRetourPieces
         */
        private mapperBlocPasMsi(blAdresseRetourPieces);
        /**
         * Permet de mapper le bloc de la liste des pièces justificatives pour chaque personne
         * @param blocListePJ
         */
        private mappeBlocListePiecesJustificatives(blocListePJ);
        /**
         * Permet de mapper le bloc blMsirepMsgCons
         * @param blAdresseRetourPieces
         */
        private mapperBlocMsirepMsgCons(blAdresseRetourPieces);
        /**
         *  permet de mapper le bloc IlMsichoisirObj
         * @param bloc
         */
        private mapperBlocMsichoisirObji(bloc);
        private construireEntete(document, codeBarre, numRefDoc, refActe);
        /**
        * @description Construction de l'entête du document
        *
        * @param {Object} document Le document dont on veut construire l'entête
        * @param {IParametresEntete} parametres Les données constitutives de l'entête
        *
        * @returns {void}
        */
        private setDonneesEntete(document, parametres);
    }
}

declare module myway.trans.offreCommun.editique.AutorisationCommunicationDonneesBancaires {
    class NoyauTiersService {
        private $q;
        private serviceAgentExtended;
        static TIERS_NOYAU: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet d'appeler le service REST tiersNoyau en mode GET pour vérifier l'éligibilité EAI nécessaire pour la génération du document autorisation communication données bancaires
         * @param {GestionGeneriqueOffres.Types.IContexteEditique} contexteEditique
         * @returns {ng.IPromise<TiersNoyau>}
         */
        getNoyauTiers(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<TiersNoyau>;
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    class ParametrageLettreAccompagnementService {
        private $q;
        private serviceAgentExtended;
        private creationLettreAccompagnementService;
        static $inject: string[];
        private nomPrenomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, creationLettreAccompagnementService: CreationLettreAccompagnementService);
        /**
      * Factory de document selon leur code type document
      *
      * @param{Modele.IDocumentAImprimer} documentAImprimer Le document à imprimer
      * @param{Modele.IContexteEditique} contexteEditique Le contexte éditique
      *
      * @return ng.IPromise<Modele.IDocumentAGenerer>
      */
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, authenticationInfo: MyWay.Services.Context.AuthentificationInfo, topEcheancier: string, indicateurAcdb?: boolean): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        private getLettreAccompagnementArchiverGenererParams(documentAImprimer, authenticationInfo);
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    interface ILettreAccompagnementService {
        /**
         * Services qui récupère les blocs à éditer
         *
         * @param{IInformationAEditer} parametre Un objet contenant les données de l'offre, le panier de produits
         *
         * @return{IInformationAEditer} l'objet IInformationAEditer passé en paramètre avec les éléments à éditer valorisés.
         */
        getBlocsAImprimerLettreAccompagnement(parametre: ILetVenteADistBancaEp, numeroDossierVente: string, typeDocument: string, codeEntiteVente: string, topEcheancier: string, modePaiement: string): ng.IPromise<IInformationAEditer>;
    }
    class LettreAccompagnementService implements ILettreAccompagnementService {
        private $q;
        private serviceAgentExtended;
        static IMPRESSION_LETTRE_ACCOMPAGNEMENT: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IConditionsPartictulieresService.getBlocsAEditer }
         */
        getBlocsAImprimerLettreAccompagnement(letVenteADistBancaEp: ILetVenteADistBancaEp, numeroDossierVente: string, typeDocument: string, codeEntiteVente: string, topEcheancier: string, codeModeFinancier: string): ng.IPromise<IInformationAEditer>;
        getBlocsAImprimerLettreAccompagnementMock(): ng.IPromise<IInformationAEditer>;
    }
}

declare module myway.trans.offreCommun.editique.ListePiecesJustificatives {
    class ParametrageListePiecesJustificativesService {
        private $q;
        private serviceAgentExtended;
        private creationPiecesJustificativesService;
        static $inject: string[];
        private nomPrenomAgent;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, creationPiecesJustificativesService: CreationPiecesJustificativesService);
        /**
         * Factory de document selon leur code type document
         *
         * @param{Modele.IDocumentAImprimer} documentAImprimer Le document à imprimer
         * @param{Modele.IContexteEditique} contexteEditique Le contexte éditique
         * @param{MyWay.Services.Context.AuthentificationInfo} authenticationInfo Les information d'authentification de l'utilisateur
         *
         * @return ng.IPromise<Modele.IDocumentAGenerer>
         */
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, authenticationInfo: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        private getListePiecesJustificativeGenererArchiverParams(documentAImprimer, authenticationInfo);
    }
}

declare module myway.trans.offreCommun.editique.ListePiecesJustificatives {
    interface IListePiecesJustificativesService {
        /**
         * Services qui récupère les données de la liste des pièces justificatives
         *
         * @return{IBordereauRetractationService}
         */
        getDonneesListePiecesJustificatives(codeEntiteVente: string, typeDocument: string, demPieceJustifVAD: IDemPieceJustifVAD, acte: string, libelleOffre: string, numeroDossierVente: string): ng.IPromise<IDemPieceJustifVAD>;
    }
    class ListePiecesJustificativesService implements IListePiecesJustificativesService {
        private $q;
        private serviceAgentExtended;
        IMPRESSION_LISTES_PIECES_JUSTIFICATIVES: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getDonneesListePiecesJustificatives(codeEntiteVente: string, typeDocument: string, demPieceJustifVAD: IDemPieceJustifVAD, acte: string, libelleOffre: string, numeroDossierVente: string): ng.IPromise<IDemPieceJustifVAD>;
    }
}

declare module myway.trans.offreCommun.editique.PreContratVPC {
    class BlocModeleVpcPreContrat {
        static BLOC_BANDEAU_CLIENT: string;
        static BLOC_EDITION: string;
        static BLOC_EPARGNE: string;
        static BLOC_VERSEMENT_EPARGNE: string;
        static BLOC_TITRE_PROCDURE_LIVRETA: string;
        static BLOC_CERTIF_STD_EPARGNE: string;
    }
    class InstanceBlocEdition {
        static GENERIC_TITREDOCUMENT: string;
        static BL_PHRASE_INTRO_LIVRETA: string;
        static BL_TITRE_CONDITION: string;
        static BL_MINEUR: string;
        static BL_PRD_RELEVE: string;
        static BL_PRD_RELEVE_MYWAY: string;
        static BL_MONO_DETENTION_LIVRETA: string;
        static BL_TITRE_MENTIONS_SPECIFIQUES: string;
        static BL_PDP_JUSTIFIE: string;
        static BL_MS_PDP_CE: string;
        static BL_MS_DEMARCHAGE_VPC: string;
        static BL_MS_DEMARCHAGE_FAF: string;
        static CERTIF_STD_EPARGNE_DYN: string;
        static CERTIF_STD_EPARGNE_1012: string;
        static BL_SIGNATURE_FF: string;
        static BL_SIGNATURE_VPC: string;
        static BL_CDD: string;
        static BL_RELEVE_COMPTE: string;
        static BL_DEMANDE_SERVICE_BIENVENUE: string;
        static BL_REFUS_SERVICE_BIENVENUE: string;
        static BL_CARTE: string;
        static BL_ALERTE_SMS: string;
        static BL_SOL_SMS: string;
        static BL_BAD: string;
    }
    class MappingModelGceVpcPreContratService {
        private $q;
        private serviceAgentExtended;
        private document;
        private prenomNomAgent;
        private fonctionConseiller;
        private promesseAuthentificationInfo;
        private section1;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        mappingModelGceRest(preContratVPC: PreContratVPC.IPreContratVPC, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<IsibgceVpcpreContrat>;
        private getDonneesAuthentification();
        private setDonnerAgent();
        private mapperElementAEditer(elementAEditer, contexteEditique);
        private insererElementDuBlocBandeauClient(bloc);
        private mapperInfosPers(infosPersOrg);
        private mapperInfosPers2(infosPers2Org);
        private mapperInfosPers3(infosPers3Org);
        private tracerElementNonMapper(elementAEditer);
        private tracerBlocNonMapper(bloc, typeElement);
        private insererElementDuBlocEdition(bloc, contexteEditique);
        private alimenterBlocSignatureFF(bloc, contexteEditique);
        private getNomSignataire(contexteEditique);
        private alimenterBlocSignatureVPC(bloc, contexteEditique);
        private alimenterBlocPrdCdd(blocPrdCdd);
        private alimenterBlocCarte(blocCarte);
        private alimenterBlocAlerteSms(blocAlerteSms);
        private alimenterBlocSolSms(blocSolSms);
        private insererElementDuBlocCertifStdEpargne(bloc);
        private insererElementDuBlEpargne(bloc);
        private insererElementDuBlVersementEpargne(bloc);
        private insererElementDuBlTitreProcedureLivretA(bloc);
        private construireEntete(contexteEditique);
    }
}

declare module myway.trans.offreCommun.editique.PreContratVPC {
    interface IEditPreContratVPCQuery {
        numeroPersonne: string;
        numeroEntiteTitulaire: string;
        identifiantDossierVente: number;
        codeUsageEntiteTitulaire?: string;
        versementImmediat?: boolean;
    }
    class EditPreContratVPCRessourceService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private url;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getQuery(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): IEditPreContratVPCQuery;
        preparerBodyRessourcePreContrat(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): IPreContratVPC;
        private mapOffreDepuisContexteEditique(offreContexte, produitServices);
        private mapProduitsServicesDepuisContexte(produitServices);
        private transformProduitContexteEnPreContrat(produitService);
        private mapSignatairesDepuisContexteEditique(signataires);
        private transformeSignataireContexteEnPrecontratVPC(signataireContexteEditique);
        putEditPreContratVPC(query: IEditPreContratVPCQuery, editPreContratVPC: IPreContratVPC, isTestPreContrat?: boolean): ng.IPromise<IPreContratVPC>;
    }
}

declare module myway.trans.offreCommun.editique.PreContratVPC {
    class EditPreContratVPCService {
        protected editPreContratVPCRessourceService: EditPreContratVPCRessourceService;
        protected mappingModelGceVpcPreContratService: MappingModelGceVpcPreContratService;
        static $inject: string[];
        constructor(editPreContratVPCRessourceService: EditPreContratVPCRessourceService, mappingModelGceVpcPreContratService: MappingModelGceVpcPreContratService);
        obtenirDocumentMappe(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, isTestPreContrat?: boolean): ng.IPromise<IsibgceVpcpreContrat>;
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, authenticationInfo: MyWay.Services.Context.AuthentificationInfo, isTestPreContrat?: boolean): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        private getPreContratVPCGenererArchiverParams(documentAImprimer, authenticationInfo);
    }
}
