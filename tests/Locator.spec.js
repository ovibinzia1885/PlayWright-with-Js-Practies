//const{test,expect}=require('@playwright/test')

import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

   await page.goto("https://demowebshop.tricentis.com");

   //click on log in button 
 //await page.locator('//a[normalize-space()=Log in]').click();

 await page.click("//a[normalize-space()='Log in']");

 await page.fill("//input[@id='Email']", 'ovy@gmail.com');
 await page.fill("//input[@id='Password']",'test@123');
 await page.click("//input[@value='Log in']");

 const pagelink=await page.locator("//a[normalize-space()='Log out']");

await expect(pagelink).toBeVisible();
 page.close();


})