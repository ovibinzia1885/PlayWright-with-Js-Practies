import { test, expect } from '@playwright/test';
test('Handle Date Pickers/Calendars', async ({ page }) => {

    
    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.fill('#datepicker','03/25/2025')


   // date picker 
   const year="2026"
   const month="May"
   const date="17"
   await page.click('#datepicker') // open clender 

   while(true){
   const currentyear= await page.locator('.ui-datepicker-year').textContent();
   const currentmonth= await page.locator('.ui-datepicker-month').textContent();

   if(currentyear==year &&currentmonth==month ){
    break;
   }
   await page.locator('[title="Next"]').click();
   //await page.locator('[title="Prev"]').click();

   }

   
 const date1= await page.$$("//a[@class='ui-state-default']"); // return all date in varrriable all date xpath 


    // date selection using loop 

    // for(const dt of date1){
    //     if(await dt.textContent()==date){
    //         await dt.click();
    //         break;
    //     }
    // }



    // date selection without loop 

    await page.locator(`//a[normalize-space()='${date}']`).click();
await page.waitForTimeout(3000);

})