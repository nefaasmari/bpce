/**
 * Ressource : /dossiercreditinstruction/v6/miseAJourElement
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v6/dossiercreditinstruction/miseAJourElement
 * Fichier généré le : 2017-11-16
 */
declare module myway.ressources.dossiercreditinstruction.miseajourelement {

  export interface IMiseAJourElementRequest {

    identifiantDossier: string;

    elementMiseAJour: IElementMaj;
  }

  export interface IAnomalieLecture {

    /**
     * TypeCtrl
     */
    typeControle: number;

    /**
     * IdntAno
     */
    idAno: string;

    /**
     * LiblAno
     */
    libelleAno: string;

    /**
     * TypeAno
     */
    typeAno: number;

    /**
     * DateHeurAno
     */
    dateHeureAno: string;

    /**
     * Idfaco_IdntCtrlRegl
     */
    idControleRegle: string;

    /**
     * IdntObjt
     */
    idObjet: string;
  }

  export interface IElementMaj {

    /**
     * Idws
     */
    idws: string;
  }

  export interface ICreditEPSMaj extends IElementMaj {

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Txfccc_QuotCredCouvParEps
     */
    quotientCreditCouvertureParEPS: number;

    /**
     * Idfaez_RefeExtnCredCouvEps
     */
    referenceExterneCreditCouvertureEPS: string;
  }

  export interface IButLocatifMaj extends IElementMaj {

    /**
     * Cdfopl_IndicPretTrnsLocf
     */
    indicePretTransfertLocf: boolean;

    /**
     * Nufofg_NumeDecsFavrGlbl
     */
    numeroDecisionFavrGlbl: number;

    /**
     * Dtfodf_DateDecsFavrLoct
     */
    dateDecisionFavrLoct: string;

    /**
     * Cdfofg_IndicDecsGlblFavr
     */
    indiceDecisionGlblFavr: boolean;

    /**
     * Dtfocl_DateConvLoct
     */
    dateConventionLoct: string;

    /**
     * Cdfofi_NatrAvtgFisc
     */
    natureAvantageFiscal: string;

    /**
     * Mtfofi_MtAvtgFisc
     */
    montantAvantageFiscal: number;

    /**
     * Mtfogl_MtFrsAnnlGestLogm
     */
    montantFrsAnnulationGestionLogement: number;

    /**
     * Mtfoel_MtFrsAnnlEntnLogm
     */
    montantFrsAnnulationEntnLogement: number;

    /**
     * Mtfofo_MtTaxeFonc
     */
    montantTaxeFonc: number;

    /**
     * Cdfolg_PresServVacnLogm
     */
    presServiceVacnLogement: boolean;

    /**
     * Cdfoli_PresUneAssrLoyeImpe
     */
    presUneAssuranceLoyeImpe: boolean;

    /**
     * Mtfolp_MtAnnuLoyePerc
     */
    montantAnnuLoyePerc: number;
  }

  export interface ISoulteFinanceeMaj extends IElementMaj {

    /**
     * Mtfoac_MtSoul
     */
    montantSoul: number;

    /**
     * Ctfmpt_PermDetrSiSoulFaitSuiteDivo
     */
    permDetrSiSoulFaitSuiteDivo: boolean;

    /**
     * Txfapo_PctPrprOrig
     */
    pourcentageProprietaireOrigine: number;

    /**
     * Mtfmvc_ValrActvCorrValrBienOrig
     */
    valeurActiviteCorrValeurBienOrigine: number;

    /**
     * Nbfosh_SurfHabtBienSous
     */
    surfHabitationBienSous: number;

    /**
     * Dtfoac_DateAcqsBienSous
     */
    dateAcqsBienSous: string;
  }

  export interface IBatimentHabitableFinanceMaj extends IElementMaj {

    /**
     * Nbfosh_SurfHabtCreeParConst
     */
    surfHabitationCreeParConstruction: number;

    /**
     * Nbfosa_SurfAnnx
     */
    surfAnnx: number;

    /**
     * Mtfoac_CoutAcqsBatmHabt
     */
    coutAcqsBatimentHabitation: number;

    /**
     * Ctfopm_CodePrixMarcBale2
     */
    codePrixMarcheBale2: number;

    /**
     * Mtfomf_MtMoblFinn
     */
    montantMoblFinancier: number;

    /**
     * Mtfcfn_MtFrsNegc
     */
    montantFrsNegocie: number;

    /**
     * Dtfaoc_DateAcqsBatmHabt
     */
    dateAcqsBatimentHabitation: string;

    /**
     * Dtfoco_DateConstBatmHabt
     */
    dateConstructionBatimentHabitation: string;

    /**
     * Mtfotv_MtTvaFinnARemb
     */
    montantTVAFinancierARemboursement: number;

    /**
     * Ctfolo_TypeLogm
     */
    typeLogement: string;

    /**
     * Nbfolo_NbLogmConst
     */
    nombreLogementConstruction: number;

    /**
     * Nbfwpp_NbPiecPrncConst
     */
    nombrePiecePrincipalConstruction: number;

    /**
     * Ctfmoi_TypeLogm
     */
    typeLogement1: number;
  }

  export interface IConstructionFinanceeMaj extends IElementMaj {

    /**
     * Mtfoco_CoutConstFinn
     */
    coutConstructionFinancier: number;

    /**
     * Dtfoac_DateDebtConst
     */
    dateDebutConstruction: string;

    /**
     * Dffotr_DateFinConst
     */
    dateFinConstruction: string;

    /**
     * Mtfotm_CoutTrvxAChrgMoa
     */
    coutTravauxAChargeMoa: number;

    /**
     * Mtfotv_MtTvaFinnARemb
     */
    montantTVAFinancierARemboursement: number;

    /**
     * Ctfmcc_TypeContConst
     */
    typeContratConstruction: number;

    /**
     * Cdfwti_TypeImeu
     */
    typeImeu: number;

    /**
     * Cdfoga_PresUneGarnAcheTrvx
     */
    presUneGarantieAcheTravaux: number;

    /**
     * Nbfosh_SurfHabtCreeParConst
     */
    surfHabitationCreeParConstruction: number;

    /**
     * Nbfosa_SurfAnnx
     */
    surfAnnx: number;

    /**
     * Ctfolo_TypeLogm
     */
    typeLogement: string;

    /**
     * Nbfolo_NbLogmConst
     */
    nombreLogementConstruction: number;

    /**
     * Nbfwpp_NbPiecPrncConst
     */
    nombrePiecePrincipalConstruction: number;

    /**
     * Ctfmoi_TypeLogm
     */
    typeLogement1: number;
  }

  export interface ITerrainSousJacentMaj extends IBienSousJacentMaj {

    /**
     * Nbfost_SurfTerr
     */
    surfTerr: number;

    /**
     * Cdfoft_TerrEstFinnParCred
     */
    terrEstFinancierParCredit: number;

    /**
     * Dtfoat_DateEntrPtrmDateAcqs
     */
    dateEntrPatrimoineDateAcqs: string;

    /**
     * MtLoyeParMois
     */
    montantLoyeParMois: number;

    /**
     * Ctfmma_ModeAcqsTerr
     */
    modeAcqsTerr: number;
  }

  export interface IBienSousJacentMaj extends IElementMaj {

    /**
     * Ctfmma_ModeAcqsBien
     */
    modeAcqsBien: number;

    /**
     * Mkfmct_CrdBienSjac
     */
    cRDBienSousJacent: number;

    /**
     * Dtfoat_DateEntrCaptDateAcqs
     */
    dateEntrCapitalDateAcqs: string;

    /**
     * Ctfogp_ModeFinn
     */
    modeFinancier: number;

    /**
     * Cdfcni_TypeObjtComl
     */
    typeObjetCommercialisation: string;

    /**
     * Ctfcor_TypeObjtRegl
     */
    typeObjetRegle: string;

    /**
     * Cnfcng_NatrGarnt
     */
    natureGarnt: number;

    /**
     * Mtfgob_MtEstmVenl
     */
    montantEstmVenl: number;

    /**
     * Dtfgob_DateEstmVenl
     */
    dateEstmVenl: string;

    /**
     * Cdfgme_CodeModlEstmVenl
     */
    codeModeleEstmVenl: string;
  }

  export interface ITravauxFinancesMaj extends IElementMaj {

    /**
     * Mtfotr_CoutTrvx
     */
    coutTravaux: number;

    /**
     * Dffotr_DateFinTrvx
     */
    dateFinTravaux: string;

    /**
     * Nbfose_SurfHabtCree
     */
    surfHabitationCree: number;

    /**
     * Cdfoig_TypeTrvxCadrEcpt
     */
    typeTravauxCadreEcpt: number;

    /**
     * Dtfoco_DateConstBatmSjac
     */
    dateConstructionBatimentSousJacent: string;

    /**
     * Nbfosh_SurfHabtBatmSjac
     */
    surfHabitationBatimentSousJacent: number;

    /**
     * Dtfoac_DateAcqsBatmSjac
     */
    dateAcqsBatimentSousJacent: string;

    /**
     * Ctfmoi_TypeLogmBatmSous
     */
    typeLogementBatimentSous: number;
  }

  export interface ITerrainFinanceMaj extends IElementMaj {

    /**
     * Mtfote_CoutTerr
     */
    coutTerr: number;

    /**
     * Dtfaot_DateAcqsTerr
     */
    dateAcqsTerr: string;

    /**
     * Nbfost_SurfTerr
     */
    surfTerr: number;

    /**
     * Cdfoft_CodeFinnTerr
     */
    codeFinancierTerr: number;

    /**
     * Mtfcfn_MtFrsNegc
     */
    montantFrsNegocie: number;
  }

  export interface IDossierMaj extends IElementMaj {

    /**
     * Dgfano_DateHorzProj
     */
    dateHorizonProjet: string;

    /**
     * Cdfiei_CodeImprParExprVers
     */
    codeImprParExpressionVersement: number;

    /**
     * Cdfiag_CodeAppliChrgDoss
     */
    codeApplicationChargeDossier: number;

    /**
     * Cdfado_CodeVisbInstr
     */
    codeVisbInstruction: number;

    /**
     * Cifttv_TechVent
     */
    techniqueVent: number;

    /**
     * Cifoli_CodeLivrnImme
     */
    codeLivrnImme: boolean;

    /**
     * Nofaac_NumeAccrCmps
     */
    numeroAccrCmps: number;

    /**
     * Cnfaeg_EnggRevc
     */
    engagementRevc: number;

    /**
     * Dtfasp_DateSignPret
     */
    dateSignePret: string;

    /**
     * Dtfisy_DateTrt
     */
    dateTraitement: string;

    /**
     * Idfccp_IdntConvPres
     */
    idConventionPres: string;

    /**
     * Idfipp_IdntPres
     */
    idPres: string;

    /**
     * Lbfpen_EnsgnPres
     */
    ensgnPres: string;

    /**
     * Ctfaoc_OrigCommProj
     */
    origineCommissionProjet: number;

    /**
     * Cefapd_CodeEttPlns
     */
    codeEtatPlns: number;

    /**
     * Cdfaar_CodeApplAnlsRisq
     */
    codeApplicationAnlsRisque: boolean;

    /**
     * Ctfacf_CodeTyplCadrFisc
     */
    codeTypologieCadreFiscal: string;

    /**
     * Cdfadv_CdeDevs
     */
    cdeDevise: string;

    /**
     * Cifcsb_CodeLevrSecrBanc
     */
    codeLevrSecrBancaire: number;

    /**
     * Dtfaro_DateRecpOffrParClnt
     */
    dateRecuperationOffreParClient: string;

    /**
     * Cdfdrg_ModeRegl
     */
    modeRegle: string;

    /**
     * Cdfbve_ModeReglVerst
     */
    modeRegleVersement: string;

    /**
     * Nufpr1_NumeCpteSecoPrel
     */
    numeroCompteSecoPrel: string;

    /**
     * Nufddt_DomcTresCpteSeco
     */
    domiciliationTresCompteSeco: string;

    /**
     * Dtfart_DateLimtRetrEmprLoiConso
     */
    dateLimiteRetardEmpruntLoiConsommation: string;

    /**
     * Idfaex_IdntExtnDoss
     */
    idExterneDossier: string;

    /**
     * Ctfals_TypeLoiScrv
     */
    typeLoiScrivener: number;

    /**
     * Cdfafc_CodeAuthCont
     */
    codeAuthentiqueContrat: boolean;

    /**
     * Mtfcon_MtVerstCnvn
     */
    montantVersementCnvn: number;

    /**
     * Txaufi_PctFinn
     */
    pourcentageFinancier: number;

    /**
     * Idfano_IdntRedcActe
     */
    idReductionActe: string;

    /**
     * Idfaoc_IdntOrigDemn
     */
    idOrigineDemande: string;

    /**
     * Lbfaoc_LiblOrigDemn
     */
    libelleOrigineDemande: string;

    /**
     * Dgfapn_DatePrevSignNotr
     */
    datePrevSigneNotaire: string;

    /**
     * Nufadn_RefeExtnDoss
     */
    referenceExterneDossier: string;

    /**
     * Idfas5_ElemStrc5
     */
    elementStructure5: string;

    /**
     * Idfas6_ElemStrc6
     */
    elementStructure6: string;

    /**
     * Llfic1_CritRechAppli1
     */
    critereRechercheApplication1: string;

    /**
     * Llfic2_CritRechAppli2
     */
    critereRechercheApplication2: string;

    /**
     * Llfic3_CritRechAppli3
     */
    critereRechercheApplication3: string;

    /**
     * Llfic4_CritRechAppli4
     */
    critereRechercheApplication4: string;

    /**
     * Llfic5_CritRechAppli5
     */
    critereRechercheApplication5: string;

    /**
     * Ctfaen_CodeTypeEngg
     */
    codeTypeEngagement: string;

    /**
     * Idfaei_IdntAgntInstrDoss
     */
    idAgentInstructionDossier: string;

    /**
     * Idfada_IdntAgntPourDecsConf
     */
    idAgentPourDecisionConf: string;

    /**
     * Idfabi_IdntEnttPourTrnfBo
     */
    idEntitePourTransfertBo: string;

    /**
     * BlocNotes
     */
    blocNotes: string;

    /**
     * Ctfcse_CodeEtpeSiml
     */
    codeEtapeSimulation: number;

    /**
     * Idfifd_NumeFichPres
     */
    numeroFichPres: string;

    /**
     * Cifapp_CodePrscDossPres
     */
    codePrscDossierPres: number;

    /**
     * Cdficd_CodeDevCredDev
     */
    codeDevCreditDev: string;

    /**
     * Idfics_NumCompteDev
     */
    numeroCompteDev: string;

    /**
     * Ctfimr_ModeReglDev
     */
    modeRegleDev: string;

    /**
     * Ctfimv_ModReglVerstDev
     */
    modRegleVersementDev: string;

    /**
     * Ctfici_CanalDeDistribution
     */
    canalDeDistribution: string;

    /**
     * Defiag_DateEnvConvAG
     */
    dateEnvoiConventionAG: string;

    /**
     * Idfdma_ReferenceMandat
     */
    referenceMandat: string;

    /**
     * Dgfdms_DateSignMand
     */
    dateSigneMand: string;

    /**
     * Ctfarp_EnvoiMailSms
     */
    envoiMailSms: string;

    /**
     * Cifpcd_OuvCpteSupEchCred
     */
    ouvertureCompteSupEchCredit: boolean;

    /**
     * CodeTypeEditionAutorisee
     */
    codeTypeEditionAutorisee: string;
  }

  export interface IInterditBancaireMaj extends IElementMaj {

    /**
     * Cdfpbd_CodeRepnBdf
     */
    codeRepnBDF: number;

    /**
     * Cdfpfi_CodeRepnFicp
     */
    codeRepnFicp: number;

    /**
     * Ctfpbd_CodeTypeRepnBdf
     */
    codeTypeRepnBDF: string;

    /**
     * Ctfpfi_CodeTypeRepnFicp
     */
    codeTypeRepnFicp: string;

    /**
     * Dtfpbd_DateApplBdf
     */
    dateApplicationBDF: string;

    /**
     * Dtfpfi_DateApplFicp
     */
    dateApplicationFicp: string;

    /**
     * Lbfpbd_LiblRepnBdf
     */
    libelleRepnBDF: string;

    /**
     * Lbfpfi_LiblRepnFicp
     */
    libelleRepnFicp: string;

    /**
     * Cdfmas_CodeArreSurSalr
     */
    codeArreSurSalr: number;

    /**
     * Dtfpfb_DateApplFbe
     */
    dateApplicationFbe: string;

    /**
     * Cdfpfb_CodeRepnFbe
     */
    codeRepnFbe: number;

    /**
     * Cdfmln_CodePresListnSurCntrTechRegn
     */
    codePresListnSurCntrTechniqueRegn: number;

    /**
     * Lbfmln_LiblListnSurCntrTechRegn
     */
    libelleListnSurCntrTechniqueRegn: string;

    /**
     * Cbfpfb_CodeCottFibenDirg
     */
    codeCotisationFibenDirg: string;
  }

  export interface IActiviteMaj extends IElementMaj {

    /**
     * Cdfmcs_CodeClssRisqCsp
     */
    codeClasseRisqueCSP: number;

    /**
     * Dtfmcs_DateEfftCsp
     */
    dateEffetCSP: string;

    /**
     * Dtfmea_DateEmbc
     */
    dateEmbc: string;

    /**
     * Ctfmce_CodeTypeContEmbc
     */
    codeTypeContratEmbc: number;

    /**
     * Lbfmpl_RaisSoclEmplr
     */
    raisonSocialeEmplr: string;

    /**
     * Cpfmpl_CodePostEmplr
     */
    codePosteEmplr: string;

    /**
     * Lofmpl_CodeApNEmplr
     */
    codeApNEmplr: string;

    /**
     * Cdfmdo_CodeSalrDomcCe
     */
    codeSalrDomiciliationCE: number;

    /**
     * Cdfmsa_CodePresActvSalr
     */
    codePresActiviteSalr: number;

    /**
     * Cdfmsu_CodePresSuivPers
     */
    codePresSuivantPersonne: number;

    /**
     * Nbfmkm_NbKilmEtrLogmTrvl
     */
    nombreKilmEntreLogementTrvl: number;

    /**
     * Dffmea_DateFinCdd
     */
    dateFinCdd: string;

    /**
     * Ctfmsa_CodeSectActv
     */
    codeSecteurActivite: number;
  }

  export interface IGarantMaj extends IElementMaj {

    /**
     * Nbfmec_NbEnfnChrg
     */
    nombreEnfantCharge: number;

    /**
     * Nbfmpf_NbPersGrpe
     */
    nombrePersonneGrpe: number;

    /**
     * Nbfmps_NbPersSuppChrg
     */
    nombrePersonneSuppCharge: number;

    /**
     * Ctfmli_TypeLienEtrLesPers
     */
    typeLienEntreLesPersonne: number;

    /**
     * Lbfmgp_NomGrpe
     */
    nomGrpe: string;

    /**
     * Lbfmae_AgsEnfn
     */
    ageEnfant: Array<number>;

    /**
     * Dtfmrp_DateDernRapp
     */
    dateDernierRapp: string;

    /**
     * Nbfma_AnneNaisEnfn
     */
    anneNaisEnfant: Array<number>;

    /**
     * Cdfmec_CodeEmplrComun
     */
    codeEmplrComun: number;

    /**
     * Mtfmcv_CapceprgAvntOper
     */
    capceprgAvenantOper: number;

    /**
     * Mtfmac_AncnChrgLiesAOperImmb
     */
    ancnChargeLiesAOperImmobilier: number;

    /**
     * Mtfmvp_ValrPtrmImmb
     */
    valeurPatrimoineImmobilier: number;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Mtfmpa_MtPtrmMobl
     */
    montantPatrimoineMobl: number;

    /**
     * Nbfmvo_NbVoit
     */
    nombreVoiture: number;

    /**
     * ListIdntPers
     */
    listeIdPersonne: Array<string>;
  }

  export interface ICreditTauxFixeMaj {

    /**
     * ReferenceIndiceCredit
     */
    referenceIndiceCredit: string;

    /**
     * TauxFixeCredit
     */
    tauxFixeCredit: string;
  }

  export interface IOutilMaj {

    /**
     * MarqueOutil
     */
    marqueOutil: string;

    /**
     * TypeOutil
     */
    typeOutil: string;

    /**
     * DateLivraisonOutil
     */
    dateLivraisonOutil: string;

    /**
     * SerieOutil
     */
    serieOutil: string;

    /**
     * PrixOutil
     */
    prixOutil: string;

    /**
     * VendIntituleOutil
     */
    vendIntituleOutil: string;

    /**
     * VendCpltIntOutil
     */
    vendCpltIntituleOutil: string;

    /**
     * VendAdrOutil
     */
    vendAdresseOutil: string;

    /**
     * VendCpltAdrOutil
     */
    vendCpltAdresseOutil: string;

    /**
     * VendCPOutil
     */
    vendCPOutil: string;

    /**
     * VendVilleOutil
     */
    vendVilleOutil: string;

    /**
     * AdrOutil
     */
    adresseOutil: string;

    /**
     * CpltAdrOutil
     */
    cpltAdresseOutil: string;

    /**
     * CPOutil
     */
    cPOutil: string;

    /**
     * VilleOutil
     */
    villeOutil: string;

    /**
     * DeplacementOutil
     */
    deplacementOutil: boolean;
  }

  export interface IPretDeviseMaj {

    /**
     * IdentifiantProduitPretDevise
     */
    identifiantProduitPretDevise: string;

    /**
     * NumCreditPlanPretDevise
     */
    numeroCreditPlanPretDevise: string;

    /**
     * TypePretDevise
     */
    typePretDevise: string;

    /**
     * IdggiPretDevise
     */
    idggiPretDevise: string;

    /**
     * CdngPretDevise
     */
    cdngPretDevise: string;

    /**
     * FraisEnDevises
     */
    fraisEnDevises: string;

    /**
     * DevisePretDevise
     */
    devisePretDevise: string;

    /**
     * FraisContrePartiePretDevise
     */
    fraisContrePartiePretDevise: string;
  }

  export interface IDonneesCautionPersonneMoraleMaj {

    /**
     * RepresCautionPersoMorale
     */
    represCautionPersoMorale: string;

    /**
     * AgissantQualitéCaution
     */
    agissantQualiteCaution: string;

    /**
     * AgissantVertuCaution
     */
    agissantVertuCaution: string;

    /**
     * Agissant3Caution
     */
    agissant3Caution: string;

    /**
     * Agissant4Caution
     */
    agissant4Caution: string;

    /**
     * Agissant5Caution
     */
    agissant5Caution: string;
  }

  export interface ISaisiesComplementaireMaj extends IElementMaj {

    /**
     * NomPersonneMoraleACA
     */
    nomPersonneMoraleACA: string;

    /**
     * An1AttestationPTZ
     */
    an1AttestationPTZ: boolean;

    /**
     * An2AttestationPTZ
     */
    an2AttestationPTZ: boolean;

    /**
     * An3AttestationPTZ
     */
    an3AttestationPTZ: boolean;

    /**
     * An4AttestationPTZ
     */
    an4AttestationPTZ: boolean;

    /**
     * An5AttestationPTZ
     */
    an5AttestationPTZ: boolean;

    /**
     * An6AttestationPTZ
     */
    an6AttestationPTZ: boolean;

    /**
     * An7AttestationPTZ
     */
    an7AttestationPTZ: boolean;

    /**
     * An8AttestationPTZ
     */
    an8AttestationPTZ: boolean;

    /**
     * An9AttestationPTZ
     */
    an9AttestationPTZ: boolean;

    /**
     * AnXAttestationPTZ
     */
    anXAttestationPTZ: boolean;

    /**
     * AnXIAttestationPTZ
     */
    anXIAttestationPTZ: boolean;

    /**
     * AnIIIAttestationPTZ
     */
    anIIIAttestationPTZ: boolean;

    /**
     * AnIVAttestationPTZ
     */
    anIVAttestationPTZ: boolean;

    /**
     * AnXIVAttestationPTZ
     */
    anXIVAttestationPTZ: boolean;

    /**
     * ValeurCondGenLIA
     */
    valeurConditionGenLIA: boolean;

    /**
     * VisibiliteCheckBoxCondGenLIA
     */
    visibiliteCheckBoxConditionGenLIA: boolean;

    /**
     * ValeurCondSpeLIA
     */
    valeurConditionSpeLIA: boolean;

    /**
     * VisibiliteCheckBoxCondSpeLIA
     */
    visibiliteCheckBoxConditionSpeLIA: boolean;

    /**
     * NomCopropriete
     */
    nomCopropriete: string;

    /**
     * Adresse1Copropriete
     */
    adresse1Copropriete: string;

    /**
     * Adresse2Copropriete
     */
    adresse2Copropriete: string;

    /**
     * Adresse3Copropriete
     */
    adresse3Copropriete: string;

    /**
     * TypePersonneCopropriete
     */
    typePersonneCopropriete: string;

    /**
     * MandataireCopropriete
     */
    mandataireCopropriete: string;

    /**
     * EffetCopropriete
     */
    effetCopropriete: string;

    /**
     * ListeCreditTauxFixe
     */
    listeCreditTauxFixe: Array<ICreditTauxFixeMaj>;

    /**
     * ContenuConditionsSuspensives
     */
    contenuConditionsSuspensives: string;

    /**
     * PresenceEmprunteurIndividuel
     */
    presenceEmprunteurIndividuel: boolean;

    /**
     * LibelleEmprunteurIndividuel
     */
    libelleEmprunteurIndividuel: string;

    /**
     * AccordConjointEmprunteurIndividuel
     */
    accordConjointEmprunteurIndividuel: boolean;

    /**
     * LibelleConjointEmprunteurIndividuel
     */
    libelleConjointEmprunteurIndividuel: string;

    /**
     * PresenceEINonEmprunteur
     */
    presenceEINonEmprunteur: boolean;

    /**
     * LibelleEINonEmprunteur
     */
    libelleEINonEmprunteur: string;

    /**
     * AccordConjointEINonEmprunteur
     */
    accordConjointEINonEmprunteur: boolean;

    /**
     * LibelleConjointEINonEmprunteur
     */
    libelleConjointEINonEmprunteur: string;

    /**
     * DateTransfertBoSuiveuse
     */
    dateTransfertBoSuiveuse: string;

    /**
     * DateDispositionFondsSuiveuse
     */
    dateDispositionFondsSuiveuse: string;

    /**
     * DateEnvoiNumerisationSuiveuse
     */
    dateEnvoiNumerisationSuiveuse: string;

    /**
     * DateSignatureNotaireSuiveuse
     */
    dateSignatureNotaireSuiveuse: string;

    /**
     * EditionSuiveuse
     */
    editionSuiveuse: string;

    /**
     * Statut1Suiveuse
     */
    statut1Suiveuse: Array<string>;

    /**
     * Statut2Suiveuse
     */
    statut2Suiveuse: Array<string>;

    /**
     * Statut3Suiveuse
     */
    statut3Suiveuse: Array<string>;

    /**
     * NumeroDossierAssocieSuiveuse
     */
    numeroDossierAssocieSuiveuse: string;

    /**
     * CorbeilleWorkflowSuiveuse
     */
    corbeilleWorkflowSuiveuse: Array<string>;

    /**
     * CommentaireSuiveuse
     */
    commentaireSuiveuse: string;

    /**
     * IndexGarantie
     */
    indexGarantie: number;

    /**
     * ExisteAgrementGarantie
     */
    existeAgrementGarantie: boolean;

    /**
     * DateAgrementGarantie
     */
    dateAgrementGarantie: string;

    /**
     * PublierGreffeGarantie
     */
    publierGreffeGarantie: boolean;

    /**
     * ConjointsEmprunteursGarantie
     */
    conjointsEmprunteursGarantie: string;

    /**
     * ConjointsCautionsGarantie
     */
    conjointsCautionsGarantie: string;

    /**
     * DateDebutLigneInvestissement
     */
    dateDebutLigneInvestissement: string;

    /**
     * DateFinLigneInvestissement
     */
    dateFinLigneInvestissement: string;

    /**
     * ATauxFixeLigneInvestissement
     */
    aTauxFixeLigneInvestissement: boolean;

    /**
     * TauxFixeLigneInvestissement
     */
    tauxFixeLigneInvestissement: string;

    /**
     * TauxRevisableLigneInvestissement
     */
    tauxRevisableLigneInvestissement: string;

    /**
     * ReferenceIndiceLigneInvestissement
     */
    referenceIndiceLigneInvestissement: string;

    /**
     * RaisonConstituantMandataire
     */
    raisonConstituantMandataire: string;

    /**
     * NomMandataire
     */
    nomMandataire: string;

    /**
     * VertuMandataire
     */
    vertuMandataire: string;

    /**
     * NombreOutils
     */
    nombreOutils: number;

    /**
     * AjoutNotices
     */
    ajoutNotices: boolean;

    /**
     * NumeroOrias
     */
    numeroOrias: string;

    /**
     * ListeOutil
     */
    listeOutil: Array<IOutilMaj>;

    /**
     * SousignePouvoirNotaire
     */
    sousignePouvoirNotaire: string;

    /**
     * DatePouvoirNotaire
     */
    datePouvoirNotaire: string;

    /**
     * Nom1PouvoirNotaire
     */
    nom1PouvoirNotaire: string;

    /**
     * Nom2PouvoirNotaire
     */
    nom2PouvoirNotaire: string;

    /**
     * Nom3PouvoirNotaire
     */
    nom3PouvoirNotaire: string;

    /**
     * Nom4PouvoirNotaire
     */
    nom4PouvoirNotaire: string;

    /**
     * RibPretDevise
     */
    ribPretDevise: string;

    /**
     * PretDevise
     */
    pretDevise: Array<IPretDeviseMaj>;

    /**
     * MontantMiniDeblocagePretDevise
     */
    montantMinimumDeblocagePretDevise: string;

    /**
     * AccordPrincipe
     */
    accordPrincipe: boolean;

    /**
     * Rdv
     */
    rdv: boolean;

    /**
     * Deroulement
     */
    deroulement: boolean;

    /**
     * RaisonCaution
     */
    raisonCaution: string;

    /**
     * RepresentantCaution
     */
    representantCaution: string;

    /**
     * EnQualiteCaution
     */
    enQualiteCaution: string;

    /**
     * DatePouvoirCaution
     */
    datePouvoirCaution: string;

    /**
     * NomSocieteEmprunteurBailleur
     */
    nomSocieteEmprunteurBailleur: string;

    /**
     * CapitalEmprunteurBailleur
     */
    capitalEmprunteurBailleur: string;

    /**
     * SiegeEmprunteurBailleur
     */
    siegeEmprunteurBailleur: string;

    /**
     * LieuRCSEmprunteurBailleur
     */
    lieuRCSEmprunteurBailleur: string;

    /**
     * NumeroRCSEmprunteurBailleur
     */
    numeroRCSEmprunteurBailleur: string;

    /**
     * DateRCSEmprunteurBailleur
     */
    dateRCSEmprunteurBailleur: string;

    /**
     * RepresentantEmprunteurBailleur
     */
    representantEmprunteurBailleur: string;

    /**
     * LibelleRepresEmprunteurPersMorale
     */
    libelleRepresEmprunteurPersonneMorale: string;

    /**
     * EnQualiteEmprunteurPersMorale
     */
    enQualiteEmprunteurPersonneMorale: string;

    /**
     * DatePouvoirEmprunteurPersMorale
     */
    datePouvoirEmprunteurPersonneMorale: string;

    /**
     * ListeDonneesCautionPersonneMorale
     */
    listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleMaj>;

    /**
     * RepresPersMorale
     */
    represPersonneMorale: string;

    /**
     * AgissantPersMorale
     */
    agissantPersonneMorale: string;

    /**
     * Vertu1PersMorale
     */
    vertu1PersonneMorale: string;

    /**
     * Vertu2PersMorale
     */
    vertu2PersonneMorale: string;

    /**
     * Vertu3PersMorale
     */
    vertu3PersonneMorale: string;

    /**
     * Vertu4PersMorale
     */
    vertu4PersonneMorale: string;

    /**
     * Vertu5PersMorale
     */
    vertu5PersonneMorale: string;

    /**
     * Vertu6PersMorale
     */
    vertu6PersonneMorale: string;

    /**
     * Vertu7PersMorale
     */
    vertu7PersonneMorale: string;

    /**
     * Vertu8PersMorale
     */
    vertu8PersonneMorale: string;

    /**
     * Vertu9PersMorale
     */
    vertu9PersonneMorale: string;

    /**
     * Vertu10PersMorale
     */
    vertu10PersonneMorale: string;

    /**
     * Vertu11PersMorale
     */
    vertu11PersonneMorale: string;

    /**
     * Vertu12PersMorale
     */
    vertu12PersonneMorale: string;

    /**
     * RepresPersoMoraleAssurance
     */
    represPersoMoraleAssurance: string;

    /**
     * AgissantQualitePersoMoraleAssurance
     */
    agissantQualitePersoMoraleAssurance: string;

    /**
     * Vertu1PersoMoraleAssurance
     */
    vertu1PersoMoraleAssurance: string;

    /**
     * Vertu2PersoMoraleAssurance
     */
    vertu2PersoMoraleAssurance: string;

    /**
     * DatePourvoirPersoMoraleAssurance
     */
    datePourvoirPersoMoraleAssurance: string;

    /**
     * Vertu4PersoMoraleAssurance
     */
    vertu4PersoMoraleAssurance: string;

    /**
     * CompoOffrePersoMoraleAssurance
     */
    compositionOffrePersoMoraleAssurance: string;

    /**
     * RepresPreteurCE
     */
    represPreteurCE: string;

    /**
     * ReservesRedacteur
     */
    reservesRedacteur: string;

    /**
     * RaisonSocialePersMoraleNantissement
     */
    raisonSocialePersonneMoraleNantissement: string;

    /**
     * RepresPersMoraleNantissement
     */
    represPersonneMoraleNantissement: string;

    /**
     * EnQualitePersMoraleNantissement
     */
    enQualitePersonneMoraleNantissement: string;

    /**
     * Vertu1PersMoraleNantissement
     */
    vertu1PersonneMoraleNantissement: string;

    /**
     * Vertu2PersMoraleNantissement
     */
    vertu2PersonneMoraleNantissement: string;

    /**
     * VilleTribunal
     */
    villeTribunal: string;
  }

  export interface IAgentMaj extends IElementMaj {
  }

  export interface IProjetNonImmobilierMaj extends IProjetMaj {

    /**
     * DescProjNonImmb
     */
    descriptionProjetNonImmobilier: string;

    /**
     * Dtfbso_DateMiseDispFond
     */
    dateMiseDispFond: string;
  }

  export interface IProjetImmobilierMaj extends IProjetMaj {

    /**
     * Cifopa_DefnSiEmprEstPrm
     */
    defnSiEmpruntEstPrm: boolean;

    /**
     * Cofopz_CodeCondDergPourPtz
     */
    codeConditionDerogationPourPtz: number;

    /**
     * Cdfose_CodeBatmBassConso
     */
    codeBatimentBassConsommation: number;

    /**
     * Cdfcdo_CodeDestAutrParObjt
     */
    codeDestinataireAutreParObjet: number;

    /**
     * Cdfomo_CodeModlOccpLogm
     */
    codeModeleOccpLogement: number;

    /**
     * Ctfopm_CodePrixMarc
     */
    codePrixMarche: number;

    /**
     * Ctfmmc_CodeTypeMarc
     */
    codeTypeMarche: number;

    /**
     * Ctfmpo_TypePrpr
     */
    typeProprietaire: number;

    /**
     * Txfmpa_PctPrprApreOper
     */
    pourcentageProprietaireApreOper: number;

    /**
     * Cdfopa_CodePaysLocs
     */
    codePaysLocalisation: string;

    /**
     * Mgfovh_MtInscHypt
     */
    montantInscHypotheque: number;

    /**
     * Cdfqem_QualEmplaProj
     */
    qualEmplaProjet: number;

    /**
     * ZoneReglRobnBien
     */
    zoneRegleRobnBien: string;

    /**
     * ZonePlusLogm
     */
    zonePlusLogement: string;

    /**
     * Cdfozg_CodeZoneGegrRegl
     */
    codeZoneGegrRegle: number;

    /**
     * Cdfizf_CodeZoneFrncSins
     */
    codeZoneFrncSinistre: number;

    /**
     * Cdfwti_TypeImeu
     */
    typeImeu: number;

    /**
     * Idfapi_IdntPrgmImmb
     */
    idProgrammeImmobilier: string;

    /**
     * Idfaap_IdntAccrPourInst
     */
    idAccrPourInstruction: string;

    /**
     * Cifcep_IndicemssNouvPartScpi
     */
    indicemssNouvPartScpi: number;

    /**
     * Ctfcve_CodeTypeMarcPourVent
     */
    codeTypeMarchePourVent: number;

    /**
     * Idfove_NomSoceGest
     */
    nomSoceGestion: string;

    /**
     * Cdfizf_CentreBourgRural
     */
    centreBourgadeRural: boolean;
  }

  export interface IProjetEPSMaj extends IProjetMaj {
  }

  export interface IProjetMaj extends IElementMaj {

    /**
     * Lbfoof_DescObjt
     */
    descriptionObjet: string;

    /**
     * Mcfoof_CoutTotlObjt
     */
    coutTotalObjet: number;

    /**
     * Mtfoho_CoutTotlObjtHt
     */
    coutTotalObjetHt: number;

    /**
     * Mtfott_CoutTotlObjtTtc
     */
    coutTotalObjetTTC: number;

    /**
     * Mtfofd_MtFrsDivr
     */
    montantFrsDivr: number;

    /**
     * Mtfcra_MtRachCren
     */
    montantRachCren: number;

    /**
     * Cdfomp_CodeMiseOeuvrProjPro
     */
    codeMiseOeuvrProjetPro: number;

    /**
     * Cifocs_CoutObjtSaisCalcEnvl
     */
    coutObjetSaisieCalculEnvl: number;

    /**
     * Cdfcon_NegcEffcParNotr
     */
    negocieEffcParNotaire: boolean;

    /**
     * Ctfoan_TypeAcqs
     */
    typeAcqs: number;

    /**
     * Ctfonu_NbUnteContPrgmImmb
     */
    nombreUnteContratProgrammeImmobilier: string;

    /**
     * Ctfgce_CritElgGarFEI
     */
    critereElgGarFEI: string;

    /**
     * Mtfofn_CoutFrsNotr
     */
    coutFrsNotaire: number;

    /**
     * Mofcpz_CoutRelOper
     */
    coutRelOper: number;

    /**
     * Lbfoa1_Intt
     */
    adresseLigne1: string;

    /**
     * Lbfoa2_AdrsLign3
     */
    adresseLigne3: string;

    /**
     * Lbfoa3_AdrsLign4
     */
    adresseLigne4: string;

    /**
     * Lbfoa4_CodePost
     */
    codePoste: string;

    /**
     * Lbfoa5_Ville
     */
    ville: string;

    /**
     * Lbfoa6_CompIntt
     */
    adresseLigne1Suite: string;

    /**
     * AdrsLign5
     */
    adresseLigne5: string;

    /**
     * Mtfgob_MtEstmVenl
     */
    montantEstmVenl: number;

    /**
     * Dtfgob_DateEstmVenl
     */
    dateEstmVenl: string;

    /**
     * Cdfgme_CodeModlEstmVenl
     */
    codeModeleEstmVenl: string;

    /**
     * Cdfwrl_IndicAchtRvnt
     */
    indiceAchtRvnt: boolean;
  }

  export interface IComplementEPSMaj extends IElementMaj {

    /**
     * Cnfcnb_NatrGarnEps
     */
    natureGarantieEPS: string;

    /**
     * Idfapa_RefrExtnDossParn
     */
    referenceExterneDossierParent: string;

    /**
     * Ddfaen_DateDebuEngg
     */
    dateDebutEngagement: string;

    /**
     * Dffaen_DateFinEngg
     */
    dateFinEngagement: string;

    /**
     * Mgfggo_MtEnggGlblOrig
     */
    montantEngagementGlblOrigine: number;

    /**
     * Idfagl_IdntEnggGlbl
     */
    idEngagementGlbl: string;

    /**
     * Cifcrg_CodeIndRetrocessionEPS
     */
    codeIndicateurRetrocessionEPS: number;

    /**
     * Cifcrh_CodeIndicRadiationAutoEPS
     */
    codeIndiceRadiationAutomatiqueEPS: number;

    /**
     * Cifcri_CodeIndicEPSAmortissable
     */
    codeIndiceEPSAmortissable: number;

    /**
     * Cifeng_CodeEngagementGlobal
     */
    codeEngagementGlobal: number;

    /**
     * Cnfcnh_CodeTypeObjetEPS
     */
    codeTypeObjetEPS: string;

    /**
     * Cofcca_CodeCanalDistributionEPS
     */
    codeCanalDistributionEPS: string;

    /**
     * Cofcsi_CodeSignatureElectroniqueEPS
     */
    codeSignatureElectroniqueEPS: string;

    /**
     * Dtfcdd_DateDecisionEPS
     */
    dateDecisionEPS: string;

    /**
     * Idfaei_IdEntiteInstructeur
     */
    idEntiteInstructeur: string;

    /**
     * Idfagd_CodeAgentDecideur
     */
    codeAgentDecideur: string;

    /**
     * Idfcma_IdModeleActeEPS
     */
    idModeleActeEPS: string;

    /**
     * Idfcs1_IdEDSSignataire
     */
    idEDSSignataire: string;

    /**
     * Idfcs2_IdEDSSignataire
     */
    idEDSSignataire1: string;

    /**
     * Mtfcad_MontantAssietteCommission
     */
    montantAssietteCommission: number;

    /**
     * Nxfcse_NumSignatureElectroniqueEPS
     */
    numeroSignatureElectroniqueEPS: string;

    /**
     * Idfcfa_IdFamilleEPS
     */
    idFamilleEPS: string;

    /**
     * Dtfcru_DateRadiationEPS
     */
    dateRadiationEPS: string;

    /**
     * Idfaic_IdPreuveICG
     */
    idPreuveICG: string;

    /**
     * Idfapc_IdClientWeb
     */
    idClientWeb: string;

    /**
     * Lbfauc_LibelleUtilisateurWeb
     */
    libelleUtilisateurWeb: string;

    /**
     * Lbfas1_LibelleCiviliteSignataire1
     */
    libelleCiviliteSignataire1: string;

    /**
     * Lbfas3_LibelleCiviliteSignataire2
     */
    libelleCiviliteSignataire2: string;

    /**
     * Lbfas4_LibelleFonctionSignataire2
     */
    libelleFonctionSignataire2: string;

    /**
     * Lbfas2_LibelleFonctionSignataire1
     */
    libelleFonctionSignataire1: string;

    /**
     * Cdfcew_CodeEtatDossierEPSWeb
     */
    codeEtatDossierEPSWeb: string;
  }

  export interface IControleManuelMaj extends IPieceMaj {

    /**
     * Llfccm_CommtCtrl
     */
    commentaireControle: string;
  }

  export interface IPieceAgenceMaj extends IPieceMaj {
  }

  export interface IPieceClientMaj extends IPieceMaj {
  }

  export interface IPieceMaj extends IElementMaj {

    /**
     * Cdfaju_StttPiecCtrl
     */
    stttPieceControle: number;
  }

  export interface ITresorerieFinanceeMaj extends IBienDetailleMaj {

    /**
     * Idfove_IdntVndr
     */
    idVendeur: string;
  }

  export interface IBienEquipementProMaj extends IBienDetailleMaj {
  }

  export interface IBienDetailleMaj extends IElementMaj {

    /**
     * Mtfote_CoutTerr
     */
    coutTerr: number;

    /**
     * Mtfoac_CoutAcqsComlInds
     */
    coutAcqsCommercialisationInds: number;

    /**
     * Mtfoai_CoutAcqsHabt
     */
    coutAcqsHabitation: number;

    /**
     * Mtfoco_CoutConst
     */
    coutConstruction: number;

    /**
     * Mtfotr_CoutTrvxAmen
     */
    coutTravauxAmen: number;

    /**
     * Mtfopp_CoutPasPort
     */
    coutPasPort: number;

    /**
     * Mtfofc_CoutFondComc
     */
    coutFondComc: number;

    /**
     * Mtfomo_CoutEqpmMte
     */
    coutEqpmMte: number;

    /**
     * Mtfovp_CoutVehcPrfs
     */
    coutVehcPrfs: number;

    /**
     * Mtfops_CoutPartSocl
     */
    coutPartSociale: number;

    /**
     * Mtfofg_MtFrsNegc
     */
    montantFrsNegocie: number;

    /**
     * Mtfofn_MtFrsNotr
     */
    montantFrsNotaire: number;

    /**
     * Mtfost_CoutStck
     */
    coutStck: number;

    /**
     * Mtfosc_CoutStckHorsInstr
     */
    coutStckHorsInstruction: number;

    /**
     * Mtfobf_CoutBfr
     */
    coutBfr: number;

    /**
     * Mtfobc_CoutBfrHorsInstr
     */
    coutBfrHorsInstruction: number;

    /**
     * Mtfodv_CoutAutrFrsPrfs
     */
    coutAutreFrsPrfs: number;

    /**
     * Mtfodc_CoutAutrFrsPrfsHorsInstr
     */
    coutAutreFrsPrfsHorsInstruction: number;

    /**
     * Mcfotv_MtTvaFinn
     */
    montantTVAFinancier: number;

    /**
     * Mtfora_MtRachCren
     */
    montantRachCren: number;

    /**
     * Mtfods_CoutPartSoce
     */
    coutPartSoce: number;
  }

  export interface IAutoMotoMaj extends IBienConsoFinanceMaj {

    /**
     * Ctfmov_TypeMotr
     */
    typeMotr: number;

    /**
     * Lbfmov_ModeVehc
     */
    modeVehc: string;

    /**
     * Lbfqov_MarqVehc
     */
    marqVehc: string;

    /**
     * Ctfmvh_TypeVehc
     */
    typeVehc: number;

    /**
     * Ctfmgv_GnreVehc
     */
    gnreVehc: number;

    /**
     * Cdfmpv_PuisFisc
     */
    puisFiscal: number;

    /**
     * Ddfmpc_DatePrmeMiseCircl
     */
    datePrmeMiseCircl: string;
  }

  export interface IBienConsoFinanceMaj extends IElementMaj {

    /**
     * Idfove_IdntVndr
     */
    idVendeur: string;

    /**
     * Mgfovh_MtInscHypt
     */
    montantInscHypotheque: number;
  }

  export interface IEvenementMaj extends IElementMaj {

    /**
     * Lbfamd_MessEnrgSurEvenDoss
     */
    messEnregistrementSurEvenDossier: string;

    /**
     * Dtfaee_DateEfftEven
     */
    dateEffetEven: string;

    /**
     * Idfase_IdntEnttSaisEven
     */
    idEntiteSaisieEven: string;

    /**
     * Lbfase_LiblEnttSaisEven
     */
    libelleEntiteSaisieEven: string;

    /**
     * Cefhgc_CodeIndicGestCentEven
     */
    codeIndiceGestionCentralEven: number;

    /**
     * Cdfabo_ElemStrcGestBackCent
     */
    elementStructureGestionBackCentral: string;

    /**
     * Idfce3_IdntCaisAsscBackCent
     */
    idCaisseAssuranceBackCentral: number;
  }

  export interface IBlocNotesMaj extends IElementMaj {

    /**
     * ContBlc
     */
    contratBlocNote: string;
  }

  export interface ICreditPalierProgressionMaj extends IElementMaj {

    /**
     * Txfcam_ValrTxPrgrAmrt
     */
    valeurTauxProgressifAmortissement: number;

    /**
     * Cdfdcg_CodeIndxTxPrgrAmrt
     */
    codeIndexTauxProgressifAmortissement: number;

    /**
     * Npfca1_NbPerdDureePalrPrgr
     */
    nombrePeriodeDureePalierProgressif: number;
  }

  export interface IComplementPhasePretCombineMaj extends IElementMaj {

    /**
     * Mafaqa_MtAmrt
     */
    montantAmortissement: number;

    /**
     * Mkfaif_MtInfine
     */
    montantInfine: number;

    /**
     * Ctfark_ModeSaisReprCapt
     */
    modeSaisieReprCapital: number;

    /**
     * Tafaqa_QuotAmrt
     */
    quotientAmortissement: number;
  }

  export interface ICreditPhaseAmortissementMaj extends ICreditPhaseMaj {

    /**
     * Txfcqa_QuotAmrt
     */
    quotientAmortissement: number;

    /**
     * Txfaom_TxConstPhasCred
     */
    tauxConstructionPhaseCredit: number;

    /**
     * Mefhcd_MtEchmOptm
     */
    montantEchmOptimisation: number;
  }

  export interface ICreditPhaseDiffereAmortissementMaj extends ICreditPhaseMaj {
  }

  export interface ICreditPhaseDiffereTotalMaj extends ICreditPhaseMaj {
  }

  export interface ICreditPhaseMobilisationMaj extends ICreditPhaseMaj {
  }

  export interface ICreditPhasePrefinancementMaj extends ICreditPhaseMaj {

    /**
     * Cdfppf_CodeRedcDureePref
     */
    codeReductionDureePref: number;

    /**
     * RedcDureePref
     */
    reductionDureePref: boolean;
  }

  export interface ICreditPhaseMaj extends IElementMaj {

    /**
     * Capitalisation
     */
    capitalisation: boolean;

    /**
     * Ctfcki_ModeCaptRecvInte
     */
    modeCapitalRecouvrementInterieur: number;

    /**
     * Cdfcki_CodeCaptRecvInte
     */
    codeCapitalRecouvrementInterieur: number;

    /**
     * Ptfcin_CodePerdAsscCalcInte
     */
    codePeriodeAssuranceCalculInterieur: number;

    /**
     * Ptfcam_CodePerdCalcMer
     */
    codePeriodeCalculMER: number;

    /**
     * Npfcph_NbPerdPhas
     */
    nombrePeriodePhase: number;

    /**
     * Pefcph_CodePerdDurePhas
     */
    codePeriodeDurePhase: number;

    /**
     * ValrTxPhas
     */
    valeurTauxPhase: number;
  }

  export interface ICreditParamRevisionParPeriodeMaj extends ICreditParamRevisionMaj {
  }

  export interface ICreditParamRevisionParPhaseMaj extends ICreditParamRevisionMaj {
  }

  export interface ICreditParamRevisionMaj extends IElementMaj {

    /**
     * Nofrji_NumeJeuIndcRevsAsscCred
     */
    numeroJeuxIndiceRevisionAssuranceCredit: number;

    /**
     * Ctfrub_ModeExprButrTxBais
     */
    modeExpressionButoireTauxBaisse: number;

    /**
     * Ctfruh_ModeExprButrTxHaus
     */
    modeExpressionButoireTauxHausse: number;

    /**
     * Tvfru1_ValrButrTxBais
     */
    valeurButoireTauxBaisse: number;

    /**
     * Tvfru2_ValrButrTxHaus
     */
    valeurButoireTauxHausse: number;
  }

  export interface ICreditPalierTauxMaj extends IElementMaj {

    /**
     * Txfcpg_TxPrgrEcheSurPalr
     */
    tauxProgressifEcheanceSurPalier: number;

    /**
     * Npfcal_NbPerdDureePalr
     */
    nombrePeriodeDureePalier: number;
  }

  export interface ISuiviPlanifieMaj extends IElementMaj {

    /**
     * Ddfarv_DatePremSuiv
     */
    datePremierSuivant: string;

    /**
     * Dtfarv_DateSuivPlnf
     */
    dateSuivantPlafond: string;

    /**
     * Lbfarw_LiblLibrAsscSuiv
     */
    libelleLibrAssuranceSuivant: string;

    /**
     * Idfccl_IdntClse
     */
    idClasse: string;

    /**
     * Npfcrw_NbPerdSuivPlnf
     */
    nombrePeriodeSuivantPlafond: number;

    /**
     * Ptfcrv_CodePerdSuivPlnf
     */
    codePeriodeSuivantPlafond: number;
  }

  export interface ICompteCourantMaj extends IElementMaj {

    /**
     * Mtfasc_MtHyptCapt
     */
    montantHypothequeCapital: number;

    /**
     * Cifcmh_CodeIndicBlcgSaisMtHyptCapt
     */
    codeIndiceBlcgSaisieMontantHypothequeCapital: number;
  }

  export interface IEmprunteurMaj extends IElementMaj {

    /**
     * Nbfmec_NbEnfnChrg
     */
    nombreEnfantCharge: number;

    /**
     * Nbfmpf_NbPersGrpe
     */
    nombrePersonneGrpe: number;

    /**
     * Nbfmps_NbPersSuppChrg
     */
    nombrePersonneSuppCharge: number;

    /**
     * Ctfmli_TypeLienEtrLesPers
     */
    typeLienEntreLesPersonne: number;

    /**
     * Lbfmgp_NomGrpe
     */
    nomGrpe: string;

    /**
     * Lbfmae_AgsEnfn
     */
    ageEnfant: Array<number>;

    /**
     * Dtfmrp_DateDernRapp
     */
    dateDernierRapp: string;

    /**
     * Nbfma_AnneNaisEnfn
     */
    anneNaisEnfant: Array<number>;

    /**
     * Cdfmec_CodeEmplrComun
     */
    codeEmplrComun: number;

    /**
     * Mtfmcv_CapceprgAvntOper
     */
    capceprgAvenantOper: number;

    /**
     * Mtfmac_AncnChrgLiesAOperImmb
     */
    ancnChargeLiesAOperImmobilier: number;

    /**
     * Mtfmvp_ValrPtrmImmb
     */
    valeurPatrimoineImmobilier: number;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Mtfmpa_MtPtrmMobl
     */
    montantPatrimoineMobl: number;

    /**
     * Nbfmvo_NbVoit
     */
    nombreVoiture: number;

    /**
     * Lbfaem_DenmEmpr
     */
    denmEmprunt: string;

    /**
     * Lnfpem_LiblLongEmpr
     */
    libelleLongEmprunt: string;

    /**
     * Lbfain_IntlcEmpr
     */
    intlcEmprunt: string;

    /**
     * Idfaep_IdntEnttTitlClnt
     */
    idEntiteTitulaireClient: string;

    /**
     * Idfaeg_IdntElemStrcGest
     */
    idElementStructureGestion: string;

    /**
     * Cdfcke_CodeCateEmpr
     */
    codeCateEmprunt: string;

    /**
     * Ctfpmp_CodeTypeMarcPers
     */
    codeTypeMarchePersonne: number;

    /**
     * Ctfcae_CateAgntEcnmBafi
     */
    cateAgentEcnmBafi: number;

    /**
     * Ctfccl_CateClntBafi
     */
    cateClientBafi: number;

    /**
     * Ctfcad_TypeAdmnBafi
     */
    typeAdmnBafi: number;

    /**
     * Ctfcba_ClssAgntBafi
     */
    classeAgentBafi: string;

    /**
     * Cdfpsf_CodeSittFaml
     */
    codeSituationFamille: number;

    /**
     * Cdfpsr_CodeSittFamlRegl
     */
    codeSituationFamilleRegle: number;

    /**
     * Nbfpnp_NbPersCmpstMeng
     */
    nombrePersonneCmpstMeng: number;

    /**
     * Cdfpma_NbActfMeng
     */
    nombreActfMeng: number;

    /**
     * Dtfpen_DateEncrEparLogm
     */
    dateEncoursEpargneLogement: string;

    /**
     * Mtftpl_EncrEncrIsssPretPel
     */
    encoursEncoursIsssPretPEL: number;

    /**
     * Mtftli_MtEncrIsssPretLel
     */
    montantEncoursIsssPretLEL: number;

    /**
     * Mtftlh_MtEncrLivrAutrEtbl
     */
    montantEncoursLivrAutreEtbl: number;

    /**
     * Mtftph_MtEncrPlnsAutrEtbl
     */
    montantEncoursPlnsAutreEtbl: number;

    /**
     * Mtfwrt_TotlRevnAnnlNets
     */
    totalRevnAnnulationNets: number;

    /**
     * Mtfprm_MtRevnMeng
     */
    montantRevnMeng: number;

    /**
     * Cdfwsl_StttOccpLogmActl
     */
    stttOccpLogementActuariel: number;

    /**
     * Cdfpci_CodeTitrCivl
     */
    codeTitreCivilite: string;

    /**
     * Lbfpnm_NomRaisSoclEmpr
     */
    nomRaisonSocialeEmprunt: string;

    /**
     * Lbfpa1_Intt
     */
    intituleLigne1: string;

    /**
     * Lbfpa2_AdrsLign3
     */
    adresseLigne3: string;

    /**
     * Lbfpa3_AdrsLign4
     */
    adresseLigne4: string;

    /**
     * Lbfpa4_CodePost
     */
    codePoste: string;

    /**
     * Lbfpa5_Ville
     */
    ville: string;

    /**
     * Lbfpa6_CompIntt
     */
    compIntituleLigne2: string;

    /**
     * Lbfpa7_AdrsLign5
     */
    adresseLigne5: string;

    /**
     * Cdfcdo_CodeDestAutrParObjt
     */
    codeDestinataireAutreParObjet: number;

    /**
     * Cdfpse_CodeSectRatt
     */
    codeSecteurRattachement: string;

    /**
     * Cdfpjm_CodeJeunMeng
     */
    codeJeunMeng: number;

    /**
     * Qmfcvi_EsperVie
     */
    esperVie: number;

    /**
     * Qmfcvd_EsperVieDec
     */
    esperVieDecision: number;

    /**
     * Qmfcvs_EsperVieStrs
     */
    esperVieStress: number;

    /**
     * Ctfarp_EnvoiMailSms
     */
    envoiMailSms: string;

    /**
     * ListIdntPers
     */
    listeIdPersonne: Array<string>;

    /**
     * Cdfadv_CodeDeviseEmprunteur
     */
    codeDeviseEmprunteur: string;
  }

  export interface IGageVehiculeMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_NumeSer
     */
    numeroSer: string;

    /**
     * Lbfolt_NumeImmt
     */
    numeroImmt: string;
  }

  export interface IHypothequeAerienneMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_NumeSer
     */
    numeroSer: string;

    /**
     * Lbfolt_NumeImmt
     */
    numeroImmt: string;
  }

  export interface IBonDeCaisseCapitalisationMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_Etab
     */
    referenceCadastrale: string;

    /**
     * Lbfolt_NumeCpte
     */
    numeroCompte: string;

    /**
     * Lbfoo1_NumeSiren
     */
    numeroSiren: string;

    /**
     * Lbfoo2_ValrBonOrig
     */
    valeurBonOrigine: number;

    /**
     * Lbfoo3_NumeContTitr
     */
    numeroContratTitre: string;

    /**
     * Lbfoo4_NatrBon
     */
    natureBon: string;

    /**
     * Lbfoo5_Dateeche
     */
    dateeche: string;

    /**
     * Lbfoo6_TitrNomPrenDeps
     */
    titreNomPrenDeps: string;
  }

  export interface IDelegationLoyerMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_MtAnnuLoye
     */
    montantAnnuLoye: number;

    /**
     * Lbfolt_NumeCpte
     */
    numeroCompte: string;

    /**
     * Lbfoo1_DateExtnBail
     */
    dateExterneBail: string;

    /**
     * Lbfoo2_NomGern
     */
    nomGern: string;
  }

  export interface ICessionDaillyAutreMaj extends IBienPorteEnGarantieMaj {
  }

  export interface IContratAssuranceMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_DateNaisAssr
     */
    dateNaisAssurance: string;

    /**
     * Lbfolt_NumeContAssr
     */
    numeroContratAssurance: string;

    /**
     * Lbfoo1_NomCieAssr
     */
    nomCieAssurance: string;

    /**
     * Lbfoo2_NumeSiren
     */
    numeroSiren: string;

    /**
     * Lbfoo3_CntrGest
     */
    cntrGestion: string;

    /**
     * Lbfoo4_TypeTechJurd
     */
    typeTechniqueJuridique: string;

    /**
     * Lbfoo5_NomContAssr
     */
    nomContratAssurance: string;

    /**
     * Lbfoo6_ApprPers
     */
    apportPersonne: number;

    /**
     * Lbfoo7_MtMinmVerstSign
     */
    montantMinimumVersementSigne: number;

    /**
     * Cdfvat_CodeIndicAttnVerst
     */
    codeIndiceAttnVersement: number;
  }

  export interface IAntichreseMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_RefeCads
     */
    referenceCads: string;

    /**
     * Lbfolt_NumeLot
     */
    numeroLot: string;
  }

  export interface ICessionDaillyLoyerImmeubleMaj extends IBienPorteEnGarantieMaj {
  }

  export interface IGageCompteInstrumentFinancierMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_Etab
     */
    referenceCadastrale: string;

    /**
     * Lbfolt_NumeCpte
     */
    numeroCompte: string;
  }

  export interface INantissementPartSocialeMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_NumeEnrg
     */
    numeroEnregistrement: string;

    /**
     * Lbfolt_NumeCpte
     */
    numeroCompte: string;

    /**
     * Lbfoo1_TitrInte
     */
    descriptionOtion: string;
  }

  export interface INantissementValeurMaterielleMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_TypeValrMatr
     */
    typeValeurMatrimonial: string;

    /**
     * Lbfolt_NumeSer
     */
    numeroRefTypeLot: string;
  }

  export interface INantissementValeurMobiliereMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_Etab
     */
    referenceCadastrale: string;

    /**
     * Lbfolt_NumeCpte
     */
    numeroCompte: string;
  }

  export interface INantissementFondDeCommerceMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_NumeInscRcs
     */
    numeroInscRcs: string;

    /**
     * Lbfolt_LiblLibr
     */
    libelleLibr: string;

    /**
     * Cdfomo_TitrOccpLocLeqlFondEstExpl
     */
    titreOccpLocLeqlFondEstExpl: number;
  }

  export interface IHypothequeImmobiliereMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_RefeCads
     */
    referenceCads: string;

    /**
     * Lbfolt_RefeLot
     */
    referenceLot: string;

    /**
     * Ctfmoi_TypeBien
     */
    typeBien: number;

    /**
     * Ctfolo_TypeLogm
     */
    typeLogement: string;

    /**
     * Cdfcdo_DestBien
     */
    destinataireBien: number;

    /**
     * Nbfosh_SurfHabt
     */
    surfHabitation: number;

    /**
     * Nbfost_SurfTerr
     */
    surfTerr: number;

    /**
     * Cdfcoi_ZoneImplBien
     */
    zoneImplBien: string;

    /**
     * Cdfqem_QualEmpla
     */
    qualEmpla: number;

    /**
     * Lbfoo1_MtDernMutt
     */
    montantDernierMutt: string;

    /**
     * Lbfoo2_DateDernMutt
     */
    dateDernierMutt: string;

    /**
     * Dtfoco_AnneConst
     */
    anneConstruction: number;

    /**
     * Lbfoo3_MtAnnuLoye
     */
    montantAnnuLoye: string;

    /**
     * Lbfoo5_NumeLotCopr
     */
    numeroLotCopr: string;

    /**
     * Lbfoo4_NumeSctn
     */
    numeroSctn: string;

    /**
     * Cifcoc_OccpActlBien
     */
    occpActuarielBien: number;

    /**
     * Cifcph_CodePresHypt
     */
    codePresHypotheque: number;

    /**
     * Idfceb_IdntExpr
     */
    idExpression: string;

    /**
     * Dtfcde_DateDemnExpr
     */
    dateDemandeExpression: string;
  }

  export interface IBienDiversMaj extends IBienPorteEnGarantieMaj {

    /**
     * Lbfoca_Refe1
     */
    reference1: string;

    /**
     * Lbfolt_Refe2
     */
    reference2: string;
  }

  export interface IBienPorteEnGarantieMaj extends IElementMaj {

    /**
     * Lbfoof_LiblObjt
     */
    libelleObjet: string;

    /**
     * Lbfoa1_Intt
     */
    adresseLigne1: string;

    /**
     * Lbfoa2_AdrsLign3
     */
    adresseLigne3: string;

    /**
     * Lbfoa3_AdrsLign4
     */
    adresseLigne4: string;

    /**
     * Lbfoa4_CodePost
     */
    codePoste: string;

    /**
     * Lbfoa5_Ville
     */
    ville: string;

    /**
     * Lbfoa6_CompIntt
     */
    adresseLigne1Suite: string;

    /**
     * Cdfopa_CodePays
     */
    codePays: string;

    /**
     * AdrsLign5
     */
    adresseLigne5: string;

    /**
     * Mtfgob_MtEstmVenl
     */
    montantEstmVenl: number;

    /**
     * Dtfgob_DateEstmVenl
     */
    dateEstmVenl: string;

    /**
     * Cdfgme_CodeModlEstmVenl
     */
    codeModeleEstmVenl: string;

    /**
     * Mtfgo2_MtEstmPrdn
     */
    montantEstmPrdn: number;

    /**
     * Dtfgo2_DateEstmPrdn
     */
    dateEstmPrdn: string;

    /**
     * Cdfgm2_CodeModlEstmPrdn
     */
    codeModeleEstmPrdn: string;

    /**
     * Cmfgt2_CodeMotfReSPrdn
     */
    codeMotfReSPrdn: string;

    /**
     * Dtfiex_DateExprBienCff
     */
    dateExpressionBienCff: string;

    /**
     * Lbfpex_NoteExprBienCff
     */
    noteExpressionBienCff: number;
  }

  export interface ICreditHDMaj extends IElementMaj {

    /**
     * Nufpct_NumrContEpar
     */
    numeroContratEpargne: string;

    /**
     * Mtfggi_MtIntlGarn
     */
    montantInitialGarantie: number;
  }

  export interface IGarantieHDMaj extends IElementMaj {

    /**
     * Cdfcng_NatrGarnHorsDoss
     */
    natureGarantieHorsDossier: string;

    /**
     * Idfgg1_IdntOrigGarnHorsDoss
     */
    idOrigineGarantieHorsDossier: string;

    /**
     * Nofghy_RangPrncHypt
     */
    rangPrincipalHypotheque: number;

    /**
     * Nofgsh_RangSecnHypt
     */
    rangSecnHypotheque: number;

    /**
     * Cdfgrh_CodeCessRangHypt
     */
    codeCessRangHypotheque: number;

    /**
     * IdnttblPrt
     */
    idEtabPreteur: string;

    /**
     * VilleConsvHypt
     */
    villeConsvHypotheque: string;

    /**
     * DatePublHypt
     */
    datePublHypotheque: string;

    /**
     * RfVolm
     */
    refVolume: string;

    /**
     * NumVolm
     */
    numeroVolume: number;

    /**
     * DateEfftHypt
     */
    dateEffetHypotheque: string;

    /**
     * DateFinHypt
     */
    dateFinHypotheque: string;

    /**
     * LiblEmpr
     */
    libelleEmprunt: string;

    /**
     * LiblNotr
     */
    libelleNotaire: string;

    /**
     * VilleNotr
     */
    villeNotaire: string;

    /**
     * MtInscHyptOrig
     */
    montantInscHypothequeOrigine: number;

    /**
     * MtHyptDisp
     */
    montantHypothequeDisp: number;

    /**
     * DateDispMt
     */
    dateDispMontant: string;

    /**
     * Cdfgpc_PactCommr
     */
    pactCommr: string;

    /**
     * Cefggi_CodEttGarn
     */
    codeEtatGarantie: number;

    /**
     * Cdfgex_CodeIndicGarnExtn
     */
    codeIndiceGarantieExterne: number;

    /**
     * CodeIndicTrfoGarn
     */
    codeIndiceTrfoGarantie: number;

    /**
     * Npfgdg_DurIntlMois
     */
    dureeInitialMois: number;

    /**
     * Ctfggm_CodeTypeGarnMyss
     */
    codeTypeGarantieMyss: string;
  }

  export interface ICreditBonificationInfoMaj extends IElementMaj {

    /**
     * sCdfddi_CodeDetail
     */
    codeDetail: string;
  }

  export interface ICreditBonificationMaj extends IElementMaj {

    /**
     * Idfdce_IdCreditExterne
     */
    idCreditExterne: string;
  }

  export interface IGarantieReelleMaj extends IGarantieMaj {

    /**
     * Nofgsh_NumeRangSecnHypt
     */
    numeroRangSecnHypotheque: number;

    /**
     * Npfgdg_DureHyptMois
     */
    dureHypothequeMois: number;

    /**
     * Cdfgpc_PactCommr
     */
    pactCommr: number;

    /**
     * Nofghy_RangHypt
     */
    rangHypotheque: number;

    /**
     * Cdfgrh_CodeCessRangHypt
     */
    codeCessRangHypotheque: number;

    /**
     * Mtfghy_MtCouvParHyptRangInfe
     */
    montantCouvertureParHypothequeRangInfe: number;

    /**
     * Mtfghy_MtFrais
     */
    montantFrais: number;
  }

  export interface IGarantiePersonnelleMaj extends IGarantieMaj {

    /**
     * Cdfgtg_CodeNatrCaut
     */
    codeNatureCaution: number;
  }

  export interface IGarantieMaj extends IAccessoireMaj {

    /**
     * Lbfgga_Commt
     */
    commentaire: string;

    /**
     * Cdfaag_CodeFormActeAuth
     */
    codeFormeActeAuthentique: number;
  }

  export interface IAssuranceMaj extends IAccessoireMaj {

    /**
     * Cdasdg_CodeDeleAssr
     */
    codeDeleAssurance: number;

    /**
     * Lbfabe_BenfAssrAvntVerst
     */
    beneficiaireAssuranceAvenantVersement: string;

    /**
     * Cdfaex_CodeCouvExts
     */
    codeCouvertureExts: number;

    /**
     * Ctfarq_TypeRisq
     */
    typeRisque: number;

    /**
     * CodeAssrObgt
     */
    codeAssuranceObligatoire: number;

    /**
     * Cdfaat_CodeAssrPart
     */
    codeAssurancePart: number;

    /**
     * Cdfarv_CodeResr
     */
    codeResr: number;

    /**
     * Lbfaex_LiblAssrExtn
     */
    libelleAssuranceExterne: string;

    /**
     * Nosrn_NumeSirenCieAssr
     */
    numeroSirenCieAssurance: string;

    /**
     * Nrfcan_NumeReglCalcDateEfft
     */
    numeroRegleCalculDateEffet: string;

    /**
     * Ctfaaa_CodeAgreAssrExtr
     */
    codeAgreAssuranceExtr: number;
  }

  export interface IAccessoireComplementaireMaj extends IAccessoireMaj {

    /**
     * Cnfcoi_CodeNatrOrigAccs
     */
    codeNatureOrigineAccessoire: number;
  }

  export interface IAccessoireLieProduitMaj extends IAccessoireMaj {
  }

  export interface IServiceSurObjetMaj extends IAccessoireMaj {

    /**
     * Nrfcan_NumeReglCalcDateEfftServ
     */
    numeroRegleCalculDateEffetService: string;
  }

  export interface IAccessoireMaj extends IElementMaj {

    /**
     * Nufaaa_IdntExtnAccs
     */
    idExterneAccessoire: string;

    /**
     * Txfipf_PartFinnAccs
     */
    partFinancierAccessoire: number;

    /**
     * Dtfaaa_DateAccpAccs
     */
    dateAccpAccessoire: string;

    /**
     * Dffacl_DateCltr
     */
    dateCloture: string;

    /**
     * Cefaas_CodeEtatAccs
     */
    codeEtatAccessoire: number;

    /**
     * Dtfaev_DateEnv
     */
    dateEnvoi: string;

    /**
     * Ddfaaa_DateEfft
     */
    dateEffet: string;

    /**
     * Dffaaa_DateFinEfft
     */
    dateFinEffet: string;

    /**
     * Cdfpim_CodeBeneficiaire
     */
    codeBeneficiaire: string;
  }

  export interface ITrancheMontantMaj extends ICotisationMaj {

    /**
     * Txfcaa_TxTrchMt
     */
    tauxTrancheMontant: number;
  }

  export interface ICotisationTrancheAgeMaj extends ICotisationMaj {
  }

  export interface ICotisationPhaseMaj extends ICotisationMaj {
  }

  export interface ICotisationPeriodeMaj extends ICotisationMaj {

    /**
     * Npfcel_NbPerdetlm
     */
    nombrePerdetlm: number;

    /**
     * Pefcde_PerdEtlm
     */
    periodeEtlm: number;
  }

  export interface ICotisationDerogationMaj extends ICotisationMaj {
  }

  export interface ICotisationMaj extends IElementMaj {

    /**
     * Txfca1_TxCots
     */
    tauxCotisation: number;

    /**
     * Mtfcac_MtCots
     */
    montantCotisation: number;

    /**
     * Cifccb_CodeIndicBlcgSaisMont
     */
    codeIndiceBlcgSaisieMontant: number;

    /**
     * Pefcac_CodePerdCalc
     */
    codePeriodeCalcul: number;

    /**
     * Dtfhac_DateApplCots
     */
    dateApplicationCotisation: string;

    /**
     * Ddfhac_DateDebtAppliCots
     */
    dateDebutApplicationCotisation: string;

    /**
     * Dffhac_DateFinAppliCots
     */
    dateFinApplicationCotisation: string;

    /**
     * Mtfhac_MtAsst
     */
    montantAssiette: number;

    /**
     * Ctfcel_CodeTypeAsstCalculElt
     */
    codeTypeAssietteCalculElt: string;

    /**
     * Cdfc1a_CodeRegleEvtPremierAppel
     */
    codeRegleEvenementPremierAppel: string;

    /**
     * Ctftva_CodeTypeTvaAcc
     */
    codeTypeTVAAccessoire: string;

    /**
     * Npfdaa_NbJoursAnneeNumerateur
     */
    nombreJoursAnneeNumerateur: number;

    /**
     * Npfdad_NbJoursAnneeDenominateur
     */
    nombreJoursAnneeDenominateur: number;

    /**
     * Npfce1_NbPerdAppliCots
     */
    nombrePeriodeApplicationCotisation: number;

    /**
     * Pefcde_PerdAppliCots
     */
    periodeApplicationCotisation: number;

    /**
     * Mtfgfr_MtFrsGarn
     */
    montantFrsGarantie: number;

    /**
     * Txfipf_PartFinn
     */
    partFinancier: number;

    /**
     * Cdfceh_CodeRecv
     */
    codeRecouvrement: number;
  }

  export interface ICouvertureCreditMaj extends IElementMaj {

    /**
     * Mkfaco_MtCouv
     */
    montantCouverture: number;

    /**
     * Txfacr_QuotCouv
     */
    quotientCouverture: number;

    /**
     * Mefaas_MtEcheCouv
     */
    montantEcheanceCouverture: number;

    /**
     * Dffgaf_DateFinAffecCouv
     */
    dateFinAffectationCouverture: string;
  }

  export interface IAplMaj extends IElementMaj {

    /**
     * Mtfiba_MtApl
     */
    montantAPL: number;

    /**
     * Ctfape_PerdicApl
     */
    periodiciteAPL: number;
  }

  export interface ICompteProfessionnelMaj extends ICompteMaj {

    /**
     * Nbfmjp_NbJourDepsAutrPourCpteProf
     */
    nombreJourDepsAutrePourCompteProf: number;

    /**
     * Cdfmxp_CodeCtx
     */
    codeCtx: number;
  }

  export interface ICompteDepotMaj extends ICompteMaj {

    /**
     * Cdfmce_CodePrdtCe
     */
    codeProduitCE: number;

    /**
     * Nofmet_NumeEnttTitl
     */
    numeroEntiteTitulaire: number;

    /**
     * Lbfmet_LiblEnttTitl
     */
    libelleEntiteTitulaire: string;

    /**
     * Cdfmmc_CodeCompoEntiteTitulaire
     */
    codeCompositionEntiteTitulaire: number;

    /**
     * Cdfmcp_CodeEttPrdt
     */
    codeEtatProduit: number;

    /**
     * Mtfmmy_SoldMoyeLongTermCpteDepoCe
     */
    soldMoyenLongTermeCompteDepoCE: number;

    /**
     * Mtfmbs_SoldMiniCpteDepoCe
     */
    soldMinimumCompteDepoCE: number;

    /**
     * Mtfmds_SoldRelCpteDepoCe
     */
    soldRelCompteDepoCE: number;

    /**
     * Ctfmca_CodeTypeCart
     */
    codeTypeCartographie: number;

    /**
     * Dtfmca_DateDelvCart
     */
    dateDelvCartographie: string;

    /**
     * Ctfmtd_CodeTypeDecvCpteDepo
     */
    codeTypeDecvCompteDepo: number;

    /**
     * Mtfmde_MtDecvAutrSurCpteDepo
     */
    montantDecvAutreSurCompteDepo: number;

    /**
     * Mtfmvr_MtTotlVerstCredRelsSurCpteDepo
     */
    montantTotalVersementCreditReleaseSurCompteDepo: number;

    /**
     * Nbfmjd_NbJourDepsAutrDecv
     */
    nombreJourDepsAutreDecv: number;

    /**
     * Mtfmpe_MtPrelExteRelsSurCpteDepo
     */
    montantPrelExteReleaseSurCompteDepo: number;

    /**
     * Cdfmdj_CodeDepsJust
     */
    codeDepsJustificatif: number;

    /**
     * Cdfmdi_CodePresDecvIrreSurCpteDepo
     */
    codePresDecvIrreSurCompteDepo: number;

    /**
     * Cdfmae_CodeExstCartBancHorsCe
     */
    codeExisteCartographieBancaireHorsCE: number;

    /**
     * Cdfmrc_CodeComnRelvCpteHorsCe
     */
    codeComnRelvCompteHorsCE: number;

    /**
     * Cdfmch_CodeExstCheq
     */
    codeExisteCheq: number;

    /**
     * Mtfmyc_SoldMoyeMensCrtCpteDepoCe
     */
    soldMoyenMensCreationCompteDepoCE: number;

    /**
     * Mtfmcm_MvtCredMensSurCpteDepo
     */
    mvtCreditMensSurCompteDepo: number;

    /**
     * Ctfmfc_CodeTypeFctCpteDepoCeHorsCe
     */
    codeTypeFctCompteDepoCEHorsCE: number;

    /**
     * Ddfmhc_DateOuerCpteDepoHorsCe
     */
    dateOuerCompteDepoHorsCE: string;
  }

  export interface ICompteMaj extends IElementMaj {

    /**
     * Dtfmou_DateOuvr
     */
    dateOuverture: string;

    /**
     * Cdfadv_CodeDevsCpte
     */
    codeDeviseCompte: string;
  }

  export interface IPhaseCreditExistantMaj extends IElementMaj {

    /**
     * Ddfcph_DateDebtPhas
     */
    dateDebutPhase: string;

    /**
     * Dffcph_DateFinPhas
     */
    dateFinPhase: string;

    /**
     * Meface_MtEchePhas
     */
    montantEcheancePhase: number;

    /**
     * Ctfcfp_CodeTypePhas
     */
    codeTypePhase: string;

    /**
     * Pftmam_PerdAmrt
     */
    periodeAmortissement: number;
  }

  export interface ICreditExistantMaj extends IChargeMaj {

    /**
     * Cdfccg_CodeTypeCredCe
     */
    codeTypeCreditCE: string;

    /**
     * Cdfopc_CodePrsCompCred
     */
    codePresenceCompCredit: number;

    /**
     * Cdfimu_InvsUsgLocf
     */
    invsUsageLocf: number;

    /**
     * Ctfmlc_LienPersCred
     */
    lienPersonneCredit: number;

    /**
     * Lbfaep_LibletblPret
     */
    libletblPret: string;

    /**
     * Ctfmtc_CodeTypeCred
     */
    codeTypeCredit: number;

    /**
     * Mtfaoc_MtOrigCred
     */
    montantOrigineCredit: number;

    /**
     * Mkfard_MtRestDu
     */
    montantRestantDu: number;

    /**
     * Ddfmam_DateDebtAmrt
     */
    dateDebutAmortissement: string;

    /**
     * Cdfmce_CodePrdtCe
     */
    codeProduitCE: number;

    /**
     * Nofmcp_RefePrdtCe
     */
    referenceProduitCE: string;

    /**
     * Nofmc2_CompRefePrdtCe
     */
    compReferenceProduitCE: string;

    /**
     * Nofmet_NumeEnttTitlCe
     */
    numeroEntiteTitulaireCE: number;

    /**
     * Lbfmet_LiblEnttTitlCe
     */
    libelleEntiteTitulaireCE: string;

    /**
     * Mkfmpc_MtCaptDejaRemb
     */
    montantCapitalDejaRemboursement: number;

    /**
     * Nbfmim_NbImpayes
     */
    nombreImpayes: number;

    /**
     * Nbfmir_NbImpeReglSurLesMoisGlss
     */
    nombreImpeRegleSurLesMoisGlss: number;

    /**
     * Npfmam_DureAmrt
     */
    dureAmortissement: number;

    /**
     * Cifgeh_CodeIndicAInclettHypt
     */
    codeIndiceAInclettHypotheque: boolean;

    /**
     * Mtfggi_MtGarn
     */
    montantGarantie: number;

    /**
     * Cmfmro_MotfRembAntc
     */
    motfRemboursementAnticipe: string;

    /**
     * Cdfmro_RembAvecAntc
     */
    remboursementAvecAnticipe: number;

    /**
     * Lbfmro_LiblMotfRembAntc
     */
    libelleMotfRemboursementAnticipe: string;
  }

  export interface IChargeMaj extends IElementMaj {

    /**
     * Ctfpch_TypeDech
     */
    typeDech: string;

    /**
     * Mtfpch_MtChrg
     */
    montantCharge: number;

    /**
     * Txfmrc_TxPondChrg
     */
    tauxPondereCharge: number;

    /**
     * Npfpch_NbPerdParAn
     */
    nombrePeriodeParAn: number;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Nufpct_NumeContEprg
     */
    numeroContratEpargne: string;

    /**
     * Cdfpao_CodeExstRessApreOper
     */
    codeExisteRessourceApreOper: number;
  }

  export interface IRevenuFiscalMaj extends IElementMaj {

    /**
     * Mtfprm_MtRevnMeng
     */
    montantRevnMeng: number;

    /**
     * Ctfprm_TypeRevnMeng
     */
    typeRevnMeng: number;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;
  }

  export interface ICreditModaliteMaj extends IElementMaj {

    /**
     * Idfcmi_IdntModlCalcImpe
     */
    idModeleCalculImpe: string;

    /**
     * Txfdri_TxIndmRembAntc
     */
    tauxIndemniteRemboursementAnticipe: number;

    /**
     * Nofcmc_NumeModlRembAntc
     */
    numeroModeleRemboursementAnticipe: number;

    /**
     * Txfcsr_SurcTxParRappRembAntc
     */
    surcTauxParRappRemboursementAnticipe: number;

    /**
     * Txffmi_TxInteRetdImpe
     */
    tauxInterieurRetardImpe: number;

    /**
     * Mtffmi_MtIndmImpe
     */
    montantIndemniteImpe: number;

    /**
     * Cdfccr_CodeTrtInteIntrSurImpe
     */
    codeTraitementInterieurIntrSurImpe: number;
  }

  export interface IPoolEPSMaj extends IElementMaj {

    /**
     * Idfadi_IdntDossInstr
     */
    idDossierInstruction: string;

    /**
     * Idfaop_IdntOprtCess
     */
    idOprtCess: string;

    /**
     * Idfccf_IdntCadrFinn
     */
    idCadreFinancier: string;

    /**
     * Cnflpo_CodeNatrPool
     */
    codeNaturePool: number;

    /**
     * Cdfcor_CodeOrigCess
     */
    codeOrigineCess: number;

    /**
     * Ctfesr_TypeSousRolePool
     */
    typeSousRolePool: number;

    /**
     * Nofcca_NumVersionCadre
     */
    numeroVersionCadre: number;
  }

  export interface IPersonnePhysiqueMaj extends IPersonneMaj {

    /**
     * Cdfpci_CodeTitrCivl
     */
    codeTitreCivilite: string;

    /**
     * Lbfppn_Prnm
     */
    prenom: string;

    /**
     * Ctfpse_CodeSexePers
     */
    codeSexePersonne: number;

    /**
     * Lbfpnj_NomJeunFill
     */
    nomJeunFill: string;

    /**
     * Dtfpna_DateNais
     */
    dateNais: string;

    /**
     * Lbfpna_LieuNais
     */
    lieuNais: string;

    /**
     * Cdfpce_CodePersCe
     */
    codePersonneCE: number;

    /**
     * Cdfprm_CodeRegmMatr
     */
    codeRegimeMatrimonial: string;

    /**
     * Cdfpsf_CodeSittFaml
     */
    codeSituationFamille: number;

    /**
     * Nbfppc_NbPersAChrg
     */
    nombrePersonneACharge: number;

    /**
     * Cdfpsp_CateSoc
     */
    cateInteret: string;

    /**
     * Dtfpma_DateEfftSittFaml
     */
    dateEffetSituationFamille: string;

    /**
     * Cdfmdo_CodeSalrDomcCe
     */
    codeSalrDomiciliationCE: number;

    /**
     * Cdfmlo_CodeModeLogm
     */
    codeModeLogement: number;

    /**
     * Dtfmlo_DateEntrLogm
     */
    dateEntrLogement: string;

    /**
     * Cdfmju_CodeCapcJurd
     */
    codeCapcJuridique: number;

    /**
     * Ctfccj_CodeTypeCapJurd
     */
    codeTypeCapJuridique: string;

    /**
     * Cdfmnt_CodeNatn
     */
    codeNational: number;

    /**
     * Cdfmtd_CodeSaisAvisTierDtnr
     */
    codeSaisieAvisTiersDtnr: number;

    /**
     * Cdfmcx_CodeCtx
     */
    codeContentieuxHorsComptCE: number;

    /**
     * Mtfmes_MtEncrSaccefHorsOprt
     */
    montantEncoursSaccefHorsOprt: number;

    /**
     * Cdfmtr_TypeTrspUtls
     */
    typeTrspUtilisation: number;

    /**
     * Cdfmge_CodeGeotAdrsDomc
     */
    codeGeotAdresseDomiciliation: string;

    /**
     * Cdfppb_CodePaysResdEmpr
     */
    codePaysResdEmprunt: string;

    /**
     * Cdfopb_CodePaysLocsEmpr
     */
    codePaysLocalisationEmprunt: string;

    /**
     * Cdfkpa_CodePrflEmpr
     */
    codeProfilEmprunt: number;

    /**
     * Cofcpn_CodePstlLieuNais
     */
    codePstlLieuNais: string;
  }

  export interface IPersonneMoraleMaj extends IPersonneMaj {

    /**
     * Nufpin_NumeInsee
     */
    numeroINSEE: string;

    /**
     * Dtfpir_DateInscRcs
     */
    dateInscRcs: string;

    /**
     * Dtfpcs_DateCretSoce
     */
    dateCreationSoce: string;

    /**
     * Mcfpch_ChffAffrHtExrcPrec
     */
    chiffreAffrHtExrcPrec: number;

    /**
     * Nbfpsa_NbSalr
     */
    nombreSalr: number;

    /**
     * Cdfpfj_FormJurd
     */
    formeJuridique: string;

    /**
     * Cdfpdp_TypeDrtPersMorl
     */
    typeDroitPersonneMorl: number;

    /**
     * Mkfpca_MtCapt
     */
    montantCapital: number;

    /**
     * ListIdntPersPhys
     */
    listeIdPersonnePhys: Array<string>;

    /**
     * ListRolePersPhys
     */
    listeRolePersonnePhys: Array<string>;
  }

  export interface IPersonneMaj extends IElementMaj {

    /**
     * Idfppe_IdntPersSI
     */
    idPersonneSI: string;

    /**
     * Cdfprs_CrteResd
     */
    crteResd: number;

    /**
     * Ctfcae_CateAgntecnmBafi
     */
    cateAgntecnmBafi: number;

    /**
     * Ctfccl_CateClntBafi
     */
    cateClientBafi: number;

    /**
     * Ctfcad_CateTypeAdmnBafi
     */
    cateTypeAdmnBafi: number;

    /**
     * Ctfcba_ClssAgntBafi
     */
    classeAgentBafi: string;

    /**
     * Idfpbd_CleBdf
     */
    cleBDF: string;

    /**
     * Dtfper_DateEntrReltAvecCons
     */
    dateEntrRelationAvecConsolide: string;

    /**
     * Lbfpnm_NomRaisSocl
     */
    nomRaisonSociale: string;

    /**
     * Cdfpap_CodeAssmPartc
     */
    codeAssmPartc: number;

    /**
     * Lbfpa1_InttAdrs
     */
    intituleAdresse: string;

    /**
     * Lbfpa2_AdrsLign3
     */
    adresseLigne3: string;

    /**
     * Lbfpa3_AdrsLign4
     */
    adresseLigne4: string;

    /**
     * Lbfpa4_CodePost
     */
    codePoste: string;

    /**
     * Lbfpa5_Ville
     */
    ville: string;

    /**
     * Lbfpa6_ComplIntt
     */
    complementIntitule: string;

    /**
     * Lbfpa7_AdrsLign5
     */
    adresseLigne5: string;

    /**
     * Llfaem_EmailPerso
     */
    emailPerso: string;

    /**
     * Nufptb_NumeTeleProf
     */
    numeroTeleProf: string;

    /**
     * Nufptl_NumeTelePers
     */
    numeroTelePersonne: string;

    /**
     * Nufptx_NumeTcpyProf
     */
    numeroTcpyProf: string;

    /**
     * Nufpto_NumePortPers
     */
    numeroPortPersonne: string;

    /**
     * Lbfpen_EnsgComm
     */
    ensgCommission: string;

    /**
     * Lbfpir_LieuInscRC
     */
    lieuInscRC: string;

    /**
     * Nufpir_NumeInscRC
     */
    numeroInscRC: string;

    /**
     * RolePersonne
     */
    rolePersonne: number;

    /**
     * Rattachement
     */
    rattachement: boolean;

    /**
     * ForcerRattachement
     */
    forcerRattachement: boolean;

    /**
     * ForcerAjout
     */
    forcerAjout: boolean;

    /**
     * Cifcps_AutoriseSignatureElectronique
     */
    autoriseSignatureElectronique: boolean;
  }

  export interface IPayeurMaj extends IElementMaj {

    /**
     * Mtfdfx_MtPaieCred
     */
    montantPaiementCredit: number;

    /**
     * Txfdec_PctPaieCred
     */
    pourcentagePaiementCredit: number;

    /**
     * Cdfdrg_ModeReglUtlsParPayr
     */
    modeRegleUtilisationParPayr: string;

    /**
     * Nufddt_NumeCptePayr
     */
    numeroComptePayr: string;

    /**
     * PersonneMaj
     */
    personneMAJ: IPersonneMaj;

    /**
     * Idfdma_RefeUnqMand
     */
    referenceUniqueMand: string;

    /**
     * Dgfdma_DateSignMand
     */
    dateSigneMand: string;

    /**
     * Cdfdrs_ModeReglUtlsParPayrSecours
     */
    modeRegleUtilisationParPayrSecours: string;

    /**
     * NumeroComptePayeurSecours
     */
    numeroComptePayeurSecours: string;

    /**
     * Idfdms_RefeUnqMandSecours
     */
    referenceUniqueMandSecours: string;

    /**
     * Dgfdms_DateSignMandSecours
     */
    dateSigneMandSecours: string;
  }

  export interface ICreditInterneMaj extends IElementMaj {

    /**
     * Idfccp_IdntConvPres
     */
    idConventionPres: string;

    /**
     * Cdfdae_CodeIndicEnvAvisEche
     */
    codeIndiceEnvoiAvisEcheance: number;

    /**
     * Cifaio_CodeIndicOptmImps
     */
    codeIndiceOptimisationImps: number;

    /**
     * Idfacs_RefeExtnCred
     */
    referenceExterneCredit: string;

    /**
     * Cdfccr_CodeIndicTrtInteIntr
     */
    codeIndiceTraitementInterieurIntr: number;

    /**
     * Cdfcia_CodeTypeActlInteIntr
     */
    codeTypeActuarielInterieurIntr: number;

    /**
     * Cdfbdv_CodeDevsVerst
     */
    codeDeviseVersement: string;

    /**
     * Cdfbje_CodeIndicExstPiecJustPourDeclechlVerst
     */
    codeIndiceExistePieceJustificatifPourDeclechlVersement: number;

    /**
     * Cdfbju_CodeExistJustDeclVerst
     */
    codeExistJustificatifDeclarationVersement: number;

    /**
     * Cdfbju_CodeTypeRattJustDecl
     */
    codeTypeRattachementJustificatifDeclaration: number;

    /**
     * Cdfbve_ModeReglVerst
     */
    modeRegleVersement: string;

    /**
     * Nofech_NumeEchlVerst
     */
    numeroEchelleVersement: number;

    /**
     * Dhfacj_QuantEche
     */
    jourDateEcheance: number;

    /**
     * Cdfcie_CodeIndicelgbAuprInstemss
     */
    codeIndicelgbAuprInstemss: number;

    /**
     * Ccfarc_CodeIndicCalcAFaire
     */
    codeIndiceCalculAFaire: number;

    /**
     * Mtfael_MtPrimEparLogm
     */
    montantPrimeEpargneLogement: number;

    /**
     * Txfasr_TxNegcSurcRembAntc
     */
    tauxNegocieSurcRemboursementAnticipe: number;

    /**
     * Txfcpd_TxPondCntExtr
     */
    tauxPondereCntExtr: number;

    /**
     * Lbfpa1_InttCred
     */
    intituleLigneUn: string;

    /**
     * Nufbdt_DomcTres
     */
    domiciliationTres: string;

    /**
     * Nufbve_NumeDomcDispFond
     */
    numeroDomiciliationDispFond: string;

    /**
     * Mtfcve_MtMiniVerst
     */
    montantMinimumVersement: number;

    /**
     * Cifaam_CodeIndicPresUneBonfUneMajreTx
     */
    codeIndicePresUneBonificationUneMajreTaux: number;

    /**
     * TegModeRestitution
     */
    tegModeRestitution: number;

    /**
     * Cefad0_CodeConfmRedcDurePTZ
     */
    codeConfirmationReductionDurePTZ: number;

    /**
     * Cefam0_CodeConfmRedcMtPTZ
     */
    codeConfirmationReductionMontantPTZ: number;

    /**
     * Mcface_MtCredEuro
     */
    montantCreditEuro: number;

    /**
     * Msfcpv_MtMaxPretPVH
     */
    montantMaximumPretPVH: number;

    /**
     * Cdfada_CodeDevsSaccef
     */
    codeDeviseSaccef: string;

    /**
     * Npfcfi_NbPerdCred
     */
    nombrePeriodeCredit: number;

    /**
     * Pefcfi_CodePerdCred
     */
    codePeriodeCredit: number;

    /**
     * Mtfaoc_MtCaptCred
     */
    montantCapitalCredit: number;

    /**
     * Mcfafd_CoutTotlFrsDossAsscCred
     */
    coutTotalFrsDossierAssuranceCredit: number;

    /**
     * Txfcmg_MargTxFutr
     */
    margeTauxFutr: number;

    /**
     * Txfacs_ValrTxIntl
     */
    valeurTauxInitial: number;

    /**
     * Txfamc_TxMontage
     */
    tauxMontage: number;

    /**
     * MontantPTZVerrouille
     */
    montantPTZVerrouille: boolean;

    /**
     * DureePTZVerrouillee
     */
    dureePTZVerrouillee: boolean;

    /**
     * EtatForcageFraisDossier
     */
    etatForcageFraisDossier: string;
  }

  export interface ITACreditEPSMaj extends IElementMaj {

    /**
     * Nufcrl_NumRelCred
     */
    numeroRelCredit: number;

    /**
     * Dtfhpr_DateEchnMER
     */
    dateEcheanceMER: string;

    /**
     * Mkfh03_MtCaptAmrt
     */
    montantCapitalAmortissement: number;

    /**
     * Mkfd01_MtCaptRestDu
     */
    montantCapitalRestantDu: number;

    /**
     * Nufcet_NumEcheanceTable
     */
    numeroEcheanceTable: number;
  }

  export interface IMarcheEPSMaj extends IElementMaj {

    /**
     * Ctfcme_CodeTypeMarche
     */
    codeTypeMarche: string;

    /**
     * Idfcmb_IdMarche
     */
    idMarche: string;

    /**
     * Idfcmp_IdTiersMarcePrinc
     */
    idTiersMarcePrinc: string;

    /**
     * Lbfcmo_LibMoeMarchePrinc
     */
    libelleMoeMarchePrinc: string;

    /**
     * Lbfcom_LibelleObjetMarche
     */
    libelleObjetMarche: string;

    /**
     * Mtfcmd_MontantMarche
     */
    montantMarche: number;

    /**
     * Dtfcma_DateSignMarche
     */
    dateSigneMarche: string;

    /**
     * Dffcme_DateFinMarche
     */
    dateFinMarche: string;

    /**
     * Lnfagr_NomGroupMarche
     */
    nomGroupMarche: string;

    /**
     * Lbfctr_LibLieuExecTravaux
     */
    libelleLieuExecTravaux: string;

    /**
     * Nxfctr_NumTranMarche
     */
    numeroTranMarche: string;

    /**
     * Nxfclo_NumLotMarche
     */
    numeroLotMarche: string;
  }

  export interface ICourrierEPSMaj extends IElementMaj {

    /**
     * Ctfclv_TypeLettre
     */
    typeLettre: number;

    /**
     * Cdfpci_CodeCivilite
     */
    codeCivilite: string;

    /**
     * Lbfce1_AdresseLigne1
     */
    adresseLigne1: string;

    /**
     * Lbfce2_AdresseLigne2
     */
    adresseLigne2: string;

    /**
     * Lbfce3_AdresseLigne3
     */
    adresseLigne3: string;

    /**
     * Lbfce4_AdresseLigne4
     */
    adresseLigne4: string;

    /**
     * Lbfce5_AdresseLigne5
     */
    adresseLigne5: string;

    /**
     * Lbfce6_AdresseLigne6
     */
    adresseLigne6: string;
  }

  export interface IComplementFicheContactMaj extends IElementMaj {

    /**
     * Hdfcpc_HrDebtPlgHor
     */
    hrDebutPlgHor: number;

    /**
     * Hffcpc_HrFinPlgHor
     */
    hrFinPlgHor: number;

    /**
     * Llfccp_Comentair
     */
    comentair: string;
  }

  export interface IDocumentOffreIndustrialiseeMaj extends IElementMaj {

    /**
     * FluxDocument
     */
    fluxDocument: string;
  }

  export interface IDocumentSignatureElectroniqueMaj extends IElementMaj {

    /**
     * IdentifiantComplet
     */
    identifiantComplet: string;

    /**
     * FluxBinaire
     */
    fluxBinaire: string;
  }

  export interface ITrancheELMaj extends IElementMaj {

    /**
     * Txfpep_TxEpar
     */
    tauxEpargne: number;

    /**
     * Mtfaac_MtDrtAcqs
     */
    montantDroitAcqs: number;

    /**
     * Dtfpae_DateArreEpar
     */
    dateArreEpargne: string;

    /**
     * Lbfpet_LibletblOrigDrtPret
     */
    libletblOrigineDroitPret: string;

    /**
     * Cdfdpj_CodeDrtJust
     */
    codeDroitJustificatif: number;

    /**
     * Cdfiel_CodeRaptContEparLogm
     */
    codeRaptContratEpargneLogement: number;

    /**
     * Mtfida_MtDrtAcqsDepsOrigContEparLogm
     */
    montantDroitAcqsDepsOrigineContratEpargneLogement: number;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Cdfird_CodeResrDrtAcqs
     */
    codeResrDroitAcqs: number;
  }

  export interface IOppositionMaj extends IElementMaj {

    /**
     * Cdfmop_CodeOppo
     */
    codeOpposition: string;

    /**
     * Ddfmop_DateDebtOppo
     */
    dateDebutOpposition: string;

    /**
     * Dffmop_DateFinOppo
     */
    dateFinOpposition: string;
  }

  export interface IVersementFractionneMaj extends IElementMaj {

    /**
     * Ptfbmv_PerdicVerst
     */
    periodiciteVersement: number;

    /**
     * Mvfbmv_MtPremVerst
     */
    montantPremierVersement: number;

    /**
     * Cdfbve_ModeReglVerst
     */
    modeRegleVersement: string;

    /**
     * Nufbve_NumrDomcMadFond
     */
    numeroDomiciliationMADFond: string;

    /**
     * Mvfbmf_MtVerstFrct
     */
    montantVersementFraction: number;

    /**
     * Nbfbvs_NbVerstSouh
     */
    nombreVersementSouh: number;

    /**
     * Mvfcpm_MtVerstPerdMaxm
     */
    montantVersementPeriodeMaximum: number;

    /**
     * Mvfcim_MtVerstIntlMaxm
     */
    montantVersementInitialMaximum: number;

    /**
     * Txfcpv_QuotPremVerst
     */
    quotientPremierVersement: number;

    /**
     * Txfcvp_QuotVerstPerd
     */
    quotientVersementPeriode: number;
  }

  export interface IBienAVendreMaj extends IElementMaj {

    /**
     * Cdfcni_CodeTypeObjtComl
     */
    codeTypeObjetCommercialisation: string;

    /**
     * Ctfcor_CodeTypeObjtRegl
     */
    codeTypeObjetRegle: string;

    /**
     * Ctfmve_TypeVent
     */
    typeVent: number;

    /**
     * Mtfmvc_PrixNetVndr
     */
    prixNetVendeur: number;

    /**
     * Mtfmva_MtCrdSurBienVend
     */
    montantCRDSurBienVend: number;

    /**
     * Mtfgrd_MtCrdRachSurBienVend
     */
    montantCRDRachSurBienVend: number;

    /**
     * Mtfaag_MtComsAgnc
     */
    montantComsAgence: number;

    /**
     * Mtfaoc_MtAcqs
     */
    montantAcqs: number;

    /**
     * Dtfaoc_DateAcqs
     */
    dateAcqs: string;

    /**
     * Ctfmma_ModeAcqs
     */
    modeAcqs: number;

    /**
     * Mtfgob_MtEstmVenl
     */
    montantEstmVenl: number;

    /**
     * Dtfgob_DateEstmVenl
     */
    dateEstmVenl: string;

    /**
     * Cdfgme_CodeModlEstmVenl
     */
    codeModeleEstmVenl: string;

    /**
     * Lbfoa1_Intt
     */
    adresseLigne1: string;

    /**
     * Lbfoa2_AdrsLign3
     */
    adresseLigne3: string;

    /**
     * Lbfoa3_AdrsLign4
     */
    adresseLigne4: string;

    /**
     * Lbfoa4_CodePost
     */
    codePoste: string;

    /**
     * Lbfoa5_Ville
     */
    ville: string;

    /**
     * Lbfoa6_CompIntt
     */
    adresseLigne1Suite: string;

    /**
     * Cdfopa_CodePays
     */
    codePays: string;

    /**
     * AdrsLign5
     */
    adresseLigne5: string;
  }

  export interface IComplementDossierMaj extends IElementMaj {

    /**
     * Llfidr_LiblDelRelsProj
     */
    libelleDelReleaseProjet: string;

    /**
     * Ctfipt_CodePrrtTrt
     */
    codePrrtTraitement: string;

    /**
     * Dtfisi_DateSaisSurItnt
     */
    dateSaisieSurInternet: string;

    /**
     * Hefisi_HeurSaisSurItnt
     */
    heureSaisieSurInternet: number;
  }

  export interface IReamenagementMaj extends IElementMaj {

    /**
     * Cdfare_TypeReam
     */
    typeReamenagement: number;

    /**
     * Ctfmup_UsgPretTres
     */
    usagePretTres: number;

    /**
     * Mtfmvc_AncnEche
     */
    ancnEcheance: number;

    /**
     * Mtfmva_CaptRestDu
     */
    capitalRestantDu: number;

    /**
     * Mtfmvd_ValrAchtObjtFinn
     */
    valeurAchtObjetFinancier: number;

    /**
     * Npfmrp_DureResdPretRefn
     */
    dureResdPretRefn: number;

    /**
     * Dtfoac_DateAcqsObjtRefn
     */
    dateAcqsObjetRefn: string;

    /**
     * Mtfaoc_CoutAcqsObjtRefn
     */
    coutAcqsObjetRefn: number;
  }

  export interface IPretReamenageMaj extends IElementMaj {

    /**
     * Idfaac_IdntDossComl
     */
    idDossierCommercialisation: string;

    /**
     * Idfao2_IdntDossOrig
     */
    idDossierOrigine: string;

    /**
     * Cdfcpo_CodePrdtetbl
     */
    codePrdtetbl: string;

    /**
     * Cdfars_CodeApparRes
     */
    codeApparRes: boolean;

    /**
     * Ctfars_TypeApparRes
     */
    typeApparRes: number;

    /**
     * Dtfccl_DateCltr
     */
    dateCloture: string;

    /**
     * Mtfard_MtRestDuSurPretRefn
     */
    montantRestantDuSurPretRefn: number;

    /**
     * Mefacg_MtechePerdPretRefn
     */
    mtechePeriodePretRefn: number;

    /**
     * Peface_Perdeche
     */
    perdeche: number;

    /**
     * Dffmce_DateFinCred
     */
    dateFinCredit: string;

    /**
     * Lbfcvs_LiblPrdt
     */
    libelleProduit: string;

    /**
     * Ctfals_TypeRegl
     */
    typeRegle: number;

    /**
     * Ctfmtc_TypeCred
     */
    typeCredit: number;

    /**
     * Lbfaep_NometblPret
     */
    nometblPret: string;

    /**
     * Ctfpag_CodeOrigAppliGestCred
     */
    codeOrigineApplicationGestionCredit: number;

    /**
     * Cdfidr_CodeDev
     */
    codeDev: string;
  }

  export interface IInfoRegroupementMaj extends IElementMaj {

    /**
     * Mkfd01_MtCrd
     */
    montantCRD: number;

    /**
     * Cifcao_OrigInfoSurMtCrd
     */
    origineInformationSurMontantCRD: number;

    /**
     * Dtfcer_DateEnvsPourRembAntc
     */
    dateEnvsPourRemboursementAnticipe: string;

    /**
     * Cdfara_CodeExstModlIndmRaSurCred
     */
    codeExisteModeleIndemniteRaSurCredit: number;

    /**
     * Mtfhir_MtEstmRa
     */
    montantEstmRa: number;

    /**
     * Cifca1_OrigInfoSurMtEstmIndmRa
     */
    origineInformationSurMontantEstmIndemniteRa: number;

    /**
     * Cifafr_CodeIndicFinnIndmRa
     */
    codeIndiceFinancierIndemniteRa: number;

    /**
     * Cifamp_CodeModlPrevPourRa
     */
    codeModelePrevPourRa: number;

    /**
     * Cifca2_OrigInfoSurExstPrevCont
     */
    origineInformationSurExistePrevContrat: number;

    /**
     * Npfapr_DelPrevCont
     */
    delPrevContrat: number;

    /**
     * Cifca3_OrigInfoSurDelPrevCont
     */
    origineInformationSurDelPrevContrat: number;

    /**
     * Cifagh_ExstUneGarnHypt
     */
    existeUneGarantieHypotheque: number;

    /**
     * Mtfgmt_MtFrsMainTotlUneGarnHypt
     */
    montantFrsMainTotalUneGarantieHypotheque: number;

    /**
     * Cifac4_OrigInfoSurMtFrsMainTotl
     */
    origineInformationSurMontantFrsMainTotal: number;

    /**
     * Cifafm_CodeFinnFrsMain
     */
    codeFinancierFrsMain: number;

    /**
     * Mtfaid_MtInteDusJusqFinCred
     */
    montantInterieurDusJusqFinCredit: number;

    /**
     * Ctfcaf_CodeAffecTypeObjt
     */
    codeAffectationTypeObjet: number;

    /**
     * Mefepd_MtecheHorsAccs
     */
    mtecheHorsAccessoire: number;

    /**
     * Cifca5_OrigInfoSurMtecheHorsAccs
     */
    origineInformationSurMtecheHorsAccessoire: number;

    /**
     * Trfrtx_TxRefe
     */
    tauxReference: number;

    /**
     * Cifac6_OrigInfoSurTxRefe
     */
    origineInformationSurTauxReference: number;

    /**
     * Dtfari_DateRappDonn
     */
    dateRappDonneur: string;

    /**
     * Cifac7_OrigInfoSurDateFinCred
     */
    origineInformationSurDateFinCredit: number;

    /**
     * Cifac8_OrigInfoSurMtRestDuSuurPretRach
     */
    origineInformationSurMontantRestantDuSuurPretRach: number;

    /**
     * Cifac9_OrigInfoSurTypeLoiScrvCredRach
     */
    origineInformationSurTypeLoiScrivenerCreditRach: number;
  }

  export interface IPlanFinancementMaj extends IElementMaj {

    /**
     * Cifaai_IndicAllt
     */
    indiceAllt: number;

    /**
     * Mtfaap_MtApprPers
     */
    montantApportPersonne: number;

    /**
     * Mtfmpl_MtPretEparLogmTher
     */
    montantPretEpargneLogementTher: number;

    /**
     * Dtfcep_DateEditPropCred
     */
    dateEditPropCredit: string;

    /**
     * Npfamo_DurSouh
     */
    dureeSouh: number;
  }

  export interface ICreditExterneMaj extends IElementMaj {

    /**
     * Lbfaep_LibletblPret
     */
    libletblPret: string;

    /**
     * Npface_DureAmrtMois
     */
    dureAmortissementMois: number;

    /**
     * Txface_TxAmrt
     */
    tauxAmortissement: number;

    /**
     * Mkface_MtCapt
     */
    montantCapital: number;

    /**
     * Meface_MtecheAmrt
     */
    mtecheAmortissement: number;

    /**
     * Peface_CodePerdAmrt
     */
    codePeriodeAmortissement: number;

    /**
     * Cdfaia_CodeIndicInteTantPPers
     */
    codeIndiceInterieurTantPPersonne: number;

    /**
     * Lbface_LiblLibrSurConcr
     */
    libelleLibrSurConcr: string;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Cdfwna_CodeIndicNatrPret
     */
    codeIndiceNaturePret: number;

    /**
     * Cnfctx_CodeIndicTxRevs
     */
    codeIndiceTauxRevision: number;

    /**
     * Npfwdd_DureDiffMois
     */
    dureDiffereMois: number;

    /**
     * Ctfwsr_TypeSurt
     */
    typeSurtaxe: number;

    /**
     * Cdfwch_CodeIndicPresAssrPertEmpl
     */
    codeIndicePresAssurancePertEmpl: number;

    /**
     * Ctfwtb_CodeIndicTypeRemb
     */
    codeIndiceTypeRemboursement: number;

    /**
     * Txfatg_TegActu
     */
    tegActu: number;

    /**
     * Mefadi_MtecheDiff
     */
    mtecheDiffere: number;

    /**
     * Pefadi_CodePerdDiff
     */
    codePeriodeDiffere: number;
  }

  export interface IPalierContraintMaj extends IElementMaj {

    /**
     * Dfpe_DateFinPerd
     */
    dateFinPeriode: string;

    /**
     * Meface_MtEche
     */
    montantEcheance: number;

    /**
     * Npfpco_DurePalr
     */
    durePalier: number;
  }

  export interface IVersementAttenduMaj extends IElementMaj {

    /**
     * Ctftve_TypeVerst
     */
    typeVersement: string;

    /**
     * Mtfvat_MtVerst
     */
    montantVersement: number;

    /**
     * Dtfdeb_DateDebt
     */
    dateDebut: string;

    /**
     * Dtfvfn_DateFin
     */
    dateFin: string;

    /**
     * Ctfapi_PerdVerst
     */
    periodeVersement: number;
  }

  export interface IProprietaireMaj extends IElementMaj {

    /**
     * Txffim_QuotPleinProp
     */
    quotientPleinProp: number;

    /**
     * Txfcnp_QuotNueProp
     */
    quotientNueProp: number;

    /**
     * Txfcdu_QuotUsuf
     */
    quotientUsuf: number;

    /**
     * Txfcus_QuotDroiUsag
     */
    quotientDroiUsag: number;

    /**
     * Ctfcdb_CdModDettnBien
     */
    codeModDettnBien: number;
  }

  export interface IReferenceCadastraleMaj extends IElementMaj {

    /**
     * Lbfoca_ReferenceCadastre
     */
    referenceCadastre: string;

    /**
     * Lbfcsc_SectionCadastre
     */
    sectionCadastre: string;

    /**
     * Qtfcsc_SurfaceReferenceCadastrale
     */
    surfaceReferenceCadastrale: number;

    /**
     * Llfcob_commentaires
     */
    commentaires: string;
  }

  export interface IReferenceLotMaj extends IElementMaj {

    /**
     * Lbfolt_ReferenceTypeDeLot
     */
    referenceTypeDeLot: string;

    /**
     * Llfcnl_NatureDuLot
     */
    natureDuLot: string;

    /**
     * Nbftta_Tantieme
     */
    tantieme: number;
  }

  export interface IPatrimoineImmobilierMaj extends IElementMaj {

    /**
     * Ctfcnp_NatrPtrmImmb
     */
    naturePatrimoineImmobilier: number;

    /**
     * Cdfcdo_CodeIndicUsgLogm
     */
    codeIndiceUsageLogement: number;

    /**
     * Mtfmvb_ValrActlPtrm
     */
    valeurActuarielPatrimoine: number;

    /**
     * Dtfdac_DateAcqsPtrm
     */
    dateAcqsPatrimoine: string;

    /**
     * Mkfkrd_CaptRestSurPtrm
     */
    capitalRestantSurPatrimoine: number;

    /**
     * Mefhpa_MensPretSurPtrm
     */
    mensPretSurPatrimoine: number;

    /**
     * Dffacr_DateFinPretSurPtrm
     */
    dateFinPretSurPatrimoine: string;
  }

  export interface IDroitUtiliseMaj extends IElementMaj {

    /**
     * Mtfadu_MtDrtAcqsUtls
     */
    montantDroitAcqsUtilisation: number;

    /**
     * Mtfali_MtDrtLimt
     */
    montantDroitLimite: number;
  }

  export interface IDetailCoutObjetMaj extends IElementMaj {

    /**
     * Cnfctr_CodeNatrTrvx
     */
    codeNatureTravaux: string;

    /**
     * Ctfccc_CodeTyplCoutTrvx
     */
    codeTypologieCoutTravaux: string;

    /**
     * Mtfoct_CoutTrvx
     */
    coutTravaux: number;
  }

  export interface IClausePersonnaliseeMaj extends IElementMaj {

    /**
     * DestClsePers
     */
    destinataireClausePersonne: number;

    /**
     * LiblClsePers
     */
    libelleClausePersonne: string;
  }

  export interface IAvisMaj extends IElementMaj {

    /**
     * Dtfaad_DateSaisAvis
     */
    dateSaisieAvis: string;

    /**
     * Lbfaad_LiblAvis
     */
    libelleAvis: string;

    /**
     * Ctfita_CodeTyplAvis
     */
    codeTypologieAvis: string;

    /**
     * Valide
     */
    valide: boolean;

    /**
     * Motif
     */
    motif: string;
  }

  export interface IAvisOrganismeExterneMaj extends IElementMaj {

    /**
     * Idfcex_IdntExtnEnv
     */
    idExterneEnvoi: string;

    /**
     * Dtfal1_DateEnv
     */
    dateEnvoi: string;

    /**
     * Dtfaad_DateAvis
     */
    dateAvis: string;

    /**
     * Cifctr_CodeIndicTrtEnv
     */
    codeIndiceTraitementEnvoi: number;

    /**
     * Cdfads_CodeDecs
     */
    codeDecision: string;

    /**
     * Cdfar2_CodeMotf
     */
    codeMotf: string;

    /**
     * Llfar1_LiblAvisDecs1
     */
    libelleAvisDecision1: string;

    /**
     * Llfar2_LiblAvisDecs2
     */
    libelleAvisDecision2: string;

    /**
     * Lbfpin_NomAgntInstr
     */
    nomAgentInstruction: string;

    /**
     * Nufpt1_NumeTeleInstr
     */
    numeroTeleInstruction: string;

    /**
     * Lbfpma_LiblAdrsMail
     */
    libelleAdresseMail: string;

    /**
     * Nufpt2_NumeFaxInstr
     */
    numeroFaxInstruction: string;

    /**
     * Cdfar1_TypeLiaiSaccefTp
     */
    typeLiaiSaccefTp: number;

    /**
     * Cdfar3_TypeRepnOrgnExtn
     */
    typeRepnOrgnExterne: number;
  }

  export interface IVersementMaj extends IElementMaj {

    /**
     * MtMiniVerst
     */
    montantMinimumVersement: number;

    /**
     * Txfave_PctVerst
     */
    pourcentageVersement: number;

    /**
     * Nufccl_NumeOrdrClss
     */
    numeroOrdreClasse: number;

    /**
     * Lbfasa_LiblAvnc
     */
    libelleAvnc: string;
  }

  export interface IRedacteurActeMaj extends IElementMaj {

    /**
     * Idfppe_IdntPersSI
     */
    idPersonneSI: string;

    /**
     * Lbfpnm_NomRedcActe
     */
    nomReductionActe: string;

    /**
     * Lbfppn_PrenRedcActe
     */
    prenReductionActe: string;

    /**
     * Lbfpa1_InttAdrs
     */
    intituleAdresse: string;

    /**
     * Lbfpa2_AdrsLign3
     */
    adresseLigne3: string;

    /**
     * Lbfpa3_AdrsLign4
     */
    adresseLigne4: string;

    /**
     * Lbfpa4_CodePost
     */
    codePoste: string;

    /**
     * Lbfpa5_Ville
     */
    ville: string;

    /**
     * Lbfpa6_ComplIntt
     */
    complementIntitule: string;

    /**
     * Lbfpa7_AdrsLign5
     */
    adresseLigne5: string;

    /**
     * Llfaem_EmailPerso
     */
    emailPerso: string;

    /**
     * Nufptb_NumeTeleProf
     */
    numeroTeleProf: string;

    /**
     * Nufptl_NumeTelePers
     */
    numeroTelePersonne: string;

    /**
     * Nufptx_NumeTcpyProf
     */
    numeroTcpyProf: string;

    /**
     * Nufpto_NumePortPers
     */
    numeroPortPersonne: string;
  }

  export interface IRessourceMaj extends IElementMaj {

    /**
     * Ctfpre_TypeRess
     */
    typeRessource: string;

    /**
     * Mtfpre_MtRess
     */
    montantRessource: number;

    /**
     * Npfpre_NbPerdParAn
     */
    nombrePeriodeParAn: number;

    /**
     * Cdfadv_CodeDevs
     */
    codeDevise: string;

    /**
     * Cdfpao_CodeExstRessApreOper
     */
    codeExisteRessourceApreOper: number;
  }

  export interface IFamilleEpargneMaj extends IElementMaj {

    /**
     * Cdfmpr_CodeFamlPrdtAdr
     */
    codeFamilleProduitAdresse: string;

    /**
     * Nbfmpr_NbPrdtDetnPourUneFamlPrdtAdr
     */
    nombreProduitDetnPourUneFamilleProduitAdresse: number;

    /**
     * Mtfmve_MtValrEprgAvntOper
     */
    montantValeurEpargneAvenantOper: number;

    /**
     * Lbfcej_LiblCaisEprg
     */
    libelleCaisseEpargne: string;

    /**
     * Dtfmve_DateValrEprg
     */
    dateValeurEpargne: string;

    /**
     * Mtfmep_MtEprgApreOper
     */
    montantEpargneApreOper: number;
  }

  export interface IContratEpargneLogementMaj extends IElementMaj {

    /**
     * Cdfppr_CodeTypeEL
     */
    codeTypeEL: string;

    /**
     * Cdfadv_CodeDevsCpte
     */
    codeDeviseCompte: string;

    /**
     * Ctfpli_LienParnAvecCedn
     */
    lienParentAvecCedn: number;

    /**
     * Lbfptc_LiblTitlCont
     */
    libelleTitulaireContrat: string;

    /**
     * Cdfpbc_CodeIndicBenePrimEl
     */
    codeIndiceBenePrimeEpargneLogement: number;

    /**
     * Ddfpct_DateOuvrCont
     */
    dateOuvertureContrat: string;

    /**
     * Dtfprf_DateCltrCont
     */
    dateClotureContrat: string;

    /**
     * Cdfifr_CodeForc
     */
    codeForc: number;

    /**
     * Cdfiel_CodeRaptContEparLogm
     */
    codeRaptContratEpargneLogement: number;

    /**
     * Idfppc_IdntPersApprDrtCont
     */
    idPersonneApportDroitContrat: string;

    /**
     * Cdfpdj_CodeDrtJust
     */
    codeDroitJustificatif: number;

    /**
     * Cdfird_CodeResrDrtAcqs
     */
    codeResrDroitAcqs: number;

    /**
     * RapatrierTranche
     */
    rapatrierTranche: boolean;

    /**
     * DroitEstCede
     */
    droitEstCede: boolean;

    /**
     * Nufpct_IdntContEl
     */
    idContratEpargneLogement: string;

    /**
     * AttributionPrime
     */
    attributionPrime: boolean;
  }

  export interface IElementLecture {

    /**
     * Idws
     */
    idws: string;

    /**
     * ListeAnomalieLecture
     */
    listeAnomalieLecture: Array<IAnomalieLecture>;
  }

  export interface IVariationDureeLecture extends IElementLecture {

    /**
     * Npfarv_NbPerdVartPoss
     */
    nombrePeriodeVartPossibilite: number;

    /**
     * TypeButrVartDure
     */
    typeButoireVartDure: number;

    /**
     * IdntCredIntr
     */
    idCreditIntr: string;
  }
}
