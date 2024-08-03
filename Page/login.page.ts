import {Locator, Page} from "@playwright/test";


export default class loginPage{
    private page:Page;
    private loginForm: Locator;


    constructor(page:Page){
        this.page=page;
        this.loginForm = this.page.locator(".login-form")
    }

    openWebSite = async () =>{
        await this.page.goto('http://automationexercise.com')
    }

    loginEmail = async(email:string)=>{
        await this.loginForm.getByPlaceholder("Email Address").fill(email);
    }

    loginPassword = async(password:string)=>{
        await this.loginForm.getByPlaceholder("Password").fill(password);
    }


}
