
declare module Avenants.Rest.Constantes.Inject {
    module Services {
        const communService: string;
        const emprunteurService: string;
        const assuranceService: string;
    }
}

declare module Avenants.Rest {
    var app: any;
}

declare module Avenants.Rest.Modeles {
    interface IAssuranceCredit {
        conventionAssurance: IConventionAssurance;
        listeAccessoireCredit: Array<IAccessoireAssurance>;
        sinistreAssurance: ISinistreAssurance;
        informationGeneraleAssurance: IInformationGeneraleAssurance;
        informationJustificatifs: IInformationJustificatif;
        donneeAssurance: IDonneeAssurance;
    }
    interface IInformationGeneraleAssurance {
        /**
         * Désignation courte de l'assuré.
         */
        libelleAssure: string;
        /**
         * Rôle de l'assuré.
         *
         * Valeurs :
         *    03 : Caution
         *    05 : Emprunteur
         *    15 : Dirigeant
         */
        roleAssure: string;
        identifiantAssurance: string;
        libelleTiers: string;
        typeRolePersonne: string;
        designationCourte: string;
        libelleTypeAssurance: string;
        datePriseEffetAssurance: string;
        montantEcheanceCouvertAssurance: number;
        codeDevise: string;
        quotiteCouvertureCredit: number;
        libelleReservesExclusions: string;
        codeCouvertureTypeExtension: boolean;
        codeTypeRisque: string;
        identifiantPersonneEstAssure: string;
        dateFinPriseEffetAssurance: string;
        quotiteInclusTEG: number;
        quotiteNonInclusTEG: number;
    }
    interface ISinistreAssurance {
        codeIndicExistenceSinistre: boolean;
        libelleTypeSinistre: string;
        datePriseChargeSinistre: string;
        dateClotureSinistreCredit: string;
    }
    interface IConventionAssurance {
        identifiantConvention: string;
        libelleLongConvention: string;
        datePriseEffetConvention: string;
        dateFinEffetConvention: string;
        numeroExterneConvention: string;
    }
    interface IListeAssuranceCredit {
        listeAssurances: Array<IAssuranceCredit>;
        informationJustificatifs: IInformationJustificatif;
    }
    interface IAccessoireAssurance {
        identifiantAssurance: string;
        identifiantConvention: string;
        numeroRelatifPhaseCredit: number;
        codeTypePhase: string;
        periodiciteApplicationElement: string;
        dateDebutApplicationElement: string;
        dateFinApplicationElement: string;
        montantElement: number;
        tauxElement: number;
        dateAppelAccessoire: string;
        numeroTranche: number;
        dureeApplicationAccessoire: number;
        ageMinimumEntreeAssurance: number;
        ageMaximumEntreeAssurance: number;
        dateDebutApplication: string;
        dateFinApplication: string;
    }
    interface IJustificatifsAssurance {
        codeNatureJustificatif: string;
        identifiantJustificatif: string;
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClassePieceJustificatif: string;
        libelleSousClasse: string;
        libelleNatureJustificatif: string;
        codeCategorieJustificatif: string;
        libelleCategorieJustificatif: string;
        dateDerniereMAJStatutElement: string;
        libelleStatutJustificatif: string;
        dateDebutValidite: string;
        dateFinValidite: string;
        dateLimiteReceptionJustificatif: string;
        referenceExterneJustificatif: string;
        codeEntite: string;
        codeEntiteTableRefJustificatif: string;
        codeJustificatifObligatoire: string;
        codeNiveauJustification: string;
        codeMAJGarantie: string;
        dateCreation: string;
        indicateurBanalise: string;
        codeStatutJustificatif: string;
        zoneBanalise: string;
    }
    interface IInformationJustificatif {
        codeAppelWS: number;
        messageAppelWS: string;
        erreurQr: boolean;
        listeJustificatifAssurance: Array<IJustificatifsAssurance>;
        listeJustificatifs: Array<IJustificatifsAssurance>;
    }
    interface INatureJustif {
        codeClasseJustificatif: string;
        libelleCodeClasse: string;
        sousClasseJustificatif: string;
        libelleSousClasse: string;
        codeNatureJustificatif: string;
        libelleNatureJustificatif: string;
        libelleCategorieJustificatif: string;
        codeJustificatifPeriodique: string;
        codeNiveauJustificatif: string;
        zoneBanalise: string;
        codeCategorieJustificatif: string;
    }
    interface IDonneeAssurance extends IElementGestion {
        listeJustificatif: Array<IJustificatifsAssurance>;
        listeNatureJustificatif: Array<INatureJustif>;
        identifiantAssurance: string;
        libelleTypeAssurance: string;
        datePriseEffet: string;
        dateFinEffet: string;
        dateCloture: string;
        dateAnnulationModification: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantPersonneEstAssure: string;
        denominationGarant: string;
        destinataireLettreImpaye: string;
        identifiantCredit: string;
        identifiantConvention: string;
        numeroExterneConvention: string;
        identifiantIntervenant: string;
        numeroRelatif: number;
        indicateurBanalise: string;
        codeModificationAutorise: string;
        codeEtablissement: number;
        competurMiseAJour: number;
        codeDevise: string;
    }
    interface IAssuranceGlobale extends IElementGestion {
        listeAssurance: Array<IAssuranceCredit>;
    }
    interface IAssuranceCreditParams {
        codeEtablissement: string;
        identifiantCredit: string;
        dateTraitement: string;
    }
}

declare module Avenants.Rest.Modeles {
    interface IElementGestion {
        retourQR: Array<Commun.Modeles.IRetourQR>;
    }
}

declare module Avenants.Rest.Modeles {
    interface IPersonneEmprunteur {
        codeEtablissement: number;
        identifiantEmprunteur: string;
        identifiantPersonne: string;
        numeroOrdrePersonne: number;
        codeTypePersonne: string;
        typeRolePersonne: string;
        codeCivilite: string;
        nomOuRaisonSociale: string;
        prenoms: string;
        dateDeNaissance: string;
        codeSituationFamiliale: string;
    }
    interface INouvelEmprunteur {
        codeEtablissement: number;
        identifiantEmprunteur: string;
        libelleTiers: string;
        codeTypePersonne: string;
        adresseLigne1: string;
        adresseLigne1Bis: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4CodePostal: string;
        adresseLigne5Commune: string;
        libellePaysLocalisation: string;
    }
    interface IEmprunteurGlobal extends IElementGestion {
        listePersonneEmprunteur: Array<IPersonneEmprunteur>;
        listeNouvelEmprunteur: Array<INouvelEmprunteur>;
    }
    interface IPersonneEmprunteurParams {
        codeEtablissement: string;
        dateTraitement: string;
        identifiantCredit: string;
        identifiantEmprunteur: string;
    }
}

declare module Avenants.Rest.Modeles {
    interface IDossierCredit {
        identifiantCaisse: number;
        identifiantDossierCommercial: string;
        identifiantEmprunteur: string;
        libelleTiers: string;
        identifiantElementStructure: string;
        libelleElementStructure: string;
        codeEtatDossierGestion: string;
        montantEmpruntTotal: number;
        codeDevise: string;
        dateCreation: string;
        identifiantCreditElementaire: string;
        identifiantOperationFinancement: string;
        identifiantDossierOrigine: string;
        typeEngagement: string;
        listeCredit: Array<ICredit>;
        typeDeLoi: string;
        notationEngagementBale2: string;
    }
    interface ICredit {
        identifiantCaisse: number;
        identifiantCredit: string;
        identifiantDossierCommercial: string;
        libelleNatureFinancement: string;
        montantActualiseCredit: number;
        dateEffet: string;
        libelleCourtProduit: string;
        dureeCredit: number;
        codeDevise: string;
        uniteDureeCredit: string;
        identifiantAncienCredit: string;
        dateEcheance: string;
        libelleEtatCredit: string;
        dateMERZero: string;
        indicateurGestionCentralisee: boolean;
    }
    interface IEmprunteur {
        identifiantEmprunteur: string;
        listeSynchro: Array<IDossierCredit>;
        listeGecco: Array<ICaracteristiqueOperation>;
    }
    interface ICaracteristiqueOperation {
        codeEtablissement: number;
        identifiantOperationFinancement: string;
        identifiantDossierAlis: string;
        libelleOperation: string;
        montantOperation: number;
        dateDebutOperation: string;
        dateFinValidite: string;
        listeDossierCredit: Array<IDossierCredit>;
    }
    interface IRecherche extends IElementGestion {
        listeEmprunteur: Array<IEmprunteur>;
        libelleTiers: string;
    }
    interface IRechercheParams {
        codeEtablissement: string;
        dateTraitement?: string;
        identifiantPersonne?: string;
        identifiantDossierAlis?: string;
        identifiantCredit?: string;
        identifiantDossierCommercial?: string;
        identifiantOperation?: string;
    }
}

declare module Avenants.Rest.Services {
    interface IAssuranceService {
        getAssurances(codeEtablissement: string, idCredit: string): ng.IPromise<Modeles.IAssuranceGlobale>;
    }
}

declare module Avenants.Rest.Services {
    interface IEmprunteurService {
        getRecherche: (codeEtablissement: string, idPersonne: string, idCredit: string, idDossier: string) => ng.IPromise<Modeles.IRecherche>;
        getEmprunteurGlobal(codeEtablissement: string, idCredit: string, idEmprunteur: string): ng.IPromise<Modeles.IEmprunteurGlobal>;
    }
}

declare module Avenants.Rest.Constantes {
    module Services {
        module Emprunteur {
            const urlRecherche: string;
            const urlEmprunteurGlobal: string;
        }
        module Credit {
            const urlAssurances: string;
        }
    }
}

declare module Avenants.Rest.Services {
    interface ICommunService {
        consume: <T>(typeMethode: MyWay.Services.MethodEnum, urlService: string, dataParams: any) => ng.IPromise<T>;
    }
}
