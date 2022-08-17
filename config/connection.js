//exporting to server instead of connection within server
//not sure 


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hey-another-social-network', {
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
});

module.exports = mongoose.connection;