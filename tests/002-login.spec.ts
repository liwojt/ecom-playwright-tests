import test, { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test.describe.serial('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should log into the app', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    await home.myAccountLink.click();
    await home.loginLink.click();
    await login.login('test-3424@example.com', 'test-password');

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
