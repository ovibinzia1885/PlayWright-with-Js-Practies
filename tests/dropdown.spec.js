import { test, expect } from '@playwright/test';
test("dropdown",  async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   //   // Select "France" from dropdown
   //await page.locator('#country').selectOption({label:'France' });

   await page.locator('#country').selectOption({value:'china'})

  // Wait for the dropdown to be visible
//   const dropdown = page.locator('#country');
//   await dropdown.waitFor({ state: 'visible' });

//   // Select "France" from dropdown
//   await dropdown.selectOption({ label: 'France' });

 

  // Wait to observe (optional)
  await page.waitForTimeout(3000);

})