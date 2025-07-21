import {test,expect} from '@playwright/test'
import { link } from 'fs';
test('multilple link', async ({page})=>{

await page.goto("https://demowebshop.tricentis.com");

// const links=await page.$$('a');
// for(const link of links){
//     const linkpage= await link.textContent();
//     console.log(linkpage)
// }


const pronames=await page.$$("//div[@class='details']//h2/a");

for(const proname of pronames){
    const provalue=await proname.textContent();
    console.log(provalue)
}


})