const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Jhon doe', age: 22 },
    { name: 'David', age: 35 },
    { name: 'Hasaba', age: 28 },
  ];
  
  n = 0

  function sendGreeting(person) {
    if (person.name.startsWith("J")) {
        n++;
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(person.name);
          resolve();
        }, 500);
      });
    } else {
      return Promise.resolve();
    }
  }
  
  async function sendGreetings() {
    for (const person of people) {
      await sendGreeting(person);
    }
    console.log("No of people having J as start:", n);
  }
  
  sendGreetings();
  