class LoginPage {
    public get username() { return $('#username'); }
    public get password() { return $('#password'); }
    public get submitBtn() { return $('button[type="submit"]'); }
    public get alert() { return $('#flash'); }

    public open(): void {
        browser.url('/login');
    }

    public submitForm(): void {
        this.submitBtn.click();
    }
}
export default new LoginPage()