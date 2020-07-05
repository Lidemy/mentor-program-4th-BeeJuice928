function join(arr, concatStr) {
	let rtn = '';
	arr.forEach(element => rtn = rtn + concatStr + element);
	return rtn.slice(1);
}

function repeat(str, times) {
	let rtn = '';
	for(let i = 0 ; i < times; i++){
		rtn += str;
	}
	return rtn;
}

console.log(join([ ], ','));
console.log(repeat('a', 5));
