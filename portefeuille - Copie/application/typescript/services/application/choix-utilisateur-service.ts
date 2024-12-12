/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de choix Utilisateur
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer le choix utilisateur
     */
    class ChoixUtilisateurService implements IChoixUtilisateurService {
        public static CLASS_NAME = "ChoixUtilisateurService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ChoixUtilisateurService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Services.gestionAffectationRestService,
            Constantes.Inject.Services.rechercheAgentRestService,
            Constantes.Inject.Services.edsNiveauInferieurService,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Angular.$q
        ];

        // Variables utiles
        private _edsSelectionne: Modeles.Application.IAgenceEds;

        /**
         * Constructeur
         */
        constructor(
            private gestionAffectationService: Services.Rest.AgentV2.gestionAffectation.IGestionAffectationService,
            private rechercheAgentService: Services.Rest.AgentV2.recherche.IRechercheAgentService,
            private edsNiveauInferieurService: Services.Rest.StructureV2.edsNiveauInferieur.IEdsNiveauInferieurService,
            private contexteService: Services.Application.IContexteService,
            private $q: ng.IQService
        ) { }

        /**
         * Methode permetant de récupérer la liste des agences
         * @param identifiantEds
         * @return {MyWay.Services.IPromesse<Array<Modeles.Application.IAgence>>}
         */
        public rechercherListeAgence(identifiantEds: number): ng.IPromise<Array<Modeles.Application.IAgenceEds>> {
            return this.contexteService.getContexte()
                .then((contexte: Modeles.Application.IContexte) => {
                    let query = <Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectationQuery>{};
                    query.codeEtablissement = contexte.codeEtablissement;
                    query.codeAgentAffectation = identifiantEds;
                    query.dateDebutPeriodeAffectation = moment().format(Constantes.Application.FORMAT_DATE_REST);
                    //  query.niveau2 = "1";  // pas besoin

                    return this.gestionAffectationService.getGestionAffectation(query);
                }).then((gestionAffectation: Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectation) => {
                    let listeAgences = [];

                    _.forEach(gestionAffectation.listeGestionAffectationAgent, (affectation: Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectationAgent) => {
                        let agence = <Modeles.Application.IAgenceEds>{};
                        agence.id = affectation.identifiantEDSRattachement; // ou identifiantEDSAffectation
                        agence.nomEds = affectation.libelleEDSRattachement;
                        agence.affiche = false;
                        listeAgences.push(agence);
                    });
                    return listeAgences;
                });
        }

        /**
         * Methode permetant de récupérer la liste des agents
         * @return {MyWay.Services.IPromesse<Array<Modeles.Application.ICaracteristiquesAgent>>}
         */
        public rechercherAgent(identifiantEdsAgence: number): ng.IPromise<Array<Modeles.Application.ICaracteristiquesAgent>> {
            let deferred = this.$q.defer<Array<Modeles.Application.ICaracteristiquesAgent>>();

            this.contexteService.getContexte()
                .then((contexte: Modeles.Application.IContexte) => {
                    let query = <Modeles.Rest.AgentV2.recherche.IRechercheAgentQuery>{};
                    query.codeEtablissement = contexte.codeEtablissement;
                    query.codeAction = Constantes.Rest.AGENT_V2_CODE_ACTION_1;
                    //query.typeRecherche = Constantes.Rest.AGENT_V2_TYPE_RECHERCHE_AGENCE_RATTACHEMENT;
                    query.typeRecherche = Constantes.Rest.AGENT_V2_TYPE_RECHERCHE_GROUPE_FONCTION;
                    query.identifiantEDSRattachement = identifiantEdsAgence;
                    query.groupeFonction = Constantes.Rest.AGENT_V2_RECHERCHE_GROUPE_FONCTION_BDR;

                    return this.rechercheAgentService.getListeCaracteristiquesAgent(query);
                })
                .then((rechercheAgent: Modeles.Rest.AgentV2.recherche.IRechercheAgent) => {
                    let listeEds: Array<Modeles.Application.ICaracteristiquesAgent> = [];

                    _.forEach(rechercheAgent.listeAgents, (agent: Modeles.Rest.AgentV2.recherche.IAgent) => {
                        if (agent.identifiantEDSHierarchique === identifiantEdsAgence) {
                            let caracteristiquesAgent = <Modeles.Application.ICaracteristiquesAgent>{};
                            caracteristiquesAgent.designationAgent = agent.designationAgent;
                            caracteristiquesAgent.identifiantElementStructure = agent.identifiantElementStructure;
                            caracteristiquesAgent.libelleFonction = agent.libelleFonction;
                            caracteristiquesAgent.codeEtablissement = agent.codeEtablissement;
                            caracteristiquesAgent.identifiantAgent = agent.identifiantAgent;
                            listeEds.push(caracteristiquesAgent);
                        }
                    });

                    deferred.resolve(listeEds);
                })
                .catch((error: MyWay.Services.Erreur) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        // récupère tous les EDS de niveaux inférieurs
        // on va retourner les postes fonctionnels dans .infoPosteFonctionnel et les autres dans .infoEDS qui seront affichés comme des dossiers pour descendre d'un niveau
        public rechercherEdsInferieurs(edsAgence: Modeles.Application.IAgenceEds): ng.IPromise<Modeles.Application.IAgenceEds> {
            let deferred = this.$q.defer<Modeles.Application.IAgenceEds>();

            this.contexteService.getContexte()
                .then((contexte: Modeles.Application.IContexte) => {
                    let query = <Modeles.Rest.StructureV2.edsniveauinferieur.IEdsniveauinferieurQuery>{};
                    query.codeEtablissement = contexte.codeEtablissement;
                    query.identifiantInterneEDS = edsAgence.id;

                    return this.edsNiveauInferieurService.getEdsNiveauInferieur(query);
                })
                .then((resultat: Modeles.Rest.StructureV2.edsniveauinferieur.IEdsNiveauInferieur) => {
                    let listeEds: Modeles.Application.IAgenceEds[] = <Modeles.Application.IAgenceEds[]> [];

                    // récupère aussi les autres éléments de structure dans .infoEDS et les afficher dans des dossiers. 
                    // Au clic on ira recharger la vue de sélection des PTFS avec cette nouvelle réponse.
                    _.forEach(resultat.infoEDS, (infoEDS: Modeles.Rest.StructureV2.edsniveauinferieur.IInfoEDS) => {
                        let caracteristiquesAgence = <Modeles.Application.IAgenceEds>{};
                        caracteristiquesAgence.id = infoEDS.identifiantInterneEDS;
                        caracteristiquesAgence.nomEds = infoEDS.libelleEDS;
                        caracteristiquesAgence.agencesSuperieur = edsAgence;
                        caracteristiquesAgence.agencesInferieur = null;
                        caracteristiquesAgence.typeEDS = infoEDS.typeEDS;
                        caracteristiquesAgence.libelleTypeEDS = infoEDS.libelleTypeEDS;
                        caracteristiquesAgence.affiche = false;

                        listeEds.push(caracteristiquesAgence);
                    });
                    edsAgence.agencesInferieur = listeEds;
                    deferred.resolve(edsAgence);
                })
                .catch((error: MyWay.Services.Erreur) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        /**
         * 
         */
        public get edsSelectionne(): Modeles.Application.IAgenceEds {
            return this._edsSelectionne;
        }

        /**
         * 
         */
        public set edsSelectionne(eds: Modeles.Application.IAgenceEds) {
            this._edsSelectionne = eds;
        }
    }

    /**
     * Interface de la classe ChoixUtilisateurService
     */
    export interface IChoixUtilisateurService {
        rechercherListeAgence(identifiantEds: number): ng.IPromise<Array<Modeles.Application.IAgenceEds>>;
        rechercherAgent(identifiantEdsAgence: number): ng.IPromise<Array<Modeles.Application.ICaracteristiquesAgent>>;
        rechercherEdsInferieurs(edsAgence: Modeles.Application.IAgenceEds): ng.IPromise<Modeles.Application.IAgenceEds>;
        edsSelectionne: Modeles.Application.IAgenceEds;
    }


    // Déclaration du service
    app.service("ChoixUtilisateurService", ChoixUtilisateurService);
}  