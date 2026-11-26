import { test, expect } from '@playwright/test';

test('GET products API returns products with a name', async ({ request }) => {
  const response = await request.get(
    'https://api.practicesoftwaretesting.com/products'
  );

  // Check that the API request was successful
  expect(response.status()).toBe(200);

  // Read the response body
  const products = await response.json();

  // Confirm that products were returned
  expect(products.data.length).toBeGreaterThan(0);

  // Check that the first product has a name
  expect(products.data[0].name).toEqual(expect.any(String));
});