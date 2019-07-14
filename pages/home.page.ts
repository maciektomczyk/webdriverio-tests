class HomePage {
    get title() { return $('h2'); }
    get logoutBtn() { return $('button[href="/logout"]'); }
}
export default new HomePage()