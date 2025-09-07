import { BasePage } from '../../src/pages/base.page';
import { ProductPage } from '../../src/pages/product.page';
import { ShoppingCartPage } from '../../src/pages/shopping-cart.page';
import test, { expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  let shoppingCart: ShoppingCartPage;
  let base: BasePage;
  let product: ProductPage;

  test.beforeEach(async ({ page }) => {
    shoppingCart = new ShoppingCartPage(page);
    base = new BasePage(page);
    product = new ProductPage(page);
  });

  test('should add products to the cart when user not logged in', async () => {
    const productsToAdd = [
      { id: '43', name: 'MacBook' },
      { id: '40', name: 'iPhone' },
      { id: '44', name: 'MacBook Air' },
    ];

    for (let i = 0; i < productsToAdd.length; i++) {
      const item = productsToAdd[i];
      const expectedAlertText = `Success: You have added ${item.name} to your shopping cart!×`;
      const expectedCartText = `${i + 1} item(s)`;

      await product.navigateToProduct(item.id);
      await product.addToCart();

      // Verify the success info after adding a product to cart and amount of products in the cart
      await expect.soft(product.alertSuccess).toHaveText(expectedAlertText);
      await expect.soft(base.cartItemCount).toContainText(expectedCartText);
    }

    await shoppingCart.navigateTo();

    // Verify that all products are in the shopping cart
    for (const product of productsToAdd) {
      await expect.soft(shoppingCart.cartTable).toContainText(product.name);
    }
  });

  test('should remove products from the cart when user not logged in', async () => {
    await product.navigateToProduct('43'); // MacBook
    await product.addToCart();

    await shoppingCart.navigateTo();

    // Verify that the product is in the shopping cart
    await expect(shoppingCart.cartTable).toContainText('MacBook');

    await shoppingCart.removeProductFromCart('MacBook');

    // Verify that the product has been removed and the cart is empty
    await expect(shoppingCart.cartContent).toContainText(
      'Your shopping cart is empty!',
    );
  });
});
