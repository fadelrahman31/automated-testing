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
        cy.contains('Course List')
        cy.contains('My Courses')
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Profile')
        cy.contains('Subscriptions')
        cy.contains('Search campuses')
        cy.contains('Logout')
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        //Upsell Banner
        cy.get('.UpsellBanner--2x5p2')
        cy.contains('Pilih Paket')
        cy.contains('Coba Gratis Dulu')
        //Notification Banner
        cy.get('.DashboardModuleTemplate__Banner--1GLG-')
        cy.contains('Subscribe now')
    }),
    it("#3 Avatar Button Menu Functionality", () => {
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Profile').click()
        cy.url().should('include', '/en/settings/profile')
        cy.contains('Home').click()
        cy.url().should('include', '/dashboard')
        cy.wait(1000)
        cy.get('.AvatarMenu__Toggle--kz3Cn').click()
        cy.contains('Subscriptions').should('have.attr', 'target', '_blank')
    }),
    it("#4 ", () => {
      
    })
})