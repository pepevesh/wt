const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasElement(arr, t){
    let set = new Set(arr);
    return set.has(t);
}

rl.question('Enter array: ', (input_arr) => {
    rl.question('Enter target: ', (target) => {
        arr = input_arr.split(" ").map(Number);
        console.log(hasElement(arr, parseInt(target)));
        rl.close();
    });
});