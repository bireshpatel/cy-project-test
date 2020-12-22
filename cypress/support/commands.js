Cypress.Commands.add('appLogin', (emailID, password) => {
    cy.get('input#Email.email').type(emailID);
    cy.get('input#Password.password').type(password);
    cy.get('.login-button').click();
 })

Cypress.Commands.add('clickLogout', () => {
    cy.contains('Login').should('not.exist')
    cy.contains('Log out').click()
})