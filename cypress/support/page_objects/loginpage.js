class loginPage{

    getEmailText(){
        return cy.get('a[class="ico-login"]')
    }

    getPasswordText(){
        return cy.get('a[class="ico-logout"]')
    }
}
export default loginPage