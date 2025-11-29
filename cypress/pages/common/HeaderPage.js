import BasePage from "./BasePage";

export class HeaderPage extends BasePage {

    logInOption = '#login2';
    cartOption = '#cartur';
    welcomeUserLabel = '#nameofuser';

    clickLogInOption() {
        this.clickElement(this.logInOption);
    }

    clickCartOption() {
        this.clickElement(this.cartOption);
    }

    assertUserLoggedIn(username) {
        this.assertContainsText(this.welcomeUserLabel, `Welcome ${username}`);
    }


}