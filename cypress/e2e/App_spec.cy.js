describe("App", () => {
  it("displays the Homepage component as its default path", () => {
    const quote = {
      _id: "9000",
      content: "Luke I am your daddy",
      author: "Mr.Skywalker",
    };
    cy.intercept("https://api.quotable.io/random", {
      body: quote,
      statusCode: 200,
    });
    cy.visit("/");
    cy.get("h1").should("have.text", "Welcome");
    cy.contains("Luke I am your daddy");
    cy.contains("Mr.Skywalker");
  });

  it("displays SearchAuthor component when path is /search", () => {
    const authors = [
      { _id: "9000", name: "Party Man" },
      { _id: "9001", name: "Cypress Dude" },
    ];
    cy.intercept("https://api.quotable.io/authors?sortBy=name&limit=20", {
      statusCode: 200,
      body: { results: authors },
    });
    cy.visit("/search");
    cy.get(".search-title").should("have.text", "Select An author");
  });
});
