const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

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
    timeMade: {
        type: Date,
        default: Date.now,
        get: (timeWritten) => moment(timeWritten).format('MMMM Do YYYY, h:mm:ss a')
    },
    {
        toJSON: {
            getters: true
        }
    }
})