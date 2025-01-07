import {PortalModule} from '@angular/cdk/portal';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  DialogService,
  MyWayBadgeModule,
  MyWayChipButtonModule,
  MyWayDialogModule,
  MyWayErrorModule,
  MyWayLoadingSpinnerModule,
  MyWayStickerModule,
  MyWayTableModule,
  MyWayTooltipModule,
  NotificationService
} from '@myway/ui';
import {NgxsModule} from '@ngxs/store';
import {PORTAL_PROVIDERS} from '@oscaiss-pormyway-managers/portal-interface';
import {OCNgxsUpgradeModule} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {HttpAgentModule} from '@ptmyway-stc-v2/ngx-bpce/http';
import {HabilitationMySysAgentModule} from '@ptmyway-stc-v2/ngx-mysys/habilitation';
import {IhmBusinessService} from './business/ihm/ihm-business.service';
import './components/authorized-components';
import {BlocAlerteEpiComponent} from './components/bloc-alerte-epi';
import {BlocIndicateursEpiComponent} from './components/bloc-indicateurs-epi';
import {DataDisplayComponent} from './components/data-display/data-display.component';
import {DescriptionDetailSatisfactionComponent} from './components/description-detail-satisfaction/description-detail-satisfaction.component';
import {DescriptionTableauSimpleComponent} from './components/description-tableau-simple/description-tableau-simple.component';
import {ModaleTarificationComponent} from './components/modal-tarifictaion/modale-tarification.component';
import {ModalePNBComponent} from './components/modale-PNB/modale-PNB.component';
import {ModaleOffresEnInstanceComponent} from './components/modale-offres-en-instance/modale-offres-en-instance.component';
import {ModaleReclamationComponent} from './components/modale-reclamation/modale-reclamation.component';
import {ModaleRPMComponent} from './components/modale-rpm/modale-rpm.component';
import {ModaleSatisfactionClientComponent} from './components/modale-satisfaction-client/modale-satisfaction-client.component';
import {ModaleSimpleComponent} from './components/modale-simple/modale-simple.component';
import {ModaleTopLFComponent} from './components/modale-top-lf/modale-top-lf.component';
import {ModaleTriggerBadloansComponent} from './components/modale-trigger-badloans/modale-trigger-badloans.component';
import {TableItemCustomActionComponent} from './components/table-item-custom-action/table-item-custom-action.component';
import {DonneesAlertesState} from './ngxs/alertes.state';
import {DonneesAlertesEtIndicateursState} from './ngxs/alertesEtIndicateurs.state';
import {DonneesIndicateursDetailState} from './ngxs/indicateurs-details.state';
import {DonneesIndicateursState} from './ngxs/indicateurs.state';
import {VueClientPipe} from './utils/bloc-indicateurs-pm.pipe';

@NgModule({
  declarations: [
    BlocAlerteEpiComponent,
    BlocIndicateursEpiComponent,
    DataDisplayComponent,
    VueClientPipe,
    ModaleSimpleComponent,
    ModaleRPMComponent,
    ModaleSatisfactionClientComponent,
    ModaleOffresEnInstanceComponent,
    ModaleTriggerBadloansComponent,
    ModaleTopLFComponent,
    DescriptionDetailSatisfactionComponent,
    DescriptionTableauSimpleComponent,
    ModaleReclamationComponent,
    ModalePNBComponent,
    ModaleTarificationComponent,
    TableItemCustomActionComponent
  ],
  imports: [
    HttpAgentModule,
    PortalModule,
    CommonModule,
    OCNgxsUpgradeModule,
    HabilitationMySysAgentModule,
    MyWayChipButtonModule,
    MyWayTooltipModule,
    MyWayLoadingSpinnerModule,
    MyWayStickerModule,
    MyWayDialogModule,
    MyWayTableModule,
    MyWayErrorModule,
    MyWayBadgeModule,
    NgxsModule.forFeature([
      DonneesAlertesState,
      DonneesIndicateursState,
      DonneesAlertesEtIndicateursState,
      DonneesIndicateursDetailState
    ])
  ],
  exports: [BlocAlerteEpiComponent, BlocIndicateursEpiComponent, TableItemCustomActionComponent],
  providers: [CurrencyPipe, NotificationService, DialogService, IhmBusinessService, ...PORTAL_PROVIDERS]
})
export class BlocAlertesEpiModule {}
