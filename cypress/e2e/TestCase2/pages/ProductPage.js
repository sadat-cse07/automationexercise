class ProductPage {
  verifyProductDetail() {
    cy.get(".product-information").should("be.visible");
  }

  increaseQuantity(qty) {
    cy.get('input[name="quantity"]').clear().type(qty);
  }

  addToCart() {
    cy.contains("button", "Add to cart").click();
  }

  viewCart() {
    cy.contains("a", "View Cart").click();
  }
}

export default new ProductPage();
