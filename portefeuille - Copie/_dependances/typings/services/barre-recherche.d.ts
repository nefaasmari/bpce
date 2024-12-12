
declare module myway.comServiceRecherche.Communs {
    const enum TypeRecherche {
        NORMAL = 1,
        AUTOCOMPLETION = 2,
    }
    var serviceRechercheModule: ng.IModule;
    function capitalize(input: string): string;
    interface ICacheParCodeEtablissement<T> {
        [codeEtablissement: string]: ICacheParMotCle<T>;
    }
    interface ICacheParMotCle<T> {
        [motCle: string]: T;
    }
    interface IPredicatRechercheSpecifique<T> {
        (element: T, motCle: string): boolean;
    }
    /**
     * Gestionnaire de cache pour les recherches.
     * Le cache prend en paramètre le code établissement et le mot clé.
     * Un prédicat peut être fourni au constructeur pour permettre de rafiner les résultats d'un mot clé.
     * Le prédicat peut être utile si une recherche avec un mot qui apparait dans une autre chaine est valide.
     * Par exemple il est possible de faire en sorte qu'un résultat pour le mot "toulouse" qui n'est pas en cache puisse exploiter le
     * résultat du mot "tou" qui est déjà en cache.
     */
    class CacheDeRecherche<T> {
        private cacheParCodeEtablissement;
        private rechercheSpecifique;
        constructor(pRechercheSpecifique: IPredicatRechercheSpecifique<T>);
        all(): T[];
        /**
         * Récupère un élément du cache, renvoie null si le cache n'est pas renseigné.
         */
        get(codeEtablissement: string, motCle: string): T[];
        put(codeEtablissement: string, motCle: string, elements: T[]): void;
        invalidate(): void;
    }
}

declare module myway.comServiceRecherche.Communs {
    interface ICaracteristiqueAgence {
        comptoirGuichetRattachement: IComptoirGuichetRattachement;
        donneeCommune: IDonneeCommune;
        donneeSpecifique: IDonneeSpecifique;
        responsableAgence: IResponsableAgence;
        localisation: ILocalisation[];
    }
    interface IComptoirGuichetRattachement {
        codeComptoirBDF: string;
        codeGuichetRisqueBDF: string;
        codeGuichetInterbancaire: string;
        codeGuichetStatistiqueBDF: string;
        codeGuichetBCE: string;
        codeEchantillonBCE: string;
        indicateurGuichetPermanentBCE: string;
        libelleComptoirBDF: string;
        libelleGuichetRisqueBDF: string;
    }
    interface IDonneeSpecifique {
        typeAgence: string;
        codeExistenceCoffre: string;
        codeValidationAutoDepotCheque: string;
    }
    interface IResponsableAgence {
        identifiantResponsableEDS: number;
        dateDebutValiditeResponsable: Date;
        dateFinValiditeResponsable: Date;
    }
    interface ICoordonneeEDS {
        IdentificationSite: IIdentificationSite;
        AdresseEDS: IAdresseEDS;
        MediaEDS: IMediaEDS;
    }
    interface IAdresseEDS {
        ligne2AdresseEDS: string;
        ligne3AdresseEDS: string;
        ligne4AdresseEDS: string;
        ligne5AdresseEDS: string;
        ligne6AdresseEDS: string;
        codePaysINSEE: string;
    }
    interface IMediaEDS {
        numeroTelephonePublic: string;
        numeroTelephoneInterne: string;
        numeroFAX: string;
        adresseEMail: string;
    }
    interface IIdentificationSite {
        codeEtablissement: string;
        identifiantSite: number;
    }
    interface IDonneesCommunesEDS {
        codeEtablissement: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        libelleCourtTypeEDS: string;
        libelleLongTypeEDS: string;
        referenceExterneEDS: number;
        libelleElementStructure: string;
        libelleCourtEDS: string;
        libelleLongEDS: string;
        dateDebutValiditeEDS: Date;
        dateFinValiditeEDS: Date;
    }
    interface IHoraireEDS {
        identifiantInterneEDS: number;
        codeEtablissement: string;
        horaireHebdomadaire: IHoraireHebdomadaire[];
        horaireExceptionnel: IHoraireExceptionnel[];
    }
    interface IHoraireExceptionnel {
        dateHoraireExceptionnel: string;
        heureFermetureExceptionnelleApresMidi: number;
        heureFermetureExceptionnelleMatin: number;
        heureOuvertureExceptionnelleApresMidi: number;
        heureOuvertureExceptionnelleMatin: number;
        typeHoraireExceptionnel: string;
        indicateurJourFerie: string;
        indicateurGlobalEtablissement: string;
    }
    interface IHoraireHebdomadaire {
        numeroJourSemaine: string;
        heureOuvertureMatin: number;
        heureFermetureMatin: number;
        heureOuvertureApresMidi: number;
        heureFermetureApresMidi: number;
        typeOuvertureMatin: string;
        typeOuvertureApresMidi: string;
    }
    interface ICaracteristiqueSiege {
        DonneeCommune: IDonneeCommune;
        DonneeSpecifique: IDonneeSpecifique;
        Localisation: Array<ILocalisation>;
        MentionLegaleCorps: IMentionLegaleCorps;
        MentionLegaleDonneeCommune: IMentionLegaleDonneeCommune;
        MentionLegalePied: IMentionLegalePied;
    }
    interface IDonneeCommune {
        codeEtablissement: string;
        identifiantElementStructure: number;
        referenceElementStructure: number;
        libelleElementStructure: string;
        typeElementStructure: string;
        dateDebutValiditeEDS: Date;
        dateFinValiditeEDS: Date;
        libelleTypeElementStructure: string;
    }
    interface IDonneeSpecifique {
        codeInterneSequentiel: string;
        CodeInterne: string;
        codeCTRRattachement: string;
        critereRoutageBIN: string;
        numeroTelex: string;
        numeroTelecopie: string;
        numeroSIRET: string;
        lieuEnregistrementRC: string;
        montantDotationStatutaire: number;
        montantCapital: number;
        numeroNationalEmetteur: string;
    }
    interface ILocalisation {
        identifiantSite: number;
        typeAdresse: string;
        dateDebutValiditeSite: Date;
        dateFinValiditeSite: Date;
    }
    interface IMentionLegaleCorps {
        codeBIC: string;
        codeCategorieJuridique: string;
        codeCTRRattachement: string;
        codeInterneEtablissement: string;
        codeInterneEtablissementSecondaire: string;
        commentaire3: string;
        commentaire4: string;
        critereRoutageBIN: string;
        libelleEDSChequier: string;
        libelleEDSDomiciliation: string;
        lieuEnregistrement: string;
        montantCapitalEtablissement: number;
        montantDotation: number;
        numeroNationalEmetteur: string;
        numeroORIAS: string;
        numeroRCSSIREN: string;
        numeroSIRET: string;
        numeroTelecopieur: string;
        numeroTelex: string;
        raisonSociale: string;
        commentaire2: string;
        commentaire1: string;
    }
    interface IMentionLegalePied {
        codePied: number;
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        ligneEntete: string;
        typeEditique: string;
        typeSaisie: string;
    }
    interface IMentionLegaleDonneeCommune {
        dateModificationMentionLegale: string;
    }
}

declare module myway.comServiceRecherche.Communs {
    var typeEDS: {
        AGENCE: string;
        SIEGE: string;
    };
    class AnnuaireAgenceService {
        private $q;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService);
        rechercheAvecMotCle(codeEtablissement: string, motCle: string, min: number, max: number): ng.IPromise<IAgenceModele[]>;
        rechercherAgences(codeEtablissement: string, motCle: string): ng.IPromise<IDonneesCommunesEDS[]>;
        rechercherInformationsAgence(codeEtablissement: string, donneesCommuneEDS: IDonneesCommunesEDS): ng.IPromise<IAgenceModele>;
        private creerAgenceModel(donneesCommuneEDS, coordonneeEds, horaireEds, dateDebutSemaine, referenceElementStructure);
        private recherche(codeEtablissement, motCle, typeEDS);
        private recupererCaracteristiques(codeEtablissement, identifiantElementStructure, typeElementStructure);
        private recupererCoordonnees(codeEtablissement, identifiantSite);
        private recupererHoraires(codeEtablissement, donneesCommuneEDS, dateDebutSemaine);
        private get<T>(url, params, defaultValue?);
        private contactsWSVersVue(mediaEds);
        private numeroJourSemaineVersJour(numeroJourSemaine);
        private horaireWSVersHoraireHeure(horaireWS);
        private horaireWSVersVue(horairesEDS, dateDebutSemaine);
        private appliquerHorairesExceptionnels(horaires, dateDebutSemaine);
    }
}

declare module myway.comServiceRecherche.Communs {
    interface ICollaborateurModele {
        nom: string;
        prenom: string;
        matricule: string;
        affectation: string;
        lienAnnuaire: string;
        lienEDS: string;
        lienAvatar: string;
        fonction: string;
        email: string;
        mobile: string;
        telephone: string;
        civilite: string;
    }
    enum TypeContact {
        TELEPHONE = 0,
        EMAIL = 1,
    }
    interface IContactModele {
        type: TypeContact;
        coordonnees: string;
        description: string;
    }
    interface IAdresseAgenceModele {
        rue: string;
        codePostal: string;
        ville: string;
    }
    interface IHoraireAgenceJourModele {
        heureOuvertureMatin: IHoraireAgenceHeureModele;
        heureFermetureMatin: IHoraireAgenceHeureModele;
        heureOuvertureApresMidi: IHoraireAgenceHeureModele;
        heureFermetureApresMidi: IHoraireAgenceHeureModele;
    }
    interface IHoraireAgenceHeureModele {
        heure: number;
        minute: number;
    }
    interface IHoraireAgenceModele {
        [jour: string]: IHoraireAgenceJourModele;
    }
    interface IAgenceModele {
        nom: string;
        id: string;
        adresse: IAdresseAgenceModele;
        horaires: IHoraireAgenceModele;
        contacts: IContactModele[];
        referenceElementStructure: number;
    }
}

declare module myway.comServiceRecherche.Communs {
    type ICollaborateurOuAgenceModele = ICollaborateurModele | IAgenceModele;
    class AnnuaireService implements IAnnuaireAutocompletionService {
        private $q;
        private agentService;
        private annuaireAgenceService;
        etablissementCourant: IEtablissementModele;
        private cacheCollaborateurs;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, annuaireAgenceService: AnnuaireAgenceService);
        chargerAnnuairePourAutocompletion(codeEtablissement: string, motCle: string, chargerTout: boolean): ng.IPromise<ICollaborateurModele[]>;
        chargerCollaborateurs(codeEtablissement: string, typeRecherche: TypeRecherche, motCle: string, start: number, num: number): ng.IPromise<ICollaborateurModele[]>;
        chargerCollaborateurParMatricule(codeEtablissement: string, matricule: string): ng.IPromise<ICollaborateurModele>;
    }
}

declare module myway.comServiceRecherche.Communs {
    interface IResultatRechercheApplicationModele {
        codeEtablissement: string;
        rechercheApplications: IRechercheApplication[];
    }
    interface IRechercheApplication {
        identifiantApplication: string;
        libelleApplication: string;
    }
}

declare namespace myway.comServiceRecherche.Communs {
    class ApplicationService {
        private $q;
        private applicationService;
        private portailService;
        static $inject: string[];
        constructor($q: ng.IQService, applicationService: myway.portail.api.ApplicationService, portailService: myway.portail.api.PortailService);
        chargerResultats(codeEtablissement: string, motClef: string): ng.IPromise<myway.portail.api.Application[]>;
    }
}

declare module myway.comServiceRecherche.Communs {
}

declare module myway.comServiceRecherche.Communs {
}

declare module myway.comServiceRecherche.Communs {
    interface IAutocompletionMotModele {
        mot: string;
        nombreOccurrence: number;
    }
}

declare module myway.comServiceRecherche.Communs {
    interface IMotListeNoire {
        terme: string;
        identifiantUtilisateur: string;
        dateCreation: string;
        codeEtablissement: string;
    }
    class AutocompletionMotService {
        private $q;
        private agentService;
        private cacheDeRecherche;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService);
        chargerResultats(motCle: string, codeEtablissement: string): ng.IPromise<IAutocompletionMotModele[]>;
        posterMot(mot: string, codeEtablissement: string): ng.IPromise<IAutocompletionMotModele[]>;
        supprimerMot(mot: string, codeEtablissement: string): ng.IPromise<void>;
        blacklistMots(mots: string[], codeEtablissement: string): ng.IPromise<void>;
        chargerListeNoire(codeEtablissement: string): ng.IPromise<IMotListeNoire[]>;
        supprimerMotListeNoire(motCle: string, codeEtablissement: string): ng.IPromise<void>;
    }
}

declare module myway.comServiceRecherche.Communs {
    interface IAnnuaireAutocompletionService {
        chargerAnnuairePourAutocompletion(codeEtablissement: string, motCle: string, chargerTout: boolean): ng.IPromise<ICollaborateurModele[]>;
    }
}

declare module myway.comServiceRecherche.Communs {
}

declare module myway.comServiceRecherche.Communs {
    class BarreRechercheGlobaleService {
        private $q;
        private $timeout;
        private agentService;
        identifiantConnexionAgent: string;
        codeEtablissement: string;
        private deferEstInitialise;
        quandInitialise: ng.IPromise<void>;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, agentService: myway.core.AgentService);
        init(identifiantConnexionAgent: string, codeEtablissement: string): void;
    }
}

declare module myway.comServiceRecherche.Communs {
}

declare module myway.comServiceRecherche.Communs {
    interface IEtablissementModele {
        codeEtablissement: string;
        libelleEtablissement: string;
        sigleEtablissement: string;
        selected: IEtablissementModele;
        couloirProduction: string;
        designationEtablissement: string;
        affichageEtablissementServiceRecherche: boolean;
    }
}

declare module myway.comServiceRecherche.Communs {
    class EtablissementService {
        private agentService;
        private etablissementPromise;
        static $inject: string[];
        constructor(agentService: myway.core.AgentService);
        chargerResultats(): ng.IPromise<IEtablissementModele[]>;
        getEtablissement(codeEtablissement: string): ng.IPromise<IEtablissementModele>;
    }
}

declare module myway.comServiceRecherche.Communs {
    interface IHabilitationReponseModel {
        mysys: string[];
        cultureNet: string[];
    }
}

declare module myway.comServiceRecherche.Communs {
    interface IHistoriqueDto {
        motCle: string;
        dateRecherche: string;
    }
    class HistoriqueModele {
        motCle: string;
        dateRecherche: Date;
        constructor(motCle: string, dateRecherche: Date);
        static fromDto(dto: IHistoriqueDto): HistoriqueModele;
        static fromDtoArray(dtos: IHistoriqueDto[]): HistoriqueModele[];
        static fromDtoArrayPromise(dtosPromise: ng.IPromise<IHistoriqueDto[]>): ng.IPromise<HistoriqueModele[]>;
    }
}

declare module myway.comServiceRecherche.Communs {
    import IAutocompletionMotModele = myway.comServiceRecherche.Communs.IAutocompletionMotModele;
    class HistoriqueService {
        private agentService;
        static $inject: string[];
        constructor(agentService: myway.core.AgentService);
        chargerHistorique(identifiantUtilisateur: string): ng.IPromise<HistoriqueModele[]>;
        enregistrementHistorique(motCle: string): ng.IPromise<IAutocompletionMotModele>;
    }
}
