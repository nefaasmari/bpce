import {HttpErrorResponse} from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {DialogService} from '@myway/ui';
import {Store} from '@ngxs/store';
import {PTMSentinelleAgent} from '@oscaiss-pormyway-managers/portal-interface';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {HabilitationMySysAgentService} from '@ptmyway-stc-v2/ngx-mysys/habilitation';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {OpportunitesActions} from '../../ngxs/opportunites.actions';
import {RevueActions} from '../../ngxs/revue.actions';
import {ModaleAppetenceComponent} from '../modale-appetence/modale-appetence.component';
import {IOpportunites, IOpportunitesCorporate, IOpportunitesAll} from '../../models/models/opportunites.model';
import {BusinessModelsUtilsUi, BusinessModelsUtilsUi as modelUi} from '../../models/models/ui-utils.model';
import {
  CONFIG_LANCEMENT_PROPOSITIONCOM_ID,
  CONFIG_LANCEMENT_CR_ET_OPPORTUNITES_ID,
  CONFIG_LANCEMENT_GESTION_AFFAIRES_ID,
  CONFIG_LANCEMENT_REVUE_ID,
  CONFIG_ETUD_BESOIN_FINN_ID,
  CONFIG_SUIVI_MONEXPERT_ID,
  CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
  CONFIG_FOCUS_ID
} from '../../models/constantes/processus.constantes';
import {
  LISTENER_EI_BLOC_OPPORTUNITE_BANDEAU,
  LISTENER_PM_BLOC_OPPORTUNITE_BANDEAU,
  LISTENER_EI_BLOC_OPPORTUNITE,
  LISTENER_PM_BLOC_OPPORTUNITE
} from '../../models/constantes/sentinelle.constantes';
import {IhmBusinessService} from '../../business/ihm/ihm-business.service';
import {DataUtilsService} from '../../business/data-utils/data-utils.service';
import {LBL_LIEN_NON_DISPO, LBL_LIEN_NON_HABILITE} from '../../models/constantes/ihm.constantes';

@Component({
  selector: 'clients-profcli-bloc-opportunites-epi',
  templateUrl: './bloc-opportunites-epi.component.html',
  styleUrls: ['./bloc-opportunites-epi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocOpportunitesEpiComponent implements OnInit, OnDestroy, OnChanges {
  @Input() codeEtablissement: string;
  @Input() identifiantPersonne: string;
  @Input() estBlocSynthese: boolean;
  @Input() identifiantAgent: number;
  @Input() estVueClient: boolean;
  @Output() compteur = new EventEmitter<number>();
  @Output() debranchement = new EventEmitter<boolean>();
  @Output() popUp = new EventEmitter<boolean>();

  private unsubscribe$ = new Subject<void>();
  libNoIcon = 'none';
  opportunites: IOpportunites;
  opportunitesCorp: IOpportunitesCorporate;
  dataPointAccesDossierVente: modelUi.IDataPointAcces;
  dataPointAccesPropoCom: modelUi.IDataPointAcces;
  dataPointAccesOpportunite: modelUi.IDataPointAcces;
  dataPointAccesFocus: modelUi.IDataPointAcces;
  dataPointAccesAffaires: modelUi.IDataPointAcces;
  dataPointAccesRevue: modelUi.IDataPointAcces;
  dataPointAccesProjFinancement: modelUi.IDataPointAcces;
  dataPointAccesSuiviMonExpert: modelUi.IDataPointAcces;
  dataPointAccesNonRemonte: modelUi.IDataPointAcces;
  traitementPointAccesTermine: boolean;
  compteurTest: number;
  idConfigDossierVente: string;
  idConfigPropoCom: string;
  idConfigOpportunite: string;
  idConfigAffaires: string;
  idConfigRevue: string;
  idConfigProjFinancement: string;
  idConfigSuiviMonExpert: string;
  idConfigFocus: string;
  habilitation$: Observable<Map<string, boolean>>;
  txtNonHabilite: string;
  nbDemandesMonExpert: number;
  public date = new Date().toLocaleString();
  private listenerPROEI: string;
  private listenerBDR: string;

  @OCSelect('OpportunitesState.getContent') opportunites$: Observable<IOpportunitesAll>;
  @OCSelect('OpportunitesState.getError') error$: Observable<HttpErrorResponse>;

  @OCSelect('OpportunitesState.isLoading') isLoading$: Observable<boolean>;
  @OCSelect('OpportunitesState.isMonExpertLoading') isMonExpertLoading$: Observable<boolean>;

  @OCSelect('OpportunitesState.getContentPointAcces') pointAcces$: Observable<
    BusinessModelsUtilsUi.IDataPointAccesState[]
  >;

  constructor(
    private store: Store,
    private ihmBusinessService: IhmBusinessService,
    private dataUtilsService: DataUtilsService,
    private readonly sentinelleService: PTMSentinelleAgent,
    private modal: DialogService,
    private habilitationsAgentService: HabilitationMySysAgentService
  ) {
    this.dataPointAccesNonRemonte = {disabled: true, label: LBL_LIEN_NON_DISPO};
    this.idConfigPropoCom = CONFIG_LANCEMENT_PROPOSITIONCOM_ID;
    this.idConfigDossierVente = CONFIG_LANCEMENT_DOSSIER_VENTE_ID;
    this.idConfigOpportunite = CONFIG_LANCEMENT_CR_ET_OPPORTUNITES_ID;
    this.idConfigAffaires = CONFIG_LANCEMENT_GESTION_AFFAIRES_ID;
    this.idConfigRevue = CONFIG_LANCEMENT_REVUE_ID;
    this.idConfigProjFinancement = CONFIG_ETUD_BESOIN_FINN_ID;
    this.idConfigSuiviMonExpert = CONFIG_SUIVI_MONEXPERT_ID;
    this.idConfigFocus = CONFIG_FOCUS_ID;
    this.traitementPointAccesTermine = false;
    this.txtNonHabilite = LBL_LIEN_NON_HABILITE;
    this.habilitation$ = this.habilitationsAgentService.estHabilite({
      code: ['SHDC24'],
      domaine: 'mysys'
    });
  }

  ngOnInit() {

    console.log('test opportynistés');
    
    if (!this.estBlocSynthese) {
      this.listenerPROEI = LISTENER_EI_BLOC_OPPORTUNITE_BANDEAU;
      this.listenerBDR = LISTENER_PM_BLOC_OPPORTUNITE_BANDEAU;
    } else {
      this.listenerPROEI = LISTENER_EI_BLOC_OPPORTUNITE;
      this.listenerBDR = LISTENER_PM_BLOC_OPPORTUNITE;
    }
    this.store.dispatch(
      new OpportunitesActions.LoadOpportunites(this.identifiantPersonne, this.codeEtablissement, this.identifiantAgent)
    );
    this.store.dispatch(new OpportunitesActions.LoadMonExpert(this.identifiantPersonne, this.codeEtablissement));
    this.majIhm();
    this.setEtatPointLancement();
    this.getSentinelle();
  }

  ngOnChanges(): void {
    this.emitMajCompteur();
  }

  majIhm(): void {
    this.opportunites$.pipe(takeUntil(this.unsubscribe$)).subscribe((result: IOpportunitesAll) => {
      if (result) {
        this.opportunites = result.opportunites;
        this.opportunitesCorp = result.opportunitesCorporate;
        this.nbDemandesMonExpert = result.opportunitesMonExpert;
        this.emitMajCompteur();
      } else {
        this.opportunites = undefined;
        this.opportunitesCorp = undefined;
        this.nbDemandesMonExpert = undefined;
      }
    });
  }

  emitMajCompteur(): void {
    let compteur = 0;
    if (!this.estVueClient) {
      if (this.opportunites) {
        compteur += this.opportunites.nombreOpportunitesClient + this.opportunites.nombrePropositionsClient;
      }
      if (this.opportunitesCorp) {
        compteur += this.opportunitesCorp.nombrePropositions ? this.opportunitesCorp.nombrePropositions : 0;
        compteur += this.opportunitesCorp.nombreAffairesEnCours ? this.opportunitesCorp.nombreAffairesEnCours : 0;
        compteur += this.opportunitesCorp.nombreProduitsAProposer ? this.opportunitesCorp.nombreProduitsAProposer : 0;
        compteur += this.opportunitesCorp.nombreProjetsFinancement ? this.opportunitesCorp.nombreProjetsFinancement : 0;
      }
      if (this.nbDemandesMonExpert) {
        compteur += this.nbDemandesMonExpert;
      }
    } else {
      if (this.opportunites) {
        compteur += this.opportunites.nombrePropositionsClient;
      }
      if (this.opportunitesCorp) {
        compteur += this.opportunitesCorp.nombrePropositions ? this.opportunitesCorp.nombrePropositions : 0;
      }
      if (this.nbDemandesMonExpert) {
        compteur += this.nbDemandesMonExpert;
      }
    }
    this.compteurTest = compteur;
    console.log(`%c[INFO] Emit maj compteur opportunites`, 'color: green; font-weight:bold;', compteur);
    this.compteur.emit(compteur);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getSentinelle(): void {
    const inputSentinellePm = this.dataUtilsService.getInputSentinelleDefault(
      this.listenerBDR,
      this.identifiantPersonne
    );
    this.sentinelleService
      .getRefresh(inputSentinellePm)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((refresh: boolean) => {
        this.reloadData();
      });
    const inputSentinelleEi = this.dataUtilsService.getInputSentinelleDefault(
      this.listenerPROEI,
      this.identifiantPersonne
    );
    this.sentinelleService
      .getRefresh(inputSentinelleEi)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((refresh: boolean) => {
        this.reloadData();
      });
  }

  reloadData(): void {
    this.store.dispatch(
      new OpportunitesActions.ReloadOpportunites(
        this.identifiantPersonne,
        this.codeEtablissement,
        this.identifiantAgent
      )
    );
    this.store.dispatch(new OpportunitesActions.ReloadMonExpert(this.identifiantPersonne, this.codeEtablissement));
    this.store.dispatch(new RevueActions.ViderRevue());
  }

  setEtatPointLancement(): void {
    this.pointAcces$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data) {
        this.dataPointAccesDossierVente = this.dataPointAccesNonRemonte;
        this.dataPointAccesPropoCom = this.dataPointAccesNonRemonte;
        this.dataPointAccesOpportunite = this.dataPointAccesNonRemonte;
        this.dataPointAccesFocus = this.dataPointAccesNonRemonte;
        this.dataPointAccesAffaires = this.dataPointAccesNonRemonte;
        this.dataPointAccesRevue = this.dataPointAccesNonRemonte;
        this.dataPointAccesProjFinancement = this.dataPointAccesNonRemonte;
        this.dataPointAccesSuiviMonExpert = this.dataPointAccesNonRemonte;

        if (data.length > 0) {
          let test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigDossierVente;
          })?.dataPointAcces;
          this.dataPointAccesDossierVente = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigPropoCom;
          })?.dataPointAcces;
          this.dataPointAccesPropoCom = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigOpportunite;
          })?.dataPointAcces;
          this.dataPointAccesOpportunite = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigFocus;
          })?.dataPointAcces;
          this.dataPointAccesFocus = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigAffaires;
          })?.dataPointAcces;
          this.dataPointAccesAffaires = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigRevue;
          })?.dataPointAcces;
          this.dataPointAccesRevue = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigProjFinancement;
          })?.dataPointAcces;
          this.dataPointAccesProjFinancement = test ? test : this.dataPointAccesNonRemonte;

          test = data.find((pointAcces) => {
            return pointAcces.id === this.idConfigSuiviMonExpert;
          })?.dataPointAcces;
          this.dataPointAccesSuiviMonExpert = test ? test : this.dataPointAccesNonRemonte;
        }
        this.traitementPointAccesTermine = true;
      }
    });
  }

  debrancherConfig(idConfig: string): void {
    if (idConfig) {
      this.ihmBusinessService.debrancherPointLancement(idConfig, this.identifiantPersonne);
      this.debranchement.emit(true);
    }
  }

  debrancherFocus(): void {
    this.ihmBusinessService.debrancherPointLancement(
      this.idConfigFocus,
      this.identifiantPersonne,
      this.opportunites?.identifiantOC
    );
    this.debranchement.emit(true);
  }

  getLibRightIcon(has: boolean): string {
    if (has) {
      return '';
    } else {
      return this.libNoIcon;
    }
  }

  getLeftIcon(): string {
    return this.opportunites.nombreOpportunitesClient >= 0 ? '' : 'icon-warning';
  }

  getValue(value: number) {
    if (value === undefined || value === null) {
      return '?';
    } else {
      return value;
    }
  }

  public getBadge(nombre: number): string {
    if (nombre === 0) {
      return 'gellule-icon-badge-cpt-ok';
    } else if (nombre > 0) {
      return '';
    } else {
      return 'gellule-icon-badge-cpt-error';
    }
  }

  public openModale() {
    this.modal
      .openStandard<ModaleAppetenceComponent>(ModaleAppetenceComponent, {
        closeOnClickOutside: true,
        data: {
          codeEtablissement: this.codeEtablissement,
          identifiantPersonne: this.identifiantPersonne
        }
      })
      .subscribe(() => {
        this.popUpEvt(false);
      });
    this.popUpEvt(true);
  }

  popUpEvt(event) {
    this.popUp.emit(event);
  }
  getLibAppetence(nb: number): string {
    if (nb === undefined) {
      return 'Appétences : / ';
    }
    const rep = nb > 0 ? (nb === 1 ? '1 appétence produit' : `${nb} appétences produit`) : 'Aucune appétence produit';
    return rep;
  }

  getLibProduitPropo(nb: number): string {
    if (nb === undefined) {
      return 'Produits à proposer - Revue : / ';
    }
    const rep =
      nb > 0
        ? nb === 1
          ? '1 produit à proposer - Revue'
          : `${nb} produits à proposer - Revue`
        : 'Aucun produit à proposer - Revue';
    return rep;
  }

  getLibAffaires(nb: number): string {
    if (nb === undefined) {
      return 'Affaires en cours : / ';
    }
    const rep = nb > 0 ? (nb === 1 ? '1 affaire en cours' : `${nb} affaires en cours`) : 'Aucune affaire en cours';
    return rep;
  }

  getLibPropositionsCommerciales(nb: number): string {
    if (nb === undefined) {
      return 'Propositions : / ';
    }
    const rep = nb > 0 ? 'Propositions :' : 'Aucune proposition';
    return rep;
  }

  getLibOpportunites(nb: number): string {
    if (nb === undefined) {
      return 'Opportunités à traiter ';
    }
    const rep =
      nb > 0
        ? nb === 1
          ? `${this.opportunites ? this.opportunites.designationCourteClient : '1 opportunité :'}`
          : `${nb} opportunités dont :`
        : 'Aucune opportunité à traiter';
    return rep;
  }

  getLibSubtitleOpportunites(): string {
    if (this.opportunites?.nombreOpportunitesClient === undefined) {
      return 'Une erreur technique empêche la récupération des opportunités';
    } else {
      return this.opportunites.aOpportunites ? this.opportunites.commentaireOpportunite : '';
    }
  }

  getLibDossiersVente(nb: number): string {
    if (nb === undefined) {
      return 'Dossiers de vente : / ';
    }
    const rep = nb > 0 ? 'Dossiers de vente :' : 'Aucun dossier de vente';
    return rep;
  }

  getEstAfficheSiExiste(nb: number): boolean {
    return nb !== undefined;
  }
}
