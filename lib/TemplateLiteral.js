'use strict';

var _templateObject = _taggedTemplateLiteral(['nama saya adalah ', ' dan umurnya adalah ', ''], ['nama saya adalah ', ' dan umurnya adalah ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//  template literal

var username = 'zakki';
var umur = 40;
// 1
var text = 'Member ' + username + ' umurnya ' + umur;
console.log(text);
// 2
text = 'Member ' + username + ' umurnya ' + umur;
console.log(text);
// 3

var test = function test(strings, username) {
	console.log(strings);
};

var output = test(_templateObject, username, umur);