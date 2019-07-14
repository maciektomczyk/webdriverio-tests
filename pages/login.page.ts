import Page from './page'

class LoginPage extends Page {
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get submitBtn() { return $('button[type="submit"]'); }
    get alert() { return $('#flash'); }

    submitForm(): void {
        this.submitBtn.click();
    }
}
export default new LoginPage('/login')