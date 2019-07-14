export default abstract class Page {
    constructor(protected url: string) {}

    open() {
        browser.url(this.url)
    }
}