describe('API Tests', () => {

    it('Should return number of entries containing the given Category and their respective JSON Objects', () => {
        cy.getAllEntries().then((response) => {
            cy.filterEntriesByCategoryAndCount(response, 'Authentication & Authorization');
        })
        
    })

})