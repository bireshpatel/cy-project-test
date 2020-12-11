import loginPage from '../../support/page_objects/loginpage';
import homePage from '../../support/page_objects/homepage';
import shoppingPage from '../../support/page_objects/shopping';

describe('Product Search & add to cart functionality', () => {
    const home_Page = new homePage();
    const shopping_Page = new shoppingPage();
    before(function () {
            cy.fixture('user-info').then(function (data) {
            this.data = data;
        })
            cy.fixture('liveData').then(function (dataLive) {
            this.dataLive = dataLive;
        })
   })

    it('Launch browser & Login ', function() {
        const login_Page = new loginPage();
        cy.visit('https://demo.nopcommerce.com/')
        login_Page.getEmailText().click();
        cy.appLogin(this.dataLive.emailID, this.dataLive.password);
        login_Page.getPasswordText().should('be.visible').contains('Log out')
    })

    it('Enter text in search box', function() {
        home_Page.getSearchStoreTextBox().type("laptop");
    })

    it('Click on Search button', function() {
        home_Page.getSearchButton().click();
    })

    it('Click on add to cart', function() {
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click();
    })

    it('Go to Shopping cart and add quantity 2', function() {
        shopping_Page.getCartQty().contains('(1)').should('be.visible');
        shopping_Page.getCartButton().contains('Shopping cart').click();
        shopping_Page.getQtyTextBox().clear().type('2');
        shopping_Page.getUpdateButton().should('be.enabled').click();
    })

    it('Verify the total amount', function() {
        shopping_Page.getTotalPrice().invoke('text').then(amountText => {
            expect(amountText.trim()).equal('$3,000.00')
       })
    })
})