const { test, expect } = require('@playwright/test');


test.beforeAll(async () => {
    console.log("Running before all tests");
});

test.afterAll(async () => {
    console.log("Running after all tests");
});


test.describe.only('Group1', () => {
    test('Test1', async ({ page }) => {
    console.log("Test1 is running");
})

test('Test2', async ({ page }) => {
    console.log("Test2 is running");
  
})


})


test.describe('Group2', () => {
    test('Test3', async ({ page }) => {
    console.log("Test3 is running");

});
  

test('Test4', async ({ page }) => {

});
})


