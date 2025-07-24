import { test, expect } from '@playwright/test';
test.skip('Alert with ok ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.
   
   // dialogn window handla alert 
    page.on('dialog', async dialog =>{     //page.on('dialog') listener must handle the dialog. 

expect(dialog.type()).toContain('alert')
expect (dialog.message()).toContain('I am an alert box!')
await dialog.accept();

    
    })
    await page.click("//button[@id='alertBtn']")
 
})


test.skip('Alert with Confirmation dialong with ok or cancel ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.
   
   // dialogn window handla alert 
    page.on('dialog', async dialog =>{     //page.on('dialog') listener must handle the dialog. 

expect(dialog.type()).toContain('confirm')
expect (dialog.message()).toContain('Press a button!')
await dialog.accept();// close window by using ok button 
//await dialog.dismiss()// close window by using cancel button 

    
    })
    await page.click("//button[@id='confirmBtn']");
     await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
     await page.waitForTimeout(5000);
 
})



test('prompt dialong ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.
   
   // dialogn window handla alert 
    page.on('dialog', async dialog =>{     //page.on('dialog') listener must handle the dialog. 

expect(dialog.type()).toContain('prompt')
expect (dialog.message()).toContain('Please enter your name:')
expect(dialog.defaultValue()).toContain('Harry Potter')
await dialog.accept('ovi');// close window by using ok button 


    
    })
    await page.click("//button[@id='promptBtn']");
     await expect(page.locator("//p[@id='demo']")).toHaveText('Hello ovi! How are you today?');
     await page.waitForTimeout(5000);
 
})

