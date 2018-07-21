/** 
 * Object Destructuring
*/

// const person = {
//     name: 'Ianka',
//     age: 21,
//     location: {
//         city: 'Morada Nova',
//         temp: 92
//     }
// };

// //const name = person.name;
// //const age = person.age;

// const { name = 'Anonymus', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location
// if(temperature && city){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

/**
 * Array Destructuring
 */

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , medium] = item;
console.log(`A medium ${product} costs ${medium}`);