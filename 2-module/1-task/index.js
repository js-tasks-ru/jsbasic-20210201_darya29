function sumSalary(salaries) {
  let result;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
       return result += salaries[key];
    }
  }
}
