import { test, expect } from '@playwright/test';

test('Website contains my name', async ({ page }) => {
  await page.goto('https://eliostruyf.com');

  const header = page.locator('header a').first();
  await expect(header).toHaveText(/Elio Struyf/i);
});
