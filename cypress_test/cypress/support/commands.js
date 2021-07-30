import LoginPage from '../pages/LoginPage';
import credentials from '../fixtures/credentials.json'

Cypress.Commands.add("login", (email, password) => {
	const loginPage = new LoginPage();
	loginPage.visitLogin();
	loginPage.setEmail(credentials.email);
	loginPage.setPassword(credentials.password);
	loginPage.submitLogin();
})