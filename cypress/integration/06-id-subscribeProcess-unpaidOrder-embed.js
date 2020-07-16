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
    }),
    it("#2 Validate on Data Consistency from /Orders Page to Embed Payment Preview Page", () => {
        cy.visit(Cypress.env('quipper_orders'))
        cy.wait(1000)
        
        //Get Ordered Plan Title
        cy.get('.order-plan').then(($title) => {
            const titel = $title.text()
            cy.wrap(titel).as('orderedPlanName')
        })

        //Get Ordered Plan Price
        cy.get('.order-price').then(($price) => {
            const harga = $price.text()
            cy.wrap(harga).as('orderedPlanPrice')
        })

        //Visit Embed Payment Preview Page
        cy.visit(Cypress.env('quipper_latest_order_embed'))
        cy.wait(1000)

        cy.get('@orderedPlanName').then(orderedPlanName => {
          cy.get('@orderedPlanPrice').then(orderedPlanPrice => {
            cy.get('.AccordionSection__title').then(($content) => {
              const teks = $content.text()
              expect(teks).to.equal(orderedPlanName)
            })

            cy.get('.Amount__final').then(($harga) => {
              const price = $harga.text()
              expect(price).to.equal(orderedPlanPrice)
            })
          })
        })
    })
    
})