import {test as baseTest} from "@playwright/test";
import loginPage from "../Page/login.page";

type MyFixtures ={
    loginPage: loginPage;
}

const fixture = baseTest.extend<MyFixtures>({

    }

)



