import SettingsPage from '../pages/SettingsPage';
import resolution from '../fixtures/resolution.json';
import credentials from '../fixtures/credentials.json'
import settings from '../fixtures/user_settings.json';

const sizes = [resolution.desktopResolution, resolution.mobileResolution];

sizes.forEach((size) => {
	describe('When setup user account', () => {

		const settingsPage = new SettingsPage();
		const width = size[0];
		const height = size[1];

		beforeEach(function() {
	    	cy.viewport(width, height);
			cy.login(credentials.email, credentials.password);
			settingsPage.visitSettings();
	  	});

	  	it(`User can update image in user settings with a URL, size: ${width} x ${height}`, () => {
	  		settingsPage.getURLField.type(settings.imageUrl);
	  		settingsPage.updateSettings();
	  		settingsPage.getUserPic().should('have.attr', 'src').should('include', settings.imageUrl);
	  		settingsPage.getUserImage().should('have.attr', 'src').should('include', settings.imageUrl);
	  	});

	  	it(`User can update image in user settings with a text, size: ${width} x ${height}`, () => {
	  		settingsPage.getURLField.type('image');
	  		settingsPage.updateSettings();
	  		settingsPage.getUserPic().should('have.attr', 'src').should('include', 'image');
	  		settingsPage.getUserImage().should('have.attr', 'src').should('include', 'image');
	  	});

	  	it(`User can update username in user settings, size: ${width} x ${height}`, () => {
	  		settingsPage.getUsernameField.type(settings.userName);
	  		settingsPage.updateSettings();
	  		settingsPage.getUserName().should('include', settings.userName);
	  		settingsPage.getUserNameLink().should('have.attr', 'href').and('include', settings.userName);
	  	});

	  	it(`User can update bio in user settings, size: ${width} x ${height}`, () => {
	  		settingsPage.getBioField.type(settings.shortBio);
	  		settingsPage.updateSettings();
	  		settingsPage.getUserBio().should('include', settings.shortBio);
	  	});

	  	it(`User can update bio in user settings with longer text, size: ${width} x ${height}`, () => {
	  		settingsPage.getBioField.type(settings.longBio);
	  		settingsPage.updateSettings();
	  		settingsPage.getUserBio().should('include', settings.longBio);
	  	});

	  	// Need to reset user email to credentials.email after the test using API
	  	it(`User can update email in user settings and login, size: ${width} x ${height}`, () => {
	  		settingsPage.getEmailField.type(settings.newEmail);
	  		settingsPage.updateSettings();
	  		settingsPage.logout();
	  		cy.login(settings.newEmail, credentials.password);
	  		loginPage.homePageScreen().should('be.visible');
	  	});

	  	it(`User cannot update email in user settings with invalid email address, size: ${width} x ${height}`, () => {
	  		settingsPage.getEmailField.type(settings.invalid_email);
	  		settingsPage.updateSettings();
	  		settingsPage.settingsPageScreen().should('be.visible');
	  	});

	  	it(`User can update password in user settings and login, size: ${width} x ${height}`, () => {
	  		settingsPage.getNewPasswordField.type(settings.newPassword);
	  		settingsPage.updateSettings();
	  		settingsPage.logout();
	  		cy.login(credentials.email, settings.newPassword);
	  		loginPage.homePageScreen().should('be.visible');
	  	});

	  	it(`User can update several fields in user settings, size: ${width} x ${height}`, () => {
	  		settingsPage.getUsernameField.type(settings.userName);
	  		settingsPage.getBioField.type(settings.shortBio);
	  		settingsPage.getURLField.type('www.image.com');
	  		settingsPage.updateSettings();
	  		settingsPage.getUserName().should('include', settings.userName);
	  		settingsPage.getUserNameLink().should('have.attr', 'href').and('include', settings.userName);
	 		settingsPage.getUserPic().should('have.attr', 'src').should('include', 'www.image.com');
	  		settingsPage.getUserImage().should('have.attr', 'src').should('include', 'www.image.com');
	  		settingsPage.getUserBio().should('include', settings.shortBio);
	  	});
	});
})