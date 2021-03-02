function showSalary(users, age) {
  let arrFilter;
  arrFilter = users.filter(item => item.age <= age);
  return arrFilter.map(item => item.name + ', ' + item.balance)
    .join (`\n`);
}
