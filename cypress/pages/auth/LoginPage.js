import BasePage from "../common/BasePage";

export class LoginPage extends BasePage {
    
    usernameInput = '#loginusername';
    passwordInput = '#loginpassword';
    loginButton = 'button[onclick="logIn()"]';

    enterUsername(username) {
        this.typeText(this.usernameInput, username);
    }

    enterPassword(password) {
        this.typeText(this.passwordInput, password);
    }

    clickLoginButton() {
        this.clickElement(this.loginButton);
    }

    verifyLoginButtonDisappeared() {
        this.assertElementNotVisible(this.loginButton);
    }
}