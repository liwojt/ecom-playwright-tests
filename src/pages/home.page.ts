import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class HomePage extends BasePage {
  url = '/ui';
  myAccountLink: Locator;
  registerLink: Locator;
  loginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.myAccountLink = page.getByTitle('My Account');
    this.registerLink = page.getByText('Register');
    this.loginLink = page.getByText('Login');
  }
}
