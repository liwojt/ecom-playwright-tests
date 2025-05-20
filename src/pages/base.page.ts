import { Page } from '@playwright/test';

export class BasePage {
  url = '';
  constructor(protected page: Page) {}

  async navigateTo(): Promise<void> {
    await this.page.goto(this.url);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForURL(this.url);
  }
}
