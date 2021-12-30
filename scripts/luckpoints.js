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
				let d = new Dialog({
					title: "Die",
					content: "<p>Please choose a die?</p>",
					buttons: {
						one: {
							icon: '<i class="fas fa-dice-d20"></i>',
							label: "d4",
							callback: () => this.gmRoll(dndSheet, "1d4")
						},
						two: {
							icon: '<i class="fas fa-dice-d20"></i>',
							label: "d6",
							callback: () => this.gmRoll(dndSheet, "1d6")
						},
						three: {
							icon: '<i class="fas fa-dice-d20"></i>',
							label: "d8",
							callback: () => this.gmRoll(dndSheet, "1d8")
						},
						four: {
							icon: '<i class="fas fa-dice-d20"></i>',
							label: "d10",
							callback: () => this.gmRoll(dndSheet, "1d10")
						},
						five: {
							icon: '<i class="fas fa-dice-d20"></i>',
							label: "d12",
							callback: () => this.gmRoll(dndSheet, "1d12")
						},
						six: {
							icon: '<i class="fas fa-dice-d20"></i>',
							label: "d20",
							callback: () => this.gmRoll(dndSheet, "1d20")
						}
					}
				   });
				   d.render(true);
			});
		}
		$('.lpHowManyPoints-' + dndSheet.appId).keypress(async (e) => {
			if (e.which == 13) {
				this.consumeLuckPoints(e.target, dndSheet);
			}
		});
	}

	static async gmRoll(dndSheet, rollType) {
		let roll = await new Roll(rollType).roll({ async: true });
		let chatOptions = {
			type: CONST.CHAT_MESSAGE_TYPES.ROLL,
			roll: roll,
			rollMode: game.settings.get("core", "rollMode"),
			content: `${dndSheet.object.name} received ${roll.result} Luck Points!`
		};
		ChatMessage.create(chatOptions);

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
			let d = this.showDialog("No Points Available", "There are no points available points to consume");
		}
	}

	static async consumeLuckPoints(target, dndSheet) {
		let actorPoints = dndSheet.object.getFlag('luckpoints', 'currentLuckPoints');
		let parsedValue = parseInt(target.value, 10);
		let value = (isNaN(parsedValue) || parsedValue === "")? 0 : parsedValue;
		if (value === 0) {
			let d = this.showDialog("Zero was entered","Please enter a number greater than zero.");
		}
		else if (value > actorPoints) {
			let d = this.showDialog("Not enough points", "The amount entered is greater than the number allowed.");
		} else {
			let newPoints = actorPoints - value;
			await dndSheet.object.setFlag('luckpoints', 'currentLuckPoints', newPoints);
			ChatMessage.create({content: `${dndSheet.entity.name} just consumed ${value} Luck Points! ${dndSheet.entity.name} has ${newPoints} left.`}, {chatBubble : true});
		}
	}

	static async showDialog(title, content){
		return await Dialog.prompt({
			title: title,
			content: "<p>" + content + "</p>",
			label: "Close",
			callback: close => close.toggle(),
			rejectClose: false
		});
	}
}
