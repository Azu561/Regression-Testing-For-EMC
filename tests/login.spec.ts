import { test, expect } from '../fixtures/baseTest';

test('LoginSuccessfully', async ({ loginPage, page }) => {
  // 1. Use RegisterPage
  //await loginPage.goto();
  //await login .register('New User', 'new@example.com', 'Pass1234');

  // 2. Use LoginPage in the exact same test
  await loginPage.goto();
  await loginPage.login('new@example.com', 'Pass1234');
  await expect(page).toHaveURL(/customers-route/);
});