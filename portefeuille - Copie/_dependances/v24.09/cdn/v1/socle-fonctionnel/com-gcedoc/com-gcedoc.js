/**
 * Généré par : SIGCESIE\ct-tfsbuild
 * Changeset TFS : C415126
 * Etiquette TFS : com-gcedoc-v17.10-Build_20171106.1
 * Déclenchement : IndividualCI
 */
var myway;!function(e){var n;!function(e){"use strict";e.app=angular.module("myway.comGcedoc",["moduleAgent"])}(n=e.comGcedoc||(e.comGcedoc={}))}(myway||(myway={}));var myway;!function(e){var n;!function(e){var n;!function(e){function n(e){return e===i.DES}!function(e){e[e.DES=0]="DES",e[e.LA=1]="LA",e[e.SA=2]="SA",e[e.A_LA=3]="A_LA",e[e.PAR_LA=4]="PAR_LA",e[e.DE_SA=5]="DE_SA",e[e.DE_LA=6]="DE_LA"}(e.ArticleCaisse||(e.ArticleCaisse={}));var i=e.ArticleCaisse;e.isArticlePluriel=n,function(e){e[e.F=0]="F",e[e.M=1]="M"}(e.Genre||(e.Genre={}));e.Genre}(n=e.LibelleCaisse||(e.LibelleCaisse={}))}(n=e.comGcedoc||(e.comGcedoc={}))}(myway||(myway={}));var myway;!function(e){var n;!function(e){var n;!function(n){"use strict";var i=function(){function e(){this.articlesFeminin={A_LA:"à la",LA:"la",SA:"sa",PAR_LA:"par la",DE_SA:"de sa",DE_LA:"de la",DES:"des"},this.articlesMasculin={A_LA:"au",LA:"le",SA:"son",PAR_LA:"par le",DE_SA:"de son",DE_LA:"du",DES:"des"},this.defaultLibelleCaisse={genre:n.Genre.F,libelleSingulier:"Caisse d'Epargne",libellePluriel:"Caisses d'Epargne"},this.exceptionsLibelleCaisse={12579:{genre:n.Genre.F,libelleSingulier:"Banque BCP",libellePluriel:"Banques BCP"},13220:{genre:n.Genre.F,libelleSingulier:"SOCOREC",libellePluriel:"SOCOREC"},13798:{genre:n.Genre.F,libelleSingulier:"Caisse Solidaire",libellePluriel:"Caisses Solidaires"},30258:{genre:n.Genre.F,libelleSingulier:"Banque BTP",libellePluriel:"Banques BTP"},42559:{genre:n.Genre.M,libelleSingulier:"Crédit COOP",libellePluriel:"Crédits COOP"},43199:{genre:n.Genre.M,libelleSingulier:"Crédit Foncier de France",libellePluriel:"Crédits Fonciers de France"}}}return e.prototype.getLibelleCaisse=function(e,i,s){if(void 0===s&&(s=!1),null==e||0===e.length)return null;var t=this.exceptionsLibelleCaisse.hasOwnProperty(e)?this.exceptionsLibelleCaisse[e]:this.defaultLibelleCaisse,l=t.genre===n.Genre.M?this.articlesMasculin:this.articlesFeminin;switch(i){case n.ArticleCaisse.DES:return this.genererLibelle(t,l.DES,n.isArticlePluriel(n.ArticleCaisse.DES),s);case n.ArticleCaisse.A_LA:return this.genererLibelle(t,l.A_LA,n.isArticlePluriel(n.ArticleCaisse.A_LA),s);case n.ArticleCaisse.DE_LA:return this.genererLibelle(t,l.DE_LA,n.isArticlePluriel(n.ArticleCaisse.DE_LA),s);case n.ArticleCaisse.DE_SA:return this.genererLibelle(t,l.DE_SA,n.isArticlePluriel(n.ArticleCaisse.DE_SA),s);case n.ArticleCaisse.LA:return this.genererLibelle(t,l.LA,n.isArticlePluriel(n.ArticleCaisse.LA),s);case n.ArticleCaisse.PAR_LA:return this.genererLibelle(t,l.PAR_LA,n.isArticlePluriel(n.ArticleCaisse.PAR_LA),s);case n.ArticleCaisse.SA:return this.genererLibelle(t,l.SA,n.isArticlePluriel(n.ArticleCaisse.SA),s);default:return t.libelleSingulier}},e.prototype.genererLibelle=function(e,n,i,s){var t=s?n[0].toUpperCase()+n.substr(1):n,l=t+" ";return l+=i?e.libellePluriel:e.libelleSingulier},e}();n.LibelleCaisseService=i,e.app.service("myway.comGcedoc.libelleCaisseService",i)}(n=e.LibelleCaisse||(e.LibelleCaisse={}))}(n=e.comGcedoc||(e.comGcedoc={}))}(myway||(myway={}));var myway;!function(e){var n;!function(e){var n;!function(n){var i=function(){function e(e){this.serviceAgent=e}return e.prototype.getIntervenantEntiteTit=function(e,n,i,s,t,l,r){var o={};return null!=e&&(o.codeEtablissement=e),null!=n&&(o.identifiantPersonne=n),null!=i&&(o.identifiantEntiteTitulaire=i),null!=s&&(o.codeGuichet=s),null!=t&&(o.codeTypeProduitService=t),null!=l&&(o.codeProduitService=l),null!=r&&(o.incideRechercheIdentifiantBAD=r),this.serviceAgent.sendRequest({url:"http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/entitetitulaireservice-v2/intervenantEntiteTit",withHeaders:!0,method:MyWay.Services.MethodEnum.GET,params:o})},e.$inject=["serviceAgent"],e}();n.EntiteTitulaireService=i,e.app.service("myway.comGcedoc.entiteTitulaireService",i)}(n=e.EntiteTitulaire||(e.EntiteTitulaire={}))}(n=e.comGcedoc||(e.comGcedoc={}))}(myway||(myway={}));var myway;!function(e){var n;!function(e){var n;!function(e){var n;!function(e){!function(e){e[e.COURT=0]="COURT",e[e.LONG=1]="LONG"}(e.ModeLibelle||(e.ModeLibelle={}));e.ModeLibelle;!function(e){e[e.LA=0]="LA",e[e.A_LA=1]="A_LA",e[e.DE_LA=2]="DE_LA"}(e.Article||(e.Article={}));e.Article}(n=e.Etablissement||(e.Etablissement={}))}(n=e.Modeles||(e.Modeles={}))}(n=e.comGcedoc||(e.comGcedoc={}))}(myway||(myway={}));var myway;!function(e){var n;!function(e){var n;!function(n){"use strict";var i=function(){function n(e,n,i,s){this.serviceAgentExtended=e,this.$q=n,this.libelleCaisseService=i,this.entiteTitulaireService=s,this.defaultLibelleCourtEtablissement="CAISSE D'EPARGNE"}return n.prototype.getLibEts=function(n,i,s){var t=this;return this.serviceAgentExtended.DonneesDelocalisees.getDonneesParCriteres(n,"CU3E",[{propriete:"COCXBQ",valeur:n,operateur:MyWay.Services.DonneesDelocalisees.CRITERES_OPERATEUR.EGAL}]).then(function(n){if(!n||0===n.length)return null;var l=n[0],r=i===e.Modeles.Etablissement.ModeLibelle.COURT&&0===l.LLCECE.indexOf(t.defaultLibelleCourtEtablissement)?t.defaultLibelleCourtEtablissement:l.LLCECE;switch(s){case e.Modeles.Etablissement.Article.LA:return l.LLCEC1+" "+r;case e.Modeles.Etablissement.Article.A_LA:return l.LLCEC2+" "+r;case e.Modeles.Etablissement.Article.DE_LA:return l.LLCEC3+" "+r;default:return r}})},n.prototype.getDonneesPaveSignature=function(n){var i=this;return this.$q.all({libDeLaDuEts:this.getLibEts(n,e.Modeles.Etablissement.ModeLibelle.COURT,e.Modeles.Etablissement.Article.DE_LA),authentificationInfo:this.serviceAgentExtended.getAuthentificationInfo()}).then(function(s){var t,l=s.libDeLaDuEts,r=s.authentificationInfo;t="1"===r.agentConnecte.codeCivilite&&null!=r.agentConnecte.nomUsagePersonnePhysique&&r.agentConnecte.nomUsagePersonnePhysique.length>0?r.agentConnecte.nomUsagePersonnePhysique:r.agentConnecte.nomFamillePersonnePhysique,t+=" "+r.agentConnecte.prenom;var o={libDeLaDuEts:l,prenomNomAgent:t,alaEtab1:i.libelleCaisseService.getLibelleCaisse(n,e.LibelleCaisse.ArticleCaisse.A_LA),laEtab1:i.libelleCaisseService.getLibelleCaisse(n,e.LibelleCaisse.ArticleCaisse.LA,!0),parlaEtab1:i.libelleCaisseService.getLibelleCaisse(n,e.LibelleCaisse.ArticleCaisse.PAR_LA),desaEtab1:i.libelleCaisseService.getLibelleCaisse(n,e.LibelleCaisse.ArticleCaisse.DE_SA),delaEtab1:i.libelleCaisseService.getLibelleCaisse(n,e.LibelleCaisse.ArticleCaisse.DE_LA)};return o})},n.prototype.getDonneesPaveCertification=function(n){return this.getLibEts(n,e.Modeles.Etablissement.ModeLibelle.COURT,e.Modeles.Etablissement.Article.LA).then(function(e){var n={libLaLeEts:e};return n})},n.prototype.getDonneesPavesTitulaires=function(e){var n=this;if(!e&&e.length<21)return this.$q.reject("Rice non valide");var i=e.substr(0,5),s=e.substr(5,5),t="00"+e.substr(10,2),l=e.substr(10,11);return this.$q.all({intervenantEntiteTit:this.entiteTitulaireService.getIntervenantEntiteTit(i,null,null,s,t,l),donneesCodeSituationFamiliale:this.serviceAgentExtended.getDonneesDelocalisees(i,"codeSituationFamiliale"),donneesCodeRegimeMatrimonial:this.serviceAgentExtended.getDonneesDelocalisees(i,"codeRegimeMatrimonial")}).then(function(e){var i=e.intervenantEntiteTit;n.donneesCodeSituationFamiliale=e.donneesCodeSituationFamiliale,n.donneesCodeRegimeMatrimonial=e.donneesCodeRegimeMatrimonial;var s=[];if(i.listPersonne){var t=[],l=[],r=[],o=[],a=[],u=[],c=[];i.listPersonne.forEach(function(e){switch(e.rangAncienEtatCivil){case" ":case"A":case"B":t.push(e);break;case"V":l.push(e);break;case"W":r.push(e);break;case"X":o.push(e);break;case"Y":a.push(e);break;case"Z":u.push(e);break;default:c.push(e)}});var g=n.getListePP(t);1===g.length?s.push(n.getDonneesPersonnesPhysiques(g,"TITULAIRE")):g.length>1&&s.push(n.getDonneesPersonnesPhysiques(g,"TITULAIRES"));var d=n.getListePM(t);1===d.length?s.push(n.getDonneesPersonnesMorales(d,"TITULAIRE")):d.length>1&&s.push(n.getDonneesPersonnesMorales(d,"TITULAIRES")),g=n.getListePP(o),1===g.length?s.push(n.getDonneesPersonnesPhysiques(g,"CONJOINT")):g.length>1&&s.push(n.getDonneesPersonnesPhysiques(g,"CONJOINTS")),d=n.getListePM(o),1===d.length?s.push(n.getDonneesPersonnesMorales(d,"CONJOINT")):d.length>1&&s.push(n.getDonneesPersonnesMorales(d,"CONJOINTS")),g=n.getListePP(c),1===g.length?s.push(n.getDonneesPersonnesPhysiques(g,"MANDATAIRE")):g.length>1&&s.push(n.getDonneesPersonnesPhysiques(g,"MANDATAIRES")),d=n.getListePM(c),1===d.length?s.push(n.getDonneesPersonnesMorales(d,"MANDATAIRE")):d.length>1&&s.push(n.getDonneesPersonnesMorales(d,"MANDATAIRES")),g=n.getListePP(a),1===g.length?s.push(n.getDonneesPersonnesPhysiques(g,"REPRESENTANT LEGAL")):g.length>1&&s.push(n.getDonneesPersonnesPhysiques(g,"REPRESENTANTS LEGAUX")),d=n.getListePM(a),1===d.length?s.push(n.getDonneesPersonnesMorales(d,"REPRESENTANT LEGAL")):d.length>1&&s.push(n.getDonneesPersonnesMorales(d,"REPRESENTANTS LEGAUX")),g=n.getListePP(u),1===g.length?s.push(n.getDonneesPersonnesPhysiques(g,"DECLARANT")):g.length>1&&s.push(n.getDonneesPersonnesPhysiques(g,"DECLARANTS")),d=n.getListePM(u),1===d.length?s.push(n.getDonneesPersonnesMorales(d,"DECLARANT")):d.length>1&&s.push(n.getDonneesPersonnesMorales(d,"DECLARANTS")),g=n.getListePP(l),1===g.length?s.push(n.getDonneesPersonnesPhysiques(g,"RATTACHE SIMPLE")):g.length>1&&s.push(n.getDonneesPersonnesPhysiques(g,"RATTACHES SIMPLES")),d=n.getListePM(l),1===d.length?s.push(n.getDonneesPersonnesMorales(d,"RATTACHE SIMPLE")):d.length>1&&s.push(n.getDonneesPersonnesMorales(d,"RATTACHES SIMPLES")),g=n.getListePP(r),g.length>0&&s.push(n.getDonneesPersonnesPhysiques(g,"")),d=n.getListePM(r),d.length>0&&s.push(n.getDonneesPersonnesMorales(d,""))}return s})},n.prototype.getListePP=function(e){return e?e.filter(function(e){return null!=e.informationPersonnePhysique}):[]},n.prototype.getListePM=function(e){return e?e.filter(function(e){return null!=e.informationPersonneMoral}):[]},n.prototype.getDonneesPersonnesPhysiques=function(e,n){var i=this,s={donneesPaveInfoPP:{libCtdhli:n,listeInfosPers2:[],listeInfosPers3:[]}};return e&&e.forEach(function(e){if(e.informationPersonnePhysique){var n;n="1"===e.informationPersonnePhysique.codeCivilite?"Mme":"2"===e.informationPersonnePhysique.codeCivilite?"Mlle":"M.";var t,l=e.informationPersonnePhysique.nomFamille+" "+e.informationPersonnePhysique.prenom,r=e.informationPersonnePhysique.nomUsage&&e.informationPersonnePhysique.nomUsage.length>0?" Nom d'usage : ":"",o=e.informationPersonnePhysique.nomUsage?e.informationPersonnePhysique.nomUsage:"",a="1"===e.indiceResponsableET?" (Responsable de compte)":"";t="1"===e.informationPersonnePhysique.codeCivilite||"2"===e.informationPersonnePhysique.codeCivilite?"née le ":"né le ",t+=moment(e.dateDebut).format("DD-MM-YYYY");var u=e.informationPersonnePhysique.nomLocaliteINSEE,c=u&&u.length>0?"à "+u:"",g=e.ligne2adresse?e.ligne2adresse:"",d=e.ligne3adresse?e.ligne3adresse:"",P=e.ligne4adresse?e.ligne4adresse:"",h=e.ligne5adresse?e.ligne5adresse:"",A=e.ligne6adresse?e.ligne6adresse:"",m=g+" "+d+" "+P+" "+h+" "+A,C=e.informationPersonnePhysique.libelleNationalitePays,L=C&&C.length>0?C:"non référencée",E=e.identifiantClient,f=E&&E.length>0?E:"",b=e.numeroTelephoneAdresse,v=e.informationPersonnePhysique.numeroTelephoneCorrespondance,y=b&&b.trim().length>0&&"0000000"!==b.trim()?b:"non renseigné";y+=" (mobile) : ",y+=v&&v.trim().length>0&&"0000000"!==v.trim()?v:"non renseigné";var p=e.informationPersonnePhysique.codeTypeSituationFamille,D=i.getValueRubriqueDeloc(i.donneesCodeSituationFamiliale,p),S=D&&D.trim().length>0&&"0000000"!==D.trim()?D:"non renseigné",M=e.informationPersonnePhysique.codeTypeRegimeMatrimonial,T=i.getValueRubriqueDeloc(i.donneesCodeRegimeMatrimonial,M),R=T&&T.length>0?T:"";if("Inconnu"===R||""===R||"Non concerné"===R){var q={lidacv2:n,nomPrenomClient2:l,lidanm2:r,nomUsage2:o,libCodirc2:a,dadana2:t,lidgilNaissance2:c,lidgv262:m,lidgna2:L,idnsbd2:f,nodatpClient2:y,situationFamille2:S};s.donneesPaveInfoPP.listeInfosPers2.push(q)}else{var I={lidacv3:n,nomPrenomClient3:l,lidanm3:r,nomUsage3:o,libCodirc3:a,dadana3:t,lidgilNaissance3:c,lidgv263:m,lidgna3:L,idnsbd3:f,nodatpClient3:y,situationFamille3:S,regimeMatrimonial3:R};s.donneesPaveInfoPP.listeInfosPers3.push(I)}}}),s},n.prototype.getDonneesPersonnesMorales=function(e,n){var i={donneesPaveInfoPM:{libCtdhli:n,listeInfosPM:[]}};return e&&e.forEach(function(e){if(e.informationPersonneMoral){i.donneesPaveInfoPM||(i.donneesPaveInfoPM={libCtdhli:n,listeInfosPM:[]});var s=e.ligne2adresse?e.ligne2adresse:"",t=e.ligne3adresse?e.ligne3adresse:"",l=e.ligne4adresse?e.ligne4adresse:"",r=e.ligne5adresse?e.ligne5adresse:"",o=e.ligne6adresse?e.ligne6adresse:"",a=s+" "+t+" "+l+" "+r+" "+o,u=e.identifiantClient,c=u&&u.length>0?u:"",g=e.numeroTelephoneAdresse,d=g&&g.trim().length>0&&"0000000"!==g.trim()?g:"non renseigné",P={lidars:e.informationPersonneMoral.raisonSocial,dadatj:moment(e.dateDebut).format("DD-MM-YYYY"),lidgv26:a,idnsbd:c,nodatp:d};i.donneesPaveInfoPM.listeInfosPM.push(P)}}),i},n.prototype.getValueRubriqueDeloc=function(e,n){if(e&&e.donnees&&e.donnees.length>0&&null!=n)for(var i=0;i<e.donnees.length;i++)if(e.donnees[i]&&e.donnees[i].Key===n)return e.donnees[i].Value;return""},n.$inject=["serviceAgentExtended","$q","myway.comGcedoc.libelleCaisseService","myway.comGcedoc.entiteTitulaireService"],n}();n.ComGcedocService=i,e.app.service("comGcedocService",i)}(n=e.Services||(e.Services={}))}(n=e.comGcedoc||(e.comGcedoc={}))}(myway||(myway={}));