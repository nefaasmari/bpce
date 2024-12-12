/**
 * Généré par : SIGCESIE\ct-tfsbuild
 * Changeset TFS : 693536
 * Etiquette TFS : 24.02-rc.2
 * Déclenchement : Manual
 */
var Mad;!function(t){!function(e){"use strict";(t.Rest||(t.Rest={})).app=angular.module("Mad.Rest",["ngRoute","moduleAgent"])}()}(Mad||(Mad={})),function(e){var t;(function(e){"use strict";var t,n,r,s,i,o,c,E,a;(t=e.Url||(e.Url={})).URL_REST="http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083",(n=t.MouvAttenteDecision||(t.MouvAttenteDecision={})).BASE="/mouvattentedecision/v1",n.ANNULATION_DECISION="/annulationDecision",n.AUDIT_TARIFICATION="/auditTarification",n.CARACTERISTIQUE="/caracteristique",n.COMMENTAIRE=t.URL_REST+n.BASE+"/commentaire",n.COMPTE_FORCAGE="/compteForcage",n.DECISION=t.URL_REST+n.BASE+"/decision",n.DELEGATAIRE=t.URL_REST+n.BASE+"/delegataire",n.DEMANDE_DELEGATION=t.URL_REST+n.BASE+"/demandeDelegation",n.DEPLOIEMENT_MAD="/deploiementMyMad",n.INFO_SPECIFIQUE_ET_MAD="/infoSpecifiqueETMad",n.JOURNAL=t.URL_REST+n.BASE+"/journal",n.LISTE_DELEGATAIRE=t.URL_REST+n.BASE+"/listeDelegataire",n.MESSAGE_SMS=t.URL_REST+n.BASE+"/messageSms",n.RECHERCHE_FORCAGE_AUTO=t.URL_REST+n.BASE+"/rechercheForcageAuto",n.RECHERCHE_HISTORIQUE=t.URL_REST+n.BASE+"/rechercheHistorique",n.RECHERCHE_MAD_DU_JOUR="/rechercheMadDuJour",n.SUIVI_ACTIVITE="/suiviActivite",n.SYNTHESE="/synthese",n.SYNTHESE_HISTORIQUE=t.URL_REST+n.BASE+"/syntheseHistorique",n.SYNTHESE_TARIFICATION=t.URL_REST+n.BASE+"/syntheseTarification",n.VISION_FINANCIERE="/visionFinanciere",n.SOLDE_DISPONIBLE="/soldeDisponibleMad",n.CONTROLE_DELEGATAIRE=t.URL_REST+n.BASE+"/controleDelegataire",n.CONTROLE_DELEGATION="/controleDelegation",n.PRISE_DECISION="/priseDecision",(r=t.AgentV2||(t.AgentV2={})).BASE="/agent/v2",r.RECHERCHE="/recherche",(s=t.CreFonctionnelV1||(t.CreFonctionnelV1={})).BASE="/crefonctionnel/v1",s.CREFONCTIONNEL=t.URL_REST+s.BASE+"/creFonctionnel/",(i=t.StructureV2||(t.StructureV2={})).BASE="/structure/v2",i.CARACTERISTIQUE_EDS=t.URL_REST+i.BASE+"/caracteristiqueEDS",i.POSTE_FONCTIONNEL_AGENT=t.URL_REST+i.BASE+"/posteFonctionnelAgent",i.RECHERCHE_EDS_NIVEAU_INFERIEUR=t.URL_REST+i.BASE+"/edsNiveauInferieur",i.RECHERCHE_EDS_REGRP_MAD=t.URL_REST+i.BASE+"/rechercheEdsRegrpMad",(o=t.TiersV3||(t.TiersV3={})).BASE="/tiers-v3",o.MEDIA=t.URL_REST+o.BASE+"/media/",(c=t.MouvAttenteDecisionParam||(t.MouvAttenteDecisionParam={})).BASE="/mouvattentedecisparm/v1",c.COURRIER="/courrier",c.TABLE_PARAM=t.URL_REST+c.BASE+"/tableParametreMad",(E=t.DelegationV1||(t.DelegationV1={})).BASE="/delegation/v1",E.DEMANDE=t.URL_REST+E.BASE+"/demande",(a=e.Inject||(e.Inject={})).ANNULATION_DECISION_REST_SERVICE="AnnulationDecisionRestService",a.AUDIT_TARIFICATION_REST_SERVICE="AuditTarificationRestService",a.CARACTERISTIQUE_REST_SERVICE="CaracteristiqueRestService",a.COMMENTAIRE_REST_SERVICE="CommentaireRestService",a.COMPTE_FORCAGE_REST_SERVICE="CompteForcageRestService",a.DECISION_REST_SERVICE="DecisionRestService",a.DELEGATAIRE_REST_SERVICE="DelegataireRestService",a.DEMANDE_DELEGATION_REST_SERVICE="DemandeDelegationRestService",a.DEPLOIEMENT_MAD_REST_SERVICE="DeploiementMyMadRestService",a.INFO_SPECIFIQUE_ET_MAD_REST_SERVICE="InfoEntiteTitulaireRestService",a.JOURNAL_REST_SERVICE="JournalRestService",a.LISTE_DELEGATAIRE_REST_SERVICE="ListeDelegataireRestService",a.MESSAGE_SMS_REST_SERVICE="MessageSmsRestService",a.RECHERCHE_FORCAGE_AUTO_REST_SERVICE="RechercheForcageAutoRestService",a.RECHERCHE_HISTORIQUE_REST_SERVICE="RechercheHistoriqueRestService",a.RECHERCHE_MAD_JOUR_REST_SERVICE="RechercheMadDuJourRestService",a.SUIVI_ACTIVITE_REST_SERVICE="SuiviActiviteRestService",a.SYNTHESE_REST_SERVICE="SyntheseRestService",a.SYNTHESE_HISTORIQUE_REST_SERVICE="SyntheseHistoriqueRestService",a.SYNTHESE_TARIFICATION_REST_SERVICE="SyntheseTarificationRestService",a.VISION_FINANCIERE_REST_SERVICE="VisionFinanciereRestService",a.SOLDE_DISPONIBLE_REST_SERVICE="SoldeDisponibleRestService",a.RECHERCHE_AGENT_REST_SERVICE="RechercheAgentRestService",a.CRE_FONCTIONNEL_REST_SERVICE="CreFonctionnelRestService",a.CARACTERISTIQUE_EDS_REST_SERVICE="CaracteristiqueEdsRestService",a.POSTE_FONCTIONNEL_AGENT_REST_SERVICE="PosteFonctionnelAgentRestService",a.RECHERCHE_EDS_NIVEAU_INFERIEUR_REST_SERVICE="RechercheEdsNiveauInferieurRestService",a.RECHERCHE_EDS_REGRP_MAD_REST_SERVICE="RechercheEdsRegrpMadRestService",a.MEDIA_REST_SERVICE="MediaRestService",a.COURRIER_REST_SERVICE="CourrierRestService",a.TABLE_PARAM_REST_SERVICE="TableParamRestService",a.CONTROLE_DELEGATAIRE_REST_SERVICE="ControleDelegataireRestService",a.CONTROLE_DELEGATION_REST_SERVICE="ControleDelegationRestService",a.PRISE_DECISION_REST_SERVICE="PriseDecisionRestService",a.DEMANDE_REST_SERVICE="DemandeRestService"})((t=e.Rest||(e.Rest={})).Constantes||(t.Constantes={}))}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).AgentV2||(n.AgentV2={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.AgentV2.BASE+n.Constantes.Url.AgentV2.RECHERCHE},t.prototype.getRecherche=function(e){return t.logger.debug("Appel service get agentV2/recherche",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="RechercheRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.RECHERCHE_AGENT_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var r,t;(r=e.Rest||(e.Rest={})).CreFonctionnel||(r.CreFonctionnel={}),t=function(){function n(e){this.serviceAgent=e}return n.prototype.postCreFonctionnel=function(e,t){return n.logger.debug("/v1/crefonctionnel/creFonctionnel",e),this.serviceAgent.sendRequest({url:r.Constantes.Url.CreFonctionnelV1.CREFONCTIONNEL,params:e,data:t,withHeaders:!0,method:MyWay.Services.MethodEnum.POST,contentType:MyWay.Services.ContentTypeEnum.JSON})},n.CLASS_NAME="CreFonctionnelRestService",n.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(n.CLASS_NAME),n.$inject=["serviceAgentExtended"],n}(),r.app.service(r.Constantes.Inject.CRE_FONCTIONNEL_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).DelegationV1||(n.DelegationV1={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.postDemande=function(e){return t.logger.debug("Appel service post delegation-v1/demande",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.DelegationV1.DEMANDE,data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.POST})},t.CLASS_NAME="DemandeRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.DEMANDE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecisionParam||(n.MouvAttenteDecisionParam={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecisionParam.BASE+n.Constantes.Url.MouvAttenteDecisionParam.COURRIER},t.prototype.getCourrier=function(e){return t.logger.debug("Appel service GET mouvattentedecisparm/courrier",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="CourrierRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.COURRIER_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecisionParam||(n.MouvAttenteDecisionParam={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.MouvAttenteDecisionParam.TABLE_PARAM},t.prototype.getTableParam=function(e){return t.logger.debug("Appel service mouvattentedecisparm/v1/tableParametreMad",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="TableParamRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.TABLE_PARAM_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).StructureV2||(n.StructureV2={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getCaracteristiqueEds=function(e){return t.logger.debug("Appel service structure/v2/caracteristiqueEDS",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.StructureV2.CARACTERISTIQUE_EDS,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="CaracteristiqueEdsRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.CARACTERISTIQUE_EDS_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).StructureV2||(n.StructureV2={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getPostesFonctionnelsAgent=function(e){return t.logger.debug("Appel service structure/v2/posteFonctionnelAgent",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.StructureV2.POSTE_FONCTIONNEL_AGENT,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="PosteFonctionnelAgentRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.POSTE_FONCTIONNEL_AGENT_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).StructureV2||(n.StructureV2={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getEdsNiveauInferieur=function(e){return t.logger.debug("Appel service structure/v2/edsNiveauInferieur",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.StructureV2.RECHERCHE_EDS_NIVEAU_INFERIEUR,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="RechercheEdsNiveauInferieurRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.RECHERCHE_EDS_NIVEAU_INFERIEUR_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).StructureV2||(n.StructureV2={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getEdsRegroupement=function(e){return t.logger.debug("Appel service structure/v2/rechercheEdsRegrpMad",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.StructureV2.RECHERCHE_EDS_REGRP_MAD,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="RechercheEdsRegrpMadRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.RECHERCHE_EDS_REGRP_MAD_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.ANNULATION_DECISION},t.prototype.annulerDecision=function(e){return t.logger.debug("Appel service mouvattentedecision/annulationDecision",e),this.serviceAgent.sendRequest({url:this.url(),data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.DELETE,responseType:MyWay.Services.ResponseTypeEnum.JSON})},t.CLASS_NAME="AnnulationDecisionRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.ANNULATION_DECISION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.AUDIT_TARIFICATION},t.prototype.getAuditTarification=function(e){return t.logger.debug("Appel service mouvattentedecision/auditTarification",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="AuditTarificationRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.AUDIT_TARIFICATION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.CARACTERISTIQUE},t.prototype.getCaracteristique=function(e){return t.logger.debug("Appel service mouvattentedecision/caracteristique",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="CaracteristiqueRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.CARACTERISTIQUE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getCommentaire=function(e){return t.logger.debug("Appel service mouvattentedecision/commentaire",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.COMMENTAIRE,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.prototype.postCommentaire=function(e){return t.logger.debug("Appel service mouvattentedecision/commentaire",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.COMMENTAIRE,data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.POST})},t.CLASS_NAME="CommentaireRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.COMMENTAIRE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.COMPTE_FORCAGE},t.prototype.getCompteForcage=function(e){return t.logger.debug("Appel service mouvattentedecision/CompteForcage",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="CompteForcageRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.COMPTE_FORCAGE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.putControleDelegataire=function(e){return t.logger.debug("Appel service put mouvattentedecision/ControleDelegataire",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.CONTROLE_DELEGATAIRE,data:e.controleDelegataire,params:{codeGestion:e.codeGestion},withHeaders:!0,method:MyWay.Services.MethodEnum.PUT})},t.CLASS_NAME="ControleDelegataireRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.CONTROLE_DELEGATAIRE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.CONTROLE_DELEGATION},t.prototype.getControleDelegation=function(e){return t.logger.debug("Appel service mouvattentedecision/controleDelegation",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="ControleDelegationRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.CONTROLE_DELEGATION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.putDecision=function(e){return t.logger.debug("Appel service put mouvattentedecision-v1/decision",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.DECISION,data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.PUT})},t.CLASS_NAME="DecisionRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.DECISION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getDelegataires=function(e){return t.logger.debug("Appel service mouvattentedecision/delegataire",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.DELEGATAIRE,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="DelegataireRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.DELEGATAIRE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.postDemande=function(e){return t.logger.debug("Appel service post mouvAttenteDecision-v1/demandeDelegation",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.DEMANDE_DELEGATION,data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.POST})},t.CLASS_NAME="DemandeDelegationRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.DEMANDE_DELEGATION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.DEPLOIEMENT_MAD},t.prototype.getDeploiement=function(e){return t.logger.debug("Appel service mouvattentedecision/deploiementMyMad",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="DeploiementMyMadRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.DEPLOIEMENT_MAD_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.INFO_SPECIFIQUE_ET_MAD},t.prototype.getInfoEntite=function(e){return t.logger.debug("Appel service GET mouvattentedecision/infoSpecifiqueETMad",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="InfoSpecifiqueETMadRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.INFO_SPECIFIQUE_ET_MAD_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getJournal=function(e){return t.logger.debug("Appel service mouvattentedecision/journal",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.JOURNAL,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="JournalRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.JOURNAL_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.postListeDelegataire=function(e){return t.logger.debug("Appel service post mouvattentedecision-v1/listeDelegataire",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.LISTE_DELEGATAIRE,data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.POST})},t.CLASS_NAME="ListeDelegataireRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.LISTE_DELEGATAIRE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.postMessageSms=function(e){return t.logger.debug("Appel service mouvattentedecision/messageSms",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.MESSAGE_SMS,data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.POST})},t.CLASS_NAME="CommentaireRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.MESSAGE_SMS_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.PRISE_DECISION},t.prototype.putPriseDecision=function(e){return t.logger.debug("Appel service mouvattentedecision/priseDecision",e),this.serviceAgent.sendRequest({url:this.url(),data:e,withHeaders:!0,method:MyWay.Services.MethodEnum.PUT})},t.CLASS_NAME="PriseDecisionRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.PRISE_DECISION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getForcageAuto=function(e){return t.logger.debug("Appel service mouvattentedecision/rechercheForcageAuto",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.RECHERCHE_FORCAGE_AUTO,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="RechercheForcageAutoRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.RECHERCHE_FORCAGE_AUTO_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getHistorique=function(e){return t.logger.debug("Appel service mouvattentedecision/rechercheHistorique",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.RECHERCHE_HISTORIQUE,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="RechercheHistoriqueRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.RECHERCHE_HISTORIQUE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.RECHERCHE_MAD_DU_JOUR},t.prototype.getRechercheMadJour=function(e){return t.logger.debug("Appel service mouvattentedecision/rechercheMadDuJour",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="RechercheMadDuJourRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.RECHERCHE_MAD_JOUR_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.SOLDE_DISPONIBLE},t.prototype.getSoldeDisponible=function(e){return t.logger.debug("Appel service mouvattentedecision/soldeDisponibleMad",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="SoldeDisponibleRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.SOLDE_DISPONIBLE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var t,n;(t=e.Rest||(e.Rest={})).MouvAttenteDecision||(t.MouvAttenteDecision={}),n=function(){function n(e){this.serviceAgent=e}return n.prototype.url=function(){return t.Constantes.Url.URL_REST+t.Constantes.Url.MouvAttenteDecision.BASE+t.Constantes.Url.MouvAttenteDecision.SUIVI_ACTIVITE},n.prototype.getSuiviActivites=function(e,t){return n.logger.debug("Appel service mouvattentedecision/suiviActivite",e),this.serviceAgent.sendRequest({url:this.url(),params:e,data:t,withHeaders:!0,method:MyWay.Services.MethodEnum.POST,responseType:MyWay.Services.ResponseTypeEnum.JSON})},n.CLASS_NAME="SuiviActiviteRestService",n.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(n.CLASS_NAME),n.$inject=["serviceAgentExtended"],n}(),t.app.service(t.Constantes.Inject.SUIVI_ACTIVITE_REST_SERVICE,n)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getSyntheseHistorique=function(e){return t.logger.debug("Appel service mouvattentedecision/syntheseHistorique",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.SYNTHESE_HISTORIQUE,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="SyntheseHistoriqueRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.SYNTHESE_HISTORIQUE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getSyntheseTarification=function(e){return t.logger.debug("Appel service /v1/mouvattentedecision/syntheseTarification/",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.MouvAttenteDecision.SYNTHESE_TARIFICATION,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="SyntheseTarificationRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.SYNTHESE_TARIFICATION_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.SYNTHESE},t.prototype.getSynthese=function(e){return t.logger.debug("Appel service mouvattentedecision/synthese",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="SyntheseRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service("SyntheseRestService",t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).MouvAttenteDecision||(n.MouvAttenteDecision={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.url=function(){return n.Constantes.Url.URL_REST+n.Constantes.Url.MouvAttenteDecision.BASE+n.Constantes.Url.MouvAttenteDecision.VISION_FINANCIERE},t.prototype.getVisionFinanciere=function(e){return t.logger.debug("Appel service mouvattentedecision/visionFinanciere",e),this.serviceAgent.sendRequest({url:this.url(),params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET})},t.CLASS_NAME="VisionFinanciereRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.VISION_FINANCIERE_REST_SERVICE,t)}(Mad||(Mad={})),function(e){var n,t;(n=e.Rest||(e.Rest={})).Tiers||(n.Tiers={}),t=function(){function t(e){this.serviceAgent=e}return t.prototype.getMedia=function(e){return t.logger.debug("Appel service /v3/tiers/media/",e),this.serviceAgent.sendRequest({url:n.Constantes.Url.TiersV3.MEDIA,params:e,withHeaders:!0,method:MyWay.Services.MethodEnum.GET,contentType:MyWay.Services.ContentTypeEnum.JSON})},t.CLASS_NAME="MediaRestService",t.logger=MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(t.CLASS_NAME),t.$inject=["serviceAgentExtended"],t}(),n.app.service(n.Constantes.Inject.MEDIA_REST_SERVICE,t)}(Mad||(Mad={}));