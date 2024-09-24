// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Custom command to log in
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
// cypress/support/commands.js
Cypress.Commands.add('Login',(email,password)  => {
    const loginUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    cy.visit(loginUrl);
    cy.get(':nth-child(4) > .group > .flex > .tap-highlight-transparent').type("malik.murtaza+003@zweidevs.com");
    cy.get(':nth-child(5) > .group > .flex > .tap-highlight-transparent').type("Malik123@");
    cy.get(':nth-child(7) > .z-0').click();
    cy.url().should('include', 'com/home');
  });

    


