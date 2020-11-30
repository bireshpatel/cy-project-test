import registrationPage from '../../support/page_objects/registrationpage';

describe('User Registration', () => {
    before(function () {
            cy.fixture('user-info').then(function (data) {
            this.data = data;
        })
   })

    it.only('Browse the Page', function() {
        const registration_page = new registrationPage();
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')

        registration_page.getRegistrationButton().click();
        registration_page.getFirstName().type(this.data.firstName);
        registration_page.getLastName().type(this.data.lastName);
        registration_page.findGenderRadioButton();
        registration_page.getGender().check(this.data.male)
        registration_page.getGender().check(this.data.female)
    })
})