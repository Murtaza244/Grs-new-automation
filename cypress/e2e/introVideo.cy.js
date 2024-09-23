describe('Home Page Video Functionality', () => {
    it.only('should display and play the video', () => {
        const loginUrl = 'https://develop.d3ah3ul8h6dpda.amplifyapp.com/auth';
        const email = 'malik.murtaza+308@zweidevs.com';
        const password = 'Malik123@';

        cy.visit(loginUrl);
        cy.get(':nth-child(4) > .group > .flex > .tap-highlight-transparent').type(email);
        cy.get(':nth-child(5) > .group > .flex > .tap-highlight-transparent').type(password);
        cy.get(':nth-child(7) > .z-0').click();

        cy.url().should('include', '/home');
        cy.wait(3000)

        cy.get('main > :nth-child(2) > :nth-child(1) video') // Adjusted selector to target the video element
          .should('have.prop', 'paused', true)
          .and('have.prop', 'ended', false)
          .then((video) => {
            video[0].play();
            cy.wait(1000);
            expect(video[0].paused).to.be.false;
          });
    });
    it('should display and play the video', () => {
        cy.get('[class="text-primary"]').first().click();
        cy.url().should('include','com/gallery');
    });
});
