let members = ['ahmad', 'dzakki', 'sadam']
//  arrow == mempersingkat penulisan function
// foreach() ==  tidak memiliki return value. method hanya menjalankan sebuah fungsi sebanyak jumlah elemen array dengan variabel masing2 elemen itu sendiri
// map() ==  memiliki return value. menghasilkan array baru dari hasil masing2 elemen array yang diaplikasikan pada fungsi map itu sendiri
// 1
	// members.forEach(function(member){
	// 	console.log(member)
	// })
// 2
members.forEach((member) => {
	console.log(member+'-')
})
// 3
members.forEach(member => {
	console.log(member+'--')
})
// 4
members.forEach(member => console.log(member+'---'))
// 5
let membersindex =  members.map((member, index) => member + '-----'+ index)
console.log(membersindex)

// 6 
let MemberKoding  = {
	members : ['ahmad', 'dzakki', 'sadam'],
	getMembers(){
		this.members.map((nama) => console.log(this))
	}
}
MemberKoding.getMembers()

