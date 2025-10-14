/// <reference types="cypress" />
import selectMenuPage from '../../page-objects/MidCheckPointPages/selectMenuPage';

describe('Select Menu Scenarios', () => {
    beforeEach(() => {
        cy.visit('select-menu');
    })
  
    it('Select Value', () => {
        const options: string[] = ['Group 1, option 2', 'Group 2, option 2', 'A root option'];
        const randomIndex = Math.floor(Math.random() * options.length);
        
        selectMenuPage.selectValueMenuOption(options[randomIndex]);
    })

    it('Select One Value', () => {
        const options: string[] = ['Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'Other'];
        const randomIndex = Math.floor(Math.random() * options.length);
        
        selectMenuPage.selectOneMenuOption(options[randomIndex]);
    })

    it('Select Old Menu', () => {
        const options: string[] = [
            'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'White', 'Voilet', 'Indigo', 'Magenta', 'Aqua' 
        ];
        const randomIndex = Math.floor(Math.random() * options.length);

        selectMenuPage.selectOptionOnOoldMenu(options[randomIndex]);
    }) 

    it('Select Multiple Menu', () => {
        const options: string[] = ['Green','Black','Red'];

        selectMenuPage.selectMultipleMenuOption(options);
    }) 

    it('Select And Delete From Multiple Menu', () => {
        const options: string[] = ['Green', 'Blue', 'Black','Red'];

        selectMenuPage.selectAndDeleteMultipleMenuOption(options);
    }) 

    it('Select Standard Multi Menu', () => {
        const options: string[] = ['Volvo', 'Saab', 'Opel', 'Audi'];
        const randomIndex = Math.floor(Math.random() * options.length);

        selectMenuPage.standardMultiSelect(options[randomIndex]);
    }) 

})
  