/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service de gestion de la liste des clients
     */
    class ListeClientsService implements IListeClientsService {
        public static CLASS_NAME = "ListeClientsService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ListeClientsService.CLASS_NAME);

        // Proprietés
        private listeRelationsEconomiques: Modeles.Application.IRelationEconomique[];
        private listeIndicateursFiltre: Modeles.Application.IIndicateurFiltre[];
        private listeTotalIdSirenClients: Array<Modeles.Rest.PortefeuilleV1.client.IClients>;
        private listePortefeuillesAvecLimite: Array<Modeles.Application.IPortefeuille>;

        private estLimiteClientsAtteinte: boolean;  //Indique que l'affichage concerne un Apporteur d'affaires avec un gros volume de clients
        private identifiantEds: number;             //identifiant EDS transmis lors de l'appel à la méthode getListeRelationsEconomiques

        private affichageModificationChoix: boolean;

        //Booléen qui indique si on vient du bloc revue ou non
        private isAccesDepuisBlocRevue: boolean;

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Angular.$window,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Services.recherchePortefeuilleRestService,
            Constantes.Inject.Services.relationCommercialeRestService,
            Constantes.Inject.Services.clientRestService,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.indicateurService,
            Constantes.Inject.Services.ihmService,
            Constantes.Inject.Services.habilitationService,
            Constantes.Inject.Services.begacliService,
            Constantes.Inject.Services.mockService, //NOUVEL_INDICATEUR
            Constantes.Inject.Services.suiviParComplementaireRestService
        ];

        /**
         * Constructeur
         * @param serviceAgentExtended
         * @param $location
         */
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private $q: ng.IQService,
            private recherchePortefeuilleService: Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleService,
            private relationCommercialeRestService: Services.Rest.RelationCommerciale.IRechercheCommercialeService,
            private clientRestService: Services.Rest.Client.IClientService,
            private contexteService: Services.Application.IContexteService,
            private indicateurService: Services.Application.IIndicateurService,
            private ihmService: Services.Application.IIhmService,
            private habilitationService: Services.Application.IHabilitationService,
            private begacliService: Services.Application.IBegacliService,
            private mockService: Services.Application.IMockService,
            private suiviParComplementaireRestService: Services.Rest.SuiviComplementaire.ISuiviComplementaireService
        ) {

            this.listeRelationsEconomiques = [];
            this.listeIndicateursFiltre = [];
        }

        public getListeRelationsEconomiquesCache(): Array<Modeles.Application.IRelationEconomique> {
            return this.listeRelationsEconomiques;
        }

        private clonerIndicateurClient(
            codeOrigine: string,
            codeCible: string,
            client: Modeles.Rest.PortefeuilleV1.client.IClient): Modeles.Rest.PortefeuilleV1.client.IClient {
            let indicateurOrigine: Modeles.Rest.PortefeuilleV1.client.IIndicateur;
            let indicateurCible: Modeles.Rest.PortefeuilleV1.client.IIndicateur;
            for (let itemClientIndicateur of client.listeClientIndicateur) {
                indicateurOrigine = _.find(itemClientIndicateur.listeIndicateurClient, { code: codeOrigine });
                indicateurCible = <Modeles.Rest.PortefeuilleV1.client.IIndicateur>{};
                indicateurCible.code = codeCible;

                if (indicateurOrigine) {

                    if (codeCible === Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TEXTE.toString()) {
                        // on converti au passage
                        // date remplie --> Oui
                        // date non remplie --> Non
                        let texte: string;
                        if (indicateurOrigine.valeur) {
                            texte = Constantes.Application.CHAINE_OUI;
                        } else {
                            texte = Constantes.Application.CHAINE_NON;
                        };
                        indicateurCible.valeur = texte;
                    } else {
                        indicateurCible.valeur = indicateurOrigine.valeur;
                    }
                    indicateurCible.dateMaj = indicateurOrigine.dateMaj;
                    indicateurCible.tendance = indicateurOrigine.tendance;

                }
                // Pour la 1ère fois qu'on ajoute l'indicateur dans la liste
                if (!itemClientIndicateur.listeIndicateurClient) {
                    itemClientIndicateur.listeIndicateurClient = Array<Modeles.Rest.PortefeuilleV1.client.IIndicateur>();
                }
                itemClientIndicateur.listeIndicateurClient.push(indicateurCible);
            }
            return client;
        }

        public getListeRelationsEconomiques(
            identifiantEds: number,
            listePortefeuilles: Array<Modeles.Application.IPortefeuille>,
            typeForcage: Enum.PageClients.TYPE_FORCAGE,
            listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>,
            isAccesDepuisBlocRevue: boolean,
            listeCodeSuiviParComplementaire?: string[]
        ): ng.IPromise<Array<Modeles.Application.IRelationEconomique>> {
            let queryCli = <Modeles.Rest.PortefeuilleV1.client.IParametresEntree>{};
            let queryCliExpert = <Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire>{};

            //Si l'on appelle la méthode avec un nouvel identifiantEds, on initialise estLimiteClientsAtteinte.
            this.initialiserEstLimiteClientsAtteinte(identifiantEds);

            if (!this.listeRelationsEconomiques || this.listeRelationsEconomiques.length === 0
                || this.isAccesDepuisBlocRevue !== isAccesDepuisBlocRevue
                || typeForcage === Enum.PageClients.TYPE_FORCAGE.SANS) {
                this.isAccesDepuisBlocRevue = isAccesDepuisBlocRevue;
                this.indicateurService.setListeIndicateurChoix(listeIndicateursTableau);
                let listeClientsIdSirenTotal: Array<Modeles.Rest.PortefeuilleV1.client.IClients> = [];
                if (listeCodeSuiviParComplementaire.length > 0) { // Cas Portefeuille Expert SPC
                    return this.contexteService.getContexte()
                        .then((contexte: Modeles.Application.IContexte) => {
                            queryCli.codeEtablissement = contexte.codeEtablissement;
                            queryCliExpert.listeSuivi = [];
                            queryCliExpert.suiviComplementaireModifie = null;
                            listeCodeSuiviParComplementaire.forEach((code: string) => {
                                queryCliExpert.listeSuivi.push(
                                    {
                                        codeEtablissement: contexte.codeEtablissement,
                                        codeTypeSuiviComplementaire: code,
                                        idEdsInterne: contexte.edsVisu,
                                        designationLongueEds: null,
                                        libelleSuiviComplementaire: null,
                                        libelleSuiviComplementClient: null,
                                        numeroPersonne: null,
                                        dateMajEnregistrement: null,
                                        typeElementStructure: null,
                                        indicateurRestitutionClient: null,
                                        indicateurRestitutionClientRMP: null,
                                        informationAnimation: null
                                    });
                            });
                            console.log("Recup client Expert query >>>> ", queryCliExpert);
                            return this.suiviParComplementaireRestService.getClientsSuiviComplementaire(queryCliExpert);
                        })
                        .then((listeSuiviComplementaire: Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire) => {
                            let listeRelationsEcoApp: Array<Modeles.Application.IRelationEconomique> = [];

                            // Initialisation de la liste des valeurs de chaque indicateurs filtres existant
                            _.forEach(this.listeIndicateursFiltre, (indicFiltre: Modeles.Application.IIndicateurFiltre) => {
                                indicFiltre.listeValeurs = [];
                            });
                            let relationEcoApp = <Modeles.Application.IRelationEconomique>{};

                            relationEcoApp.identifiantPortefeuille = 0;
                            relationEcoApp.libellePortefeuille = "Portefeuille expertise";

                            relationEcoApp.id = "0";
                            relationEcoApp.nom = Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                            this.ajouterListeClientsExpertIdSirenTotal(listeSuiviComplementaire.listeSuivi, listeClientsIdSirenTotal);
                            relationEcoApp.listeClients = this.listeClientsRestToAppExpert(
                                listeSuiviComplementaire.listeSuivi);

                            relationEcoApp.listeIndicateurs = [];

                            // Récupération du type de personne (client/prospect)
                            relationEcoApp.estClient = true;

                            // A jout de la relation économique à la liste
                            if (relationEcoApp.listeClients.length !== 0) {
                                listeRelationsEcoApp.push(relationEcoApp);
                            }
                            this.listeRelationsEconomiques = listeRelationsEcoApp;
                            this.listeTotalIdSirenClients = listeClientsIdSirenTotal;
                            // Appel au service portefeuille/client pour les autres indicateurs
                            queryCli.listeClients = listeClientsIdSirenTotal;
                            queryCli.listeIndicateurs = [];

                            // On ajoute l'indicateur ACTIF/INACTIF par défaut + Potentiel prospect + Premier Equipement
                            // (car affichés en tant que marqueurs)
                            queryCli.listeIndicateurs.push(Enum.Indicateur.CODEREST.ACTIF.toString());

                            // on ne met le potentiel prospect que si habilité à la SHPIQ1
                            if (this.habilitationService.estHabiliteConsultPotentielProspect()) {
                                queryCli.listeIndicateurs.push(Enum.Indicateur.CODEREST.POT_PROS.toString());
                            }
                            queryCli.listeIndicateurs.push(Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString());

                            // On ajoute les indicateurs choisis si ils ont un codeRest
                            let premierEquipementAAjouter = false;
                            _.forEach(this.indicateurService.getListeIndicateurChoix(), (indicChoix: Modeles.Application.IIndicateurChoix) => {
                                if (indicChoix.choisi) {
                                    if (indicChoix.indicateur.codeRest
                                        && indicChoix.indicateur.code !== Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                                        queryCli.listeIndicateurs.push(indicChoix.indicateur.codeRest);
                                    } else if (indicChoix.indicateur.code === Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                                        // et On verifie si l'indicateur Premier équipement est ajouté si c'est le cas on utilisera 
                                        // cette information pour dupliquer l'indicateur tag Premier équipement
                                        premierEquipementAAjouter = true;
                                    }
                                }
                            });

                            // suppression des doublons dans la liste
                            queryCli.listeIndicateurs = _.uniq(queryCli.listeIndicateurs);
                            return this.getResultatListeRelations(queryCli, premierEquipementAAjouter);
                            // return this.$q.when([]);
                        });

                } else { // Cas Portefeuille Agent
                    console.log("Recup client Portefeuille");
                    return this.contexteService.getContexte()
                        .then((contexte: Modeles.Application.IContexte) => {
                            queryCli.codeEtablissement = contexte.codeEtablissement;

                            let queryRCV2 = <Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommercialeParametres>{};
                            queryRCV2.codeEtablissement = contexte.codeEtablissement;
                            queryRCV2.identifiantEds = identifiantEds;
                            queryRCV2.listeIdentifiantPortefeuille = this.listePortefeuillesToListeId(listePortefeuilles);
                            queryRCV2.nombreLimiteMaxClient = Constantes.Service.RELATION_COMMERCIALE_NB_MAX_RES;

                            switch (typeForcage) {
                                case Enum.PageClients.TYPE_FORCAGE.CLIENTS:
                                    queryRCV2.filtrageClientProspect = Enum.FiltrageRelationCommerciale.FILTRECLIENTPROSPECT.CLIENT.toString();
                                    break;
                                case Enum.PageClients.TYPE_FORCAGE.PROSPECTS:
                                    queryRCV2.filtrageClientProspect = Enum.FiltrageRelationCommerciale.FILTRECLIENTPROSPECT.PROSPECTTIERS.toString();
                                    break;
                                default:
                                    queryRCV2.filtrageClientProspect = Enum.FiltrageRelationCommerciale.FILTRECLIENTPROSPECT.TOUS.toString();
                                    if (typeForcage === Enum.PageClients.TYPE_FORCAGE.TOUT) {
                                        queryRCV2.nombreLimiteMaxClient = Constantes.Service.RELATION_COMMERCIALE_NB_MAX_NO_LIMIT;
                                    }
                            }

                            return this.relationCommercialeRestService.getRelationCommerciale(queryRCV2);
                        }).then((relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale) => {
                            // NOUVEL_INDICATEUR c'est ici qu'on peut surcharger un indicateur avant qu'il n'arrive.
                            // relationCommerciale = this.mockService.ajouterLeader(relationCommerciale);
                            // relationCommerciale = this.mockService.ajouterObjectif(relationCommerciale);
                            // relationCommerciale = this.mockService.ajouterEncoursBDF(relationCommerciale);  
                            // relationCommerciale = this.mockService.ajouterBegacli(relationCommerciale);
                            // relationCommerciale = this.begacliService.completerUniversBegacli(relationCommerciale);

                            return this.serviceAgentExtended.getFromContext(Constantes.Contexte.ACCES_DEPUIS_BLOC_REVUE).then((accesDepuisBlocRevue: string) => {
                                if (relationCommerciale.messageInformation
                                    && relationCommerciale.messageInformation.code === Constantes.Service.RELATION_COMMERCIALE_CODE_MAX_CLIENT_ATTEINT
                                    && accesDepuisBlocRevue !== "O") {
                                    this.estLimiteClientsAtteinte = true; //On indique que la limite max des clients est atteinte

                                    // Création de la liste des portefeuilles
                                    this.listePortefeuillesAvecLimite = [];
                                    _.forEach(relationCommerciale.listePortefeuilles, (portefeuilleRC: Modeles.Rest.PortefeuilleV1.relationCommerciale.IPortefeuille) => {
                                        let portefeuille = <Modeles.Application.IPortefeuille>{};
                                        portefeuille.id = portefeuilleRC.identifiantPortefeuille;
                                        portefeuille.libelle = portefeuilleRC.libellePortefeuille;
                                        portefeuille.nombreTotalClients = portefeuilleRC.nombreTotalClients;
                                        portefeuille.nombreTotalProspectsTiers = portefeuilleRC.nombreTotalProspectsTiers;
                                        this.listePortefeuillesAvecLimite.push(portefeuille);
                                    });

                                    // Création de l'erreur
                                    let erreur = <MyWay.Services.Erreur>{};
                                    erreur.codeLibelle = relationCommerciale.messageInformation.code;
                                    erreur.libelle = relationCommerciale.messageInformation.libelle;

                                    return this.$q.reject(erreur);
                                } else { // Cas Nominal
                                    let listeRelationsEcoApp: Array<Modeles.Application.IRelationEconomique> = [];

                                    // Initialisation de la liste des valeurs de chaque indicateurs filtres existant
                                    _.forEach(this.listeIndicateursFiltre, (indicFiltre: Modeles.Application.IIndicateurFiltre) => {
                                        indicFiltre.listeValeurs = [];
                                    });

                                    // Concaténation des listes clients de chaque portefeuille reçus et création 
                                    _.forEach(relationCommerciale.listePortefeuilles, (portefeuilleRC: Modeles.Rest.PortefeuilleV1.relationCommerciale.IPortefeuille) => {

                                        // Création de la liste des relations économiques
                                        _.forEach(portefeuilleRC.listeRelation, (relationRest: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelation) => {
                                            let relationEcoApp = <Modeles.Application.IRelationEconomique>{};

                                            relationEcoApp.identifiantPortefeuille = portefeuilleRC.identifiantPortefeuille;
                                            relationEcoApp.libellePortefeuille = portefeuilleRC.libellePortefeuille;

                                            relationEcoApp.id = relationRest.identifiantRelationEco.toString();
                                            relationEcoApp.nom = relationRest.libelleRelationEco ? relationRest.libelleRelationEco : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                                            this.ajouterListeClientsIdSirenTotal(relationRest.listeClient, listeClientsIdSirenTotal);
                                            relationEcoApp.listeClients = this.listeClientsRestToApp(
                                                relationRest.listeClient,
                                                relationEcoApp.nom,
                                                relationRest.identifiantRelationEco,
                                                relationEcoApp.identifiantPortefeuille,
                                                relationEcoApp.libellePortefeuille);

                                            // On ajout une liste d'indicateur manuellemenent au niveau relation commerciale 
                                            // car non renvoyé par la ressource relationCommerciale mais par la ressource client.
                                            for (let code of Constantes.Indicateur.INDICATEUR_CEER_MANUELLEMENT) {
                                                relationRest.listeIndicateurRelation.push(this.creerIndcateur(code));
                                            }

                                            relationEcoApp.listeIndicateurs = this.getIndicateursPourRelation(relationRest.listeIndicateurRelation);

                                            // Récupération du type de personne (client/prospect)
                                            relationEcoApp.estClient = undefined;
                                            let indicProspect: Modeles.Application.IIndicateur[] =
                                                _.where(relationEcoApp.listeIndicateurs, { "code": Enum.Indicateur.CODEREL.CLIENTPROSPECT.toString() });
                                            if (indicProspect) {
                                                relationEcoApp.estClient = Utils.DataUtils.getEstClientDepuisIndicateur(indicProspect[0]);
                                            }

                                            // A jout de la relation économique à la liste
                                            if (relationEcoApp.listeClients.length !== 0) {
                                                listeRelationsEcoApp.push(relationEcoApp);
                                            }
                                        });
                                    });

                                    this.listeRelationsEconomiques = listeRelationsEcoApp;
                                    this.listeTotalIdSirenClients = listeClientsIdSirenTotal;

                                    // Appel au service portefeuille/client pour les autres indicateurs
                                    queryCli.listeClients = listeClientsIdSirenTotal;
                                    queryCli.listeIndicateurs = [];

                                    // On ajoute l'indicateur ACTIF/INACTIF par défaut + Potentiel prospect + Premier Equipement
                                    // (car affichés en tant que marqueurs)
                                    queryCli.listeIndicateurs.push(Enum.Indicateur.CODEREST.ACTIF.toString());

                                    // on ne met le potentiel prospect que si habilité à la SHPIQ1
                                    if (this.habilitationService.estHabiliteConsultPotentielProspect()) {
                                        queryCli.listeIndicateurs.push(Enum.Indicateur.CODEREST.POT_PROS.toString());
                                    }
                                    queryCli.listeIndicateurs.push(Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString());

                                    // On ajoute les indicateurs choisis si ils ont un codeRest
                                    let premierEquipementAAjouter = false;
                                    _.forEach(this.indicateurService.getListeIndicateurChoix(), (indicChoix: Modeles.Application.IIndicateurChoix) => {
                                        if (indicChoix.choisi) {
                                            if (indicChoix.indicateur.codeRest
                                                && indicChoix.indicateur.code !== Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                                                queryCli.listeIndicateurs.push(indicChoix.indicateur.codeRest);
                                            } else if (indicChoix.indicateur.code === Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                                                // et On verifie si l'indicateur Premier équipement est ajouté si c'est le cas on utilisera 
                                                // cette information pour dupliquer l'indicateur tag Premier équipement
                                                premierEquipementAAjouter = true;
                                            }
                                        }
                                    });

                                    // suppression des doublons dans la liste
                                    queryCli.listeIndicateurs = _.uniq(queryCli.listeIndicateurs);
                                    //if (queryCli.listeIndicateurs.length > 0 && queryCli.listeClients.length > 0) {
                                    //    return this.clientRestService.getClientsIndicateurs(queryCli)
                                    //        .then((client: Modeles.Rest.PortefeuilleV1.client.IClient) => {

                                    //            // NOUVEL_INDICATEUR ajouterBouchonIndicateurClient
                                    //            //client = this.mockService.ajouterBouchonIndicateurClient(queryCli, Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(), client);

                                    //            client = this.begacliService.completerUniversBegacliClient(client);

                                    //            console.log("==> client2 : ", client);

                                    //            // Si l'indicateur premier équipement est ajouté au panier on recopie les indicateurs premier equipement tag
                                    //            // pour créer premier équipement.
                                    //            client = this.clonerIndicateurClient(
                                    //                Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                                    //                Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TEXTE.toString(), client);

                                    //            if (premierEquipementAAjouter) {
                                    //                client = this.clonerIndicateurClient(
                                    //                    Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                                    //                    Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT.toString(), client);
                                    //            }



                                    //            _.forEach(client.listeClientIndicateur, (clientIndicateur: Modeles.Rest.PortefeuilleV1.client.IClientIndicateur) => {
                                    //                //On trie la liste avant de la restituer afin que tous les clients aient des listes d'indicateurs identiques.
                                    //                if (clientIndicateur.listeIndicateurClient) {
                                    //                    clientIndicateur.listeIndicateurClient = clientIndicateur.listeIndicateurClient.sort(
                                    //                        (a: Portefeuille.Modeles.Rest.PortefeuilleV1.client.IIndicateur,
                                    //                            b: Portefeuille.Modeles.Rest.PortefeuilleV1.client.IIndicateur) =>
                                    //                            (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)
                                    //                    );
                                    //                }
                                    //                this.ajouterIndicateurPourClient(clientIndicateur.identifiantPersonne, clientIndicateur.listeIndicateurClient);
                                    //            });
                                    //            return this.listeRelationsEconomiques;
                                    //        });
                                    //} else {
                                    //    return this.$q.when(this.listeRelationsEconomiques);
                                    //}
                                    return this.getResultatListeRelations(queryCli, premierEquipementAAjouter);
                                }
                            });

                        });
                }
            } else {
                //Mis a jour uniquement des indicateurs clients
                console.log("--> else uniquement , que indicateurs");
                let listeEcartIndicateursParametrables: Array<Modeles.Application.IIndicateurType> =
                    this.indicateurService.getListeEcartIndicateurParametrable(listeIndicateursTableau);
                this.indicateurService.setListeIndicateurChoix(listeIndicateursTableau);
                if (listeEcartIndicateursParametrables.length > 0) {
                    return this.majClientsIndicateurs(listeEcartIndicateursParametrables).then(() => this.$q.when(this.listeRelationsEconomiques));
                } else {
                    return this.$q.when(this.listeRelationsEconomiques);
                }
            }
        }

        private getResultatListeRelations(query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree, premierEquipementAAjouter: boolean): ng.IPromise<Modeles.Application.IRelationEconomique[]> {
            if (query && query.listeIndicateurs.length > 0 && query.listeClients.length > 0) {
                return this.clientRestService.getClientsIndicateurs(query)
                    .then((client: Modeles.Rest.PortefeuilleV1.client.IClient) => {

                        // NOUVEL_INDICATEUR ajouterBouchonIndicateurClient
                        //client = this.mockService.ajouterBouchonIndicateurClient(queryCli, Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(), client);

                        client = this.begacliService.completerUniversBegacliClient(client);

                        console.log("==> client : ", client);

                        // Si l'indicateur premier équipement est ajouté au panier on recopie les indicateurs premier equipement tag
                        // pour créer premier équipement.
                        client = this.clonerIndicateurClient(
                            Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                            Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TEXTE.toString(), client);

                        if (premierEquipementAAjouter) {
                            client = this.clonerIndicateurClient(
                                Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                                Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT.toString(), client);
                        }



                        _.forEach(client.listeClientIndicateur, (clientIndicateur: Modeles.Rest.PortefeuilleV1.client.IClientIndicateur) => {
                            //On trie la liste avant de la restituer afin que tous les clients aient des listes d'indicateurs identiques.
                            if (clientIndicateur.listeIndicateurClient) {
                                clientIndicateur.listeIndicateurClient = clientIndicateur.listeIndicateurClient.sort(
                                    (a: Portefeuille.Modeles.Rest.PortefeuilleV1.client.IIndicateur,
                                        b: Portefeuille.Modeles.Rest.PortefeuilleV1.client.IIndicateur) =>
                                        (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)
                                );
                            }
                            this.ajouterIndicateurPourClient(clientIndicateur.identifiantPersonne, clientIndicateur.listeIndicateurClient);
                        });
                        return this.listeRelationsEconomiques;
                    });
            } else {
                return this.$q.when(this.listeRelationsEconomiques);
            }
        }

        private creerIndcateur(code: string) {
            let indicateur = <Modeles.Rest.PortefeuilleV1.client.IIndicateur>{};
            indicateur.code = code;
            return indicateur;
        };

        public majClientsIndicateurs(listeIndicateurARecuperer: Array<Modeles.Application.IIndicateurType>): ng.IPromise<void> {
            console.log("--> majClientsIndicateurs");
            let listeIndicateursADemander: Array<Modeles.Application.IIndicateurType> = [];
            // on vérifie que chaque indicateur n'est pas déja présent: on ne test que le premier client 
            // présent car ils ont tous les mêmes indicateurs
            _.forEach(listeIndicateurARecuperer, (indic: Modeles.Application.IIndicateurType) => {
                if (this.listeRelationsEconomiques
                    && this.listeRelationsEconomiques.length > 0
                    && this.listeRelationsEconomiques[0].listeClients
                    && this.listeRelationsEconomiques[0].listeClients.length > 0) {
                    let listecodeIndicateursDejaRecuperes: Array<string> =
                        _.pluck(this.listeRelationsEconomiques[0].listeClients[0].listeIndicateurs, "code");
                    if (listecodeIndicateursDejaRecuperes.indexOf(indic.code) < 0) {
                        listeIndicateursADemander.push(indic);
                    }
                }
            });

            if (listeIndicateursADemander.length > 0) {
                let queryCli = <Modeles.Rest.PortefeuilleV1.client.IParametresEntree>{};
                return this.contexteService.getContexte().then((contexte: Modeles.Application.IContexte) => {
                    queryCli.codeEtablissement = contexte.codeEtablissement;
                    queryCli.listeIndicateurs = _.pluck(listeIndicateursADemander, "codeRest");
                    queryCli.listeIndicateurs = _.uniq(queryCli.listeIndicateurs);
                    queryCli.listeClients = this.listeTotalIdSirenClients;
                    // On ajoute les indicateurs choisis si ils ont un codeRest
                    let premierEquipementAAjouter = false;
                    _.forEach(this.indicateurService.getListeIndicateurChoix(), (indicChoix: Modeles.Application.IIndicateurChoix) => {
                        if (indicChoix.choisi) {
                            if (indicChoix.indicateur.codeRest
                                && indicChoix.indicateur.code !== Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                                queryCli.listeIndicateurs.push(indicChoix.indicateur.codeRest);
                            } else if (indicChoix.indicateur.code === Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                                // et On verifie si l'indicateur Premier équipement est ajouté si c'est le cas on utilisera 
                                // cette information pour dupliquer l'indicateur tag Premier équipement
                                premierEquipementAAjouter = true;
                            }
                        }
                    });
                    return this.clientRestService.getClientsIndicateurs(queryCli)
                        .then((client: Modeles.Rest.PortefeuilleV1.client.IClient) => {
                            // NOUVEL INDICATEUR ajouterBouchonIndicateurClient - Bouchon pour 1ere fois qu'on ajoute dans la liste
                            //client = this.mockService.ajouterBouchonIndicateurClient(queryCli, Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(), client);

                            client = this.begacliService.completerUniversBegacliClient(client);

                            console.log("==> client1 : ", client);

                            client = this.clonerIndicateurClient(
                                Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                                Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TEXTE.toString(), client);

                            if (premierEquipementAAjouter) {
                                client = this.clonerIndicateurClient(
                                    Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT_TAG.toString(),
                                    Enum.Indicateur.CODEREST.PREMIER_EQUIPEMENT.toString(), client);
                            }

                            _.forEach(client.listeClientIndicateur, (clientIndicateur: Modeles.Rest.PortefeuilleV1.client.IClientIndicateur) => {
                                //On trie la liste avant de la restituer afin que tous les clients aient des listes d'indicateurs identiques.
                                if (clientIndicateur.listeIndicateurClient) {
                                    clientIndicateur.listeIndicateurClient = clientIndicateur.listeIndicateurClient.sort(
                                        (a: Portefeuille.Modeles.Rest.PortefeuilleV1.client.IIndicateur,
                                            b: Portefeuille.Modeles.Rest.PortefeuilleV1.client.IIndicateur) =>
                                            (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)
                                    );
                                }
                                // attention, dans ce cas il faut reinitiliaser les indicateurs de relations qui sont calculés sinon ils vont être doublés
                                // jpdut : erreur , on mets à 0 à chaque fois.
                                // du coup incomptatible avec ajouterIndicateurPourClient
                                // il faut séparer le cumul.
                                this.reinitIndicateursCalculesRelations(clientIndicateur.identifiantPersonne);
                            });

                            // Ajout séparé dans un comptage indépendant.
                            _.forEach(client.listeClientIndicateur, (clientIndicateur: Modeles.Rest.PortefeuilleV1.client.IClientIndicateur) => {
                                // ajout eles indicateurs
                                this.ajouterIndicateurPourClient(clientIndicateur.identifiantPersonne, clientIndicateur.listeIndicateurClient);
                            });
                        });
                });
            } else {
                return this.$q.when();
            }
        }

        // remet les compteurs des indicateurs calculés sur la relation éco à 0
        private reinitIndicateursCalculesRelations(clientId: number) {
            _.forEach(this.listeRelationsEconomiques, (relation: Modeles.Application.IRelationEconomique) => {
                _.forEach(relation.listeClients, (client: Modeles.Application.IClient) => {
                    if (client.id === clientId.toString()) {
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.REV_NB_SSFAMILLES_PROPOSE);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.PNB_3112);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.PNB_N);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.PNB_N_MOINS_1);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.NB_AFFAIRES_EN_COURS);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.NB_PROPOSITIONS_EN_COURS);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.NB_APPETENCES);
                        this.initIndicateurNombre(relation, Enum.Indicateur.CODEREL.ENCOURS_BDF);

                        //gestion indicateur seg rel groupe : on somme le nombre de produit a proposer de tous les client
                        let indicateurSegRelGroupe: Modeles.Application.IIndicateur =
                            _.find(relation.listeIndicateurs, { "code": Enum.Indicateur.CODEREL.SEG_RELATIONNELLE_GROUPE });
                        if (indicateurSegRelGroupe) {
                            indicateurSegRelGroupe.valeur = "NC";
                            indicateurSegRelGroupe.typeIndicateur = Enum.Indicateur.TYPE.TEXTE;
                        }

                        //gestion indicateur date dernière revue  : on récupère la date dernière revue le plus récent
                        let dateDerniereRevueRel: Modeles.Application.IIndicateur =
                            _.find(relation.listeIndicateurs, { "code": Enum.Indicateur.CODEREL.REV_DATE_DERNIERE_REVUE });
                        if (dateDerniereRevueRel) {
                            dateDerniereRevueRel.valeur = "NC";
                            dateDerniereRevueRel.valeurDate = undefined;
                            dateDerniereRevueRel.typeIndicateur = Enum.Indicateur.TYPE.DATE;
                        }
                        return false;
                    }
                });
            });
        }

        private initIndicateurNombre(relation: Modeles.Application.IRelationEconomique, code: Enum.Indicateur.CODEREL) {
            let indicateurNombre: Modeles.Application.IIndicateur = _.find(relation.listeIndicateurs, { "code": code });
            if (indicateurNombre) {
                indicateurNombre.valeurNumber = 0;
            }
        }

        private ajouterIndicateurPourClient(clientId: number, indicateurs: Modeles.Rest.PortefeuilleV1.client.IIndicateur[]): void {
            // on parcours la liste des relation pour se placer sur le bon client
            _.forEach(this.listeRelationsEconomiques, (relation: Modeles.Application.IRelationEconomique) => {
                _.forEach(relation.listeClients, (client: Modeles.Application.IClient) => {
                    if (client.id === clientId.toString()) {
                        client.listeIndicateurs = client.listeIndicateurs.concat(this.getIndicateursPourClient(indicateurs));

                        // Gestion de l'indicateur particulier Top Actif
                        let indicActif: Modeles.Application.IIndicateur[] = _.where(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.ACTIF.toString() });
                        if (indicActif && indicActif.length > 0) {
                            client.estActif = Utils.DataUtils.getEstActifDepuisIndicateur(indicActif[0]);
                            if (indicActif[0].valeur !== Constantes.Application.CHAINE_INDICATEUR_NON_CONNU) {
                                client.estActifRenseigne = true;
                            }
                        }

                        // gestion indicateur "equipe"
                        // BDRPTF-316 : ne s'applique que aux clients ! Un prospect ne peut pas être "Client sans contrat"
                        let indicateurEquipe: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.EQUIPE });
                        if (indicateurEquipe
                            && client.estClient) {
                            client.estSansContrat = indicateurEquipe.valeur === Constantes.Application.CHAINE_NON;
                        }

                        // BDRL-2285 : si le client est un prospect ou est sans contrat on va forcer le inactif en NC afin de pas les sortir dans les filtres
                        if (!client.estClient) {
                            client.estActif = null;
                            client.estActifRenseigne = false;

                            // faut aussi maj l'indicateur dans .listeIndicateurs[code=actif] = NC
                            let indicateurActif: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.ACTIF });
                            indicateurActif.valeur = "NC";

                            // idem pour les sans contrats
                            client.estSansContrat = null;
                            let indicateurSansContrat: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.EQUIPE });
                            indicateurSansContrat.valeur = "NC";
                        }

                        //Pour la liste suivante on somme le nombre de tous les client de la relation et on la met à jour sur la relation
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.REV_NB_SSFAMILLES_PROPOSE, Enum.Indicateur.CODEREL.REV_NB_SSFAMILLES_PROPOSE);
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.PNB_3112, Enum.Indicateur.CODEREL.PNB_3112);
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.PNB_N, Enum.Indicateur.CODEREL.PNB_N);
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.PNB_N_MOINS_1, Enum.Indicateur.CODEREL.PNB_N_MOINS_1);
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.NB_AFFAIRES_EN_COURS, Enum.Indicateur.CODEREL.NB_AFFAIRES_EN_COURS);
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.NB_PROPOSITIONS_EN_COURS, Enum.Indicateur.CODEREL.NB_PROPOSITIONS_EN_COURS);
                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.NB_APPETENCES, Enum.Indicateur.CODEREL.NB_APPETENCES);

                        this.cumulerNombre(client, relation, Enum.Indicateur.CODE.ENCOURS_BDF, Enum.Indicateur.CODEREL.ENCOURS_BDF);


                        // seg rel groupe : on prend celle envoyée par la ressource client (pas de calcul à faire)
                        // On l'effectue qu'une fois par relation
                        let indicateurSegRelGroupeRel: Modeles.Application.IIndicateur = _.find(relation.listeIndicateurs, { "code": Enum.Indicateur.CODEREL.SEG_RELATIONNELLE_GROUPE });
                        if (indicateurSegRelGroupeRel && indicateurSegRelGroupeRel.valeur !== undefined) {
                            let indicateurSegRelGroupe: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.SEG_RELATIONNELLE_GROUPE });
                            if (indicateurSegRelGroupe) {
                                indicateurSegRelGroupeRel.valeur = indicateurSegRelGroupe.valeur;
                            }
                        }

                        // Top_CC : recupérer la valeur index du top CC du tableau constant pour mettre dans valeurNumber
                        let indicateurTopCC: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.TOP_CC });
                        if (indicateurTopCC) {
                            indicateurTopCC.valeurNumber = Services.Utils.ApplicationUtils.ValeurNumberTopCC(indicateurTopCC.valeur);
                        }

                        //gestion indicateur date dernière revue : on récupère la date la plus récente de tous les clients
                        let indicateurDateDerniereRevue: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.REV_DATE_DERNIERE_REVUE });
                        let indicateurDateDerniereRevueRel: Modeles.Application.IIndicateur = _.find(relation.listeIndicateurs, { "code": Enum.Indicateur.CODEREL.REV_DATE_DERNIERE_REVUE });

                        if (indicateurDateDerniereRevue
                            && indicateurDateDerniereRevueRel
                            && this.comparerDateADateB(indicateurDateDerniereRevue.valeurDate, indicateurDateDerniereRevueRel.valeurDate) === 1) {
                            indicateurDateDerniereRevueRel.valeur = indicateurDateDerniereRevue.valeur;
                            indicateurDateDerniereRevueRel.valeurDate = indicateurDateDerniereRevue.valeurDate;
                        }

                        return false;
                    }
                });
            });
        }

        private cumulerNombre(client: Modeles.Application.IClient,
            relation: Modeles.Application.IRelationEconomique,
            codeClient: Enum.Indicateur.CODE,
            codeRelation: Enum.Indicateur.CODEREL): void {
            let indicateurNbClient: Modeles.Application.IIndicateur = _.find(client.listeIndicateurs, { "code": codeClient });
            let indicateurNbRelation: Modeles.Application.IIndicateur = _.find(relation.listeIndicateurs, { "code": codeRelation });

            if (indicateurNbRelation
                && indicateurNbClient) {
                indicateurNbRelation.valeurNumber += this.gererInfinity(indicateurNbClient.valeurNumber);
            }
        }

        /**
         * supprime les valeur -infinity + infinity par 0
         * @param nombre nombre à corrigé
         */
        private gererInfinity(nombre: number): number {
            return (nombre === -Infinity || nombre === Infinity) ? 0 : nombre;
        }

        private listePortefeuillesToListeId(listePortefeuilles: Array<Modeles.Application.IPortefeuille>): Array<number> {
            let listeId = [];
            _.forEach(listePortefeuilles, (portefeuille: Modeles.Application.IPortefeuille) => {
                if (portefeuille.estAffiche) {
                    listeId.push(portefeuille.id);
                }
            });
            return listeId;
        }

        private listeClientsRestToApp(
            listeClientsRest: Array<Modeles.Rest.PortefeuilleV1.relationCommerciale.IClient>,
            nomRelationEconomique: string,
            idRelationEconomique: number,
            identifiantPortefeuille: number,
            libellePortefeuille: string
        ): Array<Modeles.Application.IClient> {
            let listeClientsApp = [];

            _.forEach(listeClientsRest, (clientRest: Modeles.Rest.PortefeuilleV1.relationCommerciale.IClient) => {

                let clientApp = <Modeles.Application.IClient>{};
                clientApp.nom = clientRest.raisonSociale ? clientRest.raisonSociale : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                clientApp.nomRelationEconomique = nomRelationEconomique;
                clientApp.idRelationEconomique = idRelationEconomique;
                // XXXX
                clientApp.codePersonnaliteJuridique = clientRest.codePersonnaliteJuridique;

                // pour export
                clientApp.identifiantPortefeuille = identifiantPortefeuille;
                clientApp.libellePortefeuille = libellePortefeuille;
                clientApp.id = clientRest.identifiantPersonne.toString();
                clientApp.siren = clientRest.numeroSiren;
                clientApp.estActifRenseigne = false;
                clientApp.listeIndicateurs = this.getIndicateursPourClient(clientRest.listeIndicateurClient);
                clientApp.estLeader = Utils.DataUtils.getEstLeaderDepuisCodeLeader(clientRest.codeLeaderEspaceEntreprise);

                // Gestion de l'indicateur particulier Client/Prospect
                clientApp.estClient = undefined;
                let indicClientProspect: Modeles.Application.IIndicateur[] = _.where(clientApp.listeIndicateurs, { "code": Enum.Indicateur.CODE.CLIENTPROSPECT.toString() });
                if (indicClientProspect) {
                    clientApp.estClient = Utils.DataUtils.getEstClientDepuisIndicateur(indicClientProspect[0]);
                }
                listeClientsApp.push(clientApp);
            });
            return listeClientsApp;
        }

        private listeClientsRestToAppExpert(
            listeClientsRest: Array<Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuivi>
        ): Array<Modeles.Application.IClient> {
            let listeClientsApp = [];

            _.forEach(listeClientsRest, (clientRest: Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuivi) => {
                let clientApp = <Modeles.Application.IClient>{};
                clientApp.estSansContrat = null;
                clientApp.identifiantPortefeuille = 0;
                clientApp.libellePortefeuille = "";
                clientApp.id = clientRest.numeroPersonne.toString();
                clientApp.estActifRenseigne = false;
                if (clientRest.informationAnimation) {
                    clientApp.estClient = clientRest.informationAnimation.codeTypeRelationPersonne === "0" || clientRest.informationAnimation.codeTypeRelationPersonne === null;
                    clientApp.estLeader = clientRest.informationAnimation.typeRoleRelation === "2";
                    clientApp.nom = clientRest.informationAnimation.raisonSociale;
                    clientApp.nomRelationEconomique = clientRest.informationAnimation.intituleRelation;
                    clientApp.idRelationEconomique = clientRest.informationAnimation.identifiantRelationEconomique;
                    clientApp.codePersonnaliteJuridique = clientRest.informationAnimation.codePersonaliteJuridique;
                    clientApp.siren = clientRest.informationAnimation.numeroSiren;
                    clientApp.listeIndicateurs = this.getIndicateursPourClientExpert(clientRest);
                    clientApp.nbPersonneRelation = clientRest.informationAnimation.nombrePersonneMenage;
                }
                clientApp.listeIndicateurs = this.getIndicateursPourClientExpert(clientRest);
                listeClientsApp.push(clientApp);
            });
            // return listeClientsApp;
            return _.uniq(listeClientsApp, "id");
        }

        public razRelations(): void {
            this.listeRelationsEconomiques = [];
        }

        /**
         * Récupération des filtres des indicateurs textes pour la Relation Eco.
         * @param listeIndicateurs
         */
        private getIndicateursPourRelation(listeIndicateurs: Array<Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur>): Modeles.Application.IIndicateur[] {
            let reponse: Modeles.Application.IIndicateur[] = [];

            if (listeIndicateurs) {
                _.forEach(listeIndicateurs, (indicRest: Modeles.Rest.PortefeuilleV1.relationCommerciale.IIndicateur) => {
                    let indicateur: Modeles.Application.IIndicateur = Utils.ApplicationUtils.getIndicateur(indicRest);
                    reponse.push(indicateur);

                    let indicateurType: Modeles.Application.IIndicateurType = <Modeles.Application.IIndicateurType>{};
                    let indicateurFiltre: Modeles.Application.IIndicateurFiltre = <Modeles.Application.IIndicateurFiltre>{};
                    indicateurType.code = indicateur.code;
                    indicateurType.typeIndicateur = indicateur.typeIndicateur;
                    indicateurType.intitule = indicateur.intitule;
                    indicateurFiltre.indicateur = indicateurType;
                    indicateurFiltre.utilise = false;
                    indicateurFiltre.utiliseRelationEco = false;
                    indicateurFiltre.listeValeurs = [];

                    let listeCodeIndicateurRelationDejaAjoutes: string[] = _.pluck(this.listeIndicateursFiltre, "indicateur.code");
                    if (indicateur.intitule && listeCodeIndicateurRelationDejaAjoutes.indexOf(indicateur.code) < 0) {
                        this.listeIndicateursFiltre.push(indicateurFiltre);
                    }

                    if (indicateur.typeIndicateur === Enum.Indicateur.TYPE.TEXTE) {
                        _.forEach(this.listeIndicateursFiltre, (indicFiltre: Modeles.Application.IIndicateurFiltre) => {
                            if (indicFiltre.indicateur.code === indicRest.code) {
                                let valeurFiltre: Modeles.Application.IValeurFiltre = <Modeles.Application.IValeurFiltre>{};
                                valeurFiltre.libelle = (indicateur.valeur) ? indicateur.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                                valeurFiltre.actif = false;
                                indicFiltre.listeValeurs.push(valeurFiltre);
                                indicFiltre.listeValeurs = _.uniq(indicFiltre.listeValeurs, "libelle");
                            }
                        });
                    }
                });
            }
            return reponse;
        }

        /**
         * 
         * @param listeIndicateurs
         */
        private getIndicateursPourClient(listeIndicateurs: Array<Modeles.Rest.PortefeuilleV1.client.IIndicateur>): Modeles.Application.IIndicateur[] {
            let reponse: Modeles.Application.IIndicateur[] = [];
            if (listeIndicateurs) {
                _.forEach(listeIndicateurs, (indicRest: Modeles.Rest.PortefeuilleV1.client.IIndicateur) => {
                    let indicateur: Modeles.Application.IIndicateur = Utils.ApplicationUtils.getIndicateur(indicRest);
                    reponse.push(indicateur);

                    //if (!this.listIndicateursDefinie) {
                    let indicateurType: Modeles.Application.IIndicateurType = <Modeles.Application.IIndicateurType>{};
                    let indicateurFiltre: Modeles.Application.IIndicateurFiltre = <Modeles.Application.IIndicateurFiltre>{};
                    indicateurType.code = indicateur.code;
                    indicateurType.typeIndicateur = indicateur.typeIndicateur;
                    indicateurType.intitule = indicateur.intitule;
                    indicateurFiltre.indicateur = indicateurType;
                    indicateurFiltre.utilise = false;
                    indicateurFiltre.utiliseRelationEco = false;
                    indicateurFiltre.listeValeurs = [];
                    let listeCodeIndicateurDejaAjoutes: string[] = _.pluck(this.listeIndicateursFiltre, "indicateur.code");

                    if (indicateur.intitule && listeCodeIndicateurDejaAjoutes.indexOf(indicateur.code) < 0) {

                        this.listeIndicateursFiltre.push(indicateurFiltre);

                    }
                    //}
                    if (indicateur.typeIndicateur === Enum.Indicateur.TYPE.TEXTE) {

                        _.forEach(this.listeIndicateursFiltre, (indicFiltre: Modeles.Application.IIndicateurFiltre) => {

                            if (indicFiltre.indicateur.code === indicRest.code) {
                                let valeurFiltre: Modeles.Application.IValeurFiltre = <Modeles.Application.IValeurFiltre>{};
                                valeurFiltre.libelle = (indicateur.valeur) ? indicateur.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                                valeurFiltre.actif = false;
                                if (indicateur.code === Enum.Indicateur.CODE.TOP_CC.toString()) {
                                    valeurFiltre.ordreAffichage = Services.Utils.ApplicationUtils.ValeurNumberTopCC(indicateur.valeur);
                                }
                                indicFiltre.listeValeurs.push(valeurFiltre);
                                indicFiltre.listeValeurs = _.uniq(indicFiltre.listeValeurs, "libelle");
                            }
                        });
                    }


                    if (indicateur.typeIndicateur === Enum.Indicateur.TYPE.BEGACLI) {
                        _.forEach(this.listeIndicateursFiltre, (indicFiltre: Modeles.Application.IIndicateurFiltre) => {

                            if (indicFiltre.indicateur.code === indicRest.code) {
                                let valeurFiltre: Modeles.Application.IValeurFiltre = <Modeles.Application.IValeurFiltre>{};

                                valeurFiltre.libelle = (indicateur.valeur) ? indicateur.valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                                valeurFiltre.actif = false;
                                indicFiltre.listeValeurs.push(valeurFiltre);
                                indicFiltre.listeValeurs = _.uniq(indicFiltre.listeValeurs, "libelle");
                            }
                        });
                    }

                });
            }
            return reponse;
        }

        /**
         * 
         * @param listeIndicateurs pour suivi par complémentaire SPC
         */
        private getIndicateursPourClientExpert(clientRest: Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuivi): Modeles.Application.IIndicateur[] {
            let reponse: Modeles.Application.IIndicateur[] = [];
            if (clientRest.informationAnimation) {
                /* Indicateur Date dernier RDV */
                let date: Date = clientRest.informationAnimation.dateDernierRdvRealise && clientRest.informationAnimation.dateDernierRdvRealise.substring(0, 4) !== "0001" ?
                    new Date(clientRest.informationAnimation.dateDernierRdvRealise) : null;
                reponse.push(this.getIndicateurPourCodeIndicateur(date, Enum.Indicateur.CODE.DATE_DERNIER_RDV.toString(), Enum.Indicateur.TYPE.DATE));
                /* Indicateur nombre RDV année en cours */
                reponse.push(this.getIndicateurPourCodeIndicateur(clientRest.informationAnimation.nombreRdvAnneeEnCours, Enum.Indicateur.CODE.NB_RDV_ANNEE_EN_COURS.toString(), Enum.Indicateur.TYPE.NOMBRE));
                /* Indicateur nombre RDV 12 derniers mois */
                reponse.push(this.getIndicateurPourCodeIndicateur(clientRest.informationAnimation.nombreRdv12Mois, Enum.Indicateur.CODE.NB_RDV_12_MOIS_GLISSANTS.toString(), Enum.Indicateur.TYPE.NOMBRE));
                /* Indicateur Marché */
                reponse.push(this.getIndicateurPourCodeIndicateur(clientRest.informationAnimation.libelleCourtSegmentation, Enum.Indicateur.CODE.MARCHE.toString(), Enum.Indicateur.TYPE.TEXTE));
                /* Indicateur Segmentation relationnelle client */
                reponse.push(this.getIndicateurPourCodeIndicateur(clientRest.informationAnimation.libelleSegmentClientele2, Enum.Indicateur.CODE.SEG_RELATIONNELLE.toString(), Enum.Indicateur.TYPE.TEXTE));
                /* Date dernier CR */
                date = clientRest.informationAnimation.dateDernierEntretien && clientRest.informationAnimation.dateDernierEntretien.substring(0, 4) !== "0001" ?
                    new Date(clientRest.informationAnimation.dateDernierEntretien) : null;
                reponse.push(this.getIndicateurPourCodeIndicateur(date, Enum.Indicateur.CODE.DATE_DERNIER_ENTRETIEN.toString(), Enum.Indicateur.TYPE.DATE));
                /* Date prochain RDV */
                date = clientRest.informationAnimation.dateProchainRdv && clientRest.informationAnimation.dateProchainRdv.substring(0, 4) !== "0001" ?
                    new Date(clientRest.informationAnimation.dateProchainRdv) : null;
                reponse.push(this.getIndicateurPourCodeIndicateur(date, Enum.Indicateur.CODE.DATE_PROCHAIN_RDV.toString(), Enum.Indicateur.TYPE.DATE));
            }

            return reponse;
        }

        private getIndicateurPourCodeIndicateur(valeur: any, codeIndicateur: string, type: Enum.Indicateur.TYPE): Modeles.Application.IIndicateur {
            return {
                code: codeIndicateur,
                dateMaj: null,
                icone: null,
                intitule: "",
                typeIndicateur: type,
                valeur: type === Enum.Indicateur.TYPE.TEXTE ? valeur : null,
                valeurDate: type === Enum.Indicateur.TYPE.DATE ? valeur : null,
                valeurNumber: type === Enum.Indicateur.TYPE.NOMBRE ? valeur : null,
                tendance: null
            };
        }

        /**
         * Méthode permettant d'ajouter les clients à la liste total des id et siren clients
         * @param {Array<Modeles.Rest.PortefeuilleV1.relationCommerciale.IClient>} listeClient
         * @returns {void}
         */
        private ajouterListeClientsIdSirenTotal(
            listeClient: Array<Modeles.Rest.PortefeuilleV1.relationCommerciale.IClient>,
            listeClientsIdSirenTotal: Array<Modeles.Rest.PortefeuilleV1.client.IClients>): void {
            _.forEach(listeClient, (client: Modeles.Rest.PortefeuilleV1.relationCommerciale.IClient) => {
                let clientRest = <Modeles.Rest.PortefeuilleV1.client.IClients>{};
                clientRest.idClient = client.identifiantPersonne;
                clientRest.sirenClient = client.numeroSiren;
                listeClientsIdSirenTotal.push(clientRest);
            });
        }

        /**
         * Méthode permettant d'ajouter les clients à la liste total des id et siren clients
         * @param {Array<Modeles.Rest.PortefeuilleV1.relationCommerciale.IClient>} listeClient
         * @returns {void}
         */
        private ajouterListeClientsExpertIdSirenTotal(
            listeClient: Array<Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuivi>,
            listeClientsIdSirenTotal: Array<Modeles.Rest.PortefeuilleV1.client.IClients>): void {
            _.forEach(listeClient, (client: Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuivi) => {
                let clientRest = <Modeles.Rest.PortefeuilleV1.client.IClients>{};
                clientRest.idClient = client.numeroPersonne;
                clientRest.sirenClient = client.informationAnimation.numeroSiren;
                listeClientsIdSirenTotal.push(clientRest);
            });
        }

        /**
         * Méthode permettant de recuperer la liste des indicateurs filtre
         * @returns {Array<Modeles.Application.IIndicateurFiltre>}
         */
        public getListeIndicateursFiltre(): Array<Modeles.Application.IIndicateurFiltre> {
            this.ordonnerValeurListeFiltre(this.listeIndicateursFiltre);
            return this.listeIndicateursFiltre;
        }

        /**
         * Méthode permettant de recuperer la liste des indicateurs filtre
         * @returns {Array<Modeles.Application.IIndicateurFiltre>}
         */
        public getListeIndicateursRelationEcoFiltre(): Array<Modeles.Application.IIndicateurFiltre> {
            this.ordonnerValeurListeFiltre(this.listeIndicateursFiltre);
            return this.listeIndicateursFiltre;
        }

        /**
         * Méthode permettant de recuperer la liste des portefeuilles avec limite
         * @returns {Array<Modeles.Application.IIndicateurFiltre>}
         */
        public getListePortefeuillesAvecLimite(): Array<Modeles.Application.IPortefeuille> {
            return this.listePortefeuillesAvecLimite;
        }

        /**
         * Méthode permettant d'ordonner les valeurs d'une liste de filtre
         * @param {Array<Modeles.Application.IIndicateurFiltre>} listeFiltre
         * @returns {void}
         */
        private ordonnerValeurListeFiltre(listeFiltre: Array<Modeles.Application.IIndicateurFiltre>): void {
            _.forEach(listeFiltre, (filtre: Modeles.Application.IIndicateurFiltre) => {
                // console.log("--> avant tri : ", filtre.indicateur.code + " - " + filtre.listeValeurs.length);
                // sort ne s'active que si plus de 1 élément, sinon ne fait rien.
                filtre.listeValeurs = filtre.listeValeurs.sort((a: Modeles.Application.IValeurFiltre, b: Modeles.Application.IValeurFiltre) => {
                    if (filtre.indicateur.code === Enum.Indicateur.CODE.TOP_CC.toString()) {
                        return ListeClientsService.compareInterne(a.ordreAffichage, b.ordreAffichage, null);
                    } if (filtre.indicateur.code === Enum.Indicateur.CODE.LEADER.toString()  // leader
                        || filtre.indicateur.code === Enum.Indicateur.CODE.EQUIPE.toString() // avec contrat
                        || filtre.indicateur.code === Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TEXTE.toString()) {
                        // console.log("--> on inverse le tri pour : ", filtre.indicateur.code);
                        return ListeClientsService.compareInterneOuiNon(a.libelle, b.libelle, Constantes.Application.CHAINE_INDICATEUR_NON_CONNU);
                    } else {
                        return ListeClientsService.compareInterne(a.libelle, b.libelle, Constantes.Application.CHAINE_INDICATEUR_NON_CONNU);
                    }
                });
            });
        }

        /**
         * Méthode permettant d'ordonner une liste de clients avec le leader en premier
         * @param {Array<Modeles.Application.IClient>} listeClients
         * @returns {Array<Modeles.Application.IClient>}
         */
        public ordonnerListeClientsAvecLeader(listeClients: Array<Modeles.Application.IClient>): Array<Modeles.Application.IClient> {
            return listeClients.sort((a: Modeles.Application.IClient, b: Modeles.Application.IClient) => {
                return ListeClientsService.compareInterne(a.estLeader, b.estLeader, false);
            });
        }

        /**
         * Compare avec gestion du null non typé
         * @param a
         * @param b
         * @param valNull
         */
        public static compareInterne<T>(a: T, b: T, valeurNull: T) {
            if (a === valeurNull) {
                return 1;
            } else if (b === valeurNull) {
                return -1;
            } else {
                return (a > b) ? 1 : ((a < b) ? -1 : 0);
            }
        }

        /**
         * Compare avec gestion du null non typé. inversé, en 1er Oui , puis Non, puis NC ( valeurNull ) ....
         * @param a
         * @param b
         * @param valNull
         */
        public static compareInterneOuiNon<T>(a: T, b: T, valeurNull: T) {
            if (a === valeurNull) {
                return 1;
            } else if (b === valeurNull) {
                return -1;
            } else {
                return (a > b) ? -1 : ((a < b) ? 1 : 0);
            }
        }


        /**
         * Compare 2 dates et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param dateA
         * @param dateB
         */
        private comparerDateADateB(dateA: Date, dateB: Date): number {
            const resultatAEgalB: number = 0;
            const resultatASuperieurB: number = 1;
            const resultatAInferieurB: number = -1;

            if ((dateA === undefined && dateB === null) || (dateB === undefined)) {
                return resultatASuperieurB;
            }

            if ((dateA === null && dateB === undefined) || (dateA === undefined)) {
                return resultatAInferieurB;
            }

            if (moment(dateA).isAfter(dateB)) {
                return resultatASuperieurB;
            } else if (moment(dateA).isBefore(dateB)) {
                return resultatAInferieurB;
            } else {
                return resultatAEgalB;
            }
        }

        /**
         * 
         * @param identifiantEds
         */
        public initialiserEstLimiteClientsAtteinte(identifiantEds: number): void {
            if (this.identifiantEds !== identifiantEds) {
                this.estLimiteClientsAtteinte = false;
                this.identifiantEds = identifiantEds;
            }
        }

        /**
         *
         */
        public getEstLimiteClientsAtteinte(): boolean {
            return this.estLimiteClientsAtteinte;
        }

        /**
         * 
         */
        public getAffichageModificationChoix(): boolean {
            return this.affichageModificationChoix;
        }

        /**
         * 
         * @param valeur
         */
        public setAffichageModificationChoix(valeur: boolean): void {
            this.affichageModificationChoix = valeur;
        }
    }

    /**
     * Interface de la classe ListeClientsService
     */
    export interface IListeClientsService {
        getListeRelationsEconomiques(
            identifiantEds: number,
            listePortefeuilles: Array<Modeles.Application.IPortefeuille>,
            typeForcage: Enum.PageClients.TYPE_FORCAGE,
            listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>,
            isAccesDepuisBlocRevue: boolean,
            listeCodeSuiviParComplementaire?: string[]
        ): ng.IPromise<Array<Modeles.Application.IRelationEconomique>>;
        getListeIndicateursFiltre(): Array<Modeles.Application.IIndicateurFiltre>;
        getListeIndicateursRelationEcoFiltre(): Array<Modeles.Application.IIndicateurFiltre>;
        getListePortefeuillesAvecLimite(): Array<Modeles.Application.IPortefeuille>;
        razRelations(): void;
        majClientsIndicateurs(listeIndicateurARecuperer: Array<Modeles.Application.IIndicateurType>): ng.IPromise<void>;
        getListeRelationsEconomiquesCache(): Array<Modeles.Application.IRelationEconomique>;
        ordonnerListeClientsAvecLeader(listeClients: Array<Modeles.Application.IClient>): Array<Modeles.Application.IClient>;
        getEstLimiteClientsAtteinte(): boolean;
        initialiserEstLimiteClientsAtteinte(identifiantEds: number): void;
        getAffichageModificationChoix(): boolean;
        setAffichageModificationChoix(valeur: boolean): void;
    }

    app.service(ListeClientsService.CLASS_NAME, ListeClientsService);
}  