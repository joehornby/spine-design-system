import { test, expect } from '@playwright/test';

test('home page has flow editor heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Flow editor demo' })).toBeVisible();
});
