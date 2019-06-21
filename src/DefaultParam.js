//defaul Parameter
// 1
let createTag = (title, tag) => {
	console.log(' forum '+ title + ' ' + tag);
}
createTag('Belajar','Es6');

//2 
createTag = (title, tag) => {
	tag = tag || 'css'
	console.log(' forum '+ title + ' ' + tag);
}
createTag('Study')

// 3 
createTag = (title, tag) => {
	if ( tag == undefined) {
		tag = 'php'
	} 
	console.log(' forum '+ title + ' ' + tag);
}
createTag('learn')

// 4 
createTag = (title, tag = 'JS') => { 
	console.log(' forum '+ title + ' ' + tag);
}
createTag('Read')

// 5
let generaTittle = () => 'Write' ;

createTag = (title = generaTittle() , tag = 'JS') => { 
	console.log(' forum '+ title + ' ' + tag);
}
createTag()