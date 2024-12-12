declare module Portefeuille.Modeles.Rest.SyntheseCorporateV1.flux {
    export interface IInfosFlux {
        /**
         * Le code établissement / le numéro de l'établissement / numéro agence CE du client.
         */
        codeEtablissement: string;
        /**
         * Le numéro de personne / identifiant client.
         */
        identifiantPersonne: number;
        /**
         * Le flux pour année N
         */
        fluxAnneeN: IInfosFluxN;
        fluxAnneeNmoins1: IInfosFluxNmoins1;
    }

    export interface IInfosFluxNmoins1 {
        /**
         * Le montant des prélèvements au débit
         */
        prelevementDebit: number;
        /**
         * Le montant des virements au crédit
         */
        virementCredit: number;
        /**
         * Le montant des virements au débit.
         */
        virementDebit: number;
        /**
         * Le montant des chèques au crédit.
         */
        chequesCredit: number;
        /**
         * Le montant des chèques au débit.
         */
        chequesDebit: number;
        /**
         * Le montant des cartes bancaires au crédit.
         */
        carteBancaireCredit: number;
        /**
         * Le montant des cartes bancaires au débit.
         */
        carteBancaireDebit: number;
        /**
         * Le montant des espèces au crédit.
         */
        especeCredit: number;
        /**
         * Le montant des espèces au débit.
         */
        especeDebit: number;
        /**
         * Le montant effets escompte crédit.
         */
        effetsEscompte: number;
        /**
         * Le montant effets encaissement Cr.
         */
        effetsEncaissement: number;
        /**
         * Le montant des effets au débit.
         */
        effetDebit: number;
        /**
         * Somme des montants de flux créditeurs du mois quelle que soit l'opération
         */
        fluxCrediteurs: number;
        /**
         * Somme des montants des mouvements créditeurs réels du mois
         */
        fluxCrediteursReels: number;
        /**
         * Somme des montants de flux débiteurs du mois quelle que soit l'opération
         */
        fluxDebiteurs: number;
        /**
         * Somme des montants des mouvements débiteurs réels du mois
         */
        fluxDebiteursReels: number;
    }

    export interface IInfosFluxN {
        /**
         * Le montant des prélèvements au débit
         */
        prelevementDebit: number;
        /**
         * Le montant des virements au crédit
         */
        virementCredit: number;
        /**
         * Le montant des virements au débit.
         */
        virementDebit: number;
        /**
         * Le montant des chèques au crédit.
         */
        chequesCredit: number;
        /**
         * Le montant des chèques au débit.
         */
        chequesDebit: number;
        /**
         * Le montant des cartes bancaires au crédit.
         */
        carteBancaireCredit: number;
        /**
         * Le montant des cartes bancaires au débit.
         */
        carteBancaireDebit: number;
        /**
         * Le montant des espèces au crédit.
         */
        especeCredit: number;
        /**
         * Le montant des espèces au débit.
         */
        especeDebit: number;
        /**
         * le montant effets escompte crédit.
         */
        effetsEscompte: number;
        /**
         * Le montant effets encaissement Cr
         */
        effetsEncaissement: number;
        /**
         * Le montant des effets au débit.
         */
        effetDebit: number;
        /**
         * Somme des montants de flux créditeurs du mois quelle que soit l'opération
         */
        fluxCrediteurs: number;
        /**
         * Somme des montants des mouvements créditeurs réels du mois
         */
        fluxCrediteursReels: number;
        /**
         * Somme des montants de flux débiteurs du mois quelle que soit l'opération
         */
        fluxDebiteurs: number;
        /**
         * Somme des montants des mouvements débiteurs réels du mois
         */
        fluxDebiteursReels: number;
    }

    export interface IIdentifiantFlux {
        /**
         * Le code établissement / le numéro de l'établissement / numéro agence CE du client.
         */
        codeEtablissement: string;
        /**
         * Le numéro de personne / identifiant client.
         */
        identifiantPersonne: number;
    }
}