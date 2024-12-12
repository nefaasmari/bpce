
declare module myway.trans.offreCommun.editique {
    var app: any;
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    interface IBordereauDeRetractation {
        GENERIC_LOGO_ETS: GENERIC_LOGO_ETS[];
        corpsDocument: BordereauDeRetractationCorpsDocument[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface GENERIC_LOGO_ETS {
        LOGO_ETABLISSEMENT: GENERIC_LOGO_ETSLOGO_ETABLISSEMENT;
    }
    interface GENERIC_LOGO_ETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface BordereauDeRetractationCorpsDocument {
        BlTitre: number;
        BlAdresseEnvoie: BordereauDeRetractationCorpsDocumentBlAdresseEnvoie[];
        BlDelai: number;
        BlPersMajMinHorsLJ: number;
        BlPersMinLJ: number;
        BlAdresse: number;
        BlCodPostVille: number;
        BlOuvChangOffre: BordereauDeRetractationCorpsDocumentBlOuvChangOffre[];
        BlAvenant: BordereauDeRetractationCorpsDocumentBlAvenant[];
        BlPersMajeur: number;
        BlPersMinHorsLJ: BordereauDeRetractationCorpsDocumentBlPersMinHorsLJ[];
        BlPersMinLJ_1: number;
        BlNumDossier: BordereauDeRetractationCorpsDocumentBlNumDossier[];
        BlMentionsLegales: BordereauDeRetractationCorpsDocumentBlMentionsLegales[];
    }
    interface BordereauDeRetractationCorpsDocumentBlAdresseEnvoie {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
    }
    interface BordereauDeRetractationCorpsDocumentBlOuvChangOffre {
        nomOffre: string;
        nomCaisse: string;
    }
    interface BordereauDeRetractationCorpsDocumentBlAvenant {
        nomCaisse: string;
    }
    interface BordereauDeRetractationCorpsDocumentBlPersMinHorsLJ {
        civiliteEnfant: string;
        prenomEnfant: string;
        nomEnfant: string;
    }
    interface BordereauDeRetractationCorpsDocumentBlNumDossier {
        numDossierVente: string;
    }
    interface BordereauDeRetractationCorpsDocumentBlMentionsLegales {
        mentionsLegCaisse: string;
    }
    class BordereauDeRetractation implements IBordereauDeRetractation {
        GENERIC_LOGO_ETS: GENERIC_LOGO_ETS[];
        corpsDocument: BordereauDeRetractationCorpsDocument[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class BordereauDeRetractationGenererParams {
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
    class BordereauDeRetractationImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    /**
     * Enumération correspondant aux différents blocs à modifier.
     * Ces blocs sont les types tirés de la structure du document GCEDOC et peuvent être amené à changer.
     */
    enum BlocBordereauRetractation {
        BlTitre,
        BlAdresseEnvoie,
        BlDelai,
        BlPersMajMinHorsLJ,
        BlPersMinLJ,
        BlAdresse,
        BlCodPostVille,
        BlOuvChangOffre,
        BlAvenant,
        BlPersMajeur,
        BlPersMinHorsLJ,
        BlPersMinLJ_1,
        BlNumDossier,
        BlMentionsLegales,
    }
    interface IInformationAEditer {
        offre: IOffre;
        signataires: Array<GestionGeneriqueOffres.Types.ISignataire>;
        elementsAEditer: Array<IElementAEditer>;
    }
    interface IElementAEditer {
        contenu: IBlocGenerique;
    }
    interface IBlocGenerique {
        Instance: BlocBordereauRetractation;
    }
    interface IBlocBordereauRetractation extends IBlocGenerique {
        map: Object;
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
        indicValidationOuvertureOffre?: string;
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
    interface IInformationAEditer {
        offre: IOffre;
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
        indicValidationOuvertureOffre?: string;
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
    }
}

declare module myway.trans.offreCommun.editique.lettreAccompagnement {
    interface ILettreAccompagnement extends modeleCommun.IDocument {
        corpsDocument: LettreAccompagnementCorpsDocument[];
        GENERIC_ENTETEETS: GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface LettreAccompagnementCorpsDocument {
        _blocChoice_: (choice_LettreAccompagnementCorpsDocument_BlAdresse | choice_LettreAccompagnementCorpsDocument_BlReferences | choice_LettreAccompagnementCorpsDocument_BlCivilite | choice_LettreAccompagnementCorpsDocument_BlRemerciementPersMaj | choice_LettreAccompagnementCorpsDocument_BlRemerciementPersMinSsLJ | choice_LettreAccompagnementCorpsDocument_BlRemerciementPersMinAvecLJ | choice_LettreAccompagnementCorpsDocument_BlConfMEGIAvChangementBL | choice_LettreAccompagnementCorpsDocument_BlConfMEGIAvChangementBanca | choice_LettreAccompagnementCorpsDocument_BlConfMEGIOuEpargne | choice_LettreAccompagnementCorpsDocument_BlMEGICartePersMajNonIZI | choice_LettreAccompagnementCorpsDocument_BlMEGICartePersMin | choice_LettreAccompagnementCorpsDocument_BlMEGICartePersMajIZI | choice_LettreAccompagnementCorpsDocument_BlMEGIECarteBleue | choice_LettreAccompagnementCorpsDocument_BlEngagMonoDetPersMaj | choice_LettreAccompagnementCorpsDocument_BlEngagMonoDetPersMin | choice_LettreAccompagnementCorpsDocument_BlModalRecepLiasseDom | choice_LettreAccompagnementCorpsDocument_BlModRecLiasAgPerMaj | choice_LettreAccompagnementCorpsDocument_BlModRecLiasAgPerMin | choice_LettreAccompagnementCorpsDocument_BlRenvoiDocDom | choice_LettreAccompagnementCorpsDocument_BlRenvoiDocLJPersMin | choice_LettreAccompagnementCorpsDocument_BlRenvoiDocLGP | choice_LettreAccompagnementCorpsDocument_BlRenvoiPieceJust | choice_LettreAccompagnementCorpsDocument_BlNomPrenom | choice_LettreAccompagnementCorpsDocument_BlPieceJustif | choice_LettreAccompagnementCorpsDocument_BlDefautSignCarteDom | choice_LettreAccompagnementCorpsDocument_BlDefautSignCarteAg | choice_LettreAccompagnementCorpsDocument_BlDefautSignVPCSsLGP | choice_LettreAccompagnementCorpsDocument_BlDefautSignVPCAvLGP | choice_LettreAccompagnementCorpsDocument_BlSignAvDecouvert | choice_LettreAccompagnementCorpsDocument_BlSignAvChequier | choice_LettreAccompagnementCorpsDocument_BlEnvCarteDomPersMaj | choice_LettreAccompagnementCorpsDocument_BlEnvCarteDomPersMin | choice_LettreAccompagnementCorpsDocument_BlEnvCarteDomCaisse | choice_LettreAccompagnementCorpsDocument_BlInfoCarte | choice_LettreAccompagnementCorpsDocument_BlContacter | choice_LettreAccompagnementCorpsDocument_BlSalutation | choice_LettreAccompagnementCorpsDocument_BlAvantSign | choice_LettreAccompagnementCorpsDocument_BlSignCaisse | choice_LettreAccompagnementCorpsDocument_BlLegalAssurance | choice_LettreAccompagnementCorpsDocument_BlNotaBene | choice_LettreAccompagnementCorpsDocument_BlNotaBeneCarte | choice_LettreAccompagnementCorpsDocument_BlApresNotaBene | choice_LettreAccompagnementCorpsDocument_BlMentionLegCaisse)[];
    }
    interface choice_LettreAccompagnementCorpsDocument_BlAdresse {
        BlAdresse: LettreAccompagnementCorpsDocumentBlAdresse;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlReferences {
        BlReferences: LettreAccompagnementCorpsDocumentBlReferences;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlCivilite {
        BlCivilite: LettreAccompagnementCorpsDocumentBlCivilite;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRemerciementPersMaj {
        BlRemerciementPersMaj: LettreAccompagnementCorpsDocumentBlRemerciementPersMaj;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRemerciementPersMinSsLJ {
        BlRemerciementPersMinSsLJ: LettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLJ;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRemerciementPersMinAvecLJ {
        BlRemerciementPersMinAvecLJ: LettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLJ;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlConfMEGIAvChangementBL {
        BlConfMEGIAvChangementBL: LettreAccompagnementCorpsDocumentBlConfMEGIAvChangementBL;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlConfMEGIAvChangementBanca {
        BlConfMEGIAvChangementBanca: LettreAccompagnementCorpsDocumentBlConfMEGIAvChangementBanca;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlConfMEGIOuEpargne {
        BlConfMEGIOuEpargne: LettreAccompagnementCorpsDocumentBlConfMEGIOuEpargne;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlMEGICartePersMajNonIZI {
        BlMEGICartePersMajNonIZI: LettreAccompagnementCorpsDocumentBlMEGICartePersMajNonIZI;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlMEGICartePersMin {
        BlMEGICartePersMin: LettreAccompagnementCorpsDocumentBlMEGICartePersMin;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlMEGICartePersMajIZI {
        BlMEGICartePersMajIZI: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlMEGIECarteBleue {
        BlMEGIECarteBleue: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlEngagMonoDetPersMaj {
        BlEngagMonoDetPersMaj: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlEngagMonoDetPersMin {
        BlEngagMonoDetPersMin: LettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlModalRecepLiasseDom {
        BlModalRecepLiasseDom: LettreAccompagnementCorpsDocumentBlModalRecepLiasseDom;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlModRecLiasAgPerMaj {
        BlModRecLiasAgPerMaj: LettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlModRecLiasAgPerMin {
        BlModRecLiasAgPerMin: LettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRenvoiDocDom {
        BlRenvoiDocDom: LettreAccompagnementCorpsDocumentBlRenvoiDocDom;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRenvoiDocLJPersMin {
        BlRenvoiDocLJPersMin: LettreAccompagnementCorpsDocumentBlRenvoiDocLJPersMin;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRenvoiDocLGP {
        BlRenvoiDocLGP: LettreAccompagnementCorpsDocumentBlRenvoiDocLGP;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlRenvoiPieceJust {
        BlRenvoiPieceJust: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlNomPrenom {
        BlNomPrenom: LettreAccompagnementCorpsDocumentBlNomPrenom;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlPieceJustif {
        BlPieceJustif: LettreAccompagnementCorpsDocumentBlPieceJustif;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlDefautSignCarteDom {
        BlDefautSignCarteDom: LettreAccompagnementCorpsDocumentBlDefautSignCarteDom;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlDefautSignCarteAg {
        BlDefautSignCarteAg: LettreAccompagnementCorpsDocumentBlDefautSignCarteAg;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlDefautSignVPCSsLGP {
        BlDefautSignVPCSsLGP: LettreAccompagnementCorpsDocumentBlDefautSignVPCSsLGP;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlDefautSignVPCAvLGP {
        BlDefautSignVPCAvLGP: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlSignAvDecouvert {
        BlSignAvDecouvert: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlSignAvChequier {
        BlSignAvChequier: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlEnvCarteDomPersMaj {
        BlEnvCarteDomPersMaj: LettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlEnvCarteDomPersMin {
        BlEnvCarteDomPersMin: LettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlEnvCarteDomCaisse {
        BlEnvCarteDomCaisse: LettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlInfoCarte {
        BlInfoCarte: LettreAccompagnementCorpsDocumentBlInfoCarte;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlContacter {
        BlContacter: LettreAccompagnementCorpsDocumentBlContacter;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlSalutation {
        BlSalutation: LettreAccompagnementCorpsDocumentBlSalutation;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlAvantSign {
        BlAvantSign: LettreAccompagnementCorpsDocumentBlAvantSign;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlSignCaisse {
        BlSignCaisse: LettreAccompagnementCorpsDocumentBlSignCaisse;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlLegalAssurance {
        BlLegalAssurance: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlNotaBene {
        BlNotaBene: LettreAccompagnementCorpsDocumentBlNotaBene;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlNotaBeneCarte {
        BlNotaBeneCarte: number;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlApresNotaBene {
        BlApresNotaBene: LettreAccompagnementCorpsDocumentBlApresNotaBene;
    }
    interface choice_LettreAccompagnementCorpsDocument_BlMentionLegCaisse {
        BlMentionLegCaisse: number;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
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
        b10175: GENERIC_PIEDPAGEETSB10175[];
        b13135: GENERIC_PIEDPAGEETSB13135[];
        b13705: GENERIC_PIEDPAGEETSB13705[];
        b14445: GENERIC_PIEDPAGEETSB14445[];
        b14505: GENERIC_PIEDPAGEETSB14505[];
        b15135: GENERIC_PIEDPAGEETSB15135[];
        b15905: GENERIC_PIEDPAGEETSB15905[];
        b15965: GENERIC_PIEDPAGEETSB15965[];
        b16275: GENERIC_PIEDPAGEETSB16275[];
        b18025: GENERIC_PIEDPAGEETSB18025[];
        b18279: GENERIC_PIEDPAGEETSB18279[];
        b43199: GENERIC_PIEDPAGEETSB43199[];
        b18715: GENERIC_PIEDPAGEETSB18715[];
        b13335: GENERIC_PIEDPAGEETSB13335[];
        b17515: GENERIC_PIEDPAGEETSB17515[];
        b62108: GENERIC_PIEDPAGEETSB62108[];
        b12579: GENERIC_PIEDPAGEETSB12579[];
        b13825: GENERIC_PIEDPAGEETSB13825[];
        b16705: GENERIC_PIEDPAGEETSB16705[];
        b12135: GENERIC_PIEDPAGEETSB12135[];
        b14265: GENERIC_PIEDPAGEETSB14265[];
        b13485: GENERIC_PIEDPAGEETSB13485[];
        b18315: GENERIC_PIEDPAGEETSB18315[];
        b11315: GENERIC_PIEDPAGEETSB11315[];
        b11425: GENERIC_PIEDPAGEETSB11425[];
        b12548: GENERIC_PIEDPAGEETSB12548[];
        b30051: GENERIC_PIEDPAGEETSB30051[];
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
    interface LettreAccompagnementCorpsDocumentBlAdresse {
        civilite: string;
        prenom: string;
        nom: string;
        ligneAdresseDeux: string;
        ligneAdresseTrois: string;
        ligneAdresseQuatre: string;
        ligneAdresseCinq: string;
        ligneAdresseSix: string;
    }
    interface LettreAccompagnementCorpsDocumentBlApresNotaBene {
        libelle: string;
    }
    interface LettreAccompagnementCorpsDocumentBlAvantSign {
        libelle: string;
    }
    interface LettreAccompagnementCorpsDocumentBlCivilite {
        civilite: string;
    }
    interface LettreAccompagnementCorpsDocumentBlConfMEGIAvChangementBL {
        souscriptionModification: string;
        nomOffreProduit: string;
        prixBouql: string;
        indicateurAssurrance: string;
    }
    interface LettreAccompagnementCorpsDocumentBlConfMEGIAvChangementBanca {
        souscriptionModification: string;
        nomOffreProduit: string;
    }
    interface LettreAccompagnementCorpsDocumentBlConfMEGIOuEpargne {
        nomOffreProduit: string;
    }
    interface LettreAccompagnementCorpsDocumentBlContacter {
        libelle: string;
    }
    interface LettreAccompagnementCorpsDocumentBlDefautSignCarteAg {
        souscriptionContrat: string;
        sousModAvenant: string;
        clotureSansFrai: string;
        resiliationSansFrai: string;
    }
    interface LettreAccompagnementCorpsDocumentBlDefautSignCarteDom {
        souscriptionContrat: string;
        souscriptionAvenant: string;
        modificationContrat: string;
        clotureSansFrai: string;
        resiliationSansFrai: string;
    }
    interface LettreAccompagnementCorpsDocumentBlDefautSignVPCSsLGP {
        souscriptionContrat: string;
        sousModAvenant: string;
        modificationContrat: string;
    }
    interface LettreAccompagnementCorpsDocumentBlEngagMonoDetPersMin {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface LettreAccompagnementCorpsDocumentBlEnvCarteDomCaisse {
        libelle: string;
    }
    interface LettreAccompagnementCorpsDocumentBlEnvCarteDomPersMaj {
        cpSigne: string;
        avsigne: string;
        presenceAssurance: string;
        presenceIZICarte: string;
    }
    interface LettreAccompagnementCorpsDocumentBlEnvCarteDomPersMin {
        cpSigne: string;
        avSigne: string;
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface LettreAccompagnementCorpsDocumentBlInfoCarte {
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface LettreAccompagnementCorpsDocumentBlMEGICartePersMajNonIZI {
        typeCarte: string;
    }
    interface LettreAccompagnementCorpsDocumentBlMEGICartePersMin {
        typeCarte: string;
        civilite: string;
        prenom: string;
        nom: string;
    }
    interface LettreAccompagnementCorpsDocumentBlModRecLiasAgPerMaj {
        cpAvContrat: string;
        presenceAssurance: string;
        conditionTarifaire: string;
        presenceCarte: string;
        cpAVContratDeux: string;
        presenceAssuranceDeux: string;
    }
    interface LettreAccompagnementCorpsDocumentBlModRecLiasAgPerMin {
        cpAvContrat: string;
        conditionTarifaire: string;
        presenceCarte: string;
        civilite: string;
        prenom: string;
        nom: string;
        cpAvContratDeux: string;
    }
    interface LettreAccompagnementCorpsDocumentBlModalRecepLiasseDom {
        exemplaireDocument: string;
        nomOffre: string;
        indicateurPresenceAssurance: string;
        indicateurEcheancier: string;
        indicateurBordereau: string;
        conditionTarifaire: string;
        indicateurCarteIZIOuNonIZI: string;
        indicateurBordereauRetractation: string;
        point: string;
        messageIndicateurCarteIZI: string;
    }
    interface LettreAccompagnementCorpsDocumentBlNomPrenom {
        prenom: string;
        nom: string;
    }
    interface LettreAccompagnementCorpsDocumentBlNotaBene {
        cpSigne: string;
        signRenvCP: string;
        signAv: string;
        conditionParticuliere: string;
        avenant: string;
    }
    interface LettreAccompagnementCorpsDocumentBlPieceJustif {
        pieceJustif: string;
    }
    interface LettreAccompagnementCorpsDocumentBlReferences {
        numDossierVente: string;
        idClient: string;
    }
    interface LettreAccompagnementCorpsDocumentBlRemerciementPersMaj {
        dateAppel: string;
        souscription: string;
        nomOffreProduit: string;
        rappelConditionsParticulieres: string;
    }
    interface LettreAccompagnementCorpsDocumentBlRemerciementPersMinAvecLJ {
        dateAppel: string;
        civilite: string;
        prenom: string;
        nom: string;
        souscription: string;
        nomOffreProduit: string;
        rappelConditionsParticulieres: string;
    }
    interface LettreAccompagnementCorpsDocumentBlRemerciementPersMinSsLJ {
        dateAppel: string;
        souscription: string;
        nomOffreProduit: string;
        civilite: string;
        prenom: string;
        nom: string;
        rappelConditionsParticulieres: string;
    }
    interface LettreAccompagnementCorpsDocumentBlRenvoiDocDom {
        cpAv: string;
        presenceCarteIZI: string;
        presenceAssurance: string;
        paiementCheque: string;
        ceNb: string;
        optionUn: string;
        optionDeux: string;
        optionTrois: string;
        optionQuatre: string;
    }
    interface LettreAccompagnementCorpsDocumentBlRenvoiDocLGP {
        presenceCheque: string;
        optionUn: string;
        optionDeux: string;
        optionTrois: string;
        optionQuatre: string;
    }
    interface LettreAccompagnementCorpsDocumentBlRenvoiDocLJPersMin {
        civilite: string;
        prenom: string;
        nom: string;
        optionUn: string;
        optionDeux: string;
        optionTrois: string;
        optionQuatre: string;
    }
    interface LettreAccompagnementCorpsDocumentBlSalutation {
        civilite: string;
    }
    interface LettreAccompagnementCorpsDocumentBlSignCaisse {
        denoSignataire: string;
        nomConseiller: string;
    }
    class LettreAccompagnement implements ILettreAccompagnement {
        corpsDocument: LettreAccompagnementCorpsDocument[];
        GENERIC_ENTETEETS: GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    /**
     *
     *
     *
     */
    class LettreAccompagnementGenererParams implements modeleCommun.IDocument {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionParams implements modeleCommun.IDocument {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module myway.trans.offreCommun.editique.modeleCommun {
    class CodeTypeDocument {
        static LA04: string;
        static BORE: string;
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
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        private getBordereauRetractationImpressionParams();
        private setParametresActiveXIndividuels(documentAImprimer, paramsActiveXIndividuels);
    }
}

declare module myway.trans.offreCommun.editique.BordereauRetractation {
    interface IBordereauRetractationService {
        /**
         * Services qui récupère les données du bordereau de retractation
         *
         * @return{IBordereauRetractationService}
         */
        getDonneesBordereauRetractation(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<BordereauDeRetractationCorpsDocument>;
    }
    class BordereauRetractationService implements IBordereauRetractationService {
        private $q;
        private serviceAgentExtended;
        static IMPRESSION_BLOCS_A_EDITER_URL: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IConditionsPartictulieresService.getBlocsAEditer }
         */
        getDonneesBordereauRetractation(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<BordereauDeRetractationCorpsDocument>;
        /** permet de fixer le blocs constants du document bordereau de retractation */
        private initialiserDonneeBordereauRetractation(donneesCorpsDocument);
        /** Permet d'extraire depuis le contexte la caisse et le nom de l'offre  pour le bloc BlOuvChangOffre */
        private getDonneesBlOuvChangOffre(contexteEditique);
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
        createDocument(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<IBordereauDeRetractation>;
        /** Promesse de création du document bordereau de retractation */
        private construireBordereauRetractation(donneesBordereauRetractation, contexteEditique);
        /** Permet de construire le corps de la lettre d'accompagnement **/
        /** Construit le boc titre du bordereau de retractation */
        private construireBlocTitre(blocsBordereauRetractation);
        /** Construit le boc adresse de la lette d'accompagnement */
        private construireBlocAdresseEnvoie(blocsBordereauRetractation, adresse);
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
        createDocument(contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<ILettreAccompagnement>;
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
        getDocument(documentAImprimer: modeleCommun.IDocumentAImprimer, contexteEditique: GestionGeneriqueOffres.Types.IContexteEditique): ng.IPromise<modeleCommun.IDocumentAGenerer>;
        private getLettreAccompagnementImpressionParams();
        private setParametresActiveXIndividuels(documentAImprimer, paramsActiveXIndividuels);
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
        getBlocsAImprimerLettreAccompagnement(parametre: ILettreAccompagnement): ng.IPromise<IInformationAEditer>;
    }
    class LettreAccompagnementService implements ILettreAccompagnementService {
        private $q;
        private serviceAgentExtended;
        static IMPRESSION_BLOCS_A_EDITER_URL: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IConditionsPartictulieresService.getBlocsAEditer }
         */
        getBlocsAImprimerLettreAccompagnement(): ng.IPromise<IInformationAEditer>;
        getBlocsAImprimerLettreAccompagnementMock(): ng.IPromise<IInformationAEditer>;
    }
}
