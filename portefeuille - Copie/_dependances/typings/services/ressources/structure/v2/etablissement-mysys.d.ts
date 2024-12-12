/**
 * Ressource : /structure/v2/etablissementMysys
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v2/structure/etablissementMysys
 * Fichier généré le : 2018-12-07
 */
declare module myway.ressources.structure.etablissementmysys {
    export interface IGetQueryParams {
        /**
         * Permet de déterminer le type de liste attendue.
         * Valeurs : 
         * 1 - Liste INCLUANT les établissements "techniques" (19905 pour GIE Crédits et 19995 pour IT-CE) 
         * 2 - Liste EXCLUANT les établissements techniques (19905 pour GIE Crédits et 1995 pour IT-CE)
         */
        typeListe: string;
    }

    export interface IListeEtablissement {
        Etablissement: Array<IEtablissement>;
    }

    export interface IEtablissement {
        /**
         * Identifiant d'un Etablissement du Groupe CE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;

        /**
         * Désignation d'un Etablissement (Caisse) du GCE comme
         * personne morale.
         * Cette information figure dans les statuts.
         */
        libelleEtablissement: string;

        /**
         * Cette propriété correspond à l'acronyme / abréviation de la Caisse utilisé comme suffixe d'adresse email.
         *
         * Exemples :
         * 11315 / cepac
         * 11425 / cen
         * 13135 / cemp
         * 13485 / celr
         * 14445 / cebpl
         * 14505 / celc
         * 16275 / cenfe
         * 18025 / picardie
         * 18315 / cecaz
         * 18715 / cepal
         */
        sigleEtablissement: string;

        /**
         * Référence d'identification de l'adresse d'un site ou d'une page web à saisir dans la barre d'adresses d'un navigateur pour accéder à cette ressource ou document.
         */
        sitwebEtablissement: string;

        /**
         * Ce libellé a été crée afin que certaines applications aient accès au dernier libellé historique de l'établissement (pré-fusions).
         */
        libellehistoEtablissement: string;

        /**
         * Ce libellé a été crée afin que certaines applications aient accès au dernier libellé court en date de l'établissement (post-fusions).
         */
        libelleactuelEtablissement: string;

        /**
         * Cette rubrique est le nom de l'enseigne à laquelle appartient l'établissement.
         * Cette information pourra être exploitée par toutes applications utilisant des maquettes pour l'envoi de mail ou de courrier.
         *
         * Exemples :
         * pour les CE   = "Caisse d'Epargne"
         * pour le CFF   = "Crédit Foncier"
         * pour la BCP   = "Banque BCP"
         * pour le CCOOP = "Crédit Coopératif"
         * ...
         */
        libelleenseigneEtablissement: string;
    }
}
