import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IRevue, IAppetencesClient, IRevueEnrichie, IRevueProduitClient} from '../../models/models/revue.model';
import {DonneesDelocaliseesService} from '../deloc/donnees-delocalisees.service';
import {RessourcePropositioncorporateV1Affaire} from '../../myway-rest-it/propositioncorporatev1/models/propositioncorporatev1.affaire.models';
import {RessourcePropositioncorporateV1Revue} from '../../myway-rest-it/propositioncorporatev1/models/propositioncorporatev1.revue.models';
import {PropositioncorporateV1AffaireService} from '../../myway-rest-it/propositioncorporatev1/services/propositioncorporatev1.affaire.service';
import {PropositioncorporateV1RevueService} from '../../myway-rest-it/propositioncorporatev1/services/propositioncorporatev1.revue.service';
import {BusinessModelsDonneesDelocalisees as delocModel} from '../../models/models/tables-delocalisees.model';
@Injectable({
  providedIn: 'root'
})
export class RevueBusinessService {
  constructor(
    private revueClientRest: PropositioncorporateV1RevueService,
    private affaireClientRest: PropositioncorporateV1AffaireService,
    private donneesdelocaliseesService: DonneesDelocaliseesService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  getDetailRevue(codeEtablissement: string, identifiantPersonne: string): Observable<IRevue> {
    return forkJoin([
      this.revueClientRest.getRevue(codeEtablissement, +identifiantPersonne),
      this.affaireClientRest
        .getAffaire(codeEtablissement, +identifiantPersonne, null, null, null, true)
        .pipe(catchError((error) => of(error))),
      this.donneesdelocaliseesService.getTableListeFamilleProduit(codeEtablissement),
      this.donneesdelocaliseesService.getTableListeSousFamilleProduit(codeEtablissement)
    ]).pipe(
      map(([data, dataAffaire, dataListeFamilleProduit, dataListeSousFamilleProduit]) => {
        if (dataAffaire.codeHttp && dataAffaire.codeHttp != 200) {
          console.error('Erreur récupération des affaires', dataAffaire);
        }
        return this.infosPropositionRevueRestToApp(
          data,
          dataAffaire,
          dataListeFamilleProduit,
          dataListeSousFamilleProduit
        );
      })
    );
  }

  /**
   * Méthode de transformation des appétences rest en appetences business affichée
   * @param data liste des appetences client
   * @returns
   */
  public infosPropositionRevueRestToApp(
    data: RessourcePropositioncorporateV1Revue.Revue,
    dataAffaire: RessourcePropositioncorporateV1Affaire.Affaire,
    dataListeFamilleProduit: delocModel.ITableListeFamilleProduit,
    dataListeSousFamilleProduit: delocModel.ITableListeSousFamilleProduit
  ): IRevue {
    const reponse = {} as IRevue;
    reponse.appetencesClient = [];
    reponse.revueProduitClient = [];

    data?.listeAppetencesProduits?.forEach((app) => {
      const tmp = {} as IAppetencesClient;
      tmp.famille = app.libelleFamilleProduit;
      tmp.libelleAppetence = app.libelleAppetence;
      if (app.codeSousFamilleProduitRevue) {
        reponse.appetencesClient.push(tmp);
      }
    });

    /* constitution d'une liste enrichie triée par code famille */
    const sortedListeRevueProduitClient = data?.listeRevueProduitClient?.sort((a, b) => {
      return a.codeFamilleProduitPtf > b.codeFamilleProduitPtf ? 1 : -1;
    });
    const revueEnrichie = [] as IRevueEnrichie[];

    sortedListeRevueProduitClient?.forEach((sortedRevue) => {
      if (!revueEnrichie.find((revue) => revue?.codeFamilleProduitPtf === sortedRevue?.codeFamilleProduitPtf)) {
        const revueEnrichieItem = {} as IRevueEnrichie;
        revueEnrichieItem.codeFamilleProduitPtf = sortedRevue.codeFamilleProduitPtf;
        revueEnrichieItem.libelleFamilleProduitPtf = this.getLibelleFamilleProduitByCode(
          dataListeFamilleProduit,
          sortedRevue.codeFamilleProduitPtf
        );

        /* à rupture code famille création d'un sous tableau */
        revueEnrichieItem.revueProduitClient = [] as IRevueProduitClient[];
        revueEnrichieItem.revueProduitClient.push({
          codeSousFamilleProduitPtf: sortedRevue.codeSousFamilleProduitPtf,
          libelleSousFamilleProduitPtf: this.getLibelleSousFamilleProduitByCode(
            dataListeSousFamilleProduit,
            sortedRevue.codeSousFamilleProduitPtf
          ),
          indicateurClientEquipe: sortedRevue.indicateurClientEquipe,
          indicateurClientAEquiper: sortedRevue.indicateurClientAEquiper,
          codeStatut: this.getCodeStatutAffaire(sortedRevue, dataAffaire),
          nombrePropositionLieeAffaire: this.getNbPropositionAffaire(sortedRevue, dataAffaire),
          indicateurClientNonInteressProd: sortedRevue.indicateurClientNonInteressProd,
          indicateurTarifARenegocier: sortedRevue.indicateurTarifARenegocier,
          tauxObjectifFlux: sortedRevue.tauxObjectifFlux,
          indicateurClientAActiver: sortedRevue.indicateurClientAActiver
        });
        revueEnrichie.push(revueEnrichieItem);
      } else {
        revueEnrichie
          .find((revue) => revue?.codeFamilleProduitPtf === sortedRevue?.codeFamilleProduitPtf)
          .revueProduitClient.push({
            codeSousFamilleProduitPtf: sortedRevue.codeSousFamilleProduitPtf,
            libelleSousFamilleProduitPtf: this.getLibelleSousFamilleProduitByCode(
              dataListeSousFamilleProduit,
              sortedRevue.codeSousFamilleProduitPtf
            ),
            indicateurClientNonInteressProd: sortedRevue.indicateurClientNonInteressProd,
            indicateurClientEquipe: sortedRevue.indicateurClientEquipe,
            indicateurClientAEquiper: sortedRevue.indicateurClientAEquiper,
            indicateurTarifARenegocier: sortedRevue.indicateurTarifARenegocier,
            codeStatut: this.getCodeStatutAffaire(sortedRevue, dataAffaire),
            nombrePropositionLieeAffaire: this.getNbPropositionAffaire(sortedRevue, dataAffaire),
            tauxObjectifFlux: sortedRevue.tauxObjectifFlux,
            indicateurClientAActiver: sortedRevue.indicateurClientAActiver
          });
      }
    });
    reponse.revueEnrichie = revueEnrichie;
    return reponse;
  }

  /* Récupération du libellé Famille à partir de la table délocalisée P61A */
  private getLibelleFamilleProduitByCode(
    listeFamilleProduit: delocModel.ITableListeFamilleProduit,
    code: string
  ): string {
    return listeFamilleProduit.donnees.find((famille: delocModel.ITableFamilleProduit) => {
      return famille.CGPIFA === code;
    }).LBPIFA;
  }

  /* Récupération du libellé Sous Famille à partir de la table délocalisée P61C */
  private getLibelleSousFamilleProduitByCode(
    listeSousFamilleProduit: delocModel.ITableListeSousFamilleProduit,
    code: string
  ): string {
    return listeSousFamilleProduit.donnees.find((sousFamille: delocModel.ITableSousFamilleProduit) => {
      return sousFamille.CGPISF === code;
    }).LBPISF;
  }

  private getCodeStatutAffaire(
    sortedRevue: RessourcePropositioncorporateV1Revue.RevueProduitClient,
    dataAffaire: RessourcePropositioncorporateV1Affaire.Affaire
  ): string {
    let codeStatut: string;
    dataAffaire?.listeAffaireBdr?.forEach((affaireItem) => {
      if (affaireItem.codeSousFamilleProduit === sortedRevue.codeSousFamilleProduitPtf) {
        codeStatut = affaireItem.codeStatut;
      }
    });
    return codeStatut;
  }

  private getNbPropositionAffaire(
    sortedRevue: RessourcePropositioncorporateV1Revue.RevueProduitClient,
    dataAffaire: RessourcePropositioncorporateV1Affaire.Affaire
  ): number {
    let nombrePropositionLieeAffaire: number;
    dataAffaire?.listeAffaireBdr?.forEach((affaireItem) => {
      if (affaireItem.codeSousFamilleProduit === sortedRevue.codeSousFamilleProduitPtf) {
        nombrePropositionLieeAffaire = affaireItem.nombrePropositionLieeAffaire;
      }
    });
    return nombrePropositionLieeAffaire;
  }
}
