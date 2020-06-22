describe("Test Quipper Home Page - Login Page Transition", () => {
    it('#1 Successfully Loads', () => {
        //cy.visit('https://www.quipper.com/id/')
        cy.visit(Cypress.env('quipper_home_page'))
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
      //cy.visit('https://subscribe.quipper.com/signup/id')
      cy.visit(Cypress.env('quipper_subscribe'))
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
      cy.get('[name = "submit"]')
  }),
  it("#3 Input Validation - Create Button", () => {
    cy.get('.submit-btn').click()
    cy.contains('First name is required.')
    cy.contains('Last name is required.')
    cy.contains('Grade is required.')
    cy.contains('Phone number is required.')
    cy.contains('Username is required.')
    cy.contains('Password is required.')
    cy.contains('Password confirmation is required.')
}),
  it("#4 Location Selector", () => {
      cy.get('[name="country"]')
        .select('id')
      cy.url().should('include', '/signup/id')
      cy.get('[name="country"]')
        .select('mx')
      cy.url().should('include', '/signup/mx')
  }),
  it("#5 Input Field Validation - Name", () => {
      cy.get('[name="firstName"]')
        .type('23;')
      cy.contains('First name cannot include numbers and symbols.')
      cy.get('[name="firstName"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="lastName"]')
        .type('23,$')
      cy.contains('Last name cannot include numbers and symbols.')
      cy.get('[name="lastName"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="firstName"]')
        .type('23;')
      cy.get('[name="lastName"]')
        .type('23,$')
      cy.contains('First name cannot include numbers and symbols.')
      cy.contains('Last name cannot include numbers and symbols.')
      cy.get('[name="firstName"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="lastName"]')
        .type('{del}{selectall}{backspace}')
  }),
  it("#6 Input Field Validation - Phone", () => {
      cy.get('[name="phoneNumber"]')
        .type('23#a')
      cy.contains('Phone number should only contain numbers.')
      cy.get('[name="phoneNumber"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="phoneNumber"]')
        .type('23')
      cy.contains('Phone number must be between 9-14 digits.')
      cy.get('[name="phoneNumber"]')
        .type('{del}{selectall}{backspace}')
  }),
  it("#7 Input Field Validation - Email", () => {
      cy.get('[name="email"]')
        .type('1213aSAS;;;;')
      cy.contains('Please enter email in the correct format.')
      cy.get('[name="email"]')
        .type('{del}{selectall}{backspace}')
  }),
  it("#8 Input Field Validation - Username", () => {
      cy.get('[name="username"]')
        .type('sd')
      cy.contains('Username must be between 4-20 characters.')
      cy.get('[name="username"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="username"]')
        .type('##fersgrv,,;;')
      cy.contains('Username can only have lower case letters, numbers and the following characters: - _ .')
      cy.get('[name="username"]')
        .type('{del}{selectall}{backspace}')
  }),
  it("#9 Input Field Validation - Password", () => {
      cy.get('[name="password"]')
        .type('as')
      cy.contains('Password must be a combination of letters and numbers.')
      cy.get('[name="password"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="password"]')
        .type('12')
      cy.contains('Password must be a combination of letters and numbers.')
      cy.get('[name="password"]')
        .type('{del}{selectall}{backspace}')
      cy.get('[name="password"]')
        .type('as12')
      cy.contains('Password must be at least 6 characters.')
      cy.get('[name="password"]')
        .type('{del}{selectall}{backspace}')
  }),
  it("#10 Input Field Validation - Password Confirmation", () => {
      cy.get('[name="password"]')
        .type('as12as12as12')
      cy.get('[name="passwordConfirmation"]')
        .type('asdasd')
      cy.contains('The password and confirmation password do not match.')
      cy.get('[name="password"]')
        .type('{del}{selectall}{backspace}')
        cy.get('[name="passwordConfirmation"]')
        .type('{del}{selectall}{backspace}')
  }),
  it("#11 Input Field Validation - School Membership Number", () => {
      cy.get('[name="membership-checkbox"]')
        .check({ force: true }).should('be.checked')
      cy.get('[name="organizationMembershipCode"]')
      cy.get('[name="membership-checkbox"]')
        .uncheck({ force: true }).should('not.be.checked')
  }),
  it("#12 Transition to Login Page", () => {
      cy.contains('Log In').click()
      cy.url().should('include', '/en/login')
  })
})