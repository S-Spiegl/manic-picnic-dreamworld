//this is connecting to the wrong database - needs to connect to test database 
//also needs to drop collection before each test
//something like chitter with ENV[ENVIRONMENT] == "test"?
//could I specify it in the app.js? 

import mongoose from "mongoose";
// import User from '../../models/user.js'

require('../mongodb_helper');

describe('New user', () => {
  it('can signup to the website', () => {
      
    cy.visit('localhost:3000');
    
    cy.get('[data-cy="signup-username"]').type('Joe');
    cy.get('[data-cy="signup-email"]').type('joe@bob.com');
    cy.get('[data-cy="signup-password"]').type('guest');
    cy.get('[data-cy="signup-button"]').click();

    // cy.get('[data-cy="login-email"]').type('bob@bob.com');
    // cy.get('[data-cy="login-password"]').type('guest');
    // cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="navbar-welcome"]').should('contain', 'Hi, Joe');
  });
})