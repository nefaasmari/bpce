// Bootstrapping de la synchronisation avec le serveur
var CHEMIN_GULPFILE_COMMUN = "\\myway-atelier\DependancesTS\gulpfile.js";

var fs = require('fs');
// On télécharge si besoin le gulpfile commun
if (!(fs.existsSync("./_dependances/gulpfile.js"))) {
    require("child_process").execSync("update", { cwd: "." });
}

// On charge la configuration projet
global["localConfig"] = require("./projet.conf");

// On appelle le gulpfile commun
require("./_dependances/gulpfile");
