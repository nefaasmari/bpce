import {Injectable} from '@angular/core';
import {Observable, forkJoin, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IOpportunites, IOpportunitesCorporate} from '../../models/models/opportunites.model';
import {RessourceOpportunitecommercV1CompteurClient} from '../../myway-rest-it/opportunitecommercv1/models/opportunitecommercv1.compteurClient.models';
import {OpportunitecommercV1CompteurClientService} from '../../myway-rest-it/opportunitecommercv1/services/opportunitecommercv1.compteurClient.service';
import {ProductorExpertService} from '../../myway-rest-it/productorExpert/services/productorExpert.service';
import {RessourcePropositioncorpservV1OpportunitePropositi as RessPropoCorp} from '../../myway-rest-it/propositioncorpservv1/models/propositioncorpservv1.opportunitePropositi.models';
import {PropositioncorpservV1OpportunitePropositiService as PropoCorpService} from '../../myway-rest-it/propositioncorpservv1/services/propositioncorpservv1.opportunitePropositi.service';
import {RessourceSyntheseV2InformationClient} from '../../myway-rest-it/synthesev2/models/synthesev2.informationClient.models';
import {SyntheseV2InformationClientService} from '../../myway-rest-it/synthesev2/services/synthesev2.informationClient.service';

@Injectable({
  providedIn: 'root'
})
export class OpportunitesBusinessService {
  private isMigrationFocus = true;

  constructor(
    private readonly syntheseV2InformationService: SyntheseV2InformationClientService,
    private readonly propoCorpService: PropoCorpService,
    private readonly productorExpertService: ProductorExpertService,
    private readonly opportunitecommercV1CompteurClientService: OpportunitecommercV1CompteurClientService
  ) {}

  getOpportunites(codeEtablissement: string, identifiantPersonne: string): Observable<IOpportunites> {
    const compteurClient$ = this.isMigrationFocus
      ? this.opportunitecommercV1CompteurClientService
          .getCompteurClient(codeEtablissement, +identifiantPersonne, '2,3,4', 'SYNTHEPI', '2', '2,4,5')
          .pipe(catchError((err) => of(err)))
      : of(undefined);

    return forkJoin([
      this.syntheseV2InformationService.getInformationClient(
        codeEtablissement,
        Number(identifiantPersonne),
        false,
        false,
        false,
        false,
        true
      ),
      compteurClient$
    ]).pipe(
      map(([infosClient, compteurClient]) => {
        return this.opportunitesRestToApp(infosClient.opportunite, compteurClient, this.isMigrationFocus);
      })
    );
  }

  public opportunitesRestToApp(
    opportunitesRest: RessourceSyntheseV2InformationClient.IOpportunite,
    compteurClient: RessourceOpportunitecommercV1CompteurClient.CompteurClient,
    estMigree: boolean
  ): IOpportunites {
    const opportunite = {
      aOpportunites: undefined,
      aPropositionsOuDossierVente: undefined,
      commentaireOpportunite: undefined,
      estMigre: undefined,
      nombreOpportunitesClient: undefined,
      nombrePropositionsClient: undefined,
      identifiantOC: undefined,
      designationCourteClient: ''
    } as IOpportunites;
    if (opportunitesRest) {
      opportunite.aPropositionsOuDossierVente = opportunitesRest?.nombreDVetPropositionClient > 0 ? true : false;
      opportunite.commentaireOpportunite = opportunitesRest ? opportunitesRest.commentaireOpportunite : '';
      opportunite.nombrePropositionsClient = opportunitesRest?.nombreDVetPropositionClient
        ? opportunitesRest.nombreDVetPropositionClient
        : 0;
    }
    if (estMigree) {
      if (
        compteurClient &&
        (compteurClient['name'] === 'HttpErrorResponse' ||
          (compteurClient['codeHttp'] && compteurClient['codeHttp'] != 200 && compteurClient['codeHttp'] != 206))
      ) {
        console.error(compteurClient['libelle']);
      } else {
        opportunite.aOpportunites =
          compteurClient?.nombreOpportuniteClient && compteurClient?.nombreOpportuniteClient > 0 ? true : false;
        opportunite.nombreOpportunitesClient = compteurClient?.nombreOpportuniteClient
          ? compteurClient.nombreOpportuniteClient
          : 0;
        opportunite.estMigre = compteurClient?.indicateurBascule ? compteurClient.indicateurBascule : null;
        opportunite.identifiantOC = compteurClient?.identifiantOCPrincipale
          ? compteurClient.identifiantOCPrincipale
          : undefined;
        opportunite.commentaireOpportunite = compteurClient?.commentaireOpportunite
          ? compteurClient.commentaireOpportunite
          : '';
        opportunite.designationCourteClient = compteurClient?.designationCourteClient;
      }
    } else {
      opportunite.aOpportunites = opportunitesRest?.nombreOpportunitesClient > 0 ? true : false;
      opportunite.nombreOpportunitesClient = opportunitesRest?.nombreOpportunitesClient;
      opportunite.estMigre = false;
    }
    return opportunite;
  }

  getOpportunitesCorporate(
    codeEtablissement: string,
    identifiantPersonne: string,
    idAgent: number
  ): Observable<IOpportunitesCorporate> {
    const critereCumul = {
      codeEtablissement: codeEtablissement,
      codeChoix: '4' /* numPErsonne */,
      identifiantAgent: idAgent,
      identifiantPersonne: +identifiantPersonne,
      elementDeStructure: undefined,
      numeroPortefeuille: undefined,
      relationEconomique: undefined
    } as RessPropoCorp.CritereCumul;
    const oppInput = {
      listeCritereCumul: [critereCumul]
    } as RessPropoCorp.OpportuniteProposition;
    const oppCorporate$ = this.propoCorpService.postOpportuniteProposition(oppInput).pipe(catchError((err) => of(err)));
    let reponse: IOpportunitesCorporate = {
      aAffairesEnCours: undefined,
      aAppetenceProduits: undefined,
      aProduitsAProposer: undefined,
      aProjetsFinancement: undefined,
      aPropositions: undefined,
      nombreAffairesEnCours: undefined,
      nombreAppetencesProduits: undefined,
      nombreProduitsAProposer: undefined,
      nombreProjetsFinancement: undefined,
      nombrePropositions: undefined
    } as IOpportunitesCorporate;
    return oppCorporate$.pipe(
      map((result: any) => {
        if (result.name === 'HttpErrorResponse') {
          console.error(result);
        } else {
          reponse = this.opportunitesCorporateRestToApp(result);
        }
        return reponse;
      })
    );
  }

  public opportunitesCorporateRestToApp(
    opportunitesRest: RessPropoCorp.OpportuniteProposition
  ): IOpportunitesCorporate {
    const rep = {} as IOpportunitesCorporate;
    if (opportunitesRest?.listeCumul && opportunitesRest.listeCumul.length > 0) {
      const temp = opportunitesRest.listeCumul[0];
      rep.aAffairesEnCours = temp.nombreAffaire > 0;
      rep.nombreAffairesEnCours = temp.nombreAffaire;
      rep.aAppetenceProduits = temp.scoreAppetence > 0;
      rep.nombreAppetencesProduits = temp.scoreAppetence;
      rep.aProduitsAProposer = temp.sousFamillePrdAProposer > 0;
      rep.nombreProduitsAProposer = temp.sousFamillePrdAProposer;
      rep.aPropositions = temp.propositionCommerciale > 0;
      rep.nombrePropositions = temp.propositionCommerciale;
      rep.aProjetsFinancement = temp.nbOperationFinancement > 0;
      rep.nombreProjetsFinancement = temp.nbOperationFinancement;
      return rep;
    } else {
      return undefined;
    }
  }

  public getOpportunitesMonExpert(codeEtablissement: string, identifiantPersonne: string): Observable<number> {
    const bapiProducteur$ = this.productorExpertService
      .getInquiries(codeEtablissement, identifiantPersonne)
      .pipe(catchError((err) => of(err)));
    let reponse: number;
    return bapiProducteur$.pipe(
      map((result: any) => {
        if (
          result.name === 'HttpErrorResponse' ||
          (result.codeHttp && result.codeHttp != 200 && result.codeHttp != 206)
        ) {
          console.error(result);
        } else {
          reponse = this.ProductorExpertRestToApp(result);
        }
        return reponse;
      })
    );
  }

  private ProductorExpertRestToApp(input: any): number {
    let rep = 0;
    if (input.items && input.items.length > 0) {
      input.items.forEach((lead: any) => {
        if (lead.expertInquiryIdentity?.characteristics?.expertInquiryProgressStateType?.code) {
          switch (lead.expertInquiryIdentity.characteristics.expertInquiryProgressStateType.code) {
            case 'STDBY-SUPPORTED':
            case 'SUPPORTED':
            case 'PENDING-BANK-ACTION':
              rep++;
              break;
            default:
          }
        }
      });
    }
    return rep;
  }
}
