/**
 * Ensemble d'interfaces de modèles applicatifs
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Modeles.Application {
    "use strict";

    export interface IContexteVersRevue {
        idEds: number;
        designationAgent: string;
        listeIdsPortefeuille: Array<number>;
        nombreTotalPortefeuilles: number;
        identifiantPersonne: number;
        raisonSociale: string;
        siren: string;
        identifiantRelation: number;
        libelleRelation: string;
        listeClientAffiches: Array<Modeles.Application.IClient>;
        estClient: boolean;
        typeForcage: string;
    }

    export interface IContexteVersSyntheseClient {
        identifiantPersonne: number;
    }

    export interface IContexteVersEdsPortefeuilles {
        idEds: number;
        listeIdsPortefeuille: Array<number>;
    }



    export interface IContexteGererPortefeuille {
        identifiantPersonne: number;
        raisonSociale: string;
        siren: string;
        identifiantRelation: number;
        libelleRelation: string;
        objetEdsVisu: IObjetEdsChoisi;

        pagination: MyWay.UI.IMwPaginationState;
        colonneTriee: MyWay.UI.IMwSortedColumn;
        colonneFiltre: Array<MyWay.UI.IMwColumnCriterion>;
        identifiantPersonneSelection: number;

        typeVue: Enum.PageClients.TYPE_VUE;
        filtres: Array<Modeles.Application.IFiltre>;
        filtresRelation: Array<Modeles.Application.IFiltre>;
        listeClientAffiches: Array<Modeles.Application.IClient>;
        estClient: boolean;
        typeForcage: string;
    }

    export interface IContexteGererRelation {
        pagination: MyWay.UI.IMwPaginationState;
        colonneTriee: MyWay.UI.IMwSortedColumn;
        colonneFiltre: Array<MyWay.UI.IMwColumnCriterion>;
        selectedItems: Array<IRelationEconomique>;
        typeVue: Enum.PageClients.TYPE_VUE;
    }

    export interface IElementTableau {
        checked?: boolean;
    }

    /**
     * Modèle d'agent ayant des portfeuille
     */
    export interface IAgentPortefeuille {
        id: number;
        libelle: string;
        estAffiche: boolean;
        listePortfeuille: Array<IPortefeuille>;
    }

    /**
     * Modèle de portfeuille
     */
    export interface IPortefeuille {
        id: number;
        libelle: string;
        estAffiche: boolean;
        listeRelations: Array<IRelationEconomique>;
        idAgent?: number;
        nomAgent?: string;
        prenomAgent?: string;
        nomPrenonAgent?: string;
        fonctionAgent?: string;
        nombreTotalClients?: number;
        nombreTotalProspectsTiers?: number;
        idAgentString?: string;
        listPortefeuilleParAgent?: IPortefeuille[];
        codeSuiviParComplementaire?: string; 
    }

    /**
     * 
     */
    export interface ICaracteristiquesEDS {
        agences: Array<Modeles.Application.IAgenceEds>;
    }

    /**
     * 
     */
    export interface IAgenceEds {
        id: number;
        nomEds: string;
        agencesInferieur: Array<IAgenceEds>;
        agencesSuperieur: IAgenceEds;
        typeEDS: string;
        libelleTypeEDS: string;
        affiche: boolean;
    }

    /**
     * 
     */
    export interface IAgent {
        id: number;
        nomPrenonAgent: string;
        estAffiche: boolean;
        isVisu: boolean;
        listPortefeuilleParAgent: IPortefeuille[];
    }

    /**
     * Modèle de caractéristiques agent
     */
    export interface ICaracteristiquesAgent {
        designationAgent: string;
        libelleFonction: string;
        identifiantElementStructure: number;
        codeEtablissement: string;
        identifiantAgent?: string;
    }

    export interface IObjetEdsChoisi {
        objCaractAgent: ICaracteristiquesAgent;
        nombrePortefeuilleTotalAgent: number;
        listePtfVisu: Array<number>;
        typeForcage: Enum.PageClients.TYPE_FORCAGE;
        affichageModificationChoix: boolean;
        locationPath: string; //Permet de se positionner sur la page souhaitée en retour d'un débranchement
    }

    /**
     * Modèle d'un indicateur
     */
    export interface IIndicateur {
        intitule: string;
        code: string;
        valeur: string;
        valeurNumber: number;
        valeurDate: Date;
        typeIndicateur: Enum.Indicateur.TYPE; // NOMBRE, DATE, MONTANT
        dateMaj: Date;
        icone: string;
        tendance?: number;
    }

    export interface IIndicateurType {
        code: string;
        codeRel?: string;
        codeRest: string;
        typeIndicateur: Enum.Indicateur.TYPE;
        intitule: string;
        estUniquementVueClients: boolean;
        estVisibleColonne: boolean;
        famille?: Enum.Indicateur.FAMILLE;
        codePreference: string;
    }

    /**
     * Position des indicateurs
     */
    export interface IPositionIndicateur {
        code: string;
        index: number;
    }

    /**
     * 
     */
    export interface IListeIndicateur {
        positionIndicateur: Array<IPositionIndicateur>;
        listeIndicateurs: Array<IIndicateur>;
    }

    /**
     * Modèle d'un client
     */
    export interface IClient extends IElementTableau, IListeIndicateur {
        nom: string;
        id: string;
        siren: string;
        estClient: boolean;
        estActif: boolean;
        estActifRenseigne: boolean;
        nomRelationEconomique: string;
        idRelationEconomique: number;
        estLeader: boolean;
        estSansContrat: boolean;
        datePremierEquipement: Date;
        libellePortefeuille: string;
        identifiantPortefeuille: number;
        nbPersonneRelation: number;
        codePersonnaliteJuridique: string;
    }

    /**
     * Modèle d'une relation economique
     */
    export interface IRelationEconomique extends IElementTableau, IListeIndicateur {
        idPortefeuille: number;
        nom: string;
        id: string;
        idLeader: number;
        relationEconomique: string;
        listeClients: Array<IClient>;
        estClient: boolean;
        libellePortefeuille: string;
        identifiantPortefeuille: number;
    }

    /**
     * Modèle de filtre sur indicateur
     */
    export interface IIndicateurFiltre {
        indicateur: IIndicateurType;
        listeValeurs: Array<IValeurFiltre>;
        utilise: boolean;
        utiliseRelationEco: boolean;
        estPanier: boolean;
    }

    /**
     * Modèle de valeur de filtre : 23/02 ajout ordreAffichage pour afficher dans l'ordre qu'on veut. Ex : Top CC
     */
    export interface IValeurFiltre {
        libelle: string;
        actif: boolean;
        ordreAffichage: number;
    }

    /**
     * Modèle d'un filtre
     */
    export interface IFiltre {
        id: number;
        indicateur: IIndicateurFiltre;
        comparateur?: Enum.Filtre.COMPARATEUR;
        operateur?: Enum.Filtre.OPERATEUR;
        valeurUnique?: number;
        valeurMultiple1?: number;
        valeurMultiple2?: number;
    }

    /**
     * Modèle d'entree/sortie de la popup de filtres 
     */
    export interface IDonneesEntreeSortiePopupFiltres {
        listeIndicateursFiltre: Array<IIndicateurFiltre>;
        listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        listeFiltres: Array<IFiltre>;
        estVueClient?: boolean;
    }

    /**
     * Modèle d'entree/sortie de la popup de indicateurs
     */
    export interface IDonneesEntreeSortiePopupIndicateurs {
        listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        listeFiltresClients: Array<IFiltre>;
        listeFiltresRelationEco: Array<IFiltre>;
        listePaniers?: Array<Modeles.Application.IPanier>;
        panier?: Modeles.Application.IPanier;
    }

    /**
     * Modèle d'un indicateur de la popup choix indicateur
     */
    export interface IIndicateurChoix {
        indicateur: IIndicateurType;
        choisi: boolean;
        desactive: boolean;
        position?: number;
    }

    /**
     * Modèle d'un panier
     */
    export interface IPanier {
        nom: string;
        listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>;
        estDefaut: boolean;
        numero: number;
    }

    /**
     * Modèle d'une agence
     */
    export interface IAgence {
        identifiantEDS: number;
        libelle: string;
    }

    /**
     * Modèle d'indicateur colonne
     */
    export interface IDataIndicateurColonne {
        id: string;
        intitule: string;
        sousIntitule?: string;
        valeur: number;
        couleur: COULEUR_GRANDE_COLONNE;
        couleurSousValeur?: COULEUR_GRANDE_COLONNE;
        couleurIntitule?: COULEUR_GRANDE_COLONNE;
        hauteur: number;
        hauteurSousValeur?: number;
        estMontant: boolean;
        sousValeur?: number;
        nePasAfficherIntitule?: boolean;
        nomSuiviPar?: string;
    }

    /**
     * Modèle d'indicateur colonne
     */
    export interface IDataIndicateurMutliColonne {
        id: string;
        tendence: IConfigIndicateurFleche;
        intitule?: string;
        dataIndicateurMutliColonne: Array<Modeles.Application.IDataIndicateurColonne>;
    }

    export enum COULEUR_GRANDE_COLONNE {
        COULEUR_CLIENT = <any>"#007399",
        COULEUR_SANS_CONTRAT = <any>"#D7BDE2",
        COULEUR_ACTIF = <any>"#27BAE9",
        COULEUR_PROSPECT = <any>"#545494",
        COULEUR_RELATIONS = <any>"#cc6666",
        COULEUR_PERIODE1 = <any>"#545494",
        COULEUR_PERIODE2 = <any>"#00cccc",
        COULEUR_PERIODE3 = <any>"#E6A016",
        COULEUR_MT_NEGATIF = <any>"#FF0000",
    };

    export interface IConfigIndicateurFleche {
        valeurFormate: string;
        couleur: string;
        icone: string;
    }

    export interface ILettreBegacli {
        univers: string;
        lettreMaj: string;
        choisiMaj: boolean;
        lettreMin: string;
        choisiMin: boolean;
    }

    export interface INombreBegacli {
        nombre: string;
        choisi: boolean;
    }

    export interface IFiltreBegacli {
        listeLettres: Array<ILettreBegacli>;
        listeNombres: Array<INombreBegacli>;
        choisiNC: boolean;
    }



}