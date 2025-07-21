

// for record use : npx playwright codegen -o tests/recordscriptplaywright.spec.js

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('ovy@gmail.com');
  await page.getByRole('textbox', { name: 'Password:' }).fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});