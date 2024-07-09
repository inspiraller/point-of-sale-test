/// <reference types="cypress" />

describe('Route - homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays the title', () => {
    cy.contains('Home').should('exist');
  })

})
