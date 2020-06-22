describe("Test Subscribe Process", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword_testing'))
        cy.contains('Log In').click()
        cy.url().should('include', '/dashboard')
    })

    // it("#1 Login to Test Account", () => {
    //     cy.visit(Cypress.env('quipper_login_page'))
    //     cy.get('[aria-label="Username or email"]')
    //       .type(Cypress.env('uname_testing'))
    //     cy.get('[aria-label="Password"')
    //       .type(Cypress.env('pword_testing'))
    //     cy.contains('Log In').click()
    //     cy.url().should('include', '/dashboard')
    // }),
    it("#1 Load Page Successfully", () => {
        cy.visit(Cypress.env('quipper_dashboard'))
    }),
    it("#2 Dashboard Showing Correct Components", () => {
        cy.contains('Home')
        cy.contains('Course List')
        cy.contains('My Courses')
        cy.get('.Avatar--2txd-')
    })
})