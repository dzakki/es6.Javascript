// ### var function scope

// var nama = "dzakki"
// var nama = "ahmad"

// ### let dan const block scope

// let nama = "Dzakki"
// { >> block 
// 	nama = "ramadhan"
// 	console.log(nama);
// }
// let nama = "ahmad" >> error
// nama = "ahmad"

const details = [
	{
		'id' : 1,
		'nama': 'dzakki'
	},
]

// const details = { >> error
// 	'id' : 2,
// 	'nama': 'ahmad'
// }
// details.id = 3
details[0].id = 2
// push menambahkan  array dari belakang
details.push({ 
	'id' : 3,
	'nama': 'ahmad'
})

console.log(details);