import {expect, Page, test} from "@playwright/test";


test.describe("Login/Logout check", async ()=>{
    test("TC03-Login User with incorrect email and password",async({page})=>{

        //Launch browser
        await page.goto('http://automationexercise.com');

        //Verify that home page is visible successfully
        await expect (page.getByRole("link",{name:"Home"})).toBeVisible();

        //Click on 'Signup / Login' button
        await page.getByRole("link",{name:"Signup / Login"}).click();

        //check if "Login to your account" is visible
        await expect  (page.getByRole("heading",{name:"Login to your account"})).toBeVisible();

        //Enter incorrect email address and password
        const loginForm = page.locator(".login-form");
        await loginForm.getByPlaceholder("Email Address").fill("dummy2@dummy.com");
        await loginForm.getByPlaceholder("Password").fill("dummy2");

        //click on login button
        await loginForm.getByRole("button",{name:"Login"}).click();
        await expect (loginForm.getByText("Your email or password is incorrect!")).toBeVisible();
        //
    });
});
