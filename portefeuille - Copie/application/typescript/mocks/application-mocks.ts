module Portefeuille.Mocks {
    "use strict";

    export function getClient(index?: string) {
        if (!index) {
            index = "";
        }

        return {
            "id": "123456789" + index,
            "nom": "GYEC" + index,
            "siren": "02547841002596" + index,
            "relationEconomique": "Relation Economique " + index,
            "listeIndicateurs": [
                {
                    "intitule": "PNB N-1 civile",
                    "valeur": "32 254 k€",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.PNB,
                    "icone": "",
                    "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.PNB
                },
                {
                    "intitule": "PNB N glissante",
                    "valeur": "35 326 k€",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.PNB,
                    "icone": "globe",
                    "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.PNB
                },
                {
                    "intitule": "Dernier RDV",
                    "valeur": "25/06/2018",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.AGENDA,
                    "icone": "calendar",
                    "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS
                },
                {
                    "intitule": "Volume engagement utilisé N-1 civile",
                    "valeur": "5 356 k€",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.EQUIPEMENTS,
                    "icone": "product-category-circle",
                    "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.CA
                }
            ]
        };
    }

    export function getRelationEco(index?: string) {
        if (!index) {
            index = "";
        }

        let listeClients = [];
        for (let i = 0; i < 3; i++) {
            listeClients.push(Mocks.getClient(i.toString()));
        }

        return {
            "nom": "GEDECO " + index,
            "id": "41100125" + index,
            "siren": "123456789123456" + index,
            "relationEconomique": "Nom Relation economique " + index,
            "listeClients": listeClients,
            "listeIndicateurs": [
                {
                    "intitule": "Chiffre d'affaire",
                    "valeur": "100 000 254 k€",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.CA,
                    "icone": "money",
                    "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.CA
                },
                {
                    "intitule": "PNB N glissante",
                    "valeur": "35 326 k€",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.PNB,
                    "icone": "globe",
                    "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.PNB
                },
                {
                    "intitule": "Dernier RDV",
                    "valeur": "25/06/2018",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.AGENDA,
                    "icone": "calendar",
                    "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS
                },
                {
                    "intitule": "Prochain RDV",
                    "valeur": "25/10/2018",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.AGENDA,
                    "icone": "calendar",
                    "typeIndicateur": Enum.Indicateur.TYPE.DATE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.RENDEZ_VOUS
                },
                {
                    "intitule": "Volume engagement utilisé N-1 civile",
                    "valeur": "5 356 k€",
                    "couleur": Enum.PfTuileIndicateur.COULEUR.EQUIPEMENTS,
                    "icone": "product-category-circle",
                    "typeIndicateur": Enum.Indicateur.TYPE.NOMBRE,
                    "code": "",
                    "famille": Enum.Indicateur.FAMILLE.CA
                }
            ]
        };
    }
}