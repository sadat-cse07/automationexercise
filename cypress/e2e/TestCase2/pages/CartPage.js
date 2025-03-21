class CartPage {
  verifyProductInCart(qty) {
    
    cy.get(".cart_quantity").should("contain.text", qty.toString());
  }
}

export default new CartPage();
