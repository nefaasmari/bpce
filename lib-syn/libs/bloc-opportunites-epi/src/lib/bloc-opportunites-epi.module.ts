import {CommonModule, CurrencyPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MyWayActionCellModule,
  MyWayBadgeModule,
  MyWayChipButtonModule,
  MyWayDialogModule,
  MyWayErrorModule,
  MyWayLoadingSpinnerModule,
  MyWayTableModule,
  MyWayTooltipModule
} from '@myway/ui';
import {NgxsModule} from '@ngxs/store';
import {PORTAL_PROVIDERS} from '@oscaiss-pormyway-managers/portal-interface';
import {HttpAgentModule} from '@ptmyway-stc-v2/ngx-bpce/http';
import {HabilitationMySysAgentModule} from '@ptmyway-stc-v2/ngx-mysys/habilitation';
import {BlocOpportunitesEpiComponent} from './components/bloc-opportunites-epi';
import {ModaleAppetenceComponent} from './components/modale-appetence/modale-appetence.component';
import {DonneesOpportunitesState} from './ngxs/opportunites.state';
import {DonneesRevueState} from './ngxs/revue.state';

@NgModule({
  declarations: [BlocOpportunitesEpiComponent, ModaleAppetenceComponent],
  imports: [
    CommonModule,
    HttpAgentModule,
    NgxsModule.forFeature([DonneesOpportunitesState, DonneesRevueState]),
    MyWayActionCellModule,
    HabilitationMySysAgentModule,
    MyWayChipButtonModule,
    MyWayBadgeModule,
    MyWayLoadingSpinnerModule,
    MyWayTooltipModule,
    MyWayErrorModule,
    MyWayTableModule,
    MyWayDialogModule
  ],
  exports: [BlocOpportunitesEpiComponent],
  providers: [CurrencyPipe, ...PORTAL_PROVIDERS]
})
export class BlocOpportunitesEpiModule {}
