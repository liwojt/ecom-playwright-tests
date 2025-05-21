import { BasePage } from '../src/pages/base.page';
import { ProductPage } from '../src/pages/product.page';
import test, { expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  // let shoppingCart: ShoppingCartPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    // shoppingCart = new ShoppingCartPage(page);
    basePage = new BasePage(page);
  });

  test('should add items to the cart', async ({ page }) => {
    const productPage = new ProductPage(page);
    const productsToAdd = [
      { id: '43', name: 'MacBook' },
      { id: '40', name: 'iPhone' },
      { id: '44', name: 'MacBook Air' },
    ];

    for (let i = 0; i < productsToAdd.length; i++) {
      const product = productsToAdd[i];
      const expectedAlertText = `Success: You have added ${product.name} to your shopping cart!×`;
      const expectedCartText = `${i + 1} item(s)`;
      await productPage.navigateTo(product.id);
      await productPage.addToCart();
      await expect.soft(productPage.alertSuccess).toHaveText(expectedAlertText);
      await expect.soft(basePage.cartItemCount).toContainText(expectedCartText);
    }
  });
});
