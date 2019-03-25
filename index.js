'use strict';
function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}, and I am ${age} years old. I was born in ${yob}`;
}

try {
  const greeting1 = createGreeting('Scott', 39);
  console.log(greeting1);
} catch(e) {
  console.log(e.message);
}

