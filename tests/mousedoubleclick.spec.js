import { test, expect } from '@playwright/test';

test(' mouse double click', async ({ page }) => {
   await page.goto('https://testautomationpractice.blogspot.com/');

   const btndoubleclick= await page.locator("//button[normalize-space()='Copy Text']")

      // double click for direst method 

   await btndoubleclick.dblclick();

   const f2=await page.locator('#field2');

   await expect(f2).toHaveValue('Hello World!');
   await page.waitForTimeout(3000);




})