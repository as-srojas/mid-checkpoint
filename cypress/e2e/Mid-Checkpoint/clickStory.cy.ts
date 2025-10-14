/// <reference types="cypress" />
import clickPage from '../../page-objects/MidCheckPointPages/clickPage';

describe('Clicks Scenarios', () => {
    beforeEach(() => {
        cy.visit('buttons');
    })
  
    it('Verify all clicks simultaneously', () => {
        clickPage.checkAllClicks();
    })

    it('Verify Single Click', () => {
        clickPage.verifySingleClick();
    })

    it('Verify Double Click', () => {
        clickPage.verifyDoubleClick();
    })

    it('Verify Right Click', () => {
        clickPage.verifyRightClick();
    })
  
})
  