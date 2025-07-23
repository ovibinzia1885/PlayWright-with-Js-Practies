import { test, expect } from '@playwright/test';
test("dropdown",  async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   //   // Select "France" from dropdown
   //await page.locator('#country').selectOption({label:'France' });

   //await page.locator('#country').selectOption({value:'china'})

  // Wait for the dropdown to be visible
//   const dropdown = page.locator('#country');
//   await dropdown.waitFor({ state: 'visible' });

//   // Select "France" from dropdown
//   await dropdown.selectOption({ label: 'France' });

 //Aseeration in dropdown

 /*const totalcount=await page.locator('#country option') // option-1
 await expect(totalcount).toHaveCount(10);
*/

// Approach -2 

/*const totallen=await page.$$('#country option')// use $$ for store data in array
console.log("The total length:", totallen.length)

await expect(totallen.length).toBe(10);

  // Wait to observe (optional)
  await page.waitForTimeout(3000);
*/
// Approach-3 | check presence of value in dropdown 

//const content=  await page.locator('#country').textContent();
//await expect(content.includes('Australia')).toBeTruthy();


//Approach-4 | checking value in the dropdown - using loop


const options =await page.$$('#country option')
let status= false;

for(const option of options){
  console.log(await option.textContent());
  let value=await option.textContent();
  if(value.includes('Brazil')){
    status=true;
    break;
  }

}
await expect(status).toBeTruthy();


})