class TabTestPage {

    listTab = '//a[@id="demo-tab-list"]';
    gridTab = '//a[@id="demo-tab-grid"]';

    verticalList = '//ul[@id="verticalListContainer"]';
    gridList = '//div[@id="gridContainer"]';
    
    //Methods
    verifyItemsOnVerticalList() {
        cy.xpath(this.listTab).click({force:true});
        
        cy.xpath(this.verticalList+'//li').each(($el) => {
        cy.wrap($el).click().should('have.class', 'active') });

        cy.xpath(this.verticalList+'//li').each(($el) => {
        cy.wrap($el).click().should('not.have.class', 'active') });
    }

    verifyItemsOnGridlList() {
        cy.xpath(this.gridList).click({force:true});
        
        cy.xpath(this.gridList+'//li').each(($el) => {
        cy.wrap($el).click({force:true}).should('have.class', 'active') });

        cy.xpath(this.gridList+'//li').each(($el) => {
        cy.wrap($el).click({force:true}).should('not.have.class', 'active') });
    }

}

export default new TabTestPage();