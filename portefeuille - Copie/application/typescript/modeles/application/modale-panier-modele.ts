/**
 * Ensemble d'interfaces de modèles lié à la modale panier
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Modeles.Application {
    "use strict";

    /**
     * Modèle des paramètres d'une tuile catalogue
     */
    export interface ITuileCatalogueSettings {
        id: number;
        dragSettings: IDragSettings;
        indicateur: IIndicateurChoix;
        estEnEdition: boolean;
    }

    /**
     * Modèle des paramètres d'une tuile panier
     */
    export interface ITuilePanierSettings {
        id: number;
        dropSettings: IDropSettings;
        dragSettings: IDragSettings;
        indicateur: IIndicateurChoix;
        estEnEdition: boolean;
    }
} 