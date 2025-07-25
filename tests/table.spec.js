import { test, expect } from '@playwright/test';
test("Table handle ",  async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   const table= await page.locator('#productTable');
    //total number of row and column 
    const totalnumber=table.locator('thead tr th')

    console.log("The number of columns:", await totalnumber.count());

    const row=await table.locator('tbody tr')
    console.log("The number of row:", await row.count())

    expect(await totalnumber.count()).toBe(4);
    expect(await row.count()).toBe(5);


// 2- Select the table checkbox for specifics  product 4
// filter the value | Select the signle option 
/* const matchRow=row.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
 })
await matchRow.locator('input').check();

*/
  

// Select the multiple option or multiple product by re-useable function in js 
//await SelectOption(row,page,'Smartphone') // call the function 
//await SelectOption(row,page,'Laptop')
//await SelectOption(row,page,'Tablet ')


// print all the product Details by using looping statement 

// Nested for loop 
/*for(let i=0;i< await row.count();i++){
     const rows=row.nth(i); // count
     const tds=rows.locator('td')/// represent colum 

    for(let j=0;j<await tds.count()-1;j++ ){
       console.log(await tds.nth(j).textContent()); // read data 

    }
}
*/

/// pagination data- read data from all pages 

const pagination=await page.locator('.pagination li a')// total pagnination link 
console.log("total pagination number",await pagination.count());

// for loop for pagination 
for(let p=0; p<await pagination.count(); p++){
    if(p>0) // check page by default page 1 displayed 
        {
        await pagination.nth(p).click();// ntg start from 0 index 

    }
    for(let i=0;i< await row.count();i++){
     const rows=row.nth(i); // count
     const tds=rows.locator('td')/// represent colum 

    for(let j=0;j<await tds.count()-1;j++ ){
       console.log(await tds.nth(j).textContent()); // read data 

    }
    
    }
    await page.waitForTimeout(3000);

}

await page.waitForTimeout(3000);



})

// Function Creation | re-useable function 

async function SelectOption(row,page,name){
    const matchRow=row.filter({
    has: page.locator('td'),
    hasText:name
 })
await matchRow.locator('input').check();

}