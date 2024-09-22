//import LoginPage from '../pageObjects/LoginPage';
describe('Login Functionality Tests', () => {

  // Test Case 1: Valid login scenario
  it.only('Logs in with valid credentials', () => {
    const loginUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    const email = 'malik.murtaza+308@zweidevs.com';
    const password = 'Malik123@';

    // Visit the login page
    cy.visit(loginUrl);

    // Enter valid email
    cy.get(':nth-child(4) > .group > .flex > .tap-highlight-transparent')
      .type(email);

    // Enter valid password
    cy.get(':nth-child(5) > .group > .flex > .tap-highlight-transparent')
      .type(password);

    // Submit the login form
    cy.get(':nth-child(7) > .z-0').click();

    // Assertion for successful login (modify according to actual post-login behavior)
    cy.url().should('include', 'com/home'); // Verify URL contains 'home' after successful login
  });

  // Test Case 2: Invalid login scenario - incorrect password
  it('Displays error for incorrect password', () => {
    const loginUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    const email = 'malik.murtaza+308@zweidevs.com';
    const incorrectPassword = 'Mjhjsfj2211@';

    // Visit the login page
    cy.visit(loginUrl);

    // Enter valid email
    cy.get(':nth-child(4) > .group > .flex > .tap-highlight-transparent')
      .type(email);

    // Enter incorrect password
    cy.get(':nth-child(5) > .group > .flex > .tap-highlight-transparent')
      .type(incorrectPassword);

    // Submit the login form
    cy.get(':nth-child(7) > .z-0').click();

    // Assertion for incorrect password error message (modify as per actual error message)
    cy.contains('Invalid email or password.').should('be.visible');
  });

});
