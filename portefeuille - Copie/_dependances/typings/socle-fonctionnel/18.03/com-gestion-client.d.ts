
declare module myway.comGestionClient {
    var app: ng.IModule;
}

declare module myway.comGestionClient {
    /**
     * Exemple d'utilisation :
     *      <button class="btn btn-default" ng-click="ctrl.showDiv = true">Afficher la div</button>
     *      <div ng-if="ctrl.showDiv"
     *           click-out="ctrl.showDiv = false">
     *          Mon contenu de div
     *      </div>
     * @param {ng.IWindowService} $window
     * @param {ng.ITimeoutService} $timeout
     * @returns
     */
    function clickOutMenuGestionClient($window: ng.IWindowService, $timeout: ng.ITimeoutService): ng.IDirective;
}

declare module myway.comGestionClient {
    const enum ActionsCreation {
        CREATION_Personne = 1,
        CREATION_Tiers = 2,
        CREATION_Prospect = 3,
    }
}

declare module myway.comGestionClient {
    const capaciteJuridiquePP: string[];
}

declare module myway.comGestionClient {
    const enum CodeTypeRecherche {
        RICE = 1,
        CARTE_BLEU = 2,
        IDENTIFICATION = 3,
        IDENTIFIANT_CONTRAT = 4,
        IDENTIFIANT_BAD = 5,
        MEDIA = 6,
        SIREN = 7,
        RAISON_SOCIALE = 8,
    }
}

declare module myway.comGestionClient {
    const enum CodesLisa {
        LISA_13 = 13,
        LISA_14 = 14,
        LISA_MOINS_1 = -1,
        LISA_1 = 1,
        LISA_2 = 2,
        LISA_5 = 5,
        LISA_6 = 6,
        LISA_30 = 30,
        LISA_16 = 16,
        LISA_15 = 15,
    }
}

declare module myway.comGestionClient {
    class CustomEvents {
        static SELECT_CLIENT: string;
        static RECH_PM: string;
        static CACHER_DROPDOWN: string;
        static AFFICHER_DROPDOWN: string;
    }
}

declare module myway.comGestionClient {
    const enum EtatRechercheEnum {
        NO_SEARCH = 0,
        SEARCH_REQUEST = 1,
        NO_RESULT = 2,
        SUCCESSFUL = 3,
        SERVER_ERROR = 4,
    }
}

declare module myway.comGestionClient {
    const enum TypeMediaTiersV3 {
        Tel_Fixe = 1,
        Tel_Mobile = 3,
        Email = 11,
    }
    const enum CodeTypeMedia {
        Telephone_fixe = 1,
        Telephone_mobile = 2,
        Email = 3,
    }
    class CodeTypeUsageMedia {
        static PERSONNEL: string;
        static PROFESSIONNEL: string;
        static SOL: string;
    }
}

declare module myway.comGestionClient {
    const enum TypeRechercheEnum {
        IDENTITE = 0,
        COMPTE = 1,
        NUMERO_PERSONNE = 2,
        NUMERO_CARTE = 3,
        SIREN = 4,
        RAISON_SOCIALE = 5,
        IDENTIFIANT_BAD = 6,
        EMAIL = 7,
        TELEPHONE = 8,
        NUMERO_CREDIT = 9,
    }
}

declare module myway.comGestionClient {
    class ComplementPersonnePhysique {
        autresPrenom: string;
        categorieSocioprofessionnelle: string;
        codeAccesMinitel: string;
        codeAppartenanceReseau: string;
        codeBlocageVAO: string;
        codeCapaciteJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        codeCivilite: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeEtablissement: string;
        codeExistenceListeRouge: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleNAFINSEE: string;
        codeGuichetRisque: string;
        codeISOPays: string;
        codeInseeLocalite: string;
        codeInseePays: string;
        codeInseePaysDoubleNationalite: string;
        codeInseePaysNationnalite: string;
        codePaysNaissance: string;
        codePieceJustif: string;
        codePostalFranceEtEtranger: string;
        codePostalPTT: string;
        codeQuartier: string;
        codeRegimeMatrimonial: string;
        codeResident: string;
        codeRetourDistribution: string;
        codeSecteurEmploi: string;
        codeSexe: string;
        codeSituationFamiliale: string;
        codeTypeAdresse: string;
        codeTypeContratTravail: string;
        codeTypeNIF: string;
        commentaireTelephone: string;
        dateAttributionFATCA: string;
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
        designationCourte: string;
        domiciliationRevenu: string;
        droitAuCompte: string;
        edsDomiciliation: number;
        edsInterneDomiciliation: number;
        eligibiliteFGDR: string;
        email: string;
        horsPresenceClient: string;
        identifiantAdresse: number;
        identifiantPersonne: number;
        identifiantRelationtEconomique: number;
        indicDecesPresume: string;
        indicDonationEntreEpoux: string;
        indicateurActiviteProfessionnel: string;
        indicateurAutoEntrepreneur: string;
        indicateurDetentionTelephone: string;
        indicateurEnvoiCourrier: string;
        indicateurPPE: string;
        indicateurSocietaire: string;
        indiceAmericaniteFATCA: string;
        isPersonneProtegee: boolean;
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
        libelleStatutFATCA: string;
        libelleTypeContratTravail: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nif: string;
        nomEmployeur: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        nombreEnfantACharge: number;
        numeroFax: string;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        prenom: string;
        refPieceJustificative: string;
        sirenAutoEntrepreneur: string;
        sirenEmployeur: string;
        troisDerniersCaracteresNAF: string;
        typeClauseMatrimoniale: string;
        gestionPrivee: myway.comGestionClient.GestionPriveeComplementPersonnePhysique;
        statutPro: myway.comGestionClient.StatutProComplementPersonnePhysique;
    }
    class GestionPriveeComplementPersonnePhysique {
        codeActnMajSuivSpclGp: string;
        codeEtablissement: string;
        codeEtatSuiviGP: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS: string;
        identifiantEDS2: string;
        identifiantExterneEDS: string;
        identifiantExterneEDS2: string;
        identifiantPersonne: string;
        libelleCalculeEDS: string;
        libelleCalculeEDS2: string;
        libelleEDS: string;
        libelleFonctionPF: string;
        typeEDS: string;
    }
    class StatutProComplementPersonnePhysique {
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateFinValiditeStatutPro: string;
        dateModificationStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        identifiantPersonne: string;
        libelleCalculeEDS: string;
        libelleEDS: string;
        libelleFonctionPF: string;
    }
    class ComplementPersonneMorale {
        codeSituationJuridique: string;
        numeroSiren: string;
        codeIndicateurEntrepriseEtrangere: string;
        dateCreationJuridique: string;
        raisonSociale: string;
        nomCommercial: string;
        codeTypeCommerceOrganise: string;
        codeAgentEconomique: string;
        identifiantTiers: number;
        codeEtablissement: string;
        codeDeviseISO4217a3: string;
        codePieceJustificative: string;
        dureeViePersonneMorale: number;
        codeTypeTiers: string;
        codeRegimeFiscal: string;
        codeCotation: string;
        codeAppartenanceReseau: string;
        codeCategoJuridi2DerCaracteres: string;
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: string;
        numeroImmatriculation: string;
        sigle: string;
        listeMessageFonctionnel: string;
        listeMotCle: Array<string>;
        numeroChrono: number;
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        codeTypePersonne: string;
        prospect: string;
        indicateurDroitAuCompte: string;
        professionnelImmobilier: string;
        situationFinanciere: myway.comGestionClient.SituationFinanciereComplementPersonneMorale;
        adresse: myway.comGestionClient.AdresseComplementPersonneMorale;
        etablissement: myway.comGestionClient.EtablissementComplementPersonneMorale;
    }
    class SituationFinanciereComplementPersonneMorale {
        montantCapitalSocial: number;
        montantChiffreAffaires: number;
        effectif: number;
        dateArreteComptable: number;
        anneeChiffreAffaires: number;
    }
    class AdresseComplementPersonneMorale {
        identifiant: number;
        codeType: string;
        indicateurEnvoiCourrier: string;
        codePays: string;
        codeTypeLieu: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
    }
    class EtablissementComplementPersonneMorale {
        designationCourteLieuActivite: string;
        designationLongueLieuActivite: string;
        dateDebutExploitationLieuActivite: string;
        codeResident: string;
        numeroComplementSIRET: string;
    }
}

declare module myway.media {
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IListeMedia {
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        referenceAccesMedia: string;
        indicateurOptin: boolean;
        commentaire: string;
        indicatifTelephone: string;
        indicateurSecu: boolean;
        indicateurProOptout: boolean;
        indicateurSmsFax: boolean;
    }
}

declare module myway.comGestionClient {
    class ParametrageBouton {
        creationTiers: boolean;
        creationProspect: boolean;
        creationPersonne: boolean;
        constructor();
        constructor(creationPersonne: boolean, creationTiers: boolean, creationProspect: boolean);
    }
}

declare module myway.comGestionClient {
    interface IParticulierInformation {
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libellePaysNaissance: string;
        libelleCapaciteJuridique: string;
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
        dateNaissance: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: string;
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
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: string;
        codeTypeContratTravail: string;
        dateFinContratTravail: string;
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
        dateAttributionFATCA: string;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: IStatutPro;
        gestionPrivee: IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        codeEtablissement: string;
        identifiantPersonne: number;
        nomEmployeur: string;
        codeResidenceFiscale: string;
        codeInseePaysResidenceFiscale: string;
        nif: string;
        email: string;
    }
    interface IGestionPrivee {
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
        identifiantPersonne: number;
        codeEtablissement: string;
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
    interface IAdresse {
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        codeTypeAdresse: string;
    }
    interface IMedia {
        codeTypeMedia: string;
        portableEtranger: string;
        codeTypeMoyenContact: string;
        codeTypeUsageMedia: string;
        preferenceTelephone: string;
        clientAccepte: string;
        indicateurOppositionTelephone: string;
        referenceAccessMedia: string;
        indicateurPreferenceMedia: string;
    }
}

declare module myway.comGestionClient {
    class PersonneMorale {
        siren: string;
        raisonSocial: string;
        villeSiege: string;
        bureauRattachement: Object;
        constructor();
        constructor(personneMorale: PersonneMorale);
    }
}

declare module myway.comGestionClient {
    class PersonnePhysique {
        nom: string;
        prenom: string;
        dateNaissance: Date;
        sexe: string;
        bureauRattachement: Object;
        constructor();
        constructor(personnePhysique: PersonnePhysique);
    }
}

declare module myway.comGestionClient {
    class Qualite {
        codeQualite: string;
        libelle: string;
        constructor(code: string, libelle: string);
    }
    class RecherchePersonneRetour {
        criteres: MyWay.Model.Client;
        codeNature: string;
        codeQualite: myway.comGestionClient.Qualite;
        personneSelectionnee: MyWay.Model.Client;
        complementPersonnePhysique: myway.comGestionClient.ComplementPersonnePhysique;
        complementPersonneMorale: myway.comGestionClient.ComplementPersonneMorale;
        actionCreation: number;
    }
    class RecherchePersonneResult {
        criteres: MyWay.Model.Client;
        type: TypeRechercheEnum;
        etat: EtatRechercheEnum;
        errorMessage: string;
        personnes: MyWay.Model.Client[];
        personnesMorale: MyWay.Model.Client[];
        personnesPhysique: MyWay.Model.Client[];
        desableBtnCreePersonne: boolean;
        clientListe: Array<MyWay.Model.Client>;
        critereIsEmpty: boolean;
        codeNature: string;
        codeQualite: myway.comGestionClient.Qualite;
        constructor();
        isPersonneSelectionnee(): boolean;
        isNoSelectedCriteria(): boolean;
        isTypeRechercheIdentite(): boolean;
        isTypeRechercheRaisonSociale(): boolean;
        isTypeRechercheSIREN(): boolean;
        isNoSearch(): boolean;
        isSearchRequest(): boolean;
        isNoResult(): boolean;
        isSearchError(): boolean;
        isSearchSuccessful(): boolean;
    }
}

declare module MyWay.UI {
    class MwBoutonListeActionsControllerGestionClient {
        private $scope;
        titre: string;
        data: IBoutonActionRiche[];
        id: string;
        sens: string;
        modele: string;
        position: string;
        ouvert: boolean;
        disabled: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope);
        afficherDropdown(): void;
        cacherDropdown(): void;
        getSens(): string;
        toggle(open: boolean): void;
    }
}

declare module MyWay.UI {
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class RechercherPersonneController {
        private $scope;
        private $attrs;
        private serviceAgentExtended;
        private mwgcRechercherPersonneService;
        private agentConnecteService;
        private $timeout;
        private $q;
        private static DEFAULT_ERROR_MESSAGE;
        private static DEFAULT_NO_RESULT_MESSAGE;
        private static DEFAULT_PLUS_CRITERE;
        private static EMIT_QUALITE_NATURE_DIRECTIVE;
        static NO_RESULT: string;
        private clientListe;
        private personneMoraleSelectionnee;
        private result;
        private rechercheAvancee;
        private rechercheAvancee2;
        private type;
        private sirenValid;
        private modeAppel;
        private btnNatureQualiteDetail;
        private recherchePersonnePhysique;
        private recherchePersonneMorale;
        private raisonSocialeRequired;
        private nomRequired;
        private loading;
        private creationPersonneBtnVisibilityBool;
        private restitutionListePP;
        private restitutionListePM;
        private ongletActiverPM;
        private ongletActiverPP;
        private listeRecherches;
        private afficheHistorique;
        private limitHistorique;
        private static LIMITE_MAX_HISTORIQUE_PREFERENCES;
        private static LIMITE_MAX_HISTORIQUE;
        private esSirenReferencer;
        private isNotSirenMySysAndNotSiren;
        private rechercheRaisonSociale;
        private estUnClientPhysique;
        private afficherBoutonModifierRecherche;
        private isAgentHenin;
        private isNumericRaisonSociale;
        private cacherBtnQualiterNature;
        private afficherNumPersonne;
        private isLaHeninNomFamille;
        private isLaHeninPrenom;
        private isLaHeninDateNaissance;
        private modelePrincipaleBoutonRechercher;
        private afficherMiniRechercheNumPersonne;
        private lancerRecherche;
        private filtreRecherche;
        private correspondancesLibelleHistorique;
        static $inject: string[];
        constructor($scope: ng.IScope, $attrs: ng.IAttributes, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwgcRechercherPersonneService: RechercherPersonneService, agentConnecteService: myway.comInterdomaine.AgentConnecteService, $timeout: ng.ITimeoutService, $q: angular.IQService);
        /**
         * @ngdoc function
         * @name initConstructor
         * @description
         * méthode factorisée pour le constructeur : initialisation des données
         * @param {void}
         * @returns {void}
         */
        private initConstructor();
        /**
         * @ngdoc function
         * @name isNumericRSociale
         * @description
         * modifier isNumericRaisonSociale en fonction du param en entrée
         * @param {string} : param
         * @returns {void}
         */
        isNumericRSociale(param: string): void;
        /**
         * @ngdoc function
         * @name construitListeHistorique
         * @description
         * Récupère la liste de recherche pour l'historiques dans les préférences Agent
         * et les ajoute à this.listeRecherches
         * @param {void}
         * @returns {void}
         */
        construitListeHistorique(): void;
        /**
         * @ngdoc function
         * @name rechercherSiretAsync
         * @description
         * recherche par siren async
         * @param {number} : siren
         * @returns {any}
         */
        rechercherSiretAsync(siren: number): ng.IPromise<any>;
        /**
         * @ngdoc function
         * @name toggleBtnNatureQualite
         * @description
         * procedure for bouton-recherche-personne directive toggle
         * @param {void}
         * @returns {void}
         */
        toggleBtnNatureQualite(): void;
        /**
         * @ngdoc function
         * @name selectionnerQualite
         * @description
         * procedure for bouton-recherche-personne directive => click event
         * @param {RecherchePersonneResult} : result
         * @param {string} : codeNature
         * @param {myway.comGestionClient.Qualite} : codeQualite
         * @returns {void}
         */
        selectionnerQualite(result: RecherchePersonneResult, codeNature: string, codeQualite: myway.comGestionClient.Qualite): void;
        /**
         * @ngdoc function
         * @name rechercher
         * @description
         * clic sur le bouton rechercher
         * @param {void}
         * @returns {void}
         */
        rechercher(): void;
        /**
         * @ngdoc function
         * @name keydown
         * @description
         * Event KeyDown
         * @param {JQueryKeyEventObject} : event
         * @returns {void}
         */
        keydown(event: JQueryKeyEventObject): void;
        /**
         * @ngdoc function
         * @name processSearchResults
         * @description
         * Process tri des résultat
         * @param {MyWay.Model.Client[]} : data
         * @param {boolean} : searchMedia
         * @returns {void}
         */
        processSearchResults(data: MyWay.Model.Client[], searchMedia: boolean): void;
        /**
         * @ngdoc function
         * @name processMediaSearchTrieResults
         * @description
         * Process tri des résultat lors d'une recherche par média
         * @param {MyWay.Model.Client[]} : data
         * @param {ng.IScope} : scope
         * @returns {void}
         */
        processMediaSearchTrieResults(data: MyWay.Model.Client[], scope: ng.IScope): void;
        isHistoriqueAffichable(item: Object): boolean;
        /**
         * @ngdoc function
         * @name processError
         * @description
         * Process de traitement des erreurs
         * @param {MyWay.Services.Erreur} :erreur
         * @param {ng.IScope} : scope
         * @returns {void}
         */
        processError(error: MyWay.Services.Erreur, scope: ng.IScope): void;
        /**
         * @ngdoc function
         * @name processControlListHistorique
         * @description
         * Process Historisation de la Recherche : Controle longueur liste (max 20);
         * @param {void}
         * @returns {void}
         */
        processControlListHistorique(): void;
        /**
         * @ngdoc function
         * @name processHistorisationNumPersonne
         * @description
         * Process Historisation de la Recherche : traitement numeroPersonne
         * @param {void}
         * @returns {void}
         */
        processHistorisationNumPersonne(): void;
        /**
         * @ngdoc function
         * @name processHistorisationRecherche
         * @description
         * Process Historisation de la Recherche : ajout à la listeRecherches
         * @param {void}
         * @returns {void}
         */
        processHistorisationRecherche(): void;
        /**
         * @ngdoc function
         * @name deleteDoublonHistorique
         * @description
         * Supprime les doubles de l'historique de recherche
         * @param {Object[]} : historique
         * @returns {void}
         */
        deleteDoublonHistorique(rechercheEnCours: Object[]): void;
        /**
         * @ngdoc function
         * @name addToPreferenceUtilisateur
         * @description
         * Ajout de l'historique dans les préférences utilisateurs
         * @param {void}
         * @returns {void}
         */
        addToPreferenceUtilisateur(): void;
        /**
         * @ngdoc function
         * @name processHistorisationRechercheMedia
         * @description
         * Process Historisation de la Recherche Média : ajout à la listeRecherches
         * @param {void}
         * @returns {void}
         */
        processHistorisationRechercheMedia(): void;
        /**
         * @ngdoc function
         * @name processHistorisationRecherchesMultiResult
         * @description
         * Process Historisation de la Recherche : traitement commun entre recherche média et autre
         * @param {void}
         * @returns {Object[]}
         */
        processHistorisationRecherchesMultiResult(): Object[];
        /**
         * @ngdoc function
         * @name selectionneRecherche
         * @description
         * Après clic sur un élément de l'historique : lancement de la recherche après remplissage des champs
         * @param {Object[]} : recherche
         * @returns {void}
         */
        selectionneRecherche(recherche: Object[]): void;
        /**
         * @ngdoc function
         * @name setClientListe & getClientListe
         * @description
         * getter et setter ClientListe
         */
        private setClientListe(paramListe, scope?);
        private getClientListe();
        /**
         * @ngdoc function
         * @name setPersonnesMoraleList & getPersonnesMoraleList
         * @description
         * getter et setter PersonnesMoraleList
         */
        private setPersonnesMoraleList(paramList);
        private getPersonnesMoraleList();
        /**
         * @ngdoc function
         * @name setPersonnesPhysiqueList & getPersonnesPhysiqueList
         * @description
         * getter et setter PersonnesPhysiqueList
         */
        private setPersonnesPhysiqueList(paramList);
        private getPersonnesPhysiqueList();
        /**
         * @ngdoc function
         * @name setIsNumericRaisonSociale & getIsNumericRaisonSociale
         * @description
         * getter et setter IsNumericRaisonSociale
         */
        private setIsNumericRaisonSociale(param);
        private getIsNumericRaisonSociale();
        /**
         * @ngdoc function
         * @name getIsAgentHenin & setIsAgentHenin
         * @description
         * getter et setter agentLaHenin
         */
        private getIsAgentHenin();
        private setIsAgentHenin(param);
        /**
         * @ngdoc function
         * @name init
         * @description
         * Bouton Afficher +/- dans historique recherche
         * @param {void}
         * @returns {void}
         */
        setAfficheHistorique(): void;
        /**
         * @ngdoc function
         * @name init
         * @description
         * initialise les infos
         * @param {void}
         * @returns {void}
         */
        private init();
        /**
         * @ngdoc function
         * @name reinit
         * @description
         * action du bouton réinitialiser
         * @param {void}
         * @returns {void}
         */
        reinit(): void;
        /**
         * @ngdoc function
         * @name initTypeRecherche
         * @description
         * initialise un type de recherche
         * @param {VOID}
         * @returns {void}
         */
        private initTypeRecherche();
        /**
         * @ngdoc function
         * @name selectTypeRecherche
         * @description
         * sélectionne un type de recherche et en fonction vide les champs
         * @param {TypeRechercheEnum} : typeRecherche
         * @returns {void}
         */
        private selectTypeRecherche(typeRecherche);
        /**
         * @ngdoc function
         * @name initValueListe
         * @description
         * initialise la liste
         * @param {void}
         * @returns {void}
         */
        private initValueListe();
        /**
         * @ngdoc functions
         * @name clear
         * @description
         * vide le champs concerné (en fonction de la méthode appelée)
         * @param {void}
         * @returns {void}
         */
        private clearNumeroCredit();
        private clearTelephone();
        private clearEmail();
        private clearIdentifiantBad();
        private clearAgence();
        private clearRaisonSociale();
        private clearIdentite();
        private clearCompte();
        private clearNumeroCarte();
        private clearNumeroPersonne();
        private clearSiren();
        /**
         * @ngdoc function
         * @name toggleModeAvance
         * @description
         * mode afficher + de critères
         * @param {void}
         * @returns {void}
         */
        toggleModeAvance(): void;
        /**
         * @ngdoc functions
         * @name isTypeRecherche
         * @description
         * retourne un booléen en fonction du type de recherche
         * @param {void}
         * @returns {boolean}
         */
        isTypeRechercheIdentite(): boolean;
        isTypeRechercheRaisonSociale(): boolean;
        isTypeRechercheSIREN(): boolean;
        isTypeRechercheCompte(): boolean;
        isTypeRechercheCarteBleu(): boolean;
        isTypeRechercheEmail(): boolean;
        isTypeRechercheTelephone(): boolean;
        isTypeRechercheCredit(): boolean;
        isTypeRechercheNumeroPersonne(): boolean;
        isTypeRechercheIdentifiantClient(): boolean;
        /**
         * @ngdoc function
         * @name modifierRecherche
         * @description
         * Permet de modifier la recherche en affichant toutes les lignes
         * @param {void}
         * @returns {void}
         */
        modifierRecherche(): void;
    }
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class RechercherPersonneService {
        private serviceAgentExtended;
        private modalService;
        private $q;
        private static TIERS_VERSION;
        private static TIERS_VERSION_2;
        private static TIERS_VERSION_3;
        private paramModeAppel;
        private paramCodeNatureCredit;
        private paramAfficherNumPersonne;
        private paramBoutonCreationPP;
        private paramBoutonCreationPM;
        private creationPersonneBtnVisibilityBool;
        private appelRechercheModeNormal;
        private appelRechercheModeModale;
        private criteres;
        private paramFiltreRecherche;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, $q: angular.IQService);
        /**
         * @ngdoc function
         * @name ajoutDonneePersonneProtegee
         * @methodOf myway.comGestionClient.RechercherPersonneService.ajoutDonneePersonneProtegee()
         * @description fonction permettant d'ajouter à l'objet passé en parametre la résolution de promesse isPersonneProtegee
         * @param data : le tableau de client
         * @returns data : le tableau de client
         */
        ajoutDonneePersonneProtegeePersonnes(data: MyWay.Model.Client[]): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name ajoutDonneePersonneProtegee
         * @methodOf myway.comGestionClient.RechercherPersonneService.ajoutDonneePersonneProtegee()
         * @description fonction permettant d'ajouter à l'objet passé en parametre la résolution de promesse isPersonneProtegee
         * @param complementParticulierInformation : le complement personne physique
         * @returns datacomplementParticulierInformation : le complement personne physique
         */
        ajoutDonneePersonneProtegee(complementParticulierInformation: myway.comGestionClient.ComplementPersonnePhysique): ng.IPromise<myway.comGestionClient.ComplementPersonnePhysique>;
        /**
         * @ngdoc function
         * @name isPP
         * @methodOf myway.comGestionClient.RechercherPersonneService.isPersonneProtegee()
         * @description fonction permettant de savoir si une personne est protégée ou non
         * @param identifiantPersonne : l'identifiant personne dont on veut savoir si elle est une personne protégée ou pas.
         * @returns boolean : est-elle une personne protégée ou pas ?
         */
        private isPersonneProtegee(identifiantPersonne);
        /**
         * @ngdoc function
         * @name recupererCapaciteJuridique
         * @methodOf myway.comGestionClient.RechercherPersonneService.recupererCapaciteJuridique()
         * @description
         * fonction permettant de récupérer les informations courantes d'un particulier
         * @param identifiantPersonne : l'identifiant personne dont on veut récupérer la liste de ses capacités juridiques.
         * @returns {ng.IPromise<myway.comGestionClient.IParticulierInformation>} une promesse contenant la réponse de la ressource.
         */
        private recupererCapaciteJuridique(identifiantPersonne);
        /**
         * @ngdoc function
         * @name rechercherPersonneModale
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercherPersonneModale()
         * @description
         * fonction qui permet d'appler le moteur de recherche en mode modale.
         * @param {string, MyWay.Model.Client} : un string contenant le mode d'appel souhaité + une instance de l'objectMyWay.Model.Client().
         * @returns {ng.IPromise<MyWay.Model.Client>} promesse contenant la personne selectionnée.
         */
        private rechercherPersonneModale(modeAppel, criteres?, codeNatureCredit?, afficherNumPersonne?, paramBoutonPP?, paramBoutonPM?);
        /**
         * @ngdoc function
         * @name rechercherPersonne
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercherPersonne()
         * @description
         * fonction qui permet d'appler le moteur de recherche multi-marché en mode modale.
         * @param {MyWay.Model.Client, boolean} : on passe une instance de l'objet result.criteres
         * et un boollean pour indiquer l'affichage ou non du btn crée personne pour le mode modale.
         * @returns {ng.IPromise<MyWay.Model.Client>} promesse contenant la personne selectionnée.
         */
        rechercherPersonne(criteres?: MyWay.Model.Client, creationPersonneBtnVisibilityBool?: boolean, codeNatureCredit?: string, afficherNumPersonne?: boolean, paramBoutonPP?: myway.comGestionClient.ParametrageBouton, paramBoutonPM?: myway.comGestionClient.ParametrageBouton): ng.IPromise<myway.comGestionClient.RecherchePersonneRetour>;
        /**
         * @ngdoc function
         * @name rechercherPersonnePhysique
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercherPersonnePhysique()
         * @description
         * fonction qui permet d'appler le moteur de recherche pour une personne physique en mode modale.
         * @param {MyWay.Model.Client, boolean} : on passe une instance de l'objet result.criteres
         * et un boollean pour indiquer l'affichage ou non du btn crée personne pour le mode modale.
         * @returns {ng.IPromise<MyWay.Model.Client>} promesse contenant la personne selectionnée.
         */
        rechercherPersonnePhysique(criteres?: MyWay.Model.Client, creationPersonneBtnVisibilityBool?: boolean, afficherNumPersonne?: boolean, paramBouton?: myway.comGestionClient.ParametrageBouton): ng.IPromise<myway.comGestionClient.RecherchePersonneRetour>;
        /**
         * @ngdoc function
         * @name rechercherPersonneMorale
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercherPersonneMorale()
         * @description
         * fonction qui permet d'appler le moteur de recherche pour une personne morale en mode modale.
         * @param {MyWay.Model.Client, boolean} : on passe une instance de l'objet result.criteres
         * et un boollean pour indiquer l'affichage ou non du btn crée personne pour le mode modale.
         * @returns {ng.IPromise<MyWay.Model.Client>} promesse contenant la personne selectionnée.
         */
        rechercherPersonneMorale(criteres?: MyWay.Model.Client, creationPersonneBtnVisibilityBool?: boolean, codeNatureCredit?: string, afficherNumPersonne?: boolean, paramBouton?: myway.comGestionClient.ParametrageBouton): ng.IPromise<myway.comGestionClient.RecherchePersonneRetour>;
        /**
         * @ngdoc function
         * @name transformeListe
         * @methodOf myway.comGestionClient.RechercherPersonneService.transformeListe()
         * @description
         * fonction qui transforme un objet complexe de type any vers une collection d'objet de type MyWay.Model.Client.
         * @param {Array<Object>} : object complexe retournée par les ressources.
         * @returns {Array<MyWay.Model.Client>} une collection de type Array<MyWay.Model.Client>.
         */
        transformeListe(myObject: MyWay.Model.Client[]): MyWay.Model.Client[];
        /**
         * @ngdoc function
         * @name rechercheGroupeEmail
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeEmail()
         * @description
         * fonction de recherche pour le groupe : Email.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeEmail(personne: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeTelephone
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeTelephone()
         * @description
         * fonction de recherche pour le groupe : numero de telephone.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeTelephone(personne: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeNom
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeNom()
         * @description
         * fonction de recherche pour le groupe : identification (nom prenom date naissance num agence et sexe).
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeNom(personne: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeRice
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeRice()
         * @description
         * fonction de recherche pour le groupe : numero de Rice.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeRice(rice: MyWay.Model.Rice): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeSiren
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeSiren()
         * @description
         * fonction de recherche pour le groupe : numero de Siren.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeSiren(client: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeCarteBleu
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeCarteBleu()
         * @description
         * fonction de recherche pour le groupe : numero de carte bleu.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeCarteBleu(client: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeNumeroPersonne
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeNumeroPersonne()
         * @description
         * fonction de recherche pour le groupe : numero de personne.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<Array<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeNumeroPersonne(client: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client>;
        /**
         * @ngdoc function
         * @name rechercheGroupNumeroCredit
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupNumeroCredit()
         * @description
         * fonction de recherche pour le groupe : numero de credit.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<Array<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeNumeroCredit(client: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeIdentifiantBad
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeIdentifiantBad()
         * @description
         * fonction de recherche pour le groupe : IDENTIFIANT BAD (identifiant client).
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<Array<MyWay.Model.Identification>>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeIdentifiantBad(client: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name rechercheGroupeRaisonSociale
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercheGroupeRaisonSociale()
         * @description
         * fonction de recherche pour le groupe : raison sociale.
         * @param {MyWay.Model.Client} : les criteres saisie par l'utilisateur .
         * @returns {ng.IPromise<MyWay.Model.Client[]>} une promesse contenant la réponse de la ressource + les criteres saisie.
         */
        rechercheGroupeRaisonSociale(client: MyWay.Model.Client): ng.IPromise<MyWay.Model.Client[]>;
        /**
         * @ngdoc function
         * @name getMediaFromListMediaByCodeTypeMedia
         * @methodOf myway.comGestionClient.RechercherPersonneService.getMediaFromListMediaByCodeTypeMedia()
         * @description
         * à partir de la liste d'objets passé en param, on retourne l'objet de type passé en param
         * @param {listeMedia} une liste d'objets (media)
         * @return {typeMedia}, le media répondant au type passé en param
         */
        getMediaFromListMediaByCodeTypeMediaTiersV3(listeMedia: Object[], typeMedia: myway.comGestionClient.TypeMediaTiersV3): string;
        /**
         * @ngdoc function
         * @name getMediasFromListMediaByCodeTypeMedia
         * @methodOf myway.comGestionClient.RechercherPersonneService.getMediasFromListMediaByCodeTypeMedia()
         * @description
         * à partir de la liste d'objets passé en param, on retourne une d'objet par rapport à des critères
         * @param {listeMedia} une liste d'objets (media)
         * @param {codeTypeMedia} un code type de média
         * @param {chercherAvecIndicateurPreferenceMedia} un boolean pour savoir si on cherche avec préférence media à true
         * @return {typeMedia}, le media répondant au type passé en param
         */
        getMediasFromListMediaByCodeTypeMedia(listeMedia: myway.media.IListeMedia[], codeTypeMedia: myway.comGestionClient.CodeTypeMedia, chercherAvecIndicateurPreferenceMedia?: boolean): myway.media.IListeMedia[];
        /**
         * @ngdoc method
         * @name setAppelRechercheModeNormal
         * @methodOf myway.comGestionClient.RechercherPersonneService.setAppelRechercheModeNormal()
         * @description
         * setteur de this.appelRechercheModeNormal.
         * @param {boolean}.
         * @returns {boolean}.
         */
        setAppelRechercheModeNormal(param: boolean): void;
        /**
         * @ngdoc function
         * @name getAppelRechercheModeNormal
         * @methodOf myway.comGestionClient.RechercherPersonneService.getAppelRechercheModeNormal()
         * @description
         * guetteur de this.appelRechercheModeNormal.
         * @param {void}.
         * @returns {boolean}.
         */
        getAppelRechercheModeNormal(): boolean;
        /**
         * @ngdoc method
         * @name setAppelRechercheModeModale
         * @methodOf myway.comGestionClient.RechercherPersonneService.setAppelRechercheModeModale()
         * @description
         * setteur de this.appelRechercheModeModale.
         * @param {boolean}.
         * @returns {void}.
         */
        setAppelRechercheModeModale(param: boolean): void;
        /**
         * @ngdoc function
         * @name getAppelRechercheModeModale
         * @methodOf myway.comGestionClient.RechercherPersonneService.getAppelRechercheModeModale()
         * @description
         * guetteur de this.appelRechercheModeModale.
         * @param {void}.
         * @returns {boolean}: this.appelRechercheModeModale.
         */
        getAppelRechercheModeModale(): boolean;
        /**
         * @ngdoc procedure
         * @name setModeAppel
         * @methodOf myway.comGestionClient.RechercherPersonneService.setModeAppel()
         * @description
         * setteur de this.paramModeAppel.
         * @param {string}.
         * @returns {void}.
         */
        setModeAppel(paramModeAppel: string): void;
        /**
         * @ngdoc function
         * @name getModeAppel
         * @methodOf myway.comGestionClient.RechercherPersonneService.getModeAppel()
         * @description
         * guetteur de this.paramModeAppel.
         * @param {void}.
         * @returns {string}.
         */
        getModeAppel(): string;
        /**
         * @ngdoc procedure
         * @name setFiltreRecherche
         * @methodOf myway.comGestionClient.RechercherPersonneService.setFiltreRecherche()
         * @description
         * setteur de this.paramFiltreRecherche.
         * @param {boolean}.
         * @returns {void}.
         */
        setFiltreRecherche(paramFiltreRecherche: boolean): void;
        /**
         * @ngdoc function
         * @name getFiltreRecherche
         * @methodOf myway.comGestionClient.RechercherPersonneService.getFiltreRecherche()
         * @description
         * guetteur de this.paramFiltreRecherche.
         * @param {void}.
         * @returns {boolean}.
         */
        getFiltreRecherche(): boolean;
        /**
         * @ngdoc procedure
         * @name setCodeNatureCredit
         * @methodOf myway.comGestionClient.RechercherPersonneService.setCodeNatureCredit()
         * @description
         * setteur de this.paramCodeNatureCredit.
         * @param {string}.
         * @returns {void}.
         */
        setCodeNatureCredit(param: string): void;
        /**
         * @ngdoc function
         * @name getCodeNatureCredit
         * @methodOf myway.comGestionClient.RechercherPersonneService.getCodeNatureCredit()
         * @description
         * guetteur de this.paramCodeNatureCredit.
         * @param {void}.
         * @returns {string}.
         */
        getCodeNatureCredit(): string;
        /**
         * @ngdoc procedure
         * @name setAfficherNumPersonne
         * @methodOf myway.comGestionClient.RechercherPersonneService.setAfficherNumPersonne()
         * @description
         * setteur de this.paramAfficherNumPersonne.
         * @param {string}.
         * @returns {void}.
         */
        setAfficherNumPersonne(param: boolean): void;
        /**
         * @ngdoc procedure
         * @name setParamBoutonCreationPP
         * @methodOf myway.comGestionClient.RechercherPersonneService.setParamBoutonCreationPP()
         * @description
         * setteur de this.paramBoutonCreationPP.
         * @param {myway.comGestionClient.ParametrageBouton}.
         * @returns {void}.
         */
        setParamBoutonCreationPP(param: myway.comGestionClient.ParametrageBouton): void;
        /**
         * @ngdoc function
         * @name getParamBoutonCreationPM
         * @methodOf myway.comGestionClient.RechercherPersonneService.getParamBoutonCreationPM()
         * @description
         * guetteur de this.paramBoutonCreationPM.
         * @param {void}.
         * @returns {myway.comGestionClient.ParametrageBouton}.
         */
        getParamBoutonCreationPM(): myway.comGestionClient.ParametrageBouton;
        /**
         * @ngdoc procedure
         * @name setParamBoutonCreationPM
         * @methodOf myway.comGestionClient.RechercherPersonneService.setParamBoutonCreationPM()
         * @description
         * setteur de this.paramBoutonCreationPM.
         * @param {myway.comGestionClient.ParametrageBouton}.
         * @returns {void}.
         */
        setParamBoutonCreationPM(param: myway.comGestionClient.ParametrageBouton): void;
        /**
         * @ngdoc function
         * @name getParamBoutonCreationPP
         * @methodOf myway.comGestionClient.RechercherPersonneService.getParamBoutonCreationPP()
         * @description
         * guetteur de this.paramBoutonCreationPP.
         * @param {void}.
         * @returns {myway.comGestionClient.ParametrageBouton}.
         */
        getParamBoutonCreationPP(): myway.comGestionClient.ParametrageBouton;
        /**
         * @ngdoc function
         * @name getAfficherNumPersonne
         * @methodOf myway.comGestionClient.RechercherPersonneService.getAfficherNumPersonne()
         * @description
         * guetteur de this.paramAfficherNumPersonne.
         * @param {void}.
         * @returns {string}.
         */
        getAfficherNumPersonne(): boolean;
        /**
         * @ngdoc procedure
         * @name setCriteres
         * @methodOf myway.comGestionClient.RechercherPersonneService.setCriteres()
         * @description
         * setteur de this.criteres.
         * @param {MyWay.Model.Client}.
         * @returns {void}.
         */
        setCriteres(param: MyWay.Model.Client): void;
        /**
         * @ngdoc function
         * @name getCriteres
         * @methodOf myway.comGestionClient.RechercherPersonneService.getCriteres()
         * @description
         * guetteur de this.criteres.
         * @param {void}.
         * @returns {MyWay.Model.Client}.
         */
        getCriteres(): MyWay.Model.Client;
        /**
         * @ngdoc function
         * @name setCreationPersonneBtnVisibilityBool
         * @methodOf myway.comGestionClient.RechercherPersonneService.setCreationPersonneBtnVisibilityBool()
         * @description
         * setteur de  this.creationPersonneBtnVisibilityBool.
         * @param {boolean}.
         * @returns {void}.
         */
        setCreationPersonneBtnVisibilityBool(paramBool: boolean): void;
        /**
         * @ngdoc function
         * @name getCreationPersonneBtnVisibilityBool
         * @methodOf myway.comGestionClient.RechercherPersonneService.getCreationPersonneBtnVisibilityBool()
         * @description
         * guetteur de  this.creationPersonneBtnVisibilityBool.
         * @param {void}.
         * @returns {boolean}.
         */
        getCreationPersonneBtnVisibilityBool(): boolean;
        /**
         * @ngdoc function
         * @name dateToString
         * @methodOf myway.comGestionClient.RechercherPersonneService.dateToString()
         * @description Permet de transformer une date en string sous le format yyyy-mm-dd (avec le delimiter = "-")
         * @param {Date} la date javascript
         * @returns {string} la chaîne date au format yyyy-mm-dd
         */
        private dateToString(date, delimiter);
        /**
         * @ngdoc method
         * @description
         * méthode qui retourne la liste des médias (tels + mail) d'une personne
         * @param {string, string} : l'idPersonne + codeEtablissement
         */
        getMedia(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<myway.media.IMedia>;
        /**
         * @ngdoc method
         * @description
         * méthode qui retourne les informations particulier d'un client passé en param.
         * @param {string, string} : l'idPersonne + codeEtablissement
         */
        getInformationParticulier(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<myway.comGestionClient.ComplementPersonnePhysique>;
        getInformationCorporate(identifiantTiers: string, codeEtablissement: string): ng.IPromise<myway.comGestionClient.ComplementPersonneMorale>;
        /**
         * Permet de compléter un objet client avec les médias (ressource REST à appeler au préalable)
         * @param {MyWay.Model.Client} client le client dont les données média sont à remplir
         * @param {myway.media.IMedia} media l'obejt média issue de la ressource REST tiers-v3/media
         */
        completerClientParMedia(client: MyWay.Model.Client, media: myway.media.IMedia): void;
        /**
         * Permet de compléter un objet client avec les informations particulier
         * @param {myway.comGestionClient.ComplementPersonnePhysique} complementParticulierInformation
         * @returns MyWay.Model.Client
         */
        completerClientParComplementInformationParticulier(complementParticulierInformation: myway.comGestionClient.ComplementPersonnePhysique): MyWay.Model.Client;
        /**
         * Permet de complement une personne morale avec ses informations
         * @param {myway.comGestionClient.ComplementPersonneMorale} complementCorporateInformation
         * @returns MyWay.Model.client
         */
        completerClientParComplementInformationCorporate(complementCorporateInformation: myway.comGestionClient.ComplementPersonneMorale): MyWay.Model.Client;
    }
}

declare module myway.comGestionClient {
    class RestituerPersonneController {
        private $scope;
        private mwgcRechercherPersonneService;
        clientListe: MyWay.Model.Client[];
        selectedClient: MyWay.Model.Client[];
        tableOptions: MyWay.UI.ImwTableOptions;
        saisieValidityGroupe: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, mwgcRechercherPersonneService: RechercherPersonneService);
        /**
         * @ngdoc function
         * @name initTableOptions
         * @description
         * initialisation du tableau de résultat
         * @param {MyWay.Model.Client[]} : Liste des clients
         * @param {MyWay.Model.Client[]} : client sélectionné
         * @returns {void}
         */
        initTableOptions(clientListe: MyWay.Model.Client[], selectedClient: MyWay.Model.Client[]): void;
        /**
         * @ngdoc function
         * @name keydown
         * @description
         * event keydown
         * @param {JQueryKeyEventObject} : event
         * @returns {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class RestituerPersonneMoraleController {
        private $scope;
        private mwgcRechercherPersonneService;
        clientListe: MyWay.Model.Client[];
        selectedClient: MyWay.Model.Client[];
        tableOptions: MyWay.UI.ImwTableOptions;
        saisieValidityGroupe: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, mwgcRechercherPersonneService: RechercherPersonneService);
        /**
         * @ngdoc function
         * @name initTableOptions
         * @description
         * initialisation du tableau de résultat
         * @param {MyWay.Model.Client[]} : Liste des clients
         * @param {MyWay.Model.Client[]} : client sélectionné
         * @returns {void}
         */
        initTableOptions(clientListe: MyWay.Model.Client[], selectedClient: MyWay.Model.Client[]): void;
        /**
         * @ngdoc function
         * @name keydown
         * @description
         * event keydown
         * @param {JQueryKeyEventObject} : event
         * @returns {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class RechercherPersonneModalService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        private referentielCorporateList;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: angular.IQService);
        /**
         * @ngdoc method
         * @name getSecteurActivite
         * @methodOf myway.comGestionClient.ReferentielCorporateService.getSecteurActivite
         * @description
         * méthode qui retourne les informations des secteurs d'activité: id/libelle.
         * @param {void}.
         * @returns {ng.IPromise<Array<any>>}.
         */
        private getSecteurActivite();
        /**
         * @ngdoc method
         * @name getQualite
         * @methodOf myway.comGestionClient.ReferentielCorporateService.getQualite
         * @description
         * méthode qui retourne le libelle d'une qualité d'un idSecteurActivite passé en param.
         * @param {String}: id du secteur d'activite.
         * @returns {ng.IPromise<Array<any>>}.
         */
        private getQualite(idSecteurActivite);
        /**
         * @ngdoc method
         * @name buildReferentielCorporateObject
         * @methodOf myway.comGestionClient.ReferentielCorporateService.buildReferentielCorporateObject
         * @description
         * méthode qui appel setReferentielCorporateList pour sauvragrader le tableau constituer.
         * @param {void}.
         * @returns {void}.
         */
        buildReferentielCorporateObject(): void;
        /**
         * @ngdoc method
         * @name getReferentielCorporateList
         * @methodOf myway.comGestionClient.ReferentielCorporateService.getReferentielCorporateList
         * @description
         * méthode qui retourne le tableau contenant le referentiel corporate.
         * @param {void}.
         * @returns {Array<any>} : le tableau contenant le referentiel corporate.
         */
        getReferentielCorporateList(): Array<any>;
        /**
         * @ngdoc method
         * @name setReferentielCorporateList
         * @methodOf myway.comGestionClient.ReferentielCorporateService.setReferentielCorporateList
         * @description
         * méthode qui set la valeur du tableau contenant le referentiel corporate.
         * @param {Array<any>} : le tableau contenant le referentiel corporate.
         * @returns {void}.
         */
        private setReferentielCorporateList(param);
    }
}
