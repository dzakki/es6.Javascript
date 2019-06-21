'use strict';

var members = ['ahmad', 'dzakki', 'sadam'];
//  arrow == mempersingkat penulisan function
// foreach() ==  tidak memiliki return value. method hanya menjalankan sebuah fungsi sebanyak jumlah elemen array dengan variabel masing2 elemen itu sendiri
// map() ==  memiliki return value. menghasilkan array baru dari hasil masing2 elemen array yang diaplikasikan pada fungsi map itu sendiri
// 1
// members.forEach(function(member){
// 	console.log(member)
// })
// 2
members.forEach(function (member) {
	console.log(member + '-');
});
// 3
members.forEach(function (member) {
	console.log(member + '--');
});
// 4
members.forEach(function (member) {
	return console.log(member + '---');
});
// 5
var membersindex = members.map(function (member, index) {
	return member + '-----' + index;
});
console.log(membersindex);

// 6 
var MemberKoding = {
	members: ['ahmad', 'dzakki', 'sadam'],
	getMembers: function getMembers() {
		var _this = this;

		this.members.map(function (nama) {
			return console.log(_this);
		});
	}
};
MemberKoding.getMembers();