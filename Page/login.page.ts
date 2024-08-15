import { Locator, Page } from "@playwright/test";

export default class loginPage {
  private page: Page;
  public loginForm: Locator;
  public signInForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = this.page.locator(".login-form");
    this.signInForm = this.page.locator(".signup-form");
  }

  openWebSite = async () => {
    await this.page.goto("http://automationexercise.com");
  };

  loginEmail = async (email: string) => {
    await this.loginForm.getByPlaceholder("Email Address").fill(email);
  };

  loginPassword = async (password: string) => {
    await this.loginForm.getByPlaceholder("Password").fill(password);
  };

  loginBtn = async () => {
    await this.loginForm.getByRole("button", { name: "Login" }).click();
  };

  newUserEmail = async (email: string) => {
    await this.signInForm.getByPlaceholder("Email Address").fill(email);
  };

  newUserName = async (name: string) => {
    await this.signInForm.getByPlaceholder("Name").fill(name);
  };

  signupBtn = async () => {
    await this.signInForm.getByRole("button", { name: "Signup" }).click();
  };
}
