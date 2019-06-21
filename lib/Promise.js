'use strict';

// Promise
// 1
var getMember = new Promise(function (resolve, reject) {
	if (false) {
		resolve('berhasil!');
	}
	reject('gagal');
}).then(function (msg) {
	// msg == mengambil hasil fungsi promise / value promise
	console.log('ini adalah di dalam ' + msg + ' then');
}).catch(function (msg) {
	console.log('ini adalah di dalam ' + msg + ' catch');
});
console.log(getMember);
// 2
var getStudent = new Promise(function (resolve, reject) {
	if (true) {
		resolve('berhasil!');
	}
	reject('gagal');
});
console.log(getStudent.then(function (msg) {
	console.log('ini didalam then ' + msg + ' baru ');
}).catch(function (msg) {
	console.log('ini didalam catch ' + msg + ' baru');
}));