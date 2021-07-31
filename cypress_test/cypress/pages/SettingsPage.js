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

	getUserPic() {
		return cy.get('.user-pic').find('img');
	}

	getUserImage() {
		return cy.get('.user-img').find('img');
	}

	getUserName() {
		return cy.get('.h4');
	}

	getUserNameLink() {
		return cy.get('.nav-link');
	}

	getUserBio() {
		return cy.get('.p');
	}

	updateSettings() {
		cy.get('form').submit();
		return this;
	}

	logout() {
		cy.get('.btn-outline-danger').click();
		return this;
	}

	settingsPageScreen() {
		return cy.get('.settings-page');
	}
}

export default SettingsPage;