import { expect } from 'chai';
import LoginPage from '../pages/login.page'
import HomePage from '../pages/home.page'
import { equal } from 'assert';

describe('TheInternet login page', () => {
	it('should be able to login when passing correct credentials', () => {
		LoginPage.open();
		LoginPage.username.setValue('tomsmith');
		LoginPage.password.setValue('SuperSecretPassword!');
		LoginPage.submitForm();
		expect(HomePage.title.getText()).to.be.equal('Secure Area');
	});
	it('should not be able to login when passing incorrect credentials', () => {
		LoginPage.open();
		LoginPage.username.setValue('janusz');
		LoginPage.password.setValue('janusz');
		LoginPage.submitForm();
		expect(LoginPage.alert.getText()).to.contain('Your username is invalid!')
	});
});
