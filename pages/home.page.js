const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.getByTitle('My Account');
    this.registerLink = page.getByText('Register');
    this.loginLink = page.getByText('Login');
    this.searchBar = page.getByPlaceholder('Search');
    this.searchButton = page.locator('#search').getByRole('button');
    this.searchInput = page.getByPlaceholder('Keywords');
    this.productTitleText = page.locator('.product-thumb').locator('h4');
  }

  async checkResults(searchText) {
    for (let i = 0; i < (await this.productTitleText.count()); i++) {
      await expect(this.productTitleText.nth(i)).toHaveText(searchText);
    }
  }
};
