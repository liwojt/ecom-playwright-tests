import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { USER_EMAIL_ADDRESS, USER_PASSWORD } from '../utils/env.config';
import test, { expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should log into the app', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const emailAddress = USER_EMAIL_ADDRESS;
    const password = USER_PASSWORD;

    await home.myAccountLink.click();
    await home.loginLink.click();
    await login.login(emailAddress, password);

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
