import Page from './page'

class CheckboxPage extends Page {
    get firstCheckbox() { return $$('#checkboxes input')[0]; }
    get secondCheckbox() { return $$('#checkboxes input')[1]; }

    ableToCheck(elem: WebdriverIO.Element): Promise<WebdriverIO.Element> {
        return new Promise((resolve, reject) => {
            if (!elem.isSelected()) {
                resolve(elem)
            } else {
                reject(new Error("Element already selected!"))
            }
        })
    }
}
export default new CheckboxPage('/checkboxes')