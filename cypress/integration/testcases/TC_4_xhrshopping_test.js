describe('Test T-Shirt name with API Mocking in Cypress', () => {

    beforeEach(() => {
        cy.server()
        cy.route('GET', '**/*', 'fixture:productCatalog.json')
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
    })

    it('Mock the T-Shirt Details from the API Response and then validate on UI', () => {
        cy.get('.shelf-item__title').should('contain', 'Cypress XHR Test - T-Shirt')
        cy.get('.shelf-item__price').should('contain', 100.00)
    })
})