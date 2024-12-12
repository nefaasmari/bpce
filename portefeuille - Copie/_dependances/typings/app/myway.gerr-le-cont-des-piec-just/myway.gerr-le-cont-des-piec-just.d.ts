
declare module myway.controle {
    var app: any;
}

declare module myway.controle {
    class ConstantesBroadCast {
        static CODE_TYPE_CANAL: string;
        static valueEerd00: any;
        static codeTypeAction: any;
        static valueControle: IValueControle;
        static natures: any;
        static nomDePiece: any;
    }
}

declare module myway.controle {
    interface IDataModele {
        model: IDossierControleResult;
        estHabiliteAForcer?: boolean;
        modeCreation: boolean;
    }
    class ModaleControleur {
        private serviceAgentExtended;
        private $q;
        private $scope;
        private $modalInstance;
        visualiserResultatsCtrlVialink: VisualiserResultatsControle;
        private $timeout;
        private data;
        commentaire: boolean[];
        commentaireFixe: boolean[];
        lignesVisibles: string;
        listesTypeControles: Array<string>;
        hrectOpen: string;
        private nbScoresInferieursACent;
        private listeKOBloquants;
        listePiecesNonControlees: IObjetPiecesVialinkGed[];
        fermetureAutomatique: boolean;
        etatGlobal: string;
        date1: any;
        choixListeSimple: any;
        naturesJustificatifs: {
            "id": string;
            "value": string;
        }[];
        listePanneaux: boolean[];
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, $scope: ng.IScope, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, visualiserResultatsCtrlVialink: VisualiserResultatsControle, $timeout: ng.ITimeoutService, data: IDataModele);
        listePiecesNonUploadees: IObjetPiecesVialinkGed[];
        estVisibleListePiecesNonUploadees: boolean;
        ouvrirControle(index: string): void;
        comt: number;
        listeControles(typeDocument: string, typeControle: string): ILigneControle[];
        aControlesAVerifier: boolean;
        dossierEnErreur(): boolean;
        /**
         * permet de vérifier dans la liste des documents quels sont ceux qui correspondent à une rubrique formulaire/smartnum
         * @param idNature<string> la nature correspondant à la rubrique du formulaire (justifetatcivil, justicoordonnees, justifprofession...)
         * @returns document<IObjetPiecesVialinkGed>
         */
        getDocument(idNature: string): IObjetPiecesVialinkGed;
        estBoutonActif: boolean;
        getTexte(clef: string): string;
        scoreClasse: string;
        texteBouton: string;
        documentOuvert: string;
        remplacerTexte(valeur: string): string;
        valider(): void;
        annuler(): void;
    }
}

declare module myway.controle {
    class NewModaleControleur {
        private serviceAgentExtended;
        private $q;
        private $scope;
        private $modalInstance;
        visualiserResultatsCtrlVialink: VisualiserResultatsControle;
        private editiqueCommunService;
        private data;
        private serviceTrace;
        commentaire: boolean[];
        commentaireFixe: boolean[];
        lignesVisibles: string;
        listesTypeControles: Array<string>;
        hrectOpen: string;
        private nbScoresInferieursACent;
        count: number;
        private listeKOBloquants;
        listePiecesNonControlees: IObjetPiecesVialinkGed[];
        fermetureAutomatique: boolean;
        etatGlobal: string;
        date1: any;
        choixListeSimple: any;
        naturesJustificatifs: {
            "id": string;
            "value": string;
        }[];
        listePanneaux: boolean[];
        caseDossierCoche: boolean;
        libelleCompletudeDossier: string;
        private afficherCaseCompletude;
        private afficherCasePJ;
        private _casePJCoche;
        private nbCasePJCoche;
        private nbPJRouge;
        private justifIDAbsent;
        private tabCoordonnees;
        private tabProfession;
        estHabiliteAForcer: boolean;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, $scope: ng.IScope, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, visualiserResultatsCtrlVialink: VisualiserResultatsControle, editiqueCommunService: myway.comEditiqueNumerisation.Services.CommunService, data: IDataModele, serviceTrace: any);
        listePiecesNonUploadees: IObjetPiecesVialinkGed[];
        estVisibleListePiecesNonUploadees: boolean;
        ouvrirControle(index: string): void;
        listeControles(typeDocument: string, typeControle: string): ILigneControle[];
        /**
         * condition d'affichage de la case à cocher
         */
        verifierCompletudeDossier(): void;
        getLibellePJAbsente(idPJ: string): string;
        aControlesAVerifier: boolean;
        dossierEnErreur(): boolean;
        /**
         * permet de vérifier dans la liste des documents quels sont ceux qui correspondent à une rubrique formulaire/smartnum
         * @param idNature<string> la nature correspondant à la rubrique du formulaire (justifetatcivil, justicoordonnees, justifprofession...)
         * @returns document<IObjetPiecesVialinkGed>
         */
        getDocument(idNature: string): any;
        getCouleurjustificatif(doc: IDocumentAffichage): string;
        isControleCritiqueKO(listeControle: ILigneControle[]): boolean;
        estOK(document: IObjetPiecesVialinkGed | any): boolean;
        getTexte(clef: string): string;
        scoreClasse: string;
        enregistrerClientPossible: boolean;
        texteBouton: string;
        donneIsModifier: boolean;
        documentOuvert: string;
        remplacerTexte(valeur: string): string;
        boutonForcageVisible: boolean;
        /**
         * On parcours la liste des documents, si il est vert ou validé par conseillé on fait sa MAJ en ged
         */
        majConformiteDocument(): ng.IPromise<string[]>;
        /**
         * Fonction permettant de mettre à jour la conformité des documents suite à l'acceptation de la popup vialink en modification par le conseillé
         * @param _codeEtablissement
         * @param _idnDocument
         * @param _codeNivConf niveau de conformité (0 : A exclure | 1 : Non reconnu | 2 : Reconnu mais illisible | 3 : Reconnu et lisible | 4 : Conforme) si on archive c'est que c'est toujours 4
         * @param _codeOrigConf origine conformité ( A : Automatique /si vialink vert/ | C : Conseiller /orange mais checkbox cochée/  | H : Habilitation | E : Externe /non concerné par CC/)
         */
        private putMajConformiteDocument(_codeEtablissement, _idntDocument, _codeNivConf, _codeOrigConf);
        consulterPiece(idGed: string): void;
        valider(forcerClient?: boolean): void;
        MiseAjourTachMyflowPJ(): void;
        verifierClickProspectOrClient(forcerClient: boolean): void;
        validerModif(forcerClient?: boolean): void;
        annuler(): void;
    }
}

declare module myway.controle {
    interface IDocumentAffichage extends IObjetPiecesVialinkGed {
        id: number;
        /**
         * justifetatCivil / justifcoordonnees / justifprofession
         */
        fonctionPiece: string;
        /**
         * codes natures retournés par smartnum
         */
        typePiece: string;
        /**
         * identifiant retourné par smartnum
         */
        referenceGed: string;
        /**
         * message retourné par la ressource en cas de problème (TODO)
         */
        message: string;
        /**
         * saisi par le conseiller dans la popin (TODO)
         */
        commentaire: boolean;
        /**
         * 0 : ACQUIS
         * 1 : ACQUIS_EN_REPLACEMENT
         * 2 : UPLOADED
         * 2 : ERREUR
         */
        statut: STATUT_PIECE;
        hash: string;
        scoreDocument?: string;
        statutDocument?: string;
        listLigneControle?: Array<ILigneControle>;
    }
}

declare module myway.controle {
    interface IDossierVialink {
        donneesReference: myway.controle.IDonneesReference;
        documents: IObjetPiecesVialinkGed[];
        /**
         * 0 : NULL
         * 1 : CREATED
         * 2 : SUBMITED
         * 3 : ERREUR
         */
        statut: STATUT_DOSSIER;
        enPhase: boolean;
        numeroDossier: string;
    }
    interface IObjetPiecesVialinkGed {
        id: number;
        /**
         * justifetatCivil / justifcoordonnees / justifprofession
         */
        fonctionPiece?: string;
        /**
         * codes natures retournés par smartnum
         */
        typePiece: string;
        /**
         * identifiant retourné par smartnum
         */
        referenceGed: string;
        /**
         * message retourné par la ressource en cas de problème (TODO)
         */
        message: string;
        /**
         * saisi par le conseiller dans la popin (TODO)
         */
        commentaire?: string | boolean;
        /**
         * 0 : ACQUIS
         * 1 : ACQUIS_EN_REPLACEMENT
         * 2 : UPLOADED
         * 3 : ERREUR
         */
        statut: STATUT_PIECE;
        hash?: string;
    }
    interface IDossierControle {
        /**
         * ensemble des données de référence qui seront utilisé dans le dossier de controle Vialink
         */
        donneesReference: IDonneesReference;
        /**
         * code etablissement
         */
        codeEtablissement: string;
    }
    interface IDonneesReference {
        /**
         * le prenom
         */
        prenom: string;
        /**
         * le nom
         */
        nom: string;
        /**
         * le nom d'usage, nom marital par exemple
         */
        nomUsage: string;
        /**
         * adresse mail
         */
        email?: string;
        /**
         * numéro de téléphone
         */
        numTel: string;
        /**
         * sexe de la personne :
         *  MALE = masculin
         *  FEMALE = feminin
         */
        sexe: string;
        /**
         * date de naissance
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * lieu de naissance
         */
        lieuNaissance: string;
        /**
         * undefined
         */
        adresse: IAdresse;
        /**
         * Nationalité
         */
        nationalite: string;
    }
    interface IAdresse {
        /**
         * Nom de la voie : 1 rue de l'espace
         */
        libelleVoieAdresse: string;
        /**
         * code postal
         */
        codePostal: number;
        /**
         * ville
         */
        ville: string;
        /**
         * pays
         */
        pays: string;
    }
    interface IDossierControleResult {
        /**
         * Donne le score globale du contrôle du dossier
         */
        scoreGlobalDossier: number;
        /**
         * Donne le statut du dossier : OK ou KO
         */
        statutDossierControle: string;
        /**
         * identifiant du dossier de controle
         */
        idDossierControle: string;
        /**
         * code établissement du dossier de contrôle
         */
        codeEtablissement: string;
        /**
         * undefined
         */
        listDocumentResult: Array<IDocumentResult>;
    }
    interface IPostDocumentControleInput {
        /**
         * code etablissement
         */
        codeEtablissement: string;
        /**
         * identifiant du dossier de controle
         */
        idDossierControle: string;
        /**
         * identifiant du document
         */
        idDocument: string;
        /**
         * type de document
         */
        typeDocument: string;
        /**
         * undefined
         */
        codeApplicationGed: string;
        documentInformation: any;
    }
    interface IPatchDossierControleInput {
        /**
         * code etablissement
         */
        codeEtablissement: string;
        /**
         * identifiant du dossier de controle a mettre à jour
         */
        idDossierControle: string;
        /**
         * undefined
         */
        donneesReference: IDonneesReference;
    }
    interface IDocumentResult {
        /**
         * Type du document
         */
        typeDocument: string;
        /**
         * Le score de controle pour le document
         */
        scoreDocument: string;
        /**
         * undefined
         */
        listLigneControle: Array<ILigneControle>;
        /**
         * donne le statut du document, utilisez pour le cas d'un resultat généré de manière fictive
         */
        statutDocument: string;
        documentNumber?: number;
        hashDocument?: string;
    }
    interface ILigneControle {
        /**
         * Libelle du controle executé
         */
        libelleLigneControle: string;
        /**
         * Etat de la ligne du contrôle : OK ou KO
         */
        etatLigneControle: string;
        /**
         * Definition la typologie du controle
         */
        typeControle: string;
        /**
         * valeur du controle
         */
        valueControle: string;
        /**
         * poids du point de controle
         */
        poidsControle: number;
        /**
         * définition si le controle est critique
         */
        controleCritique: boolean;
        /**
         * undefined
         */
        donneesControlees: Array<IDonneesControleesDetail>;
    }
    interface IDossierControleOutput {
        /**
         * identifiant du dossier de controle créé
         */
        idDossierControle: string;
    }
    interface IPostDocumentControleOutput {
        /**
         * info de retour de l'envoi d'un document au dossier de controle
         */
        message: string;
        hashDocument: string;
    }
    interface IPatchDossierControleOutput {
        /**
         * retour du patch des données de référence du dossier de controle
         */
        message: string;
    }
    interface IPostSubmitDossierControleOutput {
        /**
         * libelle retour de l'execution
         */
        message: string;
    }
    interface IPostSubmitDossierControleInput {
        /**
         * Code etablissement
         */
        codeEtablissement: string;
        /**
         * Identifiant du dossier de controle sur lequel executer le lancement des contrôles
         */
        idDossierControle: string;
    }
    interface IDonneesControleesDetail {
        /**
         * type de la donnée controlee
         */
        type: string;
        /**
         * type du document ou est positionné la donnée
         */
        documentType: string;
        /**
         * valeur de la donnée
         */
        valeur: string;
    }
}

declare module mock {
    interface ISource {
        type: string;
        documentType: string;
        number: number;
        value: string;
    }
    interface ICheckResult {
        type: string;
        name: string;
        value: string;
        weight: number;
        critical: boolean;
        sources: ISource[];
    }
    interface IScores {
        PAYSLIP: number;
        PASSPORT: number;
        ADDRESS_PROOF: number;
    }
    interface IObjetPrincipal {
        status: string;
        score: number;
        checkResults: ICheckResult[];
        scores: IScores;
    }
}

declare module myway.controle {
    interface IAction {
        /**
         * Type d'action effectuée sur la tâche :
         *
         * - 01 = Traiter
         * - 02 = Refuser provisoirement
         * - 03 = Déléguer
         * - 04 = Transférer
         * - 05 = Affecter
         * - 06 = Refuser définitivement
         * - 07 = Réaliser une action externe
         * - 08 = Gérer un formulaire externe à champs multiples
         */
        codeTypeAction: string;
        /**
         * Code de la raison du refus provisoire
         * TODO : Ajouter une liste fermée des codes de raison ou la référence à un référentiel (GDMC pourrait porter ce référentiel ?)
         */
        codeTypeRaison: string;
        /**
         * Libellé de la raison du refus provisoire.
         * Cette propriété doit être renseignée dans le cas d'un codeTypeAction ayant pour valeur 02
         */
        libelleRaison: string;
        /**
         * Commentaire lié au traitement de la tâche
         */
        commentaire: string;
        /**
         * Identifiant poste fonctionnel de l'agent qui doit traiter la tâche.
         * A valoriser si codeTypeAction = 03, 04 ou 05
         */
        idPFTacheATraiter: string;
        /**
         * Identifiant EDS qui doit traiter la tâche.
         * A valoriser si codeTypeAction = 03, 04 ou 05
         */
        idEdsTacheATraiter: string;
        /**
         * Type de l'affectation lors d'une génération de tâche (exemple: refus provisoire)
         * 0 : Aucun
         * 1 : EDS
         * 3 : Gestionnaire Clientèle du client de la demande
         * 4 : Futur directeur d'agence
         * 5 : Actuel directeur d'agence
         * 7 : Gere par
         * 8 : Initiateur demande
         * 11 : Structure d'usage
         */
        typeStructureAffectation: string;
        /**
         * Identifiant du champ de formulaire référencé dans l'action de sous-formulaire externe.
         * A valoriser si codeTypeAction = 07
         */
        idChampExterne: string;
        /**
         * Valeur utilisée par le moteur de règle lors de l'interprétation, par défaut elle est "false".
         * A valoriser si codeTypeAction = 07
         */
        valueChampExterne: string;
        /**
         * Identifiant de l’agent traitant la tâche (ou destinataire si affectation).
         * A valoriser si codeTypeAction = 01 ou 05, permet de trouver le poste fonctionnel à partir de l'identifiant agent. Attention  une recherche du poste fonctionnel (PF) est possible à condition que le PF soit unique.
         *
         * Dans le cas du traitement (codeTypeAction = 01) son utilité est prévue lors de l'Affectation préalable au traitement.
         */
        idAgentTacheATraiter: string;
        formulaireExterne: IFormulaireExterne;
    }
    interface ITache {
        /**
         * Action effectuée sur la tâche
         */
        action: IAction;
        caracteristique: ICaracteristique;
    }
    interface ICaracteristique {
        /**
         * Wobnum de la tâche
         */
        identifiantInterneTache: string;
        /**
         * Identifiant du contrat lié à la tâche à traiter
         */
        identifiantDemande: string;
        /**
         * Code du type de motif lié à la demande pour laquelle on souhaite traiter les tâches
         */
        codeTypeMotif: string;
        /**
         * Décrit le Canal par lequel a été initier la demande. Reprendre typo MySys
         */
        codeTypeCanal: string;
        /**
         * Code établissement émetteur de l'appel de traitement de la tâche
         */
        codeEtablissement: string;
        /**
         * Libellé de la tâche (pour la traçabilité)
         */
        libelleTache: string;
        /**
         * Libellé de la demande (pour la traçabilité)
         */
        libelleDemande: string;
        /**
         * Identifiant de l'agent connecté
         */
        identifiantAgentConnecte: string;
        /**
         * Poste fonctionnel de l'agent connecté
         *
         * Evolution : si le poste fonctionnel n'est pas connu, une recherche du poste fonctionnel (PF) est réalisée à partir de la propriété : "identifiantAgentConnecte" à condition que le PF soit unique.
         */
        identifiantElementStructure: string;
        /**
         * Identifiant interne de demande MyFlow
         */
        identifiantDemandeMyFlow: string;
        /**
         * Identifiant externe de la tâche servant à identifier quelle tâche précisément doit être traitée.
         * Cet identifiant est paramétré dans l'interface de paramétrage MyFlow
         */
        identifiantExterneTache: string;
    }
    interface IFormulaireExterne {
        /**
         * id sous formulaire externe
         */
        idFormulaire: string;
        champs: Array<ICleValeur>;
    }
    interface ICleValeur {
        /**
         * nom du champ du sous formulaire
         */
        cle: string;
        /**
         * valeur du champ du sous formulaire
         */
        valeur: string;
    }
}

declare module myway.controle {
    interface IValueControle {
        KO: string;
        OK: string;
        NONE: string;
    }
    enum STATUT_DOSSIER {
        NULL = 0,
        CREATED = 1,
        PENDING = 2,
        SOUMIS = 3,
        ERREUR = 4,
    }
    enum STATUT_PIECE {
        ACQUIS = 0,
        ACQUIS_EN_REMPLACEMENT = 1,
        UPLOADED = 2,
        ERREUR = 3,
    }
    class VisualiserResultatsControle {
        private modalService;
        private serviceAgentExtended;
        private $q;
        private VALEUR_NON_RECONNUE;
        private template;
        listePiecesNonControlees: IObjetPiecesVialinkGed[];
        donneIsModifier: boolean;
        private static MYFLOW_RESSOURCE;
        isProspectDigital: boolean;
        authIfo: any;
        demandeMyFlow: any;
        codeEtab: string;
        idAgentConnecte: string;
        idElementStructure: string;
        idDemandeMyFlow: string;
        idExterneTache: string;
        static $inject: string[];
        constructor(modalService: MyWay.UI.ModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * ouvre la popin de visualisation des contrôles d'un dossier Vialink avec version panels rétractables (peu concluant)
         * @param numeroDossierVialink<string> le numéro de dossier vialink concerné
         * @param objetResultat<myway.controle.IDossierControleResult> l'objet de résultat issu de la ressource de contrôle
         * @param modeCreation<boolean> pour savoir si on demande la popin en mode création ou modification
         * @param classeFenetre<string> pour passer une classe css spécifique pour la popin
         * @param listePiecesNonControlees: IObjetPiecesVialinkGed[] liste des pièces non uploadées à vialink(pour afficher au conseiller)
         * @returns promesse:ng.IPromise<string> retourne une promesse, avec le commentaire du conseiller, ou l'annulation via le catch
         */
        ouvrirPopinControlePanels(numeroDossierVialink: string, objetResultat: myway.controle.IDossierControleResult, modeCreation?: boolean, classeFenetre?: string, listePiecesNonControlees?: IObjetPiecesVialinkGed[]): ng.IPromise<any>;
        private nettoyerResultatRessourceRestViaLink(objetResultat);
        /**
         * ouvre la popin de visualisation des contrôles d'un dossier Vialink avec version panels rétractables (peu concluant)
         * @param numeroDossierVialink<string> le numéro de dossier vialink concerné
         * @param objetResultat<myway.controle.IDossierControleResult> l'objet de résultat issu de la ressource de contrôle
         * @param modeCreation<boolean> pour savoir si on demande la popin en mode création ou modification
         * @param classeFenetre<string> pour passer une classe css spécifique pour la popin
         * @param listePiecesNonControlees: IObjetPiecesVialinkGed[] liste des pièces non uploadées à vialink, pour afficher au conseiller
         * @returns promesse:ng.IPromise<string> retourne une promesse, avec le commentaire du conseiller, ou l'annulation via le catch
         */
        ouvrirPopinControlePanelss(numeroDossierVialink: string, objetResultat: myway.controle.IDossierControleResult, modeCreation?: boolean, classeFenetre?: string, listePieces?: IObjetPiecesVialinkGed[]): ng.IPromise<any>;
        /**
         * ouvre la popin de visualisation des contrôles d'un dossier Vialink avec version panels rétractables (peu concluant)
         * @param numeroDossierVialink<string> le numéro de dossier vialink concerné
         * @param objetResultat<myway.controle.IDossierControleResult> l'objet de résultat issu de la ressource de contrôle
         * @param modeCreation<boolean> pour savoir si on demande la popin en mode création ou modification
         * @param classeFenetre<string> pour passer une classe css spécifique pour la popin
         * @param listePiecesNonControlees: IObjetPiecesVialinkGed[] liste des pièces non uploadées à vialink, pour afficher au conseiller
         * @returns promesse:ng.IPromise<string> retourne une promesse, avec le commentaire du conseiller, ou l'annulation via le catch
         */
        ouvrirPopinControlePanelV2(numeroDossierVialink: string, objetResultat: myway.controle.IDossierControleResult, modeCreation?: boolean, classeFenetre?: string, listePieces?: IObjetPiecesVialinkGed[]): ng.IPromise<any>;
        /**
         * méthode de conversion d'une clef vers une valeur du reférentiel, si elle existe
         * @param clef
         * @returns retour<string> soit la clef d'origine, soit son équivalent si trouvé dans le référentiel
         */
        convertirReferentiel(clef: string): string;
        referentiel: {
            "KO": any;
            "OK": any;
            "NONE": any;
            "SUBSCRIBER": any;
            "INTERNAL": any;
            "STATE_ID": any;
            "PASSPORT": any;
            "ADDRESS_PROOF": any;
            "RESIDENCE_PERMIT": any;
            "TAX_ASSESSMENT": any;
            "PAYSLIP": any;
            "PRCD": any;
            "PACN_PASS": any;
            "PACN_CNI": any;
            "CGVE": any;
            "EGET": any;
            "DLOG": any;
            "JFAI_JD": any;
            "JFAI_JR": any;
            "JISR_JR": any;
            "JISR_JD": any;
            "DSAL": any;
            "DHSR": any;
            "JFAI": any;
            "JISR": any;
            "PACN": any;
        };
        /**
         * remplace les éléments techniques de type "nature de document"
         * par leur équivalent en français, dans le texte fourni
         * @param texte
         * @returns texte
         */
        chercherEtRemplacerNature(texte: string): string;
        listeDocumentsPourAffichage: controle.IDocumentAffichage[];
        documentOuvert: string;
        listePanneaux: boolean[];
        /**
         * génère la liste des documents en mappant les documents acquis via smartnum avec ceux retournés par le rapport vialink
         * ajout des lignes de contrôles, statuts et score, et prépositionnement du flag indiquand si la case à cocher a été cochée (commentaire)
         * @param objetResultatNettoye
         */
        private genererListeDocumentsPourAffichage(objetResultatNettoye);
        ouvrirPopinControlePanel(numeroDossierVialink: string, objetResultat: myway.controle.IDossierControleResult, modeCreation?: boolean, classeFenetre?: string, listePieces?: IObjetPiecesVialinkGed[], estHabiliteAForcer?: boolean): ng.IPromise<any>;
        MiseAjourTachMyflowPjOK(): ng.IPromise<any>;
        MiseAjourTachMyflowPjOKRetour(): ng.IPromise<any>;
        MiseAjourTachMyflowPjKO(): ng.IPromise<any>;
        MiseAjourTachMyflowPjKORetour(): ng.IPromise<any>;
        ouvrirPopinControlePanelV5(numeroDossierVialink: string, objetResultat: myway.controle.IDossierControleResult, modeCreation?: boolean, classeFenetre?: string, listePieces?: IObjetPiecesVialinkGed[], estHabiliteAForcer?: boolean, estFormulairModifier?: boolean): ng.IPromise<any>;
    }
}
