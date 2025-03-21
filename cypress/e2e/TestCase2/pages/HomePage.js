class HomePage {
  visit() {
    cy.visit("/");
  }

  verifyHomePage() {
    cy.get("body").should("contain.text", "Full-Fledged practice website");
  }

  selectProduct() {
    cy.get(".features_items")
      .first()
      .find(".productinfo.text-center")
      .first()
      .get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
      .click();
  }
}

export default new HomePage();
