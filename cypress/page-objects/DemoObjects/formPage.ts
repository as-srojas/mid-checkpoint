class FormPage {

    formSideButton = '//h5[text()="Forms"]';
    practiceFormButton = '//span[text()="Practice Form"]';
    firstNameInput = '#firstName';
    lastNameInput = '#lastName';
    emailInput = '#userEmail';
    radioButtons = '//input[@type="radio"]';
    mobileInput = '#userNumber';
    dateOfBirthInput = '#dateOfBirthInput';
    subjectsInput = '#subjectsInput';
    checkBoxes = '//input[@type="checkbox"]';
    photoInput = '#uploadPicture';
    addressInput = '#currentAddress';
    stateInput = '#react-select-3-input'
    cityInput = '#react-select-4-input';
    submitButton = '//button[text()="Submit"]';
    
    //Methods
    writeOnFirstNameInput(name: string) {
        cy.get(this.firstNameInput).type(name);
    }

    writeOnLasttNameInput(lastName: string) {
        cy.get(this.lastNameInput).type(lastName);
    }
    
    writeOnEmailInput(email: string) {
        cy.get(this.emailInput).type(email);
    }

    selectRandomRadioButton() {
        cy.xpath(this.radioButtons).then($btnElements => {
            const randomBtn = Math.floor(Math.random() * $btnElements.length);
            cy.wrap($btnElements[randomBtn]).click({force:true});
        });
    }

    writeOnMobileInput(mobile: string) {
        cy.get(this.mobileInput).type(mobile);
    }

    writeOnBirthDateInput(year: string, month: string, day: string) {
        cy.get(this.dateOfBirthInput).click();
        cy.wait(2000);
        cy.get('.react-datepicker__year-select').select(year);
        cy.get('.react-datepicker__month-select').select(month);
        cy.xpath(`//div[text()="${day}"]`).click();
    }

    writeOnSubjectsInput(subjects: string[]) {
        subjects.forEach(element => {
            cy.get(this.subjectsInput).type(element);
            cy.wait(1000);
            cy.get(this.subjectsInput).type('{enter}');
        });
    }

    selectRandomCheckBox() {
        cy.xpath(this.checkBoxes).then($boxElements => {
            const randomBox = Math.floor(Math.random() * $boxElements.length);
            cy.wrap($boxElements[randomBox]).click({force:true});
        });
    }

    writeOnAddressInput(address: string) {
        cy.get(this.addressInput).type(address);
    }

    writeOnStateInput(state: string) {
        cy.get(this.stateInput).click({force:true});
        cy.xpath(`//div[text()="${state}"]`).click();
    }

    writeOnCityInput(city: string) {
        cy.get(this.cityInput).click({force:true});
        cy.xpath(`//div[text()="${city}"]`).click();
    }

    clickOnFormButton() {
       cy.xpath(this.formSideButton).click();
    }

    clickOnUploadImage() {
        cy.get(this.photoInput).selectFile('cypress/fixtures/Images/demo.jpg');
    }

    clickOnPracticeFormButton() {
        cy.xpath(this.practiceFormButton).click();
    }

    clickOnSubmitButton() {
        cy.xpath(this.submitButton).click();
    }
}

export default new FormPage();
