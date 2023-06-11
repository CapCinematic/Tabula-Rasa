describe("Homepage", () => {
  it("displays a quote when the data is fetched", () => {
    cy.visit("/");
    cy.get(".quote-box").should("be.visible");
  });

  it("should navigate to SearchAuthor when the 'Enter' button is clicked", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.url().should("include", "/search");
  });
});
