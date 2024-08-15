import { test, expect } from "../fixtures/login.fixture";

test.describe("Login/Logout check", async () => {
  test.beforeEach("open and check login page", async ({ loginPage, page, homePage }) => {
    //Launch browser
    await homePage.openWebSite();

    //Verify that home page is visible successfully
    await page.waitForLoadState();
    const title = await page.title();
    await expect(title).toBe("Automation Exercise");

    //Click on 'Signup / Login' button
    await homePage.openLoginpage();

    //check if "Login to your account" is visible
    await expect(page.getByRole("heading", { name: "Login to your account" })).toBeVisible();
  });

  test("TC03-Login User with incorrect email and password", async ({ loginPage }) => {
    //Enter incorrect email address and password

    await loginPage.loginEmail("dummy2@dummy.com");
    await loginPage.loginPassword("dummy2");

    //click on login button
    await loginPage.loginBtn();
    await expect(loginPage.loginForm.getByText("Your email or password is incorrect!")).toBeVisible();
    //
  });

  test("TC-04 Logout User", async ({ page, loginPage, userEmail, userPassword, userName, homePage }) => {
    //Enter correct email address and password
    await loginPage.loginEmail(userEmail);
    await loginPage.loginPassword(userPassword);

    //click on login button
    await loginPage.loginBtn();
    expect(await page.getByText(`Logged in as ${userName}`)).toBeVisible();

    //Click 'Logout' button
    await homePage.logOutLink();

    //Verify that user is navigated to login page
    expect(await page.title()).toBe("Automation Exercise - Signup / Login");
  });

  test("TC-05 Register User with existing email", async ({
    page,
    loginPage,
    userEmail,
    userPassword,
    userName,
    homePage,
  }) => {
    //Verify 'New User Signup!' is visible
    await expect(page.getByRole("heading", { name: "New User Signup!" })).toBeVisible();

    //Enter name and already registered email address
    await loginPage.newUserName(userName);
    await loginPage.newUserEmail(userEmail);

    //Click 'Signup' button
    await loginPage.signupBtn();

    //Verify error 'Email Address already exist!' is visible
    await expect(loginPage.signInForm.getByText("Email Address already exist!")).toBeVisible();
  });
});
