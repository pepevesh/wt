const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array: ', (input) => {
    res = input.split(" ").map(Number).reduce((a, b) => a * b);
    console.log(res);
    rl.close();
});