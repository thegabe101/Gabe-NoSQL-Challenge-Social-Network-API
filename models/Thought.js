//just like user js, we will require schema, model, and types this time 
//will require mongoose for the mongoose odm (object data modeling). This helps us translate betwene our model objects and their representations in mongoDB
const { Schema, model, Types } = require('mongoose');
//also will require moment package for date modeling on when "thoughts" are posted 
const moment = require('moment');
//we can either include our reactions schema here, or make a separate one. i think i will create a separate one and nest it here as an object key
const reactionsS = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtContent: {
        type: String,
        required: true,
        validate: {
            len: [0, 500]
        },
        //here is where we use moment. we set the default using the Data.now method provided by moment, then set our time format. 
        //we will use the get that accepts an argument as format long month, day of, year, and then the exact time of publishing
        timeMade: {
            type: Date,
            default: Date.now,
            get: (createdTime) => moment(createdTime).format('MMMM Do YYYY, h:mm:ss a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionsS]
    },
    {
        //note that getters and virtuals cannot be async. That could come into play
        //virtuals are not passed to JSON by default in mongoose, so we want to enable them here 
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
})