//first we need to create our user controller.
//this will be exported as one large variable with all of the noSQL methods we need modifying user data within.
//the very first thing we can do is require the user and thought models, with reactions nested

const { User, Thought } = require("../models");

const userController = {
    //well, what we do need? 
    //we will certainly want a get all users and findone user. we could also do with a delete, an update, and of course a create
    //first we can write our find all method. in nosql i believe this just uses the find method, which returns all queries 
    getAllUsers(req, res) {
        //this one should be about as simple as it gets. We find all object users and route this method to our get route in userRoutes
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //here we can do nearly the same thing, except that the findOne method takes in a parameter of the object id we are identifying by. in this case, it will be the id attribute for user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.id })
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json({ msg: "Sorry, we could not find a user matching that search." }));
        console.log(userData);
    },

    //create user will also be fairly straight forward. It will take whatever the request body is and define a json package as user with that data
    createNewUser(req, res) {
        User.create(req.body)
            .then((newUserData) => res.json(newUserData))
        console.log(newUserData)
            .catch((err) => {
                return res.status(500).json({ msg: "Sorry, something went wrong creating the new user." })
            })
    }
}