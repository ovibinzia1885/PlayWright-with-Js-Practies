import { test, expect } from '@playwright/test';

test('File upload', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    await page.waitForSelector('#uploadFile')


    //await page.locator('#uploadFile').click();


   await page.locator('#uploadFile').setInputFiles("F:\\AutomationPlaywrite\\tests\\uploadfile\\Employee Salary Certificate.pdf");
    await page.waitForTimeout(3000)

})


test.only('File upload- multiple', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests\\uploadfile\\Employee Salary Certificate.pdf','tests\\uploadfile\\AIdoc.pdf'])

    await  page.waitForTimeout(3000);
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Employee Salary Certificate.pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('AIdoc.pdf');
    await page.waitForTimeout(3000);

    //Remove the uploaded file

   await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(3000);  
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

    await page.waitForTimeout(3000);                                                  
})