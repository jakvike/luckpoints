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
