/// <reference types="cypress" />
import enGb from '@/i18n/en-GB/translation.json';

describe('Route - homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays the title', () => {
    cy.contains(enGb['SelectCashier.title']).should('exist');
  })

})
