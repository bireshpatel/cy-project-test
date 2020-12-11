class shoppingPage{

    getCartButton(){
        return cy.get('span[class="cart-label"]')
    }

    getCartQty(){
        return cy.get('span[class="cart-qty"]')
    }

    getQtyTextBox(){
        return cy.get('.quantity > input')
    }

    getUpdateButton(){
        return cy.get('.update-cart-button');
    }

    getTotalPrice(){
        return cy.get('span.value-summary:nth-child(1) > strong');
    }
}
export default shoppingPage