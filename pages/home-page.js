exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.getByTitle('My Account');
    this.registerLink = page.getByText('Register');
  }
};
