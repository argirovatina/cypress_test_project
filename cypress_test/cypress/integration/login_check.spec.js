import LoginPage from '../pages/LoginPage';
import resolution from '../fixtures/resolution.json';
import credentials from '../fixtures/credentials.json'

const sizes = [resolution.desktopResolution, resolution.mobileResolution];

sizes.forEach((size) => {
	describe('when login', () => {

		let invalidMsg = 'email or password is invalid';
		const loginPage = new LoginPage();
		const width = size[0];
		const height = size[1];

		beforeEach(function() {
			cy.viewport(width, height);
			loginPage.visitLogin();
	  	});

		it(`logs in with valid credentials, size: ${width} x ${height}`, () => {
			loginPage.setEmail(credentials.email);
			loginPage.setPassword(credentials.password);
			loginPage.submitLogin();
			loginPage.homePageScreen().should('be.visible');
		});

		it(`cannot log in with account name and password, size: ${width} x ${height}`, () => {
			loginPage.setEmail('testAccountUser');
			loginPage.setPassword(credentials.password);
			loginPage.submitLogin();
			loginPage.loginPageScreen().should('be.visible');
		});

		it(`cannot log in with correct email and CAPS password, size: ${width} x ${height}`, () => {
			loginPage.setEmail('argirovachristina@gmail.com');
			loginPage.setPassword(credentials.password.toUpperCase());
			loginPage.submitLogin();
			loginPage.invalidLoginMsg().should('include.text', invalidMsg);
		});

		it(`cannot log in with invalid email and correct password, size: ${width} x ${height}`, () => {
			loginPage.setEmail('test@gmail.com');
			loginPage.setPassword(credentials.password);
			loginPage.submitLogin();
			loginPage.invalidLoginMsg().should('include.text', invalidMsg);
		});
				
		it(`cannot log in with valid email and invalid password, size: ${width} x ${height}`, () => {
			loginPage.setEmail(credentials.email);
			loginPage.setPassword('test');
			loginPage.submitLogin();
			loginPage.invalidLoginMsg().should('include.text', invalidMsg);
		});

		it(`cannot log in with invalid both email and password, size: ${width} x ${height}`, () => {
			loginPage.setEmail('test@gmail.com');
			loginPage.setPassword('test');
			loginPage.submitLogin();
			loginPage.invalidLoginMsg().should('include.text', invalidMsg);
		});

		it(`cannot log in with empty both email and password, size: ${width} x ${height}`, () => {
			loginPage.submitLogin();
			loginPage.invalidLoginMsg().should('include.text', invalidMsg);
		});
	});
})