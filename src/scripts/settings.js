export class LuckPointSettings {
	static registerSettings() {
		if (!CONFIG.luckPointSettings) {
			let luckPointsConfig = {
				currentSettings: {
					numberOfPoints: 0,
				},
				templatesPath: '/modules/luckpoints/templates',
			};
			CONFIG.luckPointSettings = luckPointsConfig;
		}
	}

	static registerLocalizedSettings() {
		CONFIG.luckPointSettings.localized = {
			luckPointsTitle: game.i18n.localize('LUCKPOINTS.LuckPointsTitle'),
			gmRollTitle: game.i18n.localize('LUCKPOINTS.GMRollTitle'),
			playerConsumeTitle: game.i18n.localize('LUCKPOINTS.PlayerConsumeTitle'),
			consumePlaceholder: game.i18n.localize('LUCKPOINTS.ConsumenPlaceholder')
		};
	}
}
