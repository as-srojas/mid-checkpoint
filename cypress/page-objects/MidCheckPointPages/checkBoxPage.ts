class CheckBoxPage {
    expandAllBtn = '//button[@title="Expand all"]';
    generalUncheckboxSelector = '(//*[local-name()="svg" and contains(@class, "rct-icon-uncheck")])';
    generalCheckedboxSelector = '(//*[local-name()="svg" and contains(@class, "rct-icon-check")])';
    specificCheckboxSelector = '//span[text()="arg"]';
    checkedItemsList = '//div[@id="result"]';
    
    //Methods
    clickOnExpandAllButton() {
        cy.xpath(this.expandAllBtn).should('be.visible').click();
    }

    checkAndVerifySpecificBox(checkboxName: string) {
        let specificCheckboxSelector = `//span[text()="${checkboxName}"]`;
        cy.xpath(specificCheckboxSelector).click();
        
        cy.xpath(this.checkedItemsList)
            .invoke('text')
            .then((text) => {
                if(checkboxName.includes('Word File')) expect(text).to.contain("wordFile"); return; 
                if(checkboxName.includes('Excel File')) expect(text).to.contain("excelFile"); return; 
                
                expect(text).to.contain(checkboxName);
            });
    }

    uncheckAndVerifySpecificBox(checkboxName: string) {
        let specificCheckboxSelector = `//span[text()="${checkboxName}"]`;
        cy.xpath(specificCheckboxSelector).click();
        
        cy.xpath(this.checkedItemsList)
            .invoke('text')
            .then((text) => {
                if(checkboxName.includes('Word File')) expect(text).to.not.contain("wordFile"); return; 
                if(checkboxName.includes('Excel File')) expect(text).to.not.contain("excelFile"); return; 
                
                expect(text).to.not.contain(checkboxName);
            });
    }

    checkAllBoxes() {
        let uncheckboxSelector  = this.generalUncheckboxSelector + `[1]`;
        cy.xpath(uncheckboxSelector).should('be.visible')
                                                .click();
        cy.wait(3000);
    }

    uncheckAllBoxes() {
        let checkboxSelector  = this.generalCheckedboxSelector + `[1]`;
        cy.xpath(checkboxSelector).should('be.visible')
                                                .click();
        
        cy.wait(3000);
    }

    isAllBoxesChecked() {
        let count = 0;
        cy.xpath(this.generalCheckedboxSelector + `[*]`).each(($el) => {
            expect($el).to.have.class('rct-icon-check');
            if ($el.hasClass('rct-icon-check')) count++;
        }).then(() => {
            expect(count).to.equal(17); 
        });
    }

    isAllBoxesUnchecked() {
        let count = 0;
        cy.xpath(this.generalUncheckboxSelector + `[*]`).each(($el) => {
            expect($el).to.have.class('rct-icon-uncheck');
            if ($el.hasClass('rct-icon-uncheck')) count++;
        }).then(() => {
            expect(count).to.equal(17); 
        });
    }

}

export default new CheckBoxPage();
