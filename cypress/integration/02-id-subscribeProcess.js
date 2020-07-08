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

    it("#1 Load Page Successfully", () => {
        cy.visit(Cypress.env('quipper_dashboard'))
    }),
    it("#2 Dashboard Showing Correct Components", () => {
        cy.contains('Home')
        cy.wait(500)
        cy.contains('Course List')
        cy.contains('My Courses')
        cy.wait(500)
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.wait(500)
        cy.contains('Profile')
        cy.contains('Subscriptions')
        cy.contains('Search campuses')
        cy.contains('Logout')
        cy.wait(500)
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.wait(500)
        //Upsell Banner
        cy.get('.UpsellBanner--2x5p2')
        cy.contains('Pilih Paket')
        cy.contains('Coba Gratis Dulu')
        //Notification Banner
        cy.get('.DashboardModuleTemplate__Banner--1GLG-')
        cy.contains('Subscribe now')
    }),
    it("#3 Avatar Button Menu Functionality", () => {
        cy.wait(1000)
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Profile').click()
        cy.url().should('include', '/en/settings/profile')
        cy.contains('Home').click()
        cy.url().should('include', '/dashboard')
        cy.wait(1000)
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Subscriptions').should('have.attr', 'target', '_blank')
    }),
    it("#4 Upsell Banner Functionality",() => {
        cy.contains('Pilih Paket').should('have.attr', 'href', Cypress.env('quipper_upsell_short'))
        cy.visit(Cypress.env('quipper_upsell'))
        cy.url().should('include','/plans')
    }),
    it("#5 Susbcribe Now Banner Functionality", () => {
        cy.contains('Subscribe now').should('have.attr', 'href', Cypress.env('quipper_plans'))
        cy.visit(Cypress.env('quipper_plans'))
        cy.url().should('include', '/plans')
    }),
    it("#6 Select a Plan Page Functionality", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.url().should('include','/plans')

        //Test the `Select a Plan` Page
        cy.get('.PricingPlansWeb__redeem_activation')
        cy.get('[id="category-btn-SMA"]').click()
        cy.get('[id="category-2"]').should('have.class', 'PricingPlans')
        cy.get('[id="category-btn-SMP"]').click()
        cy.get('[id="category-1"]').should('have.class', 'PricingPlans')
        cy.get('[id="category-btn-SMA"]').click()
        cy.get('.PricingPlansWeb__redeem_activation').should('have.attr', 'href', '/activationcode')
        cy.get('.PricingPlansWeb__redeem_activation').click()
        cy.url().should('include', 'activationcode')
        cy.contains('Subscriptions').click()
        cy.url().should('include', '/plans')

    }),
    it("#7 Subscribe Button Functionality ", () => {   
        cy.visit(Cypress.env('quipper_plans'))
        cy.url().should('include','/plans')

        //Test `Subscribe` Button Each Pricing Plan
        cy.get('[id="1808"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Back').click()
        
        cy.wait(1000)
        cy.get('[id="1809"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Back').click()
        
        cy.wait(1000)
        cy.get('[id="1810"]').within(() => {
            cy.contains('Subscribe').click()
        })
        cy.contains('Back').click()
    }),
    it("#8 Paket Intensif SMA Integration with Payment Method Page", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.url().should('include','/plans')

        //Test the `Payment Method Page` Integration with Pricing 
        cy.get('[id="1808"]').within(() => {
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

        cy.url().should('include', '/payment/methods')
        //Get the Pricing Plan Title from Payment Method Page
        cy.get('.SubscriptionPlanName').then(($judul) => {
            const text = $judul.text()
            cy.wrap(text).as('planNamePayment')
        })
        //Get the Pricing Plan Price from Payment Method Page
        cy.get('.Amount__final').then(($harga) => {
            const hrg = $harga.text()
            cy.wrap(hrg).as('planPricePayment')
        })

        //Validate on Pricing Plan Title Data
        cy.get('@planName').then(planName => {
            cy.get('@planNamePayment').then(planNamePayment => {
                expect(planName).to.equal(planNamePayment)
            })        
        }) 
        //Validate on Pricing Plan Price Data
        cy.get('@planPrice').then(planPrice => {
            cy.get('@planPricePayment'). then(planPricePayment => {
                expect(planPrice).to.equal(planPricePayment)
            })
        }) 
    }),
    it("#9 Paket Regular SMA Integration with Payment Method Page", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.url().should('include','/plans')

        //Test the `Payment Method Page` Integration with Pricing 
        cy.get('[id="1809"]').within(() => {
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

        cy.url().should('include', '/payment/methods')
        //Get the Pricing Plan Title from Payment Method Page
        cy.get('.SubscriptionPlanName').then(($judul) => {
            const text = $judul.text()
            cy.wrap(text).as('planNamePayment')
        })
        //Get the Pricing Plan Price from Payment Method Page
        cy.get('.Amount__final').then(($harga) => {
            const hrg = $harga.text()
            cy.wrap(hrg).as('planPricePayment')
        })

        //Validate on Pricing Plan Title Data
        cy.get('@planName').then(planName => {
            cy.get('@planNamePayment').then(planNamePayment => {
                expect(planName).to.equal(planNamePayment)
            })        
        }) 
        //Validate on Pricing Plan Price Data
        cy.get('@planPrice').then(planPrice => {
            cy.get('@planPricePayment'). then(planPricePayment => {
                expect(planPrice).to.equal(planPricePayment)
            })
        }) 
    }),
    it("#10 Paket Intensif SMA + 3 Bulan Masterclass Integration with Payment Method Page", () => {
        cy.visit(Cypress.env('quipper_plans'))
        cy.url().should('include','/plans')

        //Test the `Payment Method Page` Integration with Pricing 
        cy.get('[id="1810"]').within(() => {
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

        cy.url().should('include', '/payment/methods')
        //Get the Pricing Plan Title from Payment Method Page
        cy.get('.SubscriptionPlanName').then(($judul) => {
            const text = $judul.text()
            cy.wrap(text).as('planNamePayment')
        })
        //Get the Pricing Plan Price from Payment Method Page
        cy.get('.Amount__final').then(($harga) => {
            const hrg = $harga.text()
            cy.wrap(hrg).as('planPricePayment')
        })

        //Validate on Pricing Plan Title Data
        cy.get('@planName').then(planName => {
            cy.get('@planNamePayment').then(planNamePayment => {
                expect(planName).to.equal(planNamePayment)
            })        
        }) 
        //Validate on Pricing Plan Price Data
        cy.get('@planPrice').then(planPrice => {
            cy.get('@planPricePayment'). then(planPricePayment => {
                expect(planPrice).to.equal(planPricePayment)
            })
        }) 
    })
})