//first we need to create our user controller.
//this will be exported as one large variable with all of the noSQL methods we need modifying user data within.
//the very first thing we can do is require the user and thought models, with reactions nested

const { User, Thought } = require("../models");

const userController = {
    //well, what we do need? 
    //we will certainly want a get all users and findone user. we could also do with a delete, an update, and of course a create
    //first we can write our find all method. in nosql i believe this just uses the find method, which returns all queries 
    //equivalent to our other GET routes /api/users
    getAllUsers(req, res) {
        //this one should be about as simple as it gets. We find all object users and route this method to our get route in userRoutes
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //equivalent to our other GET routes /api/users/:id
    //here we can do nearly the same thing, except that the findOne method takes in a parameter of the object id we are identifying by. in this case, it will be the id attribute for user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.id })
            .then(userData => res.json(userData))
            //if no user with id matching params is found
            .catch(err => res.status(500).json({ msg: "Sorry, we could not find a user matching that search." }));
        console.log(userData);
    },

    //equivalent to our other POST routes /api/users
    //create user will also be fairly straight forward. It will take whatever the request body is and define a json package as user with that data
    //we can refer to the model for our expected body input. it should look something like: 
    // username: 'input string'
    // email: 'input string'
    //shouldn't be anything else since this is a post route- we don't have thoughts, reactions quite yet 
    createNewUser(req, res) {
        User.create(req.body)
            .then((newUserData) => res.json(newUserData))
        console.log(newUserData)
            .catch((err) => {
                return res.status(500).json({ msg: "Sorry, something went wrong creating the new user." })
            })
    },

    //here we can make our update route
    //this should accept two arguments: the parameters the user is being sought out by, and the body being updated  
    //we could also use the $set method here in the form of {$set: req.body}
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: req.params.id }, body, { new: true, runValidators: true })
            .then(updateUserData => {
                if (!updateUserData) {
                    res.status(404).json({ msg: "We're sorry- no user by that name was found in our database." });
                    return;
                    //would have been cleaner to use a turnery operator here. chose to do it this way but next time should try:
                    // ? res.status(404).json({msg}) : res.json(data)
                }
                res.json(updateUserData);
            }).catch(err => res.status(400).json(err));
    }
}