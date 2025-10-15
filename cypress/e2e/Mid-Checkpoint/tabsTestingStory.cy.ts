/// <reference types="cypress" />
import tabTestPage from '../../page-objects/MidCheckPointPages/tabTestPage';

describe('Tabs And Open Scenarios', () => {
    beforeEach(() => {
        cy.visit('selectable');
    })
  
    it.only('Verify Grid List', () => {
        tabTestPage.verifyItemsOnGridlList();
    })

    it('Verify Vertical List', () => {
        tabTestPage.verifyItemsOnVerticalList();
    })
})
  