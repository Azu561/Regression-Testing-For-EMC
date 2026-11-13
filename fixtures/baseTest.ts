import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RgistrCustomerPage} from '../pages/RegiisterCustomerPage';

// 1. Declare the types of your custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
  cpage:RgistrCustomerPage;
};
// 2. Extend base test to initialize each POM
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
cpage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});
export { expect } from '@playwright/test';
