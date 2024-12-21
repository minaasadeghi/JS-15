// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

const printPersons = (persons) => {
  const container = document.createElement('div'); 
   persons.forEach(person => {
    const personInfo = document.createElement('p'); 
     personInfo.textContent = `Name: ${person.name}, Age: ${person.age}`; // Set the text content
    container.appendChild(personInfo); 
   });
  document.body.appendChild(container); 
};

printPersons(persons);