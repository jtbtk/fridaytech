Cypress.Commands.add(
  'getByDataCy',
  <E extends Node = HTMLElement>(id: string): Cypress.Chainable<JQuery<E>> => cy.get(`[data-testid="${id}"]`)
);

declare namespace Cypress {
  interface Chainable {
    getByDataCy<E extends Node = HTMLElement>(id: string): Cypress.Chainable<JQuery<E>>;
  }
}
