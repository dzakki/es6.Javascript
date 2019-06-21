"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1
// Class Members {
// 	constructor(name, umur){
// 		this.name = name
// 		this.umur = umur
// 	}
// }
// let Member = new Members('ahmad', 40)
// console.log(Member())

// 2 
var Students = function () {
	function Students() {
		_classCallCheck(this, Students);

		this.name = "ahmad";
	}

	_createClass(Students, [{
		key: "getName",
		value: function getName(age) {
			return this.name + " umurnya " + age;
		}
	}], [{
		key: "getData",
		value: function getData() {
			console.log('getData');
		}
	}]);

	return Students;
}();

var Student = new Students();
console.log(Student.getName(18));
console.log(Students.getData());