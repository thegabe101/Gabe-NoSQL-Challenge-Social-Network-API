// front end routes for render and redirect to api routes

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('./api', apiRoutes);

//if server does not connect for any reason
// router.use((req, res) => {
//     res.status(404).send({ msg: "Sorry, the server was unable to connect." });
// });
router.use((req, res) => {
    res.send('Wherever this is, it\'s the wrong place!');
});

module.exports = router; 