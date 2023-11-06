const readline = require('readline');
// const fetch = require('no'); // Import the 'node-fetch' module

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function camelCase(input) {
  let res = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === ' ' || input[i - 1] === '_' || input[i - 1] === '-') {
      res += input[i].toUpperCase();
    } else {
      res += input[i].toLowerCase();
    }
  }
  return res;
}

rl.question('Enter empID: ', (empID) => {
  let f = 0;
  empID = parseInt(empID);
  const url = 'https://raw.githubusercontent.com/pepevesh/wt/main/employeeData.json'; // Adjusted the URL

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      for (const e of data["Employees"]) {
        if (e["empID"] === empID) {
          console.log("First Name: " + camelCase(e["firstName"]));
          console.log("Last Name: " + camelCase(e["lastName"]));
          console.log("Salary: " + e["sal"]);
          f = 1;
          break; // No need to continue looping once the employee is found
        }
      }

      if (f === 0) {
        console.log("Employee Not Found!");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      rl.close();
    });
});
