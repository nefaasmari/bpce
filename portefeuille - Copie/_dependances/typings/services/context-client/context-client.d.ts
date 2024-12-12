declare module ContextClient {

    /**
     * donn�es issues du service REST de la synth�se client MyWay
     */
     
    /**
     * objet racine
     */
    export interface ISyntheseDonneesClient {
        syntheseClientDonneesSignaletiques: ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: Produits.ISyntheseClientProduits;

    }
    /**
     * donn�es signal�tiques du client/tiers/prospect
     * (coordonn�es, profil et informations commerciales, d�crites dans 3 modules s�par�s ci-apr�s)
     */
    export interface ISyntheseClientDonneesSignaletiques {
        syntheseClientAdresse: Coordonnes.ISyntheseClientAdresse;
        syntheseClientProfil: Profil.ISyntheseClientProfil; // l'objet contenant les informations li�es au profil administratif (nom, prenom, civilit�, etc.)
        syntheseClientDonneesCommerciales: Commercial.ISyntheseClientDonneesCommerciales;
        syntheseClientSurendettement: Commercial.ISyntheseClientSurendettement;
        syntheseClientSuivi: Commercial.ISyntheseClientSuivi;
        listeSyntheseClientEntiteTitulaire: Array<Profil.ISyntheseClientEntiteTitulaire>;
        listeSyntheseClientSegRevise: Array<Commercial.ISyntheseClientSegRevise>;
        listeSyntheseClientSegAu1erJanv: Array<Commercial.ISyntheseClientSegAu1erJanv>;
        syntheseClientOrigineClient: Profil.ISyntheseClientOrigineClient;
        listeSyntheseClientGP: Array<Commercial.ISyntheseClientGP>;
        syntheseClientAdresseNPAI: Coordonnes.ISyntheseClientAdresseNPAI;
    }


    export module Coordonnes {

        export interface ISyntheseClientAdresse {
            /*
           Code pays INSEE
           */
            codePays: string;
            /*
             Code type retour PTT
             */
            codeTypeRetourPtt: string;
            /*
             Date dernier retour PTT adresse
             */
            dateDernierRetourPttAdresse: Date;
            /*
             Identifiant adresse
             */
            identifiantAdresse: number;
            /*
             Code type adresse
             */
            codeTypeAdresse: string;
            /*
             Ligne 2 adresse
             */
            ligne2Adresse: string;
            /*
             Ligne 3 adresse
             */
            ligne3Adresse: string;
            /*
             Ligne 4 adresse
             */
            ligne4Adresse: string;
            /*
             Ligne 5 adresse
             */
            ligne5Adresse: string;
            /*
             Ligne 6 adresse
             */
            ligne6Adresse: string;
            /*
             Code validit� adresse UNISERV
             */
            codeValiditeAdresseUNISERV: string;
            /*
             Code validit� adresse UNIMAIL
             */
            codeValiditeAdresseUNIMAIL: string;
            /*
             ligne 2 adresse longue
             */
            ligne2AdresseLong: string;
            /*
             ligne 3 adresse longue
             */
            ligne3AdresseLong: string;
            /*
             ligne 4 adresse longue
             */
            ligne4AdresseLong: string;
            /*
             ligne 5 adresse longue
             */
            ligne5AdresseLong: string;
            /*
             ligne 6 adresse longue
             */
            ligne6AdresseLong: string;
        }

        export interface ISyntheseClientAdresseNPAI {
            /*
             l'identifiant de l'adresse
             */
            identifiantAdresse: number;
            /*
             le numero chrono professionnel
             */
            numeroChronoProfessionnel: number;
            /*
             le numero chrono du lieu activit�
             */
            numeroChronoLieuActivite: number;
            /*
             le code type de l'adresse
             */
            codeTypeAdresse: string;
            /*
             le code validite de l'adresseUNISERV
             */
            codeValiditeAdresseUNISERV: string;
            /*
             le code validite de l'adresse UNIMAIL
             */
            codeValiditeAdresseUNIMAIL: string;
            /*
             la d�signation courte
             */
            designationCourte: string;
            /*
             le num�ro de t�l�phone de l'adresse
             */
            numeroTelephoneAdresse: string;
            /*
             le code pays INSEE
             */
            codePays: string;
            /*
             le code type de retour PTT
             */
            codeTypeRetourPtt: string;
            /*
             la derni�re date de retour PTT
             */
            dateDernierRetourPttAdresse: string;
            /*
             la date de cr�ation de l'adresse
             */
            dateCreationAdresse: string;
            /*
             la date de restructuration de l'adresse
             */
            dateRestructurationAdresse: string;
            /*
             la date de derni�re mise � jour
             */
            dateDerniereMajAdresse: string;
            /*
             liligne 2 de l'adresse
             */
            ligne2Adresse: string;
            /*
             ligne 3 de l'adresse
             */
            ligne3Adresse: string;
            /*
             ligne 4 de l'adresse
             */
            ligne4Adresse: string;
            /*
             ligne 5 de l'adresse
             */
            ligne5Adresse: string;
            /*
             ligne 6 de l'adresse
             */
            ligne6Adresse: string;
            /*
             ligne 2 de l'adresse longue (38c)
             */
            ligne2AdresseLong: string;
            /*
             ligne 3 de l'adresse longue (38c)
             */
            ligne3AdresseLong: string;
            /*
             ligne 4 de l'adresse longue (38c)
             */
            ligne4AdresseLong: string;
            /*
             ligne 5 de l'adresse longue (38c)
             */
            ligne5AdresseLong: string;
            /*
             ligne 6 de l'adresse longue (38c)
             */
            ligne6AdresseLong: string;
        }

    }
    
    export module Commercial {

        /*
         * Interface synthese client suivi Par
         * utilis� dans le bloc Commercial
         */
        export interface ISyntheseClientSuivi {
            /*
             Code suivi par
             */
            codeSuiviPar: string;
            /*
             D�signation longue agent interne
             */
            nomAgentTraitement: string;
            /*
             R�f�rence externe EDS
             */
            edsDomiciliation: number;
            /*
             R�f�rence externe EDS
             */
            referenceExterneEDSNiveau1: number;
            /*
             Type �l�ment structure
             */
            typeEDS: string;
            /*
             Identifiant �l�ment structure
             */
            identifiantElementStructure: number;
            /*
             Type �l�ment structure
             */
            typeElementStructure: string;
            /*
             Code mise en portefeuille
             */
            codeTypePortefeuille: string;
            /*
             R�f�rence externe agent
             */
            codeAgentSuiviPar: number;
            /*
             Identifiant El�ment structure
             */
            idEdsInterneSuiviPar: number;
            /*
             Code civilit� personne physique
             */
            codeCiviliteSuiviPar: string;
        }

        /*
        * Interface synthese client suivi GP
        * utilis� dans le bloc Commercial
        */
        export interface ISyntheseClientGP {
            /*
             Code �tat suivi personnalis�
             */
            codeEtatSuiviPersonnalise: string;
            /*
             Libell� calcul� court EDS
             */
            libelleCalculeCourtEds: string;
            /*
             Libell� calcul� court EDS
             */
            libelleCalculeCourtEds1: string;
            /*
             D�but validit� gestion priv�e
             */
            debutValiditeGestionPrivee: string;
            /*
             Libell� calcul� court EDS
             */
            libelleCourtEDSClientGP: string;
        }

        export interface ISyntheseClientSegRevise {
            /*
             Code forcage TP segmentation
             */
            codeForcageTpSegmentation: string;
            /*
             Date calcul segmentation
             */
            dateSegmRisqueRevu: string;
            /*
             Code segmentation CODLSH
             */
            codeSegmRevu: string;
            /*
             Libell� court segmentation LIDLSC
             */
            libelleCourtSegmRevu: string;
            /*
             Libell� segmentation
             */
            libelleSegmRevu: string;
        }

        export interface ISyntheseClientSegAu1erJanv {
            /*
             Date calcul segmentation
             */
            dateSegmRisque0101: string;
            /*
             Code segmentation
             */
            codeSegm0101: string;
            /*
             Libell� court segmentation
             */
            libelleCourtSegm0101: string;
            /*
             Libell� segmentation
             */
            libelleSegm0101: string;
        }

        //export interface IListeSyntheseClientSegRevise {
        //    syntheseClientSegmentation: Array<ISyntheseClientSegRevise>;
        //}

        export interface IListeSyntheseClientSegAu1erJanv {
            listeSyntheseClientSegAu1erJanv: Array<ISyntheseClientSegAu1erJanv>;
        }

        export interface IListeSyntheseClientGP {
            listeSyntheseClientGP: Array<ISyntheseClientGP>;
        }

        export interface ISyntheseClientPiecesManquantes {
            /*
             Nb pi�ces manquantes
             */
            nbPiecesManquantes: number;
        }

        export interface ISyntheseClientDonneesCommerciales {
            /*
             Code existence alertes com.
             */
            codeExistenceAlertesCom: string;
            /*
             Code existence info. Client
             */
            codeExistenceInfoclient: string;
            /*
             Code existence info Liste Noire
             */
            codeExistenceInfoListeNoire: string;
            /*
             Date arrete dossier succession
             */
            dateArreteDossierSuccession: string;
            /*
             Code existence accroche guichet
             */
            codeExistenceAccrocheGuichet: string;
            /*
             Nb dossiers vente actifs
             */
            nbDossiersVenteActifs: number;
            /*
             Code �tat compl�tude dossier
             */
            codeEtatCompletudeDossier: string;
            /*
             Date enregistrement Rendez-Vous
             */
            dateEnregistrementRendezVous: string;
            /*
             Nb opportunit�s par relation
             */
            nbOpportunitesParRelation: number;
            /*
             Code existence info interne service
             */
            codeExisteInfoInterneService: string;
            /*
             Code existence �venement commerciaux
             */
            codeExistenceEvtCommerciaux: string;
            /*
             Indic existence RDV jour/client
             */
            indicExistenceRdvJourClient: string;
            /*
             undefined
             */
            syntheseClientPiecesManquantes: ISyntheseClientPiecesManquantes;
        }

        export interface ISyntheseClientSurendettement {
            /*
             Indic pr�sence oppo 0109 active
             */
            indicPresenceOppo0109Active: string;
            /*
             Code famille dossier
             */
            codeFamilleDossier: string;
        }

        //segementation marche
        export interface IInfosSegmentationMarcheReponse {
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             Identifiant personne
             */
            identificationTiers: string;
            /*
             Libell� segmentation
             */
            libelleSegmentationCalculee: string;
            /*
            Code segmentation
            */
            codeSegmentationCalculee: string;
            /*
             Libell� court segmentation
             */
            libelleCourtSegmentationCalculee: string;
            /*
             Date calcul segmentation
             */
            dateCalculSegmentation: string;
            /*
             Date de modification de la segmentat
             */
            dateModificationSegmentation: string;
            /*
             Code forcage TP segmentation
             */
            codeForcageSegmentation: string;
            codeSegmentationForcee: string;
            libelleSegmentationForcee: string;
            libelleCourtSegmentationForcee: string;
            /*
             Code type segmentation
             */
            codeTypeSegmentMarche: string;

        }
        //caracteristique agence
        export interface ICaracteristiqueAgence {
            /*
             undefined
             */
            comptoirGuichetRattachement: IComptoirGuichetRattachement;
            /*
             undefined
             */
            donneeCommune: IDonneeCommune;
            /*
             undefined
             */
            donneeSpecifique: IDonneeSpecifique;
            /*
             undefined
             */
            responsableAgence: IResponsableAgence;
            /*
             undefined
             */
            localisation: Array<ILocalisation>;
        }

        export interface IComptoirGuichetRattachement {
            /*
             Il correspond � un d�coupage administratif pour la Banque de France.
            Il sert � remonter � la BDF les informations ventil�es par comptoir.
             */
            codeComptoirBDF: string;
            /*
             R�f�rence d'identification d'un guichet risques BDF.
            Num�ro de guichet risques attribu� � un �tablissement par la BDF.
            Un �tablissement peut disposer de plusieurs guichets risques.
             */
            codeGuichetRisqueBDF: string;
            /*
             R�f�rence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est r�pertori� par la Banque de France.
            Un Etablissement bancaire peut disposer de plusieurs guichets.
        
            Exemples :
            '90000' : IDF PARIS  de la CE Ile de France
            '00600' : LILLE      de la CE Nord France Europe
             */
            codeGuichetInterbancaire: string;
            /*
             Code Guichet BDF pour les Centralisations Financi�res Territoriales (CEFIT).
            Permet d'effectuer des Regroupements autour de cette notion.
            Cette donn�e est �galement utilis�e par la LUCA REPORT anciennement BAFI.                                           
        
            Exemple :
             '10100' pour ABBEVILLE CENTRE
             */
            codeGuichetStatistiqueBDF: string;
            /*
             Identifie un guichet (notion agence) bancaire selon la r�glementation BAFI BCE.
                Valeurs propres � chaque Etablissement.
                Codification libre fix�e entre la BDF et les Etablissements.
                N�cessaire � la production de certains �tats r�glementaires apparus avec la r�forme BCE 2003 (8495, 8097G, 8597I ...).
             */
            codeGuichetBCE: string;
            /*
             Se rapporte � un point de vente ou une agence.
                Indique si celui-ci fait partie de la liste BDF permettant de produire certains �tats r�glementaires (� l'heure actuelle, un seul, le 8097i).
        
                Valeurs :
                'O'        oui
                'N'        non
             */
            codeEchantillonBCE: string;
            /*
             Indicateur pr�cisant la rubrique codeGuichetBCE.
        
            Valeurs :
            0          permanent
            1          non-permanent
            9          valeur non-significative
             */
            indicateurGuichetPermanentBCE: string;
            /*
             Libell� associ� au codeComptoirBDF
             */
            libelleComptoirBDF: string;
            /*
             libell� associ� au codeGuichetRisqueBDF
             */
            libelleGuichetRisqueBDF: string;
        }

        export interface IDonneeCommune {
            /*
             R�f�rence externe d'un �l�ment de structure dans un Etablissement du GCE.
            R�f�rence connue de l'Etablissement.
            Identifiant d�fini en fonction du type d'�l�ment de structure.
             */
            referenceElementStructure: number;
            /*
             Num�ro d'identification interne d'un �l�ment de structure d'un Etablissement du GCE.
            Correspond � un type : si�ge, agence, service, poste fonctionnel, ...
            Num�ro chronologique attribu� par le syst�me : r�f�rence unique dans MYSYS (identifiant interne).
             */
            identifiantElementStructure: number;
            /*
             Indique le type organisationnel d'un �l�ment de structure d'un Etablissement du GCE.                 
            Typologie propre � chaque Etablissement du GCE.
            certains types d'EDS sont INVARIANTS dans le SI et sont communs � tous les Etablissements :
            '008' Si�ge
            '003' Agence (Point de vente)
            '010' GAB
            '020' Guichet (au sens arr�t� de caisse)
            '001' Poste fonctionnel
            '002' Service
            '009' Entit� Administrative (Guichet interbancaire)
        
            Attention : un type d'EDS invariant peut avoir un libell� sp�cifique par Etablissement.
            Exemple : 
            '003'   agence ou point de vente
             */
            typeElementStructure: string;
            /*
             Libell� de d�signation d'un �l�ment de structure appartenant � un Etablissement du GCE.
             */
            libelleElementStructure: string;
            /*
             Cette rubrique d�crit la date de d�but de validit� d'un point de vente ou d'une agence.
             */
            dateDebutValiditeEDS: string;
            /*
             Cette rubrique d�crit la date de fin de validit� d'un point de vente ou d'une agence.
             */
            dateFinValiditeEDS: string;
            /*
             Identifiant d'un Etablissement du GCE.
        Correspond au code Banque sous lequel une Caisse ou un Etablissement du r�seau CE est r�pertori�e par la Banque de France.
             */
            codeEtablissement: string;
            /*
             D�nomination du type de l'�l�ment de structure.
            Exemples :
            poste fonctionnel
            service
            agence
            unit� commerciale
            secteur commercial
            groupe commercial
            direction
            si�ge
            entit� administrative
            GAB
             */
            libelleTypeElementStructure: string;
        }

        export interface IDonneeSpecifique {
            /*
             D�finit le type d'agence.
            Les valeurs comprises entre 50 et 59 sont utilis�es pour rep�rer les Agences relais d'un autre �tablissement apporteurs ou Partenaires (Param�trage
            utilis� actuellement que par le CFF).
        
            Exemples :
             '01' : agence de proximit�
             '02' : agence phare
             '03' : agence rattach�e       
             '70' : Inchauspe (typologie 1)
             '71' : La R�union (typologie 2)
             '72' : La Martinique (typologie 2)
             '73' : La Guadeloupe (typologie 2)
             '74' : SPM (TOM) (typologie 2)
             '75' : r�serv�s pour les autres futures
              � '79' : �ventuels DOM-TOM g�r�s (5 max: Mayotte,
                      Wallis et Futuna, St-Barth et St Martin,
                      Guyane) (typologie 2)
             '80' : clients japonais (typologie 3)
             */
            typeAgence: string;
            /*
             Code indiquant s'il existe un coffre.
        
                Valeurs :
                '1'        oui, il existe un coffre
                '0'        non
                      */
            codeExistenceCoffre: string;
            /*
             D�termine si le d�p�t ch�que sous enveloppe fait l'objet d'une validation automatique ou non.
            Donn�e du profil de l'agence.
        
            Valeurs :
            'O'        OUI - Validation automatique d�p�t ch�que
            'N'        NON - Pas de validation automatique d�p�t ch�que
                 */
            codeValidationAutoDepotCheque: string;
        }

        export interface ILocalisation {
            /*
             Identifie un site de localisation d'un EDS.
             Num�ro chronologique attribu� par le syst�me : r�f�rence unique dans MYSYS (identifiant interne).
             */
            identifiantSite: number;
            /*
             D�termine la nature/finalit� d'une adresse.
        
            Valeurs :
             1 / Localisation g�ographique
             4 / Postale
                 */
            typeAdresse: string;
            /*
             Cette rubrique d�crit la date de d�but de validit� d'une localisation d'EDS.
             */
            dateDebutValiditeSite: string;
            /*
             Cette rubrique d�crit la date de fin de validit� d'une localisation d'EDS.
             */
            dateFinValiditeSite: string;
        }

        export interface IResponsableAgence {
            /*
             Identifiant de l'�l�ment de structure qui dirige : Responsable hi�rarchique (poste fonctionnel).
             */
            identifiantResponsableEDS: number;
            /*
             Cette rubrique d�crit la date de d�but de validit� du lien Responsable du point de vente ou de l'agence.
             */
            dateDebutValiditeResponsable: string;
            /*
             Cette rubrique d�crit la date de fin de validit� du lien Responsable du point de vente ou de l'agence.
             */
            dateFinValiditeResponsable: string;
        }

        //segment commercial
        export interface IListeDetailRelations {
            codeSegmentation: string;
            codeSegmentActivationPro: string;
            typeSegmentationSuMensuel: string;
            codeSegmentationSuMensuel: string;
            identifiantPersonne: number;
            nomRaisonSociale: string;
            libelleSegmentationCommercialLigne1: string;
            libelleSegmentationCommercialLigne2: string;
            libelleSegmentActivation: string;
        }

        export interface ISegmentCommercial {
            listeDetailRelations: Array<IListeDetailRelations>;
        }
    }

    export module Profil {

        export interface ISyntheseClientOrigineClient {
            /*
             Type cat�gorie client
             */
            typeCategorieClient: string;
            /*
             Indic soci�taire
             */
            indicSocietaire: string;
            /*
             Libell� court SLE
             */
            libelleCourtSle: string;
            /*
             Num�ro t�l�phone adresse
             */
            numeroTelephoneDomicile: string;
            /*
             Adresse e-mail
             */
            adresseEMail: string;
            /*
             Total collecte de la personne
             */
            totalCollectePersonne: number;
            /*
             Total cr�dit de la personne
             */
            totalCreditPersonne: number;
            /*
             Total impay�s de la personne
             */
            totalImpayesPersonne: number;
            /*
             Total d�bits diff�r�s de la personne
             */
            totalDebitsDifferesPersonne: number;
            /*
             Indicateur existence liens
             */
            indicateurExistenceLiens: string;
            /*
             Indicateur existence services
             */
            indicateurExistenceServices: string;
            /*
             Libell� INSEE pays
             */
            libelleInseePays: string;
            /*
             Total tr�sorerie de la personne
             */
            totalTresoreriePersonne: number;
            /*
             Code r�sident
             */
            codeResident: string;
            /*
             Total des contentieux de la personne
             */
            totalDesContentieuxPersonne: number;
            /*
             Code statut douteux personne
             */
            codeStatutDouteuxPersonne: string;
            /*
             Code blocage VAO
             */
            codeBlocageVao: string;
            /*
             Total tr�sorerie personne cpte joint
             */
            totalTresoreriePersonneCpteJoint: number;
            /*
             Total collecte personne cpte joint
             */
            totalCollectePersonneCpteJoint: number;
            /*
             Identifiant Client
             */
            identifiantBad: string;
            /*
             Code �tat statut PRO
             */
            codeEtatStatutPro: string;
            /*
             Code phase recouvrement
             */
            codePhaseRecouvrement: string;
            /*
             Total cr�ances gel�es personne
             */
            totalCreancesGeleesPersonne: number;
            /*
             Code situation
             */
            codeSituation: string;
            /*
             Total cpt de cantonnement personne
             */
            totalCptCantonnementPersonne: number;
            /*
             Indicateur existence participations
             */
            indicateurExisteParticipations: string;
            /*
             Code devise ISO 4217 alpha-3
             */
            codeDeviseOrigineClient: string;
            /*
             Code Etablissement entit� juridique
             */
            codeEtablissementOrigineClient: string;
            /*
             Code personnalit� juridique
             */
            codePersonnaliteJuridique: string;
            /*
             Num�ro t�l�phone Travail
             */
            numeroTelephoneTravail: string;
            /*
             Num�ro t�l�phone correspondance
             */
            numeroTelephoneCorresp: string;
            /*
             Identifiant El�ment structure
             */
            idEdsOrigineClient: number;
        }

        export interface ISyntheseClientProfil {
            /*
             date de naissance
             */
            dateNaissance: string;
            /*
             designation courte de la personne
             */
            designationCourte: string;
            /*
             code categorie socio professionnelle
             */
            codeCategorieSocioProf: string;
            /*
             date effet CSP
             */
            dateEffetCsp: string;
            /*
             libelle profession de la personne
             */
            libelleProfessionParticulier: string;
            /*
             code appartenance reseau
             */
            codeAppartenanceReseau: string;
            /*
             code suivi commercial
             */
            codeSuiviCommercial: string;
            /*
             nom commercial
             */
            nomCommercial: string;
            /*
             nom de famille de la personne
             */
            nomFamille: string;
            /*
             prenom de la personne
             */
            prenom: string;
            /*
             code capacite juridique
             */
            codeCapaciteJuridique: string;
            /*
             motif de la cloture de l'entite titulaire
             */
            codMotifClotureEntTitulaire: string;
            /*
             code civilite de la personne
             */
            codeCivilite: string;
            /*
             nom d'usage de la personne
             */
            nomUsage: string;
            /*
             indique si la personne est un tiers
             */
            codeClientTiers: string;
            /*
             date de deces de la personne
             */
            dateDeces: string;
            /*
             type cotation FIBEN
             */
            typeCotationFIBEN: string;
            /*
             indique s'il existe un dossier professionnel
             */
            indicExistenceProfessionnel: string;
            /*
             code de la commune de naissance de la personne
             */
            codeCommuneNaissance: string;
            /*
             code cotation
             */
            codeCotation: string;
            /*
             date de la derni�re MAJ de la cotation
             */
            dateDerniereMAJCotationProf: string;
            /*
             date de la derni�re revision de la cotation
             */
            dateDernRevisionCotationPro: string;
            /*
             date de la derni�re notation BDF
             */
            dateSituationBDF: string;
            /*
             note Bale II de la personne
             */
            noteBale2Personne: string;
            /*
             date MAJ enregistrement
             */
            dateMAJEnregistrement: string;
            /*
             libelle moteur de recherche de la notation Bale II
             */
            libelleMoteur: string;
            /*
             code etablissement qui a fait la notation Bale II
             */
            codeEtablissementNotation: string;
            /*
             note Bale II precedente
             */
            cotationPrecedenteFibenBdf: string;
            /*
             date de cotation de la note Bale II precedente
             */
            dateCotationFibenBdfN1: string;
            /*
             indique une degradation de la cotation fiben
             */
            codeDegradationCotationFiben: string;
            /*
             date attribution BDF
             */
            dateBDFAttributionEvenement: string;
            /*
             libelle etablissement notation
             */
            libelleEtablissementNotation: string;
            /*
             code etablissement pilote
             */
            codeEtablissementPilote: string;
            /*
             libelle etablissement pilote
             */
            libelleEtablissementPilote: string;
            /*
             indicateur presence acte saisie ou ATD - ALERTE
             */
            indicPresenceActesaisieOuATD: string;
            /*
             Code alerte watch List
             */
            codeAlerteWatchList: string;
            /*
             indique la presence d'une alerte sur la personne
             */
            indicAlerteSurPersonne: string;
            /*
             indique la presence d'une reclamation sur la personne
             */
            indicAlerteReclamation: string;
            /*
             code administration specifique
             */
            codeAdministrationSpecifique: string;
            /*
             code degre sensibilite personne
             */
            codeDegreSensibilitePersonne: string;
            /*
             date entree en relation
             */
            dateEntreeRelation: string;
            /*
             code niveau watch list locale
             */
            codeNiveauWatchListLocale: string;
            /*
             date entree en watch list locale
             */
            dateEntreeEnWatchListLocale: string;
            /*
             date sortie Watch List locale
             */
            dateSortieWatchListLocale: string;
            /*
             code niveau watch list nationale
             */
            codeNiveauWatchListNationale: string;
            /*
             date entree en watch list nationale
             */
            dateEntreeEnWatchListNationale: string;
            /*
             date sortie watch list nationale
             */
            dateSortieWatchListNationale: string;
            /*
             code niveau watch list banque
             */
            codeNiveauWatchListBanqueRef: string;
            /*
             date entree en watch list banque
             */
            dateEntreeEnWatchListBanqueRef: string;
            /*
             date sortie watch list banque
             */
            dateSortieWatchListBanqueRef: string;
            /*
             indique un enregistrement hors presence client
             */
            indicEnregHorsPresenceClient: string;
            /*
             code tete groupe
             */
            codeTeteGroupe: string;
            /*
             code nature lien reglementaire
             */
            codeNatureLienReglementaire: string;
            /*
             type groupe
             */
            typeGroupe: string;
            /*
             code sens contact
             */
            codeSensContact: string;
            /*
             code canal contact
             */
            codeCanalContact: string;
            /*
             code media contact
             */
            codeMediacontact: string;
            /*
             date contact
             */
            dateContact: string;
            /*
             code motif contact
             */
            codeMotifContact: string;
            /*
             code niveau connaissance client
             */
            codeNiveauConnaissanceClient: string;
            /*
             date derniere evaluation connaissance
             */
            dateDernEvaluationConnaissance: string;
            /*
             indique si la personne est un prospect ou pas
             */
            codeProspect: string;
            /*
             indique si la personne est presum�e deced�e ou non
             */
            indicDecesPresume: string;
            /*
             date du deces pr�sume
             */
            dateDecesPresume: string;
            /*
             code presence compte en desherence
             */
            codePresenceCompteDesherence: string;

            syntheseClientProfilSpecifiquePersonneMorale: ISyntheseClientProfilSpecifiquePersonneMorale;
        }

        export interface ISyntheseClientProfilSpecifiquePersonneMorale {
            /*
             Raison sociale
             */
            raisonSocial: string;
            /*
             Num�ro SIREN professionnel
             */
            numeroSIREN: string;
            /*
             Code famille cat�gorie juridique
             */
            codeCategorieJuridique: string;
            /*
             Code cat�gorie juridique 2 dern car
             */
            codeCategoJuridi2DerCaracteres: string;
            /*
             Num�ro SIRET �tablissement
             */
            numeroSIRET: string;
            /*
             Date cr�ation juridique pers morale
             */
            dateCreationJuridique: string;
            /*
             D�signation courte lieu activit�
             */
            designationLieuActivite: string;
        }

        export interface ISyntheseClientEntiteTitulaire {
            /*
             Num�ro entit� titulaire
             */
            numeroEntiteTitulaire: number;
            /*
             Mode composition entit� titulaire
             */
            modeCompositionEntiteTitulaire: string;
            /*
             Code type usage entit� titulaire
             */
            codeUsageEntiteTitulaire: string;
            /*
             Code �tat personne/entit� titulaire
             */
            codeEtatPersonne: string;
            /*
             Indicateur entit� titulaire douteuse
             */
            indicateurEntiteTitulaireDouteuse: number;
            /*
             Code Cotation Bancaire
             */
            codeCotationBancaire: string;
            /*
             Sous divis/mode composit. indivision
             */
            sousCodeModeCompositionET: string;
            /*
             Timestamp Ev�nement Notation
             */
            timestampEvenementNotation: string;
            /*
             Code Domaine de Gestion PACBASE
             */
            codeDomaineGestionPacbase: string;
            /*
             Code Message erreur (008)
             */
            codeMessageErreur8c: string;
            /*
             Libelle Message Erreur sur 80 car.
             */
            libelleReponse: string;
            /*
             D�signation bancaire courte
             */
            designationBancaireEntTitulaire: string;
            /*
             Identifiant El�ment structure
             */
            idEdsInterneEntiteTitulaire: number;
            /*
             R�f�rence externe EDS
             */
            edsDomiciliationEntiteTitulaire: number;
            /*
             Type �l�ment structure
             */
            typeEDSEntiteTitulaire: string;
            /*
             Libell� calcul� court EDS
             */
            libelleCalculeCourtEdsET: string;
            /*
             Identifiant �l�ment structure
             */
            identifiantEDSEntiteTitulaire: number;
            /*
             R�f�rence externe EDS
             */
            referenceExterneEDSN1ET: number;
            /*
             Type �l�ment structure
             */
            typeEDSNiveau1: string;
            /*
             Libell� calcul� court EDS
             */
            libelleCourtEDSEntiteTitulaire: string;
            /*
             Num�ro t�l�phone adresse
             */
            numeroTelephoneDomicileET: string;
            /*
             Note calcul�e
             */
            noteBale2EntiteTitulaire: string;
        }

        export interface IListeSyntheseClientEntiteTitulaire {
            listeSyntheseClientEntiteTitulaire: ISyntheseClientEntiteTitulaire[];
        }
    }

    /**
     * donn�es li�es aux produits
     */
    export module Produits {
        export interface ISyntheseClientProduits {
            listeSyntheseClientCodeEtatProduit: Array<ISyntheseClientCodeEtatProduit>;
        }

        export interface ISyntheseClientCodeEtatProduit {
            /*
             Code �tat Produit / Service
             */
            codeEtatProduitService: string;
            listeSyntheseClientEntiteTitulaireProduit: Array<ISyntheseClientEntiteTitulaireProduit>;
        }
        export interface ISyntheseClientProdSmile {
            codeAdhesionActeGestion: string;
            operationSurForfaitALOrigine: string;
            identifiantCarteSmiles: string;
            dateCreationContratSMiles: string;
            dateResiliationContratSMiles: string;
        }


        export interface ISyntheseClientEntiteTitulaireProduit {
            numeroEntiteTitulaireProd: number;

            listeSyntheseClientProdAssIARD: Array<ISyntheseClientProdAssIARD>;
            /*
             undefined
             */
            listeSyntheseClientProdLivretA: Array<ISyntheseClientProdLivretA>;
            /*
             undefined
             */
            listeSyntheseClientProdLivretB: Array<ISyntheseClientProdLivretB>;
            /*
             undefined
             */
            listeSyntheseClientProdLEP: Array<ISyntheseClientProdLEP>;
            /*
             undefined
             */
            listeSyntheseClientProdCptDepot: Array<ISyntheseClientProdCptDepot>;
            /*
             undefined
             */
            listeSyntheseClientProdLEL: Array<ISyntheseClientProdLEL>;
            /*
             undefined
             */
            listeSyntheseClientProdPEL: Array<ISyntheseClientProdPEL>;
            /*
             undefined
             */
            listeSyntheseClientProdPER: Array<ISyntheseClientProdPER>;
            /*
             undefined
             */
            listeSyntheseClientProdPEP: Array<ISyntheseClientProdPEP>;
            /*
             undefined
             */
            listeSyntheseClientProdPEA: Array<ISyntheseClientProdPEA>;
            /*
             undefined
             */
            listeSyntheseClientProdLivretJeune: Array<ISyntheseClientProdLivretJeune>;
            /*
             undefined
             */
            listeSyntheseClientProdLivretDev: Array<ISyntheseClientProdLivretDev>;
            /*
             undefined
             */
            listeSyntheseClientProdCptInstance: Array<ISyntheseClientProdCptInstance>;
            /*
             undefined
             */
            listeSyntheseClientProdEscompteCCE: Array<ISyntheseClientProdEscompteCCE>;
            /*
             undefined
             */
            listeSyntheseClientProdCptTeoz: Array<ISyntheseClientProdCptTeoz>;
            /*
             undefined
             */
            listeSyntheseClientProdVega: Array<ISyntheseClientProdVega>;
            /*
             undefined
             */
            listeSyntheseClientProdCredit: Array<ISyntheseClientProdCredit>;
            /*
             undefined
             */
            listeSyntheseClientProdTitres: Array<ISyntheseClientProdTitres>;
            /*
             undefined
             */
            listeSyntheseClientProdCoffre: Array<ISyntheseClientProdCoffre>;
            /*
             undefined
             */
            listeSyntheseClientProdCarteAurore: Array<ISyntheseClientProdCarteAurore>;
            /*
             undefined
             */
            listeSyntheseClientProdAssCNP: Array<ISyntheseClientProdAssCNP>;
            /*
             undefined
             */
            listeSyntheseClientProdCCE: Array<ISyntheseClientProdCCE>;
            /*
             undefined
             */
            listeSyntheseClientProdCreditComp: Array<ISyntheseClientProdCreditComp>;
            /*
             undefined
             */
            listeSyntheseClientProdAssCFF: Array<ISyntheseClientProdAssCFF>;
            /*
             undefined
             */
            listeSyntheseClientProdDATHorsPEL: Array<ISyntheseClientProdDATHorsPEL>;
            /*
             undefined
             */
            listeSyntheseClientProdDATPEL: Array<ISyntheseClientProdDATPEL>;
            /*
             undefined
             */
            listeSyntheseClientProdCreditAlis: Array<ISyntheseClientProdCreditAlis>;
            /*
             undefined
             */
            listeSyntheseClientProdCreditCEDI: Array<ISyntheseClientProdCreditCEDI>;
            /*
             undefined
             */
            listeSyntheseClientProdCiloger: Array<ISyntheseClientProdCiloger>;
            /*
             undefined
             */
            listeSyntheseClientProdTrade: Array<ISyntheseClientProdTrade>;
            /*
             undefined
             */
            listeSyntheseClientProdCreditBail: Array<ISyntheseClientProdCreditBail>;
            /*
             undefined
             */
            listeSyntheseClientProdEpargSalariale: Array<ISyntheseClientProdEpargSalariale>;
            /*
             undefined
             */
            listeSyntheseClientProdEpargnSalComp: Array<ISyntheseClientProdEpargnSalComp>;
            /*
             undefined
             */
            listeSyntheseClientProdOptAlis: Array<ISyntheseClientProdOptAlis>;
            /*
             undefined
             */
            listeSyntheseClientProdAutoTransfert: Array<ISyntheseClientProdAutoTransfert>;
            /*
             undefined
             */
            listeSyntheseClientProdSAP: Array<ISyntheseClientProdSAP>;
            /*
             undefined
             */
            listeSyntheseClientProdGarantieSante: Array<ISyntheseClientProdGarantieSante>;
            /*
             undefined
             */
            listeSyntheseClientProdFacturea: Array<ISyntheseClientProdFacturea>;
            /*
             undefined
             */
            listeSyntheseClientProdCartAffComp: Array<ISyntheseClientProdCartAffComp>;
            /*
             undefined
             */
            listeSyntheseClientProdCartAffaire: Array<ISyntheseClientProdCartAffaire>;
            /*
             undefined
             */
            listeSyntheseClientProdMomentverite: Array<ISyntheseClientProdMomentverite>;
            /*
             undefined
             */
            listeSyntheseClientProdSocfim: Array<ISyntheseClientProdSocfim>;
            /*
             undefined
             */
            listeSyntheseClientProdSmileComp: Array<ISyntheseClientProdSmileComp>;
            /*
             undefined
             */
            listeSyntheseClientProdCarteDebCredit: Array<ISyntheseClientProdCarteDebCredit>;
            /*
             undefined
             */
            listeSyntheseClientProdCautionFiliale: Array<ISyntheseClientProdCautionFiliale>;
            /*
             undefined
             */
            listeSyntheseClientProdAssIARDComp: Array<ISyntheseClientProdAssIARDComp>;
            /*
             undefined
             */
            listeSyntheseClientProdCCI: Array<ISyntheseClientProdCCI>;
            /*
             undefined
             */
            listeSyntheseClientProdOctav: Array<ISyntheseClientProdOctav>;
            /*
             undefined
             */
            listeSyntheseClientProdAssCFFComp: Array<ISyntheseClientProdAssCFFComp>;
            /*
             undefined
             */
            listeSyntheseClientProdAssIARDAllianz: Array<ISyntheseClientProdAssIARDAllianz>;
            /*
             undefined
             */
            listeSyntheseClientProdOPEFI: Array<ISyntheseClientProdOPEFI>;
            /*
             undefined
             */
            listeSyntheseClientProdAssNatixis: Array<ISyntheseClientProdAssNatixis>;
            /*
             undefined
             */
            listeSyntheseClientProdContratMonetique: Array<ISyntheseClientProdContratMonetique>;
            /*
             undefined
             */
            listeSyntheseClientProdCreditExterne: Array<ISyntheseClientProdCreditExterne>;
            /*
             undefined
             */
            listeSyntheseClientProdAssParaBanc: Array<ISyntheseClientProdAssParaBanc>;
            /*
             undefined
             */
            listeSyntheseClientProdCartado: Array<ISyntheseClientProdCartado>;
            /*
             undefined
             */
            listeSyntheseClientProdGarSanteColl: Array<ISyntheseClientProdGarSanteColl>;
            /*
             undefined
             */
            listeSyntheseClientProdSmile: Array<ISyntheseClientProdSmile>;

            listeSyntheseClientProdCodevi: Array<ISyntheseClientProdCodevi>;
        }

        export interface IListeSyntheseClientProduitInfoCommune {
            listeSyntheseClientProduitInfoCommune: Array<ISyntheseClientProduitInfoCommune>;
        }

        export interface ISyntheseClientProduitInfoCommune {
            /*
          Code devise ISO 4217 alpha-3
          */
            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
            Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            /*
             Libell� court de la cat�gorie du produit. Ce champ n'est pas aliment� par la DBPE. Il est r�cup�r� � partir de tables d�localis�es. Voici la r�gle utilis�e:

            1- Acc�der � la table DV7A � partir du CDMPR =codeProduit  afin de r�cuperer les champs CTDMCP et CTDMDO

            2- Ces 2 champs permettent d�aller par la suite dans la table DV2C pour recuperer les libelles :
            -	libellecategorie, qui sera aliment� par LIDMDO
             */
            libelleCategorie: string;

            /*
             Libell� long de la cat�gorie du produit. M�me r�gle que pour libelleCategorie, sauf que l'on r�cup�re le champ LCDMDO dans la table DV7A.
            */
            libelleCategorieLong: string;
            /*
             Solde produit commun. Ce champ est aliment� ind�pendamment de la DBPE (cf. sp�cifications IHM).Sa valeur par d�faut est 0 .Ce champ est en cents.
             Il est aliment� pour tous les produits sauf: 
             AssCFFComp (SX8Y), AssIARDAllianz (SX8Z), AssIARDComp (SX8N), AssIARD (SX5K), AssParaBanc (SX5J), AutoTransfert (SX75),
             Cartado (SX7B), Coffre (SX5D), ContratMonetique (SX95), CreditExterne (SX59), GarantieSante (SX7M), GarSanteColl (SX97),
             Momentverite (SX7Y), OPEFI (SX93), SAP (SX7A), SmileComp (SX8C), Smile (SX66)
            */
            soldeProduitCommun: number;
            /*
             Valeur non modifi� fournie par la DBPE du champ COGXCP
             */
            codeEtatProduitServiceOrigine: string;
            /*
             Indicateur presence dans RPM ou FdS
             */
            indPresenceDansRpm: string;

        }

        export interface ISyntheseClientProdOffreInfoCommune extends ISyntheseClientProduitInfoCommune {
            /*
             Num�ro offre souscrite
             */
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             * libelle de l'offre
             */
            libelleOffre?: string;
        }

        export interface ISyntheseClientProdSPSPereCommune extends ISyntheseClientProdOffreInfoCommune {
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;

            libelleOffre: string;
        }

        export interface ISyntheseClientProdCCI extends ISyntheseClientProdSPSPereCommune {
            /*
             Code nature compte CCI
             */
            codeNatureCompteCci: string;
            /*
             Solde comptable du compte
             */
            soldeComptableCompte: number;
            /*
             Mt solde disponible compte
             */
            mtSoldeDisponibleCompte: number;
            /*
             Libell�-1 Compte CCI
             */
            libelle1CompteCci: string;
            /*
             Libell� court nature compte
             */
            libelleCourtNatureCompte: string;
            /*
             Libell�-2 Compte CCI
             */
            libelle2CompteCci: string;
            /*
             R�f�rence produit / service
             */
            numeroCompteCCI: string;
            /*
             Code devise tenue compte ISO4217
             */
            codeDeviseTenueCompteCCI: string;
        }

        export interface ISyntheseClientProdCCE extends ISyntheseClientProdSPSPereCommune {
            /*
             Solde / devise tenue compte
             */
            soldeDeviseTenueCompte: number;
            /*
             Mt autorisation d�couvert
             */
            montantDecouvertAutoDevise: number;
            /*
             Type autorisation d�couvert
             */
            typeAutorisationDecouvert: string;
            /*
             Type nature compte Entreprise
             */
            typeNatureCompteEntreprise: string;
            /*
             Code type fusion
             */
            codeTypeFusion: string;
            /*
             Type contrat Entreprise
             */
            typeContratEntreprise: string;
            /*
             Code nature compte CCE (3 car)
             */
            codeNatureCompteCCE: string;
            /*
             Indicateur oppo interdit bancaire
             */
            indicOppoIBCCE: string;
            /*
             Indicateur presence dans RPM ou FdS
             */
            PresenceDansRpmCCE: string;
            /*
             Code devise tenue compte ISO4217
             */
            codeDeviseTenueCompteCCE: string;
            /*
             Solde compte / devise tenue cpte
             */
            soldeCteDeviseTenueCpteCCE: number;
            /*
             Montant d�couvert exprim� en devise
             */
            montantDecouvertDevise: number;
            /*
             Code Produit National
             */
            codeProduitNationalCCE: string;
            /*
             Libell� nature compte CCE
             */
            libelleNatureCompteCCE: string;
        }

        export interface ISyntheseClientProdCarteAurore extends ISyntheseClientProdSPSPereCommune {
            /*
             Mt d�couvert max sur carte AURORE
             */
            mtDecouvertMaxSurCarteAurore: number;
            /*
             Activit� du contrat AURORE
             */
            activiteContratAurore: string;
            /*
             montant mensualit� carte aurore
             */
            montantMensualiteCarteAurore: number;
            /*
             montant du decouvert utile
             */
            montantDecouvertUtileAurore: number;
            /*
             N� Carte R�volving
             */
            numeroCarteRevolvingAurore: string;
            /*
             Num�ro de dossier CETELEM
             */
            numDossierCetelemAurore: string;
            /*
             string ouverture produit service
             */
            dateOuverturePSAurore: string;
            /*
             string dern maj fichier image
             */
            dateDernMajFichierImageAurore: string;
        }

        export interface ISyntheseClientProdMntCommun extends ISyntheseClientProdSPSPereCommune {
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;

        }

        export interface ISyntheseClientProdEscompteCCE extends ISyntheseClientProdSPSPereCommune {
            /*
             CODE CATEGORIE DE PAPIER
             */
            codeCategoriePapier: string;
            /*
             Signe montants EIB
             */
            signeMontantsEib: string;
            /*
             Montant cumul� des effets
             */
            montantCumuleDesEffets: number;
            /*
             MONTANT AUTORISATION ESCOMPTE
             */
            montantAutorisationEscompte: number;
        }

        export interface ISyntheseClientProdCptTeoz extends ISyntheseClientProdSPSPereCommune {
            /*
             Libell� �tat compte TEOZ
             */
            libelleEtatCompteTeoz: string;
            /*
             montant de decouvert maximum sur le compte TEOZ
             */
            mtDecouvertMaxSurCptTeoz: number;
            /*
             montant du decouvert utile
             */
            montantDecouvertUtileTeoz: number;
            /*
             N� Carte R�volving
             */
            numCarteRevolvingTeoz: string;
            /*
             Activit� du contrat Teoz
             */
            activiteContratTeoz: string;
            /*
             montant mensualit� carte teoz
             */
            montantMensualiteCarteTeoz: number;
            /*
             Num�ro de dossier teoz
             */
            numeroDossierCetelemTeoz: string;
            /*
             string ouverture produit service
             */
            dateOuverturePSTeoz: string;
            /*
             string dern maj fichier image
             */
            dateDernMajFichierImageTeoz: string;
            /*
             string dernier financement
             */
            dateDernierFinancementTeoz: string;
            /*
             Montant disponible
             */
            montantDisponibleTeoz: number;
            /*
             Code �tat dossier
             */
            codeEtatDossierCptTeoz: string;
            /*
             string effet �tat dossier NFI
             */
            dateEffetEtatDossierNfiTeoz: string;
            /*
             Mt solde recouvrement
             */
            mtSoldeRecouvrementTeoz: number;
        }

        export interface ISyntheseClientProdCptInstance extends ISyntheseClientProdMntCommun {

            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;
            /*
             Sous code Produit P/S
             */
            sousCodePSCptInst: string;
        }

        export interface ISyntheseClientProdCommunLivret extends ISyntheseClientProduitInfoCommune {
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;

            codeEtatLOffre?: string;
            libelleOffre?: string;
            numeroOffre?: number;
        }

        export interface ISyntheseClientProdLEP extends ISyntheseClientProdCommunLivret {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             Ann�e ayant droit
             */
            anneeAyantDroit: string;
            /*
             Indic ayant droit � justifier LEP
             */
            indicAyantDroitAJustifierLep: string;
            /*
             Ann�e de gr�ce LEP
             */
            anneeGraceLep: string;
        }

        export interface ISyntheseClientProdLEL extends ISyntheseClientProdCommunLivret {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             Code Produit Carte
             */
            codeProduitCarteLEL: string;
        }

        export interface ISyntheseClientProdPEL extends ISyntheseClientProdCommunLivret {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             string de fin du PEL
             */
            dateFinPel: string;
            /*
             Taux du PEL ou LEE
             */
            tauxPelLee: number;
            /*
             Taux plein PEL
             */
            tauxPleinPel: number;
            /*
             Montant � r�gulariser
             */
            montantARegulariser: number;
            /*
             Code �tat contractuel / anniversaire
             */
            codEtatContractuelAnniversaire: string;
            /*   undefined
            */
            syntheseClientAlertePEL: ISyntheseClientAlertePEL;
        }

        export interface ISyntheseClientProdLivretDev extends ISyntheseClientProdCommunLivret {

            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             Sous code Produit P/S
             */
            sousCodePSLivretDev: string;
            /*
             Mt versement r�gulier
             */
            mntVersementRegulierLivretD: number;
        }

        export interface ISyntheseClientProdCodevi extends ISyntheseClientProdCommunLivret {
            /*
             Code Produit Carte CODEVI
             */
            codeProduitCarteCodevi: string;
        }

        export interface ISyntheseClientProdLivretB extends ISyntheseClientProdCommunLivret {

            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;

            /*
             Sous code Produit P/S
             */
            sousCodePSLivretB: string;
            /*
             Mt versement r�gulier
             */
            mntVersementRegulierLivretB: number;
        }

        export interface ISyntheseClientProdLivretA extends ISyntheseClientProdCommunLivret {

            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             Indic livret conditionnel
             */
            indicLivretConditionnel: string;
            /*
             Indicateur Versement Direct
             */
            indicVersementDirectLivretA: string;
            /*
             Code Produit Carte
             */
            codeProduitCarteLivretA: string;
        }

        export interface ISyntheseClientProdLivretJeune extends ISyntheseClientProdCommunLivret {

            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
             string transformation du montant en euro
             */
            dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             Indic autorisation virement
             */
            indicAutorisationVirement: string;
            /*
             Indic autorisation retraits
             */
            indicAutorisationRetraits: string;
            /*
             Indicateur Versement Direct
             */
            indicVersementDirectLivret: string;
            /*
             Code Produit Carte
             */
            codeProduitCarteLivretJ: string;
        }

        export interface ISyntheseClientProdCptDepot extends ISyntheseClientProdMntCommun {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
        contrat donn� (compte, cr�dit, service ...) 
        Valeurs : 
        '0' pas d'opposition 
        '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //soldeProduitCommun: string;

            //offre souscrite
            numeroOffre: number;
            /*
             Code �tat de l'offre
             */
            codeEtatLOffre: string;
            /*
             Code caract�re forfaitaire offre
             */
            codeCaractereForfaitaireOffre: string;
            /*
             Identifiant P/S du P/S P�re
             */
            identifiantProduitSPSPere: number;
            /*
             solde produit
             */
            soldeProduit: number;
            /*
               transformation du montant en euro
                    dateTransformationEnEuro: string;
            /*
             capital en euro avant conversion
             */
            capitalEnEuroAConversion: number;
            /*
             capital en franc avant conversion
             */
            capitalEnFrancAConversion: number;
            /*
             devise de l'ancien solde du livret
             */
            codeDeviseAncienSoldeLivret: string;
            /*
             ancien solde produit
             */
            ancienSoldeProduit: number;
            /*
             Code mode gestion livret
             */
            indicateurModeGestionLivret: string;
            /*
             Indic archivage compte
             */
            indicArchivageCompteLivret: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpLivret: string;
            /*
             Indic d�tenteur carte
             */
            indicDetenteurCarte: string;
            /*
             Montant du d�couvert CDD
             */
            montantDecouvertCdd: number;
            /*
             Type du d�couvert
             */
            typeDecouvert: string;
            /*
             string fin de validite decouv. ACCEBA
             */
            dateFinValiditeDecouvAcceba: number;
            /*
             Indic existence contentieux
             */
            indicExistenceContentieux: string;
            /*
             Indicateur habilitation PREDIC
             */
            indicateurHabilitationPredic: string;
            /*
             Indicateur pertinence PREDIC
             */
            indicateurPertinencePredic: string;
            /*
             string situation PREDIC
             */
            dateSituationPredic: string;
            /*
             Code couleur du mois
             */
            codeCouleurMois: string;
            /*
             Code derni�re note du mois
             */
            codeDerniereNoteMois: string;
            /*
             Cumul Montants op�rations ecart�es
             */
            montantCumuleOperationEcartee: number;
            /*
             Cumul r�serves d'encaissement
             */
            cumulReservesEncaissement: number;
            /*
             Cumul Montants impay�s pr�ts Credec
             */
            montantCumuleImpayePret: number;
            /*
             Solde compte / devise tenue cpte
             */
            soldeCompteDeviseTenueCpte: number;
            /*
             Indic existence engt domicilation
             */
            indicExistenceEngtDomicilation: string;
            /*
             Code respect engt domiciliation
             */
            codeRespectEngtDomiciliation: string;
            /*
             Libell� personnalis� CDD
             */
            libellePersonnalise: string;
            /*
             string ouverture offre souscrite
             */
            dateOuvertureOffreSouscrite: string;
            /*
             indicateur archivage compte
             */
            indicArchivageCompteDepot: string;
            /*
             Code Produit Carte
             */
            codeProduitCarteCptDepot: string;
            /*
             Indicateur presence dans RPM ou FdS
             */
            indPresenceDansRpmCDepot: string;
            /*
             Code devise tenue compte ISO4217
             */
            codeDeviseTenueCptDepot: string;
            /*
             Cumul Montants op�.�cart�es devises
             */
            cumulMntOpeEcarteesDevises: number;
            /*
             Indicateur compte rattach� RMP
             */
            indCpteRattacheRmpDepot: string;
            /*
             Indicateur oppo interdit bancaire
             */
            indicOppoIBCptDepot: string;
        }

        export interface ISyntheseClientProdAssIARD extends ISyntheseClientProdOffreInfoCommune {
            /*
             Num�ro contrat IARD
             */
            numeroContratIard: string;
            /*
             Type situation contrat assurance
             */
            typeSituationContratAssIARD: string;
            /*
             string prise effet contrat
             */
            datePriseEffetContratIARD: string;
            /*
             Libelle court du contrat
             */
            libelleCourtContratIARD: string;
            /*
             string arr�t� informations
             */
            dateArreteInformationsIARD: string;
        }

        export interface ISyntheseClientProdAutoTransfert extends ISyntheseClientProdOffreInfoCommune {
            /*
             Code �tat traitement transfert
             */
            codeEtatTraitementTransfert: string;
            /*
             Code GUICHET client
             */
            codeGuichetClient: string;
            /*
             Libell� de l'�tat du transfert
             */
            libelleLEtatTransfert: string;
            /*
             string cr�ation enregistrement
             */
            dateCreationEnregistrement: string;
            /*
             R�f�rence produit / service
             */
            referenceProduitService: string;
            /*
             Code interbancaire banque
             */
            codeEtablissementAutoTransf: string;
            /*
             Code guichet banque
             */
            codeGuichetAutoTransf: string;
            /*
             Idt demande transfert automatique
             */
            idtDemandeTransfAuto: number;
        }

        export interface ISyntheseClientProdSocfim extends ISyntheseClientProdOffreInfoCommune {
            /*
             Nom Commercial Court P/S
             */
            nomCommercialProduitService: string;
            /*
             Libell� �tablissement bancaire 10c.
             */
            libelleEtablissementBancaire10c: string;
            /*
             Libell� statut contrat
             */
            libelleStatutContrat: string;
            /*
             Quotit� en risque port�e par garant
             */
            quotiteEnRisquePorteeParGarant: number;
            /*
             Type Concours
             */
            typeConcours: string;
            /*
             Montant autoris� Total
             */
            montantAutoriseTotal: number;
            /*
             Montant encours Total
             */
            montantEncoursTotal: number;
            /*
             Montant autoris� Quote-Part SOCFIM
             */
            montantAutoriseQuotePartSocfim: number;
            /*
             Montant encours Quote-Part SOCFIM
             */
            montantEncoursQuotePartSocfim: number;
            /*
             Quote-part financement
             */
            quotePartFinancement: number;
            /*
             Nom Court Domaine Nomenclature CNCE
             */
            nomCourtDomCnceSocfim: string;
            /*
             P�riode arr�te infos
             */
            periodeArreteInfSocfim: string;
        }

        export interface ISyntheseClientProdCarteDebCredit extends ISyntheseClientProdOffreInfoCommune {
            /*
             Decouvert max autoris�
             */
            decouvertMaxAutorise: number;
            /*
             Mensualit�
             */
            mensualite: number;
            /*
             Total DU
             */
            totalDu: number;
            /*
             Num�ro dossier Cr�dit R�volving
             */
            numeroDossierCreditRevolving: number;
            /*
             Decouvert utilis�
             */
            decouvertUtilise: number;
            /*
             N� Carte R�volving
             */
            numCarteRevolvingDebCredit: string;
            /*
             Montant disponible
             */
            montantDisponibleDebCred: number;
            /*
             Identifiant Contrat
             */
            identifiantContratDebCred: string;
            /*
             string dern maj fichier image
             */
            dateDernMajFichierImageDebC: string;
            /*
             Libell� �tat compte TEOZ
             */
            libelleEtatCompteDebCred: string;
            /*
             Code �tat dossier
             */
            codeEtatDossierCarteDB: string;
            /*
             string effet �tat dossier NFI
             */
            dateEffetEtatDossierNfiDB: string;
            /*
             Mt solde recouvrement
             */
            mtSoldeRecouvrementDebC: number;
            /*
             string dernier financement
             */
            dateDernierFinancementDebC: string;
        }

        export interface ISyntheseClientProdAssIARDComp extends ISyntheseClientProdOffreInfoCommune {
            /*
             Type situation contrat assurance
             */
            typeSituationContratAssurance: string;
            /*
             string prise effet contrat
             */
            datePriseEffetContrat: string;
            /*
             string arr�t� informations
             */
            dateArreteInformations: string;
            /*
             Num�ro contrat IARD
             */
            numeroContratIardComp: string;
            /*
             Libelle court du contrat
             */
            libelleCourtContratIARDComp: string;
        }

        export interface ISyntheseClientProdAssCFFComp extends ISyntheseClientProdSPSPereCommune {
            /*
             code etat vente
             */
            codeEtatVente: string;
        }

        export interface ISyntheseClientProdAssIARDAllianz extends ISyntheseClientProdOffreInfoCommune {
            /*
             Num�ro contrat IARD hors BPCEA
             */
            numeroContratIardHorsBpcea: string;
            /*
             Code situation contrat assurance
             */
            codeSituationContratAssurance: string;
            /*
             Libell� situation contrat ass
             */
            libelleSituationContratAss: string;
            /*
             Mt prime assurance IARD TTC
             */
            mtPrimeAssuranceIardTtc: number;
            /*
             Idt externe contrat IARD Pro
             */
            idtExterneContratIardPro: string;
            /*
             string prise effet contrat
             */
            datePriseEffetContratAllianz: string;
        }

        export interface ISyntheseClientAlertePEL {
            /*
             Etat contractuel proch anniv
             */
            etatContractuelProchAnniv: string;
            /*
             Mt � r�gulariser non respect
             */
            mtARegulariserNonRespect: number;
            /*
             Code �tat potentiel / proch anniv
             */
            codeEtatContractuelPotentiel: string;
            /*
             Mt � r�gulariser potentiel NR
             */
            mtARegulariserPotentielNr: number;
            /*
             Code �tat proposition avenant prorog
             */
            codeEtatPropositionAvenant: string;
            /*
             Code devise ISO 4217 alpha-3
             */
            codeDevise: string;
        }

        export interface ISyntheseClientProdPER extends ISyntheseClientProduitInfoCommune {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //soldeProduitCommun: string;
            /*
             ASSURANCE sur le PER
             */
            assuranceSurPer: string;
            /*
             compte titre (PER)
             */
            compteTitrePER: string;
            /*
             Solde produit
             */
            soldeProduitPER: number;
        }

        export interface ISyntheseClientProdPEP extends ISyntheseClientProduitInfoCommune {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //soldeProduitCommun: string;
            /*
             string d'�ch�ance contractuelle PEP
             */
            dateEcheanceContractuellePep: string;
            /*
             Indic nantissement PEP
             */
            indicNantissementPep: string;
            /*
             Cumul des revenus restant � payer
             */
            cumulDesRevenusRestantAPayer: number;
            /*
             Solde produit
             */
            soldeProduitPEP: number;
            /*
             Sous code Produit P/S
             */
            sousCodePSPEP: string;
        }

        export interface ISyntheseClientProdPEA extends ISyntheseClientProduitInfoCommune {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;
            /*
             libelle du produit
             */
            libelleProduit: string;

            //soldeProduitCommun: string;
            /*
             Cumul des versements sur PEA
             */
            cumulDesVersementsSurPea: number;
            /*
             string ouverture produit / service
             */
            dateOuvertureService: string;
            /*
             Solde produit
             */
            soldeProduitPEA: number;
            /*
             Sous code Produit P/S
             */
            sousCodePSPEA: string;
            /*
             Indicateur compte rattach� RMP
             */
            indicateurCpteRattacheRmpPEA: string;
            /*
             Code gestionnaire compte
             */
            codeGestionnaireComptePEA: string;
        }

        export interface ISyntheseClientProdVega extends ISyntheseClientProduitInfoCommune {
            /*
             Identifiant du client
             */
            identifiantClient: string;
            /*
             string ouverture contrat chez VEGA
             */
            dateOuvertureContratChezVega: string;
            /*
             string cloture contrat chez VEGA
             */
            dateClotureContratChezVega: string;
            /*
             Somme des cessions ann�e en cours
             */
            sommeDesCessionsAnneeEnCours: number;
            /*
             Code �tat contart
             */
            codeEtatContart: string;
            /*
             Libelle du type de produit
             */
            libelleTypeProduitVega: string;
            /*
             Montant valorisation compte fin mois
             */
            mntValoCpteFinMoisVega: number;
            /*
             string derni�re valorisation
             */
            dateDerniereValorisationVega: string;
        }

        export interface ISyntheseClientProdCreditExterne extends ISyntheseClientProduitInfoCommune {
            /*
             Mt capital restant du
             */
            mtCapitalRestantDuExt: number;
            /*
             Charge mensuelle d'endettement
             */
            chargeMensuelleEndettExt: number;
            /*
             Nombre d'�ch�ance
             */
            nombreEcheanceExt: number;
            /*
             string fin contrat
             */
            dateFinCreditExt: string;
            /*
             cumul impay�s pret
             */
            cumulImpayesPretExt: number;
            /*
             Indic existence contentieux pr�t
             */
            indicExistenceCTXPretExt: string;
        }

        export interface ISyntheseClientProdCredit extends ISyntheseClientProduitInfoCommune {
            //e devise ISO 4217 alpha-3

            codeDevise: string;
            /*
             Code Guichet Interbancaire
             */
            codeGuichet: string;
            /*
             Code type produit service
             */
            codeProduit: string;
            /*
             Identifiant Produit / Service
             */
            identifiantProduitService: number;
            /*
             Num�ro compte P/S
             */
            numeroCompte: string;
            /*
             Pr�cise s'il existe une opposition active sur un 
            contrat donn� (compte, cr�dit, service ...) 
            Valeurs : 
            '0' pas d'opposition 
            '1' opposition
             */
            indicateurExistenceOpposition: string;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissement: string;

            libelleProduit: string;

            //soldeProduitCommun: string;
            /*
             Mt capital restant du
             */
            mtCapitalRestantDu: number;
            /*
             Charge mensuelle d'endettement
             */
            chargeMensuelleEndettement: number;
            /*
             Nombre d'�ch�ance
             */
            nombreEcheance: number;
            /*
             string fin contrat
             */
            dateFinCredit: string;
            /*
             cumul impay�s pret
             */
            cumulImpayesPret: number;
            /*
             Indic existence contentieux pr�t
             */
            indicExistenceContentieuxPret: string;
            /*
             Montant origine cr�dit
             */
            montantOrigineCredit: number;
            /*
             TAUX EFFECTIF GLOBAL
             */
            tauxEffectifGlobal: number;
            /*
             Mt total vers� d'un pr�t
             */
            mtTotalVerseUnPret: number;
            /*
             Montant restant � verser
             */
            montantRestantAVerser: number;
            /*
             Devise du cr�dit
             */
            deviseCredit: string;
            /*
             MT CUMULE CREANCES GELEES
             */
            mtCumuleCreancesGelees: number;
            /*
             Code origine cr�dit / dossier
             */
            codeOrigineCreditDossier: string;
            /*
             Identifiant enveloppe
             */
            identifiantEnveloppe: string;
            /*
             Indicateur presence dans RPM ou FdS
             */
            PresenceDansRpmCredit: string;
            /*
             Code Produit National
             */
            codeProduitNationalCredit: string;
            /*
             Identifiant dossier commercial
             */
            identDossCommercialCredit: string;
            /*
             string effet contrat credit
             */
            dateEffetContratCredit: string;
        }

        export interface ISyntheseClientProdTitres extends ISyntheseClientProduitInfoCommune {
            codeDevise: string;

            codeGuichet: string;

            codeProduit: string;

            identifiantProduitService: number;

            numeroCompte: string;

            indicateurExistenceOpposition: string;

            codeEtablissement: string;

            libelleProduit: string;

            /*
             Valo GESTITRES du portefeuille
             */
            valoGestitresPortefeuille: number;
            /*
             string de valorisation gestitres
             */
            dateValorisationGestitres: string;
            /*
             libelle blocage souscription titre
             */
            libelleBlocageSouscriptionTitre: string;
            /*
             Pourcentage de propri�t�
             */
            pourcentagePropriete: number;
            /*
             MONTANT DE CESSIONS SEUIL GENERAL
             */
            montantCessionsSeuilGeneral: number;
            /*
             Plus ou moins value seuil g�n�ral
             */
            plusMoinsValueSeuilGeneral: number;
            /*
             Plus ou moins value latente
             */
            plusMoinsValueLatente: number;
            /*
             Valo GESTITRES portefeuille pond�r�e
             */
            valoGestitresPTFPonderee: number;
            /*
             Code gestionnaire compte
             */
            codeGestionnaireCompteTitres: string;
            /*
             string arr�t� informations
             */
            dateArreteInformationsTitres: string;
            /*
             Montant ISF
             */
            montantIsfTitres: number;
        }

        export interface ISyntheseClientProdCoffre extends ISyntheseClientProduitInfoCommune {
            /*
             Code type de coffre
             */
            codeTypeCoffre: string;
            /*
             Numero du coffre
             */
            numeroCoffre: string;
            /*
             Numero de salle coffre
             */
            numeroSalleCoffre: number;
            /*
             R�f�rence externe EDS
             */
            edsDomiciliationCoffre: number;
            /*
             Libell� El�ment Structure
             */
            libelleEDSCoffre: string;
            /*
             D�signation bancaire courte
             */
            designationBancaireCoffre: string;
            /*
             Mode composition entit� titulaire
             */
            modeCompositionEntTitCoffre: string;
            /*
             Code type usage entit� titulaire
             */
            codeUsageEntTitCoffre: string;
        }

        export interface ISyntheseClientProdAssCNP extends ISyntheseClientProduitInfoCommune {
            /*
             Num�ro de contrat CNP
             */
            numeroContratCnp: string;
            /*
             Valeur de Rachat Assurance CNP
             */
            valeurRachatAssuranceCnp: number;
            /*
             string arr�t� informations
             */
            dateArreteInformationsAssCNP: string;
            /*
             string DEBUT D'EFFET
             */
            dateDebutEffetAssCNP: string;
            /*
             MONTANT ISF
             */
            montantIsfAssCNP: number;
        }

        export interface ISyntheseClientProdAssParaBanc extends ISyntheseClientProdSPSPereCommune {
            /*
             NUMERO D ADHESION IARD ASC
             */
            numeroAdhesionIardAsc: string;
            /*
             CODE FORMULE DU CONTRAT IARD
             */
            codeFormuleContratIard: string;
            /*
             STATUT DU CONTRAT IARD
             */
            statutContratIardParaBanc: string;
            /*
             R�f�rence produit / service
             */
            numeroCompteAssParaBanc: string;
            /*
             Num�ro RIB compte num�raire associ�
             */
            numeroRibCpteNumeraireAssocie: string;
            /*
             string prise effet contrat
             */
            datePriseEffetContratAssParaBanc: string;
            /*
             string arr�t� informations
             */
            dateArretInfAssParaBanc: string;
            codeSituationContrat: string;
            codeMotifResiliation: string;
        }

        export interface ISyntheseClientProdCreditComp extends ISyntheseClientProduitInfoCommune {
            /*
             Identifiant cr�dit externe
             */
            identifiantCreditExterne: string;
            /*
             Type de cr�dit
             */
            typeCredit: string;
            /*
             Montant du CRD
             */
            montantCrd: number;
            /*
             Indic montant CRD renseign�
             */
            indicMontantCrdRenseigne: string;
            /*
             string mise � jour infos
             */
            dateMiseAJourInfos: string;
            /*
             Indic string MAJ infos renseign�e
             */
            indicDateMajInfosRenseignee: string;
            /*
             string de d�but du cr�dit
             */
            dateDebutCredit: string;
            /*
             Montant initial
             */
            montantInitial: number;
            /*
             Indic montant initial renseign�
             */
            indicMontantInitialRenseigne: string;
            /*
             Indic string fin cr�dit renseign�e
             */
            indicDateFinCreditRenseignee: string;
            /*
             P�riodicit� des M.E.R
             */
            periodiciteDesMER: string;
            /*
             string de prochaine �ch�ance
             */
            dateProchaineEcheance: string;
            /*
             Code string prochaine �ch renseign�
             */
            codeDateProchaineEchRenseigne: string;
            /*
             Code existence Contentieux
             */
            codeExistenceContentieux: string;
            /*
             Montant impay�
             */
            montantImpaye: number;
            /*
             Indic montant impay� renseign�
             */
            indicMontantImpayeRenseigne: string;
            /*
             Nombre d'�ch�ances en impay�
             */
            nombreEcheancesEnImpaye: number;
            /*
             Code nombre d'impay�s renseign�
             */
            codeNombreImpayesRenseigne: string;
            /*
             string de 1er impay�
             */
            date1erImpaye: string;
            /*
             Indic string 1er impay� renseign�e
             */
            indicDate1erImpayeRenseignee: string;
            /*
             Indic montant hors bilan renseign�
             */
            indicMontantHorsBilanRenseigne: string;
            /*
             Montant de l'utilisation
             */
            montantLUtilisation: number;
            /*
             Montant du hors bilan
             */
            montantHorsBilan: number;
            /*
             Code macro famille d�cisionnel
             */
            codeMacroFamilleDecisionnel: string;
            /*
             Code �tat Produit / Service
             */
            codeEtatProduitService: string;
            /*
             Indic montant utilisation renseign�
             */
            indicMntUtilisationRenseigne: string;
            /*
             Identifiant produit
             */
            identifiantProduitCredit: string;
            /*
             Montant de l'�ch�ance
             */
            montantEcheance: number;
            /*
             Indic montant �ch�ance renseign�
             */
            indicMntEcheanceRenseigne: string;
            /*
             Indic string d�but cr�dit renseign�e
             */
            indicDateDebutCreditRenseigne: string;
            /*
             string de fin du cr�dit
             */
            dateFinCreditComp: string;
            /*
             Indicateur presence dans RPM ou FdS
             */
            indPresenceDansRpmCComp: string;
            /*
             Code Produit National
             */
            codeProduitNationalCredComp: string;
            /*
             Devise du cr�dit
             */
            deviseCreditComp: string;

            dateEffetContratCredit: string;
            dateFinCredit: string;
        }

        export interface ISyntheseClientProdAssCFF extends ISyntheseClientProduitInfoCommune {
            /*
             Code pr�sence valeur de rachat
             */
            codePresenceValeurRachat: string;
            /*
             Valeur de Rachat Assurance
             */
            valeurRachatAssurance: number;
            /*
             Code pr�sence string d'arr�t�
             */
            codePresenceDateArrete: string;
            /*
             Mt versement initial / contrat
             */
            mtVersementInitialContrat: number;
            /*
             Code pr�sence string contrat
             */
            codePresenceDateContrat: string;
            /*
             string souscription Assurance
             */
            dateSouscriptionAssurance: string;
            /*
             Cumul versements depuis l'origine
             */
            cumulVersementsDepuisLOrigine: number;
            /*
             Libell� identifiant source externe
             */
            libelleIdentifiantSourceExterne: string;
            /*
             Identifiant produit
             */
            identifiantProduitAssCFF: string;
            /*
             string arr�t� informations
             */
            dateArreteInformationsAssCFF: string;
            /*
             Code pr�sence montant versement init
             */
            PresenceMontantVersementInit: string;
            /*
             Code pr�sence cum versement origine
             */
            PresenceCumVersementOrigine: string;
        }

        export interface ISyntheseClientProdDATHorsPEL extends ISyntheseClientProduitInfoCommune {
            /*
             Taux nominal applicable au compte
             */
            tauxNominalApplicableCompte: number;
            /*
             Mt capital compte
             */
            mtCapitalCompteHPEL: number;
            /*
             string ECHEANCE DU COMPTE
             */
            dateEcheanceCompteHPEL: string;
            /*
             Sous code Produit P/S
             */
            sousCodePSHPEL: string;
        }

        export interface ISyntheseClientProdDATPEL extends ISyntheseClientProduitInfoCommune {
            /*
             NUMERO RICE PEL
             */
            numeroRicePel: string;
            /*
             montant capital sur le compte
             */
            mtCapitalComptePEL: number;
            /*
             string ECHEANCE DU COMPTE
             */
            dateEcheanceComptePEL: string;
            /*
             Sous code Produit P/S
             */
            sousCodePSPEL: string;
        }

        export interface ISyntheseClientProdCreditAlis extends ISyntheseClientProduitInfoCommune {
            /*
             Identifiant produit
             */
            identifiantProduitCredAlis: string;
            /*
             Montant de l'�ch�ance
             */
            montantEcheanceCredAlis: number;
            /*
             Montant du CRD
             */
            montantCrdAlis: number;
            /*
             Indic montant CRD renseign�
             */
            indicMntCrdAlisRenseigne: string;
            /*
             string mise � jour infos
             */
            dateMiseAJourInfosCredAlis: string;
            /*
             string de d�but du cr�dit
             */
            dateDebutCreditAlis: string;
            /*
             Indic montant �ch�ance renseign�
             */
            indicMntEchRenseignCredAlis: string;
            /*
             Indic string MAJ infos renseign�e
             */
            indicDateMajInfRenseigCrdAlis: string;
            /*
             Indic string d�but cr�dit renseign�e
             */
            indicDateDebutCrdAlisRenseign: string;
            /*
             Montant initial
             */
            montantInitialCredAlis: number;
            /*
             Indic montant initial renseign�
             */
            indicMntInitRenseignCrdAlis: string;
            /*
             string de fin du cr�dit
             */
            dateFinCreditAlis: string;
            /*
             Indic string fin cr�dit renseign�e
             */
            indicDateFinCrdAlisRenseign: string;
            /*
             P�riodicit� des M.E.R
             */
            periodiciteDesMERCrdAlis: string;
            /*
             string de prochaine �ch�ance
             */
            dateProchaineEchCredAlis: string;
            /*
             Code string prochaine �ch renseign�
             */
            codeDateProchEchCrdAlisRenseig: string;
            /*
             Code existence Contentieux
             */
            codeExistenceCTXCredAlis: string;
            /*
             Montant impay�
             */
            montantImpayeCredAlis: number;
            /*
             Indic montant impay� renseign�
             */
            indicMntImpayeCrdAlisRenseig: string;
            /*
             Nombre d'�ch�ances en impay�
             */
            nbreEchEnImpayeCredAlis: number;
            /*
             Code nombre d'impay�s renseign�
             */
            codeNbreImpayesCrdAlisRenseig: string;
            /*
             string de 1er impay�
             */
            date1erImpayeCredAlis: string;
            /*
             Indic string 1er impay� renseign�e
             */
            indicDate1erImpRenseigCrdAlis: string;
            /*
             Indicateur presence dans RPM ou FdS
             */
            PresenceDansRpmCredAlis: string;
            /*
             Indic montant hors bilan renseign�
             */
            indicMntHorsBilanRenseigCrdAlis: string;
            /*
             Indic montant utilisation renseign�
             */
            indicMntUtilCrdAlisRenseigne: string;
            /*
             Montant de l'utilisation
             */
            montantLUtilisationCrdAlis: number;
            /*
             Montant du hors bilan
             */
            montantHorsBilanCredAlis: number;
            /*
             Code macro famille d�cisionnel
             */
            codeMacroFamilleDecCrdAlis: string;
            /*
             Code Produit National
             */
            codeProduitNationalCrdAlis: string;
            /*
             Devise du cr�dit
             */
            deviseCreditAlis: string;
            /*
             Identifiant cr�dit externe
             */
            identCreditAlisExterne: string;
            /*
             Type de cr�dit
             */
            typeCreditAlis: string;
        }

        export interface ISyntheseClientProdCreditCEDI extends ISyntheseClientProduitInfoCommune {
            /*
             code offre CEFI pret conso
             */
            codeOffreCefiPretConso: string;
            /*
             Num�ro MYSYS dossier contrat NFI
             */
            numeroMysysDossierContratNfi: string;
            /*
             MT �ch�ance pret avec assurance
             */
            mtEcheancePretAvecAssurance: number;
            /*
             string ouverture contrat satellis
             */
            dateOuvertureContratSatellis: string;
            /*
             Montant emprunt�
             */
            montantEmprunte: number;
            /*
             Taux effectif global CEFI
             */
            tauxEffectifGlobalCefi: number;
            /*
             Nombre d'�ch�ances du pr�t CEFI
             */
            nombreEcheancesPretCefi: number;
            /*
             P�riodicit� des �ch�ances CEFI
             */
            periodiciteDesEcheancesCefi: string;
            /*
             Identifiant contrat CEFI
             */
            identifiantContratCefi: string;
            /*
             string premi�re mensualit�
             */
            datePremiereMensualite: string;
            /*
             string fin pr�t
             */
            dateFinPret: string;
            /*
             Code option ass titulaire
             */
            codeOptionAssTitulaire: string;
            /*
             Code option ass conjoint
             */
            codeOptionAssConjoint: string;
            /*
             Libell� Assurance profil pr�t CEFI
             */
            libelleAssuranceProfilPretCefi: string;
            /*
             string d'octroi
             */
            dateOctroi: string;
            /*
             Taux nominal
             */
            tauxNominal: number;
            /*
             Libell� sort
             */
            libelleSort: string;
            /*
             Montant du capital financ�
             */
            montantCapitalFinance: number;
            /*
             string de financement
             */
            dateFinancement: string;
            /*
             string de validation de la simulation
             */
            dateValidationSimulation: string;
            /*
             Libell� stade de l'offre
             */
            libelleStadeLOffre: string;
            /*
             Capital restant du ou Encours
             */
            capitalRestantOuEncoursCEDI: number;
            /*
             Libell� �tat compte TEOZ
             */
            libelleEtatCompteCEDI: string;
            /*
             string dern maj fichier image
             */
            dateDernMajFichierImageCEDI: string;
            /*
             Mt solde recouvrement
             */
            mtSoldeRecouvrementCEDI: number;
            /*
             Code Etab Banque Entit� Juridique
             */
            codeEtablissementCEDI: string;
            /*
             Code guichet compte pr�l�vement
             */
            codeGuichetCEDI: string;
            /*
             string prochaine �ch�ance cr�dit
             */
            dateProchaineEchCrdCEDI: string;
            /*
             Code �tat dossier
             */
            codeEtatDossierCEDI: string;
            /*
             string effet �tat dossier NFI
             */
            dateEffetEtatDossierNfiCEDI: string;
            /*
             Num�ro dossier contrat producteur
             */
            numDossContratProducteur: string;
            /*
             R�f�rence produit (2�me occurence)
             */
            refProduit2emeOccurence: string;
        }

        export interface ISyntheseClientProdCiloger extends ISyntheseClientProduitInfoCommune {
            /*
             string arr�t� de la position
             */
            dateArretePosition: string;
            /*
             Nombre de part(s) SCPI
             */
            nombrePartScpi: number;
            /*
             Libell� nature SCPI
             */
            libelleNatureScpi: string;
            /*
             Libelle du type de produit
             */
            libelleTypeProduitCiloger: string;
            /*
             Montant valorisation compte fin mois
             */
            mntValoCpteFinMoisCiloger: number;
            /*
             string derni�re valorisation
             */
            dateDerniereValorisationCiloger: string;
        }

        export interface ISyntheseClientProdTrade extends ISyntheseClientProduitInfoCommune {
            /*
             string d�but autorisation
             */
            dateDebutAutorisation: string;
            /*
             string �ch�ance autorisation
             */
            dateEcheanceAutorisation: string;
            /*
             Code devise expression mt
             */
            codeDeviseExpressionMt: string;
            /*
             Montant autoris� en euros
             */
            montantAutoriseEnEuros: number;
            /*
             Montant utilis� en CV euros
             */
            montantUtiliseEnCvEuros: number;
        }

        export interface ISyntheseClientProdCreditBail extends ISyntheseClientProduitInfoCommune {
            /*
             Sous code �tat du contrat
             */
            sousCodeEtatContrat: string;
            /*
             Capital restant du ou Encours
             */
            capitalRestantOuEncoursCredBail: number;
            /*
             Code Produit National
             */
            codeProduitNationalCredBail: string;
            /*
             Nom Court Domaine Nomenclature CNCE
             */
            nomCourtDomaineCNCECredBail: string;
            /*
             P�riode arr�te infos
             */
            periodeArreteInfosCredBail: string;
            /*
             Libelle organisme
             */
            libelleOrganismeCredBail: string;
            /*
             Identifiant Contrat
             */
            identifiantContratCredBail: string;
            /*
             Montant garanti
             */
            montantGarantiCredBail: number;
        }

        export interface ISyntheseClientEpargCommun extends ISyntheseClientProduitInfoCommune {
            /*
             Code Produit National
             */
            codeProduitNational: string;
            /*
             Nom Court Domaine Nomenclature CNCE
             */
            nomCourtDomaineNomenclatureCnce: string;
            /*
             P�riode arr�te infos
             */
            periodeArreteInfos: string;
            /*
             Date ouverture dossier
             */
            dateOuvertureDossier: string;
            /*
             Libell� Etablissement pilote
             */
            libelleEtablissementPilote: string;
        }

        export interface ISyntheseClientProdEpargSalariale extends ISyntheseClientEpargCommun {
            /*
             string d�nonciation convention NIE
             */
            dateDenonciationConventionNie: string;
            /*
             Libell� court du contrat
             */
            libelleCourtContratEpargSal: string;
            /*
             Capital restant du ou Encours
             */
            capitalRestantOuEncoursEpargSal: number;
        }

        export interface ISyntheseClientProdEpargnSalComp extends ISyntheseClientEpargCommun {
            /*
             Mt Contrevaleur comptable brute
             */
            mtContrevaleurComptableBrute: number;
            /*
             Code cat�gorie produit d�riv�
             */
            codeCategorieProduitDerive: string;
            /*
             Identifiant Contrat
             */
            identifiantContratEpargSal: string;
            /*
             Montant garanti
             */
            montantGarantiEpargSal: number;
            /*
             Sous code Produit P/S
             */
            sousCodePSEpargSal: string;
        }

        export interface ISyntheseClientProdSAP extends ISyntheseClientProduitInfoCommune {
            /*
             Identifiant interne S�r�na
             */
            identifiantInterneSerena: string;
            /*
             Num�ro de formule
             */
            numeroFormule: number;
            /*
             Statut de la formule
             */
            statutFormule: string;
            /*
             Code Produit National
             */
            codeProduitNationalSAP: string;
            /*
             string d'effet
             */
            dateEffetSAP: string;
            /*
             string d'�ch�ance
             */
            dateEcheanceSAP: string;
            /*
             string de mise � jour
             */
            dateMiseAJourSAP: string;
            /*
             Code banque compte pr�l�vement
             */
            codeBanqueCptePrelevSAP: string;
            /*
             Code guichet compte pr�l�vement
             */
            codeGuichetSAP: string;
            /*
             Num�ro compte pr�l�vement
             */
            numeroCompteSAP: string;
            /*
             Cl� RIB cpte
             */
            cleRibCpteSAP: string;
        }

        export interface ISyntheseClientProdCartado extends ISyntheseClientProduitInfoCommune {
            /*
             Identifiant support carte
             */
            identifiantSupportCarte: string;
            /*
             string expiration carte
             */
            dateExpiration: string;
            /*
             Code type porteur CARTADO
             */
            codeTypePorteurCartado: string;
        }

        export interface ISyntheseClientProdGarantieSante extends ISyntheseClientProduitInfoCommune {
            /*
             identifiant adh�sion
             */
            identifiantAdhesion: string;
            /*
             Code produit Muracef
             */
            codeProduitMuracef: string;
            /*
             string d�but effet contrat
             */
            dateDebutEffetContrat: string;
            /*
             string de fin d'effet du contrat
             */
            dateFinEffetContrat: string;
            /*
             Code motif de r�siliation
             */
            codeMotifResiliation: string;
            /*
             Code situation du contrat
             */
            codeSituationContrat: string;
            /*
             Code formule ass sant�
             */
            codeFormuleAssSante: string;
            /*
             Indic �ligibilit� client
             */
            indicEligibiliteClient: string;
            /*
             string arr�t� informations
             */
            dateArreteInfGarSante: string;
            /*
             Code banque compte pr�l�vement
             */
            codeBanqueCptePrelevGarSante: string;
            /*
             Code guichet compte pr�l�vement
             */
            codeGuichetGarSante: string;
            /*
             Num�ro compte pr�l�vement
             */
            numeroCompteGarSante: string;
            /*
             Cl� RIB cpte
             */
            cleRibCpteGarSante: string;
            segment: string;
        }

        export interface ISyntheseClientProdFacturea extends ISyntheseClientEpargCommun {
            /*
             string �ch�ance dossier
             */
            dateEcheanceDossier: string;
            /*
             Mt cum CRD - Encours
             */
            mtCumCrdEncours: number;
            /*
             Mt cum encours moyen / string op
             */
            mtCumEncoursMoyenDateOp: number;
            /*
             Mt cum BO pay�s / mois en cours
             */
            mtCumBoPayesMoisEnCours: number;
            /*
             Mt cum BO pay�s CE / mois M
             */
            mtCumBoPayesCeMoisM: number;
            /*
             Libelle organisme
             */
            libelleOrganismeFacturea: string;
            /*
             Mt cum Comm Apport activit�s / 01/01
             */
            mtCumCommApport1erJanv: number;
        }

        export interface ISyntheseClientProdCartAffComp extends ISyntheseClientProduitInfoCommune {
            /*   Nom Long du PS Nomenclature CNCE*/

            nomLongPsNomenclatureCnce: string;
            /*
             Num�ro carte
             */
            numCarteAffaire: string;
            /*
             Montant encours total
             */
            mntEncTotalCartAffaire: number;
            /*
             Type carte
             */
            typeCarteAffaire: string;
            /*
             Date fin validit� support carte
             */
            dateFinValiditeCartAffaire: string;
            /*
             Code opposition
             */
            codeOppositionCartAffaire: string;
        }

        export interface ISyntheseClientProdCartAffaire extends ISyntheseClientProduitInfoCommune {
            /*
             Nom Long du PS Nomenclature CNCE
             */
            nomLongPsNomenclatureCnce: string;
            /*
             Num�ro carte
             */
            numCarteAffaire: string;
            /*
             Montant encours total
             */
            mntEncTotalCartAffaire: number;
            /*
             Type carte
             */
            typeCarteAffaire: string;
            /*
             string fin validit� support carte
             */
            dateFinValiditeCartAffaire: number;
            /*
             Code opposition
             */
            codeOppositionCartAffaire: string;
        }

        export interface ISyntheseClientProdSmileComp extends ISyntheseClientProduitInfoCommune {
            /*
             Num�ro compte S'miles
             */
            numeroCompteSMiles: string;
            /*
             Code Produit National
             */
            codeProduitNationalSmile: string;
            /*
             Identifiant de la carte Smiles
             */
            identifiantCarteSmilesComp: string;
        }

        export interface ISyntheseClientProdCautionFiliale extends ISyntheseClientProduitInfoCommune {
            /*
             Montant garanti
             */
            mntGarantiCAU: number;
            /*
             Montant autorisation
             */
            mntAutorisationCAU: number;
            /*
             Nom Court Domaine Nomenclature CNCE
             */
            nomCourtDomCnceCAU: string;
            /*
             Libell� statut contrat
             */
            libelleStatutContratCAU: string;
            /*
             P�riode arr�te infos
             */
            periodeArreteInfosCAU: string;
            /*
             Quotit� en risque port�e par garant
             */
            quotiteRisqPorteParGarantCAU: number;
            /*
             Montant total financ�
             */
            montantTotalFinanceCAU: number;
            /*
             Capital restant du ou Encours
             */
            capitalRestantOuEncoursCAU: number;
        }

        export interface ISyntheseClientProdOctav extends ISyntheseClientProduitInfoCommune {
            /*
             Idt externe contrat placement
             */
            idtExterneContratPlacement: string;
            /*
             string cl�ture P/S
             */
            dateCloturePs: string;
            /*
             Ref externe agent maj
             */
            refExterneAgentMaj: number;
            /*
             R�f�rence externe EDS rattachement
             */
            identExtEDSRattachementPI: number;
            /*
             Code Produit Epargne
             */
            codeProduitEpargne: string;
            /*
             Montant encours contrat
             */
            montantEncoursContrat: number;
            /*
             string prise effet contrat
             */
            datePriseEffetContratOctav: string;
            /*
             Ref ext agent commercial producteur
             */
            refExtAgentCommercialProduct: number;
        }

        export interface ISyntheseClientProdOPEFI extends ISyntheseClientProduitInfoCommune {
            /*
             Code Etablissement origine
             */
            codeEtablissementOrigine: string;
            /*
             Mt engagement brut bilan CT
             */
            mtEngagementBrutBilanCt: number;
            /*
             Mt engagement brut bilan MLT
             */
            mtEngagementBrutBilanMlt: number;
            /*
             Mt engagement brut bilan EPS
             */
            mtEngagementBrutBilanEps: number;
            /*
             Mt engagement brut bilan EC
             */
            mtEngagementBrutBilanEc: number;
            /*
             Mt engagement brut hors bilan CT
             */
            mtEngagementBrutHorsBilanCt: number;
            /*
             Mt engagement brut hors bilan CMLT
             */
            mtEngagementBrutHorsBilanCmlt: number;
            /*
             Mt engagement brut hors bilan ES
             */
            mtEngagementBrutHorsBilanEs: number;
            /*
             Mt engagement brut hors bilan EC
             */
            mtEngagementBrutHorsBilanEc: number;
            /*
             nombre d'op�rations
             */
            nombreOperations: number;
            /*
             Identifiant Contrat
             */
            identifiantContratOPEFI: string;
            /*
             Num�ro SIREN professionnel
             */
            numeroSIRENOPEFI: string;
            /*
             P�riode arr�te infos
             */
            periodeArreteInfosOPEFI: string;
        }

        export interface ISyntheseClientProdAssNatixis extends ISyntheseClientProduitInfoCommune {
            /*
             Num�ro RIB compte
             */
            numeroRibCompte: string;
            /*
             Valeur rachat
             */
            valeurRachat: number;
            /*
             Mt cum brut verst perid / ann�e N
             */
            mtCumBrutVerstPeridAnneeN: number;
            /*
             Mt ISF ann�e N
             */
            mtIsfAnneeN: number;
            /*
             string arr�t� informations
             */
            dateArreteInformationsNatixis: string;
            /*
             string DEBUT D'EFFET
             */
            dateDebutEffetNatixis: string;
        }

        export interface ISyntheseClientProdContratMonetique extends ISyntheseClientProduitInfoCommune {
            /*
             string ouverture contrat
             */
            dateOuvertureContrat: string;
            /*
             string cl�ture contrat
             */
            dateClotureContrat: string;
            /*
             D�signation type de paiement interne
             */
            designationTypePaiementInterne: string;
            /*
             Type Pdt Serv contrat associ�
             */
            typePdtServContratAssocie: string;
            /*
             Type lien support contrat commer�ant
             */
            typeSupportContratCommercant: string;
            /*
             Code guichet interbancaire
             */
            codeGuichetContratMonetique: string;
            /*
             R�f�rence produit / service
             */
            numeroCompteContratMonetique: string;
            /*
             Code banque Etablissement GCE
             */
            codeEtablissContratMonetique: string;
        }

        export interface ISyntheseClientProdGarSanteColl extends ISyntheseClientProduitInfoCommune {
            /*
             undefined
             */
            numRibCpteGarSanteColl: string;
            /*
             undefined
             */
            mntPrimeAnInitGarSanteColl: number;
            /*
             undefined
             */
            codeTypeTarifGarSanteColl: string;
            /*
             undefined
             */
            dateArretInfGarSanteColl: string;
            /*
             undefined
             */
            dateOpeAssGarSanteColl: string;
            /*
             undefined
             */
            libProdGarSanteColl: string;
        }

        export interface ISyntheseClientProdOptAlis extends ISyntheseClientProduitInfoCommune {
            /*
             IDENTIFIANT LIGNE ALIS ORIGINE
             */
            identifiantLigneAlisOrigine: string;
            /*
             LIBELLE LIGNE ALIS ORIGINE
             */
            libelleLigneAlisOrigine: string;
            /*
             Montant non vers� du Cr�dit
             */
            montantNonVerseCredit: number;
            /*
             string de fin de validit� r�f�rentiel
             */
            dateFinValiditeReferentiel: string;
            /*
             MONTANT ECHEANCE MER
             */
            montantEcheanceMer: number;
            /*
             Code statut douteux
             */
            codeStatutDouteuxPersonne: string;
            /*
             Identifiant dossier commercial
             */
            identDossCommercialOptAlis: string;
            /*
             Mt total vers� d'un pr�t
             */
            mtTotalVerseUnPretOptAlis: number;
            /*
             Code devise ISO
             */
            codeDeviseOptAlis: string;
            /*
             string ouverture dossier
             */
            dateOuvertureDossOptAlis: string;
            /*
             string prochaine �ch�ance cr�dit
             */
            dateProchaineEchCrdOptAlis: string;
            /*
             Mt capital restant du
             */
            mtCapitalRestantDuOptAlis: number;
            /*
             Code origine cr�dit / dossier
             */
            codeOrigineCredDossierOptAlis: string;
        }

        export interface ISyntheseClientProdPIM {
            /*
             indicateur societe civile immobiliere patrimoniale
             */
            indicSteCivileImmoPatrimonial: string;
            /*
             undefined
             */
            indicSocieteExploitation: string;
            /*
             undefined
             */
            indicGarantieSurActifImmoFi: string;
            /*
             undefined
             */
            indicStructureRemboursConcours: string;
            /*
             undefined
             */
            indicexerciceSupActiviteImmo: string;
            /*
             undefined
             */
            codeCategorieProImmo: string;
            /*
             undefined
             */
            timestampCreationQuestionnaire: string;
            /*
             undefined
             */
            indicStructureDedieOpeImmo: string;
            /*
              Code Etab Banque Entit� Juridique
              */
            codeEtablissement: string;
        }

        export interface ISyntheseClientProdMomentverite extends ISyntheseClientProduitInfoCommune {
            /*
             string D'EFFET DU CONTRAT
             */
            dateEffetContrat: string;
            /*
             Libell� nature de financement
             */
            libelleNatureFinancement: string;
            /*
             Libell� type objet commercial - TOC
             */
            libelleTypeObjetCommercialToc: string;
            /*
             Libell� �tat dossier
             */
            libelleEtatDossier: string;
            /*
             TYPE LOI SCRIVENER
             */
            typeLoi: string;
            /*
             Libell� entit� propri�taire dossier
             */
            libelleEntiteProprietaireDossier: string;
            /*
             libelle agence
             */
            libelleAgence: string;
            /*
             Nom prescripteur
             */
            nomPrescripteur: string;
            /*
             Code nature de financement
             */
            codeNatureFinancement: string;
            /*
             Code �tat Dossier
             */
            codeEtatDossier: string;
            /*
             Code Produit National
             */
            codeProduitNationalVerite: string;
        }
    }
    
}
