import { RegisterUserModel } from '../models/user.model';
import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class RegisterAccountPage extends BasePage {
  url = '/ui/index.php?route=account/register';
  firstNameInput: Locator;
  lastNameInput: Locator;
  emailInput: Locator;
  telephoneInput: Locator;
  passwordInput: Locator;
  passwordConfirmInput: Locator;
  subscribeNewsletterSelect: Locator;
  privacyPolicyCheckbox: Locator;
  continueButton: Locator;
  headerAfterRegister: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.emailInput = this.page.getByPlaceholder('E-mail');
    this.telephoneInput = this.page.getByPlaceholder('Telephone');
    this.passwordInput = this.page.locator('#input-password');
    this.passwordConfirmInput = this.page.locator('#input-confirm');
    this.subscribeNewsletterSelect = this.page.getByPlaceholder('radio');
    this.privacyPolicyCheckbox = this.page.getByRole('checkbox');
    this.continueButton = this.page
      .locator('.buttons')
      .getByRole('button', { name: 'Continue' });
    this.headerAfterRegister = this.page.getByRole('heading', {
      name: 'Your Account Has Been Created!',
    });
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
