import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/home/HomePage';

test('opens the home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open();
  await expect(page).toHaveURL('/');
});