//very similar to our userroutes, once we get the controller working

//reactions plays the same data role as friends here 

const router = require('express').Router();


//love how thought controller sounds like im building mind control
const {
    getAllThoughts,
    getSingleThought,
    writeThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');