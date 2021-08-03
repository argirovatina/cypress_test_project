class LoginPage {

	visitLogin() {
		cy.visit('/#/login');
		return this;
	}

	setEmail(email) {
		cy.get('[type=email]').type(email);
		return this;
	}

	setPassword(password) {
		cy.get('[type="password"]').type(password);
		return this;
	}

	submitLogin() {
		cy.get('form').submit();
		return this;
	}

	homePageScreen() {
		return cy.get('.home-page');
	}

	loginPageScreen() {
		return cy.get('.auth-page');
	}

	invalidLoginMsg() {
		return cy.get('.error-messages');
	}
}

export default LoginPage;