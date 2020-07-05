function reverse(str) {
	let rtn = '';
	for (let i = str.length-1; i >= 0; i--) {
		rtn += str[i] ;	
	}
	console.log(rtn);
}

reverse('Your Test Case')