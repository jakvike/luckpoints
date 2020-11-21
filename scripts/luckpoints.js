export class LuckPoints {
	static async onRenderActorSheet(dndSheet, html) {
		let luckPointSettings = CONFIG.luckPointSettings;
		let actorPoints = dndSheet.object.getFlag('luckpoints', 'currentLuckPoints');
		luckPointSettings.currentSettings.numberOfPoints = actorPoints === undefined ? 0 : actorPoints;		
		
		let sheet = dndSheet.constructor.name;
		luckPointSettings.currentSettings.isGM = game.user.isGM;
		const template = await renderTemplate(`${luckPointSettings.templatesPath}/luckpoints.html`, luckPointSettings);
		let sheetIndex = 0;
		let centerPane = null;

		if(sheet === "ActorSheet5eCharacter" || sheet === "Tidy5eSheet")
		{
			sheetIndex = (sheet === "Tidy5eSheet")? 0 : 1;
			centerPane = html.find("ul[class='attributes flexrow']");
		}
		else if(sheet === "CompactBeyond5eSheet"){
			centerPane = html.find("ul[class='attributes']");							
		}

		centerPane[sheetIndex].insertAdjacentHTML('afterend', template);
		
		$('#lp-openConsume').on('click', async () => {
			this.openConsumeInput();
		});
		if (game.user.isGM) {
			$('#lp-gmRoll').on('click', async () => {
				this.gmRoll(dndSheet);
			});
		}
		$('#lp-howManyPoints').keypress(async (e) => {
			if (e.which == 13) {
				this.consumeLuckPoints(e.target, luckPointSettings.currentSettings.numberOfPoints, dndSheet);
			}
		});
	}

	static async gmRoll(dndSheet) {
		let roll = new Roll("1d6");
		console.log(roll.parts);
		roll.roll();
		ChatMessage.create({content: `${dndSheet.entity.name} just received ${roll.total} Luck Points!`}, {chatBubble : true});
		let result = roll.total;
		var currentPoints = dndSheet.object.getFlag('luckpoints', 'currentLuckPoints');

		let newResult = result + (currentPoints === undefined ? 0 : currentPoints);
		await dndSheet.object.setFlag('luckpoints', 'currentLuckPoints', newResult);
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
			await dndSheet.object.setFlag('luckpoints', 'currentLuckPoints', newPoints);
			ChatMessage.create({content: `${dndSheet.entity.name} just consumed ${value} Luck Points! ${dndSheet.entity.name} has ${newPoints} left.`}, {chatBubble : true});
		}
	}
}
