import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  forgottenPasswordButton: Locator;
  warningInfo: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByPlaceholder('E-Mail Address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgottenPasswordButton = page.getByText('Forgotten Password');
    this.warningInfo = page.getByText(' Warning:');
  }

  async login(login: string, password: string) {
    await this.emailInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async resetPassword() {
    await this.forgottenPasswordButton.click();
  }
}
