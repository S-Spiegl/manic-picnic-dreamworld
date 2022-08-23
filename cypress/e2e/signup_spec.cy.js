//this is connecting to the wrong database - needs to connect to test database 
//also needs to drop collection before each test

describe('New user', () => {
  it('can signup to the website', () => {
    cy.visit('localhost:3000');

    cy.get('[data-cy="signup-username"]').type('Bob');
    cy.get('[data-cy="signup-email"]').type('bob@bob.com');
    cy.get('[data-cy="signup-password"]').type('guest');
    cy.get('[data-cy="signup-button"]').click();

    // cy.get('[data-cy="login-email"]').type('bob@bob.com');
    // cy.get('[data-cy="login-password"]').type('guest');
    // cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="navbar-welcome"]').should('contain', 'Hi, Bob');
  });
})