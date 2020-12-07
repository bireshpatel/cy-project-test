class loginPage{

    getEmailText(){
        return cy.get('input#Email.email')
    }

    getPasswordText(){
        return cy.get('input#Password.password')
    }
}
export default loginPage