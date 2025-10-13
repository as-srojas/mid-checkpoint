/// <reference types="cypress" />
import checkBoxPage from '../../page-objects/MidCheckPointPages/checkBoxPage';

describe('CheckBox Scenarios', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/checkbox');
    })
  
    it('Check And Uncheck All Boxes', () => {
        checkBoxPage.clickOnExpandAllButton();
        checkBoxPage.checkAllBoxes();
        checkBoxPage.isAllBoxesChecked();
        checkBoxPage.uncheckAllBoxes();
        checkBoxPage.isAllBoxesUnchecked();
    })
  
    it('Check Principal Boxes', () => {
        checkBoxPage.clickOnExpandAllButton();        
        checkBoxPage.checkAndVerifySpecificBox("Desktop");
        checkBoxPage.checkAndVerifySpecificBox("Documents");
        checkBoxPage.checkAndVerifySpecificBox("Downloads");
        checkBoxPage.isAllBoxesChecked();
    })

    it('Check Specific Boxes', () => {
        checkBoxPage.clickOnExpandAllButton();        
        checkBoxPage.checkAndVerifySpecificBox("Word File.doc");
        checkBoxPage.checkAndVerifySpecificBox("General");
        checkBoxPage.checkAndVerifySpecificBox("Angular");
        checkBoxPage.checkAndVerifySpecificBox("Private");
        checkBoxPage.checkAndVerifySpecificBox("Commands");
        checkBoxPage.checkAndVerifySpecificBox("Excel File.doc");
    })

    it('UnCheck Specific Boxes', () => {
        checkBoxPage.clickOnExpandAllButton();        
        checkBoxPage.checkAllBoxes();
        checkBoxPage.uncheckAndVerifySpecificBox("General");
        checkBoxPage.uncheckAndVerifySpecificBox("Angular");
        checkBoxPage.uncheckAndVerifySpecificBox("Private");
        checkBoxPage.uncheckAndVerifySpecificBox("Commands");
    })
})
  