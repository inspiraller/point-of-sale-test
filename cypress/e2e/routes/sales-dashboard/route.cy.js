/// <reference types="cypress" />

describe('Route - Sales Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sales-dashboard')
  })

  it('displays the title', () => {
    cy.contains('Sales Dashboard').should('exist');
  })

})
