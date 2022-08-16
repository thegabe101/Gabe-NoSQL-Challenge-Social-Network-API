//requirements first
//will need express, route folder, and mongoose


const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

//now we will want to declare our app, port, and instate our middleware

const PORT = process.env.PORT || 3000;
const app = express();
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//now we will call our mongoose.connect method
//this accepts two arguments: the uri and the options argument. 
//for options, we can use dbname and specify which database to connect to, which will override the connectionn string
//in this case, we call both: the mongoose URI and the name of our social network db 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hey-another-social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//we can then use the mongoose.set debug method to make sure all mongoose collection methods and arguments are being logged to the console

mongoose.set('debug', true);

//finally, we open our port just like our other servers previously

app.listen(PORT, () => console.log(`The social network is now live at localhost:${PORT}`));