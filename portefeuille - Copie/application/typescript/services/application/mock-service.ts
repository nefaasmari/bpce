/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service Permettant l'usage d'un mock
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant l'usage d'un mock pour injecté des nouveau indicateur
     */
    class MockService implements IMockService {
        public static CLASS_NAME = "MockService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(MockService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [];

        // Variables utiles

        /**
         * Constructeur
         */
        constructor() { }

        /**
         * ajouter un Leader
         * pour simuler l'indicateur leader en attendant l'évolution du service REST
         * @param relationCommerciale
         */
        public ajouterLeader(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale {
            for (let itemPortefeuille of relationCommerciale.listePortefeuilles) {
                for (let itemRelation of itemPortefeuille.listeRelation) {
                    for (let itemClient of itemRelation.listeClient) {
                        let indicateur = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                        indicateur.code = "leader";
                        indicateur.valeur = itemClient.codeLeaderEspaceEntreprise === "L" ? "O" : "N";
                        indicateur.dateMaj = "31/12/2100";
                        itemClient.listeIndicateurClient.push(indicateur);
                    }
                }
            }
            console.log("--> XXXX relationCommerciale avec leader : ", relationCommerciale);
            return relationCommerciale;
        }

        /**
         * ajouter un Leader
         * pour simuler l'indicateur leader en attendant l'évolution du service REST
         * @param relationCommerciale
         */
        public ajouterObjectif(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale {
            for (let itemPortefeuille of relationCommerciale.listePortefeuilles) {
                for (let itemRelation of itemPortefeuille.listeRelation) {
                    for (let itemClient of itemRelation.listeClient) {
                        let indicateur = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                        indicateur.code = "OBJECTIF_FLUX";
                        indicateur.valeur = this.getRandomInt(100);
                        indicateur.dateMaj = "31/12/2100";
                        itemClient.listeIndicateurClient.push(indicateur);
                    }
                }
            }
            console.log("--> XXXX relationCommerciale avec leader : ", relationCommerciale);
            return relationCommerciale;
        }

        /**
         * ajouter un encours BDF
         * pour simuler l'indicateur leader en attendant l'évolution du service REST
         * @param relationCommerciale
         */
        public ajouterEncoursBDF(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale {
            for (let itemPortefeuille of relationCommerciale.listePortefeuilles) {
                for (let itemRelation of itemPortefeuille.listeRelation) {
                    for (let itemClient of itemRelation.listeClient) {
                        let indicateur = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                        indicateur.code = "ENCOURS_BDF";
                        indicateur.valeur = this.getRandomInt(100);
                        indicateur.dateMaj = "31/12/2100";
                        itemClient.listeIndicateurClient.push(indicateur);
                    }
                }
            }
            // console.log("--> XXXX relationCommerciale avec encours BDF : ", relationCommerciale);
            return relationCommerciale;
        }

        /**
         * ajouter un bagacli
         * pour simuler l'indicateur begacli en attendant l'évolution du service REST
         * @param relationCommerciale
         */
        public ajouterBegacli(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale {
            for (let itemPortefeuille of relationCommerciale.listePortefeuilles) {
                for (let itemRelation of itemPortefeuille.listeRelation) {
                    for (let itemClient of itemRelation.listeClient) {
                        let indicateur = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>{};
                        indicateur.code = "BEGACLI";
                        indicateur.valeur = this.getRandomBegacli();
                        indicateur.dateMaj = "31/12/2100";
                        itemClient.listeIndicateurClient.push(indicateur);
                    }
                }
            }
            // console.log("--> XXXX relationCommerciale avec begacli : ", relationCommerciale);
            return relationCommerciale;
        }

        /**
         * NOUVEL INDICATEUR, ajouterBouchonIndicateurClient
         * ajout indicateur client par bouchon dynamique.
         * @param query
         * @param code
         * @param client
         */
        public ajouterBouchonIndicateurClient(
            query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree,
            code: string,
            client: Modeles.Rest.PortefeuilleV1.client.IClient): Modeles.Rest.PortefeuilleV1.client.IClient {
            console.log("--> ajouterBouchonIndicateurClient recherche : ", code);
            let indicateurRevue: Modeles.Rest.PortefeuilleV1.client.IIndicateur;
            let indicateur: Modeles.Rest.PortefeuilleV1.client.IIndicateur;
            if (_.indexOf(query.listeIndicateurs, code) < 0) {
                console.log("--> ajouterBouchonIndicateurClient trouve !");
                for (let itemClientIndicateur of client.listeClientIndicateur) {
                    indicateurRevue = _.find(itemClientIndicateur.listeIndicateurClient, { code : "DateDerniereRevue" });
                    //console.log("--> ajouterBouchonIndicateurClient itemClientIndicateur : ", itemClientIndicateur, code);
                    indicateur = <Modeles.Rest.PortefeuilleV1.client.IIndicateur>{};
                    indicateur.code = code;
                    indicateur.valeur = indicateurRevue ? indicateurRevue.valeur : "";
                    indicateur.dateMaj = "31/12/2100";
                    // Pour la 1ère fois qu'on ajoute l'indicateur dans la liste
                    if (!itemClientIndicateur.listeIndicateurClient) {
                        itemClientIndicateur.listeIndicateurClient = Array<Modeles.Rest.PortefeuilleV1.client.IIndicateur>();
                    }
                    itemClientIndicateur.listeIndicateurClient.push(indicateur);
                }
            }
            return client;
        }

        /**
         * NOUVEL INDICATEUR, pour bouchon en attedant service REST
         * @param max
         */
        private getRandomInt(max: number): string {
            let i: number = Math.floor(Math.random() * max);
            // console.log("-->  random i : ", i);
            if (i === 0) {
                return null;
            } else {
                return (i - 1).toString();
            }
        }

        /**
         * NOUVEL INDICATEUR, pour bouchon en attedant service REST
         */
        private getRandomBegacli(): string {
            // onajoute en 1er le nombre de majuscules dans le texte begacli
            let i: number = Math.floor(Math.random() * 4);
            if (i === 0) {
                return null;
            } else {
                return this.getRandom("B", "b") + this.getRandom("E", "e") + this.getRandom("G", "g")
                    + this.getRandom("A", "a") + this.getRandom("C", "c") + this.getRandom("L", "l") + this.getRandom("I", "i");
            }
        }

        private getRandom(a: string, b: string): string {
            let i: number = Math.floor(Math.random() * 2);
            if (i === 0) {
                return a;
            } else {
                return b;
            }
        }

    }




    /**
     * Interface de la classe EventService
     */
    export interface IMockService {
        ajouterLeader(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;

        ajouterObjectif(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;

        ajouterEncoursBDF(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;

        ajouterBegacli(
            relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;

        ajouterBouchonIndicateurClient(
            query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree,
            code: string,
            client: Modeles.Rest.PortefeuilleV1.client.IClient): Modeles.Rest.PortefeuilleV1.client.IClient;
    }

    // Déclaration du service
    app.service(Constantes.Inject.Services.mockService, MockService);
}  