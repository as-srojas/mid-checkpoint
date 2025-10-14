/// <reference types="cypress" />
import linkPage from '../../page-objects/MidCheckPointPages/linkPage';

describe('Links Scenarios', () => {
    beforeEach(() => {
        cy.visit('links');
    })
  
    it('Verify Go Home Link', () => {
        linkPage.clickAndVerifyNewTabHome();
    })

    it('Verify Dynamic Link', () => {
        linkPage.clickAndVerifyNewTabDynamic();
    })

    it('Verify API Calls', () => {
        linkPage.verifyCreatedApiCall();
        linkPage.verifyNoContentApiCall();
        linkPage.verifyMovedApiCall();
        linkPage.verifyBadRequestApiCall();
        linkPage.verifyUnauthoriuzedApiCall();
        linkPage.verifyForbiddenApiCall();
        linkPage.verifyNotFoundApiCall();
    });
  
})
  