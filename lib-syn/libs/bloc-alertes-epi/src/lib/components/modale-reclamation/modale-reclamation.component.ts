import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DialogRef} from '@myway/ui';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {BusinessModelsUtilsUi} from '../../models/models/ui-utils.model';
import {
  CONFIG_LANCEMENT_RECLAMATION_ID,
  CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID
} from '../../models/constantes/processus.constantes';

@Component({
  selector: 'clients-profcli-modale-reclamation',
  templateUrl: './modale-reclamation.component.html',
  styleUrls: ['./modale-reclamation.component.scss']
})
export class ModaleReclamationComponent implements OnInit {
  public dataModal: any;
  idConfig0951: string = CONFIG_LANCEMENT_RECLAMATION_ID;
  idConfigSalesForce: string = CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID;
  dataPointAccesReclamationAquarel: BusinessModelsUtilsUi.IDataPointAcces;
  dataPointAccesSalesForce: BusinessModelsUtilsUi.IDataPointAcces;
  nbDemandesEtRecla: number;
  txtDemandeReclamation: string;

  @OCSelect('DonneesAlertesState.getContentPointAcces') pointAccesState$: Observable<
    BusinessModelsUtilsUi.IDataPointAccesState[]
  >;

  constructor(private dialogRef: DialogRef) {
    this.dataModal = this.dialogRef.data;
  }

  ngOnInit(): void {
    this.setEtatPointLancement();
    this.nbDemandesEtRecla = this.dataModal?.valeurBadge ? this.dataModal.valeurBadge.replace(/[^0-9]/g, '') : 0;
    this.txtDemandeReclamation = this.nbDemandesEtRecla
      ? this.nbDemandesEtRecla > 1
        ? `${this.nbDemandesEtRecla} demandes & réclamations en cours`
        : `1 demande ou réclamation en cours`
      : undefined;
  }

  debranchementSalesForce() {
    this.dataModal?.IHM?.debrancherPointLancement(this.idConfigSalesForce, this.dataModal.idPersonne);
    this.dataModal?.dataDisplay?.debranchemementEmit();
    this.dialogRef.close();
  }

  debranchement0951() {
    this.dataModal?.IHM?.debrancherPointLancement(this.idConfig0951, this.dataModal.idPersonne);
    this.dataModal?.dataDisplay?.debranchemementEmit();
    this.dialogRef.close();
  }

  setEtatPointLancement(): void {
    this.pointAccesState$.subscribe((data) => {
      if (data && data.length > 0) {
        let test = data.find((pointAcces) => {
          return pointAcces.id === CONFIG_LANCEMENT_RECLAMATION_ID;
        })?.dataPointAcces;
        this.dataPointAccesReclamationAquarel = test;
        test = data.find((pointAcces) => {
          return pointAcces.id === CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID;
        })?.dataPointAcces;
        this.dataPointAccesSalesForce = test;
      }
    });
  }
}
