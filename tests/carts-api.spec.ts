
import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test('should create a cart and add a product successfully', async ({ request }) => {
  let cartId: string | undefined;

  try {
    // Get an available product
    const productsResponse = await request.get(`${API_URL}/products`);

    expect(productsResponse.status()).toBe(200);

    const productsBody = await productsResponse.json();

    expect(productsBody.data.length).toBeGreaterThan(0);

    const productId = productsBody.data[0].id;

    expect(productId).toBeTruthy();

    // Create a new cart
    const createCartResponse = await request.post(`${API_URL}/carts`);

    expect(createCartResponse.status()).toBe(201);

    const createCartBody = await createCartResponse.json();

    expect(createCartBody.id).toBeTruthy();
    expect(typeof createCartBody.id).toBe('string');

    cartId = createCartBody.id;

    // add the product to the cart
    const addProductResponse = await request.post(
      `${API_URL}/carts/${cartId}`,
      {
        data: {
          product_id: productId,
          quantity: 1,
        },
      }
    );

    expect(addProductResponse.status()).toBe(200);

    const addProductBody = await addProductResponse.json();

    expect(addProductBody).toHaveProperty(
      'result',
      'item added or updated'
    );
  } finally {
    // delete the cart after the test
    if (cartId) {
      await request.delete(`${API_URL}/carts/${cartId}`);
    }
  }
});

test('should return 404 when requesting a cart that does not exist', async ({ request }) => {
  const nonExistentCartId = `missing-cart-${Date.now()}`;

  const response = await request.get(
    `${API_URL}/carts/${nonExistentCartId}`
  );

  expect(response.status()).toBe(404);
});
