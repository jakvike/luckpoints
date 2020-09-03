export class LuckPoints {
	static async onRenderActorSheet(dndSheet, html) {
		let luckPointSettings = CONFIG.luckPointSettings;
        let actorSettings = dndSheet.object.getFlag('world', 'currentLuckPoints');
        
		if (actorSettings === undefined) {
			await dndSheet.object.setFlag(
				'world',
				'currentLuckPoints',
				luckPointSettings.currentSettings.numberOfPoints
			);
			actorSettings = dndSheet.object.getFlag('world', 'currentLuckPoints');
        }
        else{
            luckPointSettings.currentSettings.numberOfPoints = actorSettings;
		}
		

		const centerPane = html.find("ul[class='attributes flexrow']");
		luckPointSettings.currentSettings.isGM = game.user.isGM;
        const template = await renderTemplate(`${luckPointSettings.templatesPath}/luckpoints.html`, luckPointSettings);
        let sheet = dndSheet.constructor.name;
        let sheetIndex = sheet === "Tidy5eSheet" ? 0 : 1;
        centerPane[sheetIndex].insertAdjacentHTML('afterend', template);
        
		$('#lp-openConsume').on('click', async () => { this.openConsumeInput(); });
		if (game.user.isGM) {
			$('#lp-gmRoll').on('click', async () => { this.gmRoll(dndSheet); });
		}
		$('#lp-howManyPoints').keypress(async (e) => {
			if (e.which == 13) {
				this.consumeLuckPoints(e.target, luckPointSettings.currentSettings.numberOfPoints, dndSheet);
			}
		});
	}

	static async gmRoll(dndSheet) {
        let die = new Die(6);
        let result = die.roll(1).result;
        let newResult = result + dndSheet.object.getFlag('world', 'currentLuckPoints');
        await dndSheet.object.setFlag('world', 'currentLuckPoints', newResult);
	}

	static openConsumeInput() {
		let luckPointSettings = CONFIG.luckPointSettings;
		if (luckPointSettings.currentSettings.numberOfPoints > 0) {
			$('#lp-howManyPoints').toggle();
		} else {
			alert('You do not have any luck points to consume.');
		}
	}

	static async consumeLuckPoints(target, currentPoints, dndSheet) {
		let value = target.value;
		if (value > currentPoints) {
			alert('You do not have enough luck points to consume.');
		} else {
			let newPoints = currentPoints - value;
			await dndSheet.object.setFlag('world', 'currentLuckPoints', newPoints);
		}
	}
}
