describe("Homepage", () => {
  it("should see quote and author", () => {
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
    cy.get(".quote-box").should(
      "have.text",
      `${quote.content} - ${quote.author}`
    );
  });
});
