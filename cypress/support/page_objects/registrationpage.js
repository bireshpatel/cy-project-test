class registrationPage{

    getRegistrationButton(){
        return cy.get('.register-button')
    }

    getGender(){
        return cy.get('[type=radio]')
    }

    findGenderRadioButton(){
        return cy.get('[id=gender]').find('span')
    }

    getFirstName(){
        return cy.get('#FirstName')
    }

    getLastName(){
        return cy.get('#LastName')
    }

    getBirthDate(){
        return cy.get('select[name="DateOfBirthDay"]')
    }

    getBirthMonth(){
        return cy.get('select[name="DateOfBirthMonth"]')
    }

    getBirthYear(){
        return cy.get('select[name="DateOfBirthYear"]')
    }

    getEmailID(){
        return cy.get('#Email')
    }

    getCompany(){
        return cy.get('#Company')
    }

    getNewsLetter(){
        return cy.get('input#Newsletter')
    }

    getPassword(){
        return cy.get('input#Password')
    }

    getConfirmPassword(){
        return cy.get('input#ConfirmPassword')
    }

    getRegisterButton(){
        return cy.get('#register-button')
    }
}
export default registrationPage