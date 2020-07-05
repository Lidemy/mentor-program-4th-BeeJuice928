function printFactor(n) {
	console.log(n + '的因數有:');
	for (let i = 1; i <= n; i++) {
		if (n % i === 0)
      		console.log(i);
	}
}

printFactor(10);