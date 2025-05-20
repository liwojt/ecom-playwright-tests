import { HomePage } from '../src/pages/home.page';
import { LoginPage } from '../src/pages/login.page';
import { userTestData } from '../src/test-data/user.data';
import test, { expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should log into the app', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    await home.myAccountLink.click();
    await home.loginLink.click();
    await login.login(userTestData);

    await expect(page.locator('#content')).toContainText('My Account');
  });

  test('should not log into the app', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const userLoginData = {
      userEmail: 'invalidEmail',
      userPassword: 'invalidPassword',
    };

    await home.myAccountLink.click();
    await home.loginLink.click();
    await login.login(userLoginData);

    await expect(login.warningInfo).toBeVisible();
  });
});
