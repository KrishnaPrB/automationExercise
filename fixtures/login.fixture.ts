import { test as baseTest } from "@playwright/test";
import loginPage from "../Page/login.page";
import homePage from "../Page/home.page";

type MyFixtures = {
  loginPage: loginPage;
  homePage: homePage;
  userEmail: string;
  userPassword: string;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new homePage(page));
  },

  userEmail: "dummy1@dummy.com",
  userPassword: "dummy",
});

export { expect } from "@playwright/test";
