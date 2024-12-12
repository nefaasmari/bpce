
declare module calculatrice {
    var app: any;
}

declare module calculatrice {
    class CalculatriceControleur {
        private $scope;
        private calculatriceService;
        /**
         * liste des périodicité possibles
         */
        listePeriodicite: Array<Enum.Periodicite>;
        /**
         * liste des modes de calculs dusponibles
         */
        listeModeCalcul: Array<string>;
        /**
         * liste des intérêts du différé total possibles
         */
        listeDiffereTotalInterets: Array<string>;
        /**
         * liste des type d'assurance possible
         */
        listeTypeAssurance: Array<string>;
        /**
         * Informations relatives au calcul
         */
        calcul: Calcul;
        /**
         * Résultat du calcul
         */
        resultat: IResultat;
        /**
         * boolean = true si les erreurs du formulaire doivent être affichées
         */
        afficherErreurs: boolean;
        /**
         * boolean = true si le tableau d'amortissement doit être affiché.
         */
        panelTableauAmortissementOpen: boolean;
        /**
         * boolean = true si le résultat doit être affiché.
         */
        panelResultatOpen: boolean;
        /**
         * état global de l'accordeon des phases (différés et amortissement) : ouvert, mixte ou ferme.
         */
        accordeonPhasesEtat: string;
        /**
         * état global de l'accordeon des accessoires (assurances et frais) : ouvert, mixte ou ferme.
         */
        accordeonAccessoiresEtat: string;
        /**
         * boolean = true si le formulaire doit être affiché dans son intégralité
         */
        afficherFormulaireComplet: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, calculatriceService: CalculatriceService);
        /**
         * Retourne true si le mode de calcul est Amortissement progressif avec quotité
         */
        isAmortissementProgressifAvecQuotite(): boolean;
        /**
         * @description Vérifie si le champs de saisie Montant doit être activé.
         * Seul 3 des 4 champs "Montant", "Durée", "Taux" et "Echéance" peuvent être saisis.
         * @returns {boolean} true si le champs Montant doit être activé, false sinon.
         */
        isInputMontantGlobalActive(): boolean;
        /**
         * @description Vérifie si le champs de saisie Durée doit être activé.
         * Seul 3 des 4 champs "Montant", "Durée", "Taux" et "Echéance" peuvent être saisis.
         * @returns {boolean} true si le champs Durée doit être activé, false sinon.
         */
        isInputDureeGlobaleActive(): boolean;
        /**
         * @description Vérifie si le champs de saisie Taux doit être activé.
         * Seul 3 des 4 champs "Montant", "Durée", "Taux" et "Echéance" peuvent être saisis.
         * @returns {boolean} true si le champs Taux doit être activé, false sinon.
         */
        isInputTauxGlobalActive(): boolean;
        /**
         * @description Vérifie si le champs de saisie Echéance doit être activé.
         * Seul 3 des 4 champs "Montant", "Durée", "Taux" et "Echéance" peuvent être saisis.
         * @returns {boolean} true si le champs Echéance doit être activé, false sinon.
         */
        isInputEcheanceGlobaleActive(): boolean;
        /**
         * @description Vérifie si le deuxième amortissement doit être affiché.
         * @returns {boolean} true si le deuxième amortissement doit être affiché.
         */
        isAmortissement2Affiche(): boolean;
        /**
         * Contrôles sur les champs : Données globales
         */
        isMontantGlobalObligatoire(): boolean;
        isDureeGlobaleObligatoire(): boolean;
        isEcheanceGlobaleObligatoire(): boolean;
        isTauxGlobalObligatoire(): boolean;
        /**
         * Contrôles sur les champs : Différé Total
         */
        isDureeDiffereTotalObligatoire(): boolean;
        isTauxDiffereTotalObligatoire(): boolean;
        /**
         * Contrôles sur les champs : Différé d'amortissement
         */
        isDureeDiffereAmortissementObligatoire(): boolean;
        isTauxDiffereAmortissementObligatoire(): boolean;
        /**
         * Contrôles sur les champs : Amortissement
         */
        isQuotiteAmortissementObligatoire(): boolean;
        isDureeAmortissementObligatoire(): boolean;
        isTauxAmortissementObligatoire(): boolean;
        isDureeAmortissement2Obligatoire(): boolean;
        isTauxAmortissement2Obligatoire(): boolean;
        /**
         * @description méthode utilitaire pour vérifier la nullité d'un champs number.
         * mw-number a tendance a transformer les number vide en NaN et mw-montant transforme un undefined en chaine vide ...
         */
        private isNumberEmpty(value);
        /**
         * @description Vérifie si le taux passé en paramètre est compris entre 0.01 et 20 inclus.
         * @param taux {number}
         * @returns {boolean} true si le taux est valide.
         */
        isTauxValide(taux: number): boolean;
        /**
         * @description Vérifie si la quotité passée en paramètre est comprise entre 0.01 et 100 inclus.
         * @param quotité {number}
         * @returns {boolean} true si la quotité est valide.
         */
        isQuotiteValide(quotite: number): boolean;
        /**
         * @description Vérifie si la durée passée en paramètre est valide
         * @param durée {number}
         * @returns {boolean} true si la durée est valide, false sinon.
         */
        isDureeValide(duree: number): boolean;
        /**
         * @description Récupère le message d'erreur correspondant si la durée n'est pas valide. null sinon.
         * @param durée {number}
         * @returns {string} le message d'erreur, null s'il n'y a pas d'erreur.
         */
        getDureeMessageErreur(duree: number): string;
        private isChampsGlobauxTousSaisis();
        isMontantGlobalValide(): boolean;
        isDureeGlobaleValide(): boolean;
        isTauxGlobalValide(): boolean;
        isEcheanceGlobaleValide(): boolean;
        isDateEcheancesValide(): boolean;
        isDureeDiffereTotalValide(): boolean;
        isTauxDiffereTotalValide(): boolean;
        isDureeDiffereAmortissementValide(): boolean;
        isTauxDiffereAmortissementValide(): boolean;
        isQuotiteAmortissementValide(): boolean;
        isDureeAmortissementValide(): boolean;
        isTauxAmortissementValide(): boolean;
        isDureeAmortissement2Valide(): boolean;
        isTauxAmortissement2Valide(): boolean;
        isQuotiteAssuranceEmprunteurValide(): boolean;
        isTauxAssuranceEmprunteurValide(): boolean;
        isMontantAssuranceEmprunteurValide(): boolean;
        isQuotiteAssuranceCoemprunteurValide(): boolean;
        isTauxAssuranceCoemprunteurValide(): boolean;
        isMontantAssuranceCoemprunteurValide(): boolean;
        isTauxFraisDeDossierValide(): boolean;
        isMontantFraisDeDossierValide(): boolean;
        isTauxFraisDeGarantieValide(): boolean;
        isMontantFraisDeGarantieValide(): boolean;
        private isZoneChampsGlobauxValide();
        private isZoneDiffereTotalValide();
        private isZoneDiffereAmortissementValide();
        private isZoneAmortissementValide();
        private isZoneAmortissement2Valide();
        private isZoneAssurancesValide();
        private isZoneFraisValide();
        /**
         * @description Vérifie si le formulaire est valide.
         * @returns {boolean} true si le formulaire est valide, false sinon.
         */
        isFormulaireValide(): boolean;
        /**
         * Action à la modification du taux global
         */
        changeTauxGlobal(): void;
        /**
         * Action au clic sur le taux directeur
         */
        clickTauxDirecteur(): void;
        /**
         * Action au changement d'une durée de différé total ou différé d'amortissement
         * Attention la directive mw-montant retourne une string et non un number.
         */
        changeDureeDiffere(): void;
        /**
         * Action au changement d'une durée d'amortissement
         */
        changeDureeAmortissement(): void;
        /**
         * @description Lance le calcul de la simulation.
         */
        calculer(): void;
        /**
         * @description Permet la modification du calcul
         */
        modifierCalcul(): void;
        /**
         * @description Iniialisation d'un nouveau calcul
         */
        nouveauCalcul(): void;
        /**
         * Réinitilise le bloc Résultat et Tableau d'amortissement
         */
        private resetResultat();
        /**
         * Réinitialise le bloc calcul
         */
        private resetCalcul();
    }
}

declare module calculatrice {
    class CalculatriceDTOService {
        constructor();
        /**
         * Convertit la Periodicité en code Ascii correspondant
         */
        convertToAscii(periodicite: Enum.Periodicite): number;
        /**
         * Convertit un objet Calcul en dto ICalculerCaracteristiqueCreditRequest
         */
        convertToDTO(calcul: Calcul): ICalculerCaracteristiqueCreditRequest;
    }
}

declare module calculatrice {
    class CalculatriceService {
        private serviceAgent;
        private dtoService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, dtoService: CalculatriceDTOService);
        calculer(calcul: Calcul): ng.IPromise<IResultatCalculSimple>;
    }
}

declare module calculatrice {
}

declare module calculatrice {
    class DiffereTotal {
        /**
         * Durée en mois du différé total
         */
        duree: number;
        /**
         * Taux en pourcentage du différé total
         */
        taux: number;
        /**
         * Mode d'intérets : Capitalisation ou Recouvrement
         */
        interets: string;
        constructor();
    }
    class DiffereAmortissement {
        /**
         * Durée en mois du différé d'amortissement
         */
        duree: number;
        /**
         * Taux en pourcentage du différé d'amortissement
         */
        taux: number;
    }
    class Amortissement {
        /**
         * Durée en mois de l'amortissement
         */
        duree: number;
        /**
         * Taux en pourcentage de l'amortissement
         */
        taux: number;
        /**
         * Quotité de l'amostissement
         */
        quotite: number;
    }
    class Emprunteur {
        /**
         * Taux en pourcentage de l'emprunteur
         */
        taux: number;
        /**
         * Montant en euros de l'emprunteur
         */
        montant: number;
        /**
         * Quotité de l'emprunteur
         */
        quotite: number;
    }
    class Assurances {
        /**
         * Type d'assurance : Calcul sur capital restant ou Calcul sur capital restant dû.
         */
        typeAssurance: string;
        /**
         * Emprunteur
         */
        emprunteur: Emprunteur;
        /**
         * Co-emprunteur
         */
        coemprunteur: Emprunteur;
        constructor();
    }
    class Frais {
        /**
         * Frais de dossier en pourcentage. Les frais de dossier ne peuvent pas être renseignés en pourcentage ET en euros simultanément.
         */
        fraisDossierPourcentage: number;
        /**
         * Frais de dossier en euros. Les frais de dossier ne peuvent pas être renseignés en pourcentage ET en euros simultanément.
         */
        fraisDossierEuros: number;
        /**
         * Frais de garantie en pourcentage. Les frais de garantie ne peuvent pas être renseignés en pourcentage ET en euros simultanément.
         */
        fraisGarantiePourcentage: number;
        /**
         * Frais de garantie en euros. Les frais de garantie ne peuvent pas être renseignés en pourcentage ET en euros simultanément.
         */
        fraisGarantieEuros: number;
    }
    class Calcul {
        /**
         * montant global du crédit
         */
        montantGlobal: number;
        /**
         * durée globale du crédit
         */
        dureeGlobale: number;
        /**
         * taux global du crédit
         */
        tauxGlobal: number;
        /**
         * échéance globale du crédit
         */
        echeanceGlobale: number;
        /**
         * taux directeur
         */
        tauxDirecteur: boolean;
        /**
         * date des échéances
         */
        dateEcheances: Date;
        /**
         * périodicité du crédit
         */
        periodicite: Enum.Periodicite;
        /**
         * mode de calcul du crédit
         */
        modeCalcul: string;
        /**
         * propriétés du différé total
         */
        differeTotal: DiffereTotal;
        /**
         * propriétés du différé d'amortissement
         */
        differeAmortissement: DiffereAmortissement;
        /**
         * propriétés de l'amortissement
         */
        amortissement: Amortissement;
        /**
         * propriétés de l'amortissement 2
         */
        amortissement2: Amortissement;
        /**
         * propriétés des assurances
         */
        assurances: Assurances;
        /**
         * propriétés des frais
         */
        frais: Frais;
        constructor();
    }
}

declare module calculatrice {
    interface IPhaseCreditTA {
        typePhase: string;
        periodicitePhase: number;
        nombrePeriode: number;
        tauxPhase: number;
        typeTaux: number;
        indiceCapitalRecouvrementIntr: boolean;
        quotientAmortissement: number;
        modeCalculAmortissement: number;
        dateDebutPhase: Date;
    }
    interface IAccessoireCreditTA {
        typeAccessoire: number;
        typeAccessoireAprd: number;
        typeAssiette: string;
        tauxAccessoire: number;
        quotientCouverture: number;
        montantAccessoire: number;
    }
    interface IEntreeCreditTA {
        capital: number;
        tauxProp: number;
        typeTaux: number;
        indiceTauxDirecteur: boolean;
        nombrePeriode: number;
        periodiciteCredit: number;
        dateDebutCredit: Date;
        listePhssCredit: Array<IPhaseCreditTA>;
        listeAssuranceCredit: Array<IAccessoireCreditTA>;
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
    interface IEcheanceTA {
        montantTotalEcheance: number;
        montantIntrEcheance: number;
        montantAmortissementEcheance: number;
        montantCRDSurEcheance: number;
        montantAccessoirePeriodiqueEcheance: number;
        montantIntrRepr: number;
        dateEcheance: Date;
        numeroPhaseEcheance: number;
    }
    interface IResultatCalculAvance {
        tegProp: number;
        tegActu: number;
        listeMontantAccessoireta: Array<number>;
        tauxUsur: number;
        montantPremierEcheanceHorsAssurance: number;
        montantPremierEcheanceAvecAssurance: number;
        listeEcheanceTableAmortissement: Array<IEcheanceTA>;
    }
    interface ICalculerCaracteristiqueCreditRequest {
        capitalCredit: number;
        echeanceCredit: number;
        tauxCredit: number;
        typeTaux: number;
        nombrePeriode: number;
        periodicite: number;
    }
    interface ITableauAmortissementRequest {
        dateDeTraitement: Date;
        versionWsdl: number;
        typeApplication: number;
        creditPourCalculta: IEntreeCreditTA;
    }
}

declare module calculatrice.Enum {
    enum Periodicite {
        Mensuelle,
        Trimestrielle,
        Semestrielle,
        Annuelle,
    }
}

declare module calculatrice {
    interface IResultat {
        montantSouhaite: number;
        echeance: number;
        montantAssurance?: number;
        montantEcheanceAvecAssurance?: number;
        duree: number;
        taux: number;
        teg?: number;
        coutTotal: number;
        interets?: number;
        assurances?: number;
        frais?: number;
    }
}
