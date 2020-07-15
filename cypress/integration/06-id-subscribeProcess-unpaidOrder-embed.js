describe("Test Subscribe Process on Unpaid Order - EMBED Page", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname2_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword2_testing'))
        cy.contains('Log In').click()
        //cy.url().should('include', '/dashboard')
    })

    it("#1 Access Order Embed Page", () => {
      cy.visit(Cypress.env('quipper_latest_order_embed'))
      cy.wait(1000)
      cy.url().should('include', '/embed/orders')
  })
    
})