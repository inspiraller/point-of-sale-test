/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays a title', () => {
    cy.contains('Home').should('exist');
  })

})
