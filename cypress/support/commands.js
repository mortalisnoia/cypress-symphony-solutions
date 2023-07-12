Cypress.Commands.add('getAllEntries', () => {
    cy.request({
        url: 'https://api.publicapis.org/entries',
        failOnStatusCode: false,
        method: "get",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
})

Cypress.Commands.add('filterEntriesByCategoryAndCount', (response, category) => {
    let count = 0;
    let entries = []
    response.body.entries.forEach((data) => {
        if(data.Category == category) {
            count ++
            entries.push(data);
        }
    })
    cy.log('Number of entries found that matches this Category is: ' +count);
    cy.log('Objects of the entries matching the filter in JSON format: ' + JSON.stringify(entries, null, " "))
})