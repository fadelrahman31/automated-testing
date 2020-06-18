describe("Test Quipper Home Page - Dashboard", () => {
    it('#1 Successfully Loads', () => {
        cy.visit('https://www.quipper.com/id/')
    }),
    it("#2 Showing the Correct Components", () => {
        cy.contains('Untuk Siswa')
        cy.contains('Untuk Guru')
        cy.contains('Blog')
        cy.contains('Tentang Quipper')
        cy.contains('Login')
        cy.contains('Daftar Sekarang')
    }),
    it('#3 Login to Quipper Video', () => {
        cy.contains('Login').click()
        cy.url().should('include', '/en/login')
        //cy.get('.TextInput--3Y0H3.Login__Input--26jGQ.form-control--Ijqjw')
        cy.get('[aria-label="Username or email"]')
          .type('fadelrahman10')
        cy.get('[aria-label="Password"')
          .type('nararia3-1')
        cy.contains('Log In').click()
        cy.url().should('include', '/dashboard')
    })
})