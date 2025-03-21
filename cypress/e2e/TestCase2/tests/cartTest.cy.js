import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

describe("Cart Functionality Tests", () => {
  beforeEach(() => {
    cy.fixture("testData1").then((data) => {
      cy.wrap(data).as("testData1");
    });
  });

  it(
    "Add product to cart with correct quantity - Smoke Test",
    { tags: ["smoke"] },
    function () {
      HomePage.visit();
      HomePage.verifyHomePage();

      HomePage.selectProduct();
      ProductPage.verifyProductDetail();

      ProductPage.increaseQuantity(this.testData1.quantity);
      ProductPage.addToCart();
      ProductPage.viewCart();

      CartPage.verifyProductInCart(this.testData1.quantity);
    }
  );

  it(
    "Verify Product Detail Page - Regression Test",
    { tags: ["regression"] },
    () => {
      HomePage.visit();
      HomePage.selectProduct();
      ProductPage.verifyProductDetail();
    }
  );
});
