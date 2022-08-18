//requirements first
//will need express, route folder, and mongoose
//TODO: FIGURE OUT WHAT IS MISSING HERE. SOMETHING IS GOING WRONG IN THE SERVER FILE? MIDDLEWARE?

const express = require('express');
// const routes = require('./routes');
const mongoose = require('mongoose');
const connection = require('./config/connection')


//now we will want to declare our app, port, and instate our middleware

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//is the reason im having server issues no public static middleware??
app.use(express.static('public'));
// app.use(routes);
app.use(require('./routes'));

//now we will call our mongoose.connect method
//this accepts two arguments: the uri and the options argument. 
//for options, we can use dbname and specify which database to connect to, which will override the connectionn string
//in this case, we call both: the mongoose URI and the name of our social network db 

//we can then use the mongoose.set debug method to make sure all mongoose collection methods and arguments are being logged to the console

mongoose.set('debug', true);

//finally, we open our port just like our other servers previously


//hey a one line piece of code!
//NEVERMIND! when using mongoose make sure you just write 'open' in the connection log 
connection.once('open', () => {
    app.listen(PORT, () => console.log(`The social network is now live at localhost:${PORT}`))
});

