import { test, expect } from '@playwright/test';


/* test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
test.slow() marks the test as slow and triples the test timeout.*/
/*test.only('Test1', async ({ page }) => {

    console.log("Test1 is running");


})

test.only('Test2', async ({ page }) => {
    console.log("Test2 is running");

    
})
test.skip('Test3', async ({ page }) => {
    console.log("Test3 is running");

    
})

test('Test4', async ({ page, browserName }) => {
    console.log("Test4 is running");
    if(browserName === 'firefox') {
        test.skip();
    }   

    
})
// fixme 
test('Test5', async ({ page }) => {
    test.fixme();
    console.log("Test5 is running");
    
});

//fail 

test('Test6', async ({ page }) => {
    test.fail();
    console.log("Test6 is running");
    expect(1).toBe(2); // This will fail the test
    
});

test('Test6', async ({ page, browserName }) => {
    console.log("Test6 is running");
    if (browserName === 'firefox') {
        test.fail(); // This will mark the test as failed if running in Firefox
    }
    
});*/

// slow

test('Test7', async ({ page, browserName }) => {
 
   // test.slow(); // This will mark the test as slow
   test.setTimeout(30000); // Set a custom timeout for this test
    await page.goto('https://demowebshop.tricentis.com/');
    console.log("Test7 is running");
    
});