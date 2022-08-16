const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
//don't need reaction routes because reactions will be retrieved within the thought fetch 

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;