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

    writeThought(req, res) {
        Thought.create(req.body)
            .then((Thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: Thought._id } },
                    { new: true }
                );
            }).then((User) =>
                !User ? res.status(404).json({ msg: "A thought has been recorded but no user was found" })
                    : res.json('Thought recorded')
            ).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },


    // deleteThought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.ThoughtId })
            .then((Thought) =>
                !Thought
                    ? res.status(404).json({ msg: "Sorry, no thought with this id has been found in our database." })
                    : Thought.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            ).then((User) =>
                !User
                    ? res.status(404).json({ msg: 'Sorry, no user with that id has been found in our database.' })
                    : res.json({ msg: 'Thought deleted.' })
            ).catch((err) => res.status(500).json(err));
    },

    //changeThought
    changeThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, New: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "Sorry, no matching thought was found in our database." })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // addReaction
    //these final two crud functions should look nearly identical. 
    //We are either updating a reactopm or deleting it; in the case of update, we are pushing it onto the array of reactions contained by that thought.
    //however, we don't use push but addtoset, unique to mongoose i believe
    //for delete, we can use $pull. The big difference is when updating, we are posting to the body of the reaction;
    //when deleting we are querying by the reactions id and pulling it from the array
    //in both cases we use a turnery function to check if the object id exists. throw an error if not, or update/delete.
    //otherwise, we can throw a server error. 
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        ).then((Thought) =>
            !Thought
                ? res.status(404).json({ msg: 'Sorry, no thought with that id has been found in our database.' })
                : res.json(Thought)
        ).catch((err) => res.status(500).json(err));
    },
    // deleteReaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "Sorry, no matching reaction found in our database." })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

}

module.exports = thoughtController;