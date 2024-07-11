/// <reference types="cypress" />
import CashierJson from '@/hooks/useLoadData/static_mock_data/cashier_sample.json';

import enGb from '@/i18n/en-GB/translation.json';

describe('Route - homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays the title', () => {
    cy.visit('http://localhost:3000').screenshot();
    cy.contains('Select Cashier').should('exist');
    // cy.contains(CashierJson[0].name).should('exist');
  })

})
