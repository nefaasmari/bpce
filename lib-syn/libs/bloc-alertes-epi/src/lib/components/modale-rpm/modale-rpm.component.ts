import {Component, OnInit} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {DialogRef} from '@myway/ui';
import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsUtilsUi} from '../../models/models/ui-utils.model';
import {BusinessModelsAlertesIndicateurs} from '../../models/models/alertes-indicateurs.model';
import {
  CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID,
  CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID
} from '../../models/constantes/processus.constantes';

@Component({
  selector: 'clients-profcli-modale-rpm',
  templateUrl: './modale-rpm.component.html',
  styleUrls: ['./modale-rpm.component.scss']
})
export class ModaleRPMComponent implements OnInit {
  @OCSelect('DonneesAlertesState.getContentRPM') datasRPM$: Observable<BusinessModelsAlertesIndicateurs.IDataRPM[]>;
  @OCSelect('DonneesAlertesState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesAlertesState.isLoading') isLoading$: Observable<boolean>;
  @OCSelect('DonneesAlertesState.getContentPointAcces') pointAccesState$: Observable<
    BusinessModelsUtilsUi.IDataPointAccesState[]
  >;

  itemSelected: BusinessModelsAlertesIndicateurs.IDataRPM;
  public dataModal: any;
  idConfigConsultationHistorique: string = CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID;
  idConfigGestionRPM: string = CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID;
  dataPointAccesHistoriqueRPM: BusinessModelsUtilsUi.IDataPointAcces;
  dataPointAccesGestionRPM: BusinessModelsUtilsUi.IDataPointAcces;

  constructor(private dialogRef: DialogRef) {
    this.dataModal = this.dialogRef.data;
  }

  ngOnInit(): void {
    this.setEtatPointLancement();
  }
  selectItem(event) {
    this.itemSelected = event.item;
  }

  debranchementGestionRPM() {
    this.dataModal?.IHM?.debrancherPointLancement(
      this.idConfigGestionRPM,
      this.dataModal.idPersonne,
      this.itemSelected.identifiantEntiteTitulaire
    );
    this.dataModal?.dataDisplay?.debranchemementEmit();
    this.dialogRef.close();
  }

  debranchementHistoriqueRPM() {
    this.dataModal?.IHM?.debrancherPointLancement(this.idConfigConsultationHistorique, this.dataModal.idPersonne);
    this.dataModal?.dataDisplay?.debranchemementEmit();
    this.dialogRef.close();
  }

  setEtatPointLancement(): void {
    this.pointAccesState$.subscribe((data) => {
      if (data && data.length > 0) {
        let test = data.find((pointAcces) => {
          return pointAcces.id === CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID;
        })?.dataPointAcces;
        this.dataPointAccesHistoriqueRPM = test;
        test = data.find((pointAcces) => {
          return pointAcces.id === CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID;
        })?.dataPointAcces;
        this.dataPointAccesGestionRPM = test;
      }
    });
  }
}
