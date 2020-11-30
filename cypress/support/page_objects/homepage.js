describe('Complete User Registration', function() => {
    before(function(){
        cy.fixtures('user-info').then(function (data){
        this.data = data;
        })
    })
})