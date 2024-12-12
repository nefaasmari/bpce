
declare module myway.comContract {
    var app: any;
}

declare module myway.comContract.signataire.filters {
}

declare module myway.comContract.signataire.filters {
}

declare module myway.comContract.signataire.filters {
}

declare module myway.comContract.filters {
}

declare module myway.comContract {
    /**
     * @author S0076222
     */
    interface IActeReprise {
        codeActeGestion: string;
        codeCanal: string;
        numeroEntiteTitulaire: string;
        codeTypeMarcheEntreprise: string;
        codeModeMiseEnGestion: string;
        indicateurPapier?: boolean;
        indicateurDossierIDNExistant?: boolean;
        referenceOffre: string;
        referenceContrat: string;
        referenceContratCarte?: string;
        referenceActeProducteur?: string;
        codeTypeProduit: string;
        identifiantActeIDN: string;
        listeActeSecondaires: Array<string>;
        listeSignataires: Array<myway.comContract.modeles.ISignataire>;
        listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>;
        libelleActe: string;
        codeGuichet?: string;
        identifiantAgent?: string;
        referenceEDSExterneClient: string;
        referenceEDSInterneClient: string;
        nbPersonneEntiteTitulaire: number;
        acteGestionCompteSupport: string;
        codeEntite?: string;
        numeroOffreVMC?: string;
        typeProfessionnel?: string;
        identifiantActeExterne?: string;
        /**
         * Identifiant Porteur carte (pour les professionnel)
         */
        identifiantPorteurCarte?: string;
        contratExterne?: string;
    }
}

declare module myway.comContract.modeles {
    class CodeTypePersonne {
        static PHYSIQUE: string;
        static MORALE: string;
    }
    class TypeLienPersonne {
        static GESTIONNAIRE_MESURE_PROTECTION: string;
    }
    interface ISignataire {
        numeroPersonne: number;
        adresseMail?: string;
        rang: number;
        role: TypeSignataire;
        nomFamille: string;
        prenom: string;
        moyenAuthentificationICG?: string;
        numeroTelephonePortable?: string;
        infoComplementaire?: string;
        civiliteSignataire?: string;
        numUsagerBAD?: string;
        identifiantPersonneEnLien?: number;
    }
    interface IProduitService {
        codeTypeProduitService: string;
        identifiantProduitService: number;
    }
    interface ISignataireInput {
        identifiantEntiteTitulaire?: number;
        codeCanal: string;
        codeActeGestion?: string;
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
        codeEtablissement?: string;
        isPro?: boolean;
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
        referenceIdentite?: string;
        montantAutorisationSignataire?: number;
        identifiantPersonneEnLien?: number;
        rolePersonneEnLien?: number;
    }
    interface ISignatairePro extends ISignataireComplet {
        isSelectionne?: boolean;
        isSelectionnable?: boolean;
        disabled?: boolean;
        checked?: boolean;
        montantAutorisationSignataire?: number;
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
        DELEGATAIRE = 5,
        SIGNATAIRE_LEGAL = 6,
        VISA_COLLABORATEUR = 7,
        GESTIONNAIRE_MESURE_PROTECTION = 11,
        REPRESENTANT_LEGAL_PRO = 12,
    }
    enum TypeSignatairePro {
        TITULAIRE = 1,
        REPRESENTANT_LEGAL = 2,
        SIGNATAIRE_LEGAL = 3,
        DELEGATAIRE = 4,
        MANDATAIRE = 5,
        AUTRE = 99,
    }
    enum CodeRoleDossierVente {
        TITULAIRE = 1,
        REPRESENTANT_LEGAL = 2,
        EMPRUNTEUR = 3,
        Co_EMPRUNTEUR = 4,
        Co_TITULAIRE = 5,
        CAUTION = 6,
        MANDATAIRE = 7,
        AUTRE = 8,
        DELEGATAIRE = 9,
        SIGNATAIRE_LEGAL = 10,
        GESTIONNAIRE_MESURE_PROTECTION = 11,
        REPRESENTANT_LEGAL_PRO = 12,
    }
    const acteGestionETutelle: string[];
}

declare module myway.comContract {
    /**
     * @author S0006664
     */
    interface IMultiDossiersNumeriques {
        codeCanal: string;
        codeApplication: string;
        listeDossiersNumeriques: Array<IDossierNumerique>;
        listeSignataires: Array<ISignataire>;
        listeMateriels?: Array<Myway.Ressource.ContractualisationActe.IMateriel>;
        etatSignature: string;
        modeSignature: string;
        idTransactionIcg: string;
        isDeployeMySign?: boolean;
        isDeployeBulleConfiance?: boolean;
        isDernier?: boolean;
        /**
         * Code du Processus Metier
         */
        codeProcessusMetier?: string;
    }
    interface IDossierNumerique {
        libelleActe: string;
        codeActeGestion: string;
        codeGuichet: string;
        listeActesSecondaires: Array<string>;
        codeRemiseCG: string;
        referenceOffre: string;
        referenceContratCarte: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        identifiantPorteurCarte: string;
        nbPersonneEntiteTitulaire: number;
        codeTypeProduit: string;
        identifiantDossierVente: string;
        identifiantAgent: string;
        numeroEntiteTitulaire: string;
        referenceEDSInterneClient: string;
        referenceEDSExterneClient: string;
        acteGestionCompteSupport: string;
        identifiantDossierNumerique: string;
        listeTitulaire: Array<ITitulaireDossierNumerique>;
        listeSignataire: Array<ISignataireDossierNumerique>;
        listeDocumentsAProduire: Array<Myway.Ressource.ContractualisationActe.IDocumentAProduire>;
        codeModeMiseEnGestion: string;
        codeTypeMarcheEntreprise: string;
        typeProfessionnel: string;
        listeDossierClasseurClient?: Array<string>;
        isEligibleRegroupement?: boolean;
        contratExterne?: string;
        etatDossier?: string;
    }
    interface ISignataire {
        identifiant: string;
        nom: string;
        prenom: string;
        civilite: string;
        adresseMail: string;
    }
    interface ITitulaireDossierNumerique {
        identifiant: string;
        nom: string;
        prenom: string;
        civilite: string;
        adresseMail: string;
        designation?: string;
    }
    interface ISignataireDossierNumerique {
        identifiant: string;
        nom: string;
        prenom: string;
        civilite: string;
        adresseMail: string;
        isDocsSignesEnvoyesSurMSI?: boolean;
        isCFNActif?: boolean;
        designation?: string;
        isChecked?: boolean;
    }
    interface ISignatairesPanier {
        groupe: string;
        dossiers: Array<IDossierNumerique>;
        position: number;
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
        private static CLASS_NAME;
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
     * @author S0006664
     */
    class ContractualisationActeService {
        private serviceAgentExtended;
        private $q;
        private signatureElectroniqueService;
        private caisseautomatique;
        private deploiementSu1pService;
        private static CLASS_NAME;
        static $inject: string[];
        private listeMateriels;
        private indicateurAgenceDeployeeSAG;
        private indicateurCaisseAuto;
        private libelleNonEligibilite;
        private motifNonEligibiliteSAGSED;
        private isEligibileVisaCollaborateur;
        /**
         * @constructor
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, signatureElectroniqueService: myway.comContract.Services.SignatureElectroniqueService, caisseautomatique: myway.comCaisseAuto.CaisseAutomatique, deploiementSu1pService: myway.comContract.Services.DeploiementSu1pService);
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
        verifierEligibiliteSAGSEDReduit(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, surchargeNonEligibilite?: boolean): ng.IPromise<Myway.Ressource.ContractualisationActe.IEligibiliteSAGSED>;
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
        verifierEligibiliteSAGSEDComplet(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, listeTitulaires: Array<ContractualisationActe.Modeles.ITitulaire>, surchargeNonEligibilite: boolean, libelleMotifNonEligibProducteur?: string): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
        /**
         * @ngdoc method
         * @name getMateriels
         * @description
         * Permettant de récuperer la liste des périphériques connectés
         * @returns {ng.IPromise<Array<ContractualisationActe.Modeles.IMateriel>}
         */
        private getMateriels(isDeployeBulleConfiance?);
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
        isPreEligibiliteNiveauZero(acte: ContractualisationActe.Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, surchargeNonEligibilite?: boolean, isDeployeBulleConfiance?: boolean): ng.IPromise<boolean>;
        /**
         * @ngdoc method
         * @name getListeMaterielFromListeTabletteSignature
         * @description
         * Cette méthode permet de construire une array de Myway.Ressource.ContractualisationActe.IMateriel
         * à partir de MyWay.Services.Mobilite.ITabletteSignature[] renvoyé par le socle technique
         * @returns {boolean}
         */
        private getListeMaterielFromListeTabletteSignature(listeTabletteSignature);
        /**
         * @ngdoc method
         * @name isExisteMaterielCaisseAuto
         * @description
         * Cette méthode permet de vérifier si l’un des éléments du tableau du périphérique
         * est un matériel de type « caisse auto ».
         * @returns {boolean}
         */
        private isExisteMaterielCaisseAuto(listeMateriels);
        private isExisteSignataireVisaCollaborateur(listeSignataires);
        /**
         * @ngdoc method
         * @name isModeOperationFinanciereEspece
         * @description
         * isModeOperationFinanciereEspece est une méthode permettant de vérifier
         * L'existance du mode opération financière du type espèce.
         *
         * @param List<OperationFinanciere> listeOperationFinanciere
         * @return true, si il existe un matériel de type caisse auto, false sinon.
         */
        private isModeOperationFinanciereEspece(listeModeOperationFinanciere);
        /**
         * @ngdoc method
         * @name isExisteSignataireMandataire
         * @description
         * Cette méthode permet de vérifier si l’un des signataire est un
         * mandataire. Un signataire est mandataire ssi son codeRoleSignataire=’M’.
         *
         * @param Array<modeles.ISignataire>
         * @return true, Si au moins 1 signataire de la liste est mandataire, false
         *         sinon.
         */
        private isExisteSignataireMandataire(listeSignataire);
        /**
         * @ngdoc method
         * @name isExisteSignataireAutre
         * @description
         * isExisteSignataireAutre est une méthode permettant de vérifier s'il
         * existe un signataire de type "Autre" dans la liste de signataires.
         *
         * @param Array<modeles.ISignataire>
         * @return  true, Si au moins 1 signataire de la liste est de type autre, false
         *         sinon.
         */
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
    /**
     * @author S0006664
     */
    class DeploiementSu1pService {
        private serviceAgentExtended;
        private $q;
        private static CLASS_NAME;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        isDeployeSEMD(codeEtablissement: string, codeActeGestion: string, codeCanal: string, typeProfessionnel: string): ng.IPromise<boolean>;
        isDeployeMYSIGN(codeEtablissement: string, codeActeGestion: string, codeCanal: string, typeProfessionnel: string, isSagOpc?: boolean): ng.IPromise<boolean>;
        isDeployeBulleConfiance(codeEtablissement: string, codeActeGestion: string, codeCanal: string, typeProfessionnel: string, isDeployeMySign: boolean): ng.IPromise<boolean>;
        private filtreSU1PParDates(datas);
        private getModeContractualisation(codeCanal, typeProfessionnel, isSagOpc?);
        /**
         * @ngdoc method
         * @name controlerTableSU1P
         * @param codeEtab
         * @description
         * Ce contrôle permet de savoir si FAFGXML et/ou FAFG est paramétré sur l'établissement dans la SU1P
         * @returns {ng.IPromise<number>}
         */
        controlerTableSU1P(codeEtab: string): ng.IPromise<myway.comContract.SAGOPC.Modeles.IDeploiementSAGOPC>;
        /**
         * Renvoie la table délocalisée SU1P
         */
        private getTableSU1P(codeEtablissement);
    }
}

declare module myway.comContract.Services {
    /**
     * DossierCanalNumeriqueService est un service angularJs a pour objectif d'appeler la ressource
     * dossierCanalNumerique afin de créer un dossier canal numérique électronique.
     * @author S0076222
     */
    class DossierCanalNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        private dossierCanalNumeriqueOutput;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode postCreationDossierCanalNum consomme la ressource /classeurclient/v1/dossierCanalNumerique/
         * pour créer le classeur client numérique.
         * @param codeActeGestion
         * @param listeActeSecondaires
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param acteGestionCompteSupport
         * @param compte
         */
        postCreationDossierCanalNum(codeActeGestion: string, listeActeSecondaires: Array<string>, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, acteGestionCompteSupport: string, compte: string, identifiantActeExterne: string): ng.IPromise<boolean>;
        /**
         * La méthode getIdOffre permet de retourner referenceOffre ou 0 (zéro) si referenceOffre est null
         * @param referenceOffre
         */
        private getIdOffre(referenceOffre);
        /**
         * La méthode getCodeTypeEDS retourne le typeEdsRattachement.
         * @param authenficationInfo
         */
        private getCodeTypeEDS(authenficationInfo);
    }
}

declare module myway.comContract.Services {
    /**
     * DossierContratServi est un service angularJs a pour objectif d'appeler la ressource
     * dossierContratServi.
     * @author S0076222
     */
    class DossierContratServiService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * * La méthode postCreationDossierCanalNum consomme la ressource /classeurclient/v1/dossierCanalNumerique/
         * @param codeActeGestion
         * @param listeActeSecondaires
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param acteGestionCompteSupport
         * @param compte
         * @param identifiantActeExterne
         * @param modeSignature
         * @param dossierWithDocuments
         */
        postDossierContratService(codeActeGestion: string, listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>, listeActeSecondaires: Array<string>, identifiantDossierNumerique: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, acteGestionCompteSupport: string, referenceContrat: string, identifiantActeExterne: string, modeSignature: string, dossierWithDocuments: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): ng.IPromise<boolean>;
        /**
         * getModeContract retoune le modeContract selon le codeCanal
         * @param codeCanal
         */
        private getCodeModeContractualisation(codeCanal);
        private mapListeDocuments(codeActeGestion, listeDocuments);
        private mapTypeAttributaireToCodeTypeAttributaire(typeAttrib);
    }
}

declare module myway.comContract.Services {
    /**
     * Le service DossierContratService  a pour objectif d'appeler la ressource
     * dossierContrat afin de créer un dossier classeur client papier.
     * @author S0076222
     */
    class DossierContratService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Cette méthode consomme la ressource /classeurclient/v1/dossierContrat/
         * pour créer le classeur client papier
         * @param acteGestion
         * @param indicateurPapier
         * @return { ng.IPromise<boolean> }
         */
        putDossierContrat(codeEtablissementFinancier: string, codeModeContractualisation: string, codeActeGestion: string, codeGuichet: string, numeroEntiteTitulaire: string, referenceContrat: string, referenceEDSInterneClient: string, referenceEDSExterneClient: string, listeActeSecondaires: Array<string>, nbPersonneEntiteTitulaire: number, identifiantActeExterne: string): ng.IPromise<boolean>;
    }
}

declare module myway.comContract.Services {
    /**
     * ContractualisationActeService est un service angularJs a pour objectif de consommer les ressources REST
     * dossiernumerique-v3/dossierNumerique et dossiernumerique-v3/signature.
     * @author S0006664
     */
    class DossierNumeriqueService {
        private serviceAgentExtended;
        private $q;
        private static CLASS_NAME;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        private filtreSU1PParDates(datas);
        private isDeployeMYSIGN(codeEtablissement, codeActeGestion, codeCanal);
        private getModeContractualisation(codeCanal);
        consulterDossierNumerique(idDossierNumerique: string, codeApplication: string, avecDocuments: boolean, avecReferences: boolean, avecEmplacementsSignatures: boolean, avecBinaires: boolean, avecSignataires: boolean, avecTitulaires: boolean): ng.IPromise<Myway.Ressource.DossierNumerique.V3.IDossierNumerique>;
        getEtatDossierNumerique(idDossierNumerique: string, codeApplication: string): ng.IPromise<string>;
        reserverDossierNumerique(dossierNumerique: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): ng.IPromise<Myway.Ressource.DossierNumerique.V3.IDossierNumerique>;
        /**
         * évalue l'éligibilité du dossier numérique à MySign par:
         * - son champ isDeployeMySign
         * - en la recalculant avec la méthode isDeployeMYSIGN
         * - par son champ isOffreMixte
         * @param dossierNumerique
         */
        alimenterDossierNumerique(dossierNumerique: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): ng.IPromise<Myway.Ressource.DossierNumerique.V3.IDossierNumerique>;
        annulerDossierNumerique(idDossierNumerique: string, codeApplication: string, referenceActe?: string, typeReferenceActe?: string): ng.IPromise<boolean>;
        basculerVersDossierPapier(idDossierNumerique: string, codeApplication: string, isDeployMySign?: boolean): ng.IPromise<boolean>;
        createSignature(initierSignatureInput: Myway.Ressource.Signature.V3.IInitierSignatureInput): ng.IPromise<Myway.Ressource.Signature.V3.ISignature>;
        createSessionSignatureElectronique(signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique): ng.IPromise<Myway.Ressource.Signature.V3.ISignatureElectronique>;
        updateSessionSignatureElectronique(signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique): ng.IPromise<Myway.Ressource.Signature.V3.ISignatureElectronique>;
        envoyerMail(mailInput: Myway.Ressource.Signature.V3.IMailInput): ng.IPromise<Myway.Ressource.Signature.V3.IMailOutput>;
        annulerTransactionIcg(idTransactionIcg: string, annulerDossiersConcernes: boolean, idPersonne: string, codeAction: string): ng.IPromise<boolean>;
    }
}

declare module myway.comContract.Services {
    /**
     * Le service TerminerActeVadService a pour objectif d'appeler la ressource
     * PUT documentsAttributaire afin de finaliser le contrat.
     * @author S0076222
     */
    class MajDocumentsAttributaireService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode putDocumentsAttributaire consomme la ressource /dossiernumerique/v3/dossiernumerique/documentsAttributaire
         * afin de mettre à jour le dossier dossierNumerique
         * @param documentsAttributaireInput
         * @return {ng.IPromise<Myway.Ressource.DossierNumerique.V3.IDocumentsAttributaireInput>}
         */
        putDocumentsAttributaire(documentsAttributaireInput: Myway.Ressource.DossierNumerique.V3.IDocumentsAttributaireInput): ng.IPromise<Boolean>;
    }
}

declare module myway.comContract.Services {
    /**
     * Le service RecupererDocumentsAttributaireService a pour objectif d'appeler soit la ressource
     * getDocumentsAttributaire
     * @author S0076222
     */
    class RecupererDocumentsAttributaireService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        private static VENTE_VPC_ID_ATTRIBUTAIRE;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode getDocumentsAttributaire consomme la ressource /dossiernumerique/v3/dossierNumerique/documentsAttributaire
         * afin de récuperer les documents d'un dossier numérique
         * @param idDossierNumerique
         * @param codeApplication
         * @returns {ng.IPromise<Myway.Ressource.ConsultationIdn.IRecupererDocumentsIdntAttributaireOutput>}
         */
        private getDocumentsAttributaire(idDossierNumerique, codeApplication);
        /**
         * La méthode recupererDocumentsAttributaires appelle la méthode getDocumentsAttributaire
         * afin de récuperer
         * @param idDossierNumerique
         * @param codeApplication
         * @returns {ng.IPromise<Array<Myway.Ressource.DossierNumerique.V3.IDocumentAttributaire>>}
         */
        recupererDocumentsAttributaires(idDossierNumerique: string, codeApplication: string): ng.IPromise<Array<Myway.Ressource.DossierNumerique.V3.IDocumentAttributaire>>;
    }
}

declare module myway.comContract.signataire {
    /**
     * Permet de filtrer la colonne Qualité du tableau Signataires Pro
     * Les valeurs des rôles étant numériques 1:TITULAIRE 2:REGLEMENTAIRE
     * La fonction converti en string d'après le filtre roleSignataire
     * puis compare avec les valeurs entrées dans le filtre
     *
     */
    class RoleComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module myway.comContract.Services {
    /**
     * CommonSagService est un service angularJs a pour objectif d'exposer les services
     * lié à la SAGOPC afin de vérifier
     * l'éligibilité à la signature électronique .
     * @author S0078909
     */
    class SagOpcService {
        private serviceAgentExtended;
        private $q;
        private deploiementSu1pService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, deploiementSu1pService: DeploiementSu1pService);
        /**
         * @ngdoc method
         * @name verifierEligibiliteSAGOPC
         * @description
         * Permettant de vérifier l'éligibilité pour la SAG OPC
         * @param identifiantPersonne: number, codeActeGestion: string,
         * libelleActeGestion: string, codeCanal: string,
         * codeModeMiseGestion: string, codeTypeMarcheEntreprise: string,
         * signataires: Array<SAGOPC.Modeles.ISignataireSagOpc>
         * @returns {ng.IPromise<SAGOPC.Modeles.IDonneesSAGOpc}
         */
        verifierEligibiliteSAGOPC(identifiantPersonne: number, codeActeGestion: string, libelleActeGestion: string, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string, signataires: Array<SAGOPC.Modeles.ISignataireSagOpc>, operationsFinancieres: Array<SAGOPC.Modeles.IOperationsFinancieres>, typeBordereau: OPC.Enums.TypeBordereau, donneesBordereau: SAGOPC.Modeles.IDonneesBordereau): ng.IPromise<SAGOPC.Modeles.IDonneesSAGOpc>;
        /**
         * @ngdoc method
         * @name setDocXmlPdf
         * @description
         * Permettant de setter isdocxml des docs du mode contractualisation FAFG
         * Cet indicateur permet au process métier de savoir s'il doit produire les docs en xml ou pdf
         * @returns {Array<Myway.Ressource.DocumentParametre.IDocumentActe>}
         */
        private setDocXmlPdf(listeDocumentActe, typeDocumentAProduire);
        /**
         * @ngdoc method
         * @name setTypeDocumentAProduireSelonSU1P
         * @description
         * Permettant de setter la variable typeDocumentAProduire en fonction de ce qui est détecté dans la SU1P
         * sU1PCase = 0 ==> Pas de code FAFGXML ou FAFG dans la SU1P
         * sU1PCase = 1 ==> FAFGXML présent
         * sU1PCase = 2 ==> FAFGXML absent mais FAFG présent
         * @returns {Array<Myway.Ressource.DocumentParametre.IDocumentActe>}
         */
        private setTypeDocumentAProduireSelonSU1P(resultcontractualisationParam, isDeployeSAGOpc, isSensibiliteBordereauPossible);
        /**
         * @ngdoc method
         * @name appelDocParametreEtCreerDonneesSagOpc
         * @description
         * Permettant d'appeler documentparametre et créé un objet donneesSAGOpc
         * @returns {SAGOPC.Modeles.IDonneesSAGOpc}
         */
        private appelDocParametreEtCreerDonneesSagOpc(codeActeGestion, libelleActeGestion, codeCanal, codeModeMiseGestion, codeTypeMarcheEntreprise, listemodeContractualisations, isEligible, identifiantPersonne, signataires, operationsFinancieres, typeBordereau, donneesBordereau, isDeployeMySign, isDeployeBulleConfiance, listeMateriels);
        /**
         * @ngdoc method
         * @name createActeSAGOPC
         * @description
         * Permettant de créé un objet donneesSAGOpc
         * @returns {SAGOPC.Modeles.IActeSAGOPC}
         */
        private createActeSAGOPC(codeActeGestion, libelleActeGestion, codeCanal, codeModeMiseGestion, codeTypeMarcheEntreprise, listemodeContractualisations, listeDocumentActe);
        /**
         * @ngdoc method
         * @name createDonneesSagOpc
         * @description
         * Permettant de créé un objet donneesSAGOpc
         * @returns {SAGOPC.Modeles.IDonneesSAGOpc}
         */
        private createDonneesSagOpc(isEligible, identifiantPersonne, signataires, operationsFinancieres, typeBordereau, donneesBordereau, acteSAGOPC, isDeployeMYSIGN, isDeployeBULLCONF, listeMateriels);
        /**
         * @ngdoc method
         * @name controleEligibiliteSuiteContractualisationParametre
         * @description
         * Permettant de controler l'eligibilite suite au retour de contractualisationparametre
         * @returns {boolean}
         */
        private controleEligibiliteSuiteContractualisationParametre(resultcontractualisationParam);
        /**
         * @ngdoc method
         * @name isSAGOPC
         * @description
         * Permettant de savoir si SAGOPC est paramétré en SU1P
         * @returns {ng.IPromise<boolean>}
         */
        private isSAGOPC(isDeployeSAGOpc, isSensibiliteBordereauPossible);
        getDocumentParametre(actes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string): ng.IPromise<Array<Myway.Ressource.DocumentParametre.IDocumentActe>>;
        /**
         * @ngdoc method
         * @name getFluxBinaire
         * @description
         * Permettant de récuperer le flux binaire d'un document
         * @returns {ng.IPromise<string>}
         */
        getFluxBinaire(donnees: myway.comContract.SAGOPC.Modeles.IDonneesGCEDOC): ng.IPromise<string>;
        /**
         * @ngdoc method
         * @name verifierParamsObligatoires
         * @description
         * Vérifier que les paramètres en entrée obligatoires soient bien renseignés
         * @returns {ng.IPromise<boolean>}
         */
        verifierParamsObligatoires(identifiantPersonne: number, codeActeGestion: string, libelleActeGestion: string, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string, signataires: Array<SAGOPC.Modeles.ISignataireSagOpc>, operationsFinancieres: Array<SAGOPC.Modeles.IOperationsFinancieres>): boolean;
        /**
         * @ngdoc method
         * @name getMateriels
         * @description
         * Permettant de récuperer la liste des périphériques connectés
         * @returns {ng.IPromise<Array<ContractualisationActe.Modeles.IMateriel>}
         */
        private getMateriels(isDeployeBulleConfiance?);
    }
}

declare module myway.comContract.Services {
    class SignatureElectroniqueService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        isBasculeSAG(acteGestion: string): ng.IPromise<boolean>;
        private filtreSU1PParDates(datas);
        private caissesBasculeesSAG001(datas, objetGestionPrincipal);
    }
}

declare module myway.comContract.Services {
    /**
     * @author S0076222
     */
    class VenteVpcService {
        private serviceAgentExtended;
        private $q;
        private recupererDocumentsAttributaireService;
        private majDocumentsAttributaireService;
        private dossierContratService;
        private dossierCanalNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        private venteVpcContexteModele;
        private static CODE_APPLICATION_CONTELEC;
        private static INDICATEUR_CLASSEUR_CLIENT;
        /**
         * @constructor
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, recupererDocumentsAttributaireService: RecupererDocumentsAttributaireService, majDocumentsAttributaireService: MajDocumentsAttributaireService, dossierContratService: DossierContratService, dossierCanalNumeriqueService: DossierCanalNumeriqueService);
        /**
         * La méthode finaliserVenteVpc a pour vocation de terminer un dossier de signature électronique initié en mode VPC
         * @param finaliserVenteVpcInput
         */
        finaliserVenteVpc(finaliserVenteVpcInput: myway.comContract.VenteVpc.Modeles.IFinaliserVenteVpcInput): ng.IPromise<myway.comContract.VenteVpc.Modeles.IFinaliserVenteVpcOutput>;
        /**
         * controlerDonneesEnEntree permet de véifier que les données obligatoires
         * sont bien identfiées
         * @param finaliserVenteVpcInput
         */
        private controlerDonneesEnEntree(finaliserVenteVpcInput);
        /**
         * La méthode mettreAJourDossier appelle le service putDocumentsAttributaire
         * afin de mettre à jour le dossier.
         * @param finaliserVenteVpcInput
         * @param listeDocumentIdntAttributaire
         */
        private mettreAJourDossier(finaliserVenteVpcInput, listeDocumentsAttributaire);
        /**
         * La méthode createClasseurClient permettant de créer le classeur client
         * @param finaliserVenteVpcInput
         */
        private createClasseurClient(finaliserVenteVpcInput);
        /**
         * createDocumentsAttributaireInput permet de créer un objet de type Myway.Ressource.DossierNumerique.V3.IDocumentsAttributaireInput
         * @param idDossierNumerique
         * @param codeApplication
         * @param listeDocumentsAttributaire
         * @param codeActionDossierVente
         */
        private createDocumentsAttributaireInput(idDossierNumerique, codeApplication, referenceContrat, listeDocumentsAttributaire, codeActionDossierVente);
        /**
         * La méthode createClasseurClientPapier appelle le service putDossierContrat
         * afin de créer le classeur client papier
         * @param finaliserVenteVpcInput
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         */
        private createClasseurClientPapier(finaliserVenteVpcInput, referenceEDSInterneClient, referenceEDSExterneClient);
        /**
         * La méthode createClasseurClientNumerique appelle le service postCreationDossierCanalNum
         * afin de créer le classeur client numérique
         * @param finaliserVenteVpcInput
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         */
        private createClasseurClientNumerique(finaliserVenteVpcInput, referenceEDSInterneClient, referenceEDSExterneClient, modeSignature);
        private mapListeDocuments(codeActeGestion, listeDocuments, dossierNumerique);
        private mapTypeAttributaireToCodeTypeAttributaire(typeAttrib);
        postDossierContratService(codeActeGestion: string, listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>, listeActeSecondaires: Array<string>, identifiantDossierNumerique: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, acteGestionCompteSupport: string, referenceContrat: string, identifiantActeExterne: string, modeSignature: string, dossierWithDocuments: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): ng.IPromise<boolean>;
        private getCodeModeContract(codeCanal);
        consulterDossierNumerique(idDossierNumerique: string, codeApplication: string, avecDocuments: boolean, avecReferences: boolean, avecEmplacementsSignatures: boolean, avecBinaires: boolean, avecSignataires: boolean, avecTitulaires: boolean): ng.IPromise<Myway.Ressource.DossierNumerique.V3.IDossierNumerique>;
        private isMySign(identifiantDossierNumerique);
        /**
         * La méthode getCodeModeContractualisation permettant de déterminer le codeModeContractualisation
         * en fonction du codeCanal
         * @param codeCanal
         */
        private getCodeModeContractualisation(codeCanal);
        /**
         * La méthode getNodapeTitulaire permet de retourner le NODAPE du titulaire
         */
        private getNodapeTitulaire(listeTitulairesActe);
    }
}

declare module myway.comContract.sagOpc.utils {
    /**
     * Service de manipulation des binaires.
     */
    class BinaryUtils {
        /**
         * Renvoie une chaine encodée en base64 à partir de n'importe quel type
         */
        static toBinary(data: any): string;
        /**
         * Renvoie un objet à partir d'une chaine encodée en base64
         */
        static binaryToObject<T>(data: string): T;
        /**
         * Renvoie une chaine à partir d'une chaine encodée en base64
         */
        static binaryToString(data: string): string;
    }
}

declare module myway.comContract {
    class Loggers {
        /**
         * On feature branches :
         * set 'current' version Major.minor.fix-SNAPSHOT
         * to Major.minor.fix.FEATURE_number_id-SNAPSHOT
         * :(
         * Releasing is done manually beacause we are on TFS
         * and can not use node-release yet !
         * @private
         */
        static APP_VERSION: string;
        /**
         * Utilitaire pour les traces.
         * Alimentation de la console : passe les objets dans le flux standard,
         * afin de bénéficier de la représentation interactive en arbre de propriétés depuis la console DEBUG du navigateur.
         * Reçoit un Logger myWay en argument afin d'alimenter également les indexes elasticsearch: alimentation a posteriori
         * via Kibana.
         *
         * @param loggerName nom de la classe appelante, exemple: MyWay.Contractualisation.LivretAService.
         * @param methodeName nom de la méthode souhaitant tracer.
         * @param message le message d'information, contenant les tokens '%o' pour positionner les objets dans le message rendu.
         * @param objects les objets passés dans l'ordre attendu par/avec le message lié
         */
        static info(loggerName: string, methodName: string, message: string, ...objects: any[]): void;
        static warn(loggerName: string, methodName: string, message: string, ...objects: any[]): void;
        static error(loggerName: string, methodName: string, message: string, ...objects: any[]): void;
        private static kibanaLogger(loggerName);
        private static getLogMessage(loggerName, methodName, message);
        static parseAndStringify(message: string, ...objects: any[]): string;
    }
}

declare module myway.comContract {
    /**
     * Classe pour centraliser les appels REST, interface avec la lib myWay
     * et principalement le composant serviceAgentExtended.
     * Permet d'abstraire la complexité de construction des objets utilisés par
     * le composant myWay
     */
    class RestClient<T> {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        get(url: string, params: any): ng.IPromise<T>;
        private getRequestSettings();
    }
}

declare module myway.comContract.sagOpc.utils {
    interface IXMLNode {
        value: string;
        toString: (level?: number) => void;
    }
    class XMLBuilder {
        private rootObject;
        private xmldec;
        static create(name: string, attributes?: {
            [name: string]: any;
        }): XMLElement;
        constructor(name: string, attributes?: {
            [name: string]: any;
        });
        toString(): string;
    }
    class XMLElement implements IXMLNode {
        builder: XMLBuilder;
        parent: XMLElement;
        name: string;
        value: string;
        children: IXMLNode[];
        attributes: {
            [name: string]: XMLAttribute;
        };
        constructor(parent: XMLElement | XMLBuilder, name: string, attributes?: {
            [name: string]: any;
        });
        element(name: string, attributes?: {
            [name: string]: any;
        }, text?: any): XMLElement;
        attribute(attrs: {
            [name: string]: any;
        }): XMLElement;
        attribute(name: string, value?: any): XMLElement;
        text(value: any): XMLElement;
        cdata(value: any): XMLElement;
        end(): string;
        document(): XMLBuilder;
        root(): XMLElement;
        toString(level?: number): string;
    }
    class XMLAttribute {
        name: string;
        value: string;
        constructor(parent: XMLElement, name: string, value: any);
        toString(): string;
    }
    class XMLDeclaration {
        version: string;
        encoding: string;
        standalone: string;
        constructor(version?: string, encoding?: string, standalone?: string);
        toString(level?: number): string;
    }
    class XMLText implements IXMLNode {
        value: string;
        constructor(parent: XMLElement, text: string);
        toString(level?: number): string;
    }
    class XMLCData implements IXMLNode {
        value: string;
        constructor(parent: XMLElement, data: string);
        toString(level?: number): string;
    }
    class XMLStringifier {
        static allowSurrogateChars: boolean;
        static convertAttKey: string;
        static convertPIKey: string;
        static convertTextKey: string;
        static convertCDataKey: string;
        static convertCommentKey: string;
        static convertRawKey: string;
        static convertListKey: string;
        static eleName(val: any): string;
        static eleText(val: any): string;
        static cdata(val: any): string;
        static comment(val: any): string;
        static raw(val: any): string;
        static attName(val: any): string;
        static attValue(val: any): string;
        static insTarget(val: any): string;
        static insValue(val: any): string;
        static xmlVersion(val: any): string;
        static xmlEncoding(val: any): string;
        static xmlStandalone(val: any): string;
        static dtdPubID(val: any): string;
        static dtdSysID(val: any): string;
        static dtdElementValue(val: any): string;
        static dtdAttType(val: any): string;
        static dtdAttDefault(val: any): string;
        static dtdEntityValue(val: any): string;
        static dtdNData(val: any): string;
        static assertLegalChar(str: string): string;
        static elEscape(str: string): string;
        static attEscape(str: string): string;
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
        static CONTROLE_SIGNATAIRE_VISA_COLLABORATEUR: string;
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
    class CodeRoleSignataire {
        static TITULAIRE: string;
        static REPRESENTANT_LEGAL: string;
        static MANDATAIRE: string;
        static AUTRE: string;
        static VISA_COLLABORATEUR: string;
        static GESTIONNAIRE_MESURE_PROTECTION: string;
        static REPRESENTANT_LEGAL_PRO: string;
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
        typeProfessionnel?: string;
        identifiantAgentConseiller?: string;
        signatureAgentEmail?: myway.comContract.Enums.SignatureAgentEmailEnum;
        destinataireEmailConseiller?: myway.comContract.Enums.DestinataireEmailConseillerEnum;
        /**
         * code Famille Gestion Locale Contrat
         * Exemple : "OFFBAD" pour l'offre ordonance démat
         */
        codeFamilleGestionLocaleContrat?: string;
        /**
         * V20.03  Libelle du motif de non eligibilité à la signature élec envoyé par le producteur (pr l'instant crédit conso)
         */
        libelleMotifNonEligibProducteur?: string;
        remiseDocViaDossierPartage?: boolean;
        codeTypeSousMarcheDocEntreprise?: string;
        contratExterne?: string;
    }
    interface ITitulaire {
        numeroPersonne: string;
        adresseMail?: string;
        nom?: string;
        prenom?: string;
        civilite?: string;
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
        static CONTROLE_SIGNATAIRE_VISA_COLLABORATEUR: string;
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
        static PB_IS_DEPLOYEE_SEMD_MYSIGN: string;
        static CODE_CANAL_UNDEFINED: string;
        static CODE_MARCHE_UNDEFINED: string;
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
        static CONTROLE_SIGNATAIRE_VISA_COLLABORATEUR: string;
        static CONTROLE_SIGNATAIRE_MANDATAIRE: string;
        static CONTROLE_TROP_SIGNATAIRES: string;
        static OPERATIONS_FINANCIERES_VIDE: string;
        static RETOUR_CONTRACTUALISATION_VIDE: string;
        messageErreur: string;
        messageComplementaire: string;
        action: string;
        erreurMyWay: MyWay.Services.Erreur;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
        toString(): string;
    }
}

declare module myway.comContract.SAGOPC.Modeles {
    interface IActeSAGOPC {
        codeActeGestion: string;
        libelleActe: string;
        codeCanal: string;
        codeModeMiseGestion: string;
        codeTypeMarcheEntreprise: string;
        listeModeOperationsFinanciere: Array<ISignataireSagOpc>;
        listeModeContractualisation: Array<Myway.Ressource.ContractualisationParametre.IModeContractualisationActe>;
        listeDocumentsAProduire: Array<Myway.Ressource.DocumentParametre.IDocumentActe>;
        listeTitulairesActe: Myway.Ressource.ContractualisationActe.ITitulaireActe[];
        listeOperationFinanciere: IOperationFinanciere[];
        listeSignatairesActe: ISignataireActe[];
    }
    interface ISignataireSagOpc {
        numeroPersonne: string;
        adresseMailSign: string;
        codeRoleSignataire: string;
        identifiantJustificatifIdentite: string;
        rangSign: string;
        codeTypeSignataire: string;
    }
    interface IOperationFinanciere {
        /**
         * Numéro de personne (NODAP)
         */
        numeroPersonne: string;
        /**
         * Montant de l'opération
         */
        montantOperation: number;
        /**
         * Code devise de l'opération
         */
        codeDevise: string;
        /**
         * Libellé du client
         */
        libelleClientOperation: string;
        /**
         * Libellé du compte
         */
        libelleCompteOperation: string;
        /**
         * Date d'opération
         */
        dateOperation: Date;
        /**
         * Nature de l'opération
         */
        natureOperation: string;
    }
    interface ISignataireActe {
        /**
         * Identifiant personne
         */
        numeroPersonne: string;
        /**
         * Adresse mail du signataire
         */
        adresseMailSign: string;
        /**
         * Rang signataire
         */
        rangSign: number;
    }
}

declare module myway.comContract.SAGOPC.Modeles {
    interface IDonneesSAGOpc {
        indicateurPapier: boolean;
        identifiantPersonne: number;
        acte: IActeSAGOPC;
        signataires: Array<ISignataireSagOpc>;
        operationsFinancieres: Array<IOperationsFinancieres>;
        typeBordereau: TypeBordereau;
        donneesBordereau: IDonneesBordereau;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        isDeployeMySign?: boolean;
        isDeployeBulleConfiance?: boolean;
        listeMateriels?: Myway.Ressource.ContractualisationActe.IMateriel[];
    }
    interface IOperationsFinancieres {
        montant: string;
        codeDevise: string;
        libelleOperation: string;
    }
    interface IDonneesBordereau {
        libelleTitulaire: string;
        adresse: string;
        numeroCarte: string;
        donneesVirement?: IDonneesVirement;
        donneesEcheancier?: IDonneesEcheancier;
        donneesVirementInterne?: IDonneesVirementInterne;
    }
    interface IDonneesVirement {
        intituleVirement: string;
        montantAvecDevise: string;
    }
    interface IDonneesVirementInternational extends IDonneesVirement {
        intituleCompteDebite: string;
        motif: string;
        nomBeneficiaire: string;
        adresseBeneficiaire: string;
        compteBeneficiaire: string;
        bicSwiftBeneficiaire: string;
        compteBanqueBeneficiaire: string;
    }
    interface IDonneesVirementImmediat extends IDonneesVirement {
        intituleCompteDebite: string;
        motif: string;
        nomBeneficiaire: string;
        idBeneficiaire: string;
        adresseBeneficiaire: string;
        compteBeneficiaire: string;
        BicSwiftBeneficiaire: string;
        nomDoInitial: string;
        idDoInitial: string;
        nomBeneficiaireFinal: string;
        idBeneficiaireFinal: string;
        idDonneurOrdre: string;
        referenceDonneurOrdre: string;
        naturePaiement: string;
        categoriePaiement: string;
    }
    interface IDonneesEcheancier {
        intituleEcheancier: string;
    }
    interface IDonneesEcheancierVirementSEPA extends IDonneesEcheancier {
        periodicite: string;
        datePremiereEcheance: string;
        dateDerniereEcheance: string;
        dateEcheance: string;
        donneesVirementImmediat: IDonneesVirementImmediat;
        dateSuspension?: string;
        dateReactivation?: string;
    }
    interface IDonneesEcheancierVirementInternational extends IDonneesEcheancier {
        periodicite: string;
        datePremiereEcheance: string;
        dateDerniereEcheance: string;
        dateEcheance: string;
        donneesVirementInternational: IDonneesVirementInternational;
    }
    interface IDonneesVirementInterne {
        intituleOperationDebit: string;
        intituleVirementDebit: string;
        intituleCompteDebite: string;
        montantDebiteAvecDevise: string;
        soldeCompteDebite: string;
        intituleOperationCredit: string;
        intituleVirementCredit: string;
        intituleCompteCredite: string;
        montantCrediteAvecDevise: string;
        soldeCompteCredite: string;
    }
    class TypeBordereau {
        static OPERATION_FINANCIERE: string;
        static REMISE_CARTE_TEMPO: string;
        static REMISE_CARTE_BANCAIRE: string;
        static VISITE_COFFRE: string;
        static OPPOSITION_CARTE_BANCAIRE: string;
        static VIREMENT_IMMEDIAT: string;
        static VIREMENT_INTERNE: string;
        static VIREMENT_INTERNATIONAL: string;
        static ECHEANCIER_VIREMENT_SEPA: string;
        static ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static AVENANT_ECHEANCIER_VIREMENT_SEPA: string;
        static AVENANT_ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static CLOTURE_ECHEANCIER_VIREMENT_SEPA: string;
        static CLOTURE_ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static SUSPENSION_ECHEANCIER_VIREMENT_SEPA: string;
        static REACTIVATION_ECHEANCIER_VIREMENT_SEPA: string;
    }
    /**
     * Données GCEDOC
     */
    interface IDonneesGCEDOC {
        /**
         * Données d'impression
         */
        data: any;
        params: MyWay.Services.Impression.GenerationImpressionParams;
    }
    /**
     * Retour Eligibilite SU1P
     */
    interface IDeploiementSAGOPC {
        isDeployeSAGOpc: boolean;
        isSensibiliteBordereauPossible: boolean;
    }
}

declare module myway.comContract.SAGOPC.Modeles {
    class MotifIneligibilite {
        static CODE_CANAL_DIFF_FF: string;
        static MULTISIGNATAIRE: string;
        static AUCUNE_TABLETTE: string;
        static PAS_PARAMETRE_SU1P: string;
        static AUCUN_MODE_CONTRACT_FAFG: string;
        static STATUT_CONTRACT_K: string;
    }
}

declare module myway.comContract.VenteVpc.Modeles {
    /**
     * la classe VenteVpcContexteModele présente les données du contexte du service venteVpc
     * @author S0076222
     */
    class VenteVpcContexteModele {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables);
    }
}

declare module myway.comContract.VenteVpc.Modeles {
    /**
     * Cette classe permettant de présenter les messages erreur que le service vente vpc peut retourner.
     * @author S0076222
     */
    class VenteVpcMessageErreur {
        static FINALISER_VENTE_VPC_INPUT_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static CODE_ACTE_GESTION_UNDEFINED: string;
        static ID_IDN_UNDEFINED: string;
        static ID_ACTE_EXTERNE_UNDEFINED: string;
        static CODE_CANAL_UNDEFINED: string;
        static MODE_SIGNATURE_UNDEFINED: string;
        static REFERENCE_CONTRAT_UNDEFINED: string;
        static NUMERO_ENTITE_TITULAIRES_UNDEFINED: string;
        static NOMBRE_TITULAIRES_ACTE_VIDE: string;
        static PB_RESSOURCE_REST_DOSSIER_CONTRAT: string;
        static PB_RESSOURCE_REST_DOSSIER_CANAL_NUMERIQUE: string;
        static PB_RESSOURCE_REST_DOSSIER_CONTRAT_SERVI: string;
        static PB_RESSOURCE_REST_RECUPERER_DOCUMENTS_IDN: string;
        static PB_RESSOURCE_REST_TERMINER_ACTE_VAD: string;
        messageErreur: string;
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

declare module myway.comContract.VenteVpc.Modeles {
    interface IFinaliserVenteVpcInput {
        codeEtablissement: string;
        identifiantActeIDN: string;
        identifiantActeExterne: string;
        codeCanal: string;
        modeSignature: string;
        codeActeGestion: string;
        listeActeSecondaires: Array<string>;
        acteGestionCompteSupport: string;
        numeroEntiteTitulaire: string;
        listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>;
        referenceOffre: string;
        referenceContrat: string;
        codeTypeProduit: string;
        typeReference: string;
        valeurReference: string;
        libelleReference?: string;
        codeActionDossierVente?: string;
    }
    interface IFinaliserVenteVpcOutput {
        codeRetour: number;
        listeLibelleRetour: Array<string>;
        isDossierIDNMisAJour: boolean;
        isClasseurClientCreer: boolean;
    }
}

declare module myway.comContract.Enums {
    /**
     * TODO
     * @author S0076222
     */
    class CodeApplication {
        static MYSIGN: string;
        static SEMD: string;
        static SEMD_BDR: string;
        static BULLECONFIANCE: string;
    }
}

declare module myway.comContract.Enums {
    /**
     * TODO
     * @author S0076222
     */
    class CodeCanalVente {
        static FACE_A_FACE: string;
        static TELEPHONIQUE: string;
        static MOBILITE: string;
        static INTERNET: string;
    }
}

declare module myway.comContract.Enums {
    enum DestinataireEmailConseillerEnum {
        Operant = 0,
        ChargeAffaire = 1,
        OperantPourChargeAffaire = 2,
        Aucun = 3,
    }
}

declare module myway.comContract.Enums {
    /**
     * message info pour tableau Signataires Pro
     */
    class MessageInfo {
        static UNE_PERSONNE: string;
        static AUCUN: string;
        static CAS_PARTICULIER: string;
    }
}

declare module myway.comContract.Enums {
    /**
     * TODO
     * @author S0076222
     */
    class ModeContractualisation {
        static FAFE: string;
        static FAFG: string;
        static FFPE: string;
        static FAFP: string;
        static VADE: string;
        static VADP: string;
        static VELD: string;
        static VELE: string;
        static AUCUN: string;
    }
}

declare module myway.comContract.Enums {
    enum SignatureAgentEmailEnum {
        Operant = 0,
        ChargeAffaire = 1,
        OperantPourChargeAffaire = 2,
    }
}

declare module myway.comContract.Enums {
    /**
     * TODO
     * @author S0076222
     */
    class TypeProfessionnel {
        static ENTREPRENEUR_INDIVIDUEL_PHYSIQUE: string;
        static PERSONNE_MORALE: string;
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
        designationCourte?: string;
        numeroRangPersonneET?: string;
        codeTypeMandat?: string;
        raisonSocial?: string;
        codeRoleSignataire: string;
        isSelectionne: boolean;
        checked?: boolean;
        isSelectionnable: boolean;
        montantAutorisationSignataire?: number;
        premierePersEnRelation?: number;
        disabled?: boolean;
    }
    interface ISignataire {
        personnes: Array<IPersonne>;
        maxSelectionne: number;
        minSelectionne: number;
    }
    interface IInfosComplementaires {
        codeMessageErreur: string;
        libelleErreur: string;
    }
    interface ISignataireReponse {
        titulaires: ISignataire;
        representantsLegaux: ISignataire;
        representantsLegauxPro: ISignataire;
        gestionnairesMesureProtection: ISignataire;
        signatairesLegaux: ISignataire;
        mandataires: ISignataire;
        delegataires: ISignataire;
        autres: ISignataire;
        visaCollaborateurs: ISignataire;
        /**
         * Nombre maximum de signataires sélectionnables
         */
        maxSignataire: number;
        /**
         * Libellé de l'erreur de sélection
         */
        libelleErreur: string;
        /**
         * Libellé de la règle de sélection
         */
        libelleRegle: string;
        /**
         * Clé de la règle de sélection
         */
        cleRegle: string;
        /**
         * Permet de savoir si le bloc signataire doit être déplié par défaut
         */
        estDeplier?: boolean;
        /**
         * True si la ressource signataireDocument a utilisé la QR Pro D17C880
         * False sinon, QR D1737900
         */
        isPro?: boolean;
        infosComplementaires?: IInfosComplementaires;
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
        identifiantEntiteTitulaire?: number;
        codeCanal: string;
        codeActeGestion?: string;
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
        codeEtablissement?: string;
        isPro?: boolean;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * RecapSignatairesControleur est le controleur de la directive Recap de signataires.
     * @author S0076222
     */
    class RecapSignatairesControleur {
        private $scope;
        private serviceAgentExtended;
        private recapSignatairesService;
        private static CLASS_NAME;
        /**
         * Paramètre d'entrée de la directive
         */
        recapSignatairesInput: IRecapSignatairesInput;
        /**
         * La propriété chargementLong controle l'affichage de bloc de chargement
         */
        chargementCourtShow: boolean;
        /**
         * La propriété signatairesTableShow controle l'affichage de la table
         * de signataires
         */
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
        private getTableauDataFromRecapSignatairesInput(recapSignatairesInput);
        private setSignatairesTableau();
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
        static D: CodeModeSignatureEnum;
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
        messageErreur: string;
        messageComplementaire: string;
        action: string;
        erreurMyWay: MyWay.Services.Erreur;
        classeTypeScript: string;
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
        static REPRESENTANT_LEGAL_PRO: RoleSignataireEnum;
        static GESTIONNAIRE_MESURE_PROTECTION: RoleSignataireEnum;
        static EMPRUNTEUR: RoleSignataireEnum;
        static CO_EMPRUNTEUR: RoleSignataireEnum;
        static DELEGATAIRE: RoleSignataireEnum;
        static CAUTION: RoleSignataireEnum;
        static SIGNATAIRE_LEGAL: RoleSignataireEnum;
        static AUTRE: RoleSignataireEnum;
        static VIDE: RoleSignataireEnum;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * CorporateInformationService est un service angularJs permet de consommer la ressource corporateInformation.
     * @author S0076222
     */
    class CorporateInformationService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getCorporateInformation(codeEtablissementFinancier, identifiantTiers);
        getNomSignataire(codeEtablissementFinancier: string, identifiantSignataire: number): ng.IPromise<string>;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * IdentificationService est un service angularJs permet de consommer la ressource identification.
     * @author S0076222
     */
    class IdentificationService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getIdentification(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<myway.comContract.RecapSignataires.PersonnaliteJuridiqueEnum>;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * ParticulierInformationService est un service angularJs permet de consommer la ressource particulierInformation.
     * @author S0076222
     */
    class ParticulierInformationService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
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
        private static CLASS_NAME;
        static $inject: string[];
        donneesContexte: IRecapSignatairesContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape routeur (ContractualisationActe et mode).
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT" si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * RecapSignatairesService est le service de la directive Recap de signataires.
     * @author S0076222
     */
    class RecapSignatairesService {
        private $q;
        private serviceAgentExtended;
        private recapSignatairesContexteService;
        private signatureEnInstanceService;
        private tiersNoyauService;
        private static CLASS_NAME;
        static $inject: string[];
        private erreurRecapSignataire;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recapSignatairesContexteService: RecapSignatairesContexteService, signatureEnInstanceService: SignatureEnInstanceService, tiersNoyauService: TiersNoyauService);
        init(recapSignatairesInput: IRecapSignatairesInput): ng.IPromise<IRecapSignatairesInput>;
        private checkRecapSignataireInputObjet(recapSignatairesInput);
        private checkSignataireObjet(signataire);
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * SignatureEnInstanceService est un service angularJs permet de consommer la ressource SignatureEnInstance.
     * @author S0076222
     */
    class SignatureEnInstanceService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        private static CODE_APPLICATION;
        private static DATE_SIGNATURE_NON_SIGNE;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getDossierSignataire(codeApplication, idActeIDN);
        getEtatSignature(recapSignatairesInput: IRecapSignatairesInput): ng.IPromise<IRecapSignatairesInput>;
        private organiserSignataires(recapSignatairesInput, signatureEnInstanceOutput, etatSignature);
        private getEtatSignatureFromIdStatut(etatSessionIcg);
    }
}

declare module myway.comContract.RecapSignataires {
    /**
     * IdentificationService est un service angularJs permet de consommer la ressource identification.
     * @author S0076222
     */
    class TiersNoyauService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getTiersNoyau(codeEtablissementFinancier, identifiantPersonne);
        majNomSignataire(codeEtablissementFinancier: string, signataire: Signataire): ng.IPromise<Signataire>;
    }
}

declare module myway.comContract.signataire {
    class ListeDesignatairesController {
        private $scope;
        private $filter;
        private $parse;
        private $q;
        private $timeout;
        private serviceAgentExtended;
        private signataireService;
        private reglesSignaturesService;
        private static CLASS_NAME;
        LIBELLE_VISA_COLLABORATEUR: string;
        LIBELLE_AUTRE: string;
        private donneesEntree;
        private isOpened;
        private ngModel;
        messageErreur: string;
        selectionMessage: string;
        roleFiltre: RoleComparator;
        isPro: boolean;
        signatairesListe: comContract.modeles.ISignatairePro[];
        messageInfo: string;
        private signataireReponse;
        private autreSignataire;
        private visaCollaborateur;
        private precisionSignataire;
        private referenceIdentite;
        private afficherReferenceIdentite;
        private referenceIdentiteObligatoire;
        private referenceIdentiteFocus;
        private chargement;
        private chargementSansErreur;
        showCapaciteComplete: boolean;
        private afficheChampPrecision;
        private messageErreurReferenceIdentite;
        private messageErreurPrecisionSignataire;
        private messageErreurMinMax;
        private messageErreurServiceRest;
        private identifiantPersonne;
        static $inject: string[];
        typeSignataireEnum: typeof comContract.modeles.TypeSignataire;
        codeTypePersonne: typeof comContract.modeles.CodeTypePersonne;
        constructor($scope: ng.IScope, $filter: ng.IFilterService, $parse: ng.IParseService, $q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, signataireService: SignataireService, reglesSignaturesService: myway.comContract.Signataire.ReglesSignaturesService);
        /**
         * fonction "plierDeplier" pour traiter les cas de focus/blur sur input-reference-identite
         */
        private expand(force);
        private recuperationSignataires();
        private disableIsselectionneInSignataireReponseExceptIfInNgModel();
        private loadTitulairesAndRepresentantsLegauxToNgModel();
        /**
         * Permet de déterminer le libelle de la personne.
         * Exemple :
         * - si nom de jeune fille (nomUsage présent) : civilité nomUsage (nomFamille) prénom
         * - si personne sans nomUsage alors : civilité nomFamille prénom
         */
        private getLibellePersonne(personne);
        private getLibelleCivilite(codeCivilite);
        onCheck(index: number, typeSignataire: comContract.modeles.TypeSignataire): void;
        onCheckAutre(isCoche: boolean, isPro: boolean): void;
        onCheckVisaCollaborateur(isCoche: boolean, isPro: boolean): void;
        private onChangePrecisionSignataire();
        private onChangeReferenceIdentite();
        private verifierReferenceIdentiteLength();
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
        private removeVisaSignataire();
        private forceIsselectionneInSignataireReponse(signataire, etat);
        private getTitulairesByType(role);
        private gestionNgModel(personne, typeSignataire);
        private controlerMinMax();
        /**
         * Vérifie que les min-max sont respectés pour le type fourni.
         * Renvoie true si ok.
         */
        private controlerMinMaxTypeSignataire(typeSignataire, signataires);
        /**
         * Contraintes Lot 2 E-tutelle : on peut avoir un signataire GMP ou un signataiire RLPro EI (Personne Physique)
         * Cela ne peut être géré uniquement par le minRLPro et le minGMP, génère des blocages lorsque les deux existent
         * Paliatif : le GMP est "assimilé" à un RLPro dans le contrôle du min
         */
        private controlerMinMaxTypeSignataireRLProAndGMP(signatairesRLPro, signatairesGMP);
        private gestionPrecisionSignataire();
        private getLibelleDesignataire(codeLienPersonne, typeSignataire);
        private resetErreurs();
        private setErreurPrecisionSignataire(message?);
        private setErreurReferenceIdentite(message?);
        private setErreurMinMax(message?);
        private setErreurServiceRest(message?);
        private buildOutputMessageErreur();
        private notifierChangement();
        private doitAfficherReferenceIdentite(referenceIdentite);
        private verifierDonneesEntree(donneesEntree);
        private verifierPresenceModeOperationsFinancieres(donneesEntree);
        private verifierPresenceCodeActeGestion(donneesEntree);
        private verifierPresenceEntiteTitulaire(donneesEntree);
        private verifierPresenceRICE(donneesEntree);
        private ajoutVisaCollaborteurSignataireReponse();
        private controleCodeCanalVisaCollaborateur();
        /************************************************************************
         *
         * TABLEAU PRO
         *
         */
        tableauColonneOptionsNom: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsQualite: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsFinance: MyWay.UI.ImwTableColumnOptions;
        tableauSignatairesPro: MyWay.UI.ImwTableOptions;
        /**
         * converti le role pour le tri du tableau Pro,
         * ordre IMPORTANT pour le métier
         * Titulaires, Réglementaires, Délégataires puis Mandataires
         */
        private getTypeSignatairePro(typeSignataire);
        /**
         * reconverti le role pour l'envoi des infos du signataire
         */
        private getTypeSignataireCommun(typeSignataire);
        private createSignatairePro(personne, typeSignataire);
        private initTableauPro();
        /**
         * messageInfo : Titre du Tableau Pro quand aucune personne sélectionnée
         * Cas Autre coché
         * Cas OPEFI : 1 seul signataire
         * Autres cas 2 Signataires Max
         */
        private setMessageInfo(autre?);
        /**
         * Permet de déterminer le libelle de la personne pour les Pros.
         * Exemple :
         * - si nom de jeune fille (nomUsage présent) : civilité nomUsage (nomFamille) prénom
         * - si personne sans nomUsage alors : civilité nomFamille prénom
         */
        private getLibellePersonnePro(personne);
        onSelectionChange(personneSelectionnee: comContract.modeles.ISignatairePro): void;
        private gestionNgModelPro(personne);
        private ajoutSignataireNgModelPro(personne);
        isShowBlocRLProPMWithGMP(titulaires: modeles.IPersonne[], representantLegalPro: modeles.IPersonne): boolean;
        isShowBlocRLProPMWithoutGMP(titulaires: modeles.IPersonne[], representantLegalPro: modeles.IPersonne): boolean;
        isActeGestionPerimetreETutelle(codeActeGestion: string): boolean;
        isPersonneProtegee(titulaires: modeles.IPersonne[]): boolean;
        existGMPLie(representantLegalPro: modeles.IPersonne): boolean;
        checkIsRLProSelectionnableWithOtherSelected(): boolean;
        checkIsGMPSelectionnableWithOtherSelected(representantLegalPro: modeles.IPersonne): boolean;
    }
}

declare namespace myway.comContract.Signataire.Constantes.Commun {
    const LIBELLE_VISA_COLLABORATEUR: string;
    const LIBELLE_AUTRE: string;
    const PRECISION_SIGNATAIRE_MINLENGTH: number;
    const REFERENCE_IDENTITE_MINLENGTH: number;
    const REFERENCE_IDENTITE_MAXLENGTH: number;
    const MESSAGE_ERREUR_PRECISION_SIGNATAIRE_REQUIRED: string;
    const MESSAGE_ERREUR_PRECISION_SIGNATAIRE_MINLENGTH: string;
    const MESSAGE_ERREUR_REFERENCE_IDENTITE_REQUIRED: string;
    const MESSAGE_ERREUR_REFERENCE_IDENTITE_MINLENGTH: string;
    const MESSAGE_ERREUR_REFERENCE_IDENTITE_MAXLENGTH: string;
    const MESSAGE_ERREUR_SERVICE_REST: string;
    const MESSAGE_ERREUR_DONNEES_ENTREES: string;
    const MESSAGE_ERREUR_CODE_GESTION_REQUIRED: string;
    const MESSAGE_ERREUR_ENTITE_OU_RICE_REQUIRED: string;
    const CHANGED_EVENTNAME: string;
    namespace TableauPro {
        const TITRE_COLONNE_RESTRICTION: string;
        const TITRE_COLONNE_QUALITE: string;
        const TITRE_COLONNE_DESIGNATION: string;
    }
}

declare namespace myway.comContract.Signataire.Constantes.ReglesSignataire {
    const VALEUR_REGLE_CONTRACTUALISATION_TRUE: string;
    const CODE_CANAL_FACE_A_FACE: string;
    const CODE_CANAL_TL: string;
    const LISTE_MODE_CONTRACTUALISATION_FF: string[];
    const LISTE_MODE_CONTRACTUALISATION_TL: string[];
    namespace RequestSettings {
        const INDICATEUR_MODE_APPEL_QR: string;
        const CODE_RUBRIQUE_REGLE: string;
    }
    namespace VisaCollaborateur {
        const IPERSONNE: myway.comContract.signataire.modeles.IPersonne;
    }
}

declare module myway.comContract.signataire {
    enum ModeOperationsFinancieresEnum {
        DESACTIVE = 0,
        PARAMETRAGE_SPECIFIQUE_OF1 = 1,
        PARAMETRAGE_SPECIFIQUE_OF2 = 2,
        PARAMETRAGE_SPECIFIQUE_OF3 = 3,
        INCONNU,
    }
}

declare module myway.comContract.signataire {
    enum ReferenceIdentiteEnum {
        OBLIGATOIRE_FOCUS = 1,
        FACULTATIVE_FOCUS = 2,
        CACHEE = 3,
        OBLIGATOIRE = 4,
        FACULTATIVE = 5,
        INCONNU,
    }
}

declare module myway.comContract.ReglesSignataires {
    interface IRegleSignatireInput {
        codeActeGestion: string;
        listeCodeModeContractualisation: Array<string>;
        valeurRegleContractualisation?: string;
        indicateurRegleBloquante?: string;
        dateDebutValidite?: Date;
        dateFinValidite?: Date;
        dateCreationMajEnregistrement?: Date;
    }
}

declare module myway.comContract.signataire {
    class SignataireService {
        private $q;
        private serviceAgentExtended;
        private restClient;
        protected communService: CommunService;
        private static CLASS_NAME;
        static $inject: string[];
        private RESSOURCE_URL;
        signatairesSelectionnes: comContract.modeles.ISignataireComplet[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, restClient: myway.comContract.RestClient<modeles.ISignataireReponse>, communService: CommunService);
        getSignataires(signataireInput: modeles.ISignataireInput): ng.IPromise<modeles.ISignataireReponse>;
        private map(signataireInput, habilitationSHEQ24);
    }
}

declare module myway.comContract.Signataire {
    class ReglesSignaturesService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * TODO : ceci devra etre descendu côté backend
         *  (au moment de la reactivation)
         * à activer pour le projet VISA Collaborateur
         * @param donneesEntrer
         */
        verifierEligibiliteVisaCollaborateur(donneesEntrer: myway.comContract.ReglesSignataires.IRegleSignatireInput): ng.IPromise<boolean>;
    }
}

declare module myway.comContract.OPC.Enums {
    class CodeCanal {
        static FF: string;
    }
}

declare module myway.comContract.OPC.Enums {
    class ModeContractualisation {
        static FAFGXML: string;
        static FAFG: string;
    }
}

declare module myway.comContract.OPC.Enums {
    class TypeBordereau {
        static OPERATION_FINANCIERE: string;
        static REMISE_CARTE_TEMPO: string;
        static REMISE_CARTE_BANCAIRE: string;
        static VISITE_COFFRE: string;
        static OPPOSITION_CARTE_BANCAIRE: string;
        static VIREMENT_IMMEDIAT: string;
        static VIREMENT_INTERNE: string;
        static VIREMENT_INTERNATIONAL: string;
        static ECHEANCIER_VIREMENT_SEPA: string;
        static ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static AVENANT_ECHEANCIER_VIREMENT_SEPA: string;
        static AVENANT_ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static CLOTURE_ECHEANCIER_VIREMENT_SEPA: string;
        static CLOTURE_ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static SUSPENSION_ECHEANCIER_VIREMENT_SEPA: string;
        static REACTIVATION_ECHEANCIER_VIREMENT_SEPA: string;
    }
}

declare module myway.comContract.OPC.Enums {
    class TypeDocument {
        static XML: string;
        static PDF: string;
    }
}

declare module myway.comContract.OPC.Ressources.DocumentParametre {
    class ContractualisationParametreInputFactory {
        constructor();
        createContractualisationParametreInput(identifiantPersonne: number, codeActeGestion: string, libelleActeGestion: string, codeCanalinput: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string, signataires: Array<myway.comContract.SAGOPC.Modeles.ISignataireSagOpc>, operationsFinancieres: Array<SAGOPC.Modeles.IOperationsFinancieres>, listeMateriels: Array<Myway.Ressource.ContractualisationParametre.IMateriel>): Myway.Ressource.ContractualisationParametre.IContractualisationParametreInput;
    }
}

declare module myway.comContract.OPC.Ressources.DocumentParametre {
    class DocumentParametreConstantes {
        static RESSOURCE_REST_URL_CONTRACTUALISATION: string;
        static RESSOURCE_REST_URL_DOCUMENT: string;
    }
}

declare module myway.comContract.OPC.Ressources.DocumentParametre {
    class ContractualisationParametreRequestFactory {
        create(input: Myway.Ressource.ContractualisationParametre.IContractualisationParametreInput): MyWay.Services.IRequestSettings;
    }
    class DocumentParametreRequestFactory {
        /**
         *
         * @param listeActes
         * @param codeCanal
         * @param codeModeMiseGestion
         * @param codeTypeMarcheDocumentEntreprise
         */
        create(listeActes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheDocumentEntreprise: string): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.VenteVpc.Ennums {
    /**
     * TODO
     * @author S0076222
     */
    class CodeTypeReferenceExterne {
        static DOSSIER_VENTE: string;
        static COMPTE_SUPPORT_CONTRAT: string;
        static CONTRAT_CARTE: string;
        static CONTRAT_EXTERNE: string;
    }
}

declare module myway.comContract.VenteVpc {
    /**
     * TODO
     * @author S0076222
     */
    class ModeSignature {
        static PAPIER: string;
        static ELECTRONIQUE: string;
        static INTERNET: string;
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
        create(codeApplication: string, idDossierNumerique: string): MyWay.Services.IRequestSettings;
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

declare module myway.comContract.signataire.Ressource.ReglesSignature {
    /**
     * La classe ReglesSignatureConstants définit l'URL des la ressource REST reglesSignature.
     * @author S0006664
     */
    class ReglesSignatureConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.signataire.Ressource.ReglesSignature {
    /**
     * La classe ReglesSignatureRequestFactory permet de produire la requête de la ressource ReglesSignature.
     * @author S0006664
     */
    class ReglesSignatureRequestFactory {
        create(indicateurModeAppelQr: string, codeActeGestion: string, listeCodeModeContractualisation: Array<string>, codeRubriqueRegle: string): MyWay.Services.IRequestSettings;
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
        create(acte: Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, listeTitulaires: Array<Modeles.ITitulaire>, identifiantAgent: string): Myway.Ressource.ContractualisationActe.IActeGestion;
        /**
         *
         * @param identifiantActeIDN
         * @param indicateurActeIDNExistant
         */
        private getIndicateurActeIDNExistant(identifiantActeIDN, indicateurActeIDNExistant);
        /**
         *
         * @param libelleActe
         */
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
        constructor();
        createContractualisationActe(indicateurPapier: boolean, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, libelleNonEligibilite: string, listeMateriels: Array<Myway.Ressource.ContractualisationActe.IMateriel>, surchargeNonEligibilite: boolean, motifNonEligibiliteSAGSED: Myway.Ressource.ContractualisationActe.IMotifNonEligibiliteSAGSED, typeProfessionnel: string, isDeployeMySign: boolean, isDeployeSEMD: boolean): Myway.Ressource.ContractualisationActe.IContractualisationActe;
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
        create(acte: Modeles.IActe, listeSignataires: Array<modeles.ISignataire>, indicateurAgenceDeployee: boolean, indicateurCaisseAuto: boolean, listeMateriels: Array<Myway.Ressource.ContractualisationActe.IMateriel>, listeTitulaires: Array<Modeles.ITitulaire>, surchargeNonEligibilite: boolean, isDeployeSEMD: boolean, isDeployeMySign: boolean, identifiantAgent: string, libelleMotifNonEligibProducteur?: string): Myway.Ressource.ContractualisationActe.IContractualisationActeInput;
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
        private static CLASS_NAME;
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
        /**
         * @description mapper deux enum TypeSignataire et CodeRoleSignataire
         * @param role
         */
        private switchCodeRole(role);
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

declare module myway.comContract.DossierNumerique {
    /**
     * Cette classe permettant de présenter les contstantes utilisées pour consommer
     * la ressource dossiernumerique-v3/dossierNumerique
     * @author S0006664
     */
    class DossierNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
        static RESSOURCE_REST_URL_BASCULER_VERS_DOSSIER_PAPIER: string;
    }
}

declare module myway.comContract.DossierNumerique {
    /**
     * DossierNumeriqueFactory est un factory permet de produire la requete @see MyWay.Services.IRequestSettings
     * afin de consommer la ressource REST dossiernumerique-v3/dossierNumerique.
     * @author S0006664
     */
    class DossierNumeriqueRequestFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name create
         * @description
         * Permet de créer la requete @see MyWay.Services.IRequestSettings
         * @returns {MyWay.Services.IRequestSettings}
         */
        postDossierNumeriqueRequest(dossierNumerique: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): MyWay.Services.IRequestSettings;
        putDossierNumeriqueRequest(dossierNumerique: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): MyWay.Services.IRequestSettings;
        deleteDossierNumeriqueRequest(idDossierNumerique: string, codeApplication: string, isDeployMySign: boolean, referenceActe?: string, typeReferenceActe?: string): MyWay.Services.IRequestSettings;
        getDossierNumeriqueRequest(idDossierNumerique: string, codeApplication: string, avecDocuments: boolean, avecReferences: boolean, avecEmplacementsSignatures: boolean, avecBinaires: boolean, avecSignataires: boolean, avecTitulaires: boolean): MyWay.Services.IRequestSettings;
        basculerDossierVersPapier(idDossierNumerique: string, codeApplication: string, isDeployMySign: boolean): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Signature {
    /**
     * Cette classe permettant de présenter les contstantes utilisées pour consommer la ressource dossiernumerique-v3/signature
     * @author S0006664
     */
    class SignatureConstants {
        static RESSOURCE_REST_URL: string;
        static RESSOURCE_REST_URL_SESSION_SIGNATURE: string;
        static RESSOURCE_REST_URL_TRANSACTION_ICG: string;
        static RESSOURCE_REST_URL_MAIL: string;
    }
}

declare module myway.comContract.Signature {
    /**
     * SignatureRequestFactory est un factory permet de produire la requete @see MyWay.Services.IRequestSettings
     * afin de consommer la ressource REST dossiernumerique-v3/signature.
     * @author S0006664
     */
    class SignatureRequestFactory {
        /**
         * @constructor
         */
        constructor();
        /**
         * @ngdoc method
         * @name create
         * @description
         * Permet de créer la requete @see MyWay.Services.IRequestSettings
         * @returns {MyWay.Services.IRequestSettings}
         */
        deleteTransactionIcgRequest(isDeployeMySign: boolean, idTransactionIcg: string, annulerDossiersConcernes: boolean, idPersonne: string, codeAction: string): MyWay.Services.IRequestSettings;
        postSignatureRequest(initierSignatureInput: Myway.Ressource.Signature.V3.IInitierSignatureInput): MyWay.Services.IRequestSettings;
        postSessionSignatureRequest(signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique): MyWay.Services.IRequestSettings;
        putSessionSignatureRequest(signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique): MyWay.Services.IRequestSettings;
        postMail(mailInput: Myway.Ressource.Signature.V3.IMailInput): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Ressources.DocumentsAttributaire {
    /**
     * @author S0076222
     */
    class DocumentsAttributaireConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.Ressources.DocumentsAttributaire {
    /**
     * @author S0076222
     */
    class GetDocumentsAttributaireRequestFactory {
        constructor();
        /**
         * @name create
         * Cette méthode créer la requete pour consommer la ressource /dossiernumerique/v3/dossierNumerique/documentsAttributaire
         * @returns {MyWay.Services.IRequestSettings}
         */
        create(idDossierNumerique: string, codeApplication: string): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Ressources.DocumentsAttributaire {
    /**
     * @author S0076222
     */
    class PutDocumentsAttributaireRequestFactory {
        private methode;
        private documentsAttributaireInput;
        /**
         * @constructor
         */
        constructor(methode: MyWay.Services.MethodEnum, documentsAttributaireInput: Myway.Ressource.DossierNumerique.V3.IDocumentsAttributaireInput);
        /**
         * @name create
         * Permet de créer la requete @see MyWay.Services.IRequestSettings
         * @returns {MyWay.Services.IRequestSettings}
         */
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Ressources.DossierCanalNumerique {
    class ActeGestionFactory {
        private static CODE_APPLICATION;
        private static TYPE_REFERENCE_EXTERNE_DOSSIER_VENTE;
        constructor();
        /**
         * Cette méthode crée un objet acteGestion de type Myway.Ressource.DossierCanalNumerique.IActeGestion
         * @param codeActeGestion
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param isActeGestionPrincipal
         * @param compte
         * @param codeTypeEDS
         * @param codeEtablissement
         */
        createActeGestion(codeActeGestion: string, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, isActeGestionPrincipal: boolean, compte: string, codeTypeEDS: string, codeEtablissement: string, identifiantActeExterne: string): Myway.Ressource.DossierCanalNumerique.IActeGestion;
        /**
         * La méthode createListeActeGestion crée la liste de acte de gestion.
         * @param codeActeGestion
         * @param listeActeSecondaires
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param acteGestionCompteSupport
         * @param compte
         * @param codeTypeEDS
         * @param codeEtablissement
         */
        createListeActeGestion(codeActeGestion: string, listeActeSecondaires: Array<string>, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, acteGestionCompteSupport: string, compte: string, codeTypeEDS: string, codeEtablissement: string, identifiantActeExterne: string): Array<Myway.Ressource.DossierCanalNumerique.IActeGestion>;
        /**
         * Cette méthode permet de déterminer le TopActeGestionPrincipal en fonction du paramétre isActeGestionPrincipal
         * @param isActeGestionPrincipal
         */
        private getTopActeGestionPrincipal(isActeGestionPrincipal);
        /**
         * getModeContract retoune le modeContract selon le codeCanal
         * @param codeCanal
         */
        private getModeContract(codeCanal);
        /**
         *
         * @param identifiantDossierVente
         */
        private getListeReferenceExterne(identifiantDossierVente);
    }
}

declare module myway.comContract.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueRequestFactory {
        private methode;
        private dossierCanalNumeriqueInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierCanalNumeriqueInput: Myway.Ressource.DossierCanalNumerique.IDossierCanalNumeriqueInput);
        /**
         * Cette méthode créer la requete pour consommer la ressource /classeurclient/v1/dossierCanalNumerique/
         */
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Ressources.DossierContratServi {
    class DossierContratServiConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.Ressources.DossierContratServi {
    class DossierContratServiRequestFactory {
        private methode;
        private dossierContratServiceInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierContratServiceInput: Myway.Ressource.DossierContratServi.IDossierContratServiceInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Ressources.DossierContratServi {
    enum TypeActeEnum {
        PRINCIPAL = 1,
        SECONDAIRE = 0,
    }
    class DossierContratServiceInputFactory {
        private static CODE_APPLICATION;
        private static CREATION_DOSSIER;
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param codeEtablissementFinancier
         * @param codeModeContractualisation
         * @param codeGuichet
         */
        createDossierContratServiceInputFromActe(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string, identifiantPorteurCarte: string, listeDocuments: Array<Myway.Ressource.ConsultationIdn.IDocumentIdntAttributaire>): Myway.Ressource.DossierContratServi.IDossierContratServiceInput;
        createDossierContratServiceInputFromDossierNumerique(codeActeGestion: string, listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>, numeroEntiteTitulaire: number, listeActeSecondaires: Array<string>, acteGestionCompteSupport: string, identifiantAgent: number, referenceEDSExterneClient: number, identifiantDossierNumerique: string, identifiantDossierVente: string, referenceContrat: string, referenceOffre: number, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string, identifiantPorteurCarte: string, codeCanal: string, listeDocuments: Array<Myway.Ressource.DossierContratServi.IDocuments>): Myway.Ressource.DossierContratServi.IDossierContratServiceInput;
        private getListeActeFromDossierNumerique(codeActeGestion, listeTitulairesActe, numeroEntiteTitulaire, listeActeSecondaires, referenceOffre, codeEtablissementFinancier, codeGuichet, referenceContrat);
        /**
         *
         * @param acteGestion
         */
        private getListeActe(acteGestion, codeEtablissementFinancier, codeGuichet);
        private getIdentifiantContratFromActeGestion(acteGestion, codeEtablissementFinancier, codeGuichet);
        /**
         *
         * @param acteGestion
         * @param codeEtablissementFinancier
         * @param codeGuichet
         */
        private getRice(referenceContrat, codeEtablissementFinancier, codeGuichet);
        private getAgentEds(identifiantAgent, referenceEDSExterneClient);
        /**
         *
         * @param numeroEntiteTitulaire
         */
        getEntiteTitulaire(numeroEntiteTitulaire: string): number;
        /**
         *
         * @param codeActe
         * @param actePrincipal
         * @param codeDossier
         * @param idContrat
         * @param codeModeCreationDossier
         * @param idRegroupement
         * @param idOffre
         * @param numeroEntiteTitulaire
         * @param numeroPersonne
         * @param modeMiseAJourDossier
         */
        private getActe(codeActe, actePrincipal, codeDossier, idContrat, idOffre, numeroEntiteTitulaire, numeroPersonne, numeroDossierVente);
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, identifiantPorteurCarte, contratExterne?);
        private getListeDocumentsDossierContratServi(codeActe, documents);
        /**
         *
         * @param listeTitulairesActe
         */
        private getIdentifiantPersonne(listeTitulairesActe);
    }
}

declare module myway.comContract.Ressources.DossierContrat {
    class CodeEvenementMetierFactory {
        constructor();
        /**
         *
         * @param codeActeGestion
         */
        createCodeEvenementMetierFromCodeActeGestion(codeActeGestion: string): Myway.Ressource.DossierContrat.ICodeEvenementMetier;
        /**
         *
         * @param listeActeSecondaires
         */
        createListeCodeEvenementMetierFromListeActeSecondaires(listeActeSecondaires: Array<string>): Array<Myway.Ressource.DossierContrat.ICodeEvenementMetier>;
    }
}

declare module myway.comContract.Ressources.DossierContrat {
    class DossierContratFactory {
        private static CODE_APPLICATION;
        private static TYPE_REFERENCE_EXTERNE_DOSSIER_VENTE;
        constructor();
        createDossierContrat(codeEtablissementFinancier: string, codeModeContractualisation: string, codeActeGestion: string, codeGuichet: string, numeroEntiteTitulaire: string, referenceContrat: string, referenceEDSInterneClient: string, referenceEDSExterneClient: string, listeActeSecondaires: Array<string>, nbPersonneEntiteTitulaire: number, identifiantActeExterne: string): Myway.Ressource.DossierContrat.IDossierContratInput;
        /**
         *
         * @param identifiantDossierVente
         */
        private getListeReferenceExterne(identifiantDossierVente);
    }
}

declare module myway.comContract.Ressources.DossierContrat {
    class DossierContratConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module myway.comContract.Ressources.DossierContrat {
    class DossierContratRequestFactory {
        private methode;
        private dossierContratInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierContratInput: Myway.Ressource.DossierContrat.IDossierContratInput);
        /**
         * Cette méthode créer la requete pour consommer la ressource /classeurclient/v1/dossierContrat/
         */
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module myway.comContract.Ressources.RecupererDocumentsIdn {
    /**
     * @author S0076222
     */
    class RecupererDocumentsIdnConstants {
        static RESSOURCE_REST_URL: string;
    }
}
