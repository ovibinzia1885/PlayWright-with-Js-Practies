const { test, expect } = require('@playwright/test');

let page;

test.beforeEach(async ({ browser }) => {

    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

});

test.afterEach(async () => {

await page.locator('#react-burger-menu-btn').click();
await page.locator('#logout_sidebar_link').click();
await page.close();


});

test('Home Test', async () => {

 const product=await page.$$('.inventory_item_description')
 await expect(product).toHaveLength(6);


})


test('add to cart', async () => {
      
    
    //Add to cart
    const productName = 'Sauce Labs Bike Light';
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.inventory_item_name')).toHaveText(productName);

    await page.waitForTimeout(3000);
    
        // Remove from cart

    await page.locator('#remove-sauce-labs-bike-light').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
    await page.waitForTimeout(3000);
})