
//A Page can have one or more Frame objects attached to it. Each page has a main frame and page-level interactions (like click) are assumed to operate in the main frame.

//A page can have additional frames attached with the iframe HTML tag. These frames can be accessed for interactions inside the frame.

import { test, expect } from '@playwright/test';
test('Iframe', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const totalframe=await page.frames()
    console.log("Total number of frame:", totalframe.length);

    //Approach-1: using Frame object name or URL 

    // Get frame using the frame's name attribute
     //const frame = page.frame('frame-login');


     // Get frame using frame's URL

     //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    //await frame1.fill("[name='mytext1']",'ovy');
    //await page.waitForTimeout(3000);

//Approach-2: using frame Locator 

 const username = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
 username.fill('Nazmul')
 await page.waitForTimeout(3000);



})