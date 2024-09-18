describe('My First Test', () => {
  it('Does not do much!', () => {
    const signup = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    const username = 'pamma2';
    const email = 'malik.murtza01@gmail.com';
    const password = 'Malik123@'

    // Visit the signup page using the correct variable
    cy.visit(signup);
    cy.get(':nth-child(2) > .z-0').click();
    cy.wait(2000)
    cy.get(':nth-child(4) > .group > .flex > .relative').type('Murtaza09'+Math.random()*5000);
    cy.wait(2000)   
    cy.get(':nth-child(5) > .group > .flex > .relative').type('malik.murtaza+309@zweidevs.com'+Math.random()*5000);
    cy.wait(2000)
    cy.get(':nth-child(6) > .group > .flex > .relative').type('Malik123@');
    cy.wait(8000)
    cy.get(':nth-child(8) > .z-0').click();
    //cy.url().should('include', '/amplifyapp.com/home');                    
    cy.get('.notification').should('contain', 'Your account has been created successfully');
    
  });
});








