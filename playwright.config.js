// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'https://awesomeqa.com',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
