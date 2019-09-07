// require express
const express = require('express');
const app = express();

//require routes
const router = require('./routes/routes');

//set port number
const PORT = process.env.PORT || 3000;

//require('./models/db.js');

//require controller
const controller = require('./controllers/controller.js')


// Set the view engine
app.set('view engine','ejs');

//set the dir
app.use(express.static(__dirname));


//use router
app.use('/',router);

// Start the app at the Port point
app.listen(PORT,function(){
    console.log(`Express listening on port ${PORT}`);
});

//testing api
//controller.addartifact();
//controller.getAllArtifacts();
//controller.getOneArtifact({_id: '5d725bdff18690df4098211f'});