// Select the database to use.
use('mongodbVSCodePlaygroundDB');

db.createCollection('movies');

// Insert categories into the database
db.categories.insertMany([
    {
        name: 'Title',
        children: [
            { name: 'Genre' },
            { name: 'Actors' },
            { name: 'Description' },
            { name: 'Year' },
            { name: 'RunTime' }
        ]
    }
]);

db.movies.insertOne({
  Title: 'The Truman Show',
  Director: 'Peter Weir',
  Actors: ['Jim Carrey', 'Ed Harris', 'Laura Linney'],
  Description: 'An insurance salesman discovers his whole life is actually a reality TV show.',
  Genre: ['Comedy', 'Drama', 'Sci-Fi'],
  Year: '1998',
  Runtime: '103 min'
});


// Print a message to the output window
print('Movie categories inserted into the database.');

// Create a new collection for storing user information
db.createCollection('users');


db.categories.insertMany([
  {
      name: 'User',
      children: [
          { name: 'FirstName' },
          { name: 'LastName' },
          { name: 'Email' },
          { name: 'Username' },
          { name: 'Password' }
      ]
  }
]);

// Insert user data into the users collection
db.users.insertOne({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  username: 'johndoe',
  password: 'hashedpassword' // Note: Passwords should always be securely hashed before storing
});

// Print a message to the output window
print('User information inserted into the database.');
