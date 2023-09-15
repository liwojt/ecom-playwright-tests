// @ts-check
const { test, expect } = require('@playwright/test');
const { RegisterAccountPage } = require('../pages/register-account-page');
const { HomePage } = require('../pages/home-page');

test.describe('Register account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui');
  });

  test('should create the account', async ({ page }) => {
    const registerAccount = new RegisterAccountPage(page);
    const home = new HomePage(page);
    await home.myAccountLink.click();
    await home.registerLink.click();
    await registerAccount.fillYourPersonalDetails(
      'John',
      'Smith',
      'nisabok396@cohodl.com',
      '123456789'
    );
    await registerAccount.fillYourPassword('password');
    await registerAccount.checkAgreement();
    await registerAccount.clickContinueButton();
  });
});
