import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, VERSION} from '@angular/core';
import {LoadAlertesEtIndicateurs} from '@lib-interne/bloc-alertes-epi';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    console.log('%cAngular version: ' + VERSION.major, 'font-weight: bold; font-size:20px; color: green;');
    this.store.dispatch(
      new LoadAlertesEtIndicateurs({
        codeAgent: '0005354',
        codeEtablissement: '11315',
        codeMarche: undefined,
        identifiantPersonne: '910387211',
        estClient: false,
        estPersonnePhysique: false,
        identifiantEdsAgent: 1590463,
        dataRecherchePersonne: undefined
      })
    );
  }
}
