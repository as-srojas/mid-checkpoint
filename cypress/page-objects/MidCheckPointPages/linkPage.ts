class LinkPage {

    locator = '//h5[text()="Forms"]';
    
    //Methods
    writeMethod(name: string) {
        cy.get(this.locator).type(name);
    }

}

export default new LinkPage();