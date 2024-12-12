declare var livraison: string;

declare module ConsultationSiren {
    var app: ng.IModule;
}

declare module ConsultationSiren.Constantes {
    module TypeFiltrageListe {
        var FILTRAGE_ETAT_FINAL: string;
        var FILTRAGE_ETAT_INITIAL: string;
        var FILTRAGE_ETAT_CREATION: string;
    }
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren.Modeles {
    interface IElementsHistoriquesSiren {
        nbOccurenceElements: number;
        indicateurGestionSuiteListe: number;
        elements: Array<IInformationsSiret>;
    }
    interface IInformationSiren {
        listeInformationsSiret: IInformationsSiret[];
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IInformationsSiret {
        numeroSiren: string;
        numeroComplementaireSiret: string;
        enseigne?: string;
        evenementMaj: IEvenementMaj;
        informationsAdresse?: IInformationsAdresse;
        informationsEtablissement?: IInformationsEtablissement;
        caracteristiquesEconomiqEtab?: ICaracteristiquesEconomiqEtab;
        identificationEntreprise?: IIdentificationEntreprise;
        informationsSiegeEntreprise?: IInformationsSiegeEntreprise;
        caracteristiquesEconomiqEntrep?: ICaracteristiquesEconomiqEntrep;
        informationsCreationEtab?: IInformationsCreationEtab;
    }
    interface IEvenementMaj {
        codeNatureMaj: string;
        libelleNatureMaj: string;
        horodatageMaj: string;
    }
    interface IInformationsAdresse {
        libelleCommuneEtablissement: string;
        indicMajAdresseEtablissement: string;
        ligne1AdresseEtablissement: string;
        ligne2AdresseEtablissement: string;
        ligne3AdresseEtablissement: string;
        ligne4AdresseEtablissement: string;
        ligne5AdresseEtablissement: string;
        ligne6AdresseEtablissement: string;
        ligne7AdresseEtablissement: string;
    }
    interface IInformationsEtablissement {
        indicMajEnseigneEntrep: string;
        enseigneCommerciale: string;
        codeStatutLieuActivite: string;
        libelleStatutLieuActivite: string;
    }
    interface ICaracteristiquesEconomiqEtab {
        indicmajActivitePrincipaleEtab: string;
        codeNafEtablissement: string;
        libelleActivitePrincipaleEtab: string;
        codeNatureEtabEntrepeneurIndiv: string;
        libelleNatureEtablissement: string;
        dateDebutActivite: string;
        codeNatureActiviteEtab: string;
        libelleNatureActiviteEtab: string;
        codeLieuActiviteEtab: string;
        libelleLieuActiviteEtab: string;
    }
    interface IIdentificationEntreprise {
        indicMajNomOuRaisonSoc: string;
        raisonSocialeEntreprise: string;
        nomNaissance: string;
        prenom: string;
        indicMajSigle: string;
        sigle: string;
        codeSexe: string;
        libelleSexe: string;
        numeroIdentifRepNatAssoc: string;
    }
    interface IInformationsSiegeEntreprise {
        indicMajNIC: string;
        numeroSiretDuSiege: string;
        codeDepartementSiegeEntrep: string;
    }
    interface ICaracteristiquesEconomiqEntrep {
        indicMajNatureJuridique: string;
        codeCategorieJuridiqueEntrep: string;
        libelleNatureJuridiqueEntrep: string;
        indicMajActivitePrincipEntrep: string;
        codeNafEntreprise: string;
        libelleActivitePrincipEntrep: string;
    }
    interface IInformationsCreationEtab {
        codeOrigineCreationEtab: string;
        libelleOrigineCreationEtab: string;
        dateEnregLieuActivite: string;
    }
}

declare module ConsultationSiren.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: (nomDuService?: string) => boolean;
    }
}

declare module ConsultationSiren.Services {
    class AffichageSiren {
        siren: Modeles.IInformationsSiret;
        toutIndicateurMajNull: boolean;
        evenementSpecial: boolean;
        tableauOpen: Array<boolean>;
        constructor(siren: Modeles.IInformationsSiret, toutIndicateurMajNull: boolean);
    }
    class ListeSirenService {
        private serviceAgentExtended;
        private $q;
        private rechercheHistoriqueSirenService;
        siren: string;
        contexte: boolean;
        chargement: boolean;
        static $inject: string[];
        private listeSiren;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, rechercheHistoriqueSirenService: Services.Rest.IRechercheHistoriqueSirenService);
        recupererListeSiren(modeConsultation: string, numeroSiren: string, filtreClient: boolean, numeroSiret: string): ng.IPromise<Modeles.IInformationsSiret[]>;
        rechercheEtatHistorique(siren: string, typeFiltrage: string): Array<Modeles.IInformationsSiret>;
    }
}

declare module ConsultationSiren.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module ConsultationSiren.Services {
    class TransformationTableauService {
        static $inject: string[];
        constructor();
        /**
         * Pour comparer les tableaux correspondant à l'état initial et à l'etat final
         * et ajouter un element à une date précise si un eélement du cpule n'existe pas en retour de la QR
         * @param tableau1
         * @param tableau2
         * @param istableau
         */
        comparaisonTableauInitialFinal(tableau1: Array<Modeles.IInformationsSiret>, tableau2: Array<Modeles.IInformationsSiret>, istableau: boolean): void;
        /**
         * TRansformation en un seul tableau
         * @param tableau1
         * @param tableau2
         */
        creationTableauComplet(tableau1: Array<Modeles.IInformationsSiret>, tableau2: Array<Modeles.IInformationsSiret>, tableau3: Array<Modeles.IInformationsSiret>): Array<Modeles.IInformationsSiret>;
        /**
         * trasformation en tableau d'AffichageSiren
         * @param tableau
         */
        transformerTableauAffichageSiren(tableau: Array<Modeles.IInformationsSiret>, isHistorique: boolean): Array<AffichageSiren>;
        /**
         * Foramttage Propriété
         * @param siren
         */
        formatageProprietesNull(siren: Modeles.IInformationsSiret): Modeles.IInformationsSiret;
        /**
         * Traitement des indicateur
         * @param siren
         */
        toutIndicateurMajNull(siren: Modeles.IInformationsSiret, isHistorique: boolean): boolean;
        isValeurNull(texte: string): string;
    }
}

declare module ConsultationSiren {
    /**
     * Controleur de gestion de la consultation liste SIREN
     */
    class ConsultationSirenControleur {
        private $injector;
        private $scope;
        private rechercheListeSirenService;
        private $window;
        private $location;
        private mwEvents;
        private $rootScope;
        private tranformationTableauService;
        static $inject: string[];
        siren: string;
        siret: string;
        historique: boolean;
        chargementDonnees: boolean;
        nombrePages: number;
        lignesParPage: number;
        pageCourante: number;
        listeSirenFiltre: Array<Modeles.IInformationsSiret>;
        informationsSiretInitial: Array<Modeles.IInformationsSiret>;
        inforamtionSiretFinal: Array<Modeles.IInformationsSiret>;
        informationSiretCreation: Array<Modeles.IInformationsSiret>;
        informationSIret: Modeles.IInformationsSiret;
        rechercheSiret: string;
        rechercheEnseigne: string;
        titre: string;
        listeSiren: Array<Services.AffichageSiren>;
        private tableauOpen;
        constructor($injector: ng.auto.IInjectorService, $scope: ng.IScope, rechercheListeSirenService: Services.ListeSirenService, $window: ng.IWindowService, $location: ng.ILocationService, mwEvents: MyWay.UI.IMwEvents, $rootScope: ng.IRootScopeService, tranformationTableauService: Services.TransformationTableauService);
        private init();
        goToAnchor(ancre: string): void;
        fermerTousPanneauRetractable(): void;
        affichageBloc(historique: boolean, evenementSpecial: boolean, toutIndicateurMajNull: boolean, indicateurMaj1: string, indicateurMaj2?: string): boolean;
        getComplementTitre(fichier: Services.AffichageSiren): boolean;
        getBlocEvent(fichier: Services.AffichageSiren): boolean;
        getPagination(): boolean;
        aucuneDonneeDisponible(): boolean;
    }
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren.Services.Rest {
    interface IRechercheHistoriqueSirenQuery {
        filtreClient: boolean;
        numeroSiren: string;
        numeroSiret?: string;
        codeEtablissement?: string;
        modeConsultation: string;
    }
    interface IRechercheHistoriqueSirenService {
        getRecherche(query: IRechercheHistoriqueSirenQuery): ng.IPromise<Modeles.IInformationSiren>;
    }
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}

declare module ConsultationSiren {
}
