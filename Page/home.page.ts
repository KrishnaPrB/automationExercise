import { Page } from "@playwright/test";

export default class homePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  openWebSite = async () => {
    await this.page.goto("http://automationexercise.com");
  };

  openLoginpage = async () => {
    await this.page.getByRole("link", { name: " Signup / Login" }).click();
  };

  logOutLink = async () => {
    await this.page.getByRole("link", { name: "Logout" }).click();
  };
}
