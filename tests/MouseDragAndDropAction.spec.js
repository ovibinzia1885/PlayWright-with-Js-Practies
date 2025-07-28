import { test, expect } from '@playwright/test';

test('MouseDragAndDropAction', async ({ page }) => {


await page.goto('https://testautomationpractice.blogspot.com/');

 const sitm=await page.locator('#draggable')
 const targetele=await page.locator('#droppable')

 // Approach 1

  /*await sitm.hover()
  await page.mouse.down()


  await targetele.hover()
  await page.mouse.up()
  */
 await sitm.dragTo(targetele);

  await page.waitForTimeout(3000);

})