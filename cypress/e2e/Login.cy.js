import LoginPage from '../pageObjects/LoginPage';

describe('Login Functionality Tests', () => {
  ('have.text', 'Invalid email or password.')

  // Test Case 1: Invalid  login
  it('Logs in with valid credentials', () => {
    const loginUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
    const email = 'malik.murtaza+308@zweidevs.com';
    const password = 'Malik123@';

    cy.visit(loginUrl);
    cy.get(':nth-child(4) > .group > .flex > .tap-highlight-transparent')

      .type(email);

    cy.get(':nth-child(5) > .group > .flex > .tap-highlight-transparent').type(password);

    //cy.get(':nth-child(7) > .z-0').click();

    //cy.get('.notification').should('be.visible');
  });
});

it('Logs in with valid credentials', () => {
  const loginUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
  const email = 'malik.murtaza+308@zweidevs.com';
  const password = 'Malik123@';
  cy.visit('https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth');
  const ln= new LoginPage;
  ln.enterEmail("malik.murtaza+308@zweidevs.com")
  ln.enterPassword(password);
  ln.clickLoginButton();
 
}); 

