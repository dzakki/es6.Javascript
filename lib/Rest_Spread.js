'use strict';

// 1
var SignIn = function SignIn(username, password) {
	console.log(username + ' ini passwordnya ' + password);
};
var data = ['zakki', 123];
SignIn.apply(undefined, data);

// 2

var username = 'ahmad';
var password = '123';
SignIn(username, password);
SignIn = function SignIn() {
	for (var _len = arguments.length, Data = Array(_len), _key = 0; _key < _len; _key++) {
		Data[_key] = arguments[_key];
	}

	console.log(Data);
};