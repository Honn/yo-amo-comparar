describe('cui-button', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('cui-button').should('exist');
  });

  it('should show text when clicked', () => {
    cy.get('button').click();
    cy.get('p').should('exist').should('be.visible').contains("It worked!");
  });
});
