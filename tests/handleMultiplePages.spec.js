import { test, expect, chromium } from '@playwright/test';

test('Handle multiple window  ', async () => {

    console.log("Handle multiple window is running");

    const browser= await chromium.launch()
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const allpages = context.pages();
    console.log("All pages: ", allpages.length);

    page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    page2.goto('https://demowebshop.tricentis.com/login');
    
    await expect(page2).toHaveTitle('Demo Web Shop. Login');
})

test.only('Handle multiple page ', async () => {

    console.log("Handle multiple window is running");

    const browser= await chromium.launch()
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const allpages = context.pages();
    console.log("All pages: ", allpages.length);

    page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagepromise=context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    const newpage=await pagepromise;
    await expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software');

    
    await newpage.waitForTimeout(5000);
    await browser.close();


})