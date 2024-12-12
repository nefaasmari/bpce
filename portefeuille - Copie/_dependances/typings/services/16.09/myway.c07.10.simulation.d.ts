
declare module instructionCredit {
    var app: any;
}

declare module instructionCredit {
    class AjoutChargeControleur {
        private clientService;
        static $inject: string[];
        charge: Modele.IChargePersonne;
        chargeHorsEtablissement: boolean;
        affectations: Array<Object>;
        personneAffectee: Object;
        typeCharge: Modele.TypeCharge;
        annuel: number;
        statut: Modele.IStatutRessource;
        typesCharge: Array<Modele.TypeCharge>;
        typesChargeAjoutable: Array<Modele.TypeCharge>;
        status: Array<Modele.IStatutRessource>;
        statusEtablissement: Array<Modele.IStatutRessource>;
        statusHorsEtablissement: Array<Modele.IStatutRessource>;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutCharge(): void;
        affectationsGroupes(item: Object): string;
        calculMontantAnnuel(): void;
        private typeParCode(code);
        private statutParCode(code);
        private selectAffectation();
        changeTypeCharge(): void;
        changeAffectation(idws: string): void;
        statutCharge(): void;
    }
}

declare module instructionCredit {
    class AjoutChargeCreditExistantControleur {
        chargeCreditExistant: Modele.CreditExistant;
        usageLocatif: boolean;
        usageLocatifManipulable: boolean;
        /**
         * Constructeur
         */
        constructor();
        /**
         *  'P' : Usage personnel           -> 80
         *  'C' : Caution                   -> 67
         *  'L' : Investissement locatif    -> 76
         *  ' ' : Non significatif          -> 32
         */
        majUsageLocatif(): void;
    }
}

declare module instructionCredit {
    class AjoutCompteControleur {
        private clientService;
        static $inject: string[];
        compte: instructionCredit.Modele.IComptePersonne;
        affectations: Array<Object>;
        personneAffectee: Object;
        isComptePro: boolean;
        typeCompte: string;
        moyenPaiement: boolean;
        dateOuverture: Date;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutCompte(): void;
    }
}

declare module instructionCredit {
    class AjoutCompteHorsCeControleur {
        private clientService;
        static $inject: string[];
        compte: instructionCredit.Modele.IComptePersonne;
        affectations: Array<Object>;
        personneAffectee: Object;
        comptesHorsCE: Array<instructionCredit.Modele.IComptePersonne>;
        typesFonctionnementCompte: Array<instructionCredit.Modele.ISelectbox>;
        typeFonctionnementCompte: instructionCredit.Modele.ISelectbox;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutCompteHorsCe(): void;
        affichePersonnes(item: Object): boolean;
        affectationsGroupes(item: Object): string;
        private selectAffectation();
        changeAffectation(idws: string): void;
        changeTypeCompte(): void;
    }
}

declare module instructionCredit {
    class AjoutEpargneHorsCeControleur {
        private clientService;
        private serviceAgentExtended;
        static $inject: string[];
        epargne: instructionCredit.Modele.IEpargnePersonne;
        affectations: Array<Object>;
        personneAffectee: Object;
        apport: number;
        typesEpargnes: Array<instructionCredit.Modele.IAdrRisqueEpargne>;
        typeEpargne: instructionCredit.Modele.IAdrRisqueEpargne;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutEpargneHorsCe(): void;
        affichePersonnes(item: Object): boolean;
        affectationsGroupes(item: Object): string;
        calculMontantEpargneApreOper(): void;
        private typeParCode(code);
        private selectAffectation();
        changeTypeEpargne(): void;
        changeAffectation(idws: string): void;
    }
}

declare module instructionCredit {
    class AjoutPretControleur {
        proposition: instructionCredit.Modele.Proposition;
        pret: instructionCredit.Modele.Pret;
        echeance: number;
        capital: number;
        typePret: string;
        taux: number;
        duree: number;
        ajouterPret: boolean;
        /**
         * Permet de construire le composant de gestion des prets internes et externes
         */
        constructor();
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutPret(): void;
        /**
         * Permet de créer le prêt à l'aide des données saisies dans le formulaire
         */
        creerPret(): void;
    }
}

declare module instructionCredit {
    class AjoutRevenuControleur {
        private clientService;
        static $inject: string[];
        revenu: instructionCredit.Modele.IRevenuPersonne;
        revenuHorsEtablissement: boolean;
        affectations: Array<Object>;
        personneAffectee: Object;
        typeRevenu: instructionCredit.Modele.TypeRevenu;
        annuel: number;
        statut: instructionCredit.Modele.IStatutRessource;
        typesRevenu: Array<instructionCredit.Modele.TypeRevenu>;
        status: Array<instructionCredit.Modele.IStatutRessource>;
        statusEtablissement: Array<instructionCredit.Modele.IStatutRessource>;
        statusHorsEtablissement: Array<instructionCredit.Modele.IStatutRessource>;
        erreurs: Array<string>;
        /**
         * Constructeur
         */
        constructor(clientService: instructionCredit.Service.ClientService);
        /**
         * Remise à zéro de l'ensemble des champs
         * Fermeture de la fenêtre d'ajout
         */
        initialisationAjoutRevenu(): void;
        affectationsGroupes(item: Object): string;
        private selectAffectation();
        changeAffectation(idws: string): void;
        calculMontantAnnuel(): void;
        private typeParCode(code);
        private statutParCode(code);
        changerTypeRevenu(): void;
        statutRevenu(): void;
    }
}

declare module instructionCredit {
    class ArborescenceControleur {
        private $scope;
        static $inject: string[];
        static evenementCliqueArborecence: string;
        liste: Array<instructionCredit.Modele.IArborescence>;
        private largeurTuile;
        private hauteurTuile;
        private margeTuile;
        private margeTuileHauteur;
        private margeTuileLargeur;
        private liseret;
        private margeTexte;
        private tailleTitre;
        private interligneTexte;
        private tailleTexte;
        private longueurTrait;
        private positionLargeur1;
        private positionLargeur2;
        private positionLargeur3;
        private positionHauteur1;
        private positionHauteur2;
        private positionHauteur3;
        private positionTexte;
        private positionInitiale1;
        private positionInitiale2;
        private finTraitNiveau3;
        private finTraitNiveau2;
        selection: instructionCredit.Modele.IArborescence;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         */
        constructor($scope: ng.IScope);
        /**
         *
         */
        creationTuile(positionLargeur: number, positionHauteur: number, objet: instructionCredit.Modele.IArborescence): void;
        creationLignePrecedente(positionLargeur: number, positionHauteur: number): void;
        creationLigneSuivante(positionLargeur: number, positionHauteur: number): void;
        creationLigneVerticale(positionLargeur: number, positionHauteur: number, positionInitiale: number): void;
    }
}

declare module instructionCredit {
    class BlocAdresseControleur {
        private $scope;
        static $inject: string[];
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        adresseDetaillee: boolean;
        constructor($scope: ng.IScope);
    }
}

declare module instructionCredit {
    class BlocNoteControleur {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private initialisationService;
        static $inject: string[];
        /**
         * Contruction de la page Bloc NOte
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param NavigationService: MyWay.UI.INavigationService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, initialisationService: instructionCredit.Service.InitialisationService);
    }
}

declare module instructionCredit {
    class EmissionDocumentsControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private navigationService;
        private modaleFactory;
        private initialisationService;
        private financementService;
        private controleDossierService;
        static $inject: string[];
        propositionsData: Array<Modele.IPlanFinancementSchema>;
        tableauPropositions: MyWay.UI.ImwTableOptions;
        documentsData: Array<Modele.IInfoDocument>;
        tableauDocuments: MyWay.UI.ImwTableOptions;
        documentsSelectionnes: Array<Modele.IInfoDocument>;
        private _idwsPropositionSelectionne;
        anomaliesBloquantes: Array<Object>;
        anomaliesNonBloquantes: Array<Object>;
        loader: boolean;
        afficherTableauDocuments: boolean;
        private promisesEditions;
        colonnePropositionsLibelle: MyWay.UI.ImwTableColumnOptions;
        colonnePropositionsMontant: MyWay.UI.ImwTableColumnOptions;
        colonnePropositionsEcheance: MyWay.UI.ImwTableColumnOptions;
        colonnePropositionsDuree: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsCode: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsLibelle: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreEmpr: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreNotaire: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreDossier: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreCaution: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreAutre: MyWay.UI.ImwTableColumnOptions;
        colonneDocumentsNbreTotal: MyWay.UI.ImwTableColumnOptions;
        /**
         * Contruction de la page Emission de documents
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param NavigationService: MyWay.UI.INavigationService
         */
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, modaleFactory: instructionCredit.Service.ModaleFactory, initialisationService: instructionCredit.Service.InitialisationService, financementService: instructionCredit.Service.FinancementService, controleDossierService: Service.ControleDossierService);
        onSelectionChange(selectedObject: Object): void;
        visualiserPropositions(listeInformationDocument: Array<Modele.IInfoDocument>): ng.IPromise<void>;
        visualiserDocuments(): void;
        /**
         * Permet d'ajouter l'appel au document dans la liste des promesses
         * @Param: Document à imprimer
         * @Param: identifiant de l'élémént à ajouter (credit, plan...)
         */
        private ajouterPromesse(document, identifiant, paramsEditiques);
        /**
         *  Vérifie l'éligibilité du dossier à changer
         *  Si c'est le cas les propositions ne sont plus correctes
         */
        private initialisation();
        private creationTableauPlans();
        private creationTableauDocuments();
        /**
         *  Vérifie l'éligibilité du dossier à changer
         *  Si c'est le cas les propositions ne sont plus correctes
         */
        private isEligibiliteChange();
        /**
         *  Eligibilité du dossier : vérifie la correspondance du profil PTZ
         */
        private isEligibiliteProfilPtzModifie(dataResultatEligibilite);
        /**
         * Vérifie le dossier + charge la dernière version si souhaité
         * @param {boolean} chargerDossier
         * @returns
         */
        private controlerEtChargerDossier(chargerDossier);
    }
}

declare module instructionCredit {
    class FenetreDateTraitement {
        private $modalInstance;
        private dateTraitement;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, dateTraitement: Date);
        valider(): void;
        annuler(): void;
    }
}

declare module instructionCredit {
    class FormulaireClientControleur implements MyWay.UI.ITuileHandler {
        private $scope;
        private serviceAgentExtended;
        private navigationService;
        private modalService;
        private clientService;
        private calculService;
        private initialisationService;
        private mwgcRechercherPersonneService;
        private $q;
        private mwsfAdresseService;
        private projetService;
        private $filter;
        private financementService;
        private controleDossierService;
        private modaleFactory;
        private authentificationService;
        static $inject: string[];
        private _elementsEmprunteur;
        private _listeIdws;
        private _dossierSchema;
        private _demandeAjoutProspectEmprunteur;
        personneSelectionne: instructionCredit.Modele.IPersonne;
        categorieEmprunteur: instructionCredit.Modele.CategorieEmprunteur;
        situationFamilialeEmprunteur: instructionCredit.Modele.SituationFamilialeEmprunteur;
        statutOccupationLogementEmprunteur: instructionCredit.Modele.ISelectbox;
        affichageAdresse: myway.comAdresseDqe.Adresse;
        affPersLieesEmprunteur: boolean;
        paramsResteAVivre: Array<Modele.IParamsResteAVivre>;
        employeurCommun: boolean;
        codeIntituleEpargne: Array<string>;
        totalEpargneUtilise: number;
        totalEpargneContractuelle: number;
        totalEpargneLiquide: number;
        partEpargneLogement: number;
        syntheseEpargne: boolean;
        libellesTypeCharge: Object;
        libellesTypeRevenu: Object;
        momentVerite: string;
        listeClients: Array<Object>;
        filtreClientRevenus: Object;
        typesTransport: Array<instructionCredit.Modele.ISelectbox>;
        categoriesSocioPro: Array<instructionCredit.Modele.ICatSocioProfessionnelle>;
        categoriesEmprunteur: Array<instructionCredit.Modele.CategorieEmprunteur>;
        situationsFamilialesEmprunteur: Array<instructionCredit.Modele.SituationFamilialeEmprunteur>;
        statutsOccupationLogementEmprunteur: Array<instructionCredit.Modele.ISelectbox>;
        typesContrat: Array<instructionCredit.Modele.ISelectbox>;
        loader: boolean;
        chargementRessourcesChargesEnCours: boolean;
        chargementSurfaceFinanciereEnCours: boolean;
        private identifiantPersonne;
        listePrimoAccedant: Array<Modele.ISelectboxNumber>;
        codeDerogationPtz: Modele.ISelectboxNumber;
        numCarte: Object;
        clientPhysique: MyWay.Model.Client;
        feuTricolore: string;
        etiquetteTuile: string;
        configTuile: MyWay.UI.iMwConfigTuile;
        private nombrePersonnesChargees;
        private nombreRevenusFiscauxCharges;
        private nombreChargesChargees;
        private nombreRessourcesChargees;
        private nombreComptesCharges;
        private nombreEpargnesChargees;
        isCreationDossier: boolean;
        isClientSelectionne: boolean;
        private infobulleRevenusEtCharges;
        private infobulleRfr;
        /**
         * Contruction du formulaire client
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param NavigationService: MyWay.UI.INavigationService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, modalService: MyWay.UI.IModalService, clientService: instructionCredit.Service.ClientService, calculService: instructionCredit.Service.CalculService, initialisationService: instructionCredit.Service.InitialisationService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService, $q: ng.IQService, mwsfAdresseService: myway.comAdresseDqe.AdresseService, projetService: instructionCredit.Service.ProjetService, $filter: ng.IFilterService, financementService: Service.FinancementService, controleDossierService: Service.ControleDossierService, modaleFactory: instructionCredit.Service.ModaleFactory, authentificationService: Service.AuthentificationService);
        /**
         *  Initialise la page Client
         *  Effectue les appels pour mise en session et les contrôles
         */
        private initialisationPageClient();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessairesEtControle();
        /**
         *  Chargement du dossier et de tous les éléments du client
         */
        private chargementInitial();
        /**
         *  Charge les données catalogue dès le départ en asycnhone pour gain de performance
         *  Uniquement les données utiles à l'initialisation des données
         */
        private chargementDonneesSession();
        /**
         *  Charge les données TypeCharge
         */
        private initTypeCharge();
        /**
         *  Charge les données TypeRevenu
         */
        private initTypeRevenu();
        onTuileClick(objetTuile: any): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        chargerPersonne(indexRecursif: number, idsPersonne: string[]): ng.IPromise<void>;
        private chargerRevenuFiscal(id);
        private chargerCharge(id);
        private chargerRevenu(id);
        /**
         * Chargement des comptes CE et Hors CE
         * Valeurs possibles pour CE et Hors CE : 'C' : En caisse d'epargne / 'H' : hors caisse d'epargne
         */
        private chargerCompte(id, occurenceCompte);
        /**
         * Chargement des famille d'épargne CE et Hors CE
         * Valeurs possibles pour CE et Hors CE : 'C' : En caisse d'epargne / 'H' : hors caisse d'epargne
         */
        private chargerEpargne(id);
        /**
         * Permet de calculer les valeurs pour "Détail de la synthèse de l'épargne"
         */
        private calculDetailsSyntheseEpargne();
        private calculValeursEpargne(epargne);
        /**
         * Contrôle la présence d'un emprunteur sur le dossier
         */
        private gererPresenceEmprunteur(definirEmprunteur, listeIdPersonne);
        /**
         *  Recharge l'emprunteur et mets à jour ses données IHM
         *  definirEmprunteur : si true alors on vient de le définir, pas besoin d'effectuer une maj
         */
        private rafraichirDonneesEmprunteur(definirEmprunteur, forcerGetEmprunteur);
        /**
         *  Une fois tous les chargements et initialisation effectués, gère les données
         */
        private initDetailsEmprunteur(forcerGetEndettement);
        /**
         *  Mets à jour le dossier traité et récupère l'ensemble des éléments si besoin
         */
        private getEtMajDossier(forcerRecuperationElements);
        /**
         *  Récupère l'ensemble des élements composant l'emprunteur
         *  Puis initialisation des éléments dans l'IHM
         */
        private getElementsEmprunteur();
        /**
         *  Gère les attributs dépendant de l'emprunteur
         */
        private initInfosEmprunteur();
        /**
         * Alimentation des listes déroulantes et selection par défaut des attributs de l'emprunteur
         */
        private alimentationListesEmprunteur();
        /**
         *  Calcul de l'endettement, on récupère la donnée uniquement si l'emprunteur est modifié
         *  Sinon utilisation de la donnée déjà présente
         */
        private calculEndettement(forcerGetEndettement);
        /**
         * Chargement des données des sections revenu et charge et surface financière
         */
        private initialisationRevenuEtChargeEtSurfaceFinanciere();
        /**
         * Popin recherche d'une personne physique
         */
        rechercherPersonnePhysique(): void;
        /**
         * Ajout ou suppression d'une personne du client bancaire
         */
        private ajoutOuSuppressionPersonne(ajout);
        /**
         * Stockage des revenues et charges par personne
         */
        private stockageRevenusEtChargesParPersonne(listePersonnePhysiqueMaj, listeRevenuParPersonne, listeChargeParPersonne, listeIdPersonneSI, ajoutPersonne);
        /**
         * Maj emprunteur (ajout ou suppression d'une personne)
         */
        private majEmprunteurDepuisListePersonne(listePersonnePhysiqueMaj, listeRevenuParPersonne, listeChargeParPersonne, listeIdPersonneSI, ajout);
        /**
         *  Récupération des personnes affectées au dossier pour ajouter lerur revenus et charges au projet
         */
        private chargementRevenusEtCharges(listeIdPersonne, listeRevenuParPersonne, listeChargeParPersonne, listeIdPersonneSI, ajout);
        /**
         * Création des revenus et charges par personne
         */
        private creationRevenusEtChargesParIdPersonneSI(listeRevenuParPersonne, listeChargeParPersonne, listeIdPersonneSI);
        /**
         * Affiche la popin de selection du client bancaire
         */
        private popinClientsBancaires();
        /**
         * Récupération et création des revenus et charges de tiers client
         */
        private creationRevenusEtChargesTiers(idPersonneSI, idwsPersonnes);
        /**
         * Création Totem
         */
        private creerTotem(emprunteur);
        /**
         * Suppression d'un personne phsique du client bancaire
         */
        suppressionPersonnePhysique(personne: Modele.IPersonne): void;
        /**
         * Affiche le composant adresse de la personne physique selectionnée
         */
        private afficheAdressePersonnePhysique(personne);
        /**
         * Popin situation banque de france
         */
        popinSituationBdf(personne: Modele.IPersonne): void;
        /**
         * Affiche la popin de saisi des revenus fiscaux
         */
        popinRevenuFiscal(revenuFiscal: instructionCredit.Modele.IRevenuFiscalPersonne): void;
        /**
         * Suppression d'un revenu fiscal
         */
        private supprimerRevenuFiscal(index, confirm?);
        /**
         * Création d'un revenu fiscal
         */
        private creerRevenuFiscal(revenuFiscal);
        /**
         * Mets à jour le revenu fiscal du ménage dans l'objet emprunteur (RFR pour FI14)
         */
        private majRevenuFiscalMenage(montantRevnMeng);
        /**
         *  Définition du statut pour l'affichage de l'étiquette
         *  P(80): Conservé - A(65): Non conservé - F(70): Future
         */
        private getLibelleStatutRessourceApreOper(codeExisteRessourceApreOper);
        /**
         * Affiche la popin de saisi des revenus
         */
        popinRevenu(revenu: instructionCredit.Modele.IRevenuPersonne): void;
        /**
         *  Effectue la somme des revenus
         */
        sommeRevenus(revenus: Array<instructionCredit.Modele.IRevenuPersonne>): number;
        /**
         * Suppression d'un revenu
         */
        supprimerRevenu(index: number, confirm?: boolean): void;
        /**
         * Création d'un revenu
         */
        private creerRevenu(revenu, revenuMaj);
        /**
         * Affiche la popin de saisi des charges
         */
        popinCharge(charge: instructionCredit.Modele.IChargePersonne): void;
        /**
         *  Mets à jour une charge de type Personne
         */
        private majCharge(chargeModifiee, chargeMaj);
        sommeCharges(charges: Array<instructionCredit.Modele.IChargePersonne>): number;
        /**
         * Suppression d'une charge
         */
        private supprimerCharge(index, confirm?);
        /**
         * Création d'une charge
         */
        private creerCharge(charge, chargeMaj);
        /**
         * Affiche la popin de saisi des Comptes CE
         */
        popinCompteCE(compte: instructionCredit.Modele.IComptePersonne): void;
        /**
         * Affiche la popin de saisi des Comptes Hors CE
         */
        popinCompteHorsCE(compte: instructionCredit.Modele.IComptePersonne): void;
        /**
         * Suppression d'un compte hors Ce
         */
        supprimerCompteHorsCe(index: number, confirm?: boolean): ng.IPromise<boolean>;
        /**
         * Création d'un compte hors Ce
         */
        private creerCompteHorsCe(compte, compteMaj);
        /**
         * Affiche la popin de saisi des epargnes hors CE
         */
        popinEpargneHorsCE(epargne: instructionCredit.Modele.IEpargnePersonne): void;
        /**
         * Suppression d'une epargne hors Ce
         */
        supprimerEpargneHorsCe(index: number, confirm?: boolean): ng.IPromise<boolean>;
        /**
         * Création d'une epargne hors Ce
         */
        private creerEpargneHorsCe(epargne, epargneMaj);
        infobulleSyntheseFinanciere: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        afficherCasesAgeEnfant(): void;
        changePrimoAccedant(): void;
        calculNombrePersCompMenage(): void;
        montantTuileEpargeCe(epargne: instructionCredit.Modele.IEpargnePersonne): string;
        changePersonneCharge(): void;
        nombreNonNull(ngModel: any): number;
        /**
         * Récupere la liste des idws
         */
        getListeIdws(dossierSchema: Modele.IDossierSchema, listeIdws: Array<string>): void;
        /**
         *  Mets à jour la donnée Catégorie de l'emprunteur
         */
        enregistrerCategorieEmprunteur(): void;
        /**
         *  Mets à jour le statut d'occupation du logement actuel de l'emprunteur
         */
        enregistrerStatutOccupationLogEmp(): void;
        /**
         *  Mets à jour des attributs d'un objet
         */
        private majDonneesPartiellesObjet(identifiantClasse, objetMaj);
        majClient(personne: Modele.IPersonne): void;
        getTitreBandeauPersonne(personne: Modele.IPersonne): string;
        /**
         *  Création du particulier en PersonnePhysiqueMaj Neo
         */
        private genererPersonnePhysiqueMaj(detailParticulier);
        /**
         * Si la donnée existe, c'est un retour de connaissance client
         * Il faut savoir si c'est un ajout de prospect ou juste une simple modification de l'emprunteur
         * @returns s'il faut continuer le traitement ou non
         */
        private gererRetourConnaissanceClient();
        /**
         * Vérifie le dossier + charge la dernière version si souhaité
         * @param {boolean} chargerDossier
         * @returns
         */
        private controlerEtChargerDossier(chargerDossier);
    }
}

declare module instructionCredit {
    class FormulaireFinancementControleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.ITuileHandler {
        private $scope;
        private $window;
        private serviceAgentExtended;
        private financementService;
        private projetService;
        private formulaireClientService;
        private initialisationService;
        private modalService;
        private calculService;
        private $timeout;
        private $q;
        private modaleFactory;
        private $location;
        private $route;
        private navigationService;
        private $document;
        private controleDossierService;
        private $filter;
        static $inject: string[];
        private _compteCourant;
        private _traitementEligibiliteEffectue;
        private _eligibilieChargee;
        private _chargementEmprunteurEffectue;
        listeModalites: Array<instructionCredit.Modele.ISelectbox>;
        private nombreChargesRessourcesChargees;
        endettement: Modele.IEndettement;
        momentVerite: string;
        private libellePersonnes;
        dossierSchema: Modele.IDossierSchema;
        elements: Array<any>;
        listePersonnes: Array<instructionCredit.Modele.IPersonne>;
        planFinancementSchema: Modele.IPlanFinancementSchema;
        numeroPlanRelatif: string;
        resteAFinancer: number;
        creditInterne: instructionCredit.Modele.ICreditInterne;
        listeCreditsInterne: Array<instructionCredit.Modele.ICreditInterne>;
        listeCouverturesCredits: Array<instructionCredit.Modele.ICouvertureCredit>;
        listePhases: Array<any>;
        listeCreditsExterne: Array<instructionCredit.Modele.ICreditExterne>;
        listeTypeAssurance: Array<string>;
        sommeCreditsExternes: number;
        tableauFrais: MyWay.UI.ImwTableOptions;
        dataTableauFrais: Array<any>;
        natureFraisSelectionne: Array<Object>;
        donneesSyntheseFrais: Modele.SyntheseFrais;
        afficherGraphiques: boolean;
        chargesClient: Array<Modele.IChargePersonne>;
        donneesSyntheseFinancement: Modele.SynteseFinancement;
        tableauGaranties: MyWay.UI.ImwTableOptions;
        listeGaranties: Array<instructionCredit.Modele.IGarantie>;
        listeNatureGarantie: Array<instructionCredit.Modele.INatureGarantie>;
        listeConventionsGarantie: Array<instructionCredit.Modele.IConventionGarantie>;
        listeConventionsGarantieParIdProduit: Array<Array<instructionCredit.Modele.IConventionGarantie>>;
        idGarantieSelectionnee: string;
        dataTableauGarantie: Array<any>;
        tableauAssurances: MyWay.UI.ImwTableOptions;
        listeAssurances: Array<instructionCredit.Modele.IAssurance>;
        idAssuranceSelectionnee: string;
        dataTableauAssurance: Array<any>;
        loader: boolean;
        loaderEdition: boolean;
        creditsLoader: boolean;
        loaderCriteresRemboursement: boolean;
        chargementEnCoursDebranchementSmac: boolean;
        private erreursFonctionnelles;
        etiquetteTuile: string;
        configTuile: MyWay.UI.iMwConfigTuile;
        activationSmac: boolean;
        resultatSmac: instructionCredit.Modele.IResultatSmac;
        revenusParPersonne: Array<Array<instructionCredit.Modele.IRevenuPersonne>>;
        private nbreMajOk;
        /**
         * Contruction du formulaire
         * @param $scope: ng.IScope
         * @param propositionService: instructionCredit.Service.PropositionService
         */
        constructor($scope: ng.IScope, $window: ng.IWindowService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, financementService: instructionCredit.Service.FinancementService, projetService: instructionCredit.Service.ProjetService, formulaireClientService: instructionCredit.Service.ClientService, initialisationService: instructionCredit.Service.InitialisationService, modalService: MyWay.UI.IModalService, calculService: Service.CalculService, $timeout: ng.ITimeoutService, $q: ng.IQService, modaleFactory: instructionCredit.Service.ModaleFactory, $location: ng.ILocationService, $route: any, navigationService: MyWay.UI.INavigationService, $document: ng.IDocumentService, controleDossierService: Service.ControleDossierService, $filter: any);
        /**
         *  Initialise la page Financement
         */
        private initialisationPageFinancement();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessaires();
        /**
         *  Initialise les Watcher de la vue
         */
        private initWatchers();
        /**
         *  Charge les données catalogue dès le départ en asycnhone pour gain de performance
         *  Uniquement les données utiles à l'initialisation des données
         */
        private chargementDonneesSession();
        /**
         *  Réinitialisation des modalités de remboursement
         */
        changerModalitesRemboursement(): void;
        /**
         * Chargement des plans de financement
         * Si demande de bascule, pas besoin de charger les éléments de nouveau
         */
        private chargementInitial(chargerElements?, optim?);
        /**
         *  Liste des plans de Financement
         */
        private chargerPlanFinancementDetail();
        /**
         *  Charge l'emprunteur du dossier et calcule sa capacité de remboursement
         */
        private chargerEmprunteur();
        /**
         *  Vérifie l'éligibilité du dossier et agit en conséquence
         */
        private gererEligibilite();
        /**
         *  Eligibilité du dossier : vérifie la correspondance du profil PTZ
         */
        private isEligibiliteProfilPtzModifie(dataResultatEligibilite);
        /**
         *  S'il existe, récupère le crédit PTZ existant dans le plan de financement traité actuellement
         */
        private getCreditPtz();
        /**
         *  Ajoute un ptz à la liste des crédits
         */
        private ajouterCreditPtz();
        /**
         *  Supprime le ptz à la liste des crédits
         *  Vérifie si un ptz exsite déjà
         */
        private supprimerCreditPtz();
        onTuileClick(objetTuile: any): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Construction du tableau de Frais
         */
        constructionTableauFrais(): void;
        /**
         * Construction du tableau de garantie
         */
        constructionTableauGaranties(): void;
        /**
         * Construction du tableau d'assurance
         */
        constructionTableauAssurances(): void;
        /**
         * Fonction de vérification si il s'agit d'un compte courant
         */
        verificationCompteCourant(): void;
        /**
         * Action après sélection dans le tableau
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         *  Changement de proposition dans le panier: initialise les données du nouveau plan et lance son chargement
         */
        changementPlan(idws: string): void;
        /**
         *  Vérifie si une sauvegarde est nécessaire
         */
        private majPlanFinancement();
        /**
         * Construction credit interne
         */
        listerCreditInterne(): ng.IPromise<any>;
        /**
         * Construction des crédits externes
         */
        listerCreditExterne(): void;
        /**
         * Construction Garantie
         */
        listerGarantie(): void;
        /**
         * Construction la liste des identifiants produits des credits internes
         */
        listerIdentifiantsProduits(): Array<string>;
        /**
         * Construction du contenu du tableau des assurances
         */
        listerAssurance(): ng.IPromise<any>;
        /**
         * Affiche assurance creee
         */
        afficheAssurance(assuranceObj: Modele.IAssurance, conventionAssurance: Modele.IConventionResume): void;
        /**
         * Récupère les élements du plan de financement
         */
        private getElementsFinancement(chargerElements, planFinancement);
        /**
         * Fonction appellée au changement de proposition dans le panier
         */
        planFinancementChargement(index: number, chargerElements: boolean, optim?: Modele.IResultatPlanOptimisation): ng.IPromise<any>;
        /**
         * Affiche la popin Garantie
         */
        popinGarantie(): void;
        /**
         * Suppression d'une garantie
         */
        supprimerGarantie(): void;
        /**
         * Maj des couvertures garantie en mode synchrone
         */
        private majCouverturesGarantie(index, couverturesMisesAJours, listeIdCouverture, listeCouvertureCreditGarantie, garantieCreee, coutTotalGarantie, isFinance, financeMode, financeNbEcheances, isCouvertureEnQuotite, quotiteGlobale, majParCouverture);
        /**
         * Affiche garantie creee
         */
        afficheGarantie(garantieObj: instructionCredit.Modele.IGarantie): void;
        /**
         * Affiche la popin Assurance
         */
        popinAssurance(): void;
        /**
         * Création d'une assurance (ajout + mise à jour) en mode synchrone
         */
        private creerAssurance(index, assurancesCreees, listeIdCreditCouvParAss, listeIdentifiantPersonne, idConventionAssurance, codeAssuranceObligatoire, quotientCouverture, montantCotisation, tauxCotisation, siren, nomCompagnie);
        /**
         * Mise à jour des couvertures en mode synchrone suite à la création d'une assurance
         */
        majCouverturesAssurance(indexCouverture: number, listeIdCouverture: string[], quotientCouverture: number): ng.IPromise<void>;
        /**
         * Mise à jour des cotisations en mode synchrone suite à la création d'une assurance
         */
        majCotisationsAssurance(indexCotisation: number, listeIdCotisation: string[], montantCotisation: number, tauxCotisation: number): ng.IPromise<void>;
        /**
         * Suppression d'une asssurance
         */
        supprimerAssurance(): void;
        /**
         * Affiche la popin Crédit Interne
         */
        popinCreditInterne(creditInterne: instructionCredit.Modele.ICreditInterne): void;
        /**
         * Suppression d'un credit interne
         */
        supprimerCreditInterne(index: number, confirm?: boolean): void;
        /**
         * Création d'un credit interne (ajout + mise à jour)
         */
        private creerCreditInterne(idProduitFinancier, credit);
        /**
         * Affiche la popin Crédit Externe
         */
        popinCreditExterne(creditExterne: instructionCredit.Modele.ICreditExterne): void;
        /**
         * Suppression d'un credit externe
         */
        supprimerCreditExterne(index: number, confirm?: boolean): ng.IPromise<boolean>;
        /**
         * Création d'un credit externe
         */
        private creerCreditExterne(creditExterneMaj);
        /**
         * Contrôle si smac est activé
         */
        controleActivationSmac(): void;
        /**
         * Consulter le dossier smac
         */
        consulterSmac(): ng.IPromise<instructionCredit.Modele.IDossierSmac>;
        /**
         * Fonction permettant de caculer et d'afficher la capacité de Remboursement
         */
        calculCapaciteRemboursement(avecLoader: boolean): ng.IPromise<void>;
        private capaciteRemboursement(listeRessourcesCharges);
        /**
         * Permet de générer la liste de l'ensemble des ressources et charges
         */
        private getListeRessourcesCharges(charges, ressources);
        /**
         * Permet de calculer une proposition
         */
        private calculerProposition();
        /**
         *  Initialise les données après un clacul d'optimisation et recharge la proposition suite au résultat
         */
        private resetDonneesApresOptimisation(resultatPlanOptimisation);
        /**
         * Permet d'ajouter une proposition
         */
        ajouterProposition(): void;
        editionProposition(): void;
        private convertirBase64Pdf(result);
        infobulleSyntheseFinanciere: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        infobulleFrais: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        infobulleFinancement: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        /**
         * Méthodes permettant d'afficher les informations dans les tuiles du panier
         */
        affichageTuileLigne1(plan: Modele.IPlanFinancementSchema): string;
        affichageTuileLigne2(plan: Modele.IPlanFinancementSchema): string;
        affichageTuileLigne3(plan: Modele.IPlanFinancementSchema): string;
        /**
         * Permet de basculer une proposition dans le mode enModification
         */
        basculerPropositionEnModification(chargerElements?: boolean): void;
        /**
         * Affiche la popin des frais liés au dossier
         */
        popinDetailsFrais(): void;
        /**
         * Affiche la popin de détails du financment de l'opération
         */
        popinDetailsFinancement(): void;
        /**
         *  Permet d'ajouter le montant du reste à financer dans l'apport
         */
        ajouterResteAFinancer(): void;
        ouvertureVoletProposition(): void;
        /**
         * Fonction permettant de contrôler l'apport
         */
        controleApport(): void;
        /**
         * Fonction permettant de créer les objets PersonneSmac
         */
        creationPersonnesSmac(index: number, listePersonneSmac: Array<Modele.IEmprunteurSmac>): ng.IPromise<void>;
        /**
         * Fonction permettant de créer les objets creditSmac
         */
        private creationCreditSmac(listeCreditSmac, creditInterneCree, creditParamRevision, creditPalierTaux);
        /**
         * Fonction permettant la création (ou maj) de dossier SMAC
         */
        private creationDossierSmac(creditInterneCree, creditParamRevision, creditPalierTaux, listeIdsStandard);
        /**
         * Fonction permettant de lire une valeur contenue dans un cookie en fonction d'un code
         */
        lectureCookie(code: string): string;
        private majTotemCredits();
        /**
         * Popin d'ajout / gestion des frais
         */
        popinAjoutFrais(): void;
        /**
         *  Génrè le contenu des frais
         */
        private genererFraisDossier();
        /**
         * Permet d'ajouter ou de supprimer le crédit PTZ
         */
        inclureCreditPtz(): void;
        /**
         *  Récupère le libellé de la nature du pret selon son code
         */
        private getLibelleNaturePret(codeIndiceNaturePret);
        /**
         * Tarfication smac
         */
        /**
         * Débranchement vers smac
         */
        debranchementSmac(): void;
        /**
         * Retour du débranchement smac
         */
        retourDebranchementSmac(): void;
        /**
         * Mise à jour des crédits en retour de consultation smac
         */
        majConsultationSmac(resultDossierSmac: instructionCredit.Modele.IDossierSmac, isTauxDepart: boolean): ng.IPromise<void>;
        /**
         * Fonction récursive de maj des crédits en retour de consultation smac
         */
        majCreditRetourSmac(indexRecursivite: number, creditsMaj: any[]): ng.IPromise<void>;
        /**
         * Vérifie le dossier + charge la dernière version si souhaité
         * @param {boolean} chargerDossier
         * @returns
         */
        private controlerEtChargerDossier(chargerDossier);
    }
}

declare module instructionCredit {
    class FormulaireProjetControleur {
        private $scope;
        private serviceAgentExtended;
        private projetService;
        private navigationService;
        private initialisationService;
        private modalService;
        private mwsfAdresseService;
        private calculService;
        private clientService;
        private financementService;
        private $q;
        private controleDossierService;
        private authentificationService;
        static $inject: string[];
        private _initialisationAdresse;
        dossierSchema: Modele.IDossierSchema;
        calculEnveloppe: string;
        devises: Array<instructionCredit.Modele.IDevise>;
        negociationNotaire: boolean;
        emoluments: Array<instructionCredit.Modele.IEmolument>;
        modeOccupationSelectionne: instructionCredit.Modele.ISelectboxNumber;
        destinationBienSelectionnee: instructionCredit.Modele.ISelectboxNumber;
        logementHlm: boolean;
        emolument: instructionCredit.Modele.IEmolument;
        unitesPermisContruire: Array<instructionCredit.Modele.IUnitesPermisConstruire>;
        uniteePermisConstruire: instructionCredit.Modele.IUnitesPermisConstruire;
        prescripteurBoolean: boolean;
        prescripteur: string;
        elements: Array<any>;
        tocs: Array<instructionCredit.Modele.ITypeObjetCommercial>;
        tors: Array<instructionCredit.Modele.ITypeObjetReglemente>;
        libelleTocTor: string;
        tocTorVide: boolean;
        formulaireProjetType: Array<instructionCredit.Modele.FormulaireProjetType>;
        formulaireProjetDelais: Array<string>;
        listeDestination: Array<instructionCredit.Modele.ISelectboxNumber>;
        listeModeOccupation: Array<instructionCredit.Modele.ISelectboxNumber>;
        formulaireProjetCadre: Array<string>;
        itemNature: instructionCredit.Modele.FormulaireProjetNature;
        itemNiveau: instructionCredit.Modele.FormulaireProjetNiveau;
        itemDelais: instructionCredit.Modele.IFormulaireProjetDelais;
        formulaireProjetPerformance: Array<instructionCredit.Modele.ISelectbox>;
        formulaireProjetTypeLogement: Array<instructionCredit.Modele.IFormulaireProjetTypeLogement>;
        private champsObjetLogement;
        private champsObjetTravaux;
        zoneLocalites: instructionCredit.Modele.ILocalites;
        affichageAdresse: myway.comAdresseDqe.Adresse;
        settingsAdresse: myway.comAdresseDqe.IAdresseSettings;
        creditsInternesRegroupement: Array<Modele.IPretReamenagement>;
        creditsExternesRegroupement: Array<Modele.IPretReamenagement>;
        configTuile: MyWay.UI.iMwConfigTuile;
        titreTuileAjoutInterne: string;
        titreTuileAjoutExterne: string;
        titreBlocRachatRegroupement: string;
        private infobulleEnveloppe;
        private infobulleAdresse;
        private affichageDetail;
        private messageDetail;
        montantNotaire: any;
        montantAcquisition: string;
        montantTerrain: string;
        private totalMontantNotaire;
        private totalMontantAcquisition;
        private totalMontantTerrain;
        private totalCoutTotalObjet;
        private tauxNotaire;
        private totalMontant;
        private champsMontant;
        private champsInformationsComplementaires;
        dateFinConstruction: Date;
        typologiesTravaux: Array<instructionCredit.Modele.ITypologieTravaux>;
        private listePrirRegroupement;
        formulaireProjetTechnique: Array<instructionCredit.Modele.ISelectbox>;
        formulaireProjetOrigine: Array<instructionCredit.Modele.ISelectbox>;
        contexteOrigine: instructionCredit.Modele.ISelectbox;
        contexteTechnique: instructionCredit.Modele.ISelectbox;
        loader: boolean;
        loaderRachat: boolean;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param projetService: instructionCredit.Service.ProjetService
         * @param navigationService: MyWay.UI.INavigationService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, projetService: instructionCredit.Service.ProjetService, navigationService: MyWay.UI.INavigationService, initialisationService: instructionCredit.Service.InitialisationService, modalService: MyWay.UI.IModalService, mwsfAdresseService: myway.comAdresseDqe.AdresseService, calculService: instructionCredit.Service.CalculService, clientService: Service.ClientService, financementService: Service.FinancementService, $q: ng.IQService, controleDossierService: Service.ControleDossierService, authentificationService: Service.AuthentificationService);
        /**
         *  Initialise la page Projet
         */
        private initialisationPageProjet();
        /**
         *  Charge les données catalogue dès le départ en asycnhone pour gain de performance
         *  Uniquement les données utiles à l'initialisation des données
         */
        private chargementDonneesSession();
        /**
         *  Vérifie les mises à jours nécessaires et contrôle si la page peut être chargée
         */
        private verificationMajNecessaires();
        /**
         *  Initialise la liste des modes d'occupation du projet en fonction de l'usage (destination) selectionné
         */
        private chargementModeOccupationByUsageDuBien();
        /**
         *  Initialise la liste des modes d'occupation du projet et selectionne un mode par défaut
         */
        private majModeOccupation();
        /**
         * Vérifie l'uniformité des données et le retour de sdpi si besoin
         */
        private verificationPrescripteur();
        /**
         * Charge les données de la page projet
         * @returns
         */
        private chargementDonneesProjet();
        private chargementTocTor();
        /**
         *  Libelle TOC TOR
         */
        private genererLibelleTocTor(projet);
        /**
         * Affiche la popin du Bien A vendre
         */
        popinBienAVendre(bien: instructionCredit.Modele.IBienAVendre): void;
        /**
         * Affiche la popin du Rédacteur
         */
        popinRedacteur(): void;
        /**
         * Affiche la popin du PTZ
         */
        /**
         * Permet de gérer l'affichage des champs montant supllémentaires
         */
        afficherDetail(): void;
        affichageMontant(): void;
        /**
         * Permet de calculer les frais de notaire
         */
        calculFraisNotaire(): void;
        /**
         * Permet de calculer le cout total de l'objet
         */
        calculCoutTotalObjet(): void;
        private objetSelectionneSelectbox(liste, code);
        selectionCodeUsage(selection: instructionCredit.Modele.ISelectboxNumber): void;
        selectionModeOccupation(selection: instructionCredit.Modele.ISelectboxNumber): void;
        /**
         * Vérification de la zone en fonction de l'adresse
         */
        private verificationZoneRobien();
        /**
         * Mise à jour des infos projet en fonction du composant adresse
         */
        miseAJourAdresse(): void;
        /**
         * Affiche la popin de recherche avancée TOC-TOR
         */
        popinTocTor(): void;
        private definirTocTor(tocSelectionne, torSelectionne);
        affichageInformationsComplementaires(): void;
        affichageChampsPrescripteur(): void;
        private affichagePrescripteur();
        controleSurfaceHabitableConstruction(): void;
        controleSurfaceHabitableBatiment(): void;
        /**
         * Affiche la popin d'ajout de crédit interne
         */
        popinAjoutCreditsInternes(): void;
        private ajoutPretReamenagement(index, liste, dateRa);
        onTuileClick(objetTuile: Modele.IPretReamenagement): void;
        onAction1(): void;
        onAction2(): void;
        onAction3(): void;
        onAction4(): void;
        onClickLeft(): void;
        onClickRight(): void;
        /**
         * Affiche la popin de modification d'un crédit interne réaménagé
         */
        popinCreditInterneReamenage(credit: Modele.IPretReamenagement): void;
        /**
         * Affiche la popin de modification d'un crédit externe réaménagé
         */
        popinCreditExterneReamenage(credit: Modele.IPretReamenagement): void;
        sdpi(): void;
        retourSdpi(): void;
        recupererPreaPrir(elements: Array<Object>): void;
        initComplementDossier(libelle: string): void;
        /**
         *  Permet de mettre à jour la date de fin de construction
         */
        majDateFinConstruction(): void;
        private majProjetReamenagement();
        private diffDatesEnMois(date1, date2);
        verifCoutAcqsBatimentHabitationIsNotNull(): void;
        verifSoulteFinanceIsNotNull(): void;
        verifMontantMoblFinancierIsNotNull(): void;
        verifCoutTravauxIsNotNull(): void;
        verifCoutTerrIsNotNull(): void;
        verifCoutConstructionFinancierIsNotNull(): void;
        verifCoutTravauxAChargeMoaIsNotNull(): void;
        verifMontantRachCrenIsNotNull(): void;
        verifMontantDiversIsNotNull(): void;
        verifCoutFrsNotaireIsNotNull(): void;
        verifMontantFrsNegocieBatimentIsNotNull(): void;
        verifMontantFrsNegocieTerrainIsNotNull(): void;
        majCodeLogementHlm(): void;
        /**
         *  Mets à jour des attributs d'un objet
         */
        private majDonneesPartiellesObjet(identifiantClasse, objetMaj, avecLoader?);
    }
}

declare module instructionCredit {
    class GraphiqueAreaControleur {
        donnees: any;
        width: number;
        height: number;
        private padding;
        private pathClass;
        private xScale;
        private yScale;
        private xAxisGen;
        private yAxisGen;
        private area;
        private graphe2;
        private area2;
        /**
         * Contruction du graphique de type Area
         */
        constructor();
        private dessinerGraphique(svg);
        private setChartParameters();
    }
}

declare module instructionCredit {
    class GraphiqueFraisControleur {
        private $scope;
        static $inject: string[];
        donnees: Modele.SyntheseFrais;
        afficher: boolean;
        frais: any[];
        height: number;
        width: number;
        radius: number;
        donutWidth: number;
        legendRectSize: number;
        legendSpacing: number;
        private pathClass;
        private svg;
        /**
         * Contruction du graphique de type Arc
         */
        constructor($scope: ng.IScope);
        private creerSvg();
        private dessinerDonut(color);
        private legende(color, frais);
    }
}

declare module instructionCredit {
    class GraphiquePretControleur {
        private $scope;
        private financementService;
        private projetService;
        private initialisationService;
        private $q;
        static $inject: string[];
        creditsInternes: Array<Modele.ICreditInterne>;
        creditsExternes: Array<Modele.ICreditExterne>;
        afficher: boolean;
        elements: Array<any>;
        creditLissage: Modele.CreditGraphique;
        intersectionsMax: Array<number>;
        private padding;
        private pathClass;
        private xScale;
        private yScale;
        private xAxisGen;
        private yAxisGen;
        private area;
        private listeCredits;
        private dureesPhases;
        private dureeMax;
        private echeanceMax;
        private grapheReference;
        private creditGraphique;
        private colors;
        private graphs;
        private graphiqueDessine;
        private margin;
        private legendRectSize;
        width: number;
        height: number;
        /**
         * Contruction du graphique de type Area
         */
        constructor($scope: ng.IScope, financementService: instructionCredit.Service.FinancementService, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService, $q: ng.IQService);
        /**
         * Permet de générer les points d'intersection pour chaque crédit
         */
        private creationPhases();
        /**
         * Permet de générer les points d'intersection pour chaque crédit
         */
        private creationPoints();
        /**
         * Permet de dessiner le graphique
         */
        private dessinerGraphique(svg);
        /**
         * Permet de paramétrer les axes X et Y
         */
        private parametresAxes();
        /**
         * Permet de dessinner les axes X et Y
         */
        private dessinerAxes(svg);
        /**
         * Permet d'ajouter la légende au graphique
         */
        private legende(svg, color);
        /**
         * Permet de traiter les crédits internes pour les transformer dans le bon format
         */
        private traitementCreditsInternes();
        /**
         * Permet de traiter les crédits externes pour les transformer dans le bon format
         */
        private traitementCreditsExternes();
    }
}

declare module instructionCredit {
    class GraphiqueSyntheseControleur {
        private $scope;
        static $inject: string[];
        endettement: Modele.IEndettement;
        private donnees;
        private feuxTricolores;
        private pathClass;
        private width;
        private height;
        private radius;
        private infoWidth;
        /**
         * Contruction du graphique de type Area
         */
        constructor($scope: ng.IScope);
        private dessinerDonut(couleurEtat);
        private descriptionCharge(couleurEtat);
    }
}

declare module instructionCredit {
    class ModaleAjoutChargesControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        chargeTemporaire: instructionCredit.Modele.IChargePersonne;
        chargeHorsEtablissement: boolean;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des charges
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutComptesControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        compteTemporaire: instructionCredit.Modele.IComptePersonne;
        moyenPaiement: boolean;
        /**
         * Permet de construire la popin d'affichage des comptes
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutComptesHorsCeControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        compteTemporaire: instructionCredit.Modele.IComptePersonne;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des comptes hors ce
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutCreditIntRegroupementControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private $modalInstance;
        private projetService;
        private initialisationService;
        private modaleFactory;
        static $inject: string[];
        modalDatas: any;
        headerText: string;
        toc: string;
        private creditsPresentsDansDossier;
        dateEnvisageeRa: Date;
        regroupement: boolean;
        tableauCreditsInternes: MyWay.UI.ImwTableOptions;
        creditsInternes: Array<Modele.IDetailPret>;
        creditsSelectionnes: Array<Modele.IPretReamenagement>;
        loader: boolean;
        colonneOrigine: MyWay.UI.ImwTableColumnOptions;
        colonneDateFin: MyWay.UI.ImwTableColumnOptions;
        colonneDuree: MyWay.UI.ImwTableColumnOptions;
        colonneNumCredit: MyWay.UI.ImwTableColumnOptions;
        colonneCrd: MyWay.UI.ImwTableColumnOptions;
        colonneLibProduit: MyWay.UI.ImwTableColumnOptions;
        colonneEcheance: MyWay.UI.ImwTableColumnOptions;
        colonnePeriodicite: MyWay.UI.ImwTableColumnOptions;
        /**
         * Permet de construire la popin Ajout des Crédits Internes au Regroupement
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService, modaleFactory: instructionCredit.Service.ModaleFactory);
        onSelectionChange(selectedObject: Object): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutEpargnesHorsCeControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        epargneTemporaire: instructionCredit.Modele.IEpargnePersonne;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des epargnes
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutFraisControleur {
        private $modalInstance;
        private initialisationService;
        private $q;
        static $inject: string[];
        modalDatas: any;
        chargementEnCours: boolean;
        creditsInternes: Array<Modele.ICreditInterne>;
        listeNatureFrais: Array<Modele.IAccessoireType>;
        natureFrais: Modele.IAccessoireType;
        natureModification: Object;
        private listeIdwsAccessoires;
        /**
         * Permet de construire la popin d'affichae du détail des frais
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: any, data: any, initialisationService: Service.InitialisationService, $q: ng.IQService);
        /**
         * Permet de valider la popin
         */
        valider(): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         *  Mets à jour l'accessoire lié au crédit
         */
        private majAccessoireLie(accessoireLie, credit, partFinancierMaj);
        /**
         *  Mets à jour la cotisation (avec le nouveau taux et montant)
         */
        private majCotisation(cotisation, tauxFrais, montantFrais);
    }
}

declare module instructionCredit {
    class ModaleAjoutRevenusControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        revenuTemporaire: instructionCredit.Modele.IRevenuPersonne;
        revenuHorsEtablissement: boolean;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des revenus
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAjoutRevenusFiscauxControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        static $inject: string[];
        modalDatas: any;
        revenuFiscalTemporaire: instructionCredit.Modele.IRevenuFiscalPersonne;
        enModification: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin de gestion des revenus fiscaux
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleAlerteNeoControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        /**
         * Permet de construire la popin d'affichae du détail des frais
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: any, data: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleAlerteQuitterControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        valider(): void;
        annuler(): void;
    }
}

declare module instructionCredit {
    class ModaleBienAVendreControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        modesAcquisition: Array<instructionCredit.Modele.ISelectbox>;
        modeAcquisitionSelectionne: instructionCredit.Modele.ISelectbox;
        typesDeVente: Array<instructionCredit.Modele.ISelectbox>;
        typeDeVenteSelectionne: instructionCredit.Modele.ISelectbox;
        dateAcquisition: Date;
        dateEstimation: Date;
        /**
         * Permet de construire la popin du bien a vendre
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleControleDossierControleur {
        private $modalInstance;
        private serviceAgentExtended;
        private $q;
        private initialisationService;
        private controleDossierService;
        static $inject: string[];
        modalDatas: any;
        listeControles: Array<Modele.AnomalieDossier>;
        titrePartieTraitee: string;
        avecRedirection: boolean;
        pageActuelle: boolean;
        libelleBouton: string;
        chargementEnCours: boolean;
        /**
         * Permet de construire la popin
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: any, data: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, initialisationService: Service.InitialisationService, controleDossierService: Service.ControleDossierService);
        /**
         *  Rafraichit les données de la popin
         *  /!\ Mets à jour les données nécessaire en amont
         */
        rafraichir(): void;
        /**
         * Fermeture de la popin
         */
        valider(): void;
        /**
         * Gère le libellé du bouton d'action principale pour la popin
         */
        private getLibelleBouton();
        /**
         * Recherche les controles pour la page traitée actuellement
         */
        rechargementControles(): ng.IPromise<void>;
    }
}

declare module instructionCredit {
    class ModaleCreditExtRegroupementControleur {
        private $scope;
        private $modalInstance;
        projetService: instructionCredit.Service.ProjetService;
        private initialisationService;
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        credit: Modele.IPretReamenagement;
        titre: string;
        reglementations: Array<Modele.ISelectboxNumber>;
        dateFinCredit: Date;
        dateRa: Date;
        periodicites: Array<Modele.ISelectbox>;
        reglementation: Modele.ISelectboxNumber;
        periodicite: Modele.ISelectbox;
        etablissements: Array<Object>;
        erreurs: Array<string>;
        creditAffecte: boolean;
        aFinancerIndemnite: boolean;
        aFinancerMainLevee: boolean;
        preavisContractuel: boolean;
        regroupement: boolean;
        /**
         * Permet de construire la popin Ajout des Crédits Externes au Regroupement
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        private validationChamps();
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleCreditIntRegroupementControleur {
        private $scope;
        private $modalInstance;
        private projetService;
        private initialisationService;
        static $inject: string[];
        credit: Modele.IPretReamenagement;
        dateDuRa: Date;
        toc: string;
        titre: string;
        chargement: boolean;
        preavisContractuel: boolean;
        aFinancerIndemnite: boolean;
        aFinancerMainLevee: boolean;
        /**
         * Permet de construire la popin Ajout des Crédits Internes au Regroupement
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, projetService: instructionCredit.Service.ProjetService, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
        /**
         * Permet de mettre à jour le montant d'Indemnité de RA
         */
        rafraichir(): void;
    }
}

declare module instructionCredit {
    class ModaleDetailsEligibiliteControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        /**
         * Permet de construire la popin de gestion de la situation BDF
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($modalInstance: any, data: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleDetailsFinancementControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        planFinancement: Modele.IPlanFinancementSchema;
        synthese: Modele.SynteseFinancement;
        creditsSyntheseFinancement: Array<Modele.CreditSyntheseFinancement>;
        coutOperation: number;
        sommeCreditsExternes: number;
        endettement: Modele.IEndettement;
        /**
         * Permet de construire la popin d'affichae du détail des frais
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: any, data: any);
        /**
         * Permet de créer le tableau de synthèse avec les crédits INTERNES
         */
        private syntheseCreditsInternes();
        /**
         * Permet de créer le tableau de synthèse avec les crédits EXTERNES
         */
        private syntheseCreditsExternes();
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleDetailsFraisControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        frais: Modele.SyntheseFrais;
        /**
         * Permet de construire la popin d'affichae du détail des frais
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: any, data: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleCreditExterneControleur {
        private $scope;
        private $modalInstance;
        private serviceAgentExtended;
        private initialisationService;
        private financementService;
        static $inject: string[];
        modalDatas: any;
        creditExterneTemporaire: instructionCredit.Modele.ICreditExterne;
        naturePret: instructionCredit.Modele.ISelectbox;
        typePeriodicite: instructionCredit.Modele.ISelectbox;
        typePeriodiciteDiffere: instructionCredit.Modele.ISelectbox;
        naturesPret: Array<instructionCredit.Modele.ISelectbox>;
        typesPeriodicite: Array<instructionCredit.Modele.ISelectbox>;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin des credits externes
         * @param $scope: ng.IScope
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService, financementService: instructionCredit.Service.FinancementService);
        changeNaturePret(): void;
        changeTypePeriodicite(): void;
        changeTypePeriodiciteDiffere(): void;
        calculValeursAmortissement(): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
    }
}

declare module instructionCredit {
    class ModaleCreditInterneControleur {
        private $scope;
        private $modalInstance;
        private financementService;
        private $q;
        private $filter;
        private initialisationService;
        static $inject: string[];
        modalDatas: any;
        creditInterneTemporaire: instructionCredit.Modele.ICreditInterne;
        enModification: boolean;
        fixerTaux: boolean;
        calculAFaire: boolean;
        saisieTaux: boolean;
        produitFinancier: Modele.IProduitFinancier;
        libelleLabelTauxDefini: string;
        erreurTaux: string;
        erreurDuree: string;
        typePret: string;
        listeCategorieAffichee: Array<instructionCredit.Modele.IFamillesProduits>;
        listeProduitAffichee: Array<instructionCredit.Modele.IProduitsAutorises>;
        listeProduitsStandard: Array<instructionCredit.Modele.IFamillesProduits>;
        listeProduitsLissage: Array<instructionCredit.Modele.IFamillesProduits>;
        listeIdsProduitsStandard: Array<string>;
        listeGammesLissage: Array<instructionCredit.Modele.IGammeLissage>;
        navcolSelection: instructionCredit.Modele.IProduitsAutorises;
        creditsLoader: boolean;
        listeNombrePeriodesCredit: Array<number>;
        creditPrisEnCompte: boolean;
        private _caissesRegleNeo;
        private _regleNeoActive;
        /**
         * Permet de construire la popin du bien a vendre
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, financementService: instructionCredit.Service.FinancementService, $q: ng.IQService, $filter: any, initialisationService: instructionCredit.Service.InitialisationService);
        chargeCategorie(categorie: string): void;
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
        supprimer(): void;
        verificationTaux(): void;
        verificationBornesDuree(): void;
        /**
         *  Gère une règle de gestion issue de néo
         *  Pour le mode d'expression 3 : un paramétrage NEO (dans le fichier paramétre FIPARAM) contient 3 établissements 14265,12579,13825
         *  pour lesquels l'utilisateur doit saisir la marge et non pas le taux. Le socle ne sachant pas gérer à ce jour une mise à jour en marge,
         *  il faut que l'IHM mycredimmo déduise le taux en additionnant la marge plus l'indice afin d'envoyer la taux résultant au socle NEO.
         */
        private gestionRegleNeo();
        /**
         *  Pour le mode d'expression 4 : La marge par défaut est en fonction de la durée du crédit
         */
        private majDureeCredit();
    }
}

declare module instructionCredit {
    class ModaleAssuranceControleur {
        private $scope;
        private $modalInstance;
        private initialisationService;
        private $q;
        private financementService;
        private $filter;
        static $inject: string[];
        modalDatas: any;
        loader: boolean;
        codeAssuranceObligatoire: number;
        listeIdProduitFinancier: Array<string>;
        listeIdwsProduitSelectionnee: Array<string>;
        listePersonneSelectionnee: Array<Modele.IPersonne>;
        affichageRechercheAvancee: boolean;
        listeConventionsAssurance: Modele.IConventionResume[];
        listeConventionAfficheeN1: Array<any>;
        listeConventionAfficheeN2: Array<any>;
        listeConventionAfficheeN3: Array<any>;
        listeConventionAfficheeN4: Array<any>;
        oldSelectionCol: any;
        listeTypeAssurance: Array<Modele.ITypeAssurance>;
        conventionAssurance: Modele.IConventionAssurance;
        libelleConventionSelectionnee: string;
        isExterne: boolean;
        siren: string;
        nomCompagnie: string;
        quotientCouverture: number;
        afficheMontantCotisation: boolean;
        affichePlageMontantCotisation: boolean;
        afficheTauxCotisation: boolean;
        affichePlageTauxCotisation: boolean;
        montantCotisation: number;
        tauxCotisation: number;
        min: number;
        max: number;
        step: number;
        nbDecimale: number;
        listeTaux: Array<Object>;
        objetTauxCotisation: Object;
        erreurConventionNonPrisEnCompte: boolean;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin assurance
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, initialisationService: instructionCredit.Service.InitialisationService, $q: ng.IQService, financementService: instructionCredit.Service.FinancementService, $filter: any);
        resetConvention(): void;
        majListeProduit(): void;
        majListePersonne(): void;
        rechercheAvancee(): void;
        private getLibelleConvention(convention);
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        chargerConventions(selectionCol: any): void;
        chargerFormulaireConvention(): void;
        /**
         * Contrôle si la valeur saisie (montant ou taux) est entre min et max
         */
        controlePlage(valeur: number, min: number, max: number): boolean;
        changeTaux(): void;
        /**
         * Controle du format Siren : uniquement des chiffres
         */
        controleFormatSiren(): void;
        controleDoublonCouverture(): boolean;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleGarantieControleur {
        private $scope;
        private $modalInstance;
        private initialisationService;
        private $q;
        private financementService;
        private mwgcRechercherPersonneService;
        private $filter;
        private clientService;
        static $inject: string[];
        private _listeConventions;
        modalDatas: any;
        tableauCredit: MyWay.UI.ImwTableOptions;
        listeIdProduitFinancier: Array<string>;
        affichageRechercheAvancee: boolean;
        loaderNature: boolean;
        loaderCouverture: boolean;
        loaderPopin: boolean;
        listeTypeAccessoire: Modele.IAccessoireType[];
        listeNatureGarantie: Array<Modele.INatureGarantie>;
        natureGarantieSelectionnee: Modele.INatureGarantie;
        doublonNatureGarantie: string;
        isSuretePersonnelle: boolean;
        isSureteReelleHP: boolean;
        isSureteReelleNonHP: boolean;
        isSureteAutre: boolean;
        isAvecConvention: boolean;
        garantieReelleHPTmp: Modele.IGarantieReelle;
        listeConvention: Array<Modele.IConventionGarantie>;
        tableauConvention: MyWay.UI.ImwTableOptions;
        conventionTmp: Modele.IConventionGarantie;
        conventionSelectionnee: Modele.IConventionGarantie;
        libelleNatureCaution: string;
        isCouvertureEnQuotite: boolean;
        erreurConventionNonPrisEnCompte: boolean;
        idConventionSaccef: string;
        isSaccef: boolean;
        isSaccefMaisSaisissable: boolean;
        idGarant: string;
        garant: MyWay.Model.Client;
        organismeCautionnement: Modele.IResultatGarantPersonnePM;
        listeCouvertureCreditGarantie: Array<Modele.ICouvertureCreditGarantie>;
        tableauCouvertureCreditGarantie: MyWay.UI.ImwTableOptions;
        couvertureCreditGarantie: Modele.ICouvertureCreditGarantie;
        couvertureGlobaleQuotite: number;
        couvertureGlobaleMontant: number;
        couvertureReste: number;
        couvertureQuotite: number;
        coutTotalGarantie: number;
        coutTotalGarantieTmpSRHP: number;
        cotisationMontant: number;
        cotisationTaux: number;
        afficheMontantCotisation: boolean;
        affichePlageMontantCotisation: boolean;
        afficheTauxCotisation: boolean;
        affichePlageTauxCotisation: boolean;
        min: number;
        max: number;
        step: number;
        nbDecimale: number;
        listeTauxOuMontant: Object[];
        objetCotisation: Object;
        selectTauxCotisation: boolean;
        montantsFraisGarantieParDefaut: Object[];
        montantsFraisGarantieModif: Object[];
        etatBoutonValiderCotisationSRHP: boolean;
        etatBoutonValiderCoutTotalSRHP: boolean;
        finance: boolean;
        financeMode: number;
        financeNbEcheances: number;
        erreurs: Array<string>;
        /**
         * Permet de construire la popin du bien a vendre
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, initialisationService: instructionCredit.Service.InitialisationService, $q: ng.IQService, financementService: instructionCredit.Service.FinancementService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService, $filter: any, clientService: instructionCredit.Service.ClientService);
        /**
         * Construction du tableau de crédits
         */
        initialisationTableauCredit(): MyWay.UI.ImwTableOptions;
        resetNatureGarantie(): ng.IPromise<void>;
        resetConvention(): ng.IPromise<void>;
        resetCouverture(): ng.IPromise<void>;
        resetCotisation(): ng.IPromise<void>;
        rechercheAvancee(): void;
        natureGarantieGroupes(item: Modele.INatureGarantie): string;
        changeNatureGarantie(): void;
        controleDoublonCouverture(): void;
        listerConventions(): void;
        chargerConventions(idsConv: string[]): void;
        /**
         * Construction du tableau de convention
         */
        initialisationTableauConvention(): MyWay.UI.ImwTableOptions;
        /**
         * Construction du tableau de couverture des crédits
         */
        initialisationTableauCouvertureCreditGarantie(): MyWay.UI.ImwTableOptions;
        /**
         * Action après sélection dans le tableau
         */
        onSelectionChange(selectedObject: Object): void;
        /**
         * Action de validation du choix de convention (uniquement sureté personnelle)
         */
        validerConvention(): void;
        /**
         * Récupération du libellé de type de frais
         */
        getLibelleTypeFrais(garantie: Object): void;
        /**
         * Chargement du tableau de couvertures
         */
        chargerTableauCouvertures(): void;
        /**
         * Popin recherche d'un garant pour sureté personnelle
         */
        rechercheGarant(): void;
        /**
         * Popin recherche d'un garant pour sureté réelle ou autre
         */
        /**
         * Sélection d'un garant pour sureté réelle ou autre
         */
        /**
         * Chargement des couvertures si garantie non conventionnée => sureté personnelle ou réelle HP uniquement
         */
        chargerCouverturesNonConventionne(): void;
        /**
         * Récupère le montant emprunté total
         */
        getMontantEmprunteTotal(): number;
        /**
         * Action de changement de taux de la liste déroulante => sureté personnelle uniquement
         */
        changeTauxCotisationSP(): void;
        /**
         * Action de validation du champ quotité ou montant global couverture => sureté personnelle uniquement
         */
        validerCouvertureGlobalSP(): void;
        /**
         * Action de validation de la couverture => sureté personnelle
         */
        validerCouvertureSP(): void;
        /**
         * Calcul du montant global en fonction des montants des couvertures => sureté personnelle uniquement
         */
        calculMontantCouvertureGlobaleSP(): void;
        /**
         * Calcul de la quotité global en fonction des couvertures => sureté personnelle uniquement
         */
        calculQuotiteCouvertureGlobaleSP(): void;
        /**
         * Action de validation du champ montant cotisation => sureté personnelle uniquement
         */
        validerMontantCotisationSP(): void;
        /**
         * Récupération des montants de cotisation par défaut => sureté personnelle non conventionnée uniquement
         */
        getMontantsCotisationParDefautSPNonConventionnee(): void;
        /**
         * Action de modification du champ montant global couverture => sureté réelle ou autre uniquement
         */
        majCouvertureGlobaleSR_SA(): void;
        /**
         * Action de validation du champ montant cotisation => sureté réelle HP uniquement
         */
        validerMontantCotisationSRHP(): void;
        /**
         * Action de validation du champ montant total => sureté réelle HP uniquement
         */
        validerMontantTotalSRHP(): ng.IPromise<any>;
        /**
         * Estimation des montants de cotisation par défaut => sureté réelle HP uniquement
         */
        estimerMontantsCotisationParDefautSRHP(): ng.IPromise<any>;
        /**
         * Récupération des montants des cotisation => sureté réelle HP uniquement
         */
        private getMontantCotisationsSRHP(index, listeIdCouverture, isParDefaut);
        /**
         * Affecte les montants des cotisation par défaut pour chaque crédit => sureté réelle HP uniquement
         */
        affecteMontantCotisationsSRHP(isParDefaut: boolean): void;
        /**
         * Récupération du montant total par défaut => sureté réelle non HP uniquement
         */
        getMontantTotalParDefautSRNonHP(): ng.IPromise<any>;
        /**
         * Récupération des montants des cotisation => sureté réelle non HP uniquement
         */
        private getMontantCotisationsSRNonHP(index, listeIdCouverture, montantTotal);
        /**
         * Calcul taux cotisation en fonction d'un montant
         */
        calculTauxCotisation(): void;
        /**
         * Calcul du reste à financer
         */
        calculCouvertureReste(): void;
        /**
         * Calcul du coût global garantie
         */
        calculerCoutGlobalGarantie(): void;
        /**
         * Mise a jour de la checkbox financé
         */
        majFinance(): void;
        /**
         * Contrôle si la valeur saisie (montant ou taux) est entre min et max
         */
        controlePlage(valeur: number, min: number, max: number): boolean;
        /**
         * Suppression de la garantie HP temporaire
         */
        suppressionGarantieHPTmp(): ng.IPromise<void>;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleListeAnomaliesControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        listeAnomalies: Array<Modele.AnomalieDossier>;
        /**
         * Permet de construire la popin
         * @param $modalInstance: any
         * @param data: any
         */
        constructor($modalInstance: any, data: any);
        /**
         * Fermeture de la popin
         */
        valider(): void;
    }
}

declare module instructionCredit {
    class ModalePTZControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        private listeNatureTravaux;
        private natureTravaux;
        private fraisEtudeAssainissement;
        private travauxAssainissement;
        private fraisEtudeBouquet;
        private travauxToiture;
        private travauxIsolationExterieur;
        private travauxIsolationPortes;
        private travauxChauffageEau;
        private travauxChauffageRenouvelable;
        private travauxEauRenouvelable;
        private fraisEtudePerformance;
        private travauxEntreprise1;
        private travauxEntreprise2;
        private travauxEntreprise3;
        private travauxEntreprise4;
        private travauxEntreprise5;
        private travauxEntreprise6;
        private travauxSupplementaires;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        valider(): void;
        annuler(): void;
        private NatureParCode(code);
    }
}

declare module instructionCredit {
    class ModaleRechercheClientBancaireControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private $modalInstance;
        private clientService;
        private $q;
        private $filter;
        static $inject: string[];
        modalDatas: any;
        headerText: string;
        clientBancaireSelectionne: Modele.IInformationEntiteTitulaire;
        tableauResultats: MyWay.UI.ImwTableOptions;
        resultats: Array<Modele.IInformationEntiteTitulaire>;
        identifiantEntieTitulaire: number;
        chargementEnCours: boolean;
        emprunteur: Modele.IEmprunteur;
        /**
         * Permet de construire la popin de recherche de client bancaire
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         * @para  $q: ng.IQService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: any, clientService: instructionCredit.Service.ClientService, data: any, $modal: any, $q: ng.IQService, $filter: any);
        getTableauResultatsEntiteTitulaire(codeEtablissement: string, resultEntiteTitulaire: Array<Modele.IEntiteTitulaire>): ng.IPromise<any>;
        initialiserTableau(): MyWay.UI.ImwTableOptions;
        onSelectionChange(selectedObject: Modele.IInformationEntiteTitulaire): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de valider la popin
         */
        valider(): void;
    }
}

declare module instructionCredit {
    class ModaleRechercheProduitControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        /**
         * Permet de construire la popin de recherche d'un produit de pret
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleRedacteurControleur {
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        private redacteur;
        private afficherResultats;
        private tableauResultats;
        private redacteurSelectionne;
        private resultats;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        rechercherRedacteur(): void;
        construireTableau(tableau: Array<instructionCredit.Modele.IRedacteurActe>): void;
        onSelectionChange(selectedObject: instructionCredit.Modele.RedacteurActe): void;
        valider(): void;
        annuler(): void;
    }
}

declare module instructionCredit {
    class ModaleSituationBdfControleur {
        private $scope;
        private $modalInstance;
        private clientService;
        private initialisationService;
        private $q;
        private interroBDFService;
        static $inject: string[];
        modalDatas: any;
        situationBdfTemporaire: instructionCredit.Modele.INotationTiers;
        enModification: boolean;
        interditBancaire: Modele.IInterditBancaire;
        enAttenteBdf: boolean;
        enAttenteFicp: boolean;
        personneSelectionne: instructionCredit.Modele.IPersonne;
        codeEtablissement: string;
        tableauOppositions: MyWay.UI.ImwTableOptions;
        listeOppositions: Array<Modele.IOpposition>;
        chargementEnCours: boolean;
        /**
         * Permet de construire la popin de gestion de la situation BDF
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, clientService: instructionCredit.Service.ClientService, data: any, $modal: any, initialisationService: instructionCredit.Service.InitialisationService, $q: ng.IQService, interroBDFService: myway.comRisquesClient.InterroBDFService);
        /**
         *  Récupération des données à charger
         */
        private initElementsPopin();
        interrogerSituationBdf(): void;
        /**
         * Construction du tableau d'oppositions
         */
        private initialisationTableauOppositions();
        /**
         *  Initialise les données d'interdit bancaires
         */
        private initInterditBancaire();
        /**
         * Récupération des libellés pour chacune des oppositions et initialisation du tableau
         */
        private initOppositions();
        private getLibelleCodeInscription(codeInscription);
        /**
         * Permet de fermer la popin
         */
        close(): void;
    }
}

declare module instructionCredit {
    class ModaleTocTorControleur implements MyWay.UI.INavcolHandler {
        private $scope;
        private $modalInstance;
        private $filter;
        static $inject: string[];
        modalDatas: any;
        recherche: string;
        listTocs: Array<Modele.ITypeObjetCommercial>;
        listTors: Array<Modele.ITypeObjetReglemente>;
        tocsAffichage: Array<Modele.ITypeObjetCommercial>;
        torsAffichage: Array<Modele.ITypeObjetReglemente>;
        tocSelectionne: Modele.ITypeObjetCommercial;
        torSelectionne: Modele.ITypeObjetReglemente;
        torsFiltres: Array<Modele.ITypeObjetReglemente>;
        /**
         * Permet de construire la popin de gestion des charges
         * @param $modalInstance: any
         * @param data: any
         * @param $modal: any
         */
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: any, $filter: any);
        onNavcolRecherche(critere: string, id: string): void;
        onSelectionChangeNavcolList(selectionCol: any, colId: string): void;
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Permet de fermer la popin en ayant effectuer un choix
         */
        valider(): void;
        /**
         *  Récupère les tors correpondant à un toc
         */
        private getTorsByToc(toc, avecRecherche);
    }
}

declare module instructionCredit {
    class NavigationControleur {
        private $q;
        private serviceAgentExtended;
        private scope;
        private $rootScope;
        private $location;
        private navigationService;
        private modalService;
        private initialisationService;
        private clientService;
        private financementService;
        private projetService;
        private controleDossierService;
        private modaleFactory;
        static $inject: string[];
        loader: boolean;
        loaderFermeture: boolean;
        private isEligibiliteOuvert;
        eligibilite: Modele.IResultatEligibilite;
        loaderEligibilite: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, modalService: MyWay.UI.IModalService, initialisationService: instructionCredit.Service.InitialisationService, clientService: instructionCredit.Service.ClientService, financementService: Service.FinancementService, projetService: instructionCredit.Service.ProjetService, controleDossierService: instructionCredit.Service.ControleDossierService, modaleFactory: instructionCredit.Service.ModaleFactory);
        /**
         *  Quitter l'application
         */
        quitter(): void;
        /**
         * Fermeture du dossier
         */
        private fermerDossier(sauvegarde);
        /**
         * Popin les informations nécessaires ne sont pas requise pour l'enregistrement du dossier
         */
        popinAlerteQuitter(): void;
        private fermetureDossier(sauvegarde);
        /**
         * Gestion des actions sur le bouton principal de la page
         */
        actionPrincipale(): void;
        calculEligibiliteFonction(): void;
        calculEligibilite(): void;
        /**
         * Affiche la popin de détails d'éligibilité
         */
        popinDetailsEligibilite(): void;
        /**
         * Actionne l'évenement à chaque changement de route afin de stocker la page précédente
         */
        private eventsChangementRoute();
        /**
         *  Demande d'ouverture de la popin d'informations
         */
        ouvrirPopinControleDossier(): void;
    }
}

declare module instructionCredit {
    class TransfertNeoControleur {
        private $scope;
        private serviceAgentExtended;
        private initialisationService;
        static $inject: string[];
        loader: boolean;
        /**
         * Contruction de la page Transfert Neo
         * @param $scope: ng.IScope
         * @param serviceAgentExtended: MyWay.Services.serviceAgentExtended
         * @param initialisationService: instructionCredit.Service.InitialisationService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: instructionCredit.Service.InitialisationService);
        /**
         * Débranchement vers NEO
         */
        debranchementNeo(): void;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
    class TuileArborescenceControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

declare module instructionCredit.Enum {
    enum CreditDuree {
        Maxi,
        Fixe,
    }
}

declare module instructionCredit.Enum {
    /**
     *  Cette rubrique permet d'indiquer le type de critère d'optimisation défini pour le calcul
     */
    enum CritereOptim {
        Echeance,
        Endettement,
        Duree,
        Palier,
        NonRenseigne,
    }
}

declare module instructionCredit.Enum {
    class TypeControleDossier {
        code: number;
        libelle: string;
        constructor(code: number, libelle: string);
        toString(): string;
        static CONTROLE_DOSSIER: TypeControleDossier;
        static ALERTE_DOSSIER: TypeControleDossier;
        static CONTROLE_PIECES_JUSTIFICATIVES: TypeControleDossier;
        static CONTROLE_PIECES_AGENCE: TypeControleDossier;
        static CONTROLE_MANUEL: TypeControleDossier;
        static CONTROLE_MODALITES: TypeControleDossier;
        static CONTROLE_EMPRUNTEUR: TypeControleDossier;
        static CONTROLE_CAUTION: TypeControleDossier;
        static CONTROLE_PERSONNE: TypeControleDossier;
        static CONTROLE_PROJET: TypeControleDossier;
        static CONTROLE_PLAN_FINANCEMENT: TypeControleDossier;
        static CONTROLE_ASSURANCES: TypeControleDossier;
        static CONTROLE_GARANTIES: TypeControleDossier;
        static CONTROLE_CREDITS_EXTERNES: TypeControleDossier;
        static CONTROLE_CREDITS_INTERNES: TypeControleDossier;
        static getTypeControleDossierByCode(code: number): Enum.TypeControleDossier;
    }
}

declare module instructionCredit {
}

declare module instructionCredit {
    /**
     * Calcul la date de fin d'un credit en fonction de la date de début et du nombre d'échéances en mois
     * @param nbMois: number - Nombre de mois
     */
    var dateFinCredit: () => (dateDebut: any, nbMois: number) => Date;
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit {
}

declare module instructionCredit.Modele {
    class Adresse {
        codePostalVille: string;
        batiment: string;
        etage: string;
        rue: string;
        /**
         * Construction d'un objet de type Adresse
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class AnomalieDossier implements IAnomalieLecture {
        typeContrôle: number;
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: number;
        idContrôleRegle: string;
        idObjet: string;
        typeControleDetail: Enum.TypeControleDossier;
        constructor(anomalieLecture?: IAnomalieLecture);
    }
}

declare module instructionCredit.Modele {
    class Ape {
        libelle: string;
        /**
         * Construction d'un objet de type APE
         * @param libelle: string - Nom de l'APE
         */
        constructor(libelle: string);
    }
}

declare module instructionCredit.Modele {
    interface IArborescence {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        niveau2?: Array<IArborescence2>;
    }
    class Arborescence {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        niveau2: Array<IArborescence2>;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         * @param niveau2: Array<IArborescence2> - 2ème niveau de tuile
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IArborescence2 {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        niveau3?: Array<IArborescence3>;
    }
    class Arborescence2 {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        niveau3: Array<IArborescence3>;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         * @param niveau3: Array<IArborescence3> - 3ème niveau facultatif
         */
        constructor(libelle: string, ligne1: string, ligne2?: string, ligne3?: string, ligne4?: string, niveau3?: Array<IArborescence3>);
    }
}

declare module instructionCredit.Modele {
    interface IArborescence3 {
        libelle: string;
        ligne1?: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
    }
    class Arborescence3 {
        libelle: string;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        /**
         * Construction d'une Tuile d'arborecence
         * @param libelle: string - Titre de la tuile
         * @param ligne1: string - première ligne facultative de la tuile
         * @param ligne2: string - deuxième ligne facultative de la tuile
         * @param ligne3: string - troisième ligne facultative de la tuile
         * @param ligne4: string - quatrième ligne facultative de la tuile
         */
        constructor(libelle: string, ligne1: string, ligne2?: string, ligne3?: string, ligne4?: string);
    }
}

declare module instructionCredit.Modele {
    interface ICadreFiscal {
        idCaisseEpargne: number;
        codeTypologieCadreFiscal: string;
        codeNatureFinancier: string;
        codeDestinataireAutreObjet: number;
        dateDebutApplication: number;
        dateFinApplication: number;
        libelleCadreFiscal: string;
    }
}

declare module instructionCredit.Modele {
    class ChampsRequis {
        etape: number;
        libelle: string;
        section: string;
        page: string;
        renseigne: boolean;
        necessaire: boolean;
        /**
         * Création d'un champs requis
         * @param etape: number - 1 => simulation, 2 => accord prêteur, 3 => édition
         * @param libelle: string - Nom afficher dans le cartouche de complétude
         * @param section: string - Titre de la section où se trouve le champs
         * @param page: string - Titre de la page où se trouve la section
         * @param renseigne: boolean - Le champs est-il renseigné ou vide dans le formulaire. Défaut : false (vide)
         * @param necessaire: boolean - Le champs est-il toujours nécessaire ou dépend-t-il d'un autre élément. Défaut : true
         */
        constructor(etape: number, libelle: string, section: string, page: string, renseigne?: boolean, necessaire?: boolean);
    }
}

declare module instructionCredit.Modele {
    class Constantes {
        static versementWsdl: string;
        static codeApplication: string;
        static restParametre: string;
        static restConsultation: string;
        static restCalcul: string;
        static restEntiteTitulaire: string;
        static restRisqueClient: string;
        static restTiers: string;
        static codeCategorieEmprunteurParticulier: string;
        static listeStatutsEtablissement: instructionCredit.Modele.IStatutRessource[];
        static listeStatutsHorsEtablissement: instructionCredit.Modele.IStatutRessource[];
        static listeDelaisRealisation: string[];
        static emoluments: instructionCredit.Modele.IEmolument[];
        static dateTraitement: any;
        static dateTraitementYYYYMMDD: string;
        static inArray(tableau: Array<Object>, obj: Object): boolean;
        static modesAcquisition: instructionCredit.Modele.ISelectbox[];
        static typesDeVente: instructionCredit.Modele.ISelectbox[];
        static modesOccupationLogement: instructionCredit.Modele.ISelectboxNumber[];
        static destinationsBien: instructionCredit.Modele.ISelectboxNumber[];
        static typesDeCharge: instructionCredit.Modele.TypeCharge[];
        static typesDeChargeAjoutable: instructionCredit.Modele.TypeCharge[];
        static typesDeRevenu: instructionCredit.Modele.TypeRevenu[];
        static origineDemande: instructionCredit.Modele.ISelectbox[];
        static techniqueVente: instructionCredit.Modele.ISelectbox[];
        static typesEpargnes: instructionCredit.Modele.IAdrRisqueEpargne[];
        static listeModeTransport: instructionCredit.Modele.ISelectbox[];
        static modesLogement: instructionCredit.Modele.ISelectbox[];
        static indicePerformance: instructionCredit.Modele.ISelectbox[];
        static natureTravaux: instructionCredit.Modele.ISelectbox[];
        static unitesPermisConstruire: instructionCredit.Modele.IUnitesPermisConstruire[];
        static casChampsMontant: instructionCredit.Modele.ChampMontant[];
        static casChampsInfosCompl: instructionCredit.Modele.ChampInformationsComplementaires[];
        static affichageChamps: instructionCredit.Modele.ChampAssociation[];
        static listeModalites: instructionCredit.Modele.ISelectbox[];
        static statutsOccupationLogementEmprunteur: instructionCredit.Modele.ISelectbox[];
        static typesContrat: instructionCredit.Modele.ISelectbox[];
        static listeTypesCompte: instructionCredit.Modele.ISelectbox[];
        static typesPeriodicite: instructionCredit.Modele.ISelectbox[];
        static naturesPret: instructionCredit.Modele.ISelectbox[];
        static naturesGarantie: instructionCredit.Modele.ISelectbox[];
        static listeCodeHypothequeOuPrivilege: string[];
        static primoAccedant: instructionCredit.Modele.ISelectboxNumber[];
        static typesMensualitesCredit: instructionCredit.Modele.ISelectbox[];
        static compagniesAssurance: instructionCredit.Modele.ISelectbox[];
        static parametresFiltreSmac: Object;
        static codeSuccesCreationSmac: string;
        static codeSuccesConsultationSmac: string;
        static segmentBaleII: Modele.ISelectbox[];
        static codeUidUtilisateur: string;
        static couleursGraphiques: Array<string>;
        static typeFonctionnementCompte: instructionCredit.Modele.ISelectbox[];
        static reglementations: instructionCredit.Modele.ISelectboxNumber[];
        static modeCalculCotisation: Object[];
        static natureConventionGarantie: instructionCredit.Modele.ISelectbox[];
        static listeAncienContratAssurance: string[];
        static codeRoleGarant: string;
        static natureLienEntiteTitulaire: instructionCredit.Modele.ISelectbox[];
        static paramsEditiqueProposition: Array<Object>;
        static paramsEditiquePtz: Array<Object>;
    }
    class PageEnum extends MyWay.Services.StringEnum {
        static CLIENT: PageEnum;
        static PROJET: PageEnum;
        static PROPOSITIONS: PageEnum;
        static EMISSIONDOCUMENTS: PageEnum;
        static BLOCNOTE: PageEnum;
        static TRANSFERTNEO: PageEnum;
    }
    class SectionNavigationEnum extends MyWay.Services.StringEnum {
        static CLIENT_SECTION_1: SectionNavigationEnum;
        static CLIENT_SECTION_2: SectionNavigationEnum;
        static CLIENT_SECTION_3: SectionNavigationEnum;
        static PROJET_SECTION_1: SectionNavigationEnum;
        static PROJET_SECTION_2: SectionNavigationEnum;
        static PROJET_SECTION_3: SectionNavigationEnum;
        static PROPOSITIONS_SECTION_1: SectionNavigationEnum;
        static PROPOSITIONS_SECTION_2: SectionNavigationEnum;
    }
    class SectionEnum extends MyWay.Services.StringEnum {
        static CLIENT: SectionEnum;
        static PROJET: SectionEnum;
        static PROPOSITIONS: SectionEnum;
        static fromKey<T extends MyWay.Services.StringEnum>(key: string): T;
    }
}

declare module instructionCredit.Modele {
    interface ICreationDossier {
        codeDevise: string;
        codeCanalCreation: string;
    }
}

declare module instructionCredit.Modele {
    interface IDevise {
        codeDevise: string;
        libelleDevise: string;
        nombreDecmDevise: number;
        dateDebutUtilisationDevise: number;
        dateSuspensionUtilisationDevise: number;
        nombreChiffreMaximumDevise: number;
        niveauArrondiDevise: number;
        codeSeprDecision: number;
        codeSeprChiffreMontant: number;
        libelleCreationDevise: string;
        codeIndiceDeviseInstruction: number;
        numeroOrdreDevise: number;
    }
}

declare module instructionCredit.Modele {
    class EntreeEligibilite {
        revnFiscal: number;
        nombreEnfant: number;
        nombrePersonne: number;
        surfHabitation: number;
        typeLogement: number;
        indiceCalculEnvl: boolean;
        montantAcht: number;
        montantTravaux: number;
        montantApport: number;
        indiceLogementPerf: boolean;
        indicePerfEnergetique: number;
        indiceLogementHlm: boolean;
        dateAcqsTerr: string;
        montantFrsNegocie: number;
        indicePrimoAccedant: boolean;
        codePoste: string;
        ville: string;
        constructor(projet: Modele.IProjet, emprunteur: Modele.IEmprunteur, bat: Modele.IBatimentHabitableFinance, revenusFiscaux: number, travaux: Modele.ITravauxFinances, plan: Modele.IPlanFinancementDetail);
    }
    interface IProfilPhasePTZ {
        codeTypePhase: string;
        dureeMinimumPhase: number;
        dureeMaximumPhase: number;
        periodicitePhase: number;
        quotientAmortissement: number;
        montantEcheance: number;
    }
    interface IProfilProduitPTZ {
        idPtz: string;
        montantMaximumPtz: number;
        montantMinimumPtz: number;
        montantMaximumMajrePtz: number;
        montantMaximumOprt: number;
        listePhssProduitPtz: Array<IProfilPhasePTZ>;
    }
    interface IResultatEligibilite {
        indiceEligibilitePtz: boolean;
        indiceEligibilitePC: boolean;
        indiceEligibilitePas: boolean;
        indiceEligibiliteMajrePtz: boolean;
        listeAnmlEligibilitePtz: Array<string>;
        listeAnmlEligibilitePC: Array<string>;
        listeAnmlEligibilitePas: Array<string>;
        profilPtzEligibilite: IProfilProduitPTZ;
    }
}

declare module instructionCredit.Modele {
    class IInfoDocument {
        codeDoc: string;
        libelleDoc: string;
        codeVariance: number;
        nombreEmp: number;
        nombreNotaire: number;
        nombreCaution: number;
        nombreDossier: number;
        nombreAutre: number;
        nombreTotal: number;
        typeTraitement: number;
        niveauTraitement: number;
        modeleTheorique: string;
        codeProcessus: string;
    }
}

declare module instructionCredit.Modele {
    interface IEmolument {
        libelle: string;
        valeur: number;
    }
}

declare module instructionCredit.Modele {
    interface IEndettement {
        montantRessources: number;
        montantRessourcesAvecAPL: number;
        montantCharges: number;
        montantChargesAvecAPL: number;
        tauxEndettement: number;
        tauxEndettementAvecAPL: number;
        mntResteAVivre: number;
        indiceResteAVivre: number;
        indiceResteAVivreAvecAPL: number;
        mntResteAVivreAvecAPL: number;
    }
}

declare module instructionCredit.Modele {
    interface IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        causes?: Array<string>;
        codeHttp?: number;
    }
    class Exception implements IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        constructor(libelle?: string);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetUsage {
        libelle: string;
    }
    class FormulaireProjetUsage implements IFormulaireProjetUsage {
        libelle: string;
        /**
         * Construction de Usage
         * @param libelle: string - libellé de l'usage du bien
         */
        constructor(donnees: FormulaireProjetUsage);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetDelais {
        libelle: string;
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetNature {
        libelle: string;
        niveaux: Array<IFormulaireProjetNiveau>;
    }
    class FormulaireProjetNature implements IFormulaireProjetNature {
        libelle: string;
        niveaux: Array<IFormulaireProjetNiveau>;
        /**
         * Construction de Nature
         * @param libelle: string - libellé de la nature du projet
         * @param niveaux: IFormulaireProjetNiveau - liste des niveaux
         */
        constructor(donnees: FormulaireProjetNature);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetNiveau {
        libelle: string;
    }
    class FormulaireProjetNiveau implements IFormulaireProjetNiveau {
        libelle: string;
        /**
         * Construction d'un Pret externe
         * @param libelle: string - Libellé du 3ème niveau de la liste déroulante
         */
        constructor(donnees: FormulaireProjetNiveau);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetType {
        libelle: string;
        natures: Array<IFormulaireProjetNature>;
    }
    class FormulaireProjetType implements IFormulaireProjetType {
        libelle: string;
        natures: Array<IFormulaireProjetNature>;
        /**
         * Construction du Type de bien
         * @param libelle: string - libellé du type de projet
         * @param natures: Array<IFormulaireProjetNature> - Tableau des natures possible du projet
         */
        constructor(donnees: FormulaireProjetType);
    }
}

declare module instructionCredit.Modele {
    class Garantie {
        libelle: string;
        /**
         * Construction d'une Garantie
         * @param valeurs: Garantie
         */
        constructor(valeurs: Garantie);
    }
}

declare module instructionCredit.Modele {
    class MapChampsRequis {
        /**
         * Liste de l'ensemble des champs obligatoires
         * La liste des champs est renseignée dans l'ordre des pages et sections
         */
        static MAP_CHAMPS_REQUIS: {
            "TYPE-DE-PROJET": ChampsRequis;
            "VALEUR-BIEN-A-VENDRE": ChampsRequis;
            "CRD": ChampsRequis;
            "MONTANT-OPERATION": ChampsRequis;
            "LOCALISATION-BIEN": ChampsRequis;
            "CRITERE-REMBOURSEMENT": ChampsRequis;
        };
    }
}

declare module instructionCredit.Modele {
    interface IMetaObjet {
        idCaisseEpargne: number;
        idMetierObjet: string;
        numeroRelation: number;
        libelleMetierObjet: string;
        libelleComplementMetierObjet: string;
        codeNatureFinancier: string;
        codeCategorieEmprunt: string;
        typeObjetFinancierGarantie: string;
        typeDobjetReglemente: string;
        codeReamenagement: number;
        numeroOrdreClasse: number;
    }
}

declare module instructionCredit.Modele {
    interface IParametreApplicatif {
        idCaisseEpargne: number;
        idElementStructureInstruction: string;
        codeParametreApplicatif: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        libelleParametre: string;
        codeTypeParametre: string;
        montantParametreMontant: number;
        dureeDunParametre: number;
        dateParametreDate: Date;
        tauxParametreTaux: number;
        valeurParametre: string;
        codeVersementNEO: string;
        codeReleaseNEO: string;
        versementParametre: number;
    }
}

declare module instructionCredit.Modele {
    interface IPret extends Produit {
        typePret: string;
    }
    class Pret implements IPret {
        typePret: string;
        libelle: string;
        sousFamille: instructionCredit.Modele.Produit;
        famille: instructionCredit.Modele.Produit;
        /**
         * Construction d'un Pret
         * @param valeurs: Pret
         */
        constructor(valeurs: instructionCredit.Modele.Produit, typePret: string);
    }
}

declare module instructionCredit.Modele {
    class PretPrincipal extends Pret {
        isLissable: boolean;
        /**
         * Construction d'un pret principal
         * @param valeurs: Pret
         * @param categorie: string
         * @param isLissable: boolean
         * @param favorie: boolean - Défaut : false
         */
        constructor(valeurs: instructionCredit.Modele.Produit, isLissable: boolean);
    }
}

declare module instructionCredit.Modele {
    interface IProduitFinancier {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dateTraitement: Date;
        libelleLongProduit: string;
        libelleCreationProduit: string;
        commentaireProduit: string;
        commentaireProduit1: string;
        codeEtatProduit: number;
        dateDebutSuspensionProduit: Date;
        dateMiseServiceProduit: Date;
        dateFinMiseServiceProduit: Date;
        dateCommercialisationProduit: Date;
        dateCreation: Date;
        codeAutreDuplicationProduit: number;
        dateAnnulationModification: Date;
        dateCloture: Date;
        codeFamilleContrôle: string;
        quotientFinancierAutre: number;
        codeEngagementRctb: number;
        codeDevise: string;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
        pasSurMontantCredit: number;
        uniteDureeCredit: number;
        modeExpressionDureeCredit: number;
        dureeCredit: number;
        dureeCredit1: number;
        dureeCredit2: number;
        dureeCredit3: number;
        dureeCredit4: number;
        codePossibiliteMERMADDevise: number;
        codePossibilitePrefinancement: number;
        codePossibiliteDiffereAmortissement: number;
        codePossibiliteDiffereTotal: number;
        nombrePhaseAmortissement: number;
        codeGarantieObligatoire: number;
        nombrePeriodeValiditeOffreContrat: number;
        periodeBaseValiditeOffreContrat: number;
        codeEcheancierVersementContrat: number;
        numeroCalculDateEffetCredit: string;
        modeDetrVersement: string;
        numeroRegleCalculMontantVersement: string;
        numeroRegleCalculDatsVersement: string;
        evenementCalculDateLimiteVersement: string;
        dureePeriodeVersement: number;
        uniteDureeVersement: number;
        dureePeriodePremierVersement: number;
        unitePeriodePremierVersement: number;
        nombreMaximumVersement: number;
        montantMinimumVersement: number;
        codeConfirmationVersement: number;
        codePrimeDernierVersement: number;
        delaiPourJustificatifManquantMAD: number;
        delaiConfirmationVersement: number;
        delaiAnticipeVersement: number;
        codeTraitementIntrIntr: number;
        codeTraitementIntrIntr1: number;
        codeTraitementIntrIntr2: number;
        codeTraitementIntrIntr3: number;
        codeTraitementIntrIntr4: number;
        codeActuarielIntrIntr: number;
        numeroModulableCalculta: string;
        numeroRegleDateMERZero: string;
        jourDateEcheance: string;
        moisDateEcheance: string;
        moisDateEcheance1: string;
        moisDateEcheance2: string;
        moisDateEcheance3: string;
        moisDateEcheance4: string;
        moisDateEcheance5: string;
        codeIntrCompRa: number;
        compteurMAJ: number;
        codeCreditRelease: number;
        codeSousclasseBafi: string;
        codeDestinataireAutreObjet: number;
        codeTauxCreditDirecteur: number;
        referenceRessource: string;
        numeroOrdreClasse: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        indiceCompteCrrt: number;
        codeEligibiliteAPL: number;
        codeTypePretCbin: number;
        codeProduitRevision: number;
        codeAccessoireCompBonificationAutre: number;
        codeIndiceMargeNegocie: number;
        codeIndiceDerogationBorne: number;
        indicateurPossibilitePhaseMobln: number;
        codetaCRDReel: number;
        codeFamilleCommissionPres: string;
        phssAssuranceProduit: Array<IProduitPhase>;
        listeConditionTauxAssuranceProduit: Array<IConditionsDeTaux>;
        listeModeleRa: Array<IModalitesRemboursementParProduit>;
        listeModeleCalculHorsConvention: Array<IModalitesCalculHorsConventionParProduit>;
        transfertProduit: Array<ITranscodifProduit>;
        conditionSpecifiqueAssuranceProduit: Array<IConditionsSpecifiques>;
        vartDuree: Array<IVariationDuree>;
        listeInformationParametreChatel: Array<IProduitParamSimulationRevision>;
        phaseProduit: Array<IPhaseProduitS33A>;
        recuperationLesNatureGarantiePourCEProduit: Array<INaturesDeGarantieParProduit>;
        listeParametreAssuranceProduit: Array<IParamRevisionParProduit>;
        estModulable: boolean;
        estBonifiableFlat: boolean;
        estLissage: boolean;
        estPATZ: boolean;
        estECOPATZ: boolean;
        estECOPATZCOPRO: boolean;
        estPC: boolean;
        estPAS: boolean;
        estPEL: boolean;
        estCEL: boolean;
        estATauxRevisable: boolean;
    }
    interface IProduitPhase {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: Date;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        uniteDureeDunPhase: number;
        modeExpressionDureePhase: number;
        dureePhaseProduit: number;
        dureePhaseProduit1: number;
        dureePhaseProduit2: number;
        dureeDunPhasePas: number;
        periodiciteCalculIntr: number;
        periodiciteCalculIntr1: number;
        periodiciteCalculIntr2: number;
        periodiciteCalculIntr3: number;
        periodiciteCalculIntr4: number;
        periodiciteMERAmortissement: number;
        periodiciteMERAmortissement1: number;
        periodiciteMERAmortissement2: number;
        periodiciteMERAmortissement3: number;
        periodiciteMERAmortissement4: number;
        codePeriodiciteDiffereMER: number;
        codeRecouvrementIntrTermeEchu: number;
        codeRecouvrementAmortissementTermeEchu: number;
        codeTypeConfirmationTauxIntr: number;
        modeCalculTaux: number;
        nombreJourAnnulationNumerateur: number;
        modeCalculAmortissement: number;
        capitalReferenceTableConstante: number;
        typeAssietteRemboursement: number;
        codeVersementAutrePendantPhase: number;
        codeReductionDureePrefinancement: number;
        codePrelevementDureePrefinancement: number;
        codeTypePrefinancement: number;
        codeRecouvrementPartielIntr: number;
        codeCalculIntrRepr: number;
        codeCapitalIntrDiffere: number;
        calculIntrJourReel: number;
        periodiciteMERIntr: number;
        periodiciteMERIntr1: number;
        periodiciteMERIntr2: number;
        periodiciteMERIntr3: number;
        modeCapitalIntr: number;
        modeRecouvrementIntr: number;
        periodiciteCompositionIntr: number;
        codeModeExpressionTauxMoyenPhase: number;
        valeurMinimumTauxMoyenPhase: number;
        valeurMaximumTauxMoyenPhase: number;
        valeurConsolideTauxMoyenPhase: number;
        codeTauxPalierCalcul: number;
        codeIndice: string;
        nombreMaximumPeriodeVartDuree: number;
        codeOptionSurPhaseProduit: number;
        codeObjetOption: number;
        typeOption: number;
        codeCourtPourPresenceDopt: number;
        delaiCourtPresenceDopt: number;
        periodiciteOption: number;
        nombreJourAnnulationDenomination: number;
        quotientConsolideCapitalAmortissement: number;
        quotientMinimumCapitalAmortissement: number;
        quotientMaximumCapitalAmortissement: number;
        unitePeriodeValeurIntituleIndice: number;
        nombrePeriodeValeurIntituleIndice: number;
        codeTypeTraitementDech: number;
        quotientMaximumCapitalIfin: number;
        quotientConsolideCapitalAmortissement1: number;
        quotientMinimumCapitalAmortissement1: number;
        quotientMaximumCapitalAmortissement1: number;
        idRegleButoireDuree: string;
    }
    interface IConditionsDeTaux {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dureeMinimumPlageConditionTaux: number;
        dateTraitement: Date;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        dureeMaximumPlageConditionTaux: number;
        codeModeExpressionTaux: number;
        codeIndice: string;
        tauxMoyenMinimumCredit: number;
        tauxMoyenMaximumCredit: number;
        tauxMoyenConsolideCredit: number;
        tauxRessource: number;
        codeIndexTauxConsolide: string;
        vartLindTauxConsolide: number;
        codeTypeParametrePondere: number;
        margeFixePourRevision: number;
        vartMargeFixePourRevision: number;
        codeTypeTranchePret0: string;
    }
    interface IModalitesRemboursementParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        numeroModeleRa: number;
        dateTraitement: Date;
        idConditionRa: string;
        idModeleCalculIndemniteRa: string;
        pourAssociationCalculModeleRa: number;
        pourAssociationRegleAutreRa: number;
        pourcentageMontantMinimumRaAutre: number;
        codeTypeAssietteMontantMinimumRa: number;
        codeAutreRaTotalInferieurMontantMinimum: number;
        sucouTaux: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
    }
    interface IModalitesCalculHorsConventionParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypeAccessoire: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        dateTraitement: Date;
        codeAccessoireObligatoire: number;
        codeModeCalculAccessoire: number;
        numeroRegleCalculAccessoire: string;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        montantMinimumAccessoirePourRecouvrement: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        codeIndiceDerogationBorne: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
        codeFinancierFrsParDeft: number;
    }
    interface ITranscodifProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeProduitRestant: string;
        codeTypeRestant: string;
        codeRestant: string;
        dateDebutApplication: Date;
        libelleLongProduit: string;
    }
    interface IConditionsSpecifiques {
        idCaisseEpargne: number;
        idProduit: string;
        libelleLongProduit: string;
        idClasse: string;
        libelleClasse: string;
        nOrdreRatClasseProduit: number;
        nOrdreRatParagrapheClasse: number;
        titreParagraphe: string;
        corpsParagraphe: string;
        numeroRelation: number;
        codeMiseFormeParagraphe: string;
        codeTypeClasse: string;
    }
    interface IVariationDuree {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypeButoireDuree: number;
        numeroJeuxIndiceRevision: number;
        dateDebutApplication: Date;
        dureeMinimumPlageConditionTaux: number;
        dateFinApplication: Date;
        dureeMaximumPlageConditionTaux: number;
        regleDetrDall: string;
        nombrePeriodeAllongementDureeCredit: number;
        allongementDureeCredit: number;
        nombrePeriodeMinimumDallCredit: number;
        nombrePeriodeMaximumDallCredit: number;
        regleDetrReduction: string;
        nombrePeriodeReductionDureeCredit: number;
        reductionDureeCredit: number;
    }
    interface IProduitParamSimulationRevision {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        variableSimulationHausse: number;
        variableSimulationBaisse: number;
        idAgent: string;
        commentaireSimulationRevision: string;
    }
    interface IPhaseProduitS33A {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        constanteAppliqueTauxOmga: number;
        regleDetrTauxOmga: string;
    }
    interface INaturesDeGarantieParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeNatureGarantie: string;
        dateTraitement: Date;
        dateDebutApplication: Date;
        dateFinApplication: Date;
    }
    interface IParamRevisionParProduit {
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        codeTypePhase: string;
        numeroRelationPhase: number;
        numeroJeuxIndiceRevision: number;
        numeroPeriodeRevision: number;
        nombreJeuxParametreRevision: number;
        idLoiRevision: string;
        codeEcheanceReclameParRevision: number;
        evenementDeclarationDebutPeriode: string;
        codeUnitePeriodeDebutRevision: number;
        nombrePeriodePourDeterminationDebutPeriode: number;
        dureePeriodeRevision: number;
        uniteDureePeriodeRevision: number;
        nombreEcheanceAvenantReclameMontant: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        libelleJeuxRevision: string;
    }
}

declare module instructionCredit.Modele {
    interface IProduit {
        libelle: string;
        famille?: instructionCredit.Modele.Produit;
        sousFamille?: instructionCredit.Modele.Produit;
    }
    class Produit implements IProduit {
        libelle: string;
        famille: instructionCredit.Modele.Produit;
        sousFamille: instructionCredit.Modele.Produit;
        /**
         * Construction d'un Produit
         * @param libelle: string
         * @param sousFamille: string - Facultatif. Est null pour une famille et une sous-famille
         * @param famille: string - Facultatif. Est null pour une famille
         */
        constructor(libelle: string, sousFamille?: instructionCredit.Modele.Produit, famille?: instructionCredit.Modele.Produit);
    }
}

declare module instructionCredit.Modele {
    interface IFormulaireProjetTypeLogement {
        typeLogement: string;
        dateDebutValidite: number;
        dateFinValidite: number;
        dateCreation: number;
    }
}

declare module instructionCredit.Modele {
    interface IProposition {
        echeance: number;
        duree: number;
        montant: number;
        echeanceSouhaitee: number;
        dureeSouhaitee: number;
        endettementSouhaite: number;
        tauxSouhaite: number;
        coutTotalCredit: number;
        apport: number;
        compteCourant: boolean;
        prets: Array<instructionCredit.Modele.Pret>;
        fraisDossier: number;
        fraisCourtage: number;
        garantie: Array<instructionCredit.Modele.Garantie>;
        garantieCout: number;
        assurances: Array<instructionCredit.Modele.IAssurance>;
    }
    class Proposition {
        echeance: number;
        duree: number;
        montant: number;
        echeanceSouhaitee: number;
        dureeSouhaitee: number;
        endettementSouhaite: number;
        tauxSouhaite: number;
        coutTotalCredit: number;
        apport: number;
        compteCourant: boolean;
        prets: Array<instructionCredit.Modele.Pret>;
        fraisDossier: number;
        fraisCourtage: number;
        garantie: instructionCredit.Modele.Garantie;
        garantieCout: number;
        assurances: Array<instructionCredit.Modele.IAssurance>;
        constructor();
        constructor(donnees: Proposition);
    }
}

declare module instructionCredit.Modele {
    interface IPretReamenagement {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: any;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
        idws: string;
        origine?: string;
        libellePeriodicite?: string;
        complement?: InfoRegroupement;
        duree?: number;
    }
    class PretReamenagement implements IPretReamenagement {
        codeBanque: string;
        idCreditGestion: string;
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: any;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idReamenagement: string;
        idInformationCompRegr: string;
        idws: string;
        origine: string;
        libellePeriodicite: string;
        complement: InfoRegroupement;
        duree: number;
        constructor();
    }
    class PretReamenagementMaj {
        idDossierCommercialisation: string;
        idDossierOrigine: string;
        codePrdtetbl: string;
        codeApparRes: boolean;
        typeApparRes: number;
        dateCloture: Date;
        montantRestantDuSurPretRefn: number;
        mtechePeriodePretRefn: number;
        perdeche: number;
        dateFinCredit: Date;
        libelleProduit: string;
        typeRegle: number;
        typeCredit: number;
        nometblPret: string;
        codeOrigineApplicationGestionCredit: number;
        codeDev: string;
        idws: string;
        constructor(pretReamenagement?: IPretReamenagement);
    }
    class InfoRegroupement {
        codeBanque: string;
        idDossierCommercialisation: string;
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: Date;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idPretReamenagement: string;
        idws: string;
        constructor();
    }
    class InfoRegroupementMaj {
        montantCRD: number;
        origineInformationSurMontantCRD: number;
        dateEnvsPourRemboursementAnticipe: Date;
        codeExisteModeleIndemniteRaSurCredit: number;
        montantEstmRa: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        codeIndiceFinancierIndemniteRa: number;
        codeModelePrevPourRa: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        existeUneGarantieHypotheque: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        origineInformationSurMontantFrsMainTotal: number;
        codeFinancierFrsMain: number;
        montantInterieurDusJusqFinCredit: number;
        codeAffectationTypeObjet: number;
        mtecheHorsAccessoire: number;
        origineInformationSurMtecheHorsAccessoire: number;
        tauxReference: number;
        origineInformationSurTauxReference: number;
        dateRappDonneur: string;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        idws: string;
        constructor(infoRegroupement?: Modele.InfoRegroupement);
    }
    interface IReamenagement {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: string;
        coutAcqsObjetRefn: number;
        idProjet: string;
        listeIdPretReamenagement: Array<string>;
        idws: string;
        sommeRemboursementAnticipe?: number;
        montantTotalDu?: number;
    }
    class ReamenagementMaj {
        typeReamenagement: number;
        usagePretTres: number;
        ancnEcheance: number;
        capitalRestantDu: number;
        valeurAchtObjetFinancier: number;
        dureResdPretRefn: number;
        dateAcqsObjetRefn: string;
        coutAcqsObjetRefn: number;
        idws: string;
        constructor(reamenagement?: IReamenagement);
    }
    class IDetailPret {
        idws: string;
        informationPret: Modele.IPretReamenagement;
        informationRegroupement: Modele.InfoRegroupement;
        origine: string;
        constructor();
    }
}

declare module instructionCredit.Modele {
    class RechercherDossier {
        types: instructionCredit.Modele.RechercherDossierStructure;
        dateDeTraitement: number;
        champsAgent: string;
        champsStructure: string;
        idAgentProprietaireDossier: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
        codeEtatDossier: string;
        codeTypeDestinataire: string;
        idDossier: string;
        nomRaisonSocialeEmprunt: string;
        referenceExterneDossier: string;
        idEntiteTitulaireClient: string;
        dateDebutPeriode: Date;
        dateFinPeriode: Date;
        dateDebutPeriode1: Date;
        dateFinPeriode1: Date;
        nomPres: Date;
        dateDebutPeriodeSigneNotaire: Date;
        dateFinPeriodeSigneNotaire: Date;
        codeVisbInstruction: string;
        codeDevise: string;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeOrigineDemande: string;
        codeApplicationChargeDossier: string;
        codeImprParExpressionVersement: string;
        codeEtapeSimulation: string;
        idParentPrincipal: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        suiteDossier: string;
        /**
         * Construction de l'objet rechercher dossier
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class RechercherDossierStructure {
        idCaisseEpargne: number;
        codeTypeDelmStructure: string;
        libelleTypeDelmStructure: string;
        codeIndiceDentProprietaire: number;
        codeIndiceStructureInstruction: number;
        rangNiveauStructure: number;
        codeMetierCreditEDS: number;
        /**
         * Construction de l'objet structure d'origine du dossier
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IRedacteurActe {
        personne?: string;
        dateNaissance?: Date;
        siren?: string;
        raisonSociale?: string;
    }
    class RedacteurActe {
        personne: string;
        dateNaissance: Date;
        siren: string;
        raisonSociale: string;
        /**
         * Construction d'un rédacteur
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ISelectbox {
        libelle: string;
        code: string;
    }
    interface ISelectboxNumber {
        libelle: string;
        code: number;
        tri?: Array<number>;
    }
}

declare module instructionCredit.Modele {
    class TypeCharge {
        idCaisseEpargne: number;
        typeCharge: string;
        libelleCharge: string;
        codeSigneCharge: number;
        tauxPondereRessourceCharge: number;
        numeroOrdreClasse: number;
        codeUsageTypologieCharge: number;
        typeRessource: string;
        /**
         * Construction d'un type de revenu
         * @param libelle: string - Nom du type de revenu
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class TypeRevenu {
        idCaisseEpargne: number;
        typeRessource: string;
        commissionRessource: string;
        codeSigneRessource: number;
        tauxPondereRessourceCharge: number;
        numeroOrdreClasse: number;
        codeUsageTypologieRessource: number;
        typeDeRessource: string;
        /**
         * Construction d'un type de revenu
         */
        constructor();
    }
}

declare module instructionCredit.Service {
    /**
     *  Fonctions manipulant les informations afin de controler le dossier
     */
    class AuthentificationService {
        private $q;
        private serviceAgentExtended;
        private navigationService;
        private $location;
        private initialisationService;
        private clientService;
        private projetService;
        private financementService;
        private controleDossierService;
        static $inject: string[];
        private _entiteTitulaire;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, navigationService: MyWay.UI.INavigationService, $location: ng.ILocationService, initialisationService: Service.InitialisationService, clientService: Service.ClientService, projetService: instructionCredit.Service.ProjetService, financementService: Service.FinancementService, controleDossierService: instructionCredit.Service.ControleDossierService);
        /**
         *   Initialise les données nécessaire pour naviguer dans toute l'application
         */
        initDonneesSession(): ng.IPromise<void>;
        /**
         *   Récupère les informations de l'utilisateur depuis le contexte
         */
        private getContext();
        /**
         *   Actionne les actions en fonction de l'existance d'un dossier ou non
         */
        private gererDossierSession();
        /**
         *   Ouvre un dossier existant
         */
        private ouvertureDossier(dossierComplet);
        /**
         *   Crée un dossier
         */
        private creationDossier();
        /**
         *   Récupère le dossier complet
         */
        private recupererDossierComplet(idDossier);
        /**
         *   Génère le totem de l'application
         */
        private creerTotem();
    }
}

declare module instructionCredit.Service {
    class CalculService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de calculer le Reste à vivre, le taux d'endettement et l'échéance maxi
         * @return promise<CapaciteRemboursement>
         */
        getCapaciteRemoursement(listeRessourceCharge: Array<instructionCredit.Modele.IEntreeRessourceCharge>, echeance?: Object, endettement?: Object): ng.IPromise<instructionCredit.Modele.ICapaciteRemboursement>;
        /**
         * Permet de calculer les frais de notaire
         * @param montant de l'aquisition ou du terrain
         * @param toc
         * @param tor
         * @return promise<number>
         */
        calculFraisNotaires(montant: number, toc: string, tor: string): ng.IPromise<number>;
    }
}

declare module instructionCredit.Service {
    class ClientService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _listeTypeRevenu;
        private _listeTypeCharge;
        private _listeCategorieEmprunteur;
        private _listeSituationFamilialeEmprunteur;
        private _listeCatSocioProfessionnelle;
        private _listeAdrRisqueEpargne;
        emprunteur: Modele.IEmprunteur;
        listeRessourcesCharges: Array<instructionCredit.Modele.IEntreeRessourceCharge>;
        listeAdrOpposition: Array<instructionCredit.Modele.IAdrOpposition>;
        listePersonnesDossier: Array<Modele.IPersonne>;
        personnesAffectation: Array<Object>;
        codeIntitulePersonne: Array<string>;
        typePersonne: string;
        telephoneEmprunteur: string;
        endettement: Modele.IEndettement;
        revenus: Array<Modele.IRevenuPersonne>;
        charges: Array<Modele.IChargePersonne>;
        revenusFiscaux: Array<Modele.IRevenuFiscalPersonne>;
        epargnesCE: Array<instructionCredit.Modele.IEpargnePersonne>;
        epargnesHorsCE: Array<instructionCredit.Modele.IEpargnePersonne>;
        comptesCE: Array<instructionCredit.Modele.IComptePersonne>;
        comptesHorsCE: Array<instructionCredit.Modele.IComptePersonne>;
        personne: Modele.IPersonne;
        idDossier: string;
        codeEtablissement: string;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer l'ensemble des types de revenus
         */
        getTypeRevenus(): ng.IPromise<Array<instructionCredit.Modele.TypeRevenu>>;
        /**
         * Permet de récupérer les différentes catégories d'emprunteur
         */
        getCategoriesEmprunteur(): ng.IPromise<Array<instructionCredit.Modele.CategorieEmprunteur>>;
        /**
         * Permet de récupérer les différentes situations familiales d'emprunteur
         */
        getSituationsFamilialesEmprunteur(): ng.IPromise<Array<instructionCredit.Modele.SituationFamilialeEmprunteur>>;
        /**
         * Permet de récupérer les différentes situations familiales d'emprunteur
         */
        getStatutOccupationLogementEmprunteur(): ng.IPromise<Object[]>;
        /**
         * Permet de récupérer l'ensemble des types de revenus
         */
        getTypeCharges(): ng.IPromise<Array<instructionCredit.Modele.TypeCharge>>;
        /**
         * Permet de récupérer le détail de l'emprunteur
         * @param identifiantDossier : string
         * @return promise<Emprunteur>
         */
        getEmprunteur(identifiantDossier: string): ng.IPromise<instructionCredit.Modele.IEmprunteur>;
        /**
         * Permet de récupérer le détail d'une personne physique ou morale
         * @param identifiantDossier : string
         * @param identifiantPersonne : string
         * @return promise<Personne>
         */
        getPersonne(identifiantDossier: string, identifiantPersonne: string): ng.IPromise<instructionCredit.Modele.IPersonne>;
        /**
         * Permet de récupérer le détail de l'emprunteur
         * @param identifiantDossier : string
         * @param identifiantActivite : string
         * @return promise<IActivitePersonne>
         */
        getActivitePersonne(identifiantDossier: string, identifiantActivite: string): ng.IPromise<instructionCredit.Modele.IActivitePersonne>;
        /**
         * Permet de récupérer le d'une charge
         * @param identifiantDossier : string
         * @param identifiantCharge : string
         * @return promise<IChargePersonne>
         */
        getChargePersonne(identifiantDossier: string, identifiantCharge: string): ng.IPromise<instructionCredit.Modele.IChargePersonne>;
        /**
         * Permet de récupérer un revenu fiscal
         * @param identifiantDossier : string
         * @param identifiantRevenu : string
         * @return promise<IRevenuFiscalPersonne>
         */
        getRevenuFiscal(identifiantDossier: string, identifiantRevenu: string): ng.IPromise<instructionCredit.Modele.IRevenuFiscalPersonne>;
        /**
         * Permet de récupérer un revenu
         * @param identifiantDossier : string
         * @param identifiantRevenu : string
         * @return promise<IRevenuPersonne>
         */
        getRevenuPersonne(identifiantDossier: string, identifiantRevenu: string): ng.IPromise<instructionCredit.Modele.IRevenuPersonne>;
        /**
         * Permet de récupérer des ADR Risque Epargne
         */
        getAdrRisqueEpargne(): ng.IPromise<Array<Modele.IAdrRisqueEpargne>>;
        /**
         * Permet de récupérer un compte
         * @param identifiantDossier : string
         * @param identifiantCompte : string
         * @return promise<IComptePersonne>
         */
        getCompte(identifiantDossier: string, identifiantCompte: string): ng.IPromise<instructionCredit.Modele.IComptePersonne>;
        /**
         * Permet de récupérer une Famille d'epargne
         * @param identifiantDossier : string
         * @param identifiantEpargne : string
         * @return promise<IEpargnePersonne>
         */
        getEpargne(identifiantDossier: string, identifiantEpargne: string): ng.IPromise<instructionCredit.Modele.IEpargnePersonne>;
        /**
         * Permet d'ajouter ou de modifier une charge
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param charge : ChargePersonneMaj
         */
        addChargePersonne(idDossier: string, idEmprunteur: string, charge: instructionCredit.Modele.ChargePersonneMaj): ng.IPromise<instructionCredit.Modele.IChargePersonne>;
        /**
         * Permet de récupérer les différentes catégories socio-professionnelles
         */
        getCategoriesSocioPro(): ng.IPromise<Array<Modele.ICatSocioProfessionnelle>>;
        /**
         * Permet de récupérer les entités titulaires en fonction d'une personne
         * @param codeEtablissement : string
         * @param identifiantTiers : string
         * @return promise<IEntiteTitulaire[]>
         */
        getEntitesTitulaires(codeEtablissement: string, identifiantTiers: string): ng.IPromise<Modele.IEntiteTitulaire[]>;
        /**
         * Permet de rechercher une personne
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * @param: nom: string
         * @param: prenom : string
         * @return promise<IEntiteTitulaire[]>
         */
        getPersonneTiers(identifiantPersonne: string): ng.IPromise<Modele.IParticulierInformation>;
        /**
         * Permet de récupérer les informations de l'entite titulaire
         * @param codeEtablissement : string
         * @param identifiantEntiteTitulaire : string
         * @return promise<IInformationEntiteTitulaire>
         */
        getInformationsEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Modele.IInformationEntiteTitulaire>;
        /**
         * Permet de creer un dossier
         */
        creerDossier(canalDeCreation: string): ng.IPromise<any>;
        /**
         * Permet d'ajouter ou de modifier un revenu fiscal
         * @param idDossier : string
         * @param revenuFiscal : RevenuFiscalPersonne
         */
        addRevenuFiscalPersonne(idDossier: string, revenuFiscal: instructionCredit.Modele.RevenuFiscalPersonne): ng.IPromise<instructionCredit.Modele.IRevenuFiscalPersonne>;
        /**
         * Permet d'ajouter ou de modifier un revenu
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param revenu : RevenuPersonneMaj
         */
        addRevenuPersonne(idDossier: string, idEmprunteur: string, revenu: instructionCredit.Modele.RevenuPersonneMaj): ng.IPromise<instructionCredit.Modele.IRevenuPersonne>;
        /**
         * Permet d'ajouter ou de modifier un compte
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param compte : ComptePersonneMaj
         */
        addComptePersonne(idDossier: string, idEmprunteur: string, compte: instructionCredit.Modele.ComptePersonneMaj): ng.IPromise<any>;
        /**
         * Permet d'ajouter ou de modifier une epargne
         * @param idDossier : string
         * @param idEmprunteur : string
         * @param epargne : EpargnePersonneMaj
         */
        addEpargnePersonne(idDossier: string, idEmprunteur: string, epargne: instructionCredit.Modele.EpargnePersonneMaj): ng.IPromise<Modele.IEpargnePersonne>;
        /**
         * Permet de récupérer les différentes oppositions
         */
        getAdrOpposition(): ng.IPromise<Array<instructionCredit.Modele.IAdrOpposition>>;
        /**
         * Permet de récupérer les paramétrages du Reste A vivre
         */
        listerParamsResteAVivre(): ng.IPromise<instructionCredit.Modele.IParamsResteAVivre[]>;
        /**
         * Permet de créer une liste de ressources
         */
        definirRessources(idDossier: string, idPersonneEmprunt: string, listeRessourceMAJ: Array<Modele.RevenuPersonneMaj>): ng.IPromise<Array<Modele.IRevenuPersonne>>;
        /**
         * Permet de créer une liste de charges
         */
        definirCharges(idDossier: string, idPersonneEmprunt: string, listeChargeMAJ: Array<Modele.ChargePersonneMaj>): ng.IPromise<Array<Modele.IChargePersonne>>;
        /**
         * Permet de récupérer les informations de l'entite titulaire
         * @param idPersonne : string
         * @param typeCompositionRelation : string
         * @return promise<any>
         */
        getTiersClient(idPersonne: string, typeCompositionRelation: string): ng.IPromise<any>;
        /**
         * Permet de récupérer les informations d'une personne via un identifiant
         * @param idDossier : string
         * @param identifiantPersonne : string
         * @param numeroCarteBancaire : string
         * @param numeroInsee : string
         * @param typeRolePersonne : string
         * @param codeTypePersonne : string
         * @param idEntiteTitulaireClient : string
         * @param codeTypeMarche : string
         * @return promise<any>
         */
        lirePersonne(idDossier: string, identifiantPersonne: string, numeroCarteBancaire: string, numeroInsee: string, typeRolePersonne: string, codeTypePersonne: string, idEntiteTitulaireClient: string, codeTypeMarche: string): ng.IPromise<Modele.IResultatGarant>;
    }
}

declare module instructionCredit.Service {
    /**
     *  Fonctions manipulant les informations afin de controler le dossier
     */
    class ControleDossierService {
        private $q;
        private $location;
        private modalService;
        private navigationService;
        private initialisationService;
        static $inject: string[];
        btnControleStyle: string;
        btnControleIcone: string;
        locationPrecedente: string;
        locationActuelle: string;
        verificationContinue: boolean;
        listeControlesPageActuelle: Array<Modele.AnomalieDossier>;
        chargementControlesEnCours: boolean;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, $location: ng.ILocationService, modalService: MyWay.UI.IModalService, navigationService: MyWay.UI.INavigationService, initialisationService: Service.InitialisationService);
        /**
         * Gère les contrôles sur le dossier : pour la page précedente et la page actuelle
         *  Cas particuliers:
         *      Rachat :        T0C à 148; TOR à B7
         *      Regroupement :  TOC à 145; TOR à A6
         * Retour true si des anomalies bloquantes sont présentes : pas de chargement possible car la redirection est obligatoire
         */
        gererControleDossier(fermetureDossier?: boolean): ng.IPromise<boolean>;
        /**
         *  Récupère les controles pour la page actuellement traitée en rechargement les données
         */
        chargerControlesDossierPageActuelleForcee(): ng.IPromise<void>;
        /**
         *  Récupère les controles pour la page qui vient d'être traitée auparavant (elle vient d'être quittée)
         *  Retour true si des anomalies bloquantes sont présentes : pas de chargement possible car la redirection est obligatoire
         */
        private gererControlesDossierPageSortante(listeControles, fermetureDossier);
        /**
         * Ouvre la popin d'information sur les controles pour la page traitée actuellement
         */
        ouvrirPopinControlesPageActuelle(): void;
        /**
         *  Récupère les controles pour la page actuellement traitée
         */
        private chargerControlesDossierPageActuelle(listeControles);
        /**
         * En fonction de la paage ou de l'action (fermeture), indique quels type de contrôle doivent être pris en compte
         */
        private getTypesControleByPage(pathPage);
        /**
         * Filtre les contrôles de dossier en fonction des types de contrôles propres à la page
         */
        private getControlesDossierByPage(listeControles, listeTypeControles);
        /**
         * Selon l'url, indique le titre de la page traitée
         */
        private getTitreByUrlPage(pathPage);
        /**
         *  Les anomalies bloquantes sont les anomalies de typeControle 0 et de typeAno 1;
         *  Return true si les anomalies doivent obligatoirement être prise en compte
         */
        private existeAnomaliesBloquantes(listeControles);
        /**
         *  Affiche les point de contrôle qu'il faut prendre et redirige l'utilisateur vers la page correspondante
         */
        private popinControleDossier(listeControles, pageTraitee, avecRedirection, pageActuelle);
    }
}

declare module instructionCredit.Service {
    class FinancementService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _listeTypeAssurance;
        private _listeNatureGarantie;
        private _listeITypesDeFraisGarantie;
        private _listeProduitsAutorises;
        private _listeFamillesProduits;
        private _listeGammeLissage;
        private _listeConventionAssurance;
        private _listeProduitFinancier;
        listeIdsProduitsStandard: Array<string>;
        listeIdsProduitsLissage: Array<string>;
        listePlanFinancementDetail: Array<Modele.IPlanFinancementSchema>;
        planFinancementActif: Modele.IPlanFinancementDetail;
        idwsPlanActif: string;
        enModification: boolean;
        propositionSelected: number;
        modalite: instructionCredit.Modele.ISelectbox;
        assuranceIncluse: boolean;
        echeanceMax: number;
        echeanceResultante: number;
        endettementMax: number;
        endettementResultant: number;
        dureeCritere: number;
        eligibilite: Modele.IResultatEligibilite;
        inclurePtz: boolean;
        calculOptimAvancee: Modele.EntreeOptimisationAvancee;
        codeEtablissement: string;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer le contenu du projet
         * @param identifiantDossier : string
         * @param identifiantProjet : string
         * @return promise<PlanFinancement>
         */
        getProjetFinancement(identifiantDossier: string, identifiantPlanFinancement: string): ng.IPromise<instructionCredit.Modele.IPlanFinancementDetail>;
        /**
         * Permet d'ajouter une garantie
         * @param idDossier : string
         * @param listeIdentifiantCredCouv : Array<string>
         * @param natureGarantie : string
         * @param idGarant : string
         */
        ajouterGarantie(idDossier: string, listeIdentifiantCredCouv: Array<string>, natureGarantie: string, idGarant: string): ng.IPromise<instructionCredit.Modele.IGarantie>;
        /**
         * Permet d'ajouter une garantie conventionnée
         * @param idDossier : string
         * @param listeIdentifiantCredCouv : Array<string>
         * @param idConventionGarantie : string
         */
        ajouterGarantiePersoConv(idDossier: string, listeIdentifiantCredCouv: Array<string>, idConventionGarantie: string): ng.IPromise<instructionCredit.Modele.IGarantie>;
        /**
         * Permet d'ajouter un accessoireLieProduit (pour récupérer un idCotisation lors de l'ajout d'une garantie)
         * @param idDossier : string
         * @param identifiantCredit : Array<string>
         * @param codeTypeAccessoire : string
         */
        ajouterAccessoireLieProduit(idDossier: string, identifiantCredit: string, codeTypeAccessoire: string): ng.IPromise<instructionCredit.Modele.IAccessoireLieProduit>;
        /**
         * Permet de récupérer la couverture crédit
         * @param identifiantDossier : string
         * @param identifiantCouvertureCredit : string
         * @return promise<CouvertureCredit>
         */
        getCouvertureCredit(identifiantDossier: string, identifiantCouvertureCredit: string): ng.IPromise<instructionCredit.Modele.ICouvertureCredit>;
        /**
         * Permet de récupérer la cotisation
         * @param identifiantDossier : string
         * @param identifiantCotisation : string
         * @return promise<Cotisation>
         */
        getCotisation(identifiantDossier: string, identifiantCotisation: string): ng.IPromise<instructionCredit.Modele.ICotisation>;
        /**
         * Permet de récupérer les conventions d'assurances compatibles avec le produit
         * @param listeIdentifiantProduit : string
         * @param ageMax : number
         * @param categorieEmprunteur : string
         * @return promise<IConventionAssurance>
         */
        listerConventionsAssurance(listeIdentifiantProduit: Array<string>, ageMax: number, categorieEmprunteur: string): ng.IPromise<instructionCredit.Modele.IConventionAssurance[]>;
        /**
         * Permet de récupérer les ids des conventions d'assurances compatibles avec le produit
         * @param listeIdentifiantProduit : string
         * @return promise<IConventionAssurance>
         */
        listerIdsConventionsAssurance(idDossier: string, listeIdentifiantProduit: Array<string>, ageMax: number): ng.IPromise<string[]>;
        /**
         * Permet de récupérer le détail de plusieurs conventions d'assurance
         * Les données chargées sont stockées dans la session
         * @return ng.IPromise<Array<IParametreApplicatif>>
         */
        listerConventionsAssuranceAvecDetail(listeIdsConventionsSouhaitees: Array<string>): ng.IPromise<Array<Modele.IConventionAssurance>>;
        /**
         * Permet de récupérer les types d'assurances
         * @return promise<ITypeAssurance>
         */
        listerTypeAssurance(): ng.IPromise<Array<instructionCredit.Modele.ITypeAssurance>>;
        /**
         * Permet d'ajouter une assurance
         * @param idDossier : string
         * @param listeIdCreditCouvParAss : Array<string>
         * @param identifiantPersonne : string
         * @param idConventionAssurance : string
         */
        ajouterAssurance(idDossier: string, listeIdCreditCouvParAss: Array<string>, identifiantPersonne: string, idConventionAssurance: string): ng.IPromise<instructionCredit.Modele.IAssurance>;
        /**
         * Permet de récupérer les types de garantie
         * @return promise<ITypeGarantie>
         */
        listerTypeGarantie(): ng.IPromise<instructionCredit.Modele.ITypeGarantie[]>;
        /**
         * Permet de récupérer les natures de garantie
         * @return promise<INatureGarantie>
         */
        listerNatureGarantie(): ng.IPromise<Array<instructionCredit.Modele.INatureGarantie>>;
        /**
         * Permet de récupérer les conventions de garantie
         * @return promise<IConventionGarantie>
         */
        listerConventionsGarantie(typeObjetFinancierGarantie: string, codeCategorieEmprunt: string, codeNatureGarantie: string, codeFamilleProduit: string, numeroRelationProduit: string): ng.IPromise<instructionCredit.Modele.IConventionGarantie[]>;
        /**
         * Permet de récupérer les ids des conventions de garantie compatibles
         * @return promise<string[]>
         */
        listerIdsConventionsGarantie(identifiantDossier: string, listeIdwsCredit: string[], cdfcod: string, cdfcng: string, libelleLong: string, topGarantie: boolean): ng.IPromise<string[]>;
        /**
         * Permet de récupérer la cotisation
         * @param identifiantDossier : string
         * @param identifiantCotisation : string
         * @return promise<IDetailAccessoire>
         */
        getDetailAccessoireLie(identifiantDossier: string, identifiantPlanFinancement: string): ng.IPromise<instructionCredit.Modele.IDetailAccessoire>;
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerIdsProduitsAutorises(identifiantDossier: string, identifiantProjet: string, indiceProduitLissage: boolean): ng.IPromise<string[]>;
        /**
         * Permet de récupérer la liste des produits autorisés pour le projet
         */
        listerProduitsAutorises(codeCategorieEmprunteur: string, typeObjetFinancierGarantie: string, codeStructureInstruction: string, codeDestinataireAutreParObjet: string): ng.IPromise<instructionCredit.Modele.IProduitsAutorises[]>;
        /**
         * Permet de récupérer la liste des ids des produits autorisés pour le projet
         */
        listerGammesLissageAutorisees(identifiantDossier: string, identifiantProjet: string): ng.IPromise<Array<instructionCredit.Modele.IGammeLissage>>;
        /**
         * Permet de récupérer la liste des produits de lissage
         */
        /**
         * Permet de récupérer la liste des familles de produits
         */
        listerFamillesDeProduits(codeEtablissement: string, codeCategorieEmprunteur: string, typeObjetFinancierGarantie: string, codeStructureInstruction: string): ng.IPromise<instructionCredit.Modele.IFamillesProduits[]>;
        /**
         * Permet d'ajouter un crédit
         * @param idDossier : string
         * @param idPlan : string
         * @param idProduit : string
         * @param montant : number
         */
        ajouterCreditInterne(idDossier: string, idPlan: string, idProduit: string, montant: number): ng.IPromise<instructionCredit.Modele.ICreditInterne>;
        /**
         * Permet d'ajouter un crédit externe
         * @param idDossier : string
         * @param idPlan : string
         * @param idProduit : string
         * @param montant : number
         */
        addCreditExterne(idDossier: string, idPlan: string, creditExterne: instructionCredit.Modele.CreditExterneMaj): ng.IPromise<instructionCredit.Modele.ICreditExterne>;
        /**
         * Permet de calculer une proposition en mode auto (Pas en cas de calcul d'enveloppe)
         * @param identifiantDossier: string
         * @param identifiantPlanFinancier: string
         * @param identifiantLissage: string  - Facultatif - null
         * @param montantMaximumRemboursement: number
         * @param lissageTotal: boolean  - True si TOUS les crédits sont lissés
         * @param dureeFixeLissage: boolean - Défaut à False - True si lissageTotal=True et durée Souhaitée renseignée
         * @param dureeSouhLissage: number - Durée souhaitée
         */
        calculOptimisation(idDossier: string, idPlan: string, idLissage: string, montant: number, lissage: boolean, dureeLissage: boolean, duree: number): ng.IPromise<any>;
        /**
         * Permet de calculer une proposition en mode auto (Pas en cas de calcul d'enveloppe) et en conservant les assurances
         * @param identifiantDossier: string
         * @param identifiantPlanFinancier: string
         * @param montantMaximumRemboursement: number
         * @param inclPATZ: boolean
         */
        calculOptimisationAvancee(idDossier: string, idPlan: string, montantEcheanceMaximum: number, inclPATZ: boolean, entreeOptim: Modele.EntreeOptimisationAvancee): ng.IPromise<any>;
        /**
         * Permet de retenir un plan de financement Optimisé
         * @param idDossier : string
         * @param idPlanOptimise : string
         */
        retenirPlanOptimise(idDossier: string, idPlanOptimise: string): ng.IPromise<any>;
        /**
         * Permet de récupérer les natures garantie les plus utilisées
         * @return promise<IInformationGarantie>
         */
        listerInformationGarantie(identifiantDossier: string, listeIdwsCredit: string[], conseille: boolean): ng.IPromise<Modele.IInformationGarantie[]>;
        /**
         * Permet de récupérer montant des frais de garantie hypotheque ou privilege
         * @return promise<number>
         */
        calculerFraisHypotheque(identifiantDossier: string, idwsGarantieReelle: string): ng.IPromise<number>;
        /**
         * Permet d'ajouter une couverture credit
         * @return promise<ICouvertureCredit>
         */
        ajouterCouvertureCredit(idDossier: string, idCreditCouverture: string, idAccessoirePortCouverture: string): ng.IPromise<instructionCredit.Modele.ICouvertureCredit>;
        /**
         * Permet de charger une convention garantie
         * @return promise<IConventionGarantie>
         */
        chargerConventionGarantie(idConvention: string): ng.IPromise<instructionCredit.Modele.IConventionGarantie>;
        /**
         * Permet de lister les types de frais garantie
         * @return promise<ITypesDeFraisGarantie[]>
         */
        listerTypesDeFraisGarantie(codeNatureGarantie: string): ng.IPromise<Array<instructionCredit.Modele.ITypesDeFraisGarantie>>;
        /**
         * Permet de consulter le dossier smac
         * @return promise<IDossierSmac>
         */
        consulterDossierSmac(idDossier: string, numeroPlanFinanacement: string): ng.IPromise<instructionCredit.Modele.IDossierSmac>;
        /**
         * Permet de créer le dossier smac
         * @return promise<IDossierSmac>
         */
        creerDossierSmac(listeEmprunteurs: Array<Modele.IEmprunteurSmac>, projet: Modele.IProjetSmac, listeCredits: Array<Modele.ICreditSmac>, uidUtilisateur: string): ng.IPromise<instructionCredit.Modele.IResultatSmac>;
        /**
         * Permet de modifier le dossier smac
         * @return promise<IDossierSmac>
         */
        modifierDossierSmac(listeEmprunteurs: Array<Modele.IEmprunteurSmac>, projet: Modele.IProjetSmac, listeCredits: Array<Modele.ICreditSmac>, uidUtilisateur: string): ng.IPromise<instructionCredit.Modele.IResultatSmac>;
        /**
         * Permet de lire la notation Bale II
         * @return promise<IResultatBaleII>
         */
        lireBaleII(idDossier: string, idPersonneSI: string): ng.IPromise<Modele.IResultatBaleII>;
        /**
         * Permet d'ajouter un plan de financement
         * @param idDossier : string
         * @param idProjet : string
         * @param planFinancement : Modele.planFinancementMaj
         */
        ajouterPlanFinancement(idDossier: string, idProjet: string, planFinancement: Modele.PlanFinancementMaj): ng.IPromise<instructionCredit.Modele.IPlanFinancementDetail>;
        /**
         * Permet de récupérer les paramètres d'un produit
         */
        chargerProduitFinancier(idProduit: string): ng.IPromise<Modele.IProduitFinancier>;
        /**
         * Permet de calculer les taux, montant, durées ou échéances d'un crédit externe
         */
        calculerCaracteristiquesCredit(capital?: number, echeance?: number, taux?: number, typeTaux?: number, periodes?: number, periodicite?: number): ng.IPromise<Modele.IResultatCalculSimple>;
        /**
         * Permet de récupérer le détail d'une convention d'assurance
         * @param identifiantConvention : string
         * @return promise<IConventionAssurance>
         */
        private getDetailConventionAssurance(identifiantConvention);
        /**
         * Récupère les conventions d'assurance demandées en se basant sur les données chargées en session au préalable
         * @return Array<IConventionAssurance>
         */
        private filtrerConventionsAssurance(listeIdsConventions);
    }
}

declare module instructionCredit.Service {
    class InitialisationService {
        private $q;
        private serviceAgentExtended;
        private clientService;
        private projetService;
        private navigationService;
        private financementService;
        private modalService;
        static $inject: string[];
        private _parametresApplicatif;
        private _listeModalitesCalculHorsConventionParProduit;
        private _listeAccessoireType;
        navigations: Array<MyWay.UI.TotemComponent>;
        idntDossier: string;
        libelleBtnPrincipal: string;
        calculPropositionEnCours: boolean;
        dossier: Modele.IDossierComplet;
        dossierSchema: Modele.IDossierSchema;
        majPartielleDossier: boolean;
        utilisateurConnecte: MyWay.Services.Context.AuthentificationInfo;
        modificationsEnCours: Object;
        elementsModifies: Array<Object>;
        elementsAjoutes: Array<Object>;
        listeIdws: Array<string>;
        feuxTricolore: Array<string>;
        affichageEligibilite: boolean;
        impressionDocuments: boolean;
        impressionDocumentsAutorise: boolean;
        erreurTauxUsure: boolean;
        watcherModif: boolean;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, clientService: Service.ClientService, projetService: Service.ProjetService, navigationService: MyWay.UI.INavigationService, financementService: Service.FinancementService, modalService: MyWay.UI.IModalService);
        /**
         * Permet de creer un dossier vide
         * @param: canalDeCreation
         */
        creerProjet(canalDeCreation: string, toc: string, tor: string, idClientBancaire?: string): ng.IPromise<any>;
        /**
         * Permet de récupérer le contenu du dossier sélectionné
         * @param identifiantDossier : string
         * @return promise<DossierOuvert>
         */
        getDossierComplet(identifiantDossier: string): ng.IPromise<instructionCredit.Modele.IDossierComplet>;
        /**
         * Permet de récupérer le schema complet d'un dossier
         * @param identifiantDossier : string
         * @return promise<IDossierSchema>
         */
        getDossierSchema(identifiantDossier: string): ng.IPromise<Modele.IDossierSchema>;
        /**
         * Permet de définir un emprunteur
         * @param: idDossier
         * @param: idClientBancaire
         */
        definirEmprunteur(idDossier: string, idClientBancaire: string): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Permet de définir un emprunteur depuis une liste de personnes (pour ajout ou suppression de personne)
         * @param: identifiantDossier
         * @param: listePersonnePhysiqueMaj
         */
        definirEmprunteurDepuisListePersonne(idDossier: string, listePersonnePhysiqueMaj: Array<Modele.PersonnePhysiqueMaj>): ng.IPromise<Modele.IEmprunteur>;
        /**
         * Permet de fermer le dossier avec sauvegarde
         * @param identifiantDossier : string
         * @return promise<Object>
         */
        getFermerDossier(identifiantDossier: string, sauvegarde: boolean): ng.IPromise<Object>;
        /**
         * Permet de mettre à jour un élément
         * @param identifiantClasse: string
         * @param identifiantDossier: string
         * @param element: Object
         * @return : boolean => connaitre le statut de la maj
         */
        majElement(identifiantClasse: string, identifiantDossier: string, element: Object): ng.IPromise<boolean>;
        /**
         * Permet de mettre à jour un ensemble d'éléments
         * @param identifiantDossier : string
         * @param elements : Array<Object>
         */
        trierElementsMaj(element: string): void;
        testMajElementsNecessaire(): boolean;
        /**
         * Méthode permettant d'effectuer la mise à jour des éléments de en mode synchrone
         */
        majElementsSynchrone(deferred: ng.IDeferred<any>, elements: Array<any>, index?: number): ng.IPromise<any>;
        /**
         * Edition de plusieurs documents PDF
         * @param: canalDeCreation
         */
        editionDocuments(identifiantDossier: string, identifiantDocument: string, identifiantWs: string, paramsEditiques: Array<Object>): ng.IPromise<Array<Object>>;
        /**
         * Affichage des messages reçus en Exception
         */
        affichageException(exception: Modele.IException): void;
        /**
         * Popin d'affichage des erreurs
         */
        popinErreur(erreur: Modele.IException): void;
        /**
         * Gestion des actions sur le bouton principal de la page
         */
        /**
         * Permet de supprimer un élément
         * @param identifiantDossier : string
         * @param identifiantElement : string
         */
        supprimerElement(identifiantDossier: string, identifiantElement: string): ng.IPromise<any>;
        /**
         * Permet d'enregistrer un dossier en central
         * @param idDossier : string
         */
        enregistrerDossier(idDossier: string): ng.IPromise<any>;
        /**
         * Permet de calculer l'égilibilité
         */
        calculerEligibilite(idDossier: string): ng.IPromise<Modele.IResultatEligibilite>;
        /**
         * Popin d'affichage des alertes NEO (fonctionnelles)
         */
        popinAlertesNeo(messages: Array<string>): void;
        /**
         * Permet de récupérer l'ensemble des objets dont l'identifiant est passé dans l'Array
         * @param: identifiantDossier
         * @param: liste
         */
        lireElements(identifiantDossier: string, liste: Array<string>): ng.IPromise<any[]>;
        /**
         * Permet de récupérer l'ensemble des attributs d'un objet avec récursivité
         */
        listeIdwsSchema(collection: any, attribut: string): Array<string>;
        private static pickDeep(collection, attribut, retour);
        /**
         * Permet d'afficher ou non le bouton éligibilité
         */
        afficherEligibilite(): void;
        /**
         * Permet de récupérer les paramètres applicatifs
         * Les données chargées sont stockées dans la session
         * @return ng.IPromise<Array<IParametreApplicatif>>
         */
        listerParametresApplicatifs(rubriquesFiltre: Array<string>, valeursFiltre: Array<string>): ng.IPromise<instructionCredit.Modele.IParametreApplicatif[]>;
        /**
         * Permet de retourner l'endettement d'un client
         *
         */
        calculerEndettement(idDossier: string, surProposition: boolean, proposition?: string): ng.IPromise<Modele.IEndettement>;
        /**
         * Permet de lister tous les documents disponibles pour un dossier
         *
         */
        listerDocuments(idDossier: string, idProposition: string): ng.IPromise<Array<Modele.IInfoDocument>>;
        /**
         * Permet de transferer le dossier dans neo
         *
         */
        transfererDossierDansNeo(idDossier: string, visibleNEO: boolean): ng.IPromise<any>;
        /**
         * Permet de gérer des fonctions synchrones pour la création de ressouces et charges
         */
        promessesSynchronesDefinirRC<T>(list: T[], fonctionPromise: Function): ng.IPromise<T>;
        /**
         * Permet de récupérer la liste des types de frais
         * @return promise<IParametreApplicatif>
         */
        listerTypeAccessoire(): ng.IPromise<instructionCredit.Modele.IAccessoireType[]>;
        /**
         * Permet de récupérer la liste des accessoires pour un produit
         * @return promise<IParametreApplicatif>
         */
        listerModCalculHorsConvParProd(idProduit: string): ng.IPromise<Modele.IModalitesCalculHorsConventionParProduit[]>;
        /**
         * Permet d'ajouter un garant  (pour le moment)
         * Appel au WS "ajouterPersonne" avec en params du query l'identifiantClasse (
         * @param idDosser: string
         * @param personne: instructionCreditModel.IPersonne
         */
        ajouterPersonne(idDossier: string, personne: instructionCredit.Modele.IPersonne): ng.IPromise<instructionCredit.Modele.IPersonne>;
        /**
         * Permet de retourner l'intitulé de la personne (civilité + nom + prénom)
         * @param personne: instructionCreditModel.IPersonne
         */
        getIntitulePersonne(personne: Modele.IPersonne): string;
        /**
         * Permet de récupérer les points de contrôle sur le dossier traité actuellement
         * @param identifiantDossier: string
         * @return promise<Array<Modele.AnomalieDossier>>
         */
        controlerDossier(identifiantDossier: string): ng.IPromise<Array<Modele.AnomalieDossier>>;
        /**
         * Charge le dossier complet dans la session (this : initialisationService)
         * @returns
         */
        chargerDossierComplet(): ng.IPromise<void>;
        /**
         * Permet de récupérer les paramètres applicatifs
         * @return ng.IPromise<Array<IParametreApplicatif>>
         */
        private getParametresApplicatifs();
    }
}

declare module instructionCredit.Service {
    class ModaleFactory {
        private modalService;
        private navigationService;
        private $location;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(modalService: MyWay.UI.IModalService, navigationService: MyWay.UI.INavigationService, $location: ng.ILocationService);
        /**
         * Permet d'afficher une popin
         */
        popinSimple(titre: string, message: string): void;
        /**
         * Permet d'afficher la popin avertissant qu'un montant d'opération est obligatoire pour
         * accéder au formulaire financement
         */
        popinMontantOperationObligatoire(avecRedirection: boolean): void;
        /**
         * Permet d'afficher la popin avertissant qu'une échéance est obligatoire pour
         * lancer le calcul d'optimisation
         */
        popinEcheanceObligatoireCalculOptimisation(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un endettement est obligatoire pour
         * lancer le calcul d'optimisation
         */
        popinEndettementObligatoireCalculOptimisation(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un crédit à optimiser est obligatoire
         * lancer le calcul d'optimisation
         */
        popinPasDeCreditAOptimiser(): void;
        /**
         * Permet d'afficher la popin avertissant qu'un seul crédit doit être sélectionné lors d'un rachat
         */
        popinAvertissementRachat(): void;
        /**
         * Permet d'afficher la popin avertissant un taux d'usure fort
         */
        popinErreurTauxUsure(): void;
        /**
         * Permet d'afficher une popin contenant une liste d'anomalies
         */
        popinListeAnomalies(titre: string, listeAnomaliesLecture: Array<Modele.IAnomalieLecture>): void;
    }
}

declare module instructionCredit.Service {
    class ProjetService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private _localite;
        private _listeProjetTypeLogement;
        private _listeTypeObjetReglemente;
        private _listeTypeObjetCommercial;
        private _listeCadreFiscal;
        projet: Modele.IProjet;
        batimentHabitableFinance: Modele.IBatimentHabitableFinance;
        bienAVendre: Modele.IBienAVendre;
        terrainFinance: Modele.ITerrainFinancee;
        constructionFinancee: Modele.IConstructionFinancee;
        travauxFinances: Modele.ITravauxFinances;
        soulteFinance: Modele.ISoulteFinancee;
        bienDetaille: Modele.IBienDetaille;
        reamenagement: Modele.IReamenagement;
        complementDossier: Modele.IComplementDossier;
        codeEtablissement: string;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer le contenu du projet
         * @param identifiantDossier : string
         * @param identifiantProjet : string
         * @return promise<Projet>
         */
        getProjet(identifiantDossier: string, identifiantProjet: string): ng.IPromise<void>;
        /**
         * Permet de récupérer le contenu du projet
         * @param identifiantDossier : string
         * @param identifiantProjet : string
         * @return promise<PlanFinancement>
         */
        /**
         * Permet de récupérer le détail d'un bien à vendre
         * @param identifiantDossier : string
         * @param identifiantBien : string
         * @return promise<BienAVendre>
         */
        getBienAVendre(identifiantDossier: string, identifiantBien: string): ng.IPromise<instructionCredit.Modele.IBienAVendre>;
        /**
         * Permet de définir un bien a vendre
         */
        definirBienAVendre(idDossier: string, idProjet: string, bien: Modele.BienAVendreMaj): ng.IPromise<Modele.IBienAVendre>;
        /**
         * Permet de récupérer la liste de cadre fiscal
         * @return promise<CadreFiscal>
         */
        getFormulaireProjetCadre(): ng.IPromise<Array<instructionCredit.Modele.ICadreFiscal>>;
        /**
         * Permet de récupérer la liste de type de logement
         * @return promise<TypeLogement>
         */
        getFormulaireProjetTypeLogement(): ng.IPromise<Array<instructionCredit.Modele.IFormulaireProjetTypeLogement>>;
        /**
         * Permet de récupérer la liste des devises
         * @return promise<Devise>
         */
        getDevises(): ng.IPromise<instructionCredit.Modele.IDevise[]>;
        /**
         * Permet de récupérer le complément d'un dossier
         * @param identifiantDossier : string
         * @param identifiantComplement : string
         * @return promise<IComplementDossier>
         */
        getComplementDossier(identifiantDossier: string, identifiantComplement: string): ng.IPromise<instructionCredit.Modele.IComplementDossier>;
        /**
         * Permet de récupérer le complément d'un dossier
         * @param codePostal : string
         * @param ville : string
         * @return promise<ILocalites>
         */
        getLocalite(codePostal: string, ville: string): ng.IPromise<instructionCredit.Modele.ILocalites>;
        /**
         * Permet de récupérer les travaux financés
         * @param identifiantDossier : string
         * @param identifiantTravaux : string
         * @return promise<ITravauxFinances>
         */
        getTravauxFinances(identifiantDossier: string, identifiantTravaux: string): ng.IPromise<instructionCredit.Modele.ITravauxFinances>;
        /**
         * Permet de récupérer les détails du cout de l'objet
         * @param identifiantDossier : string
         * @param identifiantCoutObjet : string
         * @return promise<ICoutObjet>
         */
        getCoutObjet(identifiantDossier: string, identifiantCoutObjet: string): ng.IPromise<instructionCredit.Modele.ICoutObjet>;
        /**
         * Permet de récupérer le batiment habitable Finance
         * @param identifiantDossier : string
         * @param identifiantBafi : string
         * @return promise<IBatimentHabitableFinance>
         */
        getBatimentHabitableFinance(identifiantDossier: string, identifiantBafi: string): ng.IPromise<instructionCredit.Modele.IBatimentHabitableFinance>;
        /**
         * Permet de récupérer la liste des Types d'objet Commercialises (TOC)
         * @return promise<ITypeObjetCommercial>
         */
        getTypeObjetCommercial(): ng.IPromise<Array<instructionCredit.Modele.ITypeObjetCommercial>>;
        /**
         * Permet de récupérer la liste des Types d'Objets Réglementés (TOR)
         * @return promise<ITypeObjetReglemente>
         */
        getTypeObjetReglemente(): ng.IPromise<Array<instructionCredit.Modele.ITypeObjetReglemente>>;
        /**
         * Permet de définir un projet Immobilier (Changement du TOC TOR)
         */
        definirProjet(idDossier: string, toc: string, tor: string, projetMaj: Modele.ProjetImmobilierMaj): ng.IPromise<Modele.IProjet>;
        /**
         * Permet de récupérer les crédits réaménagés internes
         */
        listerPretsReamenagebles(idDossier: string, idReamenagement: string): ng.IPromise<Array<Modele.IPretReamenagement>>;
        /**
         * Permet de récupérer le détail des crédits réaménagés
         */
        detailsPretsRea(idDossier: string, date: Date, idReamenagement: string, listePrets: Array<string>): ng.IPromise<Array<Modele.IDetailPret>>;
        /**
         * Permet d'ajouter un pret de réaménagement (Rachat / Regroupement de crédit)
         */
        ajouterPretReamenagement(idDossier: string, idReamenagement: string, codeBanque: string, idCreditGestion: string, pretAmenagement: Modele.PretReamenagementMaj, infosRegroupement: Modele.InfoRegroupementMaj): ng.IPromise<Modele.IPretReamenagement>;
        /**
         * Permet de définir un reamenagement
         */
        definirReamenagement(idDossier: string, idProjet: string, reamenagement: Modele.ReamenagementMaj): ng.IPromise<Modele.IReamenagement>;
        /**
         * Permet de définir un complément de dossier
         */
        definirComplementDossier(idDossier: string, complement: Modele.ComplementDossierMaj): ng.IPromise<Modele.IComplementDossier>;
        /**
         * Ajout d'un évènement sur un dossier
         */
        ajouterEvenementDossier(idDossier: string, codeTypeEvenement: string, libelleFacultatif: string): ng.IPromise<any>;
    }
}

declare module instructionCredit.Modele {
    interface ICapaciteRemboursement {
        tauxEndt: number;
        restantVivr: number;
        echeanceMaximum: number;
    }
}

declare module instructionCredit.Modele {
    interface IEntreeRessourceCharge {
        codeIndiceRessourceCharge: number;
        typeRessourceCharge: string;
        montantRessourceCharge: number;
        nombrePeriode: number;
        codeExisteRessourceCharge: number;
        codeDevise: string;
    }
    class EntreeRessourceCharge implements IEntreeRessourceCharge {
        codeIndiceRessourceCharge: number;
        typeRessourceCharge: string;
        montantRessourceCharge: number;
        nombrePeriode: number;
        codeExisteRessourceCharge: number;
        codeDevise: string;
        constructor();
    }
}

declare module instructionCredit {
    function entete(): ng.IDirective;
}

declare module instructionCredit.Modele {
    interface IAdrOpposition {
        codeOpposition: string;
        libelleOpposition: string;
    }
}

declare module instructionCredit.Modele {
    interface IAdrRisqueEpargne {
        codeFamilleProduitAdresse: string;
        libelleFamilleProduitAdresse: string;
        codeProduitCEHorsCE: number;
        codeTypeEpargneLiquide: number;
    }
}

declare module instructionCredit.Modele {
    interface ICatSocioProfessionnelle {
        codeClasseRisqueCSP: number;
        libelleClasseRisqueCSP: string;
    }
}

declare module instructionCredit.Modele {
    class CategorieEmprunteur {
        codeCategorieEmprunt: string;
        libelleCategorieEmprunteur: string;
        codeTypeMarche: number;
        libelleCreationCategorieEmprunt: string;
        numeroOrdreClasse: number;
        /**
         * Construction d'une catégorie
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IChargePersonne {
        typeDeCharge: string;
        montantCharge?: number;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        idws?: string;
        statut?: string;
    }
    class ChargePersonne implements IChargePersonne {
        typeDeCharge: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        constructor();
    }
    class ChargePersonneMaj {
        typeDeCharge: string;
        montantCharge: number;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        constructor();
        constructor(charge: IChargePersonne);
    }
}

declare module instructionCredit.Modele {
    interface IComptePersonne {
        numeroCompte?: string;
        dateOuvertureProduitCE?: number;
        modeComposition?: number;
        codeDeviseCompte: string;
        typeCompte?: string;
        dateOuverture?: number;
        titre?: string;
        idPersonne?: string;
        idws?: string;
        isCe?: boolean;
        dateOuvertureProduitCEDate?: Date;
        dateOuerCompteDepoHorsCEDate?: Date;
        dateOuvertureDate?: Date;
        codeProduitCE?: number;
        numeroEntiteTitulaire?: number;
        libelleEntiteTitulaire?: string;
        codeEtatProduit?: number;
        soldMoyenLongTermeCompteDepoCE?: number;
        soldMinimumCompteDepoCE?: number;
        soldRelCompteDepoCE?: number;
        codeTypeCartographie?: number;
        dateDelvCartographie?: string;
        codeTypeDecvCompteDepo?: number;
        montantDecvAutreSurCompteDepo?: number;
        montantTotalVersementCreditReleaseSurCompteDepo?: number;
        nombreJourDepsAutreDecv?: number;
        montantPrelExteReleaseSurCompteDepo?: number;
        codeDepsJustificatif?: number;
        codePresDecvIrreSurCompteDepo?: number;
        codeExisteCartographieBancaireHorsCE?: number;
        codeComnRelvCompteHorsCE?: number;
        codeExisteCheq?: number;
        soldMoyenMensCreationCompteDepoCE?: number;
        mvtCreditMensSurCompteDepo?: number;
        codeTypeFctCompteDepoCEHorsCE?: number;
        dateOuerCompteDepoHorsCE?: number;
        codeEtablissement?: string;
        codeGuic?: string;
        referenceProduitCE?: string;
        nombreJourDepsAutrePourCompteProf?: number;
        codeContentieuxOuPretDimpaye?: number;
    }
    class ComptePersonne implements IComptePersonne {
        codeComnRelvCompteHorsCE: number;
        codeDepsJustificatif: number;
        codeDeviseCompte: string;
        codeEtatProduit: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeExisteCheq: number;
        codePresDecvIrreSurCompteDepo: number;
        codeProduitCE: number;
        codeTypeCartographie: number;
        codeTypeDecvCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateDelvCartographie: string;
        dateOuerCompteDepoHorsCE: number;
        dateOuvertureProduitCE: any;
        libelleEntiteTitulaire: string;
        montantDecvAutreSurCompteDepo: number;
        montantPrelExteReleaseSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        mvtCreditMensSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        numeroEntiteTitulaire: number;
        soldMinimumCompteDepoCE: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMoyenMensCreationCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        constructor();
    }
    class ComptePersonneMaj implements IComptePersonne {
        dateOuverture: number;
        codeDeviseCompte: string;
        idws: string;
        codeProduitCE: number;
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
        codeEtatProduit: number;
        soldMoyenLongTermeCompteDepoCE: number;
        soldMinimumCompteDepoCE: number;
        soldRelCompteDepoCE: number;
        codeTypeCartographie: number;
        dateDelvCartographie: string;
        codeTypeDecvCompteDepo: number;
        montantDecvAutreSurCompteDepo: number;
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        nombreJourDepsAutreDecv: number;
        montantPrelExteReleaseSurCompteDepo: number;
        codeDepsJustificatif: number;
        codePresDecvIrreSurCompteDepo: number;
        codeExisteCartographieBancaireHorsCE: number;
        codeComnRelvCompteHorsCE: number;
        codeExisteCheq: number;
        soldMoyenMensCreationCompteDepoCE: number;
        mvtCreditMensSurCompteDepo: number;
        codeTypeFctCompteDepoCEHorsCE: number;
        dateOuerCompteDepoHorsCE: number;
        constructor();
        constructor(compte: IComptePersonne);
    }
}

declare module instructionCredit.Modele {
    interface ICreditExistant {
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        dateMER0?: string;
        dateFinCredit?: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche?: number;
        montantPrmeecheAmortissement?: number;
        mtechePresenceComp?: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement?: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        listeIdPhssCreditExiste?: Array<string>;
        idws?: string;
    }
    class CreditExistant implements IChargePersonne, ICreditExistant {
        typeDeCharge: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        numeroContratEpargne: string;
        codeExisteRessourceApreOper: number;
        idPersonne: string;
        idGrpeIntervenant: string;
        idws: string;
        statut: string;
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        dateMER0: string;
        dateFinCredit: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        montantPrcheche: number;
        montantPrmeecheAmortissement: number;
        mtechePresenceComp: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        periodeAmortissement: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        listeIdPhssCreditExiste: Array<string>;
        constructor();
    }
    class CreditExistantMaj implements ICreditExistant {
        codeTypeCreditCE: string;
        codePresenceCompCredit: number;
        invsUsageLocf: number;
        lienPersonneCredit: number;
        libletblPret: string;
        codeTypeCredit: number;
        montantOrigineCredit: number;
        montantRestantDu: number;
        dateDebutAmortissement: string;
        codeProduitCE: number;
        referenceProduitCE: string;
        compReferenceProduitCE: string;
        numeroEntiteTitulaireCE: number;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        nombreImpayes: number;
        nombreImpeRegleSurLesMoisGlss: number;
        dureAmortissement: number;
        codeIndiceAInclettHypotheque: boolean;
        montantGarantie: number;
        motfRemboursementAnticipe: string;
        remboursementAvecAnticipe: number;
        libelleMotfRemboursementAnticipe: string;
        idws: string;
        constructor();
        constructor(creditExistant: ICreditExistant);
    }
}

declare module instructionCredit.Modele {
    interface IEmprunteur {
        nombreEnfantCharge?: number;
        nombrePersonneGrpe?: number;
        nombrePersonneSuppCharge?: number;
        typeLienEntreLesPersonne?: number;
        nomGrpe?: string;
        ageEnfant?: Array<number>;
        dateDernierRapp?: Date;
        anneNaisEnfant?: Array<number>;
        codeEmplrComun?: number;
        capceprgAvenantOper?: number;
        ancnChargeLiesAOperImmobilier?: number;
        valeurPatrimoineImmobilier?: number;
        codeDevise?: string;
        montantPatrimoineMobl?: number;
        nombreVoiture?: number;
        montantRessourcePondere?: number;
        montantChargeEmpruntHorsProjetPondere?: number;
        montantAutreChargePondere?: number;
        denmEmprunt?: string;
        libelleLongEmprunt?: string;
        intlcEmprunt?: string;
        idEntiteTitulaireClient?: string;
        idElementStructureGestion?: string;
        codeCateEmprunt?: string;
        codeTypeMarche?: number;
        codeTypeMarchePersonne?: number;
        codeTypeRevnMeng?: number;
        cateAgntecnmBafi?: number;
        cateClientBafi?: number;
        typeAdmnBafi?: number;
        classeAgentBafi?: string;
        codeSituationFamille?: number;
        codeSituationFamilleRegle?: number;
        nombrePersonneCmpstMeng?: number;
        nombrePersonneACharge?: number;
        nombreActfMeng?: number;
        dateEncoursEpargneLogement?: Date;
        montantEncoursIsssPretPEL?: number;
        montantEncoursIsssPretLEL?: number;
        montantEncoursLivrAutretbl?: number;
        montantEncoursPlnsAutretbl?: number;
        totalRevnAnnulationNets?: number;
        montantRevnMeng?: number;
        stttOccpLogementActuariel?: string;
        codeTitreCivilite?: string;
        nomRaisonSocialeEmprunt?: string;
        intituleLigne1?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        compIntituleLigne2?: string;
        adresseLigne5?: string;
        codeDestinataireAutreParObjet?: number;
        codeSecteurRattachement?: string;
        codeJeunMeng?: number;
        presUnePersonneAttnRepnFicp?: boolean;
        presUnePersonneFichFicp?: boolean;
        esperVie?: number;
        esperVieDecision?: number;
        esperVieStress?: number;
        montantRessourceAvenantProjet?: number;
        montantChargeEmpruntAvenantProjet?: number;
        montantAutreChargeAvenantProjet?: number;
        restantVivrAvenantProjet?: number;
        indiceRestantVivrAvenantProjet?: number;
        tauxEndtAvenantProjet?: number;
        listeIdPersonne?: Array<string>;
        listeIdCompteDeptGrpePersonne?: Array<string>;
        listeIdComptePrfsPersonne?: Array<string>;
        listeIdRessourceGrpe?: Array<string>;
        listeIdChargeGrpe?: Array<string>;
        listeIdCreditExisteGrpe?: Array<string>;
        listeIdFamilleEpargnePersonne?: Array<string>;
        listeIdRevnFiscalAssuranceEmprunt?: Array<string>;
        listeIdDonneurPatrimoineImmobilier?: Array<string>;
        idws?: string;
        description?: string;
    }
    class Emprunteur implements IEmprunteur {
        idws: string;
        description: string;
        constructor(emprunteur: IEmprunteur);
    }
    class EmprunteurMaj implements IEmprunteur {
        nombreEnfantCharge: number;
        nombrePersonneGrpe: number;
        nombrePersonneSuppCharge: number;
        typeLienEntreLesPersonne: number;
        nomGrpe: string;
        ageEnfant: Array<number>;
        dateDernierRapp: Date;
        anneNaisEnfant: Array<number>;
        codeEmplrComun: number;
        capceprgAvenantOper: number;
        ancnChargeLiesAOperImmobilier: number;
        valeurPatrimoineImmobilier: number;
        codeDevise: string;
        montantPatrimoineMobl: number;
        nombreVoiture: number;
        denmEmprunt: string;
        libelleLongEmprunt: string;
        intlcEmprunt: string;
        idEntiteTitulaireClient: string;
        idElementStructureGestion: string;
        codeCateEmprunt: string;
        codeTypeMarchePersonne: number;
        cateAgentEcnmBafi: number;
        cateClientBafi: number;
        typeAdmnBafi: number;
        classeAgentBafi: string;
        codeSituationFamille: number;
        codeSituationFamilleRegle: number;
        nombrePersonneCmpstMeng: number;
        nombreActfMeng: number;
        dateEncoursEpargneLogement: Date;
        encoursEncoursIsssPretPEL: number;
        montantEncoursIsssPretLEL: number;
        montantEncoursLivrAutreEtbl: number;
        montantEncoursPlnsAutreEtbl: number;
        totalRevnAnnulationNets: number;
        montantRevnMeng: number;
        stttOccpLogementActuariel: string;
        codeTitreCivilite: string;
        nomRaisonSocialeEmprunt: string;
        intituleLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        compIntituleLigne2: string;
        adresseLigne5: string;
        codeDestinataireAutreParObjet: number;
        codeSecteurRattachement: string;
        codeJeunMeng: number;
        esperVie: number;
        esperVieDecision: number;
        esperVieStress: number;
        listeIdPersonne: Array<string>;
        idws: string;
        constructor(emprunteur?: IEmprunteur);
    }
}

declare module instructionCredit.Modele {
    interface IEntiteTitulaire {
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantEntiteTitulaire: number;
        modeCompositionEntiteTitulaire: string;
        modeCompositionIndivision: string;
    }
}

declare module instructionCredit.Modele {
    interface IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse?: number;
        montantValeurEpargneAvenantOper?: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: number;
        montantEpargneApreOper?: number;
        codeDevise?: string;
        idPersonne?: string;
        idws?: string;
        isCe?: boolean;
        dateValorisation?: Date;
    }
    class EpargnePersonne implements IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        libelleCaisseEpargne: string;
        dateValeurEpargne: number;
        codeDevise: string;
        constructor();
    }
    class EpargnePersonneMaj implements IEpargnePersonne {
        codeFamilleProduitAdresse: string;
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        montantValeurEpargneAvenantOper: number;
        libelleCaisseEpargne: string;
        dateValeurEpargne: number;
        montantEpargneApreOper: number;
        idws: string;
        constructor();
        constructor(epargne: IEpargnePersonne);
    }
}

declare module instructionCredit.Modele {
    interface IInformationEntiteTitulaire {
        CaracteristiqueEntiteTitulaire: Modele.ICaracteristiqueEntiteTitulaire;
        listeCompositionEntiteTitulaire: Array<Modele.ICompositionEntiteTitulaire>;
        libelleType?: string;
        designationEntiteTitulaire?: string;
    }
    interface ICaracteristiqueEntiteTitulaire {
        codeAgentGestionEntiteTitulaire: number;
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        codeTypeDesignationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationBancaire: string;
        dateClotureEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        identifiantEntiteTitulaire: number;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
    }
    interface ICompositionEntiteTitulaire {
        codeRangEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantLieuActivite: number;
        identifiantProfessionnel: number;
        identifiantTiers: number;
        indicateurResponsableCompteET: string;
        natureLienET: string;
        libelleType?: string;
    }
}

declare module instructionCredit.Modele {
    interface IInterditBancaire {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: string;
        dateApplicationFicp: string;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: string;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
        idPersonnePhys: string;
        idws: string;
    }
    class InterditBancaireMaj {
        codeRepnBDF: number;
        codeRepnFicp: number;
        codeTypeRepnBDF: string;
        codeTypeRepnFicp: string;
        dateApplicationBDF: string;
        dateApplicationFicp: string;
        libelleRepnBDF: string;
        libelleRepnFicp: string;
        codeArreSurSalr: number;
        dateApplicationFbe: string;
        codeRepnFbe: number;
        codePresListnSurCntrTechniqueRegn: number;
        libelleListnSurCntrTechniqueRegn: string;
        codeCotisationFibenDirg: string;
        idws: string;
        constructor(interdit?: IInterditBancaire);
    }
}

declare module instructionCredit.Modele {
    interface INotationTiers {
        codeSegmentRisque?: string;
        libelleSegmentRisque?: string;
        dateSegmentationRisque?: string;
        codeModeleNotationRisque?: string;
        libelleModeleNotationRisque?: string;
        valeurNoteRisque?: string;
        dateNoteRisque?: string;
        heureNoteRisque?: number;
        codeInscriptionFICP?: string;
        libelleInscriptionFICP?: string;
        dateDebutInscriptionFICP?: string;
        dateFinInscriptionFICP?: string;
        codeTypeFichageFCC?: string;
        libelleTypeFichageFCC?: string;
        dateDebutFichageFCC?: string;
        dateFinFichageFCC?: string;
        dateInterrogationFichage?: string;
        codeContexteMetier?: string;
        libelleContexteMetier?: string;
        codeSituationBDF?: string;
        libelleSituationBDF?: string;
        libelleStatutPersonne?: string;
        codeMotifModificationSain?: string;
        libelleMotifModificationSain?: string;
        dateModificationStatutDouteux?: string;
        dateDecisionPassageDouteux?: string;
        codeEtablissement?: string;
        identifiantTiers?: number;
        codeStatutDouteuxPersonne?: string;
        typeCotationFIBEN?: string;
        valeurCotationFIBEN?: string;
        dateCotationFIBEN?: string;
        dateSituationBDF?: string;
        libelleCotationFIBEN?: string;
        codeCotationCoface?: string;
        dateCotationCoface?: string;
        codeBanqueEntitePilote?: string;
    }
    class NotationTiers implements INotationTiers {
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IOpposition {
        codeOpposition: string;
        libelleOpposition?: string;
        dateDebutOpposition: string;
        dateFinOpposition: string;
        idPersonnePhys: string;
        idws: string;
    }
}

declare module instructionCredit.Modele {
    interface IParamsResteAVivre {
        dateDebutValidite: string;
        dateFinValidite: string;
        nombreDemp: number;
        nombreMinimumPersonneCharge: number;
        nombreMaximumPersonneCharge: number;
        seuilMinimum: number;
        seuilOptimisation: number;
    }
}

declare module instructionCredit.Modele {
    interface IActivitePersonne {
        codeClasseRisqueCSP: number;
        dateEffetCSP: string;
        dateEmbc: string;
        codeTypeContratEmbc: number;
        raisonSocialeEmplr: string;
        codePosteEmplr: string;
        codeApNEmplr: string;
        codeSalrDomiciliationCE: number;
        codePresActiviteSalr: number;
        codePresSuivantPersonne: number;
        nombreKilmEntreLogementTrvl: number;
        dateFinCdd: string;
        codeSecteurActivite: number;
        idPersonnePhys: string;
        libelleTypeContratEmbc: string;
    }
}

declare module instructionCredit.Modele {
    interface IPersonne {
        crteResd?: number;
        cateAgntecnmBafi?: number;
        cateClientBafi?: number;
        cateTypeAdmnBafi?: number;
        classeAgentBafi?: string;
        cleBDF?: string;
        idPersonneSI?: string;
        dateEntrRelationAvecConsolide?: string;
        codeTypePersonne?: number;
        nomRaisonSociale?: string;
        codeAssmPartc?: number;
        intituleAdresse?: string;
        adresseLigne3?: string;
        adresseLigne4?: string;
        codePoste?: string;
        ville?: string;
        complementIntitule?: string;
        adresseLigne5?: string;
        emailPerso?: string;
        numeroTeleProf?: string;
        numeroTelePersonne?: string;
        numeroTcpyProf?: string;
        numeroPortPersonne?: string;
        ensgCommission?: string;
        lieuInscRC?: string;
        numeroInscRC?: string;
        rolsPersonnePourDossier?: Array<string>;
        personneEstAssurance?: boolean;
        numeroOrdrePersonneEmprunt?: number;
        reltnEntrPersonne?: Array<string>;
        listeIdRessource?: Array<string>;
        listeIdCharge?: Array<string>;
        listeIdCompte?: Array<string>;
        listeIdFamilleEpargne?: Array<string>;
        idFicheContact?: string;
        idws?: string;
        codeTitreCivilite?: string;
        libelleTitreCivilite?: string;
        prenom?: string;
        codeSexePersonne?: number;
        nomJeunFill?: string;
        dateNais?: string;
        lieuNais?: string;
        codePersonneCE?: number;
        codeRegimeMatrimonial?: string;
        codeSituationFamille?: number;
        nombrePersonneACharge?: number;
        cateInteret?: string;
        dateEffetSituationFamille?: string;
        codeSalrDomiciliationCE?: number;
        codeModeLogement?: number;
        dateEntrLogement?: string;
        codeCapcJuridique?: number;
        codeTypeCapJuridique?: string;
        codeNational?: number;
        codeSaisieAvisTiersDtnr?: number;
        codeContentieuxHorsComptCE?: number;
        montantEncoursSaccefHorsOprt?: number;
        typeTrspUtilisation?: number;
        codeGeotAdresseDomiciliation?: string;
        codePaysResdEmprunt?: string;
        codePaysLocalisationEmprunt?: string;
        codeProfilEmprunt?: number;
        codePstlLieuNais?: string;
        idActivite?: string;
        idIntdBancaire?: string;
        listeIdOpps?: Array<string>;
        numeroINSEE?: string;
        dateInscRcs?: string;
        dateCreationSoce?: string;
        chiffreAffrHtExrcPrec?: number;
        nombreSalr?: number;
        formeJuridique?: string;
        libelleFormeJuridique?: string;
        typeDroitPersonneMorl?: number;
        montantCapital?: number;
        listeIdPersonnePhys?: Array<string>;
        listeRolePersonnePhys?: Array<string>;
        activite?: instructionCredit.Modele.IActivitePersonne;
        libModeLogement?: string;
        typeDeTransport?: instructionCredit.Modele.ISelectbox;
        catSocioProfessionnelle?: instructionCredit.Modele.ICatSocioProfessionnelle;
        adrsLign3?: string;
        adrsLign4?: string;
        adrsLign5?: string;
        complementIntt?: string;
        checked?: boolean;
        situationFamiliale?: string;
        affichageAdresse?: any;
    }
    class Personne implements IPersonne {
        idws: string;
        description: string;
        constructor(personne: IPersonne);
    }
    class PersonneMaj {
        idPersonneSI: string;
        crteResd: number;
        cateAgntecnmBafi: number;
        cateClientBafi: number;
        cateTypeAdmnBafi: number;
        classeAgentBafi: string;
        cleBDF: string;
        dateEntrRelationAvecConsolide: string;
        nomRaisonSociale: string;
        codeAssmPartc: number;
        intituleAdresse: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        complementIntitule: string;
        adresseLigne5: string;
        emailPerso: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
        numeroPortPersonne: string;
        ensgCommission: string;
        lieuInscRC: string;
        numeroInscRC: string;
        idws: string;
        constructor();
        constructor(personne: IPersonne);
    }
    class PersonnePhysiqueMaj {
        codeTitreCivilite: string;
        prenom: string;
        codeSexePersonne: number;
        nomJeunFill: string;
        dateNais: string;
        lieuNais: string;
        codePersonneCE: number;
        codeRegimeMatrimonial: string;
        codeSituationFamille: number;
        nombrePersonneACharge: number;
        cateInteret: string;
        dateEffetSituationFamille: string;
        codeSalrDomiciliationCE: number;
        codeModeLogement: number;
        dateEntrLogement: string;
        codeCapcJuridique: number;
        codeTypeCapJuridique: string;
        codeNational: number;
        codeSaisieAvisTiersDtnr: number;
        codeContentieuxHorsComptCE: number;
        montantEncoursSaccefHorsOprt: number;
        typeTrspUtilisation: number;
        codeGeotAdresseDomiciliation: string;
        codePaysResdEmprunt: string;
        codePaysLocalisationEmprunt: string;
        codeProfilEmprunt: number;
        codePstlLieuNais: string;
        idPersonneSI: string;
        constructor();
        constructor(personne: IPersonne);
    }
}

declare module instructionCredit.Modele {
    interface ITiersObjetPrincipal {
        adresseEmployeur?: any;
        chargeImposition: any;
        etablissement?: any;
        identification: ITiersIdentification;
        informationProfessionnelle?: any;
        listeAdresse: any[];
        listeBlocNotes: any[];
        listeCharge: ITiersCharge[];
        listeFraicheurRubrique?: any[];
        listeMedia: any[];
        listeParticulierProjet: any[];
        listeParticulierSensibilite: any[];
        listePatrimoineFinancier: any[];
        listePatrimoineImmobilier: any[];
        listeRevenu: ITiersRevenu[];
        listeTiersLies: any[];
        listeTiersLiesAdministratifs: any[];
        listeTypeRelationEconomique: any[][];
        particulierInformation: IParticulierInformation;
        particulierNotation: any;
        succession: any;
        status?: any;
    }
    interface ITiersIdentification {
        codeEtablissement?: string;
        identifiantPersonne?: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: any;
        libelleStatut?: any;
        codeTypeRelation: string;
        libelleTypeRelation?: any;
        dateEntreeRelation: number;
        codeGuichetRisque?: string;
        codeMarche?: any;
    }
    interface ITiersCharge {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreCharge: number;
        codeTypeCharge: string;
        nombrePeriode: number;
        montantPeriodiqueCharge: number;
        montantChargeAnnuel: number;
        dateFinValiditeCharge?: any;
        dateDebutValiditeCharge?: any;
    }
    interface ITiersRevenu {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreRevenu: number;
        codeTypeRevenu: string;
        libelleTypeRevenu?: any;
        nombrePeriode: number;
        montantRevenuAnnuel: number;
        dateFinValiditeRevenu?: any;
        dateDebutValiditeRevenu?: any;
        montantPeriodiqueRevenu: number;
    }
    interface IParticulierInformation {
        identifiantPersonne: number;
        codeEtablissement: string;
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libelleCapaciteJuridique: string;
        libellePaysNaissance: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: Date;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        nomEmployeur: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: string;
        dateFinContratTravail: Date;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeInseeLocalite: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: Date;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: Modele.IStatutPro;
        gestionPrivee: Modele.IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        nif: string;
    }
    interface IGestionPrivee {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: string;
        identifiantExterneEDS: string;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: string;
        identifiantExterneEDS2: string;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
    interface IStatutPro {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
}

declare module instructionCredit.Modele {
    interface IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt?: string;
        idws?: string;
        titre?: string;
    }
    class RevenuFiscalPersonne implements IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idEmprunt: string;
        constructor();
    }
    class RevenuFiscalMaj implements IRevenuFiscalPersonne {
        montantRevnMeng: number;
        typeRevnMeng: number;
        codeDevise: string;
        idws: string;
        constructor();
        constructor(revenuFiscal: IRevenuFiscalPersonne);
    }
}

declare module instructionCredit.Modele {
    interface IRevenuPersonne {
        typeRessource: string;
        montantRessource?: number;
        tauxPondereRessource?: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idPersonne?: string;
        idGrpeIntervenant?: string;
        idws?: string;
        LibellePers?: string;
        statut?: string;
    }
    class RevenuPersonne implements IRevenuPersonne {
        typeRessource: string;
        tauxPondereRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        constructor();
    }
    class RevenuPersonneMaj implements IRevenuPersonne {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        codeDevise: string;
        codeExisteRessourceApreOper: number;
        idws: string;
        constructor();
        constructor(revenu: IRevenuPersonne);
    }
}

declare module instructionCredit.Modele {
    class SituationFamilialeEmprunteur {
        codeSituationFamille: number;
        libelleSituationFamille: string;
        typeSituationFamille: number;
        /**
         * Construction d'une situation familiale
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IStatutRessource {
        libelle: string;
        code: string;
    }
}

declare module instructionCredit.Modele {
    interface IComplementDossier {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: Date;
        idws: string;
    }
    class ComplementDossier {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: Date;
        idws: string;
        constructor(libelle: string);
    }
    class ComplementDossierMaj {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        dateSaisieSurInternet: Date;
        heureSaisieSurInternet: Date;
        idws: string;
        constructor(complement?: IComplementDossier);
    }
}

declare module instructionCredit.Modele {
    interface ICoutObjet {
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idTravauxFinancier: string;
    }
}

declare module instructionCredit.Modele {
    interface IDossierComplet {
        idDossier: string;
        versionDossier: number;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        nombrePassOffre: number;
        dateDernierReslAdresse: string;
        dateHorizonProjet: string;
        codeVisbInstruction: number;
        dossierExisteCentral: boolean;
        nombrePersonneAssuranceParDeft: number;
        modificationEffcPendantSess: boolean;
        modeOuvertureDossier: number;
        dossierModification: boolean;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: string;
        evenMomnVertPourContratConf: string;
        dateTraitement: string;
        dateTraitementRegle: string;
        modRegleVersement: string;
        indicePrrgOffre: number;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        montantSouhInitialEmprunt: number;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        idDossierGestion: string;
        idElementStructureGestion: string;
        idElementStructureInstruction: string;
        codeAgentDecd: string;
        codeTypologieCadreFiscal: string;
        codeDevise: string;
        codeLevrSecrBancaire: number;
        dateCreationDossier: string;
        dateDernierMAJ: string;
        etatDossier: number;
        sousEtatDossier: number;
        dateDemandeFinancier: string;
        dateemssOffre: string;
        dateCiblProjet: string;
        codeOrigineDemande: string;
        dateAccrPrtr: string;
        codeEtatEngagementHors: number;
        montantEngagementHorsBiln: number;
        dateFinValiditeOffre: string;
        dateRecuperationOffreParClient: string;
        dateEffetOffre: string;
        modeRegle: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: string;
        dateLimiteRetardOffreLoiConsommation: string;
        dateMinimumAccpOffreLoiImmobilier: string;
        dateSigneEmprunt: string;
        dateRefuOffreParEmprunt: string;
        dateMinnPourVersementFondLoiConsommation: string;
        dateEditionOffre: string;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        delRetardScrivener1: number;
        codeVersementCreation: string;
        codeVersementDernierModification: string;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        numeroEchelleVersement: number;
        torechlVersement: string;
        codeEtatEnvoiDossierSaccef: number;
        dateLieEnvoiSaccef: string;
        idEnvoiSaccef: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: string;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        modeDecn: boolean;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        dateSigneDossierEnvoi: string;
        dateFinValiditeAccr: string;
        indiceOffrePre: boolean;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeEtatPresenceChargeDossier: number;
        codeEtatActiviteDossier: number;
        indicePresenceChargePieceJustificatifParPiece: number;
        idAgentBoActuarielChargeDossier: string;
        idAgentProprietaireDossier: string;
        idAgentInstructionDossier: string;
        idAgentConnaissanceDossier: string;
        idAgentPourDecisionConf: string;
        idEntiteDecision: string;
        idEntitePourTransfertBo: string;
        BblocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        dateSigneMand: string;
        precisionTaux: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        idComplementDossier: string;
        integrationDossierDeVente: number;
        canalDeCreation: string;
        canalDeDistribution: string;
        idBlocNoteNotsDivr: string;
        idReductionActe: string;
        idEmprunt: string;
        listeIdEven: Array<string>;
        listeIdAvis: Array<string>;
        listeIdAlerteEntr: Array<string>;
        listeIdAlerteSort: Array<string>;
        listeIdPrjt: Array<string>;
        listeIdVersement: Array<string>;
        listeIdPersonne: Array<string>;
        listeIdClassePersonne: Array<string>;
        idPoolEPS: string;
        listeIdPlanFinancier: Array<string>;
    }
    class DossierMaj {
        dateHorizonProjet: string;
        codeImprParExpressionVersement: number;
        codeApplicationChargeDossier: number;
        codeVisbInstruction: number;
        techniqueVent: number;
        codeLivrnImme: boolean;
        numeroAccrCmps: number;
        engagementRevc: number;
        dateSignePret: string;
        dateTraitement: string;
        idConventionPres: string;
        idPres: string;
        ensgnPres: string;
        origineCommissionProjet: number;
        codeEtatPlns: number;
        codeApplicationAnlsRisque: boolean;
        codeTypologieCadreFiscal: string;
        cdeDevise: string;
        codeLevrSecrBancaire: number;
        dateRecuperationOffreParClient: string;
        modeRegle: string;
        modeRegleVersement: string;
        numeroCompteSecoPrel: string;
        domiciliationTresCompteSeco: string;
        dateLimiteRetardEmpruntLoiConsommation: string;
        idExterneDossier: string;
        typeLoiScrivener: number;
        codeAuthentiqueContrat: boolean;
        montantVersementCnvn: number;
        pourcentageFinancier: number;
        idReductionActe: string;
        idOrigineDemande: string;
        libelleOrigineDemande: string;
        datePrevSigneNotaire: string;
        referenceExterneDossier: string;
        elementStructure5: string;
        elementStructure6: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        codeTypeEngagement: string;
        idAgentInstructionDossier: string;
        idAgentPourDecisionConf: string;
        idEntitePourTransfertBo: string;
        blocNotes: string;
        codeEtapeSimulation: number;
        numeroFichPres: string;
        codePrscDossierPres: number;
        codeDevCreditDev: string;
        numeroCompteDev: string;
        modeRegleDev: string;
        modRegleVersementDev: string;
        canalDeDistribution: string;
        idws: string;
        constructor(dossier?: IDossierComplet);
    }
}

declare module instructionCredit.Modele {
    class DossierResume {
        versionDossier: string;
        dateCreationDossier: Date;
        libelleEntiteProprietaireDossier: string;
        libelleAgenceAffectation: string;
        codeTitreCivilite: string;
        dateDernierMAJ: Date;
        codeEtatOuvertureDossier: string;
        idAgentConnaissanceDossier: string;
        typeDossier: string;
        codeTypeObjetCommercialisation: string;
        codeNatureFinancier: string;
        codeCategorieEmprunt: string;
        ville: string;
        coutTotalObjet: number;
        idAgentInstructionDossier: string;
        libelleConventionPres: string;
        idElementStructureInstruction: string;
        nomPatrPartc: string;
        premierPrenomEtatCivilitePartc: string;
        dateFinValiditeOffre: Date;
        nombrePeriodeValiditeOffreContrat: string;
        dateEditionOffre: Date;
        dateHorizonProjet: Date;
        codeEtatPresenceChargeDossier: string;
        codeEtatActiviteDossier: string;
        codeTypeEngagement: string;
        idAgentPourDecisionConf: string;
        codeTypeElementStructure: string;
        idAgentBoActuarielChargeDossier: string;
        idEntitePourTransfertBo: string;
        codeTypeElementStructureBo: string;
        premierElementStructure1: string;
        deuxiemeElementStructure1: string;
        troisiemeElementStructure1: string;
        quatriemeElementStructure1: string;
        cinquiemeElementStructure1: string;
        sixiemeElementStructure1: string;
        codeAlerte: string;
        codeTypeEven: string;
        codeAlerteEmis: string;
        numeroAlerte: number;
        numeroRelationEvenDossier: number;
        referenceExterneAgentConnaissance: string;
        idAgentProprietaireDossier: string;
        premierElementStructure: string;
        deuxiemeElementStructure: string;
        troisiemeElementStructure: string;
        quatriemeElementStructure: string;
        cinquiemeElementStructure: string;
        sixiemeElementStructure: string;
        codeEtatDossier: string;
        idDossier: string;
        nomRaisonSocialeEmprunt: string;
        idEntiteTitulaireClient: string;
        nomPres: Date;
        codeVisbInstruction: string;
        codeDevise: string;
        codeProcessusInstruction: string;
        codeTraitementComp: string;
        codeOrigineDemande: string;
        codeApplicationChargeDossier: string;
        codeImprParExpressionVersement: string;
        codeEtapeSimulation: string;
        idParentPrincipal: string;
        critereRechercheApplication1: string;
        critereRechercheApplication2: string;
        critereRechercheApplication3: string;
        critereRechercheApplication4: string;
        critereRechercheApplication5: string;
        /**
         * Construction de l'objet résumé du dossier
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface IRelationPersonne {
        codeNatureRelation: string;
        idPersonne2: string;
        idws: string;
        description?: string;
    }
}

declare module instructionCredit.Modele {
    interface IBlocNotesSchema {
        typeBlocNote: string;
        idws: string;
        description: string;
    }
    interface IClausePersonnaliseeSchema {
        destinataireClassePersonne: number;
        idws: string;
        description: string;
    }
    interface IAlerteEnSortieSchema {
        codeAlerte: string;
        numberEmissionAlerte: number;
        idws: string;
        description: string;
    }
    interface IAlerteEnEntreeSchema {
        codeAlerte: number;
        numberEmissionAlerte: number;
        idws: string;
        description: string;
    }
    interface IAvisSchema {
        codeTypologieAvis: string;
        numberSaisieAvis: number;
        idws: string;
        description: string;
    }
    interface IEvenementSchema {
        codeTypeEven: string;
        numberEffetEven: number;
        idws: string;
        description: string;
    }
    interface IVersementSchema {
        pourcentageVersement: number;
        idws: string;
        description: string;
    }
    interface IRedacteurActeSchema {
        idPersonneSI: string;
        idws: string;
        description: string;
    }
    interface IRessourceSchema {
        typeRessource: string;
        montantRessource: number;
        nombrePeriodeParAn: number;
        idws: string;
        description: string;
    }
    interface IChargeSchema {
        typeDech: string;
        montantCharge: number;
        nombrePeriodeParAn: number;
        idws: string;
        description: string;
    }
    interface IPhaseCreditExistantSchema {
        codeTypePhase: string;
        idws: string;
        description: string;
    }
    interface ICreditExistantSchema {
        montantRestantDu: number;
        phasesCreditExistant: Array<IPhaseCreditExistantSchema>;
        idws: string;
        description: string;
    }
    interface IRevenuFiscalSchema {
        montantRevnMeng: number;
        idws: string;
        description: string;
    }
    interface IPatrimoineImmobilierSchema {
        naturePatrimoineImmobilier: number;
        valeurActuarielPatrimoine: number;
        idws: string;
        description: string;
    }
    interface IEmprunteurSchema {
        idwsPersonnes: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        revenusFiscaux: Array<IRevenuFiscalSchema>;
        patrimoinesImmobilier: Array<IPatrimoineImmobilierSchema>;
        idws: string;
        description: string;
    }
    interface IFamilleEpargneSchema {
        codeFamilleProduitAdresse: string;
        montantValeurEpargneAvenantOper: number;
        idws: string;
        description: string;
    }
    interface ICompteSchema {
        numeroCompte: string;
        typeCompte: string;
        idws: string;
        description: string;
    }
    interface ICompteProfessionnelSchema {
        idws: string;
        description: string;
    }
    interface ICompteDepotSchema {
        idws: string;
        description: string;
    }
    interface IRelationEntrePersonnesSchema {
        codeNatureRelation: string;
        idPersonne2: string;
        idws: string;
        description: string;
    }
    interface IComplementFicheContactSchema {
        idws: string;
        description: string;
    }
    interface IPersonneSchema {
        codeTypePersonne: number;
        nomRaisonSociale: string;
        idPersonneSI: string;
        roles: Array<string>;
        ressources: Array<IRessourceSchema>;
        charges: Array<IChargeSchema>;
        famillesEpargne: Array<IFamilleEpargneSchema>;
        comptes: Array<ICompteSchema>;
        relationsEntrePersonnes: Array<IRelationEntrePersonnesSchema>;
        complementFicheContact: IComplementFicheContactSchema;
        idws: string;
        description: string;
    }
    interface IPersonneMoraleSchema {
        listeIdPersonnePhys: Array<string>;
        idws: string;
        description: string;
    }
    interface IOppositionSchema {
        codeOpposition: string;
        numberDebutOpposition: number;
        numberFinOpposition: number;
        idws: string;
        description: string;
    }
    interface IInterditBancaireSchema {
        idws: string;
        description: string;
    }
    interface IActiviteSchema {
        codeClasseRisqueCSP: number;
        idws: string;
        description: string;
    }
    interface IPersonnePhysiqueSchema {
        oppositions: Array<IOppositionSchema>;
        interditBancaire: IInterditBancaireSchema;
        activite: IActiviteSchema;
        idws: string;
        description: string;
    }
    interface IBienAVendreSchema {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        prixNetVendeur: number;
        idws: string;
        description: string;
    }
    interface IInfoRegroupementSchema {
        idws: string;
        description: string;
    }
    interface IPretReamenageSchema {
        codeBanque: string;
        idCreditGestion: string;
        montantRestantDuSurPretRefn: number;
        informationRegroupement: IInfoRegroupementSchema;
        idws: string;
        description: string;
    }
    interface IReamenagementSchema {
        typeReamenagement: number;
        capitalRestantDu: number;
        pretsReamenages: Array<IPretReamenageSchema>;
        idws: string;
        description: string;
    }
    interface IAplSchema {
        montantAPL: number;
        typeAPL: number;
        idws: string;
        description: string;
    }
    interface ICreditExterneSchema {
        libletblPret: string;
        montantCapital: number;
        tegActu: number;
        idws: string;
        description: string;
    }
    interface IPalierContraintSchema {
        numberDebutPeriode: number;
        durePalier: number;
        montantEcheance: number;
        idws: string;
        description: string;
    }
    interface IRemiseClientSchema {
        montantApplication: number;
        tauxApplication: number;
        idws: string;
        description: string;
    }
    interface ITrancheMontantSchema {
        tauxTrancheMontant: number;
        debutTrancheMontant: number;
        finTrancheMontant: number;
        remiseClient: IRemiseClientSchema;
        idws: string;
        description: string;
    }
    interface ICotisationSchema {
        tauxCotisation: number;
        montantCotisation: number;
        remiseClient: IRemiseClientSchema;
        tranchesMontant: Array<ITrancheMontantSchema>;
        idws: string;
        description: string;
    }
    interface ICotisationTrancheAgeSchema {
        idws: string;
        description: string;
    }
    interface ICotisationPhaseSchema {
        idws: string;
        description: string;
    }
    interface ICotisationDerogationSchema {
        idws: string;
        description: string;
    }
    interface ICotisationPeriodeSchema {
        idws: string;
        description: string;
    }
    interface ICouvertureCreditSchema {
        montantCouverture: number;
        quotientCouverture: number;
        idCredit: string;
        cotisations: Array<ICotisationSchema>;
        idws: string;
        description: string;
    }
    interface IAccessoireSchema {
        couverturesCredits: Array<ICouvertureCreditSchema>;
        idws: string;
        description: string;
    }
    interface IAccessoireComplementaireSchema {
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        idws: string;
        description: string;
    }
    interface IAccessoireLieProduitSchema {
        codeTypeAccessoire: string;
        idProduitFinancier: string;
        idws: string;
        description: string;
    }
    interface IAvisOrganismeExterneSchema {
        codeDecision: string;
        numberAvis: number;
        idws: string;
        description: string;
    }
    interface IAssuranceSchema {
        idPersonne: string;
        idConvention: string;
        avisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
        idws: string;
        description: string;
    }
    interface IGarantieSchema {
        idPersonne: string;
        idws: string;
        description: string;
    }
    interface IBienPorteEnGarantieSchema {
        idws: string;
        description: string;
    }
    interface IHypothequeAerienneSchema {
        idws: string;
        description: string;
    }
    interface IBonDeCaisseCapitalisationSchema {
        idws: string;
        description: string;
    }
    interface IDelegationLoyerSchema {
        idws: string;
        description: string;
    }
    interface ICessionDaillyAutreSchema {
        idws: string;
        description: string;
    }
    interface ICessionDaillyLoyerImmeubleSchema {
        idws: string;
        description: string;
    }
    interface IGageVehiculeSchema {
        idws: string;
        description: string;
    }
    interface IGageCompteInstrumentFinancierSchema {
        idws: string;
        description: string;
    }
    interface INantissementPartSocialeSchema {
        idws: string;
        description: string;
    }
    interface INantissementValeurMaterielleSchema {
        idws: string;
        description: string;
    }
    interface INantissementValeurMobiliereSchema {
        idws: string;
        description: string;
    }
    interface INantissementFondDeCommerceSchema {
        idws: string;
        description: string;
    }
    interface IProprietaireSchema {
        idws: string;
        description: string;
    }
    interface IHypothequeImmobiliereSchema {
        proprietaires: Array<IProprietaireSchema>;
        idws: string;
        description: string;
    }
    interface IBienDiversSchema {
        idws: string;
        description: string;
    }
    interface IVersementAttenduSchema {
        montantVersement: number;
        idws: string;
        description: string;
    }
    interface IContratAssuranceSchema {
        versementsAttendus: Array<IVersementAttenduSchema>;
        idws: string;
        description: string;
    }
    interface IAntichreseSchema {
        idws: string;
        description: string;
    }
    interface ICreditHDSchema {
        referencePret: string;
        montantPret: number;
        idCreditExnt: string;
        idws: string;
        description: string;
    }
    interface IGarantieHDSchema {
        natureGarantieHorsDossier: string;
        idOrigineGarantieHorsDossier: string;
        creditsHD: Array<ICreditHDSchema>;
        idws: string;
        description: string;
    }
    interface IGarantieReelleSchema {
        bienPorteEnGarantie: IBienPorteEnGarantieSchema;
        garantieHD: IGarantieHDSchema;
        idws: string;
        description: string;
    }
    interface IGarantiePersonnelleSchema {
        avisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
        idws: string;
        description: string;
    }
    interface IServiceSurObjetSchema {
        idConvention: string;
        idws: string;
        description: string;
    }
    interface ITauxFixeLecture extends TauxInteretAnnuel {
        idws: string;
        description: string;
    }
    interface ITauxMixteLecture extends TauxInteretAnnuel {
        repartition: number;
        tauxIndiceCmpstTauxMixte: ITauxIndiceLecture;
        tauxFixeCmpstTauxMixte: ITauxFixeLecture;
        idws: string;
        description: string;
    }
    interface IEcheanceOptimisationSchema {
        montantRemboursementSaisie: number;
        codeTypeElementSaisie: number;
        idws: string;
        description: string;
    }
    interface ICreditPalierTauxSchema {
        tauxInterieurPalier: TauxInteretAnnuel;
        dureeEnMois: number;
        echeancesOptimisation: Array<IEcheanceOptimisationSchema>;
        idws: string;
        description: string;
    }
    interface ICreditParamIndexationSchema {
        numeroIndiceRevisionCredit: number;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionSchema {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        creditParamsIndexation: Array<ICreditParamIndexationSchema>;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionParPhaseSchema extends ICreditParamRevisionSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseSchema {
        dureeEnMois: number;
        creditPaliersTaux: Array<ICreditPalierTauxSchema>;
        creditParamsRevisionParPhase: ICreditParamRevisionParPhaseSchema;
        idws: string;
        description: string;
    }
    interface ICreditPalierProgressionSchema {
        idws: string;
        description: string;
    }
    interface IComplementPhasePretCombineSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseAmortissementSchema extends ICreditPhaseSchema {
        creditPaliersProgression: Array<ICreditPalierProgressionSchema>;
        complementPhasePretCombine: IComplementPhasePretCombineSchema;
        idws: string;
        description: string;
    }
    interface ICreditPhaseDiffereAmortissementSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseDiffereTotalSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhaseMobilisationSchema {
        idws: string;
        description: string;
    }
    interface ICreditPhasePrefinancementSchema {
        idws: string;
        description: string;
    }
    interface ISuiviPlanifieSchema {
        idws: string;
        description: string;
    }
    interface IPayeurSchema {
        pourcentagePaiementCredit: number;
        idPersonne: string;
        idws: string;
        description: string;
    }
    interface ICreditParamRevisionParPeriodeSchema {
        idws: string;
        description: string;
    }
    interface ICreditModaliteSchema {
        idModeleCalculImpe: string;
        numeroModeleRemboursementAnticipe: number;
        idws: string;
        description: string;
    }
    interface ICreditBonificationInfoSchema {
        codeInformation: string;
        codeDetail: string;
        idws: string;
        description: string;
    }
    interface ICreditBonificationSchema {
        idConvention: string;
        information: Array<ICreditBonificationInfoSchema>;
        idws: string;
        description: string;
    }
    interface IDroitUtiliseSchema {
        montantDroitAcqsUtilisation: number;
        idTrancheEL: string;
        idws: string;
        description: string;
    }
    interface ICompteCourantSchema {
        montantHypothequeCapital: number;
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        idws: string;
        description: string;
    }
    interface IVariationDureeSchema {
        nombrePeriodeVartPossibilite: number;
        typeButoireVartDure: number;
        idws: string;
        description: string;
    }
    interface IVersementFractionneSchema {
        nombreVersementSouh: number;
        montantVersementFraction: number;
        idws: string;
        description: string;
    }
    interface IComplementEPSSchema {
        idDossierInstruction: string;
        idEPS: string;
        libelleLongEngagementParSigne: string;
        idExterneAlis: string;
        referenceExterneDossierParent: string;
        idws: string;
        description: string;
    }
    interface ITACreditEPSSchema {
        numberEcheanceMER: number;
        montantCapitalAmortissement: number;
        montantCapitalRestantDu: number;
        idws: string;
        description: string;
    }
    interface ICreditEPSSchema {
        codeDevise: string;
        quotientCreditCouvertureParEPS: number;
        referenceExterneCreditCouvertureEPS: string;
        taCreditCouvertureParEPS: Array<ITACreditEPSSchema>;
        idws: string;
        description: string;
    }
    interface ICreditInterneSchema {
        idProduitFinancier: string;
        montantCapitalCredit: number;
        tegProp: number;
        phases: Array<ICreditPhaseSchema>;
        remiseClient: IRemiseClientSchema;
        suivisPlanifies: Array<ISuiviPlanifieSchema>;
        payeurs: Array<IPayeurSchema>;
        creditParamsRevision: Array<ICreditParamRevisionSchema>;
        creditModalite: ICreditModaliteSchema;
        creditBonification: ICreditBonificationSchema;
        droitsUtilises: Array<IDroitUtiliseSchema>;
        compteCourant: ICompteCourantSchema;
        variationsDuree: Array<IVariationDureeSchema>;
        versementFractionne: IVersementFractionneSchema;
        complementEPS: IComplementEPSSchema;
        creditsEPS: Array<ICreditEPSSchema>;
        idws: string;
        description: string;
    }
    interface IPlanFinancementSchema {
        montantTotalEmpruntPlan: number;
        montantApportPersonne: number;
        montantPreEchPhase: number;
        aPL: IAplSchema;
        creditsExternes: Array<ICreditExterneSchema>;
        paliersContraints: Array<IPalierContraintSchema>;
        accessoiresComplementaires: Array<IAccessoireComplementaireSchema>;
        accessoiresLiesProduit: Array<IAccessoireLieProduitSchema>;
        assurances: Array<IAssuranceSchema>;
        garanties: Array<IGarantieSchema>;
        servicesSurObjet: Array<IServiceSurObjetSchema>;
        creditsInternes: Array<ICreditInterneSchema>;
        idws: string;
        description: string;
        libelle?: string;
        dureeMax?: number;
    }
    interface IProjetSchema {
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        coutTotalObjet: number;
        bienAVendre: IBienAVendreSchema;
        reamenagement: IReamenagementSchema;
        plansFinancement: Array<IPlanFinancementSchema>;
        idPlanRetn: string;
        idws: string;
        description: string;
    }
    interface IBienConsoFinanceSchema {
        idws: string;
        description: string;
    }
    interface IAutoMotoSchema {
        idws: string;
        description: string;
    }
    interface IBienDetailleSchema {
        idws: string;
        description: string;
    }
    interface IBienEquipementProSchema {
        idws: string;
        description: string;
    }
    interface ITresorerieFinanceeSchema {
        idws: string;
        description: string;
    }
    interface IProjetNonImmobilierSchema extends IProjetSchema {
        bienConsommationFinance: IBienConsoFinanceSchema;
        bienEquipementPro: IBienEquipementProSchema;
        tresorerieFinancee: ITresorerieFinanceeSchema;
        idws: string;
        description: string;
    }
    interface IPromotionImmobiliereSchema {
        intituleProgramme: string;
        situationProgramme: number;
        idws: string;
        description: string;
    }
    interface ITerrainFinanceSchema {
        coutTerr: number;
        idws: string;
        description: string;
    }
    interface IBienSousJacentSchema {
        idws: string;
        description: string;
    }
    interface ITerrainSousJacentSchema {
        idws: string;
        description: string;
    }
    interface ISoulteFinanceeSchema {
        montantSoul: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IDetailCoutObjetSchema {
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
        idws: string;
        description: string;
    }
    interface ITravauxFinancesSchema {
        coutTravaux: number;
        bienSousJacent: IBienSousJacentSchema;
        detailsCoutObjet: Array<IDetailCoutObjetSchema>;
        idws: string;
        description: string;
    }
    interface IConstructionFinanceeSchema {
        coutConstructionFinancier: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IBatimentHabitableFinanceSchema {
        coutAcqsBatimentHabitation: number;
        bienSousJacent: IBienSousJacentSchema;
        idws: string;
        description: string;
    }
    interface IButLocatifSchema {
        montantAnnuLoyePerc: number;
        idws: string;
        description: string;
    }
    interface ITrancheELSchema {
        montantDroitAcqs: number;
        idws: string;
        description: string;
    }
    interface IContratEpargneLogementSchema {
        codeTypeEL: number;
        idContratEpargneLogement: string;
        tranchesEL: Array<ITrancheELSchema>;
        idPersonneBeneficiaire: string;
        idws: string;
        description: string;
    }
    interface IProjetImmobilierSchema extends IProjetSchema {
        promotionImmobiliere: IPromotionImmobiliereSchema;
        terrainFinance: ITerrainFinanceSchema;
        soulteFinance: ISoulteFinanceeSchema;
        travauxFinance: ITravauxFinancesSchema;
        constructionFinance: IConstructionFinanceeSchema;
        batimentHabitableFinance: IBatimentHabitableFinanceSchema;
        butLocatif: IButLocatifSchema;
        contratsEL: Array<IContratEpargneLogementSchema>;
        idws: string;
        description: string;
    }
    interface IProjetEPSSchema {
        idws: string;
        description: string;
    }
    interface IComplementDossierSchema {
        libelleDelReleaseProjet: string;
        codePrrtTraitement: string;
        numberSaisieSurInternet: number;
        heureSaisieSurInternet: number;
        idws: string;
        description: string;
    }
    interface IPoolEPSSchema {
        idDossierInstruction: string;
        idOprtCess: string;
        idCadreFinancier: string;
        codeNaturePool: number;
        codeOrigineCess: number;
        typeSousRolePool: number;
        idws: string;
        description: string;
    }
    interface IBeneficiaireEpsSchema {
        idPersonneSI: string;
        idws: string;
        description: string;
    }
    interface IDossierSchema {
        etatDossier: number;
        sousEtatDossier: number;
        codeDevise: string;
        blocNotesDivers: Array<IBlocNotesSchema>;
        clausesPersonnalisees: Array<IClausePersonnaliseeSchema>;
        alertesEnSortie: Array<IAlerteEnSortieSchema>;
        alertesEnEntree: Array<IAlerteEnEntreeSchema>;
        avis: Array<IAvisSchema>;
        evenements: Array<IEvenementSchema>;
        versements: Array<IVersementSchema>;
        redacteurActe: IRedacteurActeSchema;
        emprunteur: IEmprunteurSchema;
        personnes: Array<IPersonneSchema>;
        projet: IProjetSchema;
        complementDossier: IComplementDossierSchema;
        poolEPS: IPoolEPSSchema;
        beneficiaireEPS: IBeneficiaireEpsSchema;
        idws: string;
        description: string;
    }
}

declare module instructionCredit.Modele {
    interface ITravauxFinances {
        coutTravaux: number;
        dateFinTravaux: number;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        surfHabitationTotalApreTravaux: number;
        dateConstructionBatimentSousJacent: number;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: number;
        typeLogementBatimentSous: number;
        idProjet: string;
        idBbienSousJacent: string;
        listeIdDetlCoutTravauxEcpt: Array<string>;
        idws: string;
    }
    class TravauxFinancesMaj {
        coutTravaux: number;
        dateFinTravaux: number;
        surfHabitationCree: number;
        typeTravauxCadreEcpt: number;
        dateConstructionBatimentSousJacent: number;
        surfHabitationBatimentSousJacent: number;
        dateAcqsBatimentSousJacent: Date;
        typeLogementBatimentSous: number;
        idws: string;
        constructor(travaux?: Modele.ITravauxFinances);
    }
}

declare module instructionCredit.Modele {
    interface IAccessoireLieProduit {
        idAccessoireGestion: string;
        idExterneAccessoire: string;
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        codeTypologieAccessoire: string;
        partFinancierAccessoire: number;
        codeIndiceAccessoireAper: boolean;
        codeIndiceAccessoireFinancier: boolean;
        dateCreation: Date;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        listeIdCouverture: Array<string>;
        listeIdCotisation: Array<string>;
        idConvention: string;
        listeIdAvisOrgnExtr: Array<string>;
        idPlan: string;
        idws: string;
        idProduitFinancier: string;
    }
    class AccessoireLieMaj {
        idExterneAccessoire: string;
        partFinancierAccessoire: number;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        idws: string;
        constructor(accessoire: IAccessoireLieProduit);
    }
}

declare module instructionCredit.Modele {
    interface IAccessoireType {
        codeTypeAccessoire: string;
        libelleTypeAccessoire: string;
        codeAccessoireCalculICNE: number;
        codeAccessoireCumuleFrsTTCCt4R: number;
        codeNatureAccessoire: string;
        libelleCreationTypeAccessoire: string;
        numeroOrdreClasse: number;
        codeTypologieAccessoire: string;
    }
}

declare module instructionCredit.Modele {
    interface IAssurance {
        typeAssurance?: string;
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        idPersonneAssurance?: string;
        idConvention?: string;
        quotite?: string;
        nomAssure?: string;
        risqueTypeAssurance?: string;
        libelleConvention?: string;
        montant?: number;
        taux?: number;
        idAccessoireGestion?: string;
        idExterneAccessoire?: string;
        codeSousTypeAccessoire?: string;
        codeTypeAccessoire?: string;
        codeTypologieAccessoire?: string;
        partFinancierAccessoire?: number;
        codeIndiceAccessoireAper?: boolean;
        codeIndiceAccessoireFinancier?: boolean;
        dateCreation?: string;
        dateAccpAccessoire?: string;
        dateCloture?: string;
        codeEtatAccessoire?: number;
        dateEnvoi?: string;
        dateEffet?: string;
        dateFinEffet?: string;
        listeIdCouverture?: Array<string>;
        listeIdCotisation?: Array<string>;
        listeIdAvisOrgnExtr?: Array<string>;
        idPlan?: string;
        idws?: string;
    }
    class AssuranceMaj implements IAssurance {
        codeDeleAssurance: number;
        beneficiaireAssuranceAvenantVersement: string;
        codeCouvertureExts: number;
        typeRisque: number;
        codeAssuranceObligatoire: number;
        codeAssurancePart: number;
        codeResr: number;
        libelleAssuranceExterne: string;
        numeroSirenCieAssurance: string;
        numeroRegleCalculDateEffet: string;
        codeAgreAssuranceExtr: number;
        idws: string;
        constructor();
        constructor(assurance: IAssurance);
    }
}

declare module instructionCredit.Modele {
    interface IEntreeOptimisationAvancee {
        idwsPlanFinancier: string;
        montantEcheanceMaximum: number;
        tauxEndtMaximum: number;
        inclAssurance: boolean;
        inclAPL: boolean;
        alerteBlqn: boolean;
        idProduitLissage: string;
        dureeCreditLissage: number;
        dureeCreditLissageFixe: boolean;
        lissageTotal: boolean;
        tauxCreditLissage: number;
        idProduitInterieur: string;
        dureeCreditInterieur: number;
        dureeCreditInterieurFixe: boolean;
        tauxCreditInterieur: number;
        inclPEL: boolean;
        inclCEL: boolean;
        epargneLogementObligatoire: boolean;
        epargneLogementExterne: boolean;
        dureeEpargneLogement: number;
        dureeEpargneLogementFixe: boolean;
        inclPATZ: boolean;
        inclEcoPTZ: boolean;
        dureeEcoPTZ: number;
    }
    class EntreeOptimisationAvancee implements IEntreeOptimisationAvancee {
        idwsPlanFinancier: string;
        montantEcheanceMaximum: number;
        tauxEndtMaximum: number;
        inclAssurance: boolean;
        inclAPL: boolean;
        alerteBlqn: boolean;
        idProduitLissage: string;
        dureeCreditLissage: number;
        dureeCreditLissageFixe: boolean;
        lissageTotal: boolean;
        tauxCreditLissage: number;
        idProduitInterieur: string;
        dureeCreditInterieur: number;
        dureeCreditInterieurFixe: boolean;
        tauxCreditInterieur: number;
        inclPEL: boolean;
        inclCEL: boolean;
        epargneLogementObligatoire: boolean;
        epargneLogementExterne: boolean;
        dureeEpargneLogement: number;
        dureeEpargneLogementFixe: boolean;
        inclPATZ: boolean;
        inclEcoPTZ: boolean;
        dureeEcoPTZ: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ICaracteristiqueCredit {
        capitalCredit: number;
        echeanceCredit: number;
        tauxCredit: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
    }
}

declare module instructionCredit.Modele {
    class ChampInformationsComplementaires {
        champsDateFinConstruction: boolean;
        champsSurfaceHabitable: boolean;
        champsDateAchevementTravaux: boolean;
        /**
         * Construction d'un objet d'affichage des champs informations complémentaires
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class ChampMontant {
        champsAcquisition: boolean;
        champsMobilier: boolean;
        champsTravaux: boolean;
        champsEcoPTZ: boolean;
        champsTerrain: boolean;
        champsPrixConvenu: boolean;
        champsTravauxReserves: boolean;
        champsCoutConstruction: boolean;
        champsRachatCreance: boolean;
        champsBesoin: boolean;
        afficheFraisNotaire: boolean;
        afficheBoutonNegociation: boolean;
        fraisDivers: boolean;
        champsNegociation: boolean;
        rachatRegroupement: boolean;
        /**
         * Construction d'un objet d'affichage des champs montant
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    class ChampAssociation {
        typeObjetToc: string;
        typeObjetTor: string;
        cas: instructionCredit.Modele.ChampMontant;
        eligibilite: boolean;
        casInfosCompl: instructionCredit.Modele.ChampInformationsComplementaires;
        /**
         * Construction d'un objet associant les toc/tor à un cas d'affichage
         */
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ICheckBox {
        titre: string;
        checked: boolean;
        active: boolean;
    }
}

declare module instructionCredit.Modele {
    interface IConventionResume {
        idConvention: string;
        numeroExterneConvention: string;
        idIntervenant: string;
        libelleLongConvention: string;
        libelleCreationConvention: string;
        datePresenceDeffConvention: number;
        dateFinDeffConvention: number;
        modeDexp: number;
        montantMinimumCreditPourConvention: number;
        montantMaximumCreditPourConvention: number;
        nombrePeriodeMinimumCredit: number;
        periodiciteDexpConvention: number;
        nombrePeriodeMaximumCredit: number;
        quotientMinimumParBeneficiaire: number;
        quotientMaximumParBeneficiaire: number;
        pasQuotient: number;
        montantMinimumGarantieParTete: number;
        montantMaximumGarantieParTete: number;
        pasMontantGarantie: number;
        naturePresenceCharge: number;
        periodiciteRecouvrement: number;
        codeDetrDateRecouvrement: number;
        delaiRver: number;
        codeCommissionIntervenantExterieur: number;
        tauxCommissionCaisse: number;
        codeTypeAssietteCommission: number;
        codeModeleRegleCommission: number;
        codeTiersGarantie: number;
        codeTypeDobjAutre: number;
        codeNatureBonification: number;
        montantMaximumEncours: number;
        nombrePeriodeMaximumPf: number;
        nombrePeriodeMaximumDt: number;
        nombrePeriodeMaximumDa: number;
        nombrePeriodeMaximumAm: number;
        codeRestant: string;
        montantPlafondPourDelegation: number;
        typeConvention: string;
        ageMaximumRequisParConvention: number;
        ageMinimumRequisParConvention: number;
        typeDacc: string;
        codeDevise: string;
        libelleLongConventionJuridique: string;
        typeDass?: string;
        codeDerogationAge?: number;
        estExterne: boolean;
    }
    interface IConvention extends IConventionResume {
        listeCotisation?: Array<ICotisationConvention>;
        listeCdfcod_CritereId?: Array<string>;
    }
    interface IConventionAssurance extends IConvention {
        typeDass?: string;
        ageMinimumEntrAssurance?: number;
        ageMaximumEntrAssurance?: number;
        codeDestinataireRegleSinistre?: number;
        nDomiciliationBancaire?: string;
        ageMaximumCouvertureAssurance?: number;
        codeDerogationAge?: number;
        ageMaximumAssuranceDerogation?: number;
    }
    interface IConventionGarantie extends IConvention {
        formeGarantie?: string;
        casImpAutomatique?: number;
        delaiInformation?: number;
        idPersonneCouverture?: string;
        codeNatureCautionSimpleLimite?: string;
        conventionCautionMutuel?: number;
    }
    interface ICotisationConvention {
        sousTypeAccessoire: string;
        typeDaccCtfc: string;
        repriseCarObligatoireFacultatifCotisation: number;
        modeCalculLacc: number;
        dateDebutDapp: Date;
        dateFinDapp: Date;
        regleDappLacc: string;
        regleDateDebutDappLacc: string;
        regleEvenementDeclaration: string;
        codePeriodiciteApplication: number;
        codeRecouvrementAccessoire: number;
        codeTypeApplicationAccessoire: number;
        nombrePeriodeDappLacc: number;
        periodiciteDappLacc: number;
        regleDappAprd: string;
        codeCalculteg: number;
        codeAccessoireRemboursementFinCredit: boolean;
        codeApplicationEcheance: boolean;
        codeModeCalculTaux: number;
        regleCalculLacc: string;
        informationTauxCotisation: Array<number>;
        informationMontantCotisation: Array<number>;
        fractionFinancierMaximumLacc: number;
        compatibiliteInstruction: boolean;
        compatibiliteAvenant: boolean;
        financierAccessoireCredit: boolean;
        retardCodeIndiceDerogation: number;
        codeIntegrationPlanFinancier: number;
        listeCoutCotisation: Array<Object>;
        listeTrancheMontant: Array<Object>;
    }
}

declare module instructionCredit.Modele {
    interface ICotisation {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codeModeCalcul?: number;
        codeIndiceApplicationEcheance?: boolean;
        codePeriodeCalcul: number;
        dateApplicationCotisation: Date;
        dateDebutApplicationCotisation: Date;
        dateFinApplicationCotisation?: Date;
        codeRecouvrement?: number;
        montantAssiette: number;
        typeAccessoire?: string;
        codeSousTypeAccessoire?: string;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        numeroRegleCalculCotisation?: string;
        numeroRegleApplicationCotisation?: string;
        codeTypeApplicationCotisation?: number;
        montantFrsGarantie: number;
        tauxConsolideFrsDossier?: number;
        montantConsolideFrsDossier?: number;
        partFinancier: number;
        codeIndiceDepsBorne?: number;
        codeIndiceInterieurPlanFinancier?: number;
        idAccessoire?: string;
        idCouverture?: string;
        listeIdTrancheMontant?: Array<string>;
        idRemsClient?: string;
        idws?: string;
    }
    class CotisationtMaj implements ICotisation {
        tauxCotisation: number;
        montantCotisation: number;
        codeIndiceBlcgSaisieMontant: number;
        codePeriodeCalcul: number;
        dateApplicationCotisation: Date;
        dateDebutApplicationCotisation: Date;
        montantAssiette: number;
        nombrePeriodeApplicationCotisation: number;
        periodeApplicationCotisation: number;
        montantFrsGarantie: number;
        partFinancier: number;
        idws: string;
        constructor();
        constructor(cotisation: ICotisation);
    }
}

declare module instructionCredit.Modele {
    interface ICouvertureCredit {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: Date;
        idAccessoire?: string;
        idCreditCouverture?: string;
        listeIdCotisation?: Array<string>;
        idws?: string;
    }
    class CouvertureCreditMaj implements ICouvertureCredit {
        montantCouverture: number;
        quotientCouverture: number;
        montantEcheanceCouverture: number;
        dateFinAffectationCouverture: Date;
        idws: string;
        constructor();
        constructor(couverture: ICouvertureCredit);
    }
    interface IDataTableauCouvertureLigne {
        libelleCredit: string;
        quotite: number;
        montant: number;
    }
}

declare module instructionCredit.Modele {
    interface ICreditExterne {
        etablissementPreteur?: string;
        dureAmortissementMois?: number;
        tauxAmortissement?: number;
        montantCapital?: number;
        montantEcheanceAmortissement?: number;
        codePeriodeAmortissement?: number;
        codeIndiceInterieurTantPPersonne?: number;
        libelleLibrSurConcr?: string;
        codeDevise?: string;
        codeIndiceNaturePret?: number;
        libelleNaturePret?: string;
        codeIndiceTauxRevision?: number;
        dureDiffereMois?: number;
        typeSurtaxe?: number;
        codeIndicePresAssurancePertEmpl?: number;
        codeIndiceTypeRemboursement?: number;
        tegActu?: number;
        montantEcheanceDiffere?: number;
        codePeriodeDiffere?: number;
        idPlanFinancier?: string;
        libletblPret?: string;
        idws?: string;
    }
    class CreditExterne implements ICreditExterne {
        codeDevise: string;
        constructor();
    }
    class CreditExterneMaj implements ICreditExterne {
        libletblPret: string;
        dureAmortissementMois: number;
        tauxAmortissement: number;
        montantCapital: number;
        mtecheAmortissement: number;
        codePeriodeAmortissement: number;
        codeIndiceInterieurTantPPersonne: number;
        libelleLibrSurConcr: string;
        codeDevise: string;
        codeIndiceNaturePret: number;
        codeIndiceTauxRevision: number;
        dureDiffereMois: number;
        typeSurtaxe: number;
        codeIndicePresAssurancePertEmpl: number;
        codeIndiceTypeRemboursement: number;
        tegActu: number;
        mtecheDiffere: number;
        codePeriodeDiffere: number;
        idws: string;
        constructor();
        constructor(credit: ICreditExterne);
    }
}

declare module instructionCredit.Modele {
    interface ICreditInterne {
        indiceEvolutionTauxConsolidePondere?: number;
        idConventionPres?: string;
        codeIndiceEnvoiAvisEcheance?: number;
        codeIndiceOptimisationImps?: number;
        codeIndiceTauxInterieurRevision?: number;
        numeroCreditPlanFinancier?: number;
        referenceExterneCredit?: string;
        idProduitFinancier?: string;
        libelleLongProduit?: string;
        codeFamilleContratRegle?: string;
        codeSousclasseBafi?: string;
        codeIndiceCreditRelease?: number;
        idCreditGestion?: string;
        codeIndiceTraitementInterieurIntr?: number;
        codeTypeActuarielInterieurIntr?: number;
        codeDeviseVersement?: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement?: number;
        codeTypeRattachementJustificatifDeclaration?: number;
        modeRegleVersement?: string;
        numeroEchelleVersement?: number;
        dateMER0?: Date;
        dateMER1?: Date;
        dateCreationCredit?: Date;
        dateLimiteVersementFond?: Date;
        jourDateEcheance?: number;
        dateLimitePremierVersementFond?: Date;
        codeIndiceEligibiliteAPL?: number;
        codeIndicelgbAuprInstemss?: number;
        codeIndiceGestionCreditAvecCompteCrrt?: number;
        dateDernierCalculCredit?: Date;
        codeIndiceCalculAFaire?: number;
        montantPrimeEpargneLogement?: number;
        tauxNegocieSurcRemboursementAnticipe?: number;
        tauxPondereCntExtr?: number;
        tauxPondereConsolide?: number;
        margePondereConsolide?: number;
        codeCalculEcheanceVersement?: number;
        codeettEcheanceVersement?: number;
        codeIndiceNatureEcheanceVersement?: number;
        intituleLigneUn?: string;
        domiciliationTres?: string;
        numeroDomiciliationPourMiseADispFond?: string;
        montantMinimumVersement?: number;
        codeIndiceNaturePretComb?: number;
        codeIndicePresUneBonificationUneMajreTaux?: number;
        codeConfirmationReductionDurePTZ?: number;
        codeConfirmationReductionMontantPTZ?: number;
        montantReglePTZ?: number;
        montantCreditEuro?: number;
        montantMaximumPretPVH?: number;
        codeDevise?: string;
        codeDeviseSaccef?: string;
        nombrePeriodeCredit?: number;
        codePeriodeCredit?: number;
        montantCapitalCredit?: number;
        montantPrmeEcheanceHorsAccessoireCredit?: number;
        montantPrmeEcheanceAssurance?: number;
        montantTotalCreditHorsAccessoireHorsPeriodePref?: number;
        coutTotalAccessoirePosteSurCredit?: number;
        coutTotalFrsDossierAssuranceCredit?: number;
        coutTotalFrsGarantieAssuranceCredit?: number;
        coutTotalServiceSurObjetPeriodeAssuranceCredit?: number;
        coutTotalAccessoireCompPeriodeAssuranceCredit?: number;
        coutTotalServiceSurObjetAperAssuranceCredit?: number;
        coutTotalAccessoireCompAperAssuranceCredit?: number;
        montantPrmeEcheanceServiceSurObjet?: number;
        montantPrmeEcheanceAccessoireComp?: number;
        montantTotalAssurancePeriode?: number;
        codeIndiceModeCalculTaux?: number;
        tauxMoyenActuHorsBonification?: number;
        tauxMoyenPropHorsBonification?: number;
        tauxFutr?: instructionCredit.Modele.ITauxIndiceLecture;
        tauxInitial?: Modele.TauxInteretAnnuel;
        tauxMoyenActu?: number;
        tauxMoyenProp?: number;
        tegActu?: number;
        tegProp?: number;
        tAEA?: number;
        tauxMontage?: number;
        idPlanFinancier?: string;
        idCompteCrrt?: string;
        idModele?: string;
        idModeleVersementFraction?: string;
        idRemsClient?: string;
        listeIdDroitUtilisation?: Array<string>;
        listeIdPayr?: Array<string>;
        listeIdPhase?: Array<string>;
        listeIdSuivantPlafond?: Array<string>;
        listeIdParametreRevision?: Array<string>;
        listeIdVartDure?: Array<string>;
        listeIdAccessoire?: Array<string>;
        listeIdAssurance?: Array<string>;
        listeIdGarantie?: Array<string>;
        listeIdAccessoireComp?: Array<string>;
        listeIdAccessoireLiesProduit?: Array<string>;
        listeIdCreditsEPS?: Array<string>;
        idComplementEPS?: string;
        idws?: string;
        libellePret?: string;
        numeroDomiciliationDispFond?: string;
        margeTauxFutr?: number;
        valeurTauxInitial?: number;
        checked?: boolean;
        modalitesCalcul?: Array<Modele.IModalitesCalculHorsConventionParProduit>;
        modaliteType?: string;
        tauxFrais?: number;
        accessoiresLies?: Array<Modele.IAccessoireLieProduit>;
        frsDossierFinances?: boolean;
        etatDuree?: Enum.CreditDuree;
    }
    class CreditInterne implements ICreditInterne {
        codeDevise: string;
        etatDuree: Enum.CreditDuree;
        constructor();
    }
    class CreditInterneMaj implements ICreditInterne {
        idConventionPres: string;
        codeIndiceEnvoiAvisEcheance: number;
        codeIndiceOptimisationImps: number;
        referenceExterneCredit: string;
        codeIndiceTraitementInterieurIntr: number;
        codeTypeActuarielInterieurIntr: number;
        codeDeviseVersement: string;
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        codeTypeRattachementJustificatifDeclaration: number;
        modeRegleVersement: string;
        numeroEchelleVersement: number;
        jourDateEcheance: number;
        codeIndicelgbAuprInstemss: number;
        codeIndiceCalculAFaire: number;
        montantPrimeEpargneLogement: number;
        tauxNegocieSurcRemboursementAnticipe: number;
        tauxPondereCntExtr: number;
        intituleLigneUn: string;
        domiciliationTres: string;
        numeroDomiciliationDispFond: string;
        montantMinimumVersement: number;
        codeIndicePresUneBonificationUneMajreTaux: number;
        codeConfirmationReductionDurePTZ: number;
        codeConfirmationReductionMontantPTZ: number;
        montantCreditEuro: number;
        montantMaximumPretPVH: number;
        codeDeviseSaccef: string;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        montantCapitalCredit: number;
        coutTotalFrsDossierAssuranceCredit: number;
        margeTauxFutr: number;
        valeurTauxInitial: number;
        tauxMontage: number;
        idws: string;
        constructor();
        constructor(credit: ICreditInterne);
    }
    interface ICreditParamRevision {
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
        idws: string;
    }
    interface ICreditPalierTaux {
        tauxInterieurPalier: Object;
        codeTypeRemboursement: number;
        tauxProgressifEcheanceSurPalier: number;
        codePeriodeApplicationTauxProgressifEcheancePalier: number;
        numeroRelationPrmeEcheancePalier: number;
        numeroRelationDernierEcheancePalier: number;
        nombrePeriodeDureePalier: number;
        idCreditPhase: string;
        listeIdEcheanceOptimisation: Array<string>;
        idPalierTauxAssuranceProduit: string;
        idws: string;
    }
}

declare module instructionCredit.Modele {
    class CreditGraphique {
        idws: string;
        phases: Array<Modele.PhaseGraphique>;
        libelle: string;
        montant: number;
        dureeTotale: number;
        montantPremierePhase: number;
        intersections: Array<Modele.Point>;
        lissage: boolean;
        constructor();
    }
    class PhaseGraphique {
        idws: string;
        montant: number;
        duree: number;
        constructor();
    }
    class Point {
        duree: number;
        echeance: number;
    }
}

declare module instructionCredit.Modele {
    interface IDataTableauFraisLigne {
        identifiant: string;
        libelle: string;
        caractere: string;
        montant: number;
        taux: number;
        montantCredit: number;
        dureeCredit: number;
    }
    class DataTableauFraisLigne {
        identifiant: string;
        libelle: string;
        caractere: string;
        montant: number;
        taux: number;
        montantCredit: number;
        dureeCredit: number;
        /**
         * Création d'un champs requis
         * @param identifiant: string
         */
        constructor(credit: instructionCredit.Modele.ICreditInterne);
    }
}

declare module instructionCredit.Modele {
    interface IDataTableauFrais {
        libelle: string;
        montant: number;
        finance: boolean;
        ligneFrais: Array<IDataTableauFraisLigne>;
    }
}

declare module instructionCredit.Modele {
    interface IDetailAccessoire {
        idAccessoireGestion: string;
        idExterneAccessoire: string;
        codeSousTypeAccessoire: string;
        codeTypeAccessoire: string;
        codeTypologieAccessoire: string;
        partFinancierAccessoire: number;
        codeIndiceAccessoireAper: boolean;
        codeIndiceAccessoireFinancier: boolean;
        dateCreation: Date;
        dateAccpAccessoire: Date;
        dateCloture: Date;
        codeEtatAccessoire: number;
        dateEnvoi: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        listeIdCouverture: Array<string>;
        listeIdCotisation: Array<string>;
        idConvention: string;
        listeIdAvisOrgnExtr: Array<string>;
        idPlan: string;
        idws: string;
        idProduitFinancier: string;
        idCreditInterne?: string;
    }
}

declare module instructionCredit.Modele {
    interface IFamillesProduits {
        codeCategorieEmprunt: string;
        typeObjetFinancierGarantie: string;
        codeStructureInstruction: string;
        codeFamilleProduit: string;
        libelleLongFamilleProduit: string;
        listeProduits: Array<instructionCredit.Modele.IProduitsAutorises>;
    }
}

declare module instructionCredit.Modele {
    interface IFrais {
        IdntFrais: string;
        libelle: string;
        caractere: string;
        montant: number;
        taux: number;
    }
}

declare module instructionCredit.Modele {
    interface ITypeFrais {
        ligneFrais: Array<instructionCredit.Modele.IDataTableauFraisLigne>;
        libelle: string;
        montant: number;
        fianance: boolean;
    }
}

declare module instructionCredit.Modele {
    interface IGammeLissage {
        idGammeLissage: string;
        libelleGammeLissage: string;
        nombrePhaseAmortissementMinimum: number;
        nombrePhaseAmortissementMaximum: number;
        idPremierProduitGamme: string;
    }
}

declare module instructionCredit.Modele {
    interface IGarantie {
        natureGarantie?: string;
        commentaire: string;
        dateLimiteRetardCaution?: Date;
        codeFormeActeAuthentique: number;
        codeClasseGarantie?: number;
        typeSurete?: number;
        idPersonne?: string;
        codeTypeAccessoire?: string;
        idConvention?: string;
        listeIdCouverture?: Array<string>;
        idPlan?: string;
        quotite?: number;
        frais?: number;
        libelleNature?: string;
        libelleConvention?: string;
        idws?: string;
        finance?: boolean;
    }
    interface IGarantiePersonnelle extends IGarantie {
        codeNatureCaution?: number;
        listeErrrTechniqueNonBlqn?: Array<string>;
    }
    interface IGarantieReelle extends IGarantie {
        codeGarantieRchab?: number;
        numeroRangSecnHypotheque?: number;
        dureHypothequeMois?: number;
        pactCommr?: number;
        rangHypotheque?: number;
        codeCessRangHypotheque?: number;
        montantCouvertureParHypothequeRangInfe?: number;
        idGarantieHorsDossier?: string;
        idObjetPortGarantie?: string;
    }
    class GarantieReelleMaj implements IGarantieReelle {
        commentaire: string;
        codeFormeActeAuthentique: number;
        numeroRangSecnHypotheque: number;
        dureHypothequeMois: number;
        pactCommr: number;
        rangHypotheque: number;
        codeCessRangHypotheque: number;
        montantCouvertureParHypothequeRangInfe: number;
        montantFrais: number;
        idws: string;
        constructor();
        constructor(garantie: IGarantieReelle);
    }
    interface ICouvertureCreditGarantie {
        idwsCreditInterne: string;
        idProduitFinancier: string;
        libelleLongProduit: string;
        montantEmprunte: number;
        montantCouvert?: number;
        quotite?: number;
        typeFrais: string;
        tauxCotisation?: number;
        montantCotisation?: number;
    }
    interface ITypesDeFraisGarantie {
        idCaisseEpargne: number;
        codeNatureGarantie: string;
        dateTraitement: Date;
        codeTypeAccessoire: string;
        dateFinApplication: Date;
        dateDebutApplication: Date;
        codeAccessoireObligatoire: number;
        codeModeCalculAccessoire: number;
        numeroRegleCalculAccessoire: string;
        montantConsolideAccessoire: number;
        montantMinimumPlageAccessoire: number;
        montantMaximumPlageAccessoire: number;
        codeTypeAssietteCalculAccessoire: string;
        montantPlafondTrancheCalculAccessoire: number;
        tauxConsolideAccessoire: number;
        tauxMinimumAccessoire: number;
        tauxMaximumAccessoire: number;
        montantPlafondTrancheCalculAccessoire1: number;
        tauxElement: number;
        tauxMinimumAccessoire1: number;
        tauxMaximumAccessoire1: number;
        montantPlafondTrancheCalculAccessoire2: number;
        tauxElement1: number;
        tauxMinimumAccessoire2: number;
        tauxMaximumAccessoire2: number;
        montantPlafondTrancheCalculAccessoire3: number;
        tauxElement2: number;
        tauxMinimumAccessoire3: number;
        tauxMaximumAccessoire3: number;
        montantPlafondTrancheCalculAccessoire4: number;
        tauxElement3: number;
        tauxMinimumAccessoire4: number;
        tauxMaximumAccessoire4: number;
        montantMinimumAccessoireCalcul: number;
        montantMaximumAccessoireCalcul: number;
        numeroRegleApplicationAccessoire: string;
        regleDateDebutApplicationAccessoire: string;
        regleEvenementDeclaration1ErApplication: string;
        periodiciteApplicationAccessoire: number;
        codeRecouvrementAccessoire: number;
        uniteDureeApplicationAccessoire: number;
        dureeApplicationAccessoire: number;
        regleApplicationAccessoireAprd: string;
        codeAccessoireCalculteg: number;
        codeApplicationEcheance: number;
        codeCommissionIntervenantExterne: number;
        modeCalculTaux: number;
        fractionFinancierMaximum: number;
        codeCompAccessoireInstruction: number;
        codeCompAccessoireAvenant: number;
    }
    interface IGarantSureteRA {
        idws: string;
        prenom: string;
        nom: string;
        idPersonneSI: string;
        codeTitreCivilite: string;
        dateNais: number;
    }
    interface IResultatGarant {
        personnePM: IResultatGarantPersonnePM;
        personnePP: IResultatGarantPersonnePP;
        erreurTp: IResultatGarantErreurTp;
    }
    interface IResultatGarantPersonnePM {
        identifiantPersonne: string;
        codeTypePersonne: string;
        nomRaisonSociale: string;
        numeroInsee: string;
        formeJuridique: string;
        typeDroitPersonneMorale: string;
        typeAdministrationPublique: string;
        numeroInscriptionRCS: string;
        dateInscriptionRCS: Date;
        lieuInscriptionRCS: string;
        dateCreationSociete: Date;
        montantCapital: number;
        codeAPE: string;
        enseigneCommerciale: string;
        cAhtExercicePrecedent: number;
        nombreSalaries: number;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        numeroTelephone: string;
        numeroTelecopie: string;
        adresseEMail: string;
        cleBanqueFrance: string;
        dateEntreeEnRelation: Date;
        categorieAgentEconomique: string;
        categorieClienteleTypeEc: string;
        classeAgentEconomique: string;
        codePresenceEnSuiviPersonnalise: string;
        criteresResidence: string;
        codeNaceInsee: string;
        codeStatutPpe: string;
        codeIndicRetourAutoDeclarPpe: string;
        codeNiveauWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        codeEtatCompletudeDossier: string;
        codePaysResidenceEmprunteur: string;
        codeTypePersonne1: string;
        intituleLigne1: string;
        complementIntituleLigne2: string;
        codePostalLigne6: string;
        localiteLigne6: string;
        idElementStructureGestionnaire: string;
    }
    interface IResultatGarantPersonnePP {
        identifiantPersonne: string;
        codeTypePersonne: string;
        codeSexePersonne: string;
        codeTitreCivilite: string;
        nomRaisonSociale: string;
        prenoms: string;
        nomJeuneFille: string;
        dateNaissance: Date;
        lieuNaissance: string;
        codeInseePaysNaissance: string;
        codeInseePaysNationalite: string;
        codeNationalite: string;
        codeCapaciteJuridique: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        numeroTelephone: string;
        telephonePortable: string;
        numeroTelecopie: string;
        adresseEMail: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: Date;
        codeRegimeMatrimonial: string;
        criteresResidence: string;
        codeModeLogement: string;
        dateEntreeDansLesMurs: Date;
        categorieSocioProfessionnelle: string;
        dateEffetCSP: Date;
        dateEmbauche: Date;
        dateFinCdd: Date;
        codePresenceActiviteSalariee: string;
        codeTypeContratEmbauche: number;
        codeTypeActiviteSalariee: string;
        codeTypeSecteurActivite: string;
        raisonSocialeLEmployeur: string;
        codePostalLEmployeur: string;
        codeApeEmployeur: string;
        cleBanqueFrance: string;
        codePersonnelCaisseEpargne: string;
        dateEntreeEnRelation: Date;
        codeSalaireDomicilieEnCe: string;
        categorieAgentEconomique: string;
        categorieClienteleTypeEc: string;
        classeAgentEconomique: string;
        codePresenceEnSuiviPersonnalise: string;
        libelleListeNoire: string;
        codeSaisieAvisTiersDetenteur: string;
        codeArretSurSalaire: string;
        codeDevise: string;
        enseigneCommerciale: string;
        codeAPE: string;
        numeroInscriptionRCS: string;
        lieuInscriptionRCS: string;
        codePaysResidenceEmprunteur: string;
        codePaysLocalisation: string;
        codeProfil: string;
        codeTypeCapaciteJuridique: string;
        codeNaceInsee: string;
        codeStatutPpe: string;
        codeIndicRetourAutoDeclarPpe: string;
        codeNiveauWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        codeEtatCompletudeDossier: string;
        codeTypePersonne1: string;
        intituleLigne1: string;
        complementIntituleLigne2: string;
        codePostalLigne6: string;
        localiteLigne6: string;
        numTelephoneBureauParticulier: string;
        numTelephonePortableProfession: string;
        idElementStructureGestionnaire: string;
        codeContentieuxHorsComptePro: string;
        montantEncoursSaccefHorsOpe: number;
    }
    interface IResultatGarantErreurTp {
        codeRetour: number;
        codeDomaineGestionPacbase: string;
        codeLibelleErreur008: string;
        libelleReponse: string;
    }
}

declare module instructionCredit.Modele {
    interface INatureGarantie {
        codeNatureGarantie: string;
        libelleNatureGarantie: string;
        typeSurete: number;
        acteAuthentiqueSurNatureGarantie: number;
        classeGarantie: number;
        libelleCreationNatureGarantie: string;
        numeroOrdreClasse: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        libelleLongNatureGarantie: string;
        codeHypothequeRchab: string;
        conseille?: boolean;
        cdfcod?: string;
    }
    interface IInformationGarantie {
        cdfcod: string;
        cdfcng: string;
        libelleLong: string;
        topGarantie: boolean;
    }
}

declare module instructionCredit.Modele {
    interface IAnomalieLecture {
        typeContrôle: number;
        idAno: string;
        libelleAno: string;
        typeAno: number;
        dateHeureAno: number;
        idContrôleRegle: string;
        idObjet: string;
    }
    interface IResultatCalculSimple {
        capital: number;
        echeance: number;
        taux: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
        coutTotal: number;
    }
    interface IResultatPeriodeOptimisation {
        dureeMois: number;
        codeTypePhase: string;
        montantPremierEcheanceHorsAccessoire: number;
        montantPremierEcheanceAvecAccessoire: number;
        codePeriodicite: number;
        montantPremierEcheanceHorsAccessoirePeriodicite: number;
        montantPremierEcheanceAvecAccessoirePeriodicite: number;
        montantEcheanceOptimisation: number;
        codePeriodiciteChs: number;
    }
    interface IResultatCreditOptimisation {
        idCredit: string;
        idProduit: string;
        libelleProduit: string;
        typeCredit: number;
        montantPremierEcheanceHorsAccessoire: number;
        teg: number;
        montantFrsDossier: number;
        montantFrsGarantie: number;
        tauxUsur: number;
        codeIndiceEligibiliteAPL: number;
        dureeTotalReglePtz: number;
        montantReglePtz: number;
        indiceReductionDureePtz: boolean;
        indiceReductionMontantPtz: boolean;
        listeIdAssurance: Array<string>;
        listePeriodeOptimisation: Array<IResultatPeriodeOptimisation>;
    }
    interface IResultatPlanOptimisation {
        idWsPlanOptimisation: string;
        montantMaximumFinancier: number;
        montantMinimumRemboursement: number;
        montantFinancierInterieur: number;
        montantFinancierExterne: number;
        montantRestantFinancier: number;
        montantApport: number;
        coutTotal: number;
        montantPremierEcheanceHorsAccessoire: number;
        montantPremierEcheanceAvecAccessoire: number;
        listeCreditOptimisation: Array<IResultatCreditOptimisation>;
    }
    interface IResultatOptimisation {
        listeAno: Array<IAnomalieLecture>;
        listePlanOptimisation: Array<IResultatPlanOptimisation>;
    }
    interface ICalculerOptimisationRequest {
        identifiantDossier: string;
        identifiantPlanFinancier: string;
        identifiantLissage: string;
        montantMaximumRemboursement: number;
        lissageTotal: boolean;
        dureeFixeLissage: boolean;
        dureeSouhLissage: number;
    }
}

declare module instructionCredit.Modele {
    interface ICreditPhase {
        codeCalculInterieurRepr: number;
        modeCapitalRecouvrementInterieur: number;
        codeCapitalRecouvrementInterieur: number;
        codePeriodeAssuranceCalculInterieur: number;
        codePeriodeCalculMER: number;
        codeCalculInterieurJourRelease: number;
        codePeriodeCompositionInterieur: number;
        montantPrmeecheService: number;
        montantPrmeecheAccessoireComp: number;
        codeTypePhase: string;
        codeIndiceVersementFondAutrePendantPhase: number;
        numberCreationPhase: number;
        codeConfirmationTauxInterieurCredit: number;
        nombrePeriodePhase: number;
        codePeriodeDurePhase: number;
        tauxPhase: Modele.TauxInteretAnnuel;
        tauxPhaseHorsBonificationMajre: Modele.TauxInteretAnnuel;
        montantPrmeecheHorsAccessoire: number;
        montantPrmeecheAccessoirePeriode: number;
        idCreditIntr: string;
        idParametreRevisionParPhase: string;
        listeIdPalierTaux: Array<string>;
        idPhaseProduit: string;
        idws: string;
    }
    interface ICreditPhaseAmortissement extends ICreditPhase {
        codeRecouvrementAmortissementTermeEchu: number;
        quotientAmortissement: number;
        modeCalculAmortissement: number;
        codePrelFinPhase: number;
        tauxConstructionPhaseCredit: number;
        idCompPhasePourPretComb: string;
        listeIdPalierProgressifAmortissement: Array<string>;
    }
    interface ICreditPhaseDiffereAmortissement extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseDiffereTotal extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseMobilisation extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeRecouvrementPartielInterieur: number;
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhasePrefinancement extends ICreditPhase {
        codeRecouvrementInterieurTermeEchu: number;
        codeReductionDureePref: number;
    }
}

declare module instructionCredit.Modele {
    interface IPlanFinancementDetail {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
        codeEtatPlanFinancier: number;
        codeContratPlan: number;
        dateCreationPlan: string;
        dateDernierAnlsAdresse: string;
        dateEditPropCredit: string;
        notfEngagementBale2: string;
        codeAnlsMeneTerme: number;
        codeDecisionSpec: number;
        corcTarfCalculParAdresse: number;
        cotisationAnlsRisque: number;
        coefficientTarfCalculParAdresse: number;
        codeOriginePretPrincipal: number;
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        numeroDossierSmac: string;
        idProjet: string;
        listeIdCreditIntr: Array<string>;
        listeIdCreditExtr: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdServiceSurObjet: Array<string>;
        listeIdPalierContrat: Array<string>;
        idAPL: string;
        idws: string;
        description?: string;
        fraisDossier?: number;
        fraisCourtage?: number;
    }
    class PlanFinancement implements IPlanFinancementDetail {
        libelleRetardAdresse: string;
        montantTotalEmpruntPlan: number;
        codeEtatPlanFinancier: number;
        codeContratPlan: number;
        dateCreationPlan: string;
        dateDernierAnlsAdresse: string;
        dateEditPropCredit: string;
        notfEngagementBale2: string;
        codeAnlsMeneTerme: number;
        codeDecisionSpec: number;
        corcTarfCalculParAdresse: number;
        cotisationAnlsRisque: number;
        coefficientTarfCalculParAdresse: number;
        codeOriginePretPrincipal: number;
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        numeroDossierSmac: string;
        idProjet: string;
        listeIdCreditIntr: Array<string>;
        listeIdCreditExtr: Array<string>;
        listeIdAssurance: Array<string>;
        listeIdGarantie: Array<string>;
        listeIdAccessoireComp: Array<string>;
        listeIdAccessoireLiesProduit: Array<string>;
        listeIdServiceSurObjet: Array<string>;
        listeIdPalierContrat: Array<string>;
        idAPL: string;
        idws: string;
        constructor();
    }
    class PlanFinancementMaj {
        indiceAllt: number;
        montantApportPersonne: number;
        montantPretEpargneLogementTher: number;
        dateEditPropCredit: string;
        dureeSouh: number;
        idws: string;
        constructor(plan?: IPlanFinancementDetail);
    }
}

declare module instructionCredit.Modele {
    interface IProduitsAutorises {
        codeFamilleProduit?: string;
        numeroRelationProduit?: string;
        libelleLongProduit?: string;
        numeroOrdreClasse?: number;
        codeFamilleContrôle?: string;
        montantMinimumCredit?: number;
        montantMaximumCredit?: number;
        dureeCredit?: number;
        dureeCredit1?: number;
        quotientFinancierAutre?: number;
        nombrePhaseAmortissement?: number;
        codePossibiliteDiffereTotal?: number;
        codePossibiliteDiffereAmortissement?: number;
        codeCreditRelease?: number;
        codeTauxCreditDirecteur?: number;
        indiceTypeTaux?: number;
        indiceCreditModele?: number;
        indiceProduitLissage?: number;
        indiceProduitComplement?: number;
        cleRecherche?: string;
        codeTypeTranchePret0?: string;
        indiceCompte?: number;
        codeEngagementConsolide?: number;
        codeProduitRestant?: string;
        dateFinValiditeProduit?: Date;
        idGammeLissage?: string;
        libelleGammeLissage?: string;
        nombrePhaseAmortissementMinimum?: number;
        nombrePhaseAmortissementMaximum?: number;
        idPremierProduitGamme?: string;
    }
}

declare module instructionCredit.Modele {
    interface IProduitsLissage {
        idProduit: string;
        nombrePhaseAmortissement: number;
        codeUtilisationReglePrdn: number;
    }
}

declare module instructionCredit.Modele {
    interface IDossierSmac {
        numeroEntiteTitulaire: string;
        listeDesEmprunteurs: Array<IEmprunteurSmac>;
        projet: IProjetSmac;
        listeDesCredits: Array<ICreditSmac>;
        reference: IReferenceNeoSmac;
        tauxPlancher1: number;
        tauxPlancher2: number;
        numeroOrdrePretTauxPlancher: number;
        tauxClientPretPrincipal: number;
        tauxDepartPretPrincipal: number;
        tauxClientPretComplementaire1: number;
        tauxDepartPretComplementaire1: number;
        tauxClientPretComplementaire2: number;
        tauxDepartPretComplementaire2: number;
        resultat: IResultatSmac;
    }
    interface IResultatSmac {
        code: string;
        description: string;
        details: string;
        typeResultat: number;
        identifiantDossierSmac: number;
    }
    interface IReferenceNeoSmac {
        numeroDossierNEO: string;
        numeroPlanFinancement: number;
        identifiantDossierSMAC: number;
        numeroOrdrePretTauxClientPP: number;
        numeroOrdrePretTauxClientPC1: number;
        numeroOrdrePretTauxClientPC2: number;
        modificationsSauvegardees: boolean;
        dateCreationDossier: Date;
    }
    interface IProjetSmac {
        numeroDossier: string;
        numeroPlanFinancement: string;
        numeroEntiteTitulaire: string;
        ilYAUnApporteurDAffaire: string;
        montant: string;
        marche: string;
        fraisDeDossier: string;
    }
    interface IEmprunteurSmac {
        nom: string;
        prenom: string;
        dateNaissance: string;
        numeroDePersonne: string;
        leSalaireEstDomicilie: string;
        montantDomiciliation: string;
        codeSegment: string;
        notationRisque: string;
    }
    interface ICreditSmac {
        identifiantProduitRegional: string;
        numeroDOrdre: string;
        nombreDePeriodes: string;
        montant: string;
        modeDAmortissement: string;
        periodeDAmortissement: string;
        estFloore: string;
        floor: string;
        estCape: string;
        cap: string;
        indiceDeRevision: string;
        quotiteRepartition: string;
        tauxProgressionEcheances: string;
    }
    interface IResultatBaleII {
        codeSegmentMarche: string;
        valeurNoteRisque: string;
    }
}

declare module instructionCredit.Modele {
    class SynteseFinancement {
        chargesBrutes: number;
        chargesNettes: number;
        totalPretsInternes: number;
        coutOperation: number;
        constructor();
    }
    class CreditSyntheseFinancement {
        description: string;
        montant: number;
        cout: number;
        phases: Array<PhaseSyntheseFinancement>;
        idws: string;
        teg: number;
        constructor();
    }
    class PhaseSyntheseFinancement {
        taux: number;
        description: string;
        mensualite: number;
        duree: number;
        idws: string;
        assurance: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    class SyntheseFrais {
        dossier: number;
        assurances: number;
        garanties: number;
        interets: number;
        liesAuprojet: number;
        autres: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ITauxIndiceLecture {
        marge: number;
        valeurIndice: number;
    }
}

declare module instructionCredit.Modele {
    class TauxInteretAnnuel {
        modeCalculTaux: number;
        nombrePeriodeParAn: number;
        tauxActu: number;
        tauxProp: number;
        marge: number;
        valeurIndice: number;
        constructor();
    }
}

declare module instructionCredit.Modele {
    interface ITypeAssurance {
        codeTypeAssurance: string;
        libelleTypeAssurance: string;
        codeNatureEntiteAssurance: number;
        libelleCreationTypeAssurance: string;
    }
}

declare module instructionCredit.Modele {
    interface ITypeGarantie {
        natureGarantieEPS: string;
        libelleLongNatureGarantie: string;
        libelleCreationNatureGarantie: string;
        classeGarantie: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        typeGarantieEPSNational: string;
        codeDeclarationABDF: number;
    }
}

declare module instructionCredit.Modele {
    interface IBatimentHabitableFinance {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: string;
        dateConstructionBatimentHabitation: Date;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
        idws: string;
    }
    class BatimentHabitableFinanceMaj {
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        coutAcqsBatimentHabitation: number;
        codePrixMarcheBale2: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        dateAcqsBatimentHabitation: Date;
        dateConstructionBatimentHabitation: Date;
        montantTVAFinancierARemboursement: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idws: string;
        constructor(batiment?: Modele.IBatimentHabitableFinance);
    }
}

declare module instructionCredit.Modele {
    interface IBienAVendre {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: number;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
        idws: string;
    }
    class BienAVendre implements IBienAVendre {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: number;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idProjet: string;
        idws: string;
        constructor();
    }
    class BienAVendreMaj {
        codeTypeObjetCommercialisation: string;
        codeTypeObjetRegle: string;
        typeVent: number;
        prixNetVendeur: number;
        montantCRDSurBienVend: number;
        montantCRDRachSurBienVend: number;
        montantComsAgence: number;
        montantAcqs: number;
        dateAcqs: number;
        modeAcqs: number;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        idws: string;
        constructor(bien?: IBienAVendre);
    }
}

declare module instructionCredit.Modele {
    interface IBienDetaille {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idProjet: string;
        idws: string;
    }
    class BienDetailleMaj {
        coutTerr: number;
        coutAcqsCommercialisationInds: number;
        coutAcqsHabitation: number;
        coutConstruction: number;
        coutTravauxAmen: number;
        coutPasPort: number;
        coutFondComc: number;
        coutEqpmMte: number;
        coutVehcPrfs: number;
        coutPartSociale: number;
        montantFrsNegocie: number;
        montantFrsNotaire: number;
        coutStck: number;
        coutStckHorsInstruction: number;
        coutBfr: number;
        coutBfrHorsInstruction: number;
        coutAutreFrsPrfs: number;
        coutAutreFrsPrfsHorsInstruction: number;
        montantTVAFinancier: number;
        montantRachCren: number;
        coutPartSoce: number;
        idws: string;
        constructor(bien?: Modele.IBienDetaille);
    }
}

declare module instructionCredit.Modele {
    interface IConstructionFinancee {
        coutConstructionFinancier: number;
        dateDebutConstruction: number;
        dateFinConstruction: Date;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idProjet: string;
        idTerrSousJacent: string;
        idws: string;
    }
    class ConstructionFinanceeMaj {
        coutConstructionFinancier: number;
        dateDebutConstruction: number;
        dateFinConstruction: Date;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        typeContratConstruction: number;
        typeImeu: number;
        presUneGarantieAcheTravaux: number;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        typeLogement: string;
        nombreLogementConstruction: number;
        nombrePiecePrincipalConstruction: number;
        typeLogement1: number;
        idws: string;
        constructor(construction?: Modele.IConstructionFinancee);
    }
}

declare module instructionCredit.Modele {
    interface ILocalites {
        codePoste: string;
        ville: string;
        zonePlus: string;
        zoneDeRobien: string;
        zoneBourgadeRural: string;
    }
}

declare module instructionCredit.Modele {
    interface ILocalitesSchemaParent {
        ArrayOfScLocalite: Array<instructionCredit.Modele.ILocalitesSchema>;
    }
}

declare module instructionCredit.Modele {
    interface ILocalitesSchema {
        ScLocalite: Array<instructionCredit.Modele.ILocalites>;
    }
}

declare module instructionCredit.Modele {
    interface IProjet {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        valdelgbaPrmAccessoirePourCateRegleAttribut: boolean;
        eligibilitePtz: boolean;
        eligibilitePC: boolean;
        eligibilitePas: boolean;
        elgbaEpargneLogement: boolean;
        elgbaEcpt: boolean;
        codeBatimentBassConsommation: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneGegrRegle: number;
        typeImeu: number;
        codeLogementHlm: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        idBatimentHabitationFinancier: string;
        idws: string;
        typeObjetFinancier: string;
        typeObjetRegle: string;
        codeNatureFinancier: string;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        interieurFrsDivrFinancier: string;
        cateRegleAttribut: string;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        presBienAVend: boolean;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        codeDestinataireAutreParObjet: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        fraisDeNotairesSaisissables: boolean;
        listeIdPlanFinancier: Array<string>;
        idBienAVend?: string;
        idTravauxFinancier?: string;
        idReamenagement?: string;
        typeProjet?: string;
        nature?: string;
        usage?: string;
        revente?: boolean;
        valeur?: string;
        crd?: string;
        delais?: string;
        prescripteur?: string;
        calcul?: string;
        montantOperation?: number;
        adresse?: string;
        zone?: string;
        propositions?: Array<instructionCredit.Modele.Proposition>;
        blocNote?: string;
    }
    class ProjetImmobilierMaj {
        defnSiEmpruntEstPrm: boolean;
        codeConditionDerogationPourPtz: number;
        codeBatimentBassConsommation: number;
        codeDestinataireAutreParObjet: number;
        codeModeleOccpLogement: number;
        codePrixMarche: number;
        codeTypeMarche: number;
        typeProprietaire: number;
        pourcentageProprietaireApreOper: number;
        codePaysLocalisation: string;
        montantInscHypotheque: number;
        qualEmplaProjet: number;
        zoneRegleRobnBien: string;
        zonePlusLogement: string;
        codeZoneFrncSinistre: number;
        typeImeu: number;
        idProgrammeImmobilier: string;
        idAccrPourInstruction: string;
        indicemssNouvPartScpi: number;
        codeTypeMarchePourVent: number;
        nomSoceGestion: string;
        centreBourgadeRural: boolean;
        descriptionObjet: string;
        coutTotalObjet: number;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        montantFrsDivr: number;
        montantRachCren: number;
        codeMiseOeuvrProjetPro: number;
        coutObjetSaisieCalculEnvl: number;
        negocieEffcParNotaire: boolean;
        typeAcqs: number;
        nombreUnteContratProgrammeImmobilier: string;
        coutFrsNotaire: number;
        coutRelOper: number;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        montantEstmVenl: number;
        dateEstmVenl: number;
        codeModeleEstmVenl: string;
        indiceAchtRvnt: boolean;
        idws: string;
        constructor(projet: Modele.IProjet, majToc: boolean, majAllAttributs?: boolean);
        private majSelonTocTor(toc, tor);
    }
}

declare module instructionCredit.Modele {
    interface ISoulteFinancee {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: number;
        idProjet: string;
        idBienSousJacent: string;
        idws: string;
    }
    class SoulteFinanceeMaj {
        montantSoul: number;
        permDetrSiSoulFaitSuiteDivo: boolean;
        pourcentageProprietaireOrigine: number;
        valeurActiviteCorrValeurBienOrigine: number;
        surfHabitationBienSous: number;
        dateAcqsBienSous: Date;
        idws: string;
        constructor(soulte?: Modele.ISoulteFinancee);
    }
}

declare module instructionCredit.Modele {
    interface ITerrainFinancee {
        coutTerr: number;
        dateAcqsTerr: number;
        surfTerr: number;
        codeDonTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idProjet: string;
        idws: string;
    }
    class TerrainFinanceMaj {
        coutTerr: number;
        dateAcqsTerr: Date;
        surfTerr: number;
        codeFinancierTerr: number;
        montantFrsNegocie: number;
        idws: string;
        constructor(terrain?: Modele.ITerrainFinancee);
    }
}

declare module instructionCredit.Modele {
    interface ITypeObjetCommercial {
        typeObjetFinancierGarantie: string;
        codeNatureFinancier: string;
        categorieRegleAttribut: string;
        libTypeObjetCommToc: string;
        codeVentilationSousclasseBafi: string;
        codeAffectationObjet: number;
        libCreationTypeObjetCommToc: string;
        listeTypeObjetReglemente: Array<string>;
    }
}

declare module instructionCredit.Modele {
    interface ITypeObjetReglemente {
        typeObjetRegleTor: string;
        libelleTypeObjetRegleTor: string;
        libCreationTypeObjetRegleTor: string;
    }
}

declare module instructionCredit.Modele {
    interface ITypologieTravaux {
        idCaisseEpargne: number;
        codeTypologieCoutTravaux: string;
        libelleCreationTypologieCout: string;
        libelleLongTypologieCout: string;
    }
}

declare module instructionCredit.Modele {
    interface IUnitesPermisConstruire {
        code: string;
        libelle: string;
        emolument: number;
    }
}
