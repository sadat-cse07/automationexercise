class HomePage {
  visit() {
    cy.visit("/");
  }
  verifyHomePage() {
    cy.get('a[href="/"]').should("be.visible");
  }

  clickProducts() {
    // cy.get('a[href="/products"]').click();
    // cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.contains("a", "Products", { timeout: 15000 })
      .should("be.visible")
      .click();
  }
}

export default new HomePage();
