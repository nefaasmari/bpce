export class LoadIndicateursDetail {
  constructor(
    public codeEtablissement: string,
    public identifiantPersonne: string
  ) {}
  static readonly type = '[IndicateursDetail] Load content';
}
