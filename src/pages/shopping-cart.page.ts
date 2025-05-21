import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ShoppingCartPage extends BasePage {
  url = '/index.php?route=checkout/cart';
  removeItemButton: Locator;
  checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.removeItemButton = this.page.getByText('Remove');
    this.checkoutButton = this.page.getByText('Checkout');
  }
}
