import { LuckPointSettings } from './scripts/settings.js';
import { LuckPoints } from './scripts/luckpoints.js';

Hooks.once('init', async function () {
	LuckPointSettings.registerSettings();
});

Hooks.once('ready', async () => {
	LuckPointSettings.registerLocalizedSettings();
});

Hooks.on('renderActorSheet', function (dndSheet, html) {
	LuckPoints.onRenderActorSheet(dndSheet, html);
});
