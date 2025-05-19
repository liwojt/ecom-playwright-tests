import { HomePage } from '../src/pages/home.page';
import { RegisterAccountPage } from '../src/pages/register-account.page';
import {
  USER_EMAIL_ADDRESS,
  USER_FIRST_NAME,
  USER_LAST_NAME,
  USER_PASSWORD,
  USER_PHONE,
} from '../src/utils/env.config';
import { expect, test } from '@playwright/test';

test.describe('Register account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should create the account and verify confirmation e-mail', async ({
    page,
  }) => {
    const registerAccount = new RegisterAccountPage(page);
    const home = new HomePage(page);
    const emailAddress = USER_EMAIL_ADDRESS;
    const firstName = USER_FIRST_NAME;
    const lastName = USER_LAST_NAME;
    const password = USER_PASSWORD;
    const phoneNumber = USER_PHONE;

    await home.myAccountLink.click();
    await home.registerLink.click();
    await registerAccount.fillYourPersonalDetails(
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
    );
    await registerAccount.fillYourPassword(password);
    await registerAccount.checkAgreement();
    await registerAccount.clickContinueButton();
    await expect(
      page.getByRole('heading', { name: 'Your Account Has Been Created!' }),
    ).toBeVisible();
  });
});
