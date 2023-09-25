// @ts-check
const { test, expect } = require('@playwright/test');
const { RegisterAccountPage } = require('../pages/register-account-page');
const { HomePage } = require('../pages/home-page');
import MailSlurp from 'mailslurp-client';

test.describe('Register account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should create the account and verify confirmation e-mail', async ({
    page,
  }) => {
    const registerAccount = new RegisterAccountPage(page);
    const home = new HomePage(page);
    const apiKey =
      '44b8a0eaa8c3d181b949246207824ec8d9c7b3ed393a3a777b55e7d5430c48c0';

    // create a new inbox
    const mailslurp = new MailSlurp({
      apiKey,
    });
    const password = 'test-password';
    const { id, emailAddress } = await mailslurp.createInbox();

    await home.myAccountLink.click();
    await home.registerLink.click();
    await registerAccount.fillYourPersonalDetails(
      'John',
      'Smith',
      emailAddress,
      '123456789'
    );
    await registerAccount.fillYourPassword(password);
    await registerAccount.checkAgreement();
    await registerAccount.clickContinueButton();
    await expect(
      page.getByRole('heading', { name: 'Your Account Has Been Created!' })
    ).toBeVisible();

    //wait for verification code
    const email = await mailslurp.waitForLatestEmail(id);
    expect(email.subject).toContain(
      'TheTestingAcademy eCommerce - Thank you for registering'
    );
  });
});
