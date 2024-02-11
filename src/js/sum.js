const numbers = [123, 144, 123234, 214124, 2141241, 345423];

const sum = numbers => {
	let total = 0;
	for (let partNumber of numbers) {
		total = total + partNumber;
	}
	return total;
};

console.log(sum(numbers));
