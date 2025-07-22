import { test, expect } from '@playwright/test';
test("softAsseration",  async({page})=>{
    await page.goto('https://demowebshop.tricentis.com');

   /* //Hard Asseration 
     await expect(page).toHaveTitle('Demo Web Shop123');
     await expect(page).toHaveURL('https://demowebshop.tricentis.com');

     */

     //soft asseration
await expect.soft(page).toHaveTitle('Demo Web Shop123');
     await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com');


})