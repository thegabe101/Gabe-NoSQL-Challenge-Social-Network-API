//here, the heavy lifting will be done by our controllers. this is different from in the past, where we plopped crud routes direcrlt into their respective paths
//TODO: get started on this one; will help you realize what other user controllers you need

//first, we need express. this is because we will still do pathing here- just not the functions themselves

const router = require('express').Router();

//now is where we can call all of our constructor functions from our controllers.
//we will call them to be imported as a group, because we need to then split them up and direct them to their correct paths


//changing user controller to user-controller since i seem to be having trouble importing it
const {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');
//never required for a variable like this before. don't see why it wouldn't work

//now we need to specify which crud methods these controller functions are using. 

//might consider changing these to multi-line for readability
//get all users, then post a new one

//api/users
router.route('/').get(getAllUsers).post(createNewUser);

//api/users/:id
//route method calls for get by id, delete by id, update by id
router.route('/:id').get(getOneUser).delete(deleteUser).put(updateUser);


// //api/users/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

//export the router
module.exports = router;