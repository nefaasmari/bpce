declare module Myway.Ressource.ContractualisationParametre {

    export interface IContractualisationParametreInput {
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: string;

        /**
         * Numéro  personne
         */
        numeroPersonne: string;

        /**
         * Indicateur présence tablette
         */
        indicateurPresenceTablette: boolean;

        /**
         * Indicateur présence lecteur carte
         */
        indicateurPresenceLecteurCarte: boolean;

        /**
         * Code canal dossier vente
         */
        codeCanal: string;

        /**
         * Code nature appel QR
         */
        codeNatureAppelQr: string;

        /**
         * Indicateur traitement impression
         */
        indicateurTraitementImpression: boolean;

        /**
         * Code matériel compatible
         */
        codeMaterielCompatible: string[];

        /**
         * code de l'acte de gestion principal
         */
        codeActeGestionPrincipal: string;

        /**
         * Liste des codes acte de gestion secondaires
         */
        listeActeGestionSecondaire: string[];

        /**
         * Liste des signataires
         */
        listeSignataires: ISignataire[];

        /**
         * Liste des montants des opérations (SAG-OPC)
         */
        listeMontantOperation?: IMontantOperation[];
    }

    export interface IPersonne {
        /**
         * Identifiant personne
         */
        numeroPersonne: string;

        /**
         * typologie des moyens de restitution dont dispose le client à des fins de restitution des documents signés
         */
        typeMoyenRestitution: string;

        /**
         * Identifiant coffre-fort numérique détenu par le client
         */
        identifiantCoffreFortNumerique: string;

        /**
         * Adresse E-MAIL personnelle du client
         */
        adresseEMail: string;

        /**
         * Indicateur authentification SOL-SMS possible ((Sécurisation des Opération en Ligne par SMS)
         */
        indicateurAuthentificationSolSms: boolean;

        /**
         * Indicateur authentification SOL-CAP possible (Sécurisation des Opération en Ligne par lecteur Carte A Puce)
         */
        indicateurAuthentificationSolCap: boolean;

        /**
         * Indicateur authentification Identité possible
         */
        indicateurAuthentificationIdentite: boolean;

        /**
         * numéro de téléphone mobile du client permettant l'authentification forte par OTP/SMS
         */
        numeroTelephoneClient: string;
    }

    export interface IDocument {
        /**
         * Code technique impression
         */
        codeTechniqueImpression: string;

        /**
         * Code nature pièce justificative
         */
        codeNaturePieceJustificative: string;

        /**
         * Code type justificatif
         */
        codeTypeJustificatif: string;

        /**
         * Code Nature GED
         */
        codeNatureGed: string;

        /**
         * Code type ICG (Infrastructure de Confiance Groupe)
         */
        codeTypeIcg: string;

        /**
         * Indicateur Document obligatoire
         */
        indicateurDocumentObligatoire: boolean;

        /**
         * Indicateur document visualisable
         */
        indicateurDocumentVisualisable: boolean;

        /**
         * Indicateur document supprimable
         */
        indicateurDocumentSupprimable: boolean;

        /**
         * Code action document
         */
        codeActionDocument: string;

        /**
         * Indicateur document eligible ICG (Infrastructure de Confiance Groupe)
         */
        indicateurDocumentEligibleIcg: boolean;

        /**
         * Indicateur document sceller ICG (Infrastructure de Confiance Groupe)
         */
        indicateurDocumentScellerIcg: boolean;

        /**
         * Indicateur document archiver ICG (Infrastructure de Confiance Groupe)
         */
        indicateurDocumentArchiverIcg: boolean;

        /**
         * Indicateur document à injecter GED
         */
        indicateurDocumentAInjecterGed: boolean;

        /**
         * Indicateur document restituable
         */
        indicateurDocumentRestituable: boolean;

        /**
         * Ordre priorité utilisation
         */
        ordrePrioriteUtilisation: string;

        /**
         * Type document contractualisation
         */
        typeDocumentContractualisation: string;

        /**
         * Type attributaire classeur client
         */
        typeAttributaireClasseurClient: string;

        /**
         * Indicateur signature banque
         */
        indicateurSignatureBanque: boolean;

        /**
         * Liste des zones de signature
         */
        listeZoneSignature: IZoneSignature[];

        /**
         * code de la famille de l'acte de gestion
         */
        codeFamilleActe: string;

        /**
         * code objet de l'acte de gestion (P/S ou objet métier)
         */
        codeObjetActe: string;

        /**
         * Détermine le type de section de regroupement de documents de même nature  
         * Permet l'affichage des documents dans ICG (Infrastructure de Confiance Groupe)
         * Correspond à un onglet du dossier
         */
        codeTypeSectionRegroupement: string;

        /**
         * libellé de description de regroupement des documents lors de l'affichage dans ICG (Infrastructure de Confiance Groupe)
         */
        libelleSectionRegroupement: string;

        /**
         * indique si le document fait partie du référentiel des documents d'entreprise
         */
        indicateurDocumentEntreprise: boolean;

        /**
         * intitulé du fichier du document d'entreprise. sert de référence dans l'ICG (Infrastructure de Confiance Groupe)
         */
        libelleFichierDocumentEntreprise: string;

        /**
         * libellé de description du document entreprise. Il sert à l'affichage lors de la contractualisation
         */
        libelleExterneDocumentEntreprise: string;

        /**
         * identifiant du document d'entreprise dans la GED Mysys
         */
        identifiantGEDDocumentEntreprise: string;

        /**
         * Nb maxi exemplaires doc / édition
         */
        nbMaxiExemplairesDocEdition: number;

        /**
         * Nb mini exemplaires doc / édition
         */
        nbMiniExemplairesDocEdition: number;

        /**
         * Nb exemplaires par défaut / édition
         */
        nbExemplairesParDefautEdition: number;

        /**
         * Libellé document contractualisation
         */
        libelleDocContractualisation: string;

        /**
         * indique si  la modification du nombre d'exemplaires des documents (Nb mini, Nb maxi et Nb par défaut) par l'utilisateur est possible.
         * Pour la signature électronique en agence
         */
        indicateurMAJNbExemplaires: boolean;

        /**
         * Code de l'acte de gestion
         */
        codeActeGestion: string;
    }

    export interface IZoneSignature {
        /**
         * Numéro bloc signature du document. Un document peut contenir plusieurs blocs
         */
        numeroBlocSignatureDocument: number;

        /**
         * Code type signataire. Typologie générique permettant d'associer une personne ou entité à un signataire
         */
        codeTypeSignataire: string;

        /**
         * Identifiant label signature. donnée permettant de reconnaitre la zone de signature dans un document
         */
        identifiantLabelSignature: string;

        /**
         * Numéro page document où se trouve la zone de signature
         */
        numeroPageDocument: number;

        /**
         * abscisse position de la zone de signature
         */
        abscissePositionSignature: number;

        /**
         * ordonnée position de la zone de signature
         */
        ordonneePositionSignature: number;

        /**
         * hauteur de la zone de signature
         */
        hauteurSignature: number;

        /**
         * largeur de la zone de signature
         */
        largeurSignature: number;

        /**
         * Libellé associé à la zone de signature
         */
        libelleTexteZoneSignature: string;

        /**
         * indique le sens de la hauteur (incrément ou décrément)
         */
        codeSensAbcisse: string;

        /**
         * indique le sens de l'ordonnée (incrément ou décrément)
         */
        codeSensOrdonnee: string;
    }

    export interface IContractualisationParametre {
        /**
         * code acte de gestion
         */
        codeActeGestion: string;

        /**
         * Liste des modes de contractualisation
         */
        listeModeContractualisation: IModeContractualisationActe[];
    }

    export interface IModeContractualisationActe {
        /**
         * Code mode contractualisation décrit par le canal et la manière de contractualiser un acte de gestion
         * exemple : FAFE - Face A Face Electronique => acte réalisé en agence et signé électroniquement
         */
        codeModeContractualisation: string;

        /**
         * Libellé mode contractualisation
         */
        libelleModeContractualisation: string;

        /**
         * Code statut contractualisation
         */
        codeStatutContractualisation: string;

        /**
         * Code type signature. Décrit la façon dont la signature est faite (scripturale, double clic, ...)
         */
        codeTypeSignature: string;

        /**
         * niveau authentification requis:
         * 0 - faible
         * 1 - fort
         */
        codeNiveauAuthentification: string;

        /**
         * Code du  matériel compatible avec le mode de contractualisation
         */
        codeMaterielCompatible: string;

        /**
         * Libellé du matériel compatible
         */
        libelleMaterielCompatible: string;

        /**
         * Indique si un récapitulatif des documents est présenté pendant la phase de signature
         */
        indicateurRecapitulatifPresentation: boolean;

        /**
         * Indique si la consultation des documents est possible après la signature
         */
        indicateurConsultationDocSignature: boolean;

        /**
         * Indique si la consultation des documents est possible pendant la phase de restitution
         */
        indicateurConsultationDocRestitution: boolean;

        /**
         * Liste des documents
         */
        listeDocuments: IDocument[];

        /**
         * indique si le mode d'emploi de la contractualisation est affiché lors de la signature du client
         */
        indicateurModeEmploi: boolean;

        /**
         * Cet indicateur précise si l'authentification par  SOL-CAP est possible ou requise (Sécurisation des Opération en Ligne par lecture Carte A Puce)
         */
        indicateurAuthentficationCAP: boolean;

        /**
         * typologie référencée permettant de constituer le corps du message de confirmation envoyé au client après signature
         */
        codeTypeMailConfirmation: string;

        /**
         * code indiquant l'activation de la MSI
         */
        codeActivationMSI: string;

        /**
         * Détermine le type de demande de recherche en GED de la pièce justificative d'identité du client.
         */
        codeActionRecherchePJI: string;

        /**
         * Code indiquant si une restitution papier est possible pour un mode de contractualisation.
         */
        indicateurRestitutionPapier: boolean;

        /**
         * Détermine la demande d'émission d'un CRE fonctionnel  en fin d'acte de gestion.
         */
        indicateurEmissionCRE: string;

        /**
         * indique le mode de remise au client des Conditions Générales.
         */
        codeRemiseCG: string;

        /**
         * Liste des personnes
         */
        listePersonne: IPersonne[];

        /**
         * Indique si la consultation des documents est possible pendant la phase d'authentificaton
         */
        indicateurConsultationDocAuth: boolean;

        /**
         * Cet indicateur précise si l'authentification par justificatif d'identité est possible ou requise
         */
        indicateurAuthentificationPJI: boolean;

        /**
         * Indique si le tétéchargement des documents est possible pendant la phase de restitution
         */
        indicTelechargementRestitution: boolean;

        /**
         * code permettant l'inhibition de l'affichage de l'écran de choix de signature.
         */
        codeActionInhiberChoixSignature: string;

        /**
         * Cet indicateur précise si l'authentification par SOL-SMS est possible ou requise (Sécurisation des Opération en Ligne par SMS)
         */
        indicateurAuthentificationSMS: boolean;

        /**
         * Indicateur de sensibilité du montant
         */
        indicateurSensibiliteMontant: boolean;
    }

    export interface ISignataire {
        /**
         * Identifiant personne
         */
        numeroPersonne: string;

        /**
         * Identifiant justificatif identité
         */
        identifiantJustificatifIdentite: string;
    }

    export interface ISensibiliteOperation {
        /**
         * Code mode contractualisation
         */
        codeModeContractualisation: boolean;

        /**
         * Indicateur de sensibilité du montant
         */
        indicateurSensibiliteMontant: boolean;
    }

    export interface IMontantOperation {
        /**
         * Code devise
         */
        codeDevise: string;

        /**
         * Montant de l'opération ou du compte
         */
        montant: number;
    }

}
