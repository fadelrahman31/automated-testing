describe("Test Subscribe Process on Unpaid Order", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname2_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword2_testing'))
        cy.contains('Log In').click()
        //cy.url().should('include', '/dashboard')
    })

    it("#1 Dashboard Showing the Correct Components", () => {
        cy.wait(1000)
        cy.contains('Complete your payment to access the learning materials')
        cy.contains('Check your order')
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Subscriptions').should('have.attr', 'href', Cypress.env('quipper_subscription'))
    }),
    it("#2 Access Subscription Page", () => {
        cy.visit(Cypress.env('quipper_subscription'))
        cy.url().should('include', '/subscriptions')
        //cy.contains('Subscriptions').should('have.attr', 'href', '/subscriptions')
        cy.contains('Orders').should('have.attr', 'href', '/orders')
        cy.contains('Redeem Activation Code').should('have.attr', 'href', '/activationcode')
        cy.contains('You do not have any active plans.')
        cy.get('.button.is-info').should('have.attr', 'href', '/plans')
        cy.contains('History').click()
        cy.wait(2000)
        cy.url().should('include', '/subscriptions/history')
    }),
    it("#3 Access Order Page", () => {
        cy.visit(Cypress.env('quipper_subscription'))
        cy.url().should('include', '/subscriptions')

    })

    
})