/// <reference types="cypress" />
import formPage from '../../page-objects/DemoObjects/formPage';

describe('First UserStory', () => {
    before(() => {
        cy.visit('https://demoqa.com/');
    })
  
    it('Can Fill Form And Submit', () => {
        formPage.clickOnFormButton();
        formPage.clickOnPracticeFormButton();
        formPage.writeOnFirstNameInput('Sergio');
        formPage.writeOnLasttNameInput('Noris');
        formPage.writeOnEmailInput('sergio@Example.com');
        formPage.selectRandomRadioButton();
        formPage.writeOnMobileInput('6120998765');
        formPage.writeOnBirthDateInput('1996', 'August', '10');
        formPage.writeOnSubjectsInput(['Math', 'History', 'Physics']);
        formPage.selectRandomCheckBox();
        formPage.writeOnAddressInput('Nunc sed ex a tellus auctor laoreet. Donec sagittis elementum velit vel sodales. In in quam mattis, porta mauris sit amet, aliquam nisi. Nulla suscipit enim ut eros rhoncus porta. Vestibulum at eros neque.');
        formPage.writeOnStateInput('NCR');
        formPage.writeOnCityInput('Delhi');
        formPage.clickOnUploadImage();
        formPage.clickOnSubmitButton();
    })
  
})
  