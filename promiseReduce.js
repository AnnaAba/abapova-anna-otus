var fn1 = () => {
	
	console.log('fn1');
	return Promise.resolve(1);
}

var fn2 = () => new Promise(resolve => {
	
	console.log('fn2');
	setTimeout(() => resolve(2), 1000);
});

function reduceFunc (memo, value) {
	
	console.log('reduce ' + memo * value);
	return memo * value;
}

async function promiseReduce(asyncFunctions, reduce, initialValue) {
	
	let result = initialValue;
	
	for(let item of asyncFunctions)
	{
		await item().then(_=> result = reduce(result, _));
	}
	
	return result;
}

promiseReduce([fn1, fn2], reduceFunc, 1)
.then(console.log);