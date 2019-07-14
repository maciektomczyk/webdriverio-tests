import CheckboxPage from '../pages/checkbox.page'
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('TheInternet Checkboxes can be checked', () => {
    it('Second checkbox should be selected by default', () => {
        CheckboxPage.open();
        expect(CheckboxPage.secondCheckbox.isSelected()).to.be.equal(true);
    });
    it('Should check first checkbox', () => {
        CheckboxPage.open()
        CheckboxPage.ableToCheck(CheckboxPage.firstCheckbox)
            .then(resolve => resolve.click())
            .catch(error => console.log(error))
    });
    it('Should throw error when checkbox already selected', () => {
        CheckboxPage.open()
        expect(
            CheckboxPage.ableToCheck(CheckboxPage.secondCheckbox)
        ).to.eventually.throw(Error)
    });
});