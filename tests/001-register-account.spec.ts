import { generateRandomUserData } from '../src/factories/user.factory';
import { HomePage } from '../src/pages/home.page';
import { RegisterAccountPage } from '../src/pages/register-account.page';
import { expect, test } from '@playwright/test';

test.describe('Register account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should create the account', async ({ page }) => {
    const registerAccount = new RegisterAccountPage(page);
    const home = new HomePage(page);
    const userRegisterData = generateRandomUserData();

    await home.myAccountLink.click();
    await home.registerLink.click();
    await registerAccount.fillYourPersonalDetails(userRegisterData);
    await registerAccount.fillYourPassword(userRegisterData);
    await registerAccount.checkAgreement();
    await registerAccount.clickContinueButton();

    await expect(
      page.getByRole('heading', { name: 'Your Account Has Been Created!' }),
    ).toBeVisible();
  });
});
