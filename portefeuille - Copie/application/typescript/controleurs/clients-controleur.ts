/// <reference path="../constantes/inject-constantes.ts" />

/**
 * Controleur de la page Clients
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Controleur de l'index
     */
    export class ClientsControleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.IMwTableHandler {
        public static CLASS_NAME = "ClientsControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ClientsControleur.CLASS_NAME);

        // Proprietés
        public listeClients: Array<Modeles.Application.IClient>;
        public listeClientsFiltre: Array<Modeles.Application.IClient>;
        public listeClientsAAfficher: Array<Modeles.Application.IClient>;
        public listeRelationEcoAAfficher: Array<Modeles.Application.IRelationEconomique>;
        public listeRelationEco: Array<Modeles.Application.IRelationEconomique>;
        public listeRelationEcoFiltre: Array<Modeles.Application.IRelationEconomique>;
        public choixRelationEco: Modeles.Application.IRelationEconomique;
        public typeVue: Enum.PageClients.TYPE_VUE;
        public chargementEnCours: boolean = false;
        public tableauClients: Modeles.Tableaux.TableauClient;
        public tableauRelations: Modeles.Tableaux.TableauRelation;
        public messageChoixPtf: string;
        public messageAucunPtf: string;
        public listeFiltresClients: Array<Modeles.Application.IFiltre>;
        public listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;
        public listeFiltres: Array<Modeles.Application.IFiltre>;
        public listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>;
        public listeIndicateursRelationEcoFiltre: Array<Modeles.Application.IIndicateurFiltre>;
        public listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        public listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        public pageActuelle: number;
        public estAvecFiltreColonne: boolean;
        //public typeForcageEnCours: Enum.PageClients.TYPE_FORCAGE;
        public radioBoutonEstVueClient: Enum.PageClients.TYPE_VUE;
        public messageLimiteClientsAtteinte: string;
        public estHabiliteConsultRevue: boolean;
        public estHabiliteMajRevue: boolean;
        public panierDefaut: Modeles.Application.IPanier;

        private contexteGererRelation = <Modeles.Application.IContexteGererRelation>{};
        private nombreAppelInitialiserTableaux: number; //Nombre d'appels à l'initialisation des tableaux afin de piloter chragementEnCours
        private etatChargementLong: number;

        private accessibiliteBoutonVoirProduitsPourClient: boolean;
        private relationEcoPourConsultationProduits: Portefeuille.Modeles.Application.IRelationEconomique;

        private isAfficherMessageLimiteClientAtteinte: boolean;
        private isAccesDepuisBlocRevue: boolean;

        //Gestion des NC pour les placer systématiquement en fin de tableau quelque soit le tri effectué sur les colonnes
        private chaineMaxPourComparaison: string;
        private dateMin: Date;
        private dateMax: Date;

        // export excel
        private formatDate: string = "DD/MM/YYYY";
        private exportCSVEnCours: boolean;

        // création du fichier CSV
        private nomFichierExport: string = "Export portefeuilles";

        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Angular.$window,
            Constantes.Inject.Services.listeClientsService,
            Constantes.Inject.Angular.$filter,
            Constantes.Inject.Services.popupService,
            Constantes.Inject.Angular.$parse,
            Constantes.Inject.MyWay.tableServiceOpefi,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.lisaApplication,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.indicateurService,
            Constantes.Inject.Services.filtreService,
            Constantes.Inject.Services.portefeuilleService,
            Constantes.Inject.Services.preferencesService,
            Constantes.Inject.Services.ihmService,
            Constantes.Inject.MyWay.portailService,
            Constantes.Inject.Services.habilitationService,
            Constantes.Inject.Services.mwCsvService,
            "ExportService",
            "$timeout"
        ];

        /**
         * Constructeur
         */
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $scope: ng.IScope,
            private $q: ng.IQService,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private listeClientsService: Services.Application.IListeClientsService,
            private $filter: ng.IFilterService,
            private popupService: Services.Application.IPopupService,
            private $parse: ng.IParseService,
            private tableService: MyWay.UI.IMwTableServiceOpefi,
            private eventService: Services.Application.IEventService,
            private lisaApplication: Portefeuille.Services.Application.ILisaApplication,
            private contexteService: Services.Application.IContexteService,
            private indicateurService: Services.Application.IIndicateurService,
            private filtreService: Services.Application.IFiltreService,
            private portefeuilleService: Services.Application.IPortefeuilleService,
            private preferencesService: Services.Application.IPreferencesService,
            private ihmService: Services.Application.IIhmService,
            private portailService: myway.portail.api.PortailService,
            private habilitationService: Services.Application.IHabilitationService,
            private mwCsvService: Services.Application.CsvService,
            private exportService: Services.Application.ExportService,
            private $timeout: ng.ITimeoutService
        ) {
            this.nombreAppelInitialiserTableaux = 0;
            this.etatChargementLong = -1;
            this.accessibiliteBoutonVoirProduitsPourClient = false;

            if (this.portefeuilleService.getTypeForcage()) {
                this.initialiser(this.portefeuilleService.getTypeForcage());
            } else {
                this.initialiser(Enum.PageClients.TYPE_FORCAGE.SANS);
            }
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        public initialiser(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<void> {
            ClientsControleur.logger.info(">>> Appel de la méthode : ClientsControleur.initialiser <<<");
            console.log("--> ClientsControleur.initialiser typeForcage : ", typeForcage);
            //this.typeForcageEnCours = typeForcage;
            this.estHabiliteConsultRevue = this.habilitationService.estHabiliteConsultRevue();
            this.estHabiliteMajRevue = this.habilitationService.estHabiliteMajRevue();
            this.messageChoixPtf = Constantes.Messages.MESSAGE_CHOIX_PORTEFEUILLE;
            this.messageAucunPtf = Constantes.Messages.MESSAGE_AUCUN_PORTEFEUILLE;
            this.chargementEnCours = true;
            this.listeFiltresClients = [];
            this.listeFiltresRelationEco = [];
            this.listeFiltres = [];
            this.listeIndicateursFiltre = [];
            this.listeIndicateursRelationEcoFiltre = [];
            this.listeClients = [];
            this.listeClientsAAfficher = [];
            this.listeRelationEco = [];
            this.listeRelationEcoAAfficher = [];
            this.listeIndicateursTableau = [];
            this.eventService.setClientsControleur(this);

            this.messageLimiteClientsAtteinte = this.valoriserMessageLimiteClientsAtteinte(this.portefeuilleService.getTypeForcage());
            this.dateMin = moment(Constantes.Application.DATE_MIN).toDate();
            this.dateMax = moment(Constantes.Application.DATE_MAX).toDate();
            console.log("--> ClientsControleur.initialiser portefeuilleService.aPortefeuilles() : ", this.portefeuilleService.aPortefeuille());
            console.log("--> ClientsControleur.initialiser portefeuilleService.aPortefeuillesAffiche() : ", this.portefeuilleService.aPortefeuillesAffiche());
            console.log("--> ClientsControleur.initialiser portefeuilleService.aPortefeuillesReelAffiche() : ", this.portefeuilleService.aPortefeuillesReelAffiche());
            console.log("--> ClientsControleur.initialiser portefeuilleService.aPortefeuilleExpertAffiche() : ", this.portefeuilleService.aPortefeuilleExpertAffiche());
            // On vérifie qu'un choix de portefeuille a bien été fait
            if (this.portefeuilleService.aPortefeuillesAffiche()) {
                // Determination de la vue affichée par défaut
                if (this.estEnForcageTypeClientsOuProspects()) {
                    this.typeVue = Enum.PageClients.TYPE_VUE.VUE_CLIENTS;
                } else {
                    this.typeVue = this.ihmService.getTypeVue();
                }
                this.radioBoutonEstVueClient = this.typeVue;

                if (this.portefeuilleService.getCaracteristiquesAgent()) {
                    this.nombreAppelInitialiserTableaux = this.nombreAppelInitialiserTableaux + 1;
                    return this.initApplication(typeForcage);
                } else {
                    this.contexteService.getAuthentification()
                        .then((authentification: MyWay.Services.Context.AuthentificationInfo) => {
                            let caracteristiquesAgent = <Modeles.Application.ICaracteristiquesAgent>{};
                            caracteristiquesAgent.codeEtablissement = authentification.codeEtablissement;
                            caracteristiquesAgent.designationAgent = authentification.agentConnecte.designationLongueAgent;
                            caracteristiquesAgent.identifiantElementStructure = +authentification.agentConnecte.numeroInterneEds;
                            caracteristiquesAgent.libelleFonction = authentification.agentConnecte.designationPosteFonctionnel;
                            this.portefeuilleService.setCaracteristiquesAgent(caracteristiquesAgent);
                            this.nombreAppelInitialiserTableaux = this.nombreAppelInitialiserTableaux + 1;

                            //return this.initTableaux(typeForcage);
                            return this.initApplication(typeForcage);
                        });
                }
            } else {
                this.chargementEnCours = false;
                return this.$q.when();
            }
        }

        /**
         * 
         * @param typeForcage
         */
        private initApplication(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<any> {
            return this.contexteService.getContexte().then((contexte: Modeles.Application.IContexte) => {
                return this.serviceAgentExtended.DonneesDelocalisees.getDonneesDelocalisees(contexte.codeEtablissement, Constantes.Application.TABLE_DELOC_SEGMENTATIONS).then((resultat: any) => {
                    // récupère les libellés segmentation BDR
                    if (resultat.donnees) {
                        resultat.donnees.forEach((donnee: any) => {
                            if (donnee.CODLTS === "BM") {   // segmentations BDR : BM; segmentations PRO : BP
                                // on ajout edans Utils qui fera la transformation direct à la récupération des indicateurs (évite un traitement en plus)
                                Portefeuille.Services.Utils.ApplicationUtils.segmentationsBDR.push(donnee);
                            }
                        });
                    }

                    // puis initialise les relations ecos et indicateurs clients
                    return this.initTableaux(typeForcage);
                });
             });
        }

        // récupère les relations éco et la liste des clients puis les indicateurs clients
        private initTableaux(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<any> {
            // Si on est en train de regarder les client d'un portefeuille expert (SPC), on n'affiche pas la conlonne "nb personnes relation"
            const avecColonneNbClientRelation = this.portefeuilleService.aPortefeuilleExpertAffiche() ? false : true;
            this.tableauClients = new Modeles.Tableaux.TableauClient(this, this, this.$filter, this.$parse, this.listeClients, this.listeIndicateursTableau, avecColonneNbClientRelation);
            this.tableauRelations = new Modeles.Tableaux.TableauRelation(this, this, this.$filter, this.$parse, this.listeRelationEco, this.listeIndicateursTableau);
            this.listeTotaleIndicateurs = this.indicateurService.getListeTotaleIndicateursType();
            this.pageActuelle = 1;
            
            // Si on arrive du bloc "Revue de portefeuille" on ne cherche pas dans les preferences car les indicateurs revues sont fixés à l'avance, sinon on cherche dans le panier
            return this.serviceAgentExtended.getFromContext(Constantes.Contexte.ACCES_DEPUIS_BLOC_REVUE).then((accesDepuisBlocRevue : string) => {
                let isAccesDepuisBlocRevue: boolean = accesDepuisBlocRevue === "O";
                this.isAccesDepuisBlocRevue = isAccesDepuisBlocRevue;
                this.isAfficherMessageLimiteClientAtteinte = this.controlerLimiteClientAtteinte(isAccesDepuisBlocRevue);
                
                if (isAccesDepuisBlocRevue) {
                    // si on est passé par le bloc Revue (typeForcage = TOUS) et qu'on a débranché vers la revue, au retour il faut qu'on check ce qu'on dans le context
                    // pour appeler la liste des relations éco enb 9999 pour avoir les clients
                    typeForcage = Enum.PageClients.TYPE_FORCAGE.TOUT;

                    this.listeIndicateursTableau = this.indicateurService.getListeIndicateursRevue();
                    return this.getRelationEconomiques(typeForcage);
                } else {
                    return this.preferencesService.lirePanierDefaut(this.listeTotaleIndicateurs)
                        .then((panierDefautPref: Modeles.Application.IPanier) => {
                            this.panierDefaut = panierDefautPref;

                            // Determination de la liste des indicateurs choisis
                            if (typeForcage === Enum.PageClients.TYPE_FORCAGE.TOUT) {
                                this.panierDefaut = this.preferencesService.convertirPanierPreferenceEnApplicatif(
                                    this.indicateurService.getPanierDeForcage(),
                                    this.listeTotaleIndicateurs, Constantes.Application.NOM_PANIER_FORCAGE, false);
                                this.listeIndicateursTableau = this.panierDefaut.listeChoixIndicateurs;
                            } else {
                                this.listeIndicateursTableau = panierDefautPref ? panierDefautPref.listeChoixIndicateurs : [];
                            }
                            return this.getRelationEconomiques(typeForcage);
                        });
                }
            });
        }

        private getRelationEconomiques(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<any> {
            return this.listeClientsService.getListeRelationsEconomiques(
                this.portefeuilleService.getCaracteristiquesAgent().identifiantElementStructure,
                this.portefeuilleService.getListePortefeuillesVisu(),
                typeForcage, this.listeIndicateursTableau,
                this.isAccesDepuisBlocRevue,
                this.portefeuilleService.getListeCodeSuiviParComplementairePortefeuillesExpertVisu()
            )
                .then((listeRelationsEco: Array<Modeles.Application.IRelationEconomique>) => {
                this.listeRelationEco = listeRelationsEco.sort((a: Modeles.Application.IRelationEconomique, b: Modeles.Application.IRelationEconomique) => (a.nom > b.nom) ? 1 : ((b.nom > a.nom) ? -1 : 0));
                this.listeRelationEcoFiltre = angular.copy(this.listeRelationEco);
                this.listeRelationEcoFiltre.unshift(this.getRelationEcoToutes());
                this.choixRelationEco = _.where(this.listeRelationEcoFiltre, { "id": "" })[0];

                this.listeRelationEcoAAfficher = this.listeRelationEco;
                this.tableauRelations = new Modeles.Tableaux.TableauRelation(this, this, this.$filter, this.$parse, this.listeRelationEco, this.listeIndicateursTableau);
                this.listeIndicateursRelationEcoFiltre = this.listeClientsService.getListeIndicateursRelationEcoFiltre();

                _.forEach(this.listeRelationEco, (relationEco: Modeles.Application.IRelationEconomique) => {
                    relationEco.listeClients = this.listeClientsService.ordonnerListeClientsAvecLeader(relationEco.listeClients);
                    // ici, on ajoute pour chaque client de la liste , le nombre de clients dans la relation.
                    let nb = relationEco.listeClients.length;
                    for (var itemClient of relationEco.listeClients) {
                        itemClient.nbPersonneRelation = nb;
                    }

                    this.listeClients = this.listeClients.concat(relationEco.listeClients);
                });
                    this.listeClientsAAfficher = this.listeClients;

                this.tableauClients = new Modeles.Tableaux.TableauClient(this, this, this.$filter, this.$parse, this.listeClients, this.listeIndicateursTableau, true);

                this.majFiltres();

                this.relationEcoPourConsultationProduits = angular.copy(this.choixRelationEco);
            })
            .catch((erreur: MyWay.Services.Erreur) => {
                return this.serviceAgentExtended.getFromContext(Constantes.Contexte.ACCES_DEPUIS_BLOC_REVUE).then((accesDepuisBlocRevue: string) => {
                    if (erreur.codeLibelle === Constantes.Service.RELATION_COMMERCIALE_CODE_MAX_CLIENT_ATTEINT && accesDepuisBlocRevue !== "O") {
                        // si on revient directement de la revue, on vérifie si un forcage est déja présent
                        return this.contexteService.recupererRetourDebranchement()
                            .then((contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille) => {

                                if (contexteGererPortefeuille
                                    && contexteGererPortefeuille.objetEdsVisu
                                    && contexteGererPortefeuille.objetEdsVisu.typeForcage
                                    && contexteGererPortefeuille.objetEdsVisu.typeForcage !== Enum.PageClients.TYPE_FORCAGE.SANS) {
                                    this.portefeuilleService.setTypeForcage(contexteGererPortefeuille.objetEdsVisu.typeForcage);
                                    this.listeClientsService.setAffichageModificationChoix(contexteGererPortefeuille.objetEdsVisu.affichageModificationChoix);
                                    return this.initialiser(contexteGererPortefeuille.objetEdsVisu.typeForcage);
                                } else {
                                    return this.accederForcage();
                                }
                            });
                    } else {
                        ClientsControleur.logger.error("Erreur de récupération du portefeuille", erreur.codeLibelle, erreur.libelle);
                        return this.popupService.showErreur(erreur);
                    }
                });
            })
            .finally(() => {
                this.nombreAppelInitialiserTableaux = this.nombreAppelInitialiserTableaux - 1;
                this.chargementEnCours = !(this.nombreAppelInitialiserTableaux === 0);

                // si on revient directement de la revue, on a un filtrage sur la relation
                return this.contexteService.recupererRetourDebranchement()
                    .then((contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille) => {
                        if (contexteGererPortefeuille
                            && contexteGererPortefeuille.objetEdsVisu
                            && contexteGererPortefeuille.identifiantRelation) {
                            this.portefeuilleService.setTypeForcage(contexteGererPortefeuille.objetEdsVisu.typeForcage);

                            if (contexteGererPortefeuille.objetEdsVisu.typeForcage === Enum.PageClients.TYPE_FORCAGE.CLIENTS ||
                                contexteGererPortefeuille.objetEdsVisu.typeForcage === Enum.PageClients.TYPE_FORCAGE.PROSPECTS) {
                                this.affichageVueClient();
                            } else {
                                
                                // applique les filtres relation et clients sans changer la vue
                                // si on est en vue relation éco, il faut appliquer en priorité le filtre client qui s'applique aussi en vue relation, car on va etre dans le détail
                                let filtresRelations: boolean = this.appliquerFiltresRelationApresDebranchement(contexteGererPortefeuille.filtresRelation);
                                let filtresClients: boolean = this.appliquerFiltresApresDebranchement(contexteGererPortefeuille.filtres);
                                
                                // maintenant on se positionne au bon endroit: en vue relation éco ou clients
                                if (contexteGererPortefeuille.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                                    // force en vue clients
                                    this.radioBoutonEstVueClient = contexteGererPortefeuille.typeVue;
                                    this.affichageVueClient();

                                    if (filtresClients) {
                                        this.majFiltres();
                                    }
                                } else {
                                    // force en vue relation economique
                                    this.radioBoutonEstVueClient = contexteGererPortefeuille.typeVue;
                                    this.affichageVueRelationEco();
                                    this.typeVue = Enum.PageClients.TYPE_VUE.VUE_CLIENTS;   // met en mode clients pour afficher les filtres clients

                                    if (filtresClients) {
                                        this.listeFiltres = contexteGererPortefeuille.filtres;
                                        this.majFiltres();
                                    } else if (filtresRelations) {
                                        this.majFiltres();
                                    }

                                    // on se met en vue relation éco. En vue relation éco on se positionne tjs sur le détail de la dernière relation éco vue
                                    // (pour débrancher on était forcement dans le détail d'une relation eco)
                                    this.filtrageTableauClient(contexteGererPortefeuille.identifiantRelation.toString());
                                }
                            }

                            //Remise en place des filtre et du positionnement dans le tableau
                            this.miseAJourTableauAvecContexte(contexteGererPortefeuille);

                            // suppression du contexte
                            let listeContextesASupprimer: Array<string> = [Constantes.Contexte.CONTEXTE_VERS_REVUE, Constantes.Contexte.CONTEXTE_GERR_PORTF];
                            return this.contexteService.supprimerContexteDevenuInutile(listeContextesASupprimer);
                        } else {
                            if (this.ihmService.getTypeVue() === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                                this.affichageVueClient();
                            }
                        }
                        this.$scope.$applyAsync();
                    });
            });
        }

        // lorsqu'on revient d'un débranchement, si des filtres avaient été positonnés on va les réappliquer
        private appliquerFiltresApresDebranchement(filtres: Array<Modeles.Application.IFiltre>): boolean {
            if (filtres && filtres.length > 0) {
                this.filtreService.setFiltresClients(filtres);
                return true;
            } else {
                return false;
            }
        }

        private appliquerFiltresRelationApresDebranchement(filtres: Array<Modeles.Application.IFiltre>): boolean {
            if (filtres && filtres.length > 0) {
                this.filtreService.setFiltresRelationsEco(filtres);
                return true;
            } else {
                return false;
            }
        }
        
        private majFiltres(): void {
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                this.listeIndicateursFiltre = this.listeClientsService.getListeIndicateursFiltre();
                this.listeFiltresClients = this.filtreService.getFiltresClients();
                this.listeFiltres = this.listeFiltresClients;

                if (this.listeFiltresClients && this.listeFiltresClients.length > 0) {
                    // Maj liste filtre selon dispo indicateur
                    this.listeFiltresClients = this.filtreService.majAndGetFiltresClientsAvecListeIndicateursDispo(this.listeIndicateursTableau);
                }
            } else {
                this.listeIndicateursFiltre = this.listeClientsService.getListeIndicateursRelationEcoFiltre();
                this.listeFiltresRelationEco = this.filtreService.getFiltresRelationsEco();
                this.listeFiltres = this.listeFiltresRelationEco;
                if (this.listeFiltresRelationEco && this.listeFiltresRelationEco.length > 0) {
                    // Maj liste filtre selon dispo indicateur
                    this.listeFiltresRelationEco = this.filtreService.majAndGetFiltresRelationsEcoAvecListeIndicateursDispo(this.listeIndicateursTableau);
                }
                //console.log(">>>> listeFiltresRelationEco >>>>", this.listeFiltresRelationEco);
            }
            //console.log(">>>> listeIndicateursFiltre >>>>", this.listeIndicateursFiltre);
            this.majTableauSuiteModificationFiltre(this.listeIndicateursFiltre);
        }

        private getRelationEcoToutes(): Modeles.Application.IRelationEconomique {
            let toutesRelation: Modeles.Application.IRelationEconomique = <Modeles.Application.IRelationEconomique>{};
            toutesRelation.id = "";
            toutesRelation.nom = "Toutes les relations";
            toutesRelation.listeClients = [];
            toutesRelation.listeIndicateurs = [];
            return toutesRelation;
        }

        public filtrageTableauClient(filtreRelationEco: string): void {
            // AAAA, ici, on a cliqué sur la ligne en vue relation.
            this.typeVue = Enum.PageClients.TYPE_VUE.VUE_CLIENTS;
            if (filtreRelationEco) {
                this.choixRelationEco = _.where(this.listeRelationEcoFiltre, { "id": filtreRelationEco })[0];
                this.listeClientsFiltre = _.where(this.listeClients, { "idRelationEconomique": +filtreRelationEco });
                this.listeClientsAAfficher = this.filtreService.filtrerListeClients(this.listeClientsFiltre, this.listeFiltresClients);
                this.tableauClients = new Modeles.Tableaux.TableauClient(this, this, this.$filter, this.$parse, this.listeClientsAAfficher, this.listeIndicateursTableau, false);
            } else {
                this.choixRelationEco = _.where(this.listeRelationEcoFiltre, { "id": "" })[0];
                this.listeClientsAAfficher = this.filtreService.filtrerListeClients(this.listeClients, this.listeFiltresClients);
                this.tableauClients = new Modeles.Tableaux.TableauClient(this, this, this.$filter, this.$parse, this.listeClientsAAfficher, this.listeIndicateursTableau, false);
            }

            this.relationEcoPourConsultationProduits = angular.copy(this.choixRelationEco);
        }

        /**
         * Méthode appelé lors de l'action de sélection d'un client dans le tableau
         * @param {Modeles.Application.IRelation} relation ou {Modeles.Application.IClient} client
         * @returns {void}
         */
        public onSelectionChange(selectedObjet: Portefeuille.Modeles.Application.IRelationEconomique | Portefeuille.Modeles.Application.IClient): void {
            ClientsControleur.logger.info(">>> Appel de la méthode : ClientsControleur.onSelectionChange <<<");

            let relationEcoDuClientSelectionne: Portefeuille.Modeles.Application.IRelationEconomique = null;

            //Ici selectedObjet est de type ICLient
            if (this.estVueClients()) {
                this.accessibiliteBoutonVoirProduitsPourClient = selectedObjet.checked;

                if (selectedObjet.checked && (<Portefeuille.Modeles.Application.IClient>selectedObjet).idRelationEconomique) {
                    relationEcoDuClientSelectionne = _.find(this.listeRelationEco, (relationEcoLue: Portefeuille.Modeles.Application.IRelationEconomique) => {
                        if (relationEcoLue && relationEcoLue.id === (<Portefeuille.Modeles.Application.IClient>selectedObjet).idRelationEconomique.toString()) {
                            return true;
                        }
                    });

                    this.relationEcoPourConsultationProduits = angular.copy(relationEcoDuClientSelectionne);
                }
            }

            //Ici selectedObjet est de type IRelationEconomique
            if (this.estVueRelationEco()) {
                this.estAvecFiltreColonne = false;
                this.listeFiltres = this.listeFiltresClients;
                if (selectedObjet.checked) {
                    this.construireContexteRel();
                    //this.tableauRelations.selectedItems = []; // deselection de la ligne
                    this.filtrageTableauClient(selectedObjet.id);
                }
            }
        }

        /**
         * Methode qui permet d'ouvrir la modale de filtrage
         * @returns {void}
         */
        public accederAuxFiltres(): void {

            let data = <Modeles.Application.IDonneesEntreeSortiePopupFiltres>{};
            data.listeIndicateursTableau = angular.copy(this.listeIndicateursTableau);
            
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                data.listeFiltres = angular.copy(this.listeFiltresClients);
                data.listeIndicateursFiltre = angular.copy(this.listeIndicateursFiltre);
                data.estVueClient = true;
            } else {
                data.listeFiltres = angular.copy(this.listeFiltresRelationEco);
                data.listeIndicateursFiltre = angular.copy(this.listeIndicateursRelationEcoFiltre);
                data.estVueClient = false;
            }

            let templateDatas = <Modeles.Application.IPopupData<any>>{};
            templateDatas.model = data;

            this.popupService.showModalFull(
                "vues/template-modale/modale-filtre-vue.html",
                "ModaleFiltreControleur",
                templateDatas)
                .then((donneesDeSortie: Modeles.Application.IDonneesEntreeSortiePopupFiltres) => {
                if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                    this.filtreService.setFiltresClients(donneesDeSortie.listeFiltres);
                } else {
                    this.filtreService.setFiltresRelationsEco(donneesDeSortie.listeFiltres);
                }
                // ajoute une action remarquable
                this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_FILTRES);
                this.majFiltres();
            });

        }

        /**
         * Methode qui permet de mettre à jour un tableau suite à une modification de filtre
         * @param {Array<Modeles.Application.IIndicateurFiltre>} listeIndicateursFiltre
         * @returns {void}
         */
        //private majTableauSuiteModificationFiltre(listeFiltres: Array<Modeles.Application.IFiltre>, listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>): void {
        private majTableauSuiteModificationFiltre(listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>): void {
            this.chargementEnCours = true;
            
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) { // traitement vue clients
                //this.listeFiltresClients = listeFiltres;
                this.listeIndicateursFiltre = listeIndicateursFiltre;
                this.listeClientsAAfficher = this.listeClients;
                if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS && (this.choixRelationEco && this.choixRelationEco.id !== "")) {
                    this.listeClientsAAfficher = this.listeClientsFiltre;
                }

                if (this.listeFiltresClients.length > 0) {
                    this.listeClientsAAfficher = this.filtreService.filtrerListeClients(this.listeClientsAAfficher, this.listeFiltresClients);
                }
                // Si on est en train de regarder les client d'un portefeuille expert (SPC), on n'affiche pas la conlonne "nb personnes relation"
                const avecColonneNbClientRelation = this.portefeuilleService.aPortefeuilleExpertAffiche() ? false : true;
                this.tableauClients = new Modeles.Tableaux.TableauClient(this, this, this.$filter, this.$parse, this.listeClientsAAfficher, this.listeIndicateursTableau, avecColonneNbClientRelation);

            } else { // traitement vue relations eco
                //this.listeFiltresRelationEco = listeFiltres;
                this.listeIndicateursRelationEcoFiltre = listeIndicateursFiltre;
                this.listeRelationEcoAAfficher = this.listeRelationEco;
                if (this.listeFiltresRelationEco.length > 0) {
                    this.listeRelationEcoAAfficher = this.filtreService.filtrerListeRelationsEco(this.listeRelationEcoAAfficher, this.listeFiltresRelationEco);
                }
                this.tableauRelations = new Modeles.Tableaux.TableauRelation(this, this, this.$filter, this.$parse, this.listeRelationEcoAAfficher, this.listeIndicateursTableau);
            }

            angular.element(document.querySelector("#" + this.definirIndentifiantTableauEnCours())).ready(() => {
                this.chargementEnCours = false;
                this.$scope.$applyAsync();
            });
        }

        /**
         * Methode qui permet d'aller à la page de gestion des indicateurs
         * @returns {void}
         */
        public accederAuxIndicateursV2(): void {
            // ajoute une action remarquable
            this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_PANIER);

            this.$location.path(Constantes.Url.SELECTION_INDICATEURS);
        }

        /**
         * Methode qui permet d'ouvrir la modale de forcage
         * @returns {void}
         */
        private accederForcage(): ng.IPromise<void> {
            return this.popupService.showModalMd("vues/template-modale/modale-avertissement-choix-portefeuille-vue.html", "ModaleAvertissementChoixPortefeuilleControleur", null
            ).then((retourPopup: Portefeuille.Controleurs.IRetourModaleAvertissement) => {
                if (retourPopup) {
                    this.listeClientsService.setAffichageModificationChoix(retourPopup.nombreBoutonsAffiches > 1);

                    if (retourPopup.typeForcage !== Enum.PageClients.TYPE_FORCAGE.SANS) {
                        //La limite du nombre de clients pour un portefeuille est atteinte (350 max à ce jour)
                        if (this.listeClientsService.getEstLimiteClientsAtteinte()) {
                            this.messageLimiteClientsAtteinte = this.valoriserMessageLimiteClientsAtteinte(retourPopup.typeForcage);
                        }

                        if (this.portefeuilleService.getTypeForcage() !== retourPopup.typeForcage) {
                            this.listeClientsService.razRelations();
                        }

                        this.portefeuilleService.setTypeForcage(retourPopup.typeForcage);
                        return this.initialiser(retourPopup.typeForcage);
                    } else {
                        return this.eventService.ouvrirVoletChoixPortefeuilleIndexControleur();
                    }
                } else {
                    this.listeClientsService.initialiserEstLimiteClientsAtteinte(null);
                    return this.eventService.ouvrirVoletChoixPortefeuilleIndexControleur();
                }
            });
        }

        public afficherLigneRelationEco(): boolean {
            return (!this.chargementEnCours && this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS && (this.choixRelationEco && this.choixRelationEco.id !== ""));
        }

        public afficherTableauRelation(): boolean {
            return (!this.chargementEnCours && this.typeVue === Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE);
        }

        public afficherTableauClients(): boolean {
            return (!this.chargementEnCours && this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS);
        }

        public estVueClients(): boolean {
            return this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS;
        }

        public estVueRelationEco(): boolean {
            return this.typeVue === Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE;
        }

        public estAfficheBtnRetour(): boolean {
            return this.choixRelationEco && this.choixRelationEco.id !== "";
        }

        /** Indique si le bouton "Effectuer la revue" est visible ou non (true => visible) */
        public estAfficheBtnEffectuerRevue(): boolean {
            //Le bouton "Effectuer la revue" n'est visible que sur les vues clients et si l'habilitation est ok
            return this.typeVue !== Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE && this.estHabiliteMajRevue && this.estHabiliteConsultRevue && this.portefeuilleService.aPortefeuillesReelAffiche();
        }

        /**
         * Indique si le bouton consulter les produit est visible
         */
        public estAfficheBtnVoirProduits(): boolean {
            //Le bouton "Consulter les produits" n'est visible que sur les vues relation eco detail et si l'habilitation est ok
            // Ajout limitation si on est en train de regarder de portefeuilles Expert (SPC)
            return (this.afficherLigneRelationEco() && this.estHabiliteConsultRevue) || (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS);
        }

        // le bouton Exporter n'est visible que en Vue Clients (pas en Relations éco ni en détail de relation éco)
        public estAfficheBtnExporter(): boolean {
            return this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS ||
                    (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE && (this.choixRelationEco && this.choixRelationEco.id !== ""));
        }

        public estAfficherBoutonSynthese(): boolean {
            return this.typeVue !== Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE;
        }

        public estDisabledBoutonVoirProduits(): boolean {
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                if (this.choixRelationEco && this.choixRelationEco.id) {
                    return false;
                } else {
                    return !this.accessibiliteBoutonVoirProduitsPourClient;
                }
            }

            return true;
        }

        /** Indique si le bouton "Effectuer la revue" est actif ou non (true => inactif) */
        public estDisabledBtnEffectuerRevue(): boolean {
            let resultat: boolean = true; //Par défaut le bouton est inactif.

            if (this.tableauClients && this.tableauClients.selectedItems && this.tableauClients.selectedItems.length > 0) {
                //Une ligne doit être sélectionnée pour que l'on envisage d'activer le bouton "Effectuer la revue"
                resultat = this.typeVue !== Enum.PageClients.TYPE_VUE.VUE_CLIENTS;
            }

            return resultat;
        }

        public getTitreVue(): string {
            if (this.estVueClients()) {
                return Constantes.Application.TITRE_VUE_CLIENT;
            } else {
                return Constantes.Application.TITRE_VUE_RELATION;
            }
        }

        public getNomPanier(): string {
            if (this.panierDefaut) {
                return this.panierDefaut.nom ? `${Constantes.Application.CHAINE_NOM_PANIER_INDICATEUR}: "${this.panierDefaut.nom}"` : Constantes.Application.CHAINE_NOM_PANIER_INDICATEUR;
            } else {
                return "";
            }
        }

        /**
         * Méthode pour récupérer le texte sur le ratio client ou relation disponible suite à filtrage
         * @returns {string}
         */
        public getTxtRatioFiltrage(): string {
            if (this.estVueClients()) {
                let typeForcage = this.portefeuilleService.getTypeForcage();
                if (typeForcage && typeForcage === Enum.PageClients.TYPE_FORCAGE.CLIENTS) {
                    return `Nb clients / prospects: ${this.nbClientsRelationsFiltre()}/${this.nbClientsRelationsTotal()}`;
                }

                if (typeForcage && typeForcage === Enum.PageClients.TYPE_FORCAGE.PROSPECTS) {
                    return `Nb prospects: ${this.nbClientsRelationsFiltre()}/${this.nbClientsRelationsTotal()}`;
                }

                return `Nb clients / prospects: ${this.nbClientsRelationsFiltre()}/${this.nbClientsRelationsTotal()}`;
            } else {
                return `Nb relations: ${this.nbClientsRelationsFiltre()}/${this.nbClientsRelationsTotal()}`;
            }
        }

        public afficherLigneStatsEtTableau(): boolean {
            if (!this.chargementEnCours && ((this.estVueClients() && this.tableauClients.data.length > 0) || (this.estVueRelationEco() && this.tableauRelations.data.length > 0))) {
                if (this.estAvecFiltreColonne) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }

        /**
         * Méthode pour récupérer le texte sur les index des éléments visibles sur la page du tableau client ou relation
         * @returns {string}
         */
        public getTxtEtatPagination(): string {
            if (!this.chargementEnCours && this.tableauClients) {
                let indexDebut: number;
                let indexFin: number;
                if (this.estVueClients()) {
                    let typeForcage = this.portefeuilleService.getTypeForcage();
                    indexDebut = (this.tableauClients.perPage * this.pageActuelle) - this.tableauClients.perPage + 1;
                    indexFin = this.tableauClients.perPage * this.pageActuelle;
                    if (indexFin > this.tableauClients.data.length) {
                        indexFin = this.tableauClients.data.length;
                    }

                    if (typeForcage && typeForcage === Enum.PageClients.TYPE_FORCAGE.CLIENTS) {
                        return `Clients ${indexDebut} à ${indexFin} sur ${this.tableauClients.data.length}`;
                    }

                    if (typeForcage && typeForcage === Enum.PageClients.TYPE_FORCAGE.PROSPECTS) {
                        return `Prospects ${indexDebut} à ${indexFin} sur ${this.tableauClients.data.length}`;
                    }

                    return `Clients / Prospects ${indexDebut} à ${indexFin} sur ${this.tableauClients.data.length}`;
                } else {
                    indexDebut = (this.tableauRelations.perPage * this.pageActuelle) - this.tableauRelations.perPage + 1;
                    indexFin = this.tableauRelations.perPage * this.pageActuelle;
                    if (indexFin > this.tableauRelations.data.length) {
                        indexFin = this.tableauRelations.data.length;
                    }
                    return `Relations ${indexDebut} à ${indexFin} sur ${this.tableauRelations.data.length}`;
                }
            } else {
                return "";
            }
        }

        /**
         * récupération de la page courante depuis IMwTableHandler 
         * @param currentPage
         */
        public onPageChange(currentPage: number): void {
            this.pageActuelle = currentPage;
            this.$window.scrollTo(0, 0);   
        }

        /**
         * Fonction appelé lors du changement du filtre tableau
         * @param search
         */
        //public onFilterChange(search: any): void {
        //    if (search.nom !== "") {
        //        this.estAvecFiltreColonne = true;
        //    } else {
        //        this.estAvecFiltreColonne = false;
        //    }
        //}

        /**
         * Fonction appelé lors de l'affichage de la vue relation eco
         */
        public affichageVueRelationEco(): void {
            this.accessibiliteBoutonVoirProduitsPourClient = false;

            this.typeVue = Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE;
            this.ihmService.setTypeVue(Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE);
            this.estAvecFiltreColonne = false;
            //this.listeFiltres = this.listeFiltresRelationEco;
            this.tableauRelations = new Modeles.Tableaux.TableauRelation(this, this, this.$filter, this.$parse, this.listeRelationEcoAAfficher, this.listeIndicateursTableau);
            this.majFiltres();
        }

        /**
         * Fonction appelé lors de l'affichage de la vue clients
         */
        public affichageVueClient(): void {
            this.accessibiliteBoutonVoirProduitsPourClient = false;

            this.typeVue = Enum.PageClients.TYPE_VUE.VUE_CLIENTS;
            this.ihmService.setTypeVue(Enum.PageClients.TYPE_VUE.VUE_CLIENTS);
            this.estAvecFiltreColonne = false;
            //this.listeFiltres = this.listeFiltresClients;
            this.filtrageTableauClient("");
            this.majFiltres();
        }

        /**
         * Methode qui retourne le nombre de clients/relations totales affichés
         * @returns {number}
         */
        public nbClientsRelationsTotal(): number {
            if (!this.chargementEnCours) {
                if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                    return this.afficherLigneRelationEco() ? this.listeClientsFiltre.length : this.listeClients.length;
                } else {
                    return this.listeRelationEco.length;
                }
            }
        }

        /**
         * Methode qui retourne le nombre de clients/relations filtres
         * @returns {number}
         */
        public nbClientsRelationsFiltre(): number {
            if (!this.chargementEnCours) {
                if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                    return this.listeClientsAAfficher.length;
                } else {
                    return this.listeRelationEcoAAfficher.length;
                }
            }
        }

        /**
         * Methode qui permet de savoir si on affiche ou non l'icone de filtre actif
         * @returns {boolean}
         */
        public afficherFiltreActif(): boolean {
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                return this.listeFiltresClients ? this.listeFiltresClients.length > 0 : false;
            } else {
                return this.listeFiltresRelationEco ? this.listeFiltresRelationEco.length > 0 : false;
            }
        }

        /**
         * Methode qui permet de savoir si on est en forcage clients ou prospects
         * @returns {boolean}
         */
        public estEnForcageTypeClientsOuProspects(): boolean {
            return this.portefeuilleService.getTypeForcage() === Enum.PageClients.TYPE_FORCAGE.CLIENTS
                || this.portefeuilleService.getTypeForcage() === Enum.PageClients.TYPE_FORCAGE.PROSPECTS;
        }

        /**
         * Methode qui permet de savoir si on est en forcage tout
         * @returns {boolean}
         */
        public estEnForcageTypeTout(): boolean {
            return this.portefeuilleService.getTypeForcage() === Enum.PageClients.TYPE_FORCAGE.TOUT;
        }

        /**
         * Methode qui permet de revenir sur la vue relation économique
         * @returns {void}
         */
        public retourVueRelEco(): void {
            this.choixRelationEco = null;
            this.affichageVueRelationEco();
            this.miseAJourTableauAvecContexteRel();
        }

        /** Méthode permettant de retourner à la page d'accueil (càd page des stats, des graphes,...) */
        public retourAccueil(): void {
            this.contexteService.recupererRetourDebranchement(
            ).then((resultatPromesse: Modeles.Application.IContexteGererPortefeuille) => {

                if (resultatPromesse) {
                    let contexteMisAJour: Modeles.Application.IContexteGererPortefeuille;

                    //1°) On ne conserve que objeVisu s'il est valorisé
                    if (resultatPromesse.objetEdsVisu) {
                        contexteMisAJour = <Modeles.Application.IContexteGererPortefeuille>{};
                        contexteMisAJour.objetEdsVisu = angular.copy(resultatPromesse.objetEdsVisu);
                        contexteMisAJour.objetEdsVisu.locationPath = Constantes.Url.PORTEFEUILLE;
                    }

                    //2°) On supprime les données contextuelles, puis on valorise les données contextuelles nécessaires à la gestion des portefeuilles
                    this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE, Constantes.Contexte.CONTEXTE_GERR_PORTF]
                    ).then(() => {
                        //this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteMisAJour
                        this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteMisAJour
                        ).catch((erreur: MyWay.Services.Erreur) => {
                            ClientsControleur.logger.info(JSON.stringify(">>retourAccueil<< Erreur lors de l'écriture du contexte de gestion des portefeuilles: " + JSON.stringify(erreur)));
                        });
                    }).catch((erreur: MyWay.Services.Erreur) => {
                        ClientsControleur.logger.info(JSON.stringify(">>retourAccueil<< Erreur lors de la suppression du contexte de gestion des portefeuilles: " + JSON.stringify(erreur)));
                    });
                } else {
                    // On supprime les données contextuelles liée à la Revue
                    this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE]);
                }
            }).catch((erreur: MyWay.Services.Erreur) => {
                ClientsControleur.logger.info(">>retourAccueil<< Erreur lors de la récupération du contexte de gestion des portefeuilles: " + JSON.stringify(erreur));
            }).finally(() => {
                // On va vers l'écran d'accueil
                this.$location.path(Constantes.Url.PORTEFEUILLE);
            });
        }

        /**
         * Méthode permettant d'effectuer la revue (=> en fait on se débranche vers la saisie de la revue).
         */
        public effectuerRevue(): ng.IPromise<void> {
            ClientsControleur.logger.info(">>> Appel de la méthode : ClientsControleur.effectuerRevue <<<");

            let contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille = <Modeles.Application.IContexteGererPortefeuille>{};
            contexteGererPortefeuille = this.construireContexte(true);
            
            return this.contexteService.ajouterDonneesDebranchementRevueClient(contexteGererPortefeuille)
                .then(() => {
                    // Gestion en vue du retour
                    // ajoute une action remarquable
                    this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_EFFC_REVUE);
                    return this.lisaApplication.next(Constantes.CodeProcessusLisa.CODE_LISA_SAISIE_REVUE, null)
                        .then(() => {
                            // attention, en myway v2 on supprime trop tot ! c'est executé avant mm que la revue ne soit lancée !
                            // il ne faut donc pas le faire ici
                          //  this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE]);

                        })
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ClientsControleur.logger.debug(">>> Echec sur lisa.next de la méthode : ClientsControleur.effectuerRevue <<<");
                            this.popupService.showErreur(erreur);
                        });
                });
        }

        /**
         * Défini l'identifiant du tableau en cours d'utilisation
         */
        private definirIndentifiantTableauEnCours(): string {
            let idTable: string = "";

            // Récupère les selection utilisateur en identifiant la vue en cours
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) {
                idTable = Constantes.Tableau.ID_TABLE_CLIENT;
            } else if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE) {
                idTable = Constantes.Tableau.ID_TABLE_RELATION;
            }
            return idTable;
        }

        /**
         * Récuperation des information sur le tableau en cours pour les mettre en contexte
         * @param contexteGererPortefeuille
         */
        private miseAJourContexteAvecTableau(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille) {
            let idTable: string = this.definirIndentifiantTableauEnCours();

            if (idTable && idTable !== "") {
                contexteGererPortefeuille.pagination = angular.copy(this.tableService.getPaginationState(idTable));
                contexteGererPortefeuille.colonneTriee = angular.copy(this.tableService.getSortedColumn(idTable));
                contexteGererPortefeuille.colonneFiltre = angular.copy(this.tableService.getFilterCriteria(idTable));
            }
        }

        /**
         * Récuperation du contexte pour les appliquer au tableau en cours
         * @param contexteGererPortefeuille
         */
        private miseAJourTableauAvecContexte(contexte: Modeles.Application.IContexteGererPortefeuille) {

            // console.log("<<<< ClientsControleur miseAJourTableauAvecContexte : ", contexte);
            let idTable: string = this.definirIndentifiantTableauEnCours();
            let contexteGererPortefeuille = angular.copy(contexte);

            if (idTable &&
                idTable !== "") {
                angular.element(document.querySelector(Constantes.Application.ID_TABLE_CLIENT)).ready(() => {
                    this.$timeout(() => { 
                    this.tableService.setSortedColumn(idTable, contexteGererPortefeuille.colonneTriee);
                    this.tableService.setFilterCriteria(idTable, contexteGererPortefeuille.colonneFiltre);
                    this.tableService.setPaginationState(idTable, contexteGererPortefeuille.pagination);

                    if (contexteGererPortefeuille.identifiantPersonneSelection) {
                        if (idTable === Constantes.Tableau.ID_TABLE_RELATION) {
                            this.tableService.setSelectedLines(idTable,
                                _.filter(this.listeRelationEcoAAfficher,
                                    (item: Modeles.Application.IRelationEconomique) =>
                                        item.id === contexteGererPortefeuille.identifiantPersonneSelection.toString()));
                        } else {
                            this.tableService.setSelectedLines(idTable,
                                _.filter(this.listeClientsAAfficher,
                                    (item: Modeles.Application.IClient) =>
                                        item.id === contexteGererPortefeuille.identifiantPersonneSelection.toString()));
                        }
                    }
                        this.tableService.apply(idTable);
                    }, 0);
                });
            }
        }

        /**
         * Contruire le contexte
         * @param priseEnCompteSelection Permet de prendre en compte la selection dans le tableau client si celle-ci est selectionne
         */
        private construireContexte(priseEnCompteSelection: boolean): Modeles.Application.IContexteGererPortefeuille {
            let contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille = <Modeles.Application.IContexteGererPortefeuille>{};
           
            // Garde la personne selectionné
            if (this.tableauClients.selectedItems &&
                this.tableauClients.selectedItems.length > 0 &&
                this.tableauClients.selectedItems[0] &&
                this.tableauClients.selectedItems[0].id) {
                contexteGererPortefeuille.identifiantPersonneSelection = Number(this.tableauClients.selectedItems[0].id);
            }

            if (priseEnCompteSelection &&
                contexteGererPortefeuille.identifiantPersonneSelection) {
                //Selection d'un client et de la relation économique
                contexteGererPortefeuille.identifiantPersonne = contexteGererPortefeuille.identifiantPersonneSelection;
                contexteGererPortefeuille.estClient = this.tableauClients.selectedItems[0].estClient;
                contexteGererPortefeuille.raisonSociale = this.tableauClients.selectedItems[0].nom;
                contexteGererPortefeuille.siren = this.tableauClients.selectedItems[0].siren;

                contexteGererPortefeuille.identifiantRelation = this.tableauClients.selectedItems[0].idRelationEconomique;
                contexteGererPortefeuille.libelleRelation = this.tableauClients.selectedItems[0].nomRelationEconomique;
            } else {
                // Gestion cas portefeuille expert
                if (this.portefeuilleService.aPortefeuilleExpertAffiche()) {
                    contexteGererPortefeuille.identifiantRelation = Number(this.tableauClients.selectedItems[0].idRelationEconomique);
                    contexteGererPortefeuille.libelleRelation = this.tableauClients.selectedItems[0].nomRelationEconomique;
                } else {
                    //Selection seulement la relation économique
                    if (this.relationEcoPourConsultationProduits.id) {
                        contexteGererPortefeuille.identifiantRelation = Number(this.relationEcoPourConsultationProduits.id);
                    }
                    contexteGererPortefeuille.libelleRelation = this.relationEcoPourConsultationProduits.nom;
                }
                
            } 

            contexteGererPortefeuille.typeForcage = this.portefeuilleService.getTypeForcage().toString();
            contexteGererPortefeuille.typeVue = this.radioBoutonEstVueClient;
            // ajoute les données des filtres et de tri
            contexteGererPortefeuille.filtres = this.listeFiltres;
            contexteGererPortefeuille.filtresRelation = this.listeFiltresRelationEco;
            contexteGererPortefeuille.objetEdsVisu = this.alimenterObjetEds();

            let idTable: string = this.definirIndentifiantTableauEnCours();
            // console.log("idTable : ", idTable);
            let tableObserver = <MyWay.UI.MwTableControllerv1710>this.tableService.getMwTableObserver(idTable);
            // récupère la liste des clients affichés ( avec filtres, tri etc ... )
            // va être récupérée pour le popup de revue
            if (tableObserver && tableObserver.sortedModel) {
                // console.log("sortedModel : ", tableObserver.sortedModel);
                contexteGererPortefeuille.listeClientAffiches = <Modeles.Application.IClient[]>tableObserver.sortedModel;
            }
            this.miseAJourContexteAvecTableau(contexteGererPortefeuille);
            console.log("<<<< ClientsControleur construireContexte : ", contexteGererPortefeuille);
            return contexteGererPortefeuille;
        }

        /**
         * Contruire le contexte de relation : Ajout 11/07/2022
         */
        public construireContexteRel() {
            this.contexteGererRelation = <Modeles.Application.IContexteGererRelation>{};
            let idTable: string = Constantes.Tableau.ID_TABLE_RELATION;
            this.contexteGererRelation.pagination = angular.copy(this.tableService.getPaginationState(idTable));
            this.contexteGererRelation.colonneTriee = angular.copy(this.tableService.getSortedColumn(idTable));
            this.contexteGererRelation.colonneFiltre = angular.copy(this.tableService.getFilterCriteria(idTable));
            this.contexteGererRelation.selectedItems = this.tableauRelations.selectedItems;
        }

        /**
         * Récuperation du contexte pour les appliquer au tableau relation
         * @param contexteGererRelation
         */
        public miseAJourTableauAvecContexteRel() {
            let idTable: string = Constantes.Tableau.ID_TABLE_RELATION;
            if (this.contexteGererRelation.selectedItems) {
                angular.element(document.querySelector("#" + Constantes.Tableau.ID_TABLE_RELATION)).ready(() => {
                    this.$timeout(() => {
                        this.tableService.setSortedColumn(idTable, this.contexteGererRelation.colonneTriee);
                        this.tableService.setFilterCriteria(idTable, this.contexteGererRelation.colonneFiltre);
                        this.tableService.setPaginationState(idTable, this.contexteGererRelation.pagination);
                        let selections: Modeles.Application.IRelationEconomique[] = angular.copy(this.contexteGererRelation.selectedItems);
                        this.tableService.setSelectedLines(Constantes.Tableau.ID_TABLE_RELATION, selections);
                        this.tableService.apply(idTable);
                    }, 0);
                });
            }
        }

        /**
         * typeSynthese : 
         * 1 – pour la synthèse part
         * 2 – pour la synthèse PM
         * 3 – pour la synthèse EI
         * ici, pas de particulier
         */
        private getTypeSynthese(codePersonnaliteJuridique: string): string {
            if (codePersonnaliteJuridique === Constantes.Rest.CODE_PERSONNALITE_JURIDIQUE_EI) {
                return "3"; // pour synthese EI
            }
            if (codePersonnaliteJuridique === Constantes.Rest.CODE_PERSONNALITE_JURIDIQUE_PM) {
                return "2"; // pour synthese PM
            }
            return null;
        }

        public accederSyntheseClient(): ng.IPromise<void> {
            ClientsControleur.logger.info(">>> Appel de la méthode : ClientsControleur.accederSyntheseClient <<<");

            let idPersonne: string = this.tableauClients.selectedItems[0].id;
            let codePersonnaliteJuridique: string = null;
            
            for (var itemRelEco of this.listeRelationEco) {
                for (var itemClient of itemRelEco.listeClients) {
                    if (itemClient.id === idPersonne) {
                        codePersonnaliteJuridique = itemClient.codePersonnaliteJuridique;
                    }
                }
            }

            let typeSynthese: string;
            typeSynthese = this.getTypeSynthese(codePersonnaliteJuridique);

            return this.contexteService.ajoutPourDebranchementSyntheseClient(idPersonne, typeSynthese)
                .then(() => {
                    return this.contexteService.isPCM().then((isPCM: boolean) => {
                    let sessionStore: Storage = sessionStorage;
                    if (sessionStore.getItem("myway-portal-id") !== null) {
                        // portail Mysys (v2)
                        console.log("--> XXXX portail Mysys: typeSynthese = " + typeSynthese);

                        //this.serviceAgentExtended.Interop.AfficherSynthese(this.tableauClients.selectedItems[0].id).then(() => {
                        //    return this.$q.when(true);
                        //});
                        let contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille = <Modeles.Application.IContexteGererPortefeuille>{};
                        contexteGererPortefeuille = this.construireContexte(true);

                        return this.contexteService.ajouterDonneesDebranchementSyntheseClient(contexteGererPortefeuille, typeSynthese)
                            .then(() => {
                                // ajoute une action remarquable
                                this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_SYNTH_PM);
                                return this.lisaApplication.next(Constantes.CodeProcessusLisa.CODE_LISA_SYNTHESE_PM, "")
                                    .then(() => { })
                                    .catch((erreur: MyWay.Services.Erreur) => {
                                        ClientsControleur.logger.debug(">>> Echec sur lisa.next de la méthode : ClientsControleur.accederSyntheseClient <<<");
                                        this.popupService.showErreur(erreur);
                                    });
                            });
                    } else if (isPCM) {
                        console.log("--> XXXX PCM");
                        // PCM: débranche vers la synthèse mobilité via le LISA
                        let contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille = <Modeles.Application.IContexteGererPortefeuille>{};
                        contexteGererPortefeuille = this.construireContexte(true);

                        return this.contexteService.ajouterDonneesDebranchementSyntheseClient(contexteGererPortefeuille, typeSynthese)
                            .then(() => {
                                // ajoute une action remarquable
                                this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_SYNTH_PM);
                                return this.lisaApplication.next(Constantes.CodeProcessusLisa.CODE_LISA_SYNTHESE_PM, "")
                                    .then(() => {})
                                    .catch((erreur: MyWay.Services.Erreur) => {
                                        ClientsControleur.logger.debug(">>> Echec sur lisa.next de la méthode : ClientsControleur.accederSyntheseClient <<<");
                                        this.popupService.showErreur(erreur);
                                    });
                            });
                    } else {
                        // portail Myway (v1)
                        console.log("--> XXXX portail Myway");
                        return this.portailService.lancerSyntheseClient(Number(this.tableauClients.selectedItems[0].id));
                    }
                });
            });
        }
        
        public exporter(): ng.IPromise<void> {
            // on vérifie dans un premier temps qu'une génération n'est pas en cours
            if (this.exportCSVEnCours === true) {
                return;
            }
            this.exportCSVEnCours = true;
            let columns: Array<any> = this.getColonnesExport(); 
            let colonnesReferencesBrut: Array<string> = _.pluck(columns, "bind");
            let colonnesReferencesExport: Array<string> = this.getColonnesReferences(colonnesReferencesBrut);
            let colonnesLibelles: Array<string> = _.pluck(columns, "title");

            // ajoute la date du jour au nom du fichier
            let dateJour = moment(new Date()).format("DDMMYYYY");

            // ajoute aussi le nom de l'eds das le nom du fichier 
            let objetEdsChoisi: Modeles.Application.IObjetEdsChoisi = this.alimenterObjetEds();
            let nomAgent = (objetEdsChoisi && objetEdsChoisi.objCaractAgent) ? objetEdsChoisi.objCaractAgent.designationAgent : this.contexteService.getDesignation();

            return this.getDonneesExport(nomAgent).then((donnees: Array<Object>) => {
                let options: Services.Application.ICsvOptions = {
                    header: colonnesLibelles,
                    columnOrder: colonnesReferencesExport,
                    filename: `${this.nomFichierExport} ${nomAgent} ${dateJour}`
                };
                console.log("donnees : ", donnees);
                // Ancienne version de génération CSV
                //let promiseDownloadCsv: ng.IPromise<any> = this.mwCsvService.downloadCsv(null, donnees, options);
                let promiseDownloadCsv: ng.IPromise<void> = this.exportService.genererFichierExport(options.header, donnees, options.filename);
                return promiseDownloadCsv.then(() => {
                    this.exportCSVEnCours = false;
                    // ajoute une action remarquable
                    this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_EXPORT);
                });
            });
        }

        private colonneCsvClient: Array<any> = [
            {
                "title": "Suivi Par",
                "bind": "nomAgent",
                "cssClass": ""
            }, {
                "title": "Identifiant Portefeuille",
                "bind": "identifiantPortefeuille",
                "cssClass": ""
            }, {
                "title": "Libellé Portefeuille",
                "bind": "libellePortefeuille",
                "cssClass": ""
            }, {
                "title": "Relation économique",
                "bind": "nomRelationEconomique",
                "cssClass": ""
            }, {
                "title": "Identifiant Personne",
                "bind": "id",
                "cssClass": ""
            }, {
                "title": "Raison Sociale",
                "bind": "nom",
                "cssClass": ""
            }, {
                "title": "Leader",
                "bind": "estLeader",
                "cssClass": ""
            }, {
                "title": "Prospect",
                "bind": "estClient",
                "cssClass": ""
            }, {
                "title": "Sans Contrat",
                "bind": "estSansContrat",
                "cssClass": ""
            }, {
                "title": "Actif",
                "bind": "estActif",
                "cssClass": ""
            }, {
                "title": "1er Équipement",
                "bind": "premierEquipement",
                "cssClass": ""
            }, {
                "title": "Nb Personnes Relation",
                "bind": "nbPersonneRelation",
                "cssClass": ""
            }];

        /**
         * 
         */
        private getColonnesExport(): Array<any> {
            let columns: Array<any> = angular.copy(this.colonneCsvClient);
            this.tableauClients.columns.forEach((column: any) => {
                // on ne prend pas en compte le premier equipement en tant qu'indicateur car il est déjà en tant que tag


                if (column.bind !== "nom"
                    && column.title.indexOf(Enum.Indicateur.INTITULE.PREMIER_EQUIPEMENT) === -1) {
                    // transforme listeIndicateurs[14].valeurNumber en 14_valeurNumber
                    let index = column.bind.substring(17, column.bind.indexOf("]"));
                    let props = column.bind.split(".");

                    if (props.length > 1) {

                        // pour les flux et le CA on ajoute en prefix "k€"
                        // pour les Part en engagement on ajoue en prefix "%"
                        let prefix: string = "";
                        if (column.title.indexOf("Part de flux") > -1) {
                            prefix = " (%)";
                        } else if (column.title.indexOf("Flux") > -1) {
                            prefix = " (k€)";
                        } else if (column.title.indexOf("PNB ") > -1) {
                            prefix = " (€)";
                        } else if (column.title.indexOf("CA") > -1) {
                            prefix = " (k€)";
                        } else if (column.title.indexOf("Encours BDF") > -1) {
                            prefix = " (k€)";
                        } else if (column.title.indexOf("Part en engagement") > -1) {
                            prefix = " (%)";
                        } else if (column.title.indexOf("Top CC") > -1) {
                            // pour Top CC : Le fichier exoprt doit afficher la valeur en texte "Vert", "Rouge"..... (bind par valeur)
                            props[1] = "valeur";
                        } else if (column.title.indexOf("Objectif de flux") > -1) {
                            prefix = " (%)";
                        } 

                        columns.push({
                            "title": column.title + prefix,
                            "bind": index + "_" + props[1],
                            "cssClass": ""
                        });
                        // ajout indicateur fictif pour CA  et CA-1 ( date de maj ). qui servira pour export excel.
                        if (column.title.indexOf("CA") > -1) {
                            columns.push({
                                "title": "Date " + column.title,
                                "bind": index + "_" + "dateMaj",
                                "cssClass": ""
                            });
                        }

                    }
                }
            });           
            console.log("columns : ", columns);

            return columns;
        }

        private getColonnesReferences(colonnesReferencesNonTraitees: Array<string>): Array<string> {
            let colonnesReferences: Array<string> = [];
            _.forEach(colonnesReferencesNonTraitees, (colonne: string) => {
                let detailsColonneComplexe: Array<string> = colonne.split(".");
                colonnesReferences.push(detailsColonneComplexe[detailsColonneComplexe.length - 1]);
            });
            return colonnesReferences;
        }

        // permet de formater le tableau a utilisé pour exporter les donnees
        // vers un fichier excel
        private getDonneesExport(nomAgent: string): ng.IPromise<Array<Object>> {
            let _tab: any[] = [];
            
            // recupérere les colonnes affichées et créé le format avec ca
            let columns: Array<any> = this.getColonnesExport();
            let _this = this;
            
            // parcours les clients, puis pour chaque client récupère chaque indicateur
            this.listeClientsAAfficher.forEach(function (client: Modeles.Application.IClient) {
                if (client) {

                    console.log("--> export client : ",  client);

                    let obj: any = {};

                    // les 8 premieres infos sont sur le client
                    obj.nomAgent = nomAgent;
                    obj.identifiantPortefeuille = client.identifiantPortefeuille;
                    obj.libellePortefeuille = client.libellePortefeuille;
                    obj.nomRelationEconomique = client.nomRelationEconomique;
                    obj.id = client.id;
                    obj.nom = client.nom;
                    obj.estLeader = _this.formatBoolean(client.estLeader);
                    obj.estClient = _this.formatBoolean(!client.estClient);
                    obj.estSansContrat = _this.formatBoolean(client.estSansContrat);
                    obj.estActif = _this.formatBoolean(client.estActif);

                    let indicateurPremierEquipement = _.find(client.listeIndicateurs, { "code": Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG });

                    console.log("indicateurPremierEquipement : ", indicateurPremierEquipement);

                    obj.premierEquipement = _this.gereTriHack("valeurDate", indicateurPremierEquipement ? indicateurPremierEquipement.valeurDate : null);

                    obj.nbPersonneRelation = client.nbPersonneRelation;

                    // maintenant on va recupérer les indicateurs pour ce client
                    let i = 0;
                    let indiceIndicateurClient = 11; //this.colonneCsvClient.length - 1;
                    columns.forEach(function (column: any) {
                        // on exclut les indicateurs de type client
                        if (i > indiceIndicateurClient) {
                            // attention, ici le 10 correspond au nombre de colonnes.
                            // y avait 9. avec nbPersonneRelation en plus : +1 --> 10
                            let ps = column.bind.split("_");
                            if (ps.length > 0) {
                                obj[column.bind] = _this.gereTriHack(ps[1], client.listeIndicateurs[ps[0]][ps[1]]);
                                // cas particulier ajouté d'une colone dateMaj, sinon , c'est "valeurNumber"
                                // bidouille
                                if (ps[1] === "dateMaj") {
                                    // la date est le champ dateMaj,le montant esst le champ valeurNumber
                                    let valeur: any = client.listeIndicateurs[ps[0]]["valeurNumber"];
                                    console.log("valeur : ", valeur);

                                    if (valeur === null) { // si la valeur n'est pas renseignée, idem pour la date.
                                        obj[column.bind] = "NC";
                                    } else {
                                        let maDate: Date = obj[column.bind];
                                        // console.log("maDate : ", maDate);
                                        let texte: string = moment(maDate).format("MM/YYYY");
                                        if (texte === "Invalid date") {
                                            texte = "NC";
                                        }
                                        obj[column.bind] = " " + texte; // si on laisse MM/AAAAA, excel reforme à la lecture.
                                    }
                                }
                            }
                        }
                        i++;
                    });
                    _tab.push(obj);
                }
            });
            return this.$q.when(_tab);
        }

        // gère le hack du tri pour reformatter proprement la valeur (valueur Infinity pour les number etc)
        private gereTriHack(type: string, valeur: any): any {
            if (type === "valeur") {          // texte
                let chaineTravail: string = <string>valeur;

                if (chaineTravail.search(Constantes.Application.FIN_CHAINE_MAX) !== -1) {
                    return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                }
                return (valeur !== undefined && valeur !== null && valeur !== "") ? valeur : Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;

            } else if (type === "valeurDate") {      // date @note on n'arrivera jamais en date car on passe par formatterDate()
                const dateMin: Date = moment(Constantes.Application.DATE_MIN).toDate();
                const dateMax: Date = moment(Constantes.Application.DATE_MAX).toDate();

                if (valeur) {
                    if (moment(valeur).isSame(dateMax)) {
                        return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    }
                    if (moment(valeur).isSame(dateMin)) {
                        return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    }
                    return moment(valeur).format("DD/MM/YYYY");
                } else {
                    return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                }
            } else if (type === "valeurNumber") {      // number
                const nombreMin: number = Number.NEGATIVE_INFINITY;
                const nombreMax: number = Number.POSITIVE_INFINITY;

                if (valeur !== null
                    && valeur !== undefined) {
                    if (valeur === nombreMin
                        || valeur === nombreMax) {
                        return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                    }
                    // ici, remplacer le . par ,
                    let texte: string = valeur.toString();
                    texte = texte.replace(".", ",");
                    return texte;
                } else {
                    return Constantes.Application.CHAINE_INDICATEUR_NON_CONNU;
                }
            }
            
            return valeur;
        }

        private formatBoolean(val: boolean): string {
            return (val) ? "Oui" : "";
        }

        public formaterDate(date: any) {
            let formatDate: any = "";
            if (date !== null && angular.isDefined(date)
                && date !== "0001-01-01"
                && date !== "9999-12-31"
                && date !== "1970-01-01") {
                formatDate = moment(date).format(this.formatDate);
            }
            return formatDate;
        }

        /**
         * Méthode permettant de consulter les produits (=> en fait on se débranche vers l'affichage de la revue).
         */
        public consulterProduits(): ng.IPromise<void> {
            ClientsControleur.logger.info(">>> Appel de la méthode : ClientsControleur.consulterProduits <<<");

            let contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille = <Modeles.Application.IContexteGererPortefeuille>{};
            contexteGererPortefeuille = this.construireContexte(false);

            return this.contexteService.ajouterDonneesDebranchementBilanRevueRelationEco(contexteGererPortefeuille)
                .then(() => {
                    //Gestion en vue du retour
                    // ajoute une action remarquable
                    this.contexteService.tracerSuiviAction(ClientsControleur.logger, Constantes.ActionsRemarquables.BTN_CONS_PROD);

                    return this.lisaApplication.next(Constantes.CodeProcessusLisa.CODE_LISA_BILAN_REVUE, Constantes.Url.BILAN_REVUE)
                        .then(() => {})
                        .catch((erreur: MyWay.Services.Erreur) => {
                            ClientsControleur.logger.debug(">>> Echec sur lisa.next de la méthode : ClientsControleur.consulterProduits <<<");
                            this.popupService.showErreur(erreur);
                        });
                });
        }

        /**
         * Methode qui permet de supprimer tous les filtres
         * @returns {void}
         */
        public supprimerTousLesFiltres(): void {
            if (this.typeVue === Enum.PageClients.TYPE_VUE.VUE_CLIENTS) { // traitement vue clients
                this.filtreService.razFiltresClient();
            } else {
                this.filtreService.razFiltresRelationEco();
            }
            this.majFiltres();
        }

        public controlerLimiteClientAtteinte(accesDepuisBlocRevue?: boolean): boolean {
            let resultat: boolean = false;
            resultat = this.portefeuilleService.getTypeForcage() !== Enum.PageClients.TYPE_FORCAGE.SANS
                && this.messageLimiteClientsAtteinte
                && this.listeClientsService.getEstLimiteClientsAtteinte()
                && (
                    (this.tableauClients && this.tableauClients.data && this.tableauClients.data.length > 0)
                    || (this.tableauRelations && this.tableauRelations.data && this.tableauRelations.data.length > 0)
                )
                && !accesDepuisBlocRevue;
            return resultat;
        }

        public ouvrirChoixForcage(): ng.IPromise<void> {
            return this.accederForcage();
        }

        private valoriserMessageLimiteClientsAtteinte(typeForcage: Enum.PageClients.TYPE_FORCAGE): string {
            let resultat: string = "";

            if (typeForcage) {
                switch (typeForcage) {
                    case Enum.PageClients.TYPE_FORCAGE.CLIENTS:
                        resultat = (this.portefeuilleService.getListePortefeuillesActifs().length === 1) ?
                            Portefeuille.Constantes.Application.LIMITE_CLIENTS_ATTEINTE_CHOIX_CLIENTS_SINGULIER : Portefeuille.Constantes.Application.LIMITE_CLIENTS_ATTEINTE_CHOIX_CLIENTS_PLURIEL;
                        resultat = resultat + " " + Portefeuille.Constantes.Application.LISTE_RELATIONS_ECONOMIQUES_INACCESSIBLE;
                        break;
                    case Enum.PageClients.TYPE_FORCAGE.PROSPECTS:
                        resultat = (this.portefeuilleService.getListePortefeuillesActifs().length === 1) ?
                            Portefeuille.Constantes.Application.LIMITE_CLIENTS_ATTEINTE_CHOIX_PROSPECTS_SINGULIER : Portefeuille.Constantes.Application.LIMITE_CLIENTS_ATTEINTE_CHOIX_PROSPECTS_PLURIEL;
                        resultat = resultat + " " + Portefeuille.Constantes.Application.LISTE_RELATIONS_ECONOMIQUES_INACCESSIBLE;
                        break;
                    default:
                        resultat = (this.portefeuilleService.getListePortefeuillesActifs().length === 1) ?
                            Portefeuille.Constantes.Application.LIMITE_CLIENTS_ATTEINTE_CHOIX_TOUT_SINGULIER : Portefeuille.Constantes.Application.LIMITE_CLIENTS_ATTEINTE_CHOIX_TOUT_PLURIEL;
                        resultat = resultat + " " + Portefeuille.Constantes.Application.INDICATEURS_PREDEFINIS_NON_MODIFIABLES;
                        break;
                }
            }

            return resultat;
        }

        public afficherModifierChoix(): boolean {
            return (this.listeClientsService.getAffichageModificationChoix());
        }

        private alimenterObjetEds(): Modeles.Application.IObjetEdsChoisi {
            let resultat: Modeles.Application.IObjetEdsChoisi = <Modeles.Application.IObjetEdsChoisi>{};

            resultat.objCaractAgent = this.portefeuilleService.getCaracteristiquesAgent();
            resultat.listePtfVisu = _.pluck(this.portefeuilleService.getListePortefeuillesActifs(), "id");
            resultat.typeForcage = this.portefeuilleService.getTypeForcage();
            resultat.affichageModificationChoix = this.listeClientsService.getAffichageModificationChoix();
            resultat.locationPath = Constantes.Url.CLIENTS;

            return resultat;
        }

        /**
         * Méthode appelée à chaque fois qu'un tri est demandé sur une des colonnes d'un tableau
         * @param predicate
         * @param reserve
         */
        public onSortChange(predicate: any, reserve: any): any {
            let proprietes: string;

            if (predicate) {
                proprietes = predicate;
                proprietes = proprietes.replace("[", ".");
                proprietes = proprietes.replace("]", "");

                if (this.afficherTableauRelation() && this.tableauRelations && this.tableauRelations.data && this.tableauRelations.data.length > 0) {
                    this.traiterTriDonneesListeTableaux(this.tableauRelations.data, proprietes, reserve);
                }

                if (this.afficherTableauClients() && this.tableauClients && this.tableauClients.data && this.tableauClients.data.length > 0) {
                    this.traiterTriDonneesListeTableaux(this.tableauClients.data, proprietes, reserve);
                }
            }

            return false;
        }

        /**
         * Gère le tri des données listeTableaux transmise en paramètre en appliquant systématiquement toute valeur à 'NC' en fin de tri.
         * @param listeTableaux
         * @param proprietes
         * @param triEstDecroissant
         */
        private traiterTriDonneesListeTableaux(listeTableaux: Array<Object>, proprietes: string, triEstDecroissant: any): void {
            let listeProprietesTri: Array<string>;
            let sousObjet: any;
            
            if (proprietes && proprietes.length > 0 && listeTableaux && listeTableaux.length > 0) {
                listeProprietesTri = proprietes.split(".");
                sousObjet = angular.copy(listeTableaux[0]);
                
                _.forEach(listeProprietesTri, (proprieteLue: string) => {
                    sousObjet = sousObjet[proprieteLue];

                    if (proprieteLue === listeProprietesTri[listeProprietesTri.length - 1]) {
                        if (typeof sousObjet === Constantes.Application.DONNEE_STRING) {
                            //Détermination de la chaîne max
                            this.valoriserChaineMaxPourComparaison(listeTableaux, proprietes);
                        }
                    }
                });

                listeTableaux.sort((a: Object, b: Object) => {
                    return this.analyserRecursifPourTriUnCritere(a, b, listeProprietesTri, 0, triEstDecroissant);
                });

                // resultat du tri :
             //   console.log(listeTableaux);

                // TODO le tri du tableau est OK mais il n'est pas pris en compte dans le tri. Voir comment on peut faire appliquer le tri sur valeur_sort
                // voir si un comparator peut etre utilisé sur chaque colonne de type data, qui va comparer sa valeur en "_sort" au lieu de l'autre, et comparer la dessus
            }
        }

        /**
         * Détermine la valeur de la plus grande chaîne (en termes de croissant - décroissant)
         * @param listeDonnees
         * @param proprietes
         */
        private valoriserChaineMaxPourComparaison(listeDonnees: Array<Object>, proprietes: string): void {
            let chaineMaxTravail: string;
            this.chaineMaxPourComparaison = "";

            _.forEach(listeDonnees, (itemLu: Object) => {
                this.determinerChaineMaxRecursif(itemLu, proprietes);
            });

            chaineMaxTravail = this.chaineMaxPourComparaison;
            if (chaineMaxTravail.search(Constantes.Application.FIN_CHAINE_MAX) === -1) {
                this.chaineMaxPourComparaison = chaineMaxTravail + Constantes.Application.FIN_CHAINE_MAX;
            }
        }

        /**
         * Balaye les propriétés d'un objet de façon récursive jusqu'à atteindre la dernière propriété (càd la plus profonde) indiquée dans le paramètre proprietesAExplorer
         * @param objet
         * @param proprietesAExplorer
         */
        private determinerChaineMaxRecursif(objet: Object, proprietesAExplorer: string): void {
            if (proprietesAExplorer.search("\\.") !== -1) {
                this.determinerChaineMaxRecursif(objet[proprietesAExplorer.split(".")[0]], proprietesAExplorer.substr(proprietesAExplorer.search("\\.") + 1));
            } else if (!this.chaineMaxPourComparaison || objet[proprietesAExplorer] > this.chaineMaxPourComparaison) {
                        this.chaineMaxPourComparaison = objet[proprietesAExplorer];
            }
        }

        /**
         * Tri récursif en se basant sur les propriétés données de 2 objets, et le sens du tri demandé.
         * @param objetA
         * @param objetB
         * @param listeProprietes
         * @param indicePropriete
         * @param triEstDecroissant
         */
        private analyserRecursifPourTriUnCritere(objetA: Object, objetB: Object, listeProprietes: Array<string>, indicePropriete: number, triEstDecroissant: boolean): number {
            const resultatAEgalB: number = 0;
            const resultatASuperieurB: number = 1;
            const resultatAInferieurB: number = -1;
            let resultatComparaison: number = resultatAEgalB;
            //Cas ou au moins un des deux objets passés en paramètre est null (ou undefined) => l'objet non défini sera considéré supérieur
            if (!objetA || !objetB) {
                if (!objetA && objetB) {
                    resultatComparaison = resultatASuperieurB;
                }

                if (objetA && !objetB) {
                    resultatComparaison = resultatAInferieurB;
                }

                //On ajuste la valeur du résultat à retourner selon le sens réel du tri.
                resultatComparaison = (triEstDecroissant === false) ? resultatComparaison : resultatComparaison * (-1);

                return resultatComparaison;
            }

            //Cas où tous les paramètres sont renseignés
            if (objetA && objetB && listeProprietes && listeProprietes.length > 0 && indicePropriete >= 0) {

                //On examine la dernière propriété qui est celle de plus bas niveau (bref, celle sur laquelle s'applique le tri) (valeur, valeurNumber, etc)
                if (indicePropriete === listeProprietes.length - 1) {

                    let propertyName: string = listeProprietes[indicePropriete];
                    let propertyNameSort: string = propertyName; // + "_sort";
                    
                    if (typeof objetA[propertyName] === Constantes.Application.DONNEE_NUMBER || propertyName === Constantes.Application.DONNEE_VALEUR_NUMBER) {
                        let nombreNC: number = this.valoriserNombreNCSelonSensTri(triEstDecroissant);

                        // au début on se base sur la valeur existante, puis on ne travaillera ensuite que sur la valeur _sort
                        var propACompare = (typeof objetA[propertyNameSort] !== "undefined") ? objetA[propertyNameSort] : objetA[propertyName];
                        var propBCompare = (typeof objetB[propertyNameSort] !== "undefined") ? objetB[propertyNameSort] : objetB[propertyName];
                        
                        objetA[propertyNameSort] = this.valoriserProprieteNombreViaEquivalentNC(propACompare, nombreNC);
                        objetB[propertyNameSort] = this.valoriserProprieteNombreViaEquivalentNC(propBCompare, nombreNC);
                        
                        resultatComparaison = this.comparerNumberANumberB(objetA[propertyNameSort], objetB[propertyNameSort], nombreNC);

                    } else if (propertyName === Constantes.Application.DONNEE_VALEUR_DATE) {
                        let dateNC: Date = this.valoriserDateNCSelonSensTri(triEstDecroissant);

                        var propACompare = (typeof objetA[propertyNameSort] !== "undefined") ? objetA[propertyNameSort] : objetA[propertyName];
                        var propBCompare = (typeof objetB[propertyNameSort] !== "undefined") ? objetB[propertyNameSort] : objetB[propertyName];

                        objetA[propertyNameSort] = this.valoriserProprieteDateViaEquivalentNC(propACompare, dateNC);
                        objetB[propertyNameSort] = this.valoriserProprieteDateViaEquivalentNC(propBCompare, dateNC);

                        resultatComparaison = this.comparerDateADateB(objetA[propertyNameSort], objetB[propertyNameSort], dateNC);
                    } else {
                        let chaineNC: string = this.valoriserChaineNCSelonSensTri(triEstDecroissant);

                        var propACompare = (typeof objetA[propertyNameSort] !== "undefined") ? objetA[propertyNameSort] : objetA[propertyName];
                        var propBCompare = (typeof objetB[propertyNameSort] !== "undefined") ? objetB[propertyNameSort] : objetB[propertyName];

                        objetA[propertyNameSort] = this.valoriserProprieteChaineViaEquivalentNC(propACompare, chaineNC);
                        objetB[propertyNameSort] = this.valoriserProprieteChaineViaEquivalentNC(propBCompare, chaineNC);

                        resultatComparaison = this.comparerStringAStringB(objetA[propertyNameSort], objetB[propertyNameSort]);
                    }

                    //On ajuste la valeur du résultat à retourner selon le sens réel du tri.
                    resultatComparaison = (triEstDecroissant === false) ? resultatComparaison : resultatComparaison * (-1);

                    return resultatComparaison;
                }

                return this.analyserRecursifPourTriUnCritere(objetA[listeProprietes[indicePropriete]], objetB[listeProprietes[indicePropriete]], listeProprietes, indicePropriete + 1, triEstDecroissant);
            }
        }

        /**
         * Détermine la valeur correspondant à l'affichage NC pour une chaîne selon le sens du tri 
         * (ex pour un tri croissant la valeur retournée correspondra à la plus petite chaîne possible; à savoir "")
         * @param triEstDecroissant
         */
        private valoriserChaineNCSelonSensTri(triEstDecroissant: boolean): string {
            const chaineMin: string = "";
            const chaineMax: string = this.chaineMaxPourComparaison;
            return (triEstDecroissant === false) ?
                angular.copy(chaineMax) :
                angular.copy(chaineMin);
        }

        /**
         * Détermine la valeur correspondant à l'affichage NC pour un nombre selon le sens du tri 
         * (ex pour un tri croissant la valeur retournée correspondra à la plus petite valeur numérique possible; à savoir NEGATIVE_INFINITY)
         * @param triEstDecroissant
         */
        private valoriserNombreNCSelonSensTri(triEstDecroissant: boolean): number {
            return (triEstDecroissant === false) ?
                Number.POSITIVE_INFINITY :
                Number.NEGATIVE_INFINITY;
        }

        /**
         * Détermine la valeur correspondant à l'affichage NC pour une date selon le sens du tri 
         * (ex pour un tri croissant la valeur retournée correspondra à la plus petite date possible; à savoir 01/01/1970)
         * @param triEstDecroissant
         */
        private valoriserDateNCSelonSensTri(triEstDecroissant: boolean): Date {
            return (triEstDecroissant === false) ?
                angular.copy(this.dateMax) :
                angular.copy(this.dateMin);
        }

        /**
         * Détermine si la valeur initiale de la propriété de type chaîne doit être écrasée par la valeur correspondant à un affichage NC
         * @param valeurInitialePropriete
         * @param chaineNC
         */
        private valoriserProprieteChaineViaEquivalentNC(valeurInitialePropriete: string, chaineNC: string): string {
            return (!valeurInitialePropriete ||
                valeurInitialePropriete === Constantes.Application.CHAINE_INDICATEUR_NON_CONNU ||
                valeurInitialePropriete === "" ||
                valeurInitialePropriete === this.chaineMaxPourComparaison) ?
                chaineNC :
                valeurInitialePropriete;
        }

        /**
         * Détermine si la valeur initiale de la propriété de type nombre doit être écrasée par la valeur correspondant à un affichage NC
         * @param valeurInitialePropriete
         * @param nombreNC
         */
        private valoriserProprieteNombreViaEquivalentNC(valeurInitialePropriete: number, nombreNC: number): number {
            return (nombreNC !== null &&
                nombreNC !== undefined &&
                (valeurInitialePropriete === null ||
                 valeurInitialePropriete === undefined ||
                 valeurInitialePropriete === Number.NEGATIVE_INFINITY ||
                 valeurInitialePropriete === Number.POSITIVE_INFINITY)) ?
                nombreNC :
                valeurInitialePropriete;
        }

        /**
         * Détermine si la valeur initiale de la propriété de type date doit être écrasée par la valeur correspondant à un affichage NC
         * @param valeurInitialePropriete
         * @param dateNC
         */
        private valoriserProprieteDateViaEquivalentNC(valeurInitialePropriete: Date, dateNC: Date): Date {
            return (dateNC &&
                (!valeurInitialePropriete ||
                moment(valeurInitialePropriete).isSame(this.dateMin) ||
                moment(valeurInitialePropriete).isSame(this.dateMax))) ?
                dateNC :
                valeurInitialePropriete;
        }

        /**
         * Compare 2 nombres et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param nombreA
         * @param nombreB
         * @param nombreComparaison
         */
        private comparerNumberANumberB(nombreA: number, nombreB: number, nombreComparaison: number): number {
            const resultatAEgalB: number = 0;
            const resultatASuperieurB: number = 1;
            const resultatAInferieurB: number = -1;

            if (nombreA === undefined && nombreB === null) {
                return resultatASuperieurB;
            }

            if (nombreA === null && nombreB === undefined) {
                return resultatAInferieurB;
            }

            if (nombreA === null) {
                nombreA = nombreComparaison;
            }

            if (nombreB === null) {
                nombreB = nombreComparaison;
            }

            if (nombreA > nombreB) {
                return resultatASuperieurB;
            } else if (nombreA < nombreB) {
                return resultatAInferieurB;
            } else {
                return resultatAEgalB;
            }
        }

        /**
         * Compare 2 dates et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param dateA
         * @param dateB
         * @param dateComparaison
         */
        private comparerDateADateB(dateA: Date, dateB: Date, dateComparaison: Date): number {
            const resultatAEgalB: number = 0;
            const resultatASuperieurB: number = 1;
            const resultatAInferieurB: number = -1;

            if (dateA === undefined && dateB === null) {
                return resultatASuperieurB;
            }

            if (dateA === null && dateB === undefined) {
                return resultatAInferieurB;
            }

            if (!dateA) {
                dateA = dateComparaison;
            }

            if (!dateB) {
                dateB = dateComparaison;
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
         * Compare 2 chaînes et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param chaineA
         * @param chaineB
         */
        private comparerStringAStringB(chaineA: string, chaineB: string): number {
            const resultatAEgalB: number = 0;
            const resultatASuperieurB: number = 1;
            const resultatAInferieurB: number = -1;
            let resultatComparaison: number = resultatAEgalB;

            if (chaineA > chaineB) {
                resultatComparaison = resultatASuperieurB;
            } else if (chaineA < chaineB) {
                resultatComparaison = resultatAInferieurB;
            } 
            return resultatComparaison;
        }

    }

    // Déclaration du controleur
    app.controller(ClientsControleur.CLASS_NAME, ClientsControleur);
}