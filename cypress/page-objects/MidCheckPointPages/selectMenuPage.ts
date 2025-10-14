class SelectMenuPage {

    carsSelector = '//select[@id="cars"]';
    
    selectValueMenu = '//input[@id="react-select-2-input"]';
    selectValuePlaceholder = '//div[@id="withOptGroup"]//div[contains(@class, "css-1uccc91-singleValue")]';

    selectOneMenu = '//input[@id="react-select-3-input"]';
    selectOnePlaceholder = '//div[@id="selectOne"]//div[contains(@class, "css-1uccc91-singleValue")]';

    selectMultiMenu = '//input[@id="react-select-4-input"]';
    selectMultiPlaceholder = '//div[contains(@class, "css-1rhbuit-multiValue")]';
    deleteItemMenuButton = '//div[contains(@class, "css-xb97g8")]';

    oldMenu = '//select[@id="oldSelectMenu"]';

    
    //Methods
    selectValueMenuOption(option: string) {
        cy.xpath(this.selectValueMenu).click({force:true});
        cy.xpath(`//*[text()="${option}"]`).click();

        cy.xpath(this.selectValuePlaceholder).should('have.text', option);
    }

    selectOneMenuOption(option: string) {
        cy.xpath(this.selectOneMenu).click({force:true});
        cy.xpath(`//*[text()="${option}"]`).click();

        cy.xpath(this.selectOnePlaceholder).should('have.text', option);
    }

    selectOptionOnOoldMenu(option: string) {
        cy.xpath(this.oldMenu).select(option)
        .invoke('text').then((text) => {
            expect(text).to.contain(option);
        });
    }

    selectMultipleMenuOption(options: string[]) {
        options.forEach(option => {
            cy.xpath(this.selectMultiMenu).click({force:true});
            cy.xpath(`//*[text()="${option}" and @tabindex="-1"]`).click({force:true});
        });

        cy.xpath(this.selectMultiPlaceholder).should('have.text', options.join(""));
    }

    selectAndDeleteMultipleMenuOption(options: string[]) {
        let elementsFound: number = 0;
        let arrOptions: string[] = options;

        options.forEach(option => {
            cy.xpath(this.selectMultiMenu).click({force:true});
            cy.xpath(`//*[text()="${option}" and @tabindex="-1"]`).click({force:true});
        });

        
        cy.xpath(this.deleteItemMenuButton)
        .then($elements => {
            elementsFound = $elements.length;
    
            for (let i = 0; i < elementsFound; i++) {
                const shouldClick = Math.random() < 0.5; 
                
                if (shouldClick) {
                    cy.wrap($elements[i]).click({force:true});
                    arrOptions.splice(i, 1);
                    cy.log(arrOptions.toString());
                    cy.log(arrOptions.join(""))
                    return;
                } 
            }
        });

        cy.xpath(this.selectMultiPlaceholder).should('have.text', arrOptions.join(""));
    }

    standardMultiSelect(option: string) {
        cy.xpath(this.carsSelector).select(option).invoke('val').should('deep.equal', [option.toLowerCase()]);
    }

}

export default new SelectMenuPage();