
declare module GestionCreditApi {
    var app: any;
}

declare module GestionCreditApi.Constantes {
    module Habilitations {
        const TRAITEMENT: string;
    }
}

declare module GestionCreditApi.Constantes {
    module Inject {
        const JUSTIFICATIFS_SERVICES: string;
        const REST_SERVICES: string;
        const SERVICES_AGENT_EXTENDED: string;
        const AUTHENTIFICATION_SERVICES: string;
        const $SCOPE: string;
        const $Q_SERVICES: string;
        const $MODAL_INSTANCE: string;
        const $LOCATION: string;
        const $ROOT_SCOPE: string;
        const MWEVENT: string;
        const $WINDOW: string;
    }
}

declare module GestionCreditApi.Constantes {
    module Rest {
        const token: string;
        const REST_DOSSIER_CREDIT_GESTION_V2: string;
        const LOCALHOST: string;
        const JUSTIF_VERSEMENT_DOSSIER: string;
    }
}

declare module GestionCreditApi.Constantes {
    module Signaux {
        const CHANGEMENT_VALEUR_DETAIL_JUSTIFICATIF: string;
    }
}

declare module GestionCreditApi.Enums.CodeAction {
    enum JustificatifVersementDossier {
        Creation,
        Modification,
        Suppression,
    }
}

declare module GestionCreditApi.Enums {
    enum TypeDetailJustificatif {
        Classique,
        Complement,
        Annule,
        ClassiqueNonTraite,
        ComplementNonTraite,
    }
}

declare module GestionCreditApi.Services {
    class AuthentificationServices {
        private serviceAgentExtended;
        static $inject: string[];
        private authentificationInfo;
        private habilitationTraitementDeblocage;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *  Permet de récupérer le code établissement de l'agent
         */
        getCodeEtablissement: string;
        getHabilitationTraitement: boolean;
        /**
         * Retourne la référence externe de l'agent en connecté
         */
        getReferenceExterneAgent: string;
    }
}

declare module GestionCreditApi.Services {
    class JustificatifServices {
        private restServices;
        static $inject: string[];
        constructor(restServices: Services.RestServices);
        /**
         * Permet d'appeler le service rest de justificatifVersementDossier en GET
         * @param codeAction
         * @param justificatifs
         */
        getJustificatifVersementDossier(identifiantDossierGestion: string): ng.IPromise<Modeles.Justificatifs.IVersementDossierGlobal>;
        /**
         * Permet d'appeler le service rest de justificatifVersementDossier en POST
         * @param codeAction
         * @param justificatifs
         */
        postJustificatifVersementDossier(codeAction: Enums.CodeAction.JustificatifVersementDossier, justificatifs: Modeles.Justificatifs.IDonneeVersementDossier, codeEtablissement: string): ng.IPromise<Modeles.Justificatifs.IDonneeVersementDossier>;
    }
}

declare module GestionCreditApi.Services {
    class RestServices {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer la liste des justificatifs de versement sur le dossier
         * @param codeEtablissement
         * @param identifiantDossierGestion
         * @param identifiantCredit
         * @param dateTraitement
         */
        getJustificatifDossier(identifiantDossierGestion: string): ng.IPromise<Modeles.Justificatifs.IVersementDossierGlobal>;
        /**
         * Permet d'enregistrer les justificatifs de deblocage de fonds
         * @param codeEtablissement
         * @param identifiantCredit
         * @param codeAction
         * @param justificatifs
         */
        postJustificatifVersementDossier(param: Modeles.Justificatifs.IParametrePostJustificatifVersementDossier, justificatifs: Modeles.Justificatifs.IDonneeVersementDossier): ng.IPromise<Modeles.Justificatifs.IDonneeVersementDossier>;
    }
}

declare module GestionCreditApi.Modeles.Justificatifs {
    interface IParametreGetJustificatifVersementDossier {
        numeroDossier: string;
    }
    interface IParametrePostJustificatifVersementDossier {
        codeAction: Enums.CodeAction.JustificatifVersementDossier;
        estMiseAJour: boolean;
        dateTraitement: string;
    }
}

declare module GestionCreditApi.Modeles.Justificatifs {
    interface IAffectationJustificatif {
        /**
         * Identifiant du justificatif auquel est liée l'affectation
         */
        identifiantJustificatif: string;
        /**
         * Code de la classe du justificatif.
         * Permet de regrouper les pièces justificatives en fonction de l'objet sur lequel elles portent :
         * - 'C' : Convention d'assurance
         * - 'G' : Garantie
         * - 'P' : Spécifique produit
         * - 'V' : Versement
         * - 'D' : Divers
         */
        codeClasseJustificatif: string;
        /**
         * Code de la sous-classe du justificatif permettant d'affiner la notion de classe ci-dessus.
         * Il est nécessaire de consulter la rubrique pacbase pour avoir la liste exhaustive des valeurs possibles (rubrique CTFAJS dans la base PROS).
         */
        codeSsClassePieceJustificative: string;
        /**
         * Code de la nature du justificatif relatif soit à un financement, soit à un événement opérationnel ou soit aux garanties
         */
        codeNatureJustificatif: string;
        /**
         * Montant de l'affectation du justificatif
         */
        montantAffectationJustificatif: number;
        /**
         * Code de l'établissement
         */
        codeEtablissement: number;
        /**
         * Code de l'entité SEGMENT codifié sous PACBASE
         */
        codeEntite: string;
        /**
         * Identifiant générique global
         */
        identifiantGeneriqueGlobal: string;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
    }
    interface IElementJustificatif {
        /**
         * Identifiant du justificatif auquel est lié l'élément
         */
        identifiantJustificatif: string;
        /**
         * Numéro séquentiel de l'élément justificatif.
         * Un justificatif peut être constitué de plusieurs éléments. Ce numéro permet de les différencier.
         */
        numeroSeqElementJustificatif: number;
        /**
         * Numéro initial d'un élément d'un justificatif, avant modification ou annulation
         */
        numeroSeqInitialElementJustif: number;
        /**
         * Code de la classe du justificatif.
         * Permet de regrouper les pièces justificatives en fonction de l'objet sur lequel elles portent :
         * - 'C' : Convention d'assurance
         * - 'G' : Garantie
         * - 'P' : Spécifique produit
         * - 'V' : Versement
         * - 'D' : Divers
         */
        codeClasseJustificatif: string;
        /**
         * Code de la sous-classe du justificatif permettant d'affiner la notion de classe ci-dessus.
         * Il est nécessaire de consulter la rubrique pacbase pour avoir la liste exhaustive des valeurs possibles (rubrique CTFAJS dans la base PROS).
         */
        codeSsClassePieceJustificative: string;
        /**
         * Code de la nature du justificatif relatif soit à un financement, soit à un événement opérationnel ou soit aux garanties
         */
        codeNatureJustificatif: string;
        /**
         * Code du statut d'un élément constituant une pièce justificative.
         * Valeurs possibles :
         * - 'I' : Initial
         * - 'C' : Complémentaire
         * - 'A' : Annulé
         */
        codeStatutElementJustificatif: string;
        /**
         * Date d'émission d'une facture, servant de justificatif à une demande de déblocage de fonds
         * Type date au format yyyy-MM-dd
         */
        dateFactureJustificatif: string;
        /**
         * Montant du justificatif fourni par le client.
         * Par exemple, lors d'une demande de déblocage de fonds, le client doit fournir certains justificatifs (par exemple une facture). Ce montant représentera alors le montant de la facture.
         */
        montantJustificatif: number;
        /**
         * Montant justifié globalement par le document
         */
        montantJustifie: number;
        /**
         * Montant justifié correspondant à un PTZ/éco-PTZ
         */
        montantJustifiePtz: number;
        /**
         * Montant justifié pour un PTZ Travaux
         */
        montantJustifiePtzTravaux: number;
        /**
         * Montant à verser
         */
        montantAVerser: number;
        /**
         * Nom pour une personne physique
         * Raison sociale pour une personne morale
         */
        nomRaisonSociale: string;
        /**
         * Commentaire libre sur la pièce justificatif saisi par l'utilisateur
         */
        commentaireLibreJustificatif: string;
        /**
         * Code de l'établissement
         */
        codeEtablissement: number;
        /**
         * Référence externe de la pièce justificative si elle est issue d'un organisme externe
         */
        referenceExterneJustificatif: string;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
        /**
         * Date à laquelle la dernière mise à jour a été faite sur le justificatif
         * Type date au format yyyy-MM-dd
         */
        dateMajJustificatif: string;
        /**
         * Identifiant de l'utilisateur ayant effectué la dernière mise à jour sur le justificatif
         */
        idUtilisateurMajJustificatif: string;
    }
    interface IJustificatifVersementDossier {
        /**
         * Identifiant du justificatif
         */
        identifiantJustificatif: string;
        /**
         * Code de la classe du justificatif.
         * Permet de regrouper les pièces justificatives en fonction de l'objet sur lequel elles portent :
         * - 'C' : Convention d'assurance
         * - 'G' : Garantie
         * - 'P' : Spécifique produit
         * - 'V' : Versement
         * - 'D' : Divers
         */
        codeClasseJustificatif: string;
        /**
         * Libellé de la classe du justificatif
         */
        libelleClasseJustificatif: string;
        /**
         * Code de la sous-classe du justificatif permettant d'affiner la notion de classe ci-dessus.
         * Il est nécessaire de consulter la rubrique pacbase pour avoir la liste exhaustive des valeurs possibles (rubrique CDSCPJ dans la base PROS).
         */
        codeSsClassePieceJustificative: string;
        /**
         * Libellé de la sous-classe du justificatif
         */
        libelleSsClassePieceJustif: string;
        /**
         * Code de la nature du justificatif, c'est-à-dire le type de pièce proprement dit.
         * C'est le type de document.
         */
        codeNatureJustificatif: string;
        /**
         * Libellé descriptif de la nature du justificatif
         */
        libelleNatureJustificatif: string;
        /**
         * Code de la catégorie du justificatif.
         * Valeurs possibles :
         * - 'P' : Justificatif de présence
         * - 'M' : Pièce justifiant un montant
         * - 'A' : Autres
         */
        codeCategorieJustificatif: string;
        /**
         * Libellé de la catégorie du justificatif
         */
        libelleCategorieJustificatif: string;
        /**
         * Code du statut du justificatif.
         * Valeurs possibles :
         * - 'A' : Attendu - A joindre - KO
         * - 'R' : Reçu - OK
         * - 'C' : Clos
         * - [Vide] : Non demandé
         * - 'N' : Non concerné
         */
        codeStatutJustificatif: string;
        /**
         * Libellé du statut du justificatif
         */
        libelleStatutJustificatif: string;
        /**
         * Date de la dernière mise à jour du statut du justificatif
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMajStatutJustif: string;
        /**
         * Code du niveau du justification, c'est-à-dire sur l'objet justifié en cas de non réception de la pièce justificative et le moment où il doit intervenir.
         * Valeurs possibles :
         * - '1' : Préliminaire (gérée que par Instruction)
         * - '2' : Préalable (avant offre)
         * - '3' : Suspensif (conditionne la date d'effet du contrat)
         * - '4' : Résolutoire (annulation du contrat en cas d'absence après un certain délai après la signature du contrat)
         */
        codeNiveauJustification: string;
        /**
         * Libellé du stade d'avancement.
         * Pour un justificatif de versement (échelle), il peut être différent de celui du justificatif
         */
        libelleStadeAvancement: string;
        /**
         * Date de début de validité
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * Montant du justificatif fourni par le client.
         * Par exemple, lors d'une demande de déblocage de fonds, le client doit fournir certains justificatifs (par exemple une facture). Ce montant représentera alors le montant de la facture.
         */
        montantJustificatif: number;
        /**
         * Pourcentage de versement que ce justificatif autorise (s'il s'agit d'une pièce de classe 'V' et de sous-classe 'A')
         */
        pourcentAutoriseVersementJustif: number;
        /**
         * Montant de l'affectation justificatif
         */
        montantAffectationJustificatif: number;
        /**
         * Montant justifié globalement par le document
         */
        montantJustifie: number;
        /**
         * Montant justifié d'un PTZ / éco-PTZ
         */
        montantJustifiePtz: number;
        /**
         * Montant justifié pour un PTZ Travaux
         */
        montantJustifiePtzTravaux: number;
        /**
         * Montant à verser
         */
        montantAVerser: number;
        /**
         * Identifiant de l'architecte saisi pour l'expertise
         */
        identifiantArchitecte: string;
        /**
         * Nom de l'architecte saisi pour l'expertise
         */
        nomArchitecte: string;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
        /**
         * Zone banalisée alphanumérique (longueur 2)
         */
        zoneBanaliseeAlphanumLongueur2: string;
        /**
         * Commentaire saisi par le gestionnaire suite à la fourniture de la pièce justificative
         */
        commentairePieceJustificative: string;
        /**
         * Référence de cette pièce justificative dans l'espace de stockage DNC (Dossier Numérique Client) si celle-ci est associée à une demande de déblocage de fonds.
         * Ce champ est limité à 50 caractères
         */
        idReferenceJustificatifNumerise: string;
        /**
         * Date de réception du justificatif dans le DNC (Dossier Numérique Client)
         * Type date au format yyyy-MM-dd
         */
        dateReceptionJustificatifDnc: string;
        /**
         * Référence externe de la pièce justificative si elle est issue d'un organisme externe
         */
        referenceExterneJustificatif: string;
        /**
         * Indique l'ordre dans lequel doit se faire la réception des pièces justificatives dans le cas où il peut y en avoir plusieurs et dans un ordre bien précis.
         * Si sa valeur est égale à zéro, il n'y a pas de contrainte.
         * Ce numéro n'est utilisé que pour les justificatifs de type autorisation de versement (V, A).
         */
        numeroOrdreClassement: number;
        /**
         * Date de création ou d'enregistrement du justificatif.
         * Lors du passage par l'interface pour les crédits en provenance de l'instruction, la date qui figure sur le crédit est initialisée à partir de la date de création (DTFCCR) en instruction.
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Date à laquelle la dernière mise à jour a été faite sur le justificatif
         * Type date au format yyyy-MM-dd
         */
        dateMajJustificatif: string;
        /**
         * Identifiant de l'utilisateur ayant effectué la dernière mise à jour sur le justificatif
         */
        idUtilisateurMajJustificatif: string;
        listeAffectations: Array<IAffectationJustificatif>;
        listeElements: Array<IElementJustificatif>;
    }
    interface IDonneeVersementDossier {
        /**
         * Identifiant du dossier
         */
        identifiantDossier: string;
        /**
         * Identifiant du dossier, propre à l'instruction
         */
        identifiantDossierInstruction: string;
        /**
         * Identifiant du crédit
         */
        identifiantCredit: string;
        /**
         * Identifiant de l'emprunteur (= entité titulaire = client bancaire)
         */
        identifiantEmprunteur: string;
        /**
         * Code catégorie de l'emprunteur
         */
        codeCategorieEmprunteur: string;
        /**
         * Libellé (= dénomination) d'un tiers
         */
        libelleTiers: string;
        /**
         * Identifiant de l'objet du déblocage de fonds
         */
        identifiantObjet: string;
        /**
         * Type d'objet réglementé (TOR).
         * C'est le niveau le plus fin du type d'objet, au sens du contrôle réglementaire
         */
        typeObjetReglemente: string;
        /**
         * Type d'objet commercialisé (TOC)
         * Les types d'objets commercialisés (TOC) sont regroupés en catégories réglementaires d'attribution (CRA).
         */
        typeObjetCommercialise: string;
        /**
         * Date à laquelle les termes contractuels prennent effet
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Date de décision (= émission)
         * Type date au format yyyy-MM-dd
         */
        dateDecisionOffre: string;
        /**
         * Date de cloture du dossier commercial de l'emprunteur
         * Type date au format yyyy-MM-dd
         */
        dateClotureDossier: string;
        /**
         * Date d'annulation ou de modification
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * Code du département français (métropolitains et DOM-TOM)
         */
        codeDepartement: string;
        /**
         * Numéro de l'echelle utilisée pour les justificatifs de versements.
         * Les échelles, réglementaires ou commerciales, correspondent à un échelonnement du versement de fond mis à disposition par le crédit.
         * Elles sont mises en place en général lors de l'achat d'un bien immobilier en construction.
         * Ne peut être à 0 si les justificatifs sont liés à une échelle
         */
        numeroEchelle: number;
        /**
         * Libellé de l'échelle
         */
        libelleEchelle: string;
        /**
         * Libellé du type d'échelle
         */
        libelleTypeEchelle: string;
        /**
         * Code type d'assiette pour l'echelle.
         * Valeurs possibles :
         * - 'C' : Prix convenu
         * - 'E' : Montant emprunté
         */
        codeTypeAssiette: string;
        /**
         * Libellé du type d'assiette
         */
        libelleTypeAssiette: string;
        /**
         * Ce code permet d'envoyer au local le mode d'accés à la fenêtre.
         * Valeurs possibles :
         * - 'M' : Accès en création/modification
         * - 'C' : Accès en consultation seulement
         */
        codeModificationAutorisee: string;
        /**
         * Prix convenu sur une échelle de versemnts prix que paie le client au constructeur (base de garantie de livraison).
         * Il n'y a qu'un seul prix convenu dans l'opération.
         */
        prixConvenu: number;
        /**
         * Montant emprunté total du plan.
         * Il est égal au coût total de l'opération diminué de l'apport personnel, des subventions, et des concours extérieurs.
         * Remarque : Si le contrat est conclu, le montant du plan retenu deviendra le montant figurant sur le dossier dans la phase Gestion.
         */
        montantEmpruntTotalPlan: number;
        /**
         * Montant restant à justifier globalement sur le dossier
         */
        mtRestantAJustif: number;
        /**
         * Montant restant à justifier sur un dossier crédit et correspondant aux crédits PTZ/éco-PTZ
         */
        mtRestantAJustifPtz: number;
        /**
         * Montant restant à justifier sur un dossier crédit, après la prise en compte d'un nouveau justificatif, pour un PTZ Travaux
         */
        mtRestantAJustifierPtzTravaux: number;
        /**
         * Montant restant à verser sur un dossier crédit, après la prise en compte d'un nouveau justificatif
         */
        mtRestantAVerserApresJustif: number;
        /**
         * Taux à appliquer au montant convenu pour calculer le montant des versements quand le justificatif est produit (justificatif de type échelle)
         */
        pourcFinanceSurMontantConvenu: number;
        /**
         * Code déterminant une devise selon la norme ISO
         */
        codeDevise: string;
        /**
         * Numéro relatif
         */
        numeroRelatif: number;
        /**
         * Compteur de mise à jour
         */
        compteurMiseAJour: number;
        /**
         * Indicateur banalisé
         */
        indicateurBanalise: string;
        /**
         * code indiquant si les montants restants à justifier doivent être mis à jour au niveau du dossier (BA01). 'M' : mise à jour, ' ' : pas de mise à jour
         */
        codeMajMontantsDossier: string;
        listeJustificatifs: Array<IJustificatifVersementDossier>;
    }
    interface IRetourQR {
        /**
         * Code retour de la QR
         */
        codeRetour: number;
        /**
         * Message retour de la QR
         */
        messageRetour: Array<string>;
        /**
         * Booléen qui indique, en cas d'erreur, si celle-ci est bloquante
         */
        isErreurBloquante: boolean;
    }
    interface IVersementDossierGlobal {
        donneeVersementDossier: IDonneeVersementDossier;
        retourQR: Array<IRetourQR>;
    }
}

declare module GestionCreditApi.Modeles.Justificatifs {
    interface INatureJustif {
        codeClasseJustificatif?: string;
        libelleCodeClasse?: string;
        sousClasseJustificatif?: string;
        libelleSousClasse?: string;
        codeNatureJustificatif?: string;
        libelleNatureJustificatif?: string;
        codeCategorieJustificatif?: string;
        libelleCategorieJustificatif?: string;
        codeJustificatifPeriodique?: string;
        codeNiveauJustificatif?: string;
    }
    class NatureJustif implements INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        constructor(sousClasseJustificatif: string, codeNatureJustificatif: string, libelleNatureJustificatif: string);
        equals(objetAComparer: NatureJustif): boolean;
        static recupererListeNatureJustificatifInitialise(): Array<Modeles.Justificatifs.NatureJustif>;
    }
}
