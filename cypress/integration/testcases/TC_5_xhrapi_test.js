describe('Example to demonstrate API Mocking in Cypress', () => {

    beforeEach(() => {
        cy.server()
        cy.route('GET', '**/tags', 'fixture:tagsResponse.json')
        cy.route('GET', '**/articles*', 'fixture:stubResponse.json')
        cy.visit('https://angular.realworld.io/')
    })

    it('Mock the Tags from the API Response and then validate on UI', () => {
        cy.get('.tag-list')
        .should('contain', 'Learning')
        .and('contain','Cypress')
        .and('contain','XHRTech')

    })

    it('Mock the Article feed from the API Response and then validate on UI', () => {
        cy.get('app-favorite-button.pull-xs-right').contains('10')
        cy.get('.author').contains('LearningXHR')
        cy.get('.preview-link > p').contains('Space to learn and earn!')
    })
})