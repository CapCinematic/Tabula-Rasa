// import { cy } from 'cypress'

describe("SearchAuthor", () => {
  it("should display a list of authors when data is fetched", () => {
    cy.visit("/search");
    cy.get("li").should("have.length.greaterThan", 0);
  });

  it("display quotes by the selected author when an author is clicked", () => {
    cy.visit("/search");
    cy.get("li").first().click();
    cy.get("h3").should("have.text", " Quotes by 14th Dalai Lama");
    cy.get("ul").should("be.visible");
  });

  it("adds a quote to the favorites list when the 'Favorite' button is clicked", () => {
    cy.visit("/search");
    cy.get("li").eq(1).click();
    cy.get("button").first().click();
    cy.get("aside").should("be.visible");
  });

  it("returns to the homepage when the 'Return Home' button is clicked", () => {
    cy.visit("/search");
    cy.get(".home-button").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.get("h1").should("have.text", "Welcome");
  });
});

