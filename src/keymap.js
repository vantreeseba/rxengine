var most = require('most');

var bodyEl = document.querySelector('body');
var keyUps$ = most.fromEvent('keyup', bodyEl);
var keyDowns$ = most.fromEvent('keydown', bodyEl);

function getKeyState(code, val) {
  var byCode = k => k.keyCode == code;
  var matchingCodes = (a, b) => a[0] == b[0];

  var ups = keyUps$
    .filter(byCode)
    .map(k => []);

  var downs = keyDowns$
    .filter(byCode)
    .map(k => [val]);

  return most
		.merge(ups)
		.merge(downs)
    .startWith([])
		.skipRepeatsWith(matchingCodes);
}

function getAllKeys(keymap) {
	var concatArrays = function() {
		var args = Array.prototype.slice.call(arguments);
		return args.reduce((a,b) => a.concat(b), []);
	}
	var toKeyState = x => getKeyState(x.keyCode, x.action);

  return most
		.combineArray(concatArrays, keymap.map(toKeyState));
}

function init(keyMap){
	return getAllKeys(keyMap); //.observe(k => console.log(k));
}

module.exports = init;

