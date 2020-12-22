class homePage{

    getSearchStoreTextBox(){
        return cy.get('.search-box-text')
    }

    getSearchButton(){
        return cy.get('#small-search-box-form > .button-1')
    }
}
export default homePage