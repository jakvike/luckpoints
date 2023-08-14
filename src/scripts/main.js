import { warn, error, debug, i18n } from "./lib/lib.mjs";
import CONSTANTS from "./constants.mjs";
import { setApi } from "../module.js";
import API from "./API/api.mjs";

export const initHooks = async () => {
  // Hooks.once("socketlib.ready", registerSocket);
  // registerSocket();
};

export const setupHooks = async () => {
  setApi(API);
};

export const readyHooks = () => {

	Hooks.on('renderActorSheet', function (dndSheet, html) {
		LuckPoints.onRenderActorSheet(dndSheet, html);
	});
};

