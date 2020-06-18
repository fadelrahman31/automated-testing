describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
}),

describe('Test Visit Web Page', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('get')
        cy.contains('children')
        cy.contains('find')
        cy.contains('parent')
        cy.contains('focus')
        cy.contains('type').click()
        //check whether the new URL path from click is correct or not
        cy.url().should('include', '/commands/actions')
        //input to CSS Components Class
        cy.get('.action-email')
          .type('fake@gmail.com')
          .should('have.value', 'fake@gmail.com')
    })
})