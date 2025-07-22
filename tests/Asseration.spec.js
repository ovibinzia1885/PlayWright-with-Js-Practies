import { test, expect } from '@playwright/test';
test('Asseration', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/register');

    //expect(page).toHaveURL()	Page has URL
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/register')
    //expect(page).toHaveTitle()	Page has title
    await expect(page).toHaveTitle('Demo Web Shop. Register');

   // expect(locator).toBeVisible()	Element is visible
   const logo=await page.locator('.header-logo');
   await expect(logo).toBeVisible();
   //expect(locator).toBeEnabled()	Control is enabled
   const SearchBox= await page.locator('#small-searchterms');
   await expect(SearchBox).toBeEnabled();

  // expect(locator).toBeChecked()	Checkbox is checked
  const RadioButton=await page.locator('#gender-male');
  RadioButton.click();
  await expect(RadioButton).toBeChecked()

  //expect(locator).toHaveAttribute()	Element has attribute

  const attBute= await page.locator('#register-button')
  await expect(attBute).toHaveAttribute('type','submit')

  //expect(locator).toHaveText()	Element matches text

  await expect(await page.locator('.page-title h1')).toHaveText('Register')    //full match text 

    await expect(await page.locator('.page-title h1')).toContainText('Reg') // partial match text



})