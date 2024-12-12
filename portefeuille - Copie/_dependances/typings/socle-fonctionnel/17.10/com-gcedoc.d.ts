
declare module myway.comGcedoc {
    var app: any;
}

/**
 * Ressource : /entitetitulaireservice/v2/intervenantEntiteTit
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v2/entitetitulaireservice/intervenantEntiteTit
 * Fichier généré le : 2017-06-07
 */
declare module myway.comGcedoc.EntiteTitulaire {
    interface IPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        identifiantEntiteTitulaire: number;
        /**
         * Défini le type de personne.
         * |code|description|
         * |---|---|
         * |P|Personne physique|
         * |M|Personne moral|
         */
        codeTypePersonne: string;
        /**
         * Rang Ancien Etat Civil
         *
         *  Valeur du rang Rôle :
         *
         * à blanc, ‘A’, ‘B’ : ‘Titulaire’
         * 'V' : ‘Rattaché simple’
         * ‘W’ : à blanc
         * 'X' : ’Conjoint’
         * 'Y' : ’Représentant légal’
         * 'Z'’ : ‘Déclarant’
         * Autres : ‘Mandataire’
         */
        rangAncienEtatCivil: string;
        /**
         * codePersonnaliteJuridique
         *
         * |code | Description |
         * |--- | --- |
         * |00 | MINEUR SOUS MESURE AIDE GESTION BUDGET FAMILIAL MAGBF|
         * |01 | MINEUR EMANCIPE|
         * |02 | MINEUR SOUS ADMINISTRATION LEGALE PURE ET SIMPLE|
         * |03 | MINEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |04 | MINEUR SS TUTELLE COMPLETE(TUTEUR+SUBROGE TUT.+ JUGE)|
         * |05 | MINEUR SOUS TUTELLE D'ETAT|
         * |06 | MINEUR SOUS ADMINISTRATION AD HOC|
         * |07 | MAJEUR CAPABLE|
         * |08 | MAJEUR SOUS SAUVEGARDE DE JUSTICE|
         * |09 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE|
         * |10 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT SPECIAL|
         * |11 | MAJEUR SOUS CURATELLE SIMPLE|
         * |12 | MAJEUR SOUS CURATELLE RENFORCEE|
         * |13 | MAJEUR SOUS TUTELLE COMPLETE|
         * |14 | MAJEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |15 | MAJEUR SOUS TUTELLE|
         * |16 | MAJEUR SS MESURE ACCOMP. SOCIAL PERSONNALISE (MASP)|
         * |17 | MAJEUR SS MESURE ACCOMP. JUDICIAIRE (MAJ)|
         * |18 | MAJEUR SS MESURE AIDE GESTION BUDGET FAMILIAL (MAGBF)|
         * |19 | MAJEUR SS MANDAT DE PROTECTION FUTURE SIMPLE|
         * |20 | MAJEUR SS MANDAT DE PROTECTION FUTURE ETENDU|
         */
        codePersonnaliteJuridique: string;
        dateFin: string;
        dateDebut: string;
        informationPersonneMoral: IInformationPersonneMoral;
        informationPersonnePhysique: IInformationPersonnePhysique;
    }
    interface IIntervenantEntiteTit {
        listPersonne: Array<IPersonne>;
    }
    interface IInformationPersonneMoral {
        raisonSocial: string;
    }
    interface IInformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
    }
}

/**
 * Ressource : /entitetitulaireservice/v2/intervenantEntiteTit
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v2/entitetitulaireservice/intervenantEntiteTit
 * Fichier généré le : 2017-06-07
 */
declare module myway.comGcedoc.EntiteTitulaire {
    class EntiteTitulaireService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getIntervenantEntiteTit(codeEtablissement: string, identifiantPersonne?: number, identifiantEntiteTitulaire?: number, codeGuichet?: string, codeTypeProduitService?: string, codeProduitService?: string, incideRechercheIdentifiantBAD?: string): ng.IPromise<IIntervenantEntiteTit>;
    }
}

declare module myway.comGcedoc.Modeles {
    interface IDonneesPaveSignature {
        libDeLaDuEts: string;
        prenomNomAgent: string;
        alaEtab1: string;
        laEtab1: string;
        parlaEtab1: string;
        desaEtab1: string;
        delaEtab1: string;
    }
    interface IDonneesPaveCertification {
        libLaLeEts: string;
    }
    interface IDonneesPaveTitulaires {
        donneesPaveInfoPP?: IDonneesPaveInfoPP;
        donneesPaveInfoPM?: IDonneesPaveInfoPM;
    }
    interface IDonneesPaveInfoPP {
        /** titre rôle */
        libCtdhli: string;
        listeInfosPers2?: IInfosPers2[];
        listeInfosPers3?: IInfosPers3[];
    }
    interface IInfosPers2 {
        lidacv2: string;
        nomPrenomClient2: string;
        lidanm2: string;
        nomUsage2: string;
        libCodirc2: string;
        dadana2: string;
        lidgilNaissance2: string;
        lidgv262: string;
        lidgna2: string;
        idnsbd2: string;
        nodatpClient2: string;
        situationFamille2: string;
    }
    interface IInfosPers3 {
        lidacv3: string;
        nomPrenomClient3: string;
        lidanm3: string;
        nomUsage3: string;
        libCodirc3: string;
        dadana3: string;
        lidgilNaissance3: string;
        lidgv263: string;
        lidgna3: string;
        idnsbd3: string;
        nodatpClient3: string;
        situationFamille3: string;
        regimeMatrimonial3: string;
    }
    interface IDonneesPaveInfoPM {
        /** titre rôle */
        libCtdhli: string;
        listeInfosPM?: IInfosPM[];
    }
    interface IInfosPM {
        lidars: string;
        dadatj: string;
        lidgv26: string;
        idnsbd: string;
        nodatp: string;
    }
}

declare module myway.comGcedoc.Modeles.Etablissement {
    /**
     * Mode de resitution du libellé
     */
    enum ModeLibelle {
        COURT = 0,
        LONG = 1,
    }
    /**
     * Article placé devant la resitution du libellé
     */
    enum Article {
        LA = 0,
        A_LA = 1,
        DE_LA = 2,
    }
}

declare module myway.comGcedoc.LibelleCaisse {
    /**
     * Article placé devant le libellé de la caisse.
     * Un article à plusieurs variantes suivant le genre du libellé (masculin, féminin, pluriel).
     */
    enum ArticleCaisse {
        DES = 0,
        LA = 1,
        SA = 2,
        A_LA = 3,
        PAR_LA = 4,
        DE_SA = 5,
        DE_LA = 6,
    }
    function isArticlePluriel(article: ArticleCaisse): boolean;
    enum Genre {
        F = 0,
        M = 1,
    }
    interface ILibelleCaisse {
        genre: Genre;
        libelleSingulier: string;
        libellePluriel: string;
    }
    interface IArticlesCaisse {
        DES: string;
        LA: string;
        SA: string;
        A_LA: string;
        PAR_LA: string;
        DE_SA: string;
        DE_LA: string;
    }
}

declare module myway.comGcedoc.LibelleCaisse {
    /**
     * Classe utilitaire pour la récupértion du libellé de la banque avec ou sans articles.
     */
    class LibelleCaisseService {
        private articlesFeminin;
        private articlesMasculin;
        private defaultLibelleCaisse;
        private exceptionsLibelleCaisse;
        constructor();
        /**
         * Retourne le libellé de la caisse : "Caisse d'Epargne" ou cas particulier (ex: Crédit Foncier).
         * Cette méthode gère les cas particuliers des caisses 12579, 13220, 13798, 30258, 42559, 43199.
         * Les articles DES, LA, SA, A_LA, PAR_LA, DE_SA, DE_LA sont gérés.
         * En présence d'article, cette méthode gère les genres : maculin, féminin, pluriel.
         * @param {string} codeEtablissement code établissement sur 5 caractères
         * @param {ArticleCaisse} article article placé devant le libellé (par défaut: undefined = sans article)
         * @param {boolean} majusculePremiereLettreArticle premère lettre de l'article en majuscule : true ou false (par défaut: false)
         */
        getLibelleCaisse(codeEtablissement: string, article?: ArticleCaisse, majusculePremiereLettreArticle?: boolean): string;
        private genererLibelle(libelleCaisse, article, isArticlePluriel, majusculePremiereLettreArticle);
    }
}

declare module myway.comGcedoc.Services {
    class ComGcedocService {
        private serviceAgentExtended;
        private $q;
        private libelleCaisseService;
        private entiteTitulaireService;
        private defaultLibelleCourtEtablissement;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, libelleCaisseService: LibelleCaisse.LibelleCaisseService, entiteTitulaireService: EntiteTitulaire.EntiteTitulaireService);
        /**
         * Récupération du libellé de l'établissement
         * @param codeEtablissement code de l'établissement sur 5 caractères
         * @param mode COURT ou LONG,
         * @param article
         */
        getLibEts(codeEtablissement: string, mode: Modeles.Etablissement.ModeLibelle, article?: Modeles.Etablissement.Article): ng.IPromise<string>;
        getDonneesPaveSignature(codeEtablissement: string): ng.IPromise<Modeles.IDonneesPaveSignature>;
        getDonneesPaveCertification(codeEtablissement: string): ng.IPromise<Modeles.IDonneesPaveCertification>;
        getDonneesPavesTitulaires(rice: string): ng.IPromise<Modeles.IDonneesPaveTitulaires[]>;
        private getListePP(listePersonne);
        private getListePM(listePersonne);
        private getDonneesPersonnesPhysiques(personnes, titreRole);
        private getDonneesPersonnesMorales(personnes, titreRole);
    }
}
