
declare namespace Contentieux.RestServices.Commun.Constantes.Inject {
    namespace Angular {
        const $q: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
    }
    namespace Service {
        const edsService: string;
        const dossierService: string;
        const personneService: string;
        const alerteService: string;
    }
}

declare namespace Contentieux.RestServices {
    var app: any;
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICaracteristiqueAgent {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Référence externe agent
         */
        identifiantAgent: number;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAgent: string;
        /**
         * Adresse messagerie
         */
        adresseEMailAgent: string;
        /**
         * Date de fin de validité référentiel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Nom usage Personne Physique
         */
        nomUsageAgent: string;
        /**
         * Premier prénom état civil Personne
         */
        prenomAgent: string;
        /**
         * Code civilité personne physique
         */
        civiliteAgent: string;
        /**
         * Nom famille Personne Physique
         */
        nomAgent: string;
        /**
         * Indic agent non nominatif
         */
        indicateurNonNominatifAgent: string;
        /**
         * Indic agent affectable
         */
        indicateurAffectableAgent: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.IInfosDossierAdministratif {
    interface IInfosDossierAdminist {
        /**
         * Numéro d'identification d'un portefeuille de gestion
         * de dossiers de créances en Recouvrement dans un
         * Etablissement donné du GCE (anciennement rédacteur).
         */
        portefeuille: string;
        /**
         * Date de la dernière entrée d'un dossier dans VARIO
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEntree: string;
        /**
         * Détermine la cause d'entrée en gestion du
         * Recouvrement d'une créance donnée
         */
        motif: string;
        siren: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Numéro d'identification d'un dossier de créances
         * de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * ARCHIVE / CLOS / EN COURS DE CESSION / CEDE / SURENDETTEMENT / PROCEDURE COLL
         */
        etiquette: string;
        /**
         * Date d'ouverture du jugement.
         * Type date au format yyyy-MM-dd
         */
        jugementDu: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         * Personne référencée comme client, tiers ou prospect.
         */
        cedeA: number;
        /**
         * Cette date détermine la date à laquelle le
         * gestionnaire a effectué la cession d'un paquet
         * de créances à un même cessionnaire.
         * Type date au format yyyy-MM-dd
         */
        dateCession: string;
        /**
         * Date de cloture adminisistrative du dossier de
         * créances dans la gestion du Recouvrement
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.InfosDossierContrat {
    interface IInfosDossierContrat {
        listeContrat: Array<IContrat>;
    }
    interface IContrat {
        /**
         * Libellé long associé à un produit participant au
         * catalogue des produits de crédit offerts au client.
         */
        nature: string;
        /**
         * Identifie un contrat détenu par un client auprès
         * d'un Etablissement du Groupe CE :
         * Concerne l'épargne, les engagements, les services ...
         */
        reference: string;
        /**
         * sous-traitance / déchu / débiteur / impayé
         */
        etiquetteContrat: string;
        /**
         * Montant actualisé de la créance correspondant à un
         * un contrat de crédit ou d'engagement en Recouvrement.
         */
        dettes: Array<IDette>;
        etatEcheancier: string;
        /**
         * Date à partir de laquelle est déterminée la date de
         * forclusion pour une créance
         * Type date au format yyyy-MM-dd
         */
        dateDefaillance: string;
        /**
         * 'O' débranchement synchro possible
         * 'N' débranchement synchro impossible
         */
        topSynchro: string;
        /**
         * Date de fin de contentieux
         * Type date au format yyyy-MM-dd
         */
        dateRegularisation: string;
        /**
         * Numéro d'identification d'une créance de la clientèle
         * dans la gestion du Recouvrement.
         * Une créance correspond à la fraction ou la totalité
         * des sommes dûes par un client sur un contrat de crédit
         * ou un engagement.
         */
        identifiantCreance: string;
        /**
         * 01         Créance en cours
         * 02         Créance levée
         */
        codeActiviteCreance: number;
        /**
         * 0         Créance vive  --> pre-ouverture
         * 1         Créance morte --> déchue
         */
        codeDecheanceDuTerme: number;
        /**
         * Définition :
         *             Détermine la situation du crédit au regard du
         *             statut comptable douteux.
         *
         *             Valeurs possibles :
         *  'O'        Douteux
         *  'N'        Sain
         *  'P'        Passage en douteux
         *  'C'        Douteux compromis
         *  'S'        Surendettement
         */
        codePassageCreditStatutDouteux: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou
         * d'un Etablissement du Groupe CE) est répertorié par
         * la Banque de France
         */
        codeGuichetInterbancaire: string;
    }
    interface IDette {
        /**
         * décrit le type de la dette
         */
        type: string;
        montant: number;
        nbImpaye: number;
    }
}

declare namespace Contentieux.RestServices.Modeles.InfosDossierHisto {
    interface IContainer {
        evenementATraiter: Array<IEvenement>;
        evenementRealises: Array<IEvenement>;
        evenementFutur: Array<IEvenement>;
    }
    interface IEvenement {
        /**
         * Cette date représente la date effective de l'événement
         * Type date au format yyyy-MM-dd
         */
        dateEvenement: string;
        /**
         * A chaque code type et sous type événement, est
         * associé un libellé.
         * Exemple :
         * Pour un type événement 'Ouverture', il existe
         * sous types suivants :
         *   - Préouverture prêt
         *   - Prise en compte d'une créance
         */
        sousTypeEvenement: string;
        /**
         * Pour les types événement 'ouverture', 'Aggravation',
         * 'Encaissement' et 'Fermeture' cette date contient la
         * date de traitement de l'événement.
         * Pour les types événement 'Notes d'alerte' et 'Notes
         * de suivi' , cette date contient la date de saisie de
         * la validation de la note. Elle vaut '0001-01-01' si
         * la note n'est pas validée.
         * Type date au format yyyy-MM-dd
         */
        dateValidation: string;
        /**
         * Personne à l'origine de l'evenement
         */
        redacteur: string;
        /**
         * Identifie un contrat détenu par un client auprès d'un Etablissement du Groupe CE
         */
        identifiantContrat: string;
        /**
         * C'est la date de la saisie de l'événement.
         * En cas de création BATCH, c'est la date du traitement
         * de l'événement.
         * Type date au format yyyy-MM-dd
         */
        dateCreationEvenement: string;
        /**
         * Pour les types événement 'ouverture', 'Aggravation',
         * 'Encaissement' et 'Fermeture' ce libellé est à blanc.
         * Pour les types événement 'Notes d'alerte' et 'Notes
         * de suivi' , c'est la valeur de la saisie lors de la
         * création de la note.
         */
        commentaire: string;
    }
    interface IEvenementProcedure extends IEvenement {
        libelleEtape: string;
        libelleProcedure: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInfosDossier {
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Détermine la date de création du dossier
         */
        dateCreation: string;
        /**
         * indique l'étape du cycle de vie d'un dossier de créances dans la gestion du Recouvrement :
         * 'amiable' ou en 'contentieux'
         * Valeurs possibles :
         *   'A'        Amiable
         *   'C'        Contentieux
         */
        phaseRecouvrement: string;
        /**
         * Cette donnée permet de bloquer la clôture automatique des dossiers.
         * Valeurs possibles :
         *   'O'        Blocage de la régularisation
         *   'N'        Pas de blocage de la régularisation
         */
        blocageCloture: boolean;
    }
    interface IListeDossierET {
        dossierET: Array<IDossierET>;
    }
    interface IDossierET {
        numeroDossier: number;
        montantImpaye: number;
        statutDossierConsultable: string;
        dateBlocageConsultation: string;
        dateReactivationConsultation: string;
        dateSuppressionPrevisionelle: string;
        identifiantAgent: string;
        montantCRD: number;
        montantDu: number;
        identifiantEntiteTitulaire: string;
        portefeuille: string;
        motif: string;
        montantContentieux: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
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

declare namespace Contentieux.RestServices.Modeles {
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le  SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
    }
    interface IListeMedia {
        /**
         * '01'       Téléphone fixe
         * '02'       Téléphone mobile
         * '03'       E-mail
         * '04'       Fax
         * '05'       SiteWeb
         */
        codeTypeMedia: string;
        /**
         * libellé type média
         */
        libelleTypeMedia: string;
        /**
         * 'P'        Personnel
         * 'T'        Professionnel
         * 'A'       Sécurisation Opérations en Ligne (SOL)
         */
        codeTypeUsageMedia: string;
        /**
         * libellé type usage média
         */
        libelleTypeUsageMedia: string;
        /**
         * ‘O’        Oui
         * ‘N’        Non
         */
        indicateurPreferenceMedia: boolean;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
        /**
         * Indique si le client accepte d'être contacté par ce moyen de contact (Mail, téléphone).
         * Valeurs possibles :
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurOptin: boolean;
        /**
         * commentaire d'un numero de telephone
         */
        commentaire: string;
        /**
         * Code indicatif téléphone international
         */
        indicatifTelephone: string;
        /**
         * Un téléphone défini comme étant sécurisé est celui qui sera utilisé pour les transactions en ligne, les opérations sécurisées...
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurSecu: boolean;
        /**
         * Option choisie par le client pro pour refuser de recevoir des informations commerciales par SMS, fax ou mail (ensemble des média)
         * '0'        envoi commercial par SMS, fax ou mail
         * '1'        pas d'envoi commercial par SMS, fax ou mail
         */
        indicateurProOptout: boolean;
        /**
         * Option choisie par le client pour recevoir des informations commerciales par SMS ou fax.
         * '0'        envoi commercial par SMS ou fax
         * '1'        pas d'envoi commercial par SMS ou fax
         */
        indicateurSmsFax: boolean;
    }
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IListeAffectDossiers {
        dossiers: Array<IAffectationDossier>;
    }
    interface IAffectationDossier {
        numeroDossier: number;
        infosComplement: string;
        dateAffectation: string;
        montantDu: number;
        portefeuille: string;
        motif: string;
        identifiantEntiteTitulaire: string;
        montantContentieux: number;
        montantImpaye: number;
        montantCRD: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface INoteBale2 {
        /**
         * Détermine le type d'entité faisant l'objet d'une notation.
         *
         * Valeurs :
         * '1'       Entité titulaire
         * '2'       Personne (physique ou morale)
         * '3'       Engagement
         * '4'       Dossier
         */
        typeAttributaireNote: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys.
         * Personne référencée comme client, tiers ou prospect.
         */
        numeroPersonne: number;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ..
         * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        listeNoteBale2: Array<IDetailNoteBale2>;
    }
    interface IDetailNoteBale2 {
        /**
         * Détermine la typologie d'une note Bale2.
         *
         * Exemples de valeurs :
         * 'NBP1'     Comportement
         * 'NBP2'     Financière
         * 'NBP3'     Qualitative
         * 'NET'      Entité Titulaire
         * 'NBP4'     Dossier
         * 'NENG'     Engagement
         */
        codeTypeNoteBale2: string;
        /**
         * Indique la situation de gestion de l'entité notée.
         * Les entités faisant l'objet d'une notation sont :
         * - les personnes
         * - les entités titulaires
         * - les dossiers d'engagements
         * - les engagements élémentaires
         *
         * Valeurs :
         * '1'        une entité dite "en attente" :
         *             - personne ou entité titulaire dont le dossier est
         *               en instance de décision
         *             - dossier ou engagement élémentaire en instance de décision
         * '2'        un dossier valide - accepté ou une entité titulaire dont le dossier est décidé : accepté ou refusé
         * '3'        un dossier valide - refusé
         * '4'        un dossier ou engagement obsolète
         * '5'        un dossier clos
         */
        codeEtatProprietaireNote: string;
        /**
         * Détermine l'établissement pilote / référent de la notation d'une personne donnée.
         */
        codeEtablissementPilote: string;
        /**
         * Libellé de l'identifiant moteur de Notation.
         *
         * Exemples de valeurs :
         * Moteur NIA : Notation Bâle 2 des Particuliers
         * Moteur NIO : Notation Bâle 2 des Professionnels
         * Moteur NIE : Notation Bâle 2 des Corporates
         */
        libelleMoteur: string;
        /**
         * Correspond au libellé de l'établissement pilote de la personne morale.
         */
        libelleEtablissementPilote: string;
        /**
         * Libellé de désignation de l'origine de la notation.
         */
        libelleOrigineBale2: string;
        /**
         * Libellé de désignation du processus Bale2.
         */
        libelleProcessusBale2: string;
        /**
         * Indique s'il s'agit d'une note prospect ou non.
         *
         * Valeurs :
         * True       Note Prospect
         * False     Note Client
         */
        indicateurNoteProspect: boolean;
        /**
         * Heure d'enregistrement de l’événement de création ou de modification d'une note.
         */
        heureNotation: number;
        /**
         * Détermine la date du dernier évènement :
         *      - soit la création initiale d'une note
         *      - soit la modification d'une note
         * Type date au format yyyy-MM-dd
         */
        dateNotation: string;
        /**
         * Détermine le contexte métier utilisé lors de la notation.
         * Permet de distinguer :
         *            - la notation initiale à l'octroi d'engagement
         *            - la notation de suivi périodique
         *
         * Valeurs :
         * 'O'        Octroi
         * 'S'        Suivi Périodique Mensuel
         * 'Q'        Suivi Périodique Quotidien
         * 'R'        Révision Périodique Indéfinie
         * 'F'        Forçage en défaut
         */
        codeContexteMetierBale2: string;
        /**
         * Détermine la note globale d'une entité.
         * Correspond au niveau de regroupement de la note.
         *
         * Valeurs :
         * '0'        Positif
         * '1'        Positif
         * '2'        Positif
         * '3'        Positif
         * '4'        Positif
         * '5'        Positif
         * '6'        Positif
         * '7'        Positif
         * '8'        Incertain
         * '9'        Très incertain
         * '?'        Note non calculée/non calculable
         * 'A'        Note non calculée/non calculable
         * 'J'        Jeunesse de comptes
         * 'D'        Client en défaut Bâlois (non douteux)
         * 'E'        Note Expert prioritaire
         * 'C'        Absence de comptes
         * 'R'        Absence de règles de notation
         * 'X'        Client en défaut Bâlois (douteux)
         * 'V'        Données financières trop anciennes
         */
        noteBale2Reduite: string;
        /**
         * Détermine la valeur calculée d'un type de note attribuée à une entité donnée.
         * Correspond à la valeur mémorisée.
         */
        noteBale2calculee: string;
        /**
         * Détermine l'établissement noteur de chaque note personne.
         */
        codeEtablissementNoteur: string;
        /**
         * Correspond au libellé de l'établissement qui a effectué la notation Bâle II.
         */
        libelleEtablissementNoteur: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICreanceDouteuseOuDechue extends ICreanceSaine {
        codeSessionCreance: string;
        indicateurNatureConsolidante: string;
        indicateurCadreRisque: string;
        indicateurCreanceDouteuxComprom: string;
        indicateurDepreciationProvision: string;
        codeCreanceFractionnee: string;
        indicateurRetourSain: string;
        codeClasseFINREPCreance: string;
        typeCofinancement: string;
        dateCalculProvisionCRC200203: string;
        dateDerniereCession: string;
        dateDesactualisationPrevisionne: string;
        dateValeurDecoteCession: string;
        identifiantContrat: string;
        mtCumDesactualConstateCRC: number;
        mtCumInteretCRCAAnnuler: number;
        mtCumInteretIFRSAAnnuler: number;
        mtCumDesactualConstateIFRS: number;
        mtRepriseProvCRCPartInteret: number;
        mtPerteCouverteCRCPartInteret: number;
        mtDotationProvCRCPartInteret: number;
        mtPartInteretAssietteCRC200203: number;
        mtPerteNonCouverteCRCPartInt: number;
        mtInteretCRCPeriodeAAnnuler: number;
        mtPertePartInteretMOIS: number;
        mtInteretIFRSPeriodeAAnnuler: number;
        mtStockProvCRCPartInt0101: number;
        mtUtilisationProvCRCPartInteret: number;
        mtRepriseExcedentProvCRCInt: number;
        mtRepRetourSainCRCPartInt: number;
        mtAssietteProvisionCRC200203: number;
        mtAssietteIFRSRecalculee: number;
        mtRepriseProvCRCHorsInteret: number;
        montantBoniLatent: number;
        mtcoutAmortiIFRS: number;
        mtPerteCouverteCRCHorsInteret: number;
        mtCoutAmortiCRC: number;
        mtPerteCouverteIFRS: number;
        montantCompteCorrecteur: number;
        mtDotationProvCRCHorsInteret: number;
        mtDesactualisationConstateCRC: number;
        mtDesactualPrevisionnelCRC: number;
        mtPerteNonCouverteCRCHorsInt: number;
        mtPerteNonCouverteIFRS: number;
        mtProvisionHorsActualisation: number;
        mtProvisionCRC200203: number;
        mtPerteMOIS: number;
        mtFluxRecouvrableCRC200203: number;
        mtFluxRecouvrablesIFRS: number;
        mtStockProvCRC1erJanvier: number;
        mtDesactualisationConstateIFRS: number;
        mtDesactualPrevisionnelIFRS: number;
        mtUtilisationProvCRCHorsInteret: number;
        mtUtilisationProvisionIFRS: number;
        mtRepriseProvIFRSHorsInteret: number;
        mtRepriseRetourSainCRCHorsInt: number;
        mtRepriseProvRetourSainIFRS: number;
        numeroHistoriqueCRC200203: number;
        tauxActualisationCRC200203TEO: number;
        mtRepriseProvCRCHorsInteretBis: number;
        mtRepriseRetourSainCRCPartInt: number;
        mtDecoteCessionInterne: number;
    }
    interface ICreanceSaine {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        identifiantCreanceIFRS: string;
        codeEtatCreanceIFRS: string;
        mtStockProvIFRS1erJanv: number;
        mtProvisionIFRS: number;
        numeroHistoriqueIFRS: number;
        dateCalculProvIFRS: string;
        codeTypePopulationIFRS: string;
        mtDotationProvisionIFRS: number;
        mtRepriseProvisionIFRS: number;
        libelleCreanceIFRS: string;
        identifiantEntiteTitulaire: string;
        libelleClient: string;
        identifiantPersonneTitulaire: string;
        identifiantEDSDomiciliation: string;
        libelleEDSDomiciliationET: string;
        identifiantGestionnaireCreance: string;
        libelleGestionnaireCreance: string;
        codeAgentEconomiqueBAFI: string;
        codeNationalitePersonne: string;
        codeINSEEPaysResidencefisc: string;
        codeResident: string;
        codeAgentContrepartie: string;
        identifiantComptable: string;
        referenceExterneCreance: string;
        codeOrigineCreance: string;
        codeSegmentRisqueCategorie: string;
        codeTypeMarcheIFRS: string;
        codeProduitService: string;
        codeDomainePSCNCE: string;
        codeTypeActifIFRS: string;
        codeTypeProduitIIFRS: string;
        typeGarantieGCE: string;
        codetypeGarantieIFRS: string;
        codeSecteurActiviteNAF: string;
        codeSecteurActiviteIFRS: string;
        dateEvtRefCReance: string;
        codeTypeEcheancierRecouvrement: string;
        montantFluxSemestre1: number;
        montantFluxSemestre2: number;
        montantFluxSemestre3: number;
        montantFluxSemestre4: number;
        montantFluxSemestre5: number;
        montantFluxSemestre6: number;
        montantFluxSemestre7: number;
        montantFluxSemestre8: number;
        montantFluxSemestre9: number;
        montantFluxSemestre10: number;
        montantFluxSemestre11: number;
        montantFluxSemestre12: number;
        montantFluxSemestre13: number;
        montantFluxSemestre14: number;
        montantFluxSemestre15: number;
        montantFluxSemestre16: number;
        montantFluxSemestre17: number;
        montantFluxSemestre18: number;
        montantFluxSemestre19: number;
        montantFluxSemestre20: number;
        montantAssietteProvisionIFRS: number;
        codeDeviseISO: string;
        montantPartInteretAssietteIFRS: number;
        montantGlobalFluxARecouvrer: number;
        tauxActualisationIFRSTIE: number;
        codeSPPIProduitService: string;
        codeBusinessModel: string;
        codeClassificationIFRS9: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IEntiteTitulaire {
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement de BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *    - 1   Usage privé
         *    - 2   Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Permet de qualifier le client détenteur d'un contrat.
         * Valeurs :
         *    - 1   mode simple
         *    - 2   mode joint entre époux
         *    - 3   mode joint entre tiers
         *    - 4   mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative des personnes.
         * Valeurs :
         *    - 0   Actif
         *    - 1   Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Précise le type d'indivision.
         * Valeurs :
         *    - 1   Mode indivision successorale
         *    - 2   Mode indivision conventionnel avec solidarité
         *    - 3   Mode indivision conventionnel sans solidarité
         */
        modeCompositionIndivision: string;
        /**
         * Complément de la désignation courte de l'entité titulaire,
         * optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationEntiteTitulaire: string;
        /**
         * Identifiant de l'Elément De Structure
         */
        identifiantEDSDomiciliation: number;
        /**
         * Référence externe EDS
         */
        referenceEDSDomiciliation: number;
        /**
         * Libellé de l'Elément De Structure
         */
        libelleEDSDomiciliation: string;
    }
    interface IRechercheEntiteTitulaire {
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IRechercheET {
        /**
         * Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtabBanqueEntiteJuridi: string;
        /**
         * uméro d'identification d'un dossier de créances
         * e la clientèle dans la gestion du Recouvrement.
         */
        numeroDossierContentieux: number;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Détermine la situation d'un dossier VARIO
         *            Valeurs
         * 'O'        Ouvert
         * 'C'        Clos
         * 'A'        Archivé
         * 'N'        Non concerné
         */
        codeStatutDossier: string;
        /**
         * Date de cloture adminisistrative du dossier de
         * créances dans la gestion du Recouvrement
         * Type date au format yyyy-MM-dd
         */
        dateClotureDossierCreance: string;
        /**
         * Cette zone doit être alimentée avec la date à laquelle
         * le dossier sera bloqué (date de cloture + delai).
         * Dans le programme, si dateJour > dateCloture + delai
         * alors la consultation sera bloquée. Le dossier sera
         * donc supprimé logiquement pour le gestionnaire.
         * Type date au format yyyy-MM-dd
         */
        dateDeBlocageConsultationPrevis: string;
        /**
         * Cette zone doit être alimentée avec la date à laquelle
         * le dossier sera définitivement supprimé (date de
         * blocage en consultation + delai)
         * Dans le programme, si dateJour > dateBloquage + delai
         * alors le dossier sera purgé. Le dossier sera
         * donc supprimé physiquement de VARIO.
         * Type date au format yyyy-MM-dd
         */
        dateSuppressionPrevisionelle: string;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IAlerteService {
        getAffectationDossier(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IListeAffectDossiers>;
    }
    class AlerteService implements IAlerteService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        getAffectationDossier(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IListeAffectDossiers>;
        private sendRequest<T>(settings);
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IEDSService {
        getAgent(codeEtablissement: string, idAgent: number): ng.IPromise<Modeles.ICaracteristiqueAgent>;
    }
    class EDSService implements IEDSService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        getAgent(codeEtablissement: string, idAgent: number): ng.IPromise<Modeles.ICaracteristiqueAgent>;
        private sendRequest<T>(settings);
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IDossierService {
        getDossier(idDossier: number): ng.IPromise<Modeles.IInfosDossier>;
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, avecDetail?: boolean, identifiantCreance?: string): ng.IPromise<Modeles.InfosDossierHisto.IContainer>;
        getInfosDossierContrat(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.InfosDossierContrat.IInfosDossierContrat>;
        getInfosDossierAdministratif(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.IInfosDossierAdministratif.IInfosDossierAdminist>;
        getDossiers(codeEtablissement: string, idEntitesTitulaires: string[]): ng.IPromise<Modeles.IListeDossierET>;
        getIdET(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.IRechercheET>;
        getProvision(codeEtablissement: string, codeGuichetInterbancaire: string, idCreance: string, codeEtatCreance: string): ng.IPromise<Modeles.ICreanceDouteuseOuDechue>;
    }
    class DossierService implements IDossierService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        getDossier(idDossier: number): ng.IPromise<Modeles.IInfosDossier>;
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, avecDetail?: boolean, identifiantCreance?: string): ng.IPromise<Modeles.InfosDossierHisto.IContainer>;
        getInfosDossierAdministratif(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.IInfosDossierAdministratif.IInfosDossierAdminist>;
        getInfosDossierContrat(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.InfosDossierContrat.IInfosDossierContrat>;
        getDossiers(codeEtablissement: string, idEntitesTitulaires: string[]): ng.IPromise<Modeles.IListeDossierET>;
        getIdET(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.IRechercheET>;
        getProvision(codeEtablissement: string, codeGuichetInterbancaire: string, idCreance: string, codeEtatCreance: string): ng.IPromise<Modeles.ICreanceDouteuseOuDechue>;
        private sendRequest<T>(settings);
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IPersonneService {
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, idET: number): ng.IPromise<Modeles.IInformationEntiteTitulaire>;
        getRechercheEntiteTitulaire(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IRechercheEntiteTitulaire>;
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.INoteBale2>;
    }
    class PersonneService implements IPersonneService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, idET: number): ng.IPromise<Modeles.IInformationEntiteTitulaire>;
        getRechercheEntiteTitulaire(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IRechercheEntiteTitulaire>;
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.INoteBale2>;
        private sendRequest<T>(settings);
    }
}

declare namespace Contentieux.RestServices.Commun.Constantes.Url {
    namespace Rest {
        const urlDossierRecouvrement: string;
        const urlTiers: string;
        const urlEntiteTitulaire: string;
        const urlRisqueClient: string;
        const urlAgent: string;
    }
    namespace InfosDossier {
        const urlDossierRecouvrementInfosDossier: string;
        const urlDossierRecouvrementInfosDossierAdminist: string;
        const urlDossierRecouvrementInfosDossierHisto: string;
        const urlDossierRecouvrementInfosDossierContrat: string;
        const urlDossierRecouvrementRechercheET: string;
        const urlDossierRecouvrementProvision: string;
    }
    namespace InfosPersonne {
        const urlDossierRecouvrementListeDossiers: string;
        const urlTiersMedia: string;
        const urlETAdresse: string;
        const urlInfoET: string;
        const urlRechET: string;
        const urlNoteBale: string;
    }
    namespace Eds {
        const urlCaracteristique: string;
    }
    namespace Alerte {
        const urlAffectationDossier: string;
    }
    namespace Parametres {
        const typeRechercheEntiteTitulaire: string;
        const codeTypeNote: number;
    }
}
