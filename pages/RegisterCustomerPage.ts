import { Page, Locator } from '@playwright/test';
export class RegisterPage {

  readonly page: Page;
  readonly coresms: Locator;
  readonly addcustomer: Locator;
  readonly customercode: Locator;
  readonly phone: Locator;
  readonly fname: Locator;


  constructor(page: Page) {
    this.page = page;
    this.coresms = page.getByRole('button', { name: 'Core SMMS' });
    this.addcustomer = page.getByRole('button', { name: 'Add Customer' });
    this.customercode = page.locator('xpath=//body/div[1]/main/div/div/main/div/div[3]/div/div[2]/div[1]/input');
    this.phone = page.locator('xpath=//body/div[1]/main/div/div/main/div/div[3]/div/div[2]/div[2]/input');
    this.fname = page.locator('xpath=//body/div[1]/main/div/div/main/div/div[3]/div/div[2]/div[3]/input');
  }
  async goto() {
    await this.page.goto('http://172.20.137.126:3000/');
  }
  async register() {
    await this.coresms.click();
    await this.addcustomer.click();

  }
}