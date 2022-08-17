const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


//our reactions will roughly mimic our thought js but i think they need to be given an id. not sure. IF they require an id, they will use the object id mongo provides
const reactionsS = new schema({
    reaction_id: {
        type: Schema.Type.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionContent: {
        type: String,
        required: true,
        validate: {
            len: [0, 300]
        }
    },
    username: {
        type: String,
        required: true
    },
    //time made can follow same format as thoughts 
    timeMade: {
        type: Date,
        default: Date.now,
        get: (timeWritten) => moment(timeWritten).format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
});


//export model for use in thought schema; did it this way for separation of concerns and to keep the models a little easier to read. 
module.exports = reactionsS;