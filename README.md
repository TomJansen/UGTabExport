# UGTabExport - A Tampermonkey userscript to export Ultimate Guitar tabs
This userscript adds a button to any tab on ultimate-guitar.com in order to download it in tex format for use with the LaTeX `songs` package. Just the click the button and the .tex will be downloaded!

See also my `songs` template [HERE](https://github.com/TomJansen/UltimateGuitarChordbook) to make a nicely styled chordbook specially for guitarists. That was my primaray motivation for making this script.

## Installation
Click [HERE](https://github.com/TomJansen/UGTabExport/raw/main/UGTabExport.js) to install this userscript!

## Under the hood
This userscript uses:
- Tampermonkey
- [ChordSheetJS](https://github.com/martijnversluis/ChordSheetJS) for conversion of the tab.
- A JavaScript implementation of the UG api, reverse engineered by [Pilfer](https://github.com/Pilfer/ultimate-guitar-scraper)