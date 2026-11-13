import { Page, Locator } from '@playwright/test';
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButon: Locator;
   constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'name@emc.com' });
    this.password = page.locator('xpath=//body/div[1]/main/main/div[2]/div/div/form/div[2]/div[2]/div/input');
    this.loginButon=page.locator('xpath=//body/div[1]/main/main/div[2]/div/div/form/button');
  }
async goto() {
    await this.page.goto('http://172.20.137.126:3000/');
  }
  async login(name: string, password: string) {
    await this.username.fill(name);
    await this.password.fill(password);
    await this.loginButon.click();
    
  }
}
