
// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });


// database.ref('expenses').push({
//     description: 'Rent July',
//     note: '',
//     amount: 100000,
//     createdAt: 1654623236
// });

//database.ref('notes/-LIJKz_UwXdwnP6NWeQV').remove();

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React native, Angular, Python.'
// });

// const firebaseNotes = {
//     notes: {
//         apsjdsk: {
//             title: 'First note!',
//             body: 'This is my note.'
//         },
//         lkjdfsfn: {
//             title: 'Another note!',
//             body: 'This is my note.'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First Note!',
//     body: 'This is my note.'
// }, {
//     id: '153sda',
//     title: 'Anothe Note!',
//     body: 'This is my note.'
// }];

// database.ref('notes').set(notes);

// Adding data to database

// database.ref().set({
//     name: 'Ianka Karúzia', 
//     age: 21,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Casa Magalhães'
//     },
//     location: {
//         city: 'Morada Nova',
//         country: 'Brasil'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// Updating database

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Instituto Atlântico',
//     'location/city': 'Fortaleza'
// });

// Removing data from database

// database.ref().remove().then(() => {
//     console.log('removido');
// }).catch(error => {
//     console.log('erro ao remover valor. ', error);
// });

// Fetching data from database

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// setTimeout(() => {
//     database.ref('job/company').set('Casa Magalhães');
// }, 3500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(error => {
//         console.log('error fetching the data', error);
//     });
