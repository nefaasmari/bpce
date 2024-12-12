/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angularjs\angular.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angularjs\angular-route.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\bootstrap\bootstrap.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angular-ui-bootstrap\angular-ui-bootstrap.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\lodash\lodash.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\moment\moment.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\ui\myway-ui.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\services\framework-client-app.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\services\com-interdomaine.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\fonctionnel\myway.c05.10\19.03\myway.c05.10.commun.d.ts" /> 

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            releveLivret.releveLivretModule = angular.module("myway.gestionEpargne.releveLivret", ["ngRoute", "myway.ui", "ui.bootstrap", "ngAnimate", "moduleAgent",
                "ngSanitize", "myway.gestionEpargne.commun", "myway.c0410.commun", "myway.comInterdomaine"]);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            /**
             * Données permettant de sauvegarder et restaurer les données du PEL dans le dossier de vente à distance
             *
             */
            var ConstantesReleveLivret = (function () {
                function ConstantesReleveLivret() {
                }
                ConstantesReleveLivret.OFFRE_REPRISE_EN_VAD_CORPS = "La reprise d'un produit d'Epargne dans une offre n'est pas possible sur le canal Téléphone. Merci de choisir le canal Face à Face";
                return ConstantesReleveLivret;
            }());
            releveLivret.ConstantesReleveLivret = ConstantesReleveLivret;
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            var ConstantesCommunes = myway.gestionEpargne.commun.ConstantesCommunes;
            var ReleveCompteConstantes = (function () {
                function ReleveCompteConstantes() {
                }
                ReleveCompteConstantes.HABILITATIONS = ["SHNXKQ", "SHNXKR", "SHNXKS", "SHNXK3"];
                ReleveCompteConstantes.IDENTIFIANT_PRODUIT_SERVICE_COMPTE = 41;
                ReleveCompteConstantes.IDENTIFIANT_PRODUIT_SERVICE_EPARGNE = 142;
                //si « 01 » ‘Mineur Emancipé’ », « 02 » ‘Mineur sous administration Legale Pure et simple’ ou  « 07 » ‘Majeur capable ‘ on affiche pas la checkbox
                ReleveCompteConstantes.CAPACITE_01 = "01";
                ReleveCompteConstantes.CAPACITE_02 = "02";
                ReleveCompteConstantes.CAPACITE_07 = "07";
                ReleveCompteConstantes.ERREUR_OUVERTURE = "Impossible de sauvegarder les données du relevé de compte, l'appel du webservice a echoué pour les raisons suivantes: ";
                //labels statics de la vue
                ReleveCompteConstantes.ENVOI_LABEL = "Envoi du relevé de compte";
                ReleveCompteConstantes.JOUR_LABEL = "Jour";
                ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_LABEL = "Envoi de relevé(s) supplémentaire(s)";
                ReleveCompteConstantes.AU_LABEL = "au : ";
                ReleveCompteConstantes.ADRESSE = "Adresse";
                ReleveCompteConstantes.ADRESSE2 = "Adresse : ";
                ReleveCompteConstantes.A_DEFINIR_LABEL = "A déterminer";
                ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_BRAILLE_LABEL = "Relevé supplémentaire en braille";
                ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_PERSONNE_PROTEGEE_LABEL = "Relevé supplémentaire à l’adresse de la personne protégée";
                ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_SEPARE_LABEL = "Relevé séparé";
                ReleveCompteConstantes.PERIODICITE_LABEL = "Périodicité";
                ReleveCompteConstantes.JOUR_ARRETE_RELEVE_LABEL = "Jour d'arrêté";
                return ReleveCompteConstantes;
            }());
            releveLivret.ReleveCompteConstantes = ReleveCompteConstantes;
            var ReleveCompteControleur = (function () {
                function ReleveCompteControleur($scope, $rootScope, $q, releveCompteDonneesService, serviceAgentExtended, espaceGlobalService, compteBddCommunService, listeCompteService, epargneCommunService, ggoService, blocMDECRMPService, donneesSauvegardeProduitServiceRMPService, creerDossierDeVenteService, libelleProduitEpargneService, formulaireRMPService, demandeFicobaService) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$rootScope = $rootScope;
                    this.$q = $q;
                    this.releveCompteDonneesService = releveCompteDonneesService;
                    this.serviceAgentExtended = serviceAgentExtended;
                    this.espaceGlobalService = espaceGlobalService;
                    this.compteBddCommunService = compteBddCommunService;
                    this.listeCompteService = listeCompteService;
                    this.epargneCommunService = epargneCommunService;
                    this.ggoService = ggoService;
                    this.blocMDECRMPService = blocMDECRMPService;
                    this.donneesSauvegardeProduitServiceRMPService = donneesSauvegardeProduitServiceRMPService;
                    this.creerDossierDeVenteService = creerDossierDeVenteService;
                    this.libelleProduitEpargneService = libelleProduitEpargneService;
                    this.formulaireRMPService = formulaireRMPService;
                    this.demandeFicobaService = demandeFicobaService;
                    this.clientSousTutelle = false;
                    this.estHabilite = false;
                    this.estSautDeFeuilleAutorise = false;
                    this.estSautDeFeuilleActiveParDefaut = false;
                    this.listePersonnesTableau = [];
                    //label pour la vue
                    this.envoiLabel = ReleveCompteConstantes.ENVOI_LABEL;
                    this.jourLabel = ReleveCompteConstantes.JOUR_LABEL;
                    this.releveSupplementaireLabel = ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_LABEL;
                    this.auLabel = ReleveCompteConstantes.AU_LABEL;
                    this.adresse = ReleveCompteConstantes.ADRESSE;
                    this.adresse2 = ReleveCompteConstantes.ADRESSE2;
                    this.releveSupplementaireBrailleLabel = ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_BRAILLE_LABEL;
                    this.releveSupplementairePersonneProtegeeLabel = ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_PERSONNE_PROTEGEE_LABEL;
                    this.releveSupplementaireSepareLabel = ReleveCompteConstantes.RELEVE_SUPPLEMENTAIRE_SEPARE_LABEL;
                    this.periodiciteLabel = ReleveCompteConstantes.PERIODICITE_LABEL;
                    this.jourArreteReleveLabel = ReleveCompteConstantes.JOUR_ARRETE_RELEVE_LABEL;
                    this.aDefinirLabel = ReleveCompteConstantes.A_DEFINIR_LABEL;
                    this.MODE_PRECEDENT = "1";
                    this.estInitialise = false;
                    /*
                     * Permet de valider le formulaire du releve de compte à l'aide des données saisies dans le formulaire
                     * On valide d'abord le formulaire (contrôle de données) puis on expose les données à GGO
                     */
                    this.validerDonneesReleveCompte = function () {
                        // Si le formulaire en avenant a été modifié, on renseigne la propriété "estModifie" du contexte
                        if (_this.formulaireReleveCompte && _this.formulaireReleveCompte.releveCompteModifier && _this.enModification) {
                            _this.contexte.donneesProduit.estModifie.valeur = true;
                        }
                        var tabErreurs = [];
                        _this.espaceGlobalService.enregistrerObjetGenerique(_this.formulaireReleveCompte);
                        tabErreurs.push(new GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre(GestionGeneriqueOffres.Types.NiveauErreur.Ok, 0, ""));
                        if (_this.repriseOffreVAD()) {
                            tabErreurs.push(new GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre(GestionGeneriqueOffres.Types.NiveauErreur.ErreurFatale, 2, releveLivret.ConstantesReleveLivret.OFFRE_REPRISE_EN_VAD_CORPS));
                        }
                        return _this.$q.when(tabErreurs);
                    };
                    /*
                    * Permet d'enregistrer le relevé de compte et le relevé de compte numérique (si besoin)
                    */
                    this.miseEnGestion = function () {
                        if (_this.enOuverture) {
                            return _this.enregistrerReleveCompte().then(function (retourMessages) {
                                return retourMessages;
                            });
                        }
                        else if (_this.enModification) {
                            if (_this.formulaireReleveCompte && _this.formulaireReleveCompte.releveCompteModifier) {
                                return _this.enregistrerReleveCompte().then(function (retourMessages) {
                                    return retourMessages;
                                });
                            }
                            else {
                                return _this.compteBddCommunService.CompteRenduMiseEnGestionSansModifier().then(function (compteRenduMiseEnGestion) {
                                    return compteRenduMiseEnGestion;
                                });
                            }
                        }
                        else {
                            return null;
                        }
                    };
                    /**
                     * Permet de sauvergarder le formulaire de saisie du RMP dans le dossier de vente,
                     * @implements {GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde}
                     * @returns {ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>}
                     */
                    this.sauvegarderDossierDeVente = function () {
                        _this.serviceAgentExtended.Trace.info("c05.10-v1 => releve-livret-controller.ts => sauvegarderDossierDeVente() => this.formulaireReleveCompte = " + _this.formulaireReleveCompte);
                        if (_this.formulaireReleveCompte) {
                            _this.donneesMDEC = _this.blocMDECRMPService.creerDonneesMDEC(_this.formulaireReleveCompte);
                            _this.donneesSauvegardeProduitServiceRMP = _this.donneesSauvegardeProduitServiceRMPService.creerDonneesSauvegardeProduitServiceRMP(_this.formulaireReleveCompte);
                            return _this.creerDossierDeVenteService.creerDossierDeVente(_this.donneesMDEC, _this.donneesSauvegardeProduitServiceRMP);
                        }
                        else {
                            _this.serviceAgentExtended.Trace.error("c05.10-v1 => releve-livret-controller.ts => sauvegarderDossierDeVente() => this.formulaireReleveCompte = " + _this.formulaireReleveCompte);
                            return null;
                        }
                    };
                    this.estEnVAD();
                    if (this.repriseOffreVAD()) {
                        var messagesErreur = [];
                        messagesErreur.push(new GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre(GestionGeneriqueOffres.Types.NiveauErreur.ErreurFatale, 2, releveLivret.ConstantesReleveLivret.OFFRE_REPRISE_EN_VAD_CORPS));
                        this.$scope.$emit("CSPR_EMISSION_ERREUR#" + this.idBloc, messagesErreur);
                    }
                    this.determinerMode(this.codeActeGestion.substring(0, 2));
                    this.detenteur = this.contexte.donneesProduit.detenteur;
                    this.determinerRestitutionDV(this.contexte);
                    this.contexteAppel = this.contexte.contexteAppel.toString();
                    this.identifiantProduitService = this.contexte.donneesProduit.produit.produitCaracteristique.identifiantProduitService;
                    if (this.identifiantProduitService === ReleveCompteConstantes.IDENTIFIANT_PRODUIT_SERVICE_EPARGNE) {
                        this.listePeriodicite = releveLivret.PeriodiciteEnum.EPARGNE;
                    }
                    else if (this.identifiantProduitService === ReleveCompteConstantes.IDENTIFIANT_PRODUIT_SERVICE_COMPTE) {
                        this.listePeriodicite = releveLivret.PeriodiciteEnum.COMPTE;
                    }
                    this.recupererParametrageCaisse().then(function () {
                        _this.estInitialise = true;
                    });
                    // Si on est en récapitulatif aucun intéret de traiter le tableau des personnes
                    if (this.contexte.modeAffichage !== GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif) {
                        //on récupère la liste de personnes par les paramètres fournis par GGO
                        this.traiterListePersonnes(this.contexte);
                        //si plusieurs personnes (on appelle le get une fois par personne pour avoir l'état de chaque personne des entités titulaires
                        angular.forEach(this.listePersonnesTableau, function (personne) {
                            if (_this.clientSousTutelle === false) {
                                _this.afficherCacherCheckBoxDeuxiemeReleve(personne.codeCapaciteJuridique);
                            }
                        });
                        this.creerFormulaireReleveCompte();
                    }
                    else {
                        this.creerFormulaireReleveCompte();
                    }
                    this.contexte.donneesProduit.pointsEntree.validerFormulaire = this.validerDonneesReleveCompte;
                    this.contexte.donneesProduit.pointsEntree.mettreEnGestion = this.miseEnGestion;
                    // Fonction d'enregistrement des données appelé par GGO.            
                    this.contexte.donneesProduit.pointsEntree.sauvegarderDossierDeVente = this.sauvegarderDossierDeVente;
                }
                /**
                 * Renvoie TRUE si le produit est repris et qu'on est en VAD.
                 * @returns {boolean}
                 */
                ReleveCompteControleur.prototype.repriseOffreVAD = function () {
                    return this.enVAD && this.contexte.donneesProduit.repris;
                };
                /**
                 * Valorise la variable enVAD en fonction du canal de vente
                 */
                ReleveCompteControleur.prototype.estEnVAD = function () {
                    this.enVAD = this.contexte.offreSouscrite.codeCanal === "FF" ? false : true;
                };
                ReleveCompteControleur.prototype.recupererParametrageCaisse = function () {
                    var _this = this;
                    var codeEtablissement = this.contexte.etablissement.codeEtablissement;
                    return this.serviceAgentExtended.getDonneesDelocalisees(codeEtablissement, "NU4K").then(function (table) {
                        var parametrageCaisseRMP = table.donnees[0];
                        _this.estSautDeFeuilleAutorise = parametrageCaisseRMP.CINSAF === "1";
                        _this.estSautDeFeuilleActiveParDefaut = parametrageCaisseRMP.CINSFE === "1";
                    }).catch(function (error) {
                        // si on ne récupère pas le paramétrage on considère que le saut de page n'est pas possible
                        _this.estSautDeFeuilleAutorise = false;
                        _this.estSautDeFeuilleActiveParDefaut = false;
                    });
                };
                ReleveCompteControleur.prototype.verifierHabilitation = function () {
                    var _this = this;
                    this.serviceAgentExtended.Habilitation.EstHabilite(ReleveCompteConstantes.HABILITATIONS).then(function (estHabilite) {
                        if (estHabilite) {
                            _this.estHabilite = true;
                        }
                        _this.compteBddCommunService.notifierChargementTermine(_this.$scope, _this.idBloc);
                    }).catch(function (erreur) {
                        _this.compteBddCommunService.notifierChargementTermine(_this.$scope, _this.idBloc);
                    });
                };
                /*
                 /   Cette fonction permet de récupérer chaque personne composant l'entité titulaire du relevé de compte
                */
                ReleveCompteControleur.prototype.traiterListePersonnes = function (contexte) {
                    var _this = this;
                    //on récupère le numéro du détenteur (numéro de l'entité titulaire pour le relevé de compte)
                    var idDetenteur = contexte.donneesProduit.detenteur.caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire;
                    //on récupère la composition de l'entité titulaire
                    var listePersonnesEntite = [];
                    angular.forEach(contexte.entitesTitulaires, function (entiteTitulaire) {
                        if (entiteTitulaire.caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire === idDetenteur) {
                            angular.forEach(entiteTitulaire.listeCompositionEntiteTitulaire, function (compositionEntiteTitulaire) {
                                listePersonnesEntite.push(compositionEntiteTitulaire);
                            });
                        }
                    });
                    //on récupère les informations pour chaque personne qui est dans la composition de l'entité titulaire
                    angular.forEach(contexte.personnes, function (personneContexte) {
                        angular.forEach(listePersonnesEntite, function (compositionEntiteTitulaire) {
                            if (personneContexte.identifiantPersonne === compositionEntiteTitulaire.identifiantTiers) {
                                //on pousse chaque personne dans le tableau de personnes
                                _this.nourrirTableau({
                                    identifiantPersonne: personneContexte.identifiantPersonne,
                                    identifiantEntite: idDetenteur,
                                    destinataire: compositionEntiteTitulaire.designationEntiteTitulaire,
                                    adresse: _this.recupererAdressePersonne(personneContexte),
                                    codeCapaciteJuridique: personneContexte.particulierInformation.codeCapaciteJuridique
                                });
                            }
                        });
                    });
                };
                /*
                 Permet de nourir le tableau que l'on poussera ensuite dans le formulaire
                */
                ReleveCompteControleur.prototype.nourrirTableau = function (personne) {
                    this.listePersonnesTableau.push(personne);
                };
                /*
                    Permet de déterminer si l'on affiche ou pas la checkbox deuxieme relevé à partir de la capacité juridique de la personne
                */
                ReleveCompteControleur.prototype.afficherCacherCheckBoxDeuxiemeReleve = function (capaciteJuridique) {
                    switch (capaciteJuridique) {
                        //si « 01 » ‘Mineur Emancipé’ », « 02 » ‘Mineur sous administration Legale Pure et simple’ ou  « 07 » ‘Majeur capable ‘ on affiche pas la checkbox
                        case ReleveCompteConstantes.CAPACITE_01:
                            this.clientSousTutelle = false;
                            break;
                        case ReleveCompteConstantes.CAPACITE_02:
                            this.clientSousTutelle = false;
                            break;
                        case ReleveCompteConstantes.CAPACITE_07:
                            this.clientSousTutelle = false;
                            break;
                        default:
                            this.clientSousTutelle = true;
                            break;
                    }
                };
                //
                ReleveCompteControleur.prototype.initialiserFormulaire = function (releve) {
                    var _this = this;
                    if (this.enModification || this.enCloture) {
                        this.donneesReleveCompte = new releveLivret.DonneesReleveCompte(releve);
                        this.donneesReleveCompte.miseAjourDonneesReleveDepuisParametre(this.donneesCompte, this.identifiantEntite);
                    }
                    if (this.contexte.modeAffichage === GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif) {
                        // Permet de recuperer le formulaire du relevé de compte enregistré dans l'espace temporaire
                        this.formulaireRMPService.formulaireReleveCompte = this.espaceGlobalService.getObjetGenerique(this.identifiantProduitService.toString());
                        this.formulaireReleveCompte = this.formulaireRMPService.formulaireReleveCompte;
                        // On sauvegarde le formulaire avant de le modifier
                        this.formulaireRecapAvenantReleveCompte = new releveLivret.FormulaireReleveCompte(this.listePersonnesTableau, this.identifiantProduitService.toString(), releve);
                        this.enRecapitulatif = true;
                        if (this.contexte.offreSouscrite.codeModeDeVenteCalcule === "VPC" && (angular.isUndefined(this.formulaireReleveCompte) || this.formulaireReleveCompte === null) &&
                            angular.isDefined(this.formulaireRecapAvenantReleveCompte) && this.formulaireRecapAvenantReleveCompte !== null) {
                            this.formulaireReleveCompte = this.formulaireRecapAvenantReleveCompte;
                        }
                    }
                    else {
                        // clique sur le bouton precedent
                        if (this.contexteAppel === this.MODE_PRECEDENT && this.contexte.modeAffichage !== GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif) {
                            this.formulaireRMPService.formulaireReleveCompte = this.espaceGlobalService.getObjetGenerique(this.identifiantProduitService.toString());
                            this.formulaireReleveCompte = this.formulaireRMPService.formulaireReleveCompte;
                        }
                        else {
                            this.formulaireRMPService.formulaireReleveCompte = new releveLivret.FormulaireReleveCompte(this.listePersonnesTableau, this.identifiantProduitService.toString(), releve);
                            this.formulaireReleveCompte = this.formulaireRMPService.formulaireReleveCompte;
                            this.formulaireReleveCompte.creerCheckbox();
                            //on créer un formulaire de releve vide
                            if (this.detenteur) {
                                this.releveCompteDonneesService.rechercherReleveMultiProduit(this.detenteur.getId).then(function (releveMultiProduit) {
                                    if (releveMultiProduit) {
                                        //this.formulaireReleveCompte.construireFormulaireAvecRmp(releveMultiProduit);
                                        _this.construitAdressePourReleveSuplementaire(releveMultiProduit);
                                    }
                                    _this.formulaireReleveCompte.creerCheckbox();
                                }).catch(function (erreur) {
                                    _this.serviceAgentExtended.Trace.warning("Erreur lors de le récupération du relevé multi produit ...");
                                }).finally(function () {
                                    _this.compteBddCommunService.notifierChargementTermine(_this.$scope, _this.idBloc);
                                });
                            }
                        }
                    }
                };
                /*
                 * Permet de créer l'objet releve à l'aide des données génériques ou des données existantes (avenant)
                 */
                ReleveCompteControleur.prototype.creerFormulaireReleveCompte = function () {
                    var _this = this;
                    if (this.enOuverture) {
                        if (this.contexte.modeAffichage === GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif) {
                            // Si on le contexte est initial en recap c'est que l'on recharge de la VPC directement en recap
                            if (this.contexte.contexteAppel === GestionGeneriqueOffres.Types.ContexteAppel.Init) {
                                this.releveCompteDonneesService.getReleveDeCompte(this.contexte.entitesTitulaires[0].caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire, this.contexte.etablissement.codeEtablissement)
                                    .then(function (releve) {
                                    _this.initialiserFormulaire(releve);
                                    if (_this.enRestitutionDV) {
                                        _this.restituerDVRMP();
                                    }
                                });
                            }
                            else {
                                // Permet de recuperer le formulaire du relevé de compte enregistré dans l'espace temporaire
                                this.formulaireReleveCompte = this.espaceGlobalService.getObjetGenerique(this.identifiantProduitService.toString());
                                this.enRecapitulatif = true;
                            }
                        }
                        else {
                            // clique sur le bouton precedent
                            if (this.contexteAppel === this.MODE_PRECEDENT && this.contexte.modeAffichage !== GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif) {
                                this.formulaireReleveCompte = this.espaceGlobalService.getObjetGenerique(this.identifiantProduitService.toString());
                            }
                            else {
                                switch (this.identifiantProduitService) {
                                    case ReleveCompteConstantes.IDENTIFIANT_PRODUIT_SERVICE_EPARGNE:
                                        var forcageReferenceCompte = "01";
                                        this.releveCompteDonneesService.getReleveDeCompte(this.contexte.entitesTitulaires[0].caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire, this.contexte.etablissement.codeEtablissement, forcageReferenceCompte)
                                            .then(function (releve) {
                                            _this.initialiserFormulaire(releve);
                                            // Si La
                                            _this.restituerDonneeViaDemandeFicoba();
                                            if (_this.enRestitutionDV) {
                                                _this.restituerDVRMP();
                                            }
                                        });
                                        break;
                                    case ReleveCompteConstantes.IDENTIFIANT_PRODUIT_SERVICE_COMPTE:
                                        this.releveCompteDonneesService.getReleveDeCompte(this.contexte.entitesTitulaires[0].caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire, this.contexte.etablissement.codeEtablissement)
                                            .then(function (releve) {
                                            _this.initialiserFormulaire(releve);
                                            if (_this.enRestitutionDV) {
                                                _this.restituerDVRMP();
                                            }
                                        });
                                        break;
                                }
                            }
                        }
                        this.compteBddCommunService.notifierChargementTermine(this.$scope, this.idBloc);
                    }
                    else if (this.enModification || this.enCloture) {
                        // clique sur le bouton precedent
                        if (this.enModification && this.contexteAppel === this.MODE_PRECEDENT && this.contexte.modeAffichage !== GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif) {
                            this.formulaireReleveCompte = this.espaceGlobalService.getObjetGenerique(this.identifiantProduitService.toString());
                        }
                        else {
                            this.epargneCommunService.lancerAvenantSimple(this.contexte);
                            //on récupère les données du compte de dépôt dans l'espace global
                            this.donneesCompte = this.espaceGlobalService.
                                getObjetGenerique(myway.c0410.commun.DonneesCompte.IDENTIFIANT_DONNEES_COMPTE);
                            var detenteur = this.contexte.donneesProduit.detenteur;
                            this.identifiantEntite = detenteur.caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire;
                            this.releveCompteDonneesService.getReleveDeCompte(this.identifiantEntite, this.donneesCompte.codeEtablissement, this.donneesCompte.numeroDeCompte, this.donneesCompte.codeGuichet).then(function (releve) {
                                _this.initialiserFormulaire(releve);
                                if (_this.enRestitutionDV) {
                                    _this.donneesRestitutionProduitServiceRMP = _this.contexte.donneesGeneriques[0].donneesDeSauvegardeProduitService;
                                    var periodiciteSelectionne = new releveLivret.Periodicite(_this.donneesRestitutionProduitServiceRMP.periodiciteEnvoiDuReleve, _this.epargneCommunService.getValuePeriodiciteByKey(_this.donneesRestitutionProduitServiceRMP.periodiciteEnvoiDuReleve));
                                    _this.formulaireReleveCompte.jourReleve = _this.donneesRestitutionProduitServiceRMP.jourArreteDuReleve;
                                    _this.formulaireReleveCompte.periodicite = periodiciteSelectionne;
                                }
                            });
                        }
                    }
                    this.recupererAdresseSecondReleve();
                    this.compteBddCommunService.notifierChargementTermine(this.$scope, this.idBloc);
                    this.verifierHabilitation();
                };
                /*
                 * Permet de créer l'objet Releve Compte à l'aide des données génériques ou des données existantes (avenant)
                 */
                ReleveCompteControleur.prototype.enregistrerReleveCompte = function () {
                    var _this = this;
                    var messagesErreur = [];
                    if (this.getFormulaireReleveCompteEstDefini()) {
                        //on récupère les données du compte de dépôt dans l'espace global
                        this.donneesCompte = this.espaceGlobalService.getObjetGenerique(myway.c0410.commun.DonneesCompte.IDENTIFIANT_DONNEES_COMPTE);
                        if ((angular.isUndefined(this.donneesCompte) || this.donneesCompte === null) && this.enRestitutionDV && this.enRecapitulatif) {
                            this.donneesCompte = new myway.c0410.commun.DonneesCompte("", this.contexte.etablissement.codeEtablissement, this.contexte.etablissement.codeGuichetInterbancaire);
                        }
                        if (this.enOuverture) {
                            this.donneesCompte.codeEtablissement = this.contexte.etablissement.codeEtablissement;
                            this.donneesCompte.codeGuichet = this.contexte.etablissement.codeGuichetInterbancaire;
                        }
                        else if (this.enModification) {
                            this.donneesCompte.codeEtablissement = this.compteBddCommunService.filtrerReferencesProduit(this.contexte).codeEtablissementContrat;
                            this.donneesCompte.codeGuichet = this.compteBddCommunService.filtrerReferencesProduit(this.contexte).codeGuichetContrat;
                        }
                        var releveCompteInitial = this.releveCompteDonneesService.getReleveDeCompteCache();
                        this.donneesReleveCompte = new releveLivret.DonneesReleveCompte(releveCompteInitial);
                        // On modifie les données avec les données du formulaire
                        this.donneesReleveCompte.miseAjourDuModele(this.formulaireReleveCompte);
                        //            this.donneesReleveCompte.miseAjourDonneesReleveDepuisParametre(this.donneesCompte, this.formulaireReleveCompte.listePersonnesTableau[0].identifiantEntite);
                        this.donneesReleveCompte.miseAjourDonneesReleveDepuisParametre(this.donneesCompte, this.contexte.entitesTitulaires[0].caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire);
                        // On appelle le webservice Rest qui va effectuer la modification du relevé de compte
                        return this.releveCompteDonneesService.modifierReleveCompte(this.contexte.offreSouscrite.numeroOffreSouscrite, this.identifiantProduitService, this.donneesReleveCompte.releveDeCompte).then(function (releve) {
                            // this.enregistrerReleveCompteNumerique();
                            messagesErreur.push(new GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre(GestionGeneriqueOffres.Types.NiveauErreur.Ok, 0, ""));
                            return new GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion(messagesErreur, releve);
                        }).catch(function (error) {
                            messagesErreur = _this.ggoService.miseEnGestionKo(error, messagesErreur, "Relevé sur livret", true);
                            return new GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion(messagesErreur, null);
                        });
                    }
                    else {
                        messagesErreur.push(new GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre(GestionGeneriqueOffres.Types.NiveauErreur.Ok, 0, ""));
                        return this.$q.when(new GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion(messagesErreur, null));
                    }
                };
                /*
                 * Permet de savoir si la directive est appelée en modification (Avenant) ou en ouverture
                 */
                ReleveCompteControleur.prototype.determinerMode = function (mode) {
                    this.enRecapitulatif = this.contexte.modeAffichage === GestionGeneriqueOffres.Types.ModeAffichage.Recapitulatif;
                    this.enPerso = this.contexte.modeAffichage === GestionGeneriqueOffres.Types.ModeAffichage.Personnalisation;
                    this.enModification = mode === ConstantesCommunes.AVENANT;
                    this.enOuverture = mode === ConstantesCommunes.OUVERTURE;
                    this.enCloture = mode === ConstantesCommunes.CLOTURE;
                };
                /*
                 * Cette fonction permet de detecter si un champs d'un formulaire à été modifié
                 */
                ReleveCompteControleur.prototype.hasModifieChamps = function (nomChamps) {
                    return this.espaceGlobalService.hasModifieChamps(nomChamps, this.formulaireRecapAvenantReleveCompte, this.formulaireReleveCompte);
                };
                /*
                 * Permet de récuperer le code Periodicité à partir du libellé
                 */
                ReleveCompteControleur.prototype.recupererAdressePersonne = function (personne) {
                    var adressePostale;
                    adressePostale = (personne.particulierInformation.ligne2AdresseAFNOR || "") + " " +
                        (personne.particulierInformation.ligne3AdresseAFNOR || "") + " " +
                        (personne.particulierInformation.ligne4AdresseAFNOR || "") + " " +
                        (personne.particulierInformation.ligne5AdresseAFNOR || "") + " " +
                        (personne.particulierInformation.ligne6AdresseAFNOR || "");
                    this.adresseDetenteur = adressePostale;
                    return adressePostale;
                };
                /*
                * Actions déclanchées par la coche ou la décoche de la case braille
                * Dans tout les cas on met à jour les libellés
                * Si on coche on force le 31 Mensuel
                * Si on décoche on reprend le paramétrage issue de la NS40
                */
                ReleveCompteControleur.prototype.cocheCaseBraille = function () {
                    this.formulaireReleveCompte.mettreAJourLibelleReleve(true);
                    if (!this.formulaireReleveCompte.checkBoxBraille[0].checked) {
                        var releveInitial = this.releveCompteDonneesService.getReleveDeCompteCache();
                        this.formulaireReleveCompte.reinitialiseFormulaire(releveInitial);
                    }
                };
                ReleveCompteControleur.prototype.construitAdressePourReleveSuplementaire = function (releve) {
                    this.adressePrincipal = "";
                    this.adressePrincipal = releve.ligne2 ? this.adressePrincipal + releve.ligne2 : this.adressePrincipal + " ";
                    this.adressePrincipal = releve.ligne3 ? this.adressePrincipal + releve.ligne3 : this.adressePrincipal + " ";
                    this.adressePrincipal = releve.ligne4 ? this.adressePrincipal + releve.ligne4 : this.adressePrincipal + " ";
                    this.adressePrincipal = releve.ligne5 ? this.adressePrincipal + releve.ligne5 : this.adressePrincipal + " ";
                    this.adressePrincipal = releve.ligne6 ? this.adressePrincipal + releve.ligne6 : this.adressePrincipal + " ";
                };
                /** Permet de recuperer l'adresse pour envoi du second relevé */
                ReleveCompteControleur.prototype.recupererAdresseSecondReleve = function () {
                    var _this = this;
                    this.releveCompteDonneesService.getAdresseRMP(this.contexte.etablissement.codeEtablissement, this.contexte.offreSouscrite.numeroPersonneIdentifiee).then(function (adresseRMPs) {
                        adresseRMPs.forEach(function (adresseRMP) {
                            if (adresseRMP.codeType === "1") {
                                _this.adresseLegal = adresseRMP.adresseCompleteSecondReleve;
                            }
                        });
                    });
                };
                ReleveCompteControleur.prototype.restituerDonneeViaDemandeFicoba = function () {
                    var _this = this;
                    if (this.contexte.donneesProduit.reference.identifiantProduitServiceSupport === 1238
                        && this.enPerso && this.enOuverture
                        && this.contexte.offreSouscrite.codeActeGestion.substring(0, 2) === "OU") {
                        var parametreAppelDemandeFicoba;
                        var detenteur = this.contexte.donneesProduit.detenteur;
                        parametreAppelDemandeFicoba = {
                            numeroPersonne: this.contexte.offreSouscrite.numeroPersonneIdentifiee,
                            numeroEntiteTitulaire: detenteur.caracteristiqueEntiteTitulaire.identifiantEntiteTitulaire,
                            codeTypeUsage: detenteur.caracteristiqueEntiteTitulaire.codeUsageEntiteTitulaire,
                            identifiantProduitService: this.contexte.donneesProduit.reference.identifiantProduitServiceSupport
                        };
                        this.demandeFicobaService.obtenirDemandeFicoba(parametreAppelDemandeFicoba).then(function (demandeFicoba) {
                            if (angular.isDefined(demandeFicoba) && demandeFicoba !== null
                                && angular.isDefined(demandeFicoba.releveSurLivret) && demandeFicoba.releveSurLivret !== null
                                && demandeFicoba.releveSurLivret.jourArreteDuReleve !== null) {
                                var releveSurLivret = demandeFicoba.releveSurLivret;
                                var releveCompetMetier = new releveLivret.ReleveDeCompte(releveSurLivret);
                                _this.formulaireReleveCompte = new releveLivret.FormulaireReleveCompte(_this.listePersonnesTableau, _this.identifiantProduitService.toString(), releveCompetMetier);
                                _this.formulaireReleveCompte.creerCheckbox();
                            }
                        });
                    }
                };
                ReleveCompteControleur.prototype.restituerDVRMP = function () {
                    this.donneesRestitutionProduitServiceRMP = this.contexte.donneesGeneriques[0].donneesDeSauvegardeProduitService;
                    var releveCompetMetier = new releveLivret.ReleveDeCompte(this.donneesRestitutionProduitServiceRMP);
                    this.formulaireReleveCompte = new releveLivret.FormulaireReleveCompte(this.listePersonnesTableau, this.identifiantProduitService.toString(), releveCompetMetier);
                    this.formulaireReleveCompte.creerCheckbox();
                };
                /**
                 * Permet de determiner si on est en mode restitution du dossier de vente dans la VAD
                 * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
                 * @returns {void}
                 */
                ReleveCompteControleur.prototype.determinerRestitutionDV = function (contexte) {
                    if (contexte.indicateurDossierVenteAutorise && contexte.donneesGeneriques && contexte.donneesGeneriques[0]) {
                        this.enRestitutionDV = true;
                    }
                    else {
                        this.enRestitutionDV = false;
                    }
                };
                /**
                 * Retourne TRUE si un RMP est défini correctement pour le produit
                 *  @returns {boolean}
                 */
                ReleveCompteControleur.prototype.getFormulaireReleveCompteEstDefini = function () {
                    return this.formulaireReleveCompte && (this.formulaireReleveCompte.jourReleveEstDefini || this.formulaireReleveCompte.jourReleve > 0);
                };
                ReleveCompteControleur.$inject = ["$scope",
                    "$rootScope",
                    "$q",
                    "ReleveCompteDonneesService",
                    "serviceAgentExtended",
                    "espaceGlobalService",
                    "compteBddCommunService",
                    "listeCompteService",
                    "epargneCommunService",
                    "ggoService",
                    "blocMDECRMPService",
                    "donneesSauvegardeProduitServiceRMPService",
                    "creerDossierDeVenteService",
                    "libelleProduitEpargneService",
                    "formulaireRMPService",
                    "demandeFicobaService"
                ];
                return ReleveCompteControleur;
            }());
            releveLivret.ReleveCompteControleur = ReleveCompteControleur;
            releveLivret.releveLivretModule.controller("ReleveLivretController", ReleveCompteControleur);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            function mwReleveLivret() {
                return {
                    templateUrl: "vues/releve-livret.html",
                    restrict: "E",
                    scope: {
                        idBloc: "@",
                        modeAcces: "@",
                        modeAffichage: "@",
                        codeActeGestion: "@",
                        contexte: "="
                    },
                    controller: "ReleveLivretController",
                    controllerAs: "releveCtrl",
                    bindToController: true
                };
            }
            releveLivret.mwReleveLivret = mwReleveLivret;
            releveLivret.releveLivretModule.directive("mwReleveLivret", mwReleveLivret);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            var AdresseRMP = (function () {
                function AdresseRMP() {
                }
                return AdresseRMP;
            }());
            releveLivret.AdresseRMP = AdresseRMP;
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            /*
             classe permettant de créer le tableau de personnes utilisé par la vue
            */
            var TableauPersonnes = (function () {
                function TableauPersonnes(listePersonnesTableau, personnesSelectionnees, selectionChangeHandler) {
                    //options du tableau
                    this.tableOptions = {
                        width: "col-md-8",
                        orderBy: "libelle",
                        reserve: false,
                        perPage: 10,
                        multiSelect: true,
                        filterEnable: false,
                        sortEnable: false,
                        moreEnable: true,
                        columns: [
                            {
                                title: "Destinataire",
                                bind: "destinataire",
                                cssClass: "col-md-4"
                            },
                            {
                                title: "Email",
                                bind: "email",
                                cssClass: "col-md-4"
                            }
                        ],
                        data: listePersonnesTableau,
                        selectedItems: personnesSelectionnees,
                        templateUrl: "",
                        selectionChangeHandler: selectionChangeHandler
                    };
                }
                return TableauPersonnes;
            }());
            releveLivret.TableauPersonnes = TableauPersonnes;
            var Periodicite = (function () {
                function Periodicite(code, libelle) {
                    this.code = code;
                    this.libelle = libelle;
                }
                return Periodicite;
            }());
            releveLivret.Periodicite = Periodicite;
            var PeriodiciteEnum = (function () {
                function PeriodiciteEnum() {
                }
                PeriodiciteEnum.MENSUELLE = new Periodicite("M", "Mensuelle");
                PeriodiciteEnum.BIMENSUELLE = new Periodicite("B", "Bi-mensuelle");
                PeriodiciteEnum.HEBDOMADAIRE = new Periodicite("H", "Hebdomadaire");
                PeriodiciteEnum.TRIMESTRIELLE = new Periodicite("T", "Trimestrielle");
                PeriodiciteEnum.SEMESTRIELLE = new Periodicite("S", "Semestrielle");
                PeriodiciteEnum.ANNUELLE = new Periodicite("A", "Annuelle");
                PeriodiciteEnum.A_DEFINIR = new Periodicite("D", "A déterminer");
                PeriodiciteEnum.EPARGNE = [PeriodiciteEnum.MENSUELLE, PeriodiciteEnum.TRIMESTRIELLE, PeriodiciteEnum.SEMESTRIELLE, PeriodiciteEnum.ANNUELLE];
                PeriodiciteEnum.COMPTE = [PeriodiciteEnum.MENSUELLE, PeriodiciteEnum.BIMENSUELLE, PeriodiciteEnum.HEBDOMADAIRE];
                PeriodiciteEnum.ALL = [PeriodiciteEnum.MENSUELLE, PeriodiciteEnum.BIMENSUELLE, PeriodiciteEnum.HEBDOMADAIRE,
                    PeriodiciteEnum.TRIMESTRIELLE, PeriodiciteEnum.SEMESTRIELLE, PeriodiciteEnum.ANNUELLE];
                return PeriodiciteEnum;
            }());
            releveLivret.PeriodiciteEnum = PeriodiciteEnum;
            ;
            /*
            * Permet de reccupérer les messages d'erreur sur les formulaires
            */
            var StatutChampsFormulaire = (function () {
                function StatutChampsFormulaire(nomChamps) {
                    this._nomChamps = nomChamps;
                }
                StatutChampsFormulaire.prototype.getMessageErreur = function () {
                    return this._nomChamps + " n'a pas été renseigné alors qu'il est obligatoire";
                };
                return StatutChampsFormulaire;
            }());
            releveLivret.StatutChampsFormulaire = StatutChampsFormulaire;
            var FormulaireReleveCompte = (function (_super) {
                __extends(FormulaireReleveCompte, _super);
                function FormulaireReleveCompte(listePersonnesTableau, identifiantProduitService, donneesReleveCompte) {
                    _super.call(this, identifiantProduitService);
                    this.personnesSelectionnees = [];
                    this.jourReleveEstDefini = true;
                    // tableau du formulaire (personnes)
                    this.listePersonnesTableau = listePersonnesTableau;
                    this.tableauPersonnes = new TableauPersonnes(listePersonnesTableau, this.personnesSelectionnees, this).tableOptions;
                    //On créer le modèle du formulaire avec les données du releve puis avec les données du relevé numérique
                    if (donneesReleveCompte) {
                        //On récupère le libellé de la périodicité suivant le code passé en paramètre
                        if (donneesReleveCompte.periodiciteEnvoiDuReleve) {
                            var periodicites = _.filter(PeriodiciteEnum.ALL, function (p) { return p.code === donneesReleveCompte.periodiciteEnvoiDuReleve; });
                            this.periodicite = periodicites.length > 0 ? periodicites[0] : PeriodiciteEnum.A_DEFINIR;
                            this._jourReleve = angular.isUndefined(donneesReleveCompte.jourArreteDuReleve) || donneesReleveCompte.jourArreteDuReleve === null ? 0 : donneesReleveCompte.jourArreteDuReleve;
                            this.jourReleveEstDefini = this.jourReleve > 0;
                        }
                        else {
                            this.periodicite = PeriodiciteEnum.A_DEFINIR;
                            this._jourReleve = 0;
                            this.jourReleveEstDefini = false;
                        }
                        this.releveBraille = donneesReleveCompte.indicateurReleveBraille;
                        this.releveSepare = donneesReleveCompte.indicateurReleveSepare;
                        this.deuxiemeReleve = donneesReleveCompte.indicateurDoubleDestinataire;
                    }
                    else {
                        this.periodicite = PeriodiciteEnum.MENSUELLE;
                        this.releveBraille = false;
                        this.releveSepare = false;
                        this.deuxiemeReleve = false;
                        this._jourReleve = 31;
                        this.jourReleveEstDefini = false;
                    }
                    //on initialise toujours la liste du nombre de jours peut importe qu'on ai des données ou pas
                    if (this.periodicite && this.periodicite.code === "H") {
                        this.listeJoursReleve = new Array(7);
                        for (var i = 0; i < this.listeJoursReleve.length; i++) {
                            this.listeJoursReleve[i] = i + 1;
                        }
                    }
                    else {
                        this.listeJoursReleve = new Array(31);
                        for (var j = 0; j < this.listeJoursReleve.length; j++) {
                            this.listeJoursReleve[j] = j + 1;
                        }
                    }
                }
                Object.defineProperty(FormulaireReleveCompte.prototype, "Periodicite", {
                    get: function () {
                        return this.periodicite;
                    },
                    set: function (periodicite) {
                        this.periodicite = periodicite;
                        this._releveCompteModifier = true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormulaireReleveCompte.prototype, "jourReleve", {
                    get: function () {
                        return this._jourReleve;
                    },
                    set: function (jourReleve) {
                        this._jourReleve = jourReleve;
                        this._releveCompteModifier = true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormulaireReleveCompte.prototype, "checkBoxBraille", {
                    get: function () {
                        return this._checkBoxBraille;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormulaireReleveCompte.prototype, "checkBoxCompteSepare", {
                    get: function () {
                        return this._checkBoxCompteSepare;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormulaireReleveCompte.prototype, "releveCompteModifier", {
                    get: function () {
                        return this._releveCompteModifier;
                    },
                    set: function (releveCompteModifier) {
                        this._releveCompteModifier = releveCompteModifier;
                    },
                    enumerable: true,
                    configurable: true
                });
                FormulaireReleveCompte.prototype.reinitialiseFormulaire = function (donneesReleveCompte) {
                    this.periodicite = _.filter(PeriodiciteEnum.ALL, function (p) { return p.code === donneesReleveCompte.periodiciteEnvoiDuReleve; })[0];
                    this._jourReleve = donneesReleveCompte.jourArreteDuReleve;
                };
                FormulaireReleveCompte.prototype.metAJourFormulaire = function (checkbox) {
                    if (checkbox.checked) {
                        switch (checkbox.titre) {
                            case "Recevoir en braille":
                                this.releveBraille = true;
                                break;
                            case "Relevé de compte séparé":
                                this.releveSepare = true;
                                break;
                            case "Envoi d'un deuxième relevé":
                                this.deuxiemeReleve = true;
                                break;
                        }
                    }
                    else if (!checkbox.checked) {
                        switch (checkbox.titre) {
                            case "Recevoir en braille":
                                this.releveBraille = false;
                                break;
                            case "Relevé de compte séparé":
                                this.releveSepare = false;
                                break;
                            case "Envoi d'un deuxième relevé":
                                this.deuxiemeReleve = false;
                                break;
                        }
                    }
                };
                FormulaireReleveCompte.prototype.estValideFormulaire = function () {
                    return true;
                };
                FormulaireReleveCompte.prototype.getInformationsChampsInvalidesFormulaire = function () {
                    var chamspInvalides = [];
                    return chamspInvalides;
                };
                FormulaireReleveCompte.prototype.reconstruireListePeriodicite = function (libellePeriodicite) {
                    if (libellePeriodicite === "Hebdomadaire") {
                        this.listeJoursReleve = new Array(7);
                        for (var i = 0; i < this.listeJoursReleve.length; i++) {
                            this.listeJoursReleve[i] = i + 1;
                        }
                        this._jourReleve = 1;
                    }
                    else {
                        this.listeJoursReleve = new Array(31);
                        for (var j = 0; j < this.listeJoursReleve.length; j++) {
                            this.listeJoursReleve[j] = j + 1;
                        }
                        this._jourReleve = 31;
                    }
                };
                /*
                  cette fonction sert à capter la sélection d'une checkbox dans le tableau de personnes
                */
                FormulaireReleveCompte.prototype.onSelectionChange = function (personne) {
                    this.mettreAJourLibelleReleve();
                };
                /**
                 * Cette fonction permet de mettre à jour le label du type de relevé de compte à partir de la vue
                 */
                FormulaireReleveCompte.prototype.mettreAJourLibelle = function () {
                    this._releveCompteModifier = true;
                    this.mettreAJourLibelleReleve();
                };
                /**
                 * Cette fonction permet de mettre à jour le label du type de relevé de compte suivant le relevé qui est coché
                 */
                FormulaireReleveCompte.prototype.mettreAJourLibelleReleve = function (mode) {
                    this._releveCompteModifier = true;
                    ////Si rien de coché
                    // if (this.tableauPersonnes.selectedItems.length === 0) {
                    if (!mode) {
                        this.libelleFormatReleve = "papier";
                    }
                    ////Si relevé braille coché (et rien de sélectionné dans le tableau)
                    if (mode) {
                        this.libelleFormatReleve = "papier et braille";
                        this._jourReleve = 31;
                        this.periodicite = PeriodiciteEnum.MENSUELLE;
                        this.checkBoxBraille[0].checked = !this.checkBoxBraille[0].checked;
                    }
                };
                /*
                 Sert à créer les différentes checkbox utilisées pour la vue du relevé de compte
                */
                FormulaireReleveCompte.prototype.creerCheckbox = function () {
                    this._checkBoxBraille = [
                        { "titre": "en braille", "checked": this.releveBraille, "active": true }
                    ];
                    this._checkBoxCompteSepare = [
                        { "titre": "saut de page sur le relevé ", "checked": this.releveSepare, "active": true }
                    ];
                    this.checkBoxDeuxiemeReleve = [
                        { "titre": "à la personne protégée", "checked": this.deuxiemeReleve, "active": true }
                    ];
                };
                return FormulaireReleveCompte;
            }(myway.c0410.commun.ObjetGenerique));
            releveLivret.FormulaireReleveCompte = FormulaireReleveCompte;
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            var ReleveDeCompte = (function () {
                function ReleveDeCompte(donneesRestitutionProduitServiceRMP) {
                    if (donneesRestitutionProduitServiceRMP) {
                        if (donneesRestitutionProduitServiceRMP.jourArreteDuReleve) {
                            this.jourArreteDuReleve = donneesRestitutionProduitServiceRMP.jourArreteDuReleve;
                        }
                        if (donneesRestitutionProduitServiceRMP.periodiciteEnvoiDuReleve) {
                            this.periodiciteEnvoiDuReleve = donneesRestitutionProduitServiceRMP.periodiciteEnvoiDuReleve;
                        }
                        if (donneesRestitutionProduitServiceRMP.modeEnvoiCourrier) {
                            this.modeEnvoiCourrier = donneesRestitutionProduitServiceRMP.modeEnvoiCourrier;
                        }
                        if (donneesRestitutionProduitServiceRMP.moisProchaineEcheanceReleve) {
                            this.moisProchaineEcheanceReleve = donneesRestitutionProduitServiceRMP.moisProchaineEcheanceReleve;
                        }
                        if (donneesRestitutionProduitServiceRMP.indicateurReleveSepare) {
                            this.indicateurReleveSepare = donneesRestitutionProduitServiceRMP.indicateurReleveSepare;
                        }
                        if (donneesRestitutionProduitServiceRMP.indicateurDoubleDestinataire) {
                            this.indicateurDoubleDestinataire = donneesRestitutionProduitServiceRMP.indicateurDoubleDestinataire;
                        }
                        if (donneesRestitutionProduitServiceRMP.indicateurReleveBraille) {
                            this.indicateurReleveBraille = donneesRestitutionProduitServiceRMP.indicateurReleveBraille;
                        }
                    }
                }
                return ReleveDeCompte;
            }());
            releveLivret.ReleveDeCompte = ReleveDeCompte;
            var DonneesReleveCompte = (function () {
                function DonneesReleveCompte(donnees) {
                    if (donnees) {
                        this.releveDeCompte = donnees;
                        this.releveDeCompte.codeGuichetDuCompte = (donnees.codeGuichetDuCompte) ? donnees.codeGuichetDuCompte : "";
                        this.releveDeCompte.referenceDuCompte = (donnees.referenceDuCompte) ? donnees.referenceDuCompte : "";
                    }
                    else {
                        this.releveDeCompte = new ReleveDeCompte();
                    }
                }
                /*
               *Cette fonction permet de mettre à jour les donnés Eparplus depuis les parametres reçus de GGO
               */
                DonneesReleveCompte.prototype.miseAjourDonneesReleveDepuisParametre = function (compteDeDepot, numeroEntite) {
                    this.releveDeCompte.codeEtablissementDuCompte = compteDeDepot.codeEtablissement;
                    this.releveDeCompte.codeGuichetDuCompte = compteDeDepot.codeGuichet;
                    this.releveDeCompte.numeroEntiteTitulaire = numeroEntite;
                    this.releveDeCompte.referenceDuCompte = compteDeDepot.numeroDeCompte;
                };
                /*
                * Permet de mettre à jour les données du Model à partir du celles du formulaire
                */
                DonneesReleveCompte.prototype.miseAjourDuModele = function (formulaire) {
                    if (angular.isDefined(formulaire.checkBoxDeuxiemeReleve) && formulaire.checkBoxDeuxiemeReleve !== null) {
                        this.releveDeCompte.indicateurDoubleDestinataire = formulaire.checkBoxDeuxiemeReleve[0].checked === true;
                    }
                    else {
                        this.releveDeCompte.indicateurDoubleDestinataire = false;
                    }
                    if (angular.isDefined(formulaire.checkBoxBraille) && formulaire.checkBoxBraille !== null) {
                        this.releveDeCompte.indicateurReleveBraille = formulaire.checkBoxBraille[0].checked === true;
                    }
                    else {
                        this.releveDeCompte.indicateurReleveBraille = false;
                    }
                    if (angular.isDefined(formulaire.checkBoxDeuxiemeReleve) && formulaire.checkBoxDeuxiemeReleve !== null) {
                        this.releveDeCompte.indicateurReleveSepare = formulaire.checkBoxDeuxiemeReleve[0].checked === true;
                    }
                    else {
                        this.releveDeCompte.indicateurReleveSepare = false;
                    }
                    if (this.releveDeCompte.indicateurReleveBraille) {
                        this.releveDeCompte.modeEnvoiCourrier = "D";
                    }
                    this.releveDeCompte.jourArreteDuReleve = formulaire.jourReleve;
                    this.releveDeCompte.periodiciteEnvoiDuReleve = formulaire.periodicite.code;
                    var dateDuJour = moment();
                    switch (formulaire.periodicite) {
                        case releveLivret.PeriodiciteEnum.MENSUELLE:
                            dateDuJour.add(1, "M");
                            this.releveDeCompte.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                        case releveLivret.PeriodiciteEnum.TRIMESTRIELLE:
                            dateDuJour.add(3, "M");
                            this.releveDeCompte.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                        case releveLivret.PeriodiciteEnum.SEMESTRIELLE:
                            dateDuJour.add(6, "M");
                            this.releveDeCompte.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                        case releveLivret.PeriodiciteEnum.ANNUELLE:
                            this.releveDeCompte.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                    }
                };
                return DonneesReleveCompte;
            }());
            releveLivret.DonneesReleveCompte = DonneesReleveCompte;
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            var FormulaireRMPService = (function () {
                function FormulaireRMPService($q) {
                    this.$q = $q;
                }
                FormulaireRMPService.prototype.getDonneesRMPLivretA = function () {
                    var donnees = {
                        jourArreteDuReleve: this.formulaireReleveCompte.jourReleve,
                        periodiciteEnvoiDuReleve: this.formulaireReleveCompte.periodicite.code,
                        modeEnvoiCourrier: "D",
                        indicateurReleveBraille: this.formulaireReleveCompte.checkBoxBraille[0].checked,
                        indicateurDoubleDestinataire: this.formulaireReleveCompte.checkBoxDeuxiemeReleve[0].checked
                    };
                    return donnees;
                };
                FormulaireRMPService.$inject = [
                    "$q"
                ];
                return FormulaireRMPService;
            }());
            releveLivret.FormulaireRMPService = FormulaireRMPService;
            releveLivret.releveLivretModule.service("formulaireRMPService", FormulaireRMPService);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

/**
 * Ce service permet d'effectuer les appels aux services REST permettant de
 * récupérer les données d'un releve de compte
 * mettre à jour un releve de compte en avenant
 */
var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            var ReleveCompteDonneesService = (function () {
                function ReleveCompteDonneesService($q, serviceAgentExtended) {
                    this.$q = $q;
                    this.serviceAgentExtended = serviceAgentExtended;
                    this.restServiceReleveCompteUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/servicerelevecomptepart/v2/releveDeCompte";
                }
                ReleveCompteDonneesService.prototype.getReleveDeCompteCache = function () {
                    if (!this.releveCompte) {
                        return null;
                    }
                    return this.releveCompte;
                };
                /** Requête GET
                 *  Permet de récupérer un un releve de compte existant
                 *  @return promise<ReleveCompte>
                 */
                ReleveCompteDonneesService.prototype.getReleveDeCompte = function (numeroEntiteTitulaire, codeEtablissementDuCompte, referenceDuCompte, codeGuichetDuCompte) {
                    var _this = this;
                    this.requeteParams = {
                        "numeroEntiteTitulaire": numeroEntiteTitulaire,
                        "codeEtablissementDuCompte": codeEtablissementDuCompte
                    };
                    if (codeGuichetDuCompte) {
                        this.requeteParams.codeGuichetDuCompte = codeGuichetDuCompte;
                    }
                    if (referenceDuCompte) {
                        this.requeteParams.referenceDuCompte = referenceDuCompte;
                    }
                    return this.serviceAgentExtended.sendRequest({
                        url: this.restServiceReleveCompteUrl,
                        params: this.requeteParams,
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.GET
                    }).then(function (data) {
                        _this.releveCompte = data;
                        return data;
                    });
                };
                /** Requête GET
                 *  Permet de recuperer l'adresse legal
                 *  @return promise<AdresseRMP>
                 */
                ReleveCompteDonneesService.prototype.getAdresseRMP = function (codeEtablissement, numeroPersonne) {
                    return this.serviceAgentExtended.sendRequest({
                        url: ReleveCompteDonneesService.URL_RMP_ADRESSE,
                        params: {
                            "codeEtablissement": codeEtablissement,
                            "numeroPersonne": numeroPersonne
                        },
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.GET
                    }).then(function (adresseRmp) {
                        return adresseRmp;
                    });
                };
                /** Requête PUT
                 *  Permet de modifier un releve de compte
                 *  @return promise<ReleveCompte>
                 */
                ReleveCompteDonneesService.prototype.modifierReleveCompte = function (numeroOffreSouscrite, identifiantProduitService, releveDeCompte) {
                    var _this = this;
                    return this.serviceAgentExtended.sendRequest({
                        url: this.restServiceReleveCompteUrl,
                        params: {
                            "numeroOffreSouscrite": numeroOffreSouscrite,
                            "identifiantProduitService": identifiantProduitService
                        },
                        data: releveDeCompte,
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.PUT
                    }).then(function (donneesReleve) {
                        _this.releveCompte = donneesReleve;
                        return _this.releveCompte;
                    });
                };
                /**
                 * Service de recherche d'un relevé multi produit existant par entité titulaire.
                 * @param {number} numeroEntiteTitulaire Le numéro de l'entité titulaire.
                 * @returns {ng.IPromise<IReleveMultiProduit>} Une promesse avec un objet releveMultiProduit.
                 */
                ReleveCompteDonneesService.prototype.rechercherReleveMultiProduit = function (numeroEntiteTitulaire) {
                    return this.serviceAgentExtended.sendRequest({
                        url: ReleveCompteDonneesService.URL_RMP_RECHERCHE,
                        params: {
                            "numeroEntiteTitulaire": numeroEntiteTitulaire
                        },
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.GET,
                        responseType: MyWay.Services.ResponseTypeEnum.JSON
                    }).then(function (resultat) {
                        return resultat.releveMultiProduit;
                    });
                };
                ReleveCompteDonneesService.$inject = [
                    "$q",
                    "serviceAgentExtended"
                ];
                ReleveCompteDonneesService.URL_RMP_RECHERCHE = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/relevemultiproduit/v1/recherche";
                ReleveCompteDonneesService.URL_RMP_ADRESSE = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/relevemultiproduit/v1/adresseRmp";
                return ReleveCompteDonneesService;
            }());
            releveLivret.ReleveCompteDonneesService = ReleveCompteDonneesService;
            releveLivret.releveLivretModule.service("ReleveCompteDonneesService", ReleveCompteDonneesService);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            /**
             * Données permettant de sauvegarder et restaurer les données du RMP dans le dossier de vente à distance
             *
             */
            var DonneesSauvegardeProduitServiceRMP = (function () {
                function DonneesSauvegardeProduitServiceRMP() {
                }
                return DonneesSauvegardeProduitServiceRMP;
            }());
            releveLivret.DonneesSauvegardeProduitServiceRMP = DonneesSauvegardeProduitServiceRMP;
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            /**
             * Ce service gère le bloc MDEC du RMP dans le cadre de la VAD
             */
            var BlocMDECRMPService = (function () {
                function BlocMDECRMPService() {
                }
                BlocMDECRMPService.prototype.creerDonneesMDEC = function (formulaireReleveCompte) {
                    var blocMDEC = new GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC();
                    blocMDEC.sections = [];
                    var titresSections = {
                        libelle: "Relevé de compte",
                        vision: "3"
                    };
                    var champs = [];
                    if (formulaireReleveCompte.periodicite) {
                        champs.push(new GestionGeneriqueOffres.Types.DossierDeVente.ChampsMDEC("Périodicité", formulaireReleveCompte.periodicite.libelle, "3"));
                    }
                    if (formulaireReleveCompte.jourReleve) {
                        champs.push(new GestionGeneriqueOffres.Types.DossierDeVente.ChampsMDEC("Jour d'arrêté", formulaireReleveCompte.jourReleve.toString(), "3"));
                    }
                    champs.push(new GestionGeneriqueOffres.Types.DossierDeVente.ChampsMDEC("Relevé supplémentaire", this.determinerReleveSuplementaire(formulaireReleveCompte), "3"));
                    blocMDEC.sections[0] = new GestionGeneriqueOffres.Types.DossierDeVente.SectionMDEC();
                    blocMDEC.sections[0].titresSections = [];
                    blocMDEC.sections[0].titresSections.push(titresSections);
                    blocMDEC.sections[0].champs = champs;
                    return blocMDEC;
                };
                BlocMDECRMPService.prototype.determinerReleveSuplementaire = function (formulaireReleveCompte) {
                    var messageReleveSup;
                    if (formulaireReleveCompte.releveBraille || formulaireReleveCompte.releveSepare) {
                        messageReleveSup = "Oui - ";
                        if (formulaireReleveCompte.releveBraille) {
                            messageReleveSup = messageReleveSup + "Relevé braille";
                        }
                        if (formulaireReleveCompte.releveSepare) {
                            messageReleveSup = messageReleveSup + "Relevé séparé";
                        }
                    }
                    else {
                        messageReleveSup = "Non";
                    }
                    return messageReleveSup;
                };
                BlocMDECRMPService.$inject = [];
                return BlocMDECRMPService;
            }());
            releveLivret.BlocMDECRMPService = BlocMDECRMPService;
            releveLivret.releveLivretModule.service("blocMDECRMPService", BlocMDECRMPService);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var gestionEpargne;
    (function (gestionEpargne) {
        var releveLivret;
        (function (releveLivret) {
            "use strict";
            /**
             * Ce service gère le bloc MDEC du RMP dans le cadre de la VAD
             */
            var DonneesSauvegardeProduitServiceRMPService = (function () {
                function DonneesSauvegardeProduitServiceRMPService() {
                }
                DonneesSauvegardeProduitServiceRMPService.prototype.creerDonneesSauvegardeProduitServiceRMP = function (formulaireReleveCompte) {
                    var donneesSauvegardeProduitServiceRMP = new releveLivret.DonneesSauvegardeProduitServiceRMP();
                    donneesSauvegardeProduitServiceRMP.version = "1.0";
                    if (angular.isDefined(formulaireReleveCompte.checkBoxDeuxiemeReleve) && formulaireReleveCompte.checkBoxDeuxiemeReleve !== null &&
                        angular.isDefined(formulaireReleveCompte.checkBoxDeuxiemeReleve[0]) && formulaireReleveCompte.checkBoxDeuxiemeReleve[0] !== null &&
                        angular.isDefined(formulaireReleveCompte.checkBoxDeuxiemeReleve[0].checked)) {
                        donneesSauvegardeProduitServiceRMP.indicateurDoubleDestinataire = formulaireReleveCompte.checkBoxDeuxiemeReleve[0].checked === true;
                    }
                    else {
                        donneesSauvegardeProduitServiceRMP.indicateurDoubleDestinataire = false;
                    }
                    if (angular.isDefined(formulaireReleveCompte.checkBoxBraille) && formulaireReleveCompte.checkBoxBraille !== null &&
                        angular.isDefined(formulaireReleveCompte.checkBoxBraille[0]) && formulaireReleveCompte.checkBoxBraille[0] !== null &&
                        angular.isDefined(formulaireReleveCompte.checkBoxBraille[0].checked)) {
                        donneesSauvegardeProduitServiceRMP.indicateurReleveBraille = formulaireReleveCompte.checkBoxBraille[0].checked === true;
                    }
                    else {
                        donneesSauvegardeProduitServiceRMP.indicateurReleveBraille = false;
                    }
                    if (angular.isDefined(formulaireReleveCompte.checkBoxCompteSepare) && formulaireReleveCompte.checkBoxCompteSepare !== null &&
                        angular.isDefined(formulaireReleveCompte.checkBoxCompteSepare[0]) && formulaireReleveCompte.checkBoxCompteSepare[0] !== null &&
                        angular.isDefined(formulaireReleveCompte.checkBoxCompteSepare[0].checked)) {
                        donneesSauvegardeProduitServiceRMP.indicateurReleveSepare = formulaireReleveCompte.checkBoxCompteSepare[0].checked === true;
                    }
                    else {
                        donneesSauvegardeProduitServiceRMP.indicateurReleveSepare = false;
                    }
                    donneesSauvegardeProduitServiceRMP.jourArreteDuReleve = formulaireReleveCompte.jourReleve;
                    if (donneesSauvegardeProduitServiceRMP.indicateurReleveBraille) {
                        donneesSauvegardeProduitServiceRMP.modeEnvoiCourrier = "D";
                    }
                    var dateDuJour = moment();
                    switch (formulaireReleveCompte.periodicite) {
                        case releveLivret.PeriodiciteEnum.MENSUELLE:
                            dateDuJour.add(1, "M");
                            donneesSauvegardeProduitServiceRMP.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                        case releveLivret.PeriodiciteEnum.TRIMESTRIELLE:
                            dateDuJour.add(3, "M");
                            donneesSauvegardeProduitServiceRMP.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                        case releveLivret.PeriodiciteEnum.SEMESTRIELLE:
                            dateDuJour.add(6, "M");
                            donneesSauvegardeProduitServiceRMP.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                        case releveLivret.PeriodiciteEnum.ANNUELLE:
                            donneesSauvegardeProduitServiceRMP.moisProchaineEcheanceReleve = dateDuJour.month() + 1 + "";
                            break;
                    }
                    donneesSauvegardeProduitServiceRMP.periodiciteEnvoiDuReleve = formulaireReleveCompte.periodicite.code;
                    return donneesSauvegardeProduitServiceRMP;
                };
                DonneesSauvegardeProduitServiceRMPService.$inject = [];
                return DonneesSauvegardeProduitServiceRMPService;
            }());
            releveLivret.DonneesSauvegardeProduitServiceRMPService = DonneesSauvegardeProduitServiceRMPService;
            releveLivret.releveLivretModule.service("donneesSauvegardeProduitServiceRMPService", DonneesSauvegardeProduitServiceRMPService);
        })(releveLivret = gestionEpargne.releveLivret || (gestionEpargne.releveLivret = {}));
    })(gestionEpargne = myway.gestionEpargne || (myway.gestionEpargne = {}));
})(myway || (myway = {}));

angular.module("myway.gestionEpargne.releveLivret").run(["$templateCache", function($templateCache) {$templateCache.put("vues/releve-livret.html","<div class=\"clearfix\" mw-chargement=\"!releveCtrl.estInitialise\">\r\n    <ng-form class=\"form-horizontal\" name=\"releveCtrl.formulaire\">\r\n        <div ng-if=\"releveCtrl.enPerso\">\r\n            <div class=\"form-group\">\r\n                <h1 class=\"col-md-12 titre-releve\"><span ng-bind=\"::releveCtrl.envoiLabel\"></span></h1>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-md-offset-1 control-label\" for=\"periodicite\"><span ng-bind=\"::releveCtrl.periodiciteLabel\"></span></label>\r\n                <div class=\"col-md-4 has-feedback\">\r\n                    <ui-select id=\"periodicite\" ng-model=\"releveCtrl.formulaireReleveCompte.Periodicite\" ng-disabled=\"releveCtrl.formulaireReleveCompte.checkBoxBraille[0].checked\" required=\"true\" aria-required=\"true\">\r\n                        <ui-select-match><span ng-bind=\"$select.selected.libelle\"></span></ui-select-match>\r\n                        <ui-select-choices repeat=\"periodicite in releveCtrl.listePeriodicite | filter: {libelle:$select.search}\"><span ng-bind=\"periodicite.libelle\"></span></ui-select-choices>\r\n                    </ui-select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-md-offset-1 control-label\" for=\"jour-releve\"><span ng-bind=\"::releveCtrl.jourLabel\"></span></label>\r\n                <div class=\"col-md-4 has-feedback\">\r\n                    <ui-select id=\"jour-releve\" ng-model=\"releveCtrl.formulaireReleveCompte.jourReleve\" ng-disabled=\"releveCtrl.formulaireReleveCompte.checkBoxBraille[0].checked\" required=\"true\" aria-required=\"true\">\r\n                        <ui-select-match><span ng-bind=\"$select.selected\"></span></ui-select-match>\r\n                        <ui-select-choices repeat=\"jourReleve in releveCtrl.formulaireReleveCompte.listeJoursReleve | filter: $select.search\"><span ng-bind=\"jourReleve\"></span></ui-select-choices>\r\n                    </ui-select>\r\n                </div>\r\n            </div>\r\n            <div ng-if=\"releveCtrl.estHabilite && releveCtrl.estSautDeFeuilleAutorise\">\r\n                <div class=\"form-group\">\r\n                    <mw-checkbox class=\"col-md-offset-3 col-md-5 suppression-marge-boostrap\" data=\"releveCtrl.formulaireReleveCompte.checkBoxCompteSepare\" orientation=\"horizontale\" id=\"compte-separe\" ng-click=\"releveCtrl.formulaireReleveCompte.mettreAJourLibelleReleve(false)\"></mw-checkbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 col-md-offset-1 control-label\" data-ng-bind=\"::releveCtrl.adresse\"></label>\r\n                <div class=\"col-md-9 releve-adresse\" ng-bind=\"::releveCtrl.adressePrincipal\"></div>\r\n            </div>\r\n\r\n            <div class=\"panel-body\">\r\n                <div class=\"form-group\">\r\n                    <h1 class=\"col-md-12 titre-releve\"><span ng-bind=\"::releveCtrl.releveSupplementaireLabel\"></span></h1>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <mw-checkbox class=\"col-md-offset-3 col-md-3 suppression-marge-boostrap\" data=\"releveCtrl.formulaireReleveCompte.checkBoxBraille\" orientation=\"horizontale\" id=\"releve-braille\" ng-click=\"releveCtrl.cocheCaseBraille()\"></mw-checkbox>\r\n                    <p ng-if=\"releveCtrl.formulaireReleveCompte.checkBoxBraille[0].checked\" class=\"help-block col-md-offset-3 col-md-9 suppression-marge-boostrap\">\r\n                        <span ng-bind=\"::releveCtrl.auLabel\"></span>\r\n                        <span ng-bind=\"::releveCtrl.adresseDetenteur\"></span>\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group\" ng-if=\"releveCtrl.clientSousTutelle\">\r\n                    <mw-checkbox class=\"col-md-offset-3 col-md-3 suppression-marge-boostrap\" data=\"releveCtrl.formulaireReleveCompte.checkBoxDeuxiemeReleve\" orientation=\"horizontale\" id=\"deuxieme-releve\" ng-click=\"releveCtrl.formulaireReleveCompte.mettreAJourLibelleReleve(false)\"></mw-checkbox>\r\n                    <p ng-if=\"releveCtrl.formulaireReleveCompte.checkBoxDeuxiemeReleve[0].checked\" class=\"help-block col-md-offset-3 col-md-9 suppression-marge-boostrap\">\r\n                        <span ng-bind=\"::releveCtrl.adresse2\"></span>\r\n                        <span ng-bind=\"::releveCtrl.adresseLegal\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div ng-if=\"releveCtrl.enRecapitulatif\">\r\n            <div class=\"form-group\" ng-if=\"releveCtrl.formulaireReleveCompte.checkBoxBraille[0].checked\">\r\n                <div ng-class=\"(releveCtrl.enModification && !releveCtrl.hasModifieChamps(\'libelleFormatReleve\')) ? \'recapitulatif-valeur\' : \'recapitulatif-valeur-modifie\'\" class=\"col-md-offset-2\" ng-bind=\"::releveCtrl.releveSupplementaireBrailleLabel\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" ng-if=\"releveCtrl.formulaireReleveCompte.checkBoxDeuxiemeReleve[0].checked\">\r\n                <div ng-class=\"(releveCtrl.enModification && !releveCtrl.hasModifieChamps(\'libelleFormatReleve\')) ? \'recapitulatif-valeur\' : \'recapitulatif-valeur-modifie\'\" class=\"col-md-offset-2\" ng-bind=\"::releveCtrl.releveSupplementairePersonneProtegeeLabel\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" ng-if=\"releveCtrl.formulaireReleveCompte.checkBoxCompteSepare[0].checked && releveCtrl.estSautDeFeuilleAutorise\">\r\n                <div ng-class=\"(releveCtrl.enModification && !releveCtrl.hasModifieChamps(\'libelleFormatReleve\')) ? \'recapitulatif-valeur\' : \'recapitulatif-valeur-modifie\'\" class=\"col-md-offset-2\" ng-bind=\"::releveCtrl.releveSupplementaireSepareLabel\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\" ng-bind=\"::releveCtrl.periodiciteLabel\"></label>\r\n                <div ng-class=\"(releveCtrl.enModification && !releveCtrl.hasModifieChamps(\'periodicite.libelle\')) ? \'recapitulatif-valeur\' : \'recapitulatif-valeur-modifie\'\" class=\"col-md-3\" ng-bind=\"::releveCtrl.formulaireReleveCompte.periodicite.libelle\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\" ng-bind=\"::releveCtrl.jourArreteReleveLabel\"></label>\r\n                <div ng-class=\"(releveCtrl.enModification && !releveCtrl.hasModifieChamps(\'jourReleve\')) ? \'recapitulatif-valeur\' : \'recapitulatif-valeur-modifie\'\" class=\"col-md-3\" ng-bind=\"::releveCtrl.formulaireReleveCompte.jourReleve\" ng-show=\"releveCtrl.getFormulaireReleveCompteEstDefini()\">\r\n                </div>\r\n                <div ng-class=\"(releveCtrl.enModification && !releveCtrl.hasModifieChamps(\'jourReleve\')) ? \'recapitulatif-valeur\' : \'recapitulatif-valeur-modifie\'\" class=\"col-md-3\" ng-bind=\"::releveCtrl.aDefinirLabel\" ng-hide=\"releveCtrl.getFormulaireReleveCompteEstDefini()\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-form>\r\n</div>\r\n");}]);
//# sourceMappingURL=myway.c05.10.releve-livret.js.map
