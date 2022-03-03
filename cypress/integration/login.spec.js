describe('Login Page - As an end user I want to login', () => {
  
  it('can submit the login form', () => {
    
    // Visit login page url
    cy.visit(Cypress.env('DASHBOARD_APP_URL') + '/login')

    // Find the form
    cy.get("form");

    // End user should be able to fill username
    cy.get('input[placeholder="Email"]')
      .type(Cypress.env('PILOTCTL_APP_PILOTCTL_ONIX_USER'))
      .should("have.value", Cypress.env('PILOTCTL_APP_PILOTCTL_ONIX_USER'));

    // End user should be able to fill password
    cy.get('input[placeholder="Password"]')
      .type(Cypress.env('PILOTCTL_APP_PILOTCTL_ONIX_PWD'))
      .should("have.value", Cypress.env('PILOTCTL_APP_PILOTCTL_ONIX_PWD'));

    // Submit the login form
    cy.get("form").submit();

    // Make post call to nodejs login endpoint with email and password
    cy.request({
        method: 'POST',
        url: Cypress.env('DASHBOARD_APP_URL') + '/api/auth/login',
        body: { email: Cypress.env('PILOTCTL_APP_PILOTCTL_ONIX_USER'), password: Cypress.env('PILOTCTL_APP_PILOTCTL_ONIX_PWD') },
        headers: {'Accept-Language': 'en-US'}
      })
      .then((response) => {
        // Match the status code as 200, login succeeded
        expect(response.body.statusCode).to.equal(200)
      })
  });
}) 