const { User, Thought } = require("../models");

//for thoughts, i believe we could do this several different ways.
//my first thought is to select and sort. we learned about .sort in class and i wonder if i could sort all thought by id
//the issue with select is I am not sure where to select. do i select the version or do i select the id?

const thoughtController = {

    //for all, i suppose we theoretically dont need to do any selecting.
    //we can simply find all thoughts from all users
    getAllThoughts(req, res) {
        Thought.find({})
            .then((thought) => {
                res.status(200).json(thought)
            }).catch((err) => {
                res.status(500).json({ msg: "Sorry, something went wrong getting that thought." })
            })
    },
    //TODO: don't keep forgetting the commas when closing these functions- it causes hard to fix syntax errors later

    //i suppose we can try getting the thought by id before trying anything more funky.
    //in that case we will use params, not req
    getSingleThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then((thoughtData) => res.json(thoughtData))
            .catch((err) => {
                console.log('this method is working')
                res.status(500).json(err);
            });
    },

    //lets push and go see if these are functional in the routing before moving on- i need to research $ methods in mongoose anyways
    //before that, need to add routing method calls

    // writeThought({ params, body }, res) {
    //     Thought.create(body).then(({ _id }) => {
    //         return User.findOneAndUpdate(
    //             //this is feeding back everything as ok except the username match. it seems the id is undefined. i think i made a mistake and need to use params, not body
    //             // { _id: body.userId },
    //             {_id: req.body.id},
    //             // { _id: params._id },
    //             { $push: { thoughts: _id } },
    //             { new: true },
    //         )
    //     }).then((userThoughtData) => {
    //         if (!userThoughtData) {
    //             res.status(404).json({ msg: "Sorry, that user was not found in our database." })
    //             return;
    //         } res.json(userThoughtData);
    //     }).catch((err) => res.json(err));
    // },


    // writeThought(req, res) {
    //     Thought.create(
    //         { thoughtContent: req.body.thoughtContent, username: req.body.username },
    //         (err, results) => {
    //             if (err) throw err;
    //             res.json(results);
    //         }
    //     )
    // }


    // deleteThought

    // addReaction

    // deleteReaction
};

module.exports = thoughtController;