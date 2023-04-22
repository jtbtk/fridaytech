import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
})
export class FundamentalsComponent {
  chaining_commands = `
  // cy peut avoir n'importe quelle valeur : cy-ref, testid, ...
  cy.get('[data-cy="username"]').type('john_doe');
  cy.get('[data-cy="password"]').type('password123');
  cy.get('[data-cy="submit-btn"]').click()
  
  // possibilité d'utilité 'as' pour donner un alias à un élément, 
  // et y faire référence plus tard dans le test avec cy.get('@alias')
  cy.get('[data-cy="username"]').as('username');
  cy.get('[data-cy="password"]').as('password');
  cy.get('[data-cy="submit-btn"]').as('submit');
  
  cy.get('@username').type('john_doe');
  cy.get('@password').type('password123');
  cy.get('@submit').click();
`;

  network_interception = `

  // Exemple 1
  cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('response');
  cy.get('@response').its('status').should('equal', 200);
  cy.get('@response').its('body').should('have.property', 'userId', 1);

  // Exemple 2
  cy.intercept('GET', '/users', (req) => {
    req.reply([
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com'
      }
    ])
  })

cy.visit('/users')

cy.get('[data-cy="users-list"]')
  .should('have.length', 2)
  .first()
  .should('contain', 'John Doe')'
 `;

  example_commands_ts = `
  // dans le fichier command.ts
  Cypress.Commands.add('getByDataCy', 
  <E extends Node = HTMLElement>(id: string): Cypress.Chainable<JQuery<E>> => cy.get(\`[data-cy='\${id}']\`));
  
  declare namespace Cypress {
    interface Chainable {
      getByDataCy<E extends Node = HTMLElement>(id: string): Cypress.Chainable<JQuery<E>>;
    }
  }
  
  // dans le fichier de test
  cy.getByDataCy("username").type('john_doe');
  cy.getByDataCy("password").type('password123');
  cy.getByDataCy("submit-btn").click()`;
}
