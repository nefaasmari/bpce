
declare module myway.recherchePersonneV2 {
    interface PersonHistoryConfig {
        /**
         * Désactive l'historique (false par défaut)
         */
        disabled?: boolean;

        /**
         * L'action unique de l'historique sera "Sélectionner" (true par défaut)
         */
        selectAction?: boolean;
    }

    /**
     * Configuration de la recherche
     */
    interface SearchPersonConfig {
        /**
         * Types de personne à chercher (tous par défaut, 15)
         *
         * Selon le type choisi, certains champs de recherche non pertinent seront masqués.
         *
         * représentation binaire en base 10:
         *
         * - Personne morale bdr (1)
         * - Personne physique particulier sans activité pro (2)
         * - Personne physique pro ou EI (4)
         * - Personne morale pro (8)
         */
        personTypes?: number;

        /**
         * Types de relation autorisé (tous par défaut)
         * TODO: implements restriction
         */
        relationTypes?: number;

        /**
         * Autoriser les personnes clôturées (true par défaut)
         * TODO: implements restriction
         */
        closed?: boolean;

        /**
         * Autoriser les personnes décédées (true par défaut)
         * TODO: implements restriction
         */
        dead?: boolean;

        /**
         * Champs de recherche à afficher (tous par défaut, 32767)
         *
         * représentation binaire en base 10:
         *
         * - Nom (1)
         * - Prenom (2)
         * - Date (4)
         * - Sexe (8)
         * - Agence (16)
         * - RaisonSociale (32)
         * - SIREN (64)
         * - Ville (128)
         * - RIB (256)
         * - Carte (512)
         * - NumeroCredit (1024)
         * - IdentifiantBAD (2048)
         * - NumeroPersonne (4096)
         * - Telephone (8192)
         * - Email (16384)
         */
        displayFields?: number;

        /**
         * Pré-remplissage des champs de recherche
         *
         */
        criteria?: IRecherche;

        /**
         * Lignes de recherche à afficher (toutes par défaut, 15)
         *
         * représentation binaire en base 10:
         *
         * - line 1 (1)
         * - line 2 (2)
         * - line 3 (4)
         * - line 4 (8)
         *
         * TODO: implements restriction
         */
        displayLines?: number;

        /**
         * Configuration de l'historique
         */
        history?: PersonHistoryConfig;
    }

    /**
     * Interface en entrée du composant recherche personne
     */
    interface SearchPersonProcessConfig extends SearchPersonConfig {
        /**
         * Instanciation d'un bandeau client (true par défaut)
         */
        createBanner?: boolean;

        /**
         * Possibilité de créer une personne (false par défaut)
         */
        createPerson?: boolean;
    }

    interface EntitySearchProcessConfig {
        /**
         * La sélection d'une entité titulaire est optionnelle (false par défaut)
         * On peut alors valider une personne ou une entité.
         */
        optional?: boolean;

        /**
         * Usage de l'entité (tous par défaut, 3)
         *
         * représentation binaire en base 10:
         *
         * - Privé (1)
         * - Professionnel (2)
         */
        usage?: number;

        /**
         * Composition de l'entité (tous par défaut, 3)
         *
         * représentation binaire en base 10:
         *
         * - Simple (1)
         * - Joint entre époux (2)
         * - Joint entre tiers (4)
         * - Indivision (8)
         */
        composition?: number;

        /**
         * Etat de l'entité (actif par défaut, 1)
         *
         * représentation binaire en base 10:
         *
         * - Actif (1)
         * - Clos (2)
         */
        etat?: number;

        /**
         * Permet d'ajouter l'identifiant de l'activité professionnelle d'une personne en sortie (false par défaut)
         */
        pro?: boolean;

        /**
         * Liste d'identifiants personne. Si fournie, le processus proposera la sélection d'une entité parmi toutes les entités des personnes de la liste.
         */
        personIds?: number[];
    }

    interface SearchProcessConfig {
        /**
         * Mode popup (false par défaut). 
         * 
         * - titre de la recherche modifié pour marquer la différence
         * 
         * - la clé de contexte 'identifiantPersonne' n'est pas utilisée en entrée/sortie
         * 
         * - la clé de contexte 'searchPersonResult' contiendra toutes les informations de la personne sélectionnée
         * 
         * - la clé de contexte 'searchPersonCriteria' contiendra tous les critères de recherche si cette dernière a été abandonnée
         * 
         * - seule la recherche personne est possible
         * 
         * - pas de création de bandeau client ou de rattachement à un bandeau déjà ouvert
         * 
         * - pas de création de personne
         * 
         */
        popup?: boolean;

        /**
         * Cible de la recherche: numéro de personne ou entité titulaire (PERS par défaut)
         */
        target?: 'PERS' | 'ENT';

        /**
         * Configuration de la recherche personne
         */
        person?: SearchPersonProcessConfig;

        /**
         * Configuration de la recherche entité titulaire
         */
        entity?: EntitySearchProcessConfig;

        /**
         * @deprecated use person.createPerson
         */
        createPersonEnabled?: boolean;

        /**
         * @deprecated use person.personTypes
         */
        personType?: string;

        /**
         * @deprecated use entity.personIds
         */
        listeIdPersonnesForEntitySearch?: string[];

        /**
         * @deprecated use entity.optional
         */
        optionalEntiteTitulaire?: boolean;
    }

    /**
     * Résultat de la recherche personne. criteria est uniquement alimenté en cas d'annulation de la recherche
     */
    export interface SearchPersonOutput {
        v1: {
            criteria?: MyWay.Model.Client;
            person?: MyWay.Model.Client;
            entity?: EntiteTitulaireDto;
        };
        v2: {
            criteria?: IRecherche;
            person?: Personne;
            entity?: EntiteTitulaireDto;
        }
    }

    export interface EntiteTitulaireDto {
        id: number;
        codeEtablissement: string;
        designation: string;
        usage: string;
        composition: string;
        etat: string;
        compositionIndivision: string;
        complementDesignation: string;
        identifiantProfessionnel?: number;
        siret?: string;
        siren?: string;
    }

    interface CriteriaV1 {
        nomFamille: string;
        prenom: string;
        siren: string;
        raisonSociale: string;
        personneMorale: boolean;
        personnePhysique: boolean;
    }

    interface PersonneV1 {
        identifiantPersonne: string;
        codePersonnaliteJuridique: string;
        etat: string;
        edsDomiciliation: string;

        codeCivilite: string;
        nomFamille: string;
        nomMarital: string;
        prenom: string;
        dateNaissance: string;
        indicateurActiviteProfessionnelle: string;

        siren: string;
        raisonSociale: string;

        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;

        personneMorale: boolean;
        personnePhysique: boolean;
    }

    const enum TypeRechercheEnum {
        IDENTITE = 0,
        COMPTE = 1,
        NUMERO_PERSONNE = 2,
        NUMERO_CARTE = 3,
        SIREN = 4,
        RAISON_SOCIALE = 5,
        IDENTIFIANT_BAD = 6,
        EMAIL = 7,
        TELEPHONE = 8,
        NUMERO_CREDIT = 9,
        AUCUN = 999
    }

    interface EDS {
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantEds: number;
        /**
         * Type de l'élément de structure
         */
        typeEds?: string;
        /**
         * Libellé du type de l'élément de structure
         */
        libelleType?: string;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEds: string;
        /**
         * Libellé de l'élément de structure
         */
        libelleEds: string;
    }

    interface IRibModel {
        /**
         * Code Etablissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * code activité compte
         */
        codeActiviteCompte?: string;
        /**
         * Radical compte
         */
        radical: string;
        /**
         * Clé Compte
         */
        cleCompte: string;
        /**
         * Clé RIb
         */
        cleRib: string;
        /**
         * Numéro rib (exemple 1131500001123456789013)
         */
        numeroRib?: string;
        /**
         * Status RIB
         */
        isValid?: boolean;
    }

    interface CountryPrefix {
        isoCode: string;
        country: string;
        dialCode: string;
        leadingZero?: boolean;
        mask?: Array<RegExp | string>;
        minDigits?: number;
    }

    interface MyWayPhoneNumberModel {
        /** phone country prefix object */
        prefix: CountryPrefix;
        /** phone number formated in international format without phone country prefix and leading zero */
        phoneNumber: string;
    }

    interface SearchCriteria {
        nomFamille?: string;
        prenom?: string;
        dateNaissance?: string;
        sexe?: string;
        edsDomiciliation?: EDS;
        siren?: string;
        raisonSociale?: string;
        villeSiege?: string;
        numCarte?: string;
        refCredit?: string;
        idBAD?: string;
        numPersonne?: string;
        telephone?: MyWayPhoneNumberModel;
        email?: string;
        numeroCompte?: IRibModel;
    }

    interface IRecherche {
        typeRecherche: TypeRechercheEnum;
        criteres: SearchCriteria;
    }


    interface MotifConfidentialiteDto {
        /**
         * Code du motif pour lequel un client a été jugé confidentiel
         */
        codeMotifConfidentialite: string;
        /**
         * Libellé du motif pour lequel un client a été jugé confidentiel
         */
        libelleMotifConfidentialite: string;
    }


    interface Personne {
        /**
         * Libellé du type de personne (PP, PM, Tiers, Prospect, Pro, Protégée)
         */
        typeLabel: string;
        identifiantPersonne: number;
        codeEtablissement: string;
        codePersonnaliteJuridique: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        designationCourte: string;
        designationLongue: string;
        codeAgentSuiviPar: number;
        idEdsInterneSuiviPar: number;
        idEdsOrigineClient: number;
        /**
         * Référence externe de l’agence à laquelle le client est rattaché.
         */
        edsDomiciliation: number;
        codeAppartenanceReseau: string;
        codeBlocageVAO: string;
        codeMarche: string;
        codeTypeSegmentMarche: string;
        /**
         * Détermine la raison de la clôture du client : ' ' Non clôturé
         * '1' Plus d'activité bancaire
         * '2' Décédé
         * '3' Transféré
         * '4' Incident
         * '5' Indésirable
         * '6' Séparé
         * '7' Fusionné
         * 'E' Effacé dans le cadre du RGPD
         */
        codeMotifCloture: string;
        indicateurOppo0109Active: string;
        codeStatutDouteuxPersonne: string;
        indicateurPersonneDossierVario: string;
        adresse: AdresseDto;

        /* 
         * Indicateur de confidentialité
         */
        indicateurConfidentialite: string;
        confidentialiteMotifs?: MotifConfidentialiteDto[];
        mediaList: MediaDto[];

        isClosed: boolean;
        isProspect: boolean;
        isTiers: boolean;
        isClient: boolean;

        particulier?: ParticulierInformationDto;
        corporate?: CorporateInformationDto;
        indicPresenceCreditRestruct: boolean;
        codeSituation: string;
        codeOrigineCreationProspect: string;
    }

    interface MediaDto {
        /**
         * '01' Téléphone fixe personnel
         * '02' Téléphone fixe professionnel
         * '03' Téléphone mobile personnel
         * '04' Téléphone mobile professionnel
         * '05' Téléphone mobile supplémentaire personnel
         * '06' Téléphone mobile supplémentaire professionnel
         * '07' Téléphone mobile préféré
         * '08' Téléphone mobile pour opérations sécurisées en ligne
         * '09' E-mail personnel
         * '10' E-Mail professionnel
         * '11' E-mail préféré
         */
        codeTypeMedia: string;
        /**
         * 'P'        Personnel
         * 'T'        Professionnel
         * 'A'        Sécurisation Opérations en Ligne (SOL)
         */
        codeTypeUsageMedia: string;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;

        indicatifTelephone: string;

        typeMedia?: string;
    }

    interface AdresseDto {
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment,
         * cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseAFNOR: string;

        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR.
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment : entrée, bâtiment, bloc, tour etc.
         */
        ligne3AdresseAFNOR: string;

        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR.
         * Peut comprendre le numéro dans la voie,
         * type et nom de voie,
         * le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit,
         * un service X, une boîte postale ou un numéro de CEDEX
         */
        ligne4AdresseAFNOR: string;

        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * Peut comprendre le nom d'un quartier,
         * d'un lieu-dit,
         * d'un hameau ou d’un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;

        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * Peut comprendre le numéro de code postal et nom de la localité,
         * le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseAFNOR: string;
    }

    interface ParticulierInformationDto {
        codeCapaciteJuridique: string;
        codeCivilite: string;
        prenom: string;
        nomFamille: string;
        nomUsage: string;
        /**
         * Format ISO 8601 YYYY-MM-DD
         */
        dateNaissance: string;

        codeINSEE: string;
        libelleINSEE: string;
        /**
         * Format ISO 8601 YYYY-MM-DD
         */
        dateDeces: string;
        /**
         * Format ISO 8601 YYYY-MM-DD
         */
        dateDecesPresume: string;
        codeOrigineInformationDeces: string;
        indicateurDecesPresume: string;
        indicateurActiviteProfessionnel: boolean;
        codeCategorieSocioProf: string;
        /**
         * Détermine le statut pro de la personne à un instant donné.
         * Permet de déterminer si la personne est un professionnel de par son activité.
         */
        codeEtatStatutPro: string;
        /**
         * Détermine l'état du suivi personnalisé de la personne à un instant donné.
         */
        codeEtatSuiviGP: string;
        codeDossierFamille: string;
        isProtected: boolean;
        isDead: boolean;


        indicPersonneAdresseNPAI: boolean;
        indicAncienPro: boolean;
        indicFIBEN: boolean;
        /**
         * cotation Complete BDF
         */
        cotationCompleteBDF: string;
        indicEnregHorsPresenceClient: string;

    }

    interface CorporateInformationDto {
        numeroSIREN: string;
        raisonSociale: string;
        nomCommercial: string;
        /**
         * code catégorie juridique INSEE
         * ex : 6540 - SCI
         */
        codeJuridique: string;
    }

}
