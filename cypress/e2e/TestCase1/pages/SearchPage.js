class SearchPage {
  verifySearchedProducts() {
    // cy.wait(3000); // Add wait time
    //   cy.contains("SEARCHED PRODUCTS", { timeout: 20000 }).should("exist").and("be.visible");
    cy.get(".title").should("have.text", "Searched Products");
  }

  verifySearchResults() {
    cy.get(".productinfo").should("exist").and("be.visible");
  }
}

export default new SearchPage();
