
import { test, expect } from '@playwright/test';
import { ProductListPage } from '../pages/product-list.page';

test('should return only products containing pliers in their names', async ({ page }) => {
  const productList = new ProductListPage(page);

  await productList.goto();
  await productList.searchFor('pliers');

  // Wait until the search results have updated.
  await expect.poll(async () => {
    const names = await productList.getProductNames();

    return names.length > 0 &&
      names.every(name => name.toLowerCase().includes('pliers'));
  }).toBe(true);

  const productNames = await productList.getProductNames();

  expect(productNames.length).toBeGreaterThan(0);

  for (const name of productNames) {
    expect(name.toLowerCase()).toContain('pliers');
  }
});






// import { test, expect } from '@playwright/test';

// const baseURL = 'https://practicesoftwaretesting.com';

// test.describe('Practice Software Testing - Toolshop - v5.0', () => {

//   // Verify product search returns only matching products
//   test('should return only products containing pliers in their names', async ({ page }) => {
//     await page.goto(baseURL);

//     const searchBox = page.getByRole('textbox', { name: /search/i });

//     await searchBox.fill('pliers');
//     await searchBox.press('Enter');

//     // Wait until matching search results are displayed
//     const productNames = page.getByRole('heading', { level: 5 });

//     await expect.poll(async () => {
//       return await productNames.allTextContents();
//     }).not.toHaveLength(0);

//     // Read the displayed product names
//     const names = await productNames.allTextContents();

//     expect(names.length).toBeGreaterThan(0);

//     // Confirm every product name contains "pliers"
//     for (const name of names) {
//       expect(name.toLowerCase()).toContain('pliers');
//     }
//   });

// });
