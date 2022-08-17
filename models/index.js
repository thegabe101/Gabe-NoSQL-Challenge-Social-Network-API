//next we'll want to make our models

//the nice thing is that should be pretty simple for this project. going to adhere to the guidelines on uw bootcamspot.

//first we can create an index. it looks like we'll only need two references- one to thought and one to user
//then we can export them for use outside of this folder


const User = require('./User');

const Thought = require('./Thought');

//adding reaction model after deciding to form it separately. probably not necessary due to import to user model but can't hurt to include for now
// const Reaction = require('./Reaction');

module.exports = { User, Thought };