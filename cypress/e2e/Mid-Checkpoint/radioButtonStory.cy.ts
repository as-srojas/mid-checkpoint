/// <reference types="cypress" />
import radioButtonPage from '../../page-objects/MidCheckPointPages/radioButtonPage';

describe('Radio Button Scenarios', () => {
    beforeEach(() => {
        cy.visit('radio-button');
    })
  
    it('Verify All Radiobuttons', () => {
        radioButtonPage.verifyDisabledRadioButton();
        radioButtonPage.verifyYesRadioButton();
        radioButtonPage.verifyImpressiveRadioButton();
    })
  
})
  