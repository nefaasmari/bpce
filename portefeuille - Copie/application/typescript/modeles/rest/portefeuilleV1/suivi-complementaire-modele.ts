declare module Portefeuille.Modeles.Rest.PortefeuilleV1.suiviComplementaire {
    export interface ISuiviComplementaire {
        listeSuivi: Array<ISuivi>;
        suiviComplementaireModifie: ISuiviComplementaireModifie;
    }

    export interface ISuiviComplementaireModifie {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Code type suivi complémentaire
         */
        codeTypeSuiviComplementaire: string;
        /**
         * Code action
         */
        codeAction: string;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Identifiant élément structure
         */
        identifiantElementStructure: number;
        /**
         * Référence externe agent
         */
        identifiantAgent: number;
    }

    export interface ISuivi {
        /**
         * code banque
         */
        codeEtablissement: string;
        /**
         * numéro de la personne
         */
        numeroPersonne: number;
        /**
         * Code type :
         * '001'      MIDDLE          
         * '002'      INTERNATIONAL   
         * '003'      NEO BUSINESS    
         * '004'      SANTE           
         * '005'      GRANDS COMPTES  
         * '006'      FLUX            
         * '007'      BANQUE DE L'ORNE
         */
        codeTypeSuiviComplementaire: string;
        /**
         * Exemples de valeurs :    
         *            ---------------------    
         * '001'      MIDDLE                   
         * '002'      INTERNATIONAL            
         * '003'      NEO BUSINESS             
         * '004'      SANTE                    
         * '005'      GRANDS COMPTES           
         * '006'      FLUX                     
         * '007'      BANQUE DE L'ORNE
         */
        libelleSuiviComplementaire: string;
        /**
         * Exemples de valeurs :       
         *            ---------------------       
         * '001'      MIDDLE                      
         * '002'      Conseiller International    
         * '004'      Expert SANTE
         */
        libelleSuiviComplementClient: string;
        /**
         * identifiant de l'element de structure interne
         */
        idEdsInterne: number;
        /**
         * designation longue de l'element de structure
         */
        designationLongueEds: string;
        informationAnimation: IInformationAnimation;
        /**
         * Valeurs :            
         *            ---------            
         * 'O'        Oui à restituer      
         * 'N'        Non ne pas restituer
         */
        indicateurRestitutionClient: string;
        /**
         * Valeurs :            
         *            ---------            
         * 'O'        Oui à restituer      
         * 'N'        Non ne pas restituer
         */
        indicateurRestitutionClientRMP: string;
        dateMajEnregistrement: string;
        /**
         * exemple :
         */
        typeElementStructure: string;
    }

    export interface IInformationAnimation {
        /**
         * '1' Personne physique 
         * '2' Personne morale ou assimilée morale
         */
        codePersonaliteJuridique: string;
        /**
         * exemple de formulation : "civilité pers 1" et "civilité pers2" et "désignat p1" "désignation pers. 1" et "désignat pers. 2" "désignation pers. 1" et "désignat pers. 2" "et leurs enfants" "Groupe" 
         * raison sociale personne morale leader "Famille" nom leader pp + "& Entp" raison sociale leader pm
         */
        intituleRelation: string;
        /**
         * Numéro d'identification de la relation économique
         */
        identifiantRelationEconomique: number;
        /**
         * Nombre de personne appartenant a un ménage économique
         */
        nombrePersonneMenage: number;
        /**
         * Correspond au 2 premiers caractères du code segmentation sur 8 car : voir CODLSH.
         * Valeurs : 'AC' Activation Clientèle Particulier 'AP' Activation Clientèle Professionnel 'BM' Segmentation relationelle BDR 'BR' Segmentation relation économique BDR 'FC' Fréquence Client 'FP' 
         * Fréquence PRO 'FR' Fréquence Relation 'MN' Marché national 'SL' Spécifique VAO pour progiciel Norkom / LAB 'SA' Activation Clientèle V2 'SU' Univers de détention
         */
        codeTypeSegmentClientele: string;
        /**
         * Nouveau code segmentation nationale CENCEP 1994 Ce code passe de 2 à 6 positions 1er caractére : le code maxi groupe J jeune, I inactif, B bancarisé, M monodétenteur D diversifié, 
         * N nouveau client 2éme caractére : le maxi groupe c'est un découpage qui intervient pour certain maxi groupe 3éme au 5éme caractéres : codes segments comportemen- tal 6éme caractére : potentiel client '+' ou ' '
         */
        codeSegmentClientele: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail libellé à caractère confidentiel pour ne pas être interprété par la clientèle
         */
        libelleCourtSegmentation: string;
        /**
         * Correspond au 2 premiers caractères du code segmentation
         */
        typeSegmentation: string;
        /**
         * Ce code passe de 2 à 6 positions 1er caractére : le code maxi groupe J jeune, I inactif, B bancarisé, M monodétenteur D diversifié, N nouveau client 2éme caractére : 
         * le maxi groupe c'est un découpage qui intervient pour certain maxi groupe 3éme au 5éme caractéres : codes segments comportemen- tal 6éme caractére : potentiel client '+' ou '
         */
        codeSegmentClientele2: string;
        /**
         * Libellé contenant la désignation d'un segment clientèle, associé au code segment / CODLSH. Etabli dans la table de typologie DU2L
         */
        libelleSegmentClientele2: string;
        /**
         * Détermine le rôle d'une personne dans une relation Permet de déterminer si la personne est leader valeurs : '1' personne '2' personne leader d'un ménage '3' autre personne d'un ménage
         */
        typeRoleRelation: string;
        /**
         * Date du dernier rendez-vous réalisé pour une personne.
         * Type date au format yyyy-MM-dd
         */
        dateDernierRdvRealise: string;
        /**
         * Nombre de rendez-vous sur 12 mois glissants
         */
        nombreRdv12Mois: number;
        /**
         * Nombre de rendez-vous planifiés pour une personne
         */
        nombreRdvPlanifies: number;
        /**
         * Nombre de rendez-vous sur l'année en cours pour une personne
         */
        nombreRdvAnneeEnCours: number;
        /**
         * Numéro SIREN entreprise
         */
        numeroSiren: string;
        /**
         * Désignation de la personne morale
         */
        raisonSociale: string;
        /**
         * Valeurs possibles : 
         * '0' Personne connue comme client 
         * '1' Personne connue comme tiers 
         * '2' Personne connue comme prospect 
         * '3' Personne connue comme prospect enrichi
         */
        codeTypeRelationPersonne: string;
        /**
         * Date du prochain rendez-vous pour une personne.
         * Type date au format yyyy-MM-dd
         */
        dateProchainRdv: string;
        /**
         * Date du dernier entretien réalisé pour une personne.
         * Type date au format yyyy-MM-dd
         */
        dateDernierEntretien: string;
    }

};