describe("Test Quipper Home Page", () => {
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
    it('#3 Move to Login Page', () => {
        cy.contains('Login').click()
        cy.url().should('include', '/en/login')
    })
}),
describe("Test Sign Up Page", () => {
  it("#1 Successfully Loads", () => {
      cy.visit('https://subscribe.quipper.com/signup/id')
  }),
  it('#2 Showing The Correct Components', () => {
      cy.contains('Select your location')
      cy.get('[name= "country"]')
      cy.get('.fb-button')
      cy.get('[name= "firstName"]')
      cy.get('[name= "lastName"]')
      cy.get('[name= "gradeLevel"]')
      cy.get('[name = "phoneNumber"]')
      cy.get('[name = "email"]')
      cy.get('[name = "username"]')
      cy.get('[name = "password"]')
      cy.get('[name = "passwordConfirmation"]')
  })
})