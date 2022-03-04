describe('Login Page - As an end user I want to login', () => {
  
  it('can view the login screen', () => {
    
    // Visit login page url
    cy.visit(Cypress.env('DASHBOARD_APP_URL') + '/login')

    
  });
}) 