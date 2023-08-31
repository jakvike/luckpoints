import API from "./API/api";
import CONSTANTS from "./constants/constants";

export class LuckPointSettings {
  static registerSettings() {
    if (!API.luckPointSettings) {
      let luckPointsConfig = {
        currentSettings: {
          numberOfPoints: 0,
        },
        templatesPath: `/modules/${CONSTANTS.MODULE_ID}/templates`,
      };
      API.luckPointSettings = luckPointsConfig;
    }
    if (!API.luckPointSettings.currentSettings) {
      API.luckPointSettings.currentSettings = {
        numberOfPoints: 0,
      };
    }
    if (!API.luckPointSettings.templatesPath) {
      API.luckPointSettings.templatesPath = `/modules/${CONSTANTS.MODULE_ID}/templates`;
    }
  }

  static registerLocalizedSettings() {
    API.luckPointSettings.localized = {
      luckPointsTitle: game.i18n.localize(`${CONSTANTS.MODULE_ID}.LuckPointsTitle`),
      gmRollTitle: game.i18n.localize(`${CONSTANTS.MODULE_ID}.GMRollTitle`),
      playerConsumeTitle: game.i18n.localize(`${CONSTANTS.MODULE_ID}.PlayerConsumeTitle`),
      consumePlaceholder: game.i18n.localize(`${CONSTANTS.MODULE_ID}.ConsumenPlaceholder`),
    };
  }
}
