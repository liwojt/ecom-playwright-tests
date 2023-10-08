exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('E-Mail Address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgottenPasswordButton = page.getByText('Forgotten Password');
    this.warningInfo = page.getByText(' Warning:');
  }

  async login(login, password) {
    await this.emailInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async resetPassword() {
    await this.forgottenPasswordButton.click();
  }
};
