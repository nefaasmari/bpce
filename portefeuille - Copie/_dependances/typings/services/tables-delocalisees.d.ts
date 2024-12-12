declare module MyWay.TableDeloc {

    /**
     * Structure renvoyée par le service agent
     */
    export interface Donnees<T> {
        /**
         * Date de mise à jour (format yyyymmdd)
         */
        datemaj: string;

        /**
         * Contenu de la table
         */
        donnees: T[];

        /**
         * Id composé de l'établissement et du nom de la table
         */
        id: string;

        /**
         * Nom de la table
         */
        nom: string;

        /**
         * Code établissement
         */
        referentiel: string;

    }

    /**
     * Table bascule euro
     */
    export interface ISU1P {
        /**
         * Code Etabl.Banque Entité Juridique   X(5)
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
         * Code type de média                   X(5)
         */
        CTLIME: string;
        /**
         * Type de bascule gérée : ptms ou euro X(8)
         */
        CTSFBA: string;
        /**
         * Date de début d'activité             C
         */
        DDEJDA: string;
        /**
         * Date d'arrivée des espèces euro      C
         */
        DDLIEE: string;
        /**
         * Date d'arrivée de l'euro             C
         */
        DDLIEU: string;
        /**
         * Date de fin d'activité               C
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
     * Table de délocalisation des libellés pour Agenda
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
         * Libellé de la valeur rub PAC         X(50)
         */
        LBDKRP: string;
        /**
         * Date début validité occurence        S
         */
        DDDKRP: string;
        /**
         * Date fin validité occurence          S
         */
        DFDKRP: string;
    }


    /**
     * Fonctions des Postes Fonctionnels
     */
    export interface ICU1C {
        /**
         * Code Etab Banque Entité Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Type fonction                        X(3)
         */
        CTCEAG: string;
        /**
         * Libellé fonction poste               X(40)
         */
        LNCEAG: string;
        /**
         * Date de fin de validité EDS          C
         */
        DFCEDS: string;
    }

    /**
     * Types d'affectations
     */
    export interface ICU1N {
        /**
         * Code Etab Banque Entité Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Type affectation                     X(2)
         */
        CTCEAF: string;
        /**
         * Libellé type affectation             X(25)
         */
        LICEAF: string;
    }

    /**
     * Paramètres généraux Agenda 
     */
    export interface ID11A {
        /**
         * Code Etab Banque Entité Juridique    X(5)
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
         * Heure début amplitude agenda         9(4)
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
         * Ref ext agent création / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp dernière opération         TS
         */
        HMDKPA: string
    }

    /**
     * Types d'occupation
     */
    export interface ID11C {
        /**
         * Code Etab Banque Entité Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Type occupation                      X(3)
         */
        CTDKOC: string;
        /**
         * Ind occupation agence/télémarketing  X
         */
        CIDKAT: string;
        /**
         * Code priorite affichage type occup.  X(2)
         */
        CVDKOC: string;
        /**
         * Libellé long occupation type         X(32)
         */
        LIDKOC: string;
        /**
         * Libellé court occupation type        X(7)
         */
        LCDKOC: string;
        /**
         * Code famille occupation              X(3)
         */
        CEDKFA: string;
        /**
         * Code niveau accessibilité occupation X
         */
        CODKNA: string;
        /**
         * Ind occupation par plage horaire     X
         */
        CODKO1: string;
        /**
         * Ind occupation récurrente            X
         */
        CODKO2: string;
        /**
         * Ind occupation date à date           X
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
         * Date début validité occupation-type  S
         */
        DDDKTO: string;
        /**
         * Date fin validité occupation-type    S
         */
        DFDKTO: string;
        /**
         * Ref ext agent création / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp dernière opération         TS
         */
        HMDKPA: string;
    }

    /**
     * Médias
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
         * Code média contact                   X(02)
         */
        CDDKME: string;
        /**
         * Libellé média contact                X(32)
         */
        LBDKME: string;
        /**
         * Ordre affichage donnée / entretien   X(2)
         */
        CDDKAF: string;
        /**
         * Date début validité                  S
         */
        DDEHVA: string;
        /**
         * Date fin validité                    S
         */
        DFEHVA: string;
        /**
         * Ordre affichage donnée / agenda      X(2)
         */
        CDDKA3: string;
    }

    /**
     * Lieu de rendez-vous
     */
    export interface ID11F {
        /**
         * Code Etab Banque Entité Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Code lieu occupation                 X(2)
         */
        CODKLO: string;
        /**
         * Libellé long lieu occupation         X(24)
         */
        LLDKLO: string;
        /**
         * Libellé court lieu occupation        X(9)
         */
        LCDKLO: string;
        /**
         * Libellé 1 lettres commerciales       X(32)
         */
        LCDCL1: string;
        /**
         * Type lieu contact                    X
         */
        CTDMCT: string;
        /**
         * Ind lieu autorisé / RDV              X
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
         * Code priorité affichage lieu         X(2)
         */
        CVDKLI: string;
        /**
         * Code origine administration          X
         */
        CIDKAD: string;
        /**
         * Date début validité lieu             S
         */
        DDDKLI: string;
        /**
         * Date fin validité lieu               S
         */
        DFDKLI: string;
        /**
         * Ref ext agent création / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp dernière opération         TS
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
         * Code Etab Banque Entité Juridique    X(5)
         */
        COCXBQ: string;
        /**
         * Code objet RDV                       X(3)
         */
        CODKOB: string;
        /**
         * Libellé long objet du RDV            X(32)
         */
        LLDKOB: string;
        /**
         * Libellé court objet du RDV           X(7)
         */
        LCDKOB: string;
        /**
         * Code priorité affichage objet        X(2)
         */
        CVDKOB: string;
        /**
         * Durée moyenne rendez-vous            999
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
         * Date début validité objet RDV        S
         */
        DDDKOB: string;
        /**
         * Date fin validité objet RDV          S
         */
        DFDKOB: string;
        /**
         * Code origine administration          X
         */
        CIDKAD: string;
        /**
         * Ref ext agent création / modif enreg 9(7)
         */
        NUCEMC: string;
        /**
         * Timestamp dernière opération         TS
         */
        HMDKPA: string;
        /**
         * Date début validité                  S
         */
        DDEHVA: string;
        /**
         * Date fin validité                    S
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
         * Code Etab Banque Entité Juridique    X(5)
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
         * Date création lien groupe/fonction   C
         */
        DDCELG: string;
        /**
         * Date de fin lien groupe/fonction     C
         */
        DFCELG: string;
    }

    /**
     * Liste des guichets d'un établissement
     */
    export interface ICU3E {
        /**
         * Code Etab Banque Entité Juridique    X(5)
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
