import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class RegisterAccountPage extends BasePage {
  firstNameInput: Locator;
  lastNameInput: Locator;
  emailInput: Locator;
  telephoneInput: Locator;
  passwordInput: Locator;
  passwordConfirmInput: Locator;
  subscribeNewsletterSelect: Locator;
  privacyPolicyCheckbox: Locator;
  continueButton: Locator;
  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.emailInput = page.getByPlaceholder('E-mail');
    this.telephoneInput = page.getByPlaceholder('Telephone');
    this.passwordInput = page.locator('#input-password');
    this.passwordConfirmInput = page.locator('#input-confirm');
    this.subscribeNewsletterSelect = page.getByPlaceholder('radio');
    this.privacyPolicyCheckbox = page.getByRole('checkbox');
    this.continueButton = page
      .locator('.buttons')
      .getByRole('button', { name: 'Continue' });
  }

  async fillYourPersonalDetails(
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.telephoneInput.fill(telephone);
  }

  async fillYourPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
    await this.passwordConfirmInput.fill(password);
  }

  async subscribeNewsletter(): Promise<void> {
    await this.subscribeNewsletterSelect.filter({ hasText: 'Yes' }).check();
  }

  async checkAgreement(): Promise<void> {
    await this.privacyPolicyCheckbox.check();
  }

  async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
  }
}
