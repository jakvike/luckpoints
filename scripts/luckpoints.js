export class LuckPoints {
	static async onRenderActorSheet(dndSheet, html) {
		let luckPointSettings = CONFIG.luckPointSettings;
		let actorPoints = dndSheet.object.getFlag('luckpoints', 'currentLuckPoints');
		luckPointSettings.currentSettings.numberOfPoints = actorPoints === undefined ? 0 : actorPoints;		
		
		let sheet = dndSheet.constructor.name;
		luckPointSettings.currentSettings.isGM = game.user.isGM;
		luckPointSettings.currentSettings.actorAppId = dndSheet.appId;
		const template = await renderTemplate(`${luckPointSettings.templatesPath}/luckpoints.html`, luckPointSettings);
		let sheetIndex = 0;
		let centerPane = null;

		switch (sheet) {
			case "ActorSheet5eCharacter":
				sheetIndex = 1;
				centerPane = html.find("ul[class='attributes flexrow']");
				break;
			case "Tidy5eSheet":
				sheetIndex = 0;
				centerPane = html.find("div[class='favorites-target']");
				break;
			case "CompactBeyond5eSheet":
				centerPane = html.find("ul[class='attributes']");
				break;
		}
		
		if(centerPane) centerPane[sheetIndex].insertAdjacentHTML('afterend', template);
		
		$('.lpOpenConsume-' + dndSheet.appId).on('click', async () => {
			this.openConsumeInput(dndSheet.appId);
		});
		if (game.user.isGM) {
			$('.lpGmRoll-' + dndSheet.appId).on('click', async () => {
				this.gmRoll(dndSheet);
			});
		}
		$('.lpHowManyPoints-' + dndSheet.appId).keypress(async (e) => {
			if (e.which == 13) {
				this.consumeLuckPoints(e.target, dndSheet);
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

	static openConsumeInput(appId) {
		let luckPointSettings = CONFIG.luckPointSettings;
		if (luckPointSettings.currentSettings.numberOfPoints > 0) {
			$('.lpHowManyPoints-' + appId).toggle();
		} else {
			alert('You do not have any luck points to consume.');
		}
	}

	static async consumeLuckPoints(target, dndSheet) {
		let actorPoints = dndSheet.object.getFlag('luckpoints', 'currentLuckPoints');
		let parsedValue = parseInt(target.value, 10);
		let value = (isNaN(parsedValue) || parsedValue === "")? 0 : parsedValue;
		if(value === 0){
			alert('Please enter the number of points you would like to use.')
		}
		else if (value > actorPoints) {
			alert('You do not have enough luck points to consume.');
		} else {
			let newPoints = actorPoints - value;
			await dndSheet.object.setFlag('luckpoints', 'currentLuckPoints', newPoints);
			ChatMessage.create({content: `${dndSheet.entity.name} just consumed ${value} Luck Points! ${dndSheet.entity.name} has ${newPoints} left.`}, {chatBubble : true});
		}
	}
}
