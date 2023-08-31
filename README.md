### Luck Points Dnd5e

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-luckpoints-dnd5e/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fluckpoints-dnd5e&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=luckpoints-dnd5e)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-luckpoints-dnd5e%2Fmaster%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-luckpoints-dnd5e%2Fmaster%2Fsrc%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fluckpoints-dnd5e%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/luckpoints-dnd5e/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-luckpoints-dnd5e/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/luckpoints-dnd5e/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/luckpoints-dnd5e/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

This is a upgrade of the module [luckpoints](https://github.com/jakvike/luckpoints) ty to [jakvike](https://github.com/jakvike).

## Module Description

The module intends to add a variation to inspiration Instead of having inspiration, I added luck points

Luck points will be below resources, on the attributes tab, within the actor sheet

For my campaign, the intent for Luck Points is as follows:

- A player can hoard as many luck points they choose<
- A player can use a luck point to increase or decrease a die roll result For instance, the player rolls a d20 attack and spends 2 luck points The roll from the d20 is 16 + the luck points equal 18.
- A player can choose to use luck points to help another player but at double the cost. For instance, player B rolls 14, Player A spends 4 luck points Player Bs roll now becomes 16
- A player can choose to use luck points to decrease the GMs roll but at double the cost. For instance, GM rolls 14, Player A spends 6 luck points. GM roll now becomes 11.

GM has permission to the die (d6)

Players click the bell to consume luck point(s). After clicking the bell, an input box will open beneath the buttons After entering the number of points to consume, hit the enter key on your keyboard

Both the GM roll and Player consumption will send a chat message

**NOTE:** This has only been tested and used with Tidy5eSheet and the default actor sheet, with DND5e.

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-luckpoints-dnd5e/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

### libWrapper

This module uses the [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper) library for wrapping core methods. It is a hard dependency and it is recommended for the best experience and compatibility with other modules.


## Known issue

# API


# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

## npm build scripts

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build-watch

`build-watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build-watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-luckpoints-dnd5e/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

- **[luckpoints](https://github.com/jakvike/luckpoints) ty to [jakvike](https://github.com/jakvike)**: [GPL 3.0](https://github.com/jakvike/luckpoints/blob/master/LICENSE)


This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!

- [luckpoints](https://github.com/jakvike/luckpoints) ty to [jakvike](https://github.com/jakvike)

