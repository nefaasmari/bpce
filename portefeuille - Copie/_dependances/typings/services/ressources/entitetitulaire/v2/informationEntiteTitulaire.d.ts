/**
 * Ressource : /entitetitulaire/v2/informationEntiteTitulaire
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v2/entitetitulaire/informationEntiteTitulaire
 */
declare module myway.ressources.entitetitulaire.informationEntiteTitulaire {

    export interface IInformationEntiteTitulaire {

        compositionEntiteTitulaire: ICompositionEntiteTitulaire;

        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }

    export interface ICompositionEntiteTitulaire {

        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;

        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }

    export interface ICaracteristiqueEntiteTitulaire {

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

    export interface IPersonneEntiteTitulaire {

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
    }

    export interface IGetQueryParams {
        codeEtablissement: string;

        identifiantEntiteTitulaire: number;
    }

}
