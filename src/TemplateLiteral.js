//  template literal

let username = 'zakki'
let umur = 40
// 1
let text  = 'Member ' + username + ' umurnya ' + umur
console.log(text)
// 2
text = `Member ${username} umurnya ${umur}`
console.log(text)
// 3

let test =  (strings, username) => {
	console.log(strings)
}

let output = test`nama saya adalah ${username} dan umurnya adalah ${umur}`