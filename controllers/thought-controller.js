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

    // writeThought

    // deleteThought

    // addReaction

    // deleteReaction
}