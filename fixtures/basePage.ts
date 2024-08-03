import {test as baseTest} from "@playwright/test";
import loginPage from "../Page/login.page";

type MyFixtures ={
    loginPage: loginPage;
}

export const test = baseTest.extend<MyFixtures>({
    loginPage : async ({page},use)=>{
        await use(new loginPage(page));
    }

    }
)

export {expect} from "@playwright/test";



