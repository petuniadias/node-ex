const matematica = require('./matematica');

const args = process.argv.splice(2);

if (args.length < 3) {
    console.log('ERROR: Not enough operators!');
    process.exit(1);
}

const numbers = args.splice(1).map(Number); // converte cada argumento para número


switch (args[0]) {
    case "+": 
        console.log(`${numbers[0]} + ${numbers[1]} = ${matematica.somar(numbers[0], numbers[1])}`);
        break;
    case "-": 
        console.log(`${numbers[0]} - ${numbers[1]} = ${matematica.subtrair(numbers[0], numbers[1])}`);
        break;
    case "*": 
        console.log(`${numbers[0]} * ${numbers[1]} = ${matematica.multiplicar(numbers[0], numbers[1])}`);
        break;
    case "/": 
        if (numbers[1] === 0) {
            console.log('ERROR: Cannot divide by zero!');
            process.exit(1);
        } 
        console.log(`${numbers[0]} / ${numbers[1]} = ${matematica.dividir(numbers[0], numbers[1])}`);
        break;
    default:
        console.log('ERROR: Invalid operation! Supported: +,-,*,/');
        process.exit(1);
}


