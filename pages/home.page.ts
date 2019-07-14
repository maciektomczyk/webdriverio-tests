class HomePage {
    public get title() { return $('h2'); }
    public get logoutBtn() { return $('button[href="/logout"]'); }
}
export default new HomePage()