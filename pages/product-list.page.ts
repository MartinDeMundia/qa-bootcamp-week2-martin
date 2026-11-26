
import { expect, type Locator, type Page } from '@playwright/test';

export class ProductListPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: /search/i });
    this.productNames = page.getByRole('heading', { level: 5 });
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchFor(product: string) {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
  }

  async getProductNames(): Promise<string[]> {
    return (await this.productNames.allTextContents())
      .map(name => name.trim())
      .filter(name => name.length > 0);
  }
}
