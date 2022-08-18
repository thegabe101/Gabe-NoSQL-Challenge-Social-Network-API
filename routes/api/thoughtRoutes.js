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
router.route('/').get(getAllThoughts).post(writeThought);


//id will do the picky things- update, delete, and get single
// router.route('/:id').get(getSingleThought).put(changeThought).delete(deleteThought);

//try these first and then build reaction routes 

module.exports = router; 