/// <reference types="cypress" />

describe('Route - checkout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/checkout')
  })

  it('displays the title', () => {
    cy.contains('Sale').should('exist');
  })

})
