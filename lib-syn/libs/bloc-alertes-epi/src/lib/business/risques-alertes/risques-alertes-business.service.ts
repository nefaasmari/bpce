import {CurrencyPipe, formatDate} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HAB_SHDC26, HAB_SHPIQ1} from '../../models/constantes/habilitations.constantes';
import {DATAINCONNUE, DATANONRENSEIGNEE, formatDateAffichage} from '../../models/constantes/ihm.constantes';
import {
  CONFIG_LANCEMENT_ACTE_SAISIE_ID,
  CONFIG_LANCEMENT_BALE2_ID,
  CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
  CONFIG_LANCEMENT_CONTROL_DOCUMENT,
  CONFIG_LANCEMENT_DSC_ID,
  CONFIG_LANCEMENT_ECKERT_ID,
  CONFIG_LANCEMENT_GAE_ID,
  CONFIG_LANCEMENT_MAD_ID,
  CONFIG_LANCEMENT_MYOPPO_ID,
  CONFIG_LANCEMENT_PARCOURS_CLIENT_ID,
  CONFIG_LANCEMENT_RECLAMATION_ID,
  CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID,
  CONFIG_LANCEMENT_REVISION_ANNUELLE_ID,
  CONFIG_LANCEMENT_RISQUE_CLIENT_ID,
  CONFIG_LANCEMENT_TOPCC_ID,
  CONFIG_LANCEMENT_VARIO_ID,
  CONFIG_MYFLOW_ID,
  CONFIG_QUESTIONNAIRE_PIM_ID
} from '../../models/constantes/processus.constantes';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';
import {IContext} from '../../models/models/context.model';
import {BusinessModelsUtilsUi} from '../../models/models/ui-utils.model';
import {RessourceDemandemulticanalsrvV1RestitutionCompteur} from '../../myway-rest-it/demandemulticanalsrvv1/models/demandemulticanalsrvv1.restitutionCompteur.models';
import {DemandemulticanalsrvV1RestitutionCompteurService} from '../../myway-rest-it/demandemulticanalsrvv1/services/demandemulticanalsrvv1.restitutionCompteur.service';
import {RessourceEntitetitulaireV2Recherche} from '../../myway-rest-it/entitetitulairev2/models/entitetitulairev2.recherche.models';
import {EntitetitulaireV2RechercheService} from '../../myway-rest-it/entitetitulairev2/services/entitetitulairev2.recherche.service';
import {OffreV2EnveloppeOffreService} from '../../myway-rest-it/offrev2/services/offrev2.enveloppeOffre.service';
import {RessourceReclamationV1CompteurClient} from '../../myway-rest-it/reclamationV1/models/reclamationv1.compteurClient.models';
import {ReclamationV1CompteurClientService} from '../../myway-rest-it/reclamationV1/services/reclamationv1.compteurClient.service';
import {RessourceSurveillancerisqueV2Indicateur} from '../../myway-rest-it/surveillancerisquev2/models/surveillancerisquev2.indicateur.models';
import {SurveillancerisqueV2IndicateurService} from '../../myway-rest-it/surveillancerisquev2/services/surveillancerisquev2.indicateur.service';
import {RessourceSynthesecorporateV1DonneeDossierPartage} from '../../myway-rest-it/synthesecorporatev1/models/synthesecorporatev1.donneeDossierPartage.models';
import {RessourceSynthesecorporateV1InfosRisqueAlerte} from '../../myway-rest-it/synthesecorporatev1/models/synthesecorporatev1.infosRisqueAlerte.models';
import {SynthesecorporateV1DonneeDossierPartageService} from '../../myway-rest-it/synthesecorporatev1/services/synthesecorporatev1.donneeDossierPartage.service';
import {SynthesecorporateV1InfosRisqueAlerteService} from '../../myway-rest-it/synthesecorporatev1/services/synthesecorporatev1.infosRisqueAlerte.service';
import {RessourceTierscorporateservicV1ScoringProspect} from '../../myway-rest-it/tierscorporateservicv1/models/tierscorporateservicv1.scoringProspect.models';
import {TierscorporateservicV1ScoringProspectService} from '../../myway-rest-it/tierscorporateservicv1/services/tierscorporateservicv1.scoringProspect.service';
import {RessourceTierscorporateV1BanqueJudiciaire} from '../../myway-rest-it/tierscorporatev1/models/tierscorporatev1.banqueJudiciaire.models';
import {RessourceTierscorporateV1PotentielProspect} from '../../myway-rest-it/tierscorporatev1/models/tierscorporatev1.potentielProspect.models';
import {TierscorporateV1BanqueJudiciaireService} from '../../myway-rest-it/tierscorporatev1/services/tierscorporatev1.banqueJudiciaire.service';
import {TierscorporateV1PotentielProspectService} from '../../myway-rest-it/tierscorporatev1/services/tierscorporatev1.potentielProspect.service';
import {DataUtilsService} from '../utils/data-utils.service';

@Injectable({
  providedIn: 'root'
})
export class RisquesAlertesBusinessService {
  constructor(
    private readonly risqueAlertesRest: SynthesecorporateV1InfosRisqueAlerteService,
    private readonly entitetitulaireService: EntitetitulaireV2RechercheService,
    private readonly alertDossierPartage: SynthesecorporateV1DonneeDossierPartageService,
    private readonly surveillancerisqueV2IndicateurService: SurveillancerisqueV2IndicateurService,
    private readonly tierscorporateV1BanqueJudiciaireService: TierscorporateV1BanqueJudiciaireService,
    private readonly tierscorporateservicV1ScoringProspectService: TierscorporateservicV1ScoringProspectService,
    private readonly tierscorporateV1PotentielProspectService: TierscorporateV1PotentielProspectService,
    private readonly offreV2EnveloppeOffreService: OffreV2EnveloppeOffreService,
    private readonly reclamationV1CompteurClientService: ReclamationV1CompteurClientService,
    private readonly demandesMyFlow: DemandemulticanalsrvV1RestitutionCompteurService,
    private readonly currencyPipe: CurrencyPipe,
    private readonly dataUtilsService: DataUtilsService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  getAlertes(
    codeEtablissement: string,
    identifiantPersonne: string,
    estPersonnePhysique: boolean
  ): Observable<model.IAlertes> {
    const reclamationsSalesForce$ = this.reclamationV1CompteurClientService
      .getCompteurClient(codeEtablissement, +identifiantPersonne)
      .pipe(catchError((err) => of(err)));

    const indicateurDonneeDossierPartageAlert$ = this.alertDossierPartage
      .getAlertDossierAttenteValid(codeEtablissement, identifiantPersonne)
      .pipe(catchError((err) => of(err)));

    const listeEntitesRPM$ = identifiantPersonne
      ? this.entitetitulaireService
          .getRecherche(codeEtablissement, Number(identifiantPersonne), '1')
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    return forkJoin([
      this.risqueAlertesRest.getInfosRisqueAlerte(codeEtablissement, identifiantPersonne),
      indicateurDonneeDossierPartageAlert$,
      listeEntitesRPM$,
      reclamationsSalesForce$
    ]).pipe(
      map(([dataRisque, dataDossierPartage, listeEntitesRPM, dataReclamationSalesForce]) => {
        const alertes = {
          indicateurAlerteClient: undefined,
          dataOffreEnInstance: undefined,
          messages: []
        } as model.IAlertes;
        if (dataDossierPartage?.name === 'HttpErrorResponse' || dataDossierPartage?.codeLibelle === 'SendRequest') {
          const tmp = this.getMessageErreurHttp(
            dataDossierPartage,
            'Service dossier de partage momentanément indisponible'
          );
          alertes.messages.push({messageLib: tmp} as model.IMessage);
        }
        if (
          dataReclamationSalesForce?.name === 'HttpErrorResponse' ||
          dataReclamationSalesForce?.codeLibelle === 'SendRequest'
        ) {
          const tmp = this.getMessageErreurHttp(
            dataReclamationSalesForce,
            'Service reclamations SalesForce momentanément indisponible'
          );
          console.error('Erreur appel REST reclamationV1CompteurClientService.getCompteurClient', tmp);
        }
        alertes.indicateurAlerteClient = this.infosAlerteRestToApp(
          dataRisque,
          estPersonnePhysique,
          dataDossierPartage,
          dataReclamationSalesForce
        );
        alertes.dataOffreEnInstance = this.getOffreEnInstanceRestToApp(
          codeEtablissement,
          dataRisque.offreEnInstance,
          identifiantPersonne
        );
        alertes.dataRPM = this.infoEntitesRPMToApp(listeEntitesRPM);
        return alertes;
      })
    );
  }

  getIndicateurs(ctx: IContext): Observable<model.IIndicateurs> {
    const indicEntree = {
      codeEtablissement: ctx.codeEtablissement,
      numeroPersonne: +ctx.identifiantPersonne,
      numeroPersonneContact: 0,
      identifiantFonction: 'SYNT_PERS'
    } as RessourceSurveillancerisqueV2Indicateur.IndicateurEntree;

    const demandesMyFlow$ = this.demandesMyFlow
      .getCompteurSyntheseClient(
        ctx.identifiantPersonne,
        ctx.identifiantEdsAgent.toString(),
        ctx.codeEtablissement,
        ctx.codeAgent
      )
      .pipe(catchError((err) => of(err)));

    const indicateurRisque$ = ctx.estClient
      ? this.surveillancerisqueV2IndicateurService.getIndicateur(indicEntree).pipe(catchError((err) => of(err)))
      : of(undefined);

    const banqueJudiciaire$ = ctx.estClient
      ? this.tierscorporateV1BanqueJudiciaireService
          .getBanqueJudiciaire(+ctx.identifiantPersonne)
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurScoringProspect$ = ctx.estProspect
      ? this.tierscorporateservicV1ScoringProspectService
          .getScoringProspect(ctx.codeEtablissement, Number(ctx.identifiantPersonne), 'E')
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurPotentielProspect$ = ctx.estProspect
      ? this.tierscorporateV1PotentielProspectService
          .getPotentielProspect(ctx.codeEtablissement, Number(ctx.identifiantPersonne))
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurRisqueAlerte$ =
      ctx.estClient || ctx.estProspect
        ? this.risqueAlertesRest.getInfosRisqueAlerte(ctx.codeEtablissement, ctx.identifiantPersonne)
        : of(undefined);

    return forkJoin([
      indicateurRisqueAlerte$,
      indicateurRisque$,
      banqueJudiciaire$,
      indicateurScoringProspect$,
      indicateurPotentielProspect$,
      demandesMyFlow$
    ]).pipe(
      map(
        ([
          dataRisque,
          dataSurvRisqueIndic,
          dataBanqueJudiciaire,
          dataScoringProspect,
          dataPotentielProspect,
          compteurMyFlow
        ]) => {
          const indicateurAlerteAvecGCEDOC = {} as model.IIndicateurs;
          indicateurAlerteAvecGCEDOC.messages = [];
          if (
            compteurMyFlow?.name === 'HttpErrorResponse' ||
            compteurMyFlow?.codeLibelle === 'SendRequest' ||
            compteurMyFlow?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              compteurMyFlow,
              'Service compteur des demandes MyFlow momentanément indisponible'
            );
          }

          if (
            dataSurvRisqueIndic?.name === 'HttpErrorResponse' ||
            dataSurvRisqueIndic?.codeLibelle === 'SendRequest' ||
            dataSurvRisqueIndic?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataSurvRisqueIndic,
              'Service surveillance risque momentanément indisponible'
            );
            indicateurAlerteAvecGCEDOC.messages.push({
              messageLib: tmp
            } as model.IMessage);
          }

          if (
            dataBanqueJudiciaire?.name === 'HttpErrorResponse' ||
            dataBanqueJudiciaire?.codeLibelle === 'SendRequest' ||
            dataBanqueJudiciaire?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataBanqueJudiciaire,
              'Service banque judiciaire momentanément indisponible'
            );
            indicateurAlerteAvecGCEDOC.messages.push({
              messageLib: tmp
            } as model.IMessage);
          }
          indicateurAlerteAvecGCEDOC.indicateurAlerteClient = this.infoIndicateurRestToApp(
            dataRisque,
            ctx.estPersonnePhysique,
            ctx.estProspect,
            ctx.estClient
          );
          indicateurAlerteAvecGCEDOC.estTopActif = !ctx.estProspect ? this.getEstTopActif(dataRisque) : undefined;
          indicateurAlerteAvecGCEDOC.dataGCEDOC = this.indicateursRestToGCEDOC(dataRisque);
          indicateurAlerteAvecGCEDOC.dataPNB = this.getDataPNB(dataRisque);
          indicateurAlerteAvecGCEDOC.dataTarification = this.getDataTarification(dataRisque);
          const indicBanqueJud = this.getIndicBanqueJudiciaire(dataBanqueJudiciaire);

          if (indicBanqueJud) {
            indicateurAlerteAvecGCEDOC.indicateurAlerteClient.push(indicBanqueJud);
          }

          const indicBadLoans = this.getIndicBadLoans(dataSurvRisqueIndic);
          if (indicBadLoans) {
            indicateurAlerteAvecGCEDOC.indicateurAlerteClient.push(indicBadLoans);
            indicateurAlerteAvecGCEDOC.dataBadLoans = this.getDatasBadLoans(dataSurvRisqueIndic);
          }

          if (this.getHasTopLF(dataRisque?.leverageFinance)) {
            indicateurAlerteAvecGCEDOC.dataTopLF = this.getDatasTopLF(dataRisque?.leverageFinance);
          }

          if (
            dataScoringProspect?.name === 'HttpErrorResponse' ||
            dataScoringProspect?.codeLibelle === 'SendRequest' ||
            dataScoringProspect?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataScoringProspect,
              'Service scoring prospect momentanément indisponible'
            );
            indicateurAlerteAvecGCEDOC.messages.push({
              messageLib: tmp
            } as model.IMessage);
          } else {
            if (dataScoringProspect) {
              const indicScoringProspect = this.getIndicScoringProspect(dataScoringProspect);
              indicateurAlerteAvecGCEDOC.indicateurAlerteClient =
                indicateurAlerteAvecGCEDOC.indicateurAlerteClient.concat(indicScoringProspect);
            }
          }

          if (
            dataPotentielProspect?.name === 'HttpErrorResponse' ||
            dataPotentielProspect?.codeLibelle === 'SendRequest' ||
            dataPotentielProspect?.name == 'TimeoutError'
          ) {
            if (!this.estErreurHabilitation(dataPotentielProspect, HAB_SHPIQ1)) {
              const tmp = this.getMessageErreurHttp(
                dataPotentielProspect,
                'Service potentiel prospect momentanément indisponible'
              );
              indicateurAlerteAvecGCEDOC.messages.push({
                messageLib: tmp
              } as model.IMessage);
            }
          } else {
            if (dataPotentielProspect) {
              const indicPotentielProspect = this.getIndicPotentielProspect(dataPotentielProspect);
              indicateurAlerteAvecGCEDOC.indicateurAlerteClient.push(indicPotentielProspect);
            }
          }

          const indicDmdeMyFlow = this.getIndicMyFlow(compteurMyFlow);
          if (indicDmdeMyFlow) {
            indicateurAlerteAvecGCEDOC.indicateurAlerteClient.push(indicDmdeMyFlow);
          }
          return indicateurAlerteAvecGCEDOC;
        }
      )
    );
  }

  getAlertesEtIndicateurs(ctx: IContext): Observable<model.IIndicateursEtAlertes> {
    const demandesMyFlow$ = this.demandesMyFlow
      .getCompteurSyntheseClient(
        ctx.identifiantPersonne,
        ctx.identifiantEdsAgent.toString(),
        ctx.codeEtablissement,
        ctx.codeAgent
      )
      .pipe(catchError((err) => of(err)));

    const indicEntree = {
      codeEtablissement: ctx.codeEtablissement,
      numeroPersonne: +ctx.identifiantPersonne,
      numeroPersonneContact: 0,
      identifiantFonction: 'SYNT_PERS'
    } as RessourceSurveillancerisqueV2Indicateur.IndicateurEntree;
    const reclamationsSalesForce$ = ctx.estClient
      ? this.reclamationV1CompteurClientService
          .getCompteurClient(ctx.codeEtablissement, +ctx.identifiantPersonne)
          .pipe(catchError((err) => of(err)))
      : this.reclamationV1CompteurClientService
          .getCompteurClient(ctx.codeEtablissement, +ctx.identifiantPersonne)
          .pipe(catchError((err) => of(err)));

    const indicateurRisque$ = ctx.estClient
      ? this.surveillancerisqueV2IndicateurService.getIndicateur(indicEntree).pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurDonneeDossierPartageAlert$ = ctx.identifiantPersonne
      ? this.alertDossierPartage
          .getAlertDossierAttenteValid(ctx.codeEtablissement, ctx.identifiantPersonne)
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const banqueJudiciaire$ = ctx.estClient
      ? this.tierscorporateV1BanqueJudiciaireService
          .getBanqueJudiciaire(+ctx.identifiantPersonne)
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurScoringProspect$ = ctx.estProspect
      ? this.tierscorporateservicV1ScoringProspectService
          .getScoringProspect(ctx.codeEtablissement, Number(ctx.identifiantPersonne), 'E')
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurPotentielProspect$ = ctx.estProspect
      ? this.tierscorporateV1PotentielProspectService
          .getPotentielProspect(ctx.codeEtablissement, Number(ctx.identifiantPersonne))
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    const indicateurRisqueAlerte$ = this.risqueAlertesRest.getInfosRisqueAlerte(
      ctx.codeEtablissement,
      ctx.identifiantPersonne
    );

    const listeEntitesRPM$ = ctx.identifiantPersonne
      ? this.entitetitulaireService
          .getRecherche(ctx.codeEtablissement, Number(ctx.identifiantPersonne), '1')
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    return forkJoin([
      indicateurRisqueAlerte$,
      indicateurRisque$,
      banqueJudiciaire$,
      indicateurScoringProspect$,
      indicateurPotentielProspect$,
      indicateurDonneeDossierPartageAlert$,
      listeEntitesRPM$,
      reclamationsSalesForce$,
      demandesMyFlow$
    ]).pipe(
      map(
        ([
          dataRisque,
          dataSurvRisqueIndic,
          dataBanqueJudiciaire,
          dataScoringProspect,
          dataPotentielProspect,
          dataDossierPartage,
          listeEntitesRPM,
          dataReclamationSalesForce,
          compteurMyFlow
        ]) => {
          const reponse = {} as model.IIndicateursEtAlertes;
          reponse.dataIndicateurs = {
            dataGCEDOC: undefined,
            indicateurAlerteClient: undefined,
            messages: []
          } as model.IIndicateurs;
          reponse.dataAlertes = {
            indicateurAlerteClient: undefined,
            dataOffreEnInstance: undefined,
            messages: []
          } as model.IAlertes;
          if (
            compteurMyFlow?.name === 'HttpErrorResponse' ||
            compteurMyFlow?.codeLibelle === 'SendRequest' ||
            compteurMyFlow?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              compteurMyFlow,
              'Service compteur des demandes MyFlow momentanément indisponible'
            );
          }
          if (
            dataSurvRisqueIndic?.name === 'HttpErrorResponse' ||
            dataSurvRisqueIndic?.codeLibelle === 'SendRequest' ||
            dataSurvRisqueIndic?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataSurvRisqueIndic,
              'Service surveillance risque momentanément indisponible'
            );
            reponse.dataIndicateurs.messages.push({
              messageLib: tmp
            } as model.IMessage);
          }
          if (
            dataBanqueJudiciaire?.name === 'HttpErrorResponse' ||
            dataBanqueJudiciaire?.codeLibelle === 'SendRequest' ||
            dataBanqueJudiciaire?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataBanqueJudiciaire,
              'Service banque judiciaire momentanément indisponible'
            );
            reponse.dataIndicateurs.messages.push({
              messageLib: tmp
            } as model.IMessage);
          }
          if (
            dataDossierPartage?.name === 'HttpErrorResponse' ||
            dataDossierPartage?.codeLibelle === 'SendRequest' ||
            dataDossierPartage?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataDossierPartage,
              'Service dossier de partage momentanément indisponible'
            );
            reponse.dataAlertes.messages.push({
              messageLib: tmp
            } as model.IMessage);
          }
          if (
            dataReclamationSalesForce?.name === 'HttpErrorResponse' ||
            dataReclamationSalesForce?.codeLibelle === 'SendRequest' ||
            dataReclamationSalesForce?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataReclamationSalesForce,
              'Service reclamations SalesForce momentanément indisponible'
            );
            reponse.dataIndicateurs.messages.push({
              messageLib: tmp
            } as model.IMessage);
          }
          if (ctx.estClient || ctx.estClient === undefined || ctx.estProspect) {
            reponse.dataIndicateurs.indicateurAlerteClient = this.infoIndicateurRestToApp(
              dataRisque,
              ctx.estPersonnePhysique,
              ctx.estProspect,
              ctx.estClient
            );
          } else {
            reponse.dataIndicateurs.indicateurAlerteClient = this.infoIndicateurRestToApp(
              undefined,
              ctx.estPersonnePhysique,
              ctx.estProspect,
              ctx.estClient
            );
          }
          reponse.dataIndicateurs.dataGCEDOC = this.indicateursRestToGCEDOC(dataRisque);
          reponse.dataIndicateurs.dataPNB = this.getDataPNB(dataRisque);
          reponse.dataIndicateurs.estTopActif = this.getEstTopActif(dataRisque);
          reponse.dataIndicateurs.dataTarification = this.getDataTarification(dataRisque);
          reponse.dataAlertes.indicateurAlerteClient = this.infosAlerteRestToApp(
            dataRisque,
            ctx.estPersonnePhysique,
            dataDossierPartage,
            dataReclamationSalesForce
          );
          reponse.dataAlertes.dataRPM = this.infoEntitesRPMToApp(listeEntitesRPM);
          reponse.dataAlertes.dataOffreEnInstance = this.getOffreEnInstanceRestToApp(
            ctx.codeEtablissement,
            dataRisque?.offreEnInstance,
            ctx.identifiantPersonne
          );
          const indicDmdeMyFlow = this.getIndicMyFlow(compteurMyFlow);
          if (indicDmdeMyFlow) {
            reponse.dataIndicateurs.indicateurAlerteClient.push(indicDmdeMyFlow);
          }
          const indicBanqueJud = this.getIndicBanqueJudiciaire(dataBanqueJudiciaire);
          if (indicBanqueJud) {
            reponse.dataIndicateurs.indicateurAlerteClient.push(indicBanqueJud);
          }
          const indicBadLoans = this.getIndicBadLoans(dataSurvRisqueIndic);
          if (indicBadLoans) {
            reponse.dataIndicateurs.indicateurAlerteClient.push(indicBadLoans);
            reponse.dataIndicateurs.dataBadLoans = this.getDatasBadLoans(dataSurvRisqueIndic);
          }
          if (this.getHasTopLF(dataRisque?.leverageFinance)) {
            reponse.dataIndicateurs.dataTopLF = this.getDatasTopLF(dataRisque?.leverageFinance);
          }
          if (
            dataScoringProspect?.name === 'HttpErrorResponse' ||
            dataScoringProspect?.codeLibelle === 'SendRequest' ||
            dataScoringProspect?.name == 'TimeoutError'
          ) {
            const tmp = this.getMessageErreurHttp(
              dataScoringProspect,
              'Service scoring prospect momentanément indisponible'
            );
            reponse.dataIndicateurs.messages.push({
              messageLib: tmp
            } as model.IMessage);
          } else {
            if (dataScoringProspect) {
              const indicScoringProspect = this.getIndicScoringProspect(dataScoringProspect);
              reponse.dataIndicateurs.indicateurAlerteClient =
                reponse.dataIndicateurs.indicateurAlerteClient.concat(indicScoringProspect);
            }
          }
          if (
            dataPotentielProspect?.name === 'HttpErrorResponse' ||
            dataPotentielProspect?.codeLibelle === 'SendRequest' ||
            dataPotentielProspect?.name == 'TimeoutError'
          ) {
            if (!this.estErreurHabilitation(dataPotentielProspect, HAB_SHPIQ1)) {
              const tmp = this.getMessageErreurHttp(
                dataPotentielProspect,
                'Service potentiel prospect momentanément indisponible'
              );
              reponse.dataIndicateurs.messages.push({
                messageLib: tmp
              } as model.IMessage);
            }
          } else {
            if (dataPotentielProspect) {
              const indicPotentielProspect = this.getIndicPotentielProspect(dataPotentielProspect);
              reponse.dataIndicateurs.indicateurAlerteClient.push(indicPotentielProspect);
            }
          }

          return reponse;
        }
      )
    );
  }

  private getIndicMyFlow(
    data: RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur
  ): model.IIndicateurAlerteClient {
    if (data?.nbDemandes > 0) {
      return {
        libelle: `Demande${data.nbDemandes === 1 ? '' : 's'} MyFlow en cours`,
        typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
        estVueClient: false,
        valeurBadge: data.nbDemandes.toString(),
        dataLancementProcessus: {
          idConfigLancement: CONFIG_MYFLOW_ID
        }
      };
    } else if (data?.nbDemandes === 0) {
      return undefined;
    } else {
      return {
        libelle: `Demandes MyFlow en cours`,
        typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
        estVueClient: false,
        valeurBadge: '?',
        dataLancementProcessus: {
          idConfigLancement: CONFIG_MYFLOW_ID
        }
      };
    }
  }

  /**
   * l'erreur est elle liée à une habilitation passé en param: oui si erreur 400 (fonctionnelle) et avec valeurs remontant l'habilitation
   * @param erreur
   * @param habilitation
   * @returns
   */
  private estErreurHabilitation(erreur: any, habilitation: string): boolean {
    console.error('estErreurHabilitation >>>>', erreur, habilitation);
    if (erreur.codeHttp !== 400) {
      return false;
    }
    if (erreur?.valeurs?.some((el) => el.libelle.indexOf(habilitation) >= 0)) {
      return true;
    } else {
      return false;
    }
  }

  private getDataTarification(
    data: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte
  ): model.IDataTarification {
    const reponse: model.IDataTarification = {
      dateDebutN: data?.tarificationN?.dateDebut
        ? formatDate(data?.tarificationN?.dateDebut, 'yyyy', this.locale)
        : null,
      dateFinN: data?.tarificationN?.dateDebut ? formatDate(data?.tarificationN?.dateFin, 'yyyy', this.locale) : null,
      montantStandardN: data ? data.tarificationN?.montantaTariferInitial / 100 : undefined,
      montantAppliqueN: data ? data.tarificationN?.montantaTariferPrix / 100 : undefined,
      montantRemiseN: data ? data.tarificationN?.montantaRemiser / 100 : undefined,
      dateDebutN1: data?.tarificationN?.dateDebut
        ? formatDate(data?.tarificationN1?.dateDebut, 'yyyy', this.locale)
        : null,
      dateFinN1: data?.tarificationN?.dateDebut ? formatDate(data?.tarificationN1?.dateFin, 'yyyy', this.locale) : null,
      montantStandardN1: data ? data.tarificationN1?.montantaTariferInitial / 100 : undefined,
      montantAppliqueN1: data ? data.tarificationN1?.montantaTariferPrix / 100 : undefined,
      montantRemiseN1: data ? data.tarificationN1?.montantaRemiser / 100 : undefined
    };
    return reponse;
  }

  private getDataPNB(data: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte): model.IDataPNB {
    const rep: model.IDataPNB = {
      dataArrete: this.getDateStrOuInconnu(data?.dateArreteCalculPNB),
      montant3112: data ? data.montantPNBPersonneCalcule3112N1 / 100 : undefined,
      montantN: data ? data.montantPNBPersonneCalcule12MN / 100 : undefined,
      montantN1: data ? data.montantPNBPersonneCalcule12MN1 / 100 : undefined,
      periodeN: undefined,
      periodeN1: undefined,
      periode3112: undefined
    };
    const dateArrete: Date = this.getDate(data?.dateArreteCalculPNB);
    if (dateArrete) {
      const dateDepN = this.getDateAddYears(dateArrete, -1);
      dateDepN.setDate(dateDepN.getDate() + 1);
      const dateDepN1 = this.getDateAddYears(dateArrete, -2);
      dateDepN1.setDate(dateDepN1.getDate() + 1);
      rep.periodeN = `du ${this.getDateStrFromDate(dateDepN)} au ${this.getDateStrFromDate(dateArrete)}`;
      rep.periodeN1 = `du ${this.getDateStrFromDate(
        dateDepN1
      )} au ${this.getDateStrFromDate(this.getDateAddYears(dateArrete, -1))}`;
      rep.periode3112 = `du 01/01/${dateArrete.getFullYear() - 1} au 31/12/${dateArrete.getFullYear() - 1}`;
    }
    return rep;
  }

  public getIndicScoringProspect(
    scoringProspect: RessourceTierscorporateservicV1ScoringProspect.ScoringProspect
  ): model.IIndicateurAlerteClient[] {
    const liste = [] as model.IIndicateurAlerteClient[];
    if (scoringProspect) {
      if (scoringProspect.scoreActivation?.length > 0) {
        liste.push({
          libelle: 'Activation',
          valeur:
            scoringProspect.scoreActivation +
            ' sur 100 (' +
            formatDate(scoringProspect.dateRafraichissementScore, formatDateAffichage, this.locale) +
            ')',
          typeDebranchement: undefined,
          estVueClient: false,
          tooltip:
            "Le score d'activation est une probabilité variant de 0% à 100% (Source: Altares). Plus le score est proche de 100%, plus la probabilité d'activation est élevée."
        } as model.IIndicateurAlerteClient);
      }
      if (scoringProspect.scoreAppetence?.length > 0) {
        liste.push({
          libelle: 'Appétence',
          valeur:
            scoringProspect.scoreAppetence +
            ' sur 100 (' +
            formatDate(scoringProspect.dateRafraichissementScore, formatDateAffichage, this.locale) +
            ')',
          typeDebranchement: undefined,
          estVueClient: false,
          tooltip:
            "Le score d'appétence est une probabilité variant de 0% à 100%. Plus le score est proche de 100%, plus le prospect est appétant pour la conquête. Il reflète le degré de ressemblance du prospect par rapport aux clients actuels."
        } as model.IIndicateurAlerteClient);
      }
      if (scoringProspect.scoreDefaillance?.length > 0) {
        liste.push({
          libelle: 'Défaillance',
          valeur:
            scoringProspect.scoreDefaillance +
            ' sur 20 (' +
            formatDate(scoringProspect.dateRafraichissementScore, formatDateAffichage, this.locale) +
            ')',
          typeDebranchement: undefined,
          estVueClient: false,
          tooltip:
            'Le score de défaillance est une probabilité de défaut variant de 1 à 20.  Plus le score est proche de 20, plus le risque de défaillance est faible (Sans lien avec la cotation Banque de France).'
        } as model.IIndicateurAlerteClient);
      }
      if (scoringProspect.referenceOrigineCreation) {
        liste.push({
          libelle: 'Origine du prospect',
          valeur: scoringProspect.referenceOrigineCreation,
          typeDebranchement: undefined,
          estVueClient: false,
          tooltip: undefined
        } as model.IIndicateurAlerteClient);
      }
    }
    return liste;
  }

  public getIndicPotentielProspect(
    data: RessourceTierscorporateV1PotentielProspect.PotentielProspect
  ): model.IIndicateurAlerteClient {
    if (data && data.rangPrioriteProspect != null) {
      return {
        libelle: 'Potentiel',
        valeur: data.rangPrioriteProspect
          ? data.rangPrioriteProspect > 1
            ? `${data.rangPrioriteProspect.toString()} étoiles`
            : `${data.rangPrioriteProspect.toString()} étoile`
          : 'NC',
        typeDebranchement: undefined,
        estVueClient: false,
        habilitation: HAB_SHPIQ1
      } as model.IIndicateurAlerteClient;
    } else {
      return undefined;
    }
  }

  public getDatasTopLF(
    leverageFinance: RessourceSynthesecorporateV1InfosRisqueAlerte.LeverageFinance
  ): model.IDataTopLF {
    const data = {} as model.IDataTopLF;
    data.rationLevierBrut = leverageFinance?.ratioLevierBrut;
    data.rationLevierNet = leverageFinance?.ratioLevierNet;
    data.dateRatio = this.getDateStrOuInconnu(leverageFinance?.dateRatio);
    return data;
  }

  public getDatasBadLoans(data: RessourceSurveillancerisqueV2Indicateur.Indicateur): model.IDataBadLoans[] {
    const reponse = [] as model.IDataBadLoans[];
    if (data && data.listeConsultationIndicateur?.length > 0) {
      data.listeConsultationIndicateur.forEach((trig) => {
        const tmp = {
          code: trig.codeIndicateur,
          libelle: trig.libelleDeclencheurSurv,
          desc: undefined,
          description: trig.descriptionDeclencheurSurv,
          dateDebutStr: trig.dateDebutValidite
            ? formatDate(trig.dateDebutValidite, formatDateAffichage, this.locale)
            : '',
          dateDebut: trig.dateDebutValidite ? new Date(trig.dateDebutValidite) : undefined
        } as model.IDataBadLoans;
        reponse.push(tmp);
      });
    }
    return reponse;
  }

  getHasTopLF(leverageFinance: RessourceSynthesecorporateV1InfosRisqueAlerte.LeverageFinance): boolean {
    return leverageFinance?.estLeverageFinance;
  }

  public getIndicBadLoans(data: RessourceSurveillancerisqueV2Indicateur.Indicateur): model.IIndicateurAlerteClient {
    if (data && data.listeConsultationIndicateur?.length > 0) {
      return {
        libelle: 'Surveillance Risque',
        estVueClient: false,
        typeDebranchement: model.enumTypeDebranchement.POPUP,
        dataPopupInfo: {
          typeComposantSpecifique: model.enumTypeComposantPopup.TRIGGERBADLOANS
        }
      } as model.IIndicateurAlerteClient;
    } else {
      return undefined;
    }
  }

  public getIndicBanqueJudiciaire(
    data: RessourceTierscorporateV1BanqueJudiciaire.BanqueJudiciaire
  ): model.IIndicateurAlerteClient {
    if (data && data.indicateurBanqueJudiciaire) {
      return {
        libelle: 'Banque judiciaire',
        estVueClient: false,
        typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
        dataLancementProcessus: {
          idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
          processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.CCGEST
        }
      } as model.IIndicateurAlerteClient;
    } else {
      return undefined;
    }
  }

  public getOffreEnInstanceRestToApp(
    codeEtablissement: string,
    offreInstance: RessourceSynthesecorporateV1InfosRisqueAlerte.OffreEnInstance,
    identifiantPersonne: string
  ): model.IOffreEnInstance[] {
    const reponse = [];
    if (offreInstance?.listeInfoEntiteTitulaire && offreInstance.listeInfoEntiteTitulaire.length > 0) {
      offreInstance.listeInfoEntiteTitulaire.forEach(
        (entite: RessourceSynthesecorporateV1InfosRisqueAlerte.InfoEntiteTitulaire) => {
          entite.listeInfoOffre.forEach((offre: RessourceSynthesecorporateV1InfosRisqueAlerte.InfoOffre) => {
            const offreTmp = {
              commentaire: offre.referenceProduitService ? 'À FINALISER' : 'OFFRE VIDE',
              compteOuContratSupport: offre.referenceProduitService,
              libelleOffre: offre.libelleOffre,
              numeroEntiteTitulaire: entite.numeroEntiteTitulaire,
              designationEntite: entite.designationBancaire,
              dataSuppressionOffre: {
                estSupprimable: offre.referenceProduitService ? false : true,
                numeroOffre: offre.numeroOffre,
                codeEtablissement: codeEtablissement,
                identifiantPersonne: identifiantPersonne
              }
            } as model.IOffreEnInstance;
            reponse.push(offreTmp);
          });
        }
      );
    }
    return reponse;
  }

  public indicateursRestToGCEDOC(
    dataRisque: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte
  ): model.IIndicateurGCEDOC {
    const indicateurAlerteGCEDOC: model.IIndicateurGCEDOC = {} as model.IIndicateurGCEDOC;
    indicateurAlerteGCEDOC.bale2 = {} as model.IBale2;
    if (dataRisque) {
      indicateurAlerteGCEDOC.bale2.dateNotation = dataRisque.dateNoteBale2;
      indicateurAlerteGCEDOC.bale2.noteBale2 = dataRisque.noteBale2;
    }
    return indicateurAlerteGCEDOC;
  }

  public infoEntitesRPMToApp(
    infoEntitesRPM: RessourceEntitetitulaireV2Recherche.RechercheEntiteTitulaire
  ): model.IDataRPM[] {
    const liste = [] as model.IDataRPM[];

    if (infoEntitesRPM?.listeEntiteTitulaire) {
      infoEntitesRPM.listeEntiteTitulaire.forEach((data) => {
        if (data && data.codePresenceDansRpmOuFds === 'R') {
          const entiteRPM = {
            identifiantEntiteTitulaire: String(data.identifiantEntiteTitulaire),
            designationEntiteTitulaire: data.designationEntiteTitulaire
          } as model.IDataRPM;
          switch (data.modeCompositionEntiteTitulaire) {
            case '1':
              entiteRPM.modeCompositionEntiteTitulaire = 'Simple';
              break;
            case '2':
              entiteRPM.modeCompositionEntiteTitulaire = 'Joint entre époux';
              break;
            case '3':
              entiteRPM.modeCompositionEntiteTitulaire = 'Joint entre tiers';
              break;
            case '4':
              entiteRPM.modeCompositionEntiteTitulaire = 'Indivision';
              break;
          }

          switch (data.codeUsageEntiteTitulaire) {
            case '1':
              entiteRPM.codeUsageEntiteTitulaire = 'Privé';
              break;
            case '2':
              entiteRPM.codeUsageEntiteTitulaire = 'Professionnel';
              break;
          }
          liste.push(entiteRPM);
        }
      });
    }
    return liste;
  }

  public infosAlerteRestToApp(
    infosRisqueAlerte: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte,
    estPersonnePhysique: boolean,
    donneeDossierPartage: RessourceSynthesecorporateV1DonneeDossierPartage.DonneeDossierPartage,
    dataReclamationSalesForce: RessourceReclamationV1CompteurClient.CompteurClient
  ): model.IIndicateurAlerteClient[] {
    const liste = [] as model.IIndicateurAlerteClient[];
    if (donneeDossierPartage && donneeDossierPartage.alertDossierAControler) {
      liste.push({
        libelle: 'Dossiers à contrôler',
        typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
        dataLancementProcessus: {
          idConfigLancement: CONFIG_LANCEMENT_CONTROL_DOCUMENT
        }
      });
    }
    if (infosRisqueAlerte) {
      if (
        infosRisqueAlerte.offreEnInstance?.listeInfoEntiteTitulaire &&
        infosRisqueAlerte.offreEnInstance.listeInfoEntiteTitulaire.length > 0
      ) {
        liste.push({
          libelle: 'Offre(s) en instance',
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            typeComposantSpecifique: model.enumTypeComposantPopup.OFFREENINSTANCE
          } as model.IDataPopupInfo
        });
      }
      if (infosRisqueAlerte.codeCouleurTopCC === 'O') {
        liste.push({
          libelle: infosRisqueAlerte.libelleCodeCouleurTopCC,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_TOPCC_ID
          },
          typeInfo: model.enumTypeInfo.WARN
        });
      }
      if (infosRisqueAlerte.codeCouleurTopCC === 'R') {
        liste.push({
          libelle: infosRisqueAlerte.libelleCodeCouleurTopCC,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_TOPCC_ID
          },
          typeInfo: model.enumTypeInfo.KO
        });
      }
      /* MIF */
      const alerteMif = this.getMif(infosRisqueAlerte.mif, estPersonnePhysique, true);
      if (alerteMif) {
        liste.push(alerteMif);
      }
      /* LEI EPIMOB-2612 */
      const dateValiditeLei = new Date(Date.parse(infosRisqueAlerte.dateFinValiditeLEI));
      const alerteLei = this.getLEi(infosRisqueAlerte.identifiantLEI, dateValiditeLei, estPersonnePhysique, true);
      if (alerteLei) {
        liste.push(alerteLei);
      }
      if (infosRisqueAlerte.codePhaseRecouvrement === 'C') {
        liste.push({
          libelle: infosRisqueAlerte.soldeActualise ? 'Total contentieux' : 'Contentieux',
          valeur: infosRisqueAlerte.soldeActualise
            ? this.currencyPipe.transform(infosRisqueAlerte.soldeActualise / 100, '€', 'symbol')
            : '',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_VARIO_ID
          },
          estVueClient: false,
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN
        });
      }
      if (infosRisqueAlerte.codePhaseRecouvrement === 'A') {
        liste.push({
          libelle: infosRisqueAlerte.soldeActualise ? 'Total recouvrement amiable' : 'Recouvrement amiable',
          valeur: infosRisqueAlerte.soldeActualise
            ? this.currencyPipe.transform(infosRisqueAlerte.soldeActualise / 100, '€', 'symbol')
            : '',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_VARIO_ID
          },
          estVueClient: false,
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN
        });
      }
      /* Réclamations Aquarel */
      if (infosRisqueAlerte.indicateurAlerteReclamation === '1') {
        liste.push({
          libelle: 'Réclamations Aquarel',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_RECLAMATION_ID
          },
          estVueClient: false
        });
      }
      /* Réclamations Salesforce */
      if (dataReclamationSalesForce && dataReclamationSalesForce.nombreReclamation) {
        liste.push({
          libelle: `Réclamation${dataReclamationSalesForce.nombreReclamation > 1 ? 's' : ''} en cours`,
          valeurBadge: dataReclamationSalesForce.nombreReclamation.toString(),
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID
          },
          estVueClient: false
        });
      }

      if (
        infosRisqueAlerte.codePresenceCompteDesherence === '1' ||
        infosRisqueAlerte.codePresenceCompteDesherence === '2'
      ) {
        liste.push({
          libelle: 'Loi Eckert',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_ECKERT_ID
          },
          estVueClient: false
        });
      }
      if (infosRisqueAlerte.codeTypeRetourPTT && infosRisqueAlerte.codeTypeRetourPTT !== 'R') {
        liste.push({
          libelle: 'PND',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          estPersonnePhysique: estPersonnePhysique,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.CC
          },
          estVueClient: false
        });
      }
      if (infosRisqueAlerte.saisieATD && infosRisqueAlerte.saisieATD.toUpperCase() === 'OUI') {
        liste.push({
          libelle: 'Saisies SATD',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_ACTE_SAISIE_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.ATD
          }
        });
      }
      if (
        (infosRisqueAlerte.indicateurWatchListLocale === 'O' && infosRisqueAlerte.codeNiveauWatchListLocale !== '1') ||
        infosRisqueAlerte.indicateurWatchListNational === 'O' ||
        infosRisqueAlerte.indicateurWatchListBanqueRef === 'O'
      ) {
        liste.push({
          libelle: 'WATCHLIST',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_DSC_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.WATCHLIST
          }
        });
      }
      if (infosRisqueAlerte.indicateurWatchListLocale === 'O' && infosRisqueAlerte.codeNiveauWatchListLocale === '1') {
        liste.push({
          libelle: 'Vigilance établissement',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_DSC_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.WATCHLIST
          }
        });
      }
      if (
        infosRisqueAlerte.indicateurOppoInterditBancaire &&
        infosRisqueAlerte.indicateurOppoInterditBancaire === 'O'
      ) {
        liste.push({
          libelle: 'Interdit bancaire',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_MYOPPO_ID
          }
        });
      }
      if (infosRisqueAlerte.indicateurPresenceGAE && infosRisqueAlerte.indicateurPresenceGAE === 'O') {
        liste.push({
          libelle: 'GAE',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_GAE_ID
          }
        });
      }
      if (infosRisqueAlerte.codePresenceDansRPMOuFDS) {
        if (infosRisqueAlerte.codePresenceDansRPMOuFDS === 'R') {
          liste.push({
            libelle: 'RPM Actif',
            valeur: null,
            typeDebranchement: model.enumTypeDebranchement.POPUP,
            dataPopupInfo: {
              typeComposantSpecifique: model.enumTypeComposantPopup.RPM
            } as model.IDataPopupInfo,
            iconType: model.enumIconType.WARNING,
            typeInfo: model.enumTypeInfo.WARN
          });
        }
      }
      if (infosRisqueAlerte.indicateurPresencePreventis && infosRisqueAlerte.indicateurPresencePreventis === 'O') {
        liste.push({
          libelle: 'PREVENTIS',
          iconType: model.enumIconType.WARNING,
          typeInfo: model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_RISQUE_CLIENT_ID
          }
        });
      }
      if (infosRisqueAlerte.nombreRejets && infosRisqueAlerte.nombreRejets > 0) {
        liste.push({
          libelle: `MAD`,
          valeurBadge: infosRisqueAlerte.nombreRejets + '',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_MAD_ID
          }
        });
      }
      if (infosRisqueAlerte.indicExistenceOppoSurContrat && infosRisqueAlerte.indicExistenceOppoSurContrat === '1') {
        liste.push({
          libelle: 'Opposition',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_MYOPPO_ID
          }
        });
      }
      if (infosRisqueAlerte.codeDegreSensibilitePersonne && infosRisqueAlerte.codeDegreSensibilitePersonne === 'T') {
        liste.push({
          libelle: this.getLibScoreVigilance(infosRisqueAlerte.codeDegreSensibilitePersonne),
          valeur: this.getValeurScoreVigilance(infosRisqueAlerte.codeDegreSensibilitePersonne),
          typeDebranchement: undefined,
          typeInfo: this.getTypeInfoScoreVigilance(infosRisqueAlerte.codeDegreSensibilitePersonne),
          estVueClient: false
        });
      }
      return liste;
    }
  }

  /**
   * Méthode de récupération des Indicateurs
   * @param infosRisqueAlerte données rest
   * @param estPersonnePhysique permets de mettre en place les d&ébranchements quelquefois spécifiques pour un EI (personne physique)
   */
  public infoIndicateurRestToApp(
    infosRisqueAlerte: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte,
    estPersonnePhysique: boolean,
    estProspect?: boolean,
    estClient?: boolean
  ): model.IIndicateurAlerteClient[] {
    const liste = [] as model.IIndicateurAlerteClient[];
    if (infosRisqueAlerte) {
      /* Tag Anticorruption */
      // if (infosRisqueAlerte.antiCorruption) {
      //   liste.push({
      //     valeur: '',
      //     libelle: `Évaluation corruption`,
      //     typeDebranchement: undefined,
      //     typeInfo: model.enumTypeInfo.WARN,
      //     estVueClient: false
      //   });
      // }
      /* O2S */
      if (infosRisqueAlerte.informationO2S && infosRisqueAlerte.informationO2S.trim()) {
        if (infosRisqueAlerte.informationO2S.trim() === 'O') {
          liste.push({
            valeur: '',
            libelle: `Devoir de conseil "O2S" préalimenté`,
            typeDebranchement: undefined,
            typeInfo: model.enumTypeInfo.OK,
            estVueClient: false
          });
        }
        if (infosRisqueAlerte.informationO2S.trim() === 'E') {
          liste.push({
            valeur: '',
            libelle: `Devoir de conseil "O2S" en cours de synchronisation`,
            typeDebranchement: undefined,
            typeInfo: model.enumTypeInfo.WARN,
            estVueClient: false
          });
        }
      }
      /* Top double relation */
      if (infosRisqueAlerte.estDoubleRelation) {
        liste.push({
          valeur: '',
          libelle: `DOUBLE RELATION`,
          typeDebranchement: undefined,
          typeInfo: model.enumTypeInfo.OK,
          estVueClient: false
        });
      }
      if (infosRisqueAlerte.libelleCodeNatLienRegl || infosRisqueAlerte.libelleTypeGroupe) {
        liste.push({
          valeur: '',
          libelle: `${this.getDataOuVide(
            infosRisqueAlerte.libelleCodeNatLienRegl
          )} - ${this.getDataOuVide(infosRisqueAlerte.libelleTypeGroupe)}`,
          typeDebranchement: undefined
        });
      }
      if (!estProspect) {
        if (infosRisqueAlerte.codeCouleurTopCC === 'V') {
          liste.push({
            valeur: '',
            libelle: infosRisqueAlerte.libelleCodeCouleurTopCC,
            typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
            dataLancementProcessus: {
              idConfigLancement: CONFIG_LANCEMENT_TOPCC_ID
            },
            typeInfo: model.enumTypeInfo.OK
          });
        }
        if (!infosRisqueAlerte.codeCouleurTopCC || infosRisqueAlerte.codeCouleurTopCC?.trim() === '') {
          liste.push({
            valeur: '',
            libelle: infosRisqueAlerte.libelleCodeCouleurTopCC,
            typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
            dataLancementProcessus: {
              idConfigLancement: CONFIG_LANCEMENT_TOPCC_ID
            }
          });
        }
      }
      /* MIF */
      const alerteMif = this.getMif(infosRisqueAlerte.mif, estPersonnePhysique, false, estProspect);
      if (alerteMif) {
        liste.push(alerteMif);
      }
      /* Questionnaire ESG */
      if (infosRisqueAlerte.questionnaireEsg) {
        const dateTemp = new Date(infosRisqueAlerte.questionnaireEsg.dateValidation);
        liste.push({
          libelle: infosRisqueAlerte.questionnaireEsg.indicateurObsolescence
            ? 'Dialogue ESG > 2 ans'
            : `Dialogue ESG : ${this.dataUtilsService.formatDateString(infosRisqueAlerte.questionnaireEsg.dateValidation)}`,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.CCCOTATION
          }
        });
      }
      if (estPersonnePhysique) {
        liste.push({
          libelle: "Opt'in SMS",
          valeur: this.getValeurOptin(infosRisqueAlerte.indicateurEnvoiSMSOuFax),
          typeInfo: this.getTypeInfoOptin(infosRisqueAlerte.indicateurEnvoiSMSOuFax),
          typeDebranchement: undefined,
          estVueClient: true
        });
        liste.push({
          libelle: "Opt'in Mail",
          valeur: this.getValeurOptin(infosRisqueAlerte.optinParCourrierElectronique),
          typeInfo: this.getTypeInfoOptin(infosRisqueAlerte.optinParCourrierElectronique),
          typeDebranchement: undefined,
          estVueClient: true
        });
      }
      if (!estProspect) {
        liste.push({
          libelle: 'Dernière révision',
          valeur:
            infosRisqueAlerte.dateDerniereMajRevAnnuel && infosRisqueAlerte.dateDerniereMajRevAnnuel !== '0001-01-01'
              ? `${formatDate(infosRisqueAlerte.dateDerniereMajRevAnnuel, formatDateAffichage, this.locale)}`
              : DATANONRENSEIGNEE,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_REVISION_ANNUELLE_ID
          },
          estVueClient: true
        });
      }
      if (infosRisqueAlerte.codeNiveauSatisfaction !== null && infosRisqueAlerte.codeNiveauSatisfaction !== undefined) {
        liste.push({
          libelle: 'Enquête de satisfaction',
          valeur: this.getValeurSatisfactionClient(infosRisqueAlerte.codeNiveauSatisfaction),
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            typeComposantSpecifique: model.enumTypeComposantPopup.SATISFACTIONCLIENT
          } as model.IDataPopupInfo,
          typeInfo: this.getTypeInfoSatisfactionClient(infosRisqueAlerte.codeNiveauSatisfaction),
          iconType: model.enumIconType.EMOJI,
          estVueClient: true
        });
      }
      // if (!estProspect) {
      //   liste.push({
      //     libelle: 'MIF',
      //     typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      //     dataLancementProcessus: {
      //       idConfigLancement: CONFIG_LANCEMENT_PARCOURS_CLIENT_ID
      //     },
      //     estVueClient: true
      //   });
      // }
      if (infosRisqueAlerte.noteBale2) {
        liste.push({
          libelle: 'Note Bâle 2',
          valeur: infosRisqueAlerte.noteBale2?.replace(/  +/g, ' '),
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_BALE2_ID
          },
          estPersonnePhysique: estPersonnePhysique,
          estVueClient: false
        });
      }
      if (infosRisqueAlerte.indicateurSocietaire === '1') {
        liste.push({
          libelle: 'Sociétaire',
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            contenu: infosRisqueAlerte.libelleCourtSLE,
            titre: 'Sociétaire',
            typeComposantSpecifique: model.enumTypeComposantPopup.TXT
          } as model.IDataPopupInfo,
          estVueClient: true
        });
      }
      /*
       LEI EPIMOB-2612
       */
      const dateValiditeLei = new Date(Date.parse(infosRisqueAlerte.dateFinValiditeLEI));
      const alerteLei = this.getLEi(
        infosRisqueAlerte.identifiantLEI,
        dateValiditeLei,
        estPersonnePhysique,
        false,
        estProspect
      );
      if (alerteLei) {
        liste.push(alerteLei);
      }
      if (
        infosRisqueAlerte.montantPNBPersonneCalcule12MN &&
        infosRisqueAlerte.montantPNBPersonneCalcule12MN !== 999999999999999
      ) {
        const typeInfoPnb = this.getInfoTypePNB(
          infosRisqueAlerte.montantPNBPersonneCalcule12MN,
          infosRisqueAlerte.montantPNBPersonneCalcule12MN1
        );
        liste.push({
          libelle: `PNB glissant au ${this.getDateStrOuInconnu(infosRisqueAlerte.dateArreteCalculPNB)}`,
          valeur: `${this.currencyPipe.transform(
            infosRisqueAlerte.montantPNBPersonneCalcule12MN / 100,
            'EUR',
            'symbol',
            '1.0-0'
          )}`,
          iconType: model.enumIconType.FLECHE,
          typeInfo: typeInfoPnb,
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            contenu: '',
            titre: '',
            typeComposantSpecifique: model.enumTypeComposantPopup.PNB
          },
          estVueClient: false,
          habilitation: HAB_SHDC26
        });
      }
      if (estClient && infosRisqueAlerte.tarificationN) {
        liste.push({
          libelle: `Facturation CCE ${formatDate(infosRisqueAlerte.tarificationN.dateDebut, 'yyyy', this.locale)} `,
          valeur: `${this.currencyPipe.transform(
            (infosRisqueAlerte.tarificationN.montantaTariferPrix - infosRisqueAlerte.tarificationN.montantaRemiser) /
              100,
            'EUR',
            'symbol',
            '1.2-2'
          )}`,
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            contenu: '',
            titre: '',
            typeComposantSpecifique: model.enumTypeComposantPopup.TARIFICATION
          },
          estVueClient: false
        });
      }
      if (infosRisqueAlerte.fibenBDF) {
        let infoFibenPrecedent: string;
        if (infosRisqueAlerte.fibenBDFPrecedent && infosRisqueAlerte.fibenBDFPrecedent != null) {
          if (
            infosRisqueAlerte.dateNotationPrecedente &&
            infosRisqueAlerte.dateNotationPrecedente != null &&
            infosRisqueAlerte.dateNotationPrecedente !== '0001-01-01'
          ) {
            infoFibenPrecedent = `${infosRisqueAlerte.fibenBDFPrecedent} le ${formatDate(
              infosRisqueAlerte.dateNotationPrecedente,
              formatDateAffichage,
              this.locale
            )}`;
          } else {
            infoFibenPrecedent = infosRisqueAlerte.fibenBDFPrecedent;
          }
        } else {
          infoFibenPrecedent = 'Aucune';
        }

        liste.push({
          libelle: 'FIBEN',
          valeur: `${infosRisqueAlerte.fibenBDF} le ${formatDate(
            infosRisqueAlerte.dateNotation,
            formatDateAffichage,
            this.locale
          )}`,
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            contenu: infoFibenPrecedent,
            titre: 'Cotation FIBEN précédente',
            typeComposantSpecifique: model.enumTypeComposantPopup.TXT
          } as model.IDataPopupInfo,
          estPersonnePhysique: estPersonnePhysique,
          estVueClient: true
        });
      }
      if (!estProspect) {
        if (infosRisqueAlerte.indicateurActivitePersonne === 'O') {
          liste.push({
            libelle: 'Client actif',
            typeInfo: model.enumTypeInfo.OK,
            typeDebranchement: undefined,
            estVueClient: false
          });
        } else if (infosRisqueAlerte.indicateurActivitePersonne === 'N') {
          liste.push({
            libelle: 'Client inactif',
            typeInfo: model.enumTypeInfo.KO,
            typeDebranchement: undefined,
            estVueClient: false
          });
        }
      }
      /* Gestion TopLF */
      if (infosRisqueAlerte.leverageFinance && infosRisqueAlerte.leverageFinance.estLeverageFinance) {
        liste.push({
          libelle: 'TOP Leverage Finance',
          typeInfo: undefined,
          typeDebranchement: model.enumTypeDebranchement.POPUP,
          dataPopupInfo: {
            contenu: '',
            titre: '',
            typeComposantSpecifique: model.enumTypeComposantPopup.TOPLF
          },
          estVueClient: false
        });
      }
      /* Mode gestion Questionnaire Pim */
      if (estClient && infosRisqueAlerte.modeGestionQpim) {
        liste.push({
          libelle: 'Mode de gestion PIM',
          valeur: infosRisqueAlerte.modeGestionQpim,
          typeInfo: undefined,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          estVueClient: false,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_QUESTIONNAIRE_PIM_ID
          }
        });
      }
    }
    return liste;
  }

  private getDataOuVide(val: string): string {
    return val ? val : '';
  }

  private getValeurOptin(val: string): string {
    switch (val) {
      case '0':
        return 'oui';
      case '1':
        return 'non';
      default:
        return DATAINCONNUE;
    }
  }

  /**
   * Récupération de l'alerte ou l'indicateur MIF
   * @param mif
   * @param estPersonnePhysique
   * @param estAlerte
   * @param estProspect
   * @returns
   */
  private getMif(
    mif: RessourceSynthesecorporateV1InfosRisqueAlerte.Mif,
    estPersonnePhysique: boolean,
    estAlerte: boolean,
    estProspect?: boolean
  ): model.IIndicateurAlerteClient {
    let rep: model.IIndicateurAlerteClient;
    // if (estPersonnePhysique) return rep;
    if (estAlerte) {
      if (mif?.codeCouleur === 'R' || mif?.codeCouleur === 'O') {
        rep = {
          libelle: mif?.libelleMessage,
          typeInfo: mif?.codeCouleur === 'R' ? model.enumTypeInfo.KO : model.enumTypeInfo.WARN,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_PARCOURS_CLIENT_ID
          }
        };
      }
    } else {
      if (!estProspect && mif && mif.libelleMessage && mif.codeCouleur !== 'R' && mif.codeCouleur !== 'O') {
        rep = {
          libelle: mif?.libelleMessage,
          typeInfo: mif?.codeCouleur === 'V' ? model.enumTypeInfo.OK : model.enumTypeInfo.EQUAL,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_PARCOURS_CLIENT_ID
          },
          estVueClient: true
        };
      }
    }
    return rep;
  }

  /**
   * Récupération de l'alerte ou l'indicateur LEI
   * @param valeur
   * @param dateFinValidite
   * @param estPersonnePhysique
   * @param estAlerte
   * @returns
   */
  private getLEi(
    valeur: string,
    dateFinValidite: Date,
    estPersonnePhysique: boolean,
    estAlerte: boolean,
    estProspect?: boolean
  ): model.IIndicateurAlerteClient {
    let rep: model.IIndicateurAlerteClient;
    const dureeMoisValiditeWarning = 3;
    const copyDateFinValidite = new Date(dateFinValidite);
    const dateWarning = new Date(
      copyDateFinValidite.setMonth(copyDateFinValidite.getMonth() - dureeMoisValiditeWarning)
    );
    if (estProspect) return rep;
    if (estAlerte) {
      if (valeur && (dateFinValidite < new Date() || dateWarning <= new Date())) {
        rep = {
          libelle: 'LEI',
          valeur:
            dateFinValidite < new Date()
              ? 'date de validité échue'
              : `fin de validité ${formatDate(dateFinValidite, formatDateAffichage, this.locale)}`,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.CC
          },
          typeInfo: dateFinValidite < new Date() ? model.enumTypeInfo.KO : model.enumTypeInfo.WARN,
          estPersonnePhysique: estPersonnePhysique,
          estVueClient: true
        };
      }
    } else {
      if (valeur && dateWarning >= new Date()) {
        rep = {
          libelle: 'LEI',
          valeur: `fin de validité ${formatDate(dateFinValidite, formatDateAffichage, this.locale)}`,
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.CC
          },
          typeInfo: model.enumTypeInfo.OK,
          estPersonnePhysique: estPersonnePhysique,
          estVueClient: true
        };
      }
      if (!valeur) {
        rep = {
          libelle: 'LEI',
          valeur: 'absent',
          typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
          dataLancementProcessus: {
            idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
            processTypeContextSpecifique: BusinessModelsUtilsUi.enumTypeContextSpecifique.CC
          },
          typeInfo: model.enumTypeInfo.EQUAL,
          estVueClient: true
        };
      }
    }
    return rep;
  }

  private getTypeInfoOptin(val: string): model.enumTypeInfo {
    switch (val) {
      case '0':
        return model.enumTypeInfo.OK;
      case '1':
        return model.enumTypeInfo.KO;
      default:
        return model.enumTypeInfo.EQUAL;
    }
  }

  private getLibScoreVigilance(niveau: string): string {
    switch (niveau) {
      case 'N':
        return 'Actualisation régulière';
      case 'S':
        return 'Actualisation fréquente';
      case 'T':
        return 'SCORE DE VIGILANCE LCB-FT';
      case 'A':
        return 'Score de vigilance';
      default:
        return DATAINCONNUE;
    }
  }

  private getValeurScoreVigilance(niveau: string): string {
    switch (niveau) {
      case 'N':
        return '';
      case 'S':
        return '';
      case 'T':
        return 'Rouge';
      case 'A':
        return 'Non scoré';
      default:
        return DATAINCONNUE;
    }
  }

  private getTypeInfoScoreVigilance(niveau: string): model.enumTypeInfo {
    switch (niveau) {
      case 'N':
        return model.enumTypeInfo.OK;
      case 'S':
        return model.enumTypeInfo.WARN;
      case 'T':
        return model.enumTypeInfo.KO;
      case 'A':
        return model.enumTypeInfo.EQUAL;
      default:
        return model.enumTypeInfo.EQUAL;
    }
  }

  private getValeurSatisfactionClient(niveau: string): string {
    switch (niveau) {
      case '1':
        return 'très satisfait';
      case '2':
        return 'assez satisfait';
      case '3':
        return 'peu satisfait';
      case '4':
        return 'pas du tout satisfait';
      case '':
        return 'sans opinion';
      default:
        return '';
    }
  }

  private getTypeInfoSatisfactionClient(niveau: string): model.enumTypeInfo {
    switch (niveau) {
      case '1':
      case '2':
        return model.enumTypeInfo.OK;
      case '3':
        return model.enumTypeInfo.WARN;
      case '4':
        return model.enumTypeInfo.KO;
      case '':
        return model.enumTypeInfo.EQUAL;
      default:
        return model.enumTypeInfo.EQUAL;
    }
  }

  private getInfoTypePNB(pnbN: number, pnbN1: number): model.enumTypeInfo {
    let reponse: model.enumTypeInfo;
    if (pnbN1) {
      if (pnbN > pnbN1) {
        reponse = model.enumTypeInfo.OK;
      } else {
        if (pnbN === pnbN1) {
          reponse = model.enumTypeInfo.EQUAL;
        } else {
          reponse = model.enumTypeInfo.KO;
        }
      }
    } else {
      reponse = model.enumTypeInfo.WARN;
    }
    return reponse;
  }

  /**
   * transformation de date string au format yyyy-mm-jj en date string au format jj/mm/yyyy
   * @param dateInput date string au format yyyy-mm-jj
   * @returns date string au format jj/mm/yyyy
   */
  getDateStrOuInconnu(dateInput: string): string {
    if (!dateInput || (dateInput.length > 4 && dateInput.substring(0, 4) === '0001')) {
      return DATAINCONNUE;
    } else {
      const dateSplit = dateInput.split('-');
      if (
        dateSplit.length !== 3 ||
        isNaN(Number(dateSplit[0])) ||
        isNaN(Number(dateSplit[1])) ||
        isNaN(Number(dateSplit[2]))
      ) {
        return DATAINCONNUE;
      } else {
        return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
      }
    }
  }

  /**
   * transformation de date string au format yyyy-mm-jj en Date
   * @param dateInput date string au format yyyy-mm-jj
   * @returns Date
   */
  getDate(dateInput: string): Date {
    if (!dateInput || (dateInput.length > 4 && dateInput.substring(0, 4) === '0001')) {
      return undefined;
    } else {
      const dateSplit = dateInput.split('-');
      if (
        dateSplit.length !== 3 ||
        isNaN(Number(dateSplit[0])) ||
        isNaN(Number(dateSplit[1])) ||
        isNaN(Number(dateSplit[2]))
      ) {
        return undefined;
      } else {
        return new Date(dateInput);
      }
    }
  }

  /**
   * Ajout d'un nombre d'années données à la date initiale
   * @param dateIn date Initiale
   * @param yearsAdd nombre d'années à ajouter à la date initiale
   * @returns
   */
  getDateAddYears(dateIn: Date, yearsAdd: number): Date {
    const dateCopy = new Date(dateIn);
    dateCopy.setFullYear(dateCopy.getFullYear() + yearsAdd);
    return dateCopy;
  }

  /**
   * transformation d'une date au format Date en date au format string jj/mm/yyyy
   * @param dateIn Date au format Date
   * @returns
   */
  getDateStrFromDate(dateIn: Date): string {
    return `${dateIn.getDate().toString().padStart(2, '0')}/${(dateIn.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${dateIn.getFullYear()}`;
  }

  supprimerEnveloppeOffre(
    referenceExterneAgent: number,
    codeEtablissement: string,
    identifiantElementStructure: number,
    codeQualiteAgent: string,
    posteRattachementAgent: number,
    numeroOffreSouscrite: number
  ): Observable<boolean> {
    const codeCloture = 'E';
    return this.offreV2EnveloppeOffreService
      .deleteEnveloppeOffre(
        referenceExterneAgent,
        codeEtablissement,
        identifiantElementStructure,
        codeQualiteAgent,
        posteRattachementAgent,
        numeroOffreSouscrite,
        codeCloture
      )
      .pipe(
        map((result) => {
          return result.dateClotureOffre ? true : false;
        }),
        catchError((err) => {
          console.error("Erreur lors de l'appel deleteEnveloppeOffre => ", err);
          return of(false);
        })
      );
  }

  private getEstTopActif(infosRisqueAlerte: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte): boolean {
    if (infosRisqueAlerte.indicateurActivitePersonne === 'O') {
      return true;
    }
    if (infosRisqueAlerte.indicateurActivitePersonne === 'N') {
      return false;
    }
    return undefined;
  }

  getMessageErreurHttp(erreur: HttpErrorResponse, message?: string): string {
    console.error(`Erreur HttpErrorResponse ==> ${message} `, erreur);
    return message ? message : `Erreur ${erreur.message}`;
  }
}
