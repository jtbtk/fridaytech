describe('template spec', () => {
  it('passes', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('response');
    cy.get('@response').its('status').should('equal', 200);
    cy.get('@response').its('body').should('have.property', 'userId', 1);
  });
});
