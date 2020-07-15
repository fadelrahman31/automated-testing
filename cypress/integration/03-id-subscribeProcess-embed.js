describe("Test Subscribe Process - EMBED Page", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword_testing'))
        cy.contains('Log In').click()
        cy.url().should('include', '/dashboard')
    })

    it("#1 Select a Plan Embed Page Showing Components Correctly", () => {
        cy.visit(Cypress.env('quipper_plans_embed'))
        cy.get('[id="category-btn-SMA"]').click()
        cy.get('[id="category-2"]').should('have.class', 'PricingPlans')
        cy.get('[id="category-btn-SMP"]').click()
        cy.get('[id="category-1"]').should('have.class', 'PricingPlans')
        cy.get('[id="category-btn-SMA"]').click()
        
    }),
    it("#2 Subscribe Button Functionality", () => {
        cy.visit(Cypress.env('quipper_plans_embed'))
        cy.url().should('include', '/embed/plans')

        //Test Subscribe Button Each Pricing Plan
        cy.get('[id="1819"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.get('.PaymentHeader__icon').click()
        
        cy.wait(1000)
        cy.get('[id="1818"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.get('.PaymentHeader__icon').click()
        
        cy.wait(1000)
        cy.get('[id="1820"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.get('.PaymentHeader__icon').click()
    }),
    it("#3 Paket Intensif SMA Integration with Payment Method Page", () => {
        cy.visit(Cypress.env('quipper_plans_embed'))
        cy.url().should('include', '/embed/plans')

        cy.get('[id="1819"]').within(() => {
            //Get the Pricing Plan Title from Select a Plan Page
            cy.get('.PricingPlan__title').then(($title) => {
                const txt = $title.text()
                cy.wrap(txt).as('planName')
            })            
            //Get the Price from Select a Plan page
            cy.get('.PricingPlan__price').then(($price) => {
                const prc = $price.text()
                cy.wrap(prc).as('planPrice')
            })
            cy.contains('Subscribe').click()
        })

        cy.url().should('include', '/embed/payment/methods')
        cy.get('.gtm-app-continue-payment').click()

        cy.get('@planName').then(planName => {
            cy.get('@planPrice').then(planPrice => {
                cy.get('.Invoice').should('contain', planName)
                cy.get('.Invoice').should('contain', planPrice)
            })
        })
    }),
    it("#4 Paket Regular SMA Integration with Payment Method Page", () => {
        cy.visit(Cypress.env('quipper_plans_embed'))
        cy.url().should('include', '/embed/plans')

        cy.get('[id="1818"]').within(() => {
            //Get the Pricing Plan Title from Select a Plan Page
            cy.get('.PricingPlan__title').then(($title) => {
                const txt = $title.text()
                cy.wrap(txt).as('planName')
            })            
            //Get the Price from Select a Plan page
            cy.get('.PricingPlan__price').then(($price) => {
                const prc = $price.text()
                cy.wrap(prc).as('planPrice')
            })
            cy.contains('Subscribe').click()
        })

        cy.url().should('include', '/embed/payment/methods')
        cy.get('.gtm-app-continue-payment').click()

        cy.get('@planName').then(planName => {
            cy.get('@planPrice').then(planPrice => {
                cy.get('.Invoice').should('contain', planName)
                cy.get('.Invoice').should('contain', planPrice)
            })
        })
    }),
    it("#5 Paket Intensif SMA + 3 Bulan Masterclass Integration with Payment Method Page", () => {
        cy.visit(Cypress.env('quipper_plans_embed'))
        cy.url().should('include', '/embed/plans')

        cy.get('[id="1820"]').within(() => {
            //Get the Pricing Plan Title from Select a Plan Page
            cy.get('.PricingPlan__title').then(($title) => {
                const txt = $title.text()
                cy.wrap(txt).as('planName')
            })            
            //Get the Price from Select a Plan page
            cy.get('.PricingPlan__price').then(($price) => {
                const prc = $price.text()
                cy.wrap(prc).as('planPrice')
            })
            cy.contains('Subscribe').click()
        })

        cy.url().should('include', '/embed/payment/methods')
        cy.get('.gtm-app-continue-payment').click()

        cy.get('@planName').then(planName => {
            cy.get('@planPrice').then(planPrice => {
                cy.get('.Invoice').should('contain', planName)
                cy.get('.Invoice').should('contain', planPrice)
            })
        })
    })

})