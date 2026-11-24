
import { test, expect } from '@playwright/test';

const baseURL = 'https://practicesoftwaretesting.com';

test.describe('Practice Software Testing - Toolshop - v5.0', () => {


  // verify invalid login is rejected
  test('should reject invalid login credentials', async ({ page }) => {
    await page.goto(`${baseURL}/auth/login`);

    await page.getByRole('textbox', { name: /email/i })
      .fill('mugambi@gmail.com');

    await page.getByLabel(/password/i)
      .fill('WrongPassword123!');

    await page.getByRole('button', { name: /login/i }).click();

    await expect(
      page.getByText('Invalid email or password', { exact: true })
    ).toBeVisible();
  });

});
