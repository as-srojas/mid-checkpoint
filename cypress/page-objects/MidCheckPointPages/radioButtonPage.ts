class RadioButtonPage {

    yesRadioButton = '//input[@id="yesRadio"]';
    impressiveRadioButton = '//input[@id="impressiveRadio"]';
    noRadioButton = '//input[@id="noRadio"]';

    resultMessage = '//span[@class="text-success"]';
    
    //Methods
    verifyYesRadioButton() {
        cy.xpath(this.yesRadioButton).should('be.enabled').click({force:true});

        cy.xpath(this.resultMessage).should('have.text', "Yes");
    }

    verifyImpressiveRadioButton() {
        cy.xpath(this.impressiveRadioButton).should('be.enabled').click({force:true});

        cy.xpath(this.resultMessage).should('have.text', "Impressive");
    }

    verifyDisabledRadioButton() {
        cy.xpath(this.noRadioButton).should('be.disabled').click({force:true});

        cy.xpath(this.resultMessage).should('not.exist');
    }
}


export default new RadioButtonPage();