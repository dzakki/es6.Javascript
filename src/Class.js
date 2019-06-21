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
class Students {
	constructor(){
		this.name = "ahmad"
	}
	getName(age){
		return `${this.name} umurnya ${age}`
	}
	static getData(){
		console.log('getData')	
	}
}
let Student = new Students()
console.log(Student.getName(18))
console.log(Students.getData())