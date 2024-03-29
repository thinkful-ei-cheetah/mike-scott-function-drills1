'use strict';
function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if (!name || !age) {
    throw new Error('Arguments not valid.');
  }
  if (typeof name !== 'string' || typeof age !== 'number') {
    throw new TypeError('Arguments have wrong type');
  }
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}, and I am ${age} years old. I was born in ${yob}`;
}

try {
  const greeting1 = createGreeting('39', '39');
  console.log(greeting1);
} catch(e) {
  console.log(e.message);
}

