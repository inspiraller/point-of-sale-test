/// <reference types="cypress" />
// import enGb from '@/i18n/en-GB/translation.json';
import CashierJson from '@/hooks/useLoadData/static_mock_data/cashier_sample.json';

const baseUrl = 'http://localhost:3000'; 

// const cashier2 = enGb['SelectCashier.name.2'];


describe('Select cashier', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  })
  it('Select Cashier 2 and redirect to sales dashboard', () => {
    cy.contains('Select Cashier').should('exist');
    cy.get('[role="combobox"]').click();
    cy.get('[role="listbox"').contains(CashierJson[1].name).click();
    cy.url().should("eq", `${baseUrl}/sales-dashboard`);
  })
});
