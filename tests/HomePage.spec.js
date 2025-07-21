const{test,expect}=require('@playwright/test');

test('Home page', async({page})=>{
   await page.goto('https://demoblaze.com/index.html');
   const PageTitle= await page.title();
   console.log('The Page Title is :', PageTitle);
    await expect(page).toHaveTitle('STORE');

    const pageUrl= await page.url();
    console.log('This URL Is',pageUrl);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.close();
})