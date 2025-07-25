import { test, expect } from '@playwright/test';
import { allowedNodeEnvironmentFlags } from 'process';
test('Iframe', async ({ page }) => {

await page.goto('https://ui.vision/demo/webtest/frames/');

const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

frame3.locator("input[name='mytext3']").fill('Test')


// Nested frame 
 const childframe= await frame3.childFrames()
 childframe[0].locator().click


 // Need repeart vedio 


})