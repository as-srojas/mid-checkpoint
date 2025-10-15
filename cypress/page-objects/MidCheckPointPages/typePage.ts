class TypePage {

    userNameInput = '//input[@id="userName"]';
    emailInput = '//input[@id="userEmail"]';
    currentAddressInput ='//textarea[@id="currentAddress"]';
    permaAddressInput = '//textarea[@id="permanentAddress"]';
    submitBtn = '//button[@id="submit"]';
    outputMessage = '//div[@id="output"]//div';
    outputName = '//p[@id="name"]';
    outputEmail = '//p[@id="email"]';
    outputCurrentAddress = '//p[@id="currentAddress"]';
    outputPermaAddress = '//p[@id="permanentAddress"]';
    
    //Methods
    verifyPlaceholders() {
        cy.xpath(this.userNameInput).invoke('attr', 'placeholder').should('eq', 'Full Name')
        cy.xpath(this.emailInput).invoke('attr', 'placeholder').should('eq', 'name@example.com')
        cy.xpath(this.currentAddressInput).invoke('attr', 'placeholder').should('eq', 'Current Address')
    }

    writeOnUsernameInput(name: string) {
        cy.xpath(this.userNameInput).should('be.visible').clear().type(name); 
        cy.xpath(this.userNameInput).invoke('val').should('eq', name);
    }

    writeOnUserEmailInput(email: string) {
        cy.xpath(this.emailInput).should('be.visible').clear().type(email);
        cy.xpath(this.emailInput).invoke('val').should('eq', email);
    }

    writeOnCurrentAddressInput(currentAddress: string) {
        cy.xpath(this.currentAddressInput).should('be.visible').clear().type(currentAddress);
        cy.xpath(this.currentAddressInput).invoke('val').should('eq', currentAddress);
    }

    writeOnPermanentAddressInput(permaAddress: string) {
        cy.xpath(this.permaAddressInput).should('be.visible').clear().type(permaAddress);
        cy.xpath(this.permaAddressInput).invoke('val').should('eq', permaAddress);
    }

    clickOnSubmitButton(data: string[]) {
        cy.xpath(this.submitBtn).should('be.visible').click();

        cy.xpath(this.outputName).should('contain', data.fullname);
        cy.xpath(this.outputEmail).should('contain', data.email);
        cy.xpath(this.outputCurrentAddress).should('contain', data.currentAddress);
        cy.xpath(this.outputPermaAddress).should('contain', data.permanentAddress);
    }

    emailErrorDisplay() {
        cy.xpath(this.emailInput).should('have.class', 'field-error')
    }

    clickOnSubmitButtonWithInvalidData(data: any) {
        cy.xpath(this.submitBtn).should('be.visible').click();
        this.emailErrorDisplay();
        cy.xpath(this.outputMessage).should('be.empty');
    }

}

export default new TypePage();