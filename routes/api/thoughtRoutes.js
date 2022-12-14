//very similar to our userroutes, once we get the controller working

//reactions plays the same data role as friends here 

const router = require('express').Router();


//love how thought controller sounds like im building mind control
const {
    getAllThoughts,
    getSingleThought,
    writeThought,
    changeThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');


//base route can get all and write 
//this is actually erroneous. i think after experimentation we need to separate get and post- the post needs a specific user id fed to it. 
// router.route('/').get(getAllThoughts).post(writeThought);
router.route('/').get(getAllThoughts);

//here is the route that will post a specific thought to a specific user
//route is /api/thoughts/:userid
router.route('/:userId').post(writeThought);


// /api/thoughts/thoughtId/objectid
//id will do the picky things- update, delete, and get single
//these may not have been working because i was writing the path wrong. it needs to be thoughtId instead of id due to the parameters in the crud function
router.route('/:thoughtId').get(getSingleThought).put(changeThought).delete(deleteThought);

//try these first and then build reaction routes 


// /api/thoughts/thoughtId/reactions
//need to be careful about these paths in insomnia
router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router; 