exports.RegisterAccountPage = class RegisterAccountPage {
  constructor(page) {
    this.page = page;
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
      .getByRole('button', { value: 'Continue' });
  }

  async fillYourPersonalDetails(firstName, lastName, email, telephone) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.telephoneInput.fill(telephone);
  }

  async fillYourPassword(password) {
    await this.passwordInput.fill(password);
    await this.passwordConfirmInput.fill(password);
  }

  async subscribeNewsletter() {
    await this.subscribeNewsletterSelect.filter({ text: 'Yes' }).check();
  }

  async checkAgreement() {
    await this.privacyPolicyCheckbox.check();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }
};
