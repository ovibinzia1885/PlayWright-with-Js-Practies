import { test, expect } from '@playwright/test';


    test('Take a screenshot of the page', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
        await page.screenshot({ path: 'tests/screenshort/'+ Date.now() +'Books.png'});
       
    });

    test('Take a screenshot of the page with full page option', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
        await page.screenshot({ path: 'tests/screenshort/'+ Date.now() +'FullPage.png', fullPage: true });
    });

    test.only('Take a screenshot of the elements', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
       
            await page.locator("//body/div[@class='master-wrapper-page']/div[@class='master-wrapper-content']/div[@class='master-wrapper-main']/div[@class='center-3']/div[@class='page home-page']/div[@class='page-body']/div[@class='product-grid home-page-product-grid']/div[3]/div[1]").screenshot({ path: 'tests/screenshort/'+ Date.now() +'14.1-inch Laptop.png' });
        
    })

   
