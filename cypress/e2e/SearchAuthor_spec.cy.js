describe("SearchAuthor", () => {
  beforeEach(() => {
    const authors = [
      { _id: "9000", name: "Party Man" },
      { _id: "5000", name: "No Quotes man" },
      { _id: "9001", name: "Cypress Dude" },
    ];
    cy.intercept("https://api.quotable.io/authors?sortBy=name&limit=20", {
      statusCode: 200,
      body: { results: authors },
    })
    cy.visit("/search")
  })
  it("should check even if api is down", () => {
  ;
    cy.get("li").should("have.length", 3);
    cy.get("li").first().should("have.text", "Party Man");
  });

  it("should display a list of authors when data is fetched", () => {
    cy.visit("/search");
    cy.get("li").should("have.length.greaterThan", 0);
  });

  it("display quotes by the selected author when an author is clicked", () => {
    cy.visit("/search");
    cy.get("li").first().click();
    cy.get("p").should("have.text", " No Quotes Available For This Author At This Time.")
    cy.get("li").eq(1).click();
    cy.get("h3").should("have.text", "Quotes by Party Man");
    cy.get("ul").should("be.visible");
  });

  it("adds a quote to the favorites list when the 'Favorite' button is clicked", () => {
    cy.visit("/search");
    cy.get("li").first().click();
    cy.get("h3").should("have.text", "Quotes by Party Man");
    cy.get("button").first().click();
  });

  it("returns to the homepage when the 'Return Home' button is clicked", () => {
    cy.visit("/search");
    cy.get(".home-button").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.get("h1").should("have.text", "Welcome");
  });
});

