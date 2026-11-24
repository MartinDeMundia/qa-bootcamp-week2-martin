import { test, expect } from '@playwright/test';

const baseURL = 'https://practicesoftwaretesting.com';

test.describe('Practice Software Testing - Toolshop - v5.0', () => {

  // verify the homepage title
  test('should display the correct homepage title', async ({ page }) => {
    await page.goto(baseURL);

    await expect(page).toHaveTitle(
      'Practice Software Testing - Toolshop - v5.0'
    );
  });

  });