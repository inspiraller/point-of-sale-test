/// <reference types="cypress" />
import enGb from '@/i18n/en-GB/translation.json';

const baseUrl = 'http://localhost:3000'; 

const cashier2 = enGb['SelectCashier.name.2'];


describe('Select cashier', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  })
  it('Select Cashier 2 and redirect to sales dashboard', () => {
    cy.contains(enGb['SelectCashier.title']).should('exist');
    cy.get('[role="combobox"]').click();
    cy.get('[role="listbox"').contains(cashier2).click();
    cy.url().should("eq", `${baseUrl}/sales-dashboard`);
  })
});
