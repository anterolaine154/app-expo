/*
Filename: SophisticatedCode.js
Description: This code is a sophisticated example that demonstrates various concepts and techniques in JavaScript.
*/

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to generate a random number within a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of names
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Array of Person objects
const people = [];

// Create Person objects with random names and ages
for (let i = 0; i < 10; i++) {
  const randomName = names[getRandomNumber(0, names.length - 1)];
  const randomAge = getRandomNumber(18, 60);
  
  const person = new Person(randomName, randomAge);
  people.push(person);
}

// Sorting people array by age in descending order
people.sort((person1, person2) => person2.age - person1.age);

// Printing each person's details
people.forEach(person => {
  person.sayHello();
});

// Calculate sum of ages using reduce function
const sumOfAges = people.reduce((sum, person) => sum + person.age, 0);
console.log(`Sum of ages: ${sumOfAges}`);

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Finding prime numbers between 1 and 100
const primeNumbers = [];
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

console.log("Prime numbers between 1 and 100:");
console.log(primeNumbers);

// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}

// Promises example
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeAsyncTasks() {
  console.log("Starting async tasks...");
  
  await delay(2000);
  console.log("Async task 1 complete.");

  await delay(1000);
  console.log("Async task 2 complete.");
  
  await delay(1500);
  console.log("Async task 3 complete.");

  console.log("All async tasks completed!");
}

executeAsyncTasks();