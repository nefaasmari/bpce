
declare module $maintsmodule$ {
    var app: any;
}

declare module $maintsmodule$ {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
        initTable(): void;
    }
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
    interface IListePrestationSauvegardes {
        numDem: string;
        typePrestation: string;
        initiateurPrestation: string;
        dateSauvegardePrestation: string;
        tit: string;
        numContrat: string;
    }
    interface IDemande {
        /**
         * Code caisse
         */
        codeEtablissement: string;
        /**
         * Identifiant de la demande connue de l'application à l'origine de l'appel du service
         */
        identifiantExterneDemande: string;
        /**
         * Identifiant de la demande connue du système de gestion des demandes (MyFlow)
         */
        identifiantInterneDemande: string;
        /**
         * Code qualifiant le porteur de la demande. A pour valeurs :
         *
         * 1 : Demande Client
         * 2 : Demande non client
         * 3 : Demande Interne établissement (Collaborateur)
         */
        codeTypePorteurDemande: string;
        /**
         * Identifiant porteur de la demande si codeTypePorteurDemade = 1 (demande client) alors IdentifiantPorteur demande =
         * Identifiant Personne codeTypePorteurDemade = 3 (demande agent) alors IdentifiantPorteur Demande = Identifiant Agent
         */
        identifiantPorteurDemande: string;
        /**
         * Libellé du type de demande dans le système de gestion des motifs communautaires
         */
        libelleTypeMotifCommunautaire: string;
        /**
         * Libellé du type de demande dans le système de gestion des demandes (MyFlow)
         */
        libelleTypeMotif: string;
        /**
         * Identiifant du poste fonctionnel initiateur de la demande
         */
        idPFInitiateurDemande: string;
        /**
         * Libellé de l'initiateur de la demande
         */
        libelleInitiateurDemande: string;
        /**
         * Identifiant de l'élément de structure initiatrice de la demande (code Interne EDS)
         */
        idElementStructureInitiatrice: string;
        /**
         * Libellé de l'élément de structure initiatrice de la demande (agence, service, etc...)
         */
        liblElementStructureInitiatrice: string;
        /**
         * Numéro de contrat associé à la demande
         */
        identifiantObjet: string;
        /**
         * Code de type de contrat associé à la demande
         */
        codeTypeObjetDemande: string;
        /**
         * Date de création de la demande
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Correspond à la date à laquelle la demande a été clôturée. La valeur est "null" si la date est non renseignée.
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Correspond au statut (Créée, En cours ou Clôturée) de la demande.
         */
        statutDemande: string;
        /**
         * Correspond au formulaire associé à la demande
         */
        /**
         * Libelle provenant de la cle "LbTypePrest"  de Formulaire.ListeClesValeurs
         */
        libellePrestationFormulaire: string;
        /**
         * Date souhaite provenant de la cle "DtSouhait" de Formulaire.ListeClesValeurs
         */
        dateSouhaiteeFormulaire: string;
        /**
         * Indique si on affiche le bouton de génération du bordereau plateforme
         * Conditons : CdEtatPres === AD et IndGstPlatf === true
         */
        indicateurPrestationPlateforme: boolean;
    }
    interface IRecherche {
        demandes: Array<IDemande>;
        retour: IRetourService;
    }
    interface IRetourService {
        /**
         * Code du retour d'appel du service
         */
        code: string;
        /**
         * Message de retour d'appel du service
         */
        message: string;
    }
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module $maintsmodule$ {
    class MotDePasseService {
        constructor();
        forceDeMotDePasse(motDePasse: string): string;
    }
}

declare module $maintsmodule$ {
    function entete(): ng.IDirective;
}
