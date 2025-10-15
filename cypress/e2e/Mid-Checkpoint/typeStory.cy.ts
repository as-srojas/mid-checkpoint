/// <reference types="cypress" />
import typePage from '../../page-objects/MidCheckPointPages/typePage';

describe('Type Scenarios', () => {

    beforeEach(() => {
        cy.fixture('testData').as('data')
        cy.visit('text-box');
    })
  
    it("Verify Placeholders", () => {
        typePage.verifyPlaceholders();
    })

    it.only('Verify Invalid Email', () => {
        const dataUser = {
            fullname: 'sergio_rojas',
            email: 'sergioexample.com',
            currentAddress: 'Av. México 123',
            permanentAddress: 'Av. La Paz 321'
        };

        typePage.writeOnUsernameInput(dataUser.fullname);
        typePage.writeOnUserEmailInput(dataUser.email);
        typePage.writeOnCurrentAddressInput(dataUser.currentAddress);
        typePage.writeOnPermanentAddressInput(dataUser.permanentAddress);
        typePage.clickOnSubmitButtonWithInvalidData(dataUser);
    })

    it('Verify Texts Inputs', function () {
        for (var i = 0; i < this.data.textBoxData.length; i++) {
            typePage.writeOnUsernameInput(this.data.textBoxData[i].fullname);
            typePage.writeOnUserEmailInput(this.data.textBoxData[i].email);
            typePage.writeOnCurrentAddressInput(this.data.textBoxData[i].currentAddress);
            typePage.writeOnPermanentAddressInput(this.data.textBoxData[i].permanentAddress);
            typePage.clickOnSubmitButton(this.data.textBoxData[i]);
        }
    })
  
})
  