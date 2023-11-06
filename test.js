
async function fetchEmployeeInfo() {
    // console.log("Hello world")
    try {
        // const response = await fetch('./employeeData.json');
        const response = await fetch('https://www.jsonkeeper.com/b/SKCJ');
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        const id = Number.parseInt(prompt("Enter the Employee ID:"));
        const employee = data.find(emp => emp.employeeId === id);
        console.log(employee);

        if (employee) {
            const { firstName, lastName, salary } = employee;

            const camelFirst = firstName.charAt(0).toLowerCase() + firstName.slice(1);
            const camelLast = lastName.charAt(0).toLowerCase() + lastName.slice(1);
            
            console.log(`First Name : ${camelFirst}\nLast Name : ${camelLast}\nSalary: ${salary}`);
        } else {
            console.log('Employee not found');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchEmployeeInfo()
