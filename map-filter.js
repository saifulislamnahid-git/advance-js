const numbers = [2,4, 5, 8, 9, 10, 15, 13, 12];
let output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(function square(element) {
    return element * element;
})

const result = numbers.map(x => x * x)
console.log(result);

const bigger = numbers.filter( x => x >= 5)
console.log(bigger);