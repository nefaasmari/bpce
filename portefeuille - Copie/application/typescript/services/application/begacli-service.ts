/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service de gestion des indicateurs
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service de gestion des indicateurs
     */
    class BegacliService implements IBegacliService {
        public static CLASS_NAME = Constantes.Inject.Services.begacliService;
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(BegacliService.CLASS_NAME);

        // Proprietés
        private filtreBegacli: Modeles.Application.IFiltreBegacli;
        private expReguliere: string = null;

        // Injection de dépendances 
        public static $inject = [
            
        ];

        /**
         * Constructeur
         */
        constructor() {
            this.initialiser();
        }

        private initialiser() {
            this.filtreBegacli = <Modeles.Application.IFiltreBegacli>{};
            this.filtreBegacli.listeLettres = [];
            this.filtreBegacli.listeNombres = [];
            this.ajouterUniversLettre("Banque au quotidien", "b");
            this.ajouterUniversLettre("Epargne", "e");
            this.ajouterUniversLettre("Gestion des flux", "g");
            this.ajouterUniversLettre("Assurance prévoyance", "a");
            this.ajouterUniversLettre("Financement Court terme", "c");
            this.ajouterUniversLettre("Financement moyen Long terme", "l");
            this.ajouterUniversLettre("Ingénierie sociale", "i");
            // this.ajouterUniversLettre("Univers en trop", "x");
            let nb : number = this.filtreBegacli.listeLettres.length;
            for (let i = 0; i <= nb; i++) {
                this.AjouterNombre(i.toString());
            }
            this.filtreBegacli.choisiNC = false;
        }

        private ajouterUniversLettre(univers: string, lettre: string) {
            let lettreBegacli = <Modeles.Application.ILettreBegacli>{};
            lettreBegacli.univers = univers;
            lettreBegacli.lettreMin = lettre.toLocaleLowerCase();
            lettreBegacli.choisiMin = false;
            lettreBegacli.lettreMaj = lettre.toLocaleUpperCase();
            lettreBegacli.choisiMaj = false;
            this.filtreBegacli.listeLettres.push(lettreBegacli);
        }

        private AjouterNombre(nombre: string) {
            let nombreBegacli = <Modeles.Application.INombreBegacli>{};
            nombreBegacli.nombre = nombre;
            nombreBegacli.choisi = false;
            this.filtreBegacli.listeNombres.push(nombreBegacli);
        }


        /**
         *  décoche toutes les cases du filtre begacli
         */
        public setCasesDecochees() {
            _.forEach(this.filtreBegacli.listeLettres, (lettreBegacli: Modeles.Application.ILettreBegacli) => {
                lettreBegacli.choisiMaj = false;
                lettreBegacli.choisiMin = false;
            });
            _.forEach(this.filtreBegacli.listeNombres, (nombreBegacli: Modeles.Application.INombreBegacli) => {
                nombreBegacli.choisi = false;
            });
            this.filtreBegacli.choisiNC = false;
            this.expReguliere = null;
        }

        /**
         *  si aucune case cochée , retour false
         *  si au mmoins 1 case cochée, retour true
         */
        public getCasesCochees(): boolean {
            let nb: number = 0;
            _.forEach(this.filtreBegacli.listeLettres, (lettreBegacli: Modeles.Application.ILettreBegacli) => {
                if (lettreBegacli.choisiMaj === true || lettreBegacli.choisiMin === true) {
                    nb++;
                }
            });
            _.forEach(this.filtreBegacli.listeNombres, (nombreBegacli: Modeles.Application.INombreBegacli) => {
                if (nombreBegacli.choisi === true ) {
                    nb++;
                }
            });
            if (this.filtreBegacli.choisiNC === true) {
                nb++;
            }

            if (nb > 0) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * completer bagacli avec le nombre d'univers
         * recherche dans la relation les BEGACLI...
         * calcule le nombre de majuscules dans le texte et l'ajoute au début sous forme x-.....
         * @param relationCommerciale
         */
        public completerUniversBegacli(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale {
            let indicateurBegacli: Modeles.Rest.PortefeuilleV1.client.IIndicateur;
            for (let itemPortefeuille of relationCommerciale.listePortefeuilles) {
                for (let itemRelation of itemPortefeuille.listeRelation) {
                    for (let itemClient of itemRelation.listeClient) {
                        console.log(" ==> itemClient : ", itemClient);
                        indicateurBegacli = _.find(itemClient.listeIndicateurClient, { code: Enum.Indicateur.CODE.BEGACLI.toString() });
                        if (indicateurBegacli) {
                            indicateurBegacli.valeur = this.completerNombreMajuscules(indicateurBegacli.valeur);
                        }
                    }
                }
            }
            return relationCommerciale;
        }

        /**
         * completer bagacli avec le nombre d'univers
         * recherche dans le client les indicagteurs BEGACLI...
         * calcule le nombre de majuscules dans le texte et l'ajoute au début sous forme x-.....
         * @param clients
         */
        public completerUniversBegacliClient(client: Modeles.Rest.PortefeuilleV1.client.IClient):
            Modeles.Rest.PortefeuilleV1.client.IClient {
            let indicateurBegacli: Modeles.Rest.PortefeuilleV1.client.IIndicateur;
            for (let unClient of client.listeClientIndicateur) {
                    indicateurBegacli = _.find(unClient.listeIndicateurClient, { code: Enum.Indicateur.CODE.BEGACLI.toString() });
                    if (indicateurBegacli) {
                        indicateurBegacli.valeur = this.completerNombreMajuscules(indicateurBegacli.valeur);
                    }
            }
            return client;
        }


        private completerNombreMajuscules(texte: string): string {
            if (texte === null) {
                return null;
            }
            // mets devant le texte, le nombre de majuscules trouvées.
            let cpt: number = 0;
            let nb: number;
            nb = texte.length;
            for (let i = 0; i < nb; i++) {
                if (texte[i] >= "A" && texte[i] <= "Z") {
                    cpt = cpt + 1;
                }
            }
            return cpt + "-" + texte;
        }

        public getFiltreBegacliTexte(filtre: Modeles.Application.IFiltre) {
            let texte: string;
            // console.log("--> getFiltreBegacliTexte filtre : ", filtre);
            texte = filtre.indicateur.indicateur.intitule + " = ";
            let txtUnivers: string = this.texteUnivers();
            let txtNombre: string = this.texteNombre();
            let txtNC: string = this.texteNC();

            if (txtUnivers !== "" || txtNombre !== "") {
                texte = texte + "[";
            }

            texte = texte + txtUnivers;
            if (txtUnivers !== "" && txtNombre !== "") {
                texte = texte + " et ";
            }
            texte = texte + txtNombre;

            if (txtUnivers !== "" || txtNombre !== "") {
                texte = texte + "]";
            }

            if (txtUnivers !== "" || txtNombre !== "") {
                if (txtNC !== "") {
                    texte = texte + " ou ";
                }
            }
            texte = texte + txtNC;

            texte = texte; // + " - exp régulière : " + this.getExpReguliere();

           return texte;
        }

        private texteNC() : string {
            let texte: string = "";
            if (this.filtreBegacli.choisiNC === true) {
                texte = "NC";
            } 
            return texte;
        }

        private texteNombre(): string {
            // si rien de coché, renvoie ""
            // si au moins 1 case cochée, envoie le texte complet des nombres cochés
            let texte: string = "";
            _.forEach(this.filtreBegacli.listeNombres, (nombreBegacli: Modeles.Application.INombreBegacli) => {
                if (nombreBegacli.choisi === true) {
                    texte = this.ajoutercaractere(texte, nombreBegacli.nombre);
                }
            });
            if (texte !== "") {
                texte = "Nbr Univers équipés= [" + texte + "]";
            }
            return texte;
        }

        private texteUnivers(): string {
            // si rien de coché, renvoie ""
            // si au moins 1 case cochée, envoie le texte complet des univers
            let texte: string = "";
            _.forEach(this.filtreBegacli.listeLettres, (lettreBegacli: Modeles.Application.ILettreBegacli) => {
                if (lettreBegacli.choisiMaj === true) {
                    texte = this.ajoutercaractere(texte, lettreBegacli.lettreMaj);
                }
                if (lettreBegacli.choisiMin === true) {
                    texte = this.ajoutercaractere(texte, lettreBegacli.lettreMin);
                }
            });
            if (texte !== "") {
                texte = "Univers = [" + texte + "]";
            }
            return texte;
        }

        private ajoutercaractere(texte: string, caractere: string): string {
            if (texte === "") {
                return caractere;
            } else {
                return texte + "," + caractere;
            }
        }


        /**
         * Récupération du filtre begacli
         */
        public getFiltreBegacli(): Modeles.Application.IFiltreBegacli {
            return this.filtreBegacli;
        }

        /**
         * conversion du filtre Begacli en expression régulière en fonction des cases cochées ...
         */
        private calculerExpReguliere(): string {
            let texte: string = "";
            let cpt: number = 0;

            _.forEach(this.filtreBegacli.listeNombres, (nombreBegacli: Modeles.Application.INombreBegacli) => {
                if (nombreBegacli.choisi === true) {
                    texte = texte + nombreBegacli.nombre;
                    cpt++;
                }
            });

            if (texte === "") {
                texte = "..";
            } else {
                texte = "[" + texte + "].";
            }

            _.forEach(this.filtreBegacli.listeLettres, (lettreBegacli: Modeles.Application.ILettreBegacli) => {
                if (lettreBegacli.choisiMaj === true) {
                    cpt++;
                    texte = texte + lettreBegacli.lettreMaj;
                } else if (lettreBegacli.choisiMin === true) {
                    cpt++;
                    texte = texte + lettreBegacli.lettreMin;
                } else {
                    texte = texte + ".";
                }
            });

            if (cpt === 0) {
                texte = "";
            }
            return texte;
        }

        public getExpReguliere(): string {
            this.expReguliere = this.calculerExpReguliere();
            return this.expReguliere;
        }
    }


    /**
     * Interface de la classe IndicateurService
     */
    export interface IBegacliService {
        getExpReguliere(): string;
        getFiltreBegacli(): Modeles.Application.IFiltreBegacli;
        getFiltreBegacliTexte(filtre: Modeles.Application.IFiltre);
        getCasesCochees(): boolean;
        setCasesDecochees();
        completerUniversBegacli(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale):
            Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;
        completerUniversBegacliClient(client: Modeles.Rest.PortefeuilleV1.client.IClient): Modeles.Rest.PortefeuilleV1.client.IClient;
    }

    app.service(BegacliService.CLASS_NAME, BegacliService);
}  