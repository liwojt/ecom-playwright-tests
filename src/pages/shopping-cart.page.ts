import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ShoppingCartPage extends BasePage {
  url = '/ui/index.php?route=checkout/cart';
  checkoutButton: Locator;
  cartTable: Locator;
  cartContent: Locator;
  cartAlertDanger: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = this.page.getByRole('link', {
      name: 'Checkout',
      exact: true,
    });
    this.cartTable = this.page.locator('.table-responsive');
    this.cartContent = this.page.locator('#content');
    this.cartAlertDanger = this.page.locator('.alert-danger');
  }

  async removeProductFromCart(product: string): Promise<void> {
    const productRow = this.cartTable.locator('tr', {
      hasText: product,
    });
    const removeButton = productRow.locator('.btn-danger');
    await removeButton.click();
  }
}
