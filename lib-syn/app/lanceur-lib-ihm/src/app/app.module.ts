import {CurrencyPipe, DecimalPipe, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
  BlocAlertesEpiModule,
  DonneesAlertesEtIndicateursState,
  DonneesAlertesState,
  DonneesIndicateursDetailState,
  DonneesIndicateursState
} from '@lib-interne/bloc-alertes-epi';
import {
  BlocOpportunitesEpiModule,
  DonneesOpportunitesState,
  DonneesRevueState
} from '@lib-interne/bloc-opportunites-epi';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsModule} from '@ngxs/store';
import {OCNgxsUpgradeModule} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {DonneesDelocaliseesAgentModule} from '@ptmyway-stc-v2/ngx-mysys/donnees-delocalisees';
import {PORTAL_PROVIDERS} from '@oscaiss-pormyway-managers/portal-interface';
import {TreatmentDeclaratorModule} from '@ptmyway-stc-v2/ngx-bpce/treatment-declarator';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageTestLibComponent} from './pages/page-test-lib/page-test-lib-vue.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, PageTestLibComponent],
  imports: [
    TreatmentDeclaratorModule,
    DonneesDelocaliseesAgentModule,
    BrowserModule,
    AppRoutingModule,
    BlocOpportunitesEpiModule,
    BlocAlertesEpiModule,
    OCNgxsUpgradeModule,
    environment.envModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot(
      [
        DonneesOpportunitesState,
        DonneesRevueState,
        DonneesAlertesState,
        DonneesIndicateursState,
        DonneesAlertesEtIndicateursState,
        DonneesIndicateursDetailState
      ],
      {
        developmentMode: !environment.production,
        selectorOptions: {
          suppressErrors: false
        }
      }
    )
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}, CurrencyPipe, DecimalPipe, ...PORTAL_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
