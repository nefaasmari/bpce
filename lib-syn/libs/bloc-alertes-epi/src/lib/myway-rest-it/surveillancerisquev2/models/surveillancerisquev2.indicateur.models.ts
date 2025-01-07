/* eslint-disable max-len */
export namespace RessourceSurveillancerisqueV2Indicateur {
  export interface ConsultationIndicateur {
    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys. Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne: number;

    /**
     * Dénomination banalisée de la personne :
     * - désignation courte du particulier
     * - libellé libre du lieu d'activité
     */
    designationClient: string;

    /**
     * Le code origine d'un indicateur de surveillance des risques détermine l'application qui l'a calculé :
     * A          Brique des triggers (SIO) niveau contrat/opération
     * B          Brique des triggers (SIO) niveau personne
     * C          Brique des triggers (SIO) niveau contrat/opération  en simulation filtres Etablissement
     * D          Brique des triggers (SIO) niveau personne en simulation filtres Etablissement
     * E          Etablissement (fichier csv envoyé l'Etablissement)
     * N          Preventis (SID)
     * T          Technique (interne au fonctionnement de Preventis)
     */
    codeOrigineIndicateur: string;

    /**
     * Désigne un indicateur de risque lié à un client et nécessitant le déclenchement d'une surveillance de la part du chargé d'affaire et de sa direction afin d'évaluer le risque et la situation de ce client. Le but de cette surveillance est de mettre en oeuvre une réponse appropriée à cette situation :
     * Exemple valeurs :
     * N0001      Incident de plus de 30 jours
     * Nxxxx      Alerte nationale
     * Exxxx      Alerte établissement
     * Fxxxx      Alerte informationnelle établissement
     */
    codeIndicateur: string;

    /**
     * Contient l'identifiant externe de l'indicateur transmis par le remettant.
     */
    idExterneIndicateur: string;

    /**
     * Indique l'éligibilité d'un client sur un indicateur selon les critères communautaires.
     */
    siEligibIndicateurCommunautaire: boolean;

    /**
     * Indique l'éligibilité d'un client sur un indicateur selon les critères Etablissements.
     */
    siEligibIndicateurEtablissement: boolean;

    /**
     * Indique la date de début de validité d'un indicateur.
     */
    dateDebutValidite: string;

    /**
     * Indique la date de fin de validité d'un indicateur.
     */
    dateFinValidite: string;

    /**
     * Ce libellé permet de représenter le risque détecté sur
     * le client. Exemple : "Incident >30j PRO/BDR"
     */
    libelleDeclencheurSurv: string;

    /**
     * Permet de décrire le risque détecté sur le client.
     */
    descriptionDeclencheurSurv: string;
  }
  export interface CompteRendu {
    /**
     * Permet de restituer le nombre de réponses renvoyées.
     */
    nombreReponse: number;

    /**
     * Permet le numérotation séquentielle d'enregistrements d'un fichier ou d'un niveau de regroupement de fichier.
     */
    compteurEnregistrement: number;
  }
  export interface Indicateur {
    listeConsultationIndicateur: ConsultationIndicateur[];

    listeDonneeComplementaire: DonneeComplementaire[];

    compteRendu: CompteRendu;
  }
  export interface DonneeComplementaire {
    /**
     * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys. Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne: number;

    /**
     * Le code origine d'un indicateur de surveillance des risques détermine l'application qui l'a calculé :
     * A          Brique des triggers (SIO) niveau contrat/opération
     * B          Brique des triggers (SIO) niveau personne
     * C          Brique des triggers (SIO) niveau contrat/opération  en simulation filtres Etablissement
     * D          Brique des triggers (SIO) niveau personne en simulation filtres Etablissement
     * E          Etablissement (fichier csv envoyé l'Etablissement)
     * N          Preventis (SID)
     * T          Technique (interne au fonctionnement de Preventis)
     */
    codeOrigineIndicateur: string;

    /**
     * Désigne un indicateur de risque lié à un client et nécessitant le déclenchement d'une surveillance de la part du chargé d'affaire et de sa direction afin d'évaluer le risque et la situation de ce client. Le but de cette surveillance est de mettre en oeuvre une réponse appropriée à cette situation :
     * Exemple valeurs :
     * N0001      Incident de plus de 30 jours
     * Nxxxx      Alerte nationale
     * Exxxx      Alerte établissement
     * Fxxxx      Alerte informationnelle établissement
     */
    codeIndicateur: string;

    /**
     * Contient l'identifiant externe de l'indicateur transmis par le remettant.
     */
    idExterneIndicateur: string;

    /**
     * Correspond à une donnée, critère, variable, règle ... référencée dans une base de donnée de typologie/paramétrage générique.
     */
    identifiantParametre: string;

    /**
     * Indique la date de début de validité d'un indicateur.
     */
    dateDebutValidite: string;

    /**
     * Contient la valeur d'un paramètre (ou d'une règle) utilisé pour le calcul des triggers Bad Loans et servant pour la piste d'audit. Indicateur portant sur un client
     */
    valeurPisteAudit: string;
  }
  export interface IndicateurEntree {
    /**
     * Permet d'identifier le processus ou la fonction impliquée dans une action. La granularité et les valeurs sont à préciser dans le des utilisations.
     * ******* Pour les opérations SEPA ********************
     * Permet d'identifier la fonction ou le processus qui est à l'origine des message d'alertes envoyés vers la Brique Mail.
     * Valeurs :
     * 'ALERTES'  Processus ALERTES SEPAMAIL RUBIS
     * 'MOBILITE' Processus MOBILITE BANCAIRE
     * 'INSTPAY'  Processus INSTANT PAYMENT (virements instantanés)
     * ******************************************************
     */
    identifiantFonction: string;

    /**
     * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
     * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF ...
     */
    codeEtablissement: string;

    /**
     * Identifiant de la personne du Ménage Economique avec laquelle le conseiller de clientèle prendra contact pour les rendez-vous et les entretiens.
     */
    numeroPersonneContact: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys
     * Personne référencée comme client, tiers ou prospect.
     */
    numeroPersonne: number;

    numeroSIREN: string;

    /**
     * Donnée utilisée pour la reprise.
     * Identifiant personne.
     */
    identifiantPersonneReprise: number;

    /**
     * Donnée utilisée pour la reprise.
     * Le code origine d'un indicateur de surveillance des risques détermine l'application qui l'a calculé.
     *
     * Valeur :
     * A          Brique des triggers (SIO) niveau contrat/opération
     * B          Brique des triggers (SIO) niveau personne
     * C          Brique des triggers (SIO) niveau contrat/opération en simulation filtres Etablissement
     * D          Brique des triggers (SIO) niveau personne en simulation filtres Etablissement
     * E          Etablissement déclenchant un plan d'action (fichier csv envoyé par l'Etablissement)
     * F          Etablissement informative (fichier csv envoyé par l'Etablissement)
     * N          Preventis (SID)
     */
    codeOrigineIndicateurReprise: string;

    /**
     * Donnée utilisée pour la reprise.
     * Un "trigger de surveillance" est un indicateur de risque lié à un client et nécessitant le déclenchement d'une surveillance de la part du chargé d'affaire et de sa direction afin d'évaluer le risque et la situation de ce client. Le but de cette surveillance est de mettre en oeuvre une réponse appropriée à cette situation.
     */
    codeIndicateurReprise: string;

    /**
     * Donnée utilisée pour la reprise.
     * Contient l'identifiant externe de l'indicateur transmis par le remettant
     */
    idExterneIndicateurReprise: string;

    /**
     * Donnée utilisée pour la reprise.
     * Date début validité de l'indicateur.
     */
    dateDebutValiditeReprise: string;
  }
}
