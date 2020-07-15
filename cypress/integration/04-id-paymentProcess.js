describe("Test Payment Process", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('quipper_login_page'))
        cy.get('[aria-label="Username or email"]')
          .type(Cypress.env('uname_testing'))
        cy.get('[aria-label="Password"')
          .type(Cypress.env('pword_testing'))
        cy.contains('Log In').click()
        //cy.url().should('include', '/dashboard')
    })

    it("#1 Payment Method Page Successfully Loads", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.url().should('include', '/payment/methods')
    }),
    it("#2 Payment Method Page Showing Correct Components", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.wait(1000)
        //Test the showed components
        cy.contains('Payment Method').should('have.class', 'Step__active')
        cy.contains('Payment Information').should('have.class', 'Step')
        cy.get('.HeaderTitle__back')
        cy.contains('Kiosk').click()
        cy.get('[value="ALFAMART"]')
        cy.get('[value="INDOMARET"]')
        cy.contains('Bank Transfer').click()
        cy.get('[value="BNI"]')
        cy.get('[value="MANDIRI"]')
        cy.get('[value="PERMATA"]')
        cy.get('[value="DANAMON"]')
        cy.get('[value="CIMBVA"]')
        cy.get('[value="BIIVA"]')
        cy.get('[value="BANK_OTHER"]')
        cy.get('.Input--disabled')
        cy.contains('Apply')
        cy.contains('Continue Payment')

    }),
    it("#3 Validate Alfamart as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })

        //Choose Alfamart as Payment Method
        cy.get('[value="ALFAMART"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Alfamart")
        })
    }),
    it("#4 Validate Indomaret as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })

        //Choose Alfamart as Payment Method
        cy.get('[value="INDOMARET"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Indomaret")
        })
    }),
    it("#5 Validate BNI as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()

        //Choose Alfamart as Payment Method
        cy.get('[value="BNI"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Bank BNI")
        })
    }),
    it("#6 Validate Mandiri as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()
        
        //Choose Alfamart as Payment Method
        cy.get('[value="MANDIRI"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Bank Mandiri")
        })
    }),
    it("#7 Validate Permata Bank as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()
        
        //Choose Alfamart as Payment Method
        cy.get('[value="PERMATA"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Bank Permata")
        })
    }),
    it("#8 Validate Danamon as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()
        
        //Choose Alfamart as Payment Method
        cy.get('[value="DANAMON"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Bank Danamon")
        })
    }),
    it("#9 Validate CIMB Niaga as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()
        
        //Choose Alfamart as Payment Method
        cy.get('[value="CIMBVA"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Bank CIMB Niaga")
        })
    }),
    it("#10 Validate Maybank as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()
        
        //Choose Alfamart as Payment Method
        cy.get('[value="BIIVA"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Bank Maybank")
        })
    }),
    it("#11 Validate Other Bank as Payment Method", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Bank Transfer').click()
        
        //Choose Alfamart as Payment Method
        cy.get('[value="BANK_OTHER"]').click()
        cy.get('.PaymentMethodName').then(($chosenMethod) => {
            const chosen = $chosenMethod.text()
            cy.wrap(chosen).as('chosenMethod')
        })
        cy.get('@chosenMethod').then(chosenMethod => {
            expect(chosenMethod).to.equal("Other Banks")
        })
    }),
    it("#12 Test on Transitions to Payment Inforation Page", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        
        //On the Payment Method Page
        cy.contains('Continue Payment').click()

        //On the Payment Information Page
        cy.url().should('include', '/payment/information')
    }),
    it("#13 Payment Information Page Showing Correct Components", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })

        //On the Payment Method Page
        cy.contains('Continue Payment').click()
        
        //On the Payment Information Page
        cy.contains('Payment Method').should('have.class', 'Step')
        cy.contains('Payment Information').should('have.class', 'Step__active')      
        cy.contains('Payer Name')
        cy.get('[name = "name"]')
        cy.contains('Payer Email Address')
        cy.get('[name = "email"]')
        cy.contains('Payer Phone Number')
        cy.get('[name = "phone"]')
        cy.contains('Complete Payment')
    }),
    it("#14 Input Field Validation - Email", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })

        //On the Payment Method Page
        cy.contains('Continue Payment').click()

        //On the Payment Information Page
        cy.contains('Email is required.')
        cy.get('[name="email"]')
          .type('1213aSAS;;;;')
        cy.contains('Please enter email in the correct format.')
        cy.get('[name="email"]')
          .type('{del}{selectall}{backspace}')
        cy.contains('Email is required.')
    })
    
})