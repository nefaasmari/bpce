
declare module Mad.Rest {
    var app: ng.IModule;
}

declare module Mad.Rest.Constantes {
    module Url {
        const URL_REST: string;
        module MouvAttenteDecision {
            const BASE: string;
            const SYNTHESE: string;
            const RECHERCHE: string;
            const CONTROLE_DELEGATION: string;
            const PRISE_DECISION: string;
            const AUDIT_TARIFICATION: string;
            const COMPTE_FORCAGE: string;
            const CARACTERISTIQUE: string;
            const COURRIER: string;
            const DELEGATAIRE: string;
            const CONTROLE_DELEGATAIRE: string;
            const JOURNAL: string;
            const COMMENTAIRE: string;
            const RECHERCHE_MAD_DU_JOUR: string;
            const VISION_FINANCIERE: string;
            const DEPLOIEMENT_MAD: string;
            const ANNULATION_DECISION: string;
            const INFO_SPECIFIQUE_ET_MAD: string;
        }
        module AgentV2 {
            const BASE: string;
            const RECHERCHE: string;
        }
        module StructureV2 {
            const BASE: string;
            const POSTE_FONCTIONNEL_AGENT: string;
            const CARACTERISTIQUE_EDS: string;
            const RECHERCHE_EDS_REGRP_MAD: string;
        }
    }
    module Inject {
        const RECHERCHE_REST_SERVICE: string;
        const JOURNAL_REST_SERVICE: string;
        const RECHERCHE_MAD_JOUR_REST_SERVICE: string;
        const SYNTHESE_REST_SERVICE: string;
        const RECHERCHE_AGENT_REST_SERVICE: string;
        const CONTROLE_DELEGATION_REST_SERVICE: string;
        const PRISE_DECISION_REST_SERVICE: string;
        const COMPTE_FORCAGE_REST_SERVICE: string;
        const AUDIT_TARIFICATION_REST_SERVICE: string;
        const POSTE_FONCTIONNEL_AGENT_REST_SERVICE: string;
        const CARACTERISTIQUE_EDS_REST_SERVICE: string;
        const CARACTERISTIQUE_REST_SERVICE: string;
        const COURRIER_REST_SERVICE: string;
        const DELEGATAIRE_REST_SERVICE: string;
        const CONTROLE_DELEGATAIRE_REST_SERVICE: string;
        const COMMENTAIRE_REST_SERVICE: string;
        const VISION_FINANCIERE_REST_SERVICE: string;
        const RECHERCHE_EDS_REGRP_MAD_REST_SERVICE: string;
        const NOTATION_BALE2_REST_SERVICE: string;
        const DEPLOIEMENT_MAD_REST_SERVICE: string;
        const ANNULATION_DECISION_REST_SERVICE: string;
        const INFO_ENTITE_TITULAIRE_REST_SERVICE: string;
    }
}

declare module Mad.Rest.AgentV2.Modele.Recherche {
    interface IParametreRecherche {
        /**
         * Précise le type de recherche à effectuer.
         *
         * Valeurs : Cette méthode effectue différents types de recherche :
         * Types de recherche transverses : 01 - Par nom 02 - Par plage de noms d'agent 03 -
         * Par type de fonction 04 - Par groupe de fonctions 05 - Par matricule 06 - Par type de fonction et nom
         * 07 - Pat type de fonction et plage de noms d'agent Types de recherche propres à l'application Agenda :
         * 21 - Par agence de rattachement 22 - Par liste d'agents 23 - Par agence de rattachement et fonction
         * 24 - Par liste d'agents et fonction 25 - Par nom d'agent et fonction Types de recherche propres à l'application Habilitation
         * 41 - Par profil Type 42 - Par habilitation
         */
        typeRecherche: number;
        codeEtablissement: string;
        identifiantEDSRattachement?: number;
        codeAction?: string;
    }
    interface IRechercheAgent {
        listeAgents: Array<IAgent>;
    }
    interface IAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         *
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: string;
        /**
         * Détermine si l'agent est générique ou nominatif.
         * Exemple d'agent générique : stagiaire, dépannage, ...
         *
         * Valeurs possibles :
         * - 'O' : Agent générique
         * - 'N' : Agent nominatif
         * - ' ' : Agent générique et Agent nominatif
         */
        indicateurAgentNonNominatif: string;
        /**
         * Indique si l'agent possède le profil de façon personnalisée.
         *
         * Valeurs possibles :
         * - 'F' : ?
         * - 'P' : ?
         */
        typePersonnalisation: string;
        /**
         * Indicateur existence affectation temporaire.
         */
        indicateurAffectationTemporaire: string;
        /**
         * Indicateur non éligibilité prise RDV.
         */
        indicateurNonElligibiliteRDV: string;
    }
    interface IZoneDeTravail {
        /**
         * Code indiquant si d'autres résultats sont disponibles (cas des Qr avec pagination).
         */
        codeSuiteListe: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.AnnulationDecision {
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: Commun.Enum.CodeTypeDecisionEnum;
        /**
         * Identifiant interne du décideur réel d'un mouvement MAD.
         */
        identifiantEdsDecidePar: number;
        /**
         * Message(s) d'anomalie, d'erreur ou d'information, restitué(s) par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        resultatPriseDecision: IResultatPriseDecision;
    }
    interface IAnnulationDecision {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: string;
        listeMouvementMadAnnule: Array<IMouvementMad>;
    }
    interface IResultatPriseDecision {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageApplicatif: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.AuditTarification {
    interface IParametreGet {
        codeTypeRecherche: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeAgentConnecte: string;
    }
    interface ICompteBancaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service. Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        listeJourneeAudit: Array<IJourneeAudit>;
    }
    interface IAuditTarification {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IJourneeAudit {
        /**
         * Date indiquant la journée de la piste d'audit d'un compte bancaire.
         * '= Date de présentation de l'opération (IHM)
         * Type date au format yyyy-MM-dd
         */
        dateJourneeAudit: string;
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Désignation d'un client bancaire détenteur de contrats de produit/service.
         */
        designationEntiteTitulaire: string;
        infoStructure: IInfoStructure;
        infoFinanciere: IInfoFinanciere;
        synthese: ISynthese;
        listeMouvementAudit: Array<IMouvementAudit>;
    }
    interface IInfoFinanciere {
        /**
         * Code de la devise d'un compte bancaire.
         * Exemple : 'EUR' - euros
         */
        codeDeviseCompteBancaire: string;
        /**
         * Solde disponible d'un compte bancaire en début de journée, après prise en compte des tous les crédits.
         * '= soldeComptableRecalcule : suite au 1er "mouvementAudit"  (Mad ou imput) de la journée
         * '- montantOperation : du 1er "mouvementAudit"  (Mad ou imput)  de la journée
         */
        soldeDisponibleDeReference: number;
        /**
         * Solde disponible d'un compte bancaire en fin de journée.
         * '= soldeReel
         * '+ montantDecouvertAutorise
         * '+ soldeActualiseApurementVario
         * '- montantReservesEncaissement
         * '- montantMouvementsMadEcartes
         */
        soldeDisponibleFinJournee: number;
        soldeReel: number;
        /**
         * Montant du découvert autorisé sur un compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Solde actualisé d'un plan d'apurement Vario.
         */
        soldeActualiseApurementVario: number;
        /**
         * Montant global des réserves d'encaissement.
         */
        montantReservesEncaissement: number;
        /**
         * Montant global des mouvements MAD écartés.
         */
        montantMouvementsMadEcartes: number;
    }
    interface IInfoStructure {
        /**
         * Détermine le type organisationnel de l'EDS gérant un compte bancaire.
         */
        codeTypeEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS gérant un compte bancaire.
         */
        identifiantInterneEdsGerePar: number;
        /**
         * Identifiant unique externe de l'EDS gérant un compte bancaire.
         */
        identifiantExterneEdsGerePar: number;
        /**
         * Identifiant unique interne de l'EDS dans lequel est domicilié un compte bancaire.
         */
        identifiantInterneEdsDomicilieA: number;
        /**
         * Identifiant unique externe de l'EDS dans lequel est domicilié un compte bancaire.
         */
        identifiantExterneEdsDomicilieA: number;
    }
    interface IMouvementAudit {
        /**
         * Numéro chronologique positif des mouvements de la piste audit, trié par ordre décroissant.
         * - le 0 n'est pas utilisé
         * - '-99998" utilisé pour la restitution du regroupement débit différé
         * - '-99999" utilisé pour la restitution du regroupement  débit différé
         */
        numeroSequence: number;
        /**
         * Détermine le type du pouvement de la piste d'audit.
         * 'I' : imputation
         * 'M' : mouvement MAD
         */
        codeTypeMouvementAudit: string;
        /**
         * Détermine si 'O' ou 'N' une commission d'intervention unique a été appliquée lors d'un "mouvementAudit" (Mad ou Imput) à débit différé.
         * A blanc (null) s'il ne s'agit pas d'un débit différé.
         */
        indicateurCIUniqueDebitDiffere: string;
        /**
         * Détermine si 'O' ou 'N' un "mouvementAudit" (Mad ou imput) est tarifable.
         */
        indicateurTarification: string;
        /**
         * Solde comptable d'un compte bancaire recalculé après un mouvement (Mad ou imput).
         */
        soldeDisponibleRecalcule: number;
        infoMad: IInfoMad;
        compteTarification: ICompteTarification;
        operation: IOperation;
        listePrestation: Array<IPrestation>;
    }
    interface ICompteTarification {
        /**
         * Référence du guichet d'un compte bancaire sur lequel est appliqué une tarification.
         */
        codeGuichetCompteTarification: string;
        /**
         * Référence d'identification d'un compte bancaire sur lequel est appliqué une tarification.
         */
        numeroCompteTarification: string;
    }
    interface IOperation {
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Désignation de l'opération enrichi avec son montant.
         */
        libelleOperationEnrichi: string;
        /**
         * code devise du montant de l'opération entrée au MAD.
         */
        codeDeviseMontantOperation: string;
        /**
         * Montant de l'opération entrée au MAD.
         */
        montantOperation: number;
        /**
         * Date à laquelle une opération a été effectivement réalisée : décidé pour un mouvement au MAD, imputée sinon
         * '= Date d'opération (IHM)
         * Type date au format yyyy-MM-dd
         */
        dateOperationEffective: string;
    }
    interface IPrestation {
        /**
         * numéro séquentiel d'une prestation de tarification.
         */
        numeroPrestation: number;
        /**
         * Indicateur de prestation précisant s'il s'agit d'une commission d'intervention (CI) ou de frais de rejet  :
         * 'C' : commission d'intervention
         * 'R' : frais de rejet
         */
        indicateurTypePrestation: string;
        /**
         * Montant théorique de la tarification.
         */
        montantTarifableTheorique: number;
        /**
         * Montant de la tarification.
         * '= Tarif calculé (IHM)
         */
        montantATarifer: number;
        /**
         * Statut de la tarification. Cf. table délocalisée MV5I.
         */
        statutTarification: string;
        /**
         * Montant réellement tarifé.
         * '= Tarif imputé (IHM)
         */
        montantReellementTarife: number;
        /**
         * Date à laquelle les frais MAD ou les commissions d'interventions ont été prélevés.
         * '= Date de prélèvement des frais (IHM)
         * Type date au format yyyy-MM-dd
         */
        datePrelevementFrais: string;
        /**
         * Motif de l'exonération d'une tarification.
         */
        motifExoneration: string;
        /**
         * Libellé associé au code motif d'exonération.
         */
        libelleMotifExoneration: string;
        /**
         * Date à laquelle une remise sur la tarification a été réalisée.
         * Type date au format yyyy-MM-dd
         */
        dateRemise: string;
        /**
         * Motif de la remise sur tarification.
         */
        motifRemise: string;
        /**
         * Libellé associé au code motif de remise.
         */
        libelleMotifRemise: string;
        /**
         * Montant de la remise sur tarification.
         */
        montantRemise: number;
    }
    interface ISynthese {
        /**
         * Nombre de "mouvementAudit" tarifable : "indicateurTarification" à 'O'
         */
        nombreMouvementTarifable: number;
        /**
         * Nombre de "mouvementAudit" ayant au moins une prestation avec un montant réellement tarifé : "datePrelevementFrais" différente de "0001-01-01".
         */
        nombreMouvementReellementTarife: number;
        /**
         * Somme des montants réellement tarifé des "mouvementAudit" de la journée.
         */
        montantGlobalReellementTarife: number;
        /**
         * Nombre de prestation éxonérées : "motifExoneration" renseigné.
         */
        nombreExoneration: number;
    }
    interface IInfoMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvementMad: number;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Identifiant du RIB sur lequel le mouvement du MAD a été forçé.
         */
        ribDestinationForcage: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Caracteristique {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantMouvement: number;
    }
    interface IInfoSepaOperation {
        /**
         * Libellé de pays fourni dans le cadre d'un virement ou d'un rejet SEPA.
         */
        libellePaysDonneurOrdre: string;
        /**
         * Libellé complémentaire d'un mouvement échange dans les virements SEPA.
         */
        libelleComplementMino: string;
        /**
         * Libellé complet de désignation du bénéficiaire d'une opération échangée.
         */
        libelleCompletBeneficiaire: string;
        /**
         * Référence d'identification d'un établissement financier ou assimilé au niveau international.
         */
        codeBicDestinataire: string;
        /**
         * Référence d'identification d'un compte bancaire au niveau international.
         */
        numeroIbanBeneficiaire: string;
    }
    interface IInfoDelegationDecision {
        /**
         * Donnée valant O ou N, et indiquant la présence d'une attente délégation sur un mouvement.
         */
        codeAttenteDelegataire: string;
        /**
         * Détermine le niveau délégataire requis pour la gestion d'un mouvement MAD donné. Spécifique à chaque établissement. Exemple : '000001' - niveau 1
         */
        codeNiveauDelegataireRequis: string;
        /**
         * Libellé de la version de la charte délégataire associé à un agent / PF.
         */
        libelleVersionCharteDelegataire: string;
        /**
         * Identifiant de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        identifiantEdsPourLeCompteDe: number;
        /**
         * Libellé de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        libelleEdsPourLeCompteDe: string;
    }
    interface ICourrier {
        /**
         * 'O' : demande de courrier effectuée
         * 'N' : demande de courrier non effectuée
         */
        indicateurDemandeCourrier: string;
        /**
         * Détermine le type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        codeTypeCourrier: string;
        /**
         * Libellé associé au type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        libelleTypeCourrier: string;
        /**
         * 'O' : demande de tarification courrier effectuée
         * 'N' : demande de tarification courrier non effectuée
         */
        indicateurFacturationCourrier: string;
        /**
         * Date à laquelle la demande de tarification du courrier a été effectuée.
         * Type date au format yyyy-MM-dd
         */
        dateFacturationCourrier: string;
        /**
         * 'O' : demande automatique du courrier Murcef '030' effectuée
         * 'N' : demande automatique du courrier Murcef '030' non effectuée
         */
        indicateurDemandeAutoMurcef: string;
        /**
         * blanc : par défaut, édition courrier Murcef '030' non effectuée
         * 'O' : édition d'un courrier Murcef '030' effectuée
         */
        indicateurEditionCourrierMurcef: string;
        /**
         * Date à laquelle le courrier Murcef '030' a été édité.
         * Type date au format yyyy-MM-dd
         */
        dateEditionCourrierMurcef: string;
    }
    interface IDecision {
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Date à laquelle a été prise la décision d'imputer ou non (rejet) un mouvement du MAD.
         * Type date au format yyyy-MM-dd
         */
        datePriseDecision: string;
        /**
         * Commentaire ajouté par l'utilisateur pour accompagner sa prise de décision.
         */
        commentairePriseDecision: string;
        /**
         * Détermine le motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur. '01 : OPPOSITION POUR VOL '02' : OPPOSITION POUR PERTE '03' : UTILISATION FRAUDULEUSE '12' : COORDONNES ERRONEES '14' : COMPTE SOLDE
         */
        codeMotifRejet: string;
        /**
         * Libellé associé au code motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        motifRejet: string;
        /**
         * Détermine le motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01 : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejetComplementaire: string;
        /**
         * Libellé associé au code motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        motifRejetComplementaire: string;
        /**
         * Identifiant du RIB sur lequel le mouvement du MAD a été forçé.
         */
        ribDestinationForcage: string;
        /**
         * Donnée technique valant O ou N, et permettant d'afficher les motifs de prise de décision sur un mouvement, via les tables délocalisées.
         */
        indicateurTableMotifDecision: string;
        infoDelegationDecision: IInfoDelegationDecision;
        infoDecideurDecision: IInfoDecideurDecision;
    }
    interface IOperation {
        /**
         * identifiant unique interne de l'opéation rejetée à l'imputation et donc entrée au MAD.
         */
        referenceOperation: string;
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Désignation complémentaire de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleComplementaireA: string;
        /**
         * Désignation complémentaire de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleComplementaireB: string;
        /**
         * Date à laquelle l'opération financière a été échangée entre les 2 organismes financiers.
         * Type date au format yyyy-MM-dd
         */
        dateCompensation: string;
        /**
         * Détermine une opération-type traitée en compensation.
         * '20' : virement
         * '33' : notification APL
         * '60' : lettre de change
         * '75' : virement TIP
         * '80' : avis de prélèvement
         * '90' : retrait GAB
         */
        codeOperationInterbancaire: string;
        /**
         * Détermine la famille SIT d'identification d'une opération.
         * '001' : virement
         * '005' : prélèvement
         * '007' : DAB
         * '010' : débit TIP
         * '012' : retrait carte bancaire
         * '018' : LCR
         * 'CHQ' : chèque
         */
        codeTypeOperation: string;
        /**
         * Montant de l'opération entrée au MAD.
         */
        montantOperation: number;
        /**
         * Devise du montant de l'opération entrée au MAD.
         */
        deviseMontantOperation: string;
        /**
         * Numéro d'identification du chèque en lien avec l'opération entrée au MAD.
         */
        numeroCheque: string;
        /**
         * Numéro d'identification de la carte bancaire en lien avec l'opération entrée au MAD.
         */
        identifiantCarte: string;
        /**
         * Solde d'un compte bancaire avent imputation d'une opération financière sur celui-ci.
         */
        soldeCompteAvantOperation: number;
        /**
         * Solde d'un compte bancaire en fin de journée comptable.
         */
        soldeCompteFinJournee: number;
        /**
         * Devise du montant des soldes d'un compte bancaire.
         */
        deviseSoldeCompte: string;
        /**
         * Nom associé à un compte extérieur.
         */
        libelleDomiciliation: string;
        /**
         * Référence d'archivage véhiculée par le SIT pour les opérations cartes.
         */
        referenceArchivage: string;
        /**
         * Référence de l'opération spécifique au présentateur donnée saisie. Concerne notamment les opérations au format réseau
         */
        referencePresentateur: string;
        /**
         * Détermine la provenance technique "échanges", interne Mysys.
         * '001' : C.A.M normal (SIT)
         * '002' : C.A.M exceptionnelle
         * '003' : Débit différé
         * '004' : O.C.R Lille
         * '006' : Chèque réseau
         */
        codeProvenance: string;
        /**
         * Désignation associée à la provenance technique "échanges", interne Mysys.
         * '001' : C.A.M normal (SIT)
         * '002' : C.A.M exceptionnelle
         * '003' : Débit différé
         * '004' : O.C.R Lille
         * '006' : Chèque réseau
         */
        libelleProvenance: string;
        /**
         * Numéro d'identification établi par la BDF pour un organisme autorisé à émettre des prélèvements / créancier.
         */
        numeroNationalEmetteur: string;
        /**
         * Désignation d'un organisme autorisé à émettre des prélèvements / créancier.
         */
        libelleNumeroEmetteur: string;
        /**
         * Code établissement à l'origine d'une l'opération.
         */
        codeEtablissementDonneurOrdre: string;
        /**
         * Code guichet à l'origine d'une l'opération.
         */
        codeGuichetDonneurOrdre: string;
        /**
         * Numéro d'un compte bancaire à l'origine d'une opération.
         */
        numeroCompteDonneurOrdre: string;
        /**
         * Désignation du donneur d'ordre à l'origine d'un opération.
         */
        libelleEmetteurDonneurOrdre: string;
        /**
         * Code établissement destinataire d'une opération.
         */
        codeDestinataireOperation: string;
        /**
         * Donnée valant O ou N, et indiquant l'annulation d'une opération.
         */
        codeAnnulation: string;
        infoSepa: IInfoSepaOperation;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer..
         */
        identifiantMouvement: number;
        /**
         * Date à laquelle une opération, rejetée de l'imputation, est entrée au MAD.
         * Type date au format yyyy-MM-dd
         */
        dateEntreeAuMad: string;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Libellé du motif d'entrée au MAD.
         * 'A' : à vérifier
         * 'C' : compte soldé
         * 'D' : domiciliation erronée
         * 'E' : faux numéro
         * 'F' : sans provision
         */
        motifEntreeAuMad: string;
        /**
         * Détermine le motif d'une opposition sur compte ou personne ou entité titulaire.
         * '0B03' : SERVICE LUTTE ANTI-BLANCHIMENT
         * '0001' : REDRESSEMENT JUDICIAIRE CPTE RJ
         * '0003' : LIQUIDATION JUDICIAIRE
         */
        codeOpposition: string;
        /**
         * Date au delà de laquelle un décision manuelle ne pourra plus être prise pour un mouvement MAD.
         * Type date au format yyyy-MM-dd
         */
        dateLimiteDecision: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de facturation a été effectuée pour une prestation sur le mouvement..
         */
        indicateurDemandeFacturation: string;
        /**
         * Montant unitaire de tarification hors taxe.
         */
        montantHTAFacturer: number;
        /**
         * Code de la devise du montant unitaire de tarification hors taxe.
         */
        codeDeviseMontantHTAFacturer: string;
        /**
         * Détermine le type de facturation. Exemple : '1970', '1971'...
         */
        codePrestation: string;
        /**
         * Nombre de recyclage effectué sur un mouvement MAD en cours de recyclage.
         */
        nombreRecyclageMad: number;
        /**
         * Date à laquelle le dernier recyclage d'un mouvement MAD a eu lieu.
         * Type date au format yyyy-MM-dd
         */
        dateDernierRecyclageMad: string;
        /**
         * Détermine l'état d'un mouvement MAD vis à vis du recyclage.
         * Le recyclage consiste à retenter automatiquement l'imputation des mouvements en attente de décision.
         * ' ' : non recyclable
         * 'E' : en cours de recyclage
         * 'R' : recyclé en batch
         * 'T' : recyclé manuellement
         * 'A' : annulation d'un mouvement recyclé
         */
        codeEtatRecyclageMad: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire lors de l'entrée au MAD.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateCalculNoteBale2: string;
        /**
         * Détermine le type organisationnel de l'EDS gérant une entité titulaire lors de l'entrée au MAD d'un mouvement. Exemple : '001' : poste fonctionnel, '002' : service
         */
        codeTypeEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire lors de l'entrée au MAD d'un mouvement.
         */
        identifiantEdsGerePar: number;
        /**
         * Désignation de l'EDS gérant une entité titulaire lors de l'entrée au MAD d'un mouvement.
         */
        libelleEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS devant prendre une décision ors de l'entrée au MAD d'un mouvement.
         */
        identifiantEdsADeciderPar: number;
        operation: IOperation;
        decision: IDecision;
        courrier: ICourrier;
        listeCommentaireMouvement: Array<ICommentaireMouvement>;
    }
    interface ICaracteristique {
        /**
         * Message(s) d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        mouvementMad: IMouvementMad;
    }
    interface IInfoDecideurDecision {
        /**
         * Détermine le type organisationnel de l'EDS ayant pris la décision concernant un mouvement MAD. Exemple : '001' : poste fonctionnel, '002' : service
         */
        codeTypeEdsDecidePar: string;
        /**
         * Identifiant de l'EDS ayant pris la décision concernant un mouvement MAD.
         */
        identifiantEdsDecidePar: number;
        /**
         * Libellé de l'EDS ayant pris la décision concernant un mouvement MAD.
         */
        libelleEDSDecidePar: string;
        /**
         * Identifiant de l'agent sensé prendre la décision concernant un mouvement MAD.
         */
        identifiantAgentDecideur: string;
        /**
         * Nom de l'agent sensé prendre la décision concernant un mouvement MAD.
         */
        nomAgentDecideur: string;
        /**
         * Prénom de l'agent sensé prendre la décision concernant un mouvement MAD.
         */
        prenomAgentDecideur: string;
        /**
         * Détermine la civilité de l'agent sensé prendre la décision concernant un mouvement MAD. '1' : Mme '2' : Mlle '3' : M
         */
        codeCiviliteAgentDecideur: string;
    }
    interface ICommentaireMouvement {
        /**
         * Numéro de séquence du commentaire, unique par mouvement MAD.
         */
        numeroSequence: number;
        /**
         * Contenu du commentaire.
         */
        contenuCommentaire: string;
        /**
         * Date et heure à laquelle un commentaire a été saisi.
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDeSaisie: string;
        /**
         * Identifiant de l'agent ayant saisi un commentaire.
         */
        identifiantAgent: number;
        /**
         * Nom de l'agent ayant saisi un commentaire.
         */
        nomAgent: string;
        /**
         * Prénom de l'agent ayant saisi un commentaire.
         */
        prenomAgent: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Commentaire {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantMouvement: number;
    }
    interface IMouvementMad {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Contenu du commentaire.
         */
        listeCommentaireMouvement: Array<ICommentaireMouvement>;
    }
    interface ICommentaire {
        /**
         * Message(s) d'anomalie(s), d'erreur ou d'information, restitués par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        /**
         * Contenu du commentaire.
         */
        listeMouvementMad: Array<IMouvementMad>;
    }
    interface ICommentaireMouvement {
        /**
         * Numéro de séquence du commentaire, unique par mouvement MAD.
         */
        numeroSequence: number;
        /**
         * Contenu du commentaire.
         */
        contenuCommentaire: string;
        /**
         * Date et heure à laquelle un commentaire a été saisi.
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDeSaisie: string;
        /**
         * Identifiant de l'agent ayant saisi un commentaire.
         */
        identifiantAgent: number;
        /**
         * Nom de l'agent ayant saisi un commentaire.
         */
        nomAgent: string;
        /**
         * Prénom de l'agent ayant saisi un commentaire.
         */
        prenomAgent: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.CompteForcage {
    interface IParametreGet {
        codeProduit: string;
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeAgentConnecte: string;
        codeTypeOperation: string;
        codeProvenance: string;
        codeOperationInterbancaire: string;
    }
    interface ICompteBancaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service. Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        libelleTypeProduit: string;
        codeDevise: string;
    }
    interface ICompteForcage {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.ControleDelegataire {
    interface IPutParametre {
        codeGestion: string;
        controleDelegataire: IControleDelegataire;
    }
    interface IControleDelegataire {
        /**
         * Message(s) d'anomalie(s), d'erreur ou d'information, restitués par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        listeMouvementMad: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        /**
         * Code établissement du délégataire.
         */
        codeEtablissement: string;
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Identifiant interne du délégataire sélectionné par l'agent.
         */
        identifiantEdsDelegataire: number;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisInterne: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisExterne: string;
        /**
         * Description de la version de la charte délégataire associé à l'agent.
         */
        libelleVersionCharteDelegataire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.ControleDelegation {
    interface IParametreGet {
        /** celui en cours */
        codeAgentConnecte: number;
        /** celui en cours */
        codeEtablissement: string;
        /** celui en cours */
        codeGuichet: string;
        /** celui en cours */
        codeProduit: string;
        /** celui en cours */
        identifiantEntiteTitulaire: number;
        /** mettre "1" */
        codeAppelMoteurDelegation: string;
        /** celui en cours */
        identifiantPosteFonctionnel: number;
        /** entiteTitulaire.infoGeneraleEntiteTitulaire.noteBale2  */
        noteBale2: string;
        numeroCompteBancaire: string;
        /**  EntiteTitulaire / CompteBancaire / InfoFinanciereEntiteTitulaire / montantCapitauxDebiteurs */
        montantCapitauxDebiteurs: number;
        /** EntiteTitulaire / CompteBancaire / InfoFinanciereEntiteTitulaire / deviseMontantCapitauxDebiteurs */
        codeDeviseCapitauxDebiteurs?: string;
        /** mettre 0 */
        identifiantMouvement: number;
        /** mettre "F" */
        codeTypeDecision: string;
        /** non renseigné */
        codeMotifEntreeAuMad?: string;
        /** EntiteTitulaire / CompteBancaire / MouvementMad du jour / Operation / montantOperation */
        montantOperation: number;
    }
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Pays de résidence de la personne selon la norme ISO 3166-1.
         */
        codePaysResidence: string;
        /**
         * Identifie un département ou une collectivité d'outre-mer dans la nomenclature INSEE.
         * 01/96 : correspondent aux départements métropolitains
         * 2A : corse du Sud
         * 2B : haute Corse
         */
        codeDepartementResidence: string;
        /**
         * Détermine la branche d'activité du Profressionnel selon la nomenclature NAF Révision 2,2008 de l'INSEE.
         */
        codeNafInsee: string;
        /**
         * Cotation attribuée à une entreprise donnée par la Banque de France.
         * Exemples : 3, 3+, 3++, 4, 4+,...
         */
        cotationFibenEntreprise: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FCC de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFcc: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FICP de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFicp: string;
        /**
         * Indique si la personne est topée Watch List Locale (liste de surveillance).
         * 'O' : la personne est topée Watch List Locale
         * 'N' : la personne n'est pas topée Watch List Locale
         */
        indicateurWatchListLocale: string;
        /**
         * Détermine le niveau de Watch List Locale.
         * '1' : encours sain et significatif
         * '2' : risque dégradé
         * '3' : risque de défaillance
         */
        codeNiveauWatchListLocale: string;
        /**
         * Indique si la personne est topée Watch List Nationale.
         * 'O' : la personne est topée Watch List Nationale
         * 'N' : la personne n'est pas topée Watch List Nationale
         */
        indicateurWatchListNationale: string;
        /**
         * Détermine le niveau de Watch List Nationale.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListNationale: string;
        /**
         * Indique si la personne est topée Watch List Banque Référente.
         * 'O' : la personne est topée Watch List Banque Référente
         * 'N' : la personne n'est pas topée Watch List Banque Référente
         */
        indicateurWatchListBanqueRef: string;
        /**
         * Détermine le niveau de Watch List Banque Référente.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListBanqueRef: string;
        /**
         * Cotation attribuée à un dirigeant donné pour une personne morale donnée par la Banque de France.
         * '000' : pas de réserve
         * '040' : attention particulière
         * '050' : réserves
         * '060' : réserves sérieuses
         */
        cotationFibenDirigeant: string;
        /**
         * Catégorisation de la clientèle selon la segmentation de marché. Permet de déduire les segmentations risque et marché.
         * 'CC000001' : personnel Groupe
         * 'CC000002' : dirigeant de société de capitaux profession libérale
         */
        codeCategorieClient: string;
        /**
         * Ce code permet d'identifier le type de moteur de notation utilisé par l'application appelante.
         * '01' : Bâle2
         * '02' : NAFI
         * '03' : BEST
         */
        typeMoteurNotation: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        listeIncident: Array<IIncident>;
    }
    interface IControleDelegation {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: number;
        /**
         * Identifiant unique interne du poste fonctionnel en cours de travail.
         */
        identifiantPosteFonctionnel: number;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire.
         */
        identifiantEdsGerePar: number;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        listePersonne: Array<IPersonne>;
        compteBancaire: ICompteBancaire;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs. Exemple : 'EUR' - euros
         */
        codeDeviseCapitauxDebiteurs: string;
    }
    interface ICompteBancaire {
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * '0004' : CDD
         * '0008' : COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        mouvementMad: IMouvementMad;
    }
    interface IIncident {
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        codeTypeIncident: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Libellé du motif d'entrée au MAD. 'A' : à vérifier 'C' : compte soldé 'D' : domiciliation erronée 'E' : faux numéro 'F' : sans provision
         */
        codeMotifEntreeAuMad: string;
        /**
         * Montant de l'opération financière entrée au MAD.
         */
        montantOperation: number;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forcage autre RIB sans correction RIB
         * 'S' : correction de RIB + forçage
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Détermine le type d'appel au moteur de délégation.
         * '1' : demande de délégation
         * '2' : demande de délégation en mode information
         */
        codeAppelMoteurDelegation: string;
        resultatControleDelegation: IResultatControleDelegation;
    }
    interface IResultatControleDelegation {
        /**
         * Détermine,pour chaque type de fonction (Métier) ou pour chaque Agent, les éléments de délégation se référant à la
         * charte délégataire auquel il a droit.
         */
        codeNiveauDelegataireInterne: string;
        /**
         * Détermine le niveau de délégation géré sur les écrans de paramétrage (niveaux et affectations).
         */
        codeNiveauDelegataireExterne: string;
        /**
         * Libellé associé au niveau délégataire.
         */
        libelleNiveauDelegataire: string;
        /**
         * Détermine le numéro d'ordre d'affichage du niveau délégataire.
         */
        numeroOrdreAffichage: number;
        /**
         * Libellé associé au niveau délégataire requis.
         */
        libelleNiveauDelegataireRequis: string;
        /**
         * Détermine le numéro d'ordre d'affichage du niveau délégataire requis.
         */
        numeroOrdreAffichage2: number;
        /**
         * Libellé associé à la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        libelleVersionCharteDelegataire: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisExterne: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisInterne: string;
        /**
         * Détermine la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        codeCharteDelegataire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Courrier {
    interface IParametreGet {
        codeEtablissement: string;
        codeAgentConnecte: string;
    }
    interface ICourrier {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        listeCourrierMad: Array<ICourrierMad>;
    }
    interface ICourrierMad {
        /**
         * Détermine le type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        codeTypeCourrier: string;
        /**
         * Libellé associé au type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        libelleTypeCourrier: string;
        /**
         * Détermine le lieu de traitement d'un courrier.
         * 'B' : Back-Office
         * 'C' : C.T.R.
         */
        codeLieuTraitement: string;
        /**
         * Libellé associé au lieu de traitement d'un courrier.
         * 'B' : Back-Office
         * 'C' : C.T.R.
         */
        libelleLieuTraitement: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Delegataire {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantAgentConnecte: number;
        codeCharteDelegataire: string;
        codeNiveauDelegRequisInterne: string;
    }
    interface IDelegataire {
        /**
         * Message(s) d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        /**
         * Libellé associé au type de courrier dans la gestion du MAD. '001' : proposition de découvert '002' : augmentation de découvert '003' : mise en garde avant rejet '030' : courrier loi Murcef
         */
        listeDelegataireMad: Array<IDelegataireMad>;
    }
    interface IDelegataireMad {
        /**
         * Identifiant de l'agent délégataire
         */
        identifiantDelegataire: number;
        /**
         * Désignation de l'agent délégataire
         */
        designationDelegataire: string;
        /**
         * Détermine la fonction du délégataire.
         * '072' : chargé de clientèle de niveau 2
         * '081' : agent commercial
         */
        codeFonctionDelegataire: string;
        identifiantInterneEds: number;
        identifiantExterneEds: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.DeploiementMyMad {
    interface IParametreGet {
        /** Identifiant interne de l'agent connecté */
        codeAgentConnecte: string;
        /** Code établissement du compte bancaire sur lequel on effectue la recherche de mouvements */
        codeEtablissement: string;
        /** Identifiant unique interne de l'EDS sur lequel on recherche le déploiement MyMad. */
        identifiantEds: number;
        /** Code permettant de déterminer la fonctionnalité à rechercher. */
        codeFonctionnalite: string;
    }
    interface IDeploiementMyMad {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour
         * une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.InfoSpecifiqueETMad {
    interface IParametreGet {
        /** Identifiant interne de l'agent connecté. */
        codeAgentConnecte: string;
        /** Code établissement du compte bancaire sur lequel on effectue la recherche de mouvements. */
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Désignation d'un client bancaire détenteur de contrats de produit/service.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine la relation des personnes composant une entité titulaire. '1' : simple '2' : joint entre époux '3' : joint entre tiers '4' : indivision
         */
        codeModeComposition: string;
        /**
         * Détermine l'usage pour lequel est dédiée l'entité titulaire. '1' : privé '2' : professionnel '3' : professionnel réglementé '4' : succession '5' : versement direct '6' : confidentiel privé
         */
        codeUsage: string;
        /**
         * Date de la dernière décision prise sur un mouvement MAD de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        datePriseDerniereDecision: string;
        /**
         * Libellé du type du dernier courrier MURCEF édité.
         */
        libelleTypeDernierCourrier: string;
        /**
         * Date de la dernière édition d'un courrier MURCEF de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateEditionDernierCourrier: string;
        /**
         * Libellé de la nature d'une interdiction bancaire. 'INTERDICTION BANCAIRE' 'INTERDICTION JUDICIARE'
         */
        libelleInterdictionBancaire: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateNotation: string;
        infoStructureEntiteTitulaire: IInfoStructureEntiteTitulaire;
        listePersonne: Array<IPersonne>;
    }
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Désignation d'une personne du SI Mysys.
         */
        designationPersonne: string;
        /**
         * Détermine si une personne est désignée responsable d'une entité titulaire, c'est-à-dire responsable des incidents pouvant survenir sur un de ses comptes.
         */
        indicateurResponsable: string;
        /**
         * Détermine le type de personnalité juridique d'une personne. Valeurs :
         * '1' - personne physique
         * '2' - personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Détermine la dénomination d'une personne. Valeurs :
         * '1' - Mme
         * '2' - Mlle
         * '3' - M
         */
        codeCivilite: string;
        /**
         * Prénom d'une personne.
         */
        prenom: string;
        /**
         * Nom d'une personne.
         */
        nom: string;
        /**
         * Détermine le type de mandat permettant d'enregistrer une procuration sur compte. Exemples :
         * 'G' - procuration générale. On donne procuration sur tous les comptes de la personne.
         * 'P' - procuration générale par compte. On donne procuration sur un compte en disposition
         * 'PS' - procuration spéciale d'administration. On donne le droit de gérer le compte, mais pas d'en bénéficier.
         * 'K' - procuration spéciale porteur de carte pro. On donne procuration sur les comptes support pour détention de carte.
         */
        codeTypeMandat: string;
        /**
         * Identifiant unique interne de l'EDS en charge du suivi d'une personne.
         */
        identifiantInterneEdsSuiviPar: number;
        /**
         * Identifiant unique externe de l'EDS en charge du suivi d'une personne.
         */
        identifiantExterneEdsSuiviPar: number;
        /**
         * Désignation de l'EDS en charge du suivi d'une personne.
         */
        libelleEdsSuiviPar: string;
    }
    interface IInfoStructureEntiteTitulaire {
        /**
         * Identifiant unique interne de l'EDS en charge du suivi d'une entité titulaire.
         */
        identifiantInterneEdsSuiviPar: number;
        /**
         * Identifiant unique externe de l'EDS en charge du suivi d'une entité titulaire.
         */
        identifiantExterneEdsSuiviPar: number;
        /**
         * Désignation de l'EDS en charge du suivi d'une entité titulaire.
         */
        libelleEdsSuiviPar: string;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire.
         */
        identifiantInterneEdsGerePar: number;
        /**
         * Identifiant unique externe de l'EDS gérant une entité titulaire.
         */
        identifiantExterneEdsGerePar: number;
        /**
         * Désignation de l'EDS gérant une entité titulaire.
         */
        libelleEdsGerePar: string;
        /**
         * Adresse mail de l'EDS gérant une entité titulaire.
         */
        adresseMailEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS dans lequel est domicilié une entité titulaire.
         */
        identifiantInterneEdsDomicilieA: number;
        /**
         * Identifiant unique externe de l'EDS dans lequel est domicilié une entité titulaire.
         */
        identifiantExterneEdsDomicilieA: number;
        /**
         * Désignation de l'EDS dans lequel est domicilié une entité titulaire.
         */
        libelleEdsDomicilieA: string;
    }
    interface IInfoSpecifiqueETMad {
        /**
         * Message(s) d'anomalie, d'erreur ou d'information, restitué(s) par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        entiteTitulaire: IEntiteTitulaire;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Journal {
    interface IParametreGet {
        /** Identifiant interne de l'agent connecté. */
        codeAgentConnecte: string;
        /** Code établissement du compte bancaire sur lequel on effectue la recherche de mouvements. */
        codeEtablissement: string;
        /**
         * Code permettant de déterminer le type de recherche des mouvements en attente de décision.
         * 0 - recherche détaillée sur un mouvement
         * 1 - recherche via le "pour le compte de"
         * 2 - recherche via le "géré par"
         * 3 - recherche via le "l'EDS de regroupement"
         * 4 - recherche via le "décidé par"
         * 5 - recherche via le "délégataire
         */
        codeTypeRecherche: string;
        /** Date de début de période de recherche. (>1901-01-01) */
        dateDebutRecherche: string;
        /** Date de fin de période de recherche. (>1901-01-01) */
        dateFinRecherche: string;
        /** Identifiant unique interne de l'EDS sur laquel on recherche des mouvements MAD. */
        identifiantEds: number;
        /** Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer. */
        identifiantMouvement: number;
        /** Date et heure précise à la microseconde prêt d'enregistrement de la décision du mouvement. */
        timestampDecisionMouvement: string;
    }
    interface IDecision {
        /**
         * Donnée valant O ou N, et indiquant l'annulation d'une décision prise sur un mouvement MAD.
         */
        indicateurAnnulationDecision: Commun.Enum.IndicateurEnum;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: Commun.Enum.CodeTypeDecisionEnum;
        /**
         * Date/heure à laquelle a été prise la décision d'imputer ou non (rejet) un mouvement du MAD.
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        datePriseDecision: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de facturation a été effectuée pour une prestation donnée.
         */
        indicateurDecisionFacturable: Commun.Enum.IndicateurEnum;
        /**
         * Détermine le motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01  : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejet: "01" | "02" | "03" | "12" | "14";
        /**
         * Détermine le motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01  : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         * à faire modifier dans restit, visiblement copié collé de la ligne du dessus
         */
        codeMotifRejetComplementaire: string;
        /**
         * Détermine le type de courrier dans la gestion du MAD. '001' : proposition de découvert '002' : augmentation de découvert '003' : mise en garde avant rejet '030' : courrier loi Murcef
         */
        codeTypeCourrier: string;
        /**
         * Référence du guichet du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        codeGuichetForcage: string;
        /**
         * Référence d'identification du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        numeroCompteBancaireForcage: string;
    }
    interface IJournal {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        listeMouvementMad: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Date et heure précise à la microseconde prêt d'enregistrement de la décision du mouvement.
         */
        timestampDecisionMouvement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Désignation d'un client bancaire détenteur de contrats de produit/service.
         */
        designationEntiteTitulaire: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateCalculNoteBale2: string;
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        infoStructure: IInfoStructure;
        infoFinanciere: IInfoFinanciere;
        decision: IDecision;
        /**
         * Détermine si le traitement du mouvement MAD a été effectué via un processus MyWay. true : MyWay false : autre (NSDK,...)
         */
        indicateurProcessusMyway: boolean;
        /** Détermine si la décision liée au mouvement MAD est annulable (dernière décision prise sur le mouvement). true : annulable false : non annulable */
        indicateurDecisionAnnulable: boolean;
    }
    interface IInfoStructure {
        /**
         * Identifiant interne du "géré par" du mouvement.
         */
        identifiantEdsGerePar: number;
        /**
         * Désignation du "géré par" du mouvement.
         */
        libelleEdsGerePar: string;
        /**
         * Identifiant interne de l'EDS de rattachement du "géré par".
         */
        identifiantEdsRegroupement: number;
        /**
         * Désignation de l'EDS de rattachement du "géré par".
         */
        libelleEdsRegroupement: string;
        /**
         * Identifiant interne du décideur réel d'un mouvement MAD.
         */
        identifiantEdsDecidePar: number;
        /**
         * Désignation du décideur réel d'un mouvement MAD.
         */
        libelleEdsDecidePar: string;
        /**
         * Identifiant de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        identifiantEdsPourLeCompteDe: number;
        /**
         * Désignation de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        libelleEdsPourLeCompteDe: string;
        /**
         * Identifiant interne du délégataire sélectionné par l'agent.
         */
        identifiantEdsDelegataire: number;
        /**
         * Désignation du délégataire sélectionné par l'agent.
         */
        libelleEdsDelegataire: string;
    }
    interface IInfoFinanciere {
        /**
         * Détermine la devise du compte bancaire.
         * Exemple : 'EUR' - euros
         */
        codeDevise: string;
        soldeDisponible: number;
        /**
         * Solde du compte bancaire.
         */
        soldeCompteBancaire: number;
        /**
         * Montant du découvert autorisé sur le compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Montant de l'opération entrée au MAD.
         */
        montantOperation: number;
        /**
         * Devise du Montant de l'opération entrée au MAD.
         */
        codeDeviseOperation: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.PriseDecision {
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Pays de résidence de la personne selon la norme ISO 3166-1.
         */
        codePaysResidence: string;
        /**
         * Identifie un département ou une collectivité d'outre-mer dans la nomenclature INSEE.
         * 01/96 : correspondent aux départements métropolitains
         * 2A : corse du Sud
         * 2B : haute Corse
         */
        codeDepartementResidence: string;
        /**
         * Détermine la branche d'activité du Profressionnel selon la nomenclature NAF Révision 2,2008 de l'INSEE.
         */
        codeNafInsee: string;
        /**
         * Cotation attribuée à une entreprise donnée par la Banque de France.
         * Exemples : 3, 3+, 3++, 4, 4+,...
         */
        cotationFibenEntreprise: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FCC de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFcc: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FICP de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFicp: string;
        /**
         * Indique si la personne est topée Watch List Locale (liste de surveillance).
         * 'O' : la personne est topée Watch List Locale
         * 'N' : la personne n'est pas topée Watch List Locale
         */
        indicateurWatchListLocale: string;
        /**
         * Détermine le niveau de Watch List Locale.
         * '1' : encours sain et significatif
         * '2' : risque dégradé
         * '3' : risque de défaillance
         */
        codeNiveauWatchListLocale: string;
        /**
         * Indique si la personne est topée Watch List Nationale.
         * 'O' : la personne est topée Watch List Nationale
         * 'N' : la personne n'est pas topée Watch List Nationale
         */
        indicateurWatchListNationale: string;
        /**
         * Détermine le niveau de Watch List Nationale.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListNationale: string;
        /**
         * Indique si la personne est topée Watch List Banque Référente.
         * 'O' : la personne est topée Watch List Banque Référente
         * 'N' : la personne n'est pas topée Watch List Banque Référente
         */
        indicateurWatchListBanqueRef: string;
        /**
         * Détermine le niveau de Watch List Banque Référente.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListBanqueRef: string;
        /**
         * Cotation attribuée à un dirigeant donné pour une personne morale donnée par la Banque de France.
         * '000' : pas de réserve
         * '040' : attention particulière
         * '050' : réserves
         * '060' : réserves sérieuses
         */
        cotationFibenDirigeant: string;
        /**
         * Catégorisation de la clientèle selon la segmentation de marché. Permet de déduire les segmentations risque et marché.
         * 'CC000001' : personnel Groupe
         * 'CC000002' : dirigeant de société de capitaux profession libérale
         */
        codeCategorieClient: string;
        /**
         * Ce code permet d'identifier le type de moteur de notation utilisé par l'application appelante.
         * '01' : Bâle2
         * '02' : NAFI
         * '03' : BEST
         */
        typeMoteurNotation: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        listeIncident: Array<IIncident>;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateCalculNoteBale2: string;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs. Exemple : 'EUR' - euros
         */
        codeDeviseCapitauxDebiteurs: string;
        listePersonne: Array<IPersonne>;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IIncident {
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        codeTypeIncident: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Montant de l'opération financière entrée au MAD.
         */
        montantOperation: number;
        /**
         * Détermine la devise d'une opération bancaire. Exemple : 'EUR' - euros
         */
        codeDeviseOperation: string;
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Détermine le type d'un courrier dans la gestion du MAD.
         * '001' : PROPOSITION DE DECOUVERT
         * '002' : AUGMENTATION DE DECOUVERT
         * '003' : MISE EN GARDE AVANT REJET
         * '030' : COURRIER LOI MURCEF
         */
        codeTypeCourrier: string;
        /**
         * Identifiant interne du "géré par" du mouvement.
         */
        identifiantEdsGerePar: number;
        /**
         * Identifiant interne de l'EDS de rattachement du "géré par".
         */
        identifiantEdsRegroupement: number;
        decision: IDecision;
        resultatPriseDecision: IResultatPriseDecision;
    }
    interface IPriseDecision {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: string;
        /**
         * Détermine la qualité du poste fonctionnel occupé par l'agent connecté.
         * 'T' : titulaire
         * 'R' : remplaçant
         * 'S' : suppléant
         * 'A' : affectation temporaire
         */
        codeQualiteAgentConnecte: string;
        /**
         * Identifiant unique interne du poste fonctionnel en cours de travail.
         */
        identifiantPosteFonctionnel: number;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IResultatPriseDecision {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageApplicatif: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
    }
    interface IDecision {
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: Commun.Enum.CodeTypeDecisionEnum;
        /**
         * Donnée valant O ou N, et indiquant l'annulation d'une décision prise sur un mouvement MAD.
         */
        indicateurAnnulationDecision: Commun.Enum.IndicateurEnum;
        /**
         * Détermine le motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01' : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejet: string;
        /**
         * Détermine le motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        codeMotifRejetComplementaire: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de tarification été effectuée pour le traitement du mouvement MAD.
         */
        indicateurDecisionFacturable: Commun.Enum.IndicateurEnum;
        /**
         * Identifiant interne du décideur réel d'un mouvement MAD.
         */
        identifiantEdsDecidePar: number;
        /**
         * Identifiant de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        identifiantEdsPourLeCompteDe: number;
        infoDelegationDecision: IInfoDelegationDecision;
        /**
         * Référence du guichet du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        compteBancaireForcage: ICompteBancaireForcage;
    }
    interface IInfoDelegationDecision {
        /**
         * Détermine le type d'appel au moteur de délégation.
         * '1' : demande de délégation
         * '2' : demande de délégation en mode information
         */
        codeAppelMoteurDelegation: string;
        /**
         * Identifiant interne du délégataire sélectionné par l'agent.
         */
        identifiantEdsDelegataire: number;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisExterne: string;
        /**
         * Libellé associé à la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        libelleVersionCharteDelegataire: string;
    }
    interface ICompteBancaire {
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service. Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Code de l'entité administrative, issu de la recherche délocalisée CU3E à partir du code établissement + code guichet.
         */
        entiteAdministrative: string;
        infoFinanciereCompteBancaire: IInfoFinanciereCompteBancaire;
        listeMouvementMadTraite: Array<IMouvementMad>;
    }
    interface ICompteBancaireForcage {
        /**
         * Référence du guichet du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        codeGuichetForcage: string;
        /**
         * Catégorie de gestion du produit/service du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        codeProduitForcage: string;
        /**
         * Référence d'identification du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        numeroCompteBancaireForcage: string;
    }
    interface IInfoFinanciereCompteBancaire {
        /**
         * Solde disponible d'un compte bancaire au moment d'une opération financière sur celui-ci.
         */
        soldeDisponible: number;
        /**
         * Solde d'un compte bancaire à un instant donné.
         */
        soldeCompteBancaire: number;
        /**
         * Montant du découvert autorisé sur un compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Détermine la devise d'un compte bancaire. Exemple : 'EUR' - euros
         */
        codeDeviseCompteBancaire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.RechercheHistorique {
}

declare module Mad.Rest.MouvAttenteDecision.Modele.RechercheMadDuJour {
    interface IParametreGet {
        /** Identifiant interne de l'agent connecté. */
        codeAgentConnecte: string;
        /**
         * ' ' - recherche des mouvements liés à une entité titulaire gérée par un EDS
         * 'D' - recherche des mouvements liés à une entité titulaire gérée par un EDS
         * 'B' - recherche des mouvements liés à une entité titulaire gérée par SOUS un EDS de rattachement donné
         * 'A' - recherche des mouvements liés à une entité titulaire gérée en délégation par un autre EDS
         */
        codeTypeRecherche: " " | "D" | "B" | "A";
        /**
         * Code établissement du compte bancaire sur lequel on effectue la recherche de mouvements
         */
        codeEtablissement: string;
        /** Identifiant unique interne d'une entité titulaire sur laquelle on recherche des mouvements MAD */
        identifiantEntiteTitulaire: number;
        /** Identifiant unique interne de l'EDS sur laquelle on recherche des mouvements MAD */
        identifiantEds: number;
    }
    interface IChoixPossibleDecision {
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "rejet" d'un mouvement.
         */
        topChoixRejet: "0" | "1";
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "forçage" d'un mouvement.
         */
        topChoixForcage: "0" | "1";
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "suspens" d'un mouvement.
         */
        topChoixEnSuspens: "0" | "1";
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "forçage autre RIB" d'un mouvement.
         */
        topChoixForcageRib: "0" | "1";
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "forçage autre RIB avec correction" d'un mouvement.
         */
        topChoixForcageRibCorrection: "0" | "1";
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "transfert au MAD siège" d'un mouvement.
         */
        topChoixTransfertMadSiege: "0" | "1";
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer..
         */
        identifiantMouvement: number;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Libellé du motif d'entrée au MAD.
         * 'A' : à vérifier
         * 'C' : compte soldé
         * 'D' : domiciliation erronée
         * 'E' : faux numéro
         * 'F' : sans provision
         */
        motifEntreeAuMad: string;
        /**
         * Date à laquelle une opération, rejetée de l'imputation, est entrée au MAD.
         * Type date au format yyyy-MM-dd
         */
        dateEntreeAuMad: string;
        /**
         * Date au delà de laquelle un décision manuelle ne pourra plus être prise pour un mouvement MAD.
         * Type date au format yyyy-MM-dd
         */
        dateLimiteDecision: string;
        /**
         * Détermine le motif d'une opposition sur compte ou personne ou entité titulaire.
         * '0B03' : SERVICE LUTTE ANTI-BLANCHIMENT
         * '0001' : REDRESSEMENT JUDICIAIRE CPTE RJ
         * '0003' : LIQUIDATION JUDICIAIRE
         */
        codeOpposition: string;
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Montant de l'opération entrée au MAD.
         */
        montantOperation: number;
        /**
         * Détermine la devise du montant de l'opération entrée au MAD.
         */
        codeDeviseMontantOperation: string;
        /**
         * Détermine une opération-type traitée en compensation.
         * '20' : virement
         * '33' : notification APL
         * '60' : lettre de change
         * '75' : virement TIP
         * '80' : avis de prélèvement '90' : retrait GAB
         */
        codeOperationInterbancaire: string;
        /**
         * Détermine la provenance technique "échanges", interne Mysys. '001' : C.A.M normal (SIT) '002' : C.A.M exceptionnelle '003' : Débit différé '004' : O.C.R Lille '006' : Chèque réseau
         */
        codeProvenance: string;
        /**
         * Détermine le type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        codeTypeDernierCourrier: string;
        /**
         * 'O' : demande automatique du courrier Murcef '030' effectuée
         * 'N' : demande automatique du courrier Murcef '030' non effectuée
         */
        indicateurDemandeAutoMurcef: Commun.Enum.IndicateurEnum;
        /**
         * blanc : par défaut, édition courrier Murcef '030' non effectuée
         * 'O' : édition d'un courrier Murcef '030' effectuée
         */
        indicateurEditionCourrierMurcef: string;
        /**
         * 'N' : aucun commentaire lié au mouvement MAD
         * 'O' : des commentaires ont été saisis
         */
        indicateurPresenceCommentaire: Commun.Enum.IndicateurEnum;
        /**
         * Identifiant interne du "géré par" du mouvement.
         */
        identifiantEdsGerePar: number;
        /**
         * Identifiant interne de l'EDS de regroupement du "géré par" du mouvement.
         */
        identifiantEdsRegroupement: number;
        /**
         * Identifiant interne du décideur du mouvement.
         */
        identifiantEdsDecidePar: number;
        /**
         * Identifiant interne du délégataire du mouvement.
         */
        identifiantEdsDelegataire: number;
        /**
         * Identifiant interne de l'agent au nom duquel le mouvement a été décidé.
         */
        identifiantEdsPourLeCompteDe: number;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        choixPossibleDecision: IChoixPossibleDecision;
    }
    interface ICompteBancaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Date d'édition du dernier courrier Murcef '030' sur le compte bancaire.
         * Type date au format yyyy-MM-dd
         */
        dateDernierCourrierMurcefCompte: string;
        listeMouvementMadDuJour: Array<IMouvementMad>;
    }
    interface IRechercheMadDuJour {
        /**
         * Message(s) d'anomalie(s), d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: Array<string>;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Recherche {
    interface ICritereSelection {
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        codeTypeRecherche: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        topRechercheForcageAutomatique: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         * Type date au format yyyy-MM-dd
         */
        dateDebutRecherche: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         * Type date au format yyyy-MM-dd
         */
        dateFinRecherche: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        identifiantPersonne: number;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        identifiantEds: number;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        codeEtablissement: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        codeGuichet: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        numeroCompteBancaire: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        codeProvenanceMouvement: string;
        /**
         * Rappel de critère d'appel de la ressource. Cf. les descriptions des paramètres du GET.
         */
        codeAgentConnecte: string;
    }
    interface IInfoGeneraleEntiteTitulaire {
        /**
         * Détermine la qualité de l'entité titulaire, "particulier", utile lors de l'autorisation d'imputation d'un mouvement. Décroissante de A à E.  A blanc si non cotée.
         */
        codeCotationInterne: string;
        /**
         * Détermine la catégorie socio-professionnelle d'un individu selon l'INSEE.
         * Exemple : '1102' - maraichers, horticulteurs
         */
        codeCategorieSocioPro: string;
        /**
         * Libellé associé au code catégorie socio-professionnelle.
         */
        libelleCategorieSocioPro: string;
        /**
         * Raison sociale de l'entité titulaire, renseignée si le code catégorie sociale pro n'est pas renseigné.
         */
        raisonSociale: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateCalculNoteBale2: string;
        /**
         * Date à laquelle le dernier revenu supérieur à 2000 euros a été versé.
         * Type date au format yyyy-MM-dd
         */
        dateDomiciliation: string;
        /**
         * Date à laquelle la dernière décision au MAD a eu lieu pour une entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateDerniereDecisionMad: string;
        /**
         * Date à laquelle le dernier courrier a été envoyé à l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateDernierCourrier: string;
        /**
         * Libellé du dernier courrier envoyé à l'entité titulaire.
         */
        libelleDernierCourrier: string;
        /**
         * Libellé de la nature d'une interdiction bancaire.
         * 'INTERDICTION BANCAIRE'
         * 'INTERDICTION JUDICIARE'
         */
        libelleNatureInterdiction: string;
        /**
         * Détermine le type de relation d'une personne vis à vis du réseau BPCE.
         * '0' : hors réseau
         * '1' : agent de l'établissement
         * '2' : enfant du personnel
         * '3' : membre du COS
         * '4' : conjoint du personnel
         * etc...
         */
        codeAppartenanceReseau: string;
    }
    interface IInfoStructureEntiteTitulaire {
        /**
         * Identifiant unique interne de l'EDS en charge du suivi d'une entité titulaire.
         */
        identifiantEdsSuiviPar: number;
        /**
         * Désignation de l'EDS en charge du suivi d'une entité titulaire.
         */
        libelleEdsSuiviPar: string;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire.
         */
        identifiantEdsGerePar: number;
        /**
         * Désignation de l'EDS gérant une entité titulaire.
         */
        libelleEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS dans lequel est domicilié une entité titulaire.
         */
        identifiantEdsDomicilieA: number;
        /**
         * Désignation de l'EDS dans lequel est domicilié une entité titulaire.
         */
        libelleEdsDomicilieA: string;
    }
    interface IInfoFinanciereEntiteTitulaire {
        /**
         * Somme des montants des capitaux détenus, avoirs épargnes.
         */
        montantCapitauxDetenus: number;
        /**
         * Code de la devise du montant des capitaux détenus
         * Exemple : 'EUR' - euros
         */
        deviseMontantCapitauxDetenus: string;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs.
         * Exemple : 'EUR' - euros
         */
        deviseMontantCapitauxDebiteurs: string;
        /**
         * Somme des montants des mouvements au MAD.
         */
        montantGlobalMad: number;
        /**
         * Code de la devise du montant des mouvements au MAD.
         * Exemple : 'EUR' - euros
         */
        deviseMontantGlobalMad: string;
        /**
         * Somme des montants des instances.
         */
        montantInstancesInternes: number;
        /**
         * Code de la devise du montant des instances.
         * Exemple : 'EUR' - euros
         */
        deviseMontantInstancesInternes: string;
        soldeDisponibleGlobal: number;
        deviseSoldeDisponibleGlobal: string;
        montantDomiciliationTotal: number;
        deviseMontantDomiciliationTotal: string;
    }
    interface IInfoAdministrativeEntiteTitulaire {
        /**
         * Ligne d'adresse postale correspondant à tout ce qui se situe à l'intérieur d'un bâtiment.
         */
        ligneAdresse2: string;
        /**
         * Ligne d'adresse postale correspondant à tout ce qui se situe à l'extérieur d'un bâtiment.
         */
        ligneAdresse3: string;
        /**
         * Ligne d'adresse postale correspondant à l'identification de la voie de destination.
         */
        ligneAdresse4: string;
        /**
         * Ligne d'adresse postale correspondant à tout complément d'adresse (lieu-dit, non résidence...).
         */
        ligneAdresse5: string;
        /**
         * Ligne d'adresse postale correspondant à l'identification du code postal, localité, code cedex...
         */
        ligneAdresse6: string;
        /**
         * Numéro de téléphone du client, fixe ou mobile.
         */
        numeroTelephoneDomicile: string;
        /**
         * Numéro de téléphone professionnel du client, fixe ou mobile.
         */
        numeroTelephoneTravail: string;
    }
    interface IInfoFinanciereCompteBancaire {
        /**
         * Solde d'un compte bancaire à un instant donné.
         */
        soldeCompteBancaire: number;
        /**
         * Solde moyen d'un compte bancaire lors de l'année civile en y appliquant le principe de la moyenne pondérée fonction du capital et du temps écoulé.
         */
        soldeMoyen: number;
        /**
         * Solde le plus bas d'un compte bancaire atteint lors de l'année civile.
         */
        soldeLePlusBas: number;
        /**
         * Solde le plus haut d'un compte bancaire atteint lors de l'année civile.
         */
        soldeLePlusHaut: number;
        /**
         * Solde disponible d'un compte bancaire au moment d'une opération financière sur celui-ci.
         */
        soldeDisponible: number;
        /**
         * Cumul des soldes des comptes bancaires fusionnant ensemble.
         */
        soldeCompteFusion: number;
        /**
         * Montant du découvert autorisé sur un compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Montant des revenus supérieurs à 2000 euros sur une période d'un mois allant du 15 au 15 du mois suivant.
         */
        montantDomiciliation: number;
        /**
         * Code de la devise d'un compte bancaire.
         * Exemple : 'EUR' - euros
         */
        deviseCompteBancaire: string;
    }
    interface IInfoSepaOperation {
        /**
         * Libellé de pays fourni dans le cadre d'un virement ou d'un rejet SEPA.
         */
        libellePaysDonneurOrdre: string;
        /**
         * Libellé complémentaire d'un mouvement échange dans les virements SEPA.
         */
        libelleComplementMino: string;
        /**
         * Libellé complet de désignation du bénéficiaire d'une opération échangée.
         */
        libelleCompletBeneficiaire: string;
        /**
         * Référence d'identification d'un établissement financier ou assimilé au niveau international.
         */
        codeBicDestinataire: string;
        /**
         * Référence d'identification d'un compte bancaire au niveau international.
         */
        numeroIbanBeneficiaire: string;
    }
    interface IInfoDelegationDecision {
        /**
         * Donnée valant O ou N, et indiquant la présence d'une attente délégation sur un mouvement.
         */
        codeAttenteDelegataire: string;
        /**
         * Détermine le niveau délégataire requis pour la gestion d'un mouvement MAD donné. Spécifique à chaque établissement.
         * Exemple : '000001' - niveau 1
         */
        codeNiveauDelegataireRequis: string;
        /**
         * Libellé de la version de la charte délégataire associé à un agent  / PF.
         */
        libelleVersionCharteDelegataire: string;
        /**
         * Identifiant de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        identifiantEdsPourLeCompteDe: number;
        /**
         * Libellé de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        libelleEdsPourLeCompteDe: string;
    }
    interface IInfoDecideurDecision {
        /**
         * Détermine le type organisationnel de l'EDS ayant pris la décision concernant un mouvement MAD.
         * Exemple : '001' : poste fonctionnel, '002' : service
         */
        codeTypeEdsDecidePar: string;
        /**
         * Identifiant de l'EDS ayant pris la décision concernant un mouvement MAD.
         */
        identifiantEdsDecidePar: number;
        /**
         * Libellé de l'EDS ayant pris la décision concernant un mouvement MAD.
         */
        libelleEDSDecidePar: string;
        /**
         * Identifiant de l'agent sensé prendre la décision concernant un mouvement MAD.
         */
        identifiantAgentDecideur: string;
        /**
         * Nom de l'agent sensé prendre la décision concernant un mouvement MAD.
         */
        nomAgentDecideur: string;
        /**
         * Prénom de l'agent sensé prendre la décision concernant un mouvement MAD.
         */
        prenomAgentDecideur: string;
        /**
         * Détermine la civilité de l'agent sensé prendre la décision concernant un mouvement MAD.
         * '1' : Mme
         * '2' : Mlle
         * '3' : M
         */
        codeCiviliteAgentDecideur: string;
    }
    interface IChoixPossibleDecision {
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "rejet" d'un mouvement.
         */
        topChoixRejet: string;
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "forçage" d'un mouvement.
         */
        topChoixForcage: string;
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "suspens" d'un mouvement.
         */
        topChoixEnSuspens: string;
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "forçage autre RIB" d'un mouvement.
         */
        topChoixForcageRib: string;
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "forçage autre RIB avec correction" d'un mouvement.
         */
        topChoixForcageRibCorrection: string;
        /**
         * Top valant 0 ou 1, permettant d'indiquer à l'IHM l'autorisation d'accès à la décision "transfert au MAD siège" d'un mouvement.
         */
        topChoixTransfertMadSiege: string;
    }
    interface ICourrier {
        /**
         * 'O' : demande de courrier effectuée
         * 'N' : demande de courrier non effectuée
         */
        indicateurDemandeCourrier: Commun.Enum.IndicateurEnum;
        /**
         * Détermine le type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        codeTypeCourrier: string;
        /**
         * Libellé associé au type de courrier dans la gestion du MAD.
         * '001' : proposition de découvert
         * '002' : augmentation de découvert
         * '003' : mise en garde avant rejet
         * '030' : courrier loi Murcef
         */
        libelleTypeCourrier: string;
        /**
         * 'O' : demande de tarification courrier effectuée 'N' : demande de tarification courrier non effectuée
         */
        indicateurFacturationCourrier: Commun.Enum.IndicateurEnum;
        /**
         * Date à laquelle la demande de tarification du courrier a été effectuée.
         * Type date au format yyyy-MM-dd
         */
        dateFacturationCourrier: string;
        /**
         * 'O' : demande automatique du courrier Murcef '030' effectuée
         * 'N' : demande automatique du courrier Murcef '030' non effectuée
         */
        indicateurDemandeAutoMurcef: Commun.Enum.IndicateurEnum;
        /**
         * blanc : par défaut, édition courrier Murcef '030' non effectuée
         * 'O' : édition d'un courrier Murcef '030' effectuée
         */
        indicateurEditionCourrierMurcef: string;
        /**
         * Date à laquelle le courrier Murcef '030' a été édité.
         * Type date au format yyyy-MM-dd
         */
        dateEditionCourrierMurcef: string;
    }
    interface IDecision {
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Date à laquelle a été prise la décision d'imputer ou non (rejet) un mouvement du MAD.
         * Type date au format yyyy-MM-dd
         */
        datePriseDecision: string;
        /**
         * Commentaire ajouté par l'utilisateur pour accompagner sa prise de décision.
         */
        commentairePriseDecision: string;
        /**
         * Détermine le motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01  : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejet: string;
        /**
         * Libellé associé au code motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        motifRejet: string;
        /**
         * Détermine le motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01  : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejetComplementaire: string;
        /**
         * Libellé associé au code motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        motifRejetComplementaire: string;
        /**
         * Identifiant du RIB sur lequel le mouvement du MAD a été forçé.
         */
        ribDestinationForcage: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de facturation a été effectuée pour une prestation donnée.
         */
        indicateurDecisionFacturable: string;
        /**
         * Donnée technique valant O ou N, et permettant d'afficher les motifs de prise de décision sur un mouvement, via les tables délocalisées.
         */
        indicateurTableMotifDecision: string;
        infoDelegation: IInfoDelegationDecision;
        infoDecideur: IInfoDecideurDecision;
        choixPossibleDecision: IChoixPossibleDecision;
    }
    interface IOperation {
        /**
         * identifiant unique interne de l'opéation rejetée à l'imputation et donc entrée au MAD.
         */
        referenceOperation: string;
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Désignation complémentaire de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleComplementaireA: string;
        /**
         * Désignation complémentaire de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleComplementaireB: string;
        /**
         * Date à laquelle l'opération financière a été échangée entre les 2 organismes financiers.
         * Type date au format yyyy-MM-dd
         */
        dateCompensation: string;
        /**
         * Détermine une opération-type traitée en compensation.
         * '20' : virement
         * '33' : notification APL
         * '60' : lettre de change
         * '75' : virement TIP
         * '80' : avis de prélèvement
         * '90' : retrait GAB
         */
        codeOperationInterbancaire: string;
        /**
         * Détermine la famille SIT d'identification d'une opération.
         * '001' : virement
         * '005' : prélèvement
         * '007' : DAB
         * '010' : débit TIP
         * '012' : retrait carte bancaire
         * '018' : LCR
         * 'CHQ' : chèque
         */
        codeTypeOperation: string;
        /**
         * Montant de l'opération entrée au MAD.
         */
        montantOperation: number;
        /**
         * Devise du montant de l'opération entrée au MAD.
         */
        deviseMontantOperation: string;
        /**
         * Numéro d'identification du chèque en lien avec l'opération entrée au MAD.
         */
        numeroCheque: string;
        /**
         * Numéro d'identification de la carte bancaire en lien avec l'opération entrée au MAD.
         */
        identifiantCarte: string;
        /**
         * Solde d'un compte bancaire avent imputation d'une opération financière sur celui-ci.
         */
        soldeCompteAvantOperation: number;
        /**
         * Solde d'un compte bancaire en fin de journée comptable.
         */
        soldeCompteFinJournee: number;
        /**
         * Devise du montant des soldes d'un compte bancaire.
         */
        deviseSoldeCompte: string;
        /**
         * Nom associé à un compte extérieur.
         */
        libelleDomiciliation: string;
        /**
         * Référence d'archivage véhiculée par le SIT pour les opérations cartes.
         */
        referenceArchivage: string;
        /**
         * Référence de l'opération spécifique au présentateur donnée saisie. Concerne notamment les opérations au format réseau
         */
        referencePresentateur: string;
        /**
         * Détermine la provenance technique "échanges", interne Mysys.
         * '001' : C.A.M normal (SIT)
         * '002' : C.A.M exceptionnelle
         * '003' : Débit différé
         * '004' : O.C.R Lille
         * '006' : Chèque réseau
         */
        codeProvenance: string;
        /**
         * Désignation associée à la provenance technique "échanges", interne Mysys.
         * '001' : C.A.M normal (SIT)
         * '002' : C.A.M exceptionnelle
         * '003' : Débit différé
         * '004' : O.C.R Lille
         * '006' : Chèque réseau
         */
        libelleProvenance: string;
        /**
         * Numéro d'identification établi par la BDF pour un organisme autorisé à émettre des prélèvements / créancier.
         */
        numeroNationalEmetteur: string;
        /**
         * Désignation d'un organisme autorisé à émettre des prélèvements / créancier.
         */
        libelleNumeroEmetteur: string;
        /**
         * Code établissement à l'origine d'une l'opération.
         */
        codeEtablissementDonneurOrdre: string;
        /**
         * Code guichet à l'origine d'une l'opération.
         */
        codeGuichetDonneurOrdre: string;
        /**
         * Numéro d'un compte bancaire à l'origine d'une opération.
         */
        numeroCompteDonneurOrdre: string;
        /**
         * Désignation du donneur d'ordre à l'origine d'un opération.
         */
        libelleEmetteurDonneurOrdre: string;
        /**
         * Code établissement destinataire d'une opération.
         */
        codeDestinataireOperation: string;
        /**
         * Donnée valant O ou N, et indiquant l'annulation d'une opération.
         */
        codeAnnulation: string;
        infoSepa: IInfoSepaOperation;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer..
         */
        identifiantMouvement: number;
        /**
         * Date à laquelle une opération, rejetée de l'imputation, est entrée au MAD.
         * Type date au format yyyy-MM-dd
         */
        dateEntreeAuMad: string;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Libellé du motif d'entrée au MAD.
         * 'A' : à vérifier
         * 'C' : compte soldé
         * 'D' : domiciliation erronée
         * 'E' : faux numéro
         * 'F' : sans provision
         */
        motifEntreeAuMad: string;
        /**
         * Détermine le motif d'une opposition sur compte ou personne ou entité titulaire.
         * '0B03' : SERVICE LUTTE ANTI-BLANCHIMENT
         * '0001' : REDRESSEMENT JUDICIAIRE CPTE RJ
         * '0003' : LIQUIDATION JUDICIAIRE
         */
        codeOpposition: string;
        /**
         * Date au delà de laquelle un décision manuelle ne pourra plus être prise pour un mouvement MAD.
         * Type date au format yyyy-MM-dd
         */
        dateLimiteDecision: string;
        /**
         * Montant unitaire de tarification hors taxe.
         */
        montantHTAFacturer: number;
        /**
         * Devise du montant unitaire de tarification hors taxe.
         */
        deviseMontantHTAFacturer: string;
        /**
         * Détermine le type de facturation.
         * Exemple : '1970', '1971'...
         */
        codePrestation: string;
        /**
         * Nombre de recyclage effectué sur un mouvement MAD en cours de recyclage.
         */
        nombreRecyclageMad: number;
        /**
         * Date à laquelle le dernier recyclage d'un mouvement MAD a eu lieu.
         * Type date au format yyyy-MM-dd
         */
        dateDernierRecyclageMad: string;
        /**
         * Détermine l'état d'un mouvement MAD vis à vis du recyclage.
         * Le recyclage consiste à retenter automatiquement l'imputation des mouvements en attente de décision.
         * ' ' : non recyclable
         * 'E' : en cours de recyclage
         * 'R' : recyclé en batch
         * 'T' : recyclé manuellement
         * 'A' : annulation d'un mouvement recyclé
         */
        codeEtatRecyclageMad: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire lors de l'entrée au MAD.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateCalculNoteBale2: string;
        /**
         * Détermine le type organisationnel de l'EDS gérant une entité titulaire lors de l'entrée au MAD d'un mouvement.
         * Exemple : '001' : poste fonctionnel, '002' : service
         */
        codeTypeEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire lors de l'entrée au MAD d'un mouvement.
         */
        identifiantEdsGerePar: number;
        /**
         * Désignation de l'EDS gérant une entité titulaire lors de l'entrée au MAD d'un mouvement.
         */
        libelleEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS devant prendre une décision ors de l'entrée au MAD d'un mouvement.
         */
        identifiantEdsADeciderPar: number;
        operation: IOperation;
        decision: IDecision;
        courrier: ICourrier;
    }
    interface ICompteBancaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Libellé indiquant l'état d'ouverture d'un compte bancaire.
         * Exemple : "Compte ouvert"
         */
        etatOuvertureCompte: string;
        /**
         * Détermine le mode de détention d'un compte.
         * '0' : simple
         * '1' : joint
         * '2' : compte collectif
         */
        codeTypeCompte: string;
        /**
         * Détermine le type du découvert autorisé.
         * 'N' : négocié
         * 'M' : multi-services
         * ' ' : pas de découvert
         */
        codeTypeDecouvertAutorise: string;
        /**
         * Détermine si un compte est fusionné avec un autre.
         * ' ' : compte simple, non fusionné
         * 'F' : fusionnant, ce compte fusionne sur un autre
         * 'G' : support de fusion, au moins un autre compte fusionne sur ce compte
         */
        codeTypeCompteFusion: string;
        /**
         * Date à laquelle le dernier revenu supérieur à 2000 euros a été versé.
         * Type date au format yyyy-MM-dd
         */
        dateDomiciliation: string;
        /**
         * Détermine la date d'exécution de la dernière opération financière constatée sur un compte à la date de situation / arrêté.
         * Type date au format yyyy-MM-dd
         */
        dateDerniereOperation: string;
        infoFinanciere: IInfoFinanciereCompteBancaire;
        listeMouvementMadDuJour: Array<IMouvementMad>;
        listeMouvementMadHistorise: Array<IMouvementMad>;
        listeForcageAutomatique: Array<IForcageAutomatique>;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Désignation d'un client bancaire détenteur de contrats de produit/service.
         */
        designationEntiteTitulaire: string;
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Détermine l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * '0' : actif
         * '1' : clôturé
         */
        codeEtat: string;
        /**
         * Détermine l'usage pour lequel est dédiée l'entité titulaire.
         * '1' : privé
         * '2' : professionnel
         * '3' : professionnel réglementé
         * '4' : succession
         * '5' : versement direct
         * '6' : confidentiel privé
         */
        codeUsage: string;
        /**
         * Détermine la relation des personnes composant une entité titulaire.
         * '1' : simple
         * '2' : joint entre époux
         * '3' : joint entre tiers
         * '4' : indivision
         */
        codeComposition: string;
        infoGenerale: IInfoGeneraleEntiteTitulaire;
        infoStructure: IInfoStructureEntiteTitulaire;
        infoFinanciere: IInfoFinanciereEntiteTitulaire;
        infoAdministrative: IInfoAdministrativeEntiteTitulaire;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IRecherche {
        critereSelection: ICritereSelection;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IForcageAutomatique {
        /**
         * Date d'imputation de l'opération sur un compte bancaire.
         * Type date au format yyyy-MM-dd
         */
        dateImputationOperation: string;
        /**
         * Montant d'une l'opération sur un compte bancaire.
         */
        montantOperation: number;
        /**
         * Code devise du montant de l'opération.
         */
        codeDeviseMontantOperation: string;
        /**
         * Désignation de l'opération.
         */
        libelleOperation: string;
        /**
         * Détermine l'acte de gestion relatif au forçage de l'imputation d'une opération.
         * '0' : pas d'acceptation
         * '2' : opération DAB et CB
         * '3' : pourcentage du découvert
         * '4' : somme des capitaux
         * 'A' : prise de décision agence
         * 'C' : prise de décision automatique CTR
         * '5' : chèques payés en infraction à partir de l'historique
         * '6' : chéques payés en infraction à partir du MAD
         * '7' : découvert technique
         * '8' : provenance prêt
         */
        codeTypeDecision: string;
        /**
         * Libellé associé au code type de décision.
         */
        libelleRegleImputation: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de tarification été effectuée pour une imputation donnée.
         */
        indicateurFacturation: string;
        /**
         * Détermine le type de la facturation d'une opération.
         * ex. : 1970, 1971, 1972, 1973,...
         */
        codeTypeFacturaion: string;
        /**
         * Montant de la facturation lié au forçage de l'imputation d'une opération.
         */
        montantFacturation: number;
        /**
         * Numéro du chèque éventuellement utilisé pour une opération.
         */
        numeroCheque: string;
        /**
         * Numéro d'identification de la carte bancaire en lien avec l'opération entrée au MAD.
         */
        identifiantCarte: string;
        /**
         * Désignation d'un organisme autorisé à émettre des prélèvements / créancier.
         */
        numeroNationalEmetteur: string;
        /**
         * Détermine la provenance technique "échanges", interne Mysys.
         * '001' : C.A.M normal (SIT)
         * '002' : C.A.M exceptionnelle
         * '003' : Débit différé
         * '004' : O.C.R Lille
         * '006' : Chèque réseau
         */
        codeProvenance: string;
        /**
         * Désignation associée à la provenance technique "échanges", interne Mysys.
         */
        libelleProvenance: string;
        /**
         * Détermine la famille SIT d'identification d'une opération.
         * '001' : virement
         * '005' : prélèvement
         * '007' : DAB
         * '010' : débit TIP
         * '012' : retrait carte bancaire
         * '018' : LCR
         * 'CHQ' : chèque
         */
        codeTypeOperation: string;
        /**
         * Détermine l'état d'un mouvement MAD vis à vis du recyclage.
         * Le recyclage consiste à retenter automatiquement l'imputation des mouvements en attente de décision.
         * ' ' : non recyclable
         * 'E' : en cours de recyclage
         * 'R' : recyclé en batch
         * 'T' : recyclé manuellement
         * 'A' : annulation d'un mouvement recyclé
         */
        codeEtatRecyclageMad: string;
        /**
         * Solde du compte bancaire avant imputation d'une opération.
         */
        soldeAvantOperation: number;
        /**
         * Code devise du solde avant opération.
         */
        codeDeviseSoldeAvantOperation: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Synthese {
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        identifiantGerePar: number;
        dateLimiteDecision: string;
        nombreMouvementMad: number;
        montantGlobalMouvementMad: number;
        nombreMouvementEnSuspensDuJour: number;
        codeAttenteDelegation: string;
    }
    interface IElementStructure {
        nombreTotalMouvementMad: number;
        nombreTotalEntiteTitulaire: number;
        libelleEtatPriseDecision: string;
        nombreMouvementEnDateLimite: number;
        codeAttenteDelegation: string;
        identifiantEDS: number;
        designationEDS: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface ISynthese {
        listeMessageAvertissement: Array<string>;
        listeElementStructure: Array<IElementStructure>;
    }
    interface IParametreGet {
        codeEtablissement: string;
        codeAgentConnecte: string;
        codeTypeRecherche: Commun.Enum.CodeTypeRechercheEnum;
        codeTypeSynthese: Commun.Enum.CodeTypeSynthese;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantEds: number;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeProvenanceMouvement: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.VisionFinanciere {
    interface IParametreGet {
        /** Identifiant interne de l'agent connecté */
        codeAgentConnecte: string;
        /** Code établissement du compte bancaire sur lequel on effectue la recherche de mouvements */
        codeEtablissement: string;
        /** Identifiant unique interne d'une entité titulaire sur laquelle on recherche des mouvements MAD */
        identifiantEntiteTitulaire: number;
    }
    interface IInfoFinanciereEntiteTitulaire {
        /**
         * Code de la devise des informations financières de l'entité titulaire. Exemple : 'EUR' - euros
         */
        codeDevise: string;
        /**
         * Somme des montants des capitaux détenus, avoirs épargnes.
         */
        montantCapitauxDetenus: number;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        soldeDisponibleGlobal: number;
        montantDomiciliationTotal: number;
        /**
         * Montant des instances internes total
         */
        montantInstancesInternes: number;
    }
    interface IInfoFinanciereCompteBancaire {
        /**
         * Solde d'un compte bancaire à un instant donné.
         */
        soldeCompteBancaire: number;
        /**
         * Solde moyen d'un compte bancaire lors de l'année civile en y appliquant le principe de la moyenne pondérée fonction du capital et du temps écoulé.
         */
        soldeMoyen: number;
        /**
         * Solde le plus bas d'un compte bancaire atteint lors de l'année civile.
         */
        soldeLePlusBas: number;
        /**
         * Solde le plus haut d'un compte bancaire atteint lors de l'année civile.
         */
        soldeLePlusHaut: number;
        /**
         * Solde disponible d'un compte bancaire au moment d'une opération financière sur celui-ci.
         */
        soldeDisponible: number;
        /**
         * Cumul des soldes des comptes bancaires fusionnant ensemble.
         */
        soldeCompteFusion: number;
        /**
         * Montant du découvert autorisé sur un compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Montant des revenus supérieurs à 2000 euros sur une période d'un mois allant du 15 au 15 du mois suivant.
         */
        montantDomiciliation: number;
        /**
         * Montant des instances internes associées au compte.
         */
        montantInstancesInternes: number;
        /**
         * Détermine la devise d'un compte bancaire.
         * Exemple : 'EUR' - euros
         */
        codeDeviseCompteBancaire: string;
    }
    interface ICompteBancaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Libellé indiquant l'état d'ouverture d'un compte bancaire.
         * Exemple : "Compte ouvert"
         */
        etatOuvertureCompte: string;
        /**
         * Détermine le mode de détention d'un compte.
         * '0' : simple
         * '1' : joint
         * '2' : compte collectif
         */
        codeTypeCompte: "0" | "1" | "2";
        /**
         * Détermine le type du découvert autorisé.
         * 'N' : négocié
         * 'M' : multi-services
         * ' ' : pas de découvert
         */
        codeTypeDecouvertAutorise: " " | "M" | "N";
        /**
         * Détermine si un compte est fusionné avec un autre. ' ' : compte simple, non fusionné 'F' : fusionnant, ce compte fusionne sur un autre 'G' : support de fusion, au moins un autre compte fusionne sur ce compte
         */
        codeTypeCompteFusion: string;
        /**
         * Date à laquelle le dernier revenu supérieur à 2000 euros a été versé.
         * Type date au format yyyy-MM-dd
         */
        dateDomiciliation: string;
        /**
         * Détermine la date d'exécution de la dernière opération financière constatée sur un compte à la date de situation / arrêté.
         * Type date au format yyyy-MM-dd
         */
        dateDerniereOperation: string;
        infoFinanciereCompteBancaire: IInfoFinanciereCompteBancaire;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Date à laquelle le dernier revenu supérieur à 2000 euros a été versé.
         * Type date au format yyyy-MM-dd
         */
        dateDomiciliation: string;
        infoFinanciereEntiteTitulaire: IInfoFinanciereEntiteTitulaire;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IVisionFinanciere {
        /**
         * Message(s) d'anomalie(s), d'erreur ou d'information, restitués par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        entiteTitulaire: IEntiteTitulaire;
    }
}

declare module Mad.Rest.StructureV2.Modele.CaracteristiqueEds {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantInterneEDS: string;
    }
    interface IInfoEDS {
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Ligne 2 adresse de l'élément de structure
         */
        ligne2: string;
        /**
         * Ligne 3 adresse de l'élément de structure
         */
        ligne3: string;
        /**
         * Ligne 4 adresse de l'élément de structure
         */
        ligne4: string;
        /**
         * Ligne 5 adresse de l'élément de structure
         */
        ligne5: string;
        /**
         * Ligne 6 adresse de l'élément de structure
         */
        ligne6: string;
        /**
         * Numéro téléphone de contact de l'élément de structure
         */
        numeroTelephone: string;
        /**
         * Code pays INSEE de l'élément de structure
         */
        codePays: string;
        /**
         * Date de début de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEds: string;
        /**
         * Date de fin de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEds: string;
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Code établissement de l'élément de structure
         */
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code qualité de l'agent affecté au poste fonctionnel
         */
        codeQualiteAgent: string;
        /**
         * Adresse messagerie de l'agent
         */
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        identifiantEDSRattachement: number;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        referenceEDSRattachement: number;
        /**
         * Type de l'EDS de rattachement de l'EDS identifié
         */
        typeEDSRattachement: string;
        /**
         * Libellé de l'EDS de rattachement de l'EDS identifié
         */
        libelleEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement de l'EDS identifié
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDSRattachement: string;
        /**
         * Identifiant du responsable de l'EDS de rattachement de l'EDS identifié
         */
        responsableEDSRattachement: number;
    }
}

declare module Mad.Rest.StructureV2.Modele.PosteFonctionnelAgent {
    interface IParametreGet {
        codeEtablissement: string;
        codeAgent: string;
    }
    interface IRattachementPosteFonctionnel {
        /**
         * Code indiquant si l'EDS de rattachement du poste fonctionnel est le dernier élément de la hiérarchie.
         *
         * Valeurs possibles :
         * '1' - Oui, c'est le dernier
         * '0' - Non
         */
        codeIndicateurFinStructure: string;
        /**
         * Identifiant interne du responsable de l'EDS de rattachement du poste fonctionnel
         */
        identifiantResponsableEDS: number;
        /**
         * Identifiant interne de l'EDS de rattachement du poste fonctionnel
         */
        identifiantEDSRattachement: number;
        /**
         * Libellé de l'EDS de rattachement du poste fonctionnel
         */
        libelleEDSRattachement: string;
        /**
         * Type de l'EDS de rattachement du poste fonctionnel.
         *
         * Valeurs possibles :
         * '001' - Poste fonctionnel
         * '002' - Service
         * '003' - Agence
         * '004' - Unité commerciale
         * '005' - Secteur commercial
         * '006' - Groupe commercial
         * '007' - Direction
         * '008' - Siège
         * '009' - Entité administrative
         * '010' - GAB
         */
        typeEDSRattachement: string;
        /**
         * Libellé du type de l'EDS de rattachement du poste fonctionnel
         */
        libelleTypeEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement du poste fonctionnel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDSRattachement: string;
        /**
         * Référence externe de l'EDS de rattachement du poste fonctionnel
         */
        referenceEDSRattachement: number;
    }
    interface IInformationPosteFonctionnel {
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque établissement.
         *
         * Exemples de valeurs possibles :
         * '072' - CHARGE DE CLIENTELE DE NIVEAU 2
         * '081' - AGENT COMMERCIAL
         * '082' - RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         *
         * Valeurs possibles :
         * 'T' - Titulaire
         * 'R' - Remplaçant
         * 'S' - Suppléant
         * 'A' - Affectation temporaire
         */
        codeQualiteAgent: string;
        /**
         * Identifiant interne du poste fonctionnel
         */
        identifiantPosteFonctionnel: number;
        /**
         * Désignation longue de l'agent
         * Elle est utilisée pour la constitution de la ligne 1
         * de l'adresse.
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;
        /**
         * Référence externe du poste fonctionnel
         */
        referencePosteFonctionnel: number;
        /**
         * Code civilité de l'agent
         *
         * Valeurs possibles :
         * '1' - MME
         * '2' - MLLE
         * '3' - M
         */
        civiliteAgent: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         *    - soit au nom du père
         *    - soit au nom de la mère
         *    - soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent)
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....).
         * Figure sur toute pièce officielle d'identité.
         * Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         *    - soit au nom de famille de l'époux(se) (conjoint)
         *    - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelé auparavant nom marital.
         */
        nomUsageAgent: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;
        /**
         * Date de début de validité du poste fonctionnel
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditePF: string;
        /**
         * Date de fin de validité du poste fonctionnel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditePF: string;
        /**
         * Identifie le site de localisation d'un poste fonctionnel.
         * Numéro chronologique attribué par le système.
         * Référence unique dans MYSYS (identifiant interne).
         */
        identSitePosteFonctionnel: number;
        /**
         * Ligne 2 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne2AdresseSite: string;
        /**
         * Ligne 3 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne3AdresseSite: string;
        /**
         * Ligne 4 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne4AdresseSite: string;
        /**
         * Ligne 5 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne5AdresseSite: string;
        /**
         * Ligne 6 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne6AdresseSite: string;
        /**
         * Numéro de téléphone de l'agent.
         */
        telephonePosteFonctionnel: string;
        /**
         * Adresse E-Mail de l'agent.
         */
        emailPosteFonctionnel: string;
        /**
         * Identifie le pays du site de localisation du poste fonctionnel, selon la norme INSEE.
         *
         * Exemples de valeurs possibles :
         * 99000 - France
         * 99132 - Grande Bretagne
         * 99109 - Allemagne
         * 99134 - Espagne
         * ...
         */
        codePaysSite: string;
        /**
         * Canal d'appartenance du poste fonctionnel connecté.
         *
         * Valeurs possibles :
         * 'X' - Si le groupe de fonction du poste fonctionnel connecté est "telemarketing" ou "CRC"
         * 'A' - Si le groupe de fonction du poste fonctionnel connecté n'est pas "telemarketing" et "CRC"
         */
        codeCanalAppartenance: string;
        informationRattachement: IRattachementPosteFonctionnel;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un agent au sein d'un établissement bancaires ou financiers de la plateforme MYSYS.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système.
         * Référence unique dans MYSYS.
         */
        codeAgent: number;
    }
    interface IPosteFonctionnelAgent {
        listePosteFonctionnel: Array<IInformationPosteFonctionnel>;
    }
}

declare module Mad.Rest.StructureV2.Modele.RechercheEdsRegroupementMad {
    interface IParametreGet {
        codeEtablissement: string;
        codeAgentConnecte: string;
    }
    interface IRechercheEdsRegrpMad {
        /**
         * Message(s) d'anomalie(s), d'erreur ou d'information, restitués par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        listeMessageAvertissement: Array<string>;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un type :
         * - siège
         * - agence
         * - service
         * - poste fonctionnel
         * - ...
         *
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        listeEdsRegrpMad: Array<IEdsRegrpMad>;
    }
    interface IEdsRegrpMad {
        /**
         * Identifiant unique interne de l'EDS de regroupement du MAD.
         */
        identifiantInterneEdsRegrpMad: number;
        /**
         * Identifiant unique externe de l'EDS de regroupement du MAD.
         */
        identifiantExterneEdsRegrpMad: number;
        /**
         * Désignation de l'EDS de regroupement du MAD.
         */
        libelleEdsRegrpMad: string;
    }
}

declare module Mad.Rest.AgentV2 {
    interface IRechercheRestService {
        getRecherche(criteres: Modele.Recherche.IParametreRecherche): ng.IPromise<Modele.Recherche.IRechercheAgent>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IAnnulationDecisionRestService {
        annulerDecision(criteres: Modele.AnnulationDecision.IAnnulationDecision): ng.IPromise<Modele.AnnulationDecision.IAnnulationDecision>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IAuditTarificationRestService {
        getAuditTarification(criteres: Modele.AuditTarification.IParametreGet): ng.IPromise<Modele.AuditTarification.IAuditTarification>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICaracteristiqueRestService {
        getCaracteristique(criteres: Modele.Caracteristique.IParametreGet): ng.IPromise<Modele.Caracteristique.ICaracteristique>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICommentaireRestService {
        getCommentaire(criteres: Modele.Commentaire.IParametreGet): ng.IPromise<Modele.Commentaire.ICommentaire>;
        postCommentaire(commentaire: Modele.Commentaire.ICommentaire): ng.IPromise<Modele.Commentaire.ICommentaire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICompteForcageRestService {
        getCompteForcage(criteres: Modele.CompteForcage.IParametreGet): ng.IPromise<Modele.CompteForcage.ICompteForcage>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IControleDelegataireRestService {
        putControleDelegataire(criteres: Modele.ControleDelegataire.IPutParametre): ng.IPromise<Modele.ControleDelegataire.IControleDelegataire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IControleDelegationRestService {
        getControleDelegation(criteres: Modele.ControleDelegation.IParametreGet): ng.IPromise<Modele.ControleDelegation.IControleDelegation>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICourrierRestService {
        getCourrier(params: Modele.Courrier.IParametreGet): ng.IPromise<Modele.Courrier.ICourrier>;
        postCourrier(criteres: Modele.Courrier.ICourrier): ng.IPromise<Modele.Courrier.ICourrier>;
        putCourrier(criteres: Modele.Courrier.ICourrier): ng.IPromise<Modele.Courrier.ICourrier>;
        deleteCourrier(criteres: Modele.Courrier.ICourrier): ng.IPromise<Modele.Courrier.ICourrier>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IDelegataireRestService {
        getDelegataires(criteres: Modele.Delegataire.IParametreGet): ng.IPromise<Modele.Delegataire.IDelegataire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IDeploiementMyMadRestService {
        getDeploiement(criteres: Modele.DeploiementMyMad.IParametreGet): ng.IPromise<Modele.DeploiementMyMad.IDeploiementMyMad>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IInfoSpecifiqueETMadRestService {
        getInfoEntite(params: Modele.InfoSpecifiqueETMad.IParametreGet): ng.IPromise<Modele.InfoSpecifiqueETMad.IInfoSpecifiqueETMad>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IJournalRestService {
        getJournal(criteres: Modele.Journal.IParametreGet): ng.IPromise<Modele.Journal.IJournal>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IPriseDecisionRestService {
        putPriseDecision(criteres: Modele.PriseDecision.IPriseDecision): ng.IPromise<Modele.PriseDecision.IPriseDecision>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheMadJourRestService {
        getRechercheMadJour(criteres: Modele.RechercheMadDuJour.IParametreGet): ng.IPromise<Modele.RechercheMadDuJour.IRechercheMadDuJour>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheRestService {
        getRecherche(criteres: Modele.Recherche.ICritereSelection): ng.IPromise<Modele.Recherche.IRecherche>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISyntheseRestService {
        getSynthese(criteres: Modele.Synthese.IParametreGet): ng.IPromise<Modele.Synthese.ISynthese>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IVisionFinanciereRestService {
        getVisionFinanciere(criteres: Modele.VisionFinanciere.IParametreGet): ng.IPromise<Modele.VisionFinanciere.IVisionFinanciere>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface ICaracteristiqueEdsRestService {
        getCaracteristiqueEds(criteres: Modele.CaracteristiqueEds.IParametreGet): ng.IPromise<Modele.CaracteristiqueEds.ICaracteristiqueEDS>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface IPosteFonctionnelAgentRestService {
        getPostesFonctionnelsAgent(criteres: Modele.PosteFonctionnelAgent.IParametreGet): ng.IPromise<Modele.PosteFonctionnelAgent.IPosteFonctionnelAgent>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface IRechercheEdsRegroupementMadRestService {
        getEdsRegroupement(criteres: Modele.RechercheEdsRegroupementMad.IParametreGet): ng.IPromise<Modele.RechercheEdsRegroupementMad.IRechercheEdsRegrpMad>;
    }
}
