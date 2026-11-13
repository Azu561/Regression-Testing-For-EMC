
// Import from your custom fixture file instead of '@playwright/test'
import { test, expect } from '../fixtures/baseTest';
import { } from '../pages/RegisterCustomerPage';

// Pass { registerPage } directly into any test that needs it
test('should register a new user successfully', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('Jane Doe', 'SecurePass123');

  //await expect(page).toHaveURL(/welcome/);
});

// test('should show error if email is already taken', async ({ registerPage, page }) => {
//   await registerPage.goto();
//   await registerPage.register('Jane Doe', 'existing@example.com', 'SecurePass123');
  
//   await expect(page.getByText('Email already exists')).toBeVisible();
// });
