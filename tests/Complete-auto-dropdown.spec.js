import { test, expect } from '@playwright/test';
test("Auto Suggestion",  async({page})=>{

  await page.goto('https://www.redbus.in/');

  // Step 2: Wait for the page to be interactive
  //await page.waitForLoadState('domcontentloaded');
  //await page.waitForTimeout(3000); // wait for dynamic scripts to fully load

  // Step 3: Locate "From" input using placeholder
  const fromInput = page.getByPlaceholder("div[class='inputAndSwapWrapper___ef7421'] div[class='labelCityWrapper___139ffd']");
  await fromInput.waitFor({ state: 'visible' });

  // Step 4: Type city name (e.g., "Hyd")
  await fromInput.click();
  await fromInput.fill('Hyd');

  // Step 5: Wait for auto-suggestions to appear
  const suggestionList = page.locator('.autoFill li');
  await expect(suggestionList.first()).toBeVisible();

  // Step 6: Click on the first suggestion (e.g., "Hyderabad")
  const firstSuggestion = suggestionList.first();
  const suggestionText = await firstSuggestion.textContent();
  console.log('Selecting From City:', suggestionText);
  await firstSuggestion.click();

  // Step 7: Optional — assert the selected value is shown in input
  await expect(fromInput).toHaveValue(/Hyderabad/i);
})
