/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angularjs\angular.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angularjs\angular-route.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\bootstrap\bootstrap.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angular-ui-bootstrap\angular-ui-bootstrap.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\lodash\lodash.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\ui\myway-ui.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\services\framework-client-app.d.ts" />

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        aide.app = angular.module("myway.composantAide", ["myway.ui", "ui.bootstrap", "moduleAgent"]);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var MwAideCommunService = (function () {
            function MwAideCommunService($q, $window, serviceAgentExtended) {
                this.$q = $q;
                this.$window = $window;
                this.serviceAgentExtended = serviceAgentExtended;
            }
            /**
             * Ouvre une fenêtre avec une url donnée
             */
            MwAideCommunService.prototype.openWindow = function (url) {
                var u = _.trim(url);
                if (!_.startsWith(url, "http://") && !_.startsWith(url, "https://")) {
                    u = "http://" + u;
                }
                this.$window.open(u);
            };
            MwAideCommunService.$inject = [
                "$q",
                "$window",
                "serviceAgentExtended"
            ];
            return MwAideCommunService;
        }());
        aide.MwAideCommunService = MwAideCommunService;
        aide.app.service("MwAideCommunService", MwAideCommunService);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var aide;
    (function (aide) {
        var InfobulleAideController = (function () {
            function InfobulleAideController($scope, $q, $document, $timeout, $element, $attrs, serviceAgentExtended, infobulleAideService) {
                var _this = this;
                this.$scope = $scope;
                this.$q = $q;
                this.$document = $document;
                this.$timeout = $timeout;
                this.$element = $element;
                this.$attrs = $attrs;
                this.serviceAgentExtended = serviceAgentExtended;
                this.infobulleAideService = infobulleAideService;
                this.INFOBULLE_CONTAINER_SELECTOR = ".mwsf-infobulle-transclude";
                this.flottante = ("flottante" in this.$attrs) ? this.$attrs.flottante.toLowerCase() !== "false" : false;
                this.processus = ("processus" in this.$attrs) ? this.$attrs.processus.toLowerCase() !== "false" : true;
                this.autofocus = ("autofocus" in this.$attrs) ? this.$attrs.autofocus.toLowerCase() !== "false" : true;
                this.autoclose = ("autoclose" in this.$attrs) ? this.$attrs.autoclose.toLowerCase() !== "false" : true;
                this.estClique = false;
                this.params = new aide.InfobulleSpecialParams(this.processus, this.codeProcessus, this.codeEtape, this.codeEtablissement, this.date);
                this.infobulleAideService.getInfobulleAffichable(this.idChamp, this.params).then(function (infobulle) {
                    _this.id = infobulle.idChamp;
                    _this.showPicto = !!infobulle;
                    _this.nouveaute = _this.showPicto && infobulle.nouveaute;
                    if (_this.nouveaute) {
                        _this.infobulleAideService.lirePreferenceUtilisateurInfobulle(_this.id).then(function (valeur) {
                            _this.nouveaute = !valeur;
                        });
                    }
                    // Si en paramètre il est ouvert par défaut il faut afficher l'infobulle
                    if (_this.ouvert) {
                        _this.openInfobulle();
                    }
                }).catch(function (erreur) {
                    console.error(erreur);
                });
                this.closeEvent = function (event) {
                    if (!_this.$element[0].contains(event.target)) {
                        _this.$scope.$apply(function () {
                            _this.closeInfobulle();
                        });
                    }
                };
            }
            InfobulleAideController.prototype.toggleOuvert = function () {
                if (this.ouvert) {
                    this.closeInfobulle();
                }
                else {
                    this.openInfobulle();
                }
            };
            InfobulleAideController.prototype.openInfobulle = function () {
                var _this = this;
                this.getContenuInfobulle().then(function () {
                    _this.ouvert = true;
                    _this.estClique = true;
                    if (_this.nouveaute) {
                        _this.nouveaute = false;
                        _this.infobulleAideService.ecrirePreferenceUtilisateurInfobulle(_this.id);
                    }
                    if (_this.autoclose) {
                        _this.$document[0].addEventListener("focus", _this.closeEvent, true);
                        _this.$document[0].addEventListener("click", _this.closeEvent, true);
                    }
                    if (_this.autofocus) {
                        _this.$timeout(function () {
                            // on donne le focus au champ de saisie
                            var container = _this.$element[0].querySelector(_this.INFOBULLE_CONTAINER_SELECTOR);
                            if (!container || !container.childElementCount) {
                                console.warn("Infobulle " + _this.idChamp + " non conforme, pas de focus !");
                                return;
                            }
                            var element = _.find(container.children, function (child) {
                                return child.nodeName === "INPUT" || child.nodeName === "SELECT" || child.nodeName === "BUTTON";
                            });
                            if (!element) {
                                return;
                            }
                            if (element.className && element.className.indexOf("ui-select-container") !== -1) {
                                element = element.querySelector(".ui-select-focusser");
                            }
                            else if (element.nodeName !== "INPUT" && element.nodeName !== "BUTTON") {
                                element = element.querySelector("input");
                            }
                            if (element && angular.isFunction(element.focus)) {
                                element.focus();
                            }
                        });
                    }
                });
            };
            InfobulleAideController.prototype.closeInfobulle = function () {
                this.ouvert = false;
                if (this.autoclose) {
                    this.$document[0].removeEventListener("click", this.closeEvent, true);
                    this.$document[0].removeEventListener("focus", this.closeEvent, true);
                }
            };
            InfobulleAideController.prototype.getContenuInfobulle = function () {
                var _this = this;
                if (!this.contenuInfobullePromise) {
                    this.contenuInfobullePromise = new this.$q(function (resolve, reject) {
                        _this.infobulleAideService.getContenuInfobulle(_this.idChamp, _this.params).then(function (infobulle) {
                            _this.message = infobulle.contenu;
                            _this.image = infobulle.image;
                            if (_this.message || _this.image) {
                                resolve();
                            }
                            else {
                                _this.serviceAgentExtended.Trace.error("infobulle " + _this.idChamp + ": sans image ou texte");
                                reject();
                            }
                        }).catch(function (error) {
                            _this.serviceAgentExtended.Trace.error("infobulle " + _this.idChamp + ": " + error);
                            reject();
                        });
                    });
                }
                return this.contenuInfobullePromise;
            };
            InfobulleAideController.$inject = [
                "$scope",
                "$q",
                "$document",
                "$timeout",
                "$element",
                "$attrs",
                "serviceAgentExtended",
                "mwInfobulleAideService"
            ];
            return InfobulleAideController;
        }());
        aide.app.controller("MwInfobulleAideController", InfobulleAideController);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var aide;
    (function (aide) {
        function mwInfobulleAide() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                templateUrl: "typescript/mw-infobulle-aide/infobulle-aide-view.html",
                controller: "MwInfobulleAideController",
                controllerAs: "$ctrl",
                bindToController: true,
                scope: {
                    idChamp: "@",
                    ouvert: "=?",
                    nouveaute: "=?",
                    estClique: "=?",
                    date: "=?",
                    codeProcessus: "@?",
                    codeEtape: "@?",
                    codeEtablissement: "@?"
                }
            };
        }
        /**
         * @ngdoc directive
         * @name myway.aide.directive:mwInfobulleAide
         * @param {string} idChamp id du champ infobulle (côté base de données)
         * @param {boolean=} ouvert indicateur d'ouverture de l'infobulle
         * @param {boolean=} nouveaute indicateur de nouveauté de l'infobulle
         * @param {boolean=} estClique passe à true si la bulle a été ouverte au moins une fois
         * @param {string=} flottante affichage de la bulle en flottant (true/false, false par défaut)
         * @param {string=} processus infobulle liée à un processus (true/false, true par défaut)
         * @param {string=} autoclose infobulle liée à un processus (true/false, false par défaut)
         * @param {string=} autofocus infobulle liée à un processus (true/false, false par défaut)
         * @restrict E
         * @function
         *
         * @description
         * Affiche un pictogramme d'aide avec une infobulle contenant une aide contextuelle.
         */
        aide.app.directive("mwInfobulleAide", mwInfobulleAide);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var aide;
    (function (aide) {
        var InfobulleConstantes = (function () {
            function InfobulleConstantes() {
            }
            InfobulleConstantes.EMPTY_CODE_PROCESSUS = "undefined";
            InfobulleConstantes.EMPTY_CODE_ETAPE = "URL";
            return InfobulleConstantes;
        }());
        aide.InfobulleConstantes = InfobulleConstantes;
        var InfobulleSpecialParams = (function () {
            function InfobulleSpecialParams(processus, codeProcessus, codeEtape, codeEtablissement, date) {
                this.processus = processus;
                this.codeProcessus = codeProcessus;
                this.codeEtape = codeEtape;
                this.codeEtablissement = codeEtablissement;
                if (typeof date === "string") {
                    this.date = new Date(date);
                }
                else {
                    this.date = date;
                }
                if (!this.processus && !this.codeProcessus && !this.codeEtape) {
                    this.codeProcessus = InfobulleConstantes.EMPTY_CODE_PROCESSUS;
                    this.codeEtape = InfobulleConstantes.EMPTY_CODE_ETAPE;
                }
            }
            InfobulleSpecialParams.prototype.isDefined = function () {
                return !!this.codeProcessus || !!this.codeEtape || !!this.codeEtablissement || !!this.date;
            };
            return InfobulleSpecialParams;
        }());
        aide.InfobulleSpecialParams = InfobulleSpecialParams;
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var aide;
    (function (aide) {
        var InfobulleAideService = (function () {
            function InfobulleAideService($q, serviceAgentExtended, communService) {
                this.$q = $q;
                this.serviceAgentExtended = serviceAgentExtended;
                this.communService = communService;
            }
            /**
             * Supprime le cache interne de la présence des infobulles
             */
            InfobulleAideService.prototype.clearCacheInfobullesAffichables = function () {
                this.presenceInfobullePromise = null;
            };
            /**
             * Renvoie les indicateurs de présence des infobulles affichables du processus courant.
             * Le résultat est stocké localement dans le service s'il n'y a pas de paramètres spécifiques définis (c'est à dire le cas nominal).
             */
            InfobulleAideService.prototype.getInfobullesAffichables = function (params) {
                var _this = this;
                if (this.presenceInfobullePromise && !params.isDefined()) {
                    return this.presenceInfobullePromise;
                }
                var promise = this.serviceAgentExtended.getAuthentificationInfo().then(function (infos) {
                    return _this.getPresenceInfobulle({
                        codeEtablissement: params.codeEtablissement || infos.codeEtablissement,
                        processus: angular.isDefined(params.codeProcessus) ? params.codeProcessus : _this.serviceAgentExtended.Step.ProcessCode,
                        etape: angular.isDefined(params.codeEtape) ? params.codeEtape : _this.serviceAgentExtended.Step.StepCode,
                        date: (params.date || new Date()).toISOString().substr(0, 10)
                    }).then(function (infobulles) {
                        return _.indexBy(infobulles, function (infobulle) {
                            return infobulle.nomChamp;
                        });
                    });
                });
                if (!params.isDefined()) {
                    this.presenceInfobullePromise = promise;
                }
                return promise;
            };
            /**
             * Renvoie l'indicateur de présence de l'infobulle à partir de l'id champ fourni.
             */
            InfobulleAideService.prototype.getInfobulleAffichable = function (idChamp, params) {
                var _this = this;
                return this.getInfobullesAffichables(params).then(function (infobulles) {
                    var result = infobulles[idChamp];
                    if (!result) {
                        return _this.$q.reject("infobulle non trouvée: " + idChamp);
                    }
                    return result;
                });
            };
            /**
             * Renvoie le contenu d'une infobulle.
             */
            InfobulleAideService.prototype.getContenuInfobulle = function (idChamp, params) {
                var _this = this;
                return this.serviceAgentExtended.getAuthentificationInfo().then(function (infos) {
                    var par = {
                        codeEtablissement: params.codeEtablissement || infos.codeEtablissement,
                        processus: angular.isDefined(params.codeProcessus) ? params.codeProcessus : _this.serviceAgentExtended.Step.ProcessCode,
                        etape: angular.isDefined(params.codeEtape) ? params.codeEtape : _this.serviceAgentExtended.Step.StepCode,
                        date: (params.date || new Date()).toISOString().substr(0, 10),
                        nomChamp: idChamp
                    };
                    if (!par.processus) {
                        delete par.processus;
                    }
                    if (!par.etape) {
                        delete par.etape;
                    }
                    return _this.serviceAgentExtended.sendRequest({
                        url: aide.URL_SERVICE_RECHERCHE + "infobulle",
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.GET,
                        params: par
                    });
                });
            };
            InfobulleAideService.prototype.lirePreferenceUtilisateurInfobulle = function (idChamp) {
                return this.$q.when(this.serviceAgentExtended.Preferences.LirePreference(this.getIdChampPreference(idChamp))).catch(function (erreur) {
                    return null;
                });
            };
            InfobulleAideService.prototype.ecrirePreferenceUtilisateurInfobulle = function (idChamp) {
                return this.$q.when(this.serviceAgentExtended.Preferences.EcrirePreference(this.getIdChampPreference(idChamp), "LU"));
            };
            InfobulleAideService.prototype.getIdChampPreference = function (idChamp) {
                return "AIDE_INFOBULLE_" + idChamp;
            };
            InfobulleAideService.prototype.getPresenceInfobulle = function (params) {
                return this.serviceAgentExtended.sendRequest({
                    url: aide.URL_SERVICE_RECHERCHE + "presenceinfobulle",
                    withHeaders: true,
                    method: MyWay.Services.MethodEnum.GET,
                    params: params
                });
            };
            InfobulleAideService.$inject = ["$q", "serviceAgentExtended", "MwAideCommunService"];
            return InfobulleAideService;
        }());
        aide.InfobulleAideService = InfobulleAideService;
        aide.app.service("mwInfobulleAideService", InfobulleAideService);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

"use strict";
var myway;
(function (myway) {
    var aide;
    (function (aide) {
        aide.URL_SERVICE_RECHERCHE = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/aideenligne/v1/recherche/";
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var Constants = (function () {
            function Constants() {
            }
            Constants.EVENT_NAME_SET_CLE_SECONDAIRE = "TotemAideSetCleSecondaire";
            Constants.EVENT_NAME_SET_CLE_TERTIAIRE = "TotemAideSetCleTertiaire";
            Constants.EVENT_NAME_EDITION_OFF = "TotemAideEditOff";
            Constants.EVENT_NAME_EDITION_ON = "TotemAideEditOn";
            Constants.PICTO_FAVORI_PLUS = "itce-plus";
            Constants.PICTO_FAVORI_MOINS = "itce-minus";
            Constants.TEXTE_BTN_EDITION_OFF = "Gérer mes favoris";
            Constants.TEXTE_BTN_EDITION_ON = "Terminer";
            Constants.TYPE_BAGAGE_APPLICATION = "APPLICATION";
            Constants.TYPE_BAGAGE_LIEN = "LIEN";
            Constants.TYPE_BAGAGE_AUTRE_CANAL = "ESCALADE";
            return Constants;
        }());
        aide.Constants = Constants;
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var MwsfTotemAideControleur = (function () {
            function MwsfTotemAideControleur($scope, $rootScope, $window, $document, $q, $attrs, serviceAgentExtended, modalService, totemAideService) {
                var _this = this;
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.$window = $window;
                this.$document = $document;
                this.$q = $q;
                this.$attrs = $attrs;
                this.serviceAgentExtended = serviceAgentExtended;
                this.modalService = modalService;
                this.totemAideService = totemAideService;
                /**
                 * Indicateur d'ouverture du totem
                 */
                this.open = false;
                if (!("id" in this.$attrs)) {
                    throw new Error("directive mwsfTotemAide: l'attribut id est obligatoire.");
                }
                this.tuilesAide = [];
                this.canauxAssistance = [];
                var listener = this.$rootScope.$watch(function () { return _this.serviceAgentExtended.IsInitDone; }, function (value) {
                    if (value) {
                        listener(); // on supprime le watcher
                        _this.init();
                    }
                });
                this.debounceChargerContenuTotem = _.debounce(function () {
                    _this.chargerContenuTotem();
                }, 200);
            }
            /**
             * Affiche ou ferme le totem.
             */
            MwsfTotemAideControleur.prototype.toggleTotem = function () {
                if (!this.open) {
                    this.afficherTotemAide();
                }
                else {
                    this.masquerTotemAide();
                }
            };
            /**
             * Affichage du totem
             */
            MwsfTotemAideControleur.prototype.afficherTotemAide = function () {
                this.$document.on("keydown", this.keydownListener);
                this.open = true;
            };
            /**
             * Masquage du totem
             */
            MwsfTotemAideControleur.prototype.masquerTotemAide = function () {
                this.$document.off("keydown", this.keydownListener);
                this.open = false;
            };
            /**
             * Afficher le FLash dans une popup modale
             */
            MwsfTotemAideControleur.prototype.afficherModaleFlash = function () {
                // préparation de la popup modale
                var modalData = {
                    headerText: this.flash.titre,
                    bodyHtml: this.flash.contenu
                };
                var modalOptions = {
                    templateUrl: "typescript/totem-aide/modale-flash/modale-flash-vue.html",
                    controller: "TotemAidemFlashModaleControleur",
                    controllerAs: "FlashModaleCtrl",
                    windowClass: "totem-aide-flash-modale",
                    backdrop: true,
                    keyboard: true,
                    size: "md",
                    resolve: {
                        data: function () {
                            return modalData;
                        }
                    }
                };
                this.modalService.showModal(modalOptions);
            };
            /**
             * Ouvrir la fenêtre des Canaux d'Assitance
             */
            MwsfTotemAideControleur.prototype.afficherModaleAssistance = function () {
                // préparation de la popup modale
                var modalData = {
                    canauxAssistance: angular.copy(this.canauxAssistance)
                };
                var modalOptions = {
                    templateUrl: "typescript/totem-aide/modale-assistance/modale-assistance-vue.html",
                    controller: "TotemAidemAssistanceModaleControleur",
                    controllerAs: "AssistanceModaleCtrl",
                    windowClass: "totem-aide-assistance-modale",
                    backdrop: true,
                    keyboard: true,
                    size: "md",
                    resolve: {
                        data: function () {
                            return modalData;
                        }
                    }
                };
                this.modalService.showModal(modalOptions);
            };
            /**
             * Implementation de MyWay.UI.ITuileHandler
             */
            MwsfTotemAideControleur.prototype.onTuileClick = function (objetTuile) {
                // todo revoir l'ouverture des URLs
                this.$window.open(objetTuile.bagage.libelleURL);
            };
            MwsfTotemAideControleur.prototype.onAction2 = function (objetTuile) {
                // nothing to do
            };
            MwsfTotemAideControleur.prototype.onAction1 = function (objetTuile) {
                // nothing to do
            };
            MwsfTotemAideControleur.prototype.onAction3 = function (objetTuile) {
                // nothing to do
            };
            MwsfTotemAideControleur.prototype.onAction4 = function (objetTuile) {
                // nothing to do
            };
            MwsfTotemAideControleur.prototype.onClickLeft = function (objetTuile) {
                // nothing to do;
            };
            MwsfTotemAideControleur.prototype.onClickRight = function (objetTuile) {
                // nothing to do
            };
            MwsfTotemAideControleur.prototype.init = function () {
                var _this = this;
                this.keydownListener = function (event) {
                    // on utilise cette fonction intermédiaire pour la closure et appliquer le contexte du contrôleur dans la méthode onKeydown
                    _this.onKeydown(event);
                };
                if (this.bouchon) {
                    this.$scope.$watch(function () { return _this.bouchon; }, function () {
                        _this.debounceChargerContenuTotem();
                    }, true);
                }
                else {
                    this.debounceChargerContenuTotem();
                    this.$rootScope.$on("$routeChangeSuccess", function (event) {
                        // normalement, c'est inutile sur un changement de route !
                        _this.debounceChargerContenuTotem();
                    });
                }
                this.$rootScope.$on(aide.Constants.EVENT_NAME_SET_CLE_SECONDAIRE, function (event, cle) {
                    _this.totemAideService.cleSecondaire = cle;
                    _this.debounceChargerContenuTotem();
                });
                this.$rootScope.$on(aide.Constants.EVENT_NAME_SET_CLE_TERTIAIRE, function (event, cle) {
                    _this.totemAideService.cleTertiaire = cle;
                    _this.debounceChargerContenuTotem();
                });
            };
            /**
             * Evènement qui ferme le totem si la touche Echap est appuyée
             */
            MwsfTotemAideControleur.prototype.onKeydown = function (event) {
                var _this = this;
                if (event.keyCode === 27) {
                    event.preventDefault();
                    this.$rootScope.$apply(function () {
                        _this.masquerTotemAide();
                    });
                }
            };
            /**
             * Charger le contenu du totem
             *
             */
            MwsfTotemAideControleur.prototype.chargerContenuTotem = function () {
                var _this = this;
                return this.$q.all([this.chargerBagages(), this.chargerFlash()]).then(function () {
                    if (_this.bouchon && !_this.open) {
                        _this.afficherTotemAide();
                    }
                    _this.libelleBouton = "Aide";
                    if (_this.tuilesAide.length || _this.canauxAssistance.length || _this.flash) {
                        _this.libelleBouton += " (" + _this.tuilesAide.length + ")";
                    }
                }).catch(function (error) {
                    console.error("Echec du chargement du totem", error);
                    _this.tuilesAide = [];
                    _this.canauxAssistance = [];
                });
            };
            /**
             * Chargement des bagages du totem
             */
            MwsfTotemAideControleur.prototype.chargerBagages = function () {
                var _this = this;
                // recherche des tuiles et canaux d'assistance à afficher via appel au service REST
                return this.totemAideService.getTuilesEtCanaux(this.bouchon).then(function (bagages) {
                    // valorisation de la liste de tuiles ou de la liste de canaux d'assistance suivant le code bagage.
                    _this.tuilesAide = [];
                    _this.canauxAssistance = [];
                    bagages.forEach(function (bagage) {
                        if (bagage.codeTypeBagage === aide.Constants.TYPE_BAGAGE_AUTRE_CANAL) {
                            _this.canauxAssistance.push(bagage);
                        }
                        else {
                            var newTuile = new aide.TotemAideTuile(bagage, _this);
                            _this.tuilesAide.push(newTuile);
                        }
                    });
                });
            };
            /**
             * Chargement du message flash
             */
            MwsfTotemAideControleur.prototype.chargerFlash = function () {
                var _this = this;
                return this.totemAideService.getFlash(this.bouchon).then(function (flash) {
                    _this.flash = flash;
                });
            };
            MwsfTotemAideControleur.$inject = [
                "$scope",
                "$rootScope",
                "$window",
                "$document",
                "$q",
                "$attrs",
                "serviceAgentExtended",
                "modalService",
                "MwsfTotemAideService"
            ];
            return MwsfTotemAideControleur;
        }());
        aide.MwsfTotemAideControleur = MwsfTotemAideControleur;
        aide.app.controller("MwsfTotemAideControleur", MwsfTotemAideControleur);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        /**
         * Le mode bouchon permet de passer les variables utiles au totem en attribut de la directive.
         * Quand il est activé, le service ne récupère pas les paramètres dans le contexte mais prend ceux de la directives.
         */
        function MwsfTotemAide() {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "typescript/totem-aide/totem-aide-view.html",
                controller: "MwsfTotemAideControleur",
                controllerAs: "$ctrl",
                bindToController: true,
                scope: {
                    id: "@",
                    bouchon: "=?"
                }
            };
        }
        aide.app.directive("mwsfTotemAide", MwsfTotemAide);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        /**
         * Classe modélisant une tuile du totem d'aide. Par défaut, cette tuile n'est pas marquée comme favori.
         */
        var TotemAideTuile = (function () {
            function TotemAideTuile(bagage, handler) {
                this.bagage = bagage;
                this.config = {
                    typeMarquage: "picto",
                    pictoMarquage: "itce-star",
                    eventNameEditionOn: aide.Constants.EVENT_NAME_EDITION_ON,
                    eventNameEditionOff: aide.Constants.EVENT_NAME_EDITION_OFF,
                    tuileHandler: handler,
                    taille: "lg",
                    pictoAction2: aide.Constants.PICTO_FAVORI_PLUS
                };
                this.favorisPerso = false;
                this.titre = bagage.libelleTitreTuile;
                this.lien = bagage.libelleURL;
                this.id = bagage.id + "";
            }
            return TotemAideTuile;
        }());
        aide.TotemAideTuile = TotemAideTuile;
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var MwsfTotemAideService = (function () {
            function MwsfTotemAideService($q, serviceAgentExtended, communService) {
                this.$q = $q;
                this.serviceAgentExtended = serviceAgentExtended;
                this.communService = communService;
            }
            /**
             * Récupère les bagages pour le totem d'aide (tuiles d'aide et canaux d'assistance)
             */
            MwsfTotemAideService.prototype.getTuilesEtCanaux = function (bouchon) {
                var _this = this;
                return this.serviceAgentExtended.getAuthentificationInfo().then(function (infos) {
                    var params = {
                        codeEtablissement: infos.codeEtablissement,
                        processus: bouchon ? bouchon.processus : _this.serviceAgentExtended.Step.ProcessCode,
                        etape: bouchon ? bouchon.etape : _this.serviceAgentExtended.Step.StepCode,
                        cleSecondaire: bouchon ? bouchon.cleSecondaire : _this.cleSecondaire,
                        cleTertiaire: bouchon ? bouchon.cleTertiaire : _this.cleTertiaire,
                        date: (bouchon && bouchon.date ? bouchon.date : new Date()).toISOString().substr(0, 10)
                    };
                    return _this.serviceAgentExtended.sendRequest({
                        url: aide.URL_SERVICE_RECHERCHE + "bagageTotemEtab",
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.GET,
                        params: {
                            codeEtablissement: params.codeEtablissement,
                            processus: params.processus,
                            etape: params.etape || "",
                            cleSecondaire: params.cleSecondaire || "",
                            cleTertiaire: params.cleTertiaire || "",
                            date: params.date
                        }
                    });
                });
            };
            /**
             * Récupère le messge flash
             */
            MwsfTotemAideService.prototype.getFlash = function (bouchon) {
                var _this = this;
                return this.serviceAgentExtended.getAuthentificationInfo().then(function (infos) {
                    var params = {
                        codeEtablissement: infos.codeEtablissement,
                        etape: bouchon ? bouchon.etape : _this.serviceAgentExtended.Step.StepCode,
                        date: (bouchon && bouchon.date ? bouchon.date : new Date()).toISOString().substr(0, 10)
                    };
                    return _this.serviceAgentExtended.sendRequest({
                        url: aide.URL_SERVICE_RECHERCHE + "flash",
                        withHeaders: true,
                        method: MyWay.Services.MethodEnum.GET,
                        params: {
                            codeEtablissement: params.codeEtablissement,
                            etape: params.etape || "",
                            date: params.date
                        }
                    });
                });
            };
            /**
             * Construit et envoi la requête pour la recherche des bagages d'un établissement.
             */
            MwsfTotemAideService.prototype.sendRequestRechercheBagageEtablissement = function () {
                return this.serviceAgentExtended.sendRequest({
                    url: aide.URL_SERVICE_RECHERCHE + "bagageEtablissement",
                    withHeaders: true,
                    method: MyWay.Services.MethodEnum.GET
                }).then(function (dataRest) { return dataRest; });
            };
            MwsfTotemAideService.$inject = [
                "$q",
                "serviceAgentExtended",
                "MwAideCommunService"
            ];
            return MwsfTotemAideService;
        }());
        aide.MwsfTotemAideService = MwsfTotemAideService;
        aide.app.service("MwsfTotemAideService", MwsfTotemAideService);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var TotemAidemFlashModaleControleur = (function () {
            function TotemAidemFlashModaleControleur($modalInstance, data) {
                this.$modalInstance = $modalInstance;
                this.data = data;
                this.modalData = data;
            }
            TotemAidemFlashModaleControleur.prototype.ok = function () {
                this.$modalInstance.close();
            };
            TotemAidemFlashModaleControleur.prototype.cancel = function () {
                this.$modalInstance.dismiss("cancel");
            };
            TotemAidemFlashModaleControleur.$inject = ["$modalInstance", "data"];
            return TotemAidemFlashModaleControleur;
        }());
        aide.app.controller("TotemAidemFlashModaleControleur", TotemAidemFlashModaleControleur);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var TotemAidemAssistanceModaleControleur = (function () {
            function TotemAidemAssistanceModaleControleur($modalInstance, communService, data) {
                this.$modalInstance = $modalInstance;
                this.communService = communService;
                this.data = data;
                this.modalData = data;
            }
            TotemAidemAssistanceModaleControleur.prototype.ok = function () {
                this.$modalInstance.close();
            };
            TotemAidemAssistanceModaleControleur.prototype.cancel = function () {
                this.$modalInstance.dismiss("cancel");
            };
            TotemAidemAssistanceModaleControleur.prototype.openUrl = function (url) {
                this.communService.openWindow(url);
            };
            TotemAidemAssistanceModaleControleur.$inject = ["$modalInstance", "MwAideCommunService", "data"];
            return TotemAidemAssistanceModaleControleur;
        }());
        aide.app.controller("TotemAidemAssistanceModaleControleur", TotemAidemAssistanceModaleControleur);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var aide;
    (function (aide) {
        "use strict";
        var TotemAidemReferentielAideModaleControleur = (function () {
            function TotemAidemReferentielAideModaleControleur(totemAideService, $modalInstance, $window, data) {
                this.totemAideService = totemAideService;
                this.$modalInstance = $modalInstance;
                this.$window = $window;
                // récupération des données
                if (data != null) {
                    this.referentielAide = data.referentielAide;
                }
            }
            TotemAidemReferentielAideModaleControleur.prototype.ok = function () {
                this.$modalInstance.close();
            };
            TotemAidemReferentielAideModaleControleur.prototype.cancel = function () {
                this.$modalInstance.dismiss("cancel");
            };
            /**
             * Ouverture des liens des bagages
             */
            TotemAidemReferentielAideModaleControleur.prototype.openUrl = function (url) {
                this.$window.open(url);
            };
            TotemAidemReferentielAideModaleControleur.$inject = ["MwsfTotemAideService", "$modalInstance", "$window", "data"];
            return TotemAidemReferentielAideModaleControleur;
        }());
        aide.app.controller("TotemAidemReferentielAideModaleControleur", TotemAidemReferentielAideModaleControleur);
    })(aide = myway.aide || (myway.aide = {}));
})(myway || (myway = {}));

angular.module("myway.composantAide").run(["$templateCache", function($templateCache) {$templateCache.put("typescript/totem-aide/totem-aide-view.html","<div>\r\n    <div class=\"totem-aide\">\r\n        <div class=\"bouton-aide\">\r\n            <button class=\"btn btn-contextuel btn-icon badge-notification navbar-btn\" ng-click=\"$ctrl.toggleTotem()\" ng-disabled=\"!$ctrl.tuilesAide.length && !$ctrl.canauxAssistance.length && !$ctrl.flash\" ng-attr-id=\"{{$ctrl.id + \'-btn-ouverture\'}}\">\r\n                <span class=\"icon itce-question\" aria-hidden=\"true\" title=\"Aide\"></span>\r\n                <span class=\"sr-only\">Ouverture de l\'aide</span>\r\n                <span class=\"badge badge-primary bottom right\" ng-hide=\"!$ctrl.tuilesAide.length && !$ctrl.canauxAssistance.length && !$ctrl.flash\" ng-bind=\"$ctrl.tuilesAide.length\"></span>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"totem-aide-overlay\" ng-show=\"$ctrl.open && !$ctrl.bouchon\" ng-click=\"$ctrl.toggleTotem()\"></div>\r\n\r\n        <div class=\"totem-aide-volet-conteneur\" ng-show=\"$ctrl.open\">\r\n            <div class=\"totem-aide-volet-contenu\">\r\n                <div class=\"row tuiles-conteneur\">\r\n                    <div class=\"col-xs-12\">\r\n                        <mw-tuile-standard ng-repeat=\"tuile in $ctrl.tuilesAide\" ng-attr-id=\"{{$ctrl.id + \'-tuile-fav-\' + tuile.id}}\" titre=\"tuile.titre\" ligne1=\"$ctrl.formatStringDateInddMMyyyy(tuile.bagage.majDate)\" avec-marquage=\"true\" object=\"tuile\" couleur=\"{{tuile.favorisPerso ?\'couleur-favori\':\'couleur-sombre\'}}\" config=\"tuile.config\">\r\n                        </mw-tuile-standard>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row boutons-conteneur\">\r\n                    <div class=\"col-xs-8\">\r\n                        <mw-button texte=\"Revoir le Flash\" modele=\"zone\" ng-click=\"$ctrl.afficherModaleFlash()\" ng-attr-id=\"{{$ctrl.id + \'-btn-flash\'}}\" ng-show=\"$ctrl.flash\"></mw-button>\r\n                        <mw-button texte=\"Autres canaux d\'assistance\" modele=\"zone\" ng-click=\"$ctrl.afficherModaleAssistance()\" ng-attr-id=\"{{$ctrl.id + \'-btn-assistance\'}}\" ng-show=\"$ctrl.canauxAssistance.length > 0\"></mw-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("typescript/mw-infobulle-aide/infobulle-aide-view.html","<div>\r\n    <div class=\"mwsf-infobulle-wrapper\" ng-class=\"{\'infobulle-flottante\': $ctrl.flottante === true}\">\r\n        <div class=\"mwsf-infobulle-transclude\" ng-transclude></div>\r\n        <div class=\"infobulle-container\" ng-show=\"$ctrl.showPicto\">\r\n            <span class=\"infobulle-picto icon\" tabindex=\"-1\" ng-class=\"{\'itce-question-new infobulle-new-picto\' : $ctrl.nouveaute, \'itce-question-circle\' : !$ctrl.nouveaute}\" ng-click=\"$ctrl.toggleOuvert()\" ng-keypress=\"$ctrl.toggleOuvert()\" ng-attr-id=\"{{::idChamp+\'-picto\'}}\">\r\n            </span>\r\n        </div>\r\n            <div class=\"mw-popover-aide\" role=\"alertdialog\" ng-show=\"$ctrl.ouvert\">\r\n            <div class=\"arrow\"></div>\r\n            <div class=\"mw-popover-aide-header\" ng-attr-id=\"{{::idChamp+\'mw-popover-aide-header\'}}\" aria-describedby=\"{{::idChamp+\'mw-popover-aide-header\'}}\">\r\n                <button type=\"button\" ng-show=\"$ctrl.ouvert\" ng-click=\"$ctrl.toggleOuvert()\" tabindex=\"-1\" ng-attr-id=\"{{::idChamp+\'-close\'}}\" aria-hidden=\"true\" class=\"mw-popover-aide-close\">\r\n                    <span class=\"icon itce-times-circle\"></span>\r\n                </button>\r\n            </div>\r\n            <div ng-attr-id=\"{{::idChamp+\'mw-popover-aide-inner\'}}\" aria-describedby=\"{{::idChamp+\'mw-popover-aide-inner\'}}\" class=\"mw-popover-aide-inner\">\r\n                <div class=\"mw-popover-aide-content\" ng-attr-id=\"{{::idChamp+\'mw-popover-aide-content\'}}\" aria-describedby=\"{{::idChamp+\'mw-popover-aide-content\'}}\">\r\n                    <div class=\"form-group\"><span ng-bind-html=\"$ctrl.message\"></span></div>\r\n                    <div class=\"form-group\" ng-show=\"$ctrl.image\">\r\n                        <img ng-src=\"{{$ctrl.image}}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("typescript/totem-aide/modale-flash/modale-flash-vue.html","<div class=\"modal-header\">\r\n    <button type=\"button\" ng-click=\"FlashModaleCtrl.cancel()\" class=\"close\" aria-hidden=\"true\"><span class=\"icon itce-times\"></span></button>\r\n    <h1 class=\"modal-title\" ng-bind=\"::FlashModaleCtrl.modalData.headerText\"></h1>\r\n</div>\r\n<div class=\"modal-body texte-gros row\">\r\n    <div class=\"col-sm-offset-1\" ng-bind-html=\"::FlashModaleCtrl.modalData.bodyHtml\"></div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-sm-offset-9 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"FlashModaleCtrl.ok()\">Terminer</button>\r\n    </div>\r\n</div>");
$templateCache.put("typescript/totem-aide/modale-assistance/modale-assistance-vue.html","<div class=\"modal-header\">\r\n    <button type=\"button\" ng-click=\"AssistanceModaleCtrl.cancel()\" class=\"close\" aria-hidden=\"true\"><span class=\"icon itce-times\"></span></button>\r\n    <h1 class=\"modal-title\">Autres canaux d\'assistance</h1>\r\n</div>\r\n<div class=\"modal-body texte-gros row\">\r\n    <div class=\"col-xs-12\">\r\n        <ul>\r\n            <li ng-repeat=\"bagage in AssistanceModaleCtrl.modalData.canauxAssistance\">\r\n                <a href ng-click=\"AssistanceModaleCtrl.openUrl(bagage.libelleURL)\" title=\"{{::bagage.libelleURL}}\" ng-bind=\"::bagage.libelleTitreTuile\"></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-sm-offset-9 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"AssistanceModaleCtrl.ok()\">Terminer</button>\r\n    </div>\r\n</div>");
$templateCache.put("typescript/totem-aide/modale-referentiel-aide/modale-referentiel-aide-vue.html","<div class=\"modal-header\">\r\n    <button type=\"button\" ng-click=\"ReferentielAideModaleCtrl.cancel()\" class=\"close\" aria-hidden=\"true\"><span class=\"icon itce-times\"></span></button>\r\n    <h1 class=\"modal-title\">Aide générale</h1>\r\n</div>\r\n<div class=\"modal-body texte-gros row\">\r\n    <div class=\"col-xs-12\">\r\n        <div ng-repeat=\"(processus, bagageGroupeParEtape) in ReferentielAideModaleCtrl.referentielAide\">\r\n            <div class=\"processus-title\" ng-click=\"open = !open\">\r\n                <h2><span class=\"icon\" ng-class=\"{\'itce-chevron-right\': !open, \'itce-chevron-down\': open}\"></span> {{::processus}}</h2>\r\n            </div>\r\n            <ul ng-show=\"open\">\r\n                <li ng-repeat=\"bagageSansEtape in bagageGroupeParEtape.null\">\r\n                    <a href ng-click=\"ReferentielAideModaleCtrl.openUrl(bagageSansEtape.libelleURL)\" title=\"{{::bagageSansEtape.libelleURL}}\" ng-bind=\"::bagageSansEtape.libelleTitreTuile\"></a>\r\n                </li>\r\n                <div ng-repeat=\"(etape, bagageListe) in bagageGroupeParEtape\" ng-if=\"etape !== \'null\'\">\r\n                    <div class=\"etape-title\">\r\n                        <h3>{{::etape}}</h3>\r\n                    </div>\r\n                    <ul>\r\n                        <li ng-repeat=\"bagage in bagageListe\">\r\n                            <a href ng-click=\"ReferentielAideModaleCtrl.openUrl(bagage.libelleURL)\" title=\"{{::bagage.libelleURL}}\" ng-bind=\"::bagage.libelleTitreTuile\"></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"col-sm-offset-9 col-sm-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"ReferentielAideModaleCtrl.ok()\">Terminer</button>\r\n    </div>\r\n</div>");}]);
//# sourceMappingURL=composants-aide.js.map
