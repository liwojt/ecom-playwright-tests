import { BASE_URL } from './utils/env.config';
import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  workers: 1,
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
