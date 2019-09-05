// Create Database
const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb+srv://qifan:donotmovethefurniture@cluster0-wdsdl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
} catch (error) {
    console.log('fall to connect to mongodb');
}

//require the schemas
require('./user.js');
