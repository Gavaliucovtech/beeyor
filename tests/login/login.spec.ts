import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/login/LoginPage';

test('opens the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await expect(page).toHaveURL('/login');
});