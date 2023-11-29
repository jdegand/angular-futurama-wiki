describe('mocked api e2e tests', () => {

  it('Home Component loads with mocked characters and has same length as mocked json', () => {
    cy.intercept('GET', 'https://api.sampleapis.com/futurama/characters/', { fixture: 'characters-partial.json' });
    cy.visit('http://localhost:4200');

    const cards = cy.get('.card');

    cards.should('have.length', 3);
  })

  it('Detail component works', () => {
    cy.intercept('GET', 'https://api.sampleapis.com/futurama/characters/5', { fixture: 'characters-single.json' });
    cy.visit('http://localhost:4200/character/5');

    cy.contains('Amy Wong');
  })

})