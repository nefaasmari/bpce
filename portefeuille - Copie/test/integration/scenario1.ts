module MesTestsE2E {
    "use strict";

    describe("Test de la SPA :", () => {
        beforeAll(() => {            
            // Charge le portail
            browser.driver.get("http://myway-dua.sigcesie.caisse-epargne.fr:6080/v16.01/portail/app/#/");
            browser.manage().window().setSize(1200, 800);
            browser.sleep(1000);

            browser.switchTo().frame("webContainer");

            // Intégration de la SPA dans l'iframe webContainer
            element(by.model("url")). sendKeys("http://localhost:3000/");
            element(by.css("[ng-click='integrerUrl(url)']")).click();
            
            // Bascule vers l'iframe de la SPA
            browser.controlFlow().execute(basculerVersSpaFrame);
        });

        describe("La vue principale", () => {
            it("doit avoir un élément header", () => {                
                expect(element(by.tagName("header")).isDisplayed()).toBeTruthy();                
            });

            it("doit avoir un élément sidebar", () => {                
                expect(element(by.id("mw-sidebar")).isDisplayed()).toBeTruthy();
            });

            it("doit avoir un élément main", () => {                
                expect(element(by.tagName("main")).isDisplayed()).toBeTruthy();
            });

            it("doit avoir un élément footer", () => {                
                expect(element(by.tagName("footer")).isDisplayed()).toBeTruthy();
            });
        });

        describe("La page 1 - section 1", () => {
            it("doit s'afficher au chargement", () => {
                expect(element(by.id("page1")).isDisplayed()).toBeTruthy();
                expect(element(by.id("page1-section1")).isDisplayed()).toBeTruthy();
                expect(element(by.id("totem-sect-page1-section1")).getAttribute("class")).toMatch("sectionActive");
            });
        });

        describe("La page 1 - section 2", () => {
            it("doit permettre de test serviceAgent.DisplayMessage()", () => {
                element(by.id("totem-sect-page1-section2")).click();                
                element(by.model("defaut.localite")).sendKeys("Toulouse");
                element(by.css("[ng-click='defaut.testerServiceAgent()']")).click();
                
                browser.switchTo().defaultContent();                

                expect(element(by.repeater("msg in messages").row(0)).isDisplayed()).toBeTruthy(); 
                browser.controlFlow().execute(basculerVersSpaFrame);                
            });
        });

        describe("Page 2 - section 1", () => {
            it("doit permettre de tester une requête REST de type GET et afficher un message en cas d'erreur", () => {
                // URL avec un mauvais code établissement
                var urlRest: string = "http://myway-ressources-dua.sigcesie.caisse-epargne.fr:6083/outilssie/v1/MentionsLegales?date=2010-06-28&codeEtab=13135";
                element(by.id("totem-sect-page2-section1")).click();
                element(by.id("url-rest")).sendKeys(urlRest);
                element(by.id("btn-ve17")).click();
                        
                var flow = browser.controlFlow();
                flow.execute(seConnecterAuPortail);
                flow.execute(basculerVersSpaFrame);

                element(by.id("btn-ve17")).click() 
                
                //expect(element(by.repeater("(name1, valeur1) in ctrl2.data")).isDisplayed()).toBe(true);

                expect(browser.isElementPresent(element(by.exactBinding("ctrl2.error.libelle")))).toBeTruthy();
            });
        });
    });

    function basculerVersSpaFrame(): protractor.promise.Promise<any> {

        var deferred = protractor.promise.defer();

        browser.switchTo().defaultContent();

        browser.findElements(by.tagName("iframe")).then((iframes: webdriver.WebElement[]) => {
            for (var i = 0; i < iframes.length; i++) {
                var frameId: string;
                var isDisplayed: boolean;
                var promises = [];

                promises.push(iframes[i].getAttribute("id").then((data: string) => {
                    frameId = data;                    
                }));

                promises.push(iframes[i].isDisplayed().then((data:boolean) => {
                    isDisplayed = data;
                }));

                protractor.promise.all(promises).then(() => {
                    if (frameId !== "webContainer" && isDisplayed) {
                        browser.switchTo().frame(frameId);              
                        deferred.fulfill();
                        return;
                    }
                });
            }
        });

        return deferred.promise;
    }

    function seConnecterAuPortail(): protractor.promise.Promise<any> {        
        var deferred = protractor.promise.defer();
        
        browser.switchTo().defaultContent();
        browser.switchTo().frame("webContainer");

        var connexionButtonLocator: webdriver.Locator = by.css("[ng-click='auth.connectUser()']");
        element(connexionButtonLocator).isDisplayed().then((isDisplayed) => {
            if (isDisplayed) {
                element(connexionButtonLocator).click();
                
                browser.sleep(1000); // Hack IE11
                
                var setUerButtonLocator: webdriver.Locator = by.css("[ng-click='auth.setUser($index)']");
                element(setUerButtonLocator).isDisplayed().then((isDisplayed) => {
                    if (isDisplayed) {
                        element(setUerButtonLocator).click();
                        deferred.fulfill();
                    }
                });                
            }
        });            

        return deferred.promise;
    }
}