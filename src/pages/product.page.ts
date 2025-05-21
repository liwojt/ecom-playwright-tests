import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ProductPage extends BasePage {
  url = '/ui/index.php?route=product/product&product_id=';
  addToCartButton: Locator;
  alertSuccess: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButton = this.page.locator('#button-cart');
    this.alertSuccess = this.page.locator('.alert-success');
  }

  async navigateTo(productId: string): Promise<void> {
    await this.page.goto(`${this.url}${productId}`);
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
