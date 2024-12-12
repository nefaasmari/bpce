
declare module BanqueAuQuotidien {
    var app: any;
}

/**
 * Controleur de la page Banque au quotidien
 * @module BanqueAuQuotidien
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien {
    class BanqueAuQuotidienControleur {
        private $scope;
        private informationsGlobalesService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        constructor($scope: ng.IScope, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService);
    }
}

declare module BanqueAuQuotidien {
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module BanqueAuQuotidien.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module BanqueAuQuotidien.Modeles {
    interface IParametresBaqInfosGenerales {
        dateOuverture: Date;
        dateCloture: Date;
        motifClotureCompte: string;
        libelleCompte: string;
        libelleLongNatureCompte: string;
        offre: string;
    }
    interface IParametresBaqPositionCompte {
        soldeValeur: number;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        soldeDisponible: number;
    }
    interface IParametresBaqSoldeDisponible {
        solde: ComposantsCommunsConsultationCCE.Modeles.SyntheseFinanciere.ISolde;
        listeMontant: ComposantsCommunsConsultationCCE.Modeles.SyntheseFinanciere.IMontant[];
        nombreDecimalesReelles: number;
        symboleDevise: string;
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        indicateurFusion: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IIndicateurFusion;
    }
    interface IParametresBaqSoldePrevisionnel {
        listeCompte: ComposantsCommunsConsultationCCE.Modeles.SoldePrevisionnel.ICompteFusion[];
        listeDateSoldePrevisionnel: ComposantsCommunsConsultationCCE.Modeles.SoldePrevisionnel.IDateSoldePrevisionnel[];
        nombreDecimalesReelles: number;
        symboleDevise: string;
        numeroEntiteTitulaire: number;
        codeDevise: string;
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
    }
    interface IParametresBaqFonctionnement {
        typeFonctionnement: string;
        montantSeuilRemarquable: number;
        surveillance: string;
        creerUnDecouvert: string;
        depasserAutorisationDecouvert: string;
        commanderChequier: string;
        commanderCarte: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        ancienCompte: string;
        compteSupportTarification: string;
        comptePrelevementAgios: string;
    }
    interface IParametresBaqCoordonnees {
        intituleClientBancaire: string;
        siret: string;
        adresseSiegeSocial: string;
        adresseCorrespondance: string;
    }
    interface IParametresBaqCartesAssociees {
        listeCartesAssociees: ComposantsCommunsConsultationCCE.Modeles.CartesAssociees.IDateCartesAssociees[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
    }
    interface IParametresBaqCartesAssocieesHistoriqueDesCartes {
        listeHistoriqueCartesAssociees: ComposantsCommunsConsultationCCE.Modeles.CartesAssociees.IHistoriqueDesCartes[];
        utilisateur: any;
        identifiantDuSupportDeCarte: string;
        libelleLongDuVisuelDeLaCarte: string;
        situation: any;
    }
}

declare module BanqueAuQuotidien.Modeles.syntheseFinanciere {
    interface IsyntheseFinanciere {
        section1: BanqueAuQuotidien.Modeles.syntheseFinanciere.IsyntheseFinanciereSection1[];
        genericEnteteets: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericEnteteets[];
        genericPiedpageets: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsyntheseFinanciereSection1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06)[];
    }
    interface Ich00 {
        blTitre: IsyntheseFinanciereSection1BlTitre;
    }
    interface Ich01 {
        genericInfoPp: IgenericInfoPp;
    }
    interface Ich02 {
        genericInfoPm: IgenericInfoPm;
    }
    interface Ich03 {
        blEntete1: IsyntheseFinanciereSection1BlEntete1;
    }
    interface Ich04 {
        blEntete2: IsyntheseFinanciereSection1BlEntete2;
    }
    interface Ich05 {
        blEntete3: IsyntheseFinanciereSection1BlEntete3;
    }
    interface Ich06 {
        blCorps: IsyntheseFinanciereSection1BlCorps;
    }
    interface IgenericEnteteets {
        logoEtablissement: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericEnteteetsLogoEtablissement;
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
        b10175: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB10175[];
        b13135: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB13135[];
        b13705: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB13705[];
        b14445: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB14445[];
        b14505: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB14505[];
        b15135: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB15135[];
        b15905: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB15905[];
        b15965: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB15965[];
        b16275: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB16275[];
        b18025: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB18025[];
        b18279: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB18279[];
        b43199: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB43199[];
        b18715: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB18715[];
        b13335: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB13335[];
        b17515: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB17515[];
        b62108: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB62108[];
        b12579: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB12579[];
        b13825: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB13825[];
        b16705: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB16705[];
        b12135: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB12135[];
        b14265: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB14265[];
        b13485: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB13485[];
        b18315: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB18315[];
        b11315: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB11315[];
        b11425: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB11425[];
        b12548: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB12548[];
        b30051: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageetsB30051[];
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
    interface IsyntheseFinanciereSection1BlCorps {
        liste1: BanqueAuQuotidien.Modeles.syntheseFinanciere.IsyntheseFinanciereSection1BlCorpsListe1[];
    }
    interface IsyntheseFinanciereSection1BlCorpsListe1 {
        blocChoiceJson: (Ich10 | Ich11 | Ich12)[];
    }
    interface Ich10 {
        ligne1: number;
    }
    interface Ich11 {
        ligne2: IsyntheseFinanciereSection1BlCorpsListe1Ligne2;
    }
    interface Ich12 {
        ligne3: IsyntheseFinanciereSection1BlCorpsListe1Ligne3;
    }
    interface IsyntheseFinanciereSection1BlCorpsListe1Ligne2 {
        libTitreTableau1: string;
        libTitreTableau2: string;
        libTitreTableau3: string;
        libTitreTableau4: string;
        libTitreTableau5: string;
        libTitreTableau6: string;
        libTitreTableau7: string;
    }
    interface IgenericInfoPm {
        listePersonnes: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericInfoPmListePersonnes[];
    }
    interface IgenericInfoPmListePersonnes {
        blocChoiceJson: (Ich30 | Ich31)[];
    }
    interface Ich30 {
        titreRole: IgenericInfoPmListePersonnesTitreRole;
    }
    interface Ich31 {
        infosPm: IgenericInfoPmListePersonnesInfosPm;
    }
    interface IgenericInfoPmListePersonnesInfosPm {
        lidars: string;
        dadatj: string;
        lidgv26: string;
        idnsbd: string;
        nodatp: string;
    }
    interface IgenericInfoPmListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IgenericInfoPp {
        listePersonnes: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericInfoPpListePersonnes[];
    }
    interface IgenericInfoPpListePersonnes {
        blocChoiceJson: (Ich20 | Ich21 | Ich22 | Ich23 | Ich24)[];
    }
    interface Ich20 {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface Ich21 {
        infosPers: IgenericInfoPpListePersonnesInfosPers;
    }
    interface Ich22 {
        infosPers2: IgenericInfoPpListePersonnesInfosPers2;
    }
    interface Ich23 {
        infosPers3: IgenericInfoPpListePersonnesInfosPers3;
    }
    interface Ich24 {
        infosPersVide: number;
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
    interface IsyntheseFinanciereSection1BlCorpsListe1Ligne3 {
        libCol1: string;
        libCol2: string;
        libCol3: string;
        libCol4: string;
        libCol5: string;
        libCol6: string;
        libCol7: string;
    }
    interface IsyntheseFinanciereSection1BlEntete1 {
        libData1: string;
        libData2: string;
        libData3: string;
        libData4: string;
        libData9: string;
        libData5: string;
        libData6: string;
        libData9Bis: string;
        libData10: string;
        libData11: string;
        libData9Bis3: string;
        libData7: string;
        libData8: string;
        libData9Bis2: string;
    }
    interface IsyntheseFinanciereSection1BlEntete2 {
        libData1: string;
        libData2: string;
        libData7: string;
        libData3: string;
        libData4: string;
        libData7Bis: string;
        libData5: string;
        libData6: string;
        libData7Bis2: string;
    }
    interface IsyntheseFinanciereSection1BlEntete3 {
        libData1: string;
        libData2: string;
        libData3: string;
    }
    interface IsyntheseFinanciereSection1BlTitre {
        libTitre: string;
    }
    class SyntheseFinanciere implements IsyntheseFinanciere {
        section1: BanqueAuQuotidien.Modeles.syntheseFinanciere.IsyntheseFinanciereSection1[];
        genericEnteteets: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericEnteteets[];
        genericPiedpageets: BanqueAuQuotidien.Modeles.syntheseFinanciere.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SyntheseFinanciereArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SyntheseFinanciereGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SyntheseFinanciereArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SyntheseFinanciereImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SyntheseFinanciereArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SyntheseFinanciereImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module BanqueAuQuotidien.Modeles.sidbgceSolde {
    interface IsidbgceSolde {
        section1: BanqueAuQuotidien.Modeles.sidbgceSolde.IsidbgceSoldeSection1[];
        genericEnteteets: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericEnteteets[];
        genericPiedpageets: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsidbgceSoldeSection1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04)[];
    }
    interface Ich00 {
        genericInfoPm: IgenericInfoPm;
    }
    interface Ich01 {
        genericInfoPp: IgenericInfoPp;
    }
    interface Ich02 {
        bl1: IsidbgceSoldeSection1Bl1;
    }
    interface Ich03 {
        blEntete: IsidbgceSoldeSection1BlEntete;
    }
    interface Ich04 {
        blCorps: IsidbgceSoldeSection1BlCorps;
    }
    interface IgenericEnteteets {
        logoEtablissement: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericEnteteetsLogoEtablissement;
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
        b10175: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB10175[];
        b13135: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB13135[];
        b13705: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB13705[];
        b14445: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB14445[];
        b14505: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB14505[];
        b15135: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB15135[];
        b15905: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB15905[];
        b15965: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB15965[];
        b16275: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB16275[];
        b18025: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB18025[];
        b18279: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB18279[];
        b43199: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB43199[];
        b18715: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB18715[];
        b13335: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB13335[];
        b17515: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB17515[];
        b62108: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB62108[];
        b12579: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB12579[];
        b13825: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB13825[];
        b16705: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB16705[];
        b12135: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB12135[];
        b14265: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB14265[];
        b13485: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB13485[];
        b18315: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB18315[];
        b11315: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB11315[];
        b11425: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB11425[];
        b12548: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB12548[];
        b30051: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageetsB30051[];
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
    interface IsidbgceSoldeSection1Bl1 {
        titre: string;
    }
    interface IgenericInfoPp {
        listePersonnes: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericInfoPpListePersonnes[];
    }
    interface IgenericInfoPpListePersonnes {
        blocChoiceJson: (Ich30 | Ich31 | Ich32 | Ich33 | Ich34)[];
    }
    interface Ich30 {
        titreRole: IgenericInfoPpListePersonnesTitreRole;
    }
    interface Ich31 {
        infosPers: IgenericInfoPpListePersonnesInfosPers;
    }
    interface Ich32 {
        infosPers2: IgenericInfoPpListePersonnesInfosPers2;
    }
    interface Ich33 {
        infosPers3: IgenericInfoPpListePersonnesInfosPers3;
    }
    interface Ich34 {
        infosPersVide: number;
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
    interface IgenericInfoPm {
        listePersonnes: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericInfoPmListePersonnes[];
    }
    interface IgenericInfoPmListePersonnes {
        blocChoiceJson: (Ich20 | Ich21)[];
    }
    interface Ich20 {
        titreRole: IgenericInfoPmListePersonnesTitreRole;
    }
    interface Ich21 {
        infosPm: IgenericInfoPmListePersonnesInfosPm;
    }
    interface IgenericInfoPmListePersonnesInfosPm {
        lidars: string;
        dadatj: string;
        lidgv26: string;
        idnsbd: string;
        nodatp: string;
    }
    interface IgenericInfoPmListePersonnesTitreRole {
        libCtdhli: string;
    }
    interface IsidbgceSoldeSection1BlCorps {
        liste0: BanqueAuQuotidien.Modeles.sidbgceSolde.IsidbgceSoldeSection1BlCorpsListe0[];
    }
    interface IsidbgceSoldeSection1BlCorpsListe0 {
        blocChoiceJson: (Ich10 | Ich11 | Ich12)[];
    }
    interface Ich10 {
        ligne1: IsidbgceSoldeSection1BlCorpsListe0Ligne1;
    }
    interface Ich11 {
        ligne2: IsidbgceSoldeSection1BlCorpsListe0Ligne2;
    }
    interface Ich12 {
        ligne3: number;
    }
    interface IsidbgceSoldeSection1BlCorpsListe0Ligne1 {
        d10: string;
        d11: string;
        d12: string;
        d13: string;
        d14: string;
        d15: string;
        d16: string;
        d17: string;
    }
    interface IsidbgceSoldeSection1BlCorpsListe0Ligne2 {
        d1: string;
        d2: string;
        d3: string;
        d4: string;
        d5: string;
        d6: string;
        d7: string;
        d8: string;
        d9: string;
    }
    interface IsidbgceSoldeSection1BlEntete {
        d1: string;
    }
    class SidbgceSolde implements IsidbgceSolde {
        section1: BanqueAuQuotidien.Modeles.sidbgceSolde.IsidbgceSoldeSection1[];
        genericEnteteets: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericEnteteets[];
        genericPiedpageets: BanqueAuQuotidien.Modeles.sidbgceSolde.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SidbgceSoldeArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SidbgceSoldeGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SidbgceSoldeArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SidbgceSoldeImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SidbgceSoldeArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SidbgceSoldeImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module BanqueAuQuotidien.Modeles {
    interface IRechercheOperation {
        recherche: IRecherche;
        resultat: IResultat;
    }
    interface IOperation {
        dateEmissionEvenement: Date;
        codeEvenementAtome: string;
        codeModeFinancier: string;
        codeOrigineOperation: string;
        referenceExterneEDSNiveau2: number;
        referenceExterneEDSNiveau1: number;
        dateOperation: Date;
        dateDeValeur: Date;
        deuxiemeLibelleReleveCompte: string;
        codeDeviseMontantOperation: string;
        codeAnnulationOperation: string;
        codeSensImputation: string;
        numeroCheque: string;
        nombreQuinzainesRestantACourir: number;
        montantSoldeAvantOperation: number;
        codeOperationOrigine: string;
        montantGlobalOperation: number;
        codeMonnaiePriseOrdre: string;
        codeMonnaiePriseOrdreLong: string;
        typeElementStructure: string;
        codeMoyenPaiement: string;
        typeMoyenPaiement: string;
        timestampCreationOperation: string;
        codeOrigineReference: string;
        referenceOperation: string;
        numeroCarte: string;
        codeEtablissement: string;
        premierLibelleReleveCompte: string;
        mntBrutOperationParDevTCompte: number;
        numeroNationalEmetteur: string;
        codeProvenanceLotMQseries: string;
        ancienneProvenanceLotMQseries: string;
        identifiantAgent: number;
    }
    interface IRecherche {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateDebutSelection: string;
        dateFinSelection: string;
        codeTypeInterrogation: string;
        codeTypeOperations: string;
        montantMinimum: number;
        montantMaximum: number;
        numeroDebutCheque: string;
        numeroFinCheque: string;
        nombreOperations: number;
        typeQuestion: string;
        codeTypeTraitement: string;
        timestampSuivant: string;
    }
    interface IResultat {
        codeSuiteTraitement: string;
        listeOperations: Modeles.IOperation[];
        nombreOperationsRenvoyees: number;
        timestampSuivant: string;
    }
    interface IModalDataRecherche {
        model: Array<IOperation>;
    }
    /**
     * tous les codes utiles à la recherche d'opérations et définis dans REST-IT
     */
    class CodesRecherche {
        static TOUT: string;
        static OPE_TOUTES: string;
        static TRI_RECENT: string;
        static TRI_ANCIEN: string;
    }
    /**
     * liste des types d'opérations
     */
    class TypeOperations extends MyWay.Services.StringEnum {
        static TOUTES: TypeOperations;
    }
    /**
     * liste des options de tri
     */
    class TypeTri extends MyWay.Services.StringEnum {
        static RECENT: TypeTri;
        static ANCIEN: TypeTri;
    }
}

declare module BanqueAuQuotidien.Services.syntheseFinanciere {
    function createGenererParams(): Modeles.syntheseFinanciere.SyntheseFinanciereGenererParams;
    function createImpressionParams(): Modeles.syntheseFinanciere.SyntheseFinanciereImpressionParams;
    function createDocument(contexteEditique: any, parametresBaqSoldeDisponible: any, listeTiers: ComposantsCommunsConsultationCCE.Modeles.TiersRecherche.ITiers[], tiersNoyau: ComposantsCommunsConsultationCCE.Modeles.TiersNoyau.ITiersNoyau, bandeauClient: ComposantsCommunsConsultationCCE.Modeles.OutilImpressionBandeauClientService.IBandeauClient, cleRice: string): Modeles.syntheseFinanciere.SyntheseFinanciere;
}

declare module BanqueAuQuotidien.Services.sidbgceSolde {
    function createGenererParams(): Modeles.sidbgceSolde.SidbgceSoldeGenererParams;
    function createImpressionParams(): Modeles.sidbgceSolde.SidbgceSoldeImpressionParams;
    function createDocument(contexteEditique: any, bandeauClient: ComposantsCommunsConsultationCCE.Modeles.OutilImpressionBandeauClientService.IBandeauClient, parametresBaqSoldePrevisionnel: any): Modeles.sidbgceSolde.SidbgceSolde;
}

declare module BanqueAuQuotidien.Services {
    class HistoriqueOperationCompteService {
        private serviceAgentExtended;
        static $inject: string[];
        static RECHERCHE_OPERATIONS: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * appel REST de recherche d'opérations
         * @param {string} typeRecherche le type de recherche (AUC/VIR/CB/ESP/DEP/PRV/AUT/NOPE/CHQ/SCHQ/TCHQ/DATE/DAD/DDAT/MNT/SMNT)
         * @param {IRecherche} json l'objet contenant les paramètres de la recherche (en rapport avec le type de recherche effectuée)
         * @returns promise<IResultat> contenant la liste des résultats de la recherche
         */
        rechercherOperations: (typeRecherche: string, json: Modeles.IRecherche) => ng.IPromise<Modeles.IResultat>;
    }
}

/**
 * Controleur pour la directive Coordonnées
 * @module BanqueAuQuotidien.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien.Controleurs {
    /**
     * Classe du controleur
     */
    class BaqCoordonneesControleur {
        private $scope;
        private informationsGlobalesService;
        private tiersV3AdresseService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        parametresBaqCoordonnees: Modeles.IParametresBaqCoordonnees;
        indicateurFinChargement: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService, tiersV3AdresseService: ComposantsCommunsConsultationCCE.Services.TiersV3Adresse.ITiersV3AdresseService);
        /**
         * Méthode permettant de récupérer les informations globales
         * @return {void}
         */
        private recupererInformationsGlobales();
        /**
         * Méthode pour récupérer les adresses
         */
        recupererAdresse(adresses: Array<ComposantsCommunsConsultationCCE.Modeles.TiersV3Adresse.IAdresse>): void;
    }
}

/**
 * Directive mw-baq-coordonnees-directive
 * @module BanqueAuQuotidien.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module BanqueAuQuotidien.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwBaqCoordonnees(): ng.IDirective;
}

/**
 * Controleur pour la directive Fonctionnement
 * @module BanqueAuQuotidien.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien.Controleurs {
    /**
     * Classe du controleur
     */
    class BaqFonctionnementControleur {
        private $scope;
        private informationsGlobalesService;
        private listeDeviseService;
        private saisieRiceService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        parametresBaqFonctionnement: Modeles.IParametresBaqFonctionnement;
        indicateurFinChargement: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        indicateurAffichageAncienCompte: boolean;
        infobulleMontantSeuilRemarquable: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.IListeDeviseService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * Méthode permettant de récupérer les informations globales
         * @return {void}
         */
        private recupererInformationsGlobales();
    }
}

/**
 * Directive mw-baq-fonctionnement-directive
 * @module BanqueAuQuotidien.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module BanqueAuQuotidien.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwBaqFonctionnement(): ng.IDirective;
}

/**
 * Controleur pour la directive HistoriqueCompte
 * @module BanqueAuQuotidien.Controleurs
 * @author S0078181 (Sedki KMANTER)
 */
declare module BanqueAuQuotidien.Controleurs {
    interface IOperationDebitCredit extends Modeles.IOperation {
        montantDebit: number;
        montantCredit: number;
    }
    /**
     * Classe du controleur
     */
    class BaqHistoriqueCompteControleur {
        private $q;
        private $scope;
        private serviceAgentExtended;
        private historiqueOperationCompteService;
        private saisieRiceService;
        private mwNotificationService;
        private informationsGlobalesService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        private listeOperations;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        private rechercheFait;
        private libNbrOperations;
        private requeteHistoriqueOperationEnCours;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, historiqueOperationCompteService: Services.HistoriqueOperationCompteService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, mwNotificationService: MyWay.UI.IMwNotificationService, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService);
        /**
         * Méthode permettant de débrancher vers l'Historique Compte via LISA
         * CODE DEBRANCHEMENT LISA -> 2
         * @return {void}
         */
        debranchementHistoriqueCompte(): void;
        private calculerRiceContrat(codeBanque, codeGuichet, numeroCompte);
        private recupererHistoriqueOperations();
        private buildTableau();
        /**
         * rechercher les opérations
         * @param {string} typeRecherche le type de recherche (AUC/VIR/CB/ESP/DEP/PRV/AUT/NOPE/CHQ/SCHQ/TCHQ/DATE/DAD/DDAT/MNT/SMNT)
         * @param {IRecherche} json l'objet contenant les paramètres de la recherche (en rapport avec le type de recherche effectuée)
         * @returns {promise<Array<IOperation>>} la liste des opérations
         */
        private rechercherOperations(typeRecherche, json);
        /**
         * Permet de formater le montant des opérations "credit" et "depot"
         * @param liste
         */
        formaterListeOperation(liste: Modeles.IOperation[]): Array<IOperationDebitCredit>;
        tableauColonneOptionsDate: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsTransaction: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDebit: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCredit: MyWay.UI.ImwTableColumnOptions;
    }
}

/**
 * Directive mw-baq-historique-compte-directive
 * @module BanqueAuQuotidien.Directives
 * @author s0078181 (Sedki KMANTER)
 */
declare module BanqueAuQuotidien.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwBaqHistoriqueCompte(): ng.IDirective;
}

/**
 * Controleur pour la directive Informations générales
 * @module BanqueAuQuotidien.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien.Controleurs {
    /**
     * Classe du controleur
     */
    class BaqInfosGeneralesControleur {
        private $scope;
        private informationsGlobalesService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        parametresBaqInfosGenerales: Modeles.IParametresBaqInfosGenerales;
        indicateurFinChargement: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService);
        /**
         * Méthode permettant de récupérer les informations globales
         * @return {void}
         */
        private recupererInformationsGlobales();
        /**
         * Méthode permettant de savoir s'il faut afficher la date de cloture compte ou non
         * @return {boolean}
         */
        afficherDateClotureCompte(): boolean;
    }
}

/**
 * Directive mw-baq-infos-generales-directive
 * @module BanqueAuQuotidien.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module BanqueAuQuotidien.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwBaqInfosGenerales(): ng.IDirective;
}

/**
 * Controleur pour la directive Position Compte
 * @module BanqueAuQuotidien.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien.Controleurs {
    /**
     * Classe du controleur
     */
    class BaqPositionCompteControleur {
        private $scope;
        private modalService;
        private soldeValeurService;
        private listeDeviseService;
        private syntheseFinanciereService;
        private soldePrevisionnelService;
        private cartesAssocieesService;
        private mwNotificationService;
        private informationsGlobalesService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        parametresBaqPositionCompte: Modeles.IParametresBaqPositionCompte;
        indicateurFinChargement: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        codeDevise: string;
        indicateurChargementModaleSoldeDisponible: boolean;
        indicateurChargementModaleSoldePrevisionnel: boolean;
        indicateurAffichagePanelPositionCompte: boolean;
        indicateurChargementModaleCarteAssociees: boolean;
        parametresBaqSoldeDisponible: Modeles.IParametresBaqSoldeDisponible;
        parametresBaqSoldePrevisionnel: Modeles.IParametresBaqSoldePrevisionnel;
        parametresBaqCartesAssociees: Modeles.IParametresBaqCartesAssociees;
        informationGlobale: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale;
        nombreCartesAssociees: number;
        infobulleSoldeValeur: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        infobulleSoldeDisponible: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        infobulleSoldePrevisionnel: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        infobulleCartesAssociees: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, modalService: MyWay.UI.ModalService, soldeValeurService: ComposantsCommunsConsultationCCE.Services.ISoldeValeurService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.IListeDeviseService, syntheseFinanciereService: ComposantsCommunsConsultationCCE.Services.ISyntheseFinanciereService, soldePrevisionnelService: ComposantsCommunsConsultationCCE.Services.ISoldePrevisionnelService, cartesAssocieesService: ComposantsCommunsConsultationCCE.Services.ICartesAssocieesService, mwNotificationService: MyWay.UI.IMwNotificationService, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService);
        /**
         * Méthode permettant de récupérer les données utiles
         * @return void
         */
        private recupererDonnees();
        /**
         * Méthode permettant d'initialiser les valeurs nulles
         * @return void
         */
        private initValeurNulle();
        /**
         * Méthode permettant d'ouvrir la modale Solde disponible
         * @return void
         */
        ouvrirModaleSoldeDisponible(): void;
        /**
         * Méthode permettant de créer la modale Solde disponible
         * @return void
         */
        creerModaleSoldeDisponible(): void;
        /**
         * Méthode permettant d'ouvrir la modale Solde prévisionnel
         * @return void
         */
        ouvrirModaleSoldePrevisionnel(): void;
        /**
         * Méthode permettant de créer la modale Solde prévisionnel
         * @return void
         */
        creerModaleSoldePrevisionnel(): void;
        /**
         * Méthode permettant d'ouvrir la modale Cartes associées
         * @return void
         */
        ouvrirModaleCartesAssociees(): void;
        /**
         * Méthode permettant de créer la modale Cartes associées
         * @return void
         */
        creerModaleCartesAssociees(): void;
        /**
         * Méthode permettant de ne rien faire lors du clique sur un bouton
         * @return null
         */
        cliqueBoutonRien(): any;
    }
}

/**
 * Directive mw-baq-position-compte-directive
 * @module BanqueAuQuotidien.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module BanqueAuQuotidien.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwBaqPositionCompte(): ng.IDirective;
}

/**
 * Controleur pour la modale Solde disponible
 * @module BanqueAuQuotidien.Modales
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien.Modales {
    class SoldeDisponibleModaleControleur {
        private $modalInstance;
        private $scope;
        private serviceAgentExtended;
        private $filter;
        private tiersRechercheService;
        private saisieRiceService;
        private tiersNoyauService;
        private outilImpressionBandeauClientService;
        static $inject: string[];
        parametresBaqSoldeDisponible: Modeles.IParametresBaqSoldeDisponible;
        private listeTiers;
        private tiersNoyau;
        private bandeauClient;
        labelSoldeReel: string;
        compteParticipeFusion: boolean;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $filter: ng.IFilterService, tiersRechercheService: ComposantsCommunsConsultationCCE.Services.TiersRecherche.ITiersRechercheService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, tiersNoyauService: ComposantsCommunsConsultationCCE.Services.TiersNoyau.ITiersNoyauService, outilImpressionBandeauClientService: ComposantsCommunsConsultationCCE.Services.Rest.IOutilImpressionBandeauClientService);
        imprimer(): void;
        annuler(): void;
        /**
         * Méthode permettant de savoir s'il faut afficher le detail des comptes ou non
         * @return {boolean}
         */
        afficherDetailDesComptes(): boolean;
    }
}

/**
 * Controleur pour la modale Cartes Associees
 * @module BanqueAuQuotidien.Modales
 * @author S0051604 (Mathieu ALCIME)
 */
declare module BanqueAuQuotidien.Modales {
    class CartesAssocieesModaleControleur {
        private $scope;
        private serviceAgentExtended;
        private $modalInstance;
        private data;
        private cartesAssocieesService;
        private mwNotificationService;
        private tiersRechercheService;
        private outilImpressionBandeauClientService;
        private $filter;
        static $inject: string[];
        parametresBaqCartesAssociees: Modeles.IParametresBaqCartesAssociees;
        tableauCartesAssociees: ComposantsCommunsConsultationCCE.Modeles.CartesAssociees.IHistoriqueDesCartes[];
        indicateurAffichageCartesAssociees: boolean;
        indicateurChargementCartesAssociees: boolean;
        private bandeauClient;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, cartesAssocieesService: ComposantsCommunsConsultationCCE.Services.ICartesAssocieesService, mwNotificationService: MyWay.UI.IMwNotificationService, tiersRechercheService: ComposantsCommunsConsultationCCE.Services.TiersRecherche.ITiersRechercheService, outilImpressionBandeauClientService: ComposantsCommunsConsultationCCE.Services.Rest.IOutilImpressionBandeauClientService, $filter: ng.IFilterService);
        private creerTableauCartesAssociees();
        getCarteByCodeDuProduitCarte(codeEtablissement: string, codeDuProduitCarte: string): MyWay.Services.IPromesse<any>;
        imprimer(): void;
        annuler(): void;
    }
}

/**
 * Controleur pour la modale Solde prévisionnel
 * @module BanqueAuQuotidien.Modales
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module BanqueAuQuotidien.Modales {
    class SoldePrevisionnelModaleControleur {
        private $scope;
        private serviceAgentExtended;
        private $modalInstance;
        private data;
        private soldePrevisionnelService;
        private mwNotificationService;
        private tiersRechercheService;
        private outilImpressionBandeauClientService;
        private $filter;
        static $inject: string[];
        parametresBaqSoldePrevisionnel: Modeles.IParametresBaqSoldePrevisionnel;
        tableauSoldesPrevisionnels: MyWay.UI.ImwTableOptions;
        tableauOperationsPrevisionnelles: MyWay.UI.ImwTableOptions;
        compteSelectionne: ComposantsCommunsConsultationCCE.Modeles.SoldePrevisionnel.ICompteFusion;
        indicateurAffichageComptePrevisionnel: boolean;
        indicateurChargementComptePrevisionnel: boolean;
        indicateurOperationEnInstance: boolean;
        private bandeauClient;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, soldePrevisionnelService: ComposantsCommunsConsultationCCE.Services.ISoldePrevisionnelService, mwNotificationService: MyWay.UI.IMwNotificationService, tiersRechercheService: ComposantsCommunsConsultationCCE.Services.TiersRecherche.ITiersRechercheService, outilImpressionBandeauClientService: ComposantsCommunsConsultationCCE.Services.Rest.IOutilImpressionBandeauClientService, $filter: ng.IFilterService);
        private creerTableauSoldesPrevisionnels();
        private creerTableauOperationsPrevisionnelles();
        changerComptePrevisionnel(): void;
        imprimer(): void;
        annuler(): void;
        /**
         * Méthode permettant de savoir s'il faut afficher les opérations prévisionnelles ou non
         * @return {boolean}
         */
        afficherOperationsPrevisionnelles(): boolean;
    }
}
