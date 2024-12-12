var BuildConfig;
(function (BuildConfig) {
    "use strict";
    var config = {
        project: {
            type: 0,	// 0: Application, 1:Librairie
            name: "myway.c03.20.portefeuille", 
            angularModule: "portefeuille"
        },
        build: {
            version: "24.09", 
            environ: "DUA",
            test: false           
        },
        remoteDeps: {
            specificGlobs: [
                "_dependances/v{version}/cdn/v1/socle-fonctionnel/com-gestion-client/com-gestion-client.js",
                "_dependances/v{version}/cdn/v1/socle-fonctionnel/com-interdomaine/com-interdomaine.js",
                "_dependances/v{version}/cdn/v1/socle-fonctionnel/com-eds/com-eds.js",
                "_dependances/v{version}/cdn/v1/third-party/d3/d3.min.js",
                "_dependances/v{version}/myway.lib-synchro-synthese-cc/myway.lib-synchro-synthese-cc.js",
                "_dependances/v{version}/cdn/v1/core-api/myway-core-api.js",
                "_dependances/v{version}/myway.portail.lib-portail/myway.portail.lib-portail.js",
                "_dependances/v{version}/cdn/v1/socle-fonctionnel/myway-trans-pdt-entreprise/myway.trans-pdt-entreprise.pdt-entreprise.js",
            ]
        }
    };
    module.exports = config;
})(BuildConfig || (BuildConfig = {}));
