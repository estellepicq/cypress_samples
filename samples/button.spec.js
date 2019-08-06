describe('Button test sample', () => {

  it('Show a click-me button', () => {
    cy.get('#clickMe')
      .should('be.visible');
  });

  it('Should display a message when button was clicked', () => {
    cy.get('#clickMe')
      .click();
    cy.contains('You just clicked the button');
  });

});

