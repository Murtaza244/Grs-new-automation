//import SignupPage from '../pageObjects/SignupPage';

describe('Signup Functionality Tests', () => {
  
  // Test Case 1: Valid signup scenario
  it('Signs up with valid details', () => {
    const signupUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    const password = 'Malik123@';
// 
    // Visit the signup page
    cy.visit(signupUrl);
    
    // Click on the signup button
    cy.get(':nth-child(2) > .z-0').click();
    
    // Wait for 2 seconds
    cy.wait(2000);
    
    // Type username with a random value
    cy.get(':nth-child(4) > .group > .flex > .relative')
      .type('Murtaza09' + Math.random() * 5000);
    
    // Wait for 2 seconds
    cy.wait(2000);
    
    // Type email with a random value
    cy.get(':nth-child(5) > .group > .flex > .relative')
      .type('malik.murtaza+309' + Math.random() * 20 + '@zweidevs.com');
    
    // Wait for 2 seconds
    cy.wait(2000);
    
    // Type password
    cy.get(':nth-child(6) > .group > .flex > .relative').type(password);
    
    // Wait for 2 seconds
    cy.wait(2000);

    // Accept terms and conditions
    cy.get('.group > .inline-flex').click();

    // Click on the submit button
    cy.get(':nth-child(8) > .z-0').click();
    
    // Check that the notification contains a success message
    cy.get('.notification')
      .should('contain', 'Your account has been created successfully');
  });
  
  // Test Case 2: Invalid email format scenario
  it('Displays error for invalid email format', () => {
    const signupUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    const password = 'Malik123@';

    // Visit the signup page
    cy.visit(signupUrl);
    
    // Click on the signup button
    cy.get(':nth-child(2) > .z-0').click();
    
    // Wait for 2 seconds
    cy.wait(2000);
    
    // Type username with a random value
    cy.get(':nth-child(4) > .group > .flex > .relative')
      .type('Murtaza09' + Math.random() * 5000);
    
    // Wait for 2 seconds
    cy.wait(2000);
    
    // Type invalid email format
    cy.get(':nth-child(5) > .group > .flex > .relative')
      .type('malik.murtaza+309zweidevs.com' + Math.random() * 5000); // Missing '@'
    
    // Wait for 2 seconds
    cy.wait(2000);
    
    // Type password
    cy.get(':nth-child(6) > .group > .flex > .relative').type(password);
    
    // Accept terms and conditions
    cy.get('.group > .inline-flex').click();

    // Click on the submit button
    cy.get(':nth-child(8) > .z-0').click();
    
    // Check for the email format validation error
    cy.get(':nth-child(5) > .text-danger')
      .should('contain', 'Enter a valid email address.');
  });

});
