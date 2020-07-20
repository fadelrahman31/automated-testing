describe("Test Redeem Activation Code Process", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword_testing'))
        cy.contains('Log In').click()
        cy.url().should('include', '/dashboard')
    })

    it("#1 Redeem Activation Code Page Loads Successfully", () => {
        cy.wait(1000)
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Subscriptions').should('have.attr', 'href', Cypress.env('quipper_subscription'))
        cy.visit(Cypress.env('quipper_subscription'))
        cy.url().should('include', '/plans')
        cy.get('.PricingPlansWeb__redeem_activation').click()
        cy.url().should('include', '/activationcode')
    }),
    it("#2 Page Showing Correct Components", () => {
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Subscriptions').should('have.attr', 'href', Cypress.env('quipper_subscription'))
        cy.visit(Cypress.env('quipper_subscription'))
        cy.url().should('include', '/plans')
        cy.get('.PricingPlansWeb__redeem_activation').click()

        //Test the correct components
        cy.get('[name="activationCode"]')
        cy.contains('Activate')
        cy.contains('Back to learning app')
        cy.contains('Subscriptions').should('have.attr', 'href', '/subscriptions')
        cy.contains('Orders').should('have.attr', 'href', '/orders')
    }),
    it("#3 Input Field Validation - Activation Code", () => {
        cy.visit(Cypress.env('quipper_subscription'))
        cy.url().should('include', '/plans')
        cy.get('.PricingPlansWeb__redeem_activation').click()
        cy.wait(1000)

        cy.get('[name = "activationCode"]')
          .type('ASDA123')
        //cy.contains('Activate').should('be.disabled')
        cy.get('[name="activationCode"]')
          .type('{del}{selectall}{backspace}')
        cy.get('[name="activationCode"]')
          .type('ASDASK233SDAS12S')
        //cy.contains('Activate').should('not.be.disabled')
    })
})