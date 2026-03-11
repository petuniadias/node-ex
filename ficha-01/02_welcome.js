let userName = process.env.USER_NAME;

if (userName) {
    console.log('Hello, ' + userName + '. Welcome to Node!');
} else {
    console.log('Hello, visitor! Set the USER_NAME variable for a personalized greeting.');
}

// correr com USER_NAME=Petunia node 02_welcome.js