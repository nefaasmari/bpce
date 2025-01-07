import {Injectable} from '@angular/core';
import {
  IParamGetDonneesDelocalisees,
  IReturnGetDonneesDelocalisees,
  DonneesDelocaliseesAgentService
} from '@ptmyway-stc-v2/ngx-mysys/donnees-delocalisees';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BusinessModelsDonneesDelocalisees as delocModel} from '../../models/models/tables-delocalisees.model';

@Injectable({
  providedIn: 'root'
})
export class DonneesDelocaliseesService {
  constructor(private donneesDelocaliseesAgentService: DonneesDelocaliseesAgentService) {}

  /* istanbul ignore next */
  getTableInfoSegmentationRelationnelleRelationEco(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.SEGMENTATION_RELAT_RELACTIONECO];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.SEGMENTATION_RELAT_RELACTIONECO);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.ISegmentationsRelRelationEco>;
      })
    );
  }

  /* istanbul ignore next */
  getTableDetailSegmentationRelationnelle(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.DETAIL_SEGMENTATION_RELATIONNELLE];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.DETAIL_SEGMENTATION_RELATIONNELLE);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.IDetailSegmentationsRel>;
      })
    );
  }

  /* istanbul ignore next */
  getTableFormesJuridiques(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.FORME_JURIDIQUE];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.FORME_JURIDIQUE);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.IJuridique>;
      })
    );
  }

  /* istanbul ignore next */
  getTableDataNaf(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.DATA_NAF];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.DATA_NAF);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.INaf>;
      })
    );
  }

  /* istanbul ignore next */
  getTableListeEtablissement(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.NOM_ETABLISSEMENT];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.NOM_ETABLISSEMENT);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.ITableListeEtablissement>;
      })
    );
  }

  /* istanbul ignore next */
  getTableSegmentRisque(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.SEGMENT_RISQUE];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.SEGMENT_RISQUE);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.ITableSegmentRisque>;
      })
    );
  }

  /* istanbul ignore next */
  getTableListeFamilleProduit(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.FAMILLE_PRODUIT];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.FAMILLE_PRODUIT);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.ITableListeFamilleProduit>;
      })
    );
  }

  /* istanbul ignore next */
  getTableListeSousFamilleProduit(codeEtablissement: string): Observable<any> {
    const param = {} as IParamGetDonneesDelocalisees;
    param.numEtablissement = codeEtablissement;
    param.objectDataNames = [delocModel.TableDelocEnum.SOUS_FAMILLE_PRODUIT];
    return this.donneesDelocaliseesAgentService.getDonneesDelocalisees(param).pipe(
      map((donneesdeloc: IReturnGetDonneesDelocalisees) => {
        const data = donneesdeloc.get(delocModel.TableDelocEnum.SOUS_FAMILLE_PRODUIT);
        return data as unknown as delocModel.IDonneeDelocalisee<delocModel.ITableListeSousFamilleProduit>;
      })
    );
  }
}
