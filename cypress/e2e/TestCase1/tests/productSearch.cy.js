import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import SearchPage from "../pages/SearchPage";

describe("🛒 E-Commerce Product Tests", () => {
  beforeEach(() => {
    cy.fixture("testData.json").then((data) => {
      cy.wrap(data).as("testData");
    });
  });

  context("🔥 Smoke Tests", () => {
    it("Verify Home Page Loads Successfully", { tags: ["smoke"] }, function () {
      HomePage.visit();
      HomePage.verifyHomePage();
      cy.log("✅ Home page loaded successfully");
    });

    it("Verify Navigation to Products Page", { tags: ["smoke"] }, function () {
      HomePage.clickProducts();
      ProductsPage.verifyProductsPage();
      cy.log("✅ Navigated to Products Page successfully");
    });
  });

  context("🔁 Regression Tests", () => {
    it(
      "Search for a product and verify results",
      { tags: ["regression"] },
      function () {
        HomePage.visit();
        HomePage.verifyHomePage();
        cy.log("Navigated to Home Page");

        HomePage.clickProducts();
        ProductsPage.verifyProductsPage();
        cy.log("Navigated to Products Page");

        ProductsPage.enterSearchProduct(this.testData.productName);
        cy.log(`Searching for product: ${this.testData.productName}`);

        SearchPage.verifySearchedProducts();
        SearchPage.verifySearchResults();
        cy.log("✅ Verified searched products are visible");
      }
    );
  });

  context("❌ Error Handling", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      cy.log("Unhandled error:", err.message);
      return false;
    });
  });
});
