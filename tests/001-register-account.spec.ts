// @ts-check
import { test, expect } from '@playwright/test';
import { RegisterAccountPage } from '../pages/register-account.page';
import { HomePage } from '../pages/home.page';

test.describe.serial('Register account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should create the account and verify confirmation e-mail', async ({
    page,
  }) => {
    const registerAccount = new RegisterAccountPage(page);
    const home = new HomePage(page);
    const emailAddress = `test-3424@example.com`;
    const password = 'test-password';

    await home.myAccountLink.click();
    await home.registerLink.click();
    await registerAccount.fillYourPersonalDetails(
      'Anaastasia',
      'Beverly',
      emailAddress,
      '3454343434'
    );
    await registerAccount.fillYourPassword(password);
    await registerAccount.checkAgreement();
    await registerAccount.clickContinueButton();
    await expect(
      page.getByRole('heading', { name: 'Your Account Has Been Created!' })
    ).toBeVisible();
  });
});
