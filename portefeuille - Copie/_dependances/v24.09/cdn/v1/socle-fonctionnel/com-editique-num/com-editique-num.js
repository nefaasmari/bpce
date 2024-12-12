/**
 * Généré par : SIGCESIE\ct-tfsbuild
 * Changeset TFS : C604250
 * Etiquette TFS : com-editique-num-v21.01_20210211.1
 * Déclenchement : Manual
 */
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        e.app = angular.module("myway.comEditiqueNumerisation", ["ui.bootstrap", "moduleAgent", "myway.comInterdomaine", "myway.pieceJointe"]), e.app.run(["$window", function(e) {
            var t = angular.element,
                i = function(t) {
                    return t.ownerDocument && t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
                };
            t.prototype.outerWidth = function() {
                var e = this[0],
                    t = i(e),
                    n = parseInt(t.width);
                return n += parseFloat(t.marginLeft) + parseFloat(t.marginRight)
            }, t.prototype.innerWidth = function() {
                return this[0].clientWidth
            }
        }])
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var __extends = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    },
    myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            "use strict";
            ! function(e) {
                e[e.EMAIL = 1] = "EMAIL", e[e.IMPRESSION = 2] = "IMPRESSION"
            }(e.TypeRemiseEnum || (e.TypeRemiseEnum = {}));
            var t = (e.TypeRemiseEnum, function(e) {
                function t() {
                    e.apply(this, arguments)
                }
                return __extends(t, e), t.VALIDER = new t("VALIDER", "mwsfRemiseCg-footer-valider"), t.ENABLE_VALIDATE = new t("ENABLE_VALIDATE", "mwsfRemiseCg-footer-enable-valider"), t.ACTION_VALIDATE = new t("ACTION_VALIDATE", "mwsfRemiseCg-footer-action-validation"), t.AUTOMATIC_VALIDATE = new t("AUTOMATIC_VALIDATE", "mwsfRemiseCg-footer-automatic-validation"), t
            }(MyWay.Services.StringEnum));
            e.RemiseCGEventsEnum = t,
                function(e) {
                    e[e.CAISSE_EPARGNE = 1] = "CAISSE_EPARGNE", e[e.BCP = 2] = "BCP", e[e.AUTRE = 3] = "AUTRE", e[e.CREDIT_COOP = 4] = "CREDIT_COOP", e[e.BANQUE_BTP = 5] = "BANQUE_BTP"
                }(e.TypeEtablissementEnum || (e.TypeEtablissementEnum = {}));
            e.TypeEtablissementEnum
        }(t = e.Enums || (e.Enums = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            "use strict"
        }(t = e.Modeles || (e.Modeles = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            var t;
            ! function(e) {
                "use strict"
            }(t = e.contactElectronique || (e.contactElectronique = {}))
        }(t = e.Modeles || (e.Modeles = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            "use strict"
        }(t = e.Modeles || (e.Modeles = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            "use strict";
            ! function(e) {
                e[e.JUSTIFICATIF_IDENTITE = 0] = "JUSTIFICATIF_IDENTITE", e[e.JUSTIFICATIF_DOMICILE = 1] = "JUSTIFICATIF_DOMICILE", e[e.JUSTIFICATIF_REVENU = 2] = "JUSTIFICATIF_REVENU", e[e.AVIS_IMPOSITION = 3] = "AVIS_IMPOSITION"
            }(e.TypeJustificatifEnum || (e.TypeJustificatifEnum = {}));
            e.TypeJustificatifEnum
        }(t = e.Enums || (e.Enums = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            "use strict";
            var t = function(e) {
                function t() {
                    e.apply(this, arguments)
                }
                return __extends(t, e), t.PERSONNE_PHYSIQUE = new t("TYPE_DRC_PERSONNE_PHYSIQUE", "PA"), t.PERSONNE_MORALE = new t("TYPE_DRC_PERSONNE_MORALE", "PM"), t.PERSONNE_PRO = new t("TYPE_DRC_PERSONNE_PRO", "PR"), t
            }(MyWay.Services.StringEnum);
            e.TypePersonne = t
        }(t = e.Enums || (e.Enums = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(e) {
            "use strict"
        }(t = e.Modeles || (e.Modeles = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function t(e, t) {
                    this.serviceAgent = e, this.ressourceService = t
                }
                return t.prototype.rechercheEntiteTitulaire = function(e, t) {
                    return this.serviceAgent.sendRequest({
                        url: this.ressourceService.entiteTitulaireServiceUrl + "recherche",
                        params: {
                            identifiantTiers: t,
                            codeEtablissement: e,
                            typeRechercheEntiteTitulaire: "1"
                        },
                        withHeaders: !0
                    })
                }, t.prototype.b64toBlob = function(e, t, i) {
                    t = t || "", i = i || 512;
                    for (var n = atob(e), r = [], o = 0; o < n.length; o += i) {
                        for (var s = n.slice(o, o + i), c = new Array(s.length), a = 0; a < s.length; a++) c[a] = s.charCodeAt(a);
                        r.push(new Uint8Array(c))
                    }
                    return new Blob(r, {
                        type: t
                    })
                }, t.prototype.verifiePresenceTablette = function() {
                    return this.serviceAgent.Capacites.getCapacite(MyWay.Services.Capacites.REGLE.INTEROP_APPLI_BANCAIRE).then(function(e) {
                        return !e && null === sessionStorage.getItem("myway-portal-id")
                    })["catch"](function(e) {
                        return console.error(e.libelle), !1
                    })
                }, t.prototype.getTypeEtablissement = function() {
                    return this.serviceAgent.getAuthentificationInfo().then(function(t) {
                        var i;
                        switch (t.codeEtablissement) {
                            case "11315":
                            case "11425":
                            case "13135":
                            case "13485":
                            case "14445":
                            case "14505":
                            case "16275":
                            case "18025":
                            case "18315":
                            case "18715":
                            case "12135":
                            case "13335":
                            case "13825":
                            case "14265":
                            case "15135":
                            case "16705":
                            case "17515":
                                i = e.Enums.TypeEtablissementEnum.CAISSE_EPARGNE;
                                break;
                            case "12579":
                                i = e.Enums.TypeEtablissementEnum.BCP;
                                break;
                            case "42559":
                                i = e.Enums.TypeEtablissementEnum.CREDIT_COOP;
                                break;
                            case "30258 ":
                                i = e.Enums.TypeEtablissementEnum.BANQUE_BTP;
                                break;
                            default:
                                i = e.Enums.TypeEtablissementEnum.AUTRE
                        }
                        return i
                    })
                }, t.$inject = ["serviceAgentExtended", "editiqueNumRessourceService"], t
            }();
            t.CommunService = i, e.app.service("EditiqueCommunService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function e(e, t, i) {
                    this.$q = e, this.serviceAgent = t, this.ressourceService = i
                }
                return e.prototype.verifieCompletudeDRC = function(e, t) {
                    return t || this.$q.reject("Le paramètre typeEntiteSupport est obligatoire pour une caisse classeur client"), this.serviceAgent.sendRequest({
                        method: MyWay.Services.MethodEnum.GET,
                        url: this.ressourceService.classeurClientServiceUrl + "dossierReglementaireClient",
                        params: {
                            typeEntiteSupport: t,
                            identifiantPorteur: e
                        },
                        contentType: MyWay.Services.ContentTypeEnum.JSON,
                        withHeaders: !0
                    })
                }, e.$inject = ["$q", "serviceAgentExtended", "editiqueNumRessourceService"], e
            }();
            t.CompletudeDrcService = i, e.app.service("completudeDrcService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function t(e, t, i, n, r, o, s) {
                    this.$q = e, this.$sce = t, this.$window = i, this.serviceAgent = n, this.communService = r, this.gedService = o, this.ressourceService = s
                }
                return t.prototype.hasMessagerieSecuriseeInternet = function(e, t) {
                    var i = this;
                    return this.communService.rechercheEntiteTitulaire(e, t).then(function(e) {
                        return i.serviceAgent.sendRequest({
                            url: i.ressourceService.contratServiceUrl + "etatMSI",
                            params: {
                                identifiantPersonne: _.padLeft(t.toString(), 9, "0")
                            },
                            withHeaders: !0,
                            method: MyWay.Services.MethodEnum.GET,
                            responseType: MyWay.Services.ResponseTypeEnum.JSON
                        })
                    }).then(function(e) {
                        return e.adresseEMAIL
                    })["catch"](function(e) {
                        return void 0
                    })
                }, t.prototype.findEmail = function(e, t) {
                    var i = this;
                    return this.serviceAgent.sendRequest({
                        method: MyWay.Services.MethodEnum.GET,
                        url: this.ressourceService.tiersServiceUrl + "media",
                        params: {
                            codeEtablissement: e,
                            identifiantPersonne: t
                        },
                        withHeaders: !0
                    }).then(function(e) {
                        var t = [];
                        return e && e.listeMedia && (t = _.filter(e.listeMedia, function(e) {
                            return "03" === e.codeTypeMedia
                        })), i.electionEmail(t)
                    })
                }, t.prototype.electionEmail = function(e) {
                    if (e.length) {
                        var t = _.find(e, function(e) {
                                return e.indicateurPreferenceMedia
                            }),
                            i = t;
                        return t || (i = e.length > 1 ? _.find(e, function(e) {
                            return "P" === e.codeTypeUsageMedia
                        }) : e[0]), i.referenceAccesMedia
                    }
                    return void 0
                }, t.prototype.chargeCG = function(e, t, i) {
                    var n = this,
                        r = [];
                    if (i && !this.contientUrlVide(i)) {
                        var o = this.$q.defer();
                        return o.resolve(i), o.promise
                    }
                    return this.recuperationLiens(e).then(function(e) {
                        return e.forEach(function(e) {
                            r.push({
                                nom: e.libelle,
                                url: n.$sce.trustAsResourceUrl(e.url)
                            })
                        }), r
                    })["catch"](function(e) {
                        return r
                    })
                }, t.prototype.envoiCGParEmail = function(t, i, n, r, o) {
                    var s, c = this,
                        a = this.$q.when();
                    return t === e.Enums.TypeEtablissementEnum.CAISSE_EPARGNE && (console.log("CG envoi mail todocument fournis", o), o && !this.contientUrlVide(o) ? o.forEach(function(e) {
                        var t = e.libelle,
                            n = RegExp(".(pdf)$");
                        t.match(n) ? a = c.recuperationLiens(i).then(function(e) {
                            s = e, console.log("reponse result de recuperation liens", s)
                        }) : (s = o, console.log("CG envoi mail to see documentsEntreprise", s))
                    }) : (a = this.recuperationLiens(i).then(function(e) {
                        s = e, console.log("reponse result de recuperation liens", s)
                    }), console.log("promesse reponse result", s))), a.then(function() {
                        var e = c.createInputEnvoi(t, r, n, s);
                        return console.log("input reponse", e), c.envoiMail(e)
                    })
                }, t.prototype.contientUrlVide = function(e) {
                    return e && !_.isEmpty(e) ? _.some(e, function(e) {
                        return _.isEmpty(e.url)
                    }) : !0
                }, t.prototype.getUrlCGP = function(t) {
                    var i = {};
                    return i[e.Enums.TypeEtablissementEnum.CAISSE_EPARGNE] = "https://www.caisse-epargne.fr", i[e.Enums.TypeEtablissementEnum.BCP] = "https://www.banquebcp.fr/particuliers/information-legales-contractuelles", i[e.Enums.TypeEtablissementEnum.CREDIT_COOP] = "http://www.credit-cooperatif.coop/", i[e.Enums.TypeEtablissementEnum.BANQUE_BTP] = "http://www.btp-banque.fr/", i[t]
                }, t.prototype.createInputEnvoi = function(e, t, i, n) {
                    var r = this.getUrlCGP(e);
                    console.log("DOCUMENT DANS create input envoie", n), r || (r = "https://www.banquebcp.fr/particuliers/information-legales-contractuelles");
                    var o = "<a href='" + r + "'>Conditions Générales Particuliers</a>",
                        s = "";
                    return n && n.length > 0 && (s += "Pour les consulter, il vous suffit de cliquer sur les liens ci-dessous :", n.forEach(function(e) {
                        s += "<br/>";
                        var t = e.libelle;
                        t || (t = "Lien"), s += "<a href='" + e.url + "'>" + t + "</a>", console.log("lienCG list", s)
                    })), {
                        applicationOrigine: "DOCENTPR",
                        numeroPersonne: t,
                        supportCommunication: "01",
                        message: {
                            priorite: 2,
                            accuseReception: "00",
                            typeDestinataire: 1,
                            destinataire: i,
                            modele: 192,
                            tokens: [{
                                cle: "LISTELIENSCG",
                                valeur: s
                            }, {
                                cle: "LIENPORTAILCG",
                                valeur: o
                            }]
                        }
                    }
                }, t.prototype.recuperationLiens = function(e) {
                    var t = [];
                    return console.log("clesRattachement dans recuperation liens method", t), e.forEach(function(e) {
                        e.identifiantDocumentGED && (t.push(e.codeClasseDocumentEntreprise), console.log("clesRattachement", t))
                    }), 0 === t.length ? (console.log("clesRattachement length", t), this.$q.when([])) : this.serviceAgent.sendRequest({
                        method: MyWay.Services.MethodEnum.GET,
                        url: this.ressourceService.documentParametreServiceUrl + "documentEntreprise",
                        params: {
                            clesRattachement: t
                        },
                        withHeaders: !0
                    })
                }, t.prototype.envoiMail = function(e) {
                    return this.serviceAgent.sendRequest({
                        method: MyWay.Services.MethodEnum.POST,
                        url: this.ressourceService.outilCommunServiceUrl + "contactElectronique",
                        data: e,
                        withHeaders: !0
                    })
                }, t.TYPE_CG = "CGEE", t.$inject = ["$q", "$sce", "$window", "serviceAgentExtended", "EditiqueCommunService", "mweeGedService", "editiqueNumRessourceService"], t
            }();
            t.ConditionsGeneralesService = i, e.app.service("conditionsGeneralesService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function e(e, t, i) {
                    this.$q = e, this.serviceAgent = t, this.ressourceService = i
                }
                return e.prototype.propagerDocumentsGED = function(e) {
                    return this.serviceAgent.sendRequest({
                        method: MyWay.Services.MethodEnum.POST,
                        url: this.ressourceService.classeurClientServiceUrl + "dossierPropagation",
                        data: e,
                        withHeaders: !0
                    })
                }, e.$inject = ["$q", "serviceAgentExtended", "editiqueNumRessourceService"], e
            }();
            t.DossierPropagationService = i, e.app.service("editiqueDossierPropagationService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function e(e, t) {
                    var i = this;
                    this.serviceAgent = e, this.ressourceService = t, this.serviceAgent.getAuthentificationInfo().then(function(e) {
                        i.authentificationInfos = e
                    })
                }
                return e.prototype.getDocumentsByActeGestion = function(e, t) {
                    var i = this,
                        n = [];
                    n = n.concat(e.actesSecondaires), n.push(e.codeActeGestion);
                    var r = e.isModePapier || "P" === e.modeSignature ? "FAFP" : "FAFE";
                    return this.serviceAgent.sendRequest({
                        url: this.ressourceService.documentParametreServiceUrl + "DocumentParametre",
                        params: {
                            listeActes: n,
                            codeCanal: e.codeCanal,
                            codeModeMiseGestion: e.modeMiseGestion,
                            codeTypeMarcheDocumentEntreprise: e.typeMarche
                        },
                        withHeaders: !0
                    }).then(function(e) {
                        if (e.listeDocumentActe) {
                            var n = e.listeDocumentActe;
                            return t && (n = _.filter(e.listeDocumentActe, function(e) {
                                return e.codeTypeDocument === t && e.codeModeContractualisation === r
                            })), n = i.unique(n, "identifiantDocumentGED")
                        }
                        return []
                    })
                }, e.prototype.unique = function(e, t) {
                    return e.reduce(function(e, i) {
                        var n = _.findIndex(e, function(e) {
                            return e.hasOwnProperty(t) ? e[t] === i[t] : void 0
                        });
                        return 0 > n && e.push(i), e
                    }, [])
                }, e.$inject = ["serviceAgentExtended", "editiqueNumRessourceService"], e
            }();
            t.EditiqueService = i, e.app.service("editiqueService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function t(e, t, i, n, r) {
                    this.$q = e, this.serviceAgent = t, this.pieceJointeService = i, this.gedService = n, this.dossierPropagationService = r
                }
                return t.prototype.validerDocumentsDrafts = function(e) {
                    var t = this;
                    return this.$q.all([this.serviceAgent.getAuthentificationInfo(), this.loadContexteJustificatif()]).then(function(i) {
                        var n = i[0],
                            r = [];
                        return _.forEach(t.contexteJustificatif, function(i) {
                            i.draft && r.push(t.gedService.validerDraft({
                                idAgntTech: n.agentConnecte.referenceExterneAgent,
                                codeEtablissement: n.codeEtablissement,
                                agenceUtilisateur: n.agentConnecte.numeroInterneEds,
                                idntAttributaire1: e.idntAttributaire1,
                                idntAttributaire2: e.idntAttributaire2,
                                typeAttributaire: e.typeAttributaire,
                                idntDocument: i.identifiantTechnique,
                                codeTypeNatrDoc: i.codeTypeNatrDoc,
                                isTransitoire: i.isTransitoire
                            }).then(function() {
                                i.porteur = {
                                    idntAttributaire1: e.idntAttributaire1,
                                    idntAttributaire2: e.idntAttributaire2,
                                    typeAttributaire: e.typeAttributaire
                                }, i.draft = !1
                            }))
                        }), t.$q.all(r)["finally"](function() {
                            return t.saveContexteJustificatif()
                        })
                    })
                }, t.prototype.propagerDocumentsGED = function(e) {
                    var t = this;
                    return this.loadContexteJustificatif().then(function() {
                        var i = _.reduce(t.contexteJustificatif, function(e, t) {
                            return t.acquisitionRecente && !t.draft && e.push({
                                idDocmGED: t.identifiantTechnique,
                                codeNAtr: t.codeTypeNatrDoc,
                                typeAttribut: t.porteur.typeAttributaire,
                                idAttribut: t.porteur.idntAttributaire1,
                                dateEmission: t.dateEmission,
                                dateNumerisation: t.dateNumerisation,
                                sujetCatalogue: t.sujetCatalogue,
                                listeTypeDocm: null
                            }), e
                        }, []);
                        return i.length ? t.dossierPropagationService.propagerDocumentsGED({
                            idDossier: e.numeroCRDU,
                            forcerEnrichissement: !0,
                            listeDocmGED: i
                        })["catch"](function(e) {
                            return console.error("erreur service propagation", e), null
                        }) : null
                    })
                }, t.prototype.getAcquisitionSortie = function() {
                    return null == this.promiseAcquisitionSortie && (this.promiseAcquisitionSortie = this.serviceAgent.getFromContext(e.SmartNumContextKeys.OUTPUT).then(function(e) {
                        return e ? JSON.parse(e) : null
                    })), this.promiseAcquisitionSortie
                }, t.prototype.traiterAcquisitionSortie = function() {
                    var e = this;
                    return null == this.promiseTraiterAcquisitionSortie && (this.promiseTraiterAcquisitionSortie = this.$q.all([this.getAcquisitionSortie(), this.loadContexteJustificatif()]).then(function(t) {
                        var i = t[0];
                        return i ? (i.regroupements.forEach(function(t) {
                            t.documents.forEach(function(t) {
                                if (null != t.idntDocument) {
                                    var n = {
                                        identifiantFonctionnel: t.idntFoncDocument,
                                        identifiantTechnique: t.idntDocument,
                                        acquisitionRecente: !0,
                                        draft: 0 === i.modeAcquisition,
                                        codeTypeNatrDoc: t.codeTypeNatrDoc,
                                        sujetCatalogue: t.sujet,
                                        isTransitoire: t.indicTransitoire,
                                        dateEmission: t.dateEmission,
                                        dateNumerisation: t.dateNumerisation
                                    };
                                    t.porteur && (n.porteur = {
                                        idntAttributaire1: t.porteur.idntAttributaire1,
                                        idntAttributaire2: t.porteur.idntAttributaire2,
                                        typeAttributaire: t.porteur.typeAttributaire
                                    }), e.contexteJustificatif[t.idntFoncDocument] = n
                                }
                            })
                        }), e.saveContexteJustificatif()) : void 0
                    })), this.promiseTraiterAcquisitionSortie
                }, t.prototype.getDocumentFromAcquisitionSortie = function(e) {
                    return this.getAcquisitionSortie().then(function(t) {
                        var i;
                        return t && _.some(t.regroupements, function(t) {
                            return _.some(t.documents, function(t) {
                                var n = t.idntFoncDocument === e && null != t.idntDocument;
                                return n && (i = t), n
                            })
                        }), i
                    })
                }, t.prototype.getDocumentJustificatifContexte = function(e) {
                    var t = this;
                    return this.loadContexteJustificatif().then(function() {
                        return t.contexteJustificatif[e]
                    })
                }, t.prototype.setDocumentJustificatifContexte = function(e) {
                    var t = this;
                    return this.loadContexteJustificatif().then(function() {
                        return t.contexteJustificatif[e.identifiantFonctionnel] = e, t.saveContexteJustificatif()
                    })
                }, t.prototype.getContexteJustificatif = function() {
                    var e = this;
                    return this.loadContexteJustificatif().then(function() {
                        return e.contexteJustificatif
                    })
                }, t.prototype.loadContexteJustificatif = function() {
                    var t = this;
                    return null == this.promiseLoadContexteJustificatif && (this.promiseLoadContexteJustificatif = this.serviceAgent.getFromContext(e.JustificatifContextKeys.JUSTIFICATIF).then(function(e) {
                        t.contexteJustificatif = e || {}
                    })), this.promiseLoadContexteJustificatif
                }, t.prototype.saveContexteJustificatif = function() {
                    return this.serviceAgent.addToContext(e.JustificatifContextKeys.JUSTIFICATIF, this.contexteJustificatif)
                }, t.prototype.numeriserPieceJointe = function(t, i) {
                    var n = this;
                    this.controlerHabilitation(t.numerisation, "numerisation"), this.controlerConfigurationAcquisition(t, i);
                    var r = i() || this.$q.when();
                    r.then(function() {
                        return n.serviceAgent.addToContext(e.SmartNumContextKeys.INPUT, JSON.stringify(t.numerisation.smartnum))
                    }).then(function() {
                        return n.serviceAgent.Lisa.Next(t.numerisation.codeSortieLisaSmartnum)
                    })["catch"](function(e) {
                        n.serviceAgent.DisplayMessage({
                            Type: "danger",
                            Message: e.libelle
                        })
                    })
                }, t.prototype.controlerConfigurationAcquisition = function(e, t) {
                    if (!t) throw new Error("beforeNext non défini");
                    if (null == e.numerisation.codeSortieLisaSmartnum) throw new Error("numerisation.codeSortieLisaSmartnum non défini");
                    if (!e.numerisation.smartnum) throw new Error("numerisation.smartnum non défini");
                    if (!e.numerisation.smartnum.regroupements || !e.numerisation.smartnum.regroupements.length) throw new Error("numerisation.smartnum.regroupements non définis");
                    if (_.some(e.numerisation.smartnum.regroupements, function(e) {
                            return !e.documents || 0 === e.documents.length
                        })) throw new Error("numerisation.smartnum.regroupements: regroupement sans document");
                    if (e.consultation.etat && _.some(e.numerisation.smartnum.regroupements, function(e) {
                            return e.documents && e.documents.length > 1
                        })) throw new Error("numerisation.smartnum.regroupements: plusieurs documents définis avec une consultation")
                }, t.prototype.controlerHabilitation = function(e, t) {
                    return e && e.etat && e.codeHabilitation ? this.$q.when(this.serviceAgent.Habilitation.EstHabilite(e.codeHabilitation)).then(function(e) {
                        if (!e) throw console.warn("Pas habilité à ", t), new Error("Pas habilité à " + t)
                    }) : this.$q.when()
                }, t.$inject = ["$q", "serviceAgentExtended", "mweePieceJointeService", "mweeGedService", "editiqueDossierPropagationService"], t
            }();
            t.JustificatifService = i, e.app.service("EditiqueJustificatifService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function e(e, t, i, n, r, o) {
                    this.$q = e, this.modalService = t, this.serviceAgent = i, this.communService = n, this.justificatifService = r, this.ressourceService = o
                }
                return e.prototype.recupereDossierClasseurClient = function(e, t) {
                    var i = this;
                    return this.recupereAuthentificationInfos().then(function() {
                        return i.recuperationInfosEDS(e.identifiantPersonne)
                    }).then(function(n) {
                        var r = {
                            codeEtablissement: e.codeEtablissement || i.authentificationInfos.codeEtablissement,
                            identifiantPersonne: e.identifiantPersonne,
                            typeDossierReglementaireClient: t.value,
                            codeINSEE: e.codeCategorieJuridique || "",
                            codeCapaciteJuridique: e.codeCapaciteJuridique || "0",
                            identifiantElementStructure: n.identifiantEDS || 0,
                            typeElementStructure: n.typeEDS || i.authentificationInfos.agentConnecte.typeEds,
                            referenceExterneEDS: n.referenceExterneEDS || i.authentificationInfos.agentConnecte.referenceExterneEdsRattachemen,
                            indicateurClientBancaire: !0,
                            numeroEntiteTitulaire: 0
                        };
                        return i.serviceAgent.sendRequest({
                            method: MyWay.Services.MethodEnum.PUT,
                            url: i.ressourceService.classeurClientServiceUrl + "dossierReglementaireClient/",
                            data: r,
                            withHeaders: !0
                        })
                    })
                }, e.prototype.numerisation = function(e, t, i) {
                    return this.numerisationClasseurClient(e, t, i.classeurClient, i.sortie)
                }, e.prototype.numerisationClasseurClient = function(e, t, i, n, r) {
                    var o = this;
                    void 0 === r && (r = !1);
                    var s, c, a;
                    return this.$q.all([this.recupereAuthentificationInfos(), this.communService.verifiePresenceTablette()]).then(function(t) {
                        return c = t[1], o.hasDrc(o.authentificationInfos.codeEtablissement, e.identifiantPersonne)
                    }).then(function(e) {
                        return a = e, a ? r ? o.$q.when() : o.informeMajDRC(null, null, null, c) : o.$q.reject(new MyWay.Services.ErreurClient("Erreur", ["La personne ne possède pas de DRC. Aucun justificatif n’est à collecter."]))
                    }).then(function() {
                        return o.recupereDossierClasseurClient(e, t)
                    }).then(function(e) {
                        return s = e, o.serviceAgent.Habilitation.EstHabilite("SHOPGM")
                    }).then(function(t) {
                        if (t) {
                            var i = [];
                            s.forEach(function(e) {
                                i.push(e.numeroCRDU)
                            });
                            var n = {
                                LIST_IDNT_DOSS: i.join("|"),
                                IDNT_ETAB: e.codeEtablissement,
                                IDNT_PERS: _.padLeft(e.identifiantPersonne + "", 9, "0")
                            };
                            return o.serviceAgent.addListToContext(n)
                        }
                        return o.$q.reject(new MyWay.Services.ErreurClient("Erreur", ["Agent non habilité pour une numérisation Classeur Client"]))
                    }).then(function() {
                        o.serviceAgent.Lisa.Next(i)
                    })["catch"](function(e) {
                        if (console.log(e), a && !c) {
                            var t = {
                                headerText: "Erreur",
                                bodyText: e.codeLibelle + ":" + e.valeurs.toString() || "Une erreur est survenue",
                                closeButtonText: "OK",
                                iconName: void 0,
                                size: "md"
                            };
                            o.modalService.showPopup(t)["catch"](function() {
                                o.serviceAgent.Lisa.Next(n)
                            })
                        } else o.serviceAgent.Lisa.Next(n)
                    })
                }, e.prototype.numerisationV2 = function(e, t, i) {
                    return void 0 === i && (i = !1), this.appelClasseurClient(e, t, i)
                }, e.prototype.appelClasseurClient = function(e, t, i) {
                    var n = this;
                    void 0 === i && (i = !1);
                    var r, o, s, c = !0;
                    return this.$q.all([this.recupereAuthentificationInfos(), this.communService.verifiePresenceTablette(), this.serviceAgent.Habilitation.EstHabilite("SHOPGM")]).then(function(t) {
                        return o = t[1], c = !o, s = t[2], n.hasDrc(n.authentificationInfos.codeEtablissement, e.identifiantPersonne)
                    }).then(function(i) {
                        return i ? n.recupereDossierClasseurClient(e, t) : (c = !1, n.$q.reject(new MyWay.Services.ErreurClient("Erreur", ["La personne ne possède pas de DRC. Aucun justificatif n'est à collecter."])))
                    }).then(function(t) {
                        r = t;
                        var i = _.find(r, function(t) {
                            return !(parseInt(t.porteur, 10) !== e.identifiantPersonne && parseInt(t.porteur, 9) !== e.identifiantPersonne || null != t.numeroChronoProfessionnel && 0 !== t.numeroChronoProfessionnel)
                        });
                        return n.justificatifService.propagerDocumentsGED(i)
                    }).then(function(e) {
                        return s ? n.$q.when(!0) : n.$q.reject(new MyWay.Services.ErreurClient("Erreur", ["Agent non habilité pour une numérisation Classeur Client"]))
                    }).then(function(t) {
                        if (!t) return c = !1, n.$q.reject("L'utilisateur ne souhaite pas lancer Classeur Client.");
                        if (o) return n.$q.reject("tablette détectée, pas de classeur client");
                        var i = [];
                        r.forEach(function(e) {
                            i.push(e.numeroCRDU)
                        });
                        var s = {
                            LIST_IDNT_DOSS: i.join("|"),
                            IDNT_ETAB: e.codeEtablissement,
                            IDNT_PERS: _.padLeft(e.identifiantPersonne + "", 9, "0")
                        };
                        return n.serviceAgent.addListToContext(s)
                    })["catch"](function(e) {
                        if (c) {
                            var t = e;
                            e instanceof MyWay.Services.Erreur && (t = e.codeLibelle + ":" + e.valeurs.toString() || "Une erreur est survenue"), n.modalService.showPopup({
                                headerText: "Erreur",
                                bodyText: t,
                                closeButtonText: "OK",
                                iconName: void 0,
                                size: "md"
                            })
                        }
                        return n.$q.reject(e)
                    })
                }, e.prototype.propagerDocumentsDRC = function(e, t) {
                    var i = this;
                    return this.justificatifService.getContexteJustificatif().then(function(e) {
                        return _.some(e, function(e) {
                            return e.acquisitionRecente
                        }) ? i.recupereAuthentificationInfos() : i.$q.reject("pas de documents acquis")
                    }).then(function() {
                        return i.hasDrc(i.authentificationInfos.codeEtablissement, e.identifiantPersonne)
                    }).then(function(n) {
                        return n ? i.recupereDossierClasseurClient(e, t) : i.$q.reject("pas de drc")
                    }).then(function(t) {
                        var n = _.find(t, function(t) {
                            return !(parseInt(t.porteur, 10) !== e.identifiantPersonne && parseInt(t.porteur, 9) !== e.identifiantPersonne || null != t.numeroChronoProfessionnel && 0 !== t.numeroChronoProfessionnel)
                        });
                        return i.justificatifService.propagerDocumentsGED(n)
                    })["catch"](function(e) {
                        console.log("propagerDocumentsDRC", e)
                    })
                }, e.prototype.recupereAuthentificationInfos = function() {
                    var e = this;
                    return this.authentificationInfos ? this.$q.when(null) : this.serviceAgent.getAuthentificationInfo().then(function(t) {
                        e.authentificationInfos = t
                    })
                }, e.prototype.informeMajDRC = function(e, t, i, n) {
                    var r = this,
                        o = {
                            templateUrl: "typescript/modales/majDRC/popup-numerisation.html",
                            controller: "popupNumerisationController",
                            controllerAs: "$ctrl",
                            windowClass: "app-modal-window-MEG",
                            size: "md",
                            backdrop: "static",
                            resolve: {
                                isOnTablet: function() {
                                    return n
                                },
                                libelleClient: function() {
                                    return t
                                },
                                nombreDrc: function() {
                                    return i
                                },
                                reponsePropagation: function() {
                                    return e
                                },
                                contexteJustificatif: function() {
                                    return r.justificatifService.getContexteJustificatif()
                                }
                            }
                        };
                    return this.modalService.showModal(o)
                }, e.prototype.hasDrc = function(e, t) {
                    return this.communService.rechercheEntiteTitulaire(e, t).then(function(e) {
                        return e && e.length > 0
                    })
                }, e.prototype.recuperationInfosEDS = function(e) {
                    var t = this,
                        i = {
                            identifiantEDS: 0,
                            typeEDS: "",
                            referenceExterneEDS: 0
                        };
                    return this.serviceAgent.sendRequest({
                        url: this.ressourceService.tiersv1ServiceUrl + "particulierInformation",
                        params: {
                            codeEtablissement: this.authentificationInfos.codeEtablissement,
                            idPersonne: e
                        },
                        withHeaders: !0,
                        method: MyWay.Services.MethodEnum.GET,
                        responseType: MyWay.Services.ResponseTypeEnum.JSON
                    }).then(function(e) {
                        return i.identifiantEDS = e.edsInterneDomiciliation, i.referenceExterneEDS = e.edsDomiciliation, t.serviceAgent.sendRequest({
                            url: t.ressourceService.structureServiceUrl + "caracteristiqueEDS",
                            params: {
                                codeEtablissement: t.authentificationInfos.codeEtablissement,
                                identifiantInterneEDS: i.identifiantEDS
                            },
                            withHeaders: !0,
                            method: MyWay.Services.MethodEnum.GET,
                            responseType: MyWay.Services.ResponseTypeEnum.JSON
                        })
                    }).then(function(e) {
                        return i.typeEDS = e.infoEDS.typeEDS, i
                    })["catch"](function() {
                        return i
                    })
                }, e.$inject = ["$q", "modalService", "serviceAgentExtended", "EditiqueCommunService", "EditiqueJustificatifService", "editiqueNumRessourceService"], e
            }();
            t.NumerisationService = i, e.app.service("numerisationService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function e(e) {
                this.$window = e
            }
            return e.prototype.applyTooltipPosition = function(e, t, i) {
                var n = this.getCalculatedOffset(e, t, i);
                this.applyPlacement(n, e, t)
            }, e.prototype.getCalculatedOffset = function(e, t, i) {
                var n = this.getPosition(t),
                    r = this.getPosition(i),
                    o = t[0].offsetWidth,
                    s = t[0].offsetHeight,
                    c = (s - t[0].clientHeight) / 2,
                    a = n.top - s / 2 - r.height / 2 - c,
                    u = i[0].querySelector(".icon").getBoundingClientRect().width,
                    l = n.left - o / 2 + r.width / 2 - u / 2 + c;
                return "bottom" === e ? {
                    top: n.top,
                    left: l
                } : "top" === e ? {
                    top: n.top - s - r.height,
                    left: l
                } : "left" === e ? {
                    top: a,
                    left: n.left - o
                } : {
                    top: a,
                    left: n.left + r.width
                }
            }, e.prototype.getPosition = function(e) {
                var t = e[0],
                    i = t.getBoundingClientRect();
                null === i.width && (i = angular.extend({}, i, {
                    width: i.right - i.left,
                    height: i.bottom - i.top
                }));
                var n = {
                        top: t.offsetTop,
                        left: t.offsetLeft
                    },
                    r = {
                        scroll: t.scrollTop
                    },
                    o = {};
                for (var s in i) i.hasOwnProperty(s) && (o[s] = i[s]);
                return angular.extend(o, r, n)
            }, e.prototype.applyPlacement = function(e, t, i) {
                var n = i[0].offsetHeight,
                    r = parseInt(i.css("margin-top"), 10),
                    o = parseInt(i.css("margin-left"), 10);
                isNaN(r) && (r = 0), isNaN(o) && (o = 0), e.top += r, e.left += o, i.css({
                    top: Math.round(e.top) + "px",
                    left: Math.round(e.left) + "px"
                });
                var s = i[0].offsetHeight;
                "top" === t && s !== n && (e.top = e.top + n - s), i.css({
                    top: Math.round(e.top) + "px",
                    left: Math.round(e.left) + "px"
                });
                var c = /top|bottom/.test(t),
                    a = c ? "offsetWidth" : "offsetHeight",
                    u = angular.element(i[0].querySelector(".mw-popover-arrow"));
                this.replaceArrow(u, i[0][a], c, t)
            }, e.prototype.replaceArrow = function(e, t, i, n) {
                var r;
                switch (n) {
                    case "top":
                        r = "mw-popover-top";
                        break;
                    case "left":
                        r = "mw-popover-left";
                        break;
                    case "right":
                        r = "mw-popover-right";
                        break;
                    default:
                        r = "mw-popover-bottom"
                }
                e.addClass(r), e.css(i ? "left" : "top", "50%"), e.css(i ? "top" : "left", "")
            }, e.$inject = ["$window"], e
        }();
        e.PopoverTemplateService = t, e.app.service("popoverTemplateService", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t;
        ! function(t) {
            "use strict";
            var i = function() {
                function e(e, t) {
                    this.$q = e, this.serviceAgent = t, this.classeurClientServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/classeurclient-v1/", this.tiersv1ServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/tiers-v1/", this.tiersServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/tiers-v2/", this.structureServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/structure-v2/", this.entiteTitulaireServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/entitetitulaire-v1/", this.contratServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/contratservicebqd-v1/", this.documentParametreServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/documentparametre-v2/", this.outilCommunServiceUrl = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/outilcommun-v1/"
                }
                return e.$inject = ["$q", "serviceAgentExtended"], e
            }();
            t.RessourceService = i, e.app.service("editiqueNumRessourceService", i)
        }(t = e.Services || (e.Services = {}))
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function e(e, t, i, n) {
                var r = this;
                if (this.$scope = e, this.serviceAgentExtended = t, this.completudeDrcService = i, this.pieceJointeService = n, !this.settings || !this.settings.idPorteur || !this.settings.typePorteur || null == this.settings.typeJustificatif) throw new Error("mwsfAlerteJustificatif: paramétrage incorrect");
                this.completudeDrcService.verifieCompletudeDRC(this.settings.idPorteur, this.settings.typePorteur).then(function(e) {
                    var t = _.map(r.pieceJointeService.getTypeDocuments(r.settings.typeJustificatif), function(e) {
                        return e.value
                    });
                    r.isAlerte = _.some(e.piecesEnAlerte, function(e) {
                        return -1 !== t.indexOf(e.typeJustificatif)
                    })
                })["catch"](function(e) {
                    console.error("verifieCompletudeDRC", e.libelle)
                })
            }
            return e.$inject = ["$scope", "serviceAgentExtended", "completudeDrcService", "mweePieceJointeService"], e
        }();
        e.IndicateurAlerteJustificatifController = t, e.app.controller("alerteJustificatifController", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/alerte-justificatif/indicateur-alerte-justificatif-view.html",
                scope: {
                    settings: "="
                },
                controller: "alerteJustificatifController",
                controllerAs: "$ctrl",
                bindToController: !0
            }
        };
        e.app.directive("mwsfAlerteJustificatif", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict"
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function t(e, t, i, n, r) {
                var o = this;
                this.$scope = e, this.$document = t, this.$element = i, this.serviceAgentExtended = n, this.completudeDrcService = r, this.LONGUEUR_PORTEUR = 9, this.chargementTermine = !1, this.ouvert = !1, this.$scope.$watch(function() {
                    return o.idPorteur
                }, function(e, t) {
                    o.chargementTermine = !1, e && e.length === o.LONGUEUR_PORTEUR && o.verificationCompletudeDRC()
                }), this.closeEvent = function(e) {
                    o.$element[0].contains(e.target) || o.$scope.$apply(function() {
                        o.closeInfobulle()
                    })
                }
            }
            return t.prototype.verificationCompletudeDRC = function() {
                var t = this;
                this.completudeDrcService.verifieCompletudeDRC(this.idPorteur, this.typeEntite).then(function(i) {
                    angular.forEach(i.piecesManquantes, function(e, t) {
                        i.piecesManquantes[t] = _.capitalize(e.toLowerCase())
                    }), angular.forEach(i.piecesEnAlerte, function(e, t) {
                        e.libelleTypeJustificatif = _.capitalize(e.libelleTypeJustificatif.toLowerCase())
                    }), t.completudeDrcResult = i, t.typeEntite && !i.etatCompletude ? t.indicateur = e.IndicateurCompletudeEnum.VIDE : "I" === i.etatCompletude ? t.indicateur = e.IndicateurCompletudeEnum.INCOMPLET : "C" !== i.etatCompletude || i.piecesEnAlerte.length ? ("A" === i.etatCompletude || i.piecesEnAlerte.length) && (t.indicateur = e.IndicateurCompletudeEnum.ALERTE) : t.indicateur = e.IndicateurCompletudeEnum.COMPLET;
                })["catch"](function(e) {
                    console.error("verifieCompletudeDRC", e.libelle)
                })["finally"](function() {
                    t.chargementTermine = !0
                })
            }, t.prototype.toggle = function() {
                (this.indicateur === e.IndicateurCompletudeEnum.INCOMPLET || this.indicateur === e.IndicateurCompletudeEnum.ALERTE) && (this.ouvert ? this.closeInfobulle() : this.openInfobulle())
            }, t.prototype.openInfobulle = function() {
                this.ouvert = !0, this.$document[0].addEventListener("focus", this.closeEvent, !0), this.$document[0].addEventListener("click", this.closeEvent, !0)
            }, t.prototype.closeInfobulle = function() {
                this.ouvert = !1, this.$document[0].removeEventListener("click", this.closeEvent, !0), this.$document[0].removeEventListener("focus", this.closeEvent, !0)
            }, t.$inject = ["$scope", "$document", "$element", "serviceAgentExtended", "completudeDrcService"], t
        }();
        e.IndicateurCompletudeDrcController = t, e.app.controller("completudeDrcController", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/completude-drc/indicateur-completude-drc-view.html",
                scope: {
                    typeEntite: "=",
                    idPorteur: "=",
                    ouvert: "=?",
                    chargementTermine: "=?"
                },
                controller: "completudeDrcController",
                controllerAs: "$ctrl",
                bindToController: !0
            }
        };
        e.app.directive("mwsfCompletudeDrc", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        ! function(e) {
            e[e.VIDE = 0] = "VIDE", e[e.INCOMPLET = 1] = "INCOMPLET", e[e.ALERTE = 2] = "ALERTE", e[e.COMPLET = 3] = "COMPLET"
        }(e.IndicateurCompletudeEnum || (e.IndicateurCompletudeEnum = {}));
        e.IndicateurCompletudeEnum
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function e(e, t) {
                this.scope = e, this.serviceAgentExtended = t
            }
            return e.$inject = ["$scope", "serviceAgentExtended"], e
        }();
        e.CompletudeDrcPopoverController = t, e.app.controller("CompletudeDrcPopoverController", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/completude-drc-popover/completude-drc-popover.html",
                scope: {
                    piecesManquantes: "=",
                    piecesEnAlerte: "=",
                    ouvert: "=",
                    idBouton: "@"
                },
                controller: "CompletudeDrcPopoverController",
                controllerAs: "$ctrl",
                bindToController: !0
            }
        };
        e.app.directive("mwsfCompletudeDrcPopover", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function e(e, t, i, n, r, o) {
                var s = this;
                switch (this.serviceAgentExtended = e, this.$q = t, this.interDomaineCoreService = i, this.pieceJointeService = n, this.numerisationService = r, this.communService = o, this.typeJustificatif) {
                    case MyWay.PieceJointe.TypePieceJointeEnum.JUSTIFICATIF_DOMICILE:
                        this.titre = "Justificatif de domicile";
                        break;
                    case MyWay.PieceJointe.TypePieceJointeEnum.JUSTIFICATIF_IDENTITE:
                        this.titre = "Justificatif d'identité";
                        break;
                    case MyWay.PieceJointe.TypePieceJointeEnum.JUSTIFICATIF_REVENU:
                        this.titre = "Justificatif de revenu";
                        break;
                    case MyWay.PieceJointe.TypePieceJointeEnum.AVIS_IMPOSITION:
                        this.titre = "Avis d'imposition";
                        break;
                    default:
                        this.titre = "de test"
                }
                this.isAllowedClasseurClient = !1, this.idPersonneString = _.padLeft(this.donnees.numerisation.identifiantPersonne + "", 9, "0");
                var c = [this.serviceAgentExtended.getAuthentificationInfo()];
                this.$q.all(c).then(function(e) {
                    s.codeEtablissement = e[0].codeEtablissement;
                    var t = s.isAllowConsultation(),
                        i = s.isAllowMiseAJour();
                    s.affichageGlobal = t || i, t && (s.consultationAllowed = !0, s.rechercheJustificatif(s.typeJustificatif)), i && s.initBoutonMiseAJour()
                })["catch"](function(e) {
                    console.log(e)
                })
            }
            return e.prototype.consulterPieceJointe = function() {
                this.pieceJointeService.viewDocument(this.justificatifDocument.idDocument, this.codeEtablissement)
            }, e.prototype.modifierPieceJointe = function() {
                var e = this;
                return this.eventAvantModification().then(function() {
                    if (e.hasDRC) {
                        var t = 3;
                        e.numerisationService.numerisationClasseurClient(e.donnees.numerisation, e.donnees.typePersonne, t, void 0, !0)["catch"](function(t) {
                            e.serviceAgentExtended.Lisa.Next(4)
                        })
                    } else e.serviceAgentExtended.Lisa.Next(4)
                })["catch"](function(t) {
                    e.serviceAgentExtended.DisplayMessage({
                        Type: "danger",
                        Message: t.libelle
                    })
                })
            }, e.prototype.initBoutonMiseAJour = function() {
                var e = this;
                return this.pieceJointeService.hasPersonneDRC(this.idPersonneString, this.codeEtablissement).then(function(t) {
                    return e.hasDRC = t, t ? !0 : e.serviceAgentExtended.Habilitation.EstHabilite("SHOPBP")["catch"](function() {
                        return !1
                    })
                }).then(function(t) {
                    e.isAllowedClasseurClient = t
                })["catch"](function(e) {
                    console.error("Erreur : " + e.libelle)
                })
            }, e.prototype.rechercheJustificatif = function(e) {
                var t = this;
                e === MyWay.PieceJointe.TypePieceJointeEnum.AVIS_IMPOSITION ? this.pieceJointeService.getFiltrerDocumentResponse(this.idPersonneString, this.codeEtablissement, [e]).then(function(i) {
                    i && i.length && (t.justificatifDocument = new MyWay.PieceJointe.PieceJointe(i.shift(), e))
                })["catch"](function(e) {
                    t.justificatifDocumentErrorFlag = !0
                }) : this.pieceJointeService.rechercheDocumentByPersonneByType(this.idPersonneString, this.codeEtablissement, e).then(function(e) {
                    t.justificatifDocument = e
                })["catch"](function(e) {
                    t.justificatifDocumentErrorFlag = !0
                })
            }, e.prototype.isAllowConsultation = function() {
                return this.typeJustificatif === MyWay.PieceJointe.TypePieceJointeEnum.JUSTIFICATIF_IDENTITE || this.typeJustificatif === MyWay.PieceJointe.TypePieceJointeEnum.AVIS_IMPOSITION
            }, e.prototype.isAllowMiseAJour = function() {
                return this.typeJustificatif !== MyWay.PieceJointe.TypePieceJointeEnum.AVIS_IMPOSITION
            }, e.$inject = ["serviceAgentExtended", "$q", "InterDomainCoreService", "mweePieceJointeService", "numerisationService", "EditiqueCommunService"], e
        }();
        e.JustificatifController = t, e.app.controller("justificatifController", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/justificatif/justificatif-view.html",
                scope: {
                    typeJustificatif: "=type",
                    donnees: "=",
                    eventAvantModification: "&fonctionBefore"
                },
                controller: "justificatifController",
                controllerAs: "justificatifCtrl",
                bindToController: !0
            }
        };
        e.app.directive("mwsfJustificatif", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function t(e, t, i, n, r, o, s) {
                var c = this;
                this.$q = e, this.$timeout = t, this.serviceAgentExtended = i, this.pieceJointeService = n, this.numerisationService = r, this.communService = o, this.justificatifService = s, this.directiveName = "mwsfJustificatifV2", this.isInitialized = !1, this.$q.all([this.communService.verifiePresenceTablette(), this.justificatifService.traiterAcquisitionSortie()]).then(function(e) {
                    c.indicateurTablette = e[0], c.initSettings(), c.$q.all([c.controlerHabilitation(c.settings.consultation, "consultation"), c.controlerHabilitation(c.settings.numerisation, "numerisation")]).then(function() {
                        return c.settings.consultation.etat ? c.rechercheJustificatif() : c.$q.when()
                    })
                })["catch"](function(e) {
                    console.error(c.directiveName, c.id, e)
                })["finally"](function() {
                    c.isInitialized = !0
                })
            }
            return t.prototype.consulterPieceJointe = function() {
                var e = this;
                this.pieceJointeService.downloadDocument(this.documentJustificatif.identifiantTechnique, this.settings.consultation.codeEtablissement, this.settings.consultation.codeApplication, this.documentJustificatif.draft)["catch"](function(t) {
                    "function" == typeof e.onErrorFunction && e.onErrorFunction({
                        id: e.id,
                        erreur: t,
                        type: 1
                    })
                })
            }, t.prototype.numeriserPieceJointe = function() {
				console.log('numeriserPieceJointe - start');
                var t = this,
                    i = this.eventAvantDebranchement() || this.$q.when();
                i.then(function() {
                    return t.serviceAgentExtended.addToContext(e.SmartNumContextKeys.INPUT, JSON.stringify(t.settings.numerisation.smartnum))
                }).then(function() {
					console.log('numeriserPieceJointe - débranchement LISA');
                    return t.serviceAgentExtended.Lisa.Next(t.settings.numerisation.codeSortieLisaSmartnum)
                })["catch"](function(e) {
                    t.serviceAgentExtended.DisplayMessage({
                        Type: "danger",
                        Message: e.libelle
                    })
                })
            }, t.prototype.controlerHabilitation = function(e, t) {
                var i = this;
                return e && e.etat && e.codeHabilitation ? this.$q.when(this.serviceAgentExtended.Habilitation.EstHabilite(e.codeHabilitation)).then(function(n) {
                    n || (console.warn(i.id, "pas habilité à", t), e.etat = !1)
                }) : this.$q.when()
            }, t.prototype.rechercheJustificatif = function() {
                var e = this;
                return this.rechercheJustificatifFromContexte().then(null, function() {
                    return e.settings.consultation.attributaire && (null != e.settings.consultation.typeJustificatif || e.settings.consultation.sujetCatalogueGed) ? e.rechercheJustificatifFromServer() : void 0
                })
            }, t.prototype.rechercheJustificatifFromContexte = function() {
                var e = this;
                return this.justificatifService.getDocumentJustificatifContexte(this.settings.consultation.idntFoncDocument).then(function(t) {
                    if (console.log(e.id, "rechercheJustificatifFromContexte", t), null == t) return e.$q.reject("document non trouvé dans le contexte myway");
                    if (t.porteur && e.settings.numerisation && e.settings.numerisation.smartnum && e.settings.numerisation.smartnum.regroupements) {
                        var i = !0;
                        if (e.settings.numerisation.smartnum.regroupements.forEach(function(e) {
                                var n = t.porteur.idntAttributaire1,
                                    r = t.identifiantFonctionnel;
                                e.documents && e.documents.forEach(function(e) {
                                    e.porteur && n === e.porteur.idntAttributaire1 && e.idntFoncDocument === r && (i = !1)
                                })
                            }), i) return e.$q.reject("document non trouvé dans le contexte myway")
                    }
                    e.documentJustificatif = t, e.justificatifService.setDocumentJustificatifContexte(e.documentJustificatif)
                })
            }, t.prototype.rechercheJustificatifFromServer = function() {
                var e = this;
                return this.pieceJointeService.rechercheDocumentByTypeOrSujet(this.settings.consultation.attributaire, this.settings.consultation.codeEtablissement, this.settings.consultation.codeApplication, this.settings.consultation.typeJustificatif, this.settings.consultation.sujetCatalogueGed).then(function(t) {
                    return console.log(e.id, "rechercheJustificatifFromServer", t), t ? void(e.documentJustificatif = {
                        identifiantFonctionnel: e.settings.consultation.idntFoncDocument,
                        identifiantTechnique: t.idDocument,
                        draft: !1,
                        acquisitionRecente: !1
                    }) : e.$q.reject("document non trouvé dans la GED ou classeur client")
                }, function(t) {
                    return "function" == typeof e.onErrorFunction && e.onErrorFunction({
                        id: e.id,
                        erreur: t,
                        type: 0
                    }), e.$q.reject(t)
                })
            }, t.prototype.initSettings = function() {
                try {
                    this.settings = _.merge({}, e.justificatifDefaultSettings, this.settings), this.settings.numerisation || (this.settings.numerisation = {}), this.settings.consultation || (this.settings.consultation = {}), this.settings.consultation.etat && this.controlerConfigurationConsultation(), this.settings.numerisation.etat && this.controlerConfigurationAcquisition(), this.settings.consultation.etat && this.settings.numerisation.etat && this.controlerCoherenceConsultationNumerisation()
                } catch (t) {
                    throw this.settings.consultation.etat = !1, this.settings.numerisation.etat = !1, t
                }
            }, t.prototype.controlerConfigurationConsultation = function() {
                if (!this.settings.consultation.idntFoncDocument) throw new Error("consultation.idntFoncDocument non défini");
                if (!this.settings.consultation.codeEtablissement) throw new Error("consultation.codeEtablissement non défini");
                if (!this.settings.consultation.codeApplication) throw new Error("consultation.codeApplication non défini");
                if (this.settings.consultation.attributaire) {
                    if (!this.settings.consultation.attributaire.idntAttributaire1) throw new Error("consultation.attributaire.idntAttributaire1 non défini");
                    if (!this.settings.consultation.attributaire.typeAttributaire) throw new Error("consultation.attributaire.typeAttributaire non défini")
                }
            }, t.prototype.controlerConfigurationAcquisition = function() {
                if (!this.eventAvantDebranchement) throw new Error("beforeNext non défini");
                if (null == this.settings.numerisation.codeSortieLisaSmartnum) throw new Error("numerisation.codeSortieLisaSmartnum non défini");
                if (!this.settings.numerisation.smartnum) throw new Error("numerisation.smartnum non défini");
                if (!this.settings.numerisation.smartnum.regroupements || !this.settings.numerisation.smartnum.regroupements.length) throw new Error("numerisation.smartnum.regroupements non définis");
                if (_.some(this.settings.numerisation.smartnum.regroupements, function(e) {
                        return !e.documents || 0 === e.documents.length
                    })) throw new Error("numerisation.smartnum.regroupements: regroupement sans document");
                if (this.settings.consultation.etat && _.some(this.settings.numerisation.smartnum.regroupements, function(e) {
                        return e.documents && e.documents.length > 1
                    })) throw new Error("numerisation.smartnum.regroupements: plusieurs documents définis avec une consultation")
            }, t.prototype.controlerCoherenceConsultationNumerisation = function() {}, t.$inject = ["$q", "$timeout", "serviceAgentExtended", "mweePieceJointeService", "numerisationService", "EditiqueCommunService", "EditiqueJustificatifService"], t
        }();
        e.JustificatifControllerV2 = t, e.app.controller("justificatifControllerV2", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/justificatif-v2/justificatif-view.html",
                scope: {
                    id: "@",
                    settings: "=",
                    onErrorFunction: "&onError",
                    eventAvantDebranchement: "&beforeNext"
                },
                controller: "justificatifControllerV2",
                controllerAs: "$ctrl",
                bindToController: !0
            }
        };
        e.app.directive("mwsfJustificatifV2", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function e() {}
            return e.INPUT = "demandeAcquisition", e.OUTPUT = "resultatAcquisition", e
        }();
        e.SmartNumContextKeys = t;
        var i = function() {
            function e() {}
            return e.JUSTIFICATIF = "editiqueJustificatif", e
        }();
        e.JustificatifContextKeys = i
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        e.justificatifDefaultSettings = {
            verticalLayout: !1,
            consultation: {
                etat: !1,
                libelleBouton: "Consulter",
                classBouton: "btn-zone"
            },
            numerisation: {
                etat: !1,
                libelleBoutonDocumentConsultable: "Mettre à jour",
                libelleBoutonDocumentNonConsultable: "Acquérir",
                classBouton: "btn-zone"
            }
        }
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        var t = function(e, t, i) {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/popover-template/popover-template-view.html",
                transclude: !0,
                replace: !0,
                scope: {
                    template: "@",
                    icone: "@",
                    controller: "=?",
                    ouvert: "=?",
                    couleurIcone: "@",
                    titre: "@",
                    placement: "@"
                },
                compile: function() {
                    return {
                        pre: function(e, t, i) {},
                        post: function(e, t, n) {
                            angular.element(document).ready(function() {
                                var n = e.placement || "bottom",
                                    r = angular.element(t[0].querySelector(".mw-popover-button")),
                                    o = angular.element(t[0].querySelector(".mw-popover-content"));
                                i.applyTooltipPosition(n, o, r)
                            })
                        }
                    }
                }
            }
        };
        t.$inject = ["$templateCache", "$compile", "popoverTemplateService"], e.app.directive("mwsfInfobulle", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function t(t, i, n, r, o, s, c, a, u) {
                var l = this;
                this.$scope = t, this.$rootScope = i, this.$q = n, this.$timeout = r, this.serviceAgent = o, this.modalService = s, this.cgService = c, this.editiqueService = a, this.communService = u, this.fichiers = [], this.idPersonneNumber = parseInt(this.idPersonne), this.openHrectractable = !1, this.addListeners(), this.communService.getTypeEtablissement().then(function(t) {
                    return l.typeEtablissement = t, t === e.Enums.TypeEtablissementEnum.AUTRE ? (l.terminerPasDeRemise(), l.$q.reject()) : (console.log("remise dans init getDocByActGestion to see this.data", l.data), l.editiqueService.getDocumentsByActeGestion(l.data, e.Services.ConditionsGeneralesService.TYPE_CG))
                }).then(function(t) {
                    l.documents = t, console.log("remise dans init then to see this.doc", l.documents), l.typeEtablissement !== e.Enums.TypeEtablissementEnum.AUTRE && l.documents && l.documents.length > 0 ? l.init() : l.terminerPasDeRemise()
                })["catch"](function(e) {
                    return l.enErreur = !0, l.$q.reject(e)
                })
            }
            return t.prototype.terminerPasDeRemise = function() {
                var t = this;
                this.pasDeRemise = !0, this.$timeout(function() {
                    t.$rootScope.$broadcast(e.Enums.RemiseCGEventsEnum.AUTOMATIC_VALIDATE.value)
                }, 2e3)
            }, t.prototype.init = function() {
                var e = this;
                this.isLoading = !0, this.serviceAgent.getAuthentificationInfo().then(function(t) {
                    return e.codeEtablissement = t.codeEtablissement, e.cgService.hasMessagerieSecuriseeInternet(e.codeEtablissement, e.idPersonneNumber)
                }).then(function(t) {
                    return t ? e.cgService.envoiCGParEmail(e.typeEtablissement, e.documents, t, e.idPersonne, e.data.list)["catch"](function() {
                        var t = {
                            closeButtonText: "OK",
                            headerText: "Avertissement",
                            bodyText: "Les conditions générales n'ont pas été remises suite à une erreur lors de l'envoi de mail",
                            iconName: "itce-warning",
                            size: "md"
                        };
                        return e.modalService.showPopup(t), !1
                    })["finally"](function() {
                        e.isLoading = !1
                    }) : (e.isLoading = !1, e.$q.when(!1))
                }).then(function(i) {
                    e.messageImpression = t.impressionInformation, e.remiseHorsMSI = !i, e.remiseHorsMSI ? e.initRemiseHorsMSI() : e.etatBoutonValider()
                })["catch"](function(t) {
                    e.remiseHorsMSI = !1, e.initRemiseHorsMSI()
                })
            }, t.prototype.initRemiseHorsMSI = function() {
                var e = this;
                return this.watcherChoixRemiseCg(), this.cgService.findEmail(this.codeEtablissement, this.idPersonneNumber).then(function(t) {
                    e.email = t
                })
            }, t.prototype.watcherChoixRemiseCg = function() {
                var i = this;
                this.$scope.$watch(function() {
                    return i.typeRemise
                }, function(n, r) {
                    i.etatBoutonValider(), n && n === e.Enums.TypeRemiseEnum.IMPRESSION && !i.fichiersLoaded && (i.isLoading = !0, i.cgService.chargeCG(i.documents, i.codeEtablissement, i.data.list).then(function(e) {
                        i.fichiers = e, 0 === e.length && (i.messageImpression = t.impressionAlerte), i.fichiersLoaded = !0, i.isLoading = !1
                    }))
                }), this.$scope.$watch(function() {
                    return i.email
                }, function(t, n) {
                    i.typeRemise === e.Enums.TypeRemiseEnum.EMAIL && (t || !t && n) && i.etatBoutonValider()
                })
            }, t.prototype.etatBoutonValider = function() {
                this.enableValider = !0, this.remiseHorsMSI && (this.enableValider = this.typeRemise ? !0 : !1, this.typeRemise === e.Enums.TypeRemiseEnum.EMAIL && (this.enableValider = void 0 !== this.email)), this.$rootScope.$broadcast(e.Enums.RemiseCGEventsEnum.ENABLE_VALIDATE.value, this.enableValider)
            }, t.prototype.actionValidation = function() {
                return this.remiseHorsMSI && this.typeRemise === e.Enums.TypeRemiseEnum.EMAIL && this.email ? this.cgService.envoiCGParEmail(this.typeEtablissement, this.documents, this.email, this.idPersonne, this.data.list).then(function(e) {
                    return e
                }) : this.$q.when(!0)
            }, t.prototype.addListeners = function() {
                var t = this;
                this.$rootScope.$on(e.Enums.RemiseCGEventsEnum.VALIDER.value, function() {
                    var i;
                    t.actionValidation().then(function(e) {
                        i = e
                    })["catch"](function(e) {
                        i = !1
                    })["finally"](function() {
                        t.$rootScope.$broadcast(e.Enums.RemiseCGEventsEnum.ACTION_VALIDATE.value, i)
                    })
                })
            }, t.impressionInformation = "Dans la liste ci-dessous, déplier et choisir d’imprimer chaque document avant de quitter cet écran", t.impressionAlerte = "Il n’y a pas de Conditions Générales pouvant être imprimées dans le référentiel numérique pour cet acte de gestion", t.$inject = ["$scope", "$rootScope", "$q", "$timeout", "serviceAgentExtended", "modalService", "conditionsGeneralesService", "editiqueService", "EditiqueCommunService"], t
        }();
        e.RemiseConditionsGeneralesController = t, e.app.controller("remiseConditionsGeneralesController", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            return {
                restrict: "E",
                templateUrl: "typescript/directives/remise-cg/remise-cg.html",
                scope: {
                    data: "=donnees",
                    idPersonne: "="
                },
                controller: "remiseConditionsGeneralesController",
                controllerAs: "remiseCgCtrl",
                bindToController: !0
            }
        };
        e.app.directive("mwsfRemiseCg", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {}));
var myway;
! function(e) {
    var t;
    ! function(e) {
        "use strict";
        var t = function() {
            function e(e, t, i, n, r, o) {
                this.$modalInstance = e, this.isOnTablet = t, this.libelleClient = i, this.nombreDrc = n, this.reponsePropagation = r, this.contexteJustificatif = o, this.reponsePropagation && this.reponsePropagation.listeDocmResl && this.reponsePropagation.listeDocmResl.length && (this.documentsPropages = this.reponsePropagation.listeDocmResl)
            }
            return e.$inject = ["$modalInstance", "isOnTablet", "libelleClient", "nombreDrc", "reponsePropagation", "contexteJustificatif"], e
        }();
        e.PopupNumerisationController = t, e.app.controller("popupNumerisationController", t)
    }(t = e.comEditiqueNumerisation || (e.comEditiqueNumerisation = {}))
}(myway || (myway = {})), angular.module("myway.comEditiqueNumerisation").run(["$templateCache", function(e) {
    e.put("typescript/directives/alerte-justificatif/indicateur-alerte-justificatif-view.html", '<span ng-show="$ctrl.isAlerte" aria-hidden="true" class="icon itce-refresh alerte-justificatif"></span>\r\n'), e.put("typescript/directives/completude-drc/indicateur-completude-drc-view.html", '<span ng-if="$ctrl.chargementTermine" ng-click="$ctrl.toggle()" class="conteneur-drc" ng-class="{ \'drc-vide\': $ctrl.indicateur === 0, \'drc-incomplet\': $ctrl.indicateur === 1, \'drc-alerte\': $ctrl.indicateur === 2, \'drc-complet\': $ctrl.indicateur === 3 }" id="indicateur-drc">\r\n    <span ng-show="$ctrl.indicateur === 0">DRC vide</span>\r\n    <span ng-show="$ctrl.indicateur === 1">DRC incomplet</span>\r\n    <span ng-show="$ctrl.indicateur === 2">DRC en alerte</span>\r\n    <span ng-show="$ctrl.indicateur === 3">DRC complet</span>\r\n    <mwsf-completude-drc-popover pieces-manquantes="$ctrl.completudeDrcResult.piecesManquantes" pieces-en-alerte="$ctrl.completudeDrcResult.piecesEnAlerte" ouvert="$ctrl.ouvert" id-bouton="indicateur-drc"></mwsf-completude-drc-popover>\r\n</span>\r\n'), e.put("typescript/directives/completude-drc-popover/completude-drc-popover.html", '<div ng-if="$ctrl.ouvert" class="conteneur-popover-drc">\r\n    <div ng-show="$ctrl.piecesManquantes.length">\r\n        <strong>Pièce(s) manquante(s) : </strong>\r\n        <ul class="list-unstyled">\r\n            <li ng-repeat="piece in $ctrl.piecesManquantes track by $index">\r\n                <span ng-bind="piece"></span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div ng-show="$ctrl.piecesEnAlerte.length">\r\n        <strong>Pièce(s) à vérifier : </strong>\r\n        <ul class="list-unstyled">\r\n            <li ng-repeat="piece in $ctrl.piecesEnAlerte track by $index">\r\n                <span ng-bind="piece.libelleTypeJustificatif"></span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n'), e.put("typescript/directives/justificatif/justificatif-view.html", '<mw-panel-free niveau="2" id="panel-free-justificatif" ng-if="justificatifCtrl.affichageGlobal">\r\n    <mw-panel-bar titre="{{ justificatifCtrl.titre }}">\r\n    </mw-panel-bar>\r\n    <mw-panel-body>\r\n        <!-- Consulter -->\r\n        <p ng-if="justificatifCtrl.consultationAllowed">\r\n            <mw-button id="btn-add" texte="Consulter" modele="zone" ng-disabled="!justificatifCtrl.justificatifDocument" ng-click="justificatifCtrl.consulterPieceJointe()"></mw-button>\r\n        </p>\r\n\r\n        <!-- Mettre à jour -->\r\n        <p ng-if="justificatifCtrl.isAllowMiseAJour() && justificatifCtrl.isAllowedClasseurClient">\r\n            <span ng-if="!justificatifCtrl.isAllowedClasseurClient && justificatifCtrl.justificatifIdentiteErrorFlag" class="col-sm-5 control-label">\r\n                Erreur technique du serveur\r\n            </span>\r\n            <mw-button id="btn-maj" texte="Mettre à jour" modele="zone" ng-click="justificatifCtrl.modifierPieceJointe(0)"></mw-button>\r\n        </p>\r\n    </mw-panel-body>\r\n</mw-panel-free>\r\n'), e.put("typescript/directives/justificatif-v2/justificatif-view.html", '<div class="justificatif-v2" ng-show="$ctrl.isInitialized">\r\n    <button ng-attr-id="{{::$ctrl.id}}-btn-consulter" ng-attr-class="{{\'btn \' + $ctrl.settings.consultation.classBouton}}" ng-class="{\'btn-block\': $ctrl.settings.verticalLayout}" ng-bind="$ctrl.settings.consultation.libelleBouton" ng-show="$ctrl.settings.consultation.etat" ng-disabled="!$ctrl.documentJustificatif" ng-click="$ctrl.consulterPieceJointe()"></button>\r\n\r\n    <button ng-attr-id="{{::$ctrl.id}}-btn-acquisition" ng-attr-class="{{\'btn \' + $ctrl.settings.numerisation.classBouton}}" ng-class="{\'btn-block\': $ctrl.settings.verticalLayout}" ng-bind="$ctrl.documentJustificatif ? $ctrl.settings.numerisation.libelleBoutonDocumentConsultable : $ctrl.settings.numerisation.libelleBoutonDocumentNonConsultable" ng-show="$ctrl.settings.numerisation.etat" ng-click="$ctrl.numeriserPieceJointe()"></button>\r\n</div>'), e.put("typescript/directives/popover-template/popover-template-view.html", '<div class="mw-popover-wrapper">\r\n    <mw-button-icone style="color:{{ couleurIcone }}" class="mw-popover-button" taille="sm" icone="{{ icone }}" id="popover-button-icone" ng-click="ouvert=!ouvert">\r\n    </mw-button-icone>\r\n    <div class="mw-popover-content" ng-show="ouvert">\r\n        <div class="mw-popover-arrow"></div>\r\n        <div class="mw-popover-content-header" ng-if="titre" ng-bind="titre"></div>\r\n        <div class="mw-popover-content-body" ng-transclude>\r\n            <!-- Le contenu du template sera placé ici -->\r\n        </div>\r\n    </div>\r\n</div>\r\n'), e.put("typescript/directives/remise-cg/remise-cg.html", '<div ng-if="remiseCgCtrl.enErreur === true">\r\n    <p>Une erreur technique est survenue lors de la recherche des conditions générales. </p>\r\n</div>\r\n<div mw-chargement="remiseCgCtrl.isLoading">\r\n    <div ng-if="remiseCgCtrl.pasDeRemise">\r\n        <p>Il n’y a pas de Conditions Générales à remettre pour cet acte de gestion </p>\r\n    </div>\r\n</div>\r\n<div ng-if="remiseCgCtrl.remiseHorsMSI === false">\r\n    <p>Les Conditions Générales ont été transmises au client sur sa Messagerie Sécurisée Internet (MSI) </p>\r\n</div>\r\n<div ng-if="remiseCgCtrl.remiseHorsMSI === true" mw-chargement="remiseCgCtrl.isLoading">\r\n    <form class="form-horizontal remise-cg-form">\r\n        <div class="form-group">\r\n            <div class="col-md-10">\r\n                <button id="btn-envoi-mail" class="btn col-sm-5 itce-radio-btn" ng-model="remiseCgCtrl.typeRemise" btn-radio="1">\r\n                    Envoi messagerie personnelle :\r\n                </button>\r\n                <div class="col-sm-5">\r\n                    <input id="id-input-email" name="name-input-email" class="form-control" type="email" placeholder="Saisir un email" ng-model="remiseCgCtrl.email">\r\n                </div>\r\n                <span class="error-msg col-md-10" ng-show="remiseCgCtrl.typeRemise === 1" role="alert">\r\n                    L\'utilisation des messageries clientes non sécurisées est déconseillée\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <div class="col-md-10">\r\n                <button id="btn-impression" class="btn col-sm-5 itce-radio-btn" ng-model="remiseCgCtrl.typeRemise" btn-radio="2">\r\n                    Impression\r\n                </button>\r\n                <span class="error-msg col-md-11" ng-show="remiseCgCtrl.typeRemise === 2" role="alert" ng-bind="remiseCgCtrl.messageImpression"></span>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <mw-accordeon>\r\n        <mw-hretractable data-id="contenu-accordeon-{{ $index }}" ng-repeat="fichier in remiseCgCtrl.fichiers track by $index" ng-attr-titre="{{::fichier.nom}}">\r\n            <div class="panel panel-sans-titre">\r\n                <object id="object-pdf-url" class="col-md-12" type="application/pdf" width="500" height="500" ng-src="{{::fichier.url}}">\r\n            </div>\r\n        </mw-hretractable>\r\n    </mw-accordeon>\r\n</div>\r\n'), e.put("typescript/modales/majDRC/popup-numerisation.html", '<div class="modale-maj-drc">\r\n    <div class="row modal-header">\r\n        <h4 class="modal-title">Information</h4>\r\n    </div>\r\n    <div class="modal-body texte-gros row">\r\n        <div class="col-sm-1 modal-icon">\r\n            <span class="icon itce-warning" aria-hidden="true"></span>\r\n        </div>\r\n        <div class="col-sm-11">\r\n            <div ng-show="::$ctrl.documentsPropages">\r\n                <p>\r\n                    Les justificatifs suivants ont été modifiés dans le DRC de\r\n                    <span ng-if="::$ctrl.libelleClient" ng-bind="$ctrl.libelleClient"></span>\r\n                    <span ng-if="::!$ctrl.libelleClient">ce client</span>\r\n                    :\r\n                </p>\r\n                <ul>\r\n                    <li ng-repeat="doc in $ctrl.documentsPropages track by doc.idDocmGED" ng-bind="doc.libelleTypeDocm"></li>\r\n                </ul>\r\n                <p ng-show="::!$ctrl.isOnTablet" class="classeurclient-question">\r\n                    <span ng-show="::$ctrl.nombreDrc === 1">Souhaitez-vous lancer classeur client ?</span>\r\n                    <span ng-show="::$ctrl.nombreDrc > 1">Le client possède des liens, souhaitez-vous lancer classeur client ?</span>\r\n                </p>\r\n                <p ng-show="::$ctrl.isOnTablet">Merci de veiller à collecter et numériser ces pièces.</p>\r\n            </div>\r\n\r\n            <div ng-show="::!$ctrl.documentsPropages">\r\n                <p>\r\n                    Vous avez modifié des informations pouvant nécessiter de mettre à jour les pièces justificatives du DRC\r\n                </p>\r\n\r\n                <p ng-show="$ctrl.isOnTablet">Merci de veiller à collecter et numériser ces pièces.</p>\r\n\r\n                <p ng-show="!$ctrl.isOnTablet">L\'application Classeur Client va se lancer.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <div ng-if="::!$ctrl.documentsPropages || $ctrl.isOnTablet">\r\n            <div class="col-lg-3 col-md-3 col-sm-3 pull-right">\r\n                <button type="button" id="button-ok" class="btn btn-primary" ng-click="$ctrl.$modalInstance.close(true)">Fermer</button>\r\n            </div>\r\n        </div>\r\n        <div ng-if="::$ctrl.documentsPropages && !$ctrl.isOnTablet">\r\n            <div class="col-lg-6 col-md-6 col-sm-6">\r\n                <button type="button" id="button-non" class="btn btn-default" ng-click="$ctrl.$modalInstance.close(false)">Non</button>\r\n            </div>\r\n            <div class="col-lg-6 col-md-6 col-sm-6">\r\n                <button type="button" id="button-oui" class="btn btn-primary" ng-click="$ctrl.$modalInstance.close(true)">Oui</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n')
}]);