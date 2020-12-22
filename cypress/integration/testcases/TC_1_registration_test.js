import registrationPage from '../../support/page_objects/registrationpage';
import registerresultPage from '../../support/page_objects/registerresultpage';
import util from '../../support/common/util';

describe('User Registration', () => {
    before(function () {
            cy.fixture('user-info').then(function (data) {
            this.data = data;
        })
   })

    it('Registration Functionality - Create User', function() {

        const registration_page = new registrationPage();
        const utility = new util();
        const resgisterresult = new registerresultPage();

        var firstName = utility.string_ShortString();
        var lastName = utility.string_ShortString();
        var emailID = utility.string_Alpha_Numeric() + '@email.com';
        var password = this.data.password;

        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
        registration_page.getRegistrationButton().click();
        registration_page.getFirstName().type(firstName);
        registration_page.getLastName().type(lastName);
        registration_page.findGenderRadioButton();
        registration_page.getGender().check(this.data.male)
        registration_page.getGender().check(this.data.female)
        registration_page.getBirthDate().select(utility.getRandomNumber('30').toString())
        registration_page.getBirthMonth().select(utility.getRandomNumber('12').toString())
        registration_page.getBirthYear().select('1990')
        registration_page.getEmailID().type(emailID);
        registration_page.getCompany().type(this.data.companyName);
        registration_page.getNewsLetter().check();
        registration_page.getPassword().type(password);
        registration_page.getConfirmPassword().type(this.data.password);
        registration_page.getRegisterButton().click();
        resgisterresult.getRegistrationConfirmationText().should('be.visible').contains('Your registration completed')
        cy.clickLogout();
        cy.writeFile('cypress/fixtures/liveData.json',
            {firstName: firstName, lastName: lastName, emailID: emailID, password: password})
    })
})