import { test, expect } from '@playwright/test';
test("multi-dropdown",  async({page})=>{
    
   await page.goto('https://testautomationpractice.blogspot.com/');

   // multiple dropdown value select 

   //await page.selectOption('#colors',['Red','White','Green']);

   // Asseration - number of element in the dropdown 

  // const options= await page.locator('#colors option ')
   ///await expect(options).toHaveCount(7);


   // approach-2| using array for js | $$- return array options 

   //const options= await page.$$('#colors option ')
   //console.log("Total length of elements:", options.length)
   //await expect(options.length).toBe(7);

   //Approach-3 | value presence in the dropdown 

   const content=await page.locator('#colors').textContent();
   await expect(content.includes('Red')).toBeTruthy();


   await page.waitForTimeout(3000);
 

})