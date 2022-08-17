//here, the heavy lifting will be done by our controllers. this is different from in the past, where we plopped crud routes direcrlt into their respective paths
//TODO: get started on this one; will help you realize what other user controllers you need

//first, we need express. this is because we will still do pathing here- just not the functions themselves

const router = require('express').Router();

//now is where we can call all of our constructor functions from our controllers.
//we will call them to be imported as a group, because we need to then split them up and direct them to their correct paths

const {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user');
//never required for a variable like this before. don't see why it wouldn't work

//now we need to specify which crud methods these controller functions are using. 

router.route('/').get(getAllUsers).post(createNewUser);

module.exports = router;