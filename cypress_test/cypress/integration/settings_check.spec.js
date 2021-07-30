import SettingsPage from '../pages/SettingsPage';
import resolution from '../fixtures/resolution.json';

const sizes = [resolution.desktopResolution, resolution.mobileResolution];

sizes.forEach((size) => {
	describe('When setup user account', () => {

		const settingsPage = new SettingsPage();
		const width = size[0];
		const height = size[1];

		beforeEach(function() {
	    	cy.viewport(width, height);
			cy.login('argirovachristina@gmail.com', 'komMix-3jewpi');
			settingsPage.visitSettings();
	  	});

	  	it(`User can edit settings, size: ${width} x ${height}`, () => {

	  	})
	});
})