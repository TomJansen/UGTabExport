# UGTabExport - A Tampermonkey userscript to export Ultimate Guitar tabs
This userscript adds a button to any tab on ultimate-guitar.com in order to download it in tex format for use with the LaTeX `songs` package. Just the click the button and the .tex will be downloaded!

See also my `songs` template [HERE](https://github.com/TomJansen/Ultimate-Chordbook) to make a nicely styled chordbook specially for guitarists. That was my primaray motivation for making this script.

## Installation
Click [HERE](https://github.com/TomJansen/UGTabExport/raw/main/UGTabExport.user.js) to install this userscript!

## Under the hood
This userscript uses:
- Tampermonkey
- [ChordSheetJS](https://github.com/martijnversluis/ChordSheetJS) for conversion of the tab.
- A JavaScript implementation of the UG api, reverse engineered by [Pilfer](https://github.com/Pilfer/ultimate-guitar-scraper)

## TODO
This script does currently not work, because ChordSheetJS needs to merge 2 nescessary pull request: 1 for parsing the Ultimate Guitar tabs and 1 to convert it to LaTeX. This will happen soon however. And when this happens this script will be automatically updated. I will remove this disclaimer when the pull requests are merged.