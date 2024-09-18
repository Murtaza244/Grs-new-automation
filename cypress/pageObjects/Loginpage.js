class LoginPage {
    visit() {
      cy.visit('https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth');
    }
  
    enterEmail(email) {
      cy.get(':nth-child(4) > .group > .flex > .tap-highlight-transparent').type(email);
    }
  
    enterPassword(password) {
      cy.get(':nth-child(5) > .group > .flex > .tap-highlight-transparent').type(password);
    }
  
    clickLoginButton() {
      cy.get(':nth-child(7) > .z-0').click();
    }
  
    verifyLogin() {
      cy.get('.notification').should('be.visible');
    }
  }
  
  export default LoginPage;
  