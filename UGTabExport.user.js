// ==UserScript==
// @name         UGTabExport
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Download Ultimate guitar tabs as songs tex file!
// @author       Tom Jansen
// @include      https://tabs.ultimate-guitar.com/tab/*/*
// @grant        GM.xmlHttpRequest
// @grant        GM_getResourceText
// @require      https://github.com/plohoj/userscript-requirejs/releases/download/0.0.1/userscript-require.js
// @resource     requirejs   https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js
// @resource     ChordSheetJS https://wzrd.in/standalone/chordsheetjs@latest
// ==/UserScript==
/* globals require */

//md5 function
//https://stackoverflow.com/a/49050183/11717850

//asciiToHex:
//https://www.w3resource.com/javascript-exercises/javascript-string-exercise-27.php

//https://github.com/plohoj/userscript-requirejs

require(['ChordSheetJS'], (ChordSheetJS) => {
    function md5(d){return rstr2hex(binl2rstr(binl_md5(rstr2binl(d),8*d.length)))}function rstr2hex(d){for(var _,m="0123456789abcdef",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function rstr2binl(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function binl2rstr(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function binl_md5(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

    function randHex(len) {
        var letters = '0123456789ABCDEF';
        var randHex = [];
        for (var i = 0; i < len; i++) {
            var hex = letters[Math.floor(Math.random() * 16)];
			randHex.push(hex);
        }
        return randHex.join('');
    }

    function asciiToHex(str) {
        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n ++) {
            var hex = Number(str.charCodeAt(n)).toString(16);
            arr1.push(hex);
        }
        return arr1.join('');
    }

    // Generates a new device id for the scraper instances. This value is used in the request headers and to generate X-UG-API-KEY.
    function generateDeviceID() {
        return randHex(16);
    }

    // "save-as" dialog
    // don't know if this is the most elegant
    function downloadFile(data, filename, type) {
        var a = document.createElement("a");
        a.href = `data:application/${type};charset=utf-8,${encodeURIComponent(data)}`;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
        }, 0);
    }

    function formattedTab(tab, choice) {
        // TODO get current integer for chord variations from _3F8xq in GQmjk _3ompm class and add these before parsing
        const chordSheet = tab.content;
        const parser = new ChordSheetJS.default.ChordProParser(); //TODO edit this to upcoming UltimateGuitar Parser
        const song = parser.parse(chordSheet);

		const formatter = new ChordSheetJS.default.TextFormatter();
		if (choice == 'ChordPro') {
			const formatter = new ChordSheetJS.default.ChordProFormatter();;
		} else if (choice=='LaTeX') {
			const formatter = new ChordSheetJS.default.LatexFormatter();
		}

        const disp = formatter.format(song);

        return disp
    }

	// Generate the X-UG-API-KEY for this request
    function generateAPIKey(deviceID) {
        //generate date
        var date = new Date();
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth()+1;
        var day = date.getUTCDate();
        var hour = date.getUTCHours();

        var formattedDate = year+'-'+month+'-'+day+':'+hour;
        var payload = deviceID + formattedDate + "createLog()";
        var hash = md5(payload);
        var asciiHash = asciiToHex(hash);

        return hash
    }

    function getTabFromId(tabId, choice) {
        var ugAPIEndpoint = "https://api.ultimate-guitar.com/api/v1";
        var TAB_INFO = "/tab/info";
        var ugUserAgent = "UGT_ANDROID/4.11.1 (Pixel; 8.1.0)";

        var urlString = `${ugAPIEndpoint}${TAB_INFO}?tab_id=${tabId}&tab_access_type=private`;
        var deviceID = generateDeviceID();
        var apiKey = generateAPIKey(deviceID);

        GM.xmlHttpRequest({
            method: "GET",
            url: urlString,
            headers: {
                "Accept-Charset": "utf-8",
                "Accept": "application/json",
                "User-Agent": ugUserAgent,
                "Connection": "close",
                "X-UG-CLIENT-ID": deviceID,
                "X-UG-API-KEY": apiKey
            },
            onload: function(response) {
                //response.responseText must be converted to a json object
                const tab = JSON.parse(response.responseText);
                console.log(tab)
                var filename = `${tab.song_name} - ${tab.artist_name}.tex`
                downloadFile(formattedTab(tab, choice), filename, 'text')
            }
        });
    }

    function createDownloadButton(choice) {
        // Make the download button
        var a = document.createElement ('a');
        a.setAttribute ('class', '_27k0J _3z5oh _3EpOX _14ZfT YJMQR _2pMPQ');
        a.setAttribute ('id', choice);
        a.innerHTML = `Download ${choice} tab`;
        document.getElementsByClassName("_2SfEm KnbhI")[1].appendChild (a);

		document.getElementById(choice).addEventListener('click', function(){ //listen for button click
			var url = window.location.href
			var tabId = url.match(/[0-9]*$/gm); // the tabId is the number at the end of an url
			getTabFromId(tabId[0], choice);
		});
    }

	createDownloadButton('ChordPro');
    createDownloadButton('LaTeX');
});
