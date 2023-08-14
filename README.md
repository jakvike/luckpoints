### Border Control (Control your tokens borders)

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-border-control/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2FBorder-Control&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=Border-Control)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-border-control%2Fmaster%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-border-control%2Fmaster%2Fsrc%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2FBorder-Control%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/Border-Control/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-border-control/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/Border-Control/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/Border-Control/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)


Can prevent borders from showing on player clients for non-owned tokens; no longer hide your mimics behind tiles!

Increased accessability for those with visibility impairments

External border offset changeable.

This also fixes the current disposition bug: https://gitlab.com/foundrynet/foundryvtt/-/issues/4352

A border may be toggled off by using the Token HUD element here

![BorderHUD](/wiki/images/Border_Control_HUD.PNG?raw=true)

HUD Bars can be set to show as semi-transparant when only visible to the

### [DEPRECATED] Feature: Token Bars customization

THIS FEATURE IS DEPRECATED IN FAVOR OF OTHER MODULES LIKE [Arbron's Improved HP Bar](https://github.com/arbron/fvtt-hp-bar) and [FoundryVTT Bar Brawl](https://gitlab.com/woodentavern/foundryvtt-bar-brawl)

Color gradient reads actor HP and returns a color between the two provided colors.

Temp HP gradient moves up from the "full hp" color towards a defined color, maxing out at 1/2 hpMax.

### [DEPRECATED] Feature: Nameplates customization 

THIS FEATURE IS DEPRECATED IN FAVOR OF OTHER MODULES LIKE [Token Variant Art](https://github.com/Aedif/TokenVariants) and [Custom Nameplates](https://github.com/earlSt1/vtt-custom-nameplates)

Nameplates are now customizable, change the size, vertical offset and font. You can also make then circular, to fit with POG style tokens
Available fonts are: Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Helvetica, Impact, Tahoma, Times New Roman and Verdana.

### [DEPRECATED] Feature: Target customization 

THIS FEATURE IS DEPRECATED IN FAVOR OF OTHER MODULES LIKE [Easy Target](https://bitbucket.org/Fyorl/easy-target) and [Smart Target](https://github.com/theripper93/Smart-Target)

Player side configuration of the tokens borders, color and scale. Target HUD color and size can be altered, target HUD can also be rendered inside the token border.

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-border-control/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

### libWrapper

This module uses the [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper) library for wrapping core methods. It is a hard dependency and it is recommended for the best experience and compatibility with other modules.

## Supportes Systems

Supported systems for color gradient are :

- DnD5e
- PF1
- PF2
- SWADE
- Symbaroum

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

## [Changelog](./changelog.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-border-control/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Acknowledgements

Bootstrapped with League of Extraordinary FoundryVTT Developers  [foundry-vtt-types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types).

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!

- [Border-Control](https://github.com/kandashi/Border-Control) ty to [kandashi](https://github.com/kandashi)

