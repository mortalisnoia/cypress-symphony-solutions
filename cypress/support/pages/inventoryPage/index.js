const inventoryPageElements = require('./elements').elements;

class inventoryPage {

    selectOrderByText(order) {
        cy.get(inventoryPageElements.selectSorting).select(order);
    }

    assertProductsAreOrderedAlphabetically() {
        cy.get('.inventory_item_name').should(($elements) => {
            const strings = Cypress._.map($elements, ($el) => $el.innerText)
            const sorted = Cypress._.sortBy(strings);
            expect(strings).to.deep.equal(sorted); 
        })
    }

    assertProductsAreOrderedAlphabeticallyReversed() {
        cy.get('.inventory_item_name').should(($elements) => {
            const zaOrdered = Cypress._.map($elements, ($el) => $el.innerText);
            const sorted = Cypress._.sortBy(zaOrdered);
            sorted.reverse();
            expect(zaOrdered).to.deep.equal(sorted);
        })
    }

} export default new inventoryPage();