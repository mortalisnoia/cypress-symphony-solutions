const loginPageElements = require('./elements').elements;

class loginPage {

    visitLoginPage() {
        cy.visit('/')
    }

    fillUsername(username) {
        cy.get(loginPageElements.loginInput).clear().type(username)
    }

    fillPassword(password) {
        cy.get(loginPageElements.passwordInput).clear().type(password)
    }

    clickLoginButton() {
        cy.get(loginPageElements.loginButton).click();
    }

    fillCredentialsAndLogin(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton();
    }

} export default new loginPage();