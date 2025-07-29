import {test,expect} from '@playwright/test'
test('Keybord Actions', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Nazmul Hoque ovy');
   //await page.keyboard.type('[name="text1"]','Hello World!');
 await page.locator('[name="text1"]').click();
    //ctrl + A

await page.keyboard.press('Control+A');

    //ctrl + c
  await page.keyboard.press('Control+C');
    //tab key
  await page.keyboard.press('Tab');

      //ctrl + v

  await page.keyboard.press('Control+V');

 await page.waitForTimeout(5000);
})