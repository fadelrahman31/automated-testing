describe("Test Payment Process on Unpaid Order", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname2_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword2_testing'))
        cy.contains('Log In').click()
        //cy.url().should('include', '/dashboard')
    })

    //TO-DO


})