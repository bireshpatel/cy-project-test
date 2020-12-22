describe('API testing with Cypress', () => {

     it('GET Request Demonstrations', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;
        expect(response.body.data[0].first_name).to.not.be.null;
        })
     })

    it('POST Request Demonstrations', () => {
        var info = {
            'name':'Hary Potter',
            'job':'Fixture'
        }
        cy.request('POST', 'https://reqres.in/api/users', info).then((response) => {
            expect(response).to.have.property('status', 201);
            expect(response.body.name).equal(info.name);
        })
    })

    it('PUT Request Demonstrations', () => {
        var info = {
            'name':'Haryy Potter',
            'job':'Fixture'
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', info).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body.name).equal(info.name);
        })
    })

    it('Delete Request Demonstrations', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response).to.have.property('status', 204);
        })
    })
})