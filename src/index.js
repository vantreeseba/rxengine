var most = require('most');
var keys = require('./keymap.js');

var keyMap = [
  { keyCode: 37, action: 'KEY_LEFT' },
  { keyCode: 38, action: 'KEY_UP' },
  { keyCode: 39, action: 'KEY_RIGHT' },
  { keyCode: 40, action: 'KEY_DOWN' }
];

var keyStream = keys(keyMap);

keyStream.observe(x => {
	if(x.indexOf('KEY_LEFT') !== -1){
		console.log('going left bro');
	}
});
