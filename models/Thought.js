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
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
})