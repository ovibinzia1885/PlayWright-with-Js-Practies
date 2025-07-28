import { test, expect } from '@playwright/test';
test('Mouse Hover Action', async ({ page }) => {

   await page.goto('https://vinothqaacademy.com/mouse-event/');

     const demo1 =await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[contains(text(),'Demo Sites')]");
    const practies= await page.locator("//div[@class='collapse navbar-collapse pull-right']//a[contains(text(),'Practice Automation')]");
    
    // mouse hover have playewrite  bydefault option 

   await demo1.hover();
   await practies.hover();

 const dropdownLink = await page.locator('text=DropDown');
  await dropdownLink.click();
   await page.waitForTimeout(2000);




})
