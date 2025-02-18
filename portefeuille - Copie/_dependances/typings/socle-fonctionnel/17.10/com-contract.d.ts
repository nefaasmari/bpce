
declare module myway.comContract {
    var app: any;
}

declare module myway.comContract.signataire.filters {
}

declare module myway.comContract.signataire.filters {
}

declare module myway.comContract.filters {
}

declare module myway.comContract.modeles {
    class CodeTypePersonne {
        static PHYSIQUE: string;
        static MORALE: string;
    }
    interface ISignataire {
        numeroPersonne: number;
        adresseMail?: string;
        rang: number;
        role: TypeSignataire;
        nomFamille: string;
        prenom: string;
    }
    interface IProduitService {
        codeTypeProduitService: string;
        identifiantProduitService: number;
    }
    interface ISignataireInput {
        identifiantEntiteTitulaire: number;
        codeCanal: string;
        codeActeGestion: string;
        identifiantPersonne?: string;
        codeTypePSCompteSupport?: string;
        codePSCompteSupport?: string;
        codeGuichetCompteSupport?: string;
        listeProduitService?: Array<IProduitService>;
        isModeReprise?: boolean;
        idPersonnesPreSelectionnees?: Array<string>;
        casParticulier?: string;
        modeOperationsFinancieres?: number;
        referenceIdentite?: number;
    }
    interface ISignataireComplet extends ISignataire {
        designataire: string;
        typePersonne: TypePersonne;
        /**
         * concaténation de civilité nom famille prénom ou raison sociale
         */
        nomUsage: string;
        codeLienPersonne: string;
        situationFamille: string;
        nom: string;
        dateNaissance: Date;
        codePersonnaliteJuridique: string;
        codeFamilleLiensInterPersonnes: string;
        codeRoleDossierVente: CodeRoleDossierVente;
    }
    enum TypePersonne {
        PHYSIQUE = 0,
        MORALE = 1,
    }
    enum TypeSignataire {
        TITULAIRE = 1,
        REPRESENTANT_LEGAL = 2,
        MANDATAIRE = 3,
        AUTRE = 4,
    }
    enum CodeRoleDossierVente {
        TITULAIRE = 1,
        REPRESENTANT_LEGAL = 2,
        Co_TITULAIRE = 5,
        MANDATAIRE = 7,
    }
}

declare module myway.comContract.signataire {
    interface IDonneeDelocalisee {
        Value: string;
        Key: string;
    }
    class CommunService {
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        private $q;
        static $inject: string[];
        capacites: IDonneeDelocalisee[];
        civilites: IDonneeDelocalisee[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        getDonneesDelocalisees(nomTable: string): ng.IPromise<any>;
        getHabilitation(habilitation: string): ng.IPromise<boolean>;
        private getCodeEtablissement();
    }
}

declare module myway.comContract.Services {
    /**
     * ContractualisationActeService est un service angularJs a pour objectif de consommer la ressource REST
     * contractualisationActe en mode Réduit et Complet afin de vérifier
     * l'éligibilité à la signature électronique (SAG – signature électronique en agence et SED – signature électronique à distance).
     * @author S0076222
     */
    class ContractualisationActeService {
        private serviceAgentExtended;
        private $q;
        private signatureElectroniqueService;
        private caisseautomatique;
        static $inject: string[];
        private listeMateriels;
        private indicateurAgenceDeployeeSAG;
        private indicateurCaisseAuto;
        private libelleNonEligibilite;
        private motifNonEligibiliteSAGSED;
        /**
         * @constructor
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, signatureElectroniqueService: Services.SignatureElectroniqueService, caisseautomatique: myway.comCaisseAuto.CaisseAutomatique);
        /**
         * @ngdoc method
         * @name verifierEligibiliteSAGSEDReduit
         * @description
         * Permettant simplement de connaitre le résultat
         * de l'éligibilité à la signature électronique de niveau 1
         * en prenant en compte l’acte de gestion principal et les secondaires (aucun dossier numérique ne sera créé).
         * @param {ContractualisationActe.Modeles.IContractualisationActeInput} input
         * @returns {ng.IPromise<ContractualisationActe.Modeles.IContractualisationActe>}
         */
        verifierEligibiliteSAGSEDReduit(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>): ng.IPromise<Myway.Ressource.ContractualisationActe.IEligibiliteSAGSED>;
        /**
         * @ngdoc method
         * @name verifierEligibiliteSAGSEDComplet
         * @description
         * Permettant de vérifier l'éligibilités
         * de niveau 1 et 2 en prenant en compte l’acte de gestion principal et les secondaires.
         * Un dossier numérique sera crée si les deux niveaux de pré-éligibilités sont valides.
         * @param {ContractualisationActe.Modeles.IContractualisationActeInput} input
         * @returns {ng.IPromise<ContractualisationActe.Modeles.IContractualisationActe>}
         */
        verifierEligibiliteSAGSEDComplet(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, listeTitulaires: Array<ContractualisationActe.Modeles.ITitulaire>, surchargeNonEligibilite: boolean): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
        /**
         * @ngdoc method
         * @name getMateriels
         * @description
         * Permettant de récuperer la liste des périphériques connectés
         * @returns {ng.IPromise<Array<ContractualisationActe.Modeles.IMateriel>}
         */
        private getMateriels();
        /**
         * @ngdoc method
         * @name getIndicateurCaisseAuto
         * @description
         * Permettant de vérifier si le poste est une caisse automatique ou non.
         * @returns {ng.IPromise<Array<ContractualisationActe.Modeles.IMateriel>}
         */
        private getIndicateurCaisseAuto();
        /**
         * @ngdoc method
         * @name getIndicateurAgenceDeployeeSAG
         * @description
         * Permettant de vérifier si l’agence a été déployée en SAG ou non pour l'acte de gestion donné en entrée.
         * @returns {ng.IPromise<Array<ContractualisationActe.Modeles.IMateriel>}
         */
        private getIndicateurAgenceDeployeeSAG(codeActe);
        /**
         * @ngdoc method
         * @name isPreEligibiliteNiveauZero
         * @description
         * Cette méthode permet de vérifier la pré-élégibilité niveau0.
         * @returns {boolean}
         */
        isPreEligibiliteNiveauZero(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>): ng.IPromise<boolean>;
        /**
         * @ngdoc method
         * @name isExisteMaterielCaisseAuto
         * @description
         * Cette méthode permet de vérifier si l’un des éléments du tableau du périphérique
         * est un matériel de type « caisse auto ».
         * @returns {boolean}
         */
        private isExisteMaterielCaisseAuto(listeMateriels);
        private isModeOperationFinanciereEspece(listeModeOperationFinanciere);
        private isExisteSignataireMandataire(listeSignataire);
        private isExisteSignataireAutre(listeSignataire);
        /**
         * @ngdoc method
         * @name isTypeActeGestionOuverture
         * @description
         * Cette méthode permet de vérifier si le type de l'acte de gestion est ouverture ou non.
         * @returns {boolean}
         */
        private isTypeActeGestionOuverture(codeActe);
        /**
         * @ngdoc method
         * @name isTypeActeGestionCloture
         * @description
         * Cette méthode permet de vérifie si le type de l'acte de gestion est clôture ou non.
         * @returns {boolean}
         */
        private isTypeActeGestionCloture(codeActe);
        /**
         * @ngdoc method
         * @name postContractualisationActe
         * @description
         * Permettant de consommer la ressource REST contractualisationActe en mode Réduit.
         * @param {ContractualisationActe.Modeles.IContractualisationActeInput} input
         * @returns {ng.IPromise<ContractualisationActe.Modeles.IContractualisationActe>}
         */
        private postContractualisationActe(contractualisationActeInput);
        /**
         * @ngdoc method
         * @name putContractualisationActe
         * @description
         * Permettant de consommer la ressource REST contractualisationActe en mode Complet.
         * @param {ContractualisationActe.Modeles.IContractualisationActeInput} input
         * @returns {ng.IPromise<ContractualisationActe.Modeles.IContractualisationActe>}
         */
        private putContractualisationActe(contractualisationActeInput);
    }
}

declare module myway.comContract.Services {
    class SignatureElectroniqueService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        isBasculeSAG(acteGestion: string): ng.IPromise<boolean>;
        private filtreSU1PParDates(datas);
        private caissesBasculeesSAG001(datas, objetGestionPrincipal);
        private isBasculeFAFE(datas, serveurAgenceRattachement);
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * mwsfRecapSignataires .
     * @author S0076222
     */
    function mwsfRecapSignataires(): ng.IDirective;
}

declare module myway.comContract.signataire {
    class ListeDesignatairesController {
        private $scope;
        private $filter;
        private $q;
        private serviceAgentExtended;
        private signataireService;
        private PRECISION_SIGNATAIRE_MINLENGTH;
        private REFERENCE_IDENTITE_MINLENGTH;
        private MESSAGE_ERREUR_PRECISION_SIGNATAIRE_REQUIRED;
        private MESSAGE_ERREUR_PRECISION_SIGNATAIRE_MINLENGTH;
        private MESSAGE_ERREUR_REFERENCE_IDENTITE_MINLENGTH;
        private MESSAGE_ERREUR_SERVICE_REST;
        private CHANGED_EVENTNAME;
        private donneesEntree;
        private open;
        private ngModel;
        private messageErreur;
        private signataireReponse;
        private autreSignataire;
        private precisionSignataire;
        private referenceIdentite;
        private afficherReferenceIdentite;
        private referenceIdentiteObligatoire;
        private chargement;
        showCapaciteComplete: boolean;
        private afficheChampPrecision;
        private messageErreurReferenceIdentite;
        private messageErreurPrecisionSignataire;
        private messageErreurMinMax;
        private messageErreurServiceRest;
        static $inject: string[];
        constructor($scope: ng.IScope, $filter: ng.IFilterService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, signataireService: SignataireService);
        private recuperationSignataires();
        private initSelectionFromNgModel();
        private ajoutPreSelectionToNgModel();
        /**
         * Permet de déterminer le libelle de la personne.
         * Exemple :
         * - si nom de jeune fille (nomUsage présent) : civilité nomUsage (nomFamille) prénom
         * - si personne sans nomUsage alors : civilité nomFamille prénom
         */
        private getLibellePersonne(personne);
        onCheck(index: number, typeSignataire: comContract.modeles.TypeSignataire): void;
        onCheckAutre(isCoche: boolean): void;
        private onChangePrecisionSignataire();
        private onChangeReferenceIdentite();
        private gestionCasParticulierModeReprise();
        private ajoutSignataireNgModel(personne, typeSignataire);
        /**
         * La méthode getCodeRoleDossierVente permettant de détemriner le codeRoleDossierVente
         * en fonction de l'identifiantPersonne et le roleSignataire
         * @param identifiantPersonne
         * @param roleSignataire
         */
        private getCodeRoleDossierVente(identifiantPersonne, roleSignataire);
        private removeAutreSignataire();
        private selectPersonne(signataire, etat);
        private gestionNgModel(personne, typeSignataire);
        private controlerMinMax();
        private gestionPrecisionSignataire();
        /**
         * Vérifie que les min-max sont respectés pour le type fourni.
         * Renvoie true si ok.
         */
        private controlerMinMaxTypeSignataire(typeSignataire, signataire);
        private getLibelleDesignataire(typeSignataire);
        private resetErreurs();
        private setErreurPrecisionSignataire(message?);
        private setErreurReferenceIdentite(message?);
        private setErreurMinMax(message?);
        private setErreurServiceRest(message?);
        private buildOutputMessageErreur();
        private notifierChangement();
        private doitAfficherReferenceIdentite(referenceIdentite);
    }
}

declare module myway.comContract.signataire {
}

declare module myway.comContract.signataire {
    class SignataireService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        private communService;
        static CODE_CANAL_FACE_A_FACE: string;
        static CODE_TYPE_PRODUIT_SERVICE_0008: string;
        protected signatairesRestUrl: string;
        protected codeEtablissement: string;
        signatairesSelectionnes: comContract.modeles.ISignataireComplet[];
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, communService: CommunService);
        getSignataires(data: modeles.ISignataireInput): ng.IPromise<modeles.ISignataireReponse>;
        private isExistePersonneVivant(signataireReponse);
        protected recupererSignataires(signataireInput: modeles.ISignataireInput): ng.IPromise<modeles.ISignataireReponse>;
        private filtrerPersonneValideSignature(personnes);
        private orderByNom(personnes);
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * @author S0076222
     */
    class CodeNonELigibilite {
        static CONTROLE_AGENCE_DEPLOYEE: string;
        static CONTROLE_MATERIELS: string;
        static CONTROLE_CAISSE_AUTO: string;
        static CONTROLE_NOMBRE_SIGNATAIRES: string;
        static CONTROLE_SIGNATAIRE_MANDATAIRE: string;
        static CONTROLE_SIGNATAIRE_AUTRE: string;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * Cette classe permettant de présenter les varaibles constantes que le service contractualisationActe peut utiliser.
     * @author S0076222
     */
    class Constants {
        static CODE_CANAL_FACE_A_FACE: string;
        static MODE_VERSEMENT_OPERATION_FINANCIERE: string;
        static TYPE_ACTE_GESTION_OUVERTURE: string;
        static TYPE_ACTE_GESTION_CLOTURE: string;
    }
}

declare module myway.comContract.ContractualisationActe.Modeles {
    interface IActe {
        codeActeGestion: string;
        numeroEntiteTitulaire: string;
        codeCanal: string;
        codeModeMiseGestion: string;
        codeTypeMarcheEntreprise: string;
        listeActeSecondaires?: Array<string>;
        listeModeOperationsFinanciere: Array<string>;
        indicateurActeIDNExistant?: boolean;
        identifiantActeIDN?: string;
        libelleActe?: string;
        identifiantActeExterne?: string;
    }
    interface ITitulaire {
        numeroPersonne: string;
        adresseMail?: string;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * @author S0076222
     */
    class LibelleNonELigibilite {
        static CONTROLE_MATERIELS: string;
        static CONTROLE_CAISSE_AUTO: string;
        static CONTROLE_AGENCE_DEPLOYEE: string;
        static CONTROLE_SIGNATAIRE_AUTRE: string;
        static CONTROLE_SIGNATAIRE_MANDATAIRE: string;
        static CONTROLE_NOMBRE_SIGNATAIRES: string;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * Cette classe permettant de présenter les messages d'erreur que le service contractualisationActe peut retourner.
     * @author S0076222
     */
    class MessageErreur {
        static CODE_ACTE_GESTION_UNDEFINED: string;
        static ERREUR_TECHNIQUE: string;
        static PB_GET_PERIPHERIQUES: string;
        static PB_GET_INDICATEUR_CAISSE_AUTO: string;
        static PB_GET_INDICATEUR_AGENCE_DEPLOYEE_SAG: string;
        static CODE_CANAL_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static CODE_NATURE_APPEL_QR_UNDEFINED: string;
        static NOMBRE_SIGNATAIRES_ACTE: string;
        static NOMBRE_SIGNATAIRES_ACTE_VIDE: string;
        static ACTE_GESTION_UNDEFINED: string;
        static CONTRACTUALISATION_ACTE_INPUT_UNDEFINED: string;
        static CODE_TYPE_MARCHE_ENTREPRISE_UNDEFINED: string;
        static CODE_MODE_MISE_GESTION_UNDEFINED: string;
        static CONTROLE_MATERIELS: string;
        static CONTROLE_CAISSE_AUTO: string;
        static CONTROLE_AGENCE_DEPLOYEE: string;
        static CONTROLE_SIGNATAIRE_AUTRE: string;
        static CONTROLE_SIGNATAIRE_MANDATAIRE: string;
        static CONTROLE_TROP_SIGNATAIRES: string;
        private messageErreur;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
        toString(): string;
    }
}

declare module myway.comContract.signataire.modeles {
    interface IPersonne {
        codeTypeLienInterPersonnes: string;
        dateDecesPersonne?: string;
        dateNaissance?: string;
        codePersonnaliteJuridique?: string;
        identifiantPersonne?: number;
        codeCapaciteJuridique?: number;
        codeEtablissement?: string;
        identifiantEntiteTitulaire?: number;
        codeTypePersonne?: string;
        indiceResponsableET?: string;
        nomFamille: string;
        nomUsage?: string;
        prenom: string;
        codeCivilite?: number;
        codeTypeSituationFamille?: string;
        codeFamilleLiensInterPersonnes?: string;
        numeroRangPersonneET?: string;
        codeTypeMandat?: string;
        raisonSocial?: string;
        codeRoleSignataire: string;
        isSelectionne: boolean;
        isSelectionnable: boolean;
    }
    interface ISignataire {
        personnes: Array<IPersonne>;
        maxSelectionne: number;
        minSelectionne: number;
    }
    interface ISignataireReponse {
        titulaires: ISignataire;
        representantsLegaux: ISignataire;
        mandataires: ISignataire;
        autres: ISignataire;
        maxSignataire: number;
        libelleErreur: string;
        libelleRegle: string;
        cleRegle: string;
    }
    enum Civilite {
        MADAME = 1,
        MADEMOISELLE = 2,
        MONSIEUR = 3,
    }
    interface IProduitService {
        codeTypeProduitService: string;
        identifiantProduitService: number;
    }
    interface ISignataireInput {
        identifiantEntiteTitulaire: number;
        codeCanal: string;
        codeActeGestion: string;
        identifiantPersonne?: string;
        codeTypePSCompteSupport?: string;
        codePSCompteSupport?: string;
        codeGuichetCompteSupport?: string;
        listeProduitService?: Array<IProduitService>;
        isModeReprise?: boolean;
        idPersonnesPreSelectionnees?: Array<string>;
        casParticulier?: string;
        modeOperationsFinancieres?: number;
        referenceIdentite?: number;
    }
}

declare module myway.comContract.RecapSignataires {
    class RecapSignatairesControleur {
        private $scope;
        private serviceAgentExtended;
        private recapSignatairesService;
        recapSignatairesInput: IRecapSignatairesInput;
        chargementCourtShow: boolean;
        signatairesTableShow: boolean;
        PB_RECAP_SIGNATAIRES: string;
        private afficherMessageErreur;
        tableauSimpleData: Array<IDataTableau>;
        tableauColonneOptionsNom: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsPrecisionSIgnataires: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsRole: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMail: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsEtatSignature: MyWay.UI.ImwTableColumnOptions;
        signatairesTableau: MyWay.UI.ImwTableOptions;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recapSignatairesService: RecapSignatairesService);
        /**
         *
         * @param recapSignatairesInput
         */
        private getTableauDataFromRecapSignatairesInput(recapSignatairesInput);
        /**
         *
         */
        private setSignatairesTableau();
        private afficheRecapSignataire(recapSignatairesInput);
    }
}

declare module myway.comContract.RecapSignataires {
    interface IChargementLong {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<boolean>;
    }
}

declare module myway.comContract.RecapSignataires {
    class CiviliteEnum extends MyWay.Services.StringEnum {
        static MME: CiviliteEnum;
        static MLLE: CiviliteEnum;
        static M: CiviliteEnum;
        static INCONNU: CiviliteEnum;
    }
}

declare module myway.comContract.RecapSignataires {
    class CodeModeSignatureEnum extends MyWay.Services.StringEnum {
        static E: CodeModeSignatureEnum;
        static P: CodeModeSignatureEnum;
        static INCONNU: CodeModeSignatureEnum;
    }
}

declare module myway.comContract.RecapSignataires {
    class EtatSignatureEnum extends MyWay.Services.StringEnum {
        static EN_ATTENTE_CHOIX_MODE_SIGNATURE: EtatSignatureEnum;
        static EN_ATTENTE_SIGNATURE: EtatSignatureEnum;
        static SIGNATURE_A_DISTANCE_BLOQUEE: EtatSignatureEnum;
        static SIGNATURE_TERMINEE: EtatSignatureEnum;
        static INCONNU: EtatSignatureEnum;
        static BLANC: EtatSignatureEnum;
        static SIGNE: EtatSignatureEnum;
        static NON_SIGNE: EtatSignatureEnum;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * Cette classe permettant de présenter les messages erreur que l'application la directive RecapSignataires peut retourner.
     * @author S0076222
     */
    class RecapSignatairesMessageErreur {
        static PB_GET_SIGNATURE_EN_INSTANCE: string;
        static PB_GET_IDENTIFICATION: string;
        static PB_GET_CORPORATE_INFORMATION: string;
        static PB_GET_PARTICULIER_INFORMATION: string;
        static PB_GET_AUTHENTIFICATION_INFO: string;
        static PB_RECAP_SIGNATAIRES: string;
        static PB_RECAP_SIGNATAIRE_INPUT: string;
        static PB_SIGNATAIRES: string;
        static PB_ROLE_SIGNATAIRE: string;
        static PB_IDENTTIFIANT_SIGNATAIRE: string;
        static PB_GET_TIERS_NOYAU: string;
        private messageErreur;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        private classeTypeScript;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, classe?: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
    }
}

declare module myway.comContract.RecapSignataires {
    class PersonnaliteJuridiqueEnum extends MyWay.Services.StringEnum {
        static MORALE: PersonnaliteJuridiqueEnum;
        static PHYSIQUE: PersonnaliteJuridiqueEnum;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * @author S0076222
     */
    interface IRecapSignatairesContexteModele {
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
    }
}

declare module myway.comContract.RecapSignataires {
    interface IRecapSignatairesInput {
        signataires: Array<Signataire>;
        idActeIDN?: string;
        codeModeSignature?: CodeModeSignatureEnum;
        dateSignature: string;
    }
    interface IDataTableau {
        nomSignataire: string;
        precisionSignataire: string;
        roleSignataire: RoleSignataireEnum;
        dernierMailUtilise: string;
        etatSignature: EtatSignatureEnum;
    }
    class Signataire {
        private nomSignataire;
        identifiantSignataire: string;
        libelleRoleSignataire: RoleSignataireEnum;
        adresseMailSignataire: string;
        precisionSignataire: string;
        private etatSignature;
        private personnaliteJuridique;
        constructor(identifiantSignataire: string, libelleRoleSignataire: RoleSignataireEnum, adresseMailSignataire?: string, precisionSignataire?: string);
        getNomSignataire(): string;
        setNomSignataire(nomSignataire: string): void;
        getEtatSignature(): EtatSignatureEnum;
        setEtatSignature(etatSignature: EtatSignatureEnum): void;
        getPersonnaliteJuridique(): PersonnaliteJuridiqueEnum;
        setPersonnaliteJuridique(personnaliteJuridique: PersonnaliteJuridiqueEnum): void;
    }
}

declare module myway.comContract.RecapSignataires {
    class RoleSignataireEnum extends MyWay.Services.StringEnum {
        static TITULAIRE: RoleSignataireEnum;
        static CO_TITULAIRE: RoleSignataireEnum;
        static REPRESENTANT_LEGAL: RoleSignataireEnum;
        static EMPRUNTEUR: RoleSignataireEnum;
        static CO_EMPRUNTEUR: RoleSignataireEnum;
        static VIDE: RoleSignataireEnum;
    }
}

declare module myway.comContract.RecapSignataires {
    class CorporateInformationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getCorporateInformation(codeEtablissementFinancier, identifiantTiers);
        getNomSignataire(codeEtablissementFinancier: string, identifiantSignataire: number): ng.IPromise<string>;
    }
}

declare module myway.comContract.RecapSignataires {
    class IdentificationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getIdentification(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<myway.comContract.RecapSignataires.PersonnaliteJuridiqueEnum>;
    }
}

declare module myway.comContract.RecapSignataires {
    class ParticulierInformationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getParticulierInformation(codeEtablissementFinancier, identifiantPersonne);
        getNomSignataire(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<string>;
        private getNomSignataireFromParticulierInformation(particulierInformation);
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * La Classe RecapSignatairesContexteService a pour objectif d'initialiser l'étape Routeur.
     * Elle récupére les contrats d'entrées: l'objet contractualisationActe et le mode,
     * @author S0076222
     */
    class RecapSignatairesContexteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        donneesContexte: IRecapSignatairesContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
    }
}

declare module myway.comContract.RecapSignataires {
    class RecapSignatairesService {
        private $q;
        private serviceAgentExtended;
        private recapSignatairesContexteService;
        private signatureEnInstanceService;
        private tiersNoyauService;
        static $inject: string[];
        private erreurRecapSignataire;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recapSignatairesContexteService: RecapSignatairesContexteService, signatureEnInstanceService: SignatureEnInstanceService, tiersNoyauService: TiersNoyauService);
        /**
         *
         * @param recapSignatairesInput
         */
        init(recapSignatairesInput: IRecapSignatairesInput): ng.IPromise<IRecapSignatairesInput>;
        /**
         *
         * @param recapSignatairesInput
         */
        private checkRecapSignataireInputObjet(recapSignatairesInput);
        /**
         *
         * @param signataire
         */
        private checkSignataireObjet(signataire);
    }
}

declare module myway.comContract.RecapSignataires {
    class SignatureEnInstanceService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private static CODE_APPLICATION;
        private static DATE_SIGNATURE_NON_SIGNE;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getDossierSignataire(codeApplication, idActeIDN);
        /**
         *
         *
         * @param recapSignatairesInput
         */
        getEtatSignature(recapSignatairesInput: IRecapSignatairesInput): ng.IPromise<IRecapSignatairesInput>;
        /**
         *
         * @param recapSignatairesInput
         * @param signatureEnInstanceOutput
         * @param etatSignature
         */
        private organiserSignataires(recapSignatairesInput, signatureEnInstanceOutput, etatSignature);
        /**
         *
         *
         * @param idStatut
         */
        private getEtatSignatureFromIdStatut(idStatut);
    }
}

declare module myway.comContract.RecapSignataires {
    class TiersNoyauService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private tiersNoyau;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getTiersNoyau(codeEtablissementFinancier, identifiantPersonne);
        getNomSignataire(codeEtablissementFinancier: string, signataire: Signataire): ng.IPromise<string>;
    }
}

declare module myway.comContract.signataire {
    enum ModeOperationsFinancieresEnum {
        DESACTIVE = 0,
        PARAMETRAGE_SPECIFIQUE_OF1 = 1,
        PARAMETRAGE_SPECIFIQUE_OF2 = 2,
        INCONNU,
    }
}

declare module myway.comContract.signataire {
    enum ReferenceIdentiteEnum {
        OBLIGATOIRE = 1,
        FACULTATIVE = 2,
        CACHEE = 3,
        INCONNU,
    }
}

declare module myway.comContract.RecapSignataires.Ressource.Identification {
    /**
     * La classe IdentificationConstants définit l'URI de la ressource REST identification.
     * @author S0076222
     */
    class IdentificationConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.Identification {
    interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
        informationsEAI: IInformationsEAI;
    }
    interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.Identification {
    /**
     * La classe IdentificationRequestFactory permet de produire la requête de la ressource identification.
     * @author S0076222
     */
    class IdentificationRequestFactory {
        constructor();
        create(codeEtablissement: string, identifiantPersonne: number): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.CorporateInformation {
    /**
     * La classe CorporateInformationConstants définit l'URL des la ressource REST corporateInformation.
     * @author S0076222
     */
    class CorporateInformationConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.CorporateInformation {
    interface ISituationFinanciere {
        montantCapitalSocial: number;
        montantChiffreAffaires: number;
        effectif: number;
        dateArreteComptable: number;
        anneeChiffreAffaires: number;
    }
    interface ICorporateInformation {
        codeSituationJuridique: string;
        numeroSiren: string;
        codeIndicateurEntrepriseEtrangere: string;
        dateCreationJuridique: Date;
        raisonSociale: string;
        nomCommercial: string;
        codeTypeCommerceOrganise: string;
        codeAgentEconomique: string;
        identifiantTiers: number;
        situationFinanciere: ISituationFinanciere;
        codeEtablissement: string;
        codeDeviseISO4217a3: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        codeTypeTiers: string;
        codeRegimeFiscal: string;
        codeCotation: string;
        codeAppartenanceReseau: string;
        adresse: IAdresse;
        codeCategoJuridi2DerCaracteres: string;
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
        numeroImmatriculation: string;
        sigle: string;
        etablissement: IEtablissement;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        listeMotCle: Array<string>;
        numeroChrono: number;
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        codeTypePersonne: string;
        prospect: IProspect;
        indicateurDroitAuCompte: string;
        professionnelImmobilier: IProfessionnelImmobilier;
        dateClotureJuridique: Date;
        codeMajImmatriculation: string;
        listeImmatriculation: Array<IImmatriculation>;
        identifiantLei: string;
        codeEmir: string;
        indicateurDelegationDeclaration: string;
        codeBlocageVao: string;
        indiceAmericanite: string;
        indicateurPresenceClassif: string;
        brancheActivite: string;
        indicProspectRestreint: boolean;
        codeEtatPersonne: string;
        typeRelation: string;
    }
    interface IAdresse {
        identifiant: number;
        codeType: string;
        indicateurEnvoiCourrier: string;
        codeTypeLieu: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeInseeLocalite: string;
        codeValiditeAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codePaysISO: string;
        codeAccesMinitel: string;
        codeInseePays: string;
    }
    interface IEtablissement {
        designationCourteLieuActivite: string;
        designationLongueLieuActivite: string;
        dateDebutExploitationLieuActivite: Date;
        codeResident: string;
        numeroComplementSIRET: string;
        dateFinExploitation: Date;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IProspect {
        codeSegmentation: string;
        numeroPortefeuille: number;
        codeTypeSegmentation: string;
    }
    interface IProfessionnelImmobilier {
        indicateurSteCivileImmoPatrimoniale: boolean;
        indicateurSocieteExploitation: boolean;
        indicateurStrDedieeA1OpeImmoMax: boolean;
        indicateurGarantieSurActifImmoFi: boolean;
        indicateurStrRemboursementDesConcours: boolean;
        indicateurExerciceSup1ActiviteImmo: boolean;
        codeCategorieProfImmo: string;
        timestampCreationQuestionnairePIM: string;
    }
    interface IImmatriculation {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfesionnel: number;
        codeTypeRegistre: string;
        numeroImmatriculationRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.CorporateInformation {
    /**
     * La classe CorporateInformationRequestFactory permet de produire la requête de la ressource CorporateInformation.
     * @author S0076222
     */
    class CorporateInformationRequestFactory {
        constructor();
        create(codeEtablissement: string, identifiantTiers: number): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.SignatureEnInstance {
    /**
     * La classe SignatureEnInstanceConstants définit l'URI des la ressource REST signatureEnInstance.
     * @author S0076222
     */
    class SignatureEnInstanceConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.SignatureEnInstance {
}

declare module myway.comContract.RecapSignataires.Ressource.SignatureEnInstance {
    /**
     * La classe SignatureEnInstanceRequestFactory permet de produire la requête de la ressource SignatureEnInstance.
     * @author S0076222
     */
    class SignatureEnInstanceRequestFactory {
        constructor();
        create(codeApplication: string, idActeIDN: string): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.ParticulierInformation {
    /**
     * La classe ParticulierInformationConstants définit l'URL des la ressource REST particulierInformation.
     * @author S0076222
     */
    class ParticulierInformationConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.ParticulierInformation {
    interface IGestionPrivee {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: number;
        identifiantExterneEDS: number;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: number;
        identifiantExterneEDS2: number;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
    interface IStatutPro {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: number;
        identifiantInterneAgentModification: number;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    interface IParticulierInformation {
        autresPrenom: string;
        categorieSocioprofessionnelle: string;
        codeAccesMinitel: string;
        codeAppartenanceReseau: number;
        codeBlocageVAO: string;
        codeCapaciteJuridique: string;
        codeCivilite: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeEtablissement: string;
        codeExistenceListeRouge: string;
        codeFamilleNAFINSEE: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        codeGuichetRisque: number;
        codeInseePays: string;
        codeInseePaysDoubleNationalite: string;
        codeInseePaysNationnalite: string;
        codeISOPays: string;
        codePaysNaissance: string;
        codePieceJustif: string;
        codePostalFranceEtEtranger: string;
        codePostalPTT: string;
        codeQuartier: string;
        codeRegimeMatrimonial: string;
        codeResident: number;
        codeRetourDistribution: string;
        codeSecteurEmploi: string;
        codeSexe: number;
        codeSituationFamiliale: string;
        codeTypeAdresse: string;
        codeTypeContratTravail: string;
        codeTypeNIF: string;
        codeValiditeAdresseUNIVERS: string;
        commentaireTelephone: string;
        dateDeces: string;
        dateDecesPresume: string;
        dateEffetCSP: string;
        dateEffetOptionResidence: string;
        dateEffetSituationFamiliale: string;
        dateEmbaucheEmployeurActuel: string;
        dateFinContratTravail: string;
        dateNaissance: string;
        dateNaissanceConjoint: string;
        dateNaturalisation: string;
        dateObtentionPieceJustificative: string;
        dernierChangement: number;
        designationCourte: string;
        designationEnregistree: string;
        domiciliationRevenu: string;
        droitAuCompte: string;
        edsDomiciliation: number;
        edsInterneDomiciliation: number;
        eligibiliteFGDR: string;
        gestionPrivee: IGestionPrivee;
        horsPresenceClient: string;
        identifiantAdresse: number;
        identifiantPersonne: number;
        identifiantRelationtEconomique: number;
        indicateurActiviteProfessionnel: string;
        indicateurAutoEntrepreneur: string;
        indicateurDetentionTelephone: string;
        indicateurEnvoiCourrier: string;
        indicateurSocietaire: number;
        indicDecesPresume: string;
        indicDonationEntreEpoux: string;
        indiceAmericaniteFATCA: string;
        libelleAppartenanceReseau: string;
        libelleCapaciteJuridique: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleCivilite: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libelleInseeLocalite: string;
        libelleInseePaysDoubleNationalite: string;
        libelleNAFInsee: string;
        libellePaysNaissance: string;
        libellePaysNationnalite: string;
        libelleProfession: string;
        libelleRegimeMatirimonial: string;
        libelleSexe: string;
        libelleSituationFamiliale: string;
        libelleSocietaire: string;
        libelleTypeContratTravail: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nif: string;
        nombreEnfantACharge: number;
        nomEmployeur: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        numeroFax: string;
        numeroTelephoneAdresse: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        prenom: string;
        refPieceJustificative: string;
        sirenEmployeur: string;
        statutPro: IStatutPro;
        telephoneFixePro: string;
        troisDerniersCaracteresNAF: string;
        typeClauseMatrimoniale: string;
        erreurDesi: boolean;
        libelleStatutFATCA: string;
        dateAttributionFATCA: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.ParticulierInformation {
    /**
     * La classe ParticulierInformationRequestFactory permet de produire la requête de la ressource ParticulierInformation.
     * @author S0076222
     */
    class ParticulierInformationRequestFactory {
        constructor();
        create(codeEtablissement: string, idPersonne: number): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.TiersNoyau {
    /**
     * La classe IdentificationConstants définit l'URI de la ressource REST tiersNoyau.
     * @author S0076222
     */
    class TiersNoyauConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.TiersNoyau {
    interface IIdentificationTiers {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface ICaracteristiqueTiers {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: Date;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        identifiantEDSDomiciliation: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
    }
    interface IInformationParticulier {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        id: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: Date;
        codeAppartenanceReseau: string;
        libelleAppartenanceReseau: string;
        indicSocietaire: string;
        codeCapaciteJuridique: string;
        libelleCapaciteJuridique: string;
        codePaysNaissance: string;
        libellePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleDoubleNationalitePays: string;
        situationFamille: string;
        libelleCodeSituationFamiliale: string;
        dateEffetSituationFamille: Date;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: Date;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: Date;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: Date;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeResident: string;
        identiteRelationEcoMenage: number;
        referenceExterneEds: number;
        typeClauseMatrimoniale: string;
        codeDonationEntreEpoux: string;
        indicateurAutoEntrepreneur: string;
        autresPrenomsEtatCivil: string;
        indicDomiciliationRevenus: string;
        indicEnregHorsPresenceClient: string;
        libelleProfessionParticulier: string;
        codeTypeSecteurEmploi: string;
        indicateurEnvoiCourrier: string;
        codePieceJustificative: string;
        dateObtentionPieceJustificative: Date;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: Date;
        dateNaissanceConjoint: Date;
        indicDecesPresume: string;
        dateDecesPresume: Date;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: Date;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: Date;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationProfessionnel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroSiren: string;
        codeTypeNifNni: string;
        libelleCodeTypeNifNni: string;
        noIdentificationFiscaleNifNni: string;
        nomCommercial: string;
        raisonSocial: string;
        codeSituationJuridique: string;
        libelleSituationJuridiqueProf: string;
        codeINSEE: string;
        libelleCategorieJuridiqueInsee: string;
        dateCreationJuridique: Date;
        codeNafInsee: string;
        libelleEtablissement: string;
        codeRegimeFiscal: string;
        libelleCodeRegimeFiscal: string;
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        dateArreteComptable: number;
        idEdsInterne: number;
        activiteEconomiqueReelleProf: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeDevise: string;
        codeAppartenanceReseau: string;
        codeAgentEconomique: string;
        codeTypeCommerceOrganise: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        referencePieceJustificativeProf: string;
        codeCotation: string;
        edsDomiciliation: number;
        sigle: string;
        codeTypeTiers: string;
        effectif: number;
        codeBanqueEntitePilote: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEco: string;
        indicateurEirl: string;
        dateDebutOptionEirl: Date;
        dateFinOptionEirl: Date;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: Date;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
    }
    interface IInformationEtablissement {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        designationEntiteTitulaire: string;
        codeStatutLieuActivite: string;
        numTelex: string;
        numTelecopieur: string;
        effectifDuLieuActivite: number;
        enseigneCommercialeLieuActivit: string;
        dateDebut: Date;
        dateFin: Date;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: Date;
        dateDerniereMiseAJourLieu: Date;
        dateDerniereVerifLieuActivite: Date;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: Date;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    interface IAdresse {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        identifiant: number;
        codeType: string;
        libelleType: string;
        ligne2AFNOR: string;
        ligne3AFNOR: string;
        ligne4AFNOR: string;
        ligne5AFNOR: string;
        ligne6AFNOR: string;
        codePostalPTT: string;
        codePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseelocalite: string;
        libelleInseeLocalite: string;
        codeTypeRetourPtt: string;
        libelleCodeTypeRetourPtt: string;
        indicateurEnvoiCourrier: string;
        inddifadresseFiscalePostale: string;
        numeroVoiePttVillePlus50000Hab: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephone: string;
        codeValiditeAdresseUniserv: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        libelleCommune: string;
        codeTypeLieu: string;
        dateDernierRetourPttAdresse: Date;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
    }
    interface IMedia {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        typeMoyenContact: string;
        adresseMoyenContact: string;
        codeIndicatifInternationalTel: string;
        numeroTelephone: string;
        codeOptIn: string;
        indicEnvoiMediaProOptOut: string;
        indicEnvoiSmsFax: string;
        telephoneEmailPrefere: string;
        telephoneEmailSecurise: string;
    }
    interface IInformationTiersLie {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
    }
    interface ITiersNoyau {
        caracteristiqueTiers: ICaracteristiqueTiers;
        identificationTiers: IIdentificationTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresse>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
    }
}

declare module myway.comContract.RecapSignataires.Ressource.TiersNoyau {
    /**
     * La classe IdentificationRequestFactory permet de produire la requête de la ressource identification.
     * @author S0076222
     */
    class TiersNoyauRequestFactory {
        constructor();
        create(codeEtablissement: string, identifiantPersonne: number): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * ActeGestionFactory est un factory permet de produire le modele IActeGestion
     * afin de consommer la ressource REST ContractualisationActe.
     * @author S0076222
     */
    class ActeGestionFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name create
         * @description
         * Permet de créer un objet de type Modeles.IActeGestion
         * @returns {Modeles.IActeGestion}
         */
        create(acte: Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, listeTitulaires: Array<Modeles.ITitulaire>): Myway.Ressource.ContractualisationActe.IActeGestion;
        private getIndicateurActeIDNExistant(identifiantActeIDN);
        private getLibelleActe(libelleActe);
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * Cette classe permettant de présenter les contstantes utilisées pour consommer la ressource contractualisationActe
     * @author S0076222
     */
    class ContractualisationActeConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * ContractualisationActeFactory est un factory permet de produire le modele IContractualisationActe
     * @author S0076222
     */
    class ContractualisationActeFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         *
         * @param indicateurPapier
         * @param acteGestion
         * @param libelleNonEligibilite
         * @param listeMateriels
         * @param surchargeNonEligibilite
         * @param motifNonEligibiliteSAGSED
         */
        createContractualisationActe(indicateurPapier: boolean, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, libelleNonEligibilite: string, listeMateriels: Array<Myway.Ressource.ContractualisationActe.IMateriel>, surchargeNonEligibilite: boolean, motifNonEligibiliteSAGSED: Myway.Ressource.ContractualisationActe.IMotifNonEligibiliteSAGSED): Myway.Ressource.ContractualisationActe.IContractualisationActe;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * ContractualisationActeInputFactory est un factory permet de produire le modele IContractualisationActeInput
     * afin de consommer la ressource REST ContractualisationActe.
     * @author S0076222
     */
    class ContractualisationActeInputFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name create
         * @description
         * Permet de créer un objet de type Modeles.IContractualisationActeInput
         * @returns {Modeles.IContractualisationActeInput}
         */
        create(acte: Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, indicateurAgenceDeployee: boolean, indicateurCaisseAuto: boolean, listeMateriels: Array<Myway.Ressource.ContractualisationActe.IMateriel>, listeTitulaires: Array<Modeles.ITitulaire>, surchargeNonEligibilite: boolean): Myway.Ressource.ContractualisationActe.IContractualisationActeInput;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * ContractualisationActeRequestFactory est un factory permet de produire la requete @see MyWay.Services.IRequestSettings
     * afin de consommer la ressource REST ContractualisationActe.
     * @author S0076222
     */
    class ContractualisationActeRequestFactory {
        private methode;
        private contractualisationActeInput;
        /**
         * @constructor
         */
        constructor(methode: MyWay.Services.MethodEnum, contractualisationActeInput: Myway.Ressource.ContractualisationActe.IContractualisationActeInput);
        /**
         * @ngdoc method
         * @name create
         * @description
         * Permet de créer la requete @see MyWay.Services.IRequestSettings
         * @returns {MyWay.Services.IRequestSettings}
         */
        create(): MyWay.Services.IRequestSettings;
    }
}


declare module myway.comContract.ContractualisationActe {
    /**
     * MotifNonELigibiliteFactory est un factory permet de produire le modele IMotifNonEligibiliteSAGSED
     * @author S0076222
     */
    class MotifNonEligibiliteSAGSEDFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         *
         * @param libelleNonEligibilite
         * @param codeNonEligibilite
         */
        static createMotifNonEligibiliteSAGSED(codeNonEligibilite: string, libelleNonEligibilite: string): Myway.Ressource.ContractualisationActe.IMotifNonEligibiliteSAGSED;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * OperationFinanciereFactory est un factory permet de produire le modele IOperationFinanciere
     * à partir du mode opération financière
     * @author S0076222
     */
    class OperationFinanciereFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name createSignataireActeFromSignataire
         * @description
         * Permet de créer un objet de type Modeles.ISignataireActe
         * @returns {Modeles.ISignataireActe}
         */
        createOperationFinanciere(modeOperationFinanciere: string): Myway.Ressource.ContractualisationActe.IOperationFinanciere;
        /**
         * @ngdoc method
         * @name createListeSignatairesActeFromListeSignataire
         * @description
         * Permet de créer une liste d'objet de type Modeles.ISignataireActe
         * @returns {Array<Modeles.ISignataireActe>}
         */
        createListeOperationsFinanaciere(listeModeOperationsFinanciere: Array<string>): Array<Myway.Ressource.ContractualisationActe.IOperationFinanciere>;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * SignataireActeFactory est un factory permet de produire le modele ISignataireActe
     * à partir d'un objet de type Signataire (Modeles.ISignataire)
     * @author S0076222
     */
    class SignataireActeFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name createSignataireActeFromSignataire
         * @description
         * Permet de créer un objet de type Modeles.ISignataireActe
         * @returns {Modeles.ISignataireActe}
         */
        createSignataireActeFromSignataire(signataire: modeles.ISignataire): Myway.Ressource.ContractualisationActe.ISignataireActe;
        /**
         * @ngdoc method
         * @name createListeSignatairesActeFromListeSignataire
         * @description
         * Permet de créer une liste d'objet de type Modeles.ISignataireActe
         * @returns {Array<Modeles.ISignataireActe>}
         */
        createListeSignatairesActeFromListeSignataire(listeSignataires: Array<modeles.ISignataire>): Array<Myway.Ressource.ContractualisationActe.ISignataireActe>;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * TitulaireActeFactory est un factory permet de produire le modele ITitulaireActe
     *
     * @author S0076222
     */
    class TitulaireActeFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name createTitulaireActeFromTitulaire
         * @description
         * Permet de créer un objet de type Modeles.ITitulaireActe
         * @returns {Modeles.ITitulaireActe}
         */
        createTitulaireActeFromTitulaire(titulaire: Modeles.ITitulaire): Myway.Ressource.ContractualisationActe.ITitulaireActe;
        /**
         * @ngdoc method
         * @name createListeTitulairesActeFromListeTitulaires
         * @description
         * Permet de créer une liste d'objet de type Modeles.ITitulaireActe
         * @returns {Array<Modeles.ITitulaireActe> }
         */
        createListeTitulairesActeFromListeTitulaires(listeTitulaires: Array<Modeles.ITitulaire>): Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>;
    }
}
