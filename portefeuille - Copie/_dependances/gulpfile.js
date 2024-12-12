var BuildConfig;
(function (BuildConfig) {
    "use strict";
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    BuildConfig.config = {
        project: {
            rootSrcFolder: "application",
            rootTestFolder: "test",
            couvertureCode: "O"
        },
        build: {
            targetFolder: "debug",
            reportFolder: "rapports",
            tempFolder: "temp",
            declarations: false,
            release: false,
            minimify: true,
            noImplicitAny: false,
            stubs: false,
            tokens: false,
            deps: true,
            localTsOverride: false,
            localTsOverrideExcludeFiles: "",
            caseName: "paramCase",
            mobile: false
        },
        packaging: {
            gclFolder: "dist",
        },
        tokenFile: {
            file: "myway-dua.par",
            url: "./_dependances/" + "v{version}/tokens/{file}"
        },
        remote: {
            hostname: "UD0TX015",
            username: "myway",
            password: "myway",
            rootPath: "/xfic/myway/html/d0mywvhosrv1sta00/v{version}/",
            typescriptDeclarationsFolder: "\\\\myway-atelier\\DeclarationsTS\\v1\\socle-fonctionnel\\{version}\\",
            cdn: {
                baseFolder: "cdn/v1/"
            }
        },
        local: {
            serverPort: 3000,
            typescriptDeclarationsFolder: "declarations",
            cdn: {
                baseFolder: "cdn/v1/"
            }
        },
        rules: {
            localRulesFolder: "##GULPFILE_LOCAL_FOLDER##hintRules/",
            distantRulesFolder: "Y:/Util32/OutilsMyWay/gulp/distant/hintRules/",
            namingConventionFiles: ["application/**/*.*", "!application/**/*.js.map", "!application/typescript/controleurs/impression/**/*.ts"]
        },
        remoteDeps: {
            base: "_dependances/v{version}/cdn/",
            commonGlobs: [
                "_dependances/v{version}/cdn/v1/third-party/bundles/global-bundle.min.js",
                "_dependances/v{version}/cdn/v1/services/framework-client-app.min.js",
                "_dependances/v{version}/cdn/v1/ui/myway-ui.min.js",
                "_dependances/v{version}/cdn/v1/third-party/angular/angular-mocks.min.js",
                "_dependances/v{version}/cdn/v1/third-party/angular-ui/ui-utils.min.js",
                "_dependances/v{version}/cdn/v1/socle-fonctionnel/composants-aide/composants-aide.js",
                "_dependances/v{version}/cdn/v1/tests-unitaires/myway.mock-tu.js"
            ]
        }
    };
    var appFiles = {
        ts: {
            baseFolder: "typescript",
            mainFile: "app.ts",
            referenceFile: "reference.ts",
            otherFiles: "**/*.ts",
            stubsFiles: "stubs/**/*.ts"
        },
        html: {
            indexFile: "index.html"
        },
        less: {
            baseFolder: "less",
            mainFile: "custom.less"
        },
        ngtemplates: {
            viewFiles: "**/*.html",
            outputFilename: "angular-templates.js"
        },
        assets: {
            baseFolder: "assets",
            assetFiles: "**/*.*"
        },
        test: {
            unitTestSpecs: "unitaire/**/*.ts",
            e2eTestSpecs: "integration/**/*.ts",
            declarationsUnitTestSpecs: "**/*.ts",
            unitTestBrowsers: ["PhantomJS"]
        }
    };
    BuildConfig.config.appFiles = appFiles;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    require("myway-linters/htmlhint");
    BuildConfig.gulp = require("gulp");
    global["gulp"] = BuildConfig.gulp;
    BuildConfig.haltOnError = false;
    BuildConfig.VERSION_VAR = "{version}";
    BuildConfig.fs = require("fs");
    BuildConfig.glob = require("glob");
    BuildConfig.gulp = global["gulp"];
    BuildConfig.path = require("path");
    BuildConfig.Q = require("q");
    BuildConfig.spawn = require("child_process").spawn;
    BuildConfig.exec = require("child_process").exec;
    BuildConfig.execSync = require('child_process').execSync;
    BuildConfig.utilPlugin = require("gulp-util");
    BuildConfig.colors = require("colors");
    BuildConfig.del = require("del");
    BuildConfig.runSequence = require("run-sequence");
    BuildConfig.eventStream = require("event-stream");
    BuildConfig.mkdirp = require("mkdirp");
    BuildConfig.winston = require("winston");
    BuildConfig.streamqueue = require("streamqueue");
    BuildConfig.through2 = require("through2");
    BuildConfig.lessPluginAutoprefix = require("less-plugin-autoprefix");
    BuildConfig.insert = require("gulp-insert");
    BuildConfig.replace = require("gulp-replace");
    BuildConfig.plumber = require("gulp-plumber");
    BuildConfig.chmod = require("gulp-chmod");
    BuildConfig.connect = require("gulp-connect");
    BuildConfig.deepExtend = require("deep-extend");
    BuildConfig.typescript = require("gulp-typescript");
    BuildConfig.htmlhint = require("gulp-htmlhint");
    BuildConfig.minifyHtml = require("gulp-htmlmin");
    BuildConfig.less = require("gulp-less");
    BuildConfig.csslint = require("gulp-csslint");
    BuildConfig.concat = require("gulp-concat");
    BuildConfig.minifyCss = require("gulp-clean-css");
    BuildConfig.checkFileNamingConvention = require("gulp-check-file-naming-convention");
    BuildConfig.tar = require("gulp-tar");
    BuildConfig.gzip = require("gulp-gzip");
    BuildConfig.gulpSSH = require("gulp-ssh");
    BuildConfig.angularTemplatecache = require("gulp-angular-templatecache");
    BuildConfig.tslint = require("gulp-tslint");
    BuildConfig.cleanTsExtends = require("gulp-clean-ts-extends");
    BuildConfig.sourcemaps = require("gulp-sourcemaps");
    BuildConfig.uglify = require("gulp-uglify");
    BuildConfig.karma = require("karma");
    BuildConfig.watchLess = require("gulp-watch-less");
    BuildConfig.gulpWatch = require("gulp-watch");
    BuildConfig.hostname = require('os-hostname');
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function copyLocalDeps(config) {
        if (config.local.dependences) {
            return BuildConfig.gulp.src(config.local.dependences)
                .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
                .pipe(BuildConfig.chmod(755))
                .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.project.deployFolder)))
                .pipe(config.build.mobile ? BuildConfig.replaceVars(config) : BuildConfig.utilPlugin.noop())
                .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.project.deployFolder)))
                .pipe(config.build.tokens ? BuildConfig.replaceTokens(config) : BuildConfig.utilPlugin.noop())
                .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder)));
        }
    }
    BuildConfig.copyLocalDeps = copyLocalDeps;
    function copyAssets(config) {
        return BuildConfig.gulp.src(config.project.appFiles.assets.globs)
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.chmod(755))
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder, config.project.appFiles.assets.targetFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder, config.project.appFiles.assets.targetFolder)))
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.local.cdn.folder, config.project.deployFolder, config.project.appFiles.assets.targetFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.project.deployFolder, config.project.appFiles.assets.targetFolder)));
    }
    BuildConfig.copyAssets = copyAssets;
    function generateCSS(config) {
        var lessPlugins = [];
        if (typeof BuildConfig.lessPluginAutoprefix !== "undefined") {
            lessPlugins.push(new BuildConfig.lessPluginAutoprefix({ browsers: ["last 2 versions"] }));
        }
        return BuildConfig.gulp.src(config.project.appFiles.less.globs)
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.less({ plugins: lessPlugins }))
            .pipe(BuildConfig.csslint(BuildConfig.csslintOptions))
            .pipe(BuildConfig.csslintReporter())
            .pipe(BuildConfig.concat(config.project.appFiles.less.outputCssFilename))
            .pipe(BuildConfig.chmod(755))
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder)))
            .pipe(BuildConfig.minifyCss())
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.project.deployFolder)));
    }
    BuildConfig.generateCSS = generateCSS;
    function generateHTML(config) {
        return BuildConfig.gulp.src(config.project.appFiles.html.globs)
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.htmlhint(BuildConfig.indexHtmlhintOptions))
            .pipe(BuildConfig.htmlhintReporter("indexhtmlhint-log.json"))
            .pipe(BuildConfig.chmod(755))
            .pipe(BuildConfig.replaceVars(config))
            .pipe(BuildConfig.minifyHtml())
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.project.deployFolder)))
            .pipe(BuildConfig.replaceTokens(config))
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder)));
    }
    BuildConfig.generateHTML = generateHTML;
    function getTemplateStream(config) {
        if (config.project.appFiles.ngtemplates.globs.length === 0) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.gray("Pas de templates html trouvés"));
            return null;
        }
        return BuildConfig.gulp.src(config.project.appFiles.ngtemplates.globs)
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.htmlhint(BuildConfig.templateHtmlhintOptions))
            .pipe(BuildConfig.htmlhintReporter("partialshtmlhint-log.json"))
            .pipe(BuildConfig.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
            .pipe(BuildConfig.angularTemplatecache(config.project.appFiles.ngtemplates.outputFilename, { module: config.project.angularModule }));
    }
    BuildConfig.getTemplateStream = getTemplateStream;
    function cleanBuild(targetFolder, gclFolder, reportFolder, tempFolder) {
        var deletedFiles = BuildConfig.del.sync([targetFolder, gclFolder, reportFolder, tempFolder]);
        if (deletedFiles && deletedFiles.length > 0) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.gray("Nettoyage : "), deletedFiles.join("\n          " + BuildConfig.colors.gray("Nettoyage : ")));
        }
    }
    BuildConfig.cleanBuild = cleanBuild;
    function launchTSLint(config) {
        return BuildConfig.gulp.src(config.project.appFiles.ts.globs)
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.tslint(BuildConfig.tslintOptions))
            .pipe(BuildConfig.tslint.report(BuildConfig.tslintReporter, { emitError: config.build.release }));
    }
    BuildConfig.launchTSLint = launchTSLint;
    function transpilerApplication(config) {
        var remoteTypescriptDeclarationsFolder = config.remote.typescriptDeclarationsFolder.replace(BuildConfig.VERSION_VAR, config.build.version);
        var localTypescriptDeclarationsFolder = config.local.typescriptDeclarationsFolder.replace(BuildConfig.VERSION_VAR, config.build.version);
        var entete = "/**\n * Généré par : " + process.env.USERDOMAIN + "\\" + process.env.USERNAME + "\n" +
            " * Changeset TFS : " + process.env.BUILD_SOURCEVERSION + "\n" +
            " * Etiquette TFS : " + process.env.BUILD_BUILDNUMBER + "\n" +
            " * Déclenchement : " + process.env.BUILD_REASON + "\n" +
            " */\n";
        if (!config.build.localTsOverride && config.build.localTsOverrideExcludeFiles) {
            config.project.appFiles.ts.globs.push(config.build.localTsOverrideExcludeFiles);
        }
        var typescriptStream = BuildConfig.gulp.src(config.project.appFiles.ts.globs)
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.chmod(755))
            .pipe(BuildConfig.sourcemaps.init())
            .pipe(BuildConfig.typescript(config.project.typescriptProject));
        var templateStream = getTemplateStream(config);
        var javascriptStream = (templateStream == null) ? typescriptStream.js : BuildConfig.streamqueue({ objectMode: true }, typescriptStream.js, templateStream);
        return BuildConfig.eventStream.merge(typescriptStream.dts
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.chmod(755))
            .pipe(BuildConfig.concat(config.project.appFiles.ts.outputTypescriptDeclarationFilename))
            .pipe(BuildConfig.gulp.dest(localTypescriptDeclarationsFolder))
            .pipe(config.build.declarations ? BuildConfig.gulp.dest(remoteTypescriptDeclarationsFolder) : BuildConfig.utilPlugin.noop()), javascriptStream.pipe(BuildConfig.chmod(755))
            .pipe(BuildConfig.concat(config.project.appFiles.ts.outputJavascriptFilename))
            .pipe(BuildConfig.cleanTsExtends())
            .pipe(BuildConfig.replaceVars(config))
            .pipe(BuildConfig.uglify())
            .pipe(BuildConfig.insert.prepend(entete))
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.packaging.gclFolder, config.project.deployFolder))), javascriptStream.pipe(BuildConfig.chmod(755))
            .pipe(BuildConfig.concat(config.project.appFiles.ts.outputJavascriptFilename))
            .pipe(BuildConfig.cleanTsExtends())
            .pipe(BuildConfig.replaceVars(config))
            .pipe(BuildConfig.replaceTokens(config))
            .pipe(BuildConfig.sourcemaps.write("."))
            .pipe(config.project.type === 1 ? BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder)) : BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder))));
    }
    BuildConfig.transpilerApplication = transpilerApplication;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function runE2eTests(config) {
        var deferred = BuildConfig.Q.defer();
        var project = config.project;
        if (project.appFiles.test.e2eTestGlobs.length === 0) {
            BuildConfig.logEtatTacheProjet("- pas de test de bout en bout specifie pour ", project.name);
            BuildConfig.connect.serverClose();
            deferred.resolve(true);
        }
        else {
            BuildConfig.logEtatTacheProjet("- demarrage des tests de bout en bout pour ", project.name);
            updateWebdriver()
                .then(function () {
                var webdriverProcess = startWebdriver();
                var specFilesStream = BuildConfig.gulp.src(project.appFiles.test.e2eTestGlobs)
                    .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
                    .pipe(BuildConfig.typescript(BuildConfig.typescript.createProject({
                    noImplicitAny: false,
                    declarationFiles: false,
                    noExternalResolve: false,
                    target: "ES5",
                    sortOutput: true
                }))).js
                    .pipe(BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.tempFolder) + "/e2e"))
                    .on("end", function () {
                    runTest(project).then(function () {
                        try {
                            BuildConfig.connect.serverClose();
                            webdriverProcess.kill("SIGKILL");
                            BuildConfig.exec("taskkill /F /IM iexplore.exe 2>&1 || exit /B 0", function (error, stdout, stderr) {
                                if (error !== null) {
                                    console.log("erreur d'execution : " + error);
                                }
                            });
                            BuildConfig.exec("taskkill /F /IM java.exe 2>&1 || exit /B 0", function (error, stdout, stderr) {
                                if (error !== null) {
                                    console.log("erreur d'execution : " + error);
                                }
                            });
                        }
                        catch (ex) {
                            console.log("erreur lors de l'execution d'un test de bout en bout : " + ex);
                            throw ex;
                        }
                        deferred.resolve(true);
                        BuildConfig.logEtatTacheProjet("- fin des tests de bout en bout pour ", project.name);
                    });
                });
            });
        }
        return deferred.promise;
    }
    BuildConfig.runE2eTests = runE2eTests;
    function objToString(obj) {
        var str = "";
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + "::" + obj[p] + "\n";
            }
        }
        return str;
    }
    function getProtractorDir() {
        return BuildConfig.path.resolve(BuildConfig.path.resolve("."), "node_modules", "protractor", "bin");
    }
    function updateWebdriver() {
        var deferred = BuildConfig.Q.defer();
        var wbUpdateProcess = BuildConfig.spawn("node", [getProtractorDir() + "/webdriver-manager",
            "update",
            "--standalone",
            "--alternate_cdn",
            "http://nexus-satellite.sigcesie.caisse-epargne.fr:8082/nexus/content/groups/PublicNpmRepo/protractor/-/",
            "--ie32"
        ]);
        wbUpdateProcess.stdout.on("data", function (data) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.gray(data.toString()));
        });
        wbUpdateProcess.on("close", function (code) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.gray("le processus fils s'est termine avec le code " + code));
            deferred.resolve(true);
        });
        return deferred.promise;
    }
    function startWebdriver() {
        var wbStartProcess = BuildConfig.spawn("node", [getProtractorDir() + "/webdriver-manager", "start", "--standalone"]);
        wbStartProcess.stdout.on("data", function (data) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.gray(data.toString()));
        });
        return wbStartProcess;
    }
    function runTest(config) {
        var deferred = BuildConfig.Q.defer();
        var protractorProcess = BuildConfig.spawn("node", [
            getProtractorDir() + "/protractor",
            "--specs",
            BuildConfig.buildPath(config.build.tempFolder) + "/e2e/**/*.*",
            "D:/Util32/OutilsMyWay/gulp/distant/protractor.conf.js"])
            .on("exit", function (code) {
            if (protractorProcess) {
                try {
                    protractorProcess.kill("SIGKILL");
                }
                catch (ex) {
                    throw ex;
                }
                deferred.resolve(true);
            }
        });
        protractorProcess.stdout.on("data", function (data) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.gray(data.toString()));
        });
        return deferred.promise;
    }
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function helpTask(config) {
        BuildConfig.utilPlugin.log(BuildConfig.colors.magenta("GulpFile version 2.4.1"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Liste des tâches disponibles"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("default") + BuildConfig.colors.red("\t\t\tAffiche l’aide."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("build") + BuildConfig.colors.red("\t\t\tBuilde le projet."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("clean") + BuildConfig.colors.red("\t\t\tSupprime les répertoires declarations, rapports, temp, debug et dist."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("copy-assets") + BuildConfig.colors.red("\t\tCopie les ressources du projet (répertoire assets) dans les répertoires debug et dist"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("copy-local-deps") + BuildConfig.colors.red("\t\tCopie les dépendances locales dans les répertoires debug et dist"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("deploy-debug") + BuildConfig.colors.red("\t\tDéploie le projet en DUA (défaut) ou WUV (non minifié)."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("deploy") + BuildConfig.colors.red("\t\t\tDéploie le projet en DUA (défaut) ou WUV (minifié)."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("generate-css") + BuildConfig.colors.red("\t\tGénère les fichiers css."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("generate-html") + BuildConfig.colors.red("\t\tGénère les fichiers html."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("generate-js") + BuildConfig.colors.red("\t\tGénère les fichiers js."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("help") + BuildConfig.colors.red("\t\t\tAffiche l’aide."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("naming-check") + BuildConfig.colors.red("\t\tVérifie les noms de fichiers."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("quick-deploy") + BuildConfig.colors.red("\t\tDéploie le projet en DUA ou WUV sans relancer la tâche tar."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("quick-generate-js") + BuildConfig.colors.red("\tGénère les fichiers js sans relancer la tâche tslint."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("quick-server") + BuildConfig.colors.red("\t\tExécute le serveur web sans relancer la tâche build."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("quick-tar") + BuildConfig.colors.red("\t\t\tGénère un tar sans relancer la tâche unittest."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("quick-unittest") + BuildConfig.colors.red("\t\tExécute les tests unitaires sans relancer la tâche build."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("serveCDN") + BuildConfig.colors.red("\t\t\tExécute le serveur pour le CDN (port 3333)."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("server") + BuildConfig.colors.red("\t\t\tExécute le serveur web et affiche la SPA."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("tar") + BuildConfig.colors.red("\t\t\tGénère un tar."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("ts-lint") + BuildConfig.colors.red("\t\t\tExécute les linters typescript."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.cyan("unittest") + BuildConfig.colors.red("\t\t\tExécute les tests unitaires."));
        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Liste des évolutions"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.0.0 : Nouvelle version de Build"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.1.0 : Ajout deploy-debug"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.1.1 : Ajout activation des tests (build.test) - Evolutions one-time-binding et ng-if - Ajout experimentalDecorators"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.1.2 : Ajout paramétrage du nom de fichier tar.gz (packaging.filename)"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.1.3 : Ajout build.localTsOverride et build.localTsOverrideExcludeFiles"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.1.4 : Remplacements tokens dans LocalDeps"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.2.0 : Ajout tâche ServeCDN - Param paramCase au lieu de lowerCase - Test présence fichiers de T.U. - whitespace 'check- typecast'"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.2.1 : Ajout paramétrage caseName dans le fichier de configuration (build.caseName)"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.2.2 : Prise en charge du live reload pour les références vues dans custom.less"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.2.3 : Prise en charge du mode 'mobile' permettant une mise à jour des valeurs de tokens '-MOB'"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.2.4 : Activation de la règle de linter html myw001-tag-id"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.2.5 : Prise en charge du mode 'mobile' permettant une mise à jour des tokens '-MOB'"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.3.0 : Activation des linters écoconception, accessibilité et normes diverses"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.3.1 : Désactivation nor032, copie acc018->acc030"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.3.2 : Ajout interdiction windows.setInterval et windows.setTimeout"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.3.3 : Arrêt de la Build si erreur de linter typescript"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.3.4 : Prise en compte des .js.map pour la vérification de noms de fichiers"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.3.5 : Correction d'une erreur liée aux tokens '-MOB'"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.4.0 : Prise en compte 6 linters html + 2 linters ts"));
        BuildConfig.utilPlugin.log(BuildConfig.colors.grey("2.4.1 : Fin de processus sur erreur de lecture du fichier .par"));
    }
    BuildConfig.helpTask = helpTask;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    BuildConfig.htmlhint.addRule({
        id: "title-require",
        description: "<title> doit être présent dans le tag <head>.",
        init: function (parser, reporter) {
            var self = this;
            var headBegin = false;
            var hasTitle = false;
            function onTagStart(event) {
                var tagName = event.tagName.toLowerCase();
                if (tagName === "head") {
                    headBegin = true;
                }
                else if (tagName === "title" && headBegin) {
                    hasTitle = true;
                }
            }
            function onTagEnd(event) {
                var tagName = event.tagName.toLowerCase();
                if (hasTitle && tagName === "title") {
                    var lastEvent = event.lastEvent;
                    if (lastEvent.type !== "text" || (lastEvent.type === "text" && /^\s*$/.test(lastEvent.raw) === true)) {
                        reporter.error("<title></title> ne doit pas être vide.", event.line, event.col, self, event.raw);
                    }
                }
                else if (tagName === "head") {
                    if (hasTitle === false) {
                        reporter.error("<title> doit être présent dans le tag <head>.", event.line, event.col, self, event.raw);
                    }
                    parser.removeListener("tagstart", onTagStart);
                    parser.removeListener("tagend", onTagEnd);
                }
            }
            parser.addListener("tagstart", onTagStart);
            parser.addListener("tagend", onTagEnd);
        }
    });
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    BuildConfig.csslintOptions = {
        "adjoining-classes": false,
        "box-model": true,
        "box-sizing": false,
        "compatible-vendor-prefixes": false,
        "display-property-grouping": true,
        "duplicate-background-images": true,
        "duplicate-properties": true,
        "fallback-colors": false,
        "floats": true,
        "font-faces": false,
        "font-sizes": false,
        "gradients": true,
        "ids": true,
        "import": true,
        "important": true,
        "known-properties": true,
        "outline-none": true,
        "overqualified-elements": false,
        "qualified-headings": false,
        "regex-selectors": false,
        "shorthand": true,
        "star-property-hack": true,
        "text-indent": false,
        "underscore-property-hack": true,
        "unique-headings": false,
        "universal-selector": true,
        "unqualified-attributes": false,
        "vendor-prefix": true,
        "zero-units": true
    };
    BuildConfig.tslintOptions = {
        "rulesDirectory": "./node_modules/myway-linters/tslint",
        "configuration": {
            "rules": {
                "ban": [
                    true,
                    ["_", "extend"],
                    ["_", "isNull"],
                    ["_", "isDefined"],
                    ["localStorage", "setItem"],
                    ["localStorage", "getItem"],
                    ["localStorage", "removeItem"],
                    ["localStorage", "clear"],
                    ["localStorage", "key"],
                    ["sessionStorage", "setItem"],
                    ["sessionStorage", "getItem"],
                    ["sessionStorage", "removeItem"],
                    ["sessionStorage", "clear"],
                    ["sessionStorage", "key"],
                    ["indexedDB", "cmp"],
                    ["indexedDB", "deleteDatabase"],
                    ["indexedDB", "open"],
                    ["window", "indexedDB"],
                    ["window", "mozIndexedDB"],
                    ["window", "webkitIndexedDB"],
                    ["window", "msIndexedDB"],
                    ["window", "setInterval"],
                    ["window", "setTimeout"]
                ],
                "class-name": true,
                "comment-format": [
                    false,
                    "check-space",
                    "check-lowercase"
                ],
                "curly": true,
                "eofline": false,
                "forin": false,
                "indent": [true, 4],
                "interface-name": true,
                "jsdoc-format": true,
                "label-position": true,
                "label-undefined": true,
                "max-line-length": [true, 240],
                "no-any": false,
                "no-arg": false,
                "no-bitwise": false,
                "no-consecutive-blank-lines": false,
                "no-console": [
                    true,
                    "debug",
                    "info",
                    "time",
                    "timeEnd",
                    "trace"
                ],
                "no-construct": true,
                "no-construct-vars": false,
                "no-debugger": true,
                "no-duplicate-key": true,
                "no-duplicate-variable": true,
                "no-empty": false,
                "no-eval": true,
                "no-string-literal": false,
                "no-switch-case-fall-through": true,
                "no-trailing-comma": true,
                "no-trailing-whitespace": false,
                "no-unused-expression": true,
                "no-unused-variable": true,
                "no-unreachable": true,
                "no-use-before-declare": true,
                "one-line": [
                    true,
                    "check-catch",
                    "check-else",
                    "check-open-brace",
                    "check-whitespace"
                ],
                "quotemark": [true, "double"],
                "radix": false,
                "semicolon": true,
                "triple-equals": [true, "allow-null-check"],
                "typedef": [
                    true,
                    "callSignature",
                    "indexSignature",
                    "parameter",
                    "propertySignature",
                    "variableDeclarator"
                ],
                "typedef-whitespace": [
                    true,
                    ["callSignature", "noSpace"],
                    ["catchClause", "noSpace"],
                    ["indexSignature", "space"]
                ],
                "use-strict": [
                    true,
                    "check-module",
                    "check-function"
                ],
                "variable-name": [
                    true,
                    "allow-leading-underscore"
                ],
                "whitespace": [
                    true,
                    "check-branch",
                    "check-decl",
                    "check-operator",
                    "check-separator",
                    "check-type"
                ],
                "directive-register": false,
                "eco307-constant-value": true,
                "eco310-controller-as": true,
                "eco314-directives-restrict": true,
                "eco315-no-link": true,
                "ip004-no-ip-address": true,
                "nor047-forbidden-strings-typescript": [
                    true,
                    "13135",
                    "CEMP"
                ]
            }
        }
    };
    BuildConfig.indexHtmlhintOptions = {
        "tagname-lowercase": true,
        "attr-lowercase": false,
        "attr-value-double-quotes": true,
        "attr-value-not-empty": false,
        "attr-no-duplication": true,
        "doctype-first": true,
        "tag-pair": true,
        "tag-self-close": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "head-script-disabled": true,
        "img-alt-require": true,
        "doctype-html5": true,
        "id-class-value": "dash",
        "style-disabled": true,
        "space-tab-mixed-disabled": false,
        "id-class-ad-disabled": false,
        "href-abs-or-rel": true,
        "attr-unsafe-chars": true,
        "acc001-header-index": true,
        "acc003-main-index": true,
        "acc005-nav": true,
        "acc007-action-button": true,
        "acc008-a-link": true,
        "acc009-explicit-buttons-links": true,
        "acc011-img-alt": true,
        "acc012-decorative-icons": true,
        "acc014-label-input": true,
        "acc021-table-caption": true,
        "acc022-th-scope": true,
        "acc030-ng-repeat-list": {
            "seuilNgRepeatDerog": 5
        },
        "eco304-one-time-binding": {
            "ratio2WayTolere": 0.3,
            "seuil2WayTolere": 10
        },
        "eco310-controller-as-html": true,
        "eco317-ng-repeat-track-by": true,
        "eco319-ng-bind": true,
        "eco320-ng-if": {
            "ratioNgIfTolere": 0.3,
            "seuilNgIfTolere": 10
        },
        "eco321-no-code-view": false,
        "ipa004-no-ip-html": true,
        "nor006-html-index-pres": true,
        "nor007-style-index": true,
        "nor008-body-class-index": true,
        "nor009-data-ng-view-index": true,
        "nor010-balise-js-index": true,
        "nor013-js-stylesheet-index": true,
        "nor017-tag-id": true,
        "nor023-inline-and-attrs": true,
        "nor024-format-tags": true,
        "nor028-utf8-index": true,
        "acc004-content-info": true,
        "acc006-titles-exists": true,
        "acc028-ng-click": true,
        "erg007-depreciated-components": true
    };
    BuildConfig.templateHtmlhintOptions = {
        "tagname-lowercase": true,
        "attr-lowercase": false,
        "attr-value-double-quotes": true,
        "attr-value-not-empty": false,
        "attr-no-duplication": true,
        "doctype-first": false,
        "tag-pair": true,
        "tag-self-close": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "head-script-disabled": true,
        "img-alt-require": true,
        "doctype-html5": false,
        "id-class-value": "dash",
        "style-disabled": true,
        "space-tab-mixed-disabled": false,
        "id-class-ad-disabled": false,
        "href-abs-or-rel": true,
        "attr-unsafe-chars": true,
        "acc005-nav": true,
        "acc007-action-button": true,
        "acc008-a-link": true,
        "acc009-explicit-buttons-links": true,
        "acc011-img-alt": true,
        "acc012-decorative-icons": true,
        "acc014-label-input": true,
        "acc021-table-caption": true,
        "acc022-th-scope": true,
        "acc023-scope-headers-table": true,
        "acc030-ng-repeat-list": {
            "seuilNgRepeatDerog": 5
        },
        "eco304-one-time-binding": {
            "ratio2WayTolere": 0.5,
            "seuil2WayTolere": 25
        },
        "eco310-controller-as-html": true,
        "eco317-ng-repeat-track-by": true,
        "eco319-ng-bind": true,
        "eco320-ng-if": {
            "ratioNgIfTolere": 0.5,
            "seuilNgIfTolere": 10
        },
        "eco321-no-code-view": true,
        "ipa004-no-ip-html": true,
        "nor017-tag-id": true,
        "nor023-inline-and-attrs": true,
        "nor024-format-tags": true,
        "acc004-content-info": true,
        "acc006-titles-exists": true,
        "acc028-ng-click": true,
        "erg007-depreciated-components": true
    };
    function createLogger(filename) {
        BuildConfig.mkdirp.sync("rapports/linters");
        return new (BuildConfig.winston.Logger)({
            transports: [
                new (BuildConfig.winston.transports.Console)(),
                new (BuildConfig.winston.transports.File)({ filename: "rapports/linters/" + filename })
            ],
            level: "debug"
        });
    }
    function tslintReporter(failures, file, options) {
        var logger = createLogger("tslint-log.json");
        var errorCount = failures.length;
        var plural = (errorCount === 1) ? "" : "s";
        var msg = BuildConfig.colors.red(errorCount) + " erreur" + plural + " trouvee" + plural + " dans " + BuildConfig.colors.magenta(file.relative);
        var messages = [msg];
        for (var i = 0; i < failures.length; i++) {
            messages.push(formatErrorMessage(failures[i].startPosition.line + 1, failures[i].startPosition.character + 1, failures[i].failure, failures[i].ruleName));
        }
        logger.error(messages.join("\n"));
        if (BuildConfig.haltOnError) {
            process.exit(1);
        }
    }
    BuildConfig.tslintReporter = tslintReporter;
    function csslintReporter() {
        return BuildConfig.through2.obj(function (file, enc, cb) {
            if (!file.csslint.success) {
                var logger = createLogger("csslint-log.json");
                var errorCount = file.csslint.errorCount;
                var plural = (errorCount === 1) ? "" : "s";
                var msg = BuildConfig.colors.red(errorCount) + " erreur" + plural + " trouvée" + plural + " dans " + BuildConfig.colors.magenta(file.relative);
                var messages = [msg].concat(getMessagesForFile(file.csslint.results).map(function (m) {
                    return m.message;
                }));
                logger.error(messages.join("\n"));
            }
            cb(null, file);
        });
    }
    BuildConfig.csslintReporter = csslintReporter;
    ;
    function getMessagesForFile(messages) {
        return messages.map(function (msg) {
            var message = msg.error, evidence = message.evidence, line = message.line, col = message.col;
            if (evidence) {
                if (col === 0) {
                    evidence = BuildConfig.colors.red("?") + evidence;
                }
                else if (col > evidence.length) {
                    evidence = BuildConfig.colors.red(evidence + " ");
                }
                else {
                    evidence = evidence.slice(0, col - 1) + BuildConfig.colors.red(evidence[col - 1]) + evidence.slice(col);
                }
            }
            return {
                message: formatErrorMessage(line, col, message.message, message.rule.id),
                evidence: evidence
            };
        });
    }
    function htmlhintReporter(filename) {
        return BuildConfig.through2.obj(function (file, enc, cb) {
            var error;
            if (file.htmlhint && !file.htmlhint.success) {
                var logger = createLogger(filename);
                var errorCount = file.htmlhint.errorCount;
                var plural = errorCount === 1 ? "" : "s";
                var msg = BuildConfig.colors.red(errorCount) + " erreur" + plural + " trouvée" + plural + " dans " + BuildConfig.colors.magenta(file.relative);
                var messages = [msg].concat(getMessagesForFile(file.htmlhint.messages).map(function (m) {
                    return m.message;
                }));
                logger.error(messages.join("\n"));
            }
            BuildConfig.colors.reset();
            cb(null, file);
        });
    }
    BuildConfig.htmlhintReporter = htmlhintReporter;
    ;
    function formatErrorMessage(line, character, reason, rule) {
        var detail = (typeof line !== "undefined") ?
            BuildConfig.colors.yellow("L" + line) + BuildConfig.colors.red(":") + BuildConfig.colors.yellow("C" + character) : BuildConfig.colors.yellow("GENERAL");
        return BuildConfig.colors.red("[") + detail + BuildConfig.colors.red("]") + BuildConfig.colors.yellow(" " + reason) + " (" + rule + ")";
    }
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function namingConventionCheck(fichiersDontOnVeutVerifierLeNommage, caseName) {
        return BuildConfig.gulp.src(fichiersDontOnVeutVerifierLeNommage)
            .pipe(BuildConfig.checkFileNamingConvention({ caseName: caseName }));
    }
    BuildConfig.namingConventionCheck = namingConventionCheck;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function createPackage(filename, globs, targetFolder, gclFolder) {
        BuildConfig.logEtatTacheProjet("Démarrage de la génération de l'archive tar ", filename);
        return BuildConfig.gulp.src(globs, { cwd: BuildConfig.buildPath(targetFolder, "**") })
            .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
            .pipe(BuildConfig.tar(filename + ".tar", { mode: null }))
            .pipe(BuildConfig.gzip())
            .pipe(BuildConfig.gulp.dest(gclFolder))
            .on("end", function () {
            BuildConfig.logEtatTacheProjet("Fin de la génération de l'archive tar ", filename);
        });
    }
    BuildConfig.createPackage = createPackage;
    function deployArchive(config, deployFolder, hostname, username, password) {
        var packagingFileName = config.packaging.filename;
        var remoteRootPath = config.remote.rootPath;
        var version = config.build.version;
        var gclFolder = config.packaging.gclFolder;
        BuildConfig.logEtatTacheProjet("Lancement du déploiement ", packagingFileName);
        var srcFile = gclFolder + "/" + deployFolder + "/**/*";
        var remotePath = remoteRootPath + "v" + version + "/" + deployFolder;
        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Répertoire source : ") + srcFile);
        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Répertoire distant cible : ") + remotePath);
        var maConfigSSH = {
            host: hostname,
            port: 22,
            username: username,
            password: password
        };
        var maConnexionSSH = new BuildConfig.gulpSSH({
            ignoreErrors: false,
            sshConfig: maConfigSSH
        });
        BuildConfig.utilPlugin.log(BuildConfig.colors.red("config.build.report : ") + config.build.report);
        if (config.build.report != null || config.build.report != undefined) {
            var reportVersions = config.build.report;
            reportVersions.map(function (reportVersion) {
                BuildConfig.gulp.src(srcFile)
                    .pipe(maConnexionSSH.dest(remoteRootPath + "v" + reportVersion + "/" + deployFolder))
                    .on("end", function () {
                    maConnexionSSH.shell(["cd " + remoteRootPath, "./replaceToken.sh v" + reportVersion + "/" + deployFolder]);
                    BuildConfig.logEtatTacheProjet("Fin du déploiement en report ", packagingFileName);
                });
            });
        }
        ;
        return BuildConfig.gulp.src(srcFile)
            .pipe(maConnexionSSH.dest(remotePath))
            .on("end", function () {
            maConnexionSSH.shell(["cd " + remoteRootPath, "./replaceToken.sh v" + version + "/" + deployFolder]);
            BuildConfig.logEtatTacheProjet("Fin du déploiement ", packagingFileName);
        });
    }
    BuildConfig.deployArchive = deployArchive;
    function deployDebug(packagingFileName, remoteRootPath, version, debugFolder, deployFolder, hostname, username, password) {
        BuildConfig.logEtatTacheProjet("Lancement du déploiement ", packagingFileName);
        var srcFile = debugFolder + "/" + deployFolder + "/**/*";
        var remotePath = remoteRootPath + "v" + version + "/" + deployFolder;
        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Répertoire source : ") + srcFile);
        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Répertoire distant cible : ") + remotePath);
        var maConfigSSH = {
            host: hostname,
            port: 22,
            username: username,
            password: password
        };
        var maConnexionSSH = new BuildConfig.gulpSSH({
            ignoreErrors: false,
            sshConfig: maConfigSSH
        });
        return BuildConfig.gulp.src(srcFile)
            .pipe(maConnexionSSH.dest(remotePath));
    }
    BuildConfig.deployDebug = deployDebug;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function serverProject(config, withWatchers) {
        BuildConfig.log("Démarrage du serveur local pour le projet " + config.project.name);
        BuildConfig.log(withWatchers ? "Avec génération continue et rechargement automatique." : "Sans génération continue et rechargement automatique.");
        if (withWatchers) {
            activerLesWatchers(config);
        }
        if (config.project.type === 1)
            var serverRootFolder = [BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder)];
        else
            var serverRootFolder = [BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder)];
        return BuildConfig.connect.server({
            root: serverRootFolder,
            port: config.local.serverPort,
            livereload: withWatchers
        });
    }
    BuildConfig.serverProject = serverProject;
    function serveCDN(config) {
        BuildConfig.log("Démarrage du serveur local pour le CDN");
        var rootFolder = config.remoteDeps.base;
        console.log(rootFolder);
        return BuildConfig.connect.server({
            root: rootFolder,
            port: 3333,
            livereload: false
        });
    }
    BuildConfig.serveCDN = serveCDN;
    function activerLesWatchers(config) {
        BuildConfig.logEtatTacheProjet("Régénération automatique du projet : ", config.project.name);
        BuildConfig.gulp.watch([config.project.appFiles.ts.globs], ['reload-js']);
        BuildConfig.gulp.watch(config.project.appFiles.ngtemplates.globs, ['reload-ng-templates']);
        BuildConfig.watchLess(config.project.appFiles.less.globs, function () {
            BuildConfig.generateCSS(config);
            BuildConfig.connect.reload();
        });
        BuildConfig.gulp.watch(config.project.appFiles.html.globs, ['reload-html']);
    }
    BuildConfig.activerLesWatchers = activerLesWatchers;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    var TOKEN_REGEXP_PREFIX = "##";
    var TOKEN_REGEXP_SUFFIX = "##";
    var TOKEN_MOB_SUFFIX = "-MOB";
    function getTokensFromContent(tableauJetons, tokenFileContent) {
        var lines = tokenFileContent.split("\n");
        var line;
        var prefix = new RegExp(TOKEN_REGEXP_PREFIX, "g");
        var suffix = new RegExp(TOKEN_REGEXP_SUFFIX, "g");
        for (var i = 0; i < lines.length; i++) {
            line = lines[i].split("=");
            if (line.length === 2) {
                var key = line[0].replace(prefix, "").replace(suffix, "");
                var value = line[1].replace(/\s+$/g, "");
                if (key) {
                    tableauJetons[key] = value;
                }
            }
        }
        return tableauJetons;
    }
    BuildConfig.getTokensFromContent = getTokensFromContent;
    function isMobilityToken(element) {
        return element.slice(-4).toUpperCase() === "-MOB";
    }
    function equivalentNonMobileToken(element) {
        return element.slice(0, -4);
    }
    function replaceTokensValuesForMobility(tableauJetons) {
        var mobilityTokens = Object.keys(tableauJetons).filter(isMobilityToken);
        var nonMobileTokens = mobilityTokens.map(equivalentNonMobileToken);
        for (var i = 0; i < mobilityTokens.length; i++) {
            if (tableauJetons[nonMobileTokens[i]] !== undefined) {
                BuildConfig.log(tableauJetons[nonMobileTokens[i]] + " remplacé par " + tableauJetons[mobilityTokens[i]]);
                tableauJetons[nonMobileTokens[i]] = tableauJetons[mobilityTokens[i]];
            }
        }
    }
    function replaceTokensForMobility(tableauJetons, content) {
        var mobilityTokens = Object.keys(tableauJetons).filter(isMobilityToken);
        var nonMobileTokens = mobilityTokens.map(equivalentNonMobileToken);
        for (var i = 0; i < mobilityTokens.length; i++) {
            if (tableauJetons[nonMobileTokens[i]] !== undefined) {
                var prefix = "##";
                var suffix = "##";
                BuildConfig.log(nonMobileTokens[i] + " remplacé par " + mobilityTokens[i]);
                var rx = new RegExp(prefix + nonMobileTokens[i] + suffix, "g");
                content = content.replace(rx, prefix + mobilityTokens[i] + suffix);
            }
        }
        return content;
    }
    function getTokens(config) {
        var urlFichierTokens = config.tokenFile.url;
        BuildConfig.log("Lecture du fichier de tokens " + urlFichierTokens);
        var tokenFileContent;
        tokenFileContent = BuildConfig.fs.readFileSync(urlFichierTokens, "utf-8");
        var tableauDesTokens = getTokensFromContent({}, tokenFileContent);
        if (config.build.mobile) {
            BuildConfig.log("Mise à jour des valeurs des tokens pour la version mobile");
            replaceTokensValuesForMobility(tableauDesTokens);
        }
        BuildConfig.fs.stat("./myway-surcharge-locale.par", function (erreur, stat) {
            if (erreur === null) {
                BuildConfig.log("Surcharge locale des tokens dans le fichier : myway-surcharge-locale.par");
                var surchargeTokenFileContent = BuildConfig.fs.readFileSync("./myway-surcharge-locale.par", "utf-8");
                tableauDesTokens = getTokensFromContent(tableauDesTokens, surchargeTokenFileContent);
            }
            else {
                BuildConfig.log("Absence du fichier 'myway-surcharge-locale.par' : pas de surcharge locale des tokens");
            }
        });
        return tableauDesTokens;
    }
    BuildConfig.getTokens = getTokens;
    function replaceToken(content, token, value) {
        var rx = new RegExp(TOKEN_REGEXP_PREFIX + token + TOKEN_REGEXP_SUFFIX, "g");
        return content.replace(rx, value);
    }
    function replaceTokens(config) {
        function transform(file, callback) {
            if (file.isNull()) {
                return callback(null, file);
            }
            var content = String(file.contents);
            content = content.replace("<meta name=\"build-number\" content=\"undefined\">", "");
            if (config.build.tokens) {
                for (var key in BuildConfig.tokens) {
                    if (typeof key === "string") {
                        content = replaceToken(content, key, BuildConfig.tokens[key]);
                    }
                }
            }
            file.contents = new Buffer(content);
            callback(null, file);
        }
        return BuildConfig.eventStream.map(transform);
    }
    BuildConfig.replaceTokens = replaceTokens;
    function replaceVars(config) {
        function transform(file, callback) {
            if (file.isNull()) {
                return callback(null, file);
            }
            var content = String(file.contents);
            content = content.replace("<meta name=\"build-number\" content=\"##TF-BUILD-BUILDNUMBER##\" />", "");
            content = content.replace("<head>", "<head>\n\t<meta name=\"build-number\" content=\"##TF-BUILD-BUILDNUMBER##\">");
            content = replaceToken(content, "NOM\\-APPLICATION", config.project.name);
            content = replaceToken(content, "NOM\\-MODULE", config.project.angularModule);
            content = replaceToken(content, "ASSETS\\-FOLDER", BuildConfig.buildPath(config.project.deployFolder, config.project.appFiles.assets.targetFolder));
            content = replaceToken(content, "TF\\-BUILD\\-BUILDNUMBER", process.env.BUILD_BUILDNUMBER);
            if (config.build.mobile) {
                var urlFichierTokens = config.tokenFile.url;
                BuildConfig.log("Lecture du fichier de tokens " + urlFichierTokens);
                var tokenFileContent;
                tokenFileContent = BuildConfig.fs.readFileSync(urlFichierTokens, "utf-8");
                var tokenContent = getTokensFromContent({}, tokenFileContent);
                BuildConfig.log("Mise à jour des tokens pour la version mobile");
                content = replaceTokensForMobility(tokenContent, content);
            }
            file.contents = new Buffer(content);
            callback(null, file);
        }
        return BuildConfig.eventStream.map(transform);
    }
    BuildConfig.replaceVars = replaceVars;
    function gererLaTokenisation(config) {
        try {
            BuildConfig.tokens = getTokens(config);
        }
        catch (erreur) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.red("\n\n\nERREUR fichier lors de la lecture des tokens " + config.tokenFile.url + "\n\n\n"));
            process.exit(1);
        }
    }
    BuildConfig.gererLaTokenisation = gererLaTokenisation;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function runUnitTests(config) {
        var deferred = BuildConfig.Q.defer();
        if (config.build.test === false) {
            BuildConfig.logEtatTacheProjet("Tests désactivés pour le projet ", config.project.name);
            deferred.resolve(true);
        }
        else {
            BuildConfig.logEtatTacheProjet("Démarrage des tests unitaires pour le projet ", config.project.name);
            var deferredRemoteDeps = BuildConfig.Q.defer();
            var remoteDepsStream = BuildConfig.gulp.src(config.remoteDeps.globs, { base: config.remoteDeps.base })
                .pipe(BuildConfig.concat("remote-deps.js"))
                .pipe(BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.tempFolder) + "/unittest"))
                .on("end", function () { deferredRemoteDeps.resolve(true); });
            var deferredSpecFiles = BuildConfig.Q.defer();
            var specFilesStream = BuildConfig.gulp.src(config.project.appFiles.test.unitTestGlobs, { base: "./" })
                .pipe(BuildConfig.plumber(BuildConfig.errorHandler))
                .pipe(BuildConfig.typescript(BuildConfig.typescript.createProject({ noImplicitAny: false, declarationFiles: false, noExternalResolve: false, target: "ES5", sortOutput: true }))).js
                .pipe(BuildConfig.replaceVars(config))
                .pipe(BuildConfig.replaceTokens(config))
                .pipe(BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.tempFolder) + "/unittest"))
                .on("end", function () { deferredSpecFiles.resolve(true); });
            var cheminSourceTestsUnitaires = "/unittest_source/" + config.project.rootSrcFolder + "/typescript/";
            var deferredSourceFiles = BuildConfig.Q.defer();
            var sourceFilesStream = (config.project.type === 1 ? BuildConfig.gulp.src(BuildConfig.buildPath(config.build.targetFolder, config.local.cdn.folder, config.project.deployFolder) + "/*.js") : BuildConfig.gulp.src(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder) + "/*.js"))
                .pipe(BuildConfig.replace(/(}\)\()(.*\|\|.*;)/g, "$1/* istanbul ignore next */$2"))
                .pipe(BuildConfig.replace(/(var __extends = this.__extends)/g, "$1/* istanbul ignore next */"))
                .pipe(BuildConfig.gulp.dest(BuildConfig.buildPath(config.build.tempFolder) + cheminSourceTestsUnitaires)).on("end", function () {
                deferredSourceFiles.resolve(true);
            });
            var cheminHtmlFiles = BuildConfig.buildPath(config.project.rootSrcFolder) + "/**/*.html";
            var cheminAngularTemplateJS = BuildConfig.buildPath(config.build.tempFolder) + cheminSourceTestsUnitaires;
            BuildConfig.Q.all([deferredRemoteDeps.promise, deferredSpecFiles.promise, deferredSourceFiles.promise]).then(function () {
                var karmaConf;
                BuildConfig.utilPlugin.log(BuildConfig.colors.green("Couverture de code activée"));
                karmaConf = genererConfigurationKarma(config, cheminSourceTestsUnitaires);
                if (BuildConfig.matchFound(BuildConfig.buildPath(config.build.tempFolder) + "/unittest/test/**/*.*")) {
                    var server = new BuildConfig.karma.Server(karmaConf, function (exitCode) {
                        BuildConfig.utilPlugin.log(BuildConfig.colors.green("Karma s'est terminé avec le code " + exitCode));
                        BuildConfig.logEtatTacheProjet("Fin d'exécution des tests unitaires du projet ", config.project.name);
                        deferred.resolve(true);
                    });
                    server.start();
                }
                else {
                    deferred.resolve(true);
                }
            });
        }
        return deferred.promise;
    }
    BuildConfig.runUnitTests = runUnitTests;
    function genererConfigurationKarma(config, cheminSourceTestsUnitaires) {
        var karmaConf = {
            files: [
                BuildConfig.buildPath(config.build.tempFolder) + "/unittest/remote-deps.js",
                BuildConfig.buildPath(config.build.tempFolder) + cheminSourceTestsUnitaires + "**/*.js",
                BuildConfig.buildPath(config.build.tempFolder) + "/unittest/test/**/*.*"
            ],
            frameworks: ["jasmine"],
            browsers: config.project.appFiles.test.unitTestBrowsers,
            plugins: [
                "karma-phantomjs-launcher",
                "karma-ie-launcher",
                "karma-jasmine",
                "karma-story-reporter",
                "karma-junit-reporter",
                "karma-coverage",
                "karma-html-reporter"
            ],
            singleRun: true,
            loglevel: "LOG_DEBUG",
            preprocessors: {
                "temp/unittest_source/**/!(*app|*reference|*angular-template).js": ["coverage"]
            },
            reporters: ["story", "junit", "coverage", "html"],
            storyReporter: {
                showSkipped: true,
                showSkippedSummary: true
            },
            junitReporter: {
                outputFile: config.build.reportFolder + "/rapport-tests-unitaires.xml",
                suite: "tests-unitaires",
                useBrowserName: false
            },
            htmlReporter: {
                outputDir: config.build.reportFolder + "/rapport-test-unitaire-html",
                templatePath: "_dependances/templates/template_jasmine_rapport_tests_unitaires.html",
                focusOnFailures: true,
                namedFiles: false,
                pageTitle: "Rapport d'exécution des tests unitaires",
                urlFriendlyName: true,
                reportName: "rapport_execution_test_unitaire"
            },
            coverageReporter: {
                type: "html",
                dir: config.build.reportFolder + "/",
                instrumenterOptions: {
                    istanbul: {
                        noCompact: true
                    }
                },
                reporters: [
                    { type: "cobertura", subdir: ".", file: "couverture-tests-unitaires.xml" },
                    { type: "html", subdir: "rapport-couverture-html" }
                ]
            }
        };
        return karmaConf;
    }
    BuildConfig.genererConfigurationKarma = genererConfigurationKarma;
    var RemoteDeps = (function () {
        function RemoteDeps(config, build) {
            this.base = config.base.replace(BuildConfig.VERSION_VAR, build.version);
            this.globs = config.specificGlobs != null ? config.commonGlobs.concat(config.specificGlobs) : config.commonGlobs;
            this.globs = this.globs.map(function (glob) {
                return glob.replace(BuildConfig.VERSION_VAR, build.version);
            });
        }
        return RemoteDeps;
    }());
    BuildConfig.RemoteDeps = RemoteDeps;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    function buildPath() {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i - 0] = arguments[_i];
        }
        if (!Array.isArray(parts)) {
            return null;
        }
        var path = parts.join("/").replace(/\\/g, "/").replace(/\/\//g, "/").replace(/^\//g, "");
        return path;
    }
    BuildConfig.buildPath = buildPath;
    function extractPath(file) {
        var array = file.split("/").slice(0, -1);
        if (array.slice(-1)[0] === "**") {
            array.splice(-1);
        }
        return array.join("/") + "/";
    }
    BuildConfig.extractPath = extractPath;
    function setHaltOnError(config, callback) {
        BuildConfig.hostname(function (err, hostname) {
            if (err) {
                return callback(err);
            }
            return callback(null, hostname);
        });
    }
    BuildConfig.setHaltOnError = setHaltOnError;
    function errorHandler(error) {
        BuildConfig.utilPlugin.log(BuildConfig.colors.red(error.message));
        if (BuildConfig.haltOnError) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.red("******************* Echec de la génération en mode Release *******************"));
            process.exit(1);
        }
        else {
            this.emit("end");
        }
    }
    BuildConfig.errorHandler = errorHandler;
    function matchFound(pattern) {
        var files = BuildConfig.glob.sync(pattern);
        if (!files || !files.length) {
            BuildConfig.utilPlugin.log(BuildConfig.colors.yellow("Aucune correspondance trouvée pour : ", pattern));
            return false;
        }
        return true;
    }
    BuildConfig.matchFound = matchFound;
    function log(message) {
        BuildConfig.utilPlugin.log(BuildConfig.colors.gray(message));
    }
    BuildConfig.log = log;
    function logConfig(key, value) {
        BuildConfig.utilPlugin.log(BuildConfig.colors.gray(key), BuildConfig.colors.cyan(value));
    }
    BuildConfig.logConfig = logConfig;
    function logEtatTacheProjet(message, projectName) {
        BuildConfig.utilPlugin.log(BuildConfig.colors.gray(message) + BuildConfig.colors.cyan(projectName));
    }
    BuildConfig.logEtatTacheProjet = logEtatTacheProjet;
    function logBuildConfig(buildConfig) {
        logConfig("version", buildConfig.version);
        logConfig("targetFolder", buildConfig.targetFolder);
        logConfig("release", buildConfig.release);
        logConfig("minimify", buildConfig.minimify);
        logConfig("noImplicitAny", buildConfig.noImplicitAny);
        logConfig("stubs", buildConfig.stubs);
        logConfig("declarations", buildConfig.declarations);
        logConfig("tokens", buildConfig.tokens);
    }
    BuildConfig.logBuildConfig = logBuildConfig;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    var Config = (function () {
        function Config(environment, coreConfig, localConfig) {
            this.environment = environment;
            if (BuildConfig.fs.existsSync("_dependances/linters.conf/" + localConfig.project.name + ".linters.conf.js")) {
                BuildConfig.utilPlugin.log(BuildConfig.colors.green("Chargement des dérogations : ") + localConfig.project.name + ".linters.conf.js");
                var localLinters = require("./linters.conf/" + localConfig.project.name + ".linters.conf");
                if (localLinters.tslintOptions != null)
                    BuildConfig.deepExtend(BuildConfig.tslintOptions, localLinters.tslintOptions);
                if (localLinters.indexHtmlhintOptions != null)
                    BuildConfig.deepExtend(BuildConfig.indexHtmlhintOptions, localLinters.indexHtmlhintOptions);
                if (localLinters.templateHtmlhintOptions != null)
                    BuildConfig.deepExtend(BuildConfig.templateHtmlhintOptions, localLinters.templateHtmlhintOptions);
                if (localLinters.csslintOptions != null)
                    BuildConfig.deepExtend(BuildConfig.csslintOptions, localLinters.csslintOptions);
            }
            var config = BuildConfig.deepExtend(coreConfig, localConfig);
            this.build = config.build;
            this.tokenFile = config.tokenFile;
            this.tokenFile.url = this.tokenFile.url.replace(BuildConfig.VERSION_VAR, this.build.version);
            this.tokenFile.url = this.tokenFile.url.replace("{file}", this.tokenFile.file);
            this.remote = config.remote;
            this.remote.cdn.folder = this.remote.cdn.baseFolder;
            this.local = config.local;
            this.local.cdn.folder = this.local.cdn.baseFolder;
            this.local.tokenFile = BuildConfig.buildPath(this.local.cdn.folder, this.tokenFile.file);
            this.rules = config.rules;
            this.remoteDeps = new BuildConfig.RemoteDeps(config.remoteDeps, this.build);
            this.project = config.project;
            this.project.appFiles = config.appFiles;
            this.project.deployFolder = (this.project.deployFolder == null) ? this.project.name : this.project.deployFolder;
            this.packaging = config.packaging;
            if (this.packaging.filename == undefined || this.packaging.filename == "") {
                this.packaging.filename = this.project.name;
            }
            ;
            this.packaging.globs = [];
            this.packaging.globs.push(BuildConfig.buildPath(this.project.deployFolder, this.project.appFiles.ts.outputJavascriptFilename));
            this.packaging.globs.push(BuildConfig.buildPath(this.project.deployFolder, this.project.appFiles.less.outputCssFilename));
            if (this.project.type === 0) {
                this.packaging.globs.push(BuildConfig.buildPath(this.project.deployFolder, this.project.appFiles.html.indexFile));
            }
            this.packaging.globs.push(BuildConfig.buildPath(this.project.deployFolder, this.project.appFiles.assets.targetFolder, "**/*"));
            this.initEnvironment();
            this.initProject();
        }
        Config.prototype.initEnvironment = function () {
            BuildConfig.log("Application des variables d'environnement");
            if (this.environment.stubs != null) {
                this.build.stubs = typeof this.environment.stubs === "boolean" ? true : this.environment.stubs.toLowerCase() === "true";
            }
            if (this.environment.tokens != null) {
                this.build.tokens = typeof this.environment.tokens === "boolean" ? true : this.environment.tokens.toLowerCase() === "true";
            }
            if (this.environment.release != null) {
                this.build.release = typeof this.environment.release === "boolean" ? true : this.environment.release.toLowerCase() === "true";
            }
            if (this.environment.min != null) {
                this.build.minimify = typeof this.environment.min === "boolean" ? true : this.environment.min.toLowerCase() === "true";
            }
            if (this.environment.decl != null) {
                this.build.declarations = typeof this.environment.decl === "boolean" ? true : this.environment.decl.toLowerCase() === "true";
            }
            if (this.environment.builddirectory != null) {
                this.build.targetFolder = BuildConfig.buildPath(this.environment.builddirectory, "src", this.build.targetFolder);
                this.packaging.gclFolder = BuildConfig.buildPath(this.environment.builddirectory, "src", this.packaging.gclFolder);
                this.build.reportFolder = BuildConfig.buildPath(this.environment.builddirectory, "src", this.build.reportFolder);
                this.build.tempFolder = BuildConfig.buildPath(this.environment.builddirectory, "src", this.build.tempFolder);
            }
            if (this.environment.deps != null) {
                this.build.deps = typeof this.environment.deps === "boolean" ? true : this.environment.deps.toLowerCase() === "true";
            }
        };
        Config.prototype.initProject = function () {
            var project = this.project;
            project.appFiles.ts.globs = [];
            project.appFiles.ts.globs.push(BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.ts.baseFolder, project.appFiles.ts.referenceFile));
            project.appFiles.ts.globs.push(BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.ts.baseFolder, project.appFiles.ts.mainFile));
            project.appFiles.ts.globs.push(BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.ts.baseFolder, project.appFiles.ts.otherFiles));
            var prefixeExclusionEventuelChemin = this.build.stubs ? "" : "!";
            project.appFiles.ts.globs.push(prefixeExclusionEventuelChemin + BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.ts.stubsFiles));
            project.appFiles.ts.outputJavascriptFilename = project.name + ".js";
            project.appFiles.ts.outputTypescriptDeclarationFilename = project.name + ".d.ts";
            project.appFiles.ngtemplates.globs = [];
            var viewFilesPattern = BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.ngtemplates.viewFiles);
            if (BuildConfig.matchFound(viewFilesPattern)) {
                project.appFiles.ngtemplates.globs.push(viewFilesPattern);
            }
            var indexFilePattern = BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.html.indexFile);
            if (BuildConfig.matchFound(indexFilePattern)) {
                project.appFiles.ngtemplates.globs.push("!" + BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.html.indexFile));
            }
            project.appFiles.less.globs = [];
            project.appFiles.less.globs.push(BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.less.baseFolder, project.appFiles.less.mainFile));
            project.appFiles.less.outputCssFilename = project.name + ".css";
            project.appFiles.html.globs = [];
            if (project.type === 0 && project.appFiles.html.indexFile != null) {
                project.appFiles.html.globs.push(BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.html.indexFile));
            }
            project.appFiles.assets.globs = [];
            project.appFiles.assets.globs.push(BuildConfig.buildPath(project.rootSrcFolder, project.appFiles.assets.baseFolder, project.appFiles.assets.assetFiles));
            project.appFiles.test.unitTestGlobs = [];
            if (project.rootTestFolder != null) {
                project.appFiles.test.unitTestGlobs.push(BuildConfig.buildPath(project.rootTestFolder, project.appFiles.test.unitTestSpecs));
                project.appFiles.test.unitTestGlobs.push(BuildConfig.buildPath(this.local.typescriptDeclarationsFolder, project.appFiles.test.declarationsUnitTestSpecs));
            }
            project.appFiles.test.e2eTestGlobs = [];
            if (project.rootTestFolder != null) {
                project.appFiles.test.e2eTestGlobs.push(BuildConfig.buildPath(project.rootTestFolder, project.appFiles.test.e2eTestSpecs));
            }
            project.typescriptProject = BuildConfig.typescript.createProject({
                noImplicitAny: this.build.noImplicitAny,
                declarationFiles: true,
                allowUnreachableCode: this.build.allowUnreachableCode ? this.build.allowUnreachableCode : false,
                suppressExcessPropertyErrors: this.build.suppressExcessPropertyErrors ? this.build.suppressExcessPropertyErrors : false,
                noImplicitUseStrict: this.build.noImplicitUseStrict ? this.build.noImplicitUseStrict : false,
                suppressImplicitAnyIndexErrors: this.build.suppressImplicitAnyIndexErrors ? this.build.suppressImplicitAnyIndexErrors : false,
                noExternalResolve: false,
                target: "ES5",
                sortOutput: true,
                outDir: this.local.typescriptDeclarationsFolder,
                experimentalDecorators: true
            });
        };
        return Config;
    }());
    BuildConfig.Config = Config;
})(BuildConfig || (BuildConfig = {}));
var BuildConfig;
(function (BuildConfig) {
    "use strict";
    (function init() {
        var coreConfig = BuildConfig.config;
        var config = new BuildConfig.Config(BuildConfig.utilPlugin.env, coreConfig, global["localConfig"]);
        BuildConfig.setHaltOnError(config, function (err, hostname) {
            if (!err) {
                config.build.release = hostname.substr(0, 8) === 'SIEGCE8V';
                BuildConfig.haltOnError = config.build.release;
            }
        });
        BuildConfig.gulp.task("default", function () {
            BuildConfig.runSequence("help");
        });
        BuildConfig.gulp.task("help", function () {
            BuildConfig.helpTask(config);
        });
        BuildConfig.gulp.task("clean", function () {
            return BuildConfig.cleanBuild(config.build.targetFolder, config.packaging.gclFolder, config.build.reportFolder, config.build.tempFolder);
        });
        BuildConfig.gulp.task("build", function (callback) {
            config.build.tokens = true;
            BuildConfig.gererLaTokenisation(config);
            BuildConfig.logBuildConfig(config.build);
            BuildConfig.runSequence("clean", "copy-assets", "copy-local-deps", "naming-check", "generate-js", "generate-css", "generate-html", callback);
        });
        BuildConfig.gulp.task("unittest", function (callback) {
            BuildConfig.runSequence("build", "quick-unittest", callback);
        });
        BuildConfig.gulp.task("quick-unittest", function () {
            return BuildConfig.runUnitTests(config);
        });
        BuildConfig.gulp.task("server", [], function (callback) {
            if (config.build.environ.toUpperCase() === "DUA") {
                config.tokenFile.file = "myway-dua.par";
                config.tokenFile.url = "./_dependances/" + "v" + config.build.version + "/tokens/" + config.tokenFile.file;
            }
            else if (config.build.environ.toUpperCase() === "WUV") {
                config.tokenFile.file = "myway-wuv.par";
                config.tokenFile.url = "./_dependances/" + "v" + config.build.version + "/tokens/" + config.tokenFile.file;
            }
            else {
                console.log("erreur environnement non défini");
                process.exit();
            }
            BuildConfig.runSequence("build", "quick-server", callback);
        });
        BuildConfig.gulp.task("serveCDN", [], function (callback) {
            return BuildConfig.serveCDN(config);
        });
        BuildConfig.gulp.task("quick-server", function () {
            return BuildConfig.serverProject(config, true);
        });
        BuildConfig.gulp.task("tar", ["unittest"], function () {
            BuildConfig.createPackage(config.packaging.filename, config.packaging.globs, config.build.targetFolder, config.build.targetFolder);
            return BuildConfig.createPackage(config.packaging.filename, config.packaging.globs, config.packaging.gclFolder, config.packaging.gclFolder);
        });
        BuildConfig.gulp.task("quick-tar", [], function () {
            BuildConfig.createPackage(config.packaging.filename, config.packaging.globs, config.build.targetFolder, config.build.targetFolder);
            return BuildConfig.createPackage(config.packaging.filename, config.packaging.globs, config.packaging.gclFolder, config.packaging.gclFolder);
        });
        BuildConfig.gulp.task("deploy", ["tar"], function () {
            var hostname, password, username;
            if (config.build.environ.toUpperCase() === "DUA") {
                hostname = "UD0TX015";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/d0mywvhosrv1sta00/";
            }
            else if (config.build.environ.toUpperCase() === "WUV") {
                hostname = "UW0TX004";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/w0mywvhosrv1stat00/";
            }
            else {
                console.log("erreur environnement non défini");
                process.exit();
            }
            var deployFolder = (config.project.type === 1) ? BuildConfig.buildPath(config.local.cdn.folder, config.project.deployFolder) : config.project.deployFolder;
            return BuildConfig.deployArchive(config, deployFolder, hostname, username, password);
        });
        BuildConfig.gulp.task("quick-deploy", [], function () {
            var hostname, password, username;
            if (config.build.environ === "DUA") {
                hostname = "UD0TX015";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/d0mywvhosrv1sta00/";
            }
            else if (config.build.environ === "WUV") {
                hostname = "UW0TX004";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/w0mywvhosrv1stat00/";
            }
            else {
                console.log("erreur environnement non défini");
                process.exit();
            }
            var deployFolder = (config.project.type === 1) ? BuildConfig.buildPath(config.local.cdn.folder, config.project.deployFolder) : config.project.deployFolder;
            return BuildConfig.deployArchive(config, deployFolder, hostname, username, password);
        });
        BuildConfig.gulp.task("deploy-debug", ["unittest"], function () {
            var hostname, password, username;
            if (config.build.environ.toUpperCase() === "DUA") {
                hostname = "UD0TX015";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/d0mywvhosrv1sta00/";
            }
            else if (config.build.environ.toUpperCase() === "WUV") {
                hostname = "UW0TX004";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/w0mywvhosrv1stat00/";
            }
            else {
                console.log("erreur environnement non défini");
                process.exit();
            }
            var deployFolder = (config.project.type === 1) ? BuildConfig.buildPath(config.local.cdn.folder, config.project.deployFolder) : config.project.deployFolder;
            return BuildConfig.deployDebug(config.packaging.filename, config.remote.rootPath, config.build.version, config.build.targetFolder, deployFolder, hostname, username, password);
        });
        BuildConfig.gulp.task("quick-deploy-debug", [], function () {
            var hostname, password, username;
            if (config.build.environ === "DUA") {
                hostname = "UD0TX015";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/d0mywvhosrv1sta00/";
            }
            else if (config.build.environ === "WUV") {
                hostname = "UW0TX004";
                username = "myway";
                password = "myway";
                config.remote.rootPath = "/xfic/myway/html/w0mywvhosrv1stat00/";
            }
            else {
                console.log("erreur environnement non défini");
                process.exit();
            }
            var deployFolder = (config.project.type === 1) ? BuildConfig.buildPath(config.local.cdn.folder, config.project.deployFolder) : config.project.deployFolder;
            return BuildConfig.deployDebug(config.packaging.filename, config.remote.rootPath, config.build.version, config.build.targetFolder, deployFolder, hostname, username, password);
        });
        BuildConfig.gulp.task("naming-check", function () {
            return BuildConfig.namingConventionCheck(config.rules.namingConventionFiles, config.build.caseName);
        });
        BuildConfig.gulp.task("generate-js", function (callback) {
            BuildConfig.runSequence("ts-lint", "quick-generate-js", callback);
        });
        BuildConfig.gulp.task("ts-lint", function () {
            return BuildConfig.launchTSLint(config);
        });
        BuildConfig.gulp.task("quick-generate-js", function () {
            return BuildConfig.transpilerApplication(config);
        });
        BuildConfig.gulp.task("generate-css", function () {
            return BuildConfig.generateCSS(config);
        });
        BuildConfig.gulp.task("generate-html", function () {
            return BuildConfig.generateHTML(config);
        });
        BuildConfig.gulp.task("copy-assets", function () {
            return BuildConfig.copyAssets(config);
        });
        BuildConfig.gulp.task("copy-local-deps", function () {
            return BuildConfig.copyLocalDeps(config);
        });
        BuildConfig.gulp.task("reload", ["reload-html", "reload- css", "reload-ng-templates", "reload-js"], function () {
        });
        BuildConfig.gulp.task("reload-html", ["generate-html"], function () {
            BuildConfig.gulp.src(BuildConfig.buildPath(config.build.targetFolder, config.project.deployFolder))
                .pipe(BuildConfig.connect.reload());
        });
        BuildConfig.gulp.task("reload-css", ["generate-css"], function () {
            BuildConfig.gulp.src(config.project.appFiles.less.globs)
                .pipe(BuildConfig.connect.reload());
        });
        BuildConfig.gulp.task("reload-ng-templates", ["generate-js"], function () {
            BuildConfig.gulp.src(config.project.appFiles.ngtemplates.globs)
                .pipe(BuildConfig.connect.reload());
        });
        BuildConfig.gulp.task("reload-js", ["generate-js"], function () {
            BuildConfig.gulp.src(config.project.appFiles.ts.globs)
                .pipe(BuildConfig.connect.reload());
        });
    })();
})(BuildConfig || (BuildConfig = {}));
