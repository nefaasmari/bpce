
declare module Mad.Rest {
    var app: ng.IModule;
}

declare module Mad.Rest.Constantes {
    module Url {
        const URL_REST: string;
        module MouvAttenteDecision {
            const BASE: string;
            const SYNTHESE: string;
            const RECHERCHE: string;
            const CONTROLE_DELEGATION: string;
            const PRISE_DECISION: string;
            const AUDIT_TARIFICATION: string;
        }
        module AgentV2 {
            const BASE: string;
            const RECHERCHE: string;
        }
        module EntiteTitulaireV2 {
            const BASE: string;
            const INFOS_ENTITE_TITULAIRE: string;
        }
    }
    module Inject {
        const RECHERCHE_REST_SERVICE: string;
        const SYNTHESE_REST_SERVICE: string;
        const RECHERCHE_AGENT_REST_SERVICE: string;
        const INFORMATIONS_ENTITE_REST_SERVICE: string;
        const CONTROLE_DELEGATION_REST_SERVICE: string;
        const PRISE_DECISION_REST_SERVICE: string;
        const AUDIT_TARIFICATION_REST_SERVICE: string;
    }
}

declare module Mad.Rest.AgentV2.Modele.Recherche {
    interface IParametreRecherche {
        /**
         * Précise le type de recherche à effectuer.
         *
         * Valeurs : Cette méthode effectue différents types de recherche :
         * Types de recherche transverses : 01 - Par nom 02 - Par plage de noms d'agent 03 -
         * Par type de fonction 04 - Par groupe de fonctions 05 - Par matricule 06 - Par type de fonction et nom
         * 07 - Pat type de fonction et plage de noms d'agent Types de recherche propres à l'application Agenda :
         * 21 - Par agence de rattachement 22 - Par liste d'agents 23 - Par agence de rattachement et fonction
         * 24 - Par liste d'agents et fonction 25 - Par nom d'agent et fonction Types de recherche propres à l'application Habilitation
         * 41 - Par profil Type 42 - Par habilitation
         */
        typeRecherche: number;
        codeEtablissement: string;
        identifiantEDSRattachement?: number;
        codeAction?: string;
    }
    interface IRechercheAgent {
        listeAgents: Array<IAgent>;
    }
    interface IAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         *
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: string;
        /**
         * Détermine si l'agent est générique ou nominatif.
         * Exemple d'agent générique : stagiaire, dépannage, ...
         *
         * Valeurs possibles :
         * - 'O' : Agent générique
         * - 'N' : Agent nominatif
         * - ' ' : Agent générique et Agent nominatif
         */
        indicateurAgentNonNominatif: string;
        /**
         * Indique si l'agent possède le profil de façon personnalisée.
         *
         * Valeurs possibles :
         * - 'F' : ?
         * - 'P' : ?
         */
        typePersonnalisation: string;
        /**
         * Indicateur existence affectation temporaire.
         */
        indicateurAffectationTemporaire: string;
        /**
         * Indicateur non éligibilité prise RDV.
         */
        indicateurNonElligibiliteRDV: string;
    }
    interface IZoneDeTravail {
        /**
         * Code indiquant si d'autres résultats sont disponibles (cas des Qr avec pagination).
         */
        codeSuiteListe: string;
    }
}

declare module Mad.Rest.EntiteTitulaireV2.Modele.InformationsEntiteTitulaire {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne  V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *  - 1 Usage privé
         *  - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         *  - 1 mode simple
         *  - 2 mode joint entre époux
         *  - 3 mode joint entre tiers
         *  - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         *  - 0 Actif
         *  - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateMAJEntiteTitulaire: string;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         *  - ' ' Non clôturé
         *  - '1' Plus d'activité bancaire
         *  - '2' Décédé
         *  - '3' Transféré
         *  - '4' Incident
         *  - '5' Indésirable
         *  - '6' Séparé
         *  - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateClotureEntiteTitulaire: string;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         *  - 1 Mode indivision successorale
         *  - 2 Mode indivision conventionnel avec solidarité
         *  - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        /**
         * Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         * Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         * Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        /**
         * Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         *  * POUR ET MODE SIMPLE
         *  11 Désignation de la personne
         *  * POUR ET A USAGE PROFESSIONNEL
         *  21 Nom commercial
         *  22 Désignation courte de l'établissement
         *  23 Enseigne commerciale de l'établissement
         *  * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         *  PRIVE
         *  31 Mr ou Mme+nom patronymique Mr+prénom Mr
         *  32 Mr ou Mme+nom patronymique Mr+nom
         *  patronymique Mme+prénom Mme
         *  * POUR ET MODE JOINT ET USAGE PRIVE
         *  41 Désignation personne 1 ou désignation
         *  personne 2
         *  42 Désignation personne 2 ou désignation
         *  personne 1
         *
         *  99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         *  - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         *  - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         *  - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        /**
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * Valeurs :
         * PE : Lien Entité Titulaire / Personne
         * PR : Lien Entité Titulaire / Professionnel
         * LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
        /**
         * Pourcentage de Nue Propriété (valeur max 100,00 %)
         */
        pourcentageNuePropriete: number;
        /**
         * Pourcentage de pleine propriété (valeur max 100,00 %)
         */
        pourcentagePleinePropriete: number;
        /**
         * Pourcentage d'usufruit (valeur max 100,00 %)
         */
        pourcentageUsufruit: number;
        /**
         * Dénomination commerciale se rapportant à un fonds
         * de commerce exploité par une société ou assimilée
         * Nom commercial du professionnel. C'est la dénomination vis à vis de la clientèle. Elle peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         * Exemples :  La Samaritaine, But ...
         */
        nomCommercialProfessionnel: string;
        /**
         * Enseigne du lieu d'activité d'un professionnel.
         * Signe/marque/appellation apposé sur un établissement commercial le distinguant des autres établissements. L'enseigne peut être commune.
         * Elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         * Exemple : Café du Commerce
         */
        enseigneCommercialeLieuActivite: string;
        /**
         * Libellé court du lieu d'activité du Professionnel.
         */
        designationCourteLieuActivite: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
        /**
         * Le type de mandat permet d'enregistrer une
         * procuration qu'accorde un client sur tout
         * ou partie de ses comptes à une autre personne.
         *
         *            Valeurs :
         * 'G'        Procuration générale (sauf CDD,cpte titre,coffre)
         *            On donne procuration sur tous les comptes
         *            de la personne.
         * 'P'        Procuration générale par compte
         *            On donne procuration sur un compte
         *            en disposition
         * 'PS'       Procuration spéciale d'administration
         *            On donne le droit de gérer le compte, mais
         *            pas d'en bénéficier.
         * 'K'        Procuration spéciale porteur de carte pro
         *            On donne procuration sur les comptes support
         *            pour détention de carte
         */
        typeMandat: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.AuditTarification {
    interface IParametreGet {
        codeTypeRecherche: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeAgentConnecte: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvementMad: number;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD. 'A' : décision en attente 'F' : forçage 'R' : rejet 'T' : forcage autre RIB sans correction RIB 'S' : correction de RIB + forçage ' ' : sans décision (valeur par défaut) 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Identifiant du RIB sur lequel le mouvement du MAD a été forçé.
         */
        ribDestinationForcage: string;
    }
    interface ICompteBancaire {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys.
         * Correspond au code banque sous lequel un établissement est répertorié par la Banque de France.
         * Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        listeJourneeAudit: Array<IJourneeAudit>;
    }
    interface IAuditTarification {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        compteBancaire: ICompteBancaire;
    }
    interface IJourneeAudit {
        /**
         * Date indiquant la journée de la piste d'audit d'un compte bancaire.
         * Type date au format yyyy-MM-dd
         */
        dateJourneeAudit: string;
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Désignation d'un client bancaire détenteur de contrats de produit/service.
         */
        designationEntiteTitulaire: string;
        infoStructure: IInfoStructure;
        infoFinanciere: IInfoFinanciere;
        synthese: ISynthese;
        listeMouvementAudit: Array<IMouvementAudit>;
    }
    interface IImputation {
        /**
         * Solde disponible d'un compte bancaire recalculé après une imputation.
         */
        soldeComptableRecalcule: number;
        /**
         * Détermine si 'O' ou 'N' une imputation est tarifable.
         */
        indicateurTarification: string;
    }
    interface IInfoFinanciere {
        /**
         * Code de la devise d'un compte bancaire.
         * Exemple : 'EUR' - euros
         */
        codeDeviseCompteBancaire: string;
        /**
         * Solde disponible d'un compte bancaire en début de journée.
         * '= soldeDisponibleRecalcule (le premier de la journée)
         * '+ montantOperation (le premier de la journée)
         */
        soldeDisponibleDebutJournee: number;
        /**
         * Solde comptable d'un compte bancaire en fin de journée.
         * '= soldeMinute
         * '+ soldeActualiseApurementVario
         * '+ soldeActualiseApurementVario
         */
        soldeComptableFinJournee: number;
        /**
         * Solde disponible d'un compte bancaire en fin de journée.
         * '= soldeMinute
         * '+ soldeActualiseApurementVario
         * '+ soldeActualiseApurementVario
         * '- montantReservesEncaissement
         * '- montantMouvementsMadEcartes
         */
        soldeDisponibleFinJournee: number;
        soldeMinute: number;
        /**
         * Montant du découvert autorisé sur un compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Solde actualisé d'un plan d'apurement Vario.
         */
        soldeActualiseApurementVario: number;
        /**
         * Montant global des réserves d'encaissement.
         */
        montantReservesEncaissement: number;
        /**
         * Montant global des mouvements MAD écartés.
         */
        montantMouvementsMadEcartes: number;
    }
    interface IInfoStructure {
        /**
         * Détermine le type organisationnel de l'EDS gérant un compte bancaire.
         */
        codeTypeEdsGerePar: string;
        /**
         * Identifiant unique interne de l'EDS gérant un compte bancaire.
         */
        identifiantInterneEdsGerePar: number;
        /**
         * Identifiant unique externe de l'EDS gérant un compte bancaire.
         */
        identifiantExterneEdsGerePar: number;
        /**
         * Identifiant unique interne de l'EDS dans lequel est domicilié un compte bancaire.
         */
        identifiantInterneEdsDomicilieA: number;
        /**
         * Identifiant unique externe de l'EDS dans lequel est domicilié un compte bancaire.
         */
        identifiantExterneEdsDomicilieA: number;
    }
    interface IMouvementAudit {
        /**
         * Numéro chronologique des mouvements de la piste audit, trié par ordre décroissant.
         * - positif pour les types de mouvements I
         * - négatif pour les types de mouvements M
         * - le 0 n'est pas utilisé
         * - '-99998" utilisé pour la restitution du regroupement débit différé
         * - '-99998" utilisé pour la restitution du regroupement  débit différé
         */
        numeroSequence: number;
        /**
         * Détermine le type du pouvement de la piste d'audit.
         * 'I' : imputation
         * 'M' : mouvement MAD
         */
        codeTypeMouvementAudit: string;
        /**
         * Détermine si 'O' ou 'N' une commission d'intervention unique a été appliquée lors d'un "mouvementAudit" (Mad ou Imput) à débit différé.
         * A blanc (null) s'il ne s'agit pas d'un débit différé.
         */
        indicateurCIUniqueDebitDiffere: string;
        /**
         * Date à laquelle un mouvement au MAD a été décidé ou date à laquelle une imputation a été réalisée.
         * Type date au format yyyy-MM-dd
         */
        dateTraitementEffectif: string;
        imputation: IImputation;
        mouvementMad: IMouvementMad;
        compteTarification: ICompteTarification;
        operation: IOperation;
        listePrestation: Array<IPrestation>;
    }
    interface ICompteTarification {
        /**
         * Référence du guichet d'un compte bancaire sur lequel est appliqué une tarification.
         */
        codeGuichetCompteFacturation: string;
        /**
         * Référence d'identification d'un compte bancaire sur lequel est appliqué une tarification.
         */
        numeroCompteFacturation: string;
    }
    interface IOperation {
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Désignation de l'opération enrichi avec son montant.
         */
        libelleOperationEnrcihi: string;
        /**
         * code devise du montant de l'opération entrée au MAD.
         */
        codeDeviseMontantOperation: string;
        /**
         * Montant de l'opération entrée au MAD.
         */
        montantOperation: number;
    }
    interface IPrestation {
        indicateurTypePrestation: string;
        /**
         * numéro séquentiel d'une prestation de tarification.
         */
        numeroPrestation: number;
        /**
         * Montant théorique de la tarification.
         */
        montantTarifableTheorique: number;
        /**
         * Montant de la tarification.
         */
        montantATarifer: number;
        /**
         * Statut de la tarification. Exemples :
         * 'ENR01' : créée
         * 'TRA01' : transmise
         * 'FAC01' : facturée
         * 'FAC02' : facturée (forcé)
         * 'IMF01' : facturation imputée
         * 'IMF02' : facturation imputée (forcé)
         * 'REM01' : remisée
         * 'IMR01' : remise imputée
         * 'ANN01' : annulée (forcé)
         */
        statutTarification: string;
        /**
         * Montant réellement tarifé.
         */
        montantReellementTarife: number;
        /**
         * Date à laquelle l'imputation de la tarification a été réalisée.
         * Type date au format yyyy-MM-dd
         */
        dateImputationTarification: string;
        /**
         * Motif de l'exonération d'une tarification.
         */
        motifExoneration: string;
        /**
         * Date à laquelle une remise sur la tarification a été réalisée.
         * Type date au format yyyy-MM-dd
         */
        dateRemise: string;
        /**
         * Motif de la remise sur tarification.
         */
        motifRemise: string;
        /**
         * Montant de la remise sur tarification.
         */
        montantRemise: number;
    }
    interface ISynthese {
        /**
         * Nombre de "mouvementAudit" ayant au moins une prestation avec un montant tarifable thérique > 0.
         */
        nombreMouvementTarifable: number;
        /**
         * Nombre de "mouvementAudit" ayant au moins une prestation avec un montant réellement tarifé > 0.
         */
        nombreMouvementReellementTarife: number;
        /**
         * Somme des montants réellement tarifé des "mouvementAudit" de la journée.
         */
        montantGlobalReellementTarife: number;
        /**
         * nombreMouvementTarifable - nombreMouvementReellementTarife
         */
        nombreExoneration: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.ControleDelegation {
    interface IParametreGet {
        /** celui en cours */
        codeAgentConnecte: number;
        /** celui en cours */
        codeEtablissement: string;
        /** celui en cours */
        codeGuichet: string;
        /** celui en cours */
        codeProduit: string;
        /** celui en cours */
        identifiantEntiteTitulaire: number;
        /** mettre "1" */
        codeAppelMoteurDelegation: string;
        /** celui en cours */
        identifiantPosteFonctionnel: number;
        /** mettre 0 */
        identifiantEdsGerePar: number;
        /** entiteTitulaire.infoGeneraleEntiteTitulaire.noteBale2  */
        noteBale2: string;
        numeroCompteBancaire: string;
        /**  EntiteTitulaire / CompteBancaire / InfoFinanciereEntiteTitulaire / montantCapitauxDebiteurs */
        montantCapitauxDebiteurs: number;
        /** EntiteTitulaire / CompteBancaire / InfoFinanciereEntiteTitulaire / deviseMontantCapitauxDebiteurs */
        codeDeviseCapitauxDebiteurs?: string;
        /** mettre 0 */
        identifiantMouvement: number;
        /** mettre "F" */
        codeTypeDecision: string;
        /** non renseigné */
        codeMotifEntreeAuMad?: string;
        /** EntiteTitulaire / CompteBancaire / MouvementMad du jour / Operation / montantOperation */
        montantOperation: number;
    }
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Pays de résidence de la personne selon la norme ISO 3166-1.
         */
        codePaysResidence: string;
        /**
         * Identifie un département ou une collectivité d'outre-mer dans la nomenclature INSEE.
         * 01/96 : correspondent aux départements métropolitains
         * 2A : corse du Sud
         * 2B : haute Corse
         */
        codeDepartementResidence: string;
        /**
         * Détermine la branche d'activité du Profressionnel selon la nomenclature NAF Révision 2,2008 de l'INSEE.
         */
        codeNafInsee: string;
        /**
         * Cotation attribuée à une entreprise donnée par la Banque de France.
         * Exemples : 3, 3+, 3++, 4, 4+,...
         */
        cotationFibenEntreprise: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FCC de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFcc: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FICP de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFicp: string;
        /**
         * Indique si la personne est topée Watch List Locale (liste de surveillance).
         * 'O' : la personne est topée Watch List Locale
         * 'N' : la personne n'est pas topée Watch List Locale
         */
        indicateurWatchListLocale: string;
        /**
         * Détermine le niveau de Watch List Locale.
         * '1' : encours sain et significatif
         * '2' : risque dégradé
         * '3' : risque de défaillance
         */
        codeNiveauWatchListLocale: string;
        /**
         * Indique si la personne est topée Watch List Nationale.
         * 'O' : la personne est topée Watch List Nationale
         * 'N' : la personne n'est pas topée Watch List Nationale
         */
        indicateurWatchListNationale: string;
        /**
         * Détermine le niveau de Watch List Nationale.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListNationale: string;
        /**
         * Indique si la personne est topée Watch List Banque Référente.
         * 'O' : la personne est topée Watch List Banque Référente
         * 'N' : la personne n'est pas topée Watch List Banque Référente
         */
        indicateurWatchListBanqueRef: string;
        /**
         * Détermine le niveau de Watch List Banque Référente.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListBanqueRef: string;
        /**
         * Cotation attribuée à un dirigeant donné pour une personne morale donnée par la Banque de France.
         * '000' : pas de réserve
         * '040' : attention particulière
         * '050' : réserves
         * '060' : réserves sérieuses
         */
        cotationFibenDirigeant: string;
        /**
         * Catégorisation de la clientèle selon la segmentation de marché. Permet de déduire les segmentations risque et marché.
         * 'CC000001' : personnel Groupe
         * 'CC000002' : dirigeant de société de capitaux profession libérale
         */
        codeCategorieClient: string;
        /**
         * Ce code permet d'identifier le type de moteur de notation utilisé par l'application appelante.
         * '01' : Bâle2
         * '02' : NAFI
         * '03' : BEST
         */
        typeMoteurNotation: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        listeIncident: Array<IIncident>;
    }
    interface IControleDelegation {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: number;
        /**
         * Identifiant unique interne du poste fonctionnel en cours de travail.
         */
        identifiantPosteFonctionnel: number;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire.
         */
        identifiantEdsGerePar: number;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        listePersonne: Array<IPersonne>;
        compteBancaire: ICompteBancaire;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs. Exemple : 'EUR' - euros
         */
        codeDeviseCapitauxDebiteurs: string;
    }
    interface ICompteBancaire {
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * '0004' : CDD
         * '0008' : COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        mouvementMad: IMouvementMad;
    }
    interface IIncident {
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        codeTypeIncident: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Libellé du motif d'entrée au MAD. 'A' : à vérifier 'C' : compte soldé 'D' : domiciliation erronée 'E' : faux numéro 'F' : sans provision
         */
        codeMotifEntreeAuMad: string;
        /**
         * Montant de l'opération financière entrée au MAD.
         */
        montantOperation: number;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forcage autre RIB sans correction RIB
         * 'S' : correction de RIB + forçage
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Détermine le type d'appel au moteur de délégation.
         * '1' : demande de délégation
         * '2' : demande de délégation en mode information
         */
        codeAppelMoteurDelegation: string;
        resultatControleDelegation: IResultatControleDelegation;
    }
    interface IResultatControleDelegation {
        /**
         * Détermine,pour chaque type de fonction (Métier) ou pour chaque Agent, les éléments de délégation se référant à la
         * charte délégataire auquel il a droit.
         */
        codeNiveauDelegataireInterne: string;
        /**
         * Détermine le niveau de délégation géré sur les écrans de paramétrage (niveaux et affectations).
         */
        codeNiveauDelegataireExterne: string;
        /**
         * Libellé associé au niveau délégataire.
         */
        libelleNiveauDelegataire: string;
        /**
         * Détermine le numéro d'ordre d'affichage du niveau délégataire.
         */
        numeroOrdreAffichage: number;
        /**
         * Libellé associé au niveau délégataire requis.
         */
        libelleNiveauDelegataireRequis: string;
        /**
         * Détermine le numéro d'ordre d'affichage du niveau délégataire requis.
         */
        numeroOrdreAffichage2: number;
        /**
         * Libellé associé à la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        libelleVersionCharteDelegataire: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisExterne: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisInterne: string;
        /**
         * Détermine la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        codeCharteDelegataire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele {
    enum CodeTypeRechercheEnum {
        TOUT_HISTORIQUE = "1",
        HISTORIQUE_DU_AU = "2",
        EDS = " ",
        EDS_ATTENTE_DELEGATION = "A",
        EDS_SOUS_REGOUPEMENT = "B",
        EDS_DIRECT_REGROUPEMENT = "D",
        GUICHET = "I",
        COMPTE = "R",
        PROVENANCE = "P",
        PERIODE_ENTREE = "E",
        PERIODE_LIMITE = "L"
    }
    const enum CodeTypeDecisionEnum {
        ATTENTE = "A",
        FORCAGE = "F",
        REJET = "R",
        FORCAGE_SANS_CORRECTION_RIB = "T",
        FORCAGE_AVEC_CORRECTION_RIB = "S",
        TRANSFERT_MAD_SIEGE = "H",
        SANS_DECISION = ""
    }
    enum IndicateurEnum {
        OUI = "O",
        NON = "N"
    }
    /**
     * ' ' : non recyclable
     * 'E' : en cours de recyclage
     * 'R' : recyclé en batch
     * 'T' : recyclé manuellement
     * 'A' : annulation d'un mouvement recyclé
     */
    enum CodeEtatRecyclageEnum {
        NON_RECYCLABLE = "",
        EN_COURS = "E",
        RECYCLAGE_BATCH = "R",
        RECYCLAGE_MANUEL = "T",
        ANNULATION_RECYCLAGE = "A"
    }
    /**
     * utilisé par IForcageAutomatique.codeTypeOperation
     * '001' : virement
     * '005' : prélèvement
     * '007' : DAB
     * '010' : débit TIP
     * '012' : retrait carte bancaire
     * '018' : LCR
     * 'CHQ' : chèque
     */
    enum CodeTypeOperationEnum {
        VIREMENT = "001",
        PRELEVEMENT = "005",
        DAB = "007",
        DEBIT_TIP = "010",
        RETRAIT_CB = "012",
        LCR = "018",
        CHEQUE = "CHQ"
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.PriseDecision {
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Pays de résidence de la personne selon la norme ISO 3166-1.
         */
        codePaysResidence: string;
        /**
         * Identifie un département ou une collectivité d'outre-mer dans la nomenclature INSEE.
         * 01/96 : correspondent aux départements métropolitains
         * 2A : corse du Sud
         * 2B : haute Corse
         */
        codeDepartementResidence: string;
        /**
         * Détermine la branche d'activité du Profressionnel selon la nomenclature NAF Révision 2,2008 de l'INSEE.
         */
        codeNafInsee: string;
        /**
         * Cotation attribuée à une entreprise donnée par la Banque de France.
         * Exemples : 3, 3+, 3++, 4, 4+,...
         */
        cotationFibenEntreprise: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FCC de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFcc: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FICP de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFicp: string;
        /**
         * Indique si la personne est topée Watch List Locale (liste de surveillance).
         * 'O' : la personne est topée Watch List Locale
         * 'N' : la personne n'est pas topée Watch List Locale
         */
        indicateurWatchListLocale: string;
        /**
         * Détermine le niveau de Watch List Locale.
         * '1' : encours sain et significatif
         * '2' : risque dégradé
         * '3' : risque de défaillance
         */
        codeNiveauWatchListLocale: string;
        /**
         * Indique si la personne est topée Watch List Nationale.
         * 'O' : la personne est topée Watch List Nationale
         * 'N' : la personne n'est pas topée Watch List Nationale
         */
        indicateurWatchListNationale: string;
        /**
         * Détermine le niveau de Watch List Nationale.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListNationale: string;
        /**
         * Indique si la personne est topée Watch List Banque Référente.
         * 'O' : la personne est topée Watch List Banque Référente
         * 'N' : la personne n'est pas topée Watch List Banque Référente
         */
        indicateurWatchListBanqueRef: string;
        /**
         * Détermine le niveau de Watch List Banque Référente.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListBanqueRef: string;
        /**
         * Cotation attribuée à un dirigeant donné pour une personne morale donnée par la Banque de France.
         * '000' : pas de réserve
         * '040' : attention particulière
         * '050' : réserves
         * '060' : réserves sérieuses
         */
        cotationFibenDirigeant: string;
        /**
         * Catégorisation de la clientèle selon la segmentation de marché. Permet de déduire les segmentations risque et marché.
         * 'CC000001' : personnel Groupe
         * 'CC000002' : dirigeant de société de capitaux profession libérale
         */
        codeCategorieClient: string;
        /**
         * Ce code permet d'identifier le type de moteur de notation utilisé par l'application appelante.
         * '01' : Bâle2
         * '02' : NAFI
         * '03' : BEST
         */
        typeMoteurNotation: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        listeIncident: Array<IIncident>;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs. Exemple : 'EUR' - euros
         */
        codeDeviseCapitauxDebiteurs: string;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire.
         */
        identifiantEdsGerePar: number;
        listePersonne: Array<IPersonne>;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface ICompteBancaire {
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * '0004' : CDD
         * '0008' : COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Code de l'entité administrative, issu de la recherche délocalisée CU3E à partir du code établissement + code guichet.
         */
        entiteAdministrative: string;
        listeMouvementMadTraite: Array<IMouvementMad>;
    }
    interface IIncident {
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        codeTypeIncident: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Libellé du motif d'entrée au MAD. 'A' : à vérifier 'C' : compte soldé 'D' : domiciliation erronée 'E' : faux numéro 'F' : sans provision
         */
        codeMotifEntreeAuMad: string;
        /**
         * Montant de l'opération financière entrée au MAD.
         */
        montantOperation: number;
        /**
         * Donnée valant O ou N, et indiquant l'annulation d'une opération.
         */
        indicateurAnnulationOperation: string;
        /**
         * Détermine le type d'un courrier dans la gestion du MAD.
         * '001' : PROPOSITION DE DECOUVERT
         * '002' : AUGMENTATION DE DECOUVERT
         * '003' : MISE EN GARDE AVANT REJET
         * '030' : COURRIER LOI MURCEF
         */
        codeTypeCourrier: string;
        decision: IDecision;
        resultatPriseDecision: IResultatPriseDecision;
    }
    interface IPriseDecision {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: string;
        /**
         * Détermine la qualité du poste fonctionnel occupé par l'agent connecté.
         * 'T' : titulaire
         * 'R' : remplaçant
         * 'S' : suppléant
         * 'A' : affectation temporaire
         */
        codeQualiteAgentConnecte: string;
        /**
         * Identifiant unique interne du poste fonctionnel en cours de travail.
         */
        identifiantPosteFonctionnel: number;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IResultatPriseDecision {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageApplicatif: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
    }
    interface IDecision {
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forcage autre RIB sans correction RIB
         * 'S' : correction de RIB + forçage
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Détermine le motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01' : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejet: string;
        /**
         * Détermine le motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        codeMotifRejetComplementaire: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de tarification été effectuée pour un courrier donné.
         */
        indicateurDecisionFacturable: string;
        /**
         * Identifiant de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        identifiantEdsPourLeCompteDe: number;
        infoDelegationDecision: IInfoDelegationDecision;
    }
    interface IInfoDelegationDecision {
        /**
         * Détermine le type d'appel au moteur de délégation.
         * '1' : demande de délégation
         * '2' : demande de délégation en mode information
         */
        codeAppelMoteurDelegation: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegataireRequis: string;
        /**
         * Libellé associé à la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        libelleVersionCharteDelegataire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Recherche {
    interface ICritereSelection {
        codeTypeRecherche: CodeTypeRechercheEnum;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        identifiantEds: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeProvenanceMouvement: string;
        codeAgentConnecte: string;
        /**
         * Indicateur 'O/N' permettant la recherche et la restitution des forçages automatiques
         * ayant eu lieu sur certaines opérations n'étant de ce fait pas entrées au MAD.
         */
        topRechercheForcageAutomatique: IndicateurEnum;
    }
    interface IInfoGeneraleEntiteTitulaire {
        codeCotationInterne: string;
        codeCategorieSocioPro: string;
        libelleCategorieSocioPro: string;
        raisonSociale: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        dateDomiciliation: number;
        dateDerniereDecisionMad: string;
        dateDernierCourrier: string;
        libelleDernierCourrier: string;
        indicateurExistence: string;
        libelleNatureInterdiction: string;
        codeAppartenanceReseau: string;
    }
    interface IInfoStructureEntiteTitulaire {
        identifiantEdsSuiviPar: number;
        libelleEdsSuiviPar: string;
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsDomicilieA: number;
        libelleEdsDomicilieA: string;
    }
    interface IInfoFinanciereEntiteTitulaire {
        montantCapitauxDetenus: number;
        deviseMontantCapitauxDetenus: string;
        montantCapitauxDebiteurs: number;
        deviseMontantCapitauxDebiteurs: string;
        montantGlobalMad: number;
        deviseMontantGlobalMad: string;
        montantInstancesInternes: number;
        deviseMontantInstancesInternes: string;
        soldeDisponibleGlobal: number;
        deviseSoldeDisponibleGlobal: string;
        montantDomiciliationTotal: number;
        deviseMontantDomiciliationTotal: string;
    }
    interface IInfoAdministrativeEntiteTitulaire {
        ligneAdresse2: string;
        ligneAdresse3: string;
        ligneAdresse4: string;
        ligneAdresse5: string;
        ligneAdresse6: string;
        numeroTelephoneDomicile: string;
        numeroTelephoneTravail: string;
    }
    interface IInfoFinanciereCompteBancaire {
        soldeCompteBancaire: number;
        soldeMoyen: number;
        soldeLePlusBas: number;
        soldeLePlusHaut: number;
        soldeDisponible: number;
        montantDecouvert: number;
        montantDomiciliation: number;
        deviseCompteBancaire: string;
    }
    interface IInfoSepaOperation {
        libellePaysDonneurOrdre: string;
        libelleComplementMino: string;
        libelleCompletBeneficiaire: string;
        codeBicDestinataire: string;
        numeroIbanBeneficiaire: string;
    }
    interface IInfoDelegationDecision {
        codeAttenteDelegataire: string;
        codeNiveauDelegataireRequis: string;
        libelleVersionCharteDelegataire: string;
        identifiantEdsPourLeCompteDe: number;
        libelleEdsPourLeCompteDe: string;
    }
    interface IInfoDecideurDecision {
        codeTypeEdsDecidePar: string;
        identifiantEdsDecidePar: number;
        libelleEDSDecidePar: string;
        identifiantAgentDecideur: string;
        nomAgentDecideur: string;
        prenomAgentDecideur: string;
        codeCiviliteAgentDecideur: string;
    }
    interface IChoixPossibleDecision {
        topChoixEnSuspens: string;
        topChoixForcage: string;
        topChoixRejet: string;
        topChoixForcageRib: string;
        topChoixForcageRibCorrection: string;
    }
    interface ICourrier {
        indicateurDemandeCourrier: string;
        codeTypeCourrier: string;
        libelleTypeCourrier: string;
        indicateurEditionCourrier: string;
        dateEditionCourrier: string;
        indicateurFacturationCourrier: string;
        dateFacturationCourrier: string;
    }
    interface IDecision {
        codeTypeDecision: CodeTypeDecisionEnum;
        datePriseDecision: string;
        commentairePriseDecision: string;
        codeMotifRejet: string;
        motifRejet: string;
        codeMotifRejetComplementaire: string;
        motifRejetComplementaire: string;
        ribDestinationForcage: string;
        indicateurDecisionFacturable: string;
        choixPossibleDecision: IChoixPossibleDecision;
        infoDelegation: IInfoDelegationDecision;
        infoDecideur: IInfoDecideurDecision;
        indicateurTableMotifDecision: IndicateurEnum;
    }
    interface IOperation {
        referenceOperation: string;
        libelleOperation: string;
        libelleComplementaireA: string;
        libelleComplementaireB: string;
        dateCompensation: string;
        codeOperationInterbancaire: string;
        codeTypeOperation: string;
        montantOperation: number;
        deviseMontantOperation: string;
        numeroCheque: string;
        soldeCompteAvantOperation: number;
        soldeCompteFinJournee: number;
        deviseSoldeCompte: string;
        referenceArchivage: string;
        referencePresentateur: string;
        codeProvenance: string;
        libelleProvenance: string;
        numeroNationalEmetteur: string;
        libelleNumeroEmetteur: string;
        codeEtablissementDonneurOrdre: string;
        codeGuichetDonneurOrdre: string;
        numeroCompteDonneurOrdre: string;
        libelleEmetteurDonneurOrdre: string;
        codeAnnulation: string;
        infoSepa: IInfoSepaOperation;
        libelleDomiciliation: string;
    }
    interface IMouvementMad {
        identifiantMouvement: number;
        dateEntreeAuMad: string;
        codeMotifEntreeAuMad: string;
        motifEntreeAuMad: string;
        codeOpposition: string;
        dateLimiteDecision: string;
        montantHTAFacturer: number;
        deviseMontantHTAFacturer: string;
        codePrestation: string;
        nombreRecyclageMad: number;
        dateDernierRecyclageMad: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        codeTypeEdsGerePar: string;
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsADeciderPar: number;
        operation: IOperation;
        decision: IDecision;
        courrier: ICourrier;
        codeEtatRecyclageMad: string;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        codeTypeCompte: string;
        codeTypeDecouvert: string;
        dateDomiciliation: string;
        dateDerniereOperation: string;
        listeMouvementMadDuJour: Array<IMouvementMad>;
        listeMouvementMadHistorise: Array<IMouvementMad>;
        infoFinanciere: IInfoFinanciereCompteBancaire;
        listeForcageAutomatique: Array<IForcageAutomatique>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        codeEtat: string;
        codeComposition: string;
        infoAdministrative: IInfoAdministrativeEntiteTitulaire;
        infoFinanciere: IInfoFinanciereEntiteTitulaire;
        infoStructure: IInfoStructureEntiteTitulaire;
        infoGenerale: IInfoGeneraleEntiteTitulaire;
        listeCompteBancaire: Array<ICompteBancaire>;
        codeEtablissement: string;
        codeUsage: string;
    }
    interface IRecherche {
        critereSelection: ICritereSelection;
        messageAvertissement: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IForcageAutomatique {
        /**
         * Date d'imputation de l'opération sur un compte bancaire.
         * Type date au format yyyy-MM-dd
         */
        dateImputationOperation: string;
        /**
         * Montant d'une l'opération sur un compte bancaire.
         */
        montantOperation: number;
        /**
         * Code devise du montant de l'opération.
         */
        codeDeviseMontantOperation: string;
        /**
         * Désignation de l'opération.
         */
        libelleOperation: string;
        /**
         * Détermine l'acte de gestion relatif au forçage de l'imputation d'une opération.
         * '0' : pas d'acceptation
         * '2' : opération DAB et CB
         * '3' : pourcentage du découvert
         * '4' : somme des capitaux
         * 'A' : prise de décision agence
         * 'C' : prise de décision automatique CTR
         * '5' : chèques payés en infraction à partir de l'historique
         * '6' : chéques payés en infraction à partir du MAD
         * '7' : découvert technique
         * '8' : provenance prêt
         */
        codeTypeDecision: string;
        /**
         * Libellé associé au code type de décision.
         */
        libelleRegleImputation: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de tarification été effectuée pour une imputation donnée.
         */
        indicateurFacturation: IndicateurEnum;
        /**
         * Détermine le type de la facturation d'une opération.
         * ex. : 1970, 1971, 1972, 1973,...
         */
        codeTypeFacturaion: string;
        /**
         * Montant de la facturation lié au forçage de l'imputation d'une opération.
         */
        montantFacturation: number;
        /**
         * Numéro du chèque éventuellement utilisé pour une opération.
         */
        numeroCheque: string;
        /**
         * Numéro d'identification de la carte bancaire en lien avec l'opération entrée au MAD.
         */
        identifiantCarte: string;
        /**
         * Désignation d'un organisme autorisé à émettre des prélèvements / créancier.
         */
        numeroNationalEmetteur: string;
        /**
         * Détermine la provenance technique "échanges", interne Mysys.
         * '001' : C.A.M normal (SIT)
         * '002' : C.A.M exceptionnelle
         * '003' : Débit différé
         * '004' : O.C.R Lille
         * '006' : Chèque réseau
         */
        codeProvenance: string;
        /**
         * Désignation associée à la provenance technique "échanges", interne Mysys.
         */
        libelleProvenance: string;
        /**
         * Détermine la famille SIT d'identification d'une opération.
         * '001' : virement
         * '005' : prélèvement
         * '007' : DAB
         * '010' : débit TIP
         * '012' : retrait carte bancaire
         * '018' : LCR
         * 'CHQ' : chèque
         */
        codeTypeOperation: CodeTypeOperationEnum;
        /**
         * Détermine l'état d'un mouvement MAD vis à vis du recyclage.
         * Le recyclage consiste à retenter automatiquement l'imputation des mouvements en attente de décision.
         * ' ' : non recyclable
         * 'E' : en cours de recyclage
         * 'R' : recyclé en batch
         * 'T' : recyclé manuellement
         * 'A' : annulation d'un mouvement recyclé
         */
        codeEtatRecyclageMad: CodeEtatRecyclageEnum;
        /**
         * Solde du compte bancaire avant imputation d'une opération.
         */
        soldeAvantOperation: number;
        /**
         * Code devise du solde avant opération.
         */
        codeDeviseSoldeAvantOperation: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Synthese {
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        identifiantGerePar: number;
        dateLimiteDecision: string;
        nombreMouvementMad: number;
        montantGlobalMouvementMad: number;
        nombreMouvementEnSuspensDuJour: number;
        codeAttenteDelegation: string;
    }
    interface IElementStructure {
        nombreTotalMouvementMad: number;
        nombreTotalEntiteTitulaire: number;
        libelleEtatPriseDecision: string;
        nombreMouvementEnDateLimite: number;
        codeAttenteDelegation: string;
        identifiantEDS: number;
        designationEDS: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface ISynthese {
        critereSelection: ICritereSelection;
        listeElementStructure: Array<IElementStructure>;
    }
    interface ICritereSelection {
        codeTypeRecherche: CodeTypeRechercheEnum;
        indicateurRechercheAgent: IndicateurEnum;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantEds: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeProvenanceMouvement: string;
        codeAgentConnecte: string;
    }
}

declare module Mad.Rest.AgentV2 {
    interface IRechercheRestService {
        getRecherche(criteres: Modele.Recherche.IParametreRecherche): ng.IPromise<Modele.Recherche.IRechercheAgent>;
    }
}

declare module Mad.Rest.EntiteTitulaireV2 {
    interface IParametreGetInformations {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    interface IInformationsEntiteTitulaireRestService {
        getInformations(param: IParametreGetInformations): ng.IPromise<Modele.InformationsEntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IAuditTarificationRestService {
        getAuditTarification(criteres: Modele.AuditTarification.IParametreGet): ng.IPromise<Modele.AuditTarification.IAuditTarification>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IControleDelegationRestService {
        getControleDelegation(criteres: Modele.ControleDelegation.IParametreGet): ng.IPromise<Modele.ControleDelegation.IControleDelegation>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IPriseDecisionRestService {
        putPriseDecision(criteres: Modele.PriseDecision.IPriseDecision): ng.IPromise<Modele.PriseDecision.IPriseDecision>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheRestService {
        getRecherche(criteres: Modele.Recherche.ICritereSelection): ng.IPromise<Modele.Recherche.IRecherche>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISyntheseRestService {
        getSynthese(criteres: Modele.Synthese.ICritereSelection): ng.IPromise<Modele.Synthese.ISynthese>;
    }
}
