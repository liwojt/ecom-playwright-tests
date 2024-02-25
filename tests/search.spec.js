// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');

test.describe('Search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should search products by providing inputs ', async ({ page }) => {
    const home = new HomePage(page);
    const searchPhrase = 'pro';
    const searchPhraseRegex = new RegExp('.*' + searchPhrase + '.*', 'i');

    await home.searchBar.fill(searchPhrase);
    await home.searchButton.click();
    await expect(home.searchInput).toHaveValue(searchPhrase);
    await home.checkResults(searchPhraseRegex);
  });
});
