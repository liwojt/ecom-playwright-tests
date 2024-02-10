// @ts-check
const { test, expect } = require('@playwright/test');
const { RegisterAccountPage } = require('../pages/register-account-page');
const { HomePage } = require('../pages/home-page');
import MailSlurp from 'mailslurp-client';
const fs = require('fs');

test.describe('Register account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should create the account and verify confirmation e-mail', async ({
    page,
  }) => {
    const registerAccount = new RegisterAccountPage(page);
    const home = new HomePage(page);

    // create a new inbox
    const mailslurp = new MailSlurp({ apiKey: `${process.env.API_KEY}` });
    const password = process.env.PASSWORD;
    const { id, emailAddress } = await mailslurp.createInbox();

    await home.myAccountLink.click();
    await home.registerLink.click();
    await registerAccount.fillYourPersonalDetails(
      process.env.NAME,
      process.env.SURNAME,
      emailAddress,
      process.env.TELE_NUMBER
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

    const newEnvLine = `\nLOGIN=${emailAddress}\n`;

    fs.appendFile('.env', newEnvLine, (err) => {
      if (err) {
        console.error('Error writing to .env:', err);
      } else {
        console.log('Email address added to .env');
      }
    });
  });
});
