/**
 * Ressource : /portailmyway/v1/application
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/portailmyway/application
 * Fichier généré le : 2017-10-10
 */
declare namespace myway.ressources.portailmyway.application {
    export interface IApplication {
        /**
         * Identifiant de l'application. Il commence par:
         * - AC pour une application communautaire
         * - AE pour une application établissement
         *
         * Donnée FO
         */
        codeApplication: string;

        /**
         * Donnée FO
         */
        codeEtablissement: string;

        identifiantApplicationReferentielOrigine: string;

        libelleReferentielOrigine: string;

        /**
         * Donnée FO
         */
        codeVisibiliteApplication: VisibiliteApplicationEnum;

        /**
         * Donnée FO
         */
        libelleDeviceCompatible: string;

        dateDebutDisponibilite: string;

        dateFinDisponibilite: string;

        libelleDescriptionApplication: string;

        /**
         * Donnée FO
         */
        libelleNomApplication: string;

        /**
         * Donnée FO
         */
        codeExecutableConteneurMyway: number;

        libelleMotClef: string;

        /**
         * Donnée FO
         */
        codeApplicationMaintenance: number;

        /**
         * Donnée FO
         */
        libelleMessageMaintenance: string;

        /**
         * Donnée FO
         */
        libelleHabilitation: string;

        /**
         * Donnée FO
         */
        codeBesoinOuvertureGuichet: number;

        /**
         * Donnée FO
         */
        codeClientIdentifie: number;

        /**
         * Donnée FO
         */
        codeTypeApplication: number;

        /**
         * Donnée FO
         */
        libelleCheminExecution: string;

        /**
         * Donnée FO
         */
        libelleValeurParametre1: string;

        /**
         * Donnée FO
         */
        libelleValeurParametre2: string;

        /**
         * Donnée FO
         */
        libelleValeurParametre3: string;

        /**
         * Donnée FO
         */
        libelleValeurParametre4: string;

        identifiantVersionDebutPublication: string;

        identifiantVersionFinPublication: string;

        listeApplicationUrlValeur: Array<IApplicationUrlValeur>;

        codeSousFamilleEtablissement: string;

        codeSousFamilleCommunautaire: string;

        ihm: string;

        prepilote: number;

        libelleSoumisALicence: string;

        libelleDescriptionTechnique: string;

        libelleDirectionProprietaire: string;

        listeElementConfiguration: Array<IElementConfiguration>;
    }

    export interface IApplicationUrlValeur {
        /**
         * Code application
         */
        codeApplication: string;

        nomVariablePost: string;

        valeurVariablePost: string;

        identifiantVersionDebutPublication: string;
    }

    export interface IElementConfiguration {
        identifiantElement: string;

        identifiantZone: string;

        valeurElement: string;
    }
    export interface IGetQueryParams {
        codeApplication: string;
        ihm?: string;
        versionMySys?: string;
    }

    export const enum VisibiliteApplicationEnum {
        AucuneRestriction = 0,
        DansEtablissement = 1,
        HorsEtablissement = 2
    }
}
