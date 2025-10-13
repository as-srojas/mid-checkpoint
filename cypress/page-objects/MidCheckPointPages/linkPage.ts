class LinkPage {
    //New Tab Links
    goHomeLink = '//a[@id="simpleLink"]';
    dynamicLink = '//a[@id="dynamicLink"]';
    //API Links
    createdCall = '//a[@id="created"]';
    noContentCall = '//a[@id="no-content"]';
    movedCall = '//a[@id="moved"]';
    badRequestCall = '//a[@id="bad-request"]';
    unauthoriuzedCall = '//a[@id="unauthorized"]';
    forbiddenCall = '//a[@id="forbidden"]';
    notFoundCall = '//a[@id="invalid-url"]';

    responseMessage = '//p[@id="linkResponse"]'

    //Methods
    clickAndVerifyNewTabHome() {
        cy.xpath(this.goHomeLink)
            .invoke('attr', 'href')
            .then((href) => {
                let ref = href;
                cy.xpath(this.goHomeLink).should('have.attr', 'target', '_blank').click();
                cy.url().should('include', ref);
            })
    }

    clickAndVerifyNewTabDynamic() {
        cy.xpath(this.dynamicLink)
            .invoke('attr', 'href')
            .then((href) => {
                let ref = href;
                cy.xpath(this.dynamicLink).should('have.attr', 'target', '_blank').click();
                cy.url().should('include', ref);
            })
    }

    verifyCreatedApiCall() {
        cy.intercept('GET', 'https://demoqa.com/created').as('created');

        cy.xpath(this.createdCall).should('be.visible').click();
        
        cy.wait('@created').then((interception) => {
            expect(interception.response.statusMessage).to.eq('Created');
            expect(interception.response.statusCode).to.eq(201);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 201 and status text Created");
        });
    }

    verifyNoContentApiCall() {
        cy.intercept('GET', 'https://demoqa.com/no-content').as('nocontent');

        cy.xpath(this.noContentCall).should('be.visible').click();
        
        cy.wait('@nocontent').then((interception) => {
            expect(interception.response.statusMessage).to.eq('No Content');
            expect(interception.response.statusCode).to.eq(204);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 204 and status text No Content");
        });
    }

    verifyMovedApiCall() {
        cy.intercept('GET', 'https://demoqa.com/moved').as('moved');

        cy.xpath(this.movedCall).should('be.visible').click();
        
        cy.wait('@moved').then((interception) => {
            expect(interception.response.statusMessage).to.eq('Moved Permanently');
            expect(interception.response.statusCode).to.eq(301);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 301 and status text Moved Permanently");
        });
    }

    verifyBadRequestApiCall() {
        cy.intercept('GET', 'https://demoqa.com/bad-request').as('badreq');

        cy.xpath(this.badRequestCall).should('be.visible').click();
        
        cy.wait('@badreq').then((interception) => {
            expect(interception.response.statusMessage).to.eq('Bad Request');
            expect(interception.response.statusCode).to.eq(400);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 400 and status text Bad Request");
        });
    }

    verifyUnauthoriuzedApiCall() {
        cy.intercept('GET', 'https://demoqa.com/unauthorized').as('unauthorized');

        cy.xpath(this.unauthoriuzedCall).should('be.visible').click();
        
        cy.wait('@unauthorized').then((interception) => {
            expect(interception.response.statusMessage).to.eq('Unauthorized');
            expect(interception.response.statusCode).to.eq(401);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 401 and status text Unauthorized");
        });
    }

    verifyForbiddenApiCall() {
        cy.intercept('GET', 'https://demoqa.com/forbidden').as('forbidden');

        cy.xpath(this.forbiddenCall).should('be.visible').click();
        
        cy.wait('@forbidden').then((interception) => {
            expect(interception.response.statusMessage).to.eq('Forbidden');
            expect(interception.response.statusCode).to.eq(403);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 403 and status text Forbidden");
        });
    }

    verifyNotFoundApiCall() {
        cy.intercept('GET', 'https://demoqa.com/invalid-url').as('notfound');

        cy.xpath(this.notFoundCall).should('be.visible').click();
        
        cy.wait('@notfound').then((interception) => {
            expect(interception.response.statusMessage).to.eq('Not Found');
            expect(interception.response.statusCode).to.eq(404);

            cy.xpath(this.responseMessage).should('contain.text', "Link has responded with staus 404 and status text Not Found");
        });
    }
}

export default new LinkPage();