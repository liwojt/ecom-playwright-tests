import { LoginPage } from '../../src/pages/login.page';
import { userTestData } from '../../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Login', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.navigateTo();
  });

  test('should log into the app', async () => {
    const expectedHeaderAfterLogin = 'My Account';
    await login.login(userTestData);
    await expect(login.contentSection).toContainText(expectedHeaderAfterLogin);
  });

  test('should not log into the app - incorrect credentials', async () => {
    const userLoginData = {
      userEmail: 'invalidEmail',
      userPassword: 'invalidPassword',
    };
    await login.login(userLoginData);
    await expect(login.warningInfo).toBeVisible();
  });
});
