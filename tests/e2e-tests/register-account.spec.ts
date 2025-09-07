import { generateRandomUserData } from '../../src/factories/user.factory';
import { RegisterAccountPage } from '../../src/pages/register-account.page';
import { expect, test } from '@playwright/test';

test.describe('Register account', () => {
  let registerAccount: RegisterAccountPage;

  test.beforeEach(async ({ page }) => {
    registerAccount = new RegisterAccountPage(page);
    await registerAccount.navigateTo();
  });

  test('should create the account', async () => {
    const userRegisterData = generateRandomUserData();

    await registerAccount.fillYourPersonalDetails(userRegisterData);
    await registerAccount.fillYourPassword(userRegisterData);
    await registerAccount.checkAgreement();
    await registerAccount.clickContinueButton();

    await expect(registerAccount.headerAfterRegister).toBeVisible();
  });
});
