// process.argv é sempre um array: 
const args = process.argv.slice(2);

args.forEach((arg) => {
    if (isNaN(Number(arg))) {
        console.log('ERROR: One or more arguments is not a valid number');
        process.exit(1); // sai com erro
    }
});

const sum = args.reduce((acc, value) => Number(acc) + Number(value), 0);

console.log(`The sum is ${sum}`)