import { test, expect } from '@playwright/test';
test('Asseration', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator("//span[normalize-space()='PIM']").click();

    // click on dropdown

   await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

   // wating for option 
 await page.waitForTimeout(3000);

 const options= await page.$$("//div[@role='listbox']//span") // $$ use for multiple option 
 for(let option of options){
   const jobtitle= await option.textContent() // return actual text of options
   console.log(jobtitle);
   if(jobtitle.includes('QA Engineer')){ // option check 
    await option.click();
    break;

   }

 }


await page.waitForTimeout(3000);
   
    
})