import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {ChipStatus, DialogService} from '@myway/ui';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {HabilitationMySysAgentService} from '@ptmyway-stc-v2/ngx-mysys/habilitation';
import {Observable, Subject, of} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IhmBusinessService} from '../../business/ihm/ihm-business.service';
import {LBL_LIEN_NON_DISPO} from '../../models/constantes/ihm.constantes';
import {
  CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
  CONFIG_LANCEMENT_DSC_CPAGE_WATCHLIST,
  CONFIG_LANCEMENT_DSC_ID
} from '../../models/constantes/processus.constantes';
import {BusinessModelsAlertesIndicateurs} from '../../models/models/alertes-indicateurs.model';
import {BusinessModelsUtilsUi, BusinessModelsUtilsUi as modelUi} from '../../models/models/ui-utils.model';
import {DataUtilsRisqueAlertesService} from '../../utils/data-utils.service';
import {ModaleTarificationComponent} from '../modal-tarifictaion/modale-tarification.component';
import {ModalePNBComponent} from '../modale-PNB/modale-PNB.component';
import {ModaleOffresEnInstanceComponent} from '../modale-offres-en-instance/modale-offres-en-instance.component';
import {ModaleReclamationComponent} from '../modale-reclamation/modale-reclamation.component';
import {ModaleRPMComponent} from '../modale-rpm/modale-rpm.component';
import {ModaleSatisfactionClientComponent} from '../modale-satisfaction-client/modale-satisfaction-client.component';
import {ModaleSimpleComponent} from '../modale-simple/modale-simple.component';
import {ModaleTopLFComponent} from '../modale-top-lf/modale-top-lf.component';
import {ModaleTriggerBadloansComponent} from '../modale-trigger-badloans/modale-trigger-badloans.component';

@Component({
  selector: 'clients-profcli-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  @Input() donnee: BusinessModelsAlertesIndicateurs.IIndicateurAlerteClient;
  @Input() identifiantPersonne: string;
  @Input() codeEtablissement: string;
  @Output() debranchement = new EventEmitter<boolean>();
  @Output() popUp = new EventEmitter<boolean>();

  @OCSelect('DonneesAlertesState.getContentPointAcces') pointAcces$: Observable<modelUi.IDataPointAccesState[]>;

  public enumTypeDebranchement = BusinessModelsAlertesIndicateurs.enumTypeDebranchement;
  private enumTypeContextSpecifique = modelUi.enumTypeContextSpecifique;
  public estHabilite$: Observable<Map<string, boolean>>;
  public iconFleche = BusinessModelsAlertesIndicateurs.enumIconType.FLECHE;
  private unsubscribe$ = new Subject<void>();
  dataPointAcces: modelUi.IDataPointAcces;

  constructor(
    private dataUtils: DataUtilsRisqueAlertesService,
    private modal: DialogService,
    private habilitationsAgentService: HabilitationMySysAgentService,
    private ihmBusinessService: IhmBusinessService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getHabilitation();
    this.setEtatPointLancement();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setEtatPointLancement(): void {
    const pointAccesBientot = {disabled: true, label: LBL_LIEN_NON_DISPO} as modelUi.IDataPointAcces;
    if (this.donnee.dataLancementProcessus?.idConfigLancement) {
      this.pointAcces$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
        if (data && data.length > 0) {
          const test = data.find((pointAcces) => {
            return pointAcces.id === this.donnee.dataLancementProcessus.idConfigLancement;
          })?.dataPointAcces;
          if (test) {
            this.dataPointAcces = test;
            this.changeDetectionRef.detectChanges();
          } else {
            console.error('Habilitation point entrée non trouvé ', this.donnee.libelle);
            this.dataPointAcces = pointAccesBientot;
            this.changeDetectionRef.detectChanges();
          }
        }
      });
    } else {
      this.dataPointAcces = pointAccesBientot;
      this.changeDetectionRef.detectChanges();
    }
  }

  getHabilitation(): void {
    if (!this.donnee.habilitation) {
      this.estHabilite$ = of(new Map<string, boolean>([[this.donnee.habilitation, true]]));
    } else {
      this.estHabilite$ = this.habilitationsAgentService.estHabilite({
        code: [this.donnee.habilitation],
        domaine: 'mysys'
      });
    }
  }

  getIcon(): string {
    return this.dataUtils.getIcon(this.donnee);
  }

  getIconClass(): string {
    return this.dataUtils.getIconClass(this.donnee);
  }

  getIconColor(): string {
    return this.dataUtils.getIconColor(this.donnee);
  }

  aTypeInfo(): boolean {
    return this.donnee.typeInfo !== undefined;
  }

  getStatus(): ChipStatus {
    switch (this.donnee.typeInfo) {
      case BusinessModelsAlertesIndicateurs.enumTypeInfo.OK:
        return ChipStatus.SUCCESS;
      case BusinessModelsAlertesIndicateurs.enumTypeInfo.KO:
        return ChipStatus.ERROR;
      case BusinessModelsAlertesIndicateurs.enumTypeInfo.WARN:
        return ChipStatus.WARNING;
      default:
        return undefined;
    }
  }

  debrancherConfig(): void {
    switch (this.donnee.dataLancementProcessus?.idConfigLancement) {
      case CONFIG_LANCEMENT_DSC_ID:
        switch (this.donnee.dataLancementProcessus.processTypeContextSpecifique) {
          case this.enumTypeContextSpecifique.WATCHLIST:
            this.ihmBusinessService.debrancherPointLancement(
              this.donnee.dataLancementProcessus.idConfigLancement,
              this.identifiantPersonne,
              CONFIG_LANCEMENT_DSC_CPAGE_WATCHLIST
            );
            break;
          default:
            this.ihmBusinessService.debrancherPointLancement(
              this.donnee.dataLancementProcessus.idConfigLancement,
              this.identifiantPersonne
            );
            break;
        }
        break;
      case CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID:
        {
          let codePage = this.donnee.estPersonnePhysique ? 'activitePro' : 'identification';
          if (
            this.donnee.dataLancementProcessus.processTypeContextSpecifique ===
            BusinessModelsUtilsUi.enumTypeContextSpecifique.CCGEST
          ) {
            codePage = 'informationsInternes';
          }
          if (
            this.donnee.dataLancementProcessus.processTypeContextSpecifique ===
            BusinessModelsUtilsUi.enumTypeContextSpecifique.CCCOTATION
          ) {
            codePage = 'cotation';
          }
          this.ihmBusinessService.debrancherPointLancement(
            this.donnee.dataLancementProcessus.idConfigLancement,
            this.identifiantPersonne,
            codePage
          );
        }
        break;
      default:
        this.ihmBusinessService.debrancherPointLancement(
          this.donnee.dataLancementProcessus.idConfigLancement,
          this.identifiantPersonne
        );
        break;
    }
    this.debranchement.emit(true);
  }

  public debranchemementEmit(): void {
    this.debranchement.emit(true);
  }

  public getAvecTooltip(): boolean {
    return this.donnee.tooltip && this.donnee.tooltip.length > 0;
  }

  public openModale() {
    if (this.donnee.dataPopupInfo && this.donnee.dataPopupInfo.typeComposantSpecifique !== undefined) {
      switch (this.donnee.dataPopupInfo.typeComposantSpecifique) {
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.TXT:
          this.modal
            .openStandard<ModaleSimpleComponent>(ModaleSimpleComponent, {
              closeOnClickOutside: true,
              data: {titre: this.donnee.dataPopupInfo.titre, contenu: this.donnee.dataPopupInfo.contenu}
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.SATISFACTIONCLIENT:
          this.modal
            .openStandard<ModaleSatisfactionClientComponent>(ModaleSatisfactionClientComponent, {
              closeOnClickOutside: true,
              data: {}
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.OFFREENINSTANCE:
          this.modal
            .openStandard<ModaleOffresEnInstanceComponent>(ModaleOffresEnInstanceComponent, {
              closeOnClickOutside: true,
              data: {}
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.TRIGGERBADLOANS:
          this.modal
            .openStandard<ModaleTriggerBadloansComponent>(ModaleTriggerBadloansComponent, {
              closeOnClickOutside: true,
              data: {}
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.RPM:
          this.modal
            .openStandard<ModaleRPMComponent>(ModaleRPMComponent, {
              closeOnClickOutside: true,
              data: {
                IHM: this.ihmBusinessService,
                idPersonne: this.identifiantPersonne,
                dataDisplay: this
              }
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.TOPLF:
          this.modal
            .openStandard<ModaleTopLFComponent>(ModaleTopLFComponent, {closeOnClickOutside: true, data: {}})
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.PNB:
          this.modal
            .openStandard<ModalePNBComponent>(ModalePNBComponent, {closeOnClickOutside: true, data: {}})
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.TARIFICATION:
          this.modal
            .openStandard<ModaleTarificationComponent>(ModaleTarificationComponent, {
              closeOnClickOutside: true,
              data: {}
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        case BusinessModelsAlertesIndicateurs.enumTypeComposantPopup.RECLAMATION:
          this.modal
            .openStandard<ModaleReclamationComponent>(ModaleReclamationComponent, {
              closeOnClickOutside: true,
              data: {
                valeurBadge: this.donnee.valeurBadge,
                idPersonne: this.identifiantPersonne,
                IHM: this.ihmBusinessService,
                dataDisplay: this
              }
            })
            .subscribe(() => {
              this.popUp.emit(false);
            });
          break;
        default:
      }
      this.popUp.emit(true);
    }
  }

  public getBadge(nombre: any): string {
    if (nombre === 0) {
      return '';
    } else if (nombre > 0) {
      return '';
    } else {
      return 'gellule-icon-badge-cpt-error';
    }
  }
}
