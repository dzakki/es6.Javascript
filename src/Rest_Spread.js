// 1
let SignIn = (username, password) => {
	console.log(username  + ' ini passwordnya ' + password)
}
let data = ['zakki', 123]
SignIn(...data)

// 2

var username = 'ahmad';
var password = '123';
SignIn(username, password)
SignIn  = (...Data) => {
	console.log(Data)
}