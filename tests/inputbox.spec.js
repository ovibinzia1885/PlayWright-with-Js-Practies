import { test, expect } from '@playwright/test';
test("Handle Input",  async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');

    //input box 
    await expect(await page.locator("//input[@id='firstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='firstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='firstName']")).toBeEditable()
    await expect(await page.locator("//input[@id='firstName']")).toBeEnabled()
    await page.fill("//input[@id='firstName']",'Nazmul');
    await page.fill("//input[@id='lastName']",'hoque')
     await page.fill("//input[@id='userEmail']",'hoque@gmail.com')
    
    //radio button 
    await page.check("//label[normalize-space()='Male']"); //male radio button
    await expect(await page.locator("//label[normalize-space()='Male']")).toBeChecked()
     await expect(await page.locator("//label[normalize-space()='Male']").isChecked()).toBeTruthy();

     await expect(await page.locator("//label[normalize-space()='Female']").isChecked()).toBeFalsy();
     await page.waitForTimeout(2000)

})