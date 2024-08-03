import { test, expect } from "../fixtures/login.fixture";

test.describe("Login/Logout check", async () => {
  test.beforeEach(
    "open and check login page",
    async ({ loginPage, page, homePage }) => {}
  );
  test("TC03-Login User with incorrect email and password", async ({
    loginPage,
    page,
    homePage,
  }) => {
    //Launch browser
    await homePage.openWebSite();

    //Verify that home page is visible successfully
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();

    //Click on 'Signup / Login' button
    await homePage.openLoginpage();

    //check if "Login to your account" is visible
    await expect(
      page.getByRole("heading", { name: "Login to your account" })
    ).toBeVisible();

    //Enter incorrect email address and password

    await loginPage.loginEmail("dummy2@dummy.com");
    await loginPage.loginPassword("dummy2");

    //click on login button
    await loginPage.loginBtn();
    await expect(
      loginPage.loginForm.getByText("Your email or password is incorrect!")
    ).toBeVisible();
    //
  });
});
