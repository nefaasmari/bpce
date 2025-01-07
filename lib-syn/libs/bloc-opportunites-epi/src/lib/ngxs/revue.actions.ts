export namespace RevueActions {
  export class LoadRevue {
    static readonly type = '[Revue] Load revue';
    constructor(
      public identifiantPersonne: string,
      public codeEtablissement: string
    ) {}
  }
  export class ReloadRevue {
    static readonly type = '[Revue] Reload revue';
    constructor(
      public identifiantPersonne: string,
      public codeEtablissement: string
    ) {}
  }
  export class ViderRevue {
    static readonly type = '[Revue] Vider revue';
  }
}
