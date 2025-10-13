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

        cy.xpath(this.singleClickConfirmMessage).should(($el) => {
            expect($el).to.be.visible;
            expect($el).to.contain("You have done a dynamic click");
        });
    }

    verifyDoubleClick() {
        cy.xpath(this.doubleClickButton).dblclick();

        cy.xpath(this.doubleClickConfirmMessage).should(($el) => {
            expect($el).to.be.visible;
            expect($el).to.contain("You have done a double click");
        });
    }

    verifyRightClick() {
        cy.xpath(this.rightClickButton).rightclick();

        cy.xpath(this.rightClickConfirmMessage).should(($el) => {
            expect($el).to.be.visible;
            expect($el).to.contain("You have done a right click");
        });
    }

}

export default new ClickPage();