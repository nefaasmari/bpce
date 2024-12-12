/**
 * Généré par : ITGCE\S0075978
 * Changeset TFS : undefined
 * Etiquette TFS : undefined
 * Déclenchement : undefined
 */
/// <reference path="//myway-atelier\DeclarationsTS\v1\scripts\typings\angularjs\angular.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\scripts\typings\angularjs\angular-mocks.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\scripts\typings\jasmine\jasmine.d.ts" />

var myway;
(function (myway) {
    var mockTU;
    (function (mockTU) {
        var MockService = (function () {
            function MockService($q) {
                this.$q = $q;
            }
            MockService.prototype.creerMock = function (service, nomMethode, estUnePromesse, resultatVoulu) {
                var _this = this;
                if (estUnePromesse) {
                    spyOn(service, nomMethode).and.callFake(function () {
                        var deferred = _this.$q.defer();
                        deferred.resolve(resultatVoulu);
                        return deferred.promise;
                    });
                }
                else {
                    spyOn(service, nomMethode).and.callFake(function () {
                        return resultatVoulu;
                    });
                }
            };
            MockService.prototype.creerMockPromesseErreur = function (service, nomMethode, resultatVoulu) {
                var _this = this;
				spyOn(service, nomMethode).and.callFake(function () {
					var deferred = _this.$q.defer();
					deferred.reject(resultatVoulu);
					return deferred.promise;
				});
            };
            MockService.prototype.creerListeMock = function (service, listeMethodeAMocker) {
                var _this = this;
                if (listeMethodeAMocker !== null && listeMethodeAMocker.length > 0) {
                    angular.forEach(listeMethodeAMocker, function (methodeService, cle) {
                        if (methodeService.estUnePromesse) {
                            spyOn(service, methodeService.nomMethode).and.callFake(function () {
                                var deferred = _this.$q.defer();
                                deferred.resolve(methodeService.resultatMethod);
                                return deferred.promise;
                            });
                        }
                        else {
                            spyOn(service, methodeService.nomMethode).and.callFake(function () {
                                return methodeService.resultatMethod;
                            });
                        }
                    });
                }
            };
            return MockService;
        })();
        mockTU.MockService = MockService;
    })(mockTU = myway.mockTU || (myway.mockTU = {}));
})(myway || (myway = {}));

var myway;
(function (myway) {
    var mockTU;
    (function (mockTU) {
        var model;
        (function (model) {
            var CompositionService = (function () {
                function CompositionService() {
                }
                return CompositionService;
            })();
            model.CompositionService = CompositionService;
        })(model = mockTU.model || (mockTU.model = {}));
    })(mockTU = myway.mockTU || (myway.mockTU = {}));
})(myway || (myway = {}));
