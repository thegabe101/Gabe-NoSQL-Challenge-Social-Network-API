//just like user js, we will require schema, model, and types this time 
//will require mongoose for the mongoose odm (object data modeling). This helps us translate between our model objects and their representations in mongoDB, giving them mongoose structure
const { Schema, model, Types } = require('mongoose');
// const mongoose = require('mongoose');
//also will require moment package for date modeling on when "thoughts" are posted 
const moment = require('moment');
//we can either include our reactions schema here, or make a separate one. i think i will create a separate one and nest it here as an object key
const reactionsS = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtContent: {
        //minlength and maxlength may work as well if this validate doesn't work
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
        // validate: {
        //     len: [1, 500],
        // },
        //here is where we use moment. we set the default using the Data.now method provided by moment, then set our time format. 
        //we will use the get that accepts an argument as format long month, day of, year, and then the exact time of publishing
        timeMade: {
            type: Date,
            default: Date.now,
            get: (createdTime) => moment(createdTime).format('MMMM Do YYYY, h:mm:ss a'),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionsS],
    },
    //note that getters and virtuals cannot be async. That could come into play
    //virtuals are not passed to JSON by default in mongoose, so we want to enable them here 
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

thoughtSchema.virtual("reactionCounter").get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 