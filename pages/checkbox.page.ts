class CheckboxPage {
    public get firstCheckbox() { return $$('#checkboxes input')[0]; }
    public get secondCheckbox() { return $$('#checkboxes input')[1]; }

    public open(): void {
        browser.url('/checkboxes')
    }

    public ableToCheck(elem: WebdriverIO.Element): Promise<WebdriverIO.Element> {
        return new Promise((resolve, reject) => {
            if (!elem.isSelected()) {
                resolve(elem)
            } else {
                reject(new Error("Element already selected!"))
            }
        })
    }
}
export default new CheckboxPage()