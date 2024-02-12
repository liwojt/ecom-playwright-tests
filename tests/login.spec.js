const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { LoginPage } = require('../pages/login.page');

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should log into the app', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    await home.myAccountLink.click();
    await home.loginLink.click();
    await login.login(process.env.LOGIN, process.env.PASSWORD);

    await expect(page.locator('#content')).toContainText('My Account');
  });

  test('should not log into the app', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    await home.myAccountLink.click();
    await home.loginLink.click();
    await login.login('email', 'password');

    await expect(login.warningInfo).toBeVisible();
  });
});
