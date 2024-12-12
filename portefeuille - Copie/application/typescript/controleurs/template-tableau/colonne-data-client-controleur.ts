/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs.TemplateTableau {
    "use strict";

    export class ColonneDataClientControleur {
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Services.eventService
        ];

        public indicateurActif: string;
        public indicateurInactif: string;
        public indicateurLeader: string;
        public indicateurProspect: string;
        public indicateurPremierEquipement: string;

        
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $scope: ng.IScope,
            private eventService: Services.Application.IEventService
        ) {
            this.indicateurActif = Constantes.Application.CHAINE_INDICATEUR_ACTIF;
            this.indicateurInactif = Constantes.Application.CHAINE_INDICATEUR_INACTIF;
            this.indicateurProspect = Constantes.Application.CHAINE_INDICATEUR_PROSPECT;
            this.indicateurLeader = Constantes.Application.CHAINE_INDICATEUR_LEADER;
        }

        /**
         * Méthode qui permet de récupérer la valueur de la note du prospect
         * @param client
         */
        public getNoteProspect(client: Modeles.Application.IClient): number {
            // Recherche de l'indicateur potentiel prospect (La liste peux ne renvoyer aucun indicateur ou 1 indicateur)
            let indicateur: Modeles.Application.IIndicateur =
                _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.POTENTIEL_PROSPECT });
            // Retourne l'indexe ou 0 si pas d'indicateur ou valeur null
            return (indicateur && indicateur.valeur) ?
                _.indexOf(Constantes.Application.LIBELLE_NOTE_PROSPECT, indicateur.valeur) : 0;
        }

        /**
         * 
         * @param client
         * @param numero
         */
        public afficherEtoile(client: Modeles.Application.IClient, numeroEtoile: number) {
            let noteProspect = this.getNoteProspect(client);
            return noteProspect
                && noteProspect > 0
                && noteProspect >= numeroEtoile; 
        }

        /**
         * Méthode qui renvoie true si l'indicateur codeTypePersonne = 'prospect'
         * @param client
         */
        public isProspect(client: Modeles.Application.IClient): boolean {
            return !client.estClient;
        }

        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Actif'
         * @param client
         */
        public isActif(client: Modeles.Application.IClient): boolean {
            return !this.isProspect(client)
                && client.estActifRenseigne
                && client.estActif;
        }

        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Inactif'
         * @param client
         */
        public isInactif(client: Modeles.Application.IClient): boolean {
            return !this.isProspect(client)
                && client.estActifRenseigne
                && !client.estActif
                && !this.isSansContrat(client);
        }

        /**
         * Méthode qui renvoie true si le client est sans contrat (et qu'il n'est pas prospect)
         * @param client
         */
        public isSansContrat(client: Modeles.Application.IClient): boolean {
            return client.estSansContrat
                && client.estClient;
        }

        public isPremierEquipement(client: Modeles.Application.IClient): boolean {
            let indicateur: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG });
            // Retourne l'indexe ou 0 si pas d'indicateur ou valeur null
            if (indicateur
                && indicateur.valeur
                && indicateur.valeur !== ""
                && indicateur.valeur !== Constantes.Application.CHAINE_INDICATEUR_NON_CONNU) {
                this.indicateurPremierEquipement = `: ${indicateur.valeur}`;
                return true;
            } else {
                return false;
            }
        }
    }

    app.controller("ColonneDataClientControleur", ColonneDataClientControleur);
} 