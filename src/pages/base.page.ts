import { Locator, Page } from '@playwright/test';

export class BasePage {
  url = '';
  cartButton: Locator;
  cartItemCount: Locator;

  constructor(protected page: Page) {
    this.cartButton = this.page.locator('#cart');
    this.cartItemCount = this.page.locator('#cart-total');
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForURL(this.url);
  }
}
