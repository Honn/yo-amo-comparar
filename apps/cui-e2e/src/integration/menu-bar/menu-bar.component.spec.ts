describe('cui-menu-bar', () => {
  beforeEach(() => cy.visit('/iframe.html?id=menubarcomponent--primary'));

  it('should render the component', () => {
    cy.get('cui-menu-bar').should('exist');
  });
});
