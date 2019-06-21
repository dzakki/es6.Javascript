// Promise
// 1
let getMember = new Promise((resolve, reject) => {
		if (false) {
			resolve('berhasil!')
		}
		reject('gagal')
	}
).then( msg => {  // msg == mengambil hasil fungsi promise / value promise
	console.log(`ini adalah di dalam ${msg} then`)
} ).catch(msg => {
	console.log(`ini adalah di dalam ${msg} catch`)
})
console.log(getMember)
// 2
let getStudent = new Promise((resolve, reject) => {
		if (true) {
			resolve('berhasil!')
		}
		reject('gagal')
	}
)
console.log(getStudent.then( msg => {
	console.log(`ini didalam then ${msg} baru `)
} ).catch(msg => {
	console.log(`ini didalam catch ${msg} baru`)
}))
