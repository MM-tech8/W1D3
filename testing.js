const chalk = require ("chalk"); // import chalk into this file
console.log(chalk.blue('Hello world!'));


function printWord () {
    console.log(chalk.red("Hello World 2.0"));
}
printWord ();

function celsiusToFahrenheit(c) {
    console.log ((c * 9) / 5 + 32);
}

//celsiusToFahrenheit (2);

module.exports = printWord;
module.exports = celsiusToFahrenheit;

