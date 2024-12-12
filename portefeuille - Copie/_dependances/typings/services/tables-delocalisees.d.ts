declare module MyWay.TableDeloc {

    /**
     * Structure renvoy�e par le service agent
     */
    export interface Donnees<T> {
        /**
         * Date de mise � jour (format yyyymmdd)
         */
        datemaj: string;

        /**
         * Contenu de la table
         */
        donnees: T[];

        /**
         * Id compos� de l'�tablissement et du nom de la table
         */
        id: string;

        /**
         * Nom de la table
         */
        nom: string;

        /**
         * Code �tablissement
         */
        referentiel: string;

    }

    /**
     * Table bascule euro
     */
    export interface ISU1P {
        /**
         * Code Etabl.Banque Entit� Juridique   X(5)
         */
        COCXBQ: string;
        /**
         * Code Processus                       X(8)
         */
        COEIO1: string;
        /**
         * Code monnaie de prise d'ordre        X(3)
         */
        COLIDO: string;
        /**
         * Code application Cartographie        X(8)
         */
        COSXAP: string;
        /**
         * Mode financier                       X(3)
         */
        CTGXMF: string;
        /**
         * Code type de m�dia                   X(5)
         */
        CTLIME: string;
        /**
         * Type de bascule g�r�e : ptms ou euro X(8)
         */
        CTSFBA: string;
        /**
         * Date de d�but d'activit�             C
         */
        DDEJDA: string;
        /**
         * Date d'arriv�e des esp�ces euro      C
         */
        DDLIEE: string;
        /**
         * Date d'arriv�e de l'euro             C
         */
        DDLIEU: string;
        /**
         * Date de fin d'activit�               C
         */
        DFEJDA: string;
        /**
         * Date de fin du franc                 C
         */
        DFLIFR: string;
        /**
         * NOM DU SERVEUR PETRIX                X(12)
         */
        LNSMPX: string;
        /**
         * Nom  poste                           X(8)
         */
        WLNLU: string;
    }


    /**
     * Table de d�localisation des libell�s pour Agenda
     */
    export interface ID11J {
        /**
         * Code rubrique Pacbase                X(6)
         */
        CDDKRP: string;
        /**
         * Valeur du code rubrique Pacbase      X(15)
         */
        LVDKRP: string;
        /**
         * Libell� de la valeur rub PAC         X(50)
         */
        LBDKRP: string;
        /**
         * Date d�but validit� occurence        S
         */
        DDDKRP: string;
        /**
         * Date fin validit� occurence          S
         */
        DFDKRP: string;
    }


    /**
     * Fonctions des Postes Fonctionnels
     */
    export interface ICU1C {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Type fonction                        X(3)
         */
        CTCEAG: string;
        /**
         * Libell� fonction poste               X(40)
         */
        LNCEAG: string;
        /**
         * Date de fin de validit� EDS          C
         */
        DFCEDS: string;
    }

    /**
     * Types d'affectations
     */
    export interface ICU1N {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Type affectation                     X(2)
         */
        CTCEAF: string;
        /**
         * Libell� type affectation             X(25)
         */
        LICEAF: string;
    }

    /**
     * Param�tres g�n�raux Agenda 
     */
    export interface ID11A {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Ind Habilitation confirmation RDV    X
         */
        CIDKHC: string;
        /**
         * Nb jours possibles pour saisie RDV   9(3)
         */
        QTDKJO: string;
        /**
         * Heure d�but amplitude agenda         9(4)
         */
        HDDKAG: string;
        /**
         * Heure fin amplitude agenda           9(4)
         */
        HFDKAG: string;
        /**
         * Ind envoi confirmation RDV client    X
         */
        CIDKCC: string;
        /**
         * Ind envoi confirmation RDV particip.X
         */
        CIDKCE: string;
        /**
         * Ind envoi suppression RDV client     X
         */
        CIDKSC: string;
        /**
         * Ind envoi suppression RDV particip.X
         */
        CIDKSE: string;
        /**
         * Ind gestion profil agent             X
         */
        CIDKPR: string;
        /**
         * Ind synchronisation Agenda/ Outlook   X
         */
        CIDKSY: string;
        /**
         * Type plage pour prise RDV par client X
         */
        CTDKPL: string;
        /**
         * Ref ext agent cr�ation / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp derni�re op�ration         TS
         */
        HMDKPA: string
    }

    /**
     * Types d'occupation
     */
    export interface ID11C {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Type occupation                      X(3)
         */
        CTDKOC: string;
        /**
         * Ind occupation agence/t�l�marketing  X
         */
        CIDKAT: string;
        /**
         * Code priorite affichage type occup.  X(2)
         */
        CVDKOC: string;
        /**
         * Libell� long occupation type         X(32)
         */
        LIDKOC: string;
        /**
         * Libell� court occupation type        X(7)
         */
        LCDKOC: string;
        /**
         * Code famille occupation              X(3)
         */
        CEDKFA: string;
        /**
         * Code niveau accessibilit� occupation X
         */
        CODKNA: string;
        /**
         * Ind occupation par plage horaire     X
         */
        CODKO1: string;
        /**
         * Ind occupation r�currente            X
         */
        CODKO2: string;
        /**
         * Ind occupation date � date           X
         */
        CODKO3: string;
        /**
         * Ind lieu obligatoire                 X
         */
        CIDKLO: string;
        /**
         * Ind lieu saisissable                 X
         */
        CIDKLS: string;
        /**
         * Code origine administration          X
         */
        CIDKAD: string;
        /**
         * Date d�but validit� occupation-type  S
         */
        DDDKTO: string;
        /**
         * Date fin validit� occupation-type    S
         */
        DFDKTO: string;
        /**
         * Ref ext agent cr�ation / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp derni�re op�ration         TS
         */
        HMDKPA: string;
    }

    /**
     * M�dias
     */
    export interface ID72D {
        /**
         * Code Retour Echanges                 9(3)
         */
        WCORE3: string;
        /**
         * Etat de Fin / Reprise de transfert   X
         */
        CESGFR: string;
        /**
         * Code m�dia contact                   X(02)
         */
        CDDKME: string;
        /**
         * Libell� m�dia contact                X(32)
         */
        LBDKME: string;
        /**
         * Ordre affichage donn�e / entretien   X(2)
         */
        CDDKAF: string;
        /**
         * Date d�but validit�                  S
         */
        DDEHVA: string;
        /**
         * Date fin validit�                    S
         */
        DFEHVA: string;
        /**
         * Ordre affichage donn�e / agenda      X(2)
         */
        CDDKA3: string;
    }

    /**
     * Lieu de rendez-vous
     */
    export interface ID11F {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Code lieu occupation                 X(2)
         */
        CODKLO: string;
        /**
         * Libell� long lieu occupation         X(24)
         */
        LLDKLO: string;
        /**
         * Libell� court lieu occupation        X(9)
         */
        LCDKLO: string;
        /**
         * Libell� 1 lettres commerciales       X(32)
         */
        LCDCL1: string;
        /**
         * Type lieu contact                    X
         */
        CTDMCT: string;
        /**
         * Ind lieu autoris� / RDV              X
         */
        CIDKLR: string;
        /**
         * Ind lieu agence                      X
         */
        CIDKLA: string;
        /**
         * Ind exploitation par prestataire     X
         */
        CIDKEP: string;
        /**
         * Code priorit� affichage lieu         X(2)
         */
        CVDKLI: string;
        /**
         * Code origine administration          X
         */
        CIDKAD: string;
        /**
         * Date d�but validit� lieu             S
         */
        DDDKLI: string;
        /**
         * Date fin validit� lieu               S
         */
        DFDKLI: string;
        /**
         * Ref ext agent cr�ation / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp derni�re op�ration         TS
         */
        HMDKPA: string;
    }

    /**
     * Objets de rendez-vous
     */
    export interface ID11D {
        /**
         * Code retour Echanges                 9(3)
         */
        WCORE3: string;
        /**
         * Etat de Fin / Reprise de transfert   X
         */
        CESGFR: string;
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Code objet RDV                       X(3)
         */
        CODKOB: string;
        /**
         * Libell� long objet du RDV            X(32)
         */
        LLDKOB: string;
        /**
         * Libell� court objet du RDV           X(7)
         */
        LCDKOB: string;
        /**
         * Code priorit� affichage objet        X(2)
         */
        CVDKOB: string;
        /**
         * Dur�e moyenne rendez-vous            999
         */
        PYDKOB: string;
        /**
         * Ind exploitation par prestataire     X
         */
        CIDKEP: string;
        /**
         * Ind envoi confirmation RDV           X
         */
        CIDKCR: string;
        /**
         * Code maquette confirmation RDV       X(05)
         */
        CODKCC: string;
        /**
         * Indic envoi supp RDV                 X
         */
        CIDKSR: string;
        /**
         * Code maquette comnic suppr RDV       X(05)
         */
        CODKCS: string;
        /**
         * Date d�but validit� objet RDV        S
         */
        DDDKOB: string;
        /**
         * Date fin validit� objet RDV          S
         */
        DFDKOB: string;
        /**
         * Code origine administration          X
         */
        CIDKAD: string;
        /**
         * Ref ext agent cr�ation / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp derni�re op�ration         TS
         */
        HMDKPA: string;
        /**
         * Date d�but validit�                  S
         */
        DDEHVA: string;
        /**
         * Date fin validit�                    S
         */
        DFEHVA: string;
        /**
         * Code famille objet                   X(2)
         */
        CEDKOB: string;
    }

    /**
     * Lien Fonctions / Groupe de fonctions
     */
    export interface ICU1T {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Groupe de fonctions                  X(3)
         */
        CTCEGF: string;
        /**
         * Type de fonction                     X(3)
         */
        CTCEAG: string;
        /**
         * Date cr�ation lien groupe/fonction   C
         */
        DDCELG: string;
        /**
         * Date de fin lien groupe/fonction     C
         */
        DFCELG: string;
    }

    /**
     * Liste des guichets d'un �tablissement
     */
    export interface ICU3E {
        /**
         * Code Etab Banque Entit� Juridique    X(5)
         */
        COCXBQ: string;

        /**
         * Code guichet                         X(5)
         */
        COCXGU: string;

        NOCECT: string;

        COCEEA: string;

        CTCEGI: string;
 
        LLCECE: string;

        LLCEC3: string;

        LLCEC2: string;

        LLCEC1: string;

        LICELI: string;
    }
    
}
