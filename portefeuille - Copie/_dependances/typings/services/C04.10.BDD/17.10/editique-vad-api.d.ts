
declare module myway.trans.offreCommun.editique {
    var app: any;
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
    }
    interface IbordereauDeRetractationCorpsDocumentBlOuvChangOffre {
        nomOffre: string;
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
        static getOffre(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): IOffre;
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
        BlMEGICartePersMajIZI,
        BlMEGIECarteBleue,
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
    interface ILetVenteADistBancaEp {
        offre: modeleCommun.IOffre;
        signataires: GestionGeneriqueOffres.Types.ISignataire[];
        elementsAEditer: IElementAEditer[];
        methodeRestitution: string;
        ancienneOffre: modeleCommun.IAncienneOffre;
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
    interface IInformationAEditer {
        signataires: Array<GestionGeneriqueOffres.Types.ISignataire>;
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    interface IlettreAccompagnement {
        corpsDocument: IlettreAccompagnementCorpsDocument[];
        genericEnteteets: IgenericEnteteets[];
        genericPiedpageets: IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IlettreAccompagnementCorpsDocument {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06 | Ich07 | Ich08 | Ich09 | Ich010 | Ich011 | Ich012 | Ich013 | Ich014 | Ich015 | Ich016 | Ich017 | Ich018 | Ich019 | Ich020 | Ich021 | Ich022 | Ich023 | Ich024 | Ich025 | Ich026 | Ich027 | Ich028 | Ich029 | Ich030 | Ich031 | Ich032 | Ich033 | Ich034 | Ich035 | Ich036 | Ich037 | Ich038 | Ich039 | Ich040 | Ich041 | Ich042)[];
    }
    interface Ich00 {
        blAdresse: IblAdresse;
    }
    interface Ich01 {
        blReferences: IblReferences;
    }
    interface Ich02 {
        blCivilite: IblCivilite;
    }
    interface Ich03 {
        blRemerciementPersMaj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMaj;
    }
    interface Ich04 {
        blRemerciementPersMinSsLj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLj;
    }
    interface Ich05 {
        blRemerciementPersMinAvecLj: IlettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLj;
    }
    interface Ich06 {
        blConfMegiavChangementBl: IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBl;
    }
    interface Ich07 {
        blConfMegiavChangementBanca: IlettreAccompagnementCorpsDocumentBlConfMegiavChangementBanca;
    }
    interface Ich08 {
        blConfMegiouEpargne: IlettreAccompagnementCorpsDocumentBlConfMegiouEpargne;
    }
    interface Ich09 {
        blMegicartePersMajNonIzi: IlettreAccompagnementCorpsDocumentBlMegicartePersMajNonIzi;
    }
    interface Ich010 {
        blMegicartePersMin: IlettreAccompagnementCorpsDocumentBlMegicartePersMin;
    }
    interface Ich011 {
        blMegicartePersMajIzi: number;
    }
    interface Ich012 {
        blMegiecarteBleue: number;
    }
    interface Ich013 {
        blEngagMonoDetPersMaj: number;
    }
    interface Ich014 {
        blEngagMonoDetPersMin: IlettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin;
    }
    interface Ich015 {
        blModalRecepLiasseDom: IlettreAccompagnementCorpsDocumentBlModalRecepLiasseDom;
    }
    interface Ich016 {
        blModRecLiasAgPerMaj: IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj;
    }
    interface Ich017 {
        blModRecLiasAgPerMin: IlettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin;
    }
    interface Ich018 {
        blRenvoiDocDom: IlettreAccompagnementCorpsDocumentBlRenvoiDocDom;
    }
    interface Ich019 {
        blRenvoiDocLjpersMin: IlettreAccompagnementCorpsDocumentBlRenvoiDocLjpersMin;
    }
    interface Ich020 {
        blRenvoiDocLgp: IlettreAccompagnementCorpsDocumentBlRenvoiDocLgp;
    }
    interface Ich021 {
        blRenvoiPieceJust: number;
    }
    interface Ich022 {
        blNomPrenom: IlettreAccompagnementCorpsDocumentBlNomPrenom;
    }
    interface Ich023 {
        blPieceJustif: IlettreAccompagnementCorpsDocumentBlPieceJustif;
    }
    interface Ich024 {
        blDefautSignCarteDom: IlettreAccompagnementCorpsDocumentBlDefautSignCarteDom;
    }
    interface Ich025 {
        blDefautSignCarteAg: IlettreAccompagnementCorpsDocumentBlDefautSignCarteAg;
    }
    interface Ich026 {
        blDefautSignVpcssLgp: IlettreAccompagnementCorpsDocumentBlDefautSignVpcssLgp;
    }
    interface Ich027 {
        blDefautSignVpcavLgp: number;
    }
    interface Ich028 {
        blSignAvDecouvert: number;
    }
    interface Ich029 {
        blSignAvChequier: number;
    }
    interface Ich030 {
        blEnvCarteDomPersMaj: IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj;
    }
    interface Ich031 {
        blEnvCarteDomPersMin: IlettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin;
    }
    interface Ich032 {
        blEnvCarteDomCaisse: IlettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse;
    }
    interface Ich033 {
        blInfoCarte: IlettreAccompagnementCorpsDocumentBlInfoCarte;
    }
    interface Ich034 {
        blContacter: IblContacter;
    }
    interface Ich035 {
        blSalutation: IblSalutation;
    }
    interface Ich036 {
        blAvantSign: IblAvantSign;
    }
    interface Ich037 {
        blSignCaisse: IblSignCaisse;
    }
    interface Ich038 {
        blLegalAssurance: number;
    }
    interface Ich039 {
        blNotaBene: IlettreAccompagnementCorpsDocumentBlNotaBene;
    }
    interface Ich040 {
        blNotaBeneCarte: number;
    }
    interface Ich041 {
        blApresNotaBene: IblApresNotaBene;
    }
    interface Ich042 {
        blMentionLegCaisse: number;
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
    interface IblAdresse {
        civilite: string;
        prenom: string;
        nom: string;
        ligneAdresseDeux: string;
        ligneAdresseTrois: string;
        ligneAdresseQuatre: string;
        ligneAdresseCinq: string;
        ligneAdresseSix: string;
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
        avsigne: string;
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
        cpAvcontratDeux: string;
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
        presenceCarteIzi: string;
        presenceAssurance: string;
        paiementCheque: string;
        ceNb: string;
        optionUn: string;
        optionDeux: string;
        optionTrois: string;
        optionQuatre: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocLgp {
        presenceCheque: string;
        optionUn: string;
        optionDeux: string;
        optionTrois: string;
        optionQuatre: string;
    }
    interface IlettreAccompagnementCorpsDocumentBlRenvoiDocLjpersMin {
        civilite: string;
        prenom: string;
        nom: string;
        optionUn: string;
        optionDeux: string;
        optionTrois: string;
        optionQuatre: string;
    }
    class LettreAccompagnement implements IlettreAccompagnement {
        corpsDocument: IlettreAccompagnementCorpsDocument[];
        genericEnteteets: IgenericEnteteets[];
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
        blPieceJustificative: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPieceJustificative[];
        blAenvoye: number;
        blPasMsi: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi[];
        blMsichoisirObj: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj[];
        blMsirepMsgCons: IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons[];
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
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPieceJustificative {
        libelle: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi {
        adresseRetourPieces: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj {
        adresseRetourPieces: string;
        objetCaisse: string;
    }
    interface IlistePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons {
        adresseRetourPieces: string;
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
        static NRMC: string;
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
        createDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, topEcheancier: string): ng.IPromise<IlettreAccompagnement>;
        /** Promesse de création du document de la note bâle 2 */
        private construireLettreAccompagnement(donneesLettreAccomapagnement, contexteEditique);
        /** Permet de construire le corps de la lettre d'accompagnement **/
        private construireCorpsLettreAccompagnement(corpsDocument, donneesLettreAccomapagnement);
        private mapperBlocsLettreAccompagnement(contenuSection, bloc);
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
        private constuireBlocMEGICartePersMajeureIZI(blocsLettreAccomapagnement);
        /** Construit le bloc de mise en gestion E carte bleue */
        private constuireBlocMEGIECarteBleue(blocsLettreAccomapagnement);
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
        /** Construit le bloc mention legale caisse */
        private constuireBlocMentionLegaleCaisse(blocsLettreAccomapagnement);
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, listePiecesJustificativesService: ListePiecesJustificativesService);
        createDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<IlistePiecesJustificatives>;
        /** Promesse de création du document listes des pièces justificatives*/
        private construireListePiecesJustificatives(donneesListePiecesJustificative, contexteEditique);
        /**
         * Permet de construire le corps du du document liste des pièces justificatives, il reçoit en entrée les blocs du service et les transforme en modèle GCEDOC
         * @param
         * @return  IlistePiecesJustificativesPiecesJustificativesCorpsDocument[]
         */
        private construireCorpsPiecesJustifivatives(elementsAEditer);
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
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique, authenticationInfo: MyWay.Services.Context.AuthentificationInfo, topEcheancier: string): ng.IPromise<modeleCommun.IDocumentAGenerer>;
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
        getDonneesListesPiecesJustificativesMock(): ng.IPromise<IlistePiecesJustificativesPiecesJustificativesCorpsDocument>;
    }
    class ListePiecesJustificativesService implements IListePiecesJustificativesService {
        private $q;
        private serviceAgentExtended;
        static IMPRESSION_LISTES_PIECES_JUSTIFICATIVES: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IConditionsPartictulieresService.getBlocsAEditer }
         */
        getDonneesListesPiecesJustificativesMock(): ng.IPromise<IlistePiecesJustificativesPiecesJustificativesCorpsDocument>;
    }
}
