class SettingsPage {

	visitSettings() {
		cy.visit('/settings');
		return this;
	}

	getURLField() {
		return cy.get('[placeholder="URL of profile picture"]');
	}

	getUsernameField() {
		return cy.get('[placeholder="Username"]');
	}

	getBioField() {
		return cy.get('[placeholder="Short bio about you"]');
	}

	getEmailField() {
		return cy.get('[placeholder="Email"]');
	}

	getNewPasswordField() {
		return cy.get('[placeholder="New Password"]');
	}

	updateSettings() {
		cy.get('form').submit();
		return this;
	}

	logout() {
		cy.get('.btn-outline-danger').click();
		return this;
	}
}

export default SettingsPage;