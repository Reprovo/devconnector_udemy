const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile')

// @route GET api/profile/me
// @desc Get current users profile
// @access Private
router.get('/', async (req, res) =>{
    try{
const profile = await
    }catch(err){
console.error(err.message);
res.status(500).send('Server Error')
}
});

module.exports = router;
