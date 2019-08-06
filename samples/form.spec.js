describe('Form test sample', () => {
  
  it('Can fill a form and click on login button', () => {

    cy.get('input[name="username"]').type('user123');
    cy.get('input[name="password"]').type('passw0rd');
    cy.get('.login-button').click();
    // ...
  });

});

