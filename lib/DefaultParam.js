'use strict';

//defaul Parameter
// 1
var createTag = function createTag(title, tag) {
	console.log(' forum ' + title + ' ' + tag);
};
createTag('Belajar', 'Es6');

//2 
createTag = function createTag(title, tag) {
	tag = tag || 'css';
	console.log(' forum ' + title + ' ' + tag);
};
createTag('Study');

// 3 
createTag = function createTag(title, tag) {
	if (tag == undefined) {
		tag = 'php';
	}
	console.log(' forum ' + title + ' ' + tag);
};
createTag('learn');

// 4 
createTag = function createTag(title) {
	var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'JS';

	console.log(' forum ' + title + ' ' + tag);
};
createTag('Read');

// 5
var generaTittle = function generaTittle() {
	return 'Write';
};

createTag = function createTag() {
	var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : generaTittle();
	var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'JS';

	console.log(' forum ' + title + ' ' + tag);
};
createTag();