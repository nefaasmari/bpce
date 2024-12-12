/* tslint:disable */
declare module Editique.Generique {
    
    // GENERIC
    export interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }

    // GENERIC
    export interface GENERIC_ENTETE_SECTION {
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

    // GENERIC
    export interface GENERIC_PIEDPAGEETS {
    }

    // GENERIC
    export interface GENERIC_SIGNATURE_STD {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
        ala_Etab1: string;
        La_Etab1: string;
        parla_Etab1: string;
        desa_Etab1: string;
        dela_Etab1: string;
    }

    // GENERIC
    export interface GENERIC_INFO_PP {
        LISTE_PERSONNES: GENERIC_INFO_PPLISTE_PERSONNES[];
    }

    // GENERIC
    export interface GENERIC_INFO_PPLISTE_PERSONNES {
        _blocChoice_: (
            choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS|
            choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2|
            choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3|
            choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE|
            choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE
        )[];
    }

    // GENERIC
    export interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS {
        INFOS_PERS: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS;
    }

    // GENERIC
    export interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 {
        INFOS_PERS2: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2;
    }

    // GENERIC
    export interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 {
        INFOS_PERS3: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3;
    }

    // GENERIC
    export interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE {
        INFOS_PERS_VIDE: number;
    }

    // GENERIC
    export interface choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE;
    }

    // GENERIC
    export interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS {
        LIDACV: string;
        LIDANM: string;
        NOM_PRENOM_CLIENT: string;
        LIB_CODIRC: string;
        DADANA: string;
        LIDGIL_NAISSANCE: string;
        LIDGV2_6: string;
        LIDGNA: string;
        IDNSBD: string;
        NODATP_CLIENT: string;
    }

    // GENERIC
    export interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2 {
        LIDACV2: string;
        NOM_PRENOM_CLIENT2: string;
        LIDANM2: string;
        NOM_USAGE2: string;
        LIB_CODIRC2: string;
        DADANA2: string;
        LIDGIL_NAISSANCE2: string;
        LIDGV2_62: string;
        LIDGNA2: string;
        IDNSBD2: string;
        NODATP_CLIENT2: string;
        SITUATION_FAMILLE2: string;
    }

    // GENERIC
    export interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3 {
        LIDACV3: string;
        NOM_PRENOM_CLIENT3: string;
        LIDANM3: string;
        NOM_USAGE3: string;
        LIB_CODIRC3: string;
        DADANA3: string;
        LIDGIL_NAISSANCE3: string;
        LIDGV2_63: string;
        LIDGNA3: string;
        IDNSBD3: string;
        NODATP_CLIENT3: string;
        SITUATION_FAMILLE3: string;
        REGIME_MATRIMONIAL3: string;
    }

    // GENERIC
    export interface GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }

    // GENERIC
    export interface GENERIC_TITREDOCUMENT {
        TITRE_DOCUMENT: string;
    }

    // Add
    export interface GENERIC_ENTETEETS extends GENERIC_ENTETE_SECTION {}

    // Add
    export interface GENERIC_INFO_PM {
        LISTE_PERSONNES: Editique.Generique.GENERIC_INFO_PMLISTE_PERSONNES[];
    }

    // GENERIC
    export interface GENERIC_INFO_PMLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM|choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE)[];
    }

    // GENERIC
    export interface choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM {
        INFOS_PM: GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM;
    }
    
    // GENERIC
    export interface choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE;
    }

    // GENERIC
    export interface GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM {
        LIDARS: string;
        DADATJ: string;
        LIDGV2_6: string;
        IDNSBD: string;
        NODATP: string;
    }

    // GENERIC
    export interface GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }

    // Add
    export interface GENERIC_SIGNATURE_STD_SANS_CNIL {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
    }

    export interface GENERIC_SIGNAT_SAG {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
        IMG_SIGNATURE?: GENERIC_SIGNAT_SAGIMG_SIGNATURE;
        REF_IDEN: string;
    }
    
    export interface GENERIC_SIGNAT_SAGIMG_SIGNATURE {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    
}
