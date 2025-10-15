class ClickPage {

    singleClickButton = '//button[text()="Click Me"]';
    doubleClickButton = '//button[text()="Double Click Me"]';
    rightClickButton = '//button[text()="Right Click Me"]';

    singleClickConfirmMessage = '//p[@id="dynamicClickMessage"]';
    doubleClickConfirmMessage = '//p[@id="doubleClickMessage"]';
    rightClickConfirmMessage = '//p[@id="rightClickMessage"]';
    
    //Methods
    checkAllClicks() {
        this.verifySingleClick();
        this.verifyDoubleClick();
        this.verifyRightClick();
    }

    verifySingleClick() {
        cy.xpath(this.singleClickButton).click();

        cy.xpath(this.singleClickConfirmMessage).should('be.visible').and('have.text', 'You have done a dynamic click');
        
    }

    verifyDoubleClick() {
        cy.xpath(this.doubleClickButton).dblclick();

        cy.xpath(this.doubleClickConfirmMessage).should('be.visible').and('have.text', 'You have done a double click');
    }

    verifyRightClick() {
        cy.xpath(this.rightClickButton).rightclick();

        cy.xpath(this.rightClickConfirmMessage).should('be.visible').and('have.text', 'You have done a right click');
    }

    verifyWrongClicks() {
        cy.xpath(this.doubleClickButton).rightclick();
        cy.xpath(this.rightClickButton).click();
        cy.xpath(this.rightClickButton).dblclick();

        cy.xpath(this.rightClickConfirmMessage).should('not.exist');
        cy.xpath(this.doubleClickConfirmMessage).should('not.exist');
        cy.xpath(this.singleClickConfirmMessage).should('not.exist');
        
    }

}

export default new ClickPage();