//this is where we will generate the user schema
//because this is a mongoose based project, we are generating a schema instead of a an init method model
//this also means we need to requrie mongoose, + any related model to user (in this case, Thought)

//this is how we tell our models to use mongoose
const { Schema, Model } = require('mongoose');
//here is where we require the thought model ill build in the other file
const Thought = require('./Thought');

//here is where we generate a user schema. 

const UserSchema = new Schema({
    username: {
        //notice for future ref we don't need to capitalize STRING here, unlike init model
        type: String,
        //want username to be unique
        unique: true,
        //require a username for all users
        required: 'A username must exist for each user.',
        //trim any white space entered
        trim: true
    },
    email: {
        //email is also a string
        type: String,
        //must also be unique
        unique: true,
        //here is where we will want to implement a regex in order to verify what is entered IS indeed an email address. I did this for homework, so I will implement the one I wrote here. 
        match: [
            /^([a-z0-9]{3,20})+@([a-z])+.([a-z]{2,3})$/,
            "You must enter a valid email address",
        ],
    },
    //now we will reference our thoughts model. this will utilize the object id for the model plus model "Thought". For our friends, we will simply reference other users. 
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    //now we need to implement our schema option for transforming the returned object and accessing it post-mongoose query as a JSON object.
    //we can do this with toJSON, where we want to access the properties but omit the id 
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});