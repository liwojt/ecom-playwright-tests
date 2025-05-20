import { RegisterUserModel } from '../models/user.model';
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
    registerUserData: RegisterUserModel,
  ): Promise<void> {
    await this.firstNameInput.fill(registerUserData.userFirstName);
    await this.lastNameInput.fill(registerUserData.userLastName);
    await this.emailInput.fill(registerUserData.userEmail);
    await this.telephoneInput.fill(registerUserData.userPhone);
  }

  async fillYourPassword(registerUserData: RegisterUserModel): Promise<void> {
    await this.passwordInput.fill(registerUserData.userPassword);
    await this.passwordConfirmInput.fill(registerUserData.userPassword);
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
