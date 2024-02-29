const fs = require('fs');
const readline = require('readline');


let totalSalary = 0;
let totalEntries = 0;
let minAge = Infinity;
let maxAge = -Infinity;
let professionsSalary = {};


const rl = readline.createInterface({
  input: fs.createReadStream('users-data.csv'),
  crlfDelay: Infinity 
});


rl.on('line', line => {
  const fields = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);

  const age = parseInt(fields[3]);
  const profession = fields[7];
  const salary = parseInt(fields[8]);

  if (!isNaN(salary)) {
    totalSalary += salary;
    totalEntries++;

    const professionSalary = professionsSalary[profession] || { minSalary: salary, maxSalary: salary };
    professionSalary.minSalary = Math.min(professionSalary.minSalary, salary);
    professionSalary.maxSalary = Math.max(professionSalary.maxSalary, salary);
    professionsSalary[profession] = professionSalary;
}


  if (!isNaN(age)) {
    minAge = Math.min(minAge, age);
    maxAge = Math.max(maxAge, age);
  }
});


rl.on('close', () => {
  const averageSalary = totalEntries === 0 ? 0 : totalSalary / totalEntries;

  let result = `Total Salary: ${totalSalary}\nAverage Salary: ${averageSalary.toFixed(2)}\n`;
  for (const profession in professionsSalary) {
    const { minSalary, maxSalary } = professionsSalary[profession];
    result += `${profession.toUpperCase()} have the Minimum Salary: ${minSalary}\n${profession.toUpperCase()} have the Maximum Salary: ${maxSalary}\n`;
  }
  result += `Minimal age: ${minAge}\nMaximal age: ${maxAge}`;

  // Results
  fs.writeFile('results.txt', result, err => {
    if (err) {
      console.error('Error writing results to file:', err);
    } else {
      console.log('Results written to results.txt');
    }
  });
});
