
import { test, expect } from '@playwright/test';

const baseURL = 'https://practicesoftwaretesting.com';

test.describe('Practice Software Testing - Toolshop - v5.0', () => {

  // Verify product search returns only matching products
  test('should return only products containing pliers in their names', async ({ page }) => {
    await page.goto(baseURL);

    const searchBox = page.getByRole('textbox', { name: /search/i });

    await searchBox.fill('pliers');
    await searchBox.press('Enter');

    // Wait until matching search results are displayed
    const productNames = page.getByRole('heading', { level: 5 });

    await expect.poll(async () => {
      return await productNames.allTextContents();
    }).not.toHaveLength(0);

    // Read the displayed product names
    const names = await productNames.allTextContents();

    expect(names.length).toBeGreaterThan(0);

    // Confirm every product name contains "pliers"
    for (const name of names) {
      expect(name.toLowerCase()).toContain('pliers');
    }
  });

});
