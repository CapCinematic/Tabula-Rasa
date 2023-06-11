describe("App", () => {
  it("displays the Homepage component as its default path", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Welcome");
  });

  it("displays SearchAuthor component when path is /search", () => {
    cy.visit("/search");
    cy.get(".search-title").should("have.text", "Select An author");
  });
});