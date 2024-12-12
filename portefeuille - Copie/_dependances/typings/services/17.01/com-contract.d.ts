
declare module myway.comContract {
    var app: any;
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
        verifierEligibiliteSAGSEDComplet(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, listeTitulaires: Array<ContractualisationActe.Modeles.ITitulaire>): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
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
        codeEtablissementFinancier: string;
        numeroEntiteTitulaire: string;
        codeCanal: string;
        codeModeMiseGestion: string;
        codeTypeMarcheEntreprise: string;
        listeActeSecondaires?: Array<string>;
        listeModeOperationsFinanciere: Array<string>;
    }
    interface ITitulaire {
        numeroPersonne: string;
        adresseMail?: string;
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * Cette classe permettant de présenter les messages d'erreur que le service contractualisationActe peut retourner.
     * @author S0076222
     * @version 16.09
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
        private messageErreur;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
    }
}

declare module myway.comContract.signataire {
    class ListeDesignatairesController {
        private $scope;
        private $filter;
        private $q;
        private serviceAgentExtended;
        private signataireService;
        private PRECISION_SIGNATAIRE_MINLENGTH;
        private MESSAGE_ERREUR_PRECISION_SIGNATAIRE_REQUIRED;
        private MESSAGE_ERREUR_PRECISION_SIGNATAIRE_MINLENGTH;
        private MESSAGE_ERREUR_SERVICE_REST;
        private CHANGED_EVENTNAME;
        private donneesEntree;
        private open;
        private ngModel;
        private messageErreur;
        private signataireReponse;
        private autreSignataire;
        private precisionSignataire;
        private chargement;
        private showCapaciteComplete;
        private afficheChampPrecision;
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
        private onCheck(index, typeSignataire);
        private onCheckAutre(isCoche);
        private onChangePrecisionSignataire();
        private ajoutSignataireNgModel(personne, typeSignataire);
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
        private setErreurMinMax(message?);
        private setErreurServiceRest(message?);
        private buildOutputMessageErreur();
    }
}

declare module myway.comContract.signataire {
}

declare module myway.comContract.signataire {
    class SignataireService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        private communService;
        protected signatairesRestUrl: string;
        protected codeEtablissement: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, communService: CommunService);
        getSignataires(data: modeles.ISignataireInput): ng.IPromise<modeles.ISignataireReponse>;
        protected recupererSignataires(signataireInput: modeles.ISignataireInput): ng.IPromise<modeles.ISignataireReponse>;
        private filtrerPersonneValideSignature(personnes);
        private orderByNom(personnes);
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
    }
}

declare module myway.comContract.ContractualisationActe {
    /**
     * ActeGestionFactory est un factory permet de produire le modele IActeGestion
     * afin de consommer la ressource REST ContractualisationActe.
     * @author S0076222
     * @version 16.09
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
         * @ngdoc method
         * @name createSignataireActeFromSignataire
         * @description
         * Permet de créer un objet de type Modeles.ISignataireActe
         * @returns {Modeles.ISignataireActe}
         */
        createContractualisationActe(indicateurPapier: boolean, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, libelleNonEligibilite: string, listeMateriels: Array<Myway.Ressource.ContractualisationActe.IMateriel>): Myway.Ressource.ContractualisationActe.IContractualisationActe;
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
        create(acte: Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, indicateurAgenceDeployee: boolean, indicateurCaisseAuto: boolean, listeMateriels: Array<Myway.Ressource.ContractualisationActe.IMateriel>, listeTitulaires: Array<Modeles.ITitulaire>): Myway.Ressource.ContractualisationActe.IContractualisationActeInput;
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
