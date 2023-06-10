describe('SearchAuthor', () => {
  it('should display a list of authors', () => {
    cy.visit('http://localhost:3000/search');

    cy.get('.authors-list li').should('have.length', 20)
  });

  it('displays quotes by selected author', () => {
    cy.visit('http://localhost:3000/search')

    cy.get('.authors-list li').first().click();
  })
})