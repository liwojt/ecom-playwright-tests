import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class CheckoutPage extends BasePage {
  url = '/ui/index.php?route=checkout/checkout';
  checkoutOptionsPanel: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutOptionsPanel = page.getByText('Step 1: Checkout Options New');
  }
}
