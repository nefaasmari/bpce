/**
 * Ressource : /portailmyway/v1/rechercheApplication
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/portailmyway/rechercheApplication
 */
declare namespace myway.ressources.portailmyway.rechercheapplication {
    export interface IApplication {
        /**
         * Code application qui commence par :
         * - AC pour une application communautaire
         * - AE pour une application établissement
         * Donnée FO
         */
        codeApplication: string;

        /**
         * Code établissement :
         * - nul pour une application communautaire
         * - non nul pour une application établissement
         * Donnée FO
         */
        codeEtablissement: string;

        /**
         * libellé device compatible
         * Donnée FO
         */
        libelleDeviceCompatible: string;

        /**
         * code visibilité application
         * Donnée FO
         */
        codeVisibiliteApplication: VisibiliteApplicationEnum;

        /**
         * libellé habilitation
         * Donnée FO
         */
        libelleHabilitation: string;

        /**
         * code type application
         * Donnée FO
         */
        codeTypeApplication: number;

        /**
         * libellé description applicaiton
         * Donnée FO
         */
        libelleDescriptionApplication: string;

        /**
         * libellé nom application
         * Donnée FO
         */
        libelleNomApplication: string;

        dateDebutDisponibilite: string;

        dateFinDisponibilite: string;

        codeBesoinOuvertureGuichet: number;

        codeClientIdentifie: number;

        /**
         * code sous famille communautaire
         * Donnée FO
         */
        codeSousFamilleCommunautaire: string;

        /**
         * code sous famille établissement
         * Donnée FO
         */
        codeSousFamilleEtablissement: string;

        identifiantVersionDebutPublication: string;

        prepilote: number;

        idApplicationReferentielOrigine: string;

        libelleReferentielOrigine: string;

        codeExecutableConteneurMyway: number;

        libelleMotClef: string;

        codeApplicationMaintenance: number;

        libelleMessageMaintenance: string;

        libelleCheminExecution: string;

        libelleValeurParametre1: string;

        libelleValeurParametre2: string;

        libelleValeurParametre3: string;

        libelleValeurParametre4: string;

        idVersionFinPublication: string;

        listeApplicationUrlValeur: Array<IApplicationUrlValeur>;

        ihm: string;

        libelleSoumisALicence: string;

        libelleDescriptionTechnique: string;

        libelleDirectionProprietaire: string;

        listeElementConfiguration: Array<IElementConfiguration>;
    }

    export interface IListeApplication {
        listeApplicationParametre: Array<IApplication>;

        /**
         * Paramètre qui indique l'IHM qui fait la recherche :
         * - FO si la ressource est utilisé par l'IHM Front Office
         * - nul si la ressource est utilisé par l'IHM Back Office
         */
        ihm?: string;

        /**
         * version MySys
         */
        versionMySys?: string;
    }

    export interface IApplicationUrlValeur {
        codeApplication: string;

        nomVariablePost: string;

        valeurVariablePost: string;

        idVersionDebutPublication: string;
    }

    export interface IElementConfiguration {
        /**
         * Identifiant de l'élément de configuration
         */
        identifiantElement: string;

        /**
         * identifiant de la zone
         */
        identifiantZone: string;

        /**
         * Valeur de l'élément
         */
        valeurElement: string;
    }

    export interface IGetQueryParams {
        typeRecherche?: number;
        codeTypeApplication?: number;
        codeSousFamille?: string;
        motClef?: string;
        ihm?: string;
        dateDebutDisponibilite?: string;
        dateFinDisponibilite?: string;
        codeEtablissement?: string;
        versionMySys?: string;
    }

    export const enum TypeApplicationEnum {
        Processus = 4,
        Windows = 3,
        Fichier = 2,
        URI = 1,
        CultureNet = 5
    }

    export const enum TypeRechercheEnum {
        MultiParametres = 1,
        MotClefs = 2
    }

    export const enum VisibiliteApplicationEnum {
        AucuneRestriction = 0,
        DansEtablissement = 1,
        HorsEtablissement = 2
    }
}
