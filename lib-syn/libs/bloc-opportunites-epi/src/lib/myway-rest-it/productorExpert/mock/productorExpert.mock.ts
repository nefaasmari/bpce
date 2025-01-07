
const urlHref = 'https://monexpert.qua.d.bbg/bapi/productorExpert/v2/expertInquiries?followUpProfessionalRoleId[]=1325520&pageNumber=0';
const companyName = 'LES PETITES CANAILLES';
const stateCodeAttentePriseEnCharge = 'STDBY-SUPPORTED';
const stateLibEnAttentePriseEnCharge = 'Lead en attente de prise en charge';
const libTypeEcommerce = 'E-commerce';

export const mockProductorExpert: any = {
  "page": {
    "pageSize": 50,
    "totalElement": 9,
    "totalPages": 1,
    "pageNumber": 0,
    "recoveryKey": 0
  },
  "sort": {
    "attributeName": "creationDate",
    "direction": "asc"
  },
  "_links": {
    "self": {
      "href": urlHref
    },
    "first": {
      "href": urlHref
    },
    "prev": null,
    "next": null,
    "last": {
      "href": urlHref
    }
  },
  "items": [
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4000582"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "52022354600042",
          "expertInquiryType": {
            "code": "acceptanceDevice",
            "label": "TPE Santé"
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091298716"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": companyName,
          "creationDate": "2022-03-14 17:17:18",
          "lastUpdate": "2022-03-14 17:17:15",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": null,
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-03-14 17:17:16",
          "expertInquiryStatusLastModificationDate": "2022-03-14 17:17:17",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "TURCAN ",
          "firstname": "XXX@YY.COM",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": {
          "contractRequestIndicator": true,
          "professionalActivityType": {
            "code": "AUXILIAIRE",
            "label": "Auxiliaire"
          }
        },
        "ecommerce": null,
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001131"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "49145113400010",
          "expertInquiryType": {
            "code": "ecommerce",
            "label": libTypeEcommerce
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091298716"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": companyName,
          "creationDate": "2022-04-19 13:42:13",
          "lastUpdate": null,
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": {
            "code": "B_1M3M",
            "label": "1 à 3 mois"
          },
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-04-19 13:42:14",
          "expertInquiryStatusLastModificationDate": "2022-04-19 13:42:15",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "TURCAN ",
          "firstname": "XXX @YY.COM",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": null,
        "ecommerce": {
          "existingWebsiteIndicator": false,
          "websiteOptions": [],
          "commercialCampaignIndicator": false,
          "commercialCampaignName": null,
          "multipleNeedsIndicator": true
        },
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001132"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "52022354600042",
          "expertInquiryType": {
            "code": "ecommerce",
            "label": libTypeEcommerce
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091298716"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": companyName,
          "creationDate": "2022-04-19 13:42:21",
          "lastUpdate": "2022-05-09 10:14:00",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": null,
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-04-19 13:42:21",
          "expertInquiryStatusLastModificationDate": "2022-05-09 10:14:00",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "TURCAN ",
          "firstname": "test @test.fr",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": null,
        "ecommerce": {
          "existingWebsiteIndicator": null,
          "websiteOptions": [],
          "commercialCampaignIndicator": false,
          "commercialCampaignName": "",
          "multipleNeedsIndicator": false
        },
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001133"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "49145113400010",
          "expertInquiryType": {
            "code": "consumerLoan",
            "label": "3x4x Oney proxi"
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091298716"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": companyName,
          "creationDate": "2022-04-19 13:55:46",
          "lastUpdate": "2022-04-19 13:55:50",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": null,
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-04-19 13:55:47",
          "expertInquiryStatusLastModificationDate": "2022-04-19 13:55:48",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "MR MARTIN SEBASTIEN",
          "firstname": "XXX @YFY.COM",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": {
          "brandName": companyName,
          "businessUniverseType": {
            "code": "childcare",
            "label": "Puériculture"
          }
        },
        "insuranceProduct": null,
        "acceptanceDevice": null,
        "ecommerce": null,
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001134"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "52864304200013",
          "expertInquiryType": {
            "code": "insuranceProduct",
            "label": "Gras Savoye"
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "91304054"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": "TOV SXYOVFEEYTO DCFCCV",
          "creationDate": "2022-04-19 14:14:02",
          "lastUpdate": null,
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": null,
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-04-19 14:14:03",
          "expertInquiryStatusLastModificationDate": "2022-04-19 14:14:04",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "XXX",
          "firstname": "sertser @ese.fr",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": {
          "insuranceNeeds": [
            {
              "code": "AUTO",
              "label": "Flotte Auto"
            },
            {
              "code": "LOCAUX",
              "label": "locaux"
            }
          ]
        },
        "acceptanceDevice": null,
        "ecommerce": null,
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001135"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "89081937800013",
          "expertInquiryType": {
            "code": "acceptanceDevice",
            "label": "TPE Santé"
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091304054"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": "BAXAN HFXNU",
          "creationDate": "2022-04-19 14:29:08",
          "lastUpdate": "2022-05-16 15:29:14",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": null,
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-04-19 14:29:08",
          "expertInquiryStatusLastModificationDate": "2022-05-16 15:29:14",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "dr",
            "label": "DR"
          },
          "lastname": "rrr",
          "firstname": "erzrez @ee.fr",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": {
          "contractRequestIndicator": false,
          "professionalActivityType": {
            "code": "PHARMACIE",
            "label": "Pharmacie"
          }
        },
        "ecommerce": null,
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001136"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "41393870500030",
          "expertInquiryType": {
            "code": "ecommerce",
            "label": libTypeEcommerce
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "067555403"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": "IDF MOTORS",
          "creationDate": "2022-04-19 14:33:31",
          "lastUpdate": null,
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": {
            "code": "B_1M3M",
            "label": "1 à 3 mois"
          },
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-04-19 14:33:32",
          "expertInquiryStatusLastModificationDate": "2022-04-19 14:33:33",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": "test réseau",
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mme",
            "label": "MME"
          },
          "lastname": "ddd",
          "firstname": "zerrez @ed.ds",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": null,
        "ecommerce": {
          "existingWebsiteIndicator": false,
          "websiteOptions": [],
          "commercialCampaignIndicator": true,
          "commercialCampaignName": "test réseau2",
          "multipleNeedsIndicator": false
        },
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4001673"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "",
          "expertInquiryType": {
            "code": "ecommerce",
            "label": libTypeEcommerce
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "502317481"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": "SAJU",
          "creationDate": "2022-05-02 09:51:34",
          "lastUpdate": "2022-05-02 09:51:35",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": null
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": {
            "code": "M_3M",
            "label": "Plus de 3 mois"
          },
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-05-02 09:51:36",
          "expertInquiryStatusLastModificationDate": "2022-05-02 09:51:37",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": null
          },
          "campaignRef": "test réseau3",
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "BENN",
          "firstname": "LOUIS.BENN@GMAIL.com",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": null,
        "ecommerce": {
          "existingWebsiteIndicator": true,
          "websiteOptions": [
            {
              "code": "CREATION_VITRINE",
              "label": "La création d'un site vitrine"
            },
            {
              "code": "CREATION_MARCHAND",
              "label": "La création d’un site marchand"
            },
            {
              "code": "REF_OPTIMISATION",
              "label": "Optimiser le référencement de son site grâce à Google Ads"
            },
            {
              "code": "COMMUNICATION_SOCIAL",
              "label": "Réaliser des campagnes de communication digitales pour développer ses ventes grâce à Facebook ou Waze"
            },
            {
              "code": "SOCIAL_NETWORK_CONTENTS",
              "label": "Gérer facilement ses contenus réseaux sociaux sur un seul et même outil"
            }
          ],
          "commercialCampaignIndicator": true,
          "commercialCampaignName": "test réseau4",
          "multipleNeedsIndicator": true
        },
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    },
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4002115"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "52022354600042",
          "expertInquiryType": {
            "code": "loyaltyService",
            "label": "Fidélité FID PRO/         CE boost FID"
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091298716"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": companyName,
          "creationDate": "2022-05-10 09:36:20",
          "lastUpdate": "2022-05-10 09:36:21",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": {
            "code": "M_3M",
            "label": "Plus de 4 mois"
          },
          "expertInquiryProgressStateType": {
            "code": stateCodeAttentePriseEnCharge,
            "label": stateLibEnAttentePriseEnCharge
          },
          "expertInquiryProgressStateLastModificationDate": "2022-05-10 09:36:22",
          "expertInquiryStatusLastModificationDate": "2022-05-10 09:36:23",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "TURCAN ",
          "firstname": "XXX @YTY.COM",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": null,
        "ecommerce": null,
        "factoring": null,
        "billingService": null,
        "loyaltyService": {
          "implementationDelayType": {
            "code": "M_3M",
            "label": "Plus de 5 mois"
          }
        },
        "internationalImplementation": null
      }
    }
  ]
};
