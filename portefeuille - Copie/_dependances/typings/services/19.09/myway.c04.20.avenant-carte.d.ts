
declare module AvenantCarte {
    var app: any;
}

declare module AvenantCarte.MyData {
    class MyChaine {
        valeur: String;
    }
    class MyNombre {
        valeur: Number;
        constructor(aNombre: number);
        static fromNumber(aNombre: number): MyNombre;
        toLeftPadZero(aTaille: number): string;
    }
    class MyDateHeure {
        static formatDateTiretAAAAMMJJ: string;
        static formatDateTiretAAAAMMJJhhmmss: string;
        static formatDateSlashJJMMAAAA: string;
        static formatDateSlashJJMMAAAAaHHhMM: string;
        static uniteJour: string;
        valeur: Date;
        constructor(aDate: Date);
        static fromDate(aDate: Date): MyDateHeure;
        static fromChaineTiretAAAAMMJJ(aDate: any): MyDateHeure;
        static fromChaineTiretAAAAMMJJ_HHMMSS(aDate: string, aHeure: string): MyDateHeure;
        static nowDate(): MyDateHeure;
        static now(): MyDateHeure;
        toDate(): Date;
        toIsoString(): string;
        static estAujourdhui(aDate: Date): boolean;
        estAujourdhui(): boolean;
        static nbJoursDepuis(aDate: MyDateHeure): Number;
        toChaineMoment(aFormat: string): string;
        toChaineSlashJJMMAAAA(): string;
        toChaineSlashJJMMAAAAaHHhMM(): string;
        toChaineTiretAAAAMMJJ(): string;
    }
    class MyDate {
    }
    class MyHeure {
    }
}

declare module Commun.Services.TablesDelocalisees {
    class ListeTablesDelocalisees {
        static refCARTE: string;
        static refX105ETAC: string;
        static refX106FORM: string;
        static refX107RNLT: string;
        static refX108SEUI: string;
        static refX109DOTA: string;
        static refX112FAMI: string;
        static refX113ORIG: string;
        static refX114NRES: string;
        static refX125CROU: string;
        static refX126ACAC: string;
        static refX127RSAC: string;
        static routageMotifNonRespect: string;
    }
    class TableDelocalisee {
        private svcAgent;
        static nomClasse: string;
        info: any;
        data: Array<any>;
        referenceTableDelocalisee: string;
        constructor(svcAgent: MyWay.Services.ServiceAgent, aReference: string);
        charger(aCodeEtablissement5: string): ng.IPromise<any>;
        callbackThen: (data: any) => void;
    }
    class CdCTKRCA {
        static iziCarte: string;
    }
    class TdCARTE extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        estIzicarte(aCodeProduitCarte: string): boolean;
    }
    class TdX105ETAC extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        libelleEtatChequier(aCodeEtat: string): String;
    }
    class TdX106FORM extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        libelleFormatChequier(aCodeFamille: string, aCodeFormat: string): string;
    }
    class TdX107RNLT extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        libelleRenouvellementAuto(aCode: string): string;
    }
    class TdX113ORIG extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        libelleOrigine(aCode: string): string;
    }
    class TdX114NRES extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        libelleMotifRoutageNonrespecte(aCodeMotif: string): string;
    }
    class TdX125CROU extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgent);
        libelleModeRoutage(aCodeFamille: string, aCodeFormat: string): string;
        static estEnvoiADomicile(aCode: string): boolean;
    }
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: number;
        modeAffichage: number;
        index: string;
        model: ComposantsCommunsCarte.Modeles.AvenantContratCarte.IData;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        identifiantTitulaire: string;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        indicateurSelectionVisible: boolean;
        indicateurClotureVisible: boolean;
        indicateurCaracteristiqueVisible: boolean;
        indicateurRenouvellementVisible: boolean;
        numeroContratCarte: string;
        numeroCompte: string;
        carteDuContratCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        indicateurChargement: boolean;
        erreurComposant: boolean;
        listeDeCodeProduitCarte: Array<string>;
        contratCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IContratCarte;
        estModifie: boolean;
        nomMarital: string;
        revenir: boolean;
        codeDActionDeLIdentiteDuPorteur: string;
        codeDuProduitCarteDeRemplacement: string;
        codeVisuelAEcheance: string;
        messageErreur: string;
        codePlafondCarte: string;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        serviceDerogatoireCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
        afficherBlocAction: boolean;
        afficherBlocErreur: boolean;
        appelant: number;
    }
    /**
     * Déclaration du contrôleur
     */
    class AvenantProduitServiceCarteControleur {
        protected $scope: IAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        protected contratCarteRechercheService: ComposantsCommunsCarte.Services.ContratCarteRechercheService;
        static $inject: string[];
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        tdCARTE: Commun.Services.TablesDelocalisees.TdCARTE;
        afficherDateSignature: boolean;
        constructor($scope: IAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService, contratCarteRechercheService: ComposantsCommunsCarte.Services.ContratCarteRechercheService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de requêtage du service de recherche de contrat carte
         */
        sendContratCarteRechercheRequest(): void;
        calculerAfficherDateSignature(): void;
        openDateSignature: boolean;
        /**
         * Méthode de callback suite à la modification de l'action à effectuer sur l'avenant carte.
         */
        onChangeActionAvenant(): void;
        /**
         * Méthode de callback suite au succès de la requête de recherche de contrat carte.
         * @param response La réponse du web service contractcarte/recherche
         */
        private onSuccessContratCarteRechercheRequest(response);
        /**
         * Méthode d'enrichissement du podèle permettant l'avenant du produit service carte
         * Ajout d'un objet carte de remplacement pour couvrir le cas d'un changement d'offre afin que le bloc DATA soit completé même sans modifications pour envoi à l'éditique des conditions particulières
         */
        private fillModeleAvenantProduitServiceCarte();
        private getCodeVisuelCarte();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwAvenantProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Récapitulatif avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulatifAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        actionAvenant: ComposantsCommunsCarte.Modeles.AvenantContratCarte.ActionEnum;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        identifiantTitulaire: string;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        typeDeCloture: string;
        dateDeCloture: string;
        motifDeCloture: string;
        isActionNeRienFaire: boolean;
        isActionCarteEcheance: boolean;
        isActionCarteEnCours: boolean;
        identifiantPersonneDuRepresentantLegal: number;
        codePlafondCarte: string;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        codeCaractereForfaitaireOffre: string;
        codeDeTarification: string;
        serviceDerogatoire: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifAvenantProduitServiceCarteControleur {
        protected $scope: IRecapitulatifAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static $inject: string[];
        constructor($scope: IRecapitulatifAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Récapitulatif avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwRecapitulatifAvenantProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Caractéristique avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ICaracteristiqueAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        dataContratCarte: IDataContratCarte;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        numeroDuCompte: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
        indicateurChargement: boolean;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        erreurComposant: boolean;
        edsLivraison: number;
        nomMarital: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class CaracteristiqueAvenantProduitServiceCarteControleur {
        protected $scope: ICaracteristiqueAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static $inject: string[];
        constructor($scope: ICaracteristiqueAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode d'initialisation du model
         */
        private initialisationModel();
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         * Méthode en plusieurs partie puisque la complexité cyclomatique doit être inférieur à 10.
         */
        private onChangeContratCarteSuite(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de tutelle
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTutelle(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de nom sur la carte
         * sélectionnés par l'utilisateur
         */
        private fillModelWithNomCarte(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de même code que
         * sélectionnés par l'utilisateur
         */
        private fillModelWithMemeCodeQue(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments du plafond
         * sélectionnés par l'utilisateur
         */
        private fillModelWithPlafond(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de E-Carte bleue
         * sélectionnés par l'utilisateur
         */
        private fillModelWithECarteBleue(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de transport citevia
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTransportCitevia(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de numero victoria tap
         * sélectionnés par l'utilisateur
         */
        private fillModelWithNumeroVictoriaTap(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de livraison
         * sélectionnés par l'utilisateur
         */
        private fillModelWithLivraison(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de livraison à échéance
         * sélectionnés par l'utilisateur
         */
        private fillModelWithLivraisonEcheance(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de tarification
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTarification(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de carte visuel
         * sélectionnés par l'utilisateur
         */
        private fillModelWithCarteVisuel(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Méthode permettant d'effectuer le traitement spécifique au composant Transport Citevia.
         */
        private doTransportCiteviaTraitement();
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Caractéristique avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwCaracteristiqueAvenantProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Clôture avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IClotureAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: ComposantsCommunsCarte.Modeles.ClotureContratCarte.ICloture;
        codeEtablissement: string;
        dateDeFinDeValidite: string;
        typeCloture: ComposantsCommunsCarte.Controleurs.IDataTypeClotureCarte;
        motifCloture: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ClotureAvenantProduitServiceCarteControleur {
        protected $scope: IClotureAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static $inject: string[];
        constructor($scope: IClotureAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Callback de la modification du type de clôture.
         */
        onChangeTypeCloture(data: ComposantsCommunsCarte.Controleurs.IDataTypeClotureCarte): void;
        /**
         * Callback de la modification du motif de clôture.
         */
        onChangeMotifCloture(data: string): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Clôture avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwClotureAvenantProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Renouvellement avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRenouvellementAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        dateSignatureContrat: Date;
        dataContratCarte: IDataContratCarte;
        codeProduitCarteSelectionne: number;
        codeVisuelSelectionne: string;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        numeroDuCompte: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
        indicateurChargement: boolean;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        erreurComposant: boolean;
        indicateurRenouvellementVisible: boolean;
        estModifie: boolean;
        modeEdition: boolean;
        codeProduitCarte: string;
        revenir: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class RenouvellementAvenantProduitServiceCarteControleur {
        protected $scope: IRenouvellementAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        protected $q: ng.IQService;
        static $inject: string[];
        constructor($scope: IRenouvellementAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService, $q: ng.IQService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode d'initialisation du model
         */
        private initialisationModel();
        openDateSignature: boolean;
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de carte visuel
         * sélectionnés par l'utilisateur
         */
        private fillModelWithCarteVisuel(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Méthode permettant d'effectuer le traitement spécifique au composant Transport Citevia.
         */
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Renouvellement avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwRenouvellementAvenantProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Résumé avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IResumeAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        numeroDuCompte: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
        indicateurChargement: boolean;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        erreurComposant: boolean;
        produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        nomMarital: string;
        codeActionIdentitePorteur: string;
        messageErreur: string;
        codePlafondCarte: string;
        edsLivraison: number;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        codeActivationECarteBleue: string;
        identifiantPersonneDuRepresentantLegal: number;
        numeroDuContratTap: number;
        codeCaractereForfaitaireOffre: string;
        codeDeTarification: string;
        serviceDerogatoire: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
        appelant: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class ResumeAvenantProduitServiceCarteControleur {
        protected $scope: IResumeAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static $inject: string[];
        constructor($scope: IResumeAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        afficherTarificationCarte(): boolean;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Résumé avenant carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwResumeAvenantProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Selection avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Controleurs {
    /**
     * Ensemble de données permettant l'avenant d'un contrat carte.
     */
    interface IDataContratCarte {
        produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        plafond: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        numeroVictoriaTap: string;
        eCarteBleue: boolean;
        tarification: ComposantsCommunsCarte.Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        nomCarte: ComposantsCommunsCarte.Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        memeCodeQue: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        tutelle: any;
        transportCitevia: boolean;
        livraison: ComposantsCommunsCarte.Modeles.Structure.Recherche.IDonneesCommunesEDS;
        livraisonEcheance: ComposantsCommunsCarte.Modeles.Structure.Recherche.IDonneesCommunesEDS;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface ISelectionAvenantProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        dataContratCarte: IDataContratCarte;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        numeroDuCompte: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
        indicateurChargement: boolean;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        erreurComposant: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class SelectionAvenantProduitServiceCarteControleur {
        protected $scope: ISelectionAvenantProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        protected $q: ng.IQService;
        static $inject: string[];
        constructor($scope: ISelectionAvenantProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService, $q: ng.IQService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode d'initialisation du model
         */
        private initialisationModel();
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de carte visuel
         * sélectionnés par l'utilisateur
         */
        private fillModelWithCarteVisuel(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Méthode permettant d'effectuer le traitement spécifique au composant Transport Citevia.
         */
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Selection avenant produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantCarte.Directives {
    function mwSelectionAvenantProduitServiceCarte(): ng.IDirective;
}
