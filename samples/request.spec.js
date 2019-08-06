describe('Request test sample', () => {

  beforeEach(() => {
    cy.server();
    cy.route('GET', '/profile').as('profile'); // Declare an alias for the route '/profile'
  });

  it('Should have a success response after visiting the page', () => {
    cy.visit('/'); // Visit the main page of your application
    cy.wait('@profile');
    cy.get('@profile').then((xhr) => {
      expect(xhr.status).to.eq(200);
    });
  });

});

