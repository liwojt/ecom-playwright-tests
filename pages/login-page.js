exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('E-Mail Address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { value: 'Login' });
    this.forgottenPasswordButton = page.getByText('Forgotten Password');
  }
};
