import { CheckoutPage } from '../../src/pages/checkout.page';
import { ProductPage } from '../../src/pages/product.page';
import { ShoppingCartPage } from '../../src/pages/shopping-cart.page';
import { expect, test } from '@playwright/test';

test.describe('Checkout', () => {
  let product: ProductPage;
  let shoppingCart: ShoppingCartPage;
  let checkout: CheckoutPage;

  test.beforeAll(async ({ page }) => {
    product = new ProductPage(page);
    shoppingCart = new ShoppingCartPage(page);
    checkout = new CheckoutPage(page);
  });

  test('should not navigate to checkout with product out of stock', async ({
    page,
  }) => {
    const expectedAlertText =
      'Products marked with *** are not available in the desired quantity or not in stock!';

    await product.navigateToProduct('40'); // iPhone
    await product.addToCart();
    await shoppingCart.navigateTo();

    await shoppingCart.checkoutButton.click();

    await expect(shoppingCart.cartAlertDanger).toContainText(expectedAlertText);

    // Verify if user is not directed to checkout
    await expect(page).not.toHaveURL(checkout.url);
  });

  test('should navigate to checkout to Step 1: Checkout Options when user not logged in', async () => {
    const expectedNewCustomerHeading = 'New Customer';
    const expectedReturningCustomerHeading = 'Returning Customer';

    await product.navigateToProduct('43'); // MacBook
    await product.addToCart();
    await shoppingCart.navigateTo();

    await shoppingCart.checkoutButton.click();

    // Verify if texts "New Customer" and "Returning Customer" are present on the page
    await expect(checkout.checkoutOptionsPanel).toContainText(
      expectedNewCustomerHeading,
    );
    await expect(checkout.checkoutOptionsPanel).toContainText(
      expectedReturningCustomerHeading,
    );
  });
});
