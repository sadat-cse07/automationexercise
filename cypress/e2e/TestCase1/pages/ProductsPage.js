class ProductsPage {
  verifyProductsPage() {
    cy.url().should("include", "/products");
  }

  enterSearchProduct(productName) {
    cy.get("#search_product").type(productName);
    cy.get("#submit_search").click();
  }
}

export default new ProductsPage();
